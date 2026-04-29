---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: react-authentication-25660373
url: "https://www.linkedin.com/learning/react-authentication-25660373"
duration_minutes: 255
duration: 4h 15m
level: Advanced
updated: 5/9/2025
learners: 56445
skills:
  - React.js
  - Authentication Systems
exercise_files: true
github: "https://github.com/LinkedInLearning/react-authentication-6035050"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEKpKB3OkEGkw/learning-public-crop_675_1200/B4EZZAfXucGYAc-/0/1744838687924?e=2147483647&amp;v=beta&amp;t=hP9daVuR0FW7rOnO0vVLWrnbFVvwRIKD6qB52Ksy-_U"
linkedin_topic: Web Development
learning_paths:
  - '[[Explore React.js Development]]'
  - '[[Explore App Development with the MERN Stack]]'
  - '[[Improve Your React Skills]]'
prev_courses:
  - '[[Building Modern Projects with React]]'
  - '[[React Essential Training]]'
  - '[[React- Testing and Debugging]]'
next_courses:
  - '[[React- Server-Side Rendering]]'
  - '[[Node Js Essential Training]]'
  - '[[React- Software Architecture]]'
path_nav: '[{"path":"Explore React.js Development","position":7,"total":8,"prev":"Building Modern Projects with React","next":"React- Server-Side Rendering"},{"path":"Explore App Development with the MERN Stack","position":2,"total":13,"prev":"React Essential Training","next":"Node Js Essential Training"},{"path":"Improve Your React Skills","position":6,"total":9,"prev":"React- Testing and Debugging","next":"React- Software Architecture"}]'
path_count: 3
tags:
  - course
  - topic/software-development
  - topic/web-development
  - topic/database-management
  - skill/react-js
  - skill/authentication-systems
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Web%20Development/React-%20Authentication.md)

![React: Authentication](https://media.licdn.com/dms/image/v2/D4E0DAQEKpKB3OkEGkw/learning-public-crop_675_1200/B4EZZAfXucGYAc-/0/1744838687924?e=2147483647&amp;v=beta&amp;t=hP9daVuR0FW7rOnO0vVLWrnbFVvwRIKD6qB52Ksy-_U)

# React: Authentication

> User authentication is a critical part of virtually every website, yet few web developers know all the details behind how it works and how to use it to provide a good user experience. In this course, instructor Shaun Wassell dives into the details behind user authentication in the context of React and how to incorporate user authentication into React applications. Shaun begins with some definition

> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373) | 4h 15m | Advanced | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. User Authentication Basics]]** (16 videos)
- **[[#2. Email Verification]]** (8 videos)
- **[[#3. Resetting Passwords]]** (5 videos)
- **[[#4. OAuth]]** (8 videos)
- **[[#5. Prebuilt Auth Options]]** (6 videos)
- **[[#6. Best Practices]]** (7 videos)
- **[[#Conclusion]]** (1 videos)
- **[[#Appendix]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Secure authentication practices in React
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=0)** - If you've ever seen on the news about how some website was hacked and exposed millions of users' personal information, you're well aware of what the consequences can look like when user authentication isn't done correctly.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=11)** So with all this in mind, my question to you is what are you waiting for?
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=15)** Let's get your knowledge of user authentication to where you and I both know it needs to be.
>
> **[0:20](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=20)** I'm Shaun Wassell.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=21)** I'm a senior software developer and tech educator.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=23)** In this course, you're going to go from a user authentication novice to an expert, and learn virtually all of the most important aspects of user authentication in React.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/secure-authentication-practices-in-react?u=76281980&t=32)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Speakers:** - if (1)

#### The structure of this course
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=0)** - [Instructor] Alright, so in order to help you understand how this course is going to work in a little bit more detail, what I'd like to do is right up front give you the basic overall structure that we're going to be following in this course.
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=12)** Obviously, authentication is a pretty deep topic, so there's lots of things that we're going to be talking about here, and it's important for you to understand how they're going to fit together.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=23)** So really, first of all, there's two main goals of this course.
>
> **[0:26](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=26)** The first is for you to understand and apply authentication with full-stack React, right?
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=33)** So basically at the end of this course, you should be able to confidently add basic authentication to a full-stack React app, which is something that will amaze interviewers, trust me.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=44)** And the second one here is we're going to develop sort of like a full-stack authentication template that you can use so that in the future when you want to create other applications and know that you're going to need authentication for those, you can just copy this template and not have to set up everything all over again.
>
> **[1:03](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=63)** All right, so those are the two main goals.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=65)** Let's talk about the basic structure as I said.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=68)** The first thing we're going to do is talk about the fundamentals of user authentication.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=73)** So we're going to talk about what user authentication is in the first place, as well as some other key concepts behind user auth.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=81)** After that, this is a very important part, so do not skip this part.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=85)** At least, if you want to follow along, I wouldn't recommend skipping it.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=88)** Project setup, this is where we're going to talk about the basic structure of the project itself and how all the pieces fit together.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=96)** So if you skip this, you might just find yourself a little bit confused as to what all the different pieces of code, what all the files are in the project.
>
> **[1:46](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=106)** After we do that, we're going to take a look at how to add basic user authentication to a full-stack MERN app, right?
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=113)** Now, this is going to be a slightly simplified MERN app.
>
> **[1:56](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=116)** In fact, it's going to be like a MERN app without the M, so an ERN app.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=120)** Basically what I've done is instead of using MongoDB, which really has just in the past, complicated things a little bit, I'm just going to use a very simple file-based JSON database in order to store all of our data.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=133)** This will make things a lot easier as we go through the course, as you'll see.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=137)** And this is going to include things like how to sign a user up, very important thing there, how to let them create an account.
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=144)** We'll also take a look at, once the user is signed up, how do we log them in and out?
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=149)** We'll take a look at how to create private routes in a React application as well as on the backend.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=156)** And finally, we'll take a look at the basics of using JSON web tokens, which really form the beating heart, so to speak, of a lot of modern authentication.
>
> **[2:47](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=167)** All right, and after that, after we've learned all of the basics, we're going to go through a few more very important and I think very beneficial parts of the course.
>
> **[2:55](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=175)** The first is email verification.
>
> **[2:57](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=177)** So we'll take a look at not only how to send emails, but also how to incorporate all of the necessary logic of the email verification flow, right?
>
> **[3:07](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=187)** To make sure that a user has signed up with a valid email.
>
> **[3:10](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=190)** We'll also take a look at the flow for resetting passwords and how to implement that.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=195)** And we'll also take a look at a few other authentication options, right?
>
> **[3:19](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=199)** So now that you know how to implement your own authentication flow, what are some other possibilities that you could use?
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=206)** All right, and last but not least, we're going to take a look at a few best practices for authentication in React.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=213)** And as I said, with the project setup, it would not be wise to skip this one.
>
> **[3:37](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=217)** There are lots of very interesting techniques in this last section that you'll really want to be familiar with in order to make sure that your users have the maximum security that they deserve.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=229)** And well, that is the basic structure of the course.
>
> **[3:51](https://www.linkedin.com/learning/react-authentication-25660373/the-structure-of-this-course?u=76281980&t=231)** So now you know what to expect.

> [!info]- Semantic Content
>
> **Env Vars:** mern (3), json (2), ern (1)
> **Code Keywords:** let (2), this, (1), private (1), finally, (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** setup (2), set up (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 1. User Authentication Basics

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is user authentication?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=0)** - [Instructor] Alright, well, let's start off our user authentication journey by learning the very basics.
>
> **[0:05](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=5)** And for that, the first question we're going to look at is, what exactly is user authentication?
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=12)** Well put simply, when users use our applications, user authentication is how we know that they are who they say they are.
>
> **[0:20](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=20)** Now, this is a very interesting and often very tricky topic, and to understand the reason that this is, think about when you interact with someone in real life face to face, right?
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=31)** When you're talking with a friend or a family member, for example, you know that it's them because of the way they look, their voice, their mannerisms, and so on.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=40)** But interacting with people over the internet is quite different from this, right?
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=44)** Some of you may know someone who's an identical twin, and you may have had this experience when those two people are in the same room, wearing similar clothes, and you have a hard time telling who's who.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=55)** And sometimes they may even prank you into thinking that one is the other, right?
>
> **[1:00](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=60)** So let's take that a step further.
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=62)** Imagine that everyone on earth is identical, they all look identical, have the same voice, have the same mannerisms, et cetera.
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=70)** You'd have a pretty hard time ever really determining who's who, wouldn't you?
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=74)** And that's actually not a bad metaphor for what it's like to interact with people over the internet as a website, right?
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=81)** What I mean by that is that from the point of view of our website, all of our users are essentially identical, right?
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=88)** Sure, they might have different IP addresses, different browsers, et cetera.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=92)** But those pieces of information are shaky at best for identifying our users.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=97)** At the end of the day, if we were to ask any given user who are you, they could basically answer however they like, right?
>
> **[1:44](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=104)** And we wouldn't really be able to know if they're telling the truth or not, at least not without some clever techniques.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=109)** And that's where the art and science of user authentication comes in.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=114)** So once again, our definition of user authentication is that user authentication is simply the technique of verifying that users of our site are who they say they are.
>
> **[2:04](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=124)** So that's what it is on a conceptual level.
>
> **[2:06](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=126)** But the next question is, how exactly does it work?
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=129)** Well, broadly speaking, there are three main strategies or tests that our sites can use to make sure that our users are who they say they are.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=137)** And we'll call these the knowledge test or knowledge based authentication, the ownership test or ownership based authentication, and finally, the biological test or biological authentication.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=151)** So let's go over each of these and talk about how they work and what makes them special.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=156)** The first one here is knowledge-based authentication.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=160)** And currently, this is probably the most commonly used form of user authentication.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=164)** It involves making our users prove who they are based on the fact that they know some key piece of information.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=172)** And this key piece of information is more often than not a password or a PIN.
>
> **[2:57](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=177)** In other words, when the user wants to claim that they're say, John Doe, our site will say, okay, well if you're the real John Doe, you'll know John doe's password, what is it?
>
> **[3:07](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=187)** And if they know it, we'll believe that they are the real John Doe.
>
> **[3:10](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=190)** If they don't know it, then we won't believe them.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=194)** And this knowledge based authentication can also be something like security questions where we say, okay, if you're John Doe, then what's your mother's maiden name, right?
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=203)** Sure, you've seen that one before.
>
> **[3:25](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=205)** Now obviously, knowledge based authentication has its fair share of problems.
>
> **[3:29](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=209)** Probably the biggest problem is that it's highly reliant on the user actually coming up with a good password.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=216)** And while we can try and enforce this by forcing the user to use capital letters, numbers, symbols, et cetera, many users still insist on putting things like abc123 or their name or something completely guessable as their password.
>
> **[3:51](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=231)** And in the case of security questions such as someone's mother's maiden name, the street you grew up on or things like that, these answers are generally pretty easy to find within 15 seconds or less on Google if you have a specific target in mind.
>
> **[4:06](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=246)** So the next broad grouping of authentication strategies is what we call ownership based authentication strategies.
>
> **[4:12](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=252)** And these involve requiring the user to prove that they have something that only the real user should have.
>
> **[4:19](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=259)** Now, this could be an email address where we send them a code to make sure that they actually own and have access to that email address, or it could be a cell phone where we send a code to their phone number to prove that they have the phone or it could be something like an OTP fob or an OTP app, which displays a code that refreshes automatically every 20 to 30 seconds to make sure that it can't be guessed by brute force.
>
> **[4:44](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=284)** Now, in general, authentication by ownership is pretty secure, but this too does have its fair share of problems.
>
> **[4:52](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=292)** First of all, some ownership methods such as sending a code to your email address, for example, rely indirectly on knowledge based strategies, right?
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=301)** Since someone other than you can access your email account if they're able to guess your password.
>
> **[5:07](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=307)** Another risk of this kind of authentication is that in the case of a phone or OTP fob, they could either be physically stolen or as many of you and myself have experienced in the past, they can also be lost, which puts the user themselves in a bit of a difficult situation since they can no longer log into anything.
>
> **[5:26](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=326)** Now because knowledge based and ownership based authentication both have their potential vulnerabilities, what many sites recommend or require is that you use something called two-factor authentication, which usually involves a combination of knowledge and ownership.
>
> **[5:43](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=343)** In other words, you both have to know John doe's password and have access to John Doe's phone in order to impersonate John Doe, which makes this a lot more difficult.
>
> **[5:54](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=354)** All right, and lastly, we have the biological strategies for verifying identity, which you might be able to consider a subset of ownership strategies, I suppose.
>
> **[6:04](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=364)** Basically, the biological methods of user authentication rely on certain biological traits such as face recognition, fingerprints, or eye scans, which are usually pretty hard for hackers to fake, and certainly one would think harder for users to lose.
>
> **[6:23](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=383)** Now, we're not going to be going into much detail on biological authentication in this course, but I wanted to bring it up anyway.
>
> **[6:29](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=389)** This is obviously a very important method of user authentication in the real world, such as getting into your phone by using your fingerprint or your face.
>
> **[6:38](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=398)** And so I just wanted to mention this as another option in some cases.
>
> **[6:43](https://www.linkedin.com/learning/react-authentication-25660373/what-is-user-authentication?u=76281980&t=403)** And those are the three main methods of user authentication.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (2), imagine (1), it's like (1)
> **Code Keywords:** let (3), this, (1), finally, (1), require (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** otp (3), pin (1)
> **Definitions:** in other words (2), is a  (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Basic project setup
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=1)** Well, now that we've seen the basics of user authentication, let's get started actually seeing what this looks like in a full stack React application.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=9)** Now, in this video, we're going to take a look at how to set up the project that I've created for you and make sure that everything works for you.
>
> **[0:17](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=17)** So if you check out the exercise files at the beginning state of this video, you should see that you have this project that has a number of things in it.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=27)** You can ignore most of it really, except for the frontend and backend folders.
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=33)** So the frontend folder, this is a React app that's been created using the Vite library, sometimes pronounced Vite, V-I-T-E, is what the library is.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=43)** And that basically just sets up a fully functional and very fast React app for you.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=49)** So that's what you see in the frontend.
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=50)** In the backend, we have a simple Node.js and express server, right?
>
> **[0:57](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=57)** There's not really a whole lot going on there yet.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=58)** We will come in here and add some endpoints a little bit later on as we go through our authentication stuff.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=65)** And if you take a look at this db.js thing, this is how we're going to work with databases right now.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=72)** I was thinking of adding MongoDB to this course, but ultimately that was just too much setup and too much extra information besides the core information, which is what we're going to be going through here, right?
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=83)** The core information about how authentication works, things like that.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=88)** So essentially the way that this database works is it just stores all of our data in a JSON object, a JavaScript object that is, and then when we call this save db function, it's going to write that object to a JSON file.
>
> **[1:44](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=104)** So this will allow us to have some degree of persistence in our application, but it will also greatly simplify the interactions we have with our database and allow us to focus on the core topic of this course.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=118)** All right, so that's the basics of the frontend and backend.
>
> **[2:02](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=122)** In order to get this started, all you're going to need to do here is, as I said, check out the exercise files for this course.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=129)** And you're probably going to want to have two separate terminals open here.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=133)** So you can open those just by going up here, going to terminal, and doing new terminal.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=137)** The first one you're going to want to have open in the frontend folder, right?
>
> **[2:22](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=142)** And the first thing you're going to want to do here is run npm install, that will install all of the dependencies for you.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=149)** I don't need to do that because I already have them installed.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=151)** And then you can run the React app by saying npm run dev.
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=155)** And then you're going to open up a new terminal, which you can also do by clicking this little plus button.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=160)** And you are going to go into the backend directory there, run the same thing, npm install, which will install all of the dependencies.
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=169)** And then you can run that simply by saying node server.js, and that will run that server for you.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=176)** So you should see both of these running here, and that should be all we really need to do for setup.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=181)** There's a few other things we might do a little bit later on, such as opening up these ports, but I'll discuss that when we get there.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=188)** So anyway, that is the basics of getting this project set up if you want to follow along.
>
> **[3:13](https://www.linkedin.com/learning/react-authentication-25660373/basic-project-setup?u=76281980&t=193)** And well, now that we've done this, we can get started seeing how user authentication applies in a full stack React app.

> [!info]- Semantic Content
>
> **Prerequisites:** install (4), set up (2), setup (2)
> **CLI Commands:** npm (3), node (2), make (1)
> **File Paths:** node.js (1), db.js (1), server.js (1)
> **Code Keywords:** let (1), function (1), this, (1)
> **Tools:** terminal (3)
> **Env Vars:** json (2)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), we call this (1)

#### Creating private React routes
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=0)** - [Instructor] Alright, so now that we've got our example project set up, let's take a look at the first thing that we're going to need to do here.
>
> **[0:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=7)** And that is we're going to need to create sort of like our own type of react route that will automatically prevent the user from visiting certain pages when they're not authenticated.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=21)** So you may have noticed that there are these pages that I've created in the starter project, this login page, and this signup page.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=29)** And there's also this user info page.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=31)** And basically we only want the user to be able to visit the user info page, for example, when they're logged in, right?
>
> **[0:38](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=38)** Otherwise it wouldn't make any sense because there's no user to display info for.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=42)** And similarly on the other side, we don't want them to be able to see the login page and signup page when they're already logged in.
>
> **[0:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=51)** So in order to do this, what we're going to do is we're actually going to create sort of like this private route component.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=58)** And if you go into app.jsx, you'll see where the routing is set up, right?
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=61)** We have three routes, one for each of those pages.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=65)** So we have a login page route, a signup page route, and a user info page route, which is just the home route, right?
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=71)** So essentially what we want to do here is we want to create another component that we can sort of like replace this route with, and we want to be able to say something like private route path, blah, blah, blah element, right?
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=85)** All of those things are still going to be intact, but then we also want to be able to redirect the user to some URL if the user isn't logged in, let's say.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=96)** So here's what this is going to look like.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=97)** I'm just going to sort of set this up in theory in the app component here, and once we've added all of this, then we'll actually go in and create this component for ourselves.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=109)** So here's what this is going to look like.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=111)** We're going to have this redirect, well here, we'll call it redirectPath.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=115)** And in this case we might want to redirect the user to let's say the login path, alright?
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=120)** And then we're also going to have a prop called something like isAllowed.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=125)** And this is just going to be either true or false depending on whether the user should be allowed to see this page, right?
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=133)** So eventually we'll actually come in and replace this with whether the user is currently authenticated or not.
>
> **[2:19](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=139)** But right now, just for testing purposes, we'll say false.
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=143)** So again, what we want to happen is if this is allowed thing is false, then when the user tries to visit this path here, it should redirect them to this redirectPath instead of showing this element.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=157)** That's kind of how this is going to work here.
>
> **[2:38](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=158)** And let's also just kind of reorganize this to make it a little bit easier to tell what's going on and avoid that horizontal scroll bar.
>
> **[2:47](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=167)** And now that we've done this, let's actually create this thing.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=170)** So here's what this will look like.
>
> **[2:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=171)** Inside our source directory, we're going to create a new file, we'll call it, of course, PrivateRoute.jsx.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=179)** And now that we've done that, here's what this is going to look like.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=182)** First of all, we're going to need a few things from React Router Dom that's already installed in the front end project here.
>
> **[3:10](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=190)** So we shouldn't need to install it.
>
> **[3:12](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=192)** And we're going to say import Navigate, right?
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=195)** This is something that we can actually use to redirect the user as you'll see.
>
> **[3:19](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=199)** And then we will also have this outlet thing.
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=202)** You'll see what that looks like in just a minute, and we're importing both of those from React Router Dom.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=208)** So the next thing, we're going to just specify the basic component structure.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=214)** So we're going to say const PrivateRoute equals, and here's going to be the props.
>
> **[3:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=220)** We're going to have the isAllowed prop, and we'll also have the redirectPath prop, and we'll just leave both of those without any kind of default.
>
> **[3:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=231)** You could add a default if there was one that made sense, right?
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=233)** If you wanted to make the redirect path automatically log in, or if you wanted to make isAllowed automatically false, feel free to go ahead and do that, but I'm just going to leave that up to you.
>
> **[4:03](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=243)** And then what we're going to do is we're going to return here different things depending on what the value of this isAllowed prop is.
>
> **[4:12](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=252)** So if the user should be allowed to visit that page, then what we're going to want to do is we're going to want to return whatever that page should be.
>
> **[4:22](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=262)** Now, that's what this outlet thing is for.
>
> **[4:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=264)** So we're going to say return outlet, but only if isAllowed is true.
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=268)** So we'll just use a turnery operator here.
>
> **[4:30](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=270)** So we'll say return isAllowed Outlet.
>
> **[4:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=273)** And if isAllowed is false, this is where we're going to return this navigate thing.
>
> **[4:39](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=279)** Basically, this is a declarative component version of the navigate function that we can get from the use Navigate hook in React Router Dom.
>
> **[4:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=291)** We'll take a look at that a little bit later, if you don't know what that is.
>
> **[4:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=294)** But essentially when this thing is displayed, it will automatically redirect the user to whatever URL we set.
>
> **[5:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=300)** So we can say Navigate to equals, and we're going to pass that redirect path thing right on through.
>
> **[5:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=306)** And then we'll say replace, right?
>
> **[5:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=308)** That basically tells this Navigate component to replace whatever the current path is with this new path here.
>
> **[5:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=315)** And that should be all we really need to do there.
>
> **[5:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=317)** So let's make sure we export this thing.
>
> **[5:20](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=320)** We're just going to say export default, PrivateRoute.
>
> **[5:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=324)** You can either export that as a named export or as the default as I'm doing here.
>
> **[5:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=328)** And then we'll go back to app.jsx.
>
> **[5:30](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=330)** We're going to import this thing.
>
> **[5:31](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=331)** And actually, let's make that a named export just to make it more consistent with everything else and really only for that reason.
>
> **[5:39](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=339)** So we will say export cons private route, and now we can say import private route.
>
> **[5:44](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=344)** That one was just completed for me by my IDE.
>
> **[5:47](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=347)** And there's actually one last thing that we have to do here in order to get this to work because the later versions of React Router don't like having anything but this specific route component inside this routes component here.
>
> **[6:01](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=361)** What we have to actually do is we have to create a route that will display this private route.
>
> **[6:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=366)** It's a little bit of a pain, so just, you know, bear with me here.
>
> **[6:10](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=370)** We're going to say Route and then this one's going to say element equals private route.
>
> **[6:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=377)** And then we're going to keep the redirect path and isAllowed.
>
> **[6:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=381)** So I'm actually just going to cut those and put those up here like so, and we'll just rearrange that a little bit.
>
> **[6:27](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=387)** There we go.
>
> **[6:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=388)** And now that we've done that, we're going to put inside this the original route.
>
> **[6:34](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=394)** So that's going to be where we have this path and element.
>
> **[6:37](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=397)** So we're going to say route, and we're going to paste those things that we had there.
>
> **[6:42](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=402)** So path and element, and those are going to go inside here like so.
>
> **[6:48](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=408)** And then we just have to close off this private route component and add another curly brace and triangle bracket there.
>
> **[6:58](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=418)** And sorry about this, we need to just remove that private route.
>
> **[7:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=422)** We're going to move this route into there.
>
> **[7:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=425)** And there we go.
>
> **[7:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=426)** So that hopefully that makes sense there.
>
> **[7:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=427)** What we just did so far.
>
> **[7:09](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=429)** We're just going to remove all of the extra sort of artifacts from before, and this is how we get that private route thing in there.
>
> **[7:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=435)** So essentially, we have this set up as a nested route.
>
> **[7:19](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=439)** Don't worry too much about the details here.
>
> **[7:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=441)** This is just what we have to do in order to get this to work.
>
> **[7:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=444)** And now, what you'll see is if we set isAllowed to false and open up our application in our browser, and by the way, you can do that here by opening up your terminal, going to ports, and then clicking on this little world icon here, open in browser, that will open it up there for you.
>
> **[7:42](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=462)** And sure enough, what you see is that automatically redirects you to slash Log in.
>
> **[7:47](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=467)** I have this other one here that I need to close, but the cool thing is that if we change isAllowed to true now and try and navigate to the regular page, all right, we'll just remove that like so, sure enough, we're allowed to do that because our private route just acts as an outlet in that case.
>
> **[8:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=487)** So anyway, that is the basics of creating a private route.
>
> **[8:10](https://www.linkedin.com/learning/react-authentication-25660373/creating-private-react-routes?u=76281980&t=490)** We'll be using this route once we add more extensive user authentication to our app.

> [!info]- Semantic Content
>
> **Code Keywords:** private (11), let (7), this, (4), for. (2), const (1)
> **Code Identifiers:** isallowed (10), redirectpath (3)
> **CLI Commands:** make (7)
> **Prerequisites:** set up (3), install (1)
> **File Paths:** app.jsx (2), privateroute.jsx (1)
> **Env Vars:** url (2), ide (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### JSON Web Token basics
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=0)** - [Instructor] Okay, so at this point, we've got the basic framework for adding authentication to our app set up, right?
>
> **[0:06](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=6)** We've set up our project and we've created that useful private route component.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=11)** So now that we have all of those things, we're ready to start adding real user authentication techniques to our app.
>
> **[0:17](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=17)** Now, we talked earlier about the three main classes of user authentication.
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=22)** That is knowledge-based, ownership-based and biological-based authentication.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=28)** And in this course, we're going to be focusing mainly on knowledge-based authentication, right?
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=33)** That is the techniques that we're going to be using here will be focused on verifying users using only passwords, although there are, of course, plenty of ways to go beyond this.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=43)** Now, in order to understand exactly how this password-based authentication thing is going to work in our application, it's very important that we talk about something called JSON web tokens.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=54)** JSON web tokens, which are commonly abbreviated as JWTs, and sometimes that's pronounced jots, although in this course, I'll just be calling them JWTs, these JWTs form the beating heart of most modern website authentications.
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=69)** So let's take a look at exactly what JWTs are and how they work.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=73)** First of all, what are JSON web tokens?
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=77)** Well, JSON web tokens basically are unique strings that we give different users of our site after they've logged in.
>
> **[1:27](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=87)** And the idea is that whenever a user wants to interact with our site in some way, right?
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=92)** For example, if they want to update their information in our database, instead of having to send their password to our server every time, what they can do is they can simply send us this string instead, right?
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=105)** They can send us this JSON token.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=107)** Now, JWTs aren't just any string, they're actually an encoded JSON object that contains information about the user.
>
> **[1:56](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=116)** So it might contain things, such as the user's ID, the email address, their basic information, et cetera.
>
> **[2:02](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=122)** Basically anything that will make it easier for our app to decide what to show them and what they're allowed to do.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=129)** So the next question is, what exactly do JWTs look like?
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=133)** They actually don't look like what you see here.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=136)** Instead, what we see here is an example of what a JWT might look like.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=141)** And they're usually quite a bit longer than this one that we see here.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=145)** I've just shortened this so that we can see it all on one screen and for the sake of simplicity, right?
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=150)** So JWTs, as you can see here, have three separate parts separated by periods.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=157)** They have a header, a payload and a signature.
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=161)** And each of these sections is an encoded JSON object, that's by the way, encoded in Base64, which is something that we'll have to keep in mind when working with them on our front and backend, as you'll see.
>
> **[2:55](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=175)** So here's what each of these parts is meant to do.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=179)** The header, basically this tells us the type and assigning algorithm that are used for the token.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=186)** So this could be something like HS256, that's the most common one to use.
>
> **[3:11](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=191)** And next up, the payload, this is the actual data that the JWT contains.
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=198)** So for example, this could be the user's profile information, or at least part of the user's profile information, as we'll see.
>
> **[3:25](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=205)** Now, the pieces of data in the payload are referred to as claims.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=210)** And we're going to see how all of this works very shortly.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=213)** And finally, at the end of the JSON web token, we have the signature.
>
> **[3:39](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=219)** Now, this is where things get interesting and where the actual usefulness of JWTs becomes apparent.
>
> **[3:45](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=225)** You see, the signature of a JWT is used to prove the authenticity of the data that the JWT contains in its other parts.
>
> **[3:57](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=237)** Now, this is actually created by combining the header and payload, and signing those using the specified algorithm and a secret key, which we'll define ourselves on the server.
>
> **[4:08](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=248)** If all of this sounds complicated, you'll see exactly how this works very shortly.
>
> **[4:12](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=252)** But basically what this means is that anyone who has the token can see the information that it contains, unless it's encrypted, of course, we'll take a look at that later as well.
>
> **[4:23](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=263)** But they cannot change the data in the token unless they have the private key, which usually will not be the case unless we're working with this on our server, right?
>
> **[4:36](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=276)** The server should be the only place that has access to this private key.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=280)** So now that we know the basics of what exactly a JWT is, let's briefly walk through the steps of how JWTs are used in full-stack applications.
>
> **[4:51](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=291)** And this flow is what we'll be implementing throughout the rest of this section.
>
> **[4:54](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=294)** So, you know, just keep that in mind.
>
> **[4:56](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=296)** Don't worry about the details quite yet.
>
> **[4:58](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=298)** Step one here is that the user logs in successfully to our application.
>
> **[5:03](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=303)** Now, this will mean that they send along their username and password to our server, and our server will check those.
>
> **[5:09](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=309)** And if the user has sent along the correct password for that username, then the user is considered fully logged in.
>
> **[5:20](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=320)** So if a user is able to log in, right, if they provide the correct password, the next thing our server is going to do is it's going to use a secret key to generate a token containing the user's information.
>
> **[5:31](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=331)** Now, again, only the server knows the secret key, so only the server knows how to sign the token correctly and create that last part of the token, okay?
>
> **[5:42](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=342)** Step three now is that the server will send this token back to the user, followed by step four, which is where the user's browser will hold on to this token, usually by storing it somewhere like in cookies, or session storage, or local storage, all right?
>
> **[6:01](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=361)** And obviously each of these methods of storing the token has its own benefits and drawbacks security-wise.
>
> **[6:05](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=365)** We'll take a look at that a little bit later.
>
> **[6:07](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=367)** But anyway, the next step here, step five, is that whenever the user wants to make a privileged request, right?
>
> **[6:15](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=375)** So for example, maybe the user wants to make a request to an endpoint where they can load their private information or modify their private information in our database.
>
> **[6:27](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=387)** Whenever they want to do something like that, they're going to send this JWT along with their request.
>
> **[6:34](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=394)** And finally, step six is that the server is going to use that secret key again to verify that the token that the client sent is legitimate and hasn't been tampered with.
>
> **[6:45](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=405)** So in other words, it makes sure that the client hasn't tried to make themselves look like another user, by let's say changing the ID property in the token, okay?
>
> **[6:55](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=415)** So that's the basic process of using JWTs.
>
> **[6:58](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=418)** Before we move on, there are a few more things that I want to mention about JWTs.
>
> **[7:03](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=423)** The first thing I want to point out is that when the user sends a JWT to the server, it will usually send the token in a request header that looks like what you see here, right?
>
> **[7:14](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=434)** It will be an authorization header that will usually say like Bearer with a space,, and then it will have the actual token string in there.
>
> **[7:23](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=443)** This is just something you'll need to know when we're parsing the token on the backend, okay?
>
> **[7:28](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=448)** And the next thing that you should know here is that tokens are credentials and they need to be treated with care.
>
> **[7:35](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=455)** So you're never going to want to give anyone else access to your JWT tokens, right?
>
> **[7:41](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=461)** You're never going to want to display them in a public place.
>
> **[7:43](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=463)** And as a developer, you're obviously going to want to make sure that the users' JWTs are as secure as possible.
>
> **[7:52](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=472)** Now, the next thing that I want to point out here is the difference between signing tokens and encrypting tokens.
>
> **[7:58](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=478)** Unfortunately, these two concepts do seem fairly similar to each other at first glance, but there's actually a very big difference between them.
>
> **[8:07](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=487)** You see, signing tokens, this proves that the information is intact and hasn't been tampered with, right?
>
> **[8:14](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=494)** This is something that the server does.
>
> **[8:16](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=496)** This proves that the server is the one that generated the token, since the server is the only one who has access to the secret key that can be used to do this.
>
> **[8:27](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=507)** Now, this is very different from encrypting tokens, since encrypting actually hides the information from third parties that the tokens contain, right?
>
> **[8:38](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=518)** And JWTs are not encrypted by default, so do not put secret information in JWTs unless they're encrypted or unless you're using HTTPS, which is something that we'll talk about later in the course as well.
>
> **[8:53](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=533)** Now, the final thing I want to talk about here is some of the benefits and drawbacks of JWTs.
>
> **[9:00](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=540)** So some of the benefits of JWTs, really the two main benefits are that, one, they're stateless.
>
> **[9:07](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=547)** So in other words, all of the information that JWTs contain is contained inside the token itself.
>
> **[9:14](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=554)** And what this means is that it doesn't require our backend to actively keep track of who's logged in, all right?
>
> **[9:21](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=561)** So in our database, we don't have to set properties on users saying, you know, "This user is logged in," or, "Logged in equals false," things like that.
>
> **[9:30](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=570)** Now, the other benefit of JWTs is that they use JSON, which means that it's generally a very compact representation compared to some of the other options like XML, and it's also more secure as well, since signing JSON is easier and generally less vulnerable than signing XML.
>
> **[9:50](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=590)** All right, so those are two of the main benefits of JWTs, let's talk about some of the drawbacks.
>
> **[9:56](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=596)** The first drawback is that, because of the way tokens work, they'll generally remain valid until they expire or until the private key on our server is changed.
>
> **[10:07](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=607)** So if a user's account gets hacked, for example, there's just not really a good way to kick the hacker out, even after the user changes their password, since the hacker will still have that JSON web token.
>
> **[10:19](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=619)** And this also means that it's hard to block specific users, at least not with making our JWT flow stateful by having a database of things like blacklisted IDs, for example.
>
> **[10:30](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=630)** And as we'll see later on, this also means that logging out is achieved by simply deleting the token from the browser.
>
> **[10:36](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=636)** Since, again, there's no way to say that a user is logged in or logged out in our database.
>
> **[10:42](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=642)** We'll see, of course, how all of this works a little bit later.
>
> **[10:45](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=645)** So that's the first main drawback.
>
> **[10:47](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=647)** The second main drawback of JWTs is that the standard itself, right, the JSON web token standard, doesn't define a process for refreshing tokens.
>
> **[10:58](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=658)** So essentially what this means is that when the token expires, the user will have to re-authenticate.
>
> **[11:04](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=664)** So they'll have to log in every two days or something like that, depending on how long we set the expiry date on our server, if we set one at all, right?
>
> **[11:15](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=675)** So anyway, those are the two main drawbacks of JWTs, and that's pretty much all I wanted to talk about with these things before we get started.
>
> **[11:23](https://www.linkedin.com/learning/react-authentication-25660373/json-web-token-basics?u=76281980&t=683)** So now that we've talked about these, we can start incorporating them into our React app.

> [!info]- Semantic Content
>
> **Env Vars:** json (12), jwt (9), xml (2), hs256 (1), https (1)
> **Code Keywords:** private (6), let (4), this. (2), finally, (2), public (1)
> **Definitions:** means that (3), is an  (2), in other words (2)
> **Analogies:** for example (5), such as (1), similar to (1)
> **CLI Commands:** make (5)
> **Prerequisites:** set up (2), you'll need (1)
> **Cross-References:** later in (1)
> **Warnings:** keep in mind (1)

#### Solution: Working with JSON Web Tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=0)** - [Instructor] All right, well hopefully you gave this challenge a try.
>
> **[0:07](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=7)** So what we're going to do here is take a look at the solution.
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=12)** So really all we needed to do here was implement this decode JWT payload function so that it took a JWT in the format that we learned about, and displayed the contents right, the decoded contents of the payload portion of the JWT.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=29)** So here's what this looked like.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=30)** The first thing we had to do, of course, was get the payload portion, and since JWTs are essentially made up of three parts, the header, the payload, and then the signature, we just had to split it by that period symbol and get the middle one.
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=45)** So here's what this is going to look like.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=47)** We're going to say constant parts equals JWT split, and we're going to split it on the period character.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=54)** And then we're going to get the middle part by saying constant payload equals parts and that's going to be index one.
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=62)** Alright, so at this point we have the middle part of it, but that's in an encoded base 64 URL string.
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=70)** So what we're going to do here is we're going to have to say, in order to convert this to true base 64, as was said in the instructions, we're going to have to say const base 64 payload equals, and we're just going to say payload dot replace.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=88)** And we're going to replace all dashes with pluses and we're also going to replace all underscore characters with slashes.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=100)** Okay, so we'll say replace underscore with slash and that should be all we need to do there.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=105)** So now that we have this, we're just going to take the JSON payload and we're going to decode it using A to B.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=112)** So here's what this is going to look like.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=114)** We're going to say return JSON dot parse, and inside here we're going to say decode URI component.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=125)** And to this we're going to pass A to B, just like we did before with the base 64 string, right base 64 payload, that is.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=136)** And that should be all we need to do.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=137)** So let's test this out.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=138)** What we're going to do is take a JWT and one was provided down here for us.
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=143)** So let's just copy that like so.
>
> **[2:26](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=146)** And we're going to paste that in there and click decode and sure enough we see that that gives us username, John Doe, IAT, right?
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=153)** That's the expiration that was put into there in case we want to use that.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=157)** And that is the solution to this challenge.
>
> **[2:39](https://www.linkedin.com/learning/react-authentication-25660373/solution-working-with-json-web-tokens?u=76281980&t=159)** So hopefully you figured that out and congratulations if you did.

> [!info]- Semantic Content
>
> **Env Vars:** jwt (5), json (2), url (1), uri (1), iat (1)
> **Code Keywords:** let (2), try. (1), function (1), const (1), this, (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Adding a sign-up route to the server
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=0)** - [Instructor] All right, so now that we know a little bit more about JWTs and how they work, let's get started integrating them into our full Stack React applications.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=9)** So we can close our front end files for now because we're going to be jumping into our backend.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=15)** And really the first thing we're going to do here is we're going to open up server js and add our first route.
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=22)** Now, just as a warning here, our server is rapidly going to get a little bit too big to comfortably fit inside this file.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=30)** So we'll probably be breaking it out into several files at some point.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=35)** But for now, we'll just get started here by creating a signup route.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=39)** So here's what this is going to look like.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=41)** We're going to create a post route, so we'll say app post.
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=45)** This basically just means that the front end will have to send a post request instead of a get request to sign up, which is, you know, kind of what's typically expected in this case.
>
> **[0:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=57)** And for the path we're going to make the path/API/signup.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=64)** Okay.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=66)** So now that we've done that, here's what we're going to do.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=68)** We're going to add a handler, which will take the request and response objects, and this is going to be async as well because there are going to be some asynchronous things going on in this handler as you can probably imagine.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=82)** So here's what this is going to look like.
>
> **[1:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=84)** This route is what the signup page on the front end is going to send a request to when the user enters in their information and you know, wants to create a new account.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=97)** So here's what this is going to look like.
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=98)** We're going to say const email and password.
>
> **[1:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=102)** Those are the two pieces of information the user is going to be sending along and we're going to be getting that from the request body.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=111)** So here's what that will look like.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=112)** We're going to say equals request body.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=115)** Make sure you do have this express JSON thing up above.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=118)** That's what we'll actually parse the body and make it available here just in case you are trying to type that out yourself.
>
> **[2:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=124)** And now that we've done that, the next thing we're going to do is we're going to basically check whether or not there's already a user in our database with this email.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=136)** So here's what this will look like.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=138)** Our database, again, let's just take a look at it once more.
>
> **[2:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=142)** We'll open up the file here just to make sure we're on the same page.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=145)** We can basically directly import our database here, as you can see, right?
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=151)** It's part of our module exports and we'll be able to make changes to it.
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=155)** In particular, we've already set this user's empty array thing inside of here.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=160)** So really all we have to do is search through our user's array to see if there's already a user with that email address, right?
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=168)** So this is just going to be plain old JavaScript.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=170)** We don't have to make MongoDB queries or anything.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=172)** That's why I wanted to keep it simpler like this.
>
> **[2:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=175)** So here's what this will look like.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=176)** First of all, let's import the database.
>
> **[2:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=178)** We'll say const DB = require and then that's going to be slash DB, right?
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=184)** That file.
>
> **[3:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=185)** And now we're going to say matching users equals, and we're going to say DB users.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=194)** And we're going to search for by saying do find any user.
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=198)** And here I'm going to say matching user like so any user whose email, right?
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=203)** So user email is equal to the email address that the current request is trying to sign up with.
>
> **[3:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=212)** All right? So this will find if there are any matching users, right?
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=216)** If there is, there will be an object in this matching user variable.
>
> **[3:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=220)** And by the way, let's say const matching user, if there isn't, this will simply be undefined.
>
> **[3:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=226)** So we can check this now by saying if matching user, well in this case we don't want to allow the user to proceed.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=235)** So we're just going to say return response, do send status, and we're going to send a 4 0 9 status basically indicating that there's already a user with that email in our database.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=247)** All right? So that's what we're doing here.
>
> **[4:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=249)** And in fact, I'll leave a comment on these two things here just to make sure this is clear what we're doing.
>
> **[4:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=254)** So we'll say something like, make sure there is no user with the email already in the database.
>
> **[4:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=265)** All right?
>
> **[4:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=266)** And now we move on, right?
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=268)** So here's what we're going to need to do.
>
> **[4:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=270)** We're going to need to insert the user's email and password into the database, and this is very important here, you do not want to store the user's password as plain text.
>
> **[4:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=281)** And here's why.
>
> **[4:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=282)** Occasionally a hacker will gain access to the database and if there's a bunch of users, plain text password sitting in there, right?
>
> **[4:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=289)** If the password or if the hacker rather can just see ABC 123, blah, blah, blah.
>
> **[4:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=293)** If that's the user's password, then they now know because they can also see the user's email what that user's password is likely to be on a lot of other sites.
>
> **[5:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=303)** And they're probably going to have a script ready to just try that you email and password combination everywhere they can.
>
> **[5:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=310)** So what we're going to do instead is we're going to encrypt the user's password before we store it in the database and that will basically sort of scramble the password so that it doesn't look anything like what the user's actual password is.
>
> **[5:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=324)** So even if the hacker gains access to the database, it will be much more difficult for them to figure out what the user's real password is.
>
> **[5:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=332)** Okay?
>
> **[5:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=333)** So here's what this will look like.
>
> **[5:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=334)** We're going to say const password hash, right?
>
> **[5:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=338)** That's what this is called. Here is hashing.
>
> **[5:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=341)** And we're going to use a library called B crypt by saying const B crypt equals require B crypt.
>
> **[5:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=349)** We are going to have to install this thing here.
>
> **[5:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=351)** All right, so you're going to open up a new terminal here and you're going to run, well first of all, we'll change directories into our backend.
>
> **[5:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=357)** We're going to run NPM install B crypt now and that should install that package for us.
>
> **[6:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=364)** I'll just close that while that runs.
>
> **[6:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=366)** All right, now that we've done that, here's what we're going to do.
>
> **[6:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=368)** We're going to say await B crypt.hash and we're going to pass in our password.
>
> **[6:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=375)** And then the second thing here is the number of rounds it's going to use to hash our password.
>
> **[6:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=381)** And basically the higher the number you put here, the more difficult it's going to be for hackers to crack that should they get access to your database, but also the more computationally intensive it is on your server as well.
>
> **[6:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=396)** All right, so anyway, besides that, now that we've hashed the user's password, we're going to create some other information about the user that will store in our database.
>
> **[6:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=404)** So here's what this is going to look like.
>
> **[6:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=406)** We'll say const starting info.
>
> **[6:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=409)** This is just going to be some blank fields that the user can fill out a little bit later in the application.
>
> **[6:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=414)** So we'll have hair color and that's just going to be an empty string here.
>
> **[6:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=418)** We'll have favorite food and we will have an empty string for that.
>
> **[7:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=423)** And then we'll have bio, right, like a biographical paragraph or two that the user can write.
>
> **[7:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=427)** And that'll start off as an empty string too.
>
> **[7:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=430)** And now what we're going to do is we're just going to insert this user into the database.
>
> **[7:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=435)** So we're just going to say DB users push and we're going to push a new user into the database like this by saying email.
>
> **[7:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=445)** We're going to have the user's password hash saved specifically as the name password hash, right?
>
> **[7:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=452)** With that key so that we remember we'll have info that'll be the starting info we just created.
>
> **[7:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=458)** And finally we'll have is verified and we're going to set this to false.
>
> **[7:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=462)** This is basically going to be set to true when the user verifies their email.
>
> **[7:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=468)** So that should be all we need to do there.
>
> **[7:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=470)** The only other thing I suppose is we should probably create some sort of unique ID for this user and we can do that by using the UUID package.
>
> **[8:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=481)** So let's install that one as well.
>
> **[8:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=483)** We'll open that terminal up again and say NPM install UUID.
>
> **[8:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=487)** And now what we should be able to do with this is just import that.
>
> **[8:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=491)** So we'll say const and then we'll say uuidv4, which we're actually going to rename here.
>
> **[8:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=498)** We'll say v4: uuidv4.
>
> **[8:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=502)** And we're going to say equals require UUID.
>
> **[8:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=505)** And now that we've done that, what we're going to do is we're going to go down to here and generate a new ID for the user.
>
> **[8:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=511)** So here's what that will look like is we'll say right after we hash that password, we'll say constant user ID equals, and actually here, we'll just call this ID equals uuidv4 like this, and we'll add that to the user like this.
>
> **[8:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=529)** All right?
>
> **[8:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=530)** And the last thing we need to do here is we're going to want to send back something to the user that'll probably involve this ID.
>
> **[8:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=538)** But for now what we'll do, just so that we can verify that this server is working is we're going to say something like, you know, response JSON, and we'll just send back the ID that we generated.
>
> **[9:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=553)** Okay? And we also have to call DB save.
>
> **[9:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=557)** So, right, we need to actually import this save DB function here.
>
> **[9:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=561)** And I am writing sync just to make it a little bit easier.
>
> **[9:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=564)** You could also change this to fs.write file, you know, if you're using promises or something like that, and make this an async function for now, it doesn't really matter, it's an easy thing to change.
>
> **[9:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=574)** So I'll just leave it the way it is and we'll need to import that.
>
> **[9:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=579)** So we'll say DB and save DB.
>
> **[9:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=581)** And then we just need to go down here.
>
> **[9:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=583)** And after we're done, we're going to call save DB like that.
>
> **[9:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=588)** And that should be all we need to do.
>
> **[9:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=590)** So let's test this endpoint out right now.
>
> **[9:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=593)** We're going to need to restart our server by going into our server terminal, then stopping our server, and then we're going to rerun it with nodeserver.js.
>
> **[10:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=603)** You can use something like node demon in order to make this work.
>
> **[10:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=606)** But now in order to test this, we're going to need to make our port visibility public.
>
> **[10:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=611)** So just right click on this, go down to port visibility and say Public, make sure you do that for 3000.
>
> **[10:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=618)** Oops, I did that to the wrong one. Doesn't really matter.
>
> **[10:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=620)** We'll change this to port visibility public as well for port 3000.
>
> **[10:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=625)** And now we're going to open up a tool called Postman.
>
> **[10:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=628)** Feel free to download this if you don't already have it.
>
> **[10:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=632)** It's a great full stack tool that allows you to test out your server on the backend without having to actually, you know, create the front end functionality first.
>
> **[10:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=642)** So we're just going to create a new request here.
>
> **[10:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=645)** This is going to be a post request to whatever that URL is.
>
> **[10:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=648)** So we'll go back here, copy this URL for port 3000, right?
>
> **[10:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=654)** Just click that little clipboard icon and then we'll go back over to Postman.
>
> **[10:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=658)** We're going to paste that.
>
> **[10:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=659)** And this is of course going to be /API/sign-up.
>
> **[11:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=663)** That's that new endpoint we created.
>
> **[11:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=666)** And for the body, this is where we're going to include the email and password.
>
> **[11:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=670)** So let's just create something real quick.
>
> **[11:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=672)** We're going to say this is going to be JSON and we'll say email.
>
> **[11:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=678)** That'll be, I'm just going to use sean@[gmail.com](https://gmail.com).
>
> **[11:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=681)** Obviously not a real email address.
>
> **[11:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=683)** And then we're going to say password.
>
> **[11:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=685)** And obviously this isn't going to be a real password, but this will be ABC123!
>
> **[11:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=692)** And if we click send, what we hope to see here is sure enough, we get back this response with the ID of the user that was created.
>
> **[11:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=701)** And if we go back to our server, now, what we should see is that there is this DB.JSON file, this is where we can see all of the data that's saved in our database.
>
> **[11:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=712)** So that's really nice feature about, you know, using this kind of database, at least for demonstration purposes, is we can immediately see if what we did worked.
>
> **[12:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=720)** And you can see the password hash here, which is quite a bit different than ABC123.
>
> **[12:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=725)** So anyway, that is how to create a simple server endpoint that allows user to sign up.
>
> **[12:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-sign-up-route-to-the-server?u=76281980&t=730)** So the next thing we're going to need to do is actually add JSON web tokens to this so that we can send that back to the user once they've signed up.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), const (7), require (3), this, (3), public (3)
> **CLI Commands:** make (13), find (2), npm (2), node (1)
> **Env Vars:** json (5), uuid (3), api (2), npm (2), url (2)
> **Tools:** terminal (3), postman (2)
> **Prerequisites:** install (5)
> **File Paths:** nodeserver.js (1), db.json (1)
> **Ports:** port 3000 (2)
> **Cross-References:** later in (1), go back to (1)

#### Generating JSON Web Tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=0)** - [Narrator] All right, so now that we've created our signup route on our server, we need to actually add jsonwebtokens into this.
>
> **[0:08](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=8)** Now, there are a lot of different packages that you can use for doing this, but the one that we're going to use is the most straightforward, and that is jsonwebtoken.
>
> **[0:17](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=17)** So just like we did with the other packages, we're going to need to install this one.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=21)** So you can actually just open up, well here, we'll open up the same one that we had.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=25)** We're going to say npm install jsonwebtoken, all one word, no dashes, nothing.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=32)** And that will install that for us.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=35)** So now that we've done that, here's how we add this to our signup route.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=40)** First of all, we'll just add this in as an import.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=43)** We'll say const jwt = require jsonwebtoken.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=49)** All right, now that we've done that, let's actually scroll down to where we're going to need to generate that token.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=55)** So, this is going to be after we've inserted the user into the database, right?
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=59)** So, we've already added the user to the database, and called saveDb.
>
> **[1:03](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=63)** We'll just kind of, you know, put those a little closer to each other so they don't accidentally get separated.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=68)** And now, before we respond to the user, and by the way, we're going to be responding in a slightly different way than what we're doing here, we're going to actually create a jsonwebtoken, and we're going to do that by saying, here's where we're going to use that library, jwt.sign, and we're going to pass all of the data that we want to be in that jsonwebtoken.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=91)** Now, you can decide how much data you want in that payload, just by the data that you pass here.
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=98)** All right, so in this case, what we're going to do is we're going to include everything except the password hash.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=105)** We don't want the password hash in there, because that's really just meant for the databases (indistinct) right?
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=110)** So, here's what we're going to do.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=112)** We're going to say id, all right, that's the ID we generated.
>
> **[1:56](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=116)** We're going to have the user's email, we're going to have the user's info, which is the starting info, once again, that we created up there.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=123)** And then we're going to have isVerified: false.
>
> **[2:06](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=126)** And that should be all we need to do.
>
> **[2:08](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=128)** Now, the way this works is this jwt.sign method also takes something called a jwt SECRET, right?
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=137)** This is a secret key that I mentioned in a previous video, and we're going to set that in the environment by saying process.env.jwt_SECRET.
>
> **[2:28](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=148)** Now, what you actually call this thing, it doesn't really matter, but I'll show you in just a minute how we can actually set this in our environment.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=156)** This is the SECRET key that our server's going to use to actually sign that jsonwebtoken.
>
> **[2:43](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=163)** And next, we're going to actually set an expiresIn date.
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=168)** So, we'll say expiresIn: and we'll say two days.
>
> **[2:51](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=171)** You can set that to whatever you want.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=172)** This is an additional thing that the JWT library adds on, right?
>
> **[2:58](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=178)** This ability to add an expiration to the web token.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=182)** And last but not least, we're going to have to add a callback.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=186)** This is going to be called with any errors that occur while signing, and with the token itself, and this is not a promise, this isn't something, I guess you could convert it to a promise and then use async if you wanted to, but I'm just going to put everything inside this callback because it's a little bit easier in this case.
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=202)** So now that we have the token, well, first of all, let's make sure there's no error.
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=206)** We'll say if there's an error, we'll say return response.status.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=210)** We'll send like a 500 status code along with that error, like so.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=216)** Otherwise, what we're going to do is we're just going to respond with the token and we're not going to include the ID.
>
> **[3:43](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=223)** Here's why.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=224)** Because the ID is going to be inside the token itself.
>
> **[3:48](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=228)** So the front end, if the front end is wondering what the ID of the user is, if they want to like load the user's information or something like that, they'll be able to get that directly from the token itself, right?
>
> **[3:59](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=239)** Because we're adding that in there.
>
> **[4:01](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=241)** So we're just going to say response.json, and we're going to send back the token, like so.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=247)** All right, so that should be all we need to do.
>
> **[4:11](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=251)** Let's test these changes by, first of all, restarting our server.
>
> **[4:14](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=254)** So we'll go into our backend, stop it and restart it.
>
> **[4:18](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=258)** Let's make sure that that didn't mess up the ports here.
>
> **[4:21](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=261)** It might have.
>
> **[4:22](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=262)** Nope, it looks like it's still set to public.
>
> **[4:25](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=265)** So, let's go back to Postman and test this out.
>
> **[4:27](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=267)** We're just going to send, well, I guess we do need a new email here.
>
> **[4:31](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=271)** So I'm just going to say shaun2@[gmail.com](https://gmail.com), because right now it will actually give us an error, since we stored the first email in our database.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=280)** So we'll say Send, and what we hope to see back... And oops, it looks like that didn't work because we got a 500 Internal Server Error, and I believe that's because we didn't set a JWT secret.
>
> **[4:51](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=291)** So, let's actually stop our server again.
>
> **[4:53](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=293)** And all you need to do, this depends on your operating system, but on a Mac, you can just say export JWT_SECRET= and then you can put whatever SECRET you want.
>
> **[5:05](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=305)** Now, keep this actually secret, if you're planning on using it in production.
>
> **[5:08](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=308)** I'm just going to do abc123, like that.
>
> **[5:12](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=312)** That will be our secret. Not a good secret at all.
>
> **[5:14](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=314)** So please don't use this in production, but that will be all right for our purposes now.
>
> **[5:20](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=320)** So let's just hit Enter there.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=321)** And now, let's try running our server again.
>
> **[5:25](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=325)** So there we go, node server.js, and if we go back and try Postman again, we should be able to, well, here we're going to need to do Shaun3 there, because you know Shaun2 is now in the database as well.
>
> **[5:39](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=339)** So we'll just say Send.
>
> **[5:40](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=340)** And sure enough, we see that we get back this token, which is quite long, right?
>
> **[5:45](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=345)** That's definitely a lot longer than what I showed you in the slide.
>
> **[5:49](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=349)** But this actually contains all of that data that we added to the jsonwebtoken, right?
>
> **[5:55](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=355)** So, all of the data that we added right here, this is all in there in base64 encoding.
>
> **[6:03](https://www.linkedin.com/learning/react-authentication-25660373/generating-json-web-tokens?u=76281980&t=363)** So anyway, that is how to generate jsonwebtokens and send them back to the user in our signup route.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (2), this. (1), this, (1), import. (1)
> **Env Vars:** secret (3), jwt (2), jwt_secret (1)
> **CLI Commands:** make (2), npm (1), node (1)
> **Code Identifiers:** expiresin (2), savedb (1), isverified (1)
> **File Paths:** process.env (1), response.json (1), server.js (1)
> **Prerequisites:** install (3)
> **Cross-References:** previous video (1), go back to (1)
> **Tools:** postman (2)

#### Adding a log-in route to the server
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=0)** - [Instructor] All right, so now that we've created a signup route, let's do the same thing but with a login route.
>
> **[0:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=6)** So the login route's going to look pretty similar to the signup route here.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=10)** The main difference is that instead of creating the new user, like we did up here, we're just going to be loading that user out of the database and checking to make sure that their password is correct.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=24)** So here's what this is going to look like.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=25)** All right, we'll leave the signup route up at the top because that's the first part of the flow generally.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=30)** So here's what this will look like.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=31)** We'll say app.post, we're going to have this be a post route again, and the path for this is going to be /api/login.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=39)** And then for the handler, we're going to say request and response.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=44)** And we'll start off here by getting the email and password off the request body, just like in the signup route, all right?
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=53)** And the next thing we're going to do is we're going to load the user from the database.
>
> **[0:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=56)** So all we need to do for that is say const user equals, and then we will say, db.users.find, we're going to find the user whose email matches the email in the request.
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=71)** And if there's no user matching that, right, what we're going to do, we're going to say, if not user, then what we'll want to do is we're just going to say return response.send status, and we're going to send back a 401 status like so.
>
> **[1:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=86)** And otherwise what we're going to do is we're going to check whether the user's password is correct.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=91)** So we'll say const password is correct equals, and we're going to use the bcrypt library here.
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=99)** So we'll say await bcrypt.compare.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=103)** And we're going to compare the password that was included in the request with the user's password hash, right?
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=111)** That's how we do this here.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=112)** We can just pass in the password and then user.password hash and that will compare those for us.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=120)** And we do need to make this callback async here in order for this to work.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=123)** There we go.
>
> **[2:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=124)** So now, right now that we know whether the user is logged in or not, we can check and say if password is correct.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=132)** Well, in that case what we want to do is we want to load the user and send back a JSON web token with the user's information in it.
>
> **[2:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=139)** Otherwise we'll do this one first because this is shorter.
>
> **[2:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=142)** We're just going to say response.send status and we'll say 401.
>
> **[2:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=147)** All right, cool. So inside password is correct.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=151)** Now we're just going to say jwt.sign.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=154)** And in fact, this is going to be almost identical to what we had before.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=157)** So let's just, we're just going to go back up into our signup route, take this jwt.sign thing, copy that, and we will paste that down here.
>
> **[2:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=167)** There we go.
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=169)** And now what we can do is, well, first of all, we will need to get the id, email info, all that kind of stuff from the user.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=176)** So let's just make that a little bit easier here by saying const ID, email, there we go.
>
> **[3:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=183)** Info. All right.
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=184)** That's just going to be the info there.
>
> **[3:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=185)** So we don't need starting info anymore.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=188)** And then we will have is verified and we're going to send that back to the user by saying equals.
>
> **[3:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=197)** And this is going to be equals user, right?
>
> **[3:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=199)** The one that we loaded from the database.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=201)** And then this just needs to be, is verified down here.
>
> **[3:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=204)** And that is pretty much all we need to do.
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=206)** So let's give this a try.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=208)** Now what we're going to try and do is, first of all, we'll need to rerun our server of course.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=213)** So we'll just stop it and restart it like so.
>
> **[3:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=218)** And then what we'll do is we'll go over to Postman and we're going to change this to log in.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=224)** Let's see, it's always a little bit difficult to remember whether we said login as one word or log dash in.
>
> **[3:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=231)** I'm actually going to add a dash there and restart the server, you know, just to keep it consistent since we did the same thing for signup.
>
> **[3:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=237)** So now we'll go back and say log-in and we'll try and log in with really any of these Seans, right?
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=245)** We can do sean@[gmail.com](https://gmail.com) and we'll try and log in with Abc123, which is the password we used and what we hope to see is something that looks a lot like what we had down here.
>
> **[4:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=256)** All right, so let's give this a try.
>
> **[4:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=258)** We're going to click send and sure enough we see that we get that token sent back to us, which is exactly what we wanted, all right?
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-log-in-route-to-the-server?u=76281980&t=268)** So anyway, that is how to add a login route to our server.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (3), try. (2), await (1), pass (1)
> **CLI Commands:** make (3), find (2)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **API Endpoints:** /api/login (1)
> **Env Vars:** json (1)
> **Tools:** postman (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Adding JWTs to the front-end
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=0)** - [Instructor] All right, so now that we've added JSON web tokens and a few routes to the server, the next thing that we're going to do here is we're going to start implementing JWTs on the front end, right?
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=12)** Or integrating them with the front end that we have.
>
> **[0:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=14)** Now, the easiest way to go about this is going to be if we open up our front-end folder here to add two custom hooks that will take care of the functionality of, you know, basically getting the data out of the JSON web token if we have one.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=31)** And then parsing the user from that.
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=34)** So here's what this is going to look like.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=35)** I'm going to create a new file here.
>
> **[0:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=38)** The first new file is going to be called useToken.js, and then I'm going to create another new file, and this is going to be called useUser.js.
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=50)** Now here's how this is going to work.
>
> **[0:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=52)** useUser is actually going to use the useToken custom hook.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=58)** And really useToken is going to be more of a general purpose thing for dealing with the JSON web token that we have in the browser.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=68)** So here's what this is going to look like.
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=70)** We're going to start off with useToken, of course, as I said, and we're going to start off by importing the useState hook from React.
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=77)** All right? And once we've got that, we're going to export this new useToken custom hook.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=85)** And that's going to look like this.
>
> **[1:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=86)** We're just going to say const [token, setTokenInternal].
>
> **[1:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=93)** We're going to call it that because this is going to be used only internally in this custom hook.
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=99)** We're going to actually add a set token function that the client code will be able to use.
>
> **[1:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=104)** You'll see why that is in just a minute here, of course.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=107)** But now we're just going to say = useState.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=110)** And the next question that we need to answer here is where we actually want to store the token, right?
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=119)** That we get back from the server.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=120)** So in other words, once the user logs in on our front end, how are we going to basically make sure that that token persists when the user visits other pages, closes our site, things like that.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=133)** Well, the easiest way to do this though, not necessarily, the best way as you'll see, is to simply store the token in local storage.
>
> **[2:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=140)** So what we're going to do here is we're just going to say return and then we're going to say localStorage.getItem, and we're going to store the token under the key token.
>
> **[2:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=152)** All right? Pretty straightforward.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=154)** So that is going to be the initial state for this token state variable is whatever happens to be in local storage.
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=161)** Now, if there's nothing in local storage, then that's just going to be undefined, right?
>
> **[2:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=165)** And that's perfectly fine.
>
> **[2:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=166)** That will indicate that we don't have any token currently because no user is logged in.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=172)** That's what that will mean to us.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=174)** Cool. So the next thing we're going to do is we're going to define a setToken function here that's going to take care of this.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=181)** We're going to say = newToken.
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=184)** And this is just going to modify local storage and modify the token state variable at the same time.
>
> **[3:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=192)** That'll make sure that those two things are kept in sync.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=195)** All right? So here's what this will look like.
>
> **[3:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=196)** We're going to say localStorage.setItem, and we're going to set the token key here to whatever that new token should be.
>
> **[3:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=207)** And notice here that because newToken is going to be a string, we don't actually need to like stringify this by using JSON.stringify(), just something I wanted to point out.
>
> **[3:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=215)** 'Cause local storage can only store strings.
>
> **[3:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=217)** And then we're going to call setTokenInternal to that newToken as well.
>
> **[3:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=223)** So that's why we defined this as a slightly different type of state variable or state variable modifying function.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=229)** And now that we have this set token thing, all we need to do is return setToken.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=235)** Well token the state variable that is, and the setToken function that we created.
>
> **[4:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=241)** And that is our useToken custom hook.
>
> **[4:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-front-end?u=76281980&t=244)** So the next thing that we're going to do is we're going to go into this useUser hook and actually use our new useToken custom hook to parse and then basically make the user available to other parts of our application.

> [!info]- Semantic Content
>
> **Code Identifiers:** usetoken (7), useuser (3), settoken (3), newtoken (3), usestate (2)
> **Code Keywords:** function (4), this. (2), const (1)
> **Env Vars:** json (4)
> **CLI Commands:** make (3)
> **File Paths:** usetoken.js (1), useuser.js (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Parsing JWT data
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=0)** - [Instructor] All right, so we completed this useToken custom hook, let's go over and implement our useUser hook now, which is, again, going to use our use token custom hook.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=10)** So we'll start off here by importing the useState and useEffect hooks.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=15)** We're going to need both of these from React.
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=18)** And then we'll also import the useToken custom hook that we just created there.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=24)** All right, and now that we've done that, the next thing we're going to do is define our hook.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=28)** So we'll say export const useUser.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=32)** And this one here is going to look like this.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=35)** We're going to start off by getting our token from the useToken custom hook.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=42)** And notice that we're not even using the set token function that we defined there.
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=46)** That's okay, since that'll be waiting around if we ever need to do so, all right?
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=50)** And the next thing that we're going to do is we're going to create this sort of internal function called getPayloadFromToken.
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=59)** So this is going to be where we actually take that token and parse the data that it contains.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=65)** Here's what this is going to look like.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=66)** We're going to say const getPayloadFromToken equals, and this is going to be token, and then we will say const encodedPayload.
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=78)** So I mentioned earlier that by default tokens are Base64 encoded, and what this means is we need to basically decode those, right?
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=88)** We need to decode that data in order to get it into the form that we want it.
>
> **[1:33](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=93)** I'll show you what that looks like in a minute, but here's what that'll look like first, we're going to say token.split.
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=99)** And since the token, remember, consists of three parts, right, the header, a payload and a signature, we're going to need to pull out the payload, which contains the user that we want.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=110)** So here's what that looks like.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=112)** We're going to say token.split, we're going to split it by that period character, which remember is what separates those three parts, and then we're going to get index 1, which is going to be the middle one there, all right?
>
> **[2:04](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=124)** And finally, we just need to decode that by saying return atob, this is just a built-in function that will decode a string, and we're going to say encodedPayload.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=136)** And then we're going to parse this into an actual Java Script object by saying json.parse, all right?
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=143)** That makes sure that that is converted into an actual JSON object that we can work with, all right?
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=149)** So now that we've got that function, here's what this is going to look like.
>
> **[2:32](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=152)** We're basically going to have to use this useEffect hook here to watch the token.
>
> **[2:38](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=158)** And whenever that thing changes, we're basically going to have to call this getPayloadFromToken function and update everything, all right?
>
> **[2:46](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=166)** It just helps us keep the token and the user state in sync with one another.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=170)** So here's what this is going to look like.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=172)** We have to first of all define this user state.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=174)** So we'll say user setUser equals, and we're going to use this use state variable again with this callback that will calculate the initial state for us.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=182)** And for that, we'll just say, if there is no token, we just want to return null, right, because there's no currently logged-in user.
>
> **[3:10](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=190)** That's how we'll communicate that to the component that's using this, right?
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=195)** Otherwise, we're going to say return getPayloadFromToken, and actually pass that token to it like so.
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=203)** And that's all we need to do there.
>
> **[3:24](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=204)** So finally, this is where we're going to use this useEffect hook.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=208)** And we're going to watch, here, I'm going to add that last argument there, just so that I don't forget it, we're going to watch the token for when it changes, right?
>
> **[3:37](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=217)** Remember that that will call this callback function whenever the value inside here changes?
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=222)** And now we just need to say, if there's no token, we want to set the user, right. call setUser null, basically recreating what we did up here, but by calling setUser and using user here.
>
> **[3:58](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=238)** Otherwise, what we want to do is we want to say setUser to getPayloadFromToken called on the token.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=247)** And that is all we have to do, except of course, return the user, and that will make it available to whatever pages, components, et cetera, need to use that user that's contained inside the JSON web token.
>
> **[4:22](https://www.linkedin.com/learning/react-authentication-25660373/parsing-jwt-data?u=76281980&t=262)** So that is how to implement a useUser hook that uses that useToken custom hook that we created previously.

> [!info]- Semantic Content
>
> **Code Identifiers:** getpayloadfromtoken (5), usetoken (4), setuser (4), useuser (3), useeffect (3)
> **Code Keywords:** function (6), const (3), finally, (2), let (1), this. (1)
> **Env Vars:** json (2)
> **CLI Commands:** make (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Adding JWTs to sign-up and log-in pages
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=0)** - [Instructor] Alright, so now that we have the useToken and useUser custom hooks, let's integrate those into our pages, and we'll start off here with the login page and the signup page.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=9)** Now, both of these pages are going to use the useToken custom hook because neither one of these pages is really going to need to care too much about the user, because they're not going to display the user or anything, right?
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=22)** Really all they need to know is whether the user is currently logged in, and when the user does log in, we're going to redirect the user to that user info page.
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=33)** So the user info page is what's going to use that useUser custom hook, but these ones are going to use useToken.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=39)** So here's what this will look like.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=40)** We'll start off by importing useToken.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=43)** All right, there we go, and that didn't get imported for me automatically for some reason, but we'll just reference that like so.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=49)** And the other thing that we're going to need here is we're going to need to import a library called axios from axios.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=58)** So this library is very commonly used in React to make network requests, and this is what we're going to use to actually load data from the server, right?
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=69)** And actually make requests from the front end to our login and sign up endpoints.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=73)** So now that we have that, and actually we need to install Axios, and by the way, one thing you may have noticed is that Codespaces can tend to shut down if you leave it for a little while, and that will basically get rid of your terminals that you have open.
>
> **[1:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=86)** So if that happens to you, you're just going to need to open up a new terminal and make sure you're in the front end directory, alright?
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=94)** And then you're going to run npm install axios like that, okay?
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=98)** So that will install the Axios library for you.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=101)** And now that we have that, we can go into our login page and actually use these two things here.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=107)** So first of all, what we're going to do is inside onLogInClicked, right, where we have this little alert that says log in not implemented yet, we're going to replace this and actually implement it.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=119)** So here's what this will look like.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=120)** We're going to use Axios here to basically take the values that are currently in the email and password inputs, right?
>
> **[2:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=127)** That's these two state variables here, and you can see how they're connected down here if you're curious, and we're going to send that along to the server.
>
> **[2:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=135)** The server's going to check to make sure that the password that was entered was actually correct for that email.
>
> **[2:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=140)** And if all goes well, the server will send us back a token, which we can call setToken on this useToken custom hook to make that happen.
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=150)** So here's what this will look like, and actually while we're at it, let's add this useToken custom hook here by saying const token and setToken to useToken, like so.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=164)** And now we're going to go back down to onLogInClicked, we're going to say const response = await axios.post.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=173)** We'll send that to /api/login and then we're going to have email equal to emailValue.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=181)** That's that state variable that mirrors whatever's in the email input, and we're going to have password, which is going to be passwordValue, and that will be the password input.
>
> **[3:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=191)** Cool.
>
> **[3:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=192)** So again, if all goes well, we're going to get back that token in the response, and I'm going to ignore the error case here right now.
>
> **[3:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=199)** So you would want to put this inside a try-catch block in case something goes wrong with that request, but just to keep things simple and straightforward, we're going to say const token = oops, there we go, response.data and now we're going to say setToken to that token that we got back, and then we're going to say navigate, and we're going to navigate to the home route, which is going to be where that user info page is displayed.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=227)** So that is really all we need to do for logging the user in.
>
> **[3:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=231)** Let's do this same thing over on the signup page.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=235)** Basically, it's going to be almost identical to what we just did here, so we can actually just copy and paste a lot of this stuff.
>
> **[4:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=240)** So if I drag this over here, there we go.
>
> **[4:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=243)** We can add Axios and useToken to the signup page.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=247)** We'll add this token state variable to the signup page as well, like so, right?
>
> **[4:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=251)** Let's adjust the indentation there to make sure that that's all alike, and then we will take this stuff down here, and OnSignUpClicked is going to be a little bit more in depth than what we had before, just because we're going to want to actually check to make sure that like the password values are the same, right, passwordValue and confirmPasswordValue, but that's really it.
>
> **[4:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=271)** So let's just combine these there and we'll open up the signup page again, and this one, first of all, is going to make a request to api/sign-up.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=280)** And actually, let me just double check that server route there that we had.
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=285)** Okay, so sign-up and log-in.
>
> **[4:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=287)** I almost made that mistake.
>
> **[4:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=289)** So let's actually change this onSignUp.
>
> **[4:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=291)** That's going to be sign-up, and on login, that's going to be log-in, okay?
>
> **[4:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=297)** You got to be careful about those things.
>
> **[4:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=299)** That's an easy mistake to make.
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=301)** Alright, and now that we've done that, that should be all we need to do.
>
> **[5:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=303)** We'll actually come back and handle what happens if the password values don't match up here in a future video when we see how to work with this setErrorMessage thing that we have in both our login page and our signup page.
>
> **[5:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=315)** So anyway, that should be all we really need to do in order for our signup page and login pages to work.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=321)** There's not really going to be a whole lot to see yet because we need to integrate this with the rest of our application, but that should be all the setup we need.
>
> **[5:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-sign-up-and-log-in-pages?u=76281980&t=328)** So we might come back here and make a few final adjustments before it'll work once we've put the rest of the stuff in place, but that's all we need for now.

> [!info]- Semantic Content
>
> **Code Identifiers:** usetoken (8), settoken (3), useuser (2), onloginclicked (2), passwordvalue (2)
> **Code Keywords:** let (7), const (3), while, (1), await (1)
> **CLI Commands:** make (10), npm (1)
> **Prerequisites:** install (3), setup (1)
> **API Endpoints:** /api/login (1)
> **Tools:** terminal (1)
> **UI Navigation:** navigate to (1)
> **Warnings:** be careful (1)

#### Adding JWTs to the user info page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=0)** - [Instructor] Alright, so now that we've added this functionality to the signup page and login page, the next thing we're going to need to do in order to see this in action is actually add them to the user info page.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=11)** And here's what this is going to look like.
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=13)** We're basically going to need to use the useUser custom hook that we created to load the user and basically pre-populate these values here, right?
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=24)** Favorite food, hair, color, bio, stuff that the user can edit with those values.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=30)** So here's what this is going to look like.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=31)** We're going to start off here, of course, by importing axios from axios.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=37)** We might not use that right away, but that'll be around for when we need it.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=41)** Then we'll say import useUser from the useUser hook that we created, alright?
>
> **[0:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=48)** useUser.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=49)** And then we're going to import use token as well.
>
> **[0:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=52)** Now, we might not use this one yet, but this one will be around for when we want to do stuff like allow the user to log out.
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=59)** So just keep your eye on those.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=61)** I'm just putting these here for convenience so that I don't forget to import them a little bit later.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=66)** So now that we have those, here's what this is going to look like.
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=69)** At the top of the user info page, the first thing that we're going to do is we're going to get the current user.
>
> **[1:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=75)** We know at this point that there should be one, right?
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=77)** So we'll say user equals useUser, because you know, with the private route that we created earlier, the user shouldn't even be able to visit this page unless they're logged in.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=88)** So there should be a user at this point.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=91)** So now that we have that, we're going to need to populate, as I said, these state variables down here.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=97)** And here's what this is going to look like.
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=99)** We're going to start off, actually right after we get the user I suppose, would be a good place to do this.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=103)** We're going to say const, we're going to get ID, email and info, right?
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=109)** Remember that info, you know, in the database.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=111)** Let's actually open that up here.
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=113)** Db.js, right, db.json.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=117)** Remember that info contains those values, right?
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=120)** So hair color, favorite food, bio, those are all blank right now.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=123)** If we want to, we can actually come in here and edit those so that that's something a little bit more informative to look at.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=129)** I'll leave that up just for now.
>
> **[2:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=131)** So we're going to say const ID, email and info.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=133)** And here's what this is going to look like.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=134)** We're going to say = user, and then use this info thing to populate these.
>
> **[2:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=139)** So here's what that'll look like.
>
> **[2:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=140)** We're going to say info.favoriteFood or empty string, right?
>
> **[2:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=147)** This will just provide a backup in case that's not equal to anything.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=151)** We'll say info.hairColor for this one or empty string.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=156)** And then we'll say for bio, info.bio or empty string there.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=162)** And let's actually bring this together a little bit more.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=164)** I'm going to move this navigate thing down here below, just so that that's hanging around for when we need that and that all this stuff is kind of grouped together a little bit more.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=173)** And now that we've done that, the last thing we're going to implement in this video is we're going to go down here to this reset values function.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=181)** And basically what this one is going to do is when the user goes to the user info page and tries to edit their info.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=188)** So let's say they changed their hair color or something like that, we want them to be able to reset it to whatever the original values were, instead of saving those changes.
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=198)** So here's what that's going to look like.
>
> **[3:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=200)** We're going to just remove this, you know, not implemented yet alert.
>
> **[3:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=204)** And we're going to say set favorite food.
>
> **[3:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=207)** We're going to set that to info.favoriteFood, right?
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=210)** That'll reset it to whatever it was before, regardless of what changes they make to the values in these text inputs here, right?
>
> **[3:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=218)** And then we'll just do the same thing for the rest of them.
>
> **[3:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=220)** So we'll say set hair color to info.hairColor.
>
> **[3:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=226)** And last but not least, we're going to have set bio to info.bio, and that is all we need to do there.
>
> **[3:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=232)** So let's test this out.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=235)** We'll actually go into db.json and we'll try logging in with sean@[gmail.com](https://gmail.com).
>
> **[4:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=240)** Alright, so for hair color, we'll just say brown.
>
> **[4:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=243)** For favorite food, we'll say pizza.
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=245)** And for bio we'll say I like coding and also pizza.
>
> **[4:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=253)** Alright, cool.
>
> **[4:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=254)** So we're going to load this one and we should see if all goes well, these values displayed in the user info page.
>
> **[4:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=261)** But first, if your code space is timed out, you are going to need to run your front end and backend again.
>
> **[4:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=266)** So here's what this is going to look like in backend.
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=268)** I'm going to say cd into backend, and we'll run this one by saying node server.js.
>
> **[4:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=275)** Alright, there we go.
>
> **[4:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=276)** And now for the front end, we're going to go into the front end and say npm run dev, just to run that react app again.
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=285)** We'll also need to go into ports here.
>
> **[4:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=288)** And what we're going to need to do is make the backend public, right?
>
> **[4:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=291)** So we'll say port visibility public.
>
> **[4:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=293)** You do need to do that if your code space is time's out and you have to rerun it.
>
> **[4:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=297)** So we'll make that public and that should make it a lot easier.
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=301)** Now, there might again be a few more bits of fine tuning that we're going to need to do to get this to work, but let's just try it out.
>
> **[5:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=307)** So let's open up our front end in another browser here.
>
> **[5:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=311)** Okay, we should be logged out when we open this up in the first place.
>
> **[5:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=316)** So hopefully this opens up and we can see our app and oops, it looks like that didn't work.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=321)** And I think that that is because we need to actually go back into our app component, right?
>
> **[5:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=329)** Remember that in our app component, this is where we have our routes defined.
>
> **[5:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=332)** And right now we just have is allowed set to true for the user info page.
>
> **[5:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=336)** So we need to actually link that up to whether or not the user is logged in.
>
> **[5:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=340)** And the way that we're going to do this is we're just going to add the useUser custom hook to the app component.
>
> **[5:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=347)** So we'll say import useUser from useUser, and then inside here we're going to say const user = useUser.
>
> **[5:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=355)** And then we just need to our user be the condition on whether or not this should be allowed or not.
>
> **[6:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=361)** So we're going to say private route and then we'll say is allowed, alright?
>
> **[6:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=364)** And this condition is going to be equal to the Boolean value of the user.
>
> **[6:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=368)** So in other words, if user is null, then this is going to evaluate to false.
>
> **[6:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=374)** If user is not null, then this is going to evaluate to true, and that will really nicely either allow or redirect the user from the user info page.
>
> **[6:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=383)** So let's try this again, now that we added that, we're going to go back to here and sure enough, we see that that automatically brings us back to the login page, right?
>
> **[6:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=390)** If we try and delete that and go to the homepage, that's going to automatically redirect us, which is exactly what we want.
>
> **[6:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=396)** Now, before we log in and check that all this works, there are a few other pieces of setup here that I'm going to walk you through.
>
> **[6:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=403)** They're pretty small, but definitely very important.
>
> **[6:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=405)** The first thing here is you're going to want to open up the vite config file and you'll see something that looks kind of like this here, but you're going to want to make it look exactly like this, right?
>
> **[6:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=417)** So change origin true, leave that if there are any other properties, delete those besides this target thing here, this target thing you're going to want to replace with the URL of your server.
>
> **[7:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=429)** And you can get that by opening up your terminal, going to ports, and then looking for the server port.
>
> **[7:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=435)** Make sure it is the server port and not the front end, right?
>
> **[7:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=438)** And you're going to just copy that URL by clicking this little copy local address thing, and you're going to paste it in that string.
>
> **[7:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=446)** Now, the last thing here, well, there's two more things actually.
>
> **[7:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=449)** The first thing is if we go back to our server, you're going to want to make sure that you have this JWT secret thing set, right?
>
> **[7:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=459)** If you're working in code spaces, the unfortunate thing here is that it will reset any environment variables that you set in the terminal when your code space shuts down after a period of inactivity.
>
> **[7:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=473)** Pretty inconvenient, but all you need to do is reset that to the same thing that you had before.
>
> **[7:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=478)** So you're going to say export, and that's going to be JWT_SECRET=abc123.
>
> **[8:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=487)** If you can't remember what the last one you did was, what you're going to need to do is delete your database.json file because you're not going to be able to unhash that password if you don't know the JWT secret, right?
>
> **[8:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=499)** That's really the point of this thing is that if a hacker doesn't have that, they won't be able to directly decrypt these password hashes in the database and they won't be able to find out what the user's passwords are.
>
> **[8:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=511)** So let's just set that to what we had before, alright.
>
> **[8:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=514)** And then we'll rerun our server here with node server.js.
>
> **[8:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=518)** And the last thing here is when we used navigate inside our login page and our signup page, we forgot something and that something is we need to say replace, and that needs to be set to true, right?
>
> **[8:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=532)** That will replace the current URL with this path here.
>
> **[8:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=538)** Otherwise, what that does is that just sticks this path onto the end of whatever the current path is.
>
> **[9:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=544)** So let's do that same thing over here in the signup page.
>
> **[9:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=546)** We'll just say navigate and add replace true, just so that we don't forget this later.
>
> **[9:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=551)** And now we should be able to test this out.
>
> **[9:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=554)** So let's go into our login page here.
>
> **[9:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=558)** I'm going to try logging in with sean@[gmail.com](https://gmail.com).
>
> **[9:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=561)** The password was abc123!
>
> **[9:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=565)** And if we click login in, and sure enough, we see that that brings us to the user info page but now the exciting part is that the user info page is populated with that data that we put into the database, right?
>
> **[9:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=578)** So if we go back and take a look at db.json here, right?
>
> **[9:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=582)** We see that those values are what's being displayed inside of here, and that's exactly what we wanted to see.
>
> **[9:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-jwts-to-the-user-info-page?u=76281980&t=589)** So anyway, that shows that the hooks that we added to the user info page are working.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), const (3), public (3), delete (3), private (2)
> **Code Identifiers:** useuser (9), favoritefood (2), haircolor (2)
> **CLI Commands:** make (7), node (2), cd (1), npm (1), find (1)
> **File Paths:** db.json (3), server.js (2), db.js (1), database.json (1)
> **Env Vars:** url (3), jwt (2), jwt_secret (1)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)

#### Adding an "update user" route
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=0)** - [Instructor] All right, well now that we have our user info page at least partially connected to the server, the next thing that we're going to do is we're going to add functionality for allowing the user to edit these values.
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=13)** Now the reason why this is such a big thing here is because now that we have this token in place, we'll be able to have our server actually make sure that the user who, you know, just logged in is the only one who's able to edit this information, right?
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=29)** Because otherwise, you know, what really anybody could do is send a request to the right endpoint on the server and edit really any other user information in this case, and that's obviously not something that we want people to be able to do, is edit other users' information.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=44)** So here's what this is going to look like.
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=46)** We're going to open up our backend again.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=49)** All right, I'm just going to start sort of like with all of our editors closed, just to keep things clean, We're going to open up server.js, and we're going to add a new endpoint here for updating the user's information.
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=62)** Now here's what this is going to look like.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=64)** I'm going to just scroll down beyond the login route, and we're going to say app.put, all right?
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=71)** So put requests are the usual type of request that's used for updating users or information on the server like this, and we're going to make the URL look something like this.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=82)** We're going to say /api/users and then we're going to use the user's unique ID that we defined up here in the signup route.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=92)** Where is it here?
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=94)** There it is, when we created that user's new ID.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=96)** We're going to use that to identify the user that we want to update, and this is also how we'll make sure, by the way, that that user is actually the one that is making the request.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=107)** So let's scroll back down, and here's what this is going to look like.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=110)** We're going to have our request and response like usual in there, and then we're going to start off by getting the authorization header from the request headers.
>
> **[2:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=121)** Here's what that's going to look like.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=123)** We're going to say const {authorization} We'll see what this looks like from the client side in a little bit.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=129)** = req.headers; And now that we've done that, we're going to say const and get the user ID that was in the path by saying req.params; So again, we now know what user we want to update, and this authorization header, that's going to contain the token that we'll use to tell whether it's actually this user or not.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=153)** So here's what this will look like.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=154)** We're going to say, if (!authorization), right?
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=157)** So in other words, if there was no authorization header included, then something's wrong, and we should send back a 401 status code saying that there was no authorization header that was sent.
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=168)** So we'll say return res.status(401) and we'll say .json and just include a message here, right?
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=176)** This provides a little bit more context for why it's a 401 error.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=182)** All right, so we'll say no authorization header sent.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=186)** And otherwise, right, we can go down here, and we're going to get the token from this authorization header.
>
> **[3:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=193)** Now I mentioned when we first talked about JSON Web Tokens that they would look a little bit like this, right?
>
> **[3:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=200)** They would actually have this word Bearer, and then they would have the JSON token after that, right, looking something like that.
>
> **[3:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=207)** So what we need to do essentially is just get this part of that token, this part of that header that is, and here's how we do that.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=214)** Pretty easy. It's just regular JavaScript.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=216)** We're going to say const token = authorization.split.
>
> **[3:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=221)** We're going to split that on the space character, and we're going to get the second part of that, right, index 1, and that'll give us the token.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=230)** Cool, and now that we've done that, the next thing that we're going to do is we're going to verify that this token was actually a legitimate token, because otherwise what the user could have done, and this is where that last part of the token comes in, right, the signature.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=247)** What the user could have done is they could have gone into their JSON Web Token and changed their ID or, you know, changed other parts about the information that was contained in that token, and they can really make themselves look like whoever they want, right?
>
> **[4:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=263)** So by verifying the token, we can make sure that the token they're giving us and the information inside it is actually information that we ourselves created and gave to them.
>
> **[4:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=273)** So here's what this will look like.
>
> **[4:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=274)** We just need to use that JSON Web Token, right, the JWT Library, and that has a function called .verify.
>
> **[4:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=284)** And all we have to do here is pass that token along with the JWT secret, so just like when we created the JWT, we're going to say process.env.JWT_SECRET, and then we're going to have an async callback here, and this is going to have error and decoded.
>
> **[5:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=302)** This will be the decoded information in the JSON Web Token.
>
> **[5:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=306)** This function takes care of that for us so we don't have to do it on the server here like we did on the frontend with that A-to-B function.
>
> **[5:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=314)** And inside here now, we're going to check if there was an error, right?
>
> **[5:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=317)** If there was an error, then that usually is going to mean that the token, you know, we weren't able to verify the token.
>
> **[5:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=323)** So we're just going to say return res.status.
>
> **[5:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=326)** We're going to send a 401 here as well, but the reason is going to be different.
>
> **[5:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=330)** So we'll say message, and this will be Unable to verify token.
>
> **[5:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=336)** All right, and now that we've done that, we're going to say const {id} => decoded; And now we can make sure that this ID that was in the JSON Web Token is the same ID as the user that we're trying to update here, right?
>
> **[5:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=354)** And again, we know that this ID is intact because we verified the token.
>
> **[5:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=358)** So unless the user, right, who's making this request has our JWT_Secret, which that's a very bad situation, and most of the time, ideally, that will not be the case, right?
>
> **[6:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=369)** Unless the user has that, they won't be able to make any changes to this, so we can trust in this now.
>
> **[6:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=375)** And what we're going to do here is we're going to say, if (id !== userId), then we're going to say return and we're going to say res.status and send back a 403 status code, which means that basically the user who's making the request isn't authorized to do what they're trying to do.
>
> **[6:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=394)** So in this case, they're trying to update another user, and so we'll say .json, and we'll send back message, and we'll say, Not allowed to update that userId, all right?
>
> **[6:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=410)** And that's all we need to do there.
>
> **[6:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=412)** So now, right, assuming, of course, that everything has gone well, that the JSON Web Token was verified, that it's the right user who's trying to do this, now we can actually allow the user to update the data, and here's what that's going to look like.
>
> **[7:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=425)** We're going to start off by getting the updates from the request body.
>
> **[7:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=429)** Here's what this will look like.
>
> **[7:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=431)** We're going to say const updates = and then what we're going to do is we're going to basically just, well, here, first of all, we'll start off by getting the user from the body, right?
>
> **[7:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=443)** The request body should contain the updates that we want to apply to this user.
>
> **[7:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=448)** So here's what that'll look like.
>
> **[7:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=449)** We're going to say const, and that's going to be favoriteFood, all right, and hairColor, and bio, and we're going to say = req.body So now that we have those, we're going to want the updates here to be basically those things.
>
> **[7:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=467)** And the reason that we're doing this separately, right, so we'll say updates = { favoriteFood, hairColor, bio } And again, the reason that we're not just taking the request body blindly is because we don't want users to be able to include extra properties in here, right?
>
> **[8:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=481)** We don't want users to be able to just like include whatever information they want in that request body.
>
> **[8:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=486)** We want to make sure that we only take favorite food, hair color, and bio from there.
>
> **[8:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=491)** So that's what that's going to look like there, and now that we have those updates, what we're going to do is we're going to change them in the database by saying, right, we already have the database, so we'll say db.users First of all, we'll have to find that user, so we'll say const user = and then we're going to say db.users.find We're going to find that user by the ID.
>
> **[8:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=514)** And actually this might be something that we want to put up here.
>
> **[8:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=518)** So we'll say, you know, just to make sure that that user actually exists in the first place.
>
> **[8:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=522)** We'll say const user = db.users.find I think we'll put this after the authorization header there.
>
> **[8:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=528)** All right, so we'll say it right there.
>
> **[8:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=529)** and then we're going to find the user whose ID is equal to that userId property in the request parameters.
>
> **[8:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=538)** And if the user doesn't exist, we're going to send back a 404 status code.
>
> **[9:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=543)** So we'll say, if (!user) then we'll say res.sendStatus(404); All right?
>
> **[9:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=550)** Basically the user wasn't found, and we'll also say return so that that prevents everything else from executing after that.
>
> **[9:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=558)** All right, so we are almost done here.
>
> **[9:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=560)** The last thing we need to do is apply these updates to the user.
>
> **[9:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=563)** So we can do that just by saying user.favoriteFood = updates.favoriteFood All right?
>
> **[9:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=573)** And one possibility here is that the favoriteFood will be undefined, or hairColor or bio.
>
> **[9:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=580)** These might be left out of the request body, so we want to make sure in that case that the original value, right, whatever the original value in user info was, and actually we need to change that to user.info.favoriteFood, right?
>
> **[9:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=593)** We want to make sure that that remains intact.
>
> **[9:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=595)** So we'll say or user.info.favoriteFood.
>
> **[9:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=599)** And we're basically just going to do the same thing with the other properties.
>
> **[10:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=603)** There are probably shorter or more concise ways of doing this, but I'm just going to do it this way because it's a little bit more clear.
>
> **[10:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=609)** So we'll say user.info.hairColor = updates.hairColor and user.info.hairColor as the backup.
>
> **[10:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=619)** Okay? And last but not least, we have bio.
>
> **[10:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=622)** So we're going to say user.info.bio = updates.bio and then user.info.bio, right, the original value as the backup.
>
> **[10:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=633)** All right, and once we've done that, we're going to call saveDb(); just to save those updates to that JSON file, and now what we're going to do is we're going to generate a new JSON Web Token and send it back to the client so that they can have the updated token and display the updated data.
>
> **[10:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=650)** So what this will look like is we're going to say jwt.sign, and actually this is going to be much faster if I just take it from what we had in one of these other ones here.
>
> **[10:59](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=659)** You could probably create some sort of helper function here, but I'll leave that up to you, and I'm just going to put that right inside of here.
>
> **[11:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=665)** And basically we just need to make sure that the new user info is what we're sending.
>
> **[11:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=670)** So here's what that'll look like.
>
> **[11:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=673)** We already have the user's ID, and, in fact, we can just take that user that we have, right?
>
> **[11:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=678)** The updated user there, we can just say jwt.sign.
>
> **[11:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=682)** We can get everything from that user, right, that you could just include the user here, but since we already have the object syntax there, I'll leave it like that.
>
> **[11:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=691)** We have the JWT_SECRET, expires in two days, and then we have, you know, if there's an error, we just send back a 500 status code, and we respond with that token if there's not.
>
> **[11:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-update-user-route?u=76281980&t=702)** And that should be all we really need to do there for that endpoint.

> [!info]- Semantic Content
>
> **Code Keywords:** const (8), this, (5), function (4), case, (3), if ( (3)
> **Code Identifiers:** favoritefood (7), haircolor (6), userid (3), sendstatus (1), savedb (1)
> **CLI Commands:** make (12), find (5)
> **Env Vars:** json (9), jwt (3), jwt_secret (2), url (1)
> **Definitions:** in other words (1), essentially is (1), means that (1)
> **File Paths:** server.js (1), process.env (1)
> **Analogies:** just like (2)
> **API Endpoints:** /api/users (1)

#### Adding update functionality to the front-end
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=0)** - [Instructor] Okay, so now that we've added that update user server endpoint, let's go into our user info page, which I have open here, and we're going to implement this save changes function, which is going to be what gets called when the user clicks save changes after making some changes to these inputs, right?
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=18)** So anyway, let's go back to here and what we're going to do, first of all, we'll start off by deleting this stuff here, and then we're going to make a request to that server endpoint that we just created.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=29)** So here's what this is going to look like.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=30)** We're going to put this inside a try-catch block just because that'll make it safer if something happens.
>
> **[0:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=36)** So we'll say catch error.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=37)** And then inside the tri block here, we're going to say const response equals await Axios dot put right, I imported that up above already.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=49)** And then we're going to, for the path, we're going to say slash API, and I'm using back ticks here so that we can insert the user's ID, we'll say slash API slash users slash and then we're going to insert the ID, right?
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=65)** Remember that we're getting this here from the user up above, right?
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=70)** So we're using our use user custom hook, we're getting the ID email info from that, and that's what we're using down here.
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=77)** So now that we've done that, we're going to include as updates, the favorite food value, right?
>
> **[1:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=84)** Whatever the current value in that input is, the hair color value and the bio value.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=91)** And that should be all we need there except for some headers.
>
> **[1:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=95)** Now you can add headers in Axios by just adding another object to the arguments.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=100)** And we're going to say headers.
>
> **[1:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=102)** And here's where we're going to add our authorization header.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=105)** We're going to say authorization, and this is going to be bearer, right?
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=112)** That's that first part of it there just by convention.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=115)** And we're going to put the token into there as well.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=117)** Now, we don't currently have the token, as you may have noticed, so we're just going to get that using this use token custom hook that we created.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=125)** So we'll just say underneath here, const token, oops, that should look like this.
>
> **[2:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=131)** Token as well as a set token we're going to want, because again, the server's going to send back an updated token for us, and we're going to say equals use token like so.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=145)** Alright, so going back down to our save changes function.
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=150)** After we've sent this request and gotten the response, the response, remember, should have the new updated token in it.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=157)** So we'll say const token, we'll call this new token so that it doesn't interfere with our state variable there.
>
> **[2:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=163)** Equals response dot data, and we're going to call set token with that new token like this.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=170)** All right and finally we're going to show a success message, right?
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=174)** I automated all of this already in this component so that it will automatically hide the success or error messages after three seconds.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=182)** So all you need to do is just call set show success message.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=186)** We're going to set that to true here.
>
> **[3:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=187)** If there's an error, what we're going to do is we're just going to call set error message or set show error message rather, and set that to true there.
>
> **[3:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=197)** And that should be all we need to do.
>
> **[3:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=200)** All right, so let's give this a try.
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=202)** We're going to go back to our application running here.
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=206)** Make sure to hit refresh just to make sure you have the most up-to-date version.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=210)** Sometimes this code spaces set up can lag behind a little bit when you make changes for some reason.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=216)** So we'll try changing my favorite food to, well, we'll change it to pasta, alright?
>
> **[3:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=221)** And then we'll change hair color.
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=222)** Maybe I dye my hair green.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=224)** And for bio we'll say I like coding.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=227)** And now of course we have to change this to pasta.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=229)** So let's click save changes now.
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=233)** And if all goes well, oh, it looks like that didn't work.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=235)** It says uh-oh, something went wrong, couldn't save changes, let's open up the inspector window to see why that was.
>
> **[4:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=240)** You can go to network here and you can actually see what's going on, although you may have to click that again to see what's going on.
>
> **[4:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=246)** And it looks like we got a 404 error, and I actually believe that this is because we didn't restart our server after making those changes.
>
> **[4:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=255)** So just go in here, stop your server and restart it so that those changes will take effect.
>
> **[4:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=259)** Again, you could use something like Nodemon in order to make that happen automatically.
>
> **[4:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=264)** But honestly, we haven't really been making too many changes to our server here, so I thought I would just kind of skip over that part.
>
> **[4:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=271)** All right, so let's try this again.
>
> **[4:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=272)** And what you should be able to do here is click save changes and it looks like we successfully saved our data.
>
> **[4:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=278)** So now if you hit refresh here, you should see that that data is persisted.
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-update-functionality-to-the-front-end?u=76281980&t=285)** Alright, so that's how to add that to the user info page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (3), function (2), this. (2), await (1)
> **CLI Commands:** make (6)
> **Env Vars:** api (2)
> **Cross-References:** go back to (2)
> **Prerequisites:** make sure you have (1), set up (1)
> **UI Navigation:** go to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### State management for tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=0)** - [Instructor] All right, so at this point, we've added a lot of functionality to our application and really hooked up the front and back-end and integrated them as far as, you know, this whole JSON web token thing goes.
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=13)** But there's one thing that you may have discovered doesn't really work very well and it's time to fix that and that is that right now, the way that we have this useToken custom hook implemented and subsequently the useUser hook, which uses the useToken hook, it just doesn't really work because right now we just have a single local useState variable.
>
> **[0:38](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=38)** And what this means is if we use this useToken custom hook in multiple places, it's actually creating independent state variables for the token, right?
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=50)** So you might have noticed if you kind of, like, go through different parts of the application, that this tends to be a little bit out of sync, so here's what we're going to do.
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=59)** We're going to rethink the way that this works and we're going to integrate context into the management of the token here.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=68)** Now you could use something like Redux instead.
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=70)** There's lots of other state management options.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=72)** Context is just the easiest way to get started here.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=74)** So what I'm going to do is I'm going to go into the front-end source directory.
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=78)** We're going to create a new file and we're going to call this thing TokenContext.jsx.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=85)** All right, now, it doesn't really matter how much you know about context here.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=89)** Obviously it's helpful if you do know about context, but the idea behind context is that when we have something like this token where we want the state to be the same throughout the entire application, right, we don't want different versions of this token state in different components, what we can do is we can simply define a context that will manage that single-state variable.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=112)** All right, so if you've worked with Redux before, think about context as just a very small Redux store.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=117)** Anyway, here's what this is going to look like.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=118)** We're going to start off by saying import { useState, createContex }.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=125)** All right, There we go.
>
> **[2:06](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=126)** And we're going to import that from 'react', and we're going to start off here by exporting a new bit of context called TokenContext, all right?
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=137)** And we're going to say = createContext.
>
> **[2:19](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=139)** And the initial value for this thing is just going to be undefined, right?
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=143)** So we won't pass anything as the argument there.
>
> **[2:26](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=146)** And now what we're going to do is we're going to export something else called TokenProvider.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=154)** And this is essentially what's going to define where different versions of this state will exist, right?
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=161)** Different versions of this context.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=162)** Now we're only going to have one, so what you'll see is that we'll put this TokenProvider up in main.jsx so that it wraps our entire application.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=170)** Okay, we'll get there in just a minute.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=172)** But first, what this is going to look like, it's just going to take children.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=176)** And essentially the whole thing here, the whole implementation for TokenProvider is going to be the logic that we used to have inside useToken here.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=186)** So I'm going to copy the main body minus the return statement of useToken, and we're going to bring that over into TokenContext.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=195)** And now what we're going to do is we're simply going to return the TokenContext provider.
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=202)** So <TokenContext.Provider in triangle braces, and we're going to say value= and we're going to make it accessible to everybody, right?
>
> **[3:32](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=212)** We're just going to take the token and setToken parts of the state and make those available to any component inside of here if they use the useContext hook, don't worry if that doesn't make sense yet.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=224)** You'll see what this looks like in just a minute.
>
> **[3:46](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=226)** And then we're just going to put all of the children inside of that provider.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=229)** So this is really just for convenience, right?
>
> **[3:52](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=232)** And now that we've done this, let's go into main.jsx, all right?
>
> **[3:57](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=237)** That's just the entry point for our React application here.
>
> **[4:00](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=240)** We're going to import that provider we just created.
>
> **[4:04](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=244)** So TokenProvider from TokenContext.jsx, you don't need that .jsx on there either.
>
> **[4:10](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=250)** I'm not sure why that was added.
>
> **[4:11](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=251)** And we're just going to say TokenProvider and put the app component inside of that.
>
> **[4:17](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=257)** So what this means is that the app component and everything that it contains will have access to that single-state variable called Token.
>
> **[4:26](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=266)** So here's what this is going to look like now.
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=268)** What we're going to do is we're going to go back over to our useToken custom hook and rewrite it so that it simply uses that context that's available to it.
>
> **[4:37](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=277)** So here's what that'll look like.
>
> **[4:39](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=279)** We no longer need useState, we can actually change that to useContext.
>
> **[4:44](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=284)** And now we can simply say that useToken is just sort of like an alias, if you will, for useContext called on the TokenContext thing that we created there.
>
> **[4:55](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=295)** And that was just automatically imported for me as well.
>
> **[4:58](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=298)** And that's really all that we need to do there to fix that.
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=301)** So let's just test this out again, and you'll probably notice that a few things work a little bit better than they did before.
>
> **[5:07](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=307)** And by the way, we don't need to directly change anything with useUser because now useToken, right, this custom hook in here is going to be using that context.
>
> **[5:16](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=316)** So things will be much more direct now.
>
> **[5:18](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=318)** All right, so let's go back to our application here.
>
> **[5:20](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=320)** We'll hit refresh.
>
> **[5:22](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=322)** Here, let's actually log out.
>
> **[5:23](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=323)** I'm going to open up the inspector window.
>
> **[5:25](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=325)** You might notice some things are different in there.
>
> **[5:27](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=327)** That's because I tested those to make sure that they worked correctly.
>
> **[5:30](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=330)** So I changed my favorite food to pasta.
>
> **[5:32](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=332)** Just ignore that for now.
>
> **[5:33](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=333)** We're going to go into Application and basically delete this token.
>
> **[5:38](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=338)** And now if we hit refresh, we should see the login page.
>
> **[5:41](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=341)** So let's try logging in again. We'll say shaun@[gmail.com](https://gmail.com).
>
> **[5:45](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=345)** The password's going to be abc123 again or whatever you made it for yourself.
>
> **[5:49](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=349)** We'll log in and that'll bring us right here.
>
> **[5:52](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=352)** And now, right, if we change this to, like, something else.
>
> **[5:56](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=356)** So we'll change this actually to broccoli, definitely not my favorite food, but hey, we'll just go with it for the example.
>
> **[6:02](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=362)** So Broccoli. Broccoli.
>
> **[6:04](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=364)** And if we click Save Changes, we should see uh-oh, looks like something's going wrong there.
>
> **[6:09](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=369)** And this actually has to do with a quirk with Codespaces.
>
> **[6:12](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=372)** In order to make that work, right, if you were to inspect that, you would see that you're getting a 401 error, which is a little bit confusing because that error actually isn't coming from our server, all right?
>
> **[6:23](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=383)** You don't need to worry about the details, just know that in order to get this to work, you have to go into Ports and make the front-end port visibility public as well.
>
> **[6:33](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=393)** Again, that's just a quirk with Codespaces.
>
> **[6:36](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=396)** You shouldn't need to worry about that.
>
> **[6:37](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=397)** If you're not using Codespaces, it's a pretty easy fix.
>
> **[6:39](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=399)** So let's just refresh this and we should notice that everything works a little bit better now.
>
> **[6:44](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=404)** So let's try broccoli.
>
> **[6:45](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=405)** We'll try, "I like coding and also broccoli."
>
> **[6:49](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=409)** And if we click Save Changes, sure enough, that will work successfully.
>
> **[6:53](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=413)** And if we refresh here, all right, there we go, we'll see that sure enough, that shows broccoli and that's been persisted.
>
> **[7:00](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=420)** And you can also see that in the database as well.
>
> **[7:02](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=422)** So anyway, that is pretty much all we need to do for the front-end.
>
> **[7:06](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=426)** The last thing we're going to do in the next video is we're going to see how we can implement this Log Out button, which currently just says, "Log out functionality is not implemented yet."
>
> **[7:15](https://www.linkedin.com/learning/react-authentication-25660373/state-management-for-tokens?u=76281980&t=435)** All right, so that's what we'll take a look at next.

> [!info]- Semantic Content
>
> **Code Identifiers:** usetoken (8), usestate (3), usecontext (3), useuser (2), createcontex (1)
> **Code Keywords:** let (7), import { (1), pass (1), this, (1), delete (1)
> **CLI Commands:** make (6)
> **File Paths:** tokencontext.jsx (2), main.jsx (2)
> **Cross-References:** go back to (1), in the next (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)

#### Adding log-out functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=0)** - [Instructor] All right, so the last thing that we have to do here, as I said, is implement some logout functionality.
>
> **[0:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=6)** So let's go into our UserInfoPage and we can also close most of these here too.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=9)** So we'll just close all of those like so, and open our UserInfoPage back up.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=15)** And now all we have to do is go back down to the logOut function that's already in here and basically just rewrite it so that it logs the user out.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=25)** Now this is pretty easy to do.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=27)** All we really have to do is remove, and oops, that's the wrong one there.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=31)** All we really need to do is remove the token from localStorage and send the user back to the login route, right?
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=40)** We're just going to automatically redirect the user there.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=42)** So here's what this is going to look like.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=44)** All we really have to do is call setToken here.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=47)** And we're going to set that to undefined, right?
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=50)** That's going to remove it from the state anyway.
>
> **[0:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=52)** And we might also want to open up a TokenContext here and basically add a case for that.
>
> **[0:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=56)** So we'll say, if not newToken, in other words, if it's being removed, what we'll do is we'll just say return localStorage.removeItem('token').
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=70)** And that should be all we need to do there.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=72)** So now that we've done that, let's just reroute the user back to the login page by saying navigate and we're going to navigate them back to the log-in page.
>
> **[1:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=84)** We don't need that replace true thing because this is just going to add log-in onto the end of the current path, which is the home route.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=92)** So here's what this is going to look like.
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=94)** We're just going to go back to our application, which is running here, and hit Refresh to make sure we have the most up-to-date version.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=101)** And now if we click Log Out, what we're going to see is sure enough, it takes us back to the Log In page and if we inspect the local storage now, if we go into our application, we're going to see that there's nothing in there.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=114)** So that is how you can log the user out.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=117)** And by the way, since we haven't actually tested out the Sign Up page yet, as far as I know, let's do that now.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=123)** First of all, in case you tested this out with a lot of different numbers, you're going to want to make sure that you're only using an email that you haven't used yet.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=132)** So let's go into our backend db.json, and we see Shaun1, Shaun2, Shaun3.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=137)** Let me actually remove these other ones because we don't need those anymore.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=141)** We'll leave shaun@[gmail.com](https://gmail.com).
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=144)** All right, we'll save that.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=145)** And now what we're going to do is we're going to try signing up.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=149)** So let's actually restart our server so that that takes effect.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=153)** We'll just go into our backend, restart it like so.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=156)** And now if we go back to our app, and we'll just hit Refresh here just for good luck, what we're going to do is we're going to sign up with another email.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=164)** I'm going to use shaun2@[gmail.com](https://gmail.com).
>
> **[2:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=166)** For the password here, I'm going to say abc123 exclamation point, and the same thing for the confirm password.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=174)** And now if we click Sign Up, if all goes well, sure enough, that will take us to this blank user info page where we can enter in our user info.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=182)** All right, so for favorite food, maybe we'll say something like chicken.
>
> **[3:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=185)** For hair color, maybe we'll say something like black.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=188)** And for bio, we'll say something like, "Hello, this is just a filler bio."
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=195)** All right, something like that.
>
> **[3:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=196)** And if we click Save Changes, that should work for this new user.
>
> **[3:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=199)** And just to double check, if you go back and take a look at db.json now, you should see that new profile in there with the correct info that we just entered.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=208)** And just for good measure, let's log out, and sure enough, that brings us back to the Log In page.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=214)** So at this point, we have a fully functional if very simple application that allows us to log in, edit info, and log out, as well as sign up.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-log-out-functionality?u=76281980&t=224)** So congratulations on getting this far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1)
> **Code Identifiers:** localstorage (2), logout (1), settoken (1), newtoken (1), removeitem (1)
> **File Paths:** db.json (2)
> **CLI Commands:** make (2)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **Cross-References:** go back to (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)


### 2. Email Verification

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The basic email verification process
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=0)** - [Instructor] At this point in our application, we have a working authentication flow that allows users to both sign up and log into our application.
>
> **[0:08](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=8)** And it also uses JWTs to keep our users logged in and make sure users can only access their own data.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=16)** Now the next thing that we're going to look at adding to our application is an email verification flow.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=23)** You see, at the point their application is currently at, users can create accounts with any email address they want, regardless of whether or not they actually own that email address.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=32)** And that's obviously not ideal because we need a valid email address to communicate with our users and do things like allow them to reset their password, which we'll look at later in the course.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=41)** And obviously, we also don't want users to be able to use each other's emails to create accounts.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=47)** So what we're going to do is implement our own full stack email verification flow, basically, from scratch.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=53)** But the first thing you might be wondering is, how exactly does this whole flow work?
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=58)** Well, just to make sure we're on the same page, let's walk through the basic email verification flow step by step.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=66)** Now, the email verification process begins when a user creates a new account on our application.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=73)** At this point, they've entered their email and password, and this information will then be sent to the signup endpoint on our server, which creates a new user account and then stores the user's information in the database, right?
>
> **[1:26](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=86)** We've seen this so far.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=88)** Now, here's where email verification comes in.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=91)** In addition to the email and password that the user created their account with, our server is going to create a randomly generated verification hash that the user can't see, and this will be used to prove that the user actually has access to that email address.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=107)** So once we've generated that verification hash, we're going to send an email to the email address that the user provided, and this email will contain a link with the verification hash that the user can click.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=120)** And next, if the user actually owns that email address, they'll be able to access this link, which will send them to a special page in our application that takes this verification hash and sends it to the server to see if it's the hash that we actually generated for the user.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=138)** And of course, if it is, we're going to show the user a message saying that their email was successfully verified, at which point, the user's account will be marked as verified in the database, and they'll be able to access all of our application's features.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=153)** Well, those are the basics of email verification.
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-email-verification-process?u=76281980&t=155)** Obviously, there are many different variations of this flow that we could implement, and if you're familiar with any of those, feel free to implement them yourself once we walk through implementing this one here.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Cross-References:** later in (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Setting up an email provider
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=0)** - [Instructor] Well, now that we talked about what the basic email flow is going to look like, let's get started with seeing how we can send emails from a node.js server, right?
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=11)** That's going to be a key part of this whole flow.
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=13)** So we're going to be using SendGrid here, which is really just an easy tool to get started with.
>
> **[0:20](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=20)** So you're going to need to create an account here.
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=22)** I won't walk you through that. It's pretty easy.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=24)** And what you're going to want to do here is go to settings and then sender authentication.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=30)** Now this might also be available in your dashboard here.
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=33)** All right, so you should see something like this once you log in.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=37)** And if you click create Sender identity, that'll take you to the same spot.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=41)** But really the idea here is that you want to create some sort of email address that you're going to be sending these emails from.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=49)** Now, ideally, if this is for a business, you're going to have some sort of like contact at something, you know, [xyzcompany.com](https://xyzcompany.com), something like that.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=58)** But right now, I'm just going to use my own information here as well as a fake email that I've set up for this course.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=66)** So from name, I'm just going to use my own name here.
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=69)** From email address, this is going to be the email address.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=72)** You do have to have an account for this because there will be a little bit of setup with that.
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=77)** So I'm going to do shaun.linkedin.learning@[gmail.com](https://gmail.com).
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=83)** Okay? Again, you are going to have to set up an email address for this, unless you want to use your own personal email address just for testing, which you can also do.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=91)** And then for reply to, for this, we're going to have to basically put in either the same email address or some other email address, right?
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=99)** This just tells where users to send their emails if they have questions or if they encounter problems.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=105)** It's just a required field, so I'm going to use that same email address as what we put in there.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=110)** There we go.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=111)** For company address, I'm just going to do a fake address here.
>
> **[1:56](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=116)** Alright, that is a required field.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=118)** Again, if you're planning on actually using this for professional purposes, you'll want to put your real address in there, your real company address in there.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=125)** But again, just for testing purposes, I'm putting in this address you see here.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=129)** And finally, I'm going to just say something like Shaun's Email for the nickname.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=134)** This would just be basically a memo for reminding you which one's used for which.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=138)** If you have multiple email addresses here.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=141)** So let's click create, and that should tell you that the sender has been created.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=145)** And in order to verify this, we're going to have to check our inbox.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=149)** So a little bit ironic that we have to verify our email address in order to verify our user's email addresses, right?
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=156)** In order to set this whole flow up.
>
> **[2:38](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=158)** So I'm going to close this and I'm actually going to open this inbox up, right?
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=161)** This is the one that I set up just for this purpose.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=164)** Let's just hit refresh and see if that shows up.
>
> **[2:46](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=166)** And sure enough, please verify your Single Sender.
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=168)** We're going to say verify Single Sender like so.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=170)** And that should take us back to here.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=173)** Alright? And you should see that it says sender verified.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-an-email-provider?u=76281980&t=176)** So really this is going to look very similar to what we did previously, and that should be all the setup that we have to do for our SendGrid account.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), from. (1), finally, (1)
> **Prerequisites:** set up (2), setup (2)
> **URLs:** [xyzcompany.com](https://xyzcompany.com) (1), [gmail.com](https://gmail.com) (1)
> **File Paths:** node.js (1)
> **CLI Commands:** node (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Creating an email provider API key
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=0)** - [Instructor] All right, well now that we have the basic account set up for SendGrid, we're going to need to get an API key, which is what our application will use in order to let SendGrid know that it's our application, right?
>
> **[0:14](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=14)** This is how most APIs track things like billing, usage, things like that.
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=18)** So what you're going to want to do here is click on this Email API link, and then go to Integration Guide.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=25)** And you're going to click on the Choose button here for Web API, and then you're going to click Choose for Node.js, right?
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=32)** This will contain some really nicely structured instructions for getting your app set up.
>
> **[0:38](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=38)** We are going to do things a little bit differently, so you'll just have to bear with me here.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=42)** And the first thing we need to do here is we're going to create an API key.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=49)** And let's just call this something like, you know, we'll say React Authentication Key, all right?
>
> **[0:56](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=56)** You can call it whatever you want.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=58)** If you're designing a specific app, you can use the name of that app there, and we're going to click Create Key here.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=64)** And you can't see this because it's blurred out, but this thing here is the secret key that we're going to use to access the API.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=73)** Now, what you're going to want to do here is what you see down below, and this is basically set up your environment so that that key is available.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=83)** Now, I wouldn't recommend using the way that they recommend here.
>
> **[1:27](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=87)** What I would recommend doing instead if you're working with Codespaces, is going to your GitHub account settings, right?
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=94)** So you can do that by going to your account and then clicking on Settings, and then go to Codespaces under that.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=100)** And as you can see, I've been using the JWT_SECRET here under Codespace user secrets, just because that makes it much easier to persist those things more long term.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=110)** And you can add a new secret here.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=112)** And basically what we'll do is we'll call that SENDGRID_API_KEY.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=119)** And then we're going to paste the value of that inside of there.
>
> **[2:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=122)** And last but not least, we just need to select the repositories that we want this to be accessible from.
>
> **[2:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=128)** So I'm going to look for this one here.
>
> **[2:10](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=130)** You're going to need to look for whatever one you're working with here, and that's going to be React authentication for me.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=137)** If you've created a fork or something like that, you're going to need to select that one.
>
> **[2:20](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=140)** And then we're going to click Add Secret. Okay?
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=144)** Great.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=145)** So now that we've added that secret, what we're going to do next is we're going to go back to Codespaces.
>
> **[2:32](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=152)** All right?
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=153)** And as you can see, mine restarted, which is why it's so nice to have those things in the GitHub secrets as you just saw.
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=161)** And that's going to open this back up.
>
> **[2:43](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=163)** And what you should be able to do once your Codespace reactivates, I believe you will have to restart it in order for those secrets to take effect if you haven't already.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=173)** What you can do in order to test and make sure that those are accessible is you can just open up a terminal here and you should be able to say echo along with a dollar sign and the name of the secret you want to test.
>
> **[3:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=187)** And, oops, let me just go back to that there.
>
> **[3:09](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=189)** So if I say echo $SENDGRID_API_KEY, you should be able to see that there.
>
> **[3:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=197)** And if you decided to do the JWT secret thing here as well, which I would recommend, you can echo that and you should see that one there too.
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=206)** All right, so the last thing here is we're going to change directories into our backend and we're going to install the SendGrid mail library into here.
>
> **[3:37](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=217)** So we're going to say npm install, this is going to be @sendgrid/mail, that's just the NPM package name, and that is the library that we're going to use in order to send emails.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=230)** So that should be all we need to do.
>
> **[3:52](https://www.linkedin.com/learning/react-authentication-25660373/creating-an-email-provider-api-key?u=76281980&t=232)** The next thing we're going to do is take a look at how to send emails from a Node.js server.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), sendgrid_api_key (2), jwt_secret (1), jwt (1), npm (1)
> **CLI Commands:** node (2), npm (2), make (1)
> **UI Navigation:** click on (2), go to (2), select the (1)
> **Prerequisites:** set up (3), install (2)
> **Code Keywords:** let (3), from. (1)
> **Tools:** github (2), terminal (1)
> **File Paths:** node.js (2)
> **Cross-References:** go back to (2)

#### Sending emails from Node
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=0)** - [Instructor] All right, well now that we've got our API key and we also have installed the SendGrid library into our NPM project, the next thing that we're going to do is we're going to send our first email.
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=12)** Now you can see that there's some sample code here, and you can feel free to copy that and kind of edit it to your liking.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=19)** But we're actually going to do this a little bit differently.
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=22)** And I'm going to just select this.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=23)** I've integrated the code above, and click Next: Verify integration.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=27)** And this allows you to test it.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=29)** And basically this is going to show you whether it's working or not.
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=33)** So this is a very important step here, of course.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=35)** So let's go back to our editor, and what we're going to do is we're going to create a function that will basically take care of sending emails for us, and then we'll create a test file that will test that function.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=47)** So here's what this will look like.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=49)** Inside back-end, we're going to create a new file here and we'll call this something like sendEmail.js.
>
> **[0:56](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=56)** And what we're going to do here is we're going to start off by importing that library that we installed.
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=62)** So we'll say import sendgrid from, and then that's @sendgrid.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=68)** Slash rather, sendgrid/mail.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=72)** And the next thing we need to do is we need to set the API key, right?
>
> **[1:15](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=75)** SendGrid isn't automatically going to pick up on our API key in our environment.
>
> **[1:20](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=80)** So we're going to have to say sendgrid.setApiKey, and then that's going to be process.env.SENDGRID_API_KEY, right?
>
> **[1:30](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=90)** Whatever you called it, right?
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=91)** I called mine that when I set that in GitHub.
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=94)** So the next thing here, it's going to be pretty straightforward, we're just going to say export const sendEmail.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=101)** And this one's just going to kind of mirror the sendgrid.send function, but it'll make it a little bit more robust if something about these SendGrid API changes.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=111)** So what we're going to do here is we're just going to say to, from, subject, text, and html, right?
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=119)** The different parts of the emails that we're going to send, and then we'll say constant message.
>
> **[2:04](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=124)** This is going to have all of those things sort of bundled together.
>
> **[2:07](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=127)** So we'll have to, from, subject, text, and html, just like we had up above.
>
> **[2:15](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=135)** And then what we're going to do is we're going to pass that to sendgrid.send with that new message that we just created.
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=143)** Now, it might seem a little bit like overkill, and oops, I forgot equal sign there.
>
> **[2:27](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=147)** As I was saying, it might seem like a little bit of overkill to, you know, basically destructure this and then explicitly create this new object there.
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=155)** It's really just so that we can see what's going on and to make it easier to do things like set default values later on if we want to do that.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=164)** So now that we've created this sendEmail function, let's create a test file.
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=169)** We'll just call this one testSendEmail.js.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=173)** And what we're going to do here is we're going to import that function we just created.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=176)** So import sendEmail from sendEmail.
>
> **[3:00](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=180)** And now what we're going to do is we're just going to call sendEmail with some data.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=186)** So we're going to start off by saying to.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=188)** And here's a little trick that I'm going to give you when you're testing out email flows like this, instead of having to create two or more email addresses that you, you know, can send emails back and forth to, what you can actually do is you can say, shaun.linkedin.learning+test1@[gmail.com](https://gmail.com), all right?
>
> **[3:29](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=209)** Now notice that I added this little +test1 thing.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=213)** Basically, because of the way that email addresses work, you can add plus and then pretty much anything after that.
>
> **[3:39](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=219)** And this will act as sort of like a label for emails later on.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=224)** All right, so here's what this is going to look like.
>
> **[3:46](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=226)** This basically allows us to send an email from the same email address, so shaun.linkedin.learning@[gmail.com](https://gmail.com).
>
> **[3:56](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=236)** But basically it allows us to send it to the same email address while having a little bit of differentiation there, and seeing what the to and from addresses actually are.
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=245)** And oops, I forgot the colon there. So let's add that.
>
> **[4:08](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=248)** And then we're going to add the subject.
>
> **[4:11](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=251)** So we'll just say subject and we'll say, does this work?
>
> **[4:15](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=255)** And then for the text we're going to say, if you're reading this, got to put that little backslash in there, so that we can have that single quote in a single quote string.
>
> **[4:25](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=265)** We'll say, if you're reading this, then yes. All right?
>
> **[4:29](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=269)** And that's pretty much all we need to do.
>
> **[4:31](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=271)** Now you can add HTML in there. That is an option.
>
> **[4:34](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=274)** And basically what that'll do is if you put some HTML like this, right?
>
> **[4:39](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=279)** So you can say something like h1, hello, right?
>
> **[4:43](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=283)** That will actually be rendered if HTML is enabled in the user's email inbox, right?
>
> **[4:50](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=290)** Usually that's not a good idea to add if you can get by with just regular text, because email tends to be overused and misused in many cases in marketing emails, stuff like that.
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=301)** So many inboxes will actually penalize you if you use HTML and it will often tend to label it as marketing material or promotional emails.
>
> **[5:10](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=310)** So anyway, let's try this out.
>
> **[5:13](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=313)** We're just going to say sendEmail, and then we'll say .then, right?
>
> **[5:16](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=316)** This is a promise, you can use async and await with this, but just because this is a test file, we're going to use promises.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=321)** We'll say something like then, and we'll say console.log.
>
> **[5:27](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=327)** And then we'll say something like email sent.
>
> **[5:31](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=331)** Hopefully we see this message.
>
> **[5:32](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=332)** Otherwise, if something goes wrong, we're going to say .catch.
>
> **[5:36](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=336)** And if there's an error, we're just going to log out that error so we can see what went wrong.
>
> **[5:41](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=341)** All right, and that's pretty much all we need to do.
>
> **[5:43](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=343)** Let's just move this .then thing down a bit and let's run this code to see if it works.
>
> **[5:48](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=348)** So we're just going to open up a terminal, make sure you're in the back-end, right?
>
> **[5:52](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=352)** So say cd back-end.
>
> **[5:54](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=354)** And now we're just going to say node testSendEmail.js, and hopefully this works.
>
> **[6:00](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=360)** And oops, I forgot that we're not using an ES6 module here, so we just have to change this now to const sendEmail equals require sendEmail, right?
>
> **[6:11](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=371)** This is on the Node.js server, and we haven't set that up with import export syntax.
>
> **[6:15](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=375)** So we're just going to use that.
>
> **[6:17](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=377)** And for sendEmail, we'll also change this to module.
>
> **[6:20](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=380)** Well here, we'll just say const sendEmail rather.
>
> **[6:23](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=383)** And then we'll say module.exports equals, and then we'll have sendEmail in there, all right?
>
> **[6:31](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=391)** And we also need to change this here, so we'll need to say const sendgrid equals require sendgrid.
>
> **[6:38](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=398)** Oops, there we go, /mail.
>
> **[6:41](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=401)** And let's try that one more time.
>
> **[6:43](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=403)** So we're going to run this, and sure enough, we see that it says email sent.
>
> **[6:47](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=407)** So what we hope to see now is first of all, if we go into SendGrid, we're going to hope to see that it worked, right?
>
> **[6:52](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=412)** So you should see it worked here.
>
> **[6:54](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=414)** If you click on that button, that just means that you successfully sent an email to somebody.
>
> **[6:59](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=419)** And if you go back to your email account here, the one that I was using, right?
>
> **[7:03](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=423)** I'm just going to go into the inbox and if we hit Refresh, and sure enough, we see the email shows up, right?
>
> **[7:09](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=429)** So anyway, that is the basics of sending an email through Node.js using SendGrid.
>
> **[7:16](https://www.linkedin.com/learning/react-authentication-25660373/sending-emails-from-node?u=76281980&t=436)** So we're going to be using this to implement that email verification flow that we discussed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (6), function (5), const (4), from, (3)
> **Code Identifiers:** sendemail (12), testsendemail (2), setapikey (1)
> **Env Vars:** api (4), html (4), npm (1), sendgrid_api_key (1), es6 (1)
> **CLI Commands:** make (3), node (3), npm (1), cd (1)
> **File Paths:** testsendemail.js (2), node.js (2), sendemail.js (1), process.env (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** go back to (2), we discussed (1)
> **URLs:** [gmail.com](https://gmail.com) (2)

#### Integrating verification tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=0)** - [Instructor] All right, so now that we're sending emails, the next thing that we're going to do is we're going to start integrating this idea of verifying a user's email address into our application.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=10)** Now, a few things I want to point out is if you're starting off with the starting code in the exercise files, you're going to want to replace these emails here with whatever emails you set up in the previous step, right?
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=23)** Don't try and send these with the email addresses that I have here because it just won't work.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=28)** And the other thing you'll notice from here on is that I have a slightly different email address here than what I showed you previously.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=35)** I just had some problems with my account with that old email address.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=39)** Actually, after I stopped recording, I had some problems with my account and I just had to set up a new one so that I could implement all of this and show you how to do it.
>
> **[0:48](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=48)** So those are the only two things I wanted to mention there.
>
> **[0:51](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=51)** Let's jump in now and what we're going to do is we're going to open up our server, right?
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=55)** So go into server.js and we're going to integrate this email verification flow into this signup route first.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=65)** So the first thing that we're going to do here is we're going to use this uuidv4 package, right, this uuid package that we installed in order to generate user IDs.
>
> **[1:15](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=75)** We're going to actually use this to generate a verification string that users will have to go to the email address to find.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=85)** All right, you'll see how this works in much more detail in a minute.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=88)** Let's start off though by scrolling down into the signup route, and underneath where we generate the password hash and the id, we're going to generate the verification string as well.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=101)** So here's what that'll look like.
>
> **[1:42](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=102)** We're going to say const verificationString equals uuidv4.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=109)** All right, so just using that same package to do this.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=111)** There are other packages you can use for either one of these cases, but this is just a nice sort of dual purpose use case here.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=119)** And now that we have the verification string, the next thing we're going to want to do is add that on to the user that we add to the database, right?
>
> **[2:08](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=128)** So we're going to add that into here, verificationString, and we're going to leave isVerified as false.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=134)** This is when we're going to start using this property here because this is how we'll keep track of whether or not a user has actually verified their email address.
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=143)** All right, so that should be all we need to do there, at least as far as creating the user in the database.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=149)** The next thing is before we create that JSON web token and sign it and send it back to the user, we're going to send an email that incorporates this verification string into a link that the user will be able to click to verify their email.
>
> **[2:46](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=166)** So here's what that's going to look like.
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=168)** We're going to say try, right?
>
> **[2:51](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=171)** We'll have this in a try catch block here because there is a possibility that the send email function will run into an error, and then we'll add catch e, and here we'll just have console.log(e) and we'll say response.sendStatus and send back a 500 status code.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=188)** And now that we have that, let's try calling the sendEmail function that was just imported for me automatically up at the top.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=195)** And we're going to say to, and this is going to be email, right?
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=198)** The email that the user signed up with.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=201)** So that's how we'll know where to send that.
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=203)** And from this one, we're just going to hard code to whatever we put in the testSendEmail thing, right?
>
> **[3:29](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=209)** That sender that we set up there.
>
> **[3:31](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=211)** So we'll try this one, we'll copy that, paste that in here, and the next one here is going to be the subject.
>
> **[3:38](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=218)** Here's where we get to decide on the exact wording we want to use for this email.
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=222)** So we'll say something like, Please, oops, let's put that in quotes there, "Please verify your email."
>
> **[3:48](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=228)** And after, that we're going to say text.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=230)** And I'm going to put this in back ticks here just so I can put that in a slightly longer string than that.
>
> **[3:56](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=236)** All right, and we'll say, "Thanks for signing up."
>
> **[4:01](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=241)** We'll say, "To verify your email, please click here."
>
> **[4:06](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=246)** And for this, here's what we're going to have to do.
>
> **[4:09](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=249)** We're going to have to use the URL of the frontend that we're running.
>
> **[4:14](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=254)** Now, yours is going to be different than mine here, so you will have to make sure to change this, but here's what this will look like.
>
> **[4:21](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=261)** First of all, we'll insert the verification string that we generated, so verificationString like so.
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=268)** And now that we have that, we're going to need to actually run our frontend again, right?
>
> **[4:32](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=272)** Because my codespace shut down again, so let's just create two new terminals like so.
>
> **[4:39](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=279)** And up here, we'll say cd front-end and we'll run this thing by saying npm run dev.
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=285)** And then when that opens up in the ports here, you should be able to get that.
>
> **[4:49](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=289)** In fact, it looks like the server URL and the frontend URL were already there.
>
> **[4:54](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=294)** We can just copy this and I'm going to go back into server.js and we're going to paste that right here.
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=301)** And that's going to be the verification string.
>
> **[5:04](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=304)** We're also going to add this other segment before that that says verify email.
>
> **[5:09](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=309)** We're going to have to come in and actually create a route for that in the next video as you'll see.
>
> **[5:14](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=314)** All right, so that is all we need to do there.
>
> **[5:17](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=317)** Again, you can kind of adjust this because it's got multiple lines there.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=321)** That's why I put the back ticks around it because this is a pretty long string to just include like that.
>
> **[5:26](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=326)** So now that we're sending the email, that's really all we have to do.
>
> **[5:29](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=329)** And let's add await here because that does take, you know, that is an asynchronous operation, of course.
>
> **[5:35](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=335)** All right, and that really should be all we need to do there.
>
> **[5:38](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=338)** So the last thing that we're going to do is we're going to test this thing just to make sure that it sends the right email.
>
> **[5:45](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=345)** So let's run our frontend and backend once again.
>
> **[5:47](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=347)** We're going to go into our next terminal here, change directories into the backend if you don't already have that running and we're going to run that with node server.js.
>
> **[5:57](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=357)** And, of course, we'll need to change both of these to public again, so change port visibility to public, and port visibility here is going to be public as well.
>
> **[6:08](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=368)** There we go.
>
> **[6:10](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=370)** And now that we've done that, let's open this thing back up.
>
> **[6:13](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=373)** We'll open up our frontend, all right, by clicking that little globe icon.
>
> **[6:17](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=377)** We're going to say continue, in case you run into that, and we're going to sign up here because again, that's the route that we just added that verification to, so we'll try signing up here with whatever email it is you want it to send to.
>
> **[6:32](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=392)** And you can always add those plus labels after the email, right, the first segment of the email if you want to actually be able to create multiple users on the same site.
>
> **[6:42](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=402)** So we're going to say sw_linkedin_learning, that's my email right here.
>
> **[6:46](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=406)** And then we'll say plustest1@[gmail.com](https://gmail.com).
>
> **[6:51](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=411)** All right, and then for the password, I'm just going to say abc123.
>
> **[6:53](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=413)** Same thing here, abc123.
>
> **[6:56](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=416)** Obviously, you'd want your users to have a more elaborate password than that.
>
> **[7:00](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=420)** But for testing purposes, this makes it easier.
>
> **[7:03](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=423)** So let's click Sign Up here.
>
> **[7:05](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=425)** And what we should see is that'll take us to our user info page, but what we're going to want to do is go to our email and check to make sure that we received it.
>
> **[7:15](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=435)** Now, you might receive this in your spam, so you can always check spam here if you're not receiving any emails.
>
> **[7:21](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=441)** Sometimes it does take a second or two.
>
> **[7:23](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=443)** And sure enough, what we see is we received this email.
>
> **[7:26](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=446)** Now, again, please check your spam because it might be in there.
>
> **[7:29](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=449)** You can always move it to the inbox if you want to.
>
> **[7:32](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=452)** And you'll see that the URL that's right here isn't exactly the URL that we saw earlier, right?
>
> **[7:39](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=459)** That's because what SendGrid does is it actually replaces it with its own URL so that you can track when people are clicking specific links in your emails, right?
>
> **[7:48](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=468)** It helps for marketing purposes, things like that.
>
> **[7:51](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=471)** But anyway, this link will actually forward you to the address that we put in there.
>
> **[7:57](https://www.linkedin.com/learning/react-authentication-25660373/integrating-verification-tokens?u=76281980&t=477)** So the next thing that we're going to want to do is figure out how we want to manage that in our app.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), public (3), function (2), this, (2), const (1)
> **Code Identifiers:** verificationstring (3), isverified (1), sendstatus (1), sendemail (1), testsendemail (1)
> **CLI Commands:** make (3), find (1), cd (1), npm (1), node (1)
> **Env Vars:** url (6), json (1)
> **File Paths:** server.js (3)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (2)

#### Adding a "please verify email" page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=0)** - [Instructor] Okay, so now that we've integrated that link into our server, the next thing that we're going to do is we're going to take a step back and go back to after the user signs up, right?
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=11)** Currently when the user signs up, they're sent straight to the homepage, right?
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=16)** That is the user info page.
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=18)** And we probably want to tell them that they need to verify their email before we do that.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=24)** So as you can see, if you check out the starting state for the exercise files here, you'll see that I added this "PleaseVerifyEmailPage."
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=32)** Basically the only purpose of this thing is that it will display this message down here, telling the user that we've sent a verification link to the email address.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=42)** And after three seconds, it will automatically navigate to the home route.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=47)** All right? And you can see if you go to the app component that have added a route for this one where we display the PleaseVerifyEmailPage on the path, please verify.
>
> **[0:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=56)** So the last thing we need to do here, and I've left this up to you just so that you would see this new flow sort of taking place, is on the signup page we just need to make sure that when the user signs up, we send them to the PleaseVerifyPage instead of the home route.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=73)** All right, so here's what we're going to do.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=74)** We're just going to say Navigate to please verify.
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=78)** You can copy and paste that to make sure that it's the same thing there, but there we go.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=82)** And now that we have that, that should be all we need to do.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=85)** So let's test this thing out.
>
> **[1:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=87)** Make sure your front end and back end are running.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=89)** And let's log out here.
>
> **[1:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=90)** That'll send us back to the login page.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=92)** So let's try this signup page again, and we're going to try here.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=96)** We'll do the other one here that we set up.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=97)** So sw.linkedin.learning, and we'll do test2@[gmail.com](https://gmail.com), right, because we already did test1.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=105)** And then for the password, you can choose whatever you like there.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-please-verify-email-page?u=76281980&t=109)** And then let's click sign up and if all goes well, sure enough, it says, "Thanks for Signing Up," sends us to that PleaseVerifyEmailPage and then automatically redirects us to the UserInfoPage.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), navigate to (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Adding a verify email route
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=0)** - [Narrator] All right, so now that we have that please verify email page, let's go to our server side and we're going to add a route that will allow us to verify the user's email.
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=12)** Now really all that we're going to do here is we're going to have the front end, right?
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=16)** We already put that link, if we scroll down here.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=19)** We already put that link inside this email that we're sending to the user.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=23)** And as you can see, this is going to take them to the front end of our application.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=28)** So essentially what we're going to do, and we're going to do this in the next video, is we're going to create a page that will basically be sitting at this route and that page, once the user goes there, is going to take the verification string that's in the URL and send it to the endpoint that we're going to create in this video.
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=46)** So we're creating the endpoint first to verify user's email.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=49)** So let's scroll down and what we're going to do is we're going to add a new route here.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=54)** We'll call this app.put, right, since this is a update endpoint, and we're going to say /api/verify-email.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=64)** Okay, and inside this thing we're going to have our request and response.
>
> **[1:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=67)** This is going to have to be an async method here.
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=70)** So we'll just say async like so.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=72)** And then inside here we'll say const and we'll just expect that the front end is going to send a verification string property in the request body.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=81)** So we'll say verificationString, and then we'll say equals, oops, there we go, req.body.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=88)** And now that we've done that, we're going to find the user in the DB with that verification string.
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=94)** So this is going to be a little bit different than what we've done before.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=96)** We're going to say user or const user, rather, equals db.users.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=103)** And then we're going to say .find and find the user, as I said with the verificationString, right?
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=110)** That's what we set up here.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=112)** If we go up to the signup route just to show you and make sure you understand what's going on, right?
>
> **[1:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=116)** Remember that we added this verificationString in there when we create the new user.
>
> **[2:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=121)** So let's scroll back down.
>
> **[2:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=122)** And what we're going to do here is we're going to check if that verificationString is equal to the verificationString from the request body.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=132)** And now what we're going to do is we're going to check and if there is no user, right, so if there's no user with that verificationString, then what we're going to do is we're going to send back a 401 status code.
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=143)** So we'll say response and here we'll say return, that is, res.status(401).json and then we'll just send a message back so they know what's going on saying the email verification code is incorrect and that should be all we need to do there.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=162)** So the next thing here of course, is if that does match a user, then we want to set that user's is verified property to true.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=170)** So here's what that'll look like.
>
> **[2:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=171)** We're just going to say user.isVerified = true.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=176)** That's all we have to do there.
>
> **[2:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=177)** And now we're going to send the user an updated JWT.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=182)** So here's what that'll look like.
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=184)** We're going to say const.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=186)** We'll get the user's ID, their email, their info, and their verificationString, as well as isVerified here from that user object.
>
> **[3:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=196)** And actually, we don't even need this verificationString.
>
> **[3:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=199)** In fact, the user probably shouldn't have that.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=201)** There's no reason for them to have it.
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=203)** And now that we've done that, here's what that will look like.
>
> **[3:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=205)** We're going to say jwt.sign, we're going to sign the id, email, isVerified, and info into that JSON web token with our process.env, oops, let me try that again.
>
> **[3:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=220)** That should be a comma right there.
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=222)** We're going to say process.env.JWT_SECRET.
>
> **[3:45](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=225)** And now we'll add that expiresIn: '2d', just like we've been doing.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=230)** And last but not least, we're going to have error and token.
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=233)** And here's what that'll look like.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=235)** We're just going to say if there's an error, pretty much the same as what we did up above.
>
> **[3:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=238)** In fact, we can just take this up here if we want to.
>
> **[4:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=242)** We'll just copy that and paste that down in there.
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=245)** That's just going to save us a little bit of time.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=247)** And now that's all we should need to do.
>
> **[4:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=250)** So that is our verify email route.
>
> **[4:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-verify-email-route?u=76281980&t=253)** We're going to test this thing when we actually create the corresponding front end page.

> [!info]- Semantic Content
>
> **Code Identifiers:** verificationstring (8), isverified (3), expiresin (1)
> **Code Keywords:** let (4), const (3), async (2), return, (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** url (1), jwt (1), json (1), jwt_secret (1)
> **UI Navigation:** scroll down (2), go to (1)
> **File Paths:** process.env (2)
> **API Endpoints:** /api/verify-email (1)
> **Cross-References:** in the next (1)

#### Creating a verification landing page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=0)** - [Instructor] Alright, so now that we have that verify email route on the server, the last thing we have to do here is hook things up on the front end.
>
> **[0:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=8)** So as you can see, I've done most of the work here for you.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=11)** We have this email verification landing page thing that's set up.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=15)** And basically what this does is, as you can see here, it pulls the verification string out of the parameters, right?
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=23)** I'll show you that in just a minute here.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=24)** So it pulls the verification string out of the route parameters, and then it sends that to the server, right, to that route that we just created there.
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=33)** And depending on what happens, right, depending on if there's an error or not, it sets this is loading thing to false and this is success thing to either true or false.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=44)** And down here in the JSX, you can see that there's really three possibilities that it'll display.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=49)** The first thing is a loading message showing that it's currently trying to verify the user's verification string.
>
> **[0:56](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=56)** And then if it's successful, it will give us an email verification success and stay there.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=61)** If it's a failure, it's going to give us email verification fail.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=65)** And you can see both of those here.
>
> **[1:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=67)** Basically, they're the same thing, just with a slightly different message depending on whether or not the verification was successful.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=74)** Alright, so the last thing I did here is I added the email verification landing page to a new route here under slash verify email.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=83)** That should be the same one that we have in the email that we sent out.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=88)** So let's test this thing out, right?
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=89)** Let's first of all, make sure that our front end and back end are running and that the ports are both set to public.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=96)** And then we should be able to go to our application here.
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=99)** We're going to log out because we're going to want to sign in here obviously.
>
> **[1:42](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=102)** So we'll say sign up.
>
> **[1:44](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=104)** And then we're going to do that same SW LinkedIn learning, and I'm going to say +test3 here @[gmail.com](https://gmail.com).
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=114)** And now we're going to say ABC123 and ABC123.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=119)** You can put in whatever password you want and we'll click sign up.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=123)** And now we're going to see that same thing.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=125)** And if we go back to our email here, we should see, all right, that sure enough we have this "please verify your email," email.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=132)** Now this is not the original one.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=133)** This is actually for test two as you can see here.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=137)** So what we're actually going to do is we're going to go here and we can actually log out.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=141)** And then if we go back to this, we're going to see that that will route us to that page, right?
>
> **[2:27](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=147)** So it should take us to verify email slash, and then it's got that number.
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=150)** It looks like that didn't work for some reason, so let's check out why.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=154)** And oh, that's because I actually added the wrong URL here, so I forgot to add the route parameter thing.
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=161)** And that's just fine because I wanted to talk about this anyway, right?
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=164)** So we should call this verification string.
>
> **[2:46](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=166)** That's string does have to match the string that we have inside the landing page here.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=170)** So verification string, make sure you're spelling that exactly the same.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=174)** That's an easy set of words to misspell, right?
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=176)** And now this should work.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=179)** So let's go back to here.
>
> **[3:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=180)** And oops, it looks like something went wrong there.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=182)** And I believe that that is actually just because we didn't restart the server.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=186)** All right, so let's go back here.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=188)** And since we've made changes to the server, we obviously need to restart that and that should be good.
>
> **[3:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=193)** Let's just make sure that that's still on public.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=195)** Yep, both of them are still on public, so we'll try this again.
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=198)** All right, we're going to just close that tab there and go back to this link here.
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=203)** And there we go, we see success.
>
> **[3:25](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=205)** You saw that loading message there right before, and now if we click go to homepage, sure enough, that takes us to the user info page.
>
> **[3:31](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=211)** And you can see also that the act of verifying your email, if we go to application actually logs the user in, right?
>
> **[3:38](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=218)** It sets that token that we send back.
>
> **[3:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=220)** Now, that's not something you have to do if you don't want to log your user in when they verify their email and you want them to actually have to log in again, as many sites do.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=229)** Then just don't send back the JSON web token when you do that.
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-verification-landing-page?u=76281980&t=233)** So anyway, at this point we have a pretty complete email verification flow, so congratulations for walking through this with me.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (3), this, (1)
> **Env Vars:** abc123 (2), jsx (1), url (1), json (1)
> **Cross-References:** go back to (4)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 3. Resetting Passwords

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The basic password reset process
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=0)** - [Instructor] All right, now that we've got the email verification process working for our application, the next thing we're going to do is move on to implementing another very important auth-related feature of any website, and that is allowing users to reset their passwords.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=16)** Now, I'm sure it's happened to all of us, that we forget our password for a given website, and in those situations, it's very important that websites provide us with a backup method for resetting our password.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=28)** Now, the process for doing this is actually very similar to the email verification process, so let's just go over it here and make sure we understand the basic steps before we implement it.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=39)** So the first step here is that the user clicks the Forgot password button on the login page, and this will then take them to a page where they have to enter their email address.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=49)** And the next step is that the user enters their email into that page and clicks Submit, which will send this email address to a server endpoint.
>
> **[1:00](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=60)** And this server endpoint, basically what that does, is it checks to see if a user with this given email address even exists, right?
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=69)** If it does, the server generates a random verification hash, and it will send a link with that hash to the user's email.
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=77)** Again, this is very similar to the way the initial email verification flow works.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=82)** Now, when the user clicks the link in the email, they're going to be taken to a reset password landing page that will ask them to enter their new password.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=92)** Once they've done this, the new password that they've entered will be sent to another server endpoint, which checks to make sure their verification hash matches.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=103)** And if it does, it will replace the user's old password hash in the database with a hash created from the new password that they've provided.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=112)** And that's really it.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=114)** Once the user has reset their password, all they need to do is log into our app now with that new password.
>
> **[2:01](https://www.linkedin.com/learning/react-authentication-25660373/the-basic-password-reset-process?u=76281980&t=121)** Well, that's the basic password reset process, so let's get started implementing it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **CLI Commands:** make (2)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Adding a "forgot password" page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=0)** - [Speaker] Alright, so now that we know the basic password reset process and how that's going to all fit together, let's get started here.
>
> **[0:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=8)** And I've taken the liberty of providing you here with this forgot password page.
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=13)** It's a pretty straightforward page.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=15)** There wasn't really anything new here, which is why I just created it and gave it to you, right?
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=19)** It just contains a single email address input that the user can enter their email address into.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=27)** And when they click that, right when they click the button after entering their email address, that's going to send a request to this endpoint on the server that we're going to have to create ourselves.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=37)** All right?
>
> **[0:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=38)** And once that happens, it's going to display a little success message and it will automatically navigate the user back to the login page, which they'll be needing to use once they reset their password.
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=50)** So that's pretty much all we need to do there.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=53)** I added another route for this already.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=55)** So all that's left for you to do is check out the starting state for the code here and make sure it works for you.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=61)** So what you should be able to do here, running the version of the app that's found in the exercise files for this video is you should be able to finally click on this, forgot your password link, and that'll take you to this little page, which is the component that I just showed you.
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=78)** And you can enter in your email here and then click send reset link.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-forgot-password-page?u=76281980&t=81)** And as I said, that will send a request to our server, which is where we're going to go next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [speaker] (1)

#### Sending a "reset password" email
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=0)** - [Instructor] All right, so now that we have that forgot password page, the next thing that we're going to do is we're going to create the route that that page is going to make the request to.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=9)** So here's what this is going to look like.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=11)** We're going to start off here by going down below verify email, and this server file is getting pretty long, so if you want to break this up into multiple files, feel free to go ahead and do that.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=21)** But just to keep everything in one place and to avoid having to refactor everything, I'm going to leave them all in this file.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=29)** So we'll start off here by saying app.put.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=32)** Right, we're just going to use a put route for this.
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=34)** Doesn't really matter which one you use, but we'll just do app.put, and then this is going to be /api/forgot-password.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=43)** And we're going to need a way to include the user's email in this and the easiest way to do that is just to add that as a URL parameter, like so.
>
> **[0:52](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=52)** Okay, so for the handler here, which, as with all of the other ones, is going to be async, what we're going to do is we're going to start off by getting that email.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=61)** So we'll say const email equals, there it is, req.perams.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=66)** And then once we've done that, we're going to want to find the user with that email and generate the password reset code and basically set it on that user, which will allow us to look them up later when they click that link.
>
> **[1:20](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=80)** If that sounds complicated, don't worry too much about it.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=82)** You'll see this in just a minute what this looks like.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=85)** So we'll start off here by getting the user, all right, and we're going to need to just do what we did basically up in verify email, but with this email address instead of some kind of code.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=97)** So we'll say const user equals.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=100)** This is going to be db.users.find.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=103)** We're going to find the user whose email address is equal to that email there.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=109)** And now that we've done that, here's what this is going to look like.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=112)** We are going to generate a password reset code using that UUID package.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=118)** So we'll say const passwordResetCode equals uuidv4, just like we generated the user's ID and the email verification string.
>
> **[2:11](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=131)** And now that we've done that, let's go down to here and we're going to say user.passwordResetCode.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=138)** All right, we'll just use that same name there that we had, equals passwordResetCode.
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=144)** And now that we've set that on the user, we're going to send an email to that user with the same kind of link as we had in the verify email endpoint.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=154)** So here's what that will look like.
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=155)** We're going to say try, we're going to use await sendEmail like so.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=162)** And inside here we're going to send that to the user's email, of course.
>
> **[2:45](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=165)** We'll say that it's from whatever our original, you know, sender was.
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=169)** So I'm actually just going to go up here and get that from one of the places where we send an email just to make sure there's no typos.
>
> **[2:55](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=175)** All right, I'll copy that and paste that here.
>
> **[2:58](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=178)** And now that we've done that, we're going to say subject.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=181)** This is going to be Password Reset.
>
> **[3:05](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=185)** And finally we're going to say text, and inside here, and I'm just going to use back ticks here again so that we can actually insert that.
>
> **[3:12](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=192)** We're going to say to reset your password, click this link.
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=198)** As we saw, SendGrid is going to replace that link with their own so that we can see when users have actually clicked on these things.
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=206)** You can always turn that off by the way too, but it's easiest to just keep it on.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=210)** And for this, we're going to need to get the front end link again.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=214)** So we'll go into here, copy the front end URL, and we'll go back and paste that like so.
>
> **[3:41](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=221)** And now we're going to say /reset-password and that's going to be slash and this is going to be the passwordResetCode that we generated.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=229)** All right, so now that we've done that, the last thing we need to do is decide what we want to do if an error occurs.
>
> **[3:56](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=236)** So we'll say catch (e), and in here we're going to say console.log.
>
> **[4:01](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=241)** We'll just log that out for now and we'll send back a status code.
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=245)** So sendStatus(500) indicating that something went wrong there.
>
> **[4:11](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=251)** And otherwise, right, if everything goes well, we're going to send back a status code of 200, which we'll do inside here.
>
> **[4:16](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=256)** So we'll say response.sendStatus(200).
>
> **[4:21](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=261)** And that should be all we need to do there in order to allow the user to reset their password.
>
> **[4:25](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=265)** Well, at least the first part of this process anyway.
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=268)** So let's test this out.
>
> **[4:29](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=269)** What we're going to do is enter in an email to forgot password.
>
> **[4:32](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=272)** And actually since we made a change to the server, we are going to want to restart that server.
>
> **[4:37](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=277)** All right, so we'll go into backend, restart the server like so, node server.js.
>
> **[4:42](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=282)** And now that we've done this, what we're going to do is we're going to say, can enter in whatever you want here.
>
> **[4:48](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=288)** Let's just say that sw.linkedin.learning+test3 has forgotten his password.
>
> **[4:55](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=295)** That's me, and then we'll say @[gmail.com](https://gmail.com).
>
> **[4:58](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=298)** And if we click Send Reset Link, what we'll hope to see here is this message saying success.
>
> **[5:04](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=304)** And if we check our email here, again, you may have to go into Spam and it might also take a second there, but you see that it says password reset, and this is what we're going to want to click on in order to take the user to the next step in the process.
>
> **[5:20](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=320)** And let's just move this out of Spam, right?
>
> **[5:22](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=322)** It's not spam, we know who that is that's sending it.
>
> **[5:24](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=324)** All right, so we'll move it into the inbox and we see that that's now there.
>
> **[5:28](https://www.linkedin.com/learning/react-authentication-25660373/sending-a-reset-password-email?u=76281980&t=328)** So the next step in the process is going to be creating a landing page that clicking on this link will take you to.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), const (3), this, (2), this. (1), async (1)
> **Code Identifiers:** passwordresetcode (4), sendstatus (2), sendemail (1)
> **CLI Commands:** find (3), make (2), node (1)
> **Env Vars:** url (2), uuid (1)
> **File Paths:** server.js (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **API Endpoints:** /api/forgot-password (1)
> **Cross-References:** as we saw (1)

#### Creating a "reset password" landing page
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=0)** - [Instructor] All right, so the next step in this process is a password reset landing page.
>
> **[0:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=6)** Basically, this is what we want the user to go to when they click that link that we have in the password reset email, right?
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=13)** So when they click this, this is obviously changed by send grid, so that they can track when users click these things, as I've mentioned.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=21)** But ultimately it's going to take them back to a route.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=24)** And this page here, which I've included in the beginning state of the exercise files, is what we want the user to see.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=32)** Now this works in a very similar way to what we saw with the email verification flow, where it's got this page, but it's also got like a success and a failure state.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=43)** And ultimately what the page is going to do is it's going to load the password reset code, right?
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=49)** That's what we set in the email that we sent out.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=53)** It's going to load that and then send a request to the server using that parameter as part of the URL.
>
> **[1:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=60)** So we're going to need to go back and actually add that to the server.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=65)** But other than that, it's pretty straightforward.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=68)** As you can see, it's got this form here that allows us to enter the same password twice, right?
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=71)** This is the set password value and set confirm password value input.
>
> **[1:16](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=76)** And once you've entered that form, that's when this request is going to be made and it will display either the password reset fail, or success depending on what the result of that operation was.
>
> **[1:30](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=90)** Alright, so feel free to look through this page and the other components that it displays.
>
> **[1:35](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=95)** I'll leave that up to you.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=96)** And the last thing to know is that the app component here has this route added.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=101)** That's reset password.
>
> **[1:42](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=102)** Password reset code that might look familiar to you from the URL that we put into the email that we sent out for resetting a password.
>
> **[1:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=111)** And that's where the user is going to land when they click that link.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=114)** So that's just going to display the password reset landing page.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=118)** So once you've checked out these changes and added them to your application, you can just copy these over if you want to, what you should be able to do here, and make sure that your front end and backend are running before you do this, you should be able to click this link, and it'll take you to the application.
>
> **[2:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=135)** And you should see a form that looks just like that, where you know you can go in here and enter whatever new password you want.
>
> **[2:22](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=142)** And as long as you enter the same thing here in this next input, you'll be able to click that reset password button.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=149)** And that is ultimately going to make the request to the server.
>
> **[2:32](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-reset-password-landing-page?u=76281980&t=152)** And that's the next thing that we have to do is create that server endpoint.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** this, (2)
> **Env Vars:** url (2)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Adding a "reset password" server endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=0)** - [Instructor] All right, so the last step in this whole reset password flow is to create the endpoint that will actually reset the password once the user enters in their new password into those two inputs.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=11)** So we're going to go down to the bottom here, and we'll add a new put route, we've been having a lot of those in this application so far.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=19)** And we're going to say for the path /api/users, and we're going to use the passwordResetCode.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=27)** All right, so we'll say passwordResetCode like this, just like we did from the front-end, and /reset-password as the... Oops, let's try that again.
>
> **[0:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=38)** As the path.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=39)** And then for the callback here, what we're going to do is we're going to start off by getting that passwordResetCode from the path, so we'll say const { passwordResetCode }, and then we're going to say = req.parameters.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=55)** Then, down here, we're going to say const { newPassword }, this is what we're sending along with that request from the front-end.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=61)** And that's going to be in the req.body, as we saw in the page.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=66)** All right, and then, what we need to do is we need to find the user whose passwordResetCode matches this one here.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=73)** So here's what that's going to look like.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=74)** We're going to say const user = db.users, rather, .find, and we're going to find the user whose passwordResetCode, as I said, matches the passwordResetCode from above.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=88)** And now that we have that, well, first of all, you know, you can put in that whole, like, you know, if user doesn't exist thing there if you want to, I'm going to just do that real quick.
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=98)** So we'll say res.sendStatus, we'll send a status of 404 not found.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=103)** As in the user with that passwordResetCode wasn't found.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=107)** And, otherwise, what we're going to do is we're going to change that user's password by generating a new hash.
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=113)** So we'll say const newPasswordHash = await bcrypt, right, we're using that library from before, .hash, we'll hash the newPassword that they sent along with 10 iterations, same as what we had before.
>
> **[2:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=131)** And last thing here we need to do is we're going to update that user by saying user.passwordHash, that's going to be equal to the newPasswordHash.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=141)** And the last thing we need to do here is we need to get rid of that passwordResetCode so that the user can't just always use that to reset their password, right?
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=150)** So we're going to say user.passwordResetCode, and we're just going to say delete in front of that, like so, and that will get rid of that.
>
> **[2:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=159)** So, now, we just need to save the database by saying saveDb, like so, and then we'll just send back a status code of 200 to indicate to the front-end that everything went well.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=172)** So here's what that'll look like.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=174)** We're going to say res.sendStatus, and we're going to send a 200 status code there back to the front-end.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=181)** And that should be all we need to do.
>
> **[3:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=183)** So let's give this thing a try.
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=184)** We're going to restart our server, of course, so we'll open up the back-end.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=188)** We're going to stop that and restart it like that.
>
> **[3:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=191)** And now, what we're going to do, let's make sure that our ports are still both public.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=194)** Okay, looks good.
>
> **[3:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=196)** All right, so now what we need to do is test this out, and we're going to go back to our application here, all right?
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=202)** We'll actually go back to the plain old Log In page, so that we can reset our password from there.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=208)** We're going to have to start this flow all over again, because of some changes that we've made.
>
> **[3:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=211)** All right, so let's click on Forgot your password?, and I'm going to enter in here, we'll enter in sw.linkedin.learning, and we'll use test3 again.
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=222)** We already sent that, but when we sent that, we actually didn't have the logic fully in place for adding that to the database.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=230)** So we'll just add that again and say @[gmail.com](https://gmail.com), we're going to click Send Reset Link.
>
> **[3:55](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=235)** And what we hope to see now, and you can double-check this inside your code now, if we open up db.json, we should see with test3 that this now has a password reset string.
>
> **[4:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=248)** And, actually, it looks like it doesn't.
>
> **[4:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=249)** So maybe what we forgot here, if we go to the whole forgot password email thing, I think what we forgot... Yep, sure enough, we forgot to call saveDb in here in order to make that happen.
>
> **[4:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=261)** So let's just add that, and we're going to restart our server again.
>
> **[4:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=265)** So we'll stop that and restart it like so.
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=268)** All right, so let's give that a try again.
>
> **[4:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=270)** What we're going to do is go back to our front-end, go back to Forgot your password?, and try that same flow again.
>
> **[4:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=276)** So we'll just enter in that same email, test3@[gmail.com](https://gmail.com), and now, we'll click Send Reset Link.
>
> **[4:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=283)** And while that's working, let's go back here and double-check that.
>
> **[4:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=287)** So open up db.json again, and what we should see is, sure enough, it now has this passwordResetCode.
>
> **[4:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=294)** So good example of how a little thing, one line that you forget, can make a big difference in how your app works.
>
> **[5:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=300)** Now that we have that though, let's go and look for that email in our inbox.
>
> **[5:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=305)** And it looks like that hasn't arrived yet, so we're just going to have to wait for that.
>
> **[5:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=309)** All right, and there it is.
>
> **[5:10](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=310)** We're going to want to take the second one here, because that is the last one that we sent.
>
> **[5:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=315)** So let's try clicking this, and if all goes well, we should see that that gives us the Reset Password page.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=321)** So we'll enter in a new password here.
>
> **[5:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=323)** Now, we didn't add any logic to check whether this is actually a different password from before.
>
> **[5:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=328)** That's a pretty easy thing to check, you just need to compare the passwordHash with the newPasswordHash, I'll leave that up to you though, and we'll click Reset Password now.
>
> **[5:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=336)** And, sure enough, we see the Success message.
>
> **[5:39](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=339)** So now let's go back to the Log In page and try logging in with that new password.
>
> **[5:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=344)** So linkedIn.learning, we'll do test3 again, @[gmail.com](https://gmail.com), we'll enter in our new password, whatever you chose for that.
>
> **[5:51](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=351)** And if we click Log In, sure enough, that comes up with our user info page.
>
> **[5:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=356)** All right, so that is the final step in the password reset process.
>
> **[6:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-a-reset-password-server-endpoint?u=76281980&t=361)** So congratulations for adding this to the app.

> [!info]- Semantic Content
>
> **Code Identifiers:** passwordresetcode (11), newpasswordhash (3), newpassword (2), sendstatus (2), passwordhash (2)
> **Code Keywords:** let (10), const (4), this, (2), await (1), delete (1)
> **CLI Commands:** find (3), make (3)
> **Cross-References:** go back to (5), as we saw (1)
> **URLs:** [gmail.com](https://gmail.com) (3)
> **File Paths:** db.json (2)
> **UI Navigation:** click on (1), go to (1)
> **API Endpoints:** /api/users (1)


### 4. OAuth

> [[#Table of Contents|↑ Back to Table of Contents]]

#### OAuth basics
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=0)** - [Instructor] So far, we've seen how to add authentication to our app using JSON web tokens.
>
> **[0:05](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=5)** And we've also seen how to implement email verification and password reset functionality.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=10)** So the next thing that we're going to take a look at here is how to add something called OAuth to our applications.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=16)** Now, put simply, OAuth is when we allow our users to log into our site with credentials from some other site, right?
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=25)** Put another way, they can use another site's credentials instead of credentials, like a email and password that they've created specifically for our site.
>
> **[0:36](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=36)** Now, probably the most well-known case of this is the login with Google, or login with Facebook, or login with GitHub buttons that you see on many sites.
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=45)** In this course, we're going to just be seeing how to add a login with Google Button to our site, but the concepts that we'll be covering here will be very similar for all OAuth providers.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=55)** Now, before we get started, let's take a look at what OAuth is and how exactly it works.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=58)** And first of all, when we say OAuth, we actually mean OAuth 2.0.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=64)** OAuth 1.0, which is the original version of OAuth, is now deprecated and it just shouldn't be used anymore.
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=70)** I just wanted to clarify that point for you.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=73)** All right, so really OAuth has three main parts, right?
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=77)** There are, in other words, three parties that are involved in logging in with OAuth.
>
> **[1:24](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=84)** The first one is the user, which is the person who's trying to log into your app.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=89)** Now, the second one here is your app itself.
>
> **[1:33](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=93)** This is the site that you're going to build, right?
>
> **[1:35](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=95)** The site that we built with the user info in our case here.
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=98)** And the third party, this is where OAuth is significantly different than what we've seen so far.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=105)** The third party is something called the service provider, and this is the third party app such as Google or LinkedIn or Facebook that your app wants to allow the user to log in with.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=118)** So the basic process for logging in with OAuth is going to look like this.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=123)** Step one is that we'll need to generate a special URL that we can redirect the user to, right?
>
> **[2:10](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=130)** This will be a URL on the service provider's site.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=133)** So on Google's site, for example.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=136)** And it will contain information about what we're asking the user for access to.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=141)** So for example, do we just want basic profile information?
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=144)** Do we want to be able to make changes to their account on the service provider?
>
> **[2:28](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=148)** Things like that.
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=150)** And that's the kind of thing that we'll be specifying in this URL.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=153)** So the second step is that once we've generated this URL, if the user clicks on the login with Google or login with Facebook, or login with LinkedIn button, we're going to send them to that URL.
>
> **[2:44](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=164)** And this will display a page asking them usually which account they want to use, and also asking if they want to give our app access to the information that we've requested.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=174)** Now, if they say yes to this, then the service provider will redirect them back to our site with a special code that our site can use to load the user's information.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=186)** And after that, our site will actually send that code back to the service provider, and the service provider will send that information back to our site.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=194)** And finally, once we've gotten access to the user's info, our site can use that information however we want.
>
> **[3:20](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=200)** So for example, we could create a new account in our database from that user's information, or if the user already has an account with that email in our database, we're going to decide how to combine the service provider's info with the info that we have.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=216)** And that's really all there is to it.
>
> **[3:38](https://www.linkedin.com/learning/react-authentication-25660373/oauth-basics?u=76281980&t=218)** So without further ado, let's see how to actually add all of this into our full Stack React application that we've built.

> [!info]- Semantic Content
>
> **Env Vars:** url (5), json (1)
> **Code Keywords:** let (2), this. (1), this, (1), finally, (1)
> **Analogies:** for example (3), such as (1)
> **Versions:** 2.0 (1), 1.0 (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Setting up OAuth on Google
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=0)** - [Instructor] All right, so now that we've learned the basics of how OAuth works, we're going to take a look at an example of how to incorporate OAuth into our application.
>
> **[0:08](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=8)** Now, as I said, there are many different OAuth providers that we could choose from, but we're going to be using Google since it's by far the most popular.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=16)** So we're going to be adding a login with Google button to the login page for our app.
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=22)** And in order to do this, our first step, as you can see in the screen here, is going to be to set up a project in Google so that Google will allow us to use OAuth for our application, all right?
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=34)** Basically, this is just where we'll tell Google about our project, what data we want to access on our users, stuff like that.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=41)** So let's start by going to [console.cloud](https://console.cloud).[google.com](https://google.com).
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=46)** That should take you to a page that looks like this.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=49)** You will have to sign in with your Google account in order to get here.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=53)** So you may need to create an account, just do whatever you need to do there.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=55)** It's a pretty straightforward process.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=58)** And once you're logged into the GCP console, that is Google Cloud Platform Console, you're going to click on this little dropdown up here.
>
> **[1:07](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=67)** Mine just says my first project.
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=69)** I have lots of other projects in here, of course, but you're going to click on this and this will list all of your projects if you've worked with Google Cloud before.
>
> **[1:16](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=76)** If you don't see anything there, that's fine as well.
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=78)** What you're really looking for is this new project thing up in the top right hand corner.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=83)** So we're going to click on that, and we're going to come up with a name for our project here.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=89)** So let's call it something, like react authentication.
>
> **[1:35](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=95)** And now that we have that, what we're going to do, we're just going to leave no organization selected there.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=100)** We're going to click create, and that will create our new project for us, right?
>
> **[1:46](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=106)** You can see this little notifications thing there.
>
> **[1:48](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=108)** Once that finishes, once you see that little green check mark, you're just going to click select project.
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=113)** And now that you're in here, what you're going to want to do is add Google OAuth to this project, right?
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=120)** Basically, Google Cloud just has a pretty large collection of tools and APIs that you can enable for any given project.
>
> **[2:06](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=126)** And so that's what we're going to do here.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=129)** All right, so what you're going to do is you're going to go up to this search bar here and search for OAuth, and you're going to select OAuth consent screen.
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=137)** Basically what this does is, it allows us to configure the screen that the user will see when they're logging into our app.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=145)** All right? So we'll click get started here.
>
> **[2:28](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=148)** It says Google auth platform not configured yet.
>
> **[2:30](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=150)** We'll click get started.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=151)** It's going to ask us for a little bit of information about our app.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=154)** So the first thing here is going to be the app name.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=157)** And for that, we're just going to say something like, react off app.
>
> **[2:43](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=163)** And then the next thing here is going to be, the user support email.
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=168)** And you're just going to select, whatever email you logged in with, there.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=172)** This is just the email that users would be given if they need support.
>
> **[2:55](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=175)** So if you're setting this up for a company and planning on using this professionally, you're definitely going to want to have some sort of like custom configured company email for this.
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=184)** You're not going to want to put your personal email, like I'm doing here.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=186)** And then you can click next.
>
> **[3:09](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=189)** And this is going to ask us about our audience, right?
>
> **[3:11](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=191)** So in other words, do we only want to allow internal people in our organization to log in, right?
>
> **[3:17](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=197)** So if you have like a custom domain name in your email address, like at [linkedin.com](https://linkedin.com) for example, that's what that would give us here.
>
> **[3:25](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=205)** But since we want anybody to be able to log into our app, we're going to select external there, and then we'll go to next.
>
> **[3:31](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=211)** Next thing here is going to be contact information.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=214)** This will be basically email addresses that Google will use to contact you about any changes to the project, things like that.
>
> **[3:41](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=221)** So I'm just going to put in that custom email address that we had before.
>
> **[3:45](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=225)** So there we go.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=227)** You can put in, really, whatever email you normally want to receive information through, and then we'll click next.
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=233)** And finally, we just need to agree to the user data policy and click continue.
>
> **[3:58](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=238)** And now if we click create, that's going to set up our project with OAuth.
>
> **[4:04](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=244)** All right, so the next thing we have to do is we're going to go into data access, and we need to tell Google what pieces of data we're planning on collecting from users in the first place.
>
> **[4:15](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=255)** So here's what this will look like.
>
> **[4:16](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=256)** We're going to say, we're going to click on add or remove scopes.
>
> **[4:19](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=259)** And over here, you can see a list of things that you can access on the user.
>
> **[4:23](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=263)** For now, we're just going to say user info dot email, and user info dot profile.
>
> **[4:29](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=269)** And you can see the description over here, such as personal info that you've made publicly available, as well as email address.
>
> **[4:36](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=276)** So we're just going to select those two there and click update.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=280)** And now that we've done that, we're going to go into clients, all right?
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=285)** And we're going to create a new OAuth client.
>
> **[4:47](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=287)** Again, this is basically just telling Google about the exact app that we're going to be using so that it knows that a request coming from that URL is our app.
>
> **[4:58](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=298)** So we're going to click create client here.
>
> **[5:00](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=300)** We're going to say that it is a web application, all right?
>
> **[5:04](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=304)** We'll just leave the name as web client one.
>
> **[5:06](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=306)** That's perfectly fine.
>
> **[5:08](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=308)** And for authorized JavaScript Origins, what we're going to do here is we're going to add the URL from our front end.
>
> **[5:18](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=318)** Okay, so here's what we'll have to do. Let's go into ports.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=321)** All right, so we're just going to copy our front end address, and we're going to paste that into there, okay?
>
> **[5:27](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=327)** And oops, we do need to remove that trailing slash there.
>
> **[5:30](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=330)** It doesn't like that for some reason.
>
> **[5:31](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=331)** And now for authorized redirect URIs, what we're going to do is we're going to say add URI, and we're going to add the address of our server.
>
> **[5:41](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=341)** So go into here and copy your server address.
>
> **[5:44](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=344)** All right, we're going to paste that there.
>
> **[5:46](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=346)** And for the path, we're going to add a path that we'll actually go into our server and implement a little bit later.
>
> **[5:53](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=353)** So here's what this is going to look like.
>
> **[5:55](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=355)** We're going to say slash off, slash Google, slash callback.
>
> **[6:01](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=361)** All right?
>
> **[6:02](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=362)** This is just a path that we're going to add that Google will actually make a request to when a user has successfully authenticated, and that should be all we need to do there.
>
> **[6:12](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=372)** So let's click create.
>
> **[6:13](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=373)** And what this is going to give us is this client ID, as well as the client's secret.
>
> **[6:19](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=379)** Now, what you're going to want to do is set these as environment variables in your code space.
>
> **[6:25](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=385)** Or if you're not using code spaces, just set them locally.
>
> **[6:27](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=387)** So I'm going to do that right now.
>
> **[6:29](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=389)** I'll copy the client ID and go into code spaces, and we're going to add this secret as Google client ID.
>
> **[6:38](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=398)** All right.
>
> **[6:39](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=399)** And then we'll paste the client ID in here and select the repositories that we want to allow it.
>
> **[6:44](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=404)** That's just going to be whatever repo, you're currently working in.
>
> **[6:48](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=408)** Again, assuming that you're working with code spaces.
>
> **[6:53](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=413)** And then we're going to click add secret, and then we just have to do the same thing with the client secret there.
>
> **[6:57](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=417)** So let's go into here. We're going to copy the client secret.
>
> **[7:00](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=420)** We're going to say new secret, and then we'll call this one google client secret, and we'll paste that in there.
>
> **[7:08](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=428)** And then we just have to select that same repo as before, and click add secret.
>
> **[7:18](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=438)** Cool.
>
> **[7:19](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=439)** So that should be all we have to do in order to set up our application with Google.
>
> **[7:23](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=443)** So let's just click okay, and we have set up Google with OAuth.
>
> **[7:28](https://www.linkedin.com/learning/react-authentication-25660373/setting-up-oauth-on-google?u=76281980&t=448)** There may be one or two more things that we need to come back here and modify or tweak, but we'll get to those when we've actually started implementing this in our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), from, (1), this, (1), finally, (1)
> **UI Navigation:** click on (4), dropdown (1), go to (1), select the (1)
> **Prerequisites:** set up (4), configure (1)
> **Env Vars:** url (2), gcp (1), uri (1)
> **URLs:** [console.cloud](https://console.cloud) (1), [google.com](https://google.com) (1), [linkedin.com](https://linkedin.com) (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)

#### Adding an OAuth URL route
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=0)** - [Instructor] All right, so now that we've set up Oauth in Google Cloud, the next thing that we're going to do is create a route whose purpose will be to give us the URL that the user should be redirected to when they click the Login with Google button.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=15)** This might not make sense quite yet, but just bear with me here.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=19)** It's pretty straightforward.
>
> **[0:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=20)** All right, so to get started here, we're going to create a new file and this is going to be sort of like a utility file that will contain functions that will make it easier to create this route that we're talking about.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=32)** So we're going to call this something like googleOauthutil.js, and inside here what we're going to do is we're going to start off by importing, by saying const { google } = require('googleapis') and we will have to install this into our project, so let's actually do that.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=54)** And once again, if you're using Codespaces and the code space has shut down recently and you don't have the front and backend running, what we're going to do, we're going to need to change directories into our backend here.
>
> **[1:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=65)** And then we're going to say NPM install Google APIs and we'll install that into our project like so.
>
> **[1:12](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=72)** Okay, so once that finishes, the next thing that we're going to do is we're going to export something here.
>
> **[1:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=79)** We'll just say const oauthClient.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=83)** And we're going to say equals new google.auth.oauth2.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=89)** And what this is going to look like is we're going to say process.env.GOOGLE_CLIENT_ID.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=97)** And we're going to use the client secret here as well, right?
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=101)** This is basically just setting up our application here so that it has all the information it needs right in the form of the ID in secret to actually interact with Google and allow users to log in with it.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=114)** And the last thing we're going to do here is we're going to have our redirect URL.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=117)** This is going to be the one that we put into the Google console.
>
> **[2:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=121)** So here's what this is going to look like.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=123)** We're just going to go back to our ports, copy the backend URL, all right?
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=129)** And we're just going to paste that in here and we're going to add that same path that we had before, which is /auth/google/callback.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=138)** And that should be all we really need to do there for the OAuth client.
>
> **[2:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=142)** So now that we have this OAuth client thing, we're going to use this to generate the URL that the user should be redirected to when they click that login with Google button, right?
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=153)** You're probably familiar with this.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=154)** When you click that button, it usually opens a new tab or something like that that will allow the user to log in.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=160)** And here's what this is going to look like.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=162)** We're going to create a function called getGoogleOauthURL.
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=169)** And what this is going to do is it's just going to use this OAuth client thing that we created up here to generate that URL.
>
> **[2:56](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=176)** First though, we're going to define these scopes that we want to be able to access.
>
> **[3:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=180)** Now these scopes here do have to be in the scopes that we selected in the Google Cloud console, right?
>
> **[3:07](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=187)** So you may remember that when we went to data access here and said Add or remove scopes, we selected user info email and user info profile.
>
> **[3:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=196)** Maybe I forgot to save those.
>
> **[3:17](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=197)** I don't know why those weren't there this time, but anyway, they're back there now.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=201)** So we can basically only use those.
>
> **[3:24](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=204)** Now you can see that this scope thing here has this little like what looks like a URL or something.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=210)** You can just copy that.
>
> **[3:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=212)** And basically what you need to do is just go back into here and we're going to add that onto the end of this URL, which is [https://www.googleapis.com](https://www.googleapis.com)/, and then you can paste that thing there.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=227)** Okay, so we're going to do the same thing with the profile.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=230)** Let's go back to here and we'll copy that, auth user info profile and we'll go back to here.
>
> **[3:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=237)** I'm just going to paste that in there and then actually take the URL from before that and paste it there.
>
> **[4:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=242)** And that's all we should need to do like that.
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=245)** And now that we have these scopes, we're just going to say return oauthClient.generateAuthUrl, and we're going to say access type.
>
> **[4:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=256)** This is going to be offline, right?
>
> **[4:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=258)** This allows offline access, obviously.
>
> **[4:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=260)** And then we're going to say prompt.
>
> **[4:22](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=262)** That's going to be consent that will ask the user for consent for our app to access the information we're requesting.
>
> **[4:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=269)** And finally, we're going to say scope.
>
> **[4:31](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=271)** And this is going to be the scopes that we defined up above.
>
> **[4:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=275)** So that's all we really need to do there.
>
> **[4:37](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=277)** Now let's just export the get Google OAuth URL function by saying module.exports equals getGoogleOauthUrl.
>
> **[4:48](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=288)** And now that we have this, the next thing that we're going to do is go over to our server and we're going to create the route that this thing will actually be used by.
>
> **[4:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=298)** Now, this is going to actually be a very simple route.
>
> **[5:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=300)** Here's what this will look like.
>
> **[5:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=301)** We're going to open up server.js and we'll scroll down to the bottom here.
>
> **[5:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=306)** Okay, we'll just add our new route down here.
>
> **[5:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=308)** And we're going to say app.get, right?
>
> **[5:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=311)** So this is going to be a get route instead of a put route.
>
> **[5:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=314)** And we're going to say /auth/google/url.
>
> **[5:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=319)** And let's also put /API at the beginning of that one too.
>
> **[5:23](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=323)** And then for the request handler, we're just going to say request response.
>
> **[5:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=327)** And we're going to use that function we just created to get the URL that we're going to send back.
>
> **[5:32](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=332)** So we'll say const url equals getGoogleOauthUrl.
>
> **[5:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=336)** And last but not least, we're going to say res.status 200.
>
> **[5:41](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=341)** And we're going to send back that URL as part of the request body here.
>
> **[5:46](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=346)** So that should be all we need to do.
>
> **[5:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=347)** Let's just try running our server just to make sure that all of that is working so far.
>
> **[5:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=352)** So let's just go back to our terminal.
>
> **[5:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=354)** It looks like Google APIs was installed correctly, so we're just going to say node server.js.
>
> **[6:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=360)** And if all goes well, we should see server running on Port 3000, okay?
>
> **[6:04](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-url-route?u=76281980&t=364)** So the next thing that we're going to need to do is go into our front end and basically just add that button that's going to allow the user to access this route.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (3), function (3), require (1), this. (1)
> **Env Vars:** url (11), npm (1), google_client_id (1), api (1)
> **Code Identifiers:** getgoogleoauthurl (3), oauthclient (2), googleoauthutil (1), generateauthurl (1)
> **CLI Commands:** make (3), npm (1), node (1)
> **File Paths:** server.js (2), googleoauthutil.js (1), process.env (1)
> **Cross-References:** go back to (4)
> **Prerequisites:** install (3), set up (1)
> **URLs:** [https://www.googleapis.com](https://www.googleapis.com) (1)

#### Creating a "sign-in with Google" button
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=0)** - [Instructor] Alright, so the next step in our OAuth process here is to add that login with Google button to our login page.
>
> **[0:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=7)** And there's going to be a few steps to this.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=9)** The first one is going to be that we need to create a new state variable here that will keep track of that URL that we load from the server.
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=18)** Now you might wonder, right, if we open this server back up here, you might wonder why we had to go to the trouble of creating this extra server endpoint whose purpose is basically just to get the URL that we want to redirect the user to, right?
>
> **[0:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=33)** Why couldn't we have just put this on our front end?
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=35)** Well, the reason why we couldn't just put this on our front end, it's a very important reason.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=40)** So let's just open the GoogleOAuthUtil file back up.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=44)** The reason is this CLIENT_SECRET and CLIENT_ID, right?
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=49)** These are things that we want to keep secret, and the fact is that if you put these on the front end, they're not secret.
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=55)** I'll go through this in a lot more detail near the end of the course, but basically every line of code that you write on the front end is accessible by the users who are using your site.
>
> **[1:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=67)** So if we were to put our secret in here, right, our OAuth client secret in the front end, then that would mean that everyone accessing our site would be able to see that and that would not be a good thing.
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=78)** So that's why we had to go through that trouble.
>
> **[1:20](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=80)** But here's what we're going to do.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=82)** We're going to say const googleOauthUrl, and setGoogleOauthUrl, and then we're going to say equals useState and we'll just set that to an empty string at first.
>
> **[1:35](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=95)** And the next thing that we need to do is we're going to scroll down here and we're going to have to load the OAuth URL from this endpoint that we just created when this login page is first displayed.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=109)** So we're just going to add in a useEffect hook here, right?
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=113)** And that was just automatically imported for me up at the top, I believe.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=117)** So we're going to add this and we're going to want to load this only at the very beginning of the app, right when the user first visits this page.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=125)** So we'll put an empty array at the end of that.
>
> **[2:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=128)** And then what we're going to do is we're going to create this loadOauthUrl async function, which is going to look like this async.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=138)** And then inside here we're going to say try.
>
> **[2:20](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=140)** And this will be const response = await axios.get and we're going to make this request to /api/auth/google/url. (keyboard clicks) All right.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=153)** And once we get the response, we know that that URL is going to be inside there.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=157)** So we'll just say const url = response.data.
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=161)** And last but not least, we're going to call setGoogleOauthUrl with that URL, and we'll catch any errors that occur here.
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=169)** We'll say catch e.
>
> **[2:50](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=170)** And for now, this isn't a recommended practice here, but we're just going to log that out to the console so that we can use that in development, right?
>
> **[2:58](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=178)** In the real world, what you'd want to do is maybe disable that button or something if something goes wrong or display an error message.
>
> **[3:04](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=184)** But we'll just ignore that for now.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=186)** Alright, and now we just need to call this loadOauthUrl thing and that will kick off the process of loading that from the backend.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=194)** So let's see.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=195)** Let's scroll down here.
>
> **[3:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=197)** And really the last thing here is we're going to add that button to this login page.
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=203)** And what that's going to look like is right underneath this signup button.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=208)** We're going to create a login with Google button.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=210)** We'll just say log in with Google.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=214)** And there are guidelines for this.
>
> **[3:35](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=215)** If you want to do this professionally and actually use this in a public site, there are guidelines that Google wants you to follow, like displaying their logo, different color schemes, things like that.
>
> **[3:46](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=226)** I'm just going to ignore those for now to keep this as simple as possible.
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=229)** But if you are going to use this professionally, please read through those.
>
> **[3:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=234)** And now what we're going to do is we're going to say that this button should be disabled as long as there's no GoogleOauthUrl.
>
> **[4:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=242)** So that's going to look like this.
>
> **[4:04](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=244)** We'll say disabled equals not googleOauthUrl.
>
> **[4:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=248)** Alright? So as long as that thing's not there, this button will be sort of shaded out and disabled.
>
> **[4:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=253)** And on click for this button, we're going to want to say window.location.href = googleOauthUrl.
>
> **[4:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=264)** We're doing this here, right, with window location href instead of the use navigate thing, because we're switching out the entire URL.
>
> **[4:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=273)** We're not just going to another path in our application.
>
> **[4:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=276)** All right, so that should be all we need to do there.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=280)** Let's test this thing out now.
>
> **[4:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=281)** And what we should be able to do, first of all, we'll need to run our front end of course.
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=285)** So our backend is already running.
>
> **[4:46](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=286)** Let's just restart that just in case. All right.
>
> **[4:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=289)** And then our front end, we're going to say cd front-end and run npm run dev.
>
> **[4:55](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=295)** And now we're going to need to go back to ports.
>
> **[4:58](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=298)** And again, if your code space was shut down or paused, you're going to need to set the port visibility here back to public.
>
> **[5:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=305)** All right. So we'll set that to public there as well.
>
> **[5:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=308)** Both of these should be public.
>
> **[5:10](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=310)** And now we're going to go back to our app.
>
> **[5:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=313)** Let's actually open that up again, 'cause I closed it.
>
> **[5:16](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=316)** And here's what this is going to look like.
>
> **[5:17](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=317)** We're going to have to say continue there, and we should see.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=321)** Here, we'll log out so that we can see our login page.
>
> **[5:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=323)** Sure enough, we see that that was populated with the login with Google button, right?
>
> **[5:27](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=327)** It was disabled for a second there, and now it's clickable, which means that we have that URL.
>
> **[5:32](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=332)** So let's just click this button, and sure enough, what we'll see is this screen, this is the consent screen or the OAuth login screen where you can select the email that you want to log in with.
>
> **[5:46](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=346)** And this is the one that we're going to log in with, but we can't do that yet because currently our server doesn't have an endpoint where Google can let us know that a user has logged in successfully.
>
> **[5:57](https://www.linkedin.com/learning/react-authentication-25660373/creating-a-sign-in-with-google-button?u=76281980&t=357)** So that's the next thing that we're going to be building here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), public (4), this. (3), const (3), async (2)
> **Code Identifiers:** googleoauthurl (3), setgoogleoauthurl (2), loadoauthurl (2), usestate (1), useeffect (1)
> **Env Vars:** url (7), client_secret (1), client_id (1)
> **UI Navigation:** scroll down (2), go to (1), open the (1), select the (1)
> **CLI Commands:** make (1), cd (1), npm (1)
> **Cross-References:** go back to (2)
> **API Endpoints:** /api/auth/google/url (1)
> **Definitions:** means that (1)

#### Adding an OAuth callback route
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=0)** - [Instructor] All right, so now that we've got this consent screen that's being displayed to the user, and by the way, if you're getting some sort of like authentication error or something like that instead of this screen here, make sure that you restart your Codespace once you've added those client secrets from GitHub because I ran into that problem as well, right?
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=19)** Basically it just didn't have the client ID and client secret that are needed for this URL.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=25)** So anyway, that's just something I wanted to mention there.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=28)** All right, so what we're going to need to do here is open our server back up and actually I have that right there.
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=34)** And what we're going to do here is we're going to add another route that will be that callback route that we added in the Google Cloud console.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=42)** So here's what this is going to look like.
>
> **[0:43](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=43)** We're going to say app.get, and this one here is going to be /auth/google/callback.
>
> **[0:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=52)** Now we don't need that API thing here because the call for this isn't going to be coming from our front end, right?
>
> **[0:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=57)** It's going to be coming from Google.
>
> **[1:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=60)** So here's what this will look like.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=61)** We're going to say Async request and response for the callback function here for this route.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=68)** And inside here we're going to first of all need to get the code from the query parameters.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=74)** So we'll say request.query.
>
> **[1:16](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=76)** And this code is basically something that Google is going to give us that will allow us to get more information about the users, such as their email address and other profile information.
>
> **[1:27](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=87)** So here's what this will look like.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=89)** We're going to need to create a few other functions in order to do this, but for now we'll just kind of like type this out and let it be a placeholder.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=96)** We'll say Const Oauth user info equals, and for now, we're just going to have that be an empty object.
>
> **[1:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=104)** Again, this is where we're going to be using this code to actually load it from Google.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=107)** So this is just a placeholder for now.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=109)** And then what we're going to do is we're going to actually create a new user in our database from the info that we get back from Google.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=118)** So here's what that'll look like.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=120)** We're going to say const createdUser equals, and for now we're just going to have that be an empty object as well.
>
> **[2:08](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=128)** We will come back and implement that shortly.
>
> **[2:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=131)** And really the last thing that we're going to need to do is take this created user that we just made and send back a JWT with that user's info.
>
> **[2:20](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=140)** So we're still going to be using JWTs here in order to manage our authentication.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=145)** The difference here is that instead of managing the user's password and stuff like that, we're letting Google OAuth take care of all of that for us.
>
> **[2:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=154)** So here's what we're going to do.
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=155)** We're just going to say JWT.sign.
>
> **[2:38](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=158)** We will actually want to get things like the ID, the is verified, which is going to be true since it's already been verified by Google, and then the user's email and info, and we're going to get that from the user that we created.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=172)** Okay?
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=173)** And then we're going to sign that.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=174)** So we'll say ID is verified.
>
> **[2:57](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=177)** Then we'll do email and info, and we're going to say Process.env.JWT_secret, just like we've done in the past.
>
> **[3:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=186)** And now for the callback here, we're going to say error and token.
>
> **[3:11](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=191)** And that's going to be the same as what we've seen before as well.
>
> **[3:13](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=193)** All right, so we're just going to say if there's an error, we'll say return response.sendStatus.
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=198)** We'll send a 500 status code there.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=201)** Otherwise we're going to say response.redirect, and we're going to redirect the user back to the login page.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=208)** So what this is going to look like, we're actually going to need the URL of our front end here.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=213)** So let's open that up.
>
> **[3:34](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=214)** We're going to copy the front end URL like this, and then we'll come back to here, and we'll paste it like so and add /login.
>
> **[3:44](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=224)** And we want that token there because that's how we're going to pass it over to the front end.
>
> **[3:50](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=230)** So let's actually use back ticks here so that we can insert that easily, and then we'll say token equals token.
>
> **[3:58](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=238)** You'll see how we grab onto that from the login page shortly.
>
> **[4:02](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=242)** All right, so that's pretty much all we need to do for this route setup.
>
> **[4:06](https://www.linkedin.com/learning/react-authentication-25660373/adding-an-oauth-callback-route?u=76281980&t=246)** So the next thing we're going to do is go in and actually implement these functions here that will take care of loading the user's info and creating a new user in our database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), const (2), async (1), function (1)
> **Env Vars:** url (3), jwt (2), api (1)
> **Analogies:** such as (1), kind of like (1), just like (1)
> **Code Identifiers:** createduser (1), sendstatus (1)
> **File Paths:** process.env (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)

#### Loading user info from Google
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=0)** - [Instructor] All right, so now that we've added this callback route, we need to implement some functions for this oauthUserInfo thing and creating or updating a user in our database from the user that just logged in, if that's necessary.
>
> **[0:14](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=14)** So here's what that's going to look like.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=16)** We're going to create a new file here that will contain some utility functions.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=21)** This is just going to be called something like Google, well, in fact, we can put it inside this googleOauthUtil file if that's easier, just to keep all of this stuff together.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=29)** And the first function that we're going to create here will be called something like getGoogleUser.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=37)** Now, what this is going to do is it's going to take a code, we'll just say async (code) like this, and it's going to use that code to load the user's info, right?
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=47)** This is a secret code here that Google gives us to prove that a user has logged into our site and, well, basically agreed that we can use their data.
>
> **[0:57](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=57)** All right, so here's what this is going to look like.
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=59)** We're going to say const { tokens } and we're going to say = await oauthClient, so we're using that thing that we created up here as well, .getToken, and we're going to pass that code, right?
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=74)** So basically we're trading this code that Google gave us for a token that will prove that we have access to those parts of the user's information.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=82)** And now we're going to say const response =, and we're actually going to use Axios on the backend here to make this request.
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=89)** So we will have to install that in just a minute.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=92)** We'll just say axios.get, and we're going to, well, the URL here, here's what this is going to look like.
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=99)** We're actually going to say, and I'm just going to copy and paste this here because it's a little bit long, but it's going to be HTTPS, feel free to just type all this out here, make sure it all matches.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=110)** And for the access token here, actually let's put this in backticks.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=115)** And the access token, that's going to actually be tokens.accessToken that we include there.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=123)** And for the headers, we need to include another token from this tokens thing that we got.
>
> **[2:10](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=130)** Don't worry if this is a little bit confusing, this is just how OAuth works with Google.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=134)** Every platform has a slightly different way that they handle all this stuff, so these are really just the small details here.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=141)** So we're going to say headers, and this is going to be Authorization, very similar to what we did on our front end when making requests to our backend.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=149)** But now our backend is making requests to Google.
>
> **[2:32](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=152)** And we're going to say, in backticks again, Bearer.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=156)** And this is going to be tokens.id_token, and that should be all we need to do there.
>
> **[2:45](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=165)** Alright, so now that we have this response, we're just going to return response.data and that will contain the information that the user has agreed to give us.
>
> **[2:55](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=175)** So again, their email, stuff like that.
>
> **[2:58](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=178)** Now that we have this getGoogleUser function, we're going to export that one as well.
>
> **[3:03](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=183)** And what we're going to do is we're going to go into our server and replace this empty object here with getGoogleUser.
>
> **[3:12](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=192)** And that was just automatically imported for me up at the top.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=194)** And we're going to pass our code that we got from the query parameter through to that.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/loading-user-info-from-google?u=76281980&t=201)** Alright, so in the next video, now that we've done this, we're going to see how we can create a new user in our database using the info that we just got from Google.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), this, (2), const (2), pass (2), async (1)
> **Code Identifiers:** getgoogleuser (3), oauthuserinfo (1), googleoauthutil (1), oauthclient (1), gettoken (1)
> **CLI Commands:** make (2)
> **Env Vars:** url (1), https (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Prerequisites:** install (1)

#### Creating new users from OAuth data
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=0)** - [Speaker] Alright, so now that we're loading the user's info from Google, the last function that we're going to create here that should complete our callback URL here is going to be a function for basically taking that user.
>
> **[0:14](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=14)** And there's really two possibilities here, right?
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=16)** One is that the user just logged in with Google OAuth and they've never logged into our site before in any other way, right?
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=24)** And the second possibility here is that they've already logged in with like their email and password and now they're logging in and sort of like linking their account by logging in with Google.
>
> **[0:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=36)** So really we just have to take those two possibilities into account here.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=40)** Here's what that's going to look like.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=41)** We're going to define our function here called Update or Create User from OAuth.
>
> **[0:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=49)** Kind of a complicated name there, but it pretty much describes the different possibilities here.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=54)** And we're just going to pass the OAuth user info here as an argument.
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=59)** And what we're going to do, first of all, is we're going to get three pieces of information from that.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=64)** One is going to be the ID.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=66)** Now this is different, right?
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=68)** This ID is going to be different than the kind of ID that we use.
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=71)** This is going to be the ID that Google uses internally.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=74)** So we're going to say ID, and we'll rename that to Google ID then we'll say verified email.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=81)** This indicates whether the user has verified their email with Google and we're going to rename that to is verified 'cause we're basically just going to set that to whatever Google has.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=91)** In other words, if Google has already verified that email, then that's good enough for us, right?
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=96)** And finally, we're going to say email and we'll just leave that as email.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=100)** We don't need to rename that and we'll say equals OAuth user info, okay?
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=105)** So we're just getting those three properties from that and renaming them accordingly.
>
> **[1:48](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=108)** And now we're going to need access to the database.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=112)** So we'll just say const db equals require and we're going to load our database file there and that should be all we need to do.
>
> **[2:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=122)** Let me just make sure that I did that correctly in server.js.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=125)** Yep, alright, sure enough, that looks like the same thing.
>
> **[2:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=127)** And we'll also want savedb there as well.
>
> **[2:10](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=130)** Cool.
>
> **[2:11](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=131)** So let's scroll back down here.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=132)** And the first thing that we're going to want to do is figure out whether there's already a user with that email in our application.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=141)** So we're going to say const existing user equals, and we're going to say db.users.find and find a user with the corresponding email.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=153)** So user.email equals email.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=156)** And if there's an existing user, right, we'll say if existing user, then what we'll do is we're just going to want to update the user in the database with any additional information that we have here, right?
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=168)** So we'll want to update this is verified thing for example.
>
> **[2:52](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=172)** And we'll also add this Google ID thing onto the user so that we know that that user has a linked Google account.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=179)** So here's what that'll look like.
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=181)** We'll say db.user.googleid, we'll say equals googleid.
>
> **[3:08](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=188)** And then we'll say db.user.isVerified.
>
> **[3:13](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=193)** We're going to set this to either the is verified property from Google, right?
>
> **[3:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=198)** In other words, if this is true, we want db.user.isVerified to be true.
>
> **[3:23](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=203)** Oh, and sorry, that shouldn't be db.user.
>
> **[3:25](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=205)** This should be existing user.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=208)** Okay, there we go.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=210)** And we'll do existing user down here as well.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=213)** So existinguser.isVerified.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=216)** That's going to be either the is verified thing up here or, right?
>
> **[3:41](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=221)** If one of these is true, that's good enough for us.
>
> **[3:43](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=223)** If existing user is already verified, then we'll want that to be true because of that as well.
>
> **[3:51](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=231)** And that's pretty much all we need to do there.
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=233)** So now what we're going to do is if there isn't an existing user already, we're going to want to insert a new one by saying db.users.push and here's what the new user's going to look like.
>
> **[4:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=247)** The new user's going to have an email as well as a Google ID, and we'll put isVerified in there directly and then we'll have info and set that as basically just an empty object there.
>
> **[4:19](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=259)** All right.
>
> **[4:21](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=261)** And actually to make this easier to send this user back, what we're going to do is we're going to say new user, right?
>
> **[4:28](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=268)** Const newUser equals and then what we'll do is we'll say db.users.push newUser.
>
> **[4:36](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=276)** And in either one of these cases we'll want to return that corresponding user.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=280)** So in this existing user case, we'll say return existingUser.
>
> **[4:45](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=285)** And in this new user case, we'll say return newUser.
>
> **[4:49](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=289)** And then after all this is done, right, we'll have to do that in two separate places here.
>
> **[4:54](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=294)** We're going to say saveDb so that that result is persisted there.
>
> **[4:59](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=299)** So we'll say saveDb here as well.
>
> **[5:02](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=302)** And that should be all we need to do.
>
> **[5:04](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=304)** So let's make sure that we export this thing now, right?
>
> **[5:07](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=307)** We'll export, what do we call it here?
>
> **[5:09](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=309)** Update or create user from OAuth.
>
> **[5:11](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=311)** And now if we go back to server.js, we're just going to go back down to where we had that empty object.
>
> **[5:18](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=318)** All right, there we go.
>
> **[5:19](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=319)** And we're going to say created user equals, and we'll say instead of that empty object, update or create user from OAuth, and we're going to pass that OAuth user info through and that should be all we really need to do there.
>
> **[5:33](https://www.linkedin.com/learning/react-authentication-25660373/creating-new-users-from-oauth-data?u=76281980&t=333)** So the last thing that we're going to need to do is basically bring this all together by going back to the front-end and seeing how we can handle a successful OAuth authentication when we redirect the user back to the login page here.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), const (3), let (3), pass (2), case, (2)
> **Code Identifiers:** isverified (4), newuser (3), savedb (2), existinguser (1)
> **CLI Commands:** make (3), find (2)
> **File Paths:** server.js (2)
> **Definitions:** in other words (2)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)

#### Handling successful OAuth authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=0)** - [Shaun] Okay, so the last step in this whole process, as I said, is to modify our login page because after our user finishes going through this callback here, right?
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=12)** After this finishes, it's going to redirect our user to the login page, but it's going to set this token query parameter.
>
> **[0:20](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=20)** And so essentially what we want our login page to do is check to see whether that's there.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=25)** And if it is, then to log the user in.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=28)** So here's what this is going to look like.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=30)** We're going to go to the login page.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=31)** And the first thing we're going to do is get the value of that token query parameter if it's there.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=39)** And here's what this is going to look like.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=40)** We're going to say, underneath all of this stuff here, we'll start off by saying const.
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=46)** And we're going to use the use location hook, so we'll say const location equals useLocation like so.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=54)** And now what we're going to do here is we're going to say const queryParams equals new URLSearchParams.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=64)** And we're going to pass location.search to that.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=68)** And the last thing here is we just need to get the token out of there by saying const token equals queryParams.get('token').
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=78)** And actually let's call this something a little bit different here.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=81)** What we're actually going to call this, oauthToken.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=83)** So we'll change that there, oauthToken.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=88)** And now that we have that, let's go down here.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=92)** And above the last use effect hook that we created, which is the one that loads that URL, we're going to use the useEffect hook to basically check this oauthToken thing and redirect the user based on that.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=107)** So here's what that'll look like.
>
> **[1:48](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=108)** We're going to say useEffect.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=110)** This is only going to be called in a few different circumstances.
>
> **[1:54](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=114)** The first is if the oauthToken itself changes, so we'll put that as the first dependency.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=119)** Then we'll have setToken here as well as navigate 'cause we're going to be using all three of those things.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=125)** And now inside here we're just going to say, if there's an oauthToken, then what that means is the user was redirected here after logging in from Google.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=136)** And we're going to want to just set that token.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=138)** So we'll say setToken to oauthToken.
>
> **[2:22](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=142)** And we're going to say navigate.
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=144)** And we're going to send the user to the home route with replace equal to true.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=149)** And that is all we need to do there.
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=153)** So one last thing just to kind of highlight that we're actually storing the user's data here in emails, we're going to open up the user info page.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=162)** We haven't seen this one in a while.
>
> **[2:43](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=163)** And we're going to actually display the user's email in this title, all right?
>
> **[2:49](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=169)** So you've probably wondered why the title up here just has this blank.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=173)** We're going to display that email in there just by saying info for email.
>
> **[2:58](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=178)** And that should be all we really need to do.
>
> **[3:00](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=180)** Except there is actually one little bug on the server side.
>
> **[3:03](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=183)** And that is we need to add the await keyword to both of these functions here just to make sure that we're not getting a promise back and trying to destructure that.
>
> **[3:13](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=193)** That's something that can cause some pretty tricky bugs to track down, so let's just restart our server to make sure that that has those changes.
>
> **[3:21](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=201)** We'll go back to here.
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=202)** And we'll say node server.js like that.
>
> **[3:26](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=206)** And now, we're going to just try this again.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=208)** So if we go back to our React app, we should be able to log in with Google.
>
> **[3:33](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=213)** And I'm going to click on this one here.
>
> **[3:35](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=215)** And if all goes well, what we should see is.
>
> **[3:40](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=220)** There we go, that it takes us to the user info page.
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=222)** And we have this sw.linkedin.learning@[gmail.com](https://gmail.com) email in there.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=227)** And if you check your database, right?
>
> **[3:49](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=229)** If we open up db.json here.
>
> **[3:52](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=232)** What you should see is, sure enough, there is now a new user in there for that email.
>
> **[3:58](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=238)** So that's the last thing that we have to do there, right?
>
> **[4:01](https://www.linkedin.com/learning/react-authentication-25660373/handling-successful-oauth-authentication?u=76281980&t=241)** We now have a fully functional oauth flow that allows our users to log in with Google.

> [!info]- Semantic Content
>
> **Code Identifiers:** oauthtoken (6), queryparams (2), useeffect (2), settoken (2), uselocation (1)
> **Code Keywords:** const (4), let (3), pass (1), this, (1), while. (1)
> **CLI Commands:** make (2), node (1)
> **File Paths:** server.js (1), db.json (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), click on (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Env Vars:** url (1)


### 5. Prebuilt Auth Options

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why prebuilt auth options?
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=0)** - [Instructor] All right, so throughout this course, we've seen how to implement pretty much everything ourselves for the most part.
>
> **[0:06](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=6)** So the next thing that we're going to do is we're going to take a look at a few prebuilt options that you can use to quickly and easily add user authentication to your application.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=16)** Now, the downside of a lot of these, of course, is that they change quite frequently.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=21)** And so the ones that you see here in this course may be a little bit different, right?
>
> **[0:26](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=26)** As we'll see in a minute, they may have changed names, or the basic integration process might be a little bit different.
>
> **[0:32](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=32)** So it's a tricky thing to really talk about these in a static course like this.
>
> **[0:36](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=36)** But the good news for most of these is you'll see is that they have really good documentation that walks you through step by step how to add it to your app.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=44)** So, what I'm going to do here is I'm going to talk about a few of the major players in this prebuilt authentication space and help you choose which one's right for you should you decide to go down this path.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=54)** Now, that brings us to the next question, and that is: Why would you want to use prebuilt authentication in the first place, right?
>
> **[1:00](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=60)** Now that we've gone through learning about a large number of different aspects of the authentication process, why would you, you know, turn to another company that's going to do that all for you?
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=71)** Well, there's a few reasons why you might want to do this.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=74)** Really, the first one has to do with security.
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=77)** Right now, even if we understand all of the basic security concerns behind using user authentication in our applications, the fact is that for most of us, actively managing this security and making sure our app stays secure over time just isn't a realistic pursuit, right?
>
> **[1:35](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=95)** That's really something that you have to have a fairly sizable team behind you to do.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=100)** Another reason here is reliability.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=103)** So, a lot of the things that we've seen how to implement work great when we're running them locally or just in a basic test setup.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=110)** But the fact is that in the real world, things can get pretty messy.
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=113)** And this also requires that you have a separate reliability team behind you in many cases that's going to make sure that everything about your authentication flow continues to work day in, day out, right?
>
> **[2:07](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=127)** So this is another reason why many people turn to prebuilt auth is that this is something that these companies take care of for you.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=134)** A third thing is rapid implementation.
>
> **[2:16](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=136)** So, everything that we've seen so far has taken quite a bit of time to really figure out and sort out the details for.
>
> **[2:24](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=144)** With a lot of these prebuilt auth providers, it's really just a few lines of code that you can add to your app.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=151)** And that's it, right?
>
> **[2:33](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=153)** You can have user authentication in your application relatively quickly.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=157)** Now, besides this, reduced complexity.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=160)** So, in many cases, since you are no longer the one with prebuilt auth who's having to manage the database, having to manage the emails, things like that, it can really make it much simpler to add user authentication to your application, as well as just kind of keep it running smoothly.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=179)** And finally, the last thing here is scalability.
>
> **[3:02](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=182)** So, with prebuilt authentication, you know, you might be just starting out and only have a handful of users on your site, but then a month from now, you might have thousands and thousands of users on your site.
>
> **[3:14](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=194)** Now, this can be very tricky to scale up sometimes, depending on how you've implemented things, but if you use prebuilt authentication providers, usually this is something that just sort of happens automatically, which is really nice for when your application becomes really popular.
>
> **[3:32](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=212)** So these are some of the main reasons why you might want to use prebuilt authentication.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=216)** But let's take a look at a few downsides.
>
> **[3:39](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=219)** Really, there are three main downsides here.
>
> **[3:42](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=222)** The first one is that with most of these providers, there's an associated cost.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=227)** Now, the pricing strategies of these different providers vary quite a bit.
>
> **[3:52](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=232)** It can sometimes depend on how many users you have, sometimes on how much usage you're getting, right, how many users are logging in, things like that.
>
> **[4:00](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=240)** But overall, there is going to be an associated cost here that you'll have to pay.
>
> **[4:05](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=245)** Now, one thing that I'll say for this is if you compare this against the cost of hiring a team, right?
>
> **[4:12](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=252)** Let's say your own employees to take care of the authentication for you, in many cases, the cost of a prebuilt auth provider will seem very, very small indeed.
>
> **[4:22](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=262)** But nevertheless, it is something to think about.
>
> **[4:24](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=264)** The second thing here is that with many of these prebuilt auth providers, there is a risk of vendor lock-in.
>
> **[4:32](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=272)** Now, what's vendor lock-in?
>
> **[4:33](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=273)** Vendor lock-in is when you're not careful, and your application becomes so dependent on a specific vendor's implementation that it becomes very hard to, say, switch vendors.
>
> **[4:46](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=286)** Or if the vendor goes out of business, it becomes very difficult to, you know, go through and remove all of that vendor's specific code from your application.
>
> **[4:55](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=295)** This is a big risk with really any kind of technology.
>
> **[4:59](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=299)** And this can be true of databases, different libraries, email providers, as we've seen, things like that.
>
> **[5:07](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=307)** And last but not least, ultimately, with prebuilt authentication providers, you're just going to have less customization and control over how your application works in this respect than if you had implemented everything yourself.
>
> **[5:21](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=321)** Now, you might see this as a good thing in certain situations, right?
>
> **[5:26](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=326)** The fact that it's just kind of prebuilt, there's not really a whole lot of thought you have to put into it.
>
> **[5:30](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=330)** That can ultimately end up being a good thing for a lot of people.
>
> **[5:33](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=333)** But, if you have some very specific authentication needs, then what you might find is just that prebuilt auth providers don't quite fit into what you had in mind.
>
> **[5:43](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=343)** So anyway, those are some of the benefits and downsides of prebuilt auth.
>
> **[5:47](https://www.linkedin.com/learning/react-authentication-25660373/why-prebuilt-auth-options?u=76281980&t=347)** So the next thing that we're going to do is briefly take a look at some of the most popular auth providers.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (2), static (1), for. (1), this, (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Authentication with Auth0
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=0)** - [Instructor] Alright, so the first prebuilt auth provider option that is available to you, at least the first one that we're going to talk about here, is one called Auth0.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=9)** Now, this might be a little bit confusing seeing as though there's something else in the space called Oauth, many people you'll hear them pronounce this Auth-O, it's called Auth0.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=19)** But anyway, there are a few key benefits to Auth0.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=23)** First of all, though, I wanted to show you what the site looks like.
>
> **[0:25](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=25)** So feel free to just take a look at this, look through their documentation if you're interested in getting started with this.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=31)** And, you know, feel free to give it a try to see if it fits in with what you need.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=35)** I'm not going to be doing that here, but I will be going into some of the key features that makes this one unique as well as just reasons why you might want to use this provider.
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=46)** So the first thing here is that, for the most part, when working with Auth0, integrating this into your application is really very easy, right?
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=55)** The libraries and stuff that they provide for React and Node.JS really just make it easy to get started, and, especially now that you're aware of how all of this stuff works behind the scenes, it can really be a very straightforward option for you.
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=71)** Now, the second thing here is that Auth0 provides support for a wide variety of different providers.
>
> **[1:20](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=80)** So, you know, if you want to allow users to log into your site through social media logins like Facebook, Google, and so on, if you want to do password lists authentication, where basically temporary password is sent to the user's email address, or if you want to do things like enterprise login, you can do those with Auth0.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=101)** It makes it very easy to do.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=103)** And besides that, it does have some advanced security features.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=105)** So you can have like multifactor authentication where it sends a code to, say, your cell phone built in.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=112)** It protects you from hackers who will try and, you know, hack users' passwords by brute force, as well as through a wide variety of other strategies.
>
> **[2:03](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=123)** And finally, Auth0 has a customizable UI where basically it will actually host your login pages for you if you want it to.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=133)** And those are fully customizable.
>
> **[2:15](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=135)** So essentially instead of adding that to your React application, you can create your own login page that users will be redirected to that's managed and hosted by Auth0.
>
> **[2:27](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=147)** So anyway, those are some of the key features of Auth0.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=151)** Again, if you want to try this out, just head over to their website here and read through their documentation.
>
> **[2:36](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-auth0?u=76281980&t=156)** It's pretty easy to get started with.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), this. (1), finally, (1)
> **CLI Commands:** node (1), make (1)
> **File Paths:** node.js (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Authentication with Firebase
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=0)** - [Instructor] Alright, so the next auth provider that we're going to take a look at here is Firebase.
>
> **[0:05](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=5)** This one is provided by Google and is integrated in many ways with Google Cloud.
>
> **[0:11](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=11)** So if you're already using Google Cloud or maybe even Firebase, which is a somewhat more user friendly version of Google Cloud, this can be a great option because it's really just pretty straightforward to get started with.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=24)** So let's talk about some of the benefits of Firebase.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=27)** First of all, just like with Auth0, setting this thing up is really pretty quick and easy, right?
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=35)** You really don't have to do a lot of configuration and really it is best for small to medium-sized applications.
>
> **[0:41](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=41)** You'll find that when your application starts getting lots and lots of users, it can rapidly become a little bit more difficult to manage.
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=50)** So that's just something to keep in mind there.
>
> **[0:52](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=52)** Firebase authentication also has extensive support for a lot of different providers.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=58)** So obviously this includes the most common ones, like Google, Facebook, Twitter, GitHub.
>
> **[1:03](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=63)** But it also includes things like phone authentication.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=66)** You can do email, password, sign in with this one, so you could actually replace part of what we implemented earlier with this, and there's lots of other providers there as well, that literally all you have to do is just enable them and provide a button that the user can click and Firebase Auth will take care of the rest.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=85)** Alright, and besides that, one thing that's really nice about Firebase Auth that makes it easy to integrate into React applications is that Firebase provides real time listeners for whenever a user's off state changes.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=100)** And this makes it really easy to just create something like a custom hook where you can immediately know when the user logs out and adjust everything accordingly.
>
> **[1:49](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=109)** And finally, one of the really nice things about Firebase Authentication is that it's free tier is very generous.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=117)** I personally have never reached the point in my personal projects where I've had to start paying for Firebase Authentication.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=125)** It's really a very budget friendly tool for, you know, smaller companies, small teams, and of course personal projects.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=132)** So anyway, that is Firebase Authentication.
>
> **[2:15](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=135)** Again, if you want to check this out, feel free to head over to their website.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=138)** They have lots of details about the different things you can do on this.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-firebase?u=76281980&t=141)** And really, if you're interested in knowing more, just walk through some of the tutorials they have on their site.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1), finally, (1), for, (1), this. (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Authentication with NextAuth.js
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=0)** - [Instructor] All right, the next prebuilt auth provider we're going to take a look at is one called NextAuth.js.
>
> **[0:07](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=7)** And the first thing to know about this one is, while we've seen in this course how to add authentication to a regular React Node.js app, in many cases, and I'm assuming that this is true for many learners out there, what you'll want to do is add authentication to a Next.js app, and that's what NextAuth.js really provides us with an easy way to do.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=30)** So, hopefully that sets the stage a little bit for this one.
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=34)** And that's really the main benefit of this provider is that it integrates pretty seamlessly with Next.js apps, right?
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=42)** It's specifically designed to be used with Next.js as part of that ecosystem.
>
> **[0:48](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=48)** Now, in addition to this, NextAuth.js is also open source and extensible.
>
> **[0:54](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=54)** So, unlike the other ones that we've talked about so far, where it's a closed system and really, in many cases you'll have to pay once you get past a certain point, with NextAuth.js, it's open source, meaning that you can start using it for free and also customize it as much as you want.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=73)** Okay, so this includes things like customizing authentication providers, managing sessions, right?
>
> **[1:18](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=78)** So, managing how a user's credentials are maintained once they've logged in.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=83)** And also, integrating with databases.
>
> **[1:25](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=85)** So if you wanted to integrate with SQL or MongoDB or really any other option, NextAuth.js makes that pretty easy as well.
>
> **[1:34](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=94)** And just like the other ones that we've seen, it also has support for a lot of different providers.
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=98)** So you can do OAuth with this.
>
> **[1:40](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=100)** You can do a credentials-based login like we saw at the beginning of the course.
>
> **[1:44](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=104)** You can also do email or passwordless authentication too, so there's a lot of options available for you there.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=110)** And finally, it has built-in support for JWTs, right, JSON web tokens, which we learned all about earlier.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=119)** And what this means is that you can really manage your sessions very easily with NextAuth.js by integrating them with the concepts that we learned earlier.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=129)** And in case you're wondering what NextAuth.js' website looks like, here it is here.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=134)** It might look a little bit different at this point, but feel free to look through the documentation.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=138)** There's lots of tutorials on here as well.
>
> **[2:21](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-nextauth-js?u=76281980&t=141)** And ultimately, that'll just help you know if you have a Next.js application, whether this is a good option for you.

> [!info]- Semantic Content
>
> **File Paths:** nextauth.js (7), next.js (4), node.js (1)
> **Code Keywords:** this, (1), this. (1), finally, (1)
> **Env Vars:** sql (1), json (1)
> **CLI Commands:** node (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Authentication with Clerk
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=0)** - [Instructor] Alright, well now that we've talked about NextAuth.js, let's talk about another option that is also specific to well, not necessarily Next.js, but definitely specific to the idea of front-end frameworks and creating web applications.
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=18)** But definitely specific to the world of things like front-end and JavaScript and frameworks and Full-Stack applications.
>
> **[0:26](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=26)** And this is something called Clerk, now the interesting thing about Clerk is and if you take a look at their website here, you can see this is it actually provides you with a number of pre-built components that you can add to your site, just like you can add any other kind of React component.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=44)** And you can actually work on the design of these things.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=47)** So you can see those all right here.
>
> **[0:50](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=50)** In the Clerk dashboard, instead of having to manipulate those in React in our case, in code.
>
> **[0:57](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=57)** So it's also a hosted solution, so you won't have to worry about doing any pf that self hosting like you would if you did NextAuth.js, but ultimately it's just a really great platform very easy you get started with.
>
> **[1:11](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=71)** So let's talk about a few of the key characteristics of it.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=74)** As I already said, one of the key features of this library for React developers is that it includes these out of the box React components that are ultimately designed for creating a very smooth and easy to use user interface and user experience.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=92)** Besides that it also includes other features like multi-factor authentication.
>
> **[1:36](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=96)** So you can enable this without having to do a whole lot of set up which is great.
>
> **[1:41](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=101)** Session management this includes things like fine-grained control and active device management.
>
> **[1:48](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=108)** You can read more about what that is if you're curious, but it's a very interesting feature that's available to you.
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=113)** And last but not least, it's developer friendly.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=115)** As I said, it's designed specifically for React.
>
> **[1:59](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=119)** There are bindings that you can use in order to use it with other libraries like Vue and you can also use it with Next.js, too.
>
> **[2:06](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=126)** So if you have a Next.js app it's really the same kind of process for adding Clerk to the app as if it's just regular React app like what we already have.
>
> **[2:14](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-clerk?u=76281980&t=134)** And it's just got a lot of different APIs and very clear documentation that ultimately make it just a really easy tool to get started with and work with long term.

> [!info]- Semantic Content
>
> **File Paths:** next.js (3), nextauth.js (2)
> **Code Keywords:** let (2), case, (1), self (1), interface (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Authentication with AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=0)** - [Instructor] Alright, well the last prebuilt authentication option that we're going to talk about here is AWS, Amazon Web Services.
>
> **[0:07](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=7)** And currently it has a specific name.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=10)** Currently it is called, if you go over to here, AWS Amplify Authentication.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=16)** But I've kind of left that out of the slides here just because they tend to change those names quite a lot.
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=21)** So it used to be called Cognito.
>
> **[0:23](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=23)** It's gone through a few other names as well, I believe.
>
> **[0:26](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=26)** But anyway, it's really just a great platform if you're okay with a little bit more configuration, and especially if you're already familiar with Amazon Web Services and working with those.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=37)** It can be a really great option for you.
>
> **[0:40](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=40)** So let's talk about why we might want to use AWS authentication services.
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=45)** First of all, it's fully managed, right?
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=47)** So by using these things called user pools, and there's a lot of other tools there as well, all of that stuff, the rest of the details are automatically managed for you, which is pretty cool.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=58)** Another thing here is that if you're already using the Amazon Web Services ecosystem, right?
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=64)** If you're already hosting your application on AWS or using some of its other capabilities, it can easily be tied in with other services, right?
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=73)** And this includes also things like Lambda, DynamoDB for databases, API gateway, things like that.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=81)** Now, it's no secret that AWS is very commonly used by larger corporations, and that is due to the fact that it's very scalable and also very secure.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=91)** So, a lot of these things are just automatic, and this includes the authentication aspect of it, right?
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=98)** And it also includes a lot of the security features that these other options that we've looked at have, such as multifactor authentication.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=105)** And last but not least, AWS Amplify does come with prebuilt components, but just like the previous option that we saw, it also allows you to customize those and also customize the entire authentication flow.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=120)** So if you want to create like an onboarding flow, things like that, you can do that as well with this tool.
>
> **[2:05](https://www.linkedin.com/learning/react-authentication-25660373/authentication-with-aws?u=76281980&t=125)** All right, so anyway, that is the pre-built AWS authentication option and some of the things that make it different and some reasons why you might want to use it.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (7), make (1)
> **Env Vars:** aws (7), api (1)
> **Code Keywords:** let (1), lambda (1)
> **Analogies:** such as (1), just like (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### 6. Best Practices

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using HTTPS and SSL
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=0)** - [Instructor] Okay, at this point in the course, we've seen quite a few different aspects of user authentication in the context of full-stack React, and now, it's time to talk about a few so-called best practices when incorporating authentication into a React application.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=16)** These are things that we haven't covered directly in the course, but nevertheless, they're very important to keep in mind, since a lot of times, they can make the difference between your user's data being secure and your user's data being easily accessible by hackers.
>
> **[0:31](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=31)** Now, the first of these best practices that we're going to take a look at is that in all your web applications that deal with sensitive data, you need to use HTTPSS, SSL, TLS.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=42)** Colloquially, these are all names for the same basic idea, so let's talk about that here.
>
> **[0:48](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=48)** If you go to sites like Google or Facebook or LinkedIn, and obviously, many others as well, you'll see that, up in the left hand corner of the page, the browser displays this little lock icon, and if you look at the full URL, you'll see that it begins with HTTPS instead of just HTTP, and that's because these sites use SSL, which stands for Secure Sockets Layer, and TLS, which stands for Transport Layer Security, to ensure that their users' communications remain secure, and you don't have to remember what these stand for exactly.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=83)** It's only important that you understand the basic concepts that we're covering here.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=88)** Now, to understand why this is important, let's think back to much earlier in the course when we talked about how, when interacting with some other party via the internet, it's very hard to be certain who exactly it is that we're interacting with.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=103)** A user on our site might say, "Yeah, I'm John Doe, let me access my bank account," but in order to know for sure that this is actually the case, that this is the real John Doe, we have to use some authentication techniques, as we've seen.
>
> **[1:58](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=118)** So while ensuring that our users are who they say they are is important, it's also important that your users can make sure that you are who you say you are and that no one else besides your site can see the requests that they're making, and that's where HTTPS or SSL or TLS or whatever name you want to use for it comes in.
>
> **[2:18](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=138)** So let's take a look at the first concern, proving to your users that you are who you say you are, in other words, making sure your users know that they're actually dealing with your site and dealing only with your site.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=151)** Now, we've already seen that, in order for users to log in or create an account on a site, they're sending us their password.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=160)** Now, if a user thought that they were logging into our site, but were actually logging into an imposter site, basically a site that looks like our site, but that was put up by a hacker, they'd be sending their password to that imposter who could immediately turn around and use their password to log into our real site, and there it is, that user's account has been hacked, and this is why it's always very important when you're logging into a site to A, make sure that you typed the URL correctly, in other words, make sure you're not logging into [google.com](https://google.com) with two Ls or three Os or some other misspelling.
>
> **[3:15](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=195)** There are hackers who actually buy these misspelled domain names and put up a site that looks identical to the real site for this reason, and B, you want to make sure that you always see this little lock icon, which means that the site is using HTTPS and that the certificate for that is valid.
>
> **[3:32](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=212)** Most of the time, your browser will double-check this for you automatically.
>
> **[3:36](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=216)** All right, so that's the first concern of HTTPS.
>
> **[3:39](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=219)** The second concern is making sure that a third party can't intercept and read a user's communications with the site that they're accessing.
>
> **[3:47](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=227)** You see, without HTTPS, it's actually fairly easy for hackers to read these kinds of communications.
>
> **[3:53](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=233)** One example of this is that, in public places like airports, for example, a hacker can simply set up their own Wi-Fi hotspot, and they can call it whatever they want, usually something like "free airport Wi-Fi," and then when they connect to this, the hacker will be able to see all the communications that users have with the sites they visit.
>
> **[4:14](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=254)** Now, this is only a problem if the sites that the users are accessing through this malicious hotspot aren't using HTTPS, because what HTTPS does is it encrypts all the communications between the user and the site, so even if a hacker can see those raw requests, they won't actually be able to read them once they're encrypted.
>
> **[4:33](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=273)** So now that we know what HTTPS does for our users, you're probably wondering how it works exactly.
>
> **[4:40](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=280)** Well, the in-depth details of HTTPS or SSL or TLS are a little bit beyond the scope of this course, but the basic concept is this.
>
> **[4:49](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=289)** When you're creating a site and you want to use HTTPS to keep your user's information secure, you're basically going to register your site with something called a certificate authority, which is a well-known company that can vouch for the fact that your site is who it says it is, and the certificate authority will then give you an SSL certificate, which basically says that the certificate authority is vouching for your identity, and this certificate is signed in a similar way to a JWT so that users' browsers can be sure that the certificate was actually created by this trustworthy certificate authority and not by the site itself, for example.
>
> **[5:30](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=330)** Now, the good news with HTTPS, SSL, TLS, whatever, is that it's generally provided for free from your web host, and if your web host doesn't provide you one for free or wants to charge you for HTTPS, I'd recommend that A, maybe you switch web hosts, or B, you can usually get a free certificate from sites like Let's Encrypt, but the point is that generally, you don't have to pay for these certificates, and they're usually something that just sort of happens automatically.
>
> **[5:58](https://www.linkedin.com/learning/react-authentication-25660373/using-https-and-ssl?u=76281980&t=358)** In other words, you usually don't have to manage the implementation details yourself when you're building your site.

> [!info]- Semantic Content
>
> **Env Vars:** https (12), ssl (6), tls (5), url (2), httpss (1)
> **Code Keywords:** let (5), case, (1), public (1), this, (1), this. (1)
> **Definitions:** in other words (3), stands for (2), means that (1), is a  (1)
> **CLI Commands:** make (5), ls (1)
> **Cross-References:** earlier in (1), we talked about (1)
> **Analogies:** for example (2)
> **URLs:** [google.com](https://google.com) (1)
> **UI Navigation:** go to (1)

#### Salting and peppering passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=0)** - [Instructor] Okay, the next best practice we're going to talk about here is the practice of salting and peppering passwords.
>
> **[0:06](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=6)** Now, these rather humorous terms, they refer to a fairly simple, but very effective, technique for making the password hashes that we store in our database even more secure.
>
> **[0:18](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=18)** So we'll start off with salting here.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=19)** Put simply, salting passwords means that before hashing and storing the user's password, we generate a random string of characters and then add that onto the beginning or the end of the user's password, right?
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=34)** And we then hash this entire string and store the user's password salt in our database alongside the password hash that we generated.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=42)** So that's salting.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=44)** Peppering passwords is a very similar process, but instead of randomly generating a unique string for each user as we do with salting, we simply have a secret string that's known only to our server that we append or prepend to the password, along with the salt, before we encrypt it, right?
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=62)** So in other words, the salt will be different for each user, and the pepper will be the same for all users.
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=68)** And just to clarify, these two techniques are usually used alongside each other to maximize their effectiveness.
>
> **[1:14](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=74)** Now, at first glance, it might not be quite clear how these techniques of salting and peppering passwords actually make our users' passwords more secure.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=82)** So in order to understand this a little bit better, let's imagine a situation where the unthinkable happens and a hacker gains access to our database.
>
> **[1:30](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=90)** Well, first of all, the possibility of this situation occurring is the main reason why we've hashed our passwords in the first place instead of storing them as plain text, right?
>
> **[1:39](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=99)** But salting and peppering adds an extra layer of difficulty over this for hackers.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=105)** With hashing alone, you see, there are techniques that hackers can use to actually figure out users' passwords, even after they've been hashed, right?
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=115)** And these techniques are usually based on the fact that at least some of our users probably have the same very guessable strings, such as, you know, abc123 or 123456 or some word like password as their password.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=132)** And what hackers can do then is they can usually identify them directly from their hashes, because they'll see that more than one user has the same hash for their password.
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=143)** They can usually be pretty sure that, in cases like that, the users have used one of those very easily guessable passwords.
>
> **[2:31](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=151)** So by adding salt, which is different for all users, to the password before creating the hash, we can basically mask that fact and make it harder for the hacker to get at that.
>
> **[2:41](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=161)** And adding pepper is just another layer over that where they would need to have access to the server as well in order to figure out what string is being used for the pepper before we generate that hash.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=174)** So that is the concept of salting and peppering when it comes to users' passwords.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/salting-and-peppering-passwords?u=76281980&t=179)** And that is how they help.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** imagine (1), such as (1)
> **Code Keywords:** let (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Solution: Adding salt and pepper
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=0)** - All right, well hopefully you gave this challenge a try.
>
> **[0:07](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=7)** So let's take a look at the solution.
>
> **[0:09](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=9)** So what I did here is I started off, obviously the salt and pepper password function.
>
> **[0:14](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=14)** I started off from scratch.
>
> **[0:16](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=16)** And really all we had to do here was take the pepper and the salt and kind of decide where we wanted to put them, or how we wanted to add them to this password.
>
> **[0:27](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=27)** So really the easiest thing you could have done here was you could have said, you know, return, and then we could have generated the salt.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=35)** So we'll do that on a line above that.
>
> **[0:37](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=37)** So I said, "const salt =" and then we'll just say, "generateRandomSalt."
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=42)** Use this one down here.
>
> **[0:44](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=44)** So "generateRandomSalt" like so.
>
> **[0:47](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=47)** And now that we have the salt, what we can do is we can just return that salt, obviously.
>
> **[0:51](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=51)** And for the password we're going to have to say, well, here, we'll say "result," just 'cause that was what we said in the instructions there.
>
> **[0:59](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=59)** And we could just add the password, plus the salt, plus the pepper.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=66)** And this is just one possible order, right?
>
> **[1:08](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=68)** And here, let's actually add the pepper in the uppercase letters that it's written in up there.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=73)** And as I said, this is just one possible order.
>
> **[1:16](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=76)** You could do the salt before the password, and then the pepper after that.
>
> **[1:20](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=80)** You could do the pepper and the salt before the password.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=82)** You can really do it in any order that you want.
>
> **[1:24](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=84)** And that is actually something pretty interesting, because that's just another thing that makes it more difficult for hackers to figure out, right?
>
> **[1:33](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=93)** They don't know what the order of the salt and pepper is, even if they're somehow able to figure out what the salt is, they won't know whether it comes before the password or after the password, or before the pepper or after the pepper.
>
> **[1:45](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=105)** And again, that just makes it much more difficult for them.
>
> **[1:48](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=108)** So let's just take a look at this.
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=110)** Let's take our simple Abc123 password.
>
> **[1:53](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=113)** We're going to click Generate Modified Password.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=115)** And as you can see, this is what the password becomes before it's encrypted.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=120)** So the likelihood that a hacker could guess this here and generate a hash and find that it matches is much smaller than if we were to just do Abc123 without the extra salt and pepper in it.
>
> **[2:13](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=133)** So hopefully you figured out this challenge.
>
> **[2:15](https://www.linkedin.com/learning/react-authentication-25660373/solution-adding-salt-and-pepper?u=76281980&t=135)** Congratulations if you did.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), try. (1), function (1), return, (1), const (1)
> **Code Identifiers:** generaterandomsalt (2)
> **CLI Commands:** find (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### Never trust the front-end
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=0)** - [Instructor] All right, let's move on to our third best practice, which is something that I always make sure to tell people when they're first starting off with full stack development, and that is to never trust the front end.
>
> **[0:12](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=12)** So what do I mean by this exactly?
>
> **[0:14](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=14)** Well, when I say "never trust the front end," I mean that when you're building a full stack application and you want to enforce some kind of security measure, it's absolutely critical that this protective logic is implemented on the server and does not rely on the client-side logic alone.
>
> **[0:30](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=30)** So just to give you some examples of this, and then we'll jump over to our application, where there's a pretty big security flaw that I wanted to show you in the context of this best practice.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=42)** Some examples of this would be to make sure that users can only view their own data, right?
>
> **[0:48](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=48)** So if you have a site with multiple users and you want to keep their data separated so that each user can only view the data that belongs to them, you need to make sure, as we did over here.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=61)** All right, so let's just find where we did this here.
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=64)** If we take a look at the update user endpoint, remember that what we did is we checked to make sure that the ID that we were trying to update was equal to the ID that was in the JSON web token, right?
>
> **[1:16](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=76)** If we had only done this on the client-side, the user could easily get around that.
>
> **[1:21](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=81)** All right, another example of this would be to make sure that users can't store arbitrary fields in our database.
>
> **[1:28](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=88)** That's why we've gone through the trouble here, right?
>
> **[1:30](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=90)** Every time that we allow the user to do something like update, that's why we've gone through the trouble of explicitly destructuring each individual part of that request body, is because we don't want the user to be able to just add extra information, extra properties, into that request body that would be saved in our database without our knowledge, okay?
>
> **[1:50](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=110)** That's another thing that we have to implement on the backend 'cause who knows what the client-side is going to do, right?
>
> **[1:56](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=116)** A user could easily just use Postman, like we've been doing for testing, to basically reverse engineer our server endpoints and send whatever requests they want to it.
>
> **[2:08](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=128)** And the last thing here is when you want to do things like make sure that only paid subscribers can access certain content, if you have that content loaded into the front end but let's say you try and hide it by putting maybe a faded out background in front of it or something like that, then anyone who's familiar with things like CSS or who knows how to look at the requests and find the data inside of them will still be able to access that content, right?
>
> **[2:35](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=155)** The front end... Front end measures are not going to stop them from doing this.
>
> **[2:39](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=159)** So once again, all of these need to be implemented on the backend if you really care about enforcing them for each and every user.
>
> **[2:47](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=167)** So to show you an example of this in more detail, what we're going to do is we're going to use Postman here to send a request to basically hack our server for something that we didn't enforce there, all right?
>
> **[3:01](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=181)** So let's take a look at the update endpoint in a little bit more detail, and one thing you'll notice is that even though we went through the trouble of modifying this verify email endpoint so that we could actually tell whether a user was... Whether the email that a user gave us was real or not, we didn't actually do anything about that in the update endpoint, right?
>
> **[3:22](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=202)** There's nowhere here where we actually check to make sure that the user's email is verified.
>
> **[3:28](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=208)** And here's what that would look like in the backend.
>
> **[3:30](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=210)** This is the right way to do it.
>
> **[3:32](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=212)** What we're going to do is we're going to say... And we can just go down here to jwt.verified.
>
> **[3:39](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=219)** We can just say "if," and then we'll have to get the "is verified" property out of decoded, so we'll say "is verified" like so.
>
> **[3:48](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=228)** And then what we'll do is we'll say, "if not is verified," then we'll just want to do the same kind of thing as what we did up here but with maybe a different message.
>
> **[3:58](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=238)** So we'll say "return response status 403," and then we'll say something like, "email must be verified."
>
> **[4:06](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=246)** So in this case, no matter what we do on the front end, and even if we put together a request in Postman to try and get around this feature, it won't work because it's implemented on the server.
>
> **[4:20](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=260)** However, if we had not done this, right?
>
> **[4:22](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=262)** If we had left this out and basically just tried to implement this on the user info page.
>
> **[4:27](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=267)** So if we were to say something like... For save changes, if we were to say "disabled equals," and then check whether the user is verified or not, right?
>
> **[4:38](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=278)** So we'll say something like "disabled equals not is verified."
>
> **[4:43](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=283)** That would be pretty easy to get around because, again, the user could basically not even use our front end and just send a request to the update endpoint from a tool like Postman, okay?
>
> **[4:55](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=295)** So I'm going to change these back here.
>
> **[4:56](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=296)** Well, I'm going to change this one back and I'll leave this one on the server.
>
> **[5:00](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=300)** I'm going to un-comment that because that is important there.
>
> **[5:03](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=303)** So anyway, that is the basic idea of not trusting the front end.
>
> **[5:08](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=308)** Make sure you do this.
>
> **[5:10](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=310)** And you might even want to look around our app here to make sure that there's no other places where we need to do this as well.
>
> **[5:17](https://www.linkedin.com/learning/react-authentication-25660373/never-trust-the-front-end?u=76281980&t=317)** But I'll leave that up to you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (9), find (2)
> **Code Keywords:** let (4), this, (2), this. (2), if, (1), case, (1)
> **Tools:** postman (4)
> **Best Practices:** best practice (2), always make sure (1)
> **Env Vars:** json (1), css (1)
> **Speakers:** - [instructor] (1)

#### Authentication error handling
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=1)** - [Instructor] All right, so the best practice here, which again is probably pretty obvious, is that if something goes wrong in our application, we usually want to let our users know, right?
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=10)** If they've put in the wrong password, when logging in for example, we want to tell them that.
>
> **[0:15](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=15)** And if they try and view a page that they're not authorized to see, we want to tell them that as well, and so on, right?
>
> **[0:21](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=21)** Now, that being said, we also want to avoid telling our client too much about server-side errors that occur.
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=28)** And one thing that this means, is that in general, we don't want to just send the client the entire error object that our server caught in the "try...catch" block.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=39)** Since this can usually contain some information that hackers could use to find vulnerabilities in our site, right?
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=45)** Sending this error back to the client can actually provide malicious users with a little too much information about our tech stack, such as what database we're using.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=53)** And in rare cases, it can even expose things like the IP address of our database, which is generally not a good thing for hackers to know.
>
> **[1:01](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=61)** And in cases where we've been really careless, we may even be sending back sensitive information such as a user's password hash or other information, right?
>
> **[1:10](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=70)** For example, if we send back an error that occurred while we were hashing a user's password or comparing it, for example.
>
> **[1:17](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=77)** Now you may have noticed that we did something a little contradictory when we set up our signup route.
>
> **[1:23](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=83)** That is in our signup route, we actually do return a different status code if the user already exists with that email address.
>
> **[1:31](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=91)** And this is where a little dilemma comes in, and that is, do we maximize user experience at the expense of a little bit of safety?
>
> **[1:38](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=98)** Or do we maximize safety with the possibility of frustrating our users, right?
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=103)** For example, if a user keeps trying to sign up with an email address that there's already an account for, because they don't know, right, because we're not telling them.
>
> **[1:52](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=112)** Now, you'll notice that different websites tend to make different choices with regards to this.
>
> **[1:57](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=117)** But in a nutshell, our goal here with errors is to make sure that our site is as safe as possible, while also making sure that our users actually know somewhat what's going on in our application, and are able to adapt accordingly.
>
> **[2:12](https://www.linkedin.com/learning/react-authentication-25660373/authentication-error-handling?u=76281980&t=132)** So it's really about striking a balance between safety and user experience in certain cases.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (1)
> **Code Keywords:** let (1), try. (1), for, (1), this. (1)
> **CLI Commands:** make (2), find (1)
> **Best Practices:** best practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Catching & handling errors
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=1)** - [Instructor] Okay, so now that we've learned a few best practices related to error handling, let's go through our application and do just a little bit of cleanup as far as handling errors.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=10)** And this should be pretty straightforward, all right?
>
> **[0:13](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=13)** All I'm going to do is I'm going to go into the server, and I'm going to change the login route so that when the user enters in a password that's incorrect, we're not just going to send the entire error back, right?
>
> **[0:28](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=28)** This exposes unnecessary data to the client side if something goes wrong on our server, and often can inadvertently reveal things about the technologies we're using behind the scenes as I said.
>
> **[0:39](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=39)** So one thing that we can do here is instead of sending back the error like that, we can just send back like a status code like this, and that will make it a little bit, you know, a little bit less obvious what's going on.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=53)** And also at the same time, a little harder to troubleshoot, which is why you'll often see things like that in development.
>
> **[1:00](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=60)** But oftentimes people will forget to change that back during production, right, when it's actually set to be released.
>
> **[1:07](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=67)** Now on the front end side of things, we're not really handling errors very well here either.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=73)** So what I'd like to do is show you how we might handle errors in this on login clicked function, and you can go through some of the other pages and do this there as well.
>
> **[1:22](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=82)** So, one obvious possibility here when the user tries to log in is that they put in the wrong password, right?
>
> **[1:29](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=89)** So what we could do here, because this Axios.Post thing will throw an error if it doesn't receive a response with a 200 or 300 status code, we can actually just wrap this whole thing in a try-catch block.
>
> **[1:43](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=103)** All right, so we'll just put that inside of there like so.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=107)** And inside the catch block here, what we'll do is we'll just get the error, and we'll set that as a variable.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=115)** I've already set this up for you in previous, you know, in the starting state of this code, we can actually set this error message here, and that will automatically show up if you scroll down to the JSX, above the form on this page.
>
> **[2:09](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=129)** So let's give this a try.
>
> **[2:10](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=130)** We're just going to say set error message, and we're going to set that to E.message, okay?
>
> **[2:17](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=137)** And notice that I already have some logic in here too that will automatically hide that after a few seconds, right?
>
> **[2:23](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=143)** All right, so let's go back and take a look at our application.
>
> **[2:25](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=145)** Let's just hit refresh there, and make sure it's running if you already have it.
>
> **[2:29](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=149)** And we're going to log out, and now we're going to try logging in as one of our users, but we're not going to use the correct password.
>
> **[2:37](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=157)** So just put in basically any email that will get you this error.
>
> **[2:40](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=160)** And then we'll say something like, blah, blah, blah.
>
> **[2:42](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=162)** And if we click log in now, what we'll see is that sure enough, it says, "Request failed" with status code 401.
>
> **[2:48](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=168)** Now you can customize this error message just by putting in your own string there.
>
> **[2:53](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=173)** If there's an error.
>
> **[2:54](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=174)** Right, you could say something like "Incorrect email or password," but I'll leave that one up to you as well.
>
> **[2:59](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=179)** So anyway, that is the basics of handling errors, both on the back end and on the front end.
>
> **[3:05](https://www.linkedin.com/learning/react-authentication-25660373/catching-handling-errors?u=76281980&t=185)** So I hope this was helpful for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), function (1), throw (1), try. (1)
> **CLI Commands:** make (2)
> **Env Vars:** jsx (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Securing your database
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=1)** - [Narrator] Okay, well, we've learned quite a few best practices for off applications.
>
> **[0:05](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=5)** And before we wrap this course up, there's one last best practice that I want to make you aware of.
>
> **[0:10](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=10)** And this is one that most people don't even think about until it's too late, and that is securing your database.
>
> **[0:19](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=19)** Now, in this course, we've used just a basic JSON based database that is by no means meant for production.
>
> **[0:26](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=26)** Chances are in production, you'll probably use something like MongoDB or SQL, some sort of SQL database in order to store your data.
>
> **[0:35](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=35)** And if you're going to publish your application and host it somewhere, what you'd probably end up doing is creating an instance of MongoDB somewhere most likely on the cloud.
>
> **[0:46](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=46)** And this could mean potentially exposing our database to people who want to hack it and steal our data.
>
> **[0:53](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=53)** Now, in most cases, whatever database provider we're using, right, if it's MongoDB, for example, will usually provide a basic security setup for you, right?
>
> **[1:04](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=64)** MongoDB Atlas does this by default, for example.
>
> **[1:07](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=67)** Now, in most cases, whatever database provider you're using will provide a basic security setup for you by default, right?
>
> **[1:15](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=75)** MongoDB Atlas, just as an example, does this by default.
>
> **[1:19](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=79)** However, if you're just setting up your own server from scratch and adding MongoDB to it, keep in mind that the default setup for MongoDB under many circumstances is actually to have most forms of security turned off.
>
> **[1:32](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=92)** And the same may be true for whatever other database type you might be using.
>
> **[1:37](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=97)** Now for instructions and details on how to secure a Mongo database, I highly recommend that you take a look at some of the MongoDB courses in this library.
>
> **[1:47](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=107)** There are plenty of them that talk about this topic, and they're going to do a much more thorough job of explaining the details than we have room for in this course.
>
> **[1:55](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=115)** And there's other, you know, there's the same thing for other database providers as well.
>
> **[2:00](https://www.linkedin.com/learning/react-authentication-25660373/securing-your-database?u=76281980&t=120)** So ultimately, the moral here is that whatever database you end up using, just make sure that you follow all of the appropriate security measures, which can usually be found somewhere in the database's documentation, and of course, in this library.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), mongo (1)
> **Code Keywords:** default, (2), default. (1)
> **Env Vars:** sql (2), json (1)
> **Prerequisites:** setup (3)
> **Analogies:** for example (2)
> **Best Practices:** best practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps in your React journey
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=0)** - [Shaun] All right, well, congratulations on making it to the end of this course.
>
> **[0:04](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=4)** We have covered quite a few concepts related to user authentication in the context of React, and hopefully this really helps you going forward to make your applications more secure.
>
> **[0:17](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=17)** So before I go on to some next steps, I just want to take a moment to personally thank you for watching through this course.
>
> **[0:24](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=24)** Please feel free to send me a connection request on LinkedIn and I will be sure to accept it.
>
> **[0:29](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=29)** It's always a great way to keep in touch and hear about my upcoming courses.
>
> **[0:34](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=34)** Now, if you're looking for a few things to watch after this, I would highly recommend searching the LinkedIn library for a number of different courses.
>
> **[0:42](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=42)** I have one course on Full-Stack React.
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=45)** And now that you've learned how to add basic user authentication to a React app, I would recommend watching my course on Full-Stack React and trying to add your own authentication flow to it.
>
> **[0:58](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=58)** That would be a great way to solidify what you've learned here.
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=62)** In addition to that, there's a course on the React ecosystem that I have.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=66)** You can find that by searching for React Modern Projects and looking for the course with my name next to it.
>
> **[1:13](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=73)** And finally, there is a very popular course about React design patterns that would really take your development skills to another level when combined with what we learned in this course.
>
> **[1:24](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=84)** So feel free to search the LinkedIn Learning library for these.
>
> **[1:27](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=87)** The titles might not be exactly what you see here, but they are great next steps for you.
>
> **[1:33](https://www.linkedin.com/learning/react-authentication-25660373/next-steps-in-your-react-journey?u=76281980&t=93)** So anyway, thank you once again for watching this course, and I hope to see you in another.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** this, (1), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [shaun] (1)


### Appendix

> [[#Table of Contents|↑ Back to Table of Contents]]

#### A tour of Coderpad
> [LinkedIn Learning](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=0)** - [Instructor] Now, before we get started, you might have noticed that there are a number of CoderPad challenges in this course, and that's what you see here.
>
> **[0:08](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=8)** So, basically, CoderPad challenges are just interactive challenges where you'll be asked to complete or modify the code in this window here, and there's a number of other tools that are provided to help you out with this, right?
>
> **[0:22](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=22)** Now, since these are going to be React-related challenges, you'll see over here on the left hand side, the results of the code that you've written in this answer block, and over here on the right hand side, underneath the answer block, this is some automated test code that will check to see whether your answer that you've created is correct or not.
>
> **[0:45](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=45)** Now, you can run this test code just by clicking Test my code down here, and if something isn't complete or if something isn't correct, you'll see that the test will fail there, right?
>
> **[0:55](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=55)** So, what you ideally are going to see after you've written your answer is that the corresponding tests will pass.
>
> **[1:02](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=62)** All right, and finally, up here in the top left hand corner, that's where the instructions are.
>
> **[1:06](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=66)** That just gives you a lot more details about the challenge.
>
> **[1:09](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=69)** So, anyway, that's pretty much all that you should need when you run into a CoderPad challenge, so hopefully you enjoy these.
>
> **[1:16](https://www.linkedin.com/learning/react-authentication-25660373/a-tour-of-coderpad?u=76281980&t=76)** Let's get started with the course now.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), pass (1), finally, (1), let (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/react-authentication-6035050)

## Skills Covered

- React.js
- Authentication Systems

## Path Context

### In [[Explore React.js Development]]
← [[Building Modern Projects with React]] | **7 of 8** | [[React- Server-Side Rendering]] →

### In [[Explore App Development with the MERN Stack]]
← [[React Essential Training]] | **2 of 13** | [[Node Js Essential Training]] →

### In [[Improve Your React Skills]]
← [[React- Testing and Debugging]] | **6 of 9** | [[React- Software Architecture]] →

## Appears In

- [[Explore React.js Development]]
- [[Explore App Development with the MERN Stack]]
- [[Improve Your React Skills]]

## Related Courses

_Courses sharing skills:_

- [[React- Cloud-Powered Apps with Firebase]] — React.js
- [[Building a GraphQL Project with React.js]] — React.js
- [[React- Software Architecture]] — React.js
- [[React- Testing and Debugging]] — React.js
- [[React- Building Styles with CSS Modules]] — React.js

---

[↑ Back to top](#)