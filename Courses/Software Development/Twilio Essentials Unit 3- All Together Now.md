---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: twilio-essentials-unit-3-all-together-now
url: "https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now"
duration_minutes: 119
duration: 1h 59m
level: Beginner
updated: 9/9/2022
learners: 1843
skills:
  - Twilio
  - Serverless Computing
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEMj9WBPAggqQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661384911941?e=2147483647&amp;v=beta&amp;t=UpRXBv75APup0qWqXt7qrs1_xBq8_ZI6i4199_3Uswk"
linkedin_topic: Software Development
learning_paths:
  - Twilio Programmable Messaging and Voice Professional Certificate
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/twilio
  - skill/serverless-computing
status: not-started
created: 2026-04-19
---

![Twilio Essentials Unit 3: All Together Now](https://media.licdn.com/dms/image/v2/C560DAQEMj9WBPAggqQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661384911941?e=2147483647&amp;v=beta&amp;t=UpRXBv75APup0qWqXt7qrs1_xBq8_ZI6i4199_3Uswk)

# Twilio Essentials Unit 3: All Together Now

> You’re ready to apply your Twilio knowledge in the real world. This course walks you through building an audio-only telephone network based application that allows participants to join in and or listen to conversations. Learn how to use the Serverless Toolkit for Twilio to create a serverless application. Find out how to design, create, and maintain conference calls with Twilio. Explore ways to de

> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now) | 1h 59m | Beginner | 2K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Twilio]]

## Resources

- Exercise files available

## Skills Covered

- Twilio
- Serverless Computing

## Table of Contents

### 1. All Together Now

#### Introducing the project
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=6)** - Hey there, I'm Craig and I'm a developer.
>
> **[0:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=8)** This course happens to be in a series, so if you've stumbled upon this course out of order, I'm going to assume some knowledge from the previous courses.
>
> **[0:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=14)** If you're all caught up, welcome back.
>
> **[0:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=17)** Well ahoy there, Twilio developer, are you ready to apply some of those skills that you've been picking up along your journey?
>
> **[0:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=22)** I love this part, the building part.
>
> **[0:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=25)** Now, I don't know about you, but when I'm learning something new, I try to learn by building a well known existing application using it.
>
> **[0:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=32)** This is common in the front-end web development world where they build a to-do list application in the bazillion front-end frameworks that exist.
>
> **[0:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=39)** It really lets you understand the intricacies of the specific bits of the framework.
>
> **[0:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=44)** So I always think of something along those lines, but some sort of application that uses notifications and a microphone and a speaker, and I came up with one, and honestly, I kind of love it.
>
> **[0:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=55)** Depending on when you're watching this video, chances are a new version of this type of app just popped up.
>
> **[1:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=61)** I'm talking about these audio-only apps that are making their way into just about every application, they allow people to chat and others to observe.
>
> **[1:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=69)** I think they're great, I love people chatting and sharing ideas, and I love the idea of allowing people to be part of the live experience, it's like a performance that will only happen once.
>
> **[1:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=79)** I have such FOMO about this sort of thing, and it kills me that I keep missing them, and I plan to attend and then I forget.
>
> **[1:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=86)** That's why the product that we're going to build is going to face FOMO head on.
>
> **[1:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=90)** We're not going to let you miss these incredible conversations, and we're going to build this without a UI whatsoever, all over the PSTN.
>
> **[1:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=98)** Ladies and gentlemen, may I present to you PhoneMO.
>
> **[1:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=102)** We're going to build an audio-only conversation app that allows you to register over text messaging and listen on actual phone calls.
>
> **[1:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=109)** You'll sign up to attend the talk via text message, and you'll be called when the talk begins, you'll never miss out.
>
> **[1:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=115)** I've been working on a couple of slogans, let me know what you think.
>
> **[1:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=118)** So here we go, slogan number one, FOMO, NO MO.
>
> **[2:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=121)** Or slogan number two, PhoneMO, don't call us kid, we'll call you.
>
> **[2:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=127)** (crickets chirping) We'll work out the marketing.
>
> **[2:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=131)** We're going to build this entire application using the Serverless Toolkit.
>
> **[2:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=134)** All the code will be hosted on Twilio, and I realized, if you're still in trial mode, this is probably going to be a little bit difficult to test out.
>
> **[2:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=141)** So I'm going to upgrade my account, and I've put a special upgrade code for you in the notes, so you can have the same experience as I do.
>
> **[2:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/introducing-the-project?u=76281980&t=149)** I can't wait to build this with you, let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), new, (1)
> **Env Vars:** fomo (3), pstn (1)
> **Non-Speech:** (bright music) (1), (upbeat music) (1)
> **Analogies:** it's like (1)
> **Speakers:** - hey (1)

#### Serverless
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=0)** - There's this saying that goes, the cloud is just other people's computers.
>
> **[0:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=3)** And the same is true about serverless technology.
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=6)** It's not that the server is no longer around.
>
> **[0:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=8)** It's just, well, someone else's server.
>
> **[0:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=11)** And you the developer don't need to worry about things like scale and domain name registration and all that jazz that comes along with server maintenance.
>
> **[0:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=18)** Your code just runs on someone else's server.
>
> **[0:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=22)** We've built our Twilio functions through the console UI, but there's another way to write Twilio function code.
>
> **[0:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=27)** And I'm excited to show off the serverless toolkit.
>
> **[0:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=29)** It's designed to feel like your standard development tools.
>
> **[0:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=32)** And I think you're going to dig it.
>
> **[0:34](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=34)** It's awesome for greenfield projects and we are about ready to start one of those up.
>
> **[0:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=38)** So let's go get it all set up.
>
> **[0:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=39)** The Twilio CLI allows for plug-ins.
>
> **[0:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=41)** And one way to make your Twilio life so much easier is to use the serverless toolkit plugin.
>
> **[0:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=47)** So I'm here in the dock and I'm on the getting started page and a link to this is in the notes.
>
> **[0:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=52)** So over here is a way to install it.
>
> **[0:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=54)** So I'm going to use this.
>
> **[0:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=55)** I'm going to copy this.
>
> **[0:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=56)** I'm going to pop over to my terminal and I am just going to paste that in.
>
> **[1:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=60)** And you'll see that it's going to install this plugin.
>
> **[1:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=62)** And then it's going to call Twilio serverless and what should show us a list of what's available.
>
> **[1:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=67)** Awesome. So here's what we can do.
>
> **[1:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=68)** Here's the things that we can do and we're going to do this serverless:init.
>
> **[1:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=71)** We're going to create a new Twilio function product, but first I'm going to create a directory.
>
> **[1:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=75)** If you haven't seen this before in zsh, there's a thing called take which I just learned about and I thought I'd share with you.
>
> **[1:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=82)** So I'm going to make a new folder here called Twilio essentials.
>
> **[1:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=84)** I'm going to make a folder and I'm going to add CD into it.
>
> **[1:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=87)** One command called take.
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=89)** Pretty awesome.
>
> **[1:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=90)** Anyway, unrelated.
>
> **[1:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=92)** Let's make our new project.
>
> **[1:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=93)** So here we go, twilio serverless:init and it is called phonemo.
>
> **[1:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=99)** So this is going to go and it's going to get a, oh, I forgot.
>
> **[1:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=103)** Actually glad that this error happened.
>
> **[1:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=105)** First, we need to log in.
>
> **[1:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=106)** So we need to create a profile.
>
> **[1:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=108)** So I'm going to do a Twilio profiles and we're going to add one.
>
> **[1:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=114)** So we're going to get the account SID for my account.
>
> **[1:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=117)** I'm going to pop over to my newly upgraded console and I'm going to copy my account SID I'm going to paste it here.
>
> **[2:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=128)** And again, like the account SID is the string identifier.
>
> **[2:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=131)** It's like my user ID.
>
> **[2:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=133)** And now I'm going to go in.
>
> **[2:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=134)** I'm going to get my auth token.
>
> **[2:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=137)** And again, the auth token is like a password.
>
> **[2:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=139)** We don't show it.
>
> **[2:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=140)** It's not shown here.
>
> **[2:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=141)** It's like how you don't leave your keys on the front seat of your car.
>
> **[2:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=144)** I'm going to call this essentials.
>
> **[2:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=146)** Yeah. So that's a secret key.
>
> **[2:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=147)** It's stored now.
>
> **[2:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=148)** What happened is a new API key got created for us.
>
> **[2:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=151)** And we can now, we're logged in with that.
>
> **[2:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=153)** And if you look at Twilio profiles:list, you can have multiple accounts.
>
> **[2:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=157)** So this is how you can see which one is active.
>
> **[2:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=160)** And so now we have that essentials active.
>
> **[2:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=162)** Anytime we use Twilio, we have an authenticated client.
>
> **[2:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=166)** So now I'm going to use the up arrow and jump back to what I tried to do originally, which is init.
>
> **[2:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=170)** The new directory here called phonemo.
>
> **[2:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=176)** So this is getting a list of starter files and setting up the directory structure for what we need to make one of these serverless apps run.
>
> **[3:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=184)** It's pretty neat.
>
> **[3:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=184)** It has a local server that you can run on your machine.
>
> **[3:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=188)** So I'm going to get into that directory.
>
> **[3:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=189)** So I'm going to CD into my phonemo directory and I'm going to start up my code editor.
>
> **[3:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=195)** I happen to use Visual Studio Code and I'm going to look at this folder.
>
> **[3:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=199)** Awesome.
>
> **[3:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=200)** So first off, let's navigate a bit in here.
>
> **[3:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=201)** I want to show you this .env file.
>
> **[3:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=203)** So this .env file is where you'll set your environment variables.
>
> **[3:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=208)** So I could do super secret passwords in here, like passwords for my luggage, tell anybody.
>
> **[3:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=216)** And that'll be available in my function if I needed to use it.
>
> **[3:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=220)** Now, this is common for storing third party API keys that you might want to use within your functions.
>
> **[3:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=226)** Ooh, speaking of functions, there are a couple here in this functions folder.
>
> **[3:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=229)** So let's open up this function and let's take a look here at the very opening hello-world.
>
> **[3:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=235)** Let's take a look.
>
> **[3:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=236)** So here is that standard function stanza.
>
> **[3:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=239)** And again, the context has access to your environment and events has access to the information that was posted to it or actually query parameters or form fields that were posted to it.
>
> **[4:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=252)** And then callback is the callback that stops the JavaScript.
>
> **[4:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=255)** So the callback takes an error parameter if any errors that occurred.
>
> **[4:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=260)** And then this is what is returned.
>
> **[4:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=262)** And again, because we're returning one of these twiml objects, it will return twiml, which means that I should be able to see this, because like I said, there's a local server that's running.
>
> **[4:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=272)** I'm going to make sure I save my env file there.
>
> **[4:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=275)** So I'm going to open up a terminal here inside my Visual Studio Code.
>
> **[4:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=279)** I'm going to do new terminal.
>
> **[4:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=283)** Awesome. And then here we are going to start the server.
>
> **[4:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=288)** So I'm going to do that with twilio serverless:start.
>
> **[4:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=293)** Now this will bring up a local web server on my machine, and you'll see here that I have this Twilio functions available /hello-world.
>
> **[5:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=300)** And look, it's on my local host 3000 now.
>
> **[5:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=303)** Visual Studio Code allows me to command click.
>
> **[5:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=304)** I could open this up, copy and paste it.
>
> **[5:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=307)** And we'll see here is hello world.
>
> **[5:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=310)** And that is awesome.
>
> **[5:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=312)** So now I've got this web server running locally where I can develop the code in my normal environment.
>
> **[5:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=318)** This is where I write my code.
>
> **[5:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=320)** One of my favorite things about this is that it's hot reloadable.
>
> **[5:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=323)** So check this out.
>
> **[5:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=324)** So if I come back here, if I come back to my Visual Studio Code here and we command, let's make this, let's do, the second part of hello world is typically where you replace it with what somebody passed in.
>
> **[5:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=338)** So we know that we can pass things in on the event object.
>
> **[5:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=341)** So we'll say first name and I'm using string interpolation.
>
> **[5:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=344)** So we'll of course have to make these backticks here.
>
> **[5:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=347)** So what this is saying is now whenever there is a first, whatever's on the event called first name, it should show it.
>
> **[5:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=354)** Now I just saved.
>
> **[5:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=355)** I didn't start and stop my server, note that.
>
> **[5:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=357)** All I did was save my file and I'm going to come back and we'll look here at hello world.
>
> **[6:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=365)** And I'm going to pass in ?FirstName and we'll pass in Ada.
>
> **[6:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=370)** And boom, there we go.
>
> **[6:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=371)** We got it.
>
> **[6:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=373)** This totally helps me speed up things as I develop and I can test things out here locally.
>
> **[6:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=379)** You'll see that down here you'll have the status, the verb, and then actually what had happened here.
>
> **[6:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=384)** I can also log out there.
>
> **[6:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=386)** So if I use my console log, we'll see it'll show up there.
>
> **[6:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=388)** So we'll say console log.
>
> **[6:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=390)** Oh, let's let's show off my luggage, secret luggage password.
>
> **[6:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=396)** And again, that's on the context object.
>
> **[6:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=399)** So we'll do context.PASSWORD_FOR_ MY_LUGGAGE.
>
> **[6:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=411)** Awesome. We'll save that.
>
> **[6:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=413)** Again, I didn't start and stop the server.
>
> **[6:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=416)** I come back here.
>
> **[6:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=417)** I'm going to change this just to make a new one.
>
> **[7:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=420)** There we go. It ran.
>
> **[7:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=421)** And if we look, we can see here's the secret luggage for the password.
>
> **[7:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=427)** It just came out there, logged out.
>
> **[7:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=429)** So awesome way to get your console logs here.
>
> **[7:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=432)** And you can see that the different requests are coming through.
>
> **[7:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=434)** All right, next up, I want to show off the fact that there's this SMS folder.
>
> **[7:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=439)** So, and in here a file called reply.protected.js.
>
> **[7:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=443)** Now check this out.
>
> **[7:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=444)** If something is in a path, you'll see that it makes the URL this way.
>
> **[7:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=448)** The URL is in the path as well.
>
> **[7:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=450)** So it's sms/reply.
>
> **[7:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=452)** Now note, it doesn't have the protected or the .js.
>
> **[7:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=455)** Now protected, it is a protected file.
>
> **[7:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=457)** That's how you set the ability that only Twilio can see this.
>
> **[7:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=461)** So when we deploy this and we will deploy some code, if it's marked protected, you'll notice that only Twilio can see it.
>
> **[7:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=468)** It uses a special header that is signed.
>
> **[7:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=471)** And by just automatically making it protected, nobody else will be able to just hit it.
>
> **[7:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=475)** They'll have to actually have that header in the code to make it work.
>
> **[7:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=479)** And again, just note that you don't put the .js on it.
>
> **[8:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=484)** The name of the function is just the first part of the file name minus any extension at the end.
>
> **[8:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=488)** Now, in order to use these functions, they're returning twiml and it's Twilio that we want to get it to.
>
> **[8:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=494)** Twilio is going to need to be able to see them.
>
> **[8:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=496)** Right now remember that this is only on my local host.
>
> **[8:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=499)** Only I can see this.
>
> **[8:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=500)** It's not exposed.
>
> **[8:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=501)** But in order to configure our number to be able to get the twiml, we're going to need this server to be web accessible.
>
> **[8:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=511)** I'm excited to show you this trick because this will not only solve our problem, but it also lets you share web projects without deploying them.
>
> **[8:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=519)** There is a very amazing tool called ngrok and it allows you to open up or expose a port on your machine to the internet.
>
> **[8:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=525)** Installation instructions are in the note.
>
> **[8:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=527)** Once you get it installed, you can then open up a new terminal window, which I'll do here.
>
> **[8:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=531)** I'm going to open up a new terminal window and I'm going to start ngrok and I'm going to tell it, I wanted to use http and I'm going to say what port I want.
>
> **[8:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=538)** So remember it was on local host 3000.
>
> **[9:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=541)** So that's going to open up this port.
>
> **[9:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=543)** It's going to have this forwarding address here.
>
> **[9:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=546)** So automatically if I click into this, I can click into this and if I go to /hello-world.
>
> **[9:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=557)** Now notice this is not on my local host.
>
> **[9:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=558)** This is public to the internet.
>
> **[9:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=560)** So anybody can see that including Twilio, but you can use this to share and test out your stuff.
>
> **[9:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=565)** I use this all the time with my mom to have her look at my creations before they're ready 'cause she's so good at breaking things and very nice about reporting my bugs.
>
> **[9:34](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=574)** But in addition to my mom, Twilio can now execute this function, which is important because it's twiml and that's for Twilio.
>
> **[9:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=581)** So why don't we update our number?
>
> **[9:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=583)** But instead of using the console, let's update it from the command line.
>
> **[9:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=588)** I think we're ready for that.
>
> **[9:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=589)** Let's do it from this space here.
>
> **[9:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=591)** So we're going to open up another terminal.
>
> **[9:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=594)** So I've got three going on over here.
>
> **[9:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=596)** We've got the server.
>
> **[9:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=596)** We've got ngrok and we've got this.
>
> **[9:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=598)** And I'm going to go, and I'm going to say Twilio phone numbers 'cause the CLI gives us access to that and we'll do list.
>
> **[10:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=607)** And so using that same API call there, I can update this.
>
> **[10:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=612)** So I can say twilio phone-numbers:update, and I'm going to pass in that number and I'm going to tell it where I want, what I want to have happen when somebody calls it.
>
> **[10:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=622)** So remember that was configured before in our phone number configuration, but here we're going to do voice URL and I am going to go and I'm going to give it this, we want it to return this.
>
> **[10:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=632)** It's going to say, it's going to return a statement that says, hello, undefined.
>
> **[10:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=635)** So let's do that.
>
> **[10:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=636)** So we will go back here.
>
> **[10:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=638)** I'm going to set the voice URL to that exactly, and I press enter.
>
> **[10:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=643)** And now my phone number is set up to do that.
>
> **[10:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=646)** Also because I've upgraded my account, I can now call from my home line.
>
> **[10:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=650)** So now I don't need to just use my cell phone.
>
> **[10:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=651)** So I'm going to call from one of these old school phones that I have here.
>
> **[10:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=654)** Check this out.
>
> **[10:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=657)** (dialing phone number) (phone ringing) Hello, undefined.
>
> **[11:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=670)** And notice, I didn't have to press one for the upgrade thing there.
>
> **[11:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=674)** Awesome.
>
> **[11:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=676)** Now check this out.
>
> **[11:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=677)** This is even cooler.
>
> **[11:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=678)** So I'm going to go back to where ngrok was.
>
> **[11:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=679)** And I'm going to come in here to this web interface and I'm going to click to open this up.
>
> **[11:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=686)** And this happens by default.
>
> **[11:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=688)** You can see all the things that went through your ngrok.
>
> **[11:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=690)** Like I clicked on the slash GET.
>
> **[11:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=691)** We got the 404 and then I did a get on it to show you.
>
> **[11:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=695)** But this is the post that Twilio sent.
>
> **[11:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=697)** And you can see all of the other information that came across.
>
> **[11:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=700)** So you can see my home number there and don't call too late at night.
>
> **[11:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=704)** You'll wake the kids up.
>
> **[11:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=705)** So, but you can see, this is the information that got sent as the call came.
>
> **[11:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=710)** So this is information that I could have used from my event object.
>
> **[11:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=713)** All of this is available.
>
> **[11:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=714)** I could have looked at the caller state, all that stuff.
>
> **[11:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=717)** Oh, I'm sorry. That's the called state.
>
> **[11:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=718)** The caller state is Oregon, Astoria where the Goonies are from.
>
> **[12:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=722)** As you can see this is super handy for debugging all sorts of web hook.
>
> **[12:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=727)** All right. A few more things to point out.
>
> **[12:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=729)** If we go back here and we look in the assets directory, you'll see that there are some files that have been included.
>
> **[12:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=736)** And if we look at the server log again, we can see that there's this index.html.
>
> **[12:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=741)** So you can actually host index.html pages.
>
> **[12:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=744)** I'm going to click that and open it up.
>
> **[12:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=745)** You can actually host pages here.
>
> **[12:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=747)** Eventually we're going to deploy this so you can actually show this live.
>
> **[12:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=750)** But there's great information here, if you want to do a little bit more.
>
> **[12:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=752)** We'll cover all of this stuff in the remainder of this course, but there's great stuff that is available here for you.
>
> **[12:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=758)** So feel free to give this a read and what I'm going to do is I'm going to come back and I'm just going to clean out all of these 'cause we don't need this for what we're doing.
>
> **[12:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=766)** So I'm going to clean out all of those assets.
>
> **[12:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/serverless?u=76281980&t=767)** I'm going to delete them and I'm going to get rid of all of these very nice functions that we're given to us 'cause we want to start with a clean slate as we go and start building out our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (7), this. (7), protected (6), this, (4)
> **Env Vars:** url (4), sid (3), api (3), cli (2), password_for_ (1)
> **CLI Commands:** make (10), cd (2)
> **Tools:** terminal (6), visual studio (4), zsh (1), command line (1)
> **Definitions:** is a  (5), is called (1), means that (1)
> **Prerequisites:** set up (2), install (2), getting started (1), configure (1)
> **File Paths:** index.html (2), reply.protected.js (1)
> **Analogies:** it's like (2)

#### Understanding conferences
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=0)** - There's been a lot of talk about how all these audio apps are just another conference call.
>
> **[0:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=5)** And that's what actually got me thinking about this originally.
>
> **[0:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=8)** Twilio has an awesome ability to create and maintain conference calls.
>
> **[0:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=11)** Let's create one.
>
> **[0:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=13)** Creating a conference call on Twilio is extremely straightforward.
>
> **[0:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=17)** And much like you saw with Queues, just by giving it a name, it creates a new conference with that name.
>
> **[0:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=22)** So to show this off, let's build a function that will return TwiML to connect to a conference call.
>
> **[0:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=28)** So in my functions here, I'm going to create a new file.
>
> **[0:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=31)** And I'm going to call that incoming-call, incoming-call.js.
>
> **[0:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=37)** Now this isn't my first function rodeo.
>
> **[0:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=40)** So I know this stanza by heart, but don't feel bad if you haven't picked it up yet.
>
> **[0:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=43)** So it's exports.handler, and then it's going to take a function that takes context, event, and callback.
>
> **[0:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=53)** We're going to make a new voice response.
>
> **[0:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=56)** So it's defaulting to four spaces.
>
> **[0:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=58)** I'm going to make it default to two.
>
> **[1:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=61)** There we go.
>
> **[1:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=62)** So we'll say const, that's still four.
>
> **[1:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=67)** There we go.
>
> **[1:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=68)** const twiml = Twilio.twiml.VoiceResponse, awesome.
>
> **[1:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=81)** So with the Fluid API, you could kind of just change things together to make them nest properly.
>
> **[1:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=87)** So the twiml that we're trying to build is this twiml.dial, so this will create a new dial verb.
>
> **[1:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=93)** And then we're going to do .conference, 'cause there's a conference noun inside of the dial verb and then you just give it a name.
>
> **[1:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=101)** So we'll call this sample-conference-name.
>
> **[1:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=107)** And in our situation, we would want that to be the unique talk that's happening, some I'm going to leave a TODO here for us to do later.
>
> **[1:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=116)** This should be the name of the current talk.
>
> **[2:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=122)** Because, again, what happens is it's going to create a conference.
>
> **[2:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=126)** If there's not a conference that's currently active called sample-conference-name, it's going to create a brand new one and connect the caller to that.
>
> **[2:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=134)** And let's just print the twiml out so we can see it.
>
> **[2:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=136)** Again, so we'll do console.log and we will to TwiML is twiml, and that will automatically do the to string on it.
>
> **[2:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=147)** And we're going to call our callback, so I'm going to say return the callback and there is no errors, and we're going to return the twiml.
>
> **[2:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=155)** There we go, and I'm going to save that.
>
> **[2:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=157)** And I'll just make sure that server is running.
>
> **[2:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=159)** It is.
>
> **[2:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=160)** You'll see that I can now get to my new incoming-call URL.
>
> **[2:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=163)** Let's take a peak at that.
>
> **[2:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=168)** I forgot to do new here actually.
>
> **[2:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=173)** I got a 500, and the 500 that came back popped up on a different monitor here.
>
> **[2:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=179)** Let me show you in case you get to see that sometime.
>
> **[3:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=182)** That popped up, it looked like this.
>
> **[3:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=184)** So my incoming-call was giving me a 500.
>
> **[3:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=190)** It said that dial was undefined.
>
> **[3:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=193)** And that's because I didn't instantiate the object if you take a look here.
>
> **[3:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=197)** I always like to share my errors in case you see them too.
>
> **[3:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=200)** So I forgot to put this new here.
>
> **[3:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=202)** I just did this VoiceResponse, and that was not what we needed.
>
> **[3:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=205)** We needed to make a new instance of that.
>
> **[3:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=206)** Cool, so our TwiML is looking good, and it's doing a dial.
>
> **[3:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=209)** This is a dial verb to the conference noun.
>
> **[3:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=212)** And the name of the conference is sample-conference-name.
>
> **[3:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=215)** So let's hook our number up to this function.
>
> **[3:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=221)** Let's make sure that ngrok is still running.
>
> **[3:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=224)** It is, and this is my ngrok address.
>
> **[3:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=226)** I'm going to click that.
>
> **[3:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=229)** And, again, there's nothing at the root here.
>
> **[3:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=232)** So we want to look at /incoming-call.
>
> **[3:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=237)** And, again, this is publicly accessible because of my ngrok address.
>
> **[4:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=241)** So now I've got this TwiML being returned.
>
> **[4:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=244)** So now I am ready to go and update my phone number, right?
>
> **[4:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=250)** I need to update my phone number to have that for the incoming.
>
> **[4:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=253)** When somebody calls, we want them to automatically dial in to this conference.
>
> **[4:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=257)** All right, so do you remember how to update that incoming voice url from the command line?
>
> **[4:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=262)** Do you remember how to do that?
>
> **[4:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=263)** I bet you could figure out how to do it from the console, but can you do it from the command line?
>
> **[4:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=267)** You want to give it a shot?
>
> **[4:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=268)** Okay, let's do this.
>
> **[4:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=270)** Go ahead and pause me and give it a try.
>
> **[4:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=272)** And when you're all done, unpause me, and I'll show you how I did it.
>
> **[4:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=275)** Remember that you can use your command line history.
>
> **[4:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=278)** It's totally allowed.
>
> **[4:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=279)** And don't feel bad if you can't do this, we only did it once.
>
> **[4:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=282)** All right, want to give it a try?
>
> **[4:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=283)** So here, let's do this.
>
> **[4:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=284)** So I want you to update your incoming voice url to point to this new function.
>
> **[4:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=297)** Okay, so that's what I want you to do.
>
> **[4:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=298)** I want you to update your incoming voice url to point to this new function.
>
> **[5:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=301)** Ready? You got this.
>
> **[5:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=303)** Pause me.
>
> **[5:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=305)** (mellow hold music)
>
> **[5:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=313)** Okay, how'd you do?
>
> **[5:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=314)** So let me show you how I did this, how I updated my incoming phone number.
>
> **[5:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=317)** So I went and got my phone number, so phone-numbers:list.
>
> **[5:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=321)** And then because I know what my phone number is, I've got this phone number, I'm going to say twilio phone-numbers:update and I'm going to paste that.
>
> **[5:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=329)** And then I'm going to do --voice-url= and the voice url is this one.
>
> **[5:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=335)** This is the ngrok one, right?
>
> **[5:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=337)** So that's important for Twilio to be able to hit it.
>
> **[5:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=340)** It's the ngrok one.
>
> **[5:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=341)** And there we go.
>
> **[5:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=342)** It's now updated.
>
> **[5:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=343)** So I'm going to call from my landline.
>
> **[5:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=350)** (phone dialer beeping)
>
> **[6:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=362)** And it's going to be on speaker phone here.
>
> **[6:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=364)** (phone ringing) And the conference plays this lovely hold music by default until at least two people have joined.
>
> **[6:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=373)** By default, this is the functionality.
>
> **[6:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=375)** But what I wanted to show you is that you can now see the conference from the API, 'cause the conference has been created.
>
> **[6:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=382)** So if we go twilio, I'm just going to start typing conf and do a tab.
>
> **[6:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=387)** Let's do conference.
>
> **[6:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=388)** So there we go, twilio api:core:conferences, I'm going to do a list.
>
> **[6:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=393)** And you'll see, I was playing around in here before.
>
> **[6:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=395)** You'll see some others that have been completed, in fact, one with the same friendly name as sample-conference-name, 'cause I was, again, testing.
>
> **[6:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=401)** It's been completed.
>
> **[6:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=402)** But this is it one that I am connected to now.
>
> **[6:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=405)** It's in progress.
>
> **[6:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=406)** I'm going to go ahead and I'm going to grab that SID, that string identifier, and I'm going to go ahead and fetch that conference.
>
> **[6:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=412)** I'm going to take a look.
>
> **[6:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=413)** Actually, I'm going to take a look at the participants in that conference.
>
> **[6:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=417)** And I'll do a list.
>
> **[6:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=419)** So the participants, there should be only one right now, right, 'cause it's me.
>
> **[7:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=423)** So we'll say --conference-sid= to that conference that I just got.
>
> **[7:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=427)** And see, there's one call that's available right now.
>
> **[7:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=430)** There's one call.
>
> **[7:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=431)** I'm going to go ahead and I'm going to add an additional call.
>
> **[7:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=433)** I'm going to call from my cellphone so that we can get a little weird here.
>
> **[7:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=442)** So calling in.
>
> **[7:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=444)** Okay, so now we hear some crazy reverb. (voice echoing) But now if we look at the participants, we'll see that there's two.
>
> **[7:34](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=454)** I'm going to hang up, 'cause it's getting weird. (chuckling) But now that I've hung up, and I've hung up from both of them, and we go and look at the participant list, you'll see that it's empty because those are active participants.
>
> **[7:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=468)** And I wanted to show you that, because if you wanted to track the participants, what you'll want to do is you'll want to use the status call back and then capture when you get a participant joined event.
>
> **[7:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=478)** And you could store that someplace in a database if you wanted to.
>
> **[8:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=481)** But I wanted to call this out, because it's a lot like the status callback that we saw for the call resource.
>
> **[8:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=486)** And a lot of Twilio APIs use the same web hook pattern.
>
> **[8:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=489)** So because you know that pattern of how to do the status callback, this is very similar.
>
> **[8:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=492)** You could say notify me every time a participant joins, and you'll get a notification.
>
> **[8:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=497)** So I should also note that you can use this participants API that we're on right here.
>
> **[8:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=502)** You can actually create from here.
>
> **[8:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=504)** So if we go to participants:create, right from the API, you can add somebody to this.
>
> **[8:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=509)** So if we do a --help on this, this is called the add participant API.
>
> **[8:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=515)** And you can see that you can add and you can do a from and a to, and you can set the callback And, again, same sort of thing, if you use this participants, you add a participant, it'll automatically create it if it doesn't exist.
>
> **[8:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=525)** We'll use this here in a bit.
>
> **[8:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=526)** Check the notes for more on participants, but I also wanted to show off this page that we started out on here, this Voice Conference.
>
> **[8:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=533)** The voice conference is used for quite a bit, and you might not see it right out of the gate.
>
> **[8:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=537)** So if you look down here, there's some great features that are available.
>
> **[9:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=541)** And one of the ones that I think a lot of people use is this participant coaching.
>
> **[9:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=545)** This is the same sort of thing of like you might hear, "This call might be monitored for training purposes."
>
> **[9:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=550)** So somebody might be sitting there and listening, and they can actually talk to just one party.
>
> **[9:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=555)** That's called coaching or whispering to the other party that's there.
>
> **[9:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=559)** So I don't know if you knew this, but maybe when you're on the phone with your bank, you're talking to somebody, they might have somebody guiding them with how to answer some of the questions.
>
> **[9:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=567)** You can't hear them, but they can.
>
> **[9:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=568)** This is one way that you could do it.
>
> **[9:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=570)** Totally not the use case that we're in right now, but I just wanted you to know about it, 'cause it's super powerful.
>
> **[9:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=575)** And now you have the ability to do it.
>
> **[9:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=576)** But let's get back to our use case, right, so when somebody calls in, we want to put them in the right talk that's happening.
>
> **[9:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=584)** But we don't know what that is right now, which means we are going to need to store some data about what talks are happening.
>
> **[9:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/understanding-conferences?u=76281980&t=590)** Let's take a quick break, and when you come back, we'll take a look at how to deal with private data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), function (6), this. (5), this, (4), const (2)
> **Env Vars:** api (5), todo (1), url (1), sid (1)
> **CLI Commands:** make (6)
> **Tools:** command line (3)
> **Definitions:** is a  (1), is called (1)
> **Non-Speech:** (mellow hold music) (1), (phone dialer beeping) (1)
> **File Paths:** incoming-call.js (1)
> **UI Navigation:** go to (1)

#### Private data
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=0)** - We're at that part of project creation, where we need to have access to some mock data that doesn't yet exist.
>
> **[0:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=6)** We need to find what talks are happening, but we don't have those stored anywhere.
>
> **[0:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=10)** Heck, we don't even have the data model built yet.
>
> **[0:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=13)** I can see that those eventually will live in a database, and maybe we expose a REST API later, but now, we don't really even know what it feels like.
>
> **[0:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=21)** I find that during prototype development, it's best to create a module that returns mock data that feels similar to how we anticipate things to behave in the future.
>
> **[0:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=30)** I abstract away the unknowns, and then I use what I create as a specification for the yet to be created API.
>
> **[0:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=38)** And there's probably a programming term for this, but I call it a hack job.
>
> **[0:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=42)** In this serverless world, I typically do that by creating a module and I host it using a private asset.
>
> **[0:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=48)** This will be a good example of a common question about functions.
>
> **[0:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=51)** How do I share code between functions?
>
> **[0:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=53)** So let's get our mock data all set up.
>
> **[0:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=56)** Hack job commence.
>
> **[0:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=59)** Okay, so first things first, we're going to create a new asset.
>
> **[1:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=62)** So I'm going to go in the assets folder and do a plus here, and we're going to name it what it is that we're going to be abstracting.
>
> **[1:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=69)** So let's abstract away data.
>
> **[1:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=72)** Yeah, right?
>
> **[1:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=73)** Data.
>
> **[1:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=74)** And we're going to make it private.
>
> **[1:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=75)** So I'm going to call it private, and then I'm going to .js.
>
> **[1:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=79)** And I'm going to make my spaces, be two, into using two.
>
> **[1:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=83)** Now, this file that we're going to create is going to be a standard JavaScript module.
>
> **[1:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=87)** Now, if you haven't seen one of those, no sweat at all.
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=89)** What we're going to do, it's basically just a way to do encapsulation.
>
> **[1:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=93)** So what we're going to say is we're going to say module.exports.
>
> **[1:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=97)** And what happens is whenever somebody imports this file, they'll get this object.
>
> **[1:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=102)** So you can do whatever code you want up here, and then only export what it is that you want.
>
> **[1:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=107)** So let's see, we're going to be mocking data that might come from other systems.
>
> **[1:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=111)** So let's create a new class.
>
> **[1:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=113)** We'll say class, and we'll call that Data.
>
> **[1:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=117)** Now, a trick that I always like to use is to pass along the context object to the constructor.
>
> **[2:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=122)** So when somebody builds one of these, they'll just pass in that context object that you get from the function, right?
>
> **[2:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=127)** So we'll pass that in.
>
> **[2:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=128)** And we'll store that in the instance.
>
> **[2:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=130)** And we'll do this.context = context.
>
> **[2:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=132)** And that way, you can get access to any sort of environment variables or things like that, that you might need.
>
> **[2:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=138)** And then to export this class, all we would do is we would come down here and we would just say it's name.
>
> **[2:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=143)** Now, if you haven't seen this style before, this is actually like this, like it's an a key of Data and the value of data, but the JavaScript lets you just say Data.
>
> **[2:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=151)** So that will be a key Data and the value will be data there.
>
> **[2:34](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=154)** And that's nice to have without all that duplication.
>
> **[2:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=156)** Now, we have a class that we can export.
>
> **[2:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=159)** And when it's imported, it can be instantiated with a context object.
>
> **[2:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=162)** I imagine we'd have some sort of list of upcoming talks, and it would return talks that haven't yet happened, right?
>
> **[2:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=168)** So that they're ones that are upcoming.
>
> **[2:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=169)** So let's call that getUpcomingTalks.
>
> **[2:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=172)** So we'll add a new method here to this class getUpcomingTalks.
>
> **[2:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=179)** Probably won't take anything.
>
> **[3:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=180)** And what we'll do in this case, when we're mocking it, we'll just return the shape of what we expect it to look like eventually, right?
>
> **[3:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=187)** So it's definitely an array.
>
> **[3:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=188)** It's an array of talks.
>
> **[3:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=190)** And now we get to decide 'cause we're just on the fly, making stuff up here.
>
> **[3:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=194)** We get to decide what that looks like.
>
> **[3:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=196)** So let's see, first of all, let's think about a talk.
>
> **[3:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=197)** So there seems to be a lot of billionaires going to space, and I can't figure out why, but they keep on being these talks about it, and I keep missing 'em.
>
> **[3:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=206)** I think it's kind of like the next level of yacht.
>
> **[3:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=209)** It's like yacht plus plus.
>
> **[3:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=212)** But there's been talks going on.
>
> **[3:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=213)** We've missed them.
>
> **[3:34](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=214)** I'd love to host a talk on PHONEMO, to learn more about these billionaires go into space.
>
> **[3:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=221)** So let's do that.
>
> **[3:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=222)** Let's talk about what that talk would look like.
>
> **[3:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=225)** So the title is probably something like, "Billionaires in Space."
>
> **[3:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=232)** All right.
>
> **[3:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=233)** And we needed some sort of slug to get to it later.
>
> **[3:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=236)** Let's call that a code.
>
> **[3:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=238)** I don't really like the word slug.
>
> **[3:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=239)** And we'll make that code astronaut, okay?
>
> **[4:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=243)** So we can talk about astronauts there.
>
> **[4:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=247)** And let's see, what else would this have?
>
> **[4:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=249)** Oh, I'd imagine, probably have a start time, right?
>
> **[4:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=252)** And that would be in a format, what is the format there?
>
> **[4:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=256)** I'm going to add a new, we'll add a new one here.
>
> **[4:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=259)** Get that JavaScript format.
>
> **[4:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=260)** I always forget what that looks like.
>
> **[4:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=261)** So I'm going to open up my node repl, and I'll just say new Date.
>
> **[4:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=265)** There we go.
>
> **[4:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=265)** This is today, my today, right?
>
> **[4:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=269)** So happy October, it's October 1st.
>
> **[4:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=271)** And we'll just say that this starts at at 17, whatever that time zone is. (laughs) Awesome, cool.
>
> **[4:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=280)** So I'm going to do exit from this.
>
> **[4:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=284)** There we go.
>
> **[4:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=285)** Oh, we probably also need to know the speaker's phone numbers so that we can call the speaker, and and treat them a little bit differently, right?
>
> **[4:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=291)** 'Cause remember, some people will be on mute.
>
> **[4:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=292)** So we'll do speakers, we'll make that an array, right?
>
> **[4:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=295)** There's probably going to be multiple speakers.
>
> **[4:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=297)** Well, why not?
>
> **[4:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=298)** And while I'm totally not qualified to talk on either space or being a billionaire, I'm going to go ahead and put my number here.
>
> **[5:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=305)** So I'll be the speaker on this 1503383688731.
>
> **[5:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=314)** There we go.
>
> **[5:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=315)** I've got, man, I'm not typing that very good.
>
> **[5:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=318)** 8368731.
>
> **[5:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=320)** Don't call late.
>
> **[5:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=321)** All right, there we go.
>
> **[5:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=322)** So that's one talk.
>
> **[5:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=324)** Let's see, what else could we talk about?
>
> **[5:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=326)** I'm just going to go ahead and copy and paste it like a good developer.
>
> **[5:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=329)** And you know what, something I'm very, very passionate about is Taco Tuesdays should probably be every day.
>
> **[5:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=338)** Why limit ourselves, right?
>
> **[5:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=340)** And we'll, the code will be taco.
>
> **[5:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=343)** We'll have a talk, a taco let's talko about tacos. (laughs) That's like a greeting card.
>
> **[5:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=348)** All right.
>
> **[5:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=349)** And that's going to be tomorrow at the same time.
>
> **[5:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=352)** And I am definitely qualified to talk about this.
>
> **[5:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=355)** Something I'm passionate about, I have a lot of feelings about this.
>
> **[5:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=358)** Okay, awesome.
>
> **[5:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=359)** So we've got this getUpcomingTalks.
>
> **[6:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=361)** Let's go ahead, let's do a getCurrentTalk, right?
>
> **[6:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=364)** So this will return what was currently happening if there was a talk happening, and probably we'd return undefined if not.
>
> **[6:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=372)** Let's make use of our code that we just did.
>
> **[6:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=374)** So we'll do this.getUpcomingTalks.
>
> **[6:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=377)** We'll get that, and then just whatever the first one is, yeah.
>
> **[6:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=380)** And if we need to test it, we can switch it.
>
> **[6:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=381)** So make it, I guess, return undefined, right?
>
> **[6:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=384)** If there's not a current talk, it would be undefined.
>
> **[6:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=386)** Ooh, and now we could take care of our TODO that we left here, an incoming call, right?
>
> **[6:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=390)** That should be the name of the current talk.
>
> **[6:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=391)** We have the current talk now.
>
> **[6:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=393)** So let's do this.
>
> **[6:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=396)** If we look at the server that's running, you'll see that when I saved it, I got this new data.js.
>
> **[6:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=401)** And you'll see, this is how I get access to these private ones.
>
> **[6:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=404)** See, it's private 'cause I remember we named it private, so that's why it's private.
>
> **[6:47](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=407)** And this is how you get it.
>
> **[6:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=408)** And notice that it has the data.js at the end of it.
>
> **[6:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=412)** And this runtime.getAssets, let's go ahead.
>
> **[6:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=415)** Let's put that at the top of this file here outside of the function.
>
> **[7:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=420)** We're going to go ahead and do this run, or we'll store it, okay?
>
> **[7:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=423)** So I'm going to store assets = Runtime.getAssets.
>
> **[7:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=429)** And what this is, what this assets object is, is the key is the asset name, right?
>
> **[7:15](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=435)** So it'll be this data.js, and and the value is an object that provides some helper methods and properties that we can we can get to.
>
> **[7:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=442)** Check the notes for more on that.
>
> **[7:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=444)** And because I've stored that in an object, I'm going to use that, and we're going to we're going to get that out.
>
> **[7:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=450)** So first thing I'm going to do is I'm going to pull out 'cause we made data, we made that data class available to be exported by name, right?
>
> **[7:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=457)** So I'm going to pull data out that way.
>
> **[7:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=459)** And I'm going to use a required statement.
>
> **[7:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=460)** Now, a required statement takes a path.
>
> **[7:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=463)** And the good news is that if we use our assets object with that key of /data.js, we will see that it has a .path at the end of it.
>
> **[7:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=474)** So what's going to happen is it's going to import this file as a module, and this is what has been exported.
>
> **[8:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=480)** So now, we have access to that data class.
>
> **[8:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=484)** So since we have it, let's instantiate it.
>
> **[8:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=486)** So I'm going to say const data = new Data.
>
> **[8:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=490)** And remember, that constructor takes a context object, and we happen to have one from this function.
>
> **[8:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=494)** So I'm going to pass in that context object.
>
> **[8:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=496)** And now, I can get the current talk.
>
> **[8:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=498)** So the talk = data.getCurrentTalk, right?
>
> **[8:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=506)** It's pretty clean.
>
> **[8:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=507)** And let's see, we said it would return undefined if it's not, right?
>
> **[8:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=511)** So we said it would return undefined.
>
> **[8:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=512)** So we'll do, if talk !== undefined, if we actually got one, we are going to come in here and let's move this guy here.
>
> **[8:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=525)** We are going to dial the talk.
>
> **[8:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=528)** And the talk is actually, instead of sample conference name, now we have access to that.
>
> **[8:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=533)** Let's use the code that we did.
>
> **[8:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=534)** So we did talk.code.
>
> **[8:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=536)** There we go.
>
> **[8:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=538)** And you know what we should do?
>
> **[8:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=539)** Actually, remember, if this is the person calling in, this isn't the speaker.
>
> **[9:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=542)** We want this person to come in.
>
> **[9:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=544)** We don't want them to be able to talk because they're calling in to listen, right?
>
> **[9:08](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=548)** So we're going to mute these people.
>
> **[9:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=551)** And that property is called muted: false.
>
> **[9:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=554)** And I'll show you what that looks like with the TwiML, 'cause remember, we print the twiml out here when things happen.
>
> **[9:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=559)** So if it is undefined, right?
>
> **[9:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=563)** We want to do something else.
>
> **[9:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=563)** We want the experience to be something else.
>
> **[9:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=565)** So we'll do a twiml.say.
>
> **[9:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=567)** And how about we say, "There is no talk currently."
>
> **[9:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=575)** How about, "Send us a text for a schedule of upcoming talks." 'Cause we don't have that yet.
>
> **[9:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=582)** We could build this.
>
> **[9:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=583)** Maybe we should do that here, "TODO: Build a voice representation of up upcoming talks."
>
> **[9:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=593)** 'Cause we have those right.
>
> **[9:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=594)** You can do that later if you want to.
>
> **[9:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=596)** I'm not going to do that right now.
>
> **[9:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=597)** I don't think that's going to be part of the prototype, but they could send a text and get a schedule, and we'll probably need to build that too. (laughs) But that's up to you if you want to do that.
>
> **[10:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=606)** Let's see, that's fine.
>
> **[10:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=607)** So I saved, and incoming call is available, and it should be getting that talk that we did.
>
> **[10:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=612)** So let's go ahead and let's click this.
>
> **[10:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=613)** Let's see what our TwiML looks like.
>
> **[10:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=617)** I got an error there.
>
> **[10:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=619)** And the error says that it can't read the property of data.js.
>
> **[10:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=627)** It says what it says.
>
> **[10:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=633)** Assets Runtime.getAssets.
>
> **[10:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=637)** Okay.
>
> **[10:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=640)** Let's start that server up again and see if that's what the problem is.
>
> **[10:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=650)** Yeah, I needed to restart my server.
>
> **[10:52](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=652)** So you might need to restart your server for that that asset to be properly loaded there in this world.
>
> **[10:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=658)** But if we take a look at my incoming call, well now see that it is returning a muted conference, right?
>
> **[11:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=666)** So they're going to dial the conference in a muted state with the code of astronaut, which is the code of the upcoming talk, which means that we should be able to also go back.
>
> **[11:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=674)** And if we just come to our data, come to our our data file here.
>
> **[11:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=680)** And I'm going to go, instead of the current talk, we're going to make it return undefined.
>
> **[11:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=684)** So like this is what happens when it's not there.
>
> **[11:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=686)** And we'll come back here, we'll refresh.
>
> **[11:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=688)** And there's our Say.
>
> **[11:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=689)** So we got it working.
>
> **[11:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=690)** So we got a private file coming across there.
>
> **[11:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=693)** I'm going to come back and remember to not do that.
>
> **[11:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=696)** So let's undo that.
>
> **[11:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=698)** Get this back, saved that.
>
> **[11:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=700)** And that's pretty awesome, right?
>
> **[11:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=701)** So two things that I'd like to make sure that you grok from this exercise.
>
> **[11:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=704)** So most importantly, you can create private assets, these private assets, and you can export them, and share them, and import them over here.
>
> **[11:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=713)** Secondly, I want you to see that you can create mock code, right?
>
> **[11:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=716)** So we created mock code for something that we don't yet have, right?
>
> **[12:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=721)** You can imagine this data coming from an external API and you could set the environment variables in the context.
>
> **[12:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=726)** And in our code, we'd call the API using those API keys that might be on the context, and then we'd massage the data as it came back, and then return that data in the similar format, and our code would still work, right?
>
> **[12:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=738)** So we could change how this data was coming in.
>
> **[12:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=740)** Now, a reminder, this is an NPM project, so you can install any dependencies that you actually need.
>
> **[12:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=747)** Maybe we could also connect to a database from here.
>
> **[12:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=750)** Who knows?
>
> **[12:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=750)** It's up to you.
>
> **[12:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=751)** But as long as we maintain this interface, our Twilio function code will continue to work.
>
> **[12:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=757)** And this is a great way to build proof of concepts.
>
> **[12:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=759)** And you could do it all from within your local development environment.
>
> **[12:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=762)** It's pretty powerful.
>
> **[12:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=763)** All right.
>
> **[12:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=764)** So why don't you take a quick break, and when we come back, we'll let people register for talks using a text message.
>
> **[12:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/private-data?u=76281980&t=769)** I can't wait to sign up to learn more about space yachts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (30), private (10), this. (8), module (5), pass (4)
> **CLI Commands:** make (8), find (2), node (1), npm (1)
> **Env Vars:** api (5), todo (2), rest (1), phonemo (1), npm (1)
> **Code Identifiers:** getupcomingtalks (4), getassets (3), getcurrenttalk (2)
> **Analogies:** imagine (3), similar to (1), kind of like (1), it's like (1)
> **File Paths:** data.js (5)
> **Definitions:** is an  (2), is called (1), means that (1), is a  (1)
> **Best Practices:** it's best to (1), the key is (1), remember to (1)

#### Text registration
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/text-registration?u=76281980)

#### Call registrants
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/call-registrants?u=76281980)

#### Deploying
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=0)** - We're getting a pretty solid application running, though it won't work if I close my laptop.
>
> **[0:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=5)** What do you say we get this code deployed, on someone else's server?
>
> **[0:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=9)** You're going to love this.
>
> **[0:11](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=11)** Ready to deploy your application to the Cloud?
>
> **[0:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=13)** Let's do this, twilio serverless:deploy.
>
> **[0:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=18)** There we go.
>
> **[0:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=19)** That's all you do.
>
> **[0:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=20)** It's going, it's making a brand new dev environment.
>
> **[0:23](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=23)** You'll see it's passing my environment variables up.
>
> **[0:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=27)** It's got a service name.
>
> **[0:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=28)** It's making a new service.
>
> **[0:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=29)** Remember how we made that exploration service before?
>
> **[0:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=31)** By default, it's made this dev environment, which you'll see in the URL here.
>
> **[0:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=35)** And it's put any dependencies that I've put.
>
> **[0:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=37)** So remember, this could be a node package, so I could actually upload the dependencies as well.
>
> **[0:41](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=41)** So it would do that, awesome.
>
> **[0:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=42)** And now it's built these different things.
>
> **[0:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=45)** And this one is the incoming call and the incoming message.
>
> **[0:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=48)** And this is protected and now it's properly protected.
>
> **[0:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=49)** We'll look at that here in a second.
>
> **[0:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=51)** But first we're ready to wire up our number, right?
>
> **[0:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=54)** So we we'll do twilio phone-numbers:list.
>
> **[0:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=59)** We'll get our phone number there.
>
> **[1:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=60)** I'm going to grab that.
>
> **[1:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=63)** And here we go.
>
> **[1:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=63)** We'll say twilio phone-numbers:update, and I'm going to do the voice URL is equal to the incoming call, right?
>
> **[1:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=72)** That's what we want.
>
> **[1:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=73)** The incoming call, the voice URL.
>
> **[1:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=76)** And you could do two at the same time actually.
>
> **[1:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=77)** So we'll do SMS, a URL is equal to the incoming message SMNS URL.
>
> **[1:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=82)** And now I can shut my laptop down.
>
> **[1:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=85)** I don't need to keep it running anymore, except I forgot to paste the number.
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=89)** That's what I did.
>
> **[1:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=89)** I copied it and I forgot to paste it.
>
> **[1:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=92)** So not quite yet, okay?
>
> **[1:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=93)** Don't shut your laptop yet.
>
> **[1:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=95)** Here we go.
>
> **[1:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=96)** I'm going to come in here, and I am going to paste that phone number, and now, boom.
>
> **[1:43](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=103)** We are now wired up to these functions that exist.
>
> **[1:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=106)** And you'll see that it did the function name, these four digits and then this -dev.
>
> **[1:51](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=111)** And I wanted to show you that protected start talk.
>
> **[1:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=113)** So let's try to get to that.
>
> **[1:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=114)** And you'll see now, where locally before I could see it, you'll see now that it's being protected.
>
> **[2:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=123)** Unauthorized, you are not authenticated to perform this request.
>
> **[2:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=126)** You can make this request, but you need to have the right header.
>
> **[2:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=130)** So I want to show you how to generate that 'cause this is something that you might end up doing.
>
> **[2:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=134)** You might want to call a function from your code, and let me show you how to do that.
>
> **[2:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=139)** Probably the quickest way for us to do that is to use the node rebel.
>
> **[2:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=144)** You could imagine doing this in your own code.
>
> **[2:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=146)** Most of the helper libraries have the ability to do this.
>
> **[2:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=149)** But I'm going to use my .env file, so you don't see my secret auth token.
>
> **[2:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=153)** So I'm going to install a package called node-dotenv, and I'll show you how that works here in a second.
>
> **[2:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=160)** Cool, so I'm going to clear and I'm going to run node now, and I'm going to use that dotenv.
>
> **[2:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=165)** So I'll say const ignore equals, we're going to require the dotenv and then I'm going to call the method on that object called config.
>
> **[2:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=177)** And the reason why I'm ignoring it is 'cause when it returns, it will show you what that is.
>
> **[3:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=182)** But now you can see that my process.env, this is how you get to your environment variables.
>
> **[3:06](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=186)** It has the things that are in my environment, which like Twilio phone number.
>
> **[3:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=190)** So there's my Twilio phone number.
>
> **[3:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=192)** Also, my auth token is here.
>
> **[3:13](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=193)** So we're going to get ahold of a package that's inside of the Twilio library that has a utility method on it that's going to help us generate a header.
>
> **[3:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=202)** So I'm going to say const webhooks equals require, and we'll bring in twilio slash/lib/webhooks/webhooks.
>
> **[3:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=216)** And on here, there is a function called getExpectedTwilioSignature.
>
> **[3:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=222)** And what this takes is it takes the auth token, so it's going to use my auth token to sign what it is that we want.
>
> **[3:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=229)** So that's my auth token, right?
>
> **[3:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=230)** So that's the auth token.
>
> **[3:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=233)** So then I'm going to get access to the URL that we wanted.
>
> **[3:56](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=236)** So this is the URL.
>
> **[3:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=237)** This is the start talk URL that we were trying to hit that we couldn't.
>
> **[4:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=241)** So we're going to paste that here.
>
> **[4:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=243)** So there's the start talk.
>
> **[4:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=244)** And then the final thing that we're going to do is we're going to pass the form parameters that we want.
>
> **[4:10](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=250)** So remember that takes a thing called TalkCode, and it that was for the taco one.
>
> **[4:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=256)** So that will use the same example that we did.
>
> **[4:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=258)** So a request to this with this talk code specifically is going to be the signature.
>
> **[4:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=265)** It's going to generate the signature that Twilio expects to have.
>
> **[4:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=269)** So there is our signature.
>
> **[4:31](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=271)** So I'm going to copy this signature, and now I can make a request to that.
>
> **[4:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=275)** I can make a post request.
>
> **[4:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=276)** And as long as there's a header that says X Twilio signature, it will work.
>
> **[4:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=280)** Now I have an HTTP client on my local machine here that I use just to kind of explore different things, explore different places.
>
> **[4:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=288)** So I'm going to make a new request here.
>
> **[4:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=290)** And again, this is just, you can put whatever you want in here, but I'm going to make a post request to the start talk like we want.
>
> **[4:58](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=298)** And what this will let us do is we can set our headers.
>
> **[5:01](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=301)** So the headers, I'm going to add a header and I'm going to add X-Twilio-Signature, and that value is what we generated there.
>
> **[5:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=312)** And the body, I'm going to form and code.
>
> **[5:14](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=314)** I'm going to send TalkCode and for taco.
>
> **[5:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=317)** And now again, that header will only work for that.
>
> **[5:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=320)** So I'm going to send this post request to the function that's available, and it should, if everything works correctly, ring both my phone and my wife's phone.
>
> **[5:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=332)** So here we go, I'm going to send it.
>
> **[5:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=333)** (phone rings) Here we go.
>
> **[5:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=335)** You see that I got the code back too.
>
> **[5:37](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=337)** And my wife's phone, (dolphin squeaks) there's the dolphins, or I guess the sea lions?
>
> **[5:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=344)** So there's that, and I'm going to hang that up.
>
> **[5:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=348)** So cool, we got it working and you'll see that the response came back and it's what we wanted.
>
> **[5:54](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=354)** So we were actually able to call that because we signed that with the header.
>
> **[5:59](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=359)** The header that we sent, we sent a header that it had that, awesome.
>
> **[6:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=363)** And again, you can imagine any sort of HTTP client.
>
> **[6:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=365)** So anything from your code hitting that endpoint.
>
> **[6:07](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=367)** As long as you have that header, you can hit protected endpoints.
>
> **[6:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=372)** Now you might be imagining, I wish I could have seen the logs of what was happening.
>
> **[6:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=377)** Well, there's a great trick.
>
> **[6:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=378)** So I'm going to drop out of here, and I'm going to say twilio serverless:logs.
>
> **[6:25](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=385)** And I could do --tail.
>
> **[6:27](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=387)** And by default it will show you the last bit of what just had happened.
>
> **[6:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=390)** And so we should see the results.
>
> **[6:32](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=392)** So we saw calling speakers, calling registrants.
>
> **[6:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=396)** Yeah, awesome.
>
> **[6:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=398)** So there we go.
>
> **[6:39](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=399)** So, while that's running, if I go and I can again do another request to that same one.
>
> **[6:45](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=405)** I'm going to send that same request, and we should see there's the phones ring.
>
> **[6:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=409)** (phone rings) And we see the log pop through there.
>
> **[6:53](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=413)** (dolphin squeaks) But one final thing that I wanted to show you is that we did actually create a service, right?
>
> **[7:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=420)** So when we came in here, we created a service under functions, but, and the phonemo service, but we want the source of truth to be our code and not the UI here, right?
>
> **[7:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=432)** It's 'cause if people were changing the UI, you could have stuff in your code and you could change your code.
>
> **[7:16](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=436)** So it comes in read only.
>
> **[7:17](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=437)** You can still see it.
>
> **[7:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=438)** You can see what the code is that's running, but it's read only.
>
> **[7:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=442)** And you can change this via the API, but this is a good way to protect you from editing this when you have code that might override it when you deploy it later.
>
> **[7:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/deploying?u=76281980&t=450)** More in the notes on this.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (5), let (4), function (4), this. (3), const (2)
> **Env Vars:** url (8), http (2), sms (1), smns (1), api (1)
> **CLI Commands:** make (5), node (4)
> **Definitions:** is a  (2)
> **Analogies:** imagine (2)
> **Prerequisites:** you need to have (1), install (1)
> **File Paths:** process.env (1)
> **Code Identifiers:** getexpectedtwiliosignature (1)

#### Texting a follow-up survey
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/texting-a-follow-up-survey?u=76281980)

#### Wrap up
> [LinkedIn Learning](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=0)** - You did it, you made it to the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=2)** Great job.
>
> **[0:03](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=3)** You should be proud of what you just built.
>
> **[0:05](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=5)** And I also hope that you can feel your Twilio muscles forming.
>
> **[0:09](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=9)** I hope your mind is open too, with all sorts of new communications applications that you can build, and that you are thinking about how you can use your new superpowers in existing applications.
>
> **[0:19](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=19)** You just saw how to use the serverless toolkit to build a completely new cloud-based application.
>
> **[0:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=24)** I love how the flow of the development process is so similar to the way I do my other web-based development projects.
>
> **[0:30](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=30)** I feel at home in my editor and the ability to do everything from within it feels so powerful.
>
> **[0:36](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=36)** I know that when I first got the ability to quickly spin up applications like this, it really got me experimenting around and building with Twilio apps.
>
> **[0:44](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=44)** I expect it will do the same for you.
>
> **[0:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=46)** Remember that there are existing function templates available that can get you ramped up quickly on whatever it is that you're thinking about building.
>
> **[0:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=55)** They're awesome starting points.
>
> **[0:57](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=57)** Now I know that our app isn't completely all fleshed out yet, and therefore I've put some ideas in the notes on how you can make our app even better.
>
> **[1:04](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=64)** Remember, if you run with this project and you end up getting some VC backing, I want to be invited to your launch party.
>
> **[1:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=72)** I've also added some practice ideas for more serverless application development as well as a couple of other project ideas that would look great on your GitHub.
>
> **[1:20](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=80)** We'd love for you to share what you build.
>
> **[1:22](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=82)** Ideas spawn ideas.
>
> **[1:24](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=84)** When your applications scale, and they will, I want you to know about awesome tools called Insights that are available to you both in Programmable Voice, and Programmable Messaging.
>
> **[1:35](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=95)** These will help you visualize all the activity on your applications and help you figure out ways to better serve your customers.
>
> **[1:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=102)** I'm glad that we use the elastic nature of serverless.
>
> **[1:46](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=106)** It allows us to grow and shrink with demand.
>
> **[1:48](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=108)** As you've seen, there are a lot of webhook requests that can happen in your Twilio applications.
>
> **[1:55](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=115)** Now, while you can handle these from within your existing web application, at scale, this can sometimes prove to be difficult.
>
> **[2:02](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=122)** Like for instance, let's say that you build a customer support line with your Twilio skills, you wouldn't want it to stop working if your website becomes overloaded, or worse yet, if it goes down.
>
> **[2:12](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=132)** Keeping your communications app scalable and separate is a great best practice.
>
> **[2:18](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=138)** I hope you're feeling comfortable navigating the documentation.
>
> **[2:21](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=141)** I just wanted to point out that on a majority of our pages there's a button that says Talk to an expert.
>
> **[2:26](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=146)** We totally mean it.
>
> **[2:28](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=148)** Don't hesitate to reach out.
>
> **[2:29](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=149)** We have teams of Twilions who love to help you build.
>
> **[2:33](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=153)** Tell them I sent ya.
>
> **[2:34](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=154)** Also, there are many other ways to be a part of our Twilio community.
>
> **[2:38](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=158)** Please check the notes for more ways to get involved.
>
> **[2:40](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=160)** We'd love to hang out with you.
>
> **[2:42](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=162)** And while you're building, if you ever have doubts, just remember, you got this.
>
> **[2:49](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=169)** Thanks so much for hanging out.
>
> **[2:50](https://www.linkedin.com/learning/twilio-essentials-unit-3-all-together-now/wrap-up?u=76281980&t=170)** And if it wasn't clear, I can't wait to see what you build.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), function (1), let (1), this. (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** best practice (1)
> **Speakers:** - you (1)


## Path Context

### In [[Twilio Programmable Messaging and Voice Professional Certificate]]
← [[Twilio Essentials Unit 2- Programmable Voice]] | **3 of 3**

## Part of

- [[Twilio Programmable Messaging and Voice Professional Certificate]]

## Appears In

- [[Twilio Programmable Messaging and Voice Professional Certificate]]

## Related Courses

_Courses sharing skills:_

- [[Twilio Essentials Unit 2- Programmable Voice]] — Twilio
- [[Twilio Essentials Unit 1 Introducing Twilio And Programmable Messaging]] — Twilio
- [[Building Serverless Apps with AI Services on AWS]] — Serverless Computing
- [[Building Serverless Applications in AWS]] — Serverless Computing

---

[↑ Back to top](#)