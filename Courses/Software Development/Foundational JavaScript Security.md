---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: foundational-javascript-security
url: "https://www.linkedin.com/learning/foundational-javascript-security"
duration_minutes: 47
duration: 47m
level: Advanced
updated: 5/26/2021
learners: 48396
skills:
  - Software Development Security
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFTnZJFpUakJA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621887367981?e=2147483647&amp;v=beta&amp;t=yaencqdRBWRKKsHReVSHhtw-WdQFF-pfMwgHC52k_Zg"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[ESLint- Customizing Styles]]'
next_courses:
  - '[[Learning JavaScript Debugging]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":7,"total":10,"prev":"ESLint- Customizing Styles","next":"Learning JavaScript Debugging"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/software-development-security
  - skill/javascript
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Foundational%20JavaScript%20Security.md)

![Foundational JavaScript Security](https://media.licdn.com/dms/image/v2/C560DAQFTnZJFpUakJA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621887367981?e=2147483647&amp;v=beta&amp;t=yaencqdRBWRKKsHReVSHhtw-WdQFF-pfMwgHC52k_Zg)

# Foundational JavaScript Security

> JavaScript offers great power, but also many opportunities to leave doors open to hackers. Ethical hacking lets you find those open doors before they can be exploited and ensure that your sites and applications stay standing. This course shows how to improve security on your JavaScript projects using a wide variety of testing tools that provide maximum coverage. Emmanuel Henri starts by showing ho

> [LinkedIn Learning](https://www.linkedin.com/learning/foundational-javascript-security) | 47m | Advanced | 48K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Foundational JavaScript security](#foundational-javascript-security)
  - [What you should know](#what-you-should-know)
- [**1. Introduction and Setup**](#1-introduction-and-setup) (6 videos)
  - [What is ethical hacking?](#what-is-ethical-hacking)
  - [Overview of cyber kill chain](#overview-of-cyber-kill-chain)
  - [Plan an attack strategy](#plan-an-attack-strategy)
  - [Base project setup](#base-project-setup)
  - [Challenge: What is ethical hacking?](#challenge-what-is-ethical-hacking)
  - [Solution: What is ethical hacking?](#solution-what-is-ethical-hacking)
- [**2. Reconnaissance**](#2-reconnaissance) (7 videos)
  - [Reconnaissance introduction](#reconnaissance-introduction)
  - [Introduction and setup for Snyk](#introduction-and-setup-for-snyk)
  - [Introduction to GitHub Dependabot](#introduction-to-github-dependabot)
  - [Introduction to AppSensor](#introduction-to-appsensor)
  - [Reconnaissance applied to project](#reconnaissance-applied-to-project)
  - [Challenge: What is the purpose of reconnaissance?](#challenge-what-is-the-purpose-of-reconnaissance)
  - [Solution: What is the purpose of reconnaissance?](#solution-what-is-the-purpose-of-reconnaissance)
- [**3. Top Security Threats**](#3-top-security-threats) (10 videos)
  - [Injection threat](#injection-threat)
  - [Broken authentication](#broken-authentication)
  - [Sensitive data](#sensitive-data)
  - [XML external entities](#xml-external-entities)
  - [Security misconfiguration](#security-misconfiguration)
  - [Insecure deserialization](#insecure-deserialization)
  - [Components with known vulnerabilities](#components-with-known-vulnerabilities)
  - [Insufficient logging and monitoring](#insufficient-logging-and-monitoring)
  - [Challenge: What is the best resource for top threats?](#challenge-what-is-the-best-resource-for-top-threats)
  - [Solution: What is the best resource for top threats?](#solution-what-is-the-best-resource-for-top-threats)
- [**4. Security Threats Applied**](#4-security-threats-applied) (8 videos)
  - [Injection threat resources](#injection-threat-resources)
  - [Broken authentication resources](#broken-authentication-resources)
  - [Sensitive data exposure resources](#sensitive-data-exposure-resources)
  - [XML external entities resources](#xml-external-entities-resources)
  - [Security misconfiguration resources](#security-misconfiguration-resources)
  - [Secure deserialization resources](#secure-deserialization-resources)
  - [Challenge: What is secured deserialization?](#challenge-what-is-secured-deserialization)
  - [Solution: What is secured deserialization?](#solution-what-is-secured-deserialization)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Foundational JavaScript security](https://www.linkedin.com/learning/foundational-javascript-security/foundational-javascript-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/foundational-javascript-security?u=76281980&t=0)** - [Manny] Have you ever wondered how vulnerable your website or application is? Are you a [[JavaScript]] developer with little to no experience in hacking or security measures? If you've answered yes to either of these questions, you've come to the right place. In this course, my objective is to provide you with a foundation in reconnaissance and security tools. This will give you the basic skills to assess common security threats. You'll also learn how to anticipate threats and improve your [[Security Awareness]] in order to reduce how vulnerable your JavaScript code might be. Hi, I'm Manny Henri and security is always top of mind when I build new applications, so if you're ready to increase the security of your JavaScript code, rev up your engines and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3), [[Security Awareness]] (1)
> **Speakers:** - [manny] (1)

#### [What you should know](https://www.linkedin.com/learning/foundational-javascript-security/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, you don't need to have prior knowledge in security. It can be taken as a first step into getting more security skills. However, I strongly recommend to have a solid foundation in [[JavaScript]] programming, as you will get lost if you don't understand the code I use to demonstrate the security issues. In most cases, if you understand JavaScript and are able to build code without constantly go back to references, you'll be fine to take this course. Otherwise, I suggest you take some basic courses in JavaScript essentials and mid-level courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [What is ethical hacking?](https://www.linkedin.com/learning/foundational-javascript-security/what-is-ethical-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/what-is-ethical-hacking?u=76281980&t=0)** - [Instructor] Whenever people think about hacking, they think about guys sitting behind their computers would a hoodie, ready to do no good and destroy computer resources and do all kinds of activities for their own interest. In several cases, that would be correct, and these type of hackers are referred to as black hat hacking. These hackers will use all kinds of techniques to access privileged data or destroy the same data, all for their own benefit, in other words, unethical hacking, but what is [[Ethical Hacking]]? It's the complete opposite of what we just looked at. Hackers following ethical hacking use the same techniques but only to determine if the resources are vulnerable to threats or not. These hackers are called white hat hackers. Let me repeat. Ethical hacking is the practice of using the same methods and tools to define if there might be vulnerabilities into the code or network, and companies pay for these services so they understand if they could be in danger of being attacked. Typically, an ethical hacker will get hired by a company. Then the hacker will do some reconnaissance to determine if there are any open doors for them to exploit and then exploit these doors to figure out what data or resources they could damage or pull. Then they report their findings to the company along with recommendations how to eliminate this system weakness, and that is ethical hacking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (4)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Overview of cyber kill chain](https://www.linkedin.com/learning/foundational-javascript-security/overview-of-cyber-kill-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/overview-of-cyber-kill-chain?u=76281980&t=0)** - [Instructor] Cyber Kill Chain is a framework that was developed by Lockheed Martin and a great example of how to plan an attack as an ethical hacker. There are many ways to approach this framework and once you're done with this video, I strongly recommend you visit their website. They have great documentation and many examples how it can be used. But as an introduction, here is an overview of the framework. Any attack starts with reconnaissance, figuring out who or where we could plan an attack. For example, you could be harvesting lists of emails or information from social sites. And this step, the attacker also looks for potential areas he could explore vulnerabilities in an application, system or network. Then the attacker moves to weaponization, building the tool or a code that will exploit the vulnerability and to be delivered to the resources we've gathered in the reconnaissance step. Next is the delivery step where an attacker will send a Trojan, virus, or whatever weapon he's programmed through emails, social communication channels, texts, et cetera. In the next step, the attacker exploits the vulnerability he found in the reconnaissance stage through the communication channels. In step five, the tool is installing malware or code into the system, application or network to be able to exploit these resources. This is where a user may have clicked on the link and a tool installed itself in the background without his knowledge. Then the tool install would eventually take over and command a resource in question.
>
> **[1:35](https://www.linkedin.com/learning/foundational-javascript-security/overview-of-cyber-kill-chain?u=76281980&t=95)** A good example is how a hacker was able to control the temperature levels and the server environment and overheated the entire room, which eventually overheated and shut down the server [[Hardware]]. And finally, once the resources control by the hacker, he takes over and pulls whatever data he was after and holds ransom over the resources in one manner or another for his own benefit. The goal of this framework is to determine what proper steps need to be taken on resources under threat at any of these stages, but also how to prevent the attacker from going any further in this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Plan an attack strategy](https://www.linkedin.com/learning/foundational-javascript-security/plan-an-attack-strategy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/plan-an-attack-strategy?u=76281980&t=0)** - [Instructor] As a proper followup to the cyber kill chain, an ethical hacker always needs a plan, which he typically presents to his client. The plan of attack consists in properly determining what are going to be the steps to evaluate the resources are vulnerable or not. When a white hat hacker is hired to evaluate specific resources, the plan needs to be customized to fit this approach. So let's say we were hired to evaluate an application's vulnerabilities. Let's take a look at what this plan will look like. Reconnaissance, which is step one, evaluate vulnerabilities of the application's code database access to users. Then step two is to create the script tool for exploiting the resources. Step three, send the exploit or upload to the application database. And step four, install the tool or code in the application. And typically, at this point, a tool would probably make some minor changes into the code without hurting the application at large, so the hacker could demonstrate success of the exploit and how dangerous it could be. The next step, which is step five, would be to report to the client what recommendations, or code, or system changes need to be done in order to improve the [[Application Security]]. So as you determine how you could evaluate your application's vulnerabilities or your client's, have a plan of attack in place and communicate it to all stakeholders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Security]] (1)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Base project setup](https://www.linkedin.com/learning/foundational-javascript-security/base-project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/base-project-setup?u=76281980&t=0)** - [Instructor] I have included in this course a base project, just as a template to look out for the code and evaluate certain areas as we go through the course. This won't be a course where we deeply go into the code, but we'll simply use certain parts for demonstration purposes. Feel free, and I strongly recommend it, to use your own applications as we go through the examples. So, if you're not using your own application, in the Exercise Files, you can go into the Resources here and you'll find a sample project here. So what I'd recommend is to drop this into your preferred editor. In this case, I'm using Visual Studio Code. So what I'm going to do is simply go and drop that project inside of Visual Studio Code, like so, and then what you're going to do is basically install the dependencies if we want to take a look at it. So this is not required. You don't need to install the dependencies to actually be successful in this course. But if you want to, you can go ahead and do that. So basically, this is a project that came from another course of mine, where we actually built a news aggregator and what you can do, if you want to take a look at it, we can actually bring up the terminal. So let's go and click on terminal, new terminal, and then do it [[npm]] i to install or install, like so, and then let's go ahead and do an npm start, and you'll see what I've built. So this is basically a base application that I've built and you can use this for the purposes of this course, but you don't need to if you want to use
>
> **[1:33](https://www.linkedin.com/learning/foundational-javascript-security/base-project-setup?u=76281980&t=93)** your own application. This is basically just code to look at. Okay, so now that we have the template, let's go ahead and move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2)
> **Tools:** terminal (3), visual studio (2)
> **Prerequisites:** install (4)
> **CLI Commands:** npm (2), find (1)
> **Exercise Files:** template (2), exercise files (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: What is ethical hacking?](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-ethical-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-ethical-hacking?u=76281980&t=0)** (bright music)
>
> **[0:07](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-ethical-hacking?u=76281980&t=7)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we discuss [[Ethical Hacking]] and white hat hacking. So here's the question. What exactly is white hat hacking? Think about what you would answer, and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: What is ethical hacking?](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-ethical-hacking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-ethical-hacking?u=76281980&t=0)** (lively music) (lively music ends)
>
> **[0:07](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-ethical-hacking?u=76281980&t=7)** - [Instructor] The answer for the question was in the video where we go over [[Ethical Hacking]]. Without going over everything we did in that video, this is the main point we were looking for. Ethical hacking is the practice of using the same methods and tools to find if there might be vulnerabilities into the code or network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2)
> **Non-Speech:** (lively music) (1), (lively music ends) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 2. Reconnaissance

[↑ Back to Table of Contents](#table-of-contents)

#### [Reconnaissance introduction](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-introduction?u=76281980&t=0)** - [Instructor] The goal of doing reconnaissance is to be able to figure out what a set of common tools, if there are any issues or open doors for hackers to exploit. In this stage, you valuate your code. So the best way to do this is to do an [[npm]] install or NPM audit, which we'll explore a little bit later on. So let's first start with NPM install. And the very first step is to go through any messages the console log could be telling you. When there are messages related to dependencies being deprecated, act on them immediately, especially at the first level. So if we take a look at the package.[[JSON]] file here we have some dependencies that we install into our project. So some of these messages will be related to dependencies within any of those packages. But what we're looking for is the phase packages that we've installed. If there's any issues on those 'cause you've been basically using the same package for a while, but haven't updated the latest version of it. Then please do update to latest version. So that's the first thing I would look for. So basically scroll up and take a look at the warnings and the errors and make sure that you have the latest and the greatest. So for example we have, let's scroll up. And these are pretty standard errors here. So we should be fine. But if you had a major issue with one of the dependencies so warning is not an issue, but if there's a warning you can take a look at it. So this version here, AJV keywords @3.5.2
>
> **[1:36](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-introduction?u=76281980&t=96)** requires a peer of blah, blah, blah. But this is not one on the main packages that we have installed in our dependencies here. So it's not a big issue, but it could become an issue. So that means that within one of these packages something needs to be be updated, like this one. So the other area you want to take a look at is where you see here found 93 vulnerabilities, 50 low, 18 moderate, and 25 high. So to get more details on those and these include all the packages within these dependencies is to run an NPM audit. So if you do a fix, it's going to fix the dependencies and there might be some issues with your own packages here and your application may break. So I would do that lightly or make copies or use [[GitHub]] or any versioning tool that you can use to actually go back in time if you make a mistake by updating one of these dependencies. So let's go ahead and do an NPM audit first, like so. And I'm going to bring my terminal higher like so and then you'll see more details. So the low it's okay, but the high this is where you're going to start taking a look at. So try to figure out what is the issue, so insufficient entropy you can actually take a look at what this means in the more info here. And if you want to basically understand what this means you can click on the link here and get more information on it.
>
> **[3:08](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-introduction?u=76281980&t=188)** And what you need to do is go through these here and try and understand what could be an issue for your application down the road. If it's not breaking your application right now it could become an issue down the road. So the one thing you want to do is go through that report and read all the issues that are high. And then from your understanding, take actions either update the packages or trying to figure out with the owner of that package. In this case, one of those four trying to understand what is the roadmap to update these dependencies within their own packages. Then what you want to do is also use the latest version of your own dependencies, because if you're not you may be opening yourself to security issues. And also if you update your dependencies and they break your code, you need to also figure out why in most cases, the owner of this package fixed some inherent issues in the code. And you may want to update your syntax to the latest if anything breaks your own application. So if you take a look at the current messages, most likely if we update the [[React.js|react]] dependencies we may avoid these messages. The advantage that you have over a hacker is the ability to see your code and therefore improve it. If any danger lurks in your application. Linters are good to help improve your writing style and cleanliness of your code. But in most cases, they won't catch security issues. You need better tools for that.
>
> **[4:41](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-introduction?u=76281980&t=281)** And this is where tools like Snyk, Retire.JS and App Sensor comes into play and we'll explore these tools shortly. So the exercise done in this chapter are exactly for this purpose to do some reconnaissance of your code and figure out any potential dangers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (5), [[JSON]] (1), [[GitHub]] (1), [[React.js|React]] (1)
> **CLI Commands:** npm (5), make (3)
> **Env Vars:** npm (5), ajv (1)
> **UI Navigation:** scroll up (2), click on (1)
> **Prerequisites:** install (3)
> **File Paths:** package.json (1), retire.js (1)
> **Tools:** github (1), terminal (1)
> **Warnings:** warning (2)

#### [Introduction and setup for Snyk](https://www.linkedin.com/learning/foundational-javascript-security/introduction-and-setup-for-snyk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/introduction-and-setup-for-snyk?u=76281980&t=0)** - [Instructor] Snyk is a great tool to help identify potential issues in your dependencies. It does it automatically as you make updates to your repository. It provides a lot more details on vulnerable dependencies, then you get with [[npm]] audit and the specific exploit that could occur. So let me demonstrate how it works. So if you don't have an account, what you can do is click on, Sign Up For Free and it's going to basically give you the steps to connect to your [[GitHub]] account. In this case, I'm already connected, so I'm going to log in and then I'm going to be on the Dashboard. So the first time you actually log in, you're not going to have this dashboard with issues here and things like that. You need to connect a project to it, so you need to add a repo. So the way to do that is to click on Add project, like so, and then select one of the options here. You can actually do it by [[CLI]] and you can monitor it by GitHub. So I'm going to go to GitHub which is basically what I'm using and then within your council like the repos that you'd like to include. So let's say for example, I wanted to include hello world and then include [[React.js|react]] example. I could literally connect these by simply checking them here and then add select repositories, like so, but I'm not going to continue because I already added one. Once you added a repos to your dashboard, you can either click on Dashboard or go to Projects and you're going to see their projects here with some issues. So the way to go to the issue report is to click here and then select the file that they have issues with.
>
> **[1:35](https://www.linkedin.com/learning/foundational-javascript-security/introduction-and-setup-for-snyk?u=76281980&t=95)** So in this case, there's this one here, package.[[JSON]] which is typically the one that's been basically shown in a [[JavaScript]] project because this is where the dependencies are listed. You're going to see that there's six severe issues 10 medium, and two low. By clicking on the actual file, you're going to see a lot more details as to what are the issues and you can then filter by High, Medium or Low in this report here. So what I'm going to do is select just High just to see what's happening here and then you're going to see all the high issues that are part of the project. So in this case, we're seeing a little bit more of what we saw in the NPM audit. The major difference is, that we know where it's originated from. So the AGV is something that we saw earlier but we didn't know where it came from. Now we do, because it's from the react scripts. So this way we can actually go to the owner of that repo, which is in this case [[Facebook]] and then let them know there might be an issue, a high, a security issue with one of your packages that you're using in your react scripts repo, and maybe open a PR. And then in here you can click to see more details about that specific issue here. What are the, basically the details of that issue? And if you want to have even more detail you can click here and see it a bit more. If you don't understand any of this, then what you could do is do a [[Google]] search around all these issues. So prototype pollution, what is it?
>
> **[3:10](https://www.linkedin.com/learning/foundational-javascript-security/introduction-and-setup-for-snyk?u=76281980&t=190)** And how does it impact your application in the end? And then you can do this for every single issues that you have either high or medium. I would always take a look at medium as well because sometimes medium issues can become high because they're basically a script ejections or denial of service, potential issues, things like that. You want to take a look at all these issues to make sure that your application is as safe as possible for you users. And once you determine what are these issues, you can actually open a PR within. So partially fix this vulnerability, if you click on that, it's going to basically open up a PR for that particular package and partially fix it for you. And this is why in the dashboard I had all these PRs open for that particular body test repo. Because it's taking a long time, what I'm going to do is just simply go to Dashboard and you'll see, I have a couple of PRs that are open for that particular one where I'm fixing all these issues here and I can actually apply those PRs to my own version of that repo, so I could actually fix those issues myself. So this is what Snyk offers you, a lot more information about any issues you may have with your application, and the dependencies within your application and how to fix them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[React.js|React]] (3), [[npm]] (2), [[CLI]] (1), [[JSON]] (1)
> **UI Navigation:** go to (5), click on (4), select the (1)
> **CLI Commands:** make (2), npm (2)
> **Env Vars:** npm (2), cli (1), agv (1)
> **Tools:** github (3)
> **File Paths:** package.json (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Introduction to GitHub Dependabot](https://www.linkedin.com/learning/foundational-javascript-security/introduction-to-github-dependabot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/introduction-to-github-dependabot?u=76281980&t=0)** - [Manny] [[GitHub]] has recently added a nice tool to evaluate your dependencies for free and provide some alerts when there are some issues with a specific package in the application. So let's take a look at it. So what I'm going to do is select any of my repos and go, for example, to [[React.js|react]] example and the way you actually enable Dependabots is by going to security and once you get to security; in this area you have a few things. So first you have security policies, which you can set. What are the advisories inside of that particular repo? And then you see Dependabots alert and this basically will take a look at your dependencies and let you know when there are vulnerabilities inside of one of your dependency. Pretty much what we got with Snick, but directly on the repos with this one here. So as you can see right now it's enabled for me, but if it wasn't, you would see a button here that said enable. Once you click on it, it would look something like this. So let me just go back to my settings. Go to security and you would see these three things here. So what you want to do is enable all this. By enabling all this, you're going to get reports as soon as something is wrong with one of your applications. So what I would recommend is to turn it on on all your repos and I believe it automatically turns it on for all your dependencies in all your applications once you actually turn it on for one. I can't really confirm that but I haven't turned it on
>
> **[1:36](https://www.linkedin.com/learning/foundational-javascript-security/introduction-to-github-dependabot?u=76281980&t=96)** for all my repos and they're actually on. So if I would go to any other applications here, so react patterns for example and go to security. I have it turned on here and what's cool about those Dependabot alerts, if you have any, you can actually go and you see that there's 60 here. So if I click on it, I would see all the issues, pretty much like what we got with Snick. So all the high issues, moderate, and low and then what you could do is click on the issue itself, what it is, where it is from, and more details about it. So this is another nice way to understand what's happening with the applications, the dependencies that you're using because that's one of the biggest issue in an application is you don't control the code of the dependencies. You control your own code, so what you build, but when you have multiple dependencies, and you don't control the code, there could be open issues inside of your application and just think about the fact that inside of those packages, they're using other packages. So for example, react scripts is using so many other packages inside of its own package as well. So if there's any issues with any of those inside of react scripts, then there's a red flag on react scripts because of another dependency inside of it. So it's really useful to have these reports because it helps you understand what's happening deep
>
> **[3:10](https://www.linkedin.com/learning/foundational-javascript-security/introduction-to-github-dependabot?u=76281980&t=190)** inside the application and everything that you're using inside of it and how you can mitigate any issues down the road or open issues for your application and your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (5), [[GitHub]] (1)
> **UI Navigation:** click on (3), go to (3)
> **Analogies:** for example (3)
> **Cross-References:** go back to (1)
> **Tools:** github (1)
> **Speakers:** - [manny] (1)

#### [Introduction to AppSensor](https://www.linkedin.com/learning/foundational-javascript-security/introduction-to-appsensor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/introduction-to-appsensor?u=76281980&t=0)** - [Instructor] AppSensor is a tool that is very useful, especially when you need to monitor an application for live intrusions. This tool goes beyond the mere detection of vulnerable spots in your code, but goes into the activities that occur around your application. So if we take a look at the plan we've defined initially or the cyber kill chain workflow, at the initial stages we spent a considerable amount of time scanning our code for trouble dependencies and improved this code, but that doesn't make our application 100% secure, and we need other tools to help us monitor further threats in the delivery or control stages. This is where AppSensor comes into play. You need strategies to constantly monitor your application for unknown access or unusual activities, et cetera. There are many tools in the market for this purpose and AppSensor is an example of one you could use. We won't go through how to install it and how to use this tool as it is a course on it's own, but if you want to get started, go to this page here, and take a look at the steps, how to set it up here, so you have all the information on this page, how to get started, what are the pluggable components that you could use and so on and so forth.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Reconnaissance applied to project](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-applied-to-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/reconnaissance-applied-to-project?u=76281980&t=0)** - [Instructor] Now we have done some reconnaissance with tools to scan our code and/or you have a tool, like App Sensor, monitoring your activity. So if we take a look at the plan at this stage we have two options. Depending on what your client is asking, either fix the security issues and exploit them to show potential dangers and the damage. And at this stage, it will all depend on the client's objectives, when in most cases they ask to fix the issues and test again and then stress test the application further by finding and seeing if there are ways to exploit the system. For the purpose of teaching you about the issues, we'll move on to explore the issue you may find as you scan the application in the reconnaissance stage.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: What is the purpose of reconnaissance?](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-the-purpose-of-reconnaissance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-the-purpose-of-reconnaissance?u=76281980&t=0)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we discuss reconnaissance in depth and it's role in security, so here's a question: What exactly is reconnaissance? Think about what you would answer, and when you're ready to watch the solution video, go ahead.

> [!info]- Semantic Content
>
> **Non-Speech:** (upbeat music) (1), (upbeat music ends) (1)
> **Speakers:** - [instructor] (1)

#### [Solution: What is the purpose of reconnaissance?](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-the-purpose-of-reconnaissance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-the-purpose-of-reconnaissance?u=76281980&t=0)** (lively music) (lively music ends)
>
> **[0:07](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-the-purpose-of-reconnaissance?u=76281980&t=7)** - [Instructor] The answer for the question was in the video where we go over the introduction of reconnaissance. Without going over everything we did in that video, this is the main point we were looking for: The goal of doing reconnaissance is to be able to figure out with a set of common tools, if there are any issues or open doors for hackers to exploit. And the ability of seeing your code allows for in-depth inspection of your application before it becomes a problem.

> [!info]- Semantic Content
>
> **Non-Speech:** (lively music) (1), (lively music ends) (1)
> **Speakers:** - [instructor] (1)


### 3. Top Security Threats

[↑ Back to Table of Contents](#table-of-contents)

#### [Injection threat](https://www.linkedin.com/learning/foundational-javascript-security/injection-threat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/injection-threat?u=76281980&t=0)** - [Instructor] Over this chapter, we're going to go through the list of a few of the top security threats as listed by the [[OWASP]] organization. If you'd like more details about the most current security issues, solutions, and code snippets, visit [owasp.org](https://owasp.org) for more information. There are many injection attacks, such as [[SQL]] injection and [[JavaScript]] injections, and are one of the most common security issue in this category, and is referred to us cross site scripting attacks, or XSS. This attack is basically when malicious code is executed inside of a user input. The danger in this threat is automated code that goes through your public pages and sends code that executes once the form is submitted. Many frameworks such as [[React.js|React]] and [[Angular]] have means to escape the bad code. And it submits the input as a string, but not all frameworks are made equal. So let me show you an example here. And you can go to this page by going to this address here. So let me show you the demo. So let's click on demo. And you can do this as well. So let's say for example, we did something like embed it inside of u tags the [[Microsoft Word|word]] test. As you can see, our test is actually bolded, like the way we entered the search. So, okay. So that means there might be a possibility for this kind of attack.
>
> **[1:32](https://www.linkedin.com/learning/foundational-javascript-security/injection-threat?u=76281980&t=92)** So let's try that again, but now, let's insert a script instead. And if you want an example of a good script to test this, you can actually use this script here. So we could literally copy that. And let's paste it in here, like so. And then search. And if you're have this, that shows up here, that means you can actually embed scripts inside of the search. This is an injection attack and is an issue. So when you see a sign of this issue in your reconnaissance, fix this as soon as possible as it puts your application at the mercy of hackers and they could do some damage. In other words, check your input for any malicious code, and follow the recommended fix by the tools you use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (2), [[SQL]] (1), [[JavaScript]] (1), [[React.js|React]] (1), [[Angular]] (1)
> **Env Vars:** owasp (1), sql (1), xss (1)
> **Definitions:** is an  (2), in other words (1)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Broken authentication](https://www.linkedin.com/learning/foundational-javascript-security/broken-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/broken-authentication?u=76281980&t=0)** - [Instructor] Broken authentication is where a hacker is able to see or exploit user information such as username and password. It is extremely dangerous and if you have an application with poor authentication practices, you're putting your application and your users at risk and potential legal liabilities. If any of your code provides clear text representation of your user's password, either publicly or when a user is logged in, you're a victim of your own bad authentication practices. Here's a few examples of broken authentication, and as you can imagine, what hackers could exploit from these. Text passwords, if your code doesn't hash the passwords through the use of bcrypt or similar libraries, you're exposing your user passwords for anyone to exploit them. Session IDs in the browser. A session ID provides information about the user logged into the application. A hacker could use the session ID to access user or application data. Use proper session libraries for that purpose. Unsecured HTTP, if you're still not using HTTPS protocols and the user is connected to your site through an insecured network, like a public [[Wi-Fi|wifi]], then a hacker could grab the session IDs and get any information from them. In a similar scenario, you could be providing access to users to areas they're not supposed to. Having a strong plan of action as to who should have access to what areas is crucial.
>
> **[1:33](https://www.linkedin.com/learning/foundational-javascript-security/broken-authentication?u=76281980&t=93)** Creating roles within your application and providing the proper access rights to these roles should be in your planning when creating your application and authentication practices. So any cases, always use the proper libraries to connect your users securely to your site or leverage Auth0 to help you secure your authentication workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (1)
> **Env Vars:** http (1), https (1)
> **Analogies:** such as (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [Sensitive data](https://www.linkedin.com/learning/foundational-javascript-security/sensitive-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/sensitive-data?u=76281980&t=0)** - [Instructor] Like a broken authentication, having a plan to properly hide sensitive user or obligation data is crucial. Take a look at all the data available in your application. What are the areas that would be safe for public consumption and the ones that are private or could be exploited? For example, in general, all user data should be considered sensitive and hidden from the public eye, and take a look at the data users generate. Can it be public or not? Once you have a plan, you need to implement some of the strategies mentioned in the previous video, proper crypto hashing, HTTPS protocols, and the use of advanced tools like JSS Scrambler. JSS Scrambler goes a step further than just a simple crypto. It works at a deeper level with your code logic and scrambles your code and data so it isn't easy to reverse engineer your minify code and figure out what function does what. At the end of the day, you need to have a plan to fully secure any sensitive data in your application.

> [!info]- Semantic Content
>
> **Env Vars:** jss (2), https (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [XML external entities](https://www.linkedin.com/learning/foundational-javascript-security/xml-external-entities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/xml-external-entities?u=76281980&t=0)** - [Instructor] XML External Entities have been promoted to a top 10 issues on [[OWASP]] and for good reason. This attack occurs when an XML document is malformed and could be exploited for denial of services attacks. This is what a malformed XML document looks like, and to detect malformed XML documents you have, most editors will be able to detect them. But if it doesn't or one was added to your application website, this is what you need to be looking for. In this scenario, the attacker exploits the XML malformed document that takes a bit more time to process due to its structure and then leverage this bad XML document to render the resource processing unit useless. Therefore, denying its users of the resource, which is a denial of service or DoS attack. If in your application you are using XML documents, make sure you are using proper syntax as you could be subjecting your users to not only slower performance, but also opening up an opportunity for a hacker to attack your system with a DoS attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **Env Vars:** xml (7), owasp (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Security misconfiguration](https://www.linkedin.com/learning/foundational-javascript-security/security-misconfiguration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/security-misconfiguration?u=76281980&t=0)** - [Instructor] Security misconfiguration usually occurs from a lack of proper settings in your application or exposed information from the server side. And they happen typically when a developer publishes the development version of the server. This could open all kinds of settings for hackers to exploit. And also hinder the performance of your application. It also happens when somebody leaves debugging on or even worse, console log sensitive data in the client. From time to time, I test application in sites I use often. And sometimes it's very easy to manipulate the data with a few scripts in the console. But be wary of this issue. Another one is, users default logins and passwords. Example, admin login with an admin password. This happens a lot in the world of bloggers, or many sites from templates, always use complex passwords. And sometimes you can use a tool like one password for that. Also wide open folder or code access due to improper restrictions and access controls. Every section of your application should have roles and access controls to match those roles so the right data is shown to the right people. In general, when setting up your server variables, which usually have some credentials for your hosts, always use files that are protected and not published to the host. And never commit those files to your repo.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### [Insecure deserialization](https://www.linkedin.com/learning/foundational-javascript-security/insecure-deserialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/insecure-deserialization?u=76281980&t=0)** - [Instructor] Before we talk about insecure deserialization, let's talk about what deserialization is, If you're not familiar with the term. In short, deserialization is the transformation of data coming from a file or the network, typically from a [[JSON]] or XML format into an object that your application can read. So when you hear about serialization, well it's the opposite, where the object is serialized into a readable JSON format when transferred through the network. Most frameworks have methods that do this automatically for us. So what is insecure deserialization? It's when hackers exploit on trusted data to render the applications resources useless. Like a denial of service attack or even execute code inside your application. To remedy this, there are several ways and packages that exist. Feel free to use which one you prefer when serializing and deserializing your data. As long as they don't use the JS method, eval(), you should be fine in most cases. If you're looking for suggestions, do a search for serialize in [[npm]] and look for the most updated and active packages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[npm]] (1)
> **Env Vars:** json (2), xml (1)
> **CLI Commands:** npm (1)
> **Speakers:** - [instructor] (1)

#### [Components with known vulnerabilities](https://www.linkedin.com/learning/foundational-javascript-security/components-with-known-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/components-with-known-vulnerabilities?u=76281980&t=0)** - [Instructor] When you're building out your application, more often than not, you'll be using packages that offer you extensibility and leverage other components from these libraries. This extra help is great but can sometimes lead you into an insecure path with your application. A great example is using a navigation or [[Routing]] library with your [[React.js|react]] application where you'd be leveraging their components to build out your routing or navigation areas with their components, and the best way to identify these issues is when you test with Snyk or Retire.js where you get a good idea of which packages are insecure. Unless you only build your own components, you need to be vigilant of the packages you use and must at all times validate you are using secure components in your application, and when you find some, figure out if it's not just a simple update of the package and the syntax used, and if not, then plan to replace these packages or write your own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[React.js|React]] (1)
> **File Paths:** retire.js (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Insufficient logging and monitoring](https://www.linkedin.com/learning/foundational-javascript-security/insufficient-logging-and-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/insufficient-logging-and-monitoring?u=76281980&t=0)** - [Narrator] I can't stress this enough, If your application isn't being monitored by any tools or you get insufficient logging mechanisms in place with alerts, when something suspicious in your resources is being executed, how will you prevent hackers from completely getting control of your application or pulling data from it? Take this scenario, on average your website or application gets about 200 users per day and you allocated resources for that workload. Well, all of a sudden, your application jumps to 500 users, then 1000 or more. How will you determine if this is official user growth or a hacker sending his minions for a typical DOS attack? Monitoring and logging is key to supervise your resources, user growth and yes, hackers on the prowl towards your application. Most host providers have a decent amount of tools you can use for this purpose. And please do use them, set alerts so you get notifications for unusual behaviors, then make sure you set some type of user base monitoring and you can either use prebuilt resources, such as [[Google]] analytics, elastic search, or build your own within your application, but do get something in place. It is often better to have more information, set many alerts than to get caught dealing with lost resources because a hacker exploited them one way or another. This is always a good tool to have to detect the delivery
>
> **[1:34](https://www.linkedin.com/learning/foundational-javascript-security/insufficient-logging-and-monitoring?u=76281980&t=94)** and control phase of the cyber kill chain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** dos (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: What is the best resource for top threats?](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-the-best-resource-for-top-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-the-best-resource-for-top-threats?u=76281980&t=0)** - [Instructor] So before we keep going, let's challenge you with a quick question. In this chapter, we discussed the biggest threats in security, so here's the question: What is the best resource for getting more information on your top threats? Think about what you'd answer, and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Non-Speech:** (upbeat music begins) (1), (upbeat music ends) (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)

#### [Solution: What is the best resource for top threats?](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-the-best-resource-for-top-threats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-the-best-resource-for-top-threats?u=76281980&t=0)** (lively music)
>
> **[0:07](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-the-best-resource-for-top-threats?u=76281980&t=7)** - [Instructor] The answer for the question was in the video where we introduced this chapter and the injection threat. Without going everything we did in that video, this is the main point we were looking for. Whenever you need the latest and greatest information about security threats, your best resource is [OWASP.org](https://OWASP.org). That's [O-W-A-S-P.org](https://O-W-A-S-P.org) where they have a list of the top 10 threats, list more information on the issue, and even have code snippets on how to resolve it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **URLs:** [owasp.org](https://owasp.org) (1), [o-w-a-s-p.org](https://o-w-a-s-p.org) (1)
> **Env Vars:** owasp (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (lively music) (1)


### 4. Security Threats Applied

[↑ Back to Table of Contents](#table-of-contents)

#### [Injection threat resources](https://www.linkedin.com/learning/foundational-javascript-security/injection-threat-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/injection-threat-resources?u=76281980&t=0)** - [Instructor] Needless to say, fixing and detecting any of the top 10 security issues isn't something we can fully explore in the course, as there are so many ways to skin the cat. However, we can take a look at the resources available to us together and how you should approach each when faced with these issues. Even better, it's always better to be well aware of how these issues appear in our applications, and how you can prevent them. And the best place to get started on all this is on the [[OWASP]] website. So throughout this chapter, we'll take a look at the most important ones, and show you where to go to get started. So let's head up to [owasp.org](https://owasp.org), and what we're going to do is scroll down until you see Project Spotlight: OWASP Top 10. And this is the page you want to go to at all times to see, well, what are the top 10 [[Security Risk]]? And you would see that we have injection, broken authentication, and so on, so forth. And these are going to be the ones that we're going to take a look at together. But the document you want to go to to actually have more information is either here, or go through the specific issues here. And I have these pages separately here. So let's start with injection threats. The way actors leverage this one is when data, or queries aren't properly secured, validated, or filtered in our application. And then leverage these openings to inject code to corrupt or delete or pull data from your application.
>
> **[1:37](https://www.linkedin.com/learning/foundational-javascript-security/injection-threat-resources?u=76281980&t=97)** The way you prevent it is by keeping the data separate from the commands and queries. And there are multiple solutions to do this, as listed in this page. Take a look at the proposed solutions and example attack scenarios to fully understand what they look like. And in the reference, there are a lot of great cheat sheets you can use to prevent these attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Security Risk]] (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Env Vars:** owasp (2)
> **CLI Commands:** cat (1)
> **URLs:** [owasp.org](https://owasp.org) (1)
> **Speakers:** - [instructor] (1)

#### [Broken authentication resources](https://www.linkedin.com/learning/foundational-javascript-security/broken-authentication-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/broken-authentication-resources?u=76281980&t=0)** - [Instructor] Now let's take a look at broken authentication. Again, you can actually access this from the top website, and then go into the specific broken authentication, or take a look at the [[OWASP]] Top 10, and then click on this one here. So if you remember, this type of attack is when a hacker is able to access your application through your authentication mechanism, either from weak password policies, or weak authentication system. With access to your application, a hacker can do a lot of damage. So you want to make sure you use proper tools to authenticate your application properly, such as two-factor authentication, or platforms like AuthO. Take the time to go through the is the "Is the Application Vulnerable?" section, and "How to Prevent It. If you can try to implement the list of top 10,000 worst passwords into your application, do not use lists, go ahead and do it. And in the references, there are a lot of great cheat sheets you can use to prevent these attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** owasp (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Sensitive data exposure resources](https://www.linkedin.com/learning/foundational-javascript-security/sensitive-data-exposure-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/sensitive-data-exposure-resources?u=76281980&t=0)** - [Instructor] Now let's take a look at sensitive data exposure. Most of the dangers around sensitive data is while in transit in between the client and the server side and how encrypted the data is. Again, a hacker able to access your private user data can literally do whatever it wants with it, and you really need to make sure your application isn't vulnerable to these attacks. Again, using strict transport security protocols like HSTS and proper encryption. Take a look at the elements of the application vulnerable section and how they're prevented to make sure your application isn't open to these kinds of attacks. There are a few nice scenarios here to show you how a hacker can expose your data, such as credit card information, so I suggest you read this as well. And in the references, there are a lot of great cheat sheets you can use to prevent these attacks, so take a look at them as well.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** hsts (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [XML external entities resources](https://www.linkedin.com/learning/foundational-javascript-security/xml-external-entities-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/xml-external-entities-resources?u=76281980&t=0)** - [Instructor] XML External Entities, as explained earlier, is a way to exploit your XML code to extract data or execute malicious code. So if you have any XML-based web services, this document is a must for you. By looking at the examples of attack scenarios, you'll see how an XML doc could be used to insert any type of code inside your application. Take the time to go through the, "Is the Application Vulnerable" section and "How to Prevent It." The best way to prevent any issues with this type of attack is to use the SAST tool, S-A-S-T tool, which you have a link right here. And the SAST tool is also mentioned at the top of this document if you want to have a quick link to it. So use this tool to scan for any XXE in your code and resolve these issues ASAP. And again, in the references there are a lot of great cheat sheets you can use to prevent these attacks as well.

> [!info]- Semantic Content
>
> **Env Vars:** xml (4), sast (2), xxe (1), asap (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Security misconfiguration resources](https://www.linkedin.com/learning/foundational-javascript-security/security-misconfiguration-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/security-misconfiguration-resources?u=76281980&t=0)** - Security misconfiguration is when you the developer, do not take the time to properly secure your application or leave breadcrumbs of your security access all over the code. If you look at the code I included in the course, I left an issue in there just for your own investigation. So if you want to take a look at it, open the exercise files, and go to chapter four, and then drop this into Visual Studio Code for example, and try to figure out where is the error. And if you pause the video right now and go through my code you'll see what was the mistake. Although small, but still one that shouldn't be allowed in a production environment. If you guessed it, I left my API key for a news API. That is a no-no and shouldn't be done. Another great example is when one commits his environment config file to the repo. Whether the repo is private or public, it's definitely a big issue. So with access to these elements a hacker can literally access all data your client does or give unauthorized access to your data. So take the time to go through the is the application vulnerable section and how they're prevented. Pay close attention to the elements I mentioned before, including the (murmurs) you use in your clients. And then again, finally, in the references, you have a lot of great cheat sheets you can use to prevent these attacks.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **UI Navigation:** open the (1), go to (1)
> **Tools:** visual studio (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - security (1)

#### [Secure deserialization resources](https://www.linkedin.com/learning/foundational-javascript-security/secure-deserialization-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/secure-deserialization-resources?u=76281980&t=0)** - [Narrator] Now, let's take a look at Insecure Deserialization. This type of attack is hard to exploit. But when a hacker succeeds, access to sensitive data can occur. This is one where you constantly need to test your APIs and validate your objects aren't tampered by attackers. There are several ways to prevent these attacks, such as enforcing strict types, like TypeScript for example, and making sure there aren't any errors when deserialization occurs. Take the time to go through the "Is the Application Vulnerable" section and how to prevent it. I'd spend a lot of time looking at the cheat sheets to make sure you don't miss opportunities to enforce alerts and monitor deserialization.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: What is secured deserialization?](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-secured-deserialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/challenge-what-is-secured-deserialization?u=76281980&t=0)** - [Instructor] So before we continue, let's challenge you with a quick question. In this chapter, we discussed the secure deserialization, which that term, in my opinion, that often sticks out, but not quite clear on what it means. So, here's the question. What is secured deserialization? Think about what you'd answer and when you're ready, watch the solution video.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: What is secured deserialization?](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-secured-deserialization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/solution-what-is-secured-deserialization?u=76281980&t=0)** - [Instructor] The answer for the question was in the video where we go over, well, secure deserialization. Without going over everything we did in that video, these are the main points we were looking for. Deserialization is the transformation of data coming from a file or the network, typically from a [[JSON]] or XML format, into an object that your application can read. So insecure deserialization is when hackers exploit untrusted data to render the applications resources useless, like a denial of service attack, or even execute code inside your application. So securing this process is crucial to protect your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** json (1), xml (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/foundational-javascript-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/foundational-javascript-security/next-steps?u=76281980&t=0)** - [Emmanuel] This security course only scratches the surface of the topics when it comes to security. You should always be on the lookout for new threats, analyze how your code is doing against those threats, and find the best possible fix based on the latest recommendations. Keep that in mind whenever you're learning more about security, it's an ongoing process. So needless to say, it's a great idea to arm yourself with information by exploring more of the security courses. Simply do a search under security, hacking, or even language essentials, watching these courses along with constant vigilance of your code will go a long way to reducing the vulnerability of your code. I would also subscribe to the language and security-based feeds in the case of this course, for example, [[JavaScript]]. This will allow you to be well-informed of the latest updates around your language, and what dangers lurk in your code. An informed developer makes for better applications for their users. Keep that in mind. And finally, share the knowledge with other developers you work with. I can't stress this enough. Well-informed teams, well, makes better applications for users. Thanks for taking my course and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [emmanuel] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- Software Development Security
- JavaScript

## Path Context

### In [[Advance Your JavaScript Skills]]
← [[ESLint- Customizing Styles]] | **7 of 10** | [[Learning JavaScript Debugging]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript
- [[Javascript Best Practices For Code Formatting]] — JavaScript

---

[↑ Back to top](#)