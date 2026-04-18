---
type: course
slug: data-science-for-java-developers
url: "https://www.linkedin.com/learning/data-science-for-java-developers"
duration_minutes: 231
duration: 3h 51m
level: Advanced
updated: 3/24/2021
learners: 58687
skills:
  - Data Science
  - Java
exercise_files: true
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/data-science
  - skill/java
status: not-started
created: 2026-04-17
---

# Data Science for Java Developers

> Learning the basics of data science and how to apply them in Java opens up a world of possibilities for you, in terms of building software and job opportunities. In this course, instructor Shaun Wassell takes you through the skill sets required for data science, shows you how to visualize data in Java, and explores different methods of turning data into information. Shaun introduces some basic con

> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers) | 3h 51m | Advanced | 59K learners

## Instructor

- [[Shaun Wassell]]

## Resources

- Exercise files available

## Skills Covered

- Data Science
- Java

## Table of Contents

### Introduction

#### Data science: Making sense out of chaos
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=0)** - [Shaun] Data science is a rapidly growing, incredibly interesting, and not to mention financially lucrative field.
>
> **[0:06](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=6)** Many businesses, despite having access to a flood of data from a huge variety of sources, are finding themselves unable to make any sense of this data, and they're willing to pay good money to anyone who can help them do so.
>
> **[0:18](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=18)** That's where data science comes in.
>
> **[0:21](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=21)** In this course, I'll guide you through the basics of data science, and we'll also be doing things like manipulating and visualizing data and looking at in-depth, hands-on examples.
>
> **[0:30](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=30)** Hi, I'm Shaun Wassell.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=32)** I'm a senior software developer, and I've been working with data science throughout my career.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=37)** Join me in my LinkedIn Learning course to learn data science with Java and see how to take your career to a whole new level.
>
> **[0:43](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=43)** And of course, if you enjoy this content and want to get in contact with me, feel free to connect with me on LinkedIn.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-making-sense-out-of-chaos?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [shaun] (1)


### 1. Data Science Basics

#### What is data science anyway?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=0)** - [Narrator] So before we start getting into all the different data science skills, stuff like data visualization, machine learning algorithms and all that fun stuff, the first question that you probably have or should have at any rate is what exactly is data science?
>
> **[0:16](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=16)** Data science is the study of data, but in a more fundamental level data science is the study of how to take data and make some sort of useful sense out of it.
>
> **[0:27](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=27)** So this might mean doing something like taking customer's purchase history at a supermarket and using that data to determine which items should be placed next to each other in order to increase sales.
>
> **[0:38](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=38)** Or it might mean taking traffic data and using that to improve the layout of roads or it might even mean taking all of the users posts on a social media site and creating a model from that data that allows us to predict if a given user is suffering from depression or mania.
>
> **[0:55](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=55)** And in fact, Facebook has actually done this.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=58)** So as you can see, there are a lot of opportunities like this to make sense out of data in such a way that it helps people or businesses, and that is the realm of data science.
>
> **[1:09](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=69)** Another very effective way that I've seen it described is visually in this Venn diagram that was first published by a guy called Drew Conway on his blog about a decade ago.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=78)** The idea here is that data science lies at the intersection of three distinct skill groups.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=85)** One, hacking skills that is technical prowess, such as coding and software development.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=91)** Two, math and statistics.
>
> **[1:33](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=93)** Now, sorry if that made some of you cringe there but it is a pretty vital part of data science, nonetheless.
>
> **[1:39](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=99)** And the last skill here, number three, is something called substantive expertise.
>
> **[1:43](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=103)** In other words, a sort of down to earth practicality about how to apply theoretical concepts and discoveries to real-world problems.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=111)** Now, the names of these three skills might be a little opaque for some of you, so if it helps you to just think of it as tech skills, math skills, and business skills that's pretty much the point that's being made here.
>
> **[2:04](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=124)** So moving on here, you may have noticed that so far besides Java, I haven't actually mentioned any specific data science related technologies as part of the definition of what data science is, and that's no accident.
>
> **[2:16](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=136)** You see, when we're approaching data science for the first time as with pretty much any other tech-related field, we need to remember that the technology is not the field.
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=146)** With so many domain specific technologies programming language and frameworks around the tendency has been for people to start defining the fields themselves in terms of the current hot technologies that are being used in the field.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=159)** So you might hear that data science is learning to use Python or that data science is learning to use Hadoop or BigQuery or Apache Spark or any of those other technology buzzwords.
>
> **[2:50](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=170)** And while those really are all incredibly useful technologies in the field, we got to remember, again, that the technology is not the field.
>
> **[2:59](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=179)** Another question that you probably have about data science is how data science is different from things like big data, data analytics, and so on, right?
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=188)** Those other kinds of technology data related buzzwords.
>
> **[3:12](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=192)** Now, I'm not going to go into too much detail about the differences here, mostly because these differences aren't really as concrete as some people like to think.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=201)** So I'll explain more about why I think that is in a minute but first here's a very general rundown of the theoretical differences between the fields that I just listed.
>
> **[3:31](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=211)** So first I'm going to start off with data science.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=213)** Data science is focused on using things like statistics, machine learning, techniques for gathering and cleaning data, et cetera, to gain insights from data.
>
> **[3:43](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=223)** That's the sort of theoretical definition of data science.
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=227)** Big data on the other hand is focused on working with huge amounts of data effectively.
>
> **[3:53](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=233)** So when you're working with large amounts of data on the scale of terabytes or petabytes, there are going to be some strategies that you're going to have to learn in order to work with that amount of data effectively.
>
> **[4:04](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=244)** And lastly, we have data analytics.
>
> **[4:06](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=246)** Data analytics is generally focused on automating processes for drawing conclusions from data.
>
> **[4:13](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=253)** The fact is that when most companies pick one title or another, it's either completely at random or it's based on which title the human resources department thinks will catch people's eye in the job posting more effectively.
>
> **[4:26](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=266)** That's just the reality of these things.
>
> **[4:29](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=269)** So the other reason that you shouldn't be too focused on the differences between these fields is because at the end of the day, nearly every person who gets hired in the data science, big data, data analytics field will end up wearing all three hats at some point or other without even thinking about it.
>
> **[4:45](https://www.linkedin.com/learning/data-science-for-java-developers/what-is-data-science-anyway?u=76281980&t=285)** In general, there are very few data scientists that don't have to work with large amounts of data and perform data analytics, and vice versa is true as well for all three fields.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), python (1), apache (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** such as (1), think of it as (1)
> **Code Keywords:** this. (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)

#### Data science examples
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=0)** - So, not that you hopefully have a better idea of the basic concerns of data science and its related fields.
>
> **[0:06](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=6)** What I'm going to do next is I'm going to take you through a few examples of how some companies and industries are currently using data science to improve people's lives, thrown operations, and yes, their profit margins.
>
> **[0:18](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=18)** So the first impossibly most pervasive application of data science is what are usually called Recommender Systems.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=26)** And we're going to learn more about this later on in the course.
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=28)** But put simply, Recommender Systems take data about some group of people.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=32)** Whether that's customers on an e-commerce site, viewers on a video site, shoppers in an actual brick and mortar store, and so on.
>
> **[0:40](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=40)** And based on this information, which usually includes their previous behavior and purchases among other things.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=47)** Based on that information Recommender Systems recommend other relevant items that that person might want to buy, other videos they might want to watch, et cetera.
>
> **[0:56](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=56)** So Spotify, Amazon and YouTube are three of the sites that come to my mind that implement this in a pretty powerful way.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=62)** Although obviously there are a ton of other websites.
>
> **[1:06](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=66)** And additionally social networks such as Facebook, cause I'm sure most of you already know.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=70)** Are not only able to recommend friends to you based on your current network, but they can also tell you which posts you'll be most interested in based on your previous activity and the activity of people that it deems to be similar to you in certain ways.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=85)** Now I'm sure we've all had the experience where you're looking online for let's say guitars.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=91)** And suddenly ads for guitars show up everywhere for you on every site that you visit.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=97)** Now, in cases like these that might seem kind of silly.
>
> **[1:39](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=99)** But most of the time this goes way deeper.
>
> **[1:42](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=102)** And behind the scenes of course, all of this is just a very sophisticated recommendation system at work.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=107)** Basically taking your profile information, likes, comments and even the amount of time you spend looking at individual posts and other advertisements.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=115)** And using that information to recommend products to you.
>
> **[1:59](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=119)** It's a very sophisticated system.
>
> **[2:02](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=122)** Data science is also being used in the medical field for patient diagnosis and treatment.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=127)** And just to give you an example of this, there are companies out there that are doing things like using data science to help fight cancer by providing personalized treatments to patients based on their medical history.
>
> **[2:18](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=138)** And this is obviously just one example.
>
> **[2:20](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=140)** There are many other companies that are using data science for medical related applications from doing things like, improving the quality of x-ray images, to analyzing DNA to predict how new drugs will interact with the human body.
>
> **[2:32](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=152)** So there's pretty exciting stuff going on there as well.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=154)** And again, all of that is based on data science which is what we're going to learn about in this course.
>
> **[2:41](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=161)** Now moving onto something a little drier in many people's eyes anyway.
>
> **[2:45](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=165)** Data science is also being applied extensively in the banking industry.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=169)** One of the more notable examples of this, is that banks are now using data science to do things like predict the likelihood that new loan applicants will default on their loans.
>
> **[2:59](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=179)** Now for better or worse what this does is it allows banks to give loans only to the people who they can be fairly sure are going to be able to pay them back.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=188)** Which therefore saves the banks money on people declaring bankruptcy.
>
> **[3:13](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=193)** Now, banks are also using data science to do things like, catch fraudulent transactions.
>
> **[3:18](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=198)** Such as when someone's credit card gets stolen.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=201)** And the last set of potential applications that I'm going to talk about briefly, are some of the more sensory based applications of data science.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=209)** And this includes things like speech recognition, machine vision and machine reading comprehension.
>
> **[3:35](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=215)** And the advances that have been made in this area in particular in the past decade have been really nothing short of incredible.
>
> **[3:43](https://www.linkedin.com/learning/data-science-for-java-developers/data-science-examples?u=76281980&t=223)** And what they've done is they've given rise to technologies such as self-driving cars, robotic customer service representatives, automatic image labeling, AI text summarization and a lot of other really really fascinating and extremely useful applications.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), self (1)
> **Analogies:** such as (3), similar to (1)
> **Env Vars:** dna (1)
> **Speakers:** - so (1)

#### Data as a business asset
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=0)** - So all of the examples that we've seen so far of potential applications of data science lead us to a very important point.
>
> **[0:07](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=7)** Now, before I get to exactly what that point is, I want to ask all of you a series of questions.
>
> **[0:14](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=14)** So how many of you have a rewards card with a supermarket or retail store?
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=19)** Right, a card that you put in the number and you get some sort of discount off of whatever it is you're buying, or you collect reward points or something like that.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=29)** How many of you have a Facebook account?
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=32)** How many of you use Google Maps?
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=35)** How many of you get discounted medical insurance premiums in exchange for access to medical data?
>
> **[0:40](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=40)** This actually seems to be a fairly common practice in the medical insurance industry, by the way.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=45)** And lastly, how many of you have some sort of snapshot car sensor from your car insurance company?
>
> **[0:51](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=51)** Basically, a device that is in your car that measures your driving data, accelerometer data, that kind of stuff.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=58)** So the reason I'm asking all these questions is if you think about it, all of them are free.
>
> **[1:03](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=63)** Chances are, you've never paid for a rewards card, you've never paid for a Facebook account, Google Maps, any of these other things.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=70)** So the question is, why is it that these companies are giving away these things for free?
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=77)** Why is it that you get reward points when you put in your rewards card at a supermarket, for example?
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=82)** Well, the fact is that they actually aren't free.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=85)** That is, you are paying for these, just not with money.
>
> **[1:27](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=87)** You're paying for them with your own information that you're freely handing over to whatever company it is is providing these.
>
> **[1:35](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=95)** So that brings us to a very important point that I want to make here, and that is, data is a business asset.
>
> **[1:43](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=103)** So as you can imagine, the financial implications of everything that we've talked about so far, all the examples I gave you, the financial implications of all of that are pretty profound, to say the least.
>
> **[1:54](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=114)** You see, the fact is that you need data, and (chuckles) more often than not, a lot of data in order for most of the applications that I've mentioned to actually be feasible.
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=123)** One of the reasons that companies like Facebook or Google are able to make such frighteningly accurate predictions about us, is that these companies have gathered terabytes or even petabytes of data over the years and are able to then use this data to perform data science and give themselves these advantages.
>
> **[2:21](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=141)** So the key takeaway here is that data that can be used for purposes like those that we've discussed so far, is valuable.
>
> **[2:28](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=148)** And that doesn't necessarily mean that all data is valuable.
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=151)** As we'll see shortly, there are certain characteristics of data that can make it more or less valuable or even useless, depending on what we're trying to use it for.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=159)** But nevertheless, it's a different way of thinking about data than as just a bunch of ones and zeros.
>
> **[2:45](https://www.linkedin.com/learning/data-science-for-java-developers/data-as-a-business-asset?u=76281980&t=165)** The idea that data has the power to give businesses a competitive edge and change entire industries is really a core part of what makes data science so exciting to learn and use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** for example (1), imagine (1)
> **Code Keywords:** for. (1)
> **Definitions:** is a  (1)
> **Speakers:** - so (1)

#### CRISP-DM: The data science cycle
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=0)** - [Instructor] Okay, now that we know some of the basics regarding what exactly data science is, as well as what it can do, the next thing we're going to do is we're going to take a high-level look at exactly how data science is usually done.
>
> **[0:13](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=13)** And for this, we're going to take a look at something that's referred to as the CRISP-DM, which is the main cycle of data science.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=20)** So as a programmer, you've probably noticed that cycles are a fairly common thing in the tech world.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=26)** We have the red green refactor cycle for test driven development.
>
> **[0:30](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=30)** We have the software development life cycle, we have the scrum cycle, we have the lean cycle.
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=35)** And the point of all these cycles is that they help keep us on track and really start to form habits around the so-called normal progression of developing some sort of system, whatever it is we're working on.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=47)** Now as it happens, data science has a cycle of its own, which is the somewhat comically named CRISP-DM cycle, which stands for cross industry standard process for data mining.
>
> **[0:59](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=59)** CRISP-DM is a very widely used approach for carrying out data science projects.
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=64)** And what we're going to do in this video is just walk through each of the steps that it lays out for us, and see what sorts of tasks each step entails, and how that fits into the bigger picture of data science.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=78)** So, first of all, here is a drawing of the cycle.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=82)** As you can see, there are several steps, and it does indeed go around and around and around.
>
> **[1:28](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=88)** Now, the first step in this cycle really is the business understanding step.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=94)** So the first thing we have to make sure of in data science projects is that the business has some idea of what it hopes to achieve.
>
> **[1:42](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=102)** In other words, the business has to know what it's hoping to get out of this project, and then know how to formulate that in terms of one or more data science problems, such as classification regression.
>
> **[1:54](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=114)** We're going to talk about those different types of problems shortly.
>
> **[1:57](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=117)** So that's business understanding.
>
> **[1:59](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=119)** The business needs to figure out what it wants and express that in data science terms.
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=123)** The next step here is something referred to as data understanding.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=127)** In order to know what this step really means, we have to talk about the fact that data is often collected for a completely different purpose than what the business wants to use it for.
>
> **[2:18](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=138)** Or maybe the data was just collected for no clear purpose at all.
>
> **[2:22](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=142)** So what we need to do then is we need to understand the strengths and limitations of the data set we're working with in order to tell whether it's actually sufficient to solve our business problem.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=154)** And as we're going to see later on, if let's say we wanted to predict the average amount of money that a user was going to spend on our website based on their behavior, and so far the only data set we had was just the user's behavior and we didn't actually know how much each user in that data set had spent.
>
> **[2:51](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=171)** That data set wouldn't be very helpful for us, since it doesn't have that key piece of information we're trying to predict.
>
> **[2:57](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=177)** So that's data understanding and a key thing to note here in the cycle, right?
>
> **[3:01](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=181)** In the drawing, is that we often go back and forth multiple times between business understanding and data understanding.
>
> **[3:09](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=189)** So the business might decide as I just said, that it wants to try and predict how much a given customer is going to spend on their site based on their behavior on the site.
>
> **[3:18](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=198)** And then you go back to the data and you see, oh, well we can't actually predict that.
>
> **[3:22](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=202)** And then you go back to the business understanding and you try and figure out a different way to sort of formulate that question that might be helpful.
>
> **[3:30](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=210)** You go back to the data.
>
> **[3:31](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=211)** And you go back and forth basically until you have a very clear idea of what it is you hope to accomplish that is supported by the data.
>
> **[3:40](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=220)** So anyway, moving on.
>
> **[3:42](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=222)** The next step that we're going to look at is data preparation.
>
> **[3:46](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=226)** This is where we transform the data from its raw form into the form required by whatever data science problems we've decided to break the business problem up into.
>
> **[3:56](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=236)** Each of those problems that we might break up the larger problem into as we'll see shortly, requires the data to be in different formats.
>
> **[4:04](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=244)** So, the data preparation step is where that happens.
>
> **[4:07](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=247)** And once we've prepared the data, the next step then is modeling.
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=252)** This here is the fun part, it's where we actually create a model that we can apply to novel data, and see if we can tweak that model in such a way that we can get it to actually predict new information.
>
> **[4:26](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=266)** And just like with business understanding and data understanding, you can see that data preparation and modeling, there's a lot of back and forth there too.
>
> **[4:33](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=273)** So you may find that the model you're building isn't quite working, so you have to go back and prepare the data in a different way in order to make the model work a little better.
>
> **[4:44](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=284)** So, a lot of times you go back and forth between those two steps until you feel that you've gotten it right.
>
> **[4:50](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=290)** After you've done that, the next step is evaluation.
>
> **[4:53](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=293)** Now this is where we check to make sure that the patterns we uncovered and the models we created in the previous step, hold up in the real world.
>
> **[5:03](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=303)** So just like with software development, we're going to want to test our data science solutions before we actually deploy them.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=309)** And finally, once we've evaluated our model and everything looks good, we move on to the final step in the process, which is the deployment step.
>
> **[5:19](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=319)** This is where we send out our model into the real world and actually have it running live on our site.
>
> **[5:26](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=326)** So this would be when we release our recommender system let's say, that recommends new products for our users.
>
> **[5:32](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=332)** Now just one thing to remember, and I know that many of you watching this are going to be developers yourselves, but this deployment step is actually often done by a separate team that worries more about the operational side of things.
>
> **[5:45](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=345)** So usually you have one team that worries about the rest of the cycle, actually doing the business understanding, creating the models, et cetera.
>
> **[5:53](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=353)** And then you have another team that takes basically whatever the data scientists design, and puts that into production.
>
> **[6:00](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=360)** And one last thing here is, let's not forget the data which is in the center of the data science cycle.
>
> **[6:07](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=367)** All of this, this entire process is going to depend on the data that we have, right?
>
> **[6:12](https://www.linkedin.com/learning/data-science-for-java-developers/crisp-dm-the-data-science-cycle?u=76281980&t=372)** It requires that we put a lot of time and effort into examining our data, thinking about our data, and just keeping that in mind as we go through all of the steps.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), for. (1), finally, (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2), stands for (1), in other words (1)
> **Analogies:** just like (2), picture (1), such as (1)
> **Env Vars:** crisp (3)
> **Cross-References:** go back to (3)
> **Speakers:** - [instructor] (1)

#### Types of problems in data science
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=0)** - [Instructor] All right.
>
> **[0:01](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=1)** So now that we've seen some examples of applications of data science, we've seen the basic data science cycle, we're going to take a look at the main types of problems in data science.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=10)** Now I mentioned earlier, when we were talking about the cycle, that a lot of times we want to try and express business problems, business desires in terms of one of these types of problems that we're going to go over in this video.
>
> **[0:24](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=24)** One thing to note before we get started is that while there are a lot of algorithms in data science, there are a huge number of algorithms and different variations on those algorithms that you can actually implement.
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=35)** The fact is that, most of the problems that these algorithms solve, fall into a relatively small number of different types of problems.
>
> **[0:44](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=44)** And there are nine that we're going to cover in this video here.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=48)** So the first type of problem that we're going to talk about is called a classification problem.
>
> **[0:52](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=52)** Basically, what we're trying to do in this case is sort different entities whether that's users on our site, whether that's cars on a car website, et cetera, into actionable groups.
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=64)** So an example of what this type of problem might look like would be, let's say phone carriers, companies that provide phone service.
>
> **[1:12](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=72)** Those companies would very likely want to know who's about to switch, who's about to cancel their service, so that they could then go and offer those individuals good deals to keep them as customers without actually giving those deals to everybody.
>
> **[1:26](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=86)** So in other words, the groups that they would have there, are very likely to switch and not likely to switch.
>
> **[1:32](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=92)** And then they would just send out coupons for deals to people who fell into the group that was likely to switch.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=98)** So that's classification.
>
> **[1:40](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=100)** The next thing we're going to look at, is called a regression problem.
>
> **[1:44](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=104)** Basically, a regression problem is when we're trying to predict the value of some variable that we don't yet know about an individual based on the values of other attributes that we know.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=115)** So an example of this would be, maybe we're trying to predict the value of a house based on its square footage, its location, the prices of similar houses, et cetera.
>
> **[2:06](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=126)** This is also sometimes called value estimation.
>
> **[2:09](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=129)** So that's regression.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=131)** Again, we're trying to predict the value of an unknown variable based on the values of known variables.
>
> **[2:16](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=136)** Next step, we have similarity matching.
>
> **[2:17](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=137)** Now, similarity matching aims to identify similar individuals.
>
> **[2:23](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=143)** And generally we use similarity matching instead of classification when the characteristic that we're looking at is a little less defined than what we might be talking about in classification.
>
> **[2:36](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=156)** So an example of this might be that given the profiles of happy customers that our company has experienced in the past, and maybe we get this sort of happy label from reviews that they've left, based on that and data about these customers, we want to find other potential happy customers to focus our marketing efforts on.
>
> **[2:54](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=174)** And just to clarify, these would be people that aren't actually customers yet, but people that we think would be likely to be happy customers so that we can focus our advertising efforts on just that smaller group.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=188)** So next up, we have clustering.
>
> **[3:10](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=190)** What clustering aims to do is it aims to group individuals together without any preconception of what those groups might be.
>
> **[3:19](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=199)** And this is a very useful technique for initial data exploration when we don't really know quite what we want to do with the data yet.
>
> **[3:27](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=207)** And one interesting application of this, would be something like music preferences.
>
> **[3:32](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=212)** So with music preferences, there are your typical genres, pop, rock, rap, et cetera, but there are also other hidden patterns behind these that actually cross the lines between typical genres.
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=224)** So if we can see, let's say we're Spotify and we can see that there are certain groups of people that tend to listen to similar groups of unrelated artists, that would be a good application of clustering, to see, okay, if you like this band, maybe you'll also like this band that you may never have thought about but we know that you fall into that same cluster of people who have similar musical tastes.
>
> **[4:10](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=250)** So next up, we have something called co-occurrence grouping.
>
> **[4:13](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=253)** This is also known as market basket analysis.
>
> **[4:17](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=257)** And what this does, is it aims to find items that occur together frequently in transactions.
>
> **[4:23](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=263)** So one example of this, is that supermarkets have found that people who buy meat generally also buy hot sauce.
>
> **[4:31](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=271)** So what this allows supermarkets to do, is put those two items close to each other in the store so that when someone goes to buy meat they'll see the hot sauce next to it, and think, okay, cool, I'll get that too and put both in their basket.
>
> **[4:43](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=283)** So that's, co-occurrence grouping where basically we just want to know what items typically occur together in transactions.
>
> **[4:50](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=290)** This is also used pretty powerfully in Amazon's recommender system.
>
> **[4:55](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=295)** And the next type of problem is a problem called profiling.
>
> **[4:59](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=299)** And this is also known as behavior description.
>
> **[5:01](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=301)** And what this type of problem does, is it aims to define sort of a typical behavior of a group or of an individual.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=309)** Now this is used in things like credit card fraud detection where new purchases on a credit card are compared against a list of the customer's usual purchases to detect anomalies.
>
> **[5:22](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=322)** So, if I have a credit card and I generally only buy things in my geographical region and suddenly there's another purchase that happens in another country, the credit card company is going to think, okay, that's unusual.
>
> **[5:35](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=335)** This profiling is going to allow that credit card company to label that as unusual and ask me, hey, did you buy this?
>
> **[5:43](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=343)** So that's profiling, very useful type of problem in data science.
>
> **[5:48](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=348)** Next up, we have something called link prediction.
>
> **[5:50](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=350)** A link prediction aims to predict connections between data items, as well as the strength of what those connections might be.
>
> **[6:00](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=360)** Now, the main example that comes to mind of this, is Facebook which basically uses this to recommend friends that it thinks you probably know and probably have a pretty strong connection with but you haven't actually connected with yet on Facebook.
>
> **[6:16](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=376)** And next step, we have data reduction.
>
> **[6:18](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=378)** So what data reduction aims to do is take data that's uncomfortably large and reduce it down in size while still keeping as much of the important aspects of that data as possible.
>
> **[6:31](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=391)** So this usually involves is removing redundant or outdated pieces of data.
>
> **[6:36](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=396)** An example of this might be something like file compression where we're basically able to reduce the size of a file without reducing the data that it contains, just by using certain techniques.
>
> **[6:48](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=408)** And last but not least is something called causal modeling.
>
> **[6:52](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=412)** Causal modeling, aims to identify cause and effect in data sets.
>
> **[6:58](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=418)** And one thing to note here, is that the rest of the types of problems we've talked about so far, generally do not imply cause and effect, is they only imply correlation.
>
> **[7:09](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=429)** So in other words, we may find some sort of pattern like that.
>
> **[7:12](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=432)** People over 50 are more likely to change their phone service, right?
>
> **[7:16](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=436)** In the classification example that I gave, but we can't conclude from that, that being over 50, causes somebody to be more likely to switch phone service, right?
>
> **[7:27](https://www.linkedin.com/learning/data-science-for-java-developers/types-of-problems-in-data-science?u=76281980&t=447)** We just know that those are correlated in some way.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (5), this, (3), let (2)
> **Definitions:** is a  (3), is called (2), in other words (2), known as (2)
> **CLI Commands:** find (3)
> **Speakers:** - [instructor] (1)


### 2. Representing Data in Java

#### Data formatting in Java
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=0)** - [Instructor] Okay, so the next thing we're going to do is we're going to start taking a look at some more concrete examples of how data science is actually done in Java and the way that we're going to start that off is by taking a look at the topic of data formatting in Java.
>
> **[0:14](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=14)** So, one of the first things that you're going to run into when you start trying to do data science in Java is there are actually a lot of different ways that we can format the data that we're going to be working with.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=26)** So what we're going to do in this video is we're just going to take a look at the different options that are available to us for doing that.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=33)** So the first way to represent data in a Java program is using something called univariate or multivariate arrays.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=41)** That name might not mean anything to most of you so let's just take a look at what that's going to look like in code.
>
> **[0:46](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=46)** The first thing we're going to take a look at is univariate arrays.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=49)** Now, univariate arrays, let's say we're trying to represent data about people and we're trying to write some sort of data science application that involves doing operations on data that we've collected about people such as their names, some unique IDs and maybe something like whether or not they like pizza.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=67)** It can really be any kind of data that we're trying to represent.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=70)** So using univariate arrays, here's what that's going to look like.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=76)** In univariate arrays, we're actually going to represent each unique field of our group of people as its own array.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=84)** So here's what I mean by that.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=85)** The first thing we're going to want to represent is going to be maybe the people's names.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=90)** So to do that, we're going to have an array of strings called names and this array is actually going to contain the names for all of the people in our data set.
>
> **[1:41](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=101)** So here's what that's going to look like.
>
> **[1:43](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=103)** We're going to say something like a few fake names here.
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=109)** All right, so we have the names of all of our data sets so what we're doing here is we're really taking it on more of a column by column basis.
>
> **[1:57](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=117)** If you're talking about something like an SQL database this would be what a column would look like.
>
> **[2:02](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=122)** It would be all of the values for each record in our data set as an array.
>
> **[2:09](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=129)** So we have our array of names and the next thing might be that we'd have an array representing their unique IDs.
>
> **[2:15](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=135)** So for that, we might have an array of integers that looks like this, right?
>
> **[2:19](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=139)** So it would be integer array IDs and it would contain the unique IDs for each of our people.
>
> **[2:28](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=148)** And then we might have something like whether or not each of these people likes pizza.
>
> **[2:33](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=153)** Again, this is just a kind of a silly example just to show you what a univariate array might look like.
>
> **[2:40](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=160)** So we would say something like likes pizza equals and then this would be an array of Booleans.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=166)** So it might be false, true, true, false.
>
> **[2:51](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=171)** So the point here is that in univariate arrays each array contains the values for each data point of that column, right?
>
> **[2:59](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=179)** So in other words, it contains all the names for our people all the IDs for our people and any other piece of data that we've collected for our data set.
>
> **[3:07](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=187)** And then what would happen is that the indices of this array would sort of correspond to each other.
>
> **[3:11](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=191)** So in other words, John Doe's IDs one, two, three and whether or not he likes pizza is the zero with element in that array.
>
> **[3:17](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=197)** Same for Jane Jones, same for Bill Smith, same for Betsy Garcia.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=201)** Same for all of our data points basically.
>
> **[3:23](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=203)** Now a similar way to do this is something called multi-variate arrays.
>
> **[3:28](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=208)** So multi-variate arrays are where instead of each array representing a column of our data set, that array represents a row in our data set.
>
> **[3:38](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=218)** So in other words, we might have something called integer and this would be an array person one and then this array would contain all of the data points for this individual.
>
> **[3:50](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=230)** Now, the tricky part about this is that in multi-variate arrays, all of the data points for a given record for given person, for example, have to be of the same data type really.
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=240)** So in other words, in our case here, all of the attributes of this person one would have to be integers or they would all have to be strings or whatever kind of data type we decide best fits our needs.
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=252)** So in other words, we might have the unique ID, we might have a Boolean representing whether or not that person likes pizza, right?
>
> **[4:18](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=258)** That would either be zero or one, and we might have the year that they were born in.
>
> **[4:23](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=263)** Maybe we also have the day that they were born and the month, something like that.
>
> **[4:27](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=267)** And then what we would do is for person two we'd have another array like this that would contain their ID, whether or not they like pizza, maybe their birth year and the day and month of their birthday, and so on and so forth.
>
> **[4:42](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=282)** So you might be wondering why we choose to use multi-variate rays because of the restriction of having all of the same data type and actually the reason that we would choose to do this is because having all our data types of the same type, using multi-variate arrays actually allows us to represent our data as matrices which is actually our next representation here.
>
> **[5:03](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=303)** So, here's what that would look like.
>
> **[5:06](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=306)** If we were going to represent this same data as a matrix we would say something like integer like that and we would say people data equals and then we would have the corresponding arrays for each of those inside this matrix.
>
> **[5:25](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=325)** And the advantage of this is that there are a lot of different operations that you can perform on matrices that you can't really perform on other data types when your dad has represented like this.
>
> **[5:36](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=336)** So, representing our data in matrix form can be really advantageous for us a lot of the time, especially when we're working with larger data sets, where efficiency is key.
>
> **[5:48](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=348)** If there's a lot of optimizations that have been done for matrices working with those kinds of operations.
>
> **[5:54](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=354)** And of course there are libraries also that help us work with matrices and one in particular is the Apache Math Commons which contains a class called real matrix and of course there are other classes as well but this is just one of them for the sake of example.
>
> **[6:08](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=368)** So we could say something like real matrix, matrix equals new, and then we'd use something like array 2D row real matrix and turn this matrix data here into a matrix that we can perform operations on like this.
>
> **[6:28](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=388)** And of course, you're going to need to download this if you want to actually use this but we're not really going to be using this library throughout the rest of the course.
>
> **[6:33](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=393)** So if you don't have it, just take this as an example here and just one last thing about this example is that most matrix libraries are going to prefer that you represent your data as doubles.
>
> **[6:44](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=404)** So what we'd have to do here is just change this to double like that.
>
> **[6:49](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=409)** So that's how to represent data as matrices.
>
> **[6:51](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=411)** There are obviously a lot of other ways as well.
>
> **[6:54](https://www.linkedin.com/learning/data-science-for-java-developers/data-formatting-in-java?u=76281980&t=414)** Now, the way that I'm about to show you is actually considered to be the preferred way in my experience of doing things, unless you can represent data as a matrix but a lot of times representing data is matrices, that makes things easier in certain cases but it also makes it a lot harder in other cases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), this, (1), type, (1), new, (1)
> **Definitions:** in other words (5)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** apache (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### More data formatting
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=0)** - [Instructor] My preferred way of representing data, generally, is to represent it as something called data objects.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=8)** So the idea here with data objects is that you create a very lightweight class that only contains member variables, and then you use lists that contain instances of that class in order to represent your data.
>
> **[0:22](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=22)** So in order to show you what I mean, what I'm going to do here is define a new person class.
>
> **[0:27](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=27)** So inside our data formatting class that we're using for these videos, I'm going to say static class person, and this person class is going to be our lightweight class that only has member variables.
>
> **[0:40](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=40)** That's how we're going to say something like public final integer ID.
>
> **[0:46](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=46)** And we are going to make these final because we're not going to need to change them.
>
> **[0:51](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=51)** And we'll say public final string name, and we'll say public final Boolean likes pizza, for example.
>
> **[1:03](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=63)** And then of course, we can generate a constructor for this so that we don't have to type it out ourselves, and that is our lightweight class.
>
> **[1:13](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=73)** Now one thing to note also is that with classes like this, the temptation can be to add in methods to these classes in order to do things like, for example, get their first name, right, so you might have something like public integer get ID, which returns the person's ID.
>
> **[1:32](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=92)** And that's actually the reason that we make all of these member variables public and final.
>
> **[1:35](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=95)** Public is so that you can access it on your own from outside the instance, and final is so that we don't end up changing it.
>
> **[1:42](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=102)** This is really more of a functional programming thing, and if you want to learn a little bit more about functional programming, I highly recommend you take a look at my other course on the topic.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=115)** So when we want to create methods that will allow us to actually work with the data in this lightweight data class here, what we generally end up doing is we create a util class that contains methods for working with this kind of data.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=131)** So in the case of our person class, we might have something like static class, person utils, and then we might have something like public static, string get first name, which takes a person object as an argument.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=149)** And then what it would say is something like returned person.name.split zero, which basically would return the first name of a person object.
>
> **[2:40](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=160)** And then, the way that you would use that would be by doing something like this.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=166)** You'd create a person, and I'm just going to say data objects here, since this is what we're talking about.
>
> **[2:52](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=172)** So you'd create a person, you'd say something like person myPerson equals new person with the corresponding values.
>
> **[3:05](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=185)** And then if you wanted to get their first name, you'd say something like string, firstName equals personUtils.getFirstName myPerson.
>
> **[3:17](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=197)** And what this does is it really kind of helps us to separate our concerns when working with data, right?
>
> **[3:23](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=203)** This person class that we're working with really only worries about storing data in a nice lightweight kind of way, while person utils worries about the actual operations that we might want to perform on that data.
>
> **[3:41](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=221)** So the way that we would represent these other examples using data objects like we've done here would be something like this.
>
> **[3:50](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=230)** We would define a list of person objects and we'd call it something like people list and we'd say equals new array list.
>
> **[4:03](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=243)** And then we would add people to that list.
>
> **[4:06](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=246)** We'd say peopleList.add new person with the corresponding values.
>
> **[4:20](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=260)** And we'd do that for all of our data points here.
>
> **[4:23](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=263)** Now, obviously in real life, we'd be loading this from a file or something, but just for the sake of example, I'm typing all of this out right now.
>
> **[4:37](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=277)** Okay, and I think you get the idea here.
>
> **[4:39](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=279)** So that's how to represent data in Java using data objects.
>
> **[4:42](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=282)** So the other main way that I'm not going to cover here, but it can be very useful in certain cases, is representing our data as JSON objects.
>
> **[4:51](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=291)** And the nice thing about JSON objects, for those of you who don't know what a JSON object looks like, it looks something like this.
>
> **[5:00](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=300)** You'll find that a lot of the time, data can be represented in JSON format pretty nicely.
>
> **[5:05](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=305)** But generally, a JSON file is going to look something like this where you'll have curly braces and then you'll have properties on one side and the values for those properties on the other side, right, so you'll have name, for example, and then you'll have something like age.
>
> **[5:22](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=322)** And JSON objects can generally contain different types of data as well.
>
> **[5:28](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=328)** So anyway, that's just one more way that data can be represented in a Java program.
>
> **[5:32](https://www.linkedin.com/learning/data-science-for-java-developers/more-data-formatting?u=76281980&t=332)** There are libraries available for working with JSON data, but I'm not going to go in too much detail about that since we're mostly going to be using this data objects format that I covered here.

> [!info]- Semantic Content
>
> **Code Keywords:** public (7), static (3), this. (3), class. (2), class, (2)
> **Env Vars:** json (7)
> **Code Identifiers:** myperson (2), firstname (1), personutils (1), getfirstname (1), peoplelist (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)

#### Real-life data difficulties
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=0)** - [Illustrator] So, now that we've seen some of the ways to format and represent data in our Java programs, we're going to take a look at another, that becomes particularly important, when we're working with data that's provided to us in things like Files.
>
> **[0:14](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=14)** So, we're going to take a look at some of the main data difficulties that we're going to deal with, and discuss some ways to deal with those things.
>
> **[0:23](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=23)** In the real world, the data that's going to be given to us, is going to be quite a bit different from the data that we're used to working with in a very controlled environment, where everything's very nicely formatted, there are no mistakes.
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=35)** In general, the data that we work with, is going to have some problems with it, that we're going to have to be aware of, and know how to deal with.
>
> **[0:43](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=43)** So, the first of those difficulties, is something that's called Null Values.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=47)** Now, usually, null values in a data set are how somebody represents that we don't have a given piece of data.
>
> **[0:56](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=56)** So, this would be, for example, if we were having people fill out surveys, and someone didn't fill out their age on the survey, we would represent that fact that they didn't put their age as a null value.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=67)** And generally, the way that we represent null values, can vary, sometimes it'll be represented as the word Null, either in lowercase or all caps, sometimes it'll have N/A, sometimes rather annoyingly, people will use a zero, which is a little harder to spot generally.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=82)** So, that's null values, and that's something to keep in mind when you're looking at a data set.
>
> **[1:27](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=87)** Generally, data sets are going to have a lot of blank spaces, and these blank spaces can mean different things.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=94)** So, sometimes blank spaces are used to separate data points.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=98)** So, if the data that you're looking at is in a file that's where each data point is separated by spaces and new lines, then blank spaces there, mean a significantly different thing than if the file is formatted, so that blank spaces mean null values.
>
> **[1:53](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=113)** Right. A lot of times people will actually use blank spaces to represent null values.
>
> **[1:58](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=118)** So, what that would mean is that, in the case of someone's age, again, if they didn't fill out their age, they would just put a blank space in that spot.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=127)** And we would have to know how to then treat that as a null value.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=131)** So, blank spaces in general, can give us some problems when we're trying to parse files, but really, there's something to be aware of, when you're working with real world data.
>
> **[2:21](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=141)** So, the next thing is something called Parse Errors.
>
> **[2:25](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=145)** Basically, when we're parsing files, and a lot of the libraries that we'll be working with, will actually have some methods in place for making this easier for us.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=154)** When something happens, when an error occurs, when our program is parsing a file, let's say we're working with a CSV file, and it gets to the end of the file before it's completed parsing a given record or something like that.
>
> **[2:47](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=167)** Or let's say that maybe the record that it's parsing has some kind of character that it doesn't recognize, or it's just formatted poorly.
>
> **[2:54](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=174)** There's a lot of different things that could happen, that would cause our program to throw some kind of parse error.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=180)** And we just need to keep that in mind and know how to handle them because rest assured, they will occur in real world data, whether it was the person who was putting the data set together, accidentally hit the delete key and caused some of the formatting to be off, or some other thing that causes our program to throw an error, we need to just keep that in mind and know how to handle it.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=200)** And finally, the last difficulty that we're going to talk about here, is something called Outliers.
>
> **[3:25](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=205)** Now, outliers are values that are just outside the range that we would normally expect in a given data set.
>
> **[3:31](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=211)** Values that really, we know don't belong there, right?
>
> **[3:34](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=214)** So, for example, if we know that a given attribute for each of our data points should be either zero or one, and we get a two for that value on a given record, we know that something is wrong, right?
>
> **[3:45](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=225)** And we need to have a method for dealing with these things.
>
> **[3:48](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=228)** This can happen a lot when we're just collecting data from users and not really doing a whole lot of validation on the data they give us, which, by the way, is not the best idea, but it's something to keep in mind.
>
> **[3:59](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=239)** Now, one of the other problems with outliers, is that they can very often skew our data quite a bit.
>
> **[4:05](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=245)** So, let's say we're looking at the data for houses in a given area, and somebody accidentally put a zero or maybe two extra zeros on the end of one of the prices of the houses.
>
> **[4:16](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=256)** That would end up skewing our data quite a bit when we look at things like the average, or the standard deviation, or other statistical measures of our data set.
>
> **[4:25](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=265)** Because first of all, the value is wrong, it was an accident that it got entered that way in the first place.
>
> **[4:30](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=270)** And second of all, it can really set our calculations off when we go to use that data set.
>
> **[4:35](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=275)** So, that's what outliers are.
>
> **[4:37](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=277)** All four of these that we've talked about here, are just some potential difficulties that you can run into when you're dealing with real world data.
>
> **[4:44](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=284)** When you're dealing with data in general, just keep in mind again, that a lot of the time the data has been formatted by a human in some form, right?
>
> **[4:53](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=293)** A human has touch this data in some way, whether that was just copying and pasting the data from a terminal into a file.
>
> **[5:00](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=300)** And as you well know, when humans handle things, we have the tendency to mess things up.
>
> **[5:05](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=305)** So, if we were copying and pasting data into a file, for example, we may have missed the trailing comma, or we may have missed the last few lines of whatever data set we were trying to copy and paste.
>
> **[5:17](https://www.linkedin.com/learning/data-science-for-java-developers/real-life-data-difficulties?u=76281980&t=317)** So, as you're performing data science, just keep some of these things in mind, and make sure to look through your data set ahead of time, and make sure that you recognize any of these, and deal with them accordingly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), throw (2), delete (1), finally, (1)
> **Warnings:** keep in mind (3), be aware (2)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Env Vars:** csv (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### 3. Data Manipulation Techniques

#### Mapping
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=0)** - [Instructor] The next thing we're going to take a look at here, now that we know how to represent data and some of the difficulties we might face when working with that data.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=8)** The next thing we're going to take a look at is a few manipulations, a few very important manipulation techniques that we can use in Java to transform our data from one form into another.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=20)** Now there are a number of different methods that Java provides us with, that allow us to do this in a very straightforward and easy way.
>
> **[0:27](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=27)** And what I'm going to do here is basically show you what some of those are.
>
> **[0:31](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=31)** So, first of all, to start off we have just some fake data here.
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=35)** We have a list of numbers.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=36)** We have a list of words and we have a list of employee objects which are defined as just a basic data class.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=45)** Let's just got public final for all of its attributes and the only method it has is the constructor here to create new instances of it.
>
> **[0:54](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=54)** So we're representing all of our employees like that.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=58)** And let's take a look at some of the manipulations that we can perform in Java, on this data that we see here.
>
> **[1:06](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=66)** The first method we're going to talk about here is the map function.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=70)** Now the map function is used basically whenever we want to take a list of data, like we have here, and transform each element in that list into some other form.
>
> **[1:21](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=81)** Okay? So we could maybe want to double all of the numbers in our numbers list.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=85)** We might want to capitalize all of the words in our words list, or we might want to get the name of all of our employees from our employees list.
>
> **[1:35](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=95)** All of these would be instances where we would use the map function.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=98)** Now, something to keep in mind, first of all, is that all of these functions that we're going to cover here are methods that we can call on streams.
>
> **[1:48](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=108)** So basically that's why we've converted all of these arrays into lists is because we can then convert the lists into streams and call map or filter or sort or any of the other functions that we're going to be talking about here.
>
> **[2:04](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=124)** So here's what map is going to look like.
>
> **[2:06](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=126)** We're going to start off with the example of doubling all of the numbers in our numbers list here.
>
> **[2:12](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=132)** So we've basically going to say, list, integer, doubled numbers equals numbers, and we're going to convert it into a stream by saying, dot stream, and then we're going to say, dot map.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=149)** And basically what map does is we pass it a function that it will apply to each of the elements that it encounters in the list.
>
> **[2:38](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=158)** So it's going to take essentially each element and the return value of the function that we give it here.
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=164)** We usually represent this as Lambdas here to do this.
>
> **[2:48](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=168)** The return value of this function that we define here is going to be what that element is going to become in the final list here and our double numbers list that we're defining.
>
> **[2:58](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=178)** So what that's going to like is we're going to say map, we're going to define a Lambda here.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=182)** We're going to say X, X times two.
>
> **[3:05](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=185)** And what we need to do now is this is actually still a stream at this point, so we need to convert it back into a list.
>
> **[3:12](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=192)** And the way that we do that with streams is by saying dot collect and then we say collectors dot to list.
>
> **[3:23](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=203)** And that will give us doubled numbers and we can test this by logging this out to the console, system dot out dot print LN doubled numbers.
>
> **[3:37](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=217)** And if we run our file now, we should see that it'll run and print out each of the numbers from our original list doubled.
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=227)** So that's what map does basically.
>
> **[3:48](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=228)** And like I said, we can also use that to capitalize all of the words in our words list.
>
> **[3:56](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=236)** So if we wanted to do something like this, we'd say, list string, capitalized words, equals words, convert it to a stream, and then we'd say dot map, and then we would return word dot to uppercase.
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=252)** I guess I've been calling it capitalized but that should actually be uppercased.
>
> **[4:17](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=257)** We've just been using the wrong word there.
>
> **[4:19](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=259)** So we'll say uppercased words, we're converting each of those words to uppercase and then just like we saw before, we're going to use the collect method to basically turn this stream back into a list.
>
> **[4:32](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=272)** So we're going to say dot collect, collectors dot to list.
>
> **[4:37](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=277)** And there we have our uppercased words, which we can print out by saying, system dot out dot print LN, uppercased words.
>
> **[4:46](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=286)** And if we run it again, we'll see that it prints out this list where each of the words has been uppercased.
>
> **[4:51](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=291)** So one thing to keep in mind too, is that this doesn't actually mutate the list that we call it on.
>
> **[4:57](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=297)** So when we call map on our words stream here that doesn't actually mutate the words lists.
>
> **[5:02](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=302)** So that's something to keep in mind when you're working with those.
>
> **[5:07](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=307)** And just one more example that I'll show you is if we wanted to maybe do something like, get the names of all of the employees in our employees array, we could do that.
>
> **[5:17](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=317)** By doing something like this, we would say list string, and we would say something like, employee names equals employees dot stream dot map.
>
> **[5:30](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=330)** For each of the employees, we would return employee dot name, convert that back into a list with the collect method, and there you have it.
>
> **[5:40](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=340)** We could print that out, just to make sure that's what we expect it to be.
>
> **[5:47](https://www.linkedin.com/learning/data-science-for-java-developers/mapping?u=76281980&t=347)** And if we run our program again, we'll see that we got the names from all of our employees.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (2), this, (2), class. (1), public (1)
> **Warnings:** keep in mind (3)
> **Definitions:** is a  (1), defined as (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=0)** - [Instructor] The next data manipulation method we're going to take a look at is the filter method.
>
> **[0:05](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=5)** So the filter method is used in a very similar way to the map method that we just saw except instead of transforming each of the items in a list, it's actually used to make sure we only get a certain subset of the items in the list depending on some sort of criteria that we can specify.
>
> **[0:23](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=23)** So let me show you what I mean, let's say that maybe we want to get all of the words in our words list here that is longer than four characters just as an example.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=32)** Well, in that case, what we could do and I'm going to delete all these map examples here, is we could say List<String> and we'd say something like long words equals words and convert it into a stream here.
>
> **[0:52](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=52)** And then we'd say .filter and we pass a function of filter in a very similar way to what we did with map except the function that we pass to filter is going to return either true or false for each element.
>
> **[1:05](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=65)** Now if it returns true, then that means that that element is going to be included in the final list that we return here.
>
> **[1:12](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=72)** And if it's false it means it's going to be left out of the stream.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=76)** So here's what that's going to look like if we wanted to get all of the words here that were longer than four characters as I said.
>
> **[1:23](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=83)** What that would look like is we'd say word and we would simply say word.length is greater than four.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=91)** And then just like with map, we would transform this stream back into a list by saying .collectCollectors.toList.
>
> **[1:40](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=100)** So now if we were to log this out and run our program, we're going to see that it contains the only two words in our list that were longer than four characters.
>
> **[1:57](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=117)** And likewise, we could get all of the numbers in our numbers list here that fit some criteria.
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=123)** Let's say all of the numbers that are less than seven.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=128)** All right, just as a quick example here to show you how this would work.
>
> **[2:12](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=132)** In that case, what that would look like is we'd say List<Integer> smallNumbers equals numbers.stream and we use filter again.
>
> **[2:22](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=142)** And we'd say that we want all of the numbers that are less than six and then we'd collect that back into a list.
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=151)** And now if we log out our small numbers list and run our program we're going to see that that contains all of the numbers in our lists that are less than six.
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=164)** And just as one final example with filter, let's say that we wanted to get maybe all of the employees in our list here that make more than a certain amount per year, whose salary is greater than a certain amount.
>
> **[2:57](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=177)** Let's say whose salary is greater than 60,000.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=182)** Well in that case, what we could do, we could say list employee will say something like, wellPaidEmployees equals employees converted to a stream and then say .filter.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=200)** And then in this Lambda function that we pass to filter we could say, employee.salary is greater than 60,000 float.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=213)** And then we'd collect all of those employees into a list.
>
> **[3:36](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=216)** And now if we log our employees out,
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=224)** oops, let's add a two string method to our employee class here
>
> **[3:57](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=237)** just so we can see it get logged out.
>
> **[4:02](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=242)** There we go.
>
> **[4:03](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=243)** And we'll see that this list now contains all employees that are paid over 60,000.
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=252)** And one more thing to note here is that we can actually combine these different manipulation methods that we've been looking at.
>
> **[4:17](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=257)** So for instance, we could filter and then map our data.
>
> **[4:22](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=262)** And that way we could get even more specific with the type of data that we're trying to get.
>
> **[4:27](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=267)** So let's say we only wanted the names of the well-paid employees.
>
> **[4:32](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=272)** Better yet, let's say we wanted only the job titles of all the employees who made over a certain amount per year.
>
> **[4:38](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=278)** What we could do, is we could just say .map after we filter, we could say .map employee and we could simply return employee.jobTitle and this would change to a different kind of list here.
>
> **[4:55](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=295)** This would instead be a list of strings and it would be wellPaidEmployeeJobTitles.
>
> **[5:06](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=306)** And then if we run this again, we'll see only the job titles of the well-paid employees here.
>
> **[5:14](https://www.linkedin.com/learning/data-science-for-java-developers/filtering?u=76281980&t=314)** So anyway, that's just something to keep in mind, so we have map and filter and we can also combine the functionality of the two.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (3), pass (3), function (3), delete (1)
> **Code Identifiers:** collectcollectors (1), tolist (1), smallnumbers (1), wellpaidemployees (1), jobtitle (1)
> **CLI Commands:** make (2)
> **Analogies:** just like (1), for instance (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Collecting
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=0)** - [Instructor] Okay, so we've seen map and filters so far.
>
> **[0:02](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=2)** The next method we're going to take a look at is a method that we've actually seen before and that is this collect method here.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=9)** Cause so far we've been mainly using the collect method almost exclusively in fact, to convert a stream back into a list.
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=19)** But in fact, we can actually use the collect method for a lot of different purposes, depending on what we need it for.
>
> **[0:27](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=27)** So one example of this is instead of converting to a list we could convert our stream to a set.
>
> **[0:34](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=34)** So let's say that instead of having our long words list be a list.
>
> **[0:39](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=39)** We wanted it to be a set.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=41)** We could basically just change that like that.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=45)** And instead of saying collectors.tolist we would say collectors.toset.
>
> **[0:51](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=51)** And just as a side note here the collector's class here has a lot of static methods like this that allow us to really change the functionality of this collect method and the type that it returns.
>
> **[1:03](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=63)** So anyway, that's one way that we can change things.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=67)** So now if we print this out it's not going to look much different, but it is a set.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=70)** So, order isn't going to matter here.
>
> **[1:13](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=73)** And another example here is maybe when we're getting the job titles of all of the employees that make over a certain amount per year.
>
> **[1:21](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=81)** Maybe instead of just having that converted back into a list maybe we want to join those job titles together into a string, separated by something like commas.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=91)** So maybe we're writing data to a CSV file or something.
>
> **[1:36](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=96)** In that case, we could change this from collectors.tolist to collectors dot joining with the string comma space.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=107)** And basically what that would do is that would take all of the job titles here and join them together with this string that we provide.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=115)** And of course in that case this would no longer be a list of strings, this would just be a string.
>
> **[2:02](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=122)** And if we printed that out we would see that now instead of a list, we just have a string that's joined together by commas.
>
> **[2:10](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=130)** And we could always change this as well to something different like that.
>
> **[2:18](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=138)** So there's a lot of different things that we can do with the collectors.
>
> **[2:21](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=141)** The last example I'm going to show you here is collectors dot counting.
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=146)** Basically what collectors.counting is used for, is when we only care to know how many items are in the stream.
>
> **[2:36](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=156)** So in this case here what we'd be doing with collectors.counting is we would be counting how many employees make over this amount per year.
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=164)** So that would kind of make this map thing a little useless.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=169)** And this would instead be an integer and we'd call it something like, how many well-paid employees.
>
> **[3:04](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=184)** And if we print that out and oops, I made a mistake here.
>
> **[3:10](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=190)** That's actually going to be a long, so we'll say long and there we go.
>
> **[3:16](https://www.linkedin.com/learning/data-science-for-java-developers/collecting?u=76281980&t=196)** And now if we run our code, it'll print out simply how many employees were in that stream.

> [!info]- Semantic Content
>
> **Code Keywords:** for. (1), let (1), static (1), case, (1), for, (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)

#### Sorting
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=0)** - [Speaker] So we've covered mapping, filtering, and collecting, and the last method that we're going to cover here that's relevant at this point in the game is the sorted method.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=10)** So, the sorted method is used a lot like filter or map, or collect, it's called on a stream.
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=19)** And what it'll do is, it'll allow us to sort the data in that stream into a different order than we originally had it.
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=28)** So for instance here, our numbers here are already in order.
>
> **[0:30](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=30)** At least, ascending order.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=32)** But we might want to do something like sort our words in our words list alphabetically, or do something like sort our employees alphabetically by name, or sort them by their salary, something like that.
>
> **[0:44](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=44)** Now, the way that we do that again, is using the sorted method.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=48)** And I'm just going to show you what that looks like.
>
> **[0:50](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=50)** So, as our example here, let's say we wanted to sort our employees in ascending order by their salary, what that would look like, we're going to remove this .filter method here and we're going to use the .sorted method.
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=64)** Now, it is possible to just pass .sorted without any arguments, but generally, we'll want to define those arguments, especially when working with objects, and those arguments are going to stand for any two items in the list.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=78)** And basically, what this function that we pass is going to do, is tell Java what order those items should appear in, in the final list.
>
> **[1:29](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=89)** So, generally what that looks like is this, if we want to do, sort our employees by their salary, we would say e1.salary.compareTo, E2, and this is employee one and employee two, by the way.
>
> **[1:42](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=102)** That's why I named those that way.
>
> **[1:44](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=104)** We'd say compare to E2.salary.
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=109)** And then instead of counting here, we'd want to change this back to two list because order matters here, and we're going to change this to a list of employees.
>
> **[2:04](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=124)** And now if we run our program, we're going to see that it prints out our employees in ascending order, by their salary.
>
> **[2:15](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=135)** And one thing, too, is that if we wanted to sort them in descending order, this would look a little different.
>
> **[2:21](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=141)** We would just say E2.salary.compareTo E1.salary.
>
> **[2:27](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=147)** And we could run that.
>
> **[2:30](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=150)** And in that case, it would sort it in descending order.
>
> **[2:38](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=158)** And this, of course, can be combined with the other methods that we've learned about.
>
> **[2:41](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=161)** So for example, it could be combined with map.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=163)** So maybe we want to get the names of the employees sorted in descending order by salary.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=169)** What we could do is we could sort it first, and then we could say .map, and we can map each employee to their name.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=182)** And in that case, this would be a list of strings instead of a list of employees.
>
> **[3:10](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=190)** And this wouldn't be how many well-paid employees anymore.
>
> **[3:13](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=193)** This would be sorted employees and sorted employees.
>
> **[3:22](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=202)** And as we can see, we've printed out the names of those employees sorted in descending order.
>
> **[3:30](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=210)** We could also sort by something other than salary, of course, we could sort by age.
>
> **[3:34](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=214)** So if we wanted to sort our employees in descending age, we could do E2.age.compareTo E1.age and sort them that way.
>
> **[3:43](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=223)** And that would give us their names like that.
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=227)** As you can see, there are quite a few possibilities here.
>
> **[3:50](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=230)** For example, we could use filter as well to get all of the developers here, to get all of the developers from our employees list.
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=238)** So we could say .filter employee, and say employee.jobTitle .equals developer.
>
> **[4:11](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=251)** And if we ran that now, that would give us the names of all of our developers sorted by age, in descending order.
>
> **[4:20](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=260)** So anyway, hopefully you've gotten the sense just from this very brief treatment of these methods of how useful these methods can be in manipulating data.
>
> **[4:30](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=270)** In data science, there are quite a few different situations where the data just isn't quite in the format that we need it to be in, in order to perform some sort of analysis on it or create some sort of model of it.
>
> **[4:43](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=283)** And these methods here can be really, really helpful in those cases.
>
> **[4:49](https://www.linkedin.com/learning/data-science-for-java-developers/sorting?u=76281980&t=289)** Obviously there are a lot more of them as well, but these are the ones that I personally use all the time.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), this, (2), case, (2), let (1), this . (1)
> **Code Identifiers:** compareto (3), jobtitle (1)
> **Analogies:** for example (2), for instance (1)
> **Speakers:** - [speaker] (1)

#### Challenge: Combining data operations
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-combining-data-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-combining-data-operations?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-combining-data-operations?u=76281980&t=5)** - [Instructor] So now that we've learned about some of the most popular data manipulation methods in Java, it's time to do a challenge.
>
> **[0:12](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-combining-data-operations?u=76281980&t=12)** The challenge here is to use the methods we've learned about so far, that is map, filter, collect, and sort to get a list of all the employees names who are over 30 sorted by salary from our original list here.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-combining-data-operations?u=76281980&t=26)** This challenge should take you anywhere from five to about 10 minutes, and once you've given it a try, feel free to go on to the next video where I'll show you how I went about solving this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** try, (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (gentle upbeat music) (1)

#### Solution: Combining data operations
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=0)** - [Instructor] Okay, so what I'm going to do here is walk you through how I went about solving this challenge.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=10)** The first thing I did is I said list strings, since we're going to get a list of the names, and we'll say employee names as the name of the list there.
>
> **[0:24](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=24)** And then we're going to say employees dot stream.
>
> **[0:27](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=27)** And the first thing we're going to do is filter out everybody who's over 30 using the filter function.
>
> **[0:34](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=34)** All right, so we're going to say dot filter.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=36)** And for that, we're going to say employee.
>
> **[0:39](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=39)** And we'll say employee dot age is greater than 30.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=47)** And now that we have all of the employees whose age is over 30, the next thing we're going to do is sort them by their salary.
>
> **[0:53](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=53)** So we're going to say dot sorted, and we're going to say employee one, employee two.
>
> **[0:59](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=59)** And then employee one dot salary dot compare to employee two dot salary.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=67)** And now that we have a list of our employees over 30 sorted by their salary, the last thing we have to do is map that to just their name property.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=76)** So we're going to say dot map.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=78)** And for that, we're going to say employee and map it to employee dot name.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=85)** And finally, we're going to collect it into a list just like that.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=90)** And that should be all we need to do.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=91)** So if we log this out to the console... And run our code... We're going to see that we have our employees who are over 30 sorted by their salary, just their names in this list.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/solution-combining-data-operations?u=76281980&t=111)** So congratulations if you figured that out.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), finally, (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Loading Data in Java

#### Reducing file size
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=0)** - [Instructor] Okay, so we've talked about representing data in Java and we've also talked about some of the different methods that we can use for transforming data.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=8)** So the next thing we're going to learn about is how to actually start loading data into our programs.
>
> **[0:13](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=13)** Now, I think I mentioned previously that the main source of our data, especially in the training phase when we're just kind of getting our hands dirty with data science for the first time is going to be files that we download from the internet.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=26)** Now there's obviously a lot of different formats for these files, they can be in a text file format.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=32)** It can be CSV.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=33)** Sometimes you'll find Excel or JSON files as well.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=37)** So when we locate a file, it's very important that we're comfortable enough loading that data into our Java programs so that we can actually get to the good part which is building models and performing actual data science on that data that we load.
>
> **[0:51](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=51)** So what we're going to look at in the course of this and later videos is we're going to see how to load a few different types of data files into our Java programs.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=62)** The first one we're going to take a look at is how to load text files and just as a side note, you're going to want to make sure that you have these files over here on the left-hand side you should be able to find them in the exercises files.
>
> **[1:15](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=75)** These are just files that I've found on the internet.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=78)** They'll talk a little more detail about where to actually find these things a little later in the course, but make sure you have those.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=85)** And we're going to start off by loading this adult.data file into our program.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=90)** Now if you open it up, you're going to see that it's actually quite a large file.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=94)** It's about four megabytes, more or less.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=97)** And it contains data about adults in the United States.
>
> **[1:41](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=101)** One more thing is that the adult.names file.
>
> **[1:44](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=104)** So the adult.data contains the actual data.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=107)** Their adult.names contains information about the data in that file.
>
> **[1:53](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=113)** And this data is generally very important for you to look at because it contains a lot of sort of metadata about the data that the actual data file is going to contain.
>
> **[2:04](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=124)** So in other words, it tells us, what all of the fields mean.
>
> **[2:06](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=126)** It tells us how each field is formatted.
>
> **[2:10](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=130)** Basically it alerts us to everything that we need to know about the data that we're going to be working with.
>
> **[2:17](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=137)** So take a look through this.
>
> **[2:18](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=138)** and the next thing that we're going to want to take a look at is a way to reduce the amount of data that we're working with at least in the initial phases when we're starting to write a program to load this data because four megabytes does take a little bit of time to load into memory than a Java program and that can be kind of a pain when we're just doing some initial experimentation with our software.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=163)** So one way to do this, I'm just going to show you a little trick that you can use to reduce the amount of data that you're working with, at least in the initial stages.
>
> **[2:54](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=174)** So basically this file that we're looking at contains a different record on each line.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=180)** So what we can actually do is we can use some terminal commands in order to create a smaller version of this file that we can work with initially.
>
> **[3:11](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=191)** So the way that you do that and this is going to be a little different if you're on Windows, the command is going to be different.
>
> **[3:16](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=196)** I recommend that you just look up the equivalent on your own, but on a Mac or on Linux-based systems the command for this is going to be head and then dash a hundred, this is the number of lines that we're getting from the top of the file we're going to be talking about.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=213)** It's head -100 adult.data And then we going to do the greater than sign and we going to say adult-sample.data.
>
> **[3:45](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=225)** And what this command is going to do is it's going to take the first hundred lines of our adult.data file, this big file here.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=232)** and it's going to write those lines to this adult-sample.data file that we're just creating out of thin air basically.
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=240)** And then we're basically going to run our programs on this sample data, which is much shorter, much less cumbersome and once we're able to do that, once we've got our program working, then we can actually use the full data here.
>
> **[4:14](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=254)** And one more thing to note when creating smaller files like this is you want to make sure that the larger file that you're actually taking the data from isn't sorted in any particular way.
>
> **[4:26](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=266)** So for example, what might happen is this might be sorted all by income, for example.
>
> **[4:34](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=274)** This is the income field on our data and what would happen in that case, if we were to actually then turn around and take this sample data and try and perform some data science on it is that our data would actually be very warped since again, it's sorted by basically one of the fields and we'd only be taking the first hundred or so records of that.
>
> **[4:53](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=293)** So we'd be getting a very skewed portion of the data.
>
> **[4:56](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=296)** So that's something to keep in mind when you're reducing data size.
>
> **[5:00](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=300)** Anyway, with all that said, let's hit Enter and that's going to create another file for us.
>
> **[5:05](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=305)** Sometimes you have to wait for this to refresh or click on some stuff to get it to refresh.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/reducing-file-size?u=76281980&t=309)** And we're going to see adult-sample.data appear and we'll see that that only contains a hundred lines now which again is much less cumbersome to work with for our purposes here.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (3)
> **Code Keywords:** this. (1), this, (1), case, (1), let (1)
> **Env Vars:** csv (1), json (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (2)
> **Cross-References:** later in (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)

#### Loading data from text files
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=0)** - [Instructor] Now that we've seen how to shrink this data down to a more manageable size, The next order of business is, we're going to take a look at how to actually load this data into our Java program as well as represent it in code.
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=15)** So the first thing we're going to do here is we're going to create a new class in our project here.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=20)** And we're going to call that class something like TextLoader.
>
> **[0:23](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=23)** Basically this TextLoader class is going to contain some methods for helping us load data from text files.
>
> **[0:31](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=31)** And what we're going to do inside this class is we're going to define a static method.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=36)** We'll call it something like get lines.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=37)** It's basically going to load all of the lines and so it will be returning a list of strings.
>
> **[0:43](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=43)** It'll return all of the lines from whatever file path we give it.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=48)** To show you what I mean, we're just going to say public static List<String> and we'll call this method, getLines and it'll take a string called filename as an argument.
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=64)** That's going to be the name of the file that we want to load the lines from.
>
> **[1:09](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=69)** And next thing we going to do is we're going to say List<String> lines equals new ArrayList.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=76)** So we're just creating an empty array list that we're going to gradually append each line from the file onto.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=84)** And once we've done that we're going to use a buffered reader which is usually the tool of choice for loading lines from a file of some kind.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=91)** So what we going to do we going to use a try with resources blocks.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=94)** So we're going to say try and we're going to say BufferedReader, we'll call it reader equals new BufferedReader.
>
> **[1:44](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=104)** And we're going to use this BufferedReader to wrap a file reader.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=107)** So we're going to say new file reader and we going to pass the file name argument that we passed in here.
>
> **[1:58](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=118)** And once we've done that inside the body of the try block we're going to try and load the line.
>
> **[2:04](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=124)** So remember earlier I talked about how it's important to know how to handle exceptions when some sort of parsing error occurs, something like that and that's why we're using this try block here.
>
> **[2:15](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=135)** So what we're going to do again is we're going to try and load the next line from the file.
>
> **[2:20](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=140)** So we're going to say string line and then we going to say while line is equal to reader.readLine, we're going to check that that is not null.
>
> **[2:35](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=155)** So basically while there's next line what we're going to do is we going to say lines.add and we're going to add that new line to our lines array list here.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=166)** So anyway, that's all we need to put into our try block.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=169)** The next thing we need to do is just add a catch block to this.
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=173)** So we're going to basically say catch exception e and then we're going to say system.out.println and for now we're just going to print the exception.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=186)** Generally, you might want to do something a little more robust than this, but for now this is going to serve our purposes just fine.
>
> **[3:13](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=193)** And we're just going to print out e.getMessage.
>
> **[3:19](https://www.linkedin.com/learning/data-science-for-java-developers/loading-data-from-text-files?u=76281980&t=199)** And then outside our try-catch block, once we have all of the lines, we'll simply going to return those lines from our getLines method here.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), public (1), from. (1), pass (1), this. (1)
> **Code Identifiers:** getlines (2), readline (1), getmessage (1)
> **Speakers:** - [instructor] (1)

#### Creating a person data class
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=0)** - [Instructor] Okay, so now that we've defined this static getLines method in our TextLoader class, let's just test it out by opening up some class with a main method in it.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=10)** And I've created this TextLoading class for this example.
>
> **[0:14](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=14)** And basically, what we're going to do is we're just going to test out to see if this getLines method works like we expect it to.
>
> **[0:22](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=22)** So all we're going to do is we're just going to say List<String> lines = TextLoader.getLines, and we're going to try loading our adult-sample.data file from before.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=37)** All right, so we're going to say adult-sample.data.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=41)** And once we've done that, we're just going to print the data to make sure we're getting all of the lines from the file.
>
> **[0:46](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=46)** So we're just going to say System.out.println(lines).
>
> **[0:54](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=54)** And we're going to run our file here and we'll see that it prints it basically all out on one line, but that's more or less what we're looking for there.
>
> **[1:06](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=66)** Okay, so now that we have our texts loading all of the lines from a file for us, the next thing we have to do is actually parse those lines and create actual people objects in our program.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=78)** So the first thing we're going to do is we're going to create a person data class to hold this data.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=84)** So basically the same thing as we did earlier when we looked at how to format data in our data science programs.
>
> **[1:33](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=93)** So we're going to create a new class here and we'll call that class something like PersonRecord here.
>
> **[1:41](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=101)** And as far as the actual member variables that an instance of this PersonRecord class is going to have, for that we're going to turn to the adult.names file which contains, again, a description of a lot of the different fields that are found inside the data.
>
> **[1:56](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=116)** So, for example, we have age, we have working class, we have employment status, blah, blah, blah.
>
> **[2:01](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=121)** We have a lot of different things that we can take a look at.
>
> **[2:05](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=125)** So what we're going to do, I'm not going to go through and do all of these.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=128)** What I'm going to put in here is just a select few of these.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=131)** So, for example, age, working class, and education, for example.
>
> **[2:19](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=139)** And we can put those into our PersonRecord here.
>
> **[2:22](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=142)** So age is going to be an integer so we'll say public final Integer age.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=149)** We'll have the employment status so that'll be public final String employmentStatus.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=159)** And employment status is going to be this workclass thing by the way.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=163)** I'm just renaming it because, well, we're allowed to do that and employment status makes a little more sense to me personally.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=169)** And we'll just do education here.
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=173)** So we'll say public final String education and then we're just going to generate a constructor for this.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=186)** And we can also generate just a toString method here as well, just so we can see it a little better.
>
> **[3:14](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=194)** There we go.
>
> **[3:17](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=197)** Okay. So we have our person record data class here.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=201)** And the next thing we're going to do is we're going to create a util class to help us actually parse a record like this out of a line that we would find in our text file.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=213)** So we're going to create a new class here.
>
> **[3:35](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-person-data-class?u=76281980&t=215)** We're going to call it PersonRecordUtil, and inside here, we're going to have a public static method that returns a PersonRecord and we're going to call it parsePerson, and we're going to say String dataString.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), class, (3), static (2), let (1), this. (1)
> **Code Identifiers:** getlines (3), employmentstatus (1), tostring (1), parseperson (1), datastring (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **Speakers:** - [instructor] (1)

#### Converting strings to data objects
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=0)** - All right. So now let's actually implement this parse person static method here.
>
> **[0:05](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=5)** So what we're basically going to do this string is going to be one of the lines that we loaded from here.
>
> **[0:11](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=11)** So if you take a look at these here it's basically a comma-separated string.
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=15)** And what we're going to want to do is split this string into basically a list of strings.
>
> **[0:21](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=21)** And then we're basically just going to pull the individual attributes out based on their position in the string, based on their index that is, so what we're going to want to do now is assuming we have the data string which is going to be a line of our text file.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=37)** We're going to start off by saying List String fields = dataString .split and we're going to split it by a comma and we're going to need to do new Array List Arrays.asList since this returns an array of strings instead of a list like we want.
>
> **[1:13](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=73)** And now that we have our array list of fields which is literally just each one of these field values here.
>
> **[1:20](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=80)** So we just have this, this, this et cetera we're going to need to just pull out the exact pieces of data.
>
> **[1:27](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=87)** So for example, the age, employment status and education from our List of fields here.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=94)** So basically what we're going to do is we're going to have a try-catch block here.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=97)** You'll see why in a second we're going to say Integer age = Integer .parseInt.
>
> **[1:45](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=105)** This is why we need the try-catch block in case the age field can't be parsed correctly, right?
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=109)** If someone, for example, put in a letter or accidentally mistyped something we're going to say Integer.parseInt and then we're going to say fields.get and we happen to know that the age is going to be at index zero.
>
> **[2:06](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=126)** So we're going to say get zero.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=128)** So now we have our age.
>
> **[2:09](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=129)** The next thing we're going to get is the employment status.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=131)** So we're going to say, String employment status = fields.get(1) .trim.
>
> **[2:23](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=143)** So we're getting index one which is this right here, and we're trimming it to make sure we remove any unnecessary white space.
>
> **[2:32](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=152)** And last but not least, we're going to get the education.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=154)** We're going to say String education = fields.get and that's going to be index three here.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=163)** So get(3) And we're going to trim that as well.
>
> **[2:47](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=167)** So we have the age, employment status and education now.
>
> **[2:50](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=170)** So the last thing we're going to do is return a new PersonRecord.
>
> **[2:55](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=175)** So we're going to say return new PersonRecord with the age, employment status and education as arguments.
>
> **[3:10](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=190)** And the last thing we're going to do is what happens if for some reason we can't parse one of these things that could in theory happen.
>
> **[3:17](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=197)** Well, basically what we're going to do in that case.
>
> **[3:19](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=199)** We're just going to say catch (Exception e) and we're going to say System.out.println and just print the error message.
>
> **[3:28](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=208)** We're going to just say Exception again this isn't necessarily the best practice but for our purposes right now, it'll work just fine.
>
> **[3:37](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=217)** And then we're going to return null from this function.
>
> **[3:42](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=222)** Okay. So now we have our parse person method.
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=224)** So the last thing we're going to do is we're going to open up our main file here which is TextLoading just for this example.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=232)** And we're going to use that parse person method that we just created to parse each of the lines that were loading from our file and create a lot of person objects for us.
>
> **[4:02](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=242)** So we already have the lines from here.
>
> **[4:05](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=245)** The next thing we're going to want to do is we're going to use the methods that we just learned about.
>
> **[4:09](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=249)** So map is probably the biggest one map and collect to basically create a stream that's going to convert each of these lines into an actual person object or a person record object, that is.
>
> **[4:22](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=262)** So here's what that's going to look like.
>
> **[4:23](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=263)** We're going to say, List<PersonRecord> people = lines.stream.
>
> **[4:31](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=271)** And we're going to say .map.
>
> **[4:34](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=274)** And for each line we're basically going to return PersonRecordUtil .parsePerson called with that line as an argument.
>
> **[4:47](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=287)** And last but not least we're going to use collect to turn this string back into a list.
>
> **[4:53](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=293)** All right? So now we have our people list.
>
> **[4:56](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=296)** The last thing we're going to do is we're just going to print all of these people out to make sure we did the right thing here.
>
> **[5:03](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=303)** Now, in reality here is where you would start creating models or display a graph or something like that.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=309)** But for the time being, we're just going to print this out to the console, since that's all we've seen how to do yet.
>
> **[5:16](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=316)** So we're going to say, people.forEach and what we're going to do is for each person we're just going to say System.out.println(person) so we can see all of them.
>
> **[5:28](https://www.linkedin.com/learning/data-science-for-java-developers/converting-strings-to-data-objects?u=76281980&t=328)** All right. So let's run this file now and sure enough we'll see that all of our people were loaded successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), static (1), case. (1), catch ( (1)
> **Code Identifiers:** parseint (2), datastring (1), aslist (1), parseperson (1), foreach (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Best Practices:** best practice (1)
> **Speakers:** - all (1)

#### Loading tab-separated files
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=0)** - [Instructor] So at this point, we've seen how to basically load data from a text file by getting all the lines and then parsing each of those lines into an actual object.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=10)** We're going to do another example of this just to solidify all the concepts we've covered so far and instead of using the adult data that we've seen we're going to actually use a different data set called auto mpg and basically what this data set includes is data about cars, their model, make year, weight and miles per gallon.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=33)** And you can see all this in the auto mpg.data file and auto mpg.names file, which just like in the adult.names file contains basically all of the relevant information about the data set.
>
> **[0:46](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=46)** So we can see that it's got miles per gallon, it's got the number of cylinders, the displacement, horsepower, weight, its acceleration, model year, et cetera.
>
> **[0:55](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=55)** And you're going to see also that it's warning us that we do have some missing values in our data set here.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=62)** So it says that horsepower has six missing values.
>
> **[1:05](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=65)** So in other words if we want to use horsepower in our calculations we're going to have to keep in mind that six of the data points are going to have a missing value for that and handle that accordingly.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=76)** So if we look at the autompg.data file again, we're going to see that it's much smaller than the adult data file.
>
> **[1:23](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=83)** It's only got close to 400 lines which is fairly small in terms of data set size.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=90)** So we don't need to go through that whole process of only getting the first few lines.
>
> **[1:35](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=95)** So our strategy for doing this, we already have a method for loading all of the lines of a file, right?
>
> **[1:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=101)** We created this get lines method inside our text loader class.
>
> **[1:45](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=105)** So we don't need to worry about getting the lines of the file since we can just reuse this code but we do need to worry about creating a car record data class as well as a util class for actually parsing a car record from just a line of text.
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=123)** So the next thing we're going to do here is we're going to generate two new classes.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=127)** One is going to be called car record and the next one is going to be called car record util and what we're going to do is I'm just going to add a few of the available attributes, I'm just going to do let's say miles per gallon, number of cylinders, displacement and I'll do weight as well.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=149)** You're free to go back through and incorporate all of them if you want.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=154)** So what we're going to do is I'm just going to add public final float mpg.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=163)** If that's going to be a floating point value, we're going to have public final integer number of cylinders, we're going to have public final float displacement and we're going to have public final float weight.
>
> **[3:04](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=184)** And just like before, we're going to generate a constructor for these as well as a two string method just for when we want to print it out to the console,
>
> **[3:23](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=203)** and there we go.
>
> **[3:26](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=206)** So now that we have our car record data class we're going to create a new static method inside our car record util class, very similar to what we did with our person record util class.
>
> **[3:38](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=218)** Basically, we're going to create a parse car method inside of here.
>
> **[3:42](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=222)** So we're going to say public static car record, parse car
>
> **[3:51](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=231)** and it's going to take an argument here.
>
> **[3:53](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=233)** That's a string which is basically going to be the data string, right?
>
> **[3:59](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=239)** The line that we're going to be parsing and creating a car record from.
>
> **[4:03](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=243)** So the first thing we're going to do just like we did an our person record util class is we're going to get a list of all of the fields.
>
> **[4:11](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=251)** So we're going to say list string fields
>
> **[4:19](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=259)** equals new array list, arrays.aslist and then we're going to call data string.split and instead of splitting by a comma like we did with our people records we're going to split this by tab, which is going to look like this, double backslash and then S plus.
>
> **[4:40](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=280)** So we're basically splitting it by white space here.
>
> **[4:44](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=284)** So now that we have the fields, we're going to say try and again, just like we did in our person record util class we're going to take each of the fields.
>
> **[4:54](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=294)** We're going to take a look at the position where we know that value should be, right?
>
> **[4:58](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=298)** The index where we know that value should be and we're going to then use that to create a car record from that data.
>
> **[5:04](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=304)** So we're going to start off by saying float mpg equals float.parseFloat fields.get zero.
>
> **[5:13](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=313)** Since that's at index zero in our parsed string mpg is the first number as we can see right here and right here.
>
> **[5:23](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=323)** And we're going to want to trim that string just to make sure any white space doesn't get in the way and then we're going to parse the number of cylinders so we're going to say integer, number of cylinders equals integer.parseint fields.get
>
> **[5:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=341)** one.trim.
>
> **[5:44](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=344)** Next we're going to get the displacement which is going to be pretty much the same thing.
>
> **[5:52](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=352)** Parse a float from that and that's actually going to be an index two and last but not least, we're going to get the weight which is also a float and that's going to be index four.
>
> **[6:11](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=371)** And once we have all of those, we're going to want to say return new car record and pass this data that we've parsed in as arguments to that.
>
> **[6:21](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=381)** So we're going to say mpg, number of cylinders, displacement and weight.
>
> **[6:28](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=388)** All right, and we're also going to catch any exceptions that occur during parsing.
>
> **[6:33](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=393)** So we're just going to say catch exception E print out that exception
>
> **[6:45](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=405)** and then just return null.
>
> **[6:48](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=408)** Now one thing to note here is that if we had chosen to include the horsepower attribute in our parsing, in our program so far, we would have to keep in mind that it's several of those values are missing.
>
> **[7:04](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=424)** So what we would be doing in the case that we've coded out here is we would simply be leaving those records out.
>
> **[7:10](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=430)** We would be basically returning null instead of returning an actual car record whenever that happened.
>
> **[7:17](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=437)** Now, this is just one of several strategies for dealing with missing values.
>
> **[7:21](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=441)** As I mentioned before, other strategies would be to simply fill in those missing values with whatever the average is or using some other technique to predict what those values might be.
>
> **[7:31](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=451)** We're not going to go into that here but just so you're aware of that fact.
>
> **[7:36](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=456)** All right, so now we have our parse car method created, the last thing we need to do now is actually use that.
>
> **[7:44](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=464)** So inside a new class with a main method, right?
>
> **[7:48](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=468)** I just created a new class called text loading tabs where I'm going to basically do the test code.
>
> **[7:54](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=474)** What we're going to do is we're going to get the lines so we're going to say list string blinds equals text loader.get lines.
>
> **[8:05](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=485)** We're going to get it from the auto-mpg.data file and we need to import this list here.
>
> **[8:14](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=494)** And then we're going to parse all of those lines so we're going to say list car record, cars equals lines.stream and we're going to map each of those lines to an actual car record object.
>
> **[8:30](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=510)** So we're going to say line and we're going to say car record.parse car line.
>
> **[8:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=521)** Oops, that's actually going to be car record util.parse carline and then we're going to collect that all into a list and for now, just like we did with our person record example we're just going to print out all the cars we have just to make sure we everything correctly.
>
> **[8:56](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=536)** So we're going to say for each car just print it out to the console.
>
> **[9:05](https://www.linkedin.com/learning/data-science-for-java-developers/loading-tab-separated-files?u=76281980&t=545)** All right, and let's try running this file and sure enough we'll see that everything was loaded correctly and it's printed out all the car objects that we created to the console here.

> [!info]- Semantic Content
>
> **Code Keywords:** public (5), this, (2), class. (2), let (2), static (2)
> **Analogies:** just like (5), similar to (1)
> **CLI Commands:** make (3)
> **Warnings:** keep in mind (2), warning (1)
> **Code Identifiers:** parsefloat (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Loading CSVs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=0)** - [Illustrator] Okay. So, we've seen how to load data from a comma separated line by line data file, as in the case of our adult data here.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=8)** And we've also seen how to load more of a tab separated or white space separated file, such as in the case of our auto MPG file here.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=17)** So, the last example that we're going to take a look at here, just in terms of how to load data, is how to load CSV files.
>
> **[0:23](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=23)** So, in order to just take a look at what a CSV file is, and how it differs from say the adult data that we looked at beforehand, open up the Groceries dataset.CSV file.
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=35)** So, you're going to notice something about this file, and that is that the actual names of the attributes are included at the top of it, right?
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=41)** That's a pretty standard CSV file format.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=45)** And what we're going to do, is we're going to use a CSV library from the Apache Commons to actually load this data for us.
>
> **[0:55](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=55)** So, the first thing you're going to want to do, is download the Apache Commons CSV library.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=62)** And once you've downloaded that, depending on your IDE, you're going to want to add that library to your project.
>
> **[1:08](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=68)** So, for instance, in IntelliJ, we're going to go into project structure, add a new library, and select from our downloads, the CSV library that we just downloaded.
>
> **[1:27](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=87)** And the next thing to do, is just like we created this text loader class to basically get all the lines of text from a file, we're going to create a CSV loader class, that basically, is going to abstracting away the exact logic and usage of the library that we just installed.
>
> **[1:46](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=106)** This is usually a good practice to do.
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=109)** So, we're going to create a new class called CSV Loader, and hit Enter.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=115)** And basically, inside here, we're going to create a public static method called parse CSV, that's going to basically take care of parsing data from a CSV file for us.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=127)** Okay. So, here's what that's going to look like.
>
> **[2:09](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=129)** We're going to say public static list, CSV record.
>
> **[2:16](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=136)** And this is something from the Apache Commons CSV library that we just added.
>
> **[2:22](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=142)** So, we're going to want to import that as well as list.
>
> **[2:25](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=145)** So, public static list CSV record, and we're going to call this Parse CSV.
>
> **[2:30](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=150)** And what this is going to do, is it's going to take a file name as an argument.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=154)** So, we're going to say string file name, and it's going to basically return, as we've seen here, a list of this CSV record object.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=163)** We'll see in a little more detail how exactly this works very shortly.
>
> **[2:48](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=168)** So, first thing, we're going to create a new list of CSV records.
>
> **[2:54](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=174)** This is going to be what we end up returning at the end of this function.
>
> **[2:57](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=177)** So, we're going to say list CSV records.
>
> **[2:59](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=179)** Records equals new array list.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=182)** Just creating an empty array list there basically.
>
> **[3:05](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=185)** And then we're going to have a try-catch block, and since we are reading a file, we're generally going to want to do that.
>
> **[3:11](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=191)** So, we're going to say, try, and then we'll say reader.
>
> **[3:16](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=196)** Reader equals new file reader.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=200)** And we're going to parse the file name argument that we had up here into there.
>
> **[3:26](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=206)** And the next thing we're going to do, is we're going to create an Iterable.
>
> **[3:30](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=210)** This is just kind of how the CSV library works.
>
> **[3:32](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=212)** We're going to create an Iterable of CSV records, and we're going to call that records Iterable.
>
> **[3:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=221)** Now, what this Iterable is going to be, is it's basically, going to allow us to loop through each of the records, and add them to this records list.
>
> **[3:50](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=230)** So, we're going to say CSV format, and here we have to actually specify the format we're going to be using.
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=238)** So, in our case, that's going to be RFC4180, and then .withFirstRecordAsHeader.
>
> **[4:07](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=247)** Basically, that specifies that the first line of our CSV file is going to be the headers, that is the attribute names.
>
> **[4:16](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=256)** And then we're going to say .parse, and parse reader as an argument.
>
> **[4:21](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=261)** Okay. And now, that we have our Iterable, the next thing we're going to do, is we're going to loop through our Iterable.
>
> **[4:27](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=267)** So, we're going to say, for CSVRecord, record in our records Iterable.
>
> **[4:35](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=275)** Basically, for every record, we're just going to push that onto our records list here.
>
> **[4:40](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=280)** All right. So, we're going to say, records.add record.
>
> **[4:47](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=287)** And then, of course, inside our try-catch block, we're going to have to catch any exception that occurs.
>
> **[4:51](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=291)** For now, we're just going to be very generic about it.
>
> **[4:54](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=294)** We're going to say system.out.println, and we're going to print the exception.
>
> **[5:02](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=302)** And outside the try-catch block, we're just going to return our records list.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=309)** So, just one thing is that you might want to make this a little more robust, so that we don't simply return the records as soon as any kind of error occurs.
>
> **[5:17](https://www.linkedin.com/learning/data-science-for-java-developers/loading-csvs?u=76281980&t=317)** But I'm going to leave that up to you as an independent exercise.

> [!info]- Semantic Content
>
> **Env Vars:** csv (22), mpg (1), ide (1), rfc4180 (1)
> **Code Keywords:** public (3), static (3), class, (1), return, (1), function (1)
> **CLI Commands:** apache (3), make (1)
> **Analogies:** such as (1), for instance (1), just like (1)
> **File Paths:** dataset.csv (1)
> **Code Identifiers:** withfirstrecordasheader (1)
> **Tools:** intellij (1)
> **Exercise Files:** download the (1)

#### Converting CSVs to data objects
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=0)** - [Instructor] So the next step, now that we have our CSV loader and parse CSV functions is to actually create a data class for our grocery records, as well as create a method that will actually take our list of CSV records here and sort of translate that into our data objects.
>
> **[0:18](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=18)** Okay so let's create a new class here.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=20)** We're going to call that something like grocery record.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=26)** And this is going to contain the attributes that we have up here.
>
> **[0:30](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=30)** There are only three in this case.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=32)** So we're going to have member number, date and item description.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=36)** We're going to say public final string member number, public final date, date.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=47)** We're going to have to import date of course, the one from Java.util in case that gives you the option.
>
> **[0:53](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=53)** And then we're going to say public final string item description.
>
> **[1:01](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=61)** And we're going to generate a constructor for that as well as a two string method.
>
> **[1:11](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=71)** Okay, so implementing that data class was fairly straightforward.
>
> **[1:14](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=74)** The last thing we need to do now is we need to create a util class with a method that will actually translate a CSV record into a grocery record here.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=84)** All right, so we're going to create a new class.
>
> **[1:26](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=86)** We're going to call it grocery record util.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=90)** Inside there we're going to create public static method which is going to return a grocery record.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=97)** And we're going to call this parse grocery record and it's going to to take a CSV record as an argument.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=107)** And there we go.
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=109)** So we're going to have a try-catch block here because we're all going to be doing a little bit of parsing.
>
> **[1:53](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=113)** So we're going to start off by saying string member number and the member number here, just to point out a little bit how this data is formatted in the groceries data set, the member number is basically a unique identifier for the person who's buying this.
>
> **[2:10](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=130)** So essentially the idea is, that if we were going to do a little bit of data science on this we'd be able to see who bought similar items and when they bought them and try and use that to make predictions about who was going to buy what.
>
> **[2:25](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=145)** So anyway, back to our parse grocery record method we're going to say string member number equals.
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=151)** And the way that CSV records work is instead of us having to know the exact index that something is at we can get the data by this heading at the top.
>
> **[2:41](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=161)** In other words, in order to get the member number we can say record.get with the string member underscore number.
>
> **[2:51](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=171)** So we're getting their member number like that.
>
> **[2:54](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=174)** Next thing we're going to say date, date equals, and we're going to have to parse the date that we're getting out of here.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=182)** So we're going to have to say new simple date format and the format of the dates and our groceries data set is the day, the month and the year.
>
> **[3:15](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=195)** So we're going to say day, day, month, month, year, year year, year, and then we're going to say .parse and we're going to parse record .getdate.
>
> **[3:28](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=208)** All right so remember that date is the header at the top of the middle column here.
>
> **[3:36](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=216)** And then last but not least we're going to get the item description which is going to be a string itself.
>
> **[3:40](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=220)** So we're going to say string item description equals record.get.
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=227)** And the header for that is item description in Camel case.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=232)** And one thing to notice here as well is that the headers are not all necessarily in the same format.
>
> **[3:57](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=237)** Chances are that's because this data set came from several different departments, each of which had their own sort of standards for doing so.
>
> **[4:06](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=246)** So that's one of the slightly annoying things that you'll find as you're working with real world data sets as well which I think I've said before is that the data isn't always in the format or standards that you're used to.
>
> **[4:18](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=258)** So there's generally going to be quite a bit of conversion that you have to do yourself in your programs.
>
> **[4:25](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=265)** Okay, so now that we have the member number date and item description, we're going to create a new grocery record object.
>
> **[4:32](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=272)** So we're going to say return new grocery record with the member number, date and item description just like that.
>
> **[4:44](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=284)** And we need to catch any exceptions that occur which we're just going to do in a very generic way.
>
> **[4:48](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=288)** Like we've been doing, system out, print line exception exception.get message, and return null.
>
> **[5:01](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=301)** All right so now that we have our parse grocery record method completed, the last thing we're going to do is actually see this in action.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=309)** So I created a new class for this example called CSV loading, which we're going to use here.
>
> **[5:16](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=316)** And we're basically just going to start off by loading the CSV file and to do that we're going to use our CSVloader.parseCSV method.
>
> **[5:27](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=327)** So we're going to say list CSV record records equals CSVloader.parseCSV
>
> **[5:42](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=342)** and the name of our file, which is going to be groceries underscore dataset.CSV.
>
> **[5:49](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=349)** And once we've got our list of CSV records we're going to say list grocery record.
>
> **[5:59](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=359)** And we're going to say grocery records equals.
>
> **[6:03](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=363)** And what we're going to do is we're going to take this list of CSV records and map it to a list of grocery records.
>
> **[6:09](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=369)** All right, so we're going to say grocery records equals records.stream.map, we're going to map each record to grocery recordutil.parse grocery record, record.
>
> **[6:28](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=388)** And we're going to to convert that into a list and that should be it.
>
> **[6:32](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=392)** So let's just print this out just like we've done with our other ones.
>
> **[6:35](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=395)** We're going to say grocery records.forEach
>
> **[6:44](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=404)** and for each record we're just going to print that.
>
> **[6:50](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=410)** And that should be it.
>
> **[6:51](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=411)** So let's run our code now.
>
> **[6:58](https://www.linkedin.com/learning/data-science-for-java-developers/converting-csvs-to-data-objects?u=76281980&t=418)** And we should see that everything runs correctly and we see that our grocery records get printed out just like we want them to.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), let (3), case. (2), class. (1), static (1)
> **Env Vars:** csv (12)
> **Code Identifiers:** parsecsv (2), foreach (1)
> **Analogies:** just like (3)
> **CLI Commands:** make (1), find (1)
> **File Paths:** dataset.csv (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Manipulating data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-manipulating-data?u=76281980)

#### Solution: Manipulating data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=0)** (soft music)
>
> **[0:05](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=5)** - [Instructor] Okay, so I'm going to walk you through how I went about solving this problem.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=9)** As I mentioned in the challenge video.
>
> **[0:11](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=11)** the first thing that I did was get a list of all of the unique memberNumbers and the way that I did that, looks something like this.
>
> **[0:23](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=23)** I started off by saying List<String> allMemberNumbers equals and then I said, groceries.stream and then I used map to map each grocery record to its memberNumber.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=41)** So I said, grocery.memberNumber.
>
> **[0:46](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=46)** And finally I said .collect and then collectors.toSet because sets in JavaScript ignore duplicates.
>
> **[0:56](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=56)** So that's very useful for helping us remove the duplicate memberNumbers in our data set.
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=64)** Now, since this is a set, what we had to do then since we want it to be a list format as you'll see later on is we had to say new array list and convert this set into an array list.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=82)** So now that we have a list of all of our memberNumbers the next thing I did is looped through each of those unique memberNumbers and filtered out all of the records corresponding to that memberNumber.
>
> **[1:33](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=93)** So here's what that looked like.
>
> **[1:35](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=95)** I first started off by creating an empty map.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=98)** This is the map that we're going to return, so I said, map string and list grocery record.
>
> **[1:45](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=105)** And I called this groceryRecordsByMember and I started off as a new HashMap.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=115)** And the next thing I did is I looped through all of these memberNumbers here that we got, all of the unique memberNumbers.
>
> **[2:01](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=121)** So I said for string memberNumber in allMemberNumbers and then I said, list groceryRecord and said memberRecords equals groceries.stream and then I used the filter function to get only the records that corresponded to this individual memberNumber.
>
> **[2:32](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=152)** All right, so I said filter grocery grocery.memberNumber is equal to memberNumber.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=163)** And then I converted this into a list.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=166)** And finally, once we have the corresponding records for an individual member the last thing I did is said groceryRecordsByMember.put and for the key here, I put the memberNumber and for the value I put the corresponding records for that number.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=186)** And then let's return our groceryRecordsByMember map.
>
> **[3:11](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=191)** And that's all there is to it.
>
> **[3:13](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=193)** So let's go back here and run this code and see if it works.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=200)** And sure enough if you just scroll through, you'll see that this is indeed a map that maps each individual memberNumber to all of that members purchases each of which is a grocery record.
>
> **[3:34](https://www.linkedin.com/learning/data-science-for-java-developers/solution-manipulating-data?u=76281980&t=214)** And congratulations, if you figured this out.

> [!info]- Semantic Content
>
> **Code Identifiers:** membernumber (9), membernumbers (6), groceryrecordsbymember (3), allmembernumbers (2), toset (1)
> **Code Keywords:** let (2), this. (1), return, (1), function (1), finally, (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (soft music) (1)


### 5. Data Visualization with JavaFX

#### Setting up JavaFX
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=0)** - [instructor] Okay, so at this point in the course, we've seen not only how to represent data in our programs, but also how to load it and manipulate it.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=8)** That's kind of what we've been covering in the past few chapters.
>
> **[0:12](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=12)** And the next thing that I want to take a look at is how to actually visualize data.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=17)** Now, obviously, data visualization is a very important part of data science since when we ran our programs from before.
>
> **[0:25](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=25)** So let's say we run our CSV loading program from before.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=29)** We're going to see, of course, that the data that it outputs is really sort of difficult for humans to look at, right, it's hard for us to really tell what's going on just by looking at data in this kind of format.
>
> **[0:44](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=44)** And similarly, if we were to run our text loading program from before, it's pretty hard for us to tell what's going on in the data that we're looking at here.
>
> **[0:54](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=54)** So one thing that we're going to take a look at now is how to actually represent our data visually in Java.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=62)** And to do this, we're going to be using a very popular library called Java FX, which you can get from this link here.
>
> **[1:08](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=68)** And what you're going to want to do first of all, if you don't have this added to your IDE as a library, which I'm going to assume you probably don't yet is you're going to want to download the Java FX SDK from this website.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=82)** So I'm going to download the one for Mac, you're going to want to download whichever one corresponds to your operating system, you're going to want to download the SDK.
>
> **[1:32](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=92)** And that should put that zip file in your downloads folder.
>
> **[1:36](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=96)** And once you've downloaded it, you're going to want to expand it just so we can get into it and add it to our IDE.
>
> **[1:43](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=103)** So the next thing we're going to do, once we've done that is we're going to create a new file in our source here, we're going to say new, and we're actually going to go down here to Java FX application.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=115)** So an application is kind of the entry point, if you will, for the Java FX, this is basically what runs our code and displays a window that the user can look at.
>
> **[2:05](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=125)** So this is basically what we're going to be rendering our graphs and other things inside of.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=131)** Okay, so we're going to come up with a name for it.
>
> **[2:14](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=134)** Since the first thing we're going to be seeing how to do is display a scatter plot of data, we're going to call this Java FX application scatter plot.
>
> **[2:24](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=144)** And we're going to say OK, and we're going to see that'll create a file for us here called scatter plot.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=149)** And that some of the things are highlighted in red, which is mostly because we haven't actually added the Java FX library that we just downloaded to our IDE here, right.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=159)** So it doesn't really know where to find these classes yet.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=163)** And in order to do that, there are a few steps that we have to walk through.
>
> **[2:47](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=167)** The first thing we have to do now, first of all, I'm using Intelli J.
>
> **[2:51](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=171)** So if you're using a different IDE your process is going to be different than this.
>
> **[2:56](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=176)** But if you are using Intelli J, the first thing you're going to do is go up here to project structure.
>
> **[3:03](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=183)** You're going to go to libraries.
>
> **[3:05](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=185)** And then you're going to click the plus button up here.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=188)** Click on Java.
>
> **[3:11](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=191)** And you're going to go to downloads and inside this Java FX SDK thing that we unzipped, you're going to select lib.
>
> **[3:19](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=199)** And you're going to click on open.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=201)** And that's basically going to add the Java FX library to our project.
>
> **[3:25](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=205)** So once we've done that, we're going to click OK.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=209)** And once we've done that, we should see that our imports are now correctly added.
>
> **[3:34](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=214)** There's nothing highlighted in red anymore, basically.
>
> **[3:38](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=218)** However, there is one more thing that you'll most likely have to do in order for everything to run smoothly.
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=224)** And that is you need to go to run.
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=227)** Again, this is all specific to Intelli J, you're going to have probably a slightly different variation if you're using a different IDE.
>
> **[3:55](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=235)** And you're going to go to run and then edit configurations.
>
> **[4:03](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=243)** And you're going to want to make sure your scatterplot is selected over on the left hand side here.
>
> **[4:08](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=248)** And in the VM options for that you're going to want to add the following string you're going to say dash dash module dash path.
>
> **[4:16](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=256)** And then you're going to have the path to that Java FX library folder that we just added to our project settings.
>
> **[4:23](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=263)** So for me, that's going to be this user's Sean W, slash Java FX SDK 11 point 0.2 slash lib.
>
> **[4:37](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=277)** Alright, and yours might be a little different depending on the name there.
>
> **[4:41](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=281)** Actually, if you want to double check that what you can do is go into whatever folder this thing is in, and right click and click Get Info.
>
> **[4:52](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=292)** And you should be able to see the path for the file there.
>
> **[4:55](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=295)** So for me, it's just slash users slash Sean W slash downloads.
>
> **[5:02](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=302)** So actually, I typed it wrong.
>
> **[5:04](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=304)** (keyboard chattering) Good thing I checked.
>
> **[5:07](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=307)** And once you've got that, there's one more thing you're going to need to add after that which is dash dash, add dash modules, Java FX dot controls comma Java FX dot F XML.
>
> **[5:25](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=325)** And once you've got that, you're going to click on OK.
>
> **[5:28](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=328)** And that should be all we need to do for now.
>
> **[5:30](https://www.linkedin.com/learning/data-science-for-java-developers/setting-up-javafx?u=76281980&t=330)** We may have to go back and make some adjustment later on if something's not working, but that generally makes everything work just fine.

> [!info]- Semantic Content
>
> **Env Vars:** ide (5), sdk (4), csv (1), xml (1)
> **UI Navigation:** go to (4), click on (3)
> **Code Keywords:** let (1), this, (1), new, (1), this. (1), module (1)
> **Exercise Files:** download the (3), zip file (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 0.2 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Formatting data for a scatterplot
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=0)** - [Instructor] Okay, so now that we have our project set up to allow us to run JavaFX programs, the next thing we're going to do is we're going to actually build our scatter plot.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=10)** So what we're going to be doing basically is we're going to be taking the data from inside our auto miles per gallon folder here, and we're going to be displaying this data on a scatter plot.
>
> **[0:22](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=22)** Namely, what we're going to be doing is we're going to be selecting like two different attributes, say miles per gallon and weight, for example, and we're going to be basically displaying those on a scatter plot to see if we can visually recognize any patterns.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=36)** Because right now, unless you're some sort of superhuman, chances are you can't really see any relationships between all of these numbers just by scrolling through and taking a look at it.
>
> **[0:46](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=46)** You might be, if you had a few hours, you might be able to start recognizing some patterns, but generally, representing this stuff visually is much more powerful since we can instantly see in several milliseconds anything that's going on with the data.
>
> **[1:03](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=63)** So we're going to be displaying this in a scatter plot.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=67)** And the way we're going to be doing that, you may have noticed that when we generated this JavaFX application, we got a class that extends an application class.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=76)** So the application class is basically what's in charge of displaying a window, right, an independent window that we can render graphics into in a Java program.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=85)** Many of you are probably familiar with this from other projects you've worked on.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=91)** So a class that extends an application has two main methods that are going to be important to us.
>
> **[1:36](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=96)** The first is the main method, right, Which basically just calls launch.
>
> **[1:40](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=100)** Launch basically just launches the application for us.
>
> **[1:43](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=103)** That's usually all the main method does here, aside from some other initial setup or other stuff like that.
>
> **[1:52](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=112)** Now where we're going to be spending a lot of our time and writing most of our code is going to be in this start method.
>
> **[1:58](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=118)** Basically the start method is called when our application first starts up.
>
> **[2:02](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=122)** Makes a lot of sense, right?
>
> **[2:04](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=124)** So in here is where we're going to be defining our scatter plot, adding data to it, loading data from the file, and finally rendering everything to the screen.
>
> **[2:15](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=135)** So just follow along with me while I type out the code for this to display a scatter plot.
>
> **[2:21](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=141)** So the first thing we're going to do is we're going to load the data from our auto MPG dot data file.
>
> **[2:27](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=147)** And to do that, it's going to be pretty similar to what we saw in our text loading tabs class here.
>
> **[2:33](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=153)** The example that we did a little while ago.
>
> **[2:36](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=156)** What we're going to do is we're basically going to start off by getting the lines from this auto MPG dot data file.
>
> **[2:42](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=162)** All right, so we're going to say list string lines equals, then we're going to have to import list.
>
> **[2:50](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=170)** We're going to say equals text loader dot get lines from auto dash MPG dot data.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=180)** And once we have the lines, we're going to map these lines to actual car records, right?
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=186)** Remember we created the car record class earlier as well.
>
> **[3:09](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=189)** We're going to say list car record cars equals lines dot stream.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=200)** And then we're going to use map to map each of the lines to an actual car record.
>
> **[3:24](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=204)** So we're just going to say the line car record util dot parse car line.
>
> **[3:35](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=215)** And we're going to collect that back into a list.
>
> **[3:39](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=219)** So we have our list of cars at this point, and this is where we stopped, pretty much, in the text loading tab, right, we just printed out all of our car record objects to the console.
>
> **[3:48](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=228)** But here's where things actually start to get interesting because what we're going to need to do is we're going to need to a, decide what attributes we actually want to graph from our cars, right?
>
> **[3:59](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=239)** What attribute we want to be the Y axis, what attribute we want to be the X axis.
>
> **[4:05](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=245)** And we're going to need to use map to basically get the data into the proper format.
>
> **[4:10](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=250)** This is where you're going to be happy that you learned about the different ways of manipulating data using map and filter, those kind of things.
>
> **[4:18](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=258)** So I'm just going to start typing out the code and I'll explain what I'm doing as I'm doing it.
>
> **[4:22](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=262)** The first thing we're going to do is we're going to say list float X values.
>
> **[4:28](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=268)** So these are going to the X values of all the points that we put on our scatter plot.
>
> **[4:33](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=273)** And in order to get those, what we're going to do is we're going to take our cars, then we're going to map them to their weight.
>
> **[4:41](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=281)** So in other words, weight is going to be along the X axis.
>
> **[4:45](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=285)** All right, so we're going to say cars dot stream, and then we're going to say map, and we're going to map each car to its weight, so car dot weight.
>
> **[4:56](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=296)** And then we're going to collect that into a list.
>
> **[4:59](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=299)** So we have our X values now, the next thing we're going to do is we're going to get our Y values.
>
> **[5:03](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=303)** So what we're going to do in this example is we're going to see how the car's weight is correlated to the car's miles per gallon value.
>
> **[5:12](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=312)** So you might know just off the top of your head that a car having a higher weight usually means that it gets lower miles per gallon.
>
> **[5:19](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=319)** It's less efficient, generally.
>
> **[5:22](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=322)** But, the whole point of this exercise is we want to be able to see that visually if that assumption holds up with our data set.
>
> **[5:29](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=329)** So what we're going to do is we have weight as the X values.
>
> **[5:34](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=334)** And the next thing we have to do is get the Y values, which is going to be the miles per gallon attribute of all of our cars.
>
> **[5:43](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=343)** So we're going to do the same thing that we did with our X values, we're going to say cars dot stream dot map, and we're going to map each car to car dot MPG, and collect it into a list.
>
> **[5:58](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=358)** Okay, so now that we have the data that we actually want to display on our graph, the next thing we're going to do is we're going to actually start defining the graph we want to display.
>
> **[6:10](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=370)** So the way we do this in JavaFX is we start off by creating two number axis objects.
>
> **[6:17](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=377)** So we're going to say number axis, X axis equals new number axis, and number axis, Y axis equals new number axis.
>
> **[6:33](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=393)** And once we've created those two number axis objects, the next thing we're going to do is we're going to add labels to each of the axes.
>
> **[6:41](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=401)** So we're going to say X axis dot set label.
>
> **[6:46](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=406)** And remember that the X axis is going to be weight.
>
> **[6:50](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=410)** So we're going to say set label to weight, and the Y axis is going to have its label equal to MPG.
>
> **[7:01](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=421)** And now that we have those two axes defined and labeled, the next thing we're going to do is we're going to define a scatter chart object.
>
> **[7:12](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=432)** This is the class that we generally use in JavaFX for displaying scatter plots like we're doing in this case.
>
> **[7:18](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=438)** So we're going to say scatter chart, and we're plotting a number and a number.
>
> **[7:25](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=445)** And we're going to call this chart scatter chart.
>
> **[7:28](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=448)** And we're going to say equals new scatter chart.
>
> **[7:34](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=454)** And we passed the X axis and the Y axis to the constructors.
>
> **[7:38](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=458)** Now, if this seems like a lot of steps to you, or if it doesn't really make sense what we're doing, don't worry too much about it.
>
> **[7:44](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=464)** This is really just the steps that we generally have to follow when displaying.
>
> **[7:48](https://www.linkedin.com/learning/data-science-for-java-developers/formatting-data-for-a-scatterplot?u=76281980&t=468)** And you'll see when we look at other kinds of graphs that these same steps generally hold true as well.

> [!info]- Semantic Content
>
> **Env Vars:** mpg (5)
> **Code Keywords:** extends (2), class. (1), case. (1)
> **Definitions:** is called (1), in other words (1), means that (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Displaying a scatterplot
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=0)** - [Instructor] All right, and now that we have our scatter chart, what we're going to need to do is add all of the data points that we have up here to it.
>
> **[0:07](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=7)** And the way that we have to do that generally with JavaFX is we have to first add all of this data to something called a series, which is basically just a collection of data points.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=17)** And then we add that series to the chart.
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=19)** So that might seem a little confusing, but basically, that's the way it is.
>
> **[0:25](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=25)** So what this is going to look like is we're going to say Series.
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=28)** We'll call it dataPointSeries.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=32)** And we're going to say equals new Series.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=37)** And if you don't want to have this XYChart.Series thing before it, basically what you can do is just say Series and remove that.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=49)** There we go.
>
> **[0:50](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=50)** All right, so now that we have the series, we're basically going to need to loop through all of our data points here and add those to this Series.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=58)** So here's what that's going to look like.
>
> **[0:59](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=59)** There are a lot of different ways that we could possibly do this, but really, probably the most straightforward way that most of you will understand is using a for loop.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=67)** So we're just going to start off by saying int i = 0, i < cars.size, and i++.
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=77)** All right, and then what we're going to do is we're going to loop through all of these x and y values and add them to this dataPointSeries.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=84)** So basically, for each of those, we're going to say Data, and I'm going to have to add that up here because my IDE doesn't want to import that without me doing it manually, for some reason.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=97)** So we're going to say Data newDataPoint = new Data with the x and y value that we want.
>
> **[1:46](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=106)** So for our case, that's going to be xValues and yValues at this corresponding index.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=111)** So we're going to say xValues.get i, and yValues.get i.
>
> **[2:00](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=120)** And then we're going to say dataPointSeries.getData .add, and we're going to add that newDataPoint that we just created to that series.
>
> **[2:13](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=133)** So once this loop completes, we're going to have all of the data points added to this dataPointSeries.
>
> **[2:18](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=138)** And what we can do then is we can add this dataPointSeries to the scatterChart object.
>
> **[2:25](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=145)** So what that's going to look like is we're going to say scatterChart.getData .add, and we're going to add dataPointSeries to it.
>
> **[2:37](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=157)** And last but not least, let's add a title and just take care of some other visual settings on this chart.
>
> **[2:42](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=162)** So the first thing, adding a title to our scatter chart is pretty simple.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=166)** We can just say scatterChart.setTitle, and we'll say something like Weight vs. Mileage.
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=173)** And let's hide all of the grid lines just to make it a little easier to look at by saying scatterChart.setHorizontalGridLinesVisible false, scatterChart.setVerticalGridLinesVisible false, and scatterChart.setHorizontalZeroLineVisible to false as well.
>
> **[3:16](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=196)** That just makes it a little easier to read.
>
> **[3:19](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=199)** And now that we have our scatter chart all set up with all of the data that we've done, the next thing we need to do is we just need to say Scene scene.
>
> **[3:30](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=210)** All right, we're creating a scene object and we're basically going to add this scatterChart to that.
>
> **[3:35](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=215)** So we're going to say Scene scene = new Scene scatterChart.
>
> **[3:42](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=222)** And the size here, we can basically choose whatever we want it to be.
>
> **[3:46](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=226)** We'll just say something like 900 by 1000, something like that.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=232)** And then what we're going to do is use this stage object, this primaryStage object that was up here as an argument, and we're going to say primaryStage.setScene and we're going to set it to that new scene object we just created.
>
> **[4:09](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=249)** And then say primaryStage.show.
>
> **[4:14](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=254)** So if we did everything right, which hopefully we did, we can always go back and fix a few things if we didn't, we should be able to run our scatterplot program and see it rendered in its own window.
>
> **[4:27](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=267)** And sure enough, there we go.
>
> **[4:29](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=269)** We see that we're rendering weight versus mileage.
>
> **[4:32](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=272)** We have weight here, and we can see pretty clearly just by looking at this that as weight goes up, mileage tends to go down.
>
> **[4:41](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=281)** We can see the correlation between those two variables just by looking at this graph.
>
> **[4:45](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=285)** So the point of all of this anyway is just to show you the power of being able to visualize your data because even though, as I said before, mileage tends to go down as weight tends to go up, there can be instances when our assumptions about what a given data set might be doing are not actually what we end up finding out once we can look at it, right?
>
> **[5:08](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=308)** We might see, "Oh, hey, wow, this data set contains data that does something that's way different than I thought it would be."
>
> **[5:15](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-scatterplot?u=76281980&t=315)** So it helps a lot to be able to visualize your data, and hopefully you find the scatterplot to be a pretty helpful tool in that.

> [!info]- Semantic Content
>
> **Code Identifiers:** scatterchart (8), datapointseries (6), primarystage (3), newdatapoint (2), xvalues (2)
> **Code Keywords:** let (2), this, (1), case, (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** ide (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Multiple datasets on a scatterplot
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=0)** - [Instructor] Okay, so now that we've seen how to display a basic scatter plot, there's one more thing I want to show you that's going to come in handy later on when we start actually building our own classifiers.
>
> **[0:11](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=11)** And that is how to display two different types of data on the same scatter plot, all right.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=17)** So let's say maybe that we wanted to label all of our data points here as either cars that were built before a certain year, or cars that were built after a certain year.
>
> **[0:25](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=25)** And we wanted to display them with a different color on the graph.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=29)** So if we run it right now, it's all the same color.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=33)** But let's say we wanted to see visually whether there's really a difference in weight versus mileage, depending on the year that the car was built in.
>
> **[0:42](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=42)** Well, as a matter of fact, JavaFX will largely do this for us.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=47)** All we really have to do is divide our car data into two different lists basically, and then add those lists to separate series.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=58)** And then when we add each of the series to our scatter chart, it will automatically apply a different coloring in a different icon to the data points in each of those series.
>
> **[1:11](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=71)** So let me show you what I mean.
>
> **[1:12](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=72)** We're going to start off, and we're actually going to go about this in a slightly different way.
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=77)** And if we take a look at the .names file of our auto-mpg.data, we're going to see that we have this model year here which is data point number seven.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=85)** So if you go into auto-mpg.data, we're going to see that's, this right here.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=91)** So we can see that we have model years going from about 1970 all the way through 1982.
>
> **[1:42](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=102)** So the cars in this data set are undoubtedly a little bit old.
>
> **[1:48](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=108)** But regardless, let's pick a point somewhere in the middle, let's say around 1976.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=115)** And we'll say that all cars made in 1976 and before, full assign one color to it, and all cars made after 1976, we'll display those as a different color.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=128)** So basically, what we're going to do is inside here we're going to take our cars, and we're going to use the filter function to basically divide our cars into two different groups.
>
> **[2:19](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=139)** So we're going to say, "list<CarRecord> olderCars = cars.stream," and then we're going to say, ".filter," and we're going to filter based on whether or not the cars' year is less than or equal to 76.
>
> **[2:36](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=156)** Now, first of all, currently our car record doesn't actually have a year variable.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=163)** So we're going to have to add that.
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=164)** We're going to say, "public final Integer year."
>
> **[2:52](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=172)** We're going to add that to the constructor.
>
> **[2:55](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=175)** So this.year = year, add Integer year.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=182)** And we can add that to the two string method if we want, but I'm just going to leave it.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=186)** And then we're going to go into CarRecordUtil, and we're going to parse out the year as well.
>
> **[3:14](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=194)** So we're going to say, "Integer year = Integer.parseInt fields.get, and this is going to be index 6" .trim," and we're going to pass that right here.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=213)** So now that we've added that, basically we're going to say, "filter if car.year is <= 76."
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=224)** All right, then we're going to collect it, and we're going to do the same thing with newer cars.
>
> **[3:49](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=229)** All right, so I'm going to copy and paste this.
>
> **[3:51](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=231)** We're going to say, "newerCars" and for the filter, we're going to say, "car.year > 76."
>
> **[4:01](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=241)** So this should give us two different lists: one with cars built after 1976, and one with cars built before and including in 1976.
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=252)** So now what we're going to do is instead of getting the separate X values and Y values here, we're actually going to take a slightly different technique.
>
> **[4:22](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=262)** What we're going to do is we're going to say, "olderCars.forEach" and for each older car, basically what we're going to do is we're going to add that car's data to a series.
>
> **[4:39](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=279)** So I'm going to move this up here.
>
> **[4:42](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=282)** We're going to paste it, and we're going to call it olderCarSeries.
>
> **[4:48](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=288)** And for all of the older cars, we're going to say, "olderCarSeries.getData .add," and we're going to say, "new Data," and for the X value here, we're going to say, "car.weight," and for the Y value, we're going to say, "car.mpg."
>
> **[5:12](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=312)** So that's a little easier than doing everything this way, isn't it?
>
> **[5:16](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=316)** And we can remove this for loop here as well.
>
> **[5:20](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=320)** And we're going to do the same thing for the newer car series.
>
> **[5:24](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=324)** We're basically going to do the exact same thing.
>
> **[5:26](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=326)** We're just going to change this to newerCarSeries, newerCarSeries, and newerCars.forEach.
>
> **[5:41](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=341)** And then we just need to add both of those series to our scatter charts.
>
> **[5:44](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=344)** So we're going to say, "olderCarSeries and scatterChart .getData.add newerCarSeries."
>
> **[5:54](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=354)** And that should be all we need to do.
>
> **[5:56](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=356)** So if we stop replication and run it again, we can see that our data points are now different colors depending on the weight.
>
> **[6:04](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=364)** And we can also see just by looking at it briefly that this data set, which is the newer cars, the yellow boxes here, tends to have higher mileage.
>
> **[6:14](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=374)** So that would suggest that there is a correlation between cars being newer and cars having higher miles per gallon.
>
> **[6:21](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=381)** So anyway, that's just an interesting tool to be able to use.
>
> **[6:24](https://www.linkedin.com/learning/data-science-for-java-developers/multiple-datasets-on-a-scatterplot?u=76281980&t=384)** It can be very useful a lot of the time to be able to see the difference between two sets of data points so that we can look at them and examine them more visually.

> [!info]- Semantic Content
>
> **Code Identifiers:** oldercarseries (3), newercarseries (3), oldercars (2), newercars (2), foreach (2)
> **Code Keywords:** let (5), this. (2), function (1), public (1), pass (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Calculating average MPG
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=0)** - [Instructor] Okay, so we've seen how to display data on a scatterplot.
>
> **[0:03](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=3)** And the next thing we're going to do is take a look at a slightly different way to display data.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=9)** There's obviously a lot of different charts, a lot of different graphs that we can use to visualize our data.
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=15)** So let's take a look at how to display bar charts in Java FX.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=20)** So let's go over here and create a new Java FX application.
>
> **[0:24](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=24)** And we're going to call this one bar graph.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=29)** All right, and it's going to look just like what our scatterplot application looked like before.
>
> **[0:34](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=34)** So for this one, what we're going to do is we're basically going to load all of the car data again.
>
> **[0:40](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=40)** So basically what I'm going to do is just go in and copy and paste that from our scatterplot application.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=48)** Just copy those two statements there.
>
> **[0:50](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=50)** Paste it, and what we're going to do, why don't we just see how the average miles per gallon compares between cars with four cylinder engines, six cylinder engines, and eight cylinder engines.
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=64)** That's a generally a good use case for a bar chart and basically what it can show us.
>
> **[1:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=71)** In order to figure out the average miles per gallon for a group of cars, we're going to need to first divide our cars into several groups.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=82)** Alright, and our car record data object already has a number of cylinders properties so we don't need to add that.
>
> **[1:28](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=88)** And what we're going to do is we're going to say list car record, four cylinder cars equals cars.stream.
>
> **[1:41](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=101)** And we're going to filter those out based on whether the cars number of cylinders property is equal to four.
>
> **[1:50](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=110)** And we're going to do the exact same thing for six cylinder and eight cylinder cars as well.
>
> **[1:59](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=119)** Alright, so we're going to change this to six cylinder.
>
> **[2:02](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=122)** Change that to six.
>
> **[2:05](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=125)** And we're going to change this to eight cylinder and change that to eight.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=131)** Okay, so we have our different groups of cars now, that was pretty straightforward.
>
> **[2:16](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=136)** And what we need to do is calculate the average of all of the cars in each of these groups, alright.
>
> **[2:22](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=142)** So we could do that right inside of here, but generally, when we have some use case like that, what I tend to do is add a new static method to our car record util class or whatever the corresponding util class for a given data class is.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=159)** So in our case, what we might want to do is add a static method, public static float.
>
> **[2:47](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=167)** Since this is going to be returning a float, call it get average MPG, and it's basically going to take a list of car records and return the average miles per gallon for all of those cars.
>
> **[3:01](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=181)** So we're going to start off by getting the sum of all of the miles per gallon for those cars.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=186)** So sum equals zero F.
>
> **[3:09](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=189)** And we'll say for car record car in cars, sum plus equals car dot MPG.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=200)** And finally, we're going to return the sum divided by cars dot size.
>
> **[3:26](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=206)** So that's how we calculate the average.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=209)** And now that we have this new static method, we're basically going to go back into our bar graph application here.
>
> **[3:35](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=215)** And we're going to create a new series that we're going to be displaying on our bar graph.
>
> **[3:40](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=220)** Just like with our scatter chart, we need to create a series here in order to do that.
>
> **[3:45](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=225)** So we're going to say series, series equals new series.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=232)** And then we're going to add the averages for these three separate lists that we've created by saying something like series.getData.add new data.
>
> **[4:06](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=246)** And this is the label here along with the actual value for that bar in the bar graph.
>
> **[4:13](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=253)** And the value here is going to be car record util dot get average MPG for four cylinder cars.
>
> **[4:24](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=264)** And that is all we need to do.
>
> **[4:26](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=266)** We also need to import this data thing here.
>
> **[4:30](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=270)** Alright, and we're going to do that same thing for six cylinder and eight cylinder cars as well.
>
> **[4:37](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-average-mpg?u=76281980&t=277)** We're going to say six and eight and change this to six and eight.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), let (2), case, (1), public (1), finally, (1)
> **Env Vars:** mpg (3)
> **Analogies:** just like (2)
> **Code Identifiers:** getdata (1)
> **Speakers:** - [instructor] (1)

#### Displaying a bar chart
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=0)** - [Instructor] And now comes the time to actually define our graph that we're going to be displaying.
>
> **[0:05](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=5)** So, we're going to start off by creating an axis called CategoryAxis and a CategoryAxis is different than a regular axis mainly just because we're using a BarChart, here.
>
> **[0:16](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=16)** So we're going to say CategoryAxis xAxis = new CategoryAxis()
>
> **[0:25](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=25)** and then we're going to say NumberAxis, this is the yAxis, here, NumberAxis yAxis = new NumberAxis().
>
> **[0:35](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=35)** And we're going to set the labels for our axis, here.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=37)** We're going to say xAxis.setLabel and the label for that is going to be Number of cylinders, and the label for our yAxis is going to be Average mpg, okay.
>
> **[0:56](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=56)** And next, we're going to create the BarChart itself now that we have those axis.
>
> **[1:00](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=60)** So, we're going to say BarChart and this is going to be a String and a Number, as the generic types, since once axis is using a string, right, that's this thing, here, and the other one is using a number, that is our NumberAxis, here, to display the average miles per gallon.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=78)** So, we're going to say barChart, we're going to have to import the barChart, = new BarChart<>(xAxis, yAxis); and then we're going to say barChart, we're just going to change a few settings, here, barChart.setAnimated(false) barChart.getData().add(series), we're going to add our average miles per gallon data to that now.
>
> **[1:50](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=110)** And then we're going to say barChart.setTitle and the title here is going to be ("Average mpg of different engine types"); And then, just like before, we can set the grid line visibility to false so I'm just going to copy and paste that because I don't feel like typing all of that out again.
>
> **[2:12](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=132)** Just going to copy and paste these same things into here and change that to barChart instead of scatterChart.
>
> **[2:25](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=145)** Okay, and then we just need to display this again so we're going to say Scene scene = new Scene, we're going to display our barChart on that scene and we'll just set a certain size, here, to display that on, we'll just say 700 by 700, something like that and then we're just going to say primaryStage.setScene(scene); and primaryStage.show(); to display everything that we've set-up here.
>
> **[3:03](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=183)** So, if we run our BarGraph code, now, you're going to see that you'll get an error which might not have been what you were expecting and I will admit that this took me quite a long time to figure out what was going on the first time I saw this error.
>
> **[3:18](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=198)** Basically, remember when we first set-up our ScatterPlot application we had to go into Run and Edit Configurations, well it turns out that we have to do the exact same thing for our BarGraph as well.
>
> **[3:28](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=208)** So, basically we need to go in here, copy this line from VM options and put that in BarGraph as well.
>
> **[3:38](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=218)** All right, and once we do that we should be able to run our code now and everything should work fine.
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=224)** And, sure enough, we'll see Number of Cylinders, we'll se a different bar.
>
> **[3:48](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=228)** So, we can see that in our data set four cylinder cars have a higher average mile per gallon than six cylinder cars, which have a higher average miles per gallon than eight cylinder cars.
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/displaying-a-bar-chart?u=76281980&t=240)** So this is, obviously, a different type of graph than what we saw with our ScatterPlot, but, nonetheless, it can be very useful, also, for doing different types of data visualization especially when we're doing things like counting how many data points fall into a given segment, that kind of thing.

> [!info]- Semantic Content
>
> **Code Identifiers:** barchart (8), yaxis (4), xaxis (3), primarystage (2), setlabel (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Displaying data on a bar chart
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=5)** - [Instructor] Okay.
>
> **[0:06](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=6)** So now that we've seen a few examples of how to display data using JavaFX.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=10)** We're going to do a challenge.
>
> **[0:12](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=12)** The challenge for you now is just like we displayed a bar chart earlier that showed the average miles per gallon figures.
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=19)** Based on the number of cylinders that a car had, the challenge for you here is to display a very similar type of graph.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=26)** But instead of dividing up the cars based on the number of cylinders, we're going to divide them up based on their origin.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=33)** And just keep in mind that the origin figure, which you can see if you open up autompg.data.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=41)** Is this second to last column here.
>
> **[0:44](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=44)** And one stands for cars made by American based companies.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=49)** Two signifies cars made by European based companies.
>
> **[0:52](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=52)** And three represents cars that are made in Asian based companies.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=58)** So this challenge should take you anywhere from five to about 10 minutes.
>
> **[1:01](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=61)** And once you've had a try at it, feel free to move on to the next video where I'll show you how I went about solving this challenge.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/challenge-displaying-data-on-a-bar-chart?u=76281980&t=67)** And keep in mind also that you're allowed to copy and paste code from our original bar graph code here.

> [!info]- Semantic Content
>
> **Warnings:** keep in mind (2)
> **Cross-References:** next video (1)
> **Definitions:** stands for (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Solution: Displaying data on a bar chart
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=0)** - [Speaker] Okay, so I'm going to show you how I went about solving this challenge.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=9)** The first thing I did, since we already had a lot of the logic completed for setting up the charts, is I went over to bar graph dot Java and copied and pasted a lot of the code from the start method here
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=28)** into the start method of our challenge class.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=33)** And the next thing I did is, since the code that we copied and pasted had four-cylinder cars, six-cylinder cars, and eight-cylinder cars, and we have to change that to American cars, European cars, and Asian cars, I changed those in the following way.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=49)** So I said, list American cars.
>
> **[0:53](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=53)** And then, instead of filtering cars by their number of cylinders, I filtered cars by their origin.
>
> **[1:00](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=60)** Now, it was at this point that I realized that our car record class doesn't yet parse the origin from the data.
>
> **[1:08](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=68)** So the first thing I did was go to the car record data class and add an origin member variable to it.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=76)** So I said public final integer, since it's either one, two, or three, and then I said origin, and then I simply added that to the constructor and two-string method, so this.origin equals origin, add origin up here, integer origin.
>
> **[1:39](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=99)** And then for two-string, I said origin equals plus origin.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=107)** And next, I went over to the car record util class to modify this parseCar static method here.
>
> **[1:54](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=114)** Basically, we need to parse the origin out of the data.
>
> **[1:58](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=118)** So what I did is, I said integer origin equals integer.parseInt fields.get.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=128)** And since this field is right after the year field, which is index six, I put get seven as the index, and then .trim, and I passed the origin to the constructor method here.
>
> **[2:24](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=144)** And that was all we needed to do there.
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=146)** So now that our car data class has an origin, this filtering method here should work nicely, and we just have to do the same for our European cars, where we'll say car.origin is equal to two.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=163)** And lastly, we'll do Asian cars, where the origin is equal to three.
>
> **[2:52](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=172)** Okay, so now that we have our three filtered lists of cars, the next thing we're going to do is add them to their respective series.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=180)** So we're going to still be getting the average miles per gallon.
>
> **[3:03](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=183)** The only thing we're going to change here is the variable name and our label here.
>
> **[3:09](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=189)** So we're going to say American cars, European cars, and Asian cars, and change that to American, European, and Asian.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=209)** Okay, and then scrolling down a bit more, we're going to see that we want to change the number of cylinders.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=213)** We're going to change that X-axis label to origin, and the Y-label will remain average miles per gallon, and we'll change this to say average miles per gallon of different car origins, and the rest of it should be good to go.
>
> **[3:53](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=233)** So let's run this code.
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/solution-displaying-data-on-a-bar-chart?u=76281980&t=238)** And we should see that it displays a nice bar chart of our cars, sorted by their origin, and along with that, it displays their average miles per gallon.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (1), public (1), this. (1), static (1), let (1)
> **Code Identifiers:** parsecar (1), parseint (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [speaker] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Modeling and Machine Learning

#### Building machine learning models
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=0)** - [Instructor] All right. So we've spent quite a bit of time now seeing just how to work with data in Java and we've come to a very exciting part of the course where we're going to start actually building data science models using Java.
>
> **[0:14](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=14)** So before we get into that, what I want to do is talk a little bit about the process of building models.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=20)** And first of all, we're going to talk about what models are, but we're also going to talk about just some concerns to keep in mind when we're doing so.
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=28)** So the first question to ask ourselves is, what exactly are models?
>
> **[0:34](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=34)** Models really are simplified representations of reality that are created to serve some sort of purpose.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=41)** And in data science, generally that purpose is to make predictions.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=45)** I'll talk about what I mean by that in just a second here.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=48)** But generally when we think of models as simplified representations, I found that it really helps conceptually to understand this as when we create maps.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=58)** So if you think about looking at let's say a highway system on a map, that map is a very simplified representation of the actual environment, because if you were to have the environment in its entire detail, it wouldn't be very useful, right?
>
> **[1:14](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=74)** It would just be way too complicated for us to understand by looking at it.
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=77)** So in the same way that something like a roadmap, or just looking at Google maps on your phone, is a simplified representation of the actual reality, right?
>
> **[1:27](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=87)** Which is most of the time too complicated to fit on a phone and nor is that very useful.
>
> **[1:33](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=93)** In the same way that a map is a simplified version of whatever environment, whatever place that map represents, the models that we're going to build in data science are generally some sort of simplified version of that reality we're trying to mimic.
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=109)** So that's the first thing I wanted to talk about.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=111)** The second thing that I just wanted to point out is that when we talk about making predictions in data science, we're not necessarily referring to predicting the future.
>
> **[2:01](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=121)** More often than not, what we're trying to predict in data science is some unknown value, right? We're trying to predict some unknown value based on other values that we already know.
>
> **[2:13](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=133)** So just using some of the data sets that we've seen before, we might want to say predict the miles per gallon of a given care based on its weight and engine size, right?
>
> **[2:24](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=144)** That might be something that we want to do.
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=146)** So anyway, predictions in data science don't usually refer to the future, they refer to predicting some unknown value.
>
> **[2:35](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=155)** And just to give you an example of what a model might look like and how a model is more of a simplified representation of reality, take a look at the graph here.
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=164)** Obviously there's a lot of different data points on it.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=166)** Those are the blue dots.
>
> **[2:47](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=167)** And the red line running through the middle is more or less what a model of that data would look like, right?
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=173)** It's obviously a simplified representation.
>
> **[2:55](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=175)** It kind of smooths out all the differences and tries to do its best to represent the data that we used to actually build that model.
>
> **[3:04](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=184)** And one more thing that I want to talk about here is that there's really one question that it comes down to when we're thinking about how to build a data science model, and that is, how can we select one or more attributes, one or more pieces of information that we know about a given record, or each item in a data set, that'll allow us to make accurate predictions about some other attribute that we don't yet know?
>
> **[3:31](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=211)** Like the example that I used before was predicting the miles per gallon of a car based on some other attributes like the weight of the car, the year the car was made, things like that.
>
> **[3:43](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=223)** So it usually comes down to this question here when we're thinking about how to build a model in data science.
>
> **[3:49](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=229)** And in this course we're going to be building two models.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=232)** The first model we're going to be building is called a K-nearest neighbor model.
>
> **[3:57](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=237)** Basically K-nearest neighbor is a way of classifying points based on the other points that they're closest to.
>
> **[4:02](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=242)** We'll see how to do that very shortly.
>
> **[4:05](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=245)** And the second model that we'll be building over on the right hand side is called Naive Bayes.
>
> **[4:10](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=250)** Basically this more of a statistical way of making predictions about unknown data points.
>
> **[4:15](https://www.linkedin.com/learning/data-science-for-java-developers/building-machine-learning-models?u=76281980&t=255)** And I'm going to go into much more detail about both of these a little later on in the course, but I just wanted to introduce both of these to you at this point so you'll know what to expect.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Supervised vs. unsupervised learning
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=0)** - [Instructor] Okay, the next thing we're going to talk about is the fact that there are actually two main categories that the models we build are going to fall into.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=8)** And it's usually pretty important to have some idea of this distinction before we actually get into building our models.
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=15)** Because this distinction will make quite a difference in the approach that we ended up taking in the end.
>
> **[0:22](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=22)** So the two categories that these models generally fall into are models that are trained using supervised learning and models that are trained using unsupervised learning.
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=32)** So let's take a look at what both of these means and just kind of what it's going to mean for the models we build.
>
> **[0:39](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=39)** Unsupervised learning aims to identify natural groupings that occur in our data sets without actually having any preconceived notions of what those groups might be.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=49)** So an example of a question we might be asking ourselves that would be solved with unsupervised learning would be something like, do our customers naturally fall into different groups?
>
> **[0:59](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=59)** So we might be a company and we're aiming to have some sort of insight into how our customer base works, right?
>
> **[1:06](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=66)** How it's divided up?
>
> **[1:08](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=68)** Are all our customers pretty much the same?
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=70)** Are there several different groups?
>
> **[1:12](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=72)** Are there a lot of different groups?
>
> **[1:14](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=74)** How is that organized?
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=76)** Unsupervised learning is generally very helpful for doing an initial exploration of your data set.
>
> **[1:23](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=83)** Now, on the other hand supervised learning generally starts off with some sort of preconceived notion about the data set.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=91)** So an example of a question we might ask ourselves that we could solve using more of a supervised learning approach and it's pretty subtly different here but the difference is very important.
>
> **[1:42](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=102)** An example of a question we might ask in that situation would be, can we find groups of customers that are very likely to buy something that we're trying to sell?
>
> **[1:50](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=110)** Right?
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=111)** So you can see here, the very subtle difference is that in unsupervised learning we're just wondering if our data set falls into different groups.
>
> **[1:59](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=119)** And in supervised learning we have a purpose of that grouping, right?
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=123)** So we might be creating a new product and we want to know, who should we market that product to that would be most likely to buy it?
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=131)** Right, so that we're making our advertising efforts more efficient.
>
> **[2:15](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=135)** So again, just a rule of thumb to keep in mind when you are thinking about, is this going to require an unsupervised learning approach or a supervised learning approach?
>
> **[2:23](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=143)** Supervised learning generally means that we already have some kind of notion of labels that we want to be able to apply to our data set, right?
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=151)** So using an example from before we might want to label customers into groups that are likely to buy X.
>
> **[2:38](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=158)** Or groups that are likely to buy Y or you know, in the case of cell phone providers we might want to be able to label customers that are about to switch service so that we can offer them a special sale and keep them from taking their business elsewhere.
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=173)** And as we go through the two models that I mentioned before that we're going to be building in this course, keep in mind that both of these models are supervised.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/supervised-vs-unsupervised-learning?u=76281980&t=180)** That is both of these models are going to be trying to label unknown data points based on labels that we know about previous data points.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), switch (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** notion (2)
> **Warnings:** keep in mind (2)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Overfitting and how to avoid it
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=0)** - [Instructor] All right, so before we get into actually building our models in Java, there's one more topic that I want to cover.
>
> **[0:06](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=6)** And that is the topic of "Overfitting," which is a very important topic because it's a trap that a lot of beginners to data science fall into.
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=15)** So first of all, a very general definition of overfitting is when we're trying to create a model to represent a given dataset, and we go a little too far, we make our model a little or a far too complex to the point where it's just not really very useful anymore, right?
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=33)** So looking at just these fake models here, let's assume that the dots on these graphs are the actual dataset.
>
> **[0:40](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=40)** And we're trying to come up with a simplified representation, that is a model that is going to help us predict where other points are most likely to fall on that graph.
>
> **[0:51](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=51)** So over on the left, we have a model that's really, it's over simplified, right?
>
> **[0:56](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=56)** It gets pretty close to most of our data points, but there's probably a better generalization that we could make, right?
>
> **[1:04](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=64)** And in the middle, we see that generalization, right?
>
> **[1:08](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=68)** That model that really fits the graph pretty well.
>
> **[1:11](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=71)** It does a pretty good job of following the general underlying pattern of the data in the graph.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=78)** And then over on the right hand side, of course we have an overfitted model where basically it sees patterns that aren't necessarily there, right?
>
> **[1:26](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=86)** The model that we're building here is just too complex and chances are, if we were to use that model to predict the positions of more points, we'd get something that would actually be quite off compared to the model in the middle.
>
> **[1:40](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=100)** So that's what we're fitting, overfitting is generally making a model that's too complex and a model that takes into account patterns that don't actually exist in whatever population we're trying to analyze.
>
> **[1:54](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=114)** So generally I've found that in order to avoid overfitting, it's very good to keep this saying in mind.
>
> **[2:00](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=120)** And that's saying is, "if you stare too long at a dataset, you will find a pattern."
>
> **[2:05](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=125)** And this is true, whether you're just creating a simple linear regression model, or whether you're doing something much more complex, like neural networks, basically whatever model you're trying to build, if you train that model for too long on the same dataset, it'll start to see patterns in it that don't exist, right?
>
> **[2:24](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=144)** It'll start to see patterns that don't actually exist outside that dataset.
>
> **[2:30](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=150)** So just a very brief, simple example of this might be if you had a fairly small dataset that contained information about people, such as their hair color, their name, their age, et cetera, if you stare at that dataset for long enough, right?
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=164)** In other words, if you train your model on that dataset for long enough, you might start to see patterns that just logically we know probably don't exist, right?
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=173)** Like it might think it might appear on the surface that that model is able to predict someone's name based on their hair color.
>
> **[2:59](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=179)** But really that just happened because there happened to be two or three people in your dataset that have the same name and hair color as each other.
>
> **[3:07](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=187)** So in other words, overfitting happens again, when you start finding patterns in your datasets that don't actually exist in the real world.
>
> **[3:16](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=196)** Okay, so now that we have an idea of what overfitting is, let's take a look at some ways that we can actually help avoid it.
>
> **[3:23](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=203)** So the first method that's generally used in avoiding overfitting is something called holdout data.
>
> **[3:30](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=210)** So the big problem with overfitting is that we build our models based off of the training data that we have, right?
>
> **[3:39](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=219)** So we have some big dataset that we're using to build our models.
>
> **[3:42](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=222)** And we want to take what we learned from that dataset, the models that we build using that dataset and apply them in the real world.
>
> **[3:51](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=231)** So again, the problem with that we're fitting is that our models find patterns in our dataset, that don't actually exist in the real world.
>
> **[3:59](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=239)** So we'll find that we've built a pretty useless model at the end of the day, if we end up over fitting.
>
> **[4:04](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=244)** So what holdout data is, is when we take a certain portion of our training data and we set it aside, right?
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=252)** So we don't let our model see that training data at all, until we want to actually test our models performance and get an idea of how that model would perform in the real world.
>
> **[4:25](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=265)** So basically we take some of our data, put it aside and use the rest of that data to train our model.
>
> **[4:31](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=271)** And then when we want to see how our model would do. we test it on that whole out data, and that will generally reduce the risk of overfitting in the models we create.
>
> **[4:41](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=281)** Another strategy because I mentioned earlier that data is a business asset.
>
> **[4:45](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=285)** So generally in fact, almost always, as you get deeper into data science, you'll find that no matter how big the dataset you have, you always wish that you had a little bit more data to train your models with.
>
> **[5:00](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=300)** So the problem with holdout data is that it requires you to take usually a pretty significant portion of your data and set it aside just for testing purposes.
>
> **[5:10](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=310)** And more often than not, that can be a little annoying since, as I said, you almost never have as much data as you want.
>
> **[5:19](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=319)** So what cross validation is, is another method of doing holdout data, but one where we actually build several different models with different holdout data.
>
> **[5:30](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=330)** And then we take the models that we built in each sort of iteration there, each model that we built with a different set of holdout data and sort of combine them at the end, which generally can give us a little bit more accurate of a model.
>
> **[5:43](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=343)** And then we have something called "nested holdout testing," where we do cross validation to build the models.
>
> **[5:48](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=348)** And then in order to get a final idea of how our model is going to perform in the real world, we have a separate set of holdout data from the original dataset that we keep aside for final testing.
>
> **[6:00](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=360)** And one last thing to keep in mind when you're building models, in order to avoid fitting, you've got to ask yourself how representative your data is of the actual population you are trying to predict?
>
> **[6:11](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=371)** So it's at this point that you really have to ask questions about how the data was gathered, because the way your data was gathered may actually end up influencing the data you end up with in your dataset.
>
> **[6:23](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=383)** So just as an example of this, let's say that you're trying to build a model that predicts whether someone is an introvert or an extrovert based on certain criteria, right?
>
> **[6:31](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=391)** Maybe their age, their hair color, whatever other characteristics you might have about that person.
>
> **[6:37](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=397)** However, let's say that this data was actually gathered in a shopping mall or at a bar or the restaurant, right?
>
> **[6:46](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=406)** Chances are that data is going to be significantly warped since gathering it actually involved going out into public and talking to people, which is definitely going to have some sort of effect on the characteristics of the people you're talking to.
>
> **[7:00](https://www.linkedin.com/learning/data-science-for-java-developers/overfitting-and-how-to-avoid-it?u=76281980&t=420)** Now, obviously any means of gathering data is going to have some sort of effect, but it's important that you keep this kind of thing in mind when you're actually building your models and working with a dataset.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1), public (1)
> **CLI Commands:** find (4), make (2)
> **Definitions:** is a  (3), in other words (2), is an  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 7. K-Nearest Neighbors (KNN)

#### K-nearest neighbor basics
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=0)** - [Instructor] Okay, so we've spent quite a bit of time building up to this point and now we're actually going to start building some models for our datasets.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=10)** So the first kind of model, the first classifier we're going to look at is called the K-Nearest-Neighbor algorithm.
>
> **[0:18](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=18)** Now what the K-Nearest-Neighbor algorithm is is it's a way of classifying unknown points based on the other points that we know about that they're closest to.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=29)** So in the graphic over here to the left, you can see an example where we might have two categories, category A and category B, and we want to classify an unknown data point.
>
> **[0:41](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=41)** This is a data point we don't know what category it's in, exactly.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=45)** So what the K-Nearest-Neighbor algorithm asks then is which K points, K being just some constant, like one or three, or five, or seven, they're usually odd and I'll talk about that in a second, which K points is a new point closest to?
>
> **[1:01](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=61)** So in other words, if we have a new data point like we do in the picture here, what we're going to do is figure out what the closest points to that point are, what are the closest points that we know about, and based on what those closest points are, we're going to label that new point as part of that group.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=82)** So it's a fairly straightforward algorithm and we're going to implement it in JAVA in just a minute, here.
>
> **[1:27](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=87)** So first, just to formalize things a little bit, let's talk about these steps involved in performing a KNN classification.
>
> **[1:35](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=95)** And now actually this is pretty simple because there's only two steps.
>
> **[1:39](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=99)** The first step is for us to calculate the distance between whatever new data point we're looking at and the rest of the points in the dataset.
>
> **[1:49](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=109)** So basically what we're going to do is calculate how far away the new point is from the rest of the points we know about.
>
> **[1:56](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=116)** And step two is based on that information, we're going to pick the nearest points and let them sort of vote on whatever the classification for that new point should be.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=127)** So if we're trying to label a new point as either red or green, just to come up with some fake labels that we might be working with, if we were working with K equal to three, basically what we'd do is we would take the three closest points, we'd see what the overall majority of those points thinks, right?
>
> **[2:24](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=144)** So if two of them were green and one of them was red, we would label it as green.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=149)** If all three of them were red, we would label it as red.
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=151)** And the same if we were to do it with a different number for K.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=154)** So basically again, K is just the number of closes neighbors we're taking into account in the final classification.
>
> **[2:43](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=163)** So that's simple enough.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=166)** Just a few things to keep in mind about KNN before we get started.
>
> **[2:50](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=170)** The first is that there's very little actual up-front learning involved.
>
> **[2:55](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=175)** We talked earlier about building models for data science, and those of you who are familiar with things like neural networks will know that some data science models involve quite a bit of up-front learning, right?
>
> **[3:07](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=187)** So it takes a lot of computational power in order to actually build the model.
>
> **[3:11](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=191)** With KNN, there is very little, if any, up-front learning because all of the computation takes place at the moment when we want to classify a new point because that new point is going to determine what the closest points are and therefore, what the ultimate classification is going to be.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=209)** Another thing to keep in mind about K-Nearest-Neighbor is that K is usually an odd number.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=213)** This is more often than not just to help break ties, although now that I mention it, it doesn't necessarily have to be an odd number.
>
> **[3:40](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=220)** But what we want is an odd number that doesn't divide evenly into the number of different classifications, right?
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=227)** So if we have three groups, we generally won't want to pick K as a multiple of three because what would happen is the three nearest neighbors could, in theory, be one from the first group, one from the second group, and one from the third group and then we'd really have no idea which one to pick.
>
> **[4:03](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=243)** Now that being said, there are some variations on KNN that can help with situations like what I just mentioned.
>
> **[4:10](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=250)** And one of those is something called weighted KNN which is basically where, instead of just saying okay, this point is one of the K closest points to our new point that we're trying to classify, instead of doing that and having each of the points have an equal vote, what you do is you actually have the distance, itself, factored into that point's weight.
>
> **[4:32](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=272)** And this is a good way to break ties if you do end up with a tie in the nearest points.
>
> **[4:38](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=278)** Let's say that there's two possible classifications and one of them is much farther away than the other, then obviously, you'll probably want to pick the closest point and give that point's value more of a say.
>
> **[4:51](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=291)** All right, so that's weighted KNN.
>
> **[4:53](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=293)** There's obviously a lot of different variations on this one.
>
> **[4:57](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=297)** And one more thing to keep in mind about KNN is that although there's very little up-front learning involved, what this means is that KNN can actually be very slow when working with very large datasets in production because again, KNN pushes all of its computation to the actual classification step.
>
> **[5:17](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=317)** So basically with neural networks, for example, once you train the neural network, it goes a lot faster once you're actually trying to classify a given item.
>
> **[5:28](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=328)** Whereas with KNN, all of that computation again, takes place in the actual classification step.
>
> **[5:34](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=334)** So if you have several gigabytes of data or more, and you have to go through all of that data and calculate the distance for each data point you're trying to calculate, that's obviously not ideal.
>
> **[5:47](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=347)** So anyway, that's something to keep in mind when working with KNN.
>
> **[5:50](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=350)** And the last thing, we're going to be building a model here in just a second, and something to keep in mind while we're building that is that we're going to be building this model based on something called the Iris dataset.
>
> **[6:03](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=363)** Now, I'll go into a little more detail on what that is exactly, but just as a general summary, we're going to be building a classifier that is able to classify different species of flowers, depending on measurements of certain parts of that flower.
>
> **[6:19](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=379)** So just to give you a graphical representation of what this is going to look like, the different points we have here, the red ones, the yellow ones, and the green ones, are the different species of flowers visualized on a graph, on a scatter-plot.
>
> **[6:34](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=394)** We've seen how to do that, before.
>
> **[6:36](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=396)** So the little blue X in between the red and yellow groups might be some flower that we're trying to classify.
>
> **[6:45](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=405)** So what we would do with KNN and what you're going to see when we build our classifier in just a minute is we're going to see which points are closest to that point and let those closest points sort of vote on what the final classification for that new point should be.
>
> **[7:02](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=422)** And know that also that this graph here only displays two dimensions of the actual dataset.
>
> **[7:07](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=427)** The actual dataset is four dimensional meaning that basically, each data point has four different variables that can change, so this isn't 100% accurate as a visualization, but I think it gets the point across.
>
> **[7:20](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=440)** Basically, what we're trying to do is see which data points are closest to a given new point, which, in our case, is represented by that blue X.
>
> **[7:30](https://www.linkedin.com/learning/data-science-for-java-developers/k-nearest-neighbor-basics?u=76281980&t=450)** So without further ado, let's get started building our classifier.

> [!info]- Semantic Content
>
> **Env Vars:** knn (12), java (1)
> **Code Keywords:** let (5), case, (1)
> **Definitions:** is a  (3), is called (1), in other words (1), is an  (1)
> **Warnings:** keep in mind (5)
> **Analogies:** picture (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Loading flower data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=0)** - [Instructor] Okay, for this demonstration, we're going to be using a different data set than the ones we've looked at before.
>
> **[0:06](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=6)** Mainly, we're going to be using something called the Iris data set, which is an extremely popular, publicly available, data set that basically contains data about the measurements of different flowers.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=17)** So, in other words, if you take a look at the iris.names file, you're going to see that there are three different species of flowers.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=26)** And the data that's given to us for all of these flowers is the size in centimeters of different parts of the flower, right?
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=33)** Namely the sepal and the petals.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=36)** So what we're going to do is we're going to build a classifier that based on the measurements of some new flower that we haven't yet classified, will predict which of the species that flower falls into.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=48)** So, we're going to do this, first of all, with a K nearest neighbor classifier.
>
> **[0:53](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=53)** But before we can actually start creating that, we need to actually be able to load this flower data into our program.
>
> **[1:01](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=61)** So we're going to do pretty much the same thing that we've done with some of our other data.
>
> **[1:05](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=65)** We're basically going to build a record class and a record util class for our flowers.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=70)** So we're going to create a new class.
>
> **[1:13](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=73)** We'll call it flower record.
>
> **[1:16](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=76)** And we'll create another class called FlowerRecordUtil.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=85)** And if we look in the names file, we're going to see that the different pieces of data that are provided in here are the sepal length and width and the petal length and width.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=94)** So we're going to add those to our flower record.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=98)** So we'll say public final, and we're going to use double for all of these.
>
> **[1:43](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=103)** It's not really necessary to use double but using double will make it a lot easier when we actually start to build a classifier for this.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=111)** And we're going to say sepalWidth and public final_Double sepalLength, public final Double petalWidth, and public final Double petalLength.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=131)** And last thing is we're going to have a final string, which is going to be the species of the flower, right?
>
> **[2:19](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=139)** So that'll be Iris-setosa, or one of the others here.
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=146)** There's three in the data set.
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=151)** And then we're going to generate a constructor, and a two string method for our class.
>
> **[2:44](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=164)** So now that we have this data class created, we're going to go over to our flower record util class and create a parse flower method for that.
>
> **[2:52](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=172)** And what we can do since our data set here is just sort of a comma separated thing, is we can go over to our person record util class and just copy this parse person method, and use that as a starting point for our flower record util.
>
> **[3:12](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=192)** Okay, so we're going to change this to FlowerRecord.
>
> **[3:17](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=197)** Change that to parseFlower, and we're going to have to change the fields here.
>
> **[3:25](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=205)** So namely, what we're going to do is we're going to say Double sepalWidth equals, double dot parse, double.
>
> **[3:36](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=216)** And that's going to be the first field.
>
> **[3:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=221)** Oops, and it looks like we actually have that backwards.
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=224)** So, I'm going to switch this around, just so we don't get confused.
>
> **[3:56](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=236)** So, in here length is before width.
>
> **[4:02](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=242)** So I'm just going to delete these and regenerate it.
>
> **[4:13](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=253)** Okay, so the length is going to be first.
>
> **[4:19](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=259)** Then we're going to do the width.
>
> **[4:24](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=264)** SepalWidth is going to be the second field there.
>
> **[4:29](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=269)** And then we're going to do the same thing with the petal length and width.
>
> **[4:34](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=274)** Petal length and petal width.
>
> **[4:39](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=279)** That's going to be two and three.
>
> **[4:42](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=282)** And lastly, we're going to do string, species equals fields dot get four dot trim.
>
> **[4:55](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=295)** And we're going to change this to create a new flower record with all of the fields that we've parsed out.
>
> **[5:04](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=304)** Petal length and petal width and species.
>
> **[5:09](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=309)** There we go.
>
> **[5:11](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=311)** So we've got our flower record and flower record util classes already.
>
> **[5:18](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=318)** So, let's create a new class to run this code.
>
> **[5:23](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=323)** We'll call this something like KNN example.
>
> **[5:28](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=328)** Give it a main method.
>
> **[5:35](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=335)** And we're going to do pretty much the same thing that we did with our text loading example here.
>
> **[5:40](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=340)** So I'm just going to copy and paste that into here and just going to change the file name.
>
> **[5:47](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=347)** That's going to be iris.data, and we're going to do, flower record util, dot parse flower.
>
> **[6:00](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=360)** Change this to flower record, and we'll change that to flowers and flowers.
>
> **[6:12](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=372)** So let's run this file now just to make sure we're doing everything right so far.
>
> **[6:18](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=378)** And it looks like we're doing pretty well so far, except for we have this one null value at the end of our data.
>
> **[6:26](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=386)** And that is because of this extra line in our data set.
>
> **[6:29](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=389)** So if you want, probably the easiest way to get rid of that right now is just to delete those extra lines.
>
> **[6:37](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=397)** So if we run this again, we'll see that there's no null value there.
>
> **[6:41](https://www.linkedin.com/learning/data-science-for-java-developers/loading-flower-data?u=76281980&t=401)** And we have all our flower data loaded into our program.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), class. (2), delete (2), let (2), this, (1)
> **Code Identifiers:** sepalwidth (2), sepallength (1), petalwidth (1), petallength (1), parseflower (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), in other words (1)
> **Env Vars:** knn (1)
> **Speakers:** - [instructor] (1)

#### Creating a DataItem interface
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=0)** - [Narrator] Okay. So now that we've got our flower data loaded into our program, let's start actually building out a K-nearest neighbor classifier.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=8)** So we're going to create a new class here and we're going to call that class KNN Classifier.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=17)** And before we actually get started building this class out it's a good idea for us to come up with some way of representing our data points in more of a generic way using an interface, right?
>
> **[0:27](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=27)** Because otherwise our implementation of this KNN classifier will be tied directly to our Flower Record class.
>
> **[0:37](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=37)** Which would make it pretty useless if we wanted to turn around and use it for some other type of data, right?
>
> **[0:43](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=43)** So we're going to create an interface here that we're going to use.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=49)** And we're going to call that interface, data item.
>
> **[0:52](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=52)** Okay. And the way this interface is going to work is it's going to have two methods.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=58)** The first method, is going to return a list of doubles and we're going to call this method, get coordinates.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=67)** Now that might sound like kind of a strange name, but basically what this is going to do, is whatever class ends up implementing this interface is going to use this get coordinates method to basically return all of its data points in a list.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=84)** So in the case of our Flower Record it's going to take the numeric data points, right?
>
> **[1:28](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=88)** The length and width things here.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=90)** And it's going to turn those into a list of doubles basically and that'll make it easier to do things like find the distance between two flowers on the graph when we actually implement our K-nearest neighbor model.
>
> **[1:45](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=105)** Alright, so we have a get coordinates method.
>
> **[1:48](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=108)** And the second thing our interface is going to have is a method that returns a string called the get classifier.
>
> **[1:56](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=116)** And what this method is going to do, is it's simply going to return the classifier string of whatever data points.
>
> **[2:02](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=122)** So in the case of our flowers that'll be this species string here.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=127)** So now that we have this data item interface we're going to actually implement another class here.
>
> **[2:13](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=133)** And we're going to call that class, Data Item Util, right?
>
> **[2:18](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=138)** And this is going to be very similar to the other util classes we've seen where it's basically going to contain some static methods for working with data items.
>
> **[2:28](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=148)** The only one we're going to do at this point here is going to be a method called, get distance.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=154)** And it's going to return the distance between two data items.
>
> **[2:41](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=161)** So this method is going to take two data items as arguments.
>
> **[2:45](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=165)** We're going to have data item, item one and data item, item two.
>
> **[2:52](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=172)** And what we're going to do now, is we're going to say list double item one, coordinates equals item one dot get coordinates, right?
>
> **[3:04](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=184)** We're using that interface method here.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=188)** And then we're going to say list double item two coordinates equals item two dot get coordinates.
>
> **[3:17](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=197)** And now that we have the coordinates of our two items all we have to do is use the Pythagorean theorem to find the distance between these two points.
>
> **[3:27](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=207)** So we're going to say double, sum and that's going to start off as zero.
>
> **[3:33](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=213)** And then we're basically just going to loop through our coordinates here and get the distance between them.
>
> **[3:39](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=219)** So we're going to say, and I equals zero.
>
> **[3:44](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=224)** I is less than item one coordinates dot size I plus, plus.
>
> **[3:50](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=230)** And this is assuming that both of these coordinates are the same size which is necessary, right?
>
> **[3:55](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=235)** If we write the rest of our code correctly normally you might want to check and make sure that these two coordinate lists are the same length but we're just going to ignore that for now since we're just coding out an example here.
>
> **[4:08](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=248)** Alright. So now we're basically just going to say double dimension distance equals item two coordinates dot get I minus item one, coordinates dot get I, right?
>
> **[4:24](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=264)** So we're subtracting both coordinates in the same dimension here.
>
> **[4:30](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=270)** And then we're going to say sum plus equals dimension distance squared.
>
> **[4:35](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=275)** So dimension distance times, dimension distance.
>
> **[4:38](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=278)** And once we've done that with all of our dimensions we're just going to say return math dot square root, sum.
>
> **[4:48](https://www.linkedin.com/learning/data-science-for-java-developers/creating-a-dataitem-interface?u=76281980&t=288)** So now that we've completed our get distance method we should have everything we need to start implementing our KNN classifier.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), let (1), class. (1), class, (1), static (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** knn (3)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Calculating the closest data points
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=0)** - [Instructor] So the first thing we're going to do here is we're going to have a member variable which is going to be a list of data items and we're going to call that dataItems.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=10)** And then for the constructor we're going to say public KNNClassifier and we're just going to initialize this list as an empty list.
>
> **[0:20](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=20)** So we're going to say this.dataItems = new ArrayList, okay.
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=28)** And next up, we're going to have a method called addDataItem and that's just going to take a data item, which we'll nickname di, and we'll say this.dataItems.add(di).
>
> **[0:42](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=42)** Okay, so we're just taking that data item and pushing it onto our data items list.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=48)** So, that's pretty much the boiler plate for our classifier.
>
> **[0:51](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=51)** The next step, which is the most exciting, is where we write a method which is going to return a Map with the generic types, string and integer and that method is going to be called classifyPoint.
>
> **[1:07](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=67)** And this is the method where we're actually going to be able to pass in a new data item and have our KNNClassifier predict which class it belongs to.
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=77)** All right, so this classifyPoint method is going to take two arguments.
>
> **[1:21](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=81)** The first is going to be a DataItem which we'll call unlabeledPoint, and it's going to take an integer called numberOfNeighbors which will allow us to determine how many other points our classifier is going to take into account, all right.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=97)** So, remember earlier I said that this could be any number between one and the size of the data set.
>
> **[1:45](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=105)** So, basically, what we have to do inside this method, now, is we have to find all of the distances between our unlabeledPoint and the data items in our KNNClassifier.
>
> **[1:59](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=119)** All right, so here's what we're going to do.
>
> **[2:01](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=121)** We're going to start off by creating a list of doubles, this is going to be the distances, all right.
>
> **[2:06](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=126)** So we'll call it pointDistances and we're going to use the Map function to do this.
>
> **[2:12](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=132)** So we're going to say, this.dataItems.stream and then we're going to say .map and for each point we're going to return the distance between that point and our unlabeledPoint.
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=149)** So we're going to say DataItemUtil.getDistance between the current point that we're mapping and the unlabeledPoint.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=159)** Okay.
>
> **[2:41](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=161)** And then we're going to say .collect(Collectors.toList()) and that should give us our point distances.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=169)** And one last thing we're going to want to do, here, is we're going to want to sort these distances from least to greatest so that we can grab this numberOfNeighbors argument's worth of the smallest distances.
>
> **[3:01](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=181)** All right, that's just going to make it a lot easier for us to find out what the nearest neighbors are, okay.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=188)** So in our stream, here, we're going to say sorted and we're going to pass distance one and distance two and we're, basically, going to return d1.compareTo(d2) and that'll sort it.
>
> **[3:22](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=202)** So, now that we've gotten to this point let's print out what we have so far, all right.
>
> **[3:27](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=207)** So, first I'm going to return null to stop the compiler from complaining and we're going to say System.out.printlnpointDistances and then from inside our KNNExample class we're going to create a new KNNClassifier
>
> **[3:48](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=228)** and we're going to add all of our flower records to it.
>
> **[3:52](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=232)** So instead of simply logging all our flower records out to the console, we're going to say flowers.forEach((flower)) and that should be flower there, shouldn't it?
>
> **[4:05](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=245)** And we're going to say classifier.addDataItem(flower).
>
> **[4:10](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-closest-data-points?u=76281980&t=250)** Okay, now the problem, here, that we're going to run into is that our flower record class isn't yet implementing the DataItem interface that we created before.

> [!info]- Semantic Content
>
> **Code Identifiers:** dataitems (4), unlabeledpoint (4), adddataitem (2), classifypoint (2), numberofneighbors (2)
> **Code Keywords:** this. (4), pass (2), public (1), function (1), let (1)
> **CLI Commands:** find (2), make (1)
> **Speakers:** - [instructor] (1)

#### Implementing the DataItem interface
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=0)** - [Instructor] So let's go back here and make that the case.
>
> **[0:03](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=3)** So we're going to add FlowerRecord implements DataItem to the top here.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=9)** And it's going to ask us here to implement the methods, which we're going to do.
>
> **[0:13](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=13)** We're going to have to implement getCoordinates and getClassifier.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=17)** So for getCoordinates, we're going to say return arrays dot as list.
>
> **[0:24](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=24)** And we're going to put in this dot sepal length, this dot sepal width... This dot petal length, and this dot petal width.
>
> **[0:42](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=42)** And for getClassifier, we're simply going to return this dot species.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=48)** So now if we go back to KNN example, we'll see that that got rid of the compiler error.
>
> **[0:52](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=52)** So now that we've added all our data points to our classifier, let's say classifier dot classifyPoint.
>
> **[1:01](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=61)** And for this, we'll say new FlowerRecord, and we'll just input some fairly random numbers since we're not using those yet anyway.
>
> **[1:10](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=70)** And for the species, we can just add whatever we want since we're not going to be looking at that on this anyway.
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=77)** And lastly, we're going to add as our second argument, we'll put the number five as our number of neighbors.
>
> **[1:25](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=85)** So now that we have that, let's run our program and see where we're at.
>
> **[1:29](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=89)** All right, and we'll see that our program printed out to the console all of our distances from inside our KNN classifier.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=98)** So it's basically calculating the distance between each item and this new unlabeled point, sorting them in ascending order, and giving us a list with all of those distances.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=111)** Now, the problem here of course, is that even though we can see the five smallest distances, right, that's pretty easy to see right here, we don't actually know right now what labels, that is, what species, the points that gave us these distances have.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/implementing-the-dataitem-interface?u=76281980&t=128)** So we need to find some way to include that in this data that we're calculating here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case. (1), implements (1), this, (1)
> **Code Identifiers:** getcoordinates (2), getclassifier (2), classifypoint (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** knn (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Letting your data points vote
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=0)** - [Instructor] Okay so we've decided what we need to do now is we need to somehow label each of these distances with its corresponding class label.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=9)** Well, a good way to do this, that I've found anyway, is to use something called a pair.
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=15)** So now, instead of returning a list of doubles we're going to return a list of pairs with a string which is going to be the class label for each distance and the double which is going to be the actual distance itself.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=29)** All right?
>
> **[0:30](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=30)** So now we're just going to map each point instead of just mapping it to a distance we're going to map it to a new pair with the class label which you can get by saying point dot get classifier and the actual distance as the second part of the pair and then in order to sort it, we're going to say D1 dot get value dot compare to D2 dot get value.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=62)** Okay so now, if we try running our program again to see what that does, we should see that now we not only have the distances but the distances are actually labeled along with the species that they belong to.
>
> **[1:17](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=77)** All right?
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=78)** So all we have left to do now is count up the number of neighbors and see which class we think this unlabeled point here belongs to.
>
> **[1:28](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=88)** So you may have noticed that instead of returning just a regular classifier, right?
>
> **[1:32](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=92)** Like a string we're returning a map that maps a string to an integer and the reason we're doing this is because instead of just returning a single string from our classifier a lot of times it can be more useful to see how many of a given classifier were included in the neighbors that we counted up because having all of the neighbors from the same species, for example is a lot different than if it was almost an even tie.
>
> **[2:00](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=120)** So generally, we'll want to be able to make use of that which means that basically what we want to do here is create a map where each of the classifiers here such as Iris Sertosa contains the count of how many times it was found in those five or three or 10 nearest neighbors.
>
> **[2:20](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=140)** So it would end up looking something like this maybe, right?
>
> **[2:23](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=143)** We'd have Iris Sertosa, whatever the other ones are blah, blah, blah equals two, right?
>
> **[2:29](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=149)** We might have something like that.
>
> **[2:33](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=153)** Right?
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=154)** So in order to do that we're going to create a private internal method here that we're going to use.
>
> **[2:39](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=159)** So we're going to say private map.
>
> **[2:42](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=162)** This is going to be the method that actually creates the map for us.
>
> **[2:45](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=165)** So we're going to say string and integer and we're going to call this method count occurrences and what it's going to do is it's going to take a list of strings and it's going to count how many times each string occurs in that list.
>
> **[3:02](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=182)** So here's what that's going to look like.
>
> **[3:04](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=184)** We're going to start off by creating an empty map.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=186)** We're going to say map string integer occurrences equals new hash map and then we're going to have a for-loop.
>
> **[3:18](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=198)** We're going to have for string string in list.
>
> **[3:22](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=202)** We're going to say integer current count equals occurrences dot get string.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=209)** That'll be how many times this string has already occurred in our list here and then we're just going to say occurrences dot put and for that string key in our map the value we're going to put is going to depend on what this current count is, right?
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=227)** So in other words, if the current count is no, right?
>
> **[3:51](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=231)** In other words, if there is no entry for that string yet, we're going to return the number one, right?
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=238)** Since that would be the first time that string has occurred it's occurred exactly once.
>
> **[4:02](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=242)** Otherwise, what we're going to do is we're going to say current count plus one.
>
> **[4:07](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=247)** So we're going to increment the count for that string and that's all the logic we need.
>
> **[4:12](https://www.linkedin.com/learning/data-science-for-java-developers/letting-your-data-points-vote?u=76281980&t=252)** So now we just need to return the occurrences and we should be good to go.

> [!info]- Semantic Content
>
> **Definitions:** in other words (2), is a  (1), means that (1)
> **Code Keywords:** private (2), this, (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Finishing your KNN classifier
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=0)** - [Speaker] So what we're going to do now is we're going to remove this print line, and then we're going to say list string, and we're going to get the labels from the closest items here.
>
> **[0:13](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=13)** All right, so we're going to say something like closest labels equals point distances dot sublist, and we're going to get a sublist that contains only this number of items.
>
> **[0:26](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=26)** So that'll get the first X items, right, the first number of neighbors items from our point distances here, and then we're going to say zero, and then we'll say math dot min, either point distances dot size or number of neighbors, depending on which one is the smallest.
>
> **[0:47](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=47)** This will just protect us from going out of bounds if we don't have enough point distances for some reason.
>
> **[0:53](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=53)** So now that we have that sublist, we're going to convert it into a stream.
>
> **[0:57](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=57)** We're going to map each pair to its key, right, which is going to be the classifier here.
>
> **[1:03](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=63)** So we're going to say dot map pair, pair dot get key, and then we're going to convert it to a list.
>
> **[1:13](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=73)** And then, we just need to, instead of returning null, we're going to return the count occurrences method that we just created, counting our closest labels.
>
> **[1:24](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=84)** So now, we should be good to run our code.
>
> **[1:26](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=86)** We just need to go back to our KNN example here, and log out the result.
>
> **[1:32](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=92)** So we're going to say system dot out dot print LN, classifier dot classify point, and let's run our code and see what happens.
>
> **[1:45](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=105)** So there, we see that we have iris setosa equals five, and that's mostly just because we put in some fake data here.
>
> **[1:52](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=112)** But what happens if we go into our iris dot data file here and take something from one of the other species?
>
> **[2:00](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=120)** Okay, so for example, we could take numbers from iris virginica here.
>
> **[2:05](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=125)** One of these, copy that.
>
> **[2:10](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=130)** And plug those numbers into our example.
>
> **[2:19](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=139)** And run our code again.
>
> **[2:22](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=142)** And we'll find that that gives us a different answer.
>
> **[2:24](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=144)** Now, the interesting thing is going to occur with points that are somewhere in between our different flower species in the actual space, right, so flowers where their measurements could, in theory, seem like they might belong to several species.
>
> **[2:38](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=158)** So for example, if you put in a different set of numbers, such as, if you put in zero, zero, 2.5 and 0.75, and run your code, you'll see that the map it returns says that it could, in theory, belong to more than one of these species.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=180)** So in other words, of the five nearest neighbors that we're looking at, four of them were of one species, but there was one in there that was of another species.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=188)** And of course, if we change this number to a much higher number, if we change it to something like 30, for example, and run our code, then we'll see a little bit of everything in there.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=201)** So anyway, feel free to play around with this classifier and add any new features or anything that you can think of.
>
> **[3:27](https://www.linkedin.com/learning/data-science-for-java-developers/finishing-your-knn-classifier?u=76281980&t=207)** But this is basically how a KNN classifier works.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), such as (1)
> **Env Vars:** knn (2)
> **Versions:** 2.5 (1), 0.75 (1)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Speakers:** - [speaker] (1)


### 8. Naive Bayes

#### Naive Bayes basics
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=0)** - Okay. So we've seen how to implement one model using the k-NN Algorithm.
>
> **[0:04](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=4)** And next, we're going to take a look at how to do the same kind of classification but using the Naive Bayes Algorithm.
>
> **[0:11](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=11)** So what is the Naive Bayes Algorithm exactly?
>
> **[0:15](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=15)** The Naive Bayes algorithm is based off of something called Bayes' theorem.
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=19)** Now I understand that this equation here might look a little bit intimidating to many of you, but it's a very very powerful equation in the realm of Data Science.
>
> **[0:30](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=30)** So what this means, right?
>
> **[0:32](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=32)** What you're looking at here, I'm just going to say it in sort of mathematical terms is that the probability of a given B is equal to the probability of B, given A times the probability of A divided by the probability of B still probably doesn't mean anything to many of you.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=49)** So let me give you a more concrete example.
>
> **[0:54](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=54)** So let's imagine that we wanted to build a spam prediction engine, right?
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=58)** Something that based on the words contained inside an email would predict whether or not the email is spam or not.
>
> **[1:06](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=66)** So the way we would do this using Bayes theorem just to give you a very high level overview of what this would look like and what this equation actually means using Bayes theorem what we would be able to say is that the probability that an email is spam given that it contains the word free, right?
>
> **[1:26](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=86)** Let's just say we're picking the word free to try and label spam emails.
>
> **[1:30](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=90)** It's a pretty common word in spam emails after all.
>
> **[1:34](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=94)** So the probability that an email is spam given that it contains the word free is equal to the probability that an email contains the word free given it's spam times the probability that any email is spam, all divided by the probability that any email contains the word free.
>
> **[1:54](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=114)** All right? So that's still might sound a little confusing to you that's definitely a pretty long sentence there but just read this over again and again and see if it starts to sink in.
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=123)** Now, the beauty of this theorem is that the top part of it the probability that an email is spam given it contains the word free.
>
> **[2:12](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=132)** We don't know the answer to that question.
>
> **[2:15](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=135)** However, the bottom part of it is something that we can figure out from a data set.
>
> **[2:20](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=140)** So we'd be able to figure out pretty easily for example, the probability that an email contains the word free, given that it's spam because we already have in our data set a bunch of emails that are marked as spam.
>
> **[2:31](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=151)** So we can simply check and see how many of those contain the word free.
>
> **[2:36](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=156)** Now this is a little bit of a simplification of Naive Bayes but anyway, this is something that will make sense to you and you'll see how it works when you actually get to the implementation steps.
>
> **[2:46](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=166)** So don't worry too much if this is making your head spin right now.
>
> **[2:50](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=170)** So for Naive Bayes, just like for k-NN there are a pretty simple series of steps that we're going to follow in order to create a Naive Bayes classifier.
>
> **[2:58](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=178)** Now, keep in mind that Naive Bayes does require a little bit of statistics knowledge.
>
> **[3:05](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=185)** So for those of you who don't have that statistics knowledge just do your best to follow along here.
>
> **[3:09](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=189)** And you can still follow along with me as I write out the code for this classifier.
>
> **[3:15](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=195)** Anyway, the steps for implementing a Naive Bayes classifier are: First, we separate the data set by label.
>
> **[3:23](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=203)** So that means if we have three different labels for our data set, right?
>
> **[3:26](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=206)** Something like red, yellow, and green, we would separate that data set into three separate parts, one where all of the items are green and one where all of the items are yellow.
>
> **[3:37](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=217)** And once we have our data set separated by label the next thing we're going to do is we're going to calculate the mean and standard deviation for each attribute of each group.
>
> **[3:47](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=227)** Now, granted, this does assume that the attributes are actually continuous numbers, right?
>
> **[3:53](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=233)** And we're going to be using the flower data set like we did for k-NN.
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=238)** So that's true.
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=240)** But in our case, what we're going to do is we're going to calculate the mean and standard deviation for each attribute of each group.
>
> **[4:06](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=246)** So in our case that means we're going to do things like calculate the mean of the petals, the standard deviation of the petal length the mean of the petal width, the standard deviation of the petal width, et cetera.
>
> **[4:17](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=257)** And once we have those statistical measures calculated the next thing we're going to do is we're going to use the mean and standard deviation to construct what's called a normal distribution for each group.
>
> **[4:27](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=267)** Now, again, if you're not familiar with statistics you're not going to know what a normal distribution is.
>
> **[4:32](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=272)** If that's the case for you just don't worry too much about it and continue following along.
>
> **[4:38](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=278)** Anyway, once we have the normal distribution for each group the next thing we're going to do is we're going to use that distribution to predict the probability that a given data point, right?
>
> **[4:49](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=289)** The data point we're trying to classify would belong to that group.
>
> **[4:54](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=294)** And finally, once we've calculated all those probabilities we simply pick the group with the highest probability and put that label on the new data point.
>
> **[5:06](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=306)** So that's the basic process, if it doesn't make sense at this point hopefully it'll make more sense as we go implementing it.
>
> **[5:12](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=312)** The last thing I'm going to touch on is just a few things to keep in mind about the Naive Bayes algorithm: First, is that it generally performs very well despite being what some people would consider more simplistic, right?
>
> **[5:25](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=325)** It's not a neural network where there's all this training all these little tweaks that go on behind the scenes it's a pretty straightforward algorithm, generally speaking.
>
> **[5:35](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=335)** And the second thing to keep in mind, is that the Naive Bayes algorithm generally assumes that all variables in the data set are independent of each other.
>
> **[5:45](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=345)** Now this is definitely something to keep in mind since it's almost always not true.
>
> **[5:51](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=351)** So in our flower data set, for example, wouldn't you imagine that the length and width of the petals, even though they're represented as separate variables in our data set wouldn't you imagine that those two things are related in some way, right?
>
> **[6:05](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=365)** Like petals that tend to have a longer length tend to have a wider width as well.
>
> **[6:10](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=370)** Right? So Naive Bayes assumes that variables are completely independent of one another, which is again generally not the case.
>
> **[6:18](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=378)** Nevertheless, this algorithm generally performs pretty well.
>
> **[6:23](https://www.linkedin.com/learning/data-science-for-java-developers/naive-bayes-basics?u=76281980&t=383)** So with that said, let's get started and take a look at how to implement this thing, in Java.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), require (1), case, (1), continue (1), finally, (1)
> **Analogies:** imagine (3), for example (2), just like (1)
> **Warnings:** keep in mind (4)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1)
> **Speakers:** - okay (1)

#### Calculating the possible labels
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=0)** - [Instructor] Okay, so now that we know a little bit more about what a Naive Bayes classifier is and how it works, the next thing we're going to do is see how to actually implement one in Java.
>
> **[0:09](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=9)** And this is going to be a slightly tricky process.
>
> **[0:12](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=12)** So as we're walking through it, if you don't understand something, don't focus too much on that.
>
> **[0:17](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=17)** Just focus on actually making the program work and getting a high-level idea of what's going on.
>
> **[0:25](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=25)** So the first thing we're going to do is we're going to create a new Java class.
>
> **[0:29](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=29)** We'll just call this one NaiveBayesExample.
>
> **[0:36](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=36)** And we're just going to copy the code from our KNNExample here.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=45)** And that will give us a good start anyway since we're already loading all the flower data.
>
> **[0:48](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=48)** We'll just need to change this to a Bayes classifier.
>
> **[0:53](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=53)** Okay, and now that we've done that, the next thing we're going to do is we're going to create a new class which will actually be the Naive Bayes classifier itself.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=62)** Okay, so we're going to say NaiveBayesClassifier, just like our KNNClassifier here.
>
> **[1:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=71)** And this classifier is going to be pretty similar to what we saw with our KNNClassifier, at least at the beginning.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=78)** We're going to start off by giving it a member variable that's a list of data items.
>
> **[1:23](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=83)** So we'll say private List<DataItem> and we'll call that dataItems just like we did in our KNNExample.
>
> **[1:33](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=93)** And then for the constructor, we're going to say public NaiveBayesClassifier, and just initialize our dataItems there, equals new ArrayList.
>
> **[1:47](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=107)** And we're also going to add a public void addDataItem method where we add in our DataItem di, and just call this.dataItems.add, data item.
>
> **[2:03](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=123)** Okay, so far it's pretty similar to our KNNExample.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=128)** And the last thing we're going to do is also just like in our KNNExample, we're going to create a new method here called public, and it's going to return a map of string and doubles called classifyPoint.
>
> **[2:30](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=150)** And this classifyPoint method in our NaiveBayesClassifier is only going to take one argument, and that's going to be this unlabeledPoint argument from our KNNClassifier since in this case, we don't need to pass in the number of nearest neighbors since it's not KNN.
>
> **[2:47](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=167)** So we're going to say DataItem unlabeledPoint.
>
> **[2:53](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=173)** And then we can get to actually implementing our classifyPoint method here.
>
> **[2:58](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=178)** So the first step in building out this method is going to be to go through all of our data items and find all of the classifiers that we have.
>
> **[3:09](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=189)** So in KNN, we didn't really need to know all of the classifiers.
>
> **[3:12](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=192)** We only needed to know the classifiers of the n nearest neighbors, but in a Naive Bayes classifier, just because of the way that we compute this stuff, we need to actually figure out what all of the classifiers in our dataItems list are.
>
> **[3:29](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=209)** And the way we're going to do that is going to look something like this.
>
> **[3:32](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=212)** It might seem a little strange to some of you at first, but just bear with me here.
>
> **[3:36](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=216)** We're going to say List<String> and we're going to call this allLabels.
>
> **[3:41](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=221)** All right, so we're going to get all of the existing labels from our dataItems that we've added to our NaiveBayesClassifier.
>
> **[3:50](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=230)** And for that, we're going to say this.dataItems.stream.
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=238)** And then we're going to say .map.
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=240)** And for each item in our dataItems list here, for each point, what we're going to do is we're simply going to return point.getClassifier.
>
> **[4:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=251)** And once we've done that, we're going to do .collect, but instead of doing Collectors.toList, we're going to do Collectors.toSet.
>
> **[4:23](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=263)** A set is different from a list in that it doesn't store duplicate items.
>
> **[4:28](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=268)** So in our case, that's what we want since we only want a list of all the unique labels without any duplicates in it.
>
> **[4:34](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=274)** So we're going to collect this stream here into a set.
>
> **[4:37](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=277)** And when that's done, the last thing we're going to do is we're going to convert this set into a list, like this type that we defined here, by saying new ArrayList and wrapping our stream statement here inside the constructor's parentheses.
>
> **[5:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=300)** Okay, so what we're doing is we're getting all of the unique data item labels, we're converting those into a list, and there we have all of our unique labels.
>
> **[5:10](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-the-possible-labels?u=76281980&t=310)** Pretty neat trick in Java in case you haven't seen that before.

> [!info]- Semantic Content
>
> **Code Identifiers:** dataitems (7), classifypoint (3), unlabeledpoint (2), adddataitem (1), alllabels (1)
> **Code Keywords:** public (3), this. (3), case, (2), class. (1), private (1)
> **Analogies:** just like (3), similar to (1)
> **Env Vars:** knn (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Splitting your dataset by label
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=0)** - [Instructor] So now that we have all of our unique labels the next thing we're going to want to do, is calculate the summary, a summary being just the mean and standard deviation.
>
> **[0:10](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=10)** And those are just statistical terms don't worry if you're not super familiar with those at the moment, just kind of follow along with me here, if you aren't familiar with those.
>
> **[0:19](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=19)** So we're going to need to calculate the mean and standard deviation of our data set after we've split it into different pieces by the label.
>
> **[0:28](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=28)** So in other words, what we're going to do, is we're going to take our flour data here.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=33)** We're going to split it apart into three parts in our case, that's three because we have three different labels and we're going to want to calculate the mean and standard deviation of each of these parts.
>
> **[0:45](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=45)** So we're going to have one part for this species here, we're going to have one part for this species here, and we're going to have one part for this species here.
>
> **[0:54](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=54)** And those statistical measures that we calculate for each of these groups is going to help us when it comes to actually classifying an unknown point.
>
> **[1:02](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=62)** Basically what we're going to do as I talked about before, is we're going to calculate the probability that a given unlabeled point belongs to each of these groups, and we're simply going to return the different probabilities from that.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=78)** So that's a lot of talk but here's more or less what it's going to look like.
>
> **[1:21](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=81)** We're going to start off here by creating a map, so we're going to store each of the probabilities for the labels in a map where the key is the label and the value is the actual probability that a given unlabeled point belongs to that label, all right?
>
> **[1:41](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=101)** So we're going to create a new map here.
>
> **[1:44](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=104)** We're going to say map, and it's going to take a string and map it to a double, and we're going to call this map probabilities.
>
> **[1:53](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=113)** And this is just going to be a new HashMap.
>
> **[1:58](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=118)** And that is going to be the thing that we end up returning from this method once we've actually implemented the rest of the logic, okay?
>
> **[2:05](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=125)** So we're going to say return probabilities.
>
> **[2:08](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=128)** Now in between where we create this probabilities map and where we return it, is where all of the interesting logic is going to take place.
>
> **[2:16](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=136)** And this is really the heart of the naive base Bayes classifier.
>
> **[2:19](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=139)** So, what we're going to basically do, is we're going to loop through all of these labels that we have here, all right?
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=146)** So we're going to just create a for-loop we're going to say for string label, all labels.
>
> **[2:34](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=154)** So for every label in our all labels list, what we're going to do, is we're going to get all of the data items from our classifiers data items list here that belong to that label.
>
> **[2:48](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=168)** And that's going to look something like this.
>
> **[2:50](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=170)** We're going to say, list data item, group data items equals this.dataitems.stream.
>
> **[3:01](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=181)** And then we're going to say .filter, and we're going to filter out all of the data items that belong along to this label.
>
> **[3:08](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=188)** So we're going to say .filter, and you can say either point or item here, I just call it point.
>
> **[3:14](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=194)** We're going to say point.getclassifier.equals label.
>
> **[3:20](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=200)** And then we're going to say .collect and turn that into a list.
>
> **[3:26](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=206)** So at this point, we have all of the data items that we've added to our classifier that have this label here.
>
> **[3:32](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=212)** And the next thing we have to do, is we have to calculate the mean and and standard deviation of each column, right?
>
> **[3:40](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=220)** That is of each dimension of our data for this group group, all right?
>
> **[3:45](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=225)** So, if we take a look at our data again, basically what that is means is we're going to calculate the mean for this first column, mean and standard deviation for this first column.
>
> **[3:55](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=235)** Mean and standard deviation for the second column, for the third column and for the column respectively.
>
> **[4:01](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=241)** So this is where we're going to have to do a little bit of code wrangling here.
>
> **[4:05](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=245)** Basically what I'm going to do, is say, list double, and we're going to call this group, column means, all right?
>
> **[4:14](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=254)** And basically what that's going to be is a list of the means for each column, it's going to be a four element list.
>
> **[4:21](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=261)** And for that we're going to actually create a separate method that'll calculate this because this logic is pretty complicated to put all inside this classify point methods, so we're going to split that out.
>
> **[4:33](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=273)** All right, so we're going to say getColumnMeans for our groupDataItems, and we'll come back and implement this in just a second.
>
> **[4:44](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=284)** Right now I'm just finishing up the logic that we're putting in this for loop so that we can have a better idea of how it all fits together.
>
> **[4:50](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=290)** And after that, we're going to say list double, and this is going to be our group column standard deviations.
>
> **[4:59](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=299)** And we're going to create a separate method for calculating those as well.
>
> **[5:02](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=302)** So we're going to say get column standard deviations of our groupDataItems.
>
> **[5:11](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=311)** And finally, what we're going to do, is we're going to use this data to calculate the probability that this unlabeled point way up here belongs to this group group.
>
> **[5:21](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=321)** And we're going to add that to this probabilities map that we created.
>
> **[5:26](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=326)** So what that's going to look like is something like this.
>
> **[5:28](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=328)** We're going to say probabilities.put and the key is going to be the label, and the value for that label, we're going to use yet another method that we're going to implement just like get column means and get column standard deviation.
>
> **[5:44](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=344)** It's going to be called getLabelProbabilityforPoint.
>
> **[5:50](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=350)** And into that we're going to pass the group column means and group column standard deviations, along with our unlabeled that we want to try and classify.
>
> **[6:01](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=361)** So we're going to say groupColumnMeans, groupColumnStandardDeviations, and on labeled point.
>
> **[6:11](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=371)** And there we go, so that's all the logic for our for-loop.
>
> **[6:17](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=377)** So again, what we're doing is we're getting all of the data items that belong to a given label, we're calculating the mean and standard deviation for each dimension of those items in that group, right?
>
> **[6:30](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=390)** Again, so we're calculating the mean of the first column, second column, third column and fourth column for all the items in that group.
>
> **[6:40](https://www.linkedin.com/learning/data-science-for-java-developers/splitting-your-dataset-by-label?u=76281980&t=400)** And then what we're doing is we're using the mean and standard deviation to calculate the probability that that point belongs to that group based on the statistical measures that we calculated before.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), super (1), case, (1), finally, (1), pass (1)
> **Code Identifiers:** groupdataitems (2), getcolumnmeans (1), getlabelprobabilityforpoint (1), groupcolumnmeans (1), groupcolumnstandarddeviations (1)
> **Definitions:** in other words (1), is a  (1)
> **Best Practices:** the key is (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Calculating mean and standard deviation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=1)** - [instructor] Alright, so at this point, all we have left to do is implement these methods that we've typed out here.
>
> **[0:06](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=6)** So there's three of them.
>
> **[0:08](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=8)** Let's start off with get column means.
>
> **[0:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=11)** So going up a little bit in our Naive Bayes classifier class, we're going to create a private method, we're going to say private, it's going to return a list of doubles, called get column means (keyboard chattering) it's going to take a list of data items, we'll call it items as an argument.
>
> **[0:34](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=34)** And again, what it's going to do is calculate the mean of each column for a given group, right, so it's going to calculate the mean of first, second, third fourth columns, basically as many columns as are in the data set.
>
> **[0:49](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=49)** So the first thing we're going to do, we're going to create an empty list called column means.
>
> **[0:57](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=57)** Alright, we're going to say equals new ArrayList.
>
> **[1:01](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=61)** And then we're basically going to loop through each of the columns.
>
> **[1:05](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=65)** For the first item, right, we're just kind of assuming that each of the items here has basically the same dimensions.
>
> **[1:13](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=73)** So what we're going to say is for int i equals zero, i is less than, and we're just going to test the dimensions of the first item.
>
> **[1:22](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=82)** So items, dot get zero, dot get coordinates, dot size, i plus plus.
>
> **[1:31](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=91)** And inside here, we're basically going to calculate the mean for each column.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=97)** So here's what that's going to look like.
>
> **[1:38](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=98)** We're going to start off by saying double column mean, equals, and what we're going to do is we're going to get the first column, right or the IF column of every item.
>
> **[1:51](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=111)** and use that to calculate the mean.
>
> **[1:53](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=113)** So what that's going to look like, we're going to say items, dot stream, dot map, we're going to map each item to item dot get coordinates, dot get I.
>
> **[2:07](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=127)** And here, it's going to complain at us that we need to have this be final.
>
> **[2:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=131)** So what we need to do is basically just say int, final i equals I, and use final I there, let's just something funny when we're working with lambdas.
>
> **[2:23](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=143)** And then we need to say dot map.
>
> **[2:26](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=146)** to double, right, this basically converts the capital D doubles that we're getting from our coordinates here, into lowercase D doubles, that we can actually use in our computations, you'll see what I mean in just a second.
>
> **[2:42](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=162)** So double colon colon double value is what we need to pass there.
>
> **[2:48](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=168)** And last but not least, we need to simply say. toArray.
>
> **[2:55](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=175)** So this gives us a list of all of the first coordinate or if coordinate that is first, second, or third or fourth, et cetera.
>
> **[3:04](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=184)** for all of our items.
>
> **[3:06](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=186)** What we need to do now is we need to get the mean of that list.
>
> **[3:10](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=190)** And the way that we do that, well, an easy way to do that anyway, is by using the stat utils from the Apache Commons, make sure to add that to your project.
>
> **[3:19](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=199)** If you haven't already.
>
> **[3:21](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=201)** We're going to say statUtils dot mean.
>
> **[3:30](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=210)** And that's going to give us the mean for all of the values in whatever column we're currently looking at.
>
> **[3:38](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=218)** And now that we have that last but not least, we just need to say column means dot add Column mean.
>
> **[3:49](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=229)** And then at the end of this method, we just need to say return column means and that is how we get the mean for each column of our data set.
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=240)** So the next thing we need to do, right, we've implemented the first method here.
>
> **[4:04](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=244)** And the good news is that implementing the second method get column standard deviations is going to look almost identical to our get column means method.
>
> **[4:13](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=253)** The only difference is that instead of using stat utils dot mean, we're going to use standard utils dot variance, and since the mean is the square root of the variance, we can use that to get the standard deviation.
>
> **[4:28](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=268)** So we're going to say dot variants.
>
> **[4:31](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=271)** We're going to change this to column, standard deviation, column standard deviation, column standard deviations (keyboard chattering) and change this to get column standard deviations.
>
> **[4:49](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=289)** We've got two more to do here, column standard deviations column, standard deviations.
>
> **[4:57](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-mean-and-standard-deviation?u=76281980&t=297)** So we have the variance and the last thing we need to do here is just say, dot add math dot square root column standard deviation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (2), class, (1), pass (1)
> **CLI Commands:** apache (1), make (1)
> **Code Identifiers:** toarray (1), statutils (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Calculating datapoint probabilities
> [LinkedIn Learning](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=0)** - [Instructor] So we've got our column standard deviations now, that's pretty straightforward.
>
> **[0:04](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=4)** The last method that we have to implement is our get labeled probability for point method.
>
> **[0:11](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=11)** All right so let's put that here.
>
> **[0:13](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=13)** We're going to say private double get labeled probability for point and this is going to have three arguments here.
>
> **[0:23](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=23)** The first one is going to be a list of doubles which is going to be the column means for the group we're referring to here for the group that has this label.
>
> **[0:33](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=33)** So we're going to say group column means.
>
> **[0:39](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=39)** The second argument is going to be the standard deviations for that group.
>
> **[0:43](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=43)** So list double group column standard deviations and the last argument is going to be the actual data item that we're testing here.
>
> **[0:55](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=55)** So we're going to say data item item.
>
> **[0:58](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=58)** Okay so the first thing we're going to do here is we're going to start off by saying double probability equals 1.0 and the reason we're doing this is because as we go through because of Bayes' Theorem, we're going to be multiplying all of the probabilities together.
>
> **[1:18](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=78)** So in order to not have every answer be zero we're going to start off with the probability as one and then this will be multiplied by the given probabilities for each column as we go through.
>
> **[1:32](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=92)** So next we're going to have a for-loop we're going to say int I equals zero.
>
> **[1:37](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=97)** I is going to be less than group column means dot size I plus plus and we're going to start off by getting the mean and standard deviation for that given column as well as the points value for that item, right?
>
> **[1:52](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=112)** This items value for that given column.
>
> **[1:55](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=115)** So we're going to say double mean equals group column means dot get I double standard deviation equals group column standard deviations dot get I and double item value equals item dot get coordinates dot get I.
>
> **[2:20](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=140)** So now what we're going to do is given the value that our data item has for that column and given a standard distribution with this mean and standard deviation that we calculated we're going to calculate the probability that that item actually belongs to the group with this label.
>
> **[2:48](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=168)** So here's what that's going to look like.
>
> **[2:49](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=169)** We're going to create a normal distribution object using the normal distribution class from Apache commons.
>
> **[2:57](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=177)** Again, if you haven't added that already, make sure to do so.
>
> **[3:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=180)** We're going to say normal distribution dist equals new normal distribution mean and standard deviation.
>
> **[3:10](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=190)** We're basically creating a normal distribution with the given mean and standard deviation, which as those of you who are familiar with statistics will know a mean and a standard deviation are all that we need to define a normal distribution mathematically and now that we have our normal distribution, what we're going to do is calculate the probability that this item belongs to this group and multiply that by the probability.
>
> **[3:37](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=217)** So we're going to say probability times equals dist dot cumulative probability item value
>
> **[3:49](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=229)** and last but not least we're going to say return probability and that should give us all we need.
>
> **[3:58](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=238)** So now that we've created our naive Bayes classifier, right?
>
> **[4:00](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=240)** We've got everything that we should need implemented.
>
> **[4:02](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=242)** We're going to go back to our naive Bayes example class here and actually see this thing in action.
>
> **[4:10](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=250)** So the only thing we really need to do here is we need to change this from a KNN classifier to a naive Bayes classifier.
>
> **[4:22](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=262)** Okay, change that as well.
>
> **[4:25](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=265)** We're adding all of our items here and we just need to remove this number at the end since we don't need that anymore and let's see what the result is when we run our program and when we first run this, we're going to see some very very small numbers here, calculated for the probabilities and that's because basically we've put in a very unlikely number as our example.
>
> **[4:55](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=295)** So if you want a slightly more likely example what you can do is go into the Iris data file and simply copy one of these data items and see what are naive Bayes classifier would say for one of those and we're going to change those numbers there and run our example and here we're going to see small numbers over here but over on this side, we're actually going to see that we have a fairly reasonable number here and now, one thing to keep in mind is that with a naive Bayes classifier, the probabilities are not going to add up to one.
>
> **[5:34](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=334)** As you might be used to in another statistical scenarios.
>
> **[5:38](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=338)** Basically what we end up doing with naive Bayes classifiers is we pick whichever one of these labels is the most likely.
>
> **[5:46](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=346)** So in our case, that's going to be this one which is where we got this data point from.
>
> **[5:52](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=352)** If you want to test some of the others, for example.
>
> **[6:05](https://www.linkedin.com/learning/data-science-for-java-developers/calculating-datapoint-probabilities?u=76281980&t=365)** You're going to see that the likelihood is going to be the highest for that label and that is the basics of implementing a naive Bayes classifier.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (1), this, (1), case, (1), from. (1)
> **CLI Commands:** apache (1), make (1)
> **Env Vars:** knn (1)
> **Versions:** 1.0 (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)


## Path Context

### In [[Advance Your Java Skills]]
← [[Introduction to Docker for Java Developers]] | **3 of 4** | [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] →

## Appears In

- [[Advance Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Advanced SQL for Data Science- Time Series]] — Data Science
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
