---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: leveraging-google-cloud-developer-and-devops-tools
url: "https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools"
duration_minutes: 93
duration: 1h 33m
level: Intermediate
updated: 9/12/2022
learners: 71896
skills:
  - DevOps
  - DevOps Tools
  - Cloud Development
  - Google Cloud Platform (GCP)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGNj0oA1ccRkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1662645118935?e=2147483647&amp;v=beta&amp;t=ZStBusfFobd7cSAQm5sPTt6kKro_eE-tYW01_1vc2AA"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started with Cloud Development]]'
prev_courses:
  - '[[Azure Understanding The Big Picture]]'
path_nav: '[{"path":"Getting Started with Cloud Development","position":4,"total":4,"prev":"Azure Understanding The Big Picture","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/devops
  - skill/devops-tools
  - skill/cloud-development
  - skill/google-cloud-platform-gcp
status: not-started
created: 2026-04-21
---

![Leveraging Google Cloud Developer and DevOps Tools](https://media.licdn.com/dms/image/v2/C4E0DAQGNj0oA1ccRkA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1662645118935?e=2147483647&amp;v=beta&amp;t=ZStBusfFobd7cSAQm5sPTt6kKro_eE-tYW01_1vc2AA)

# Leveraging Google Cloud Developer and DevOps Tools

> With so many services to choose from on the Google Cloud Platform (GCP), how do you know which services are best for you, or which tools will best meet your needs? In this course, instructor Lynn Lingit shows you some of the most commonly used tools available on the GCP, along with the skills you need to know to leverage tools that fit your unique role, your organization, and your workflow.Discove

> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools) | 1h 33m | Intermediate | 72K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Lynn Langit]]

## Skills Covered

- DevOps
- DevOps Tools
- Cloud Development
- Google Cloud Platform (GCP)

## Table of Contents

### Introduction

#### State of Google Cloud tools
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=0)** - [Lynn] There are so many Google Cloud services.
>
> **[0:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=3)** After you determine which services to use, the next big question that we all have to answer is which tools will we use to interact with those services?
>
> **[0:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=12)** Choices include the Google Cloud Console, scripting tools, such as the G Cloud Command from the Google Cloud Software Development Kit, or SDK, deployment tools, such as services like deployments and deployment languages like Terraform.
>
> **[0:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=28)** I've created this course and structured it based on job role.
>
> **[0:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=32)** Because what I've found in my work as a cloud architect, the tools will vary depending on what role you're working in.
>
> **[0:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=39)** So there are four parts, application users, data scientists, DevOps professionals and developers.
>
> **[0:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=46)** My tip for reviewing and working through this course is to select the role or roles that you are functioning in in your Google Cloud team and to follow those sections of the course to find my best practices, tips and tools that I use in my real world practice.
>
> **[1:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=64)** I'm Lynn Langit and this is Google Cloud Platform Tools.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/state-of-google-cloud-tools?u=76281980&t=68)** We have lots to cover, so let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (1), find (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Env Vars:** sdk (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [lynn] (1)

#### Who should watch this course
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=0)** - [Instructor] This course is designed for learners of Google Cloud who work in various roles.
>
> **[0:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=6)** The first role is those who are using applications that are running on the Google Cloud.
>
> **[0:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=12)** This could be people who work in analytics, people who are running computational or data workloads, and there are many others.
>
> **[0:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=20)** Also, this course is designed for those who are application developers.
>
> **[0:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=26)** You might be writing application code or implementing libraries.
>
> **[0:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=30)** In addition to that, we'll be covering aspects of Google Cloud tools for those who are in a DevOps role.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=37)** People who are working in DevOps are responsible for monitoring applications that are running on Google Cloud, as well as looking at aspects like security of applications running on Google Cloud.
>
> **[0:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=48)** In addition to these three roles, this course is designed to present the tools that are available for those that are working with data scientists or machine learning type of roles.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=59)** So I've structured the course based on these roles and I realize that sometimes this can all be one person.
>
> **[1:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=65)** I know I've done all these different roles, or it can be an individual role for a person or a team.
>
> **[1:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=71)** So when you're deciding how to view this course, you're going to want to consider which type of roles are applicable to your usage of Google Cloud.
>
> **[1:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=81)** In addition to that, this course is designed for those who have done some sort of exploration or even work with Google Cloud.
>
> **[1:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=89)** So I would call them advanced beginners.
>
> **[1:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=92)** If you are a true beginner, I'm going to show you some resources that you might want to watch before watching this course.
>
> **[1:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=98)** A great place to start is my GitHub repository.
>
> **[1:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=103)** And if you look in my GitHub Repository list on my main profile here, you can see that I have a number of associated repositories to other courses in the LinkedIn Learning library, and the top level is learning-cloud, but very specific to GCP, I have a gcp-essentials, gcp-for-bioinformatics in case you're working in bioinformatics, and gcp-machine-learning.
>
> **[2:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=128)** Inside of gcp-essentials, throughout this course, I'll be referring to additional information, scripts, and links that are set up in a section in each one of these folders which covers the major sections of the course.
>
> **[2:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=143)** For example, in terms of setup, if we go inside of here, you can see here's a tools section.
>
> **[2:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=148)** So that's the general pattern for additional resources for this course.
>
> **[2:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=152)** You go into the particular section in gcp-essentials, and you look for a tools folder.
>
> **[2:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/who-should-watch-this-course?u=76281980&t=158)** And then I will have information that I cover in the course and some supplemental additional information too.

> [!info]- Semantic Content
>
> **Tools:** github (2)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** gcp (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### A note about working with cloud services
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=0)** - [Instructor] When you're learning any cloud technology, you need to be aware that if you want to try out anything that I'm showing you, there's a couple of safety tips that I have and this is so that you don't run up an unexpected cloud bill because, of course, you're being charged for the services.
>
> **[0:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=15)** So when possible, you want to use a dedicated demo GCP account and rather than some sort of production account, so just a separate account, if possible.
>
> **[0:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=23)** At best, at least you want to use a separate GCP project that you can delete.
>
> **[0:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=28)** Within your work area for learning, you want to set up a budget alert so you get notified if you have charges that are unexpected.
>
> **[0:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=35)** I usually set this for $50 U.S. per day and this will trigger when you forget to, for example, shut off a high powered VM or something like that, which is kind of common, unfortunately.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=45)** So you do want to do that within your learning environment.
>
> **[0:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=49)** Also, for security, you want to set up multifactor authentication, or MFA, on a learning user account and that should be non-root or non-owner, if possible.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=60)** The reason for this is there's unfortunately a lot of nefarious activity out there on the public internet and there's actually just activity around looking for accounts that you can just run a dictionary attack on and they get hacked and they run up all kinds of charges.
>
> **[1:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=75)** So you're just basically putting another lock on the door.
>
> **[1:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=78)** Simple MFA is a software application that you can run on your phone, like Google Authenticator.
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=83)** There are also ones like YubiKeys, but you just want to put an additional check on all accounts, including learning accounts.
>
> **[1:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=90)** And then, always the good old, but we've all forgot, when you're done working with an environment, you want to turn off and/or delete.
>
> **[1:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=99)** And this is particularly around virtual machines because that's where a lot of costs are run up, so these can be just generic virtual machines or data platforms is one that I run into a lot as well.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/a-note-about-working-with-cloud-services?u=76281980&t=110)** So you really want to make sure that whenever you're learning cloud, this course or any course, you follow these best practices so that you don't get any unexpected bill when you're learning.

> [!info]- Semantic Content
>
> **Env Vars:** gcp (2), mfa (2)
> **Code Keywords:** delete (2), public (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 1. Tools for Application Users

#### Google Console for learners
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=0)** - [Instructor] As you get started working with GCP, you are going to first be some kind of a user.
>
> **[0:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=5)** Now you're probably watching this because you're a developer, data scientist or DevOps.
>
> **[0:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=9)** You're thinking, well, what do you mean?
>
> **[0:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=10)** I'm a technical professional, I'm not an application user, but it's a good way to put yourself in the mindset of that user, 'cause you're creating some kind of solution for eventual end user.
>
> **[0:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=21)** And also sometimes I find that people who work in an area, let's say developers, they skip right to the dev tools and they miss out on some tools that can help 'em be productive.
>
> **[0:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=29)** So we're going to start here.
>
> **[0:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=31)** Of course, we're going to start with the good old GCP console.
>
> **[0:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=33)** And I always like to say click on the console on learning and never beyond that.
>
> **[0:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=38)** And we'll get into why as we look at it.
>
> **[0:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=41)** In Google Cloud, we have the concept of a project which is a container for different objects.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=45)** It's a key and core concept and different, if you're coming from different clouds.
>
> **[0:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=50)** We're then going to look at authentication methods and using the integrated terminal, which is the Cloud Shell, which is a great productivity tool for users and those of us who develop applications as well.
>
> **[1:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=62)** In addition to this, something that I often find that developers, DevOps, and data scientists don't realize is available is quite a bit of service options choices and configurations within the console or Cloud Shell.
>
> **[1:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=75)** So I find that people who are developing applications will go right to application programming interfaces or interacting with code.
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=83)** And there's some settings that they might want to explore in a simpler way before they use them in a production environment.
>
> **[1:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=90)** And of course, when you're working with almost any cloud service, understanding the logging mechanisms and the logging tools, which in GCP in particular, have been quite enhanced over the past year or so, can really help with application usability, development, scalability, and so on and so forth.
>
> **[1:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=109)** So we're going to now start with the console.
>
> **[1:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=111)** And again, I'll remind you that if you're brand new to GCP, you might want to pause and take a look at my GCP Essentials course.
>
> **[1:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=119)** I am going to focus on core primitives in this course when we focus on the tools.
>
> **[2:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=125)** So storage buckets and virtual machines, because there are over 300 different services and I can't cover all of them.
>
> **[2:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=131)** But that is really what's covered in that other course.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=134)** This is going to be more a tooling course.
>
> **[2:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=136)** So with that said, let's go over to the console.
>
> **[2:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=139)** So the first thing you see on [console.cloud](https://console.cloud).[google.com](https://google.com) after you log in, and you have to log in with an account, which I've done already, is you see this new welcome screen.
>
> **[2:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=150)** And this is relatively new.
>
> **[2:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=151)** And the idea here is that the initial screen was not as concise as what people were needing.
>
> **[2:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=158)** So something that's interesting about this screen is that the recommendations here are actually driven on your own usage.
>
> **[2:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=165)** They start with a default set of recommendations, but you see in here really where you are, you see which organization you're working in, which project, what is the project number?
>
> **[2:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=175)** What's the project ID?
>
> **[2:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=176)** And then they have these quick links.
>
> **[2:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=178)** Now, if you've worked with GCP for a while, you might say, well, where's my dashboard.
>
> **[3:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=182)** That's what we're used to seeing, those of us who've been working with it for a while, and that's just a link away.
>
> **[3:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=187)** So this is the traditional dashboard with the default cards.
>
> **[3:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=192)** Now, one of the things that I like to do when I work with this is I like to always set up an environment that's more useful for me.
>
> **[3:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=198)** For example, I'm not going to be using app engines so I turned that card off.
>
> **[3:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=202)** And let's see what else I want to do here.
>
> **[3:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=205)** I might want to move the platform status below the billing, which you can do.
>
> **[3:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=209)** And then when you're done, you can just set that up.
>
> **[3:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=211)** So it's just a tip when you're working with the console, whether you're learning or if you are using it in production, for some reason, is that you can customize it.
>
> **[3:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=219)** In addition to the dashboard view, you have an activity view, and I have set up some virtual machines and some buckets and some Kubernetes clusters just to simulate more of a live environment in advance of this course.
>
> **[3:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=231)** So you have a log here where you can see what's going on or what has been done.
>
> **[3:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=236)** In addition, you have these recommendations which take a couple of hours or days to propagate, and this is a new account.
>
> **[4:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=244)** So what will show up here is Google recommendations around security and productivity.
>
> **[4:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=251)** A key aspect of working with a console is being in the right place.
>
> **[4:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=254)** And especially if you're coming from a different cloud, notably Amazon, that sets up their console by geographic locations or regions, it's easy to be a bit confused because Google does not set it up that way, it sets it up by projects.
>
> **[4:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=268)** So the top level hierarchy for most of your GCP accounts will be an organization.
>
> **[4:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=274)** And that has been set up by LinkedIn Learning here.
>
> **[4:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=276)** And then underneath that, this is a sign for an organization, are your projects.
>
> **[4:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=281)** And you can see the ancestry.
>
> **[4:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=283)** Now, I've pre-created a couple of projects.
>
> **[4:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=285)** And a tip that I have for usability is to go ahead and star whichever one you're using.
>
> **[4:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=290)** And again, this is a little bit artificial because in the real world, I've worked in cases where there's tens or hundreds or even thousands of projects in the project list.
>
> **[5:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=300)** Now, Google being Google, the search within the console works really, really well.
>
> **[5:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=305)** So if I were to just search here, it's going to be really effective.
>
> **[5:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=309)** And I know this is a little artificial, I only have two projects, but do know that the search works really, really well.
>
> **[5:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=315)** Of course, if you wanted to create a new project, you just click here.
>
> **[5:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=318)** But a usability focus is to make sure that you're in the right project because of course, if you're in different projects, you're going to have completely different resources.
>
> **[5:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=328)** Search as well, up at the top, has been enhanced.
>
> **[5:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=331)** So you can search for products, resources, or docs.
>
> **[5:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=334)** So if I search for compute, for example, I get products, I get documentations, and I can get resources for this particular project.
>
> **[5:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=343)** It's a very smart search.
>
> **[5:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=345)** I tend to use this search rather than using the traditional menu over here, which I'll cover in the next video, because it works really, really well.
>
> **[5:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=352)** And this is different, again, than some other vendor tools.
>
> **[5:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=355)** I'll be covering these other buttons in subsequent videos.
>
> **[5:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=358)** But again, every item on the menu has some great functionality, even on the first page.
>
> **[6:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/google-console-for-learners?u=76281980&t=365)** So it's great for you to take a look and to see if any of these are going to be useful for your particular use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), while, (2), this, (1), new. (1), case. (1)
> **Env Vars:** gcp (7)
> **Definitions:** is a  (6)
> **CLI Commands:** find (3), make (1)
> **Prerequisites:** set up (3)
> **URLs:** [console.cloud](https://console.cloud) (1), [google.com](https://google.com) (1)
> **Tools:** gcp console (1), terminal (1)
> **Analogies:** for example (2)

#### User authentication and authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=0)** - Now, continuing our tour of the console and talking a little bit about authentication and authorization, I have a full admin account here, which some of you might have, but you might log in and see some of even these resource panes are not available.
>
> **[0:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=15)** You can always verify who you're logged in as by clicking the authentication in the upper right.
>
> **[0:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=19)** And you can see I'm logged in here, and I could sign out or switch account if I needed to.
>
> **[0:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=24)** Now, in addition to working with a console by just using the search and viewing various resources, an additional way that you can interact with Google Services is through this button right here, which is the Cloud Shell.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=37)** Now, the first time that you work with the Cloud Shell, which is a virtual machine that has the Google Cloud SDK on it, you would have to authenticate.
>
> **[0:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=47)** Now, because I have used this once today already, I have already authenticated, and you can see that once it comes up on the bottom here, that the project is set to langit-tools.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=59)** And if I wanted to use a different project, I would use gcloud config set project to the project ID.
>
> **[1:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=70)** And so you can see langit-tools is the project I'm on.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=73)** The other project I have is langit-costs.
>
> **[1:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=76)** So let me switch to that project.
>
> **[1:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=80)** And now I have to authorize.
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=82)** So once you authorize, what's going to happen once I click this, is it's going to take me out to a browser.
>
> **[1:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=89)** And then it generates a key, which is exchanged within the Google ecosystem with this virtual machine, which is hosted on the Google ecosystem.
>
> **[1:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=99)** Now in a default account, this is all connectable via network within the Google Cloud.
>
> **[1:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=105)** I have had clients for whom this is not meeting their security requirements, because they have what's called a private network or private VPC, and they then do not use this Cloud Shell.
>
> **[1:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=116)** So by default, it's enabled.
>
> **[1:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=118)** But if this is a situation that's not going to work well for you due to your security risks, you don't have to enable it.
>
> **[2:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/user-authentication-and-authorization?u=76281980&t=125)** And then once you're in this, then you can go ahead and interact with this, which I'll show in the subsequent tutorials.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), switch (2), private (2), let (1), default, (1)
> **Env Vars:** sdk (1), vpc (1)
> **Definitions:** is a  (2)
> **CLI Commands:** gcloud (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - now (1)

#### GCP services and menus
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=0)** - [Instructor] Now once you're working in the console, as I mentioned, I typically, if I want to find something, I'll just type in the word compute for virtual machines, storage for storage buckets.
>
> **[0:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=11)** If I had Kubernetes, I would just type Kubernetes, and you can see the search works really, really great.
>
> **[0:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=17)** It always gives you the products or the services first, and then it gives you documentation and then resources that are specific to the project.
>
> **[0:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=24)** In addition to that, really common resources are listed over here on this card.
>
> **[0:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=28)** So if you want to go to your buckets, you can just click there.
>
> **[0:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=31)** And I've created some example buckets.
>
> **[0:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=34)** Now if I want to just go back, I just get the welcome page and then I go to the dashboard.
>
> **[0:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=39)** Now there is a menu, I don't very often use it, because I usually use the search.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=45)** If you want to use the menu though, the tip I have is that you want to pin the item.
>
> **[0:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=50)** So for example, we are using Compute Engine, and so you see that we had that little pin come up there.
>
> **[0:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=58)** Let me just go back.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=60)** And anything that you pin, there the pin came up, then it's pinned.
>
> **[1:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=66)** This is a little bit faster.
>
> **[1:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=67)** The Kubernetes engine, we're using that.
>
> **[1:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=70)** We're going to use cloud storage, we're using that.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=73)** And then within that, it just takes it to the top of the menu.
>
> **[1:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=76)** If you wanted to view all products, again, you can see when they say all products, there's a lot of basically services, but there's a lot of them and they're categorized here.
>
> **[1:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=86)** So if you want to look at all the databases, for example, then it gives you information about it.
>
> **[1:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=91)** I don't find this is really super useful, but if you are just trying to understand, maybe you're coming from another cloud, what's available here, that's another menu option.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=101)** What I often do with the menu is I just get it out of the way, because it takes up space.
>
> **[1:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=107)** You can pin it out, looks like at this resolution, I can't do it, or you can pin it back.
>
> **[1:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=112)** So out here or back.
>
> **[1:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=114)** I tend to use the menu in other clouds more than this one, so I tend not to use it.
>
> **[1:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=119)** This thing up here brings the menu forward and back, so it's called the hamburger menu.
>
> **[2:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=124)** And then you can just go in, and that's kind of how you navigate around.
>
> **[2:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=128)** And then within the various services, which are categorized here you can see.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=134)** For example, under compute, you have Compute Engine, Kubernetes, VM engine, Batch, which is a new service, and Distributed Cloud.
>
> **[2:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/gcp-services-and-menus?u=76281980&t=141)** So you can look for the products that are there, but you won't see me using this too much in this course or in the real world because I like to just use this menu up at the top.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** find (2)
> **Code Keywords:** let (1), super (1)
> **UI Navigation:** go to (2)
> **Speakers:** - [instructor] (1)

#### Key Google Cloud services: Compute
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=0)** - [Instructor] As an application user, you'll work with lots of services, and I'm just picking the most common, virtual machines, buckets, data services, to get us started.
>
> **[0:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=9)** So to interact in the console with virtual machines, the easiest way to do it is either to click on compute engine or type compute here.
>
> **[0:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=16)** I'll just click on compute engine.
>
> **[0:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=18)** That's actually the easiest.
>
> **[0:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=20)** And I have spun up a number of machines here.
>
> **[0:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=22)** I'm going to just hide this menu.
>
> **[0:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=24)** So let's say that I wanted to work with one of these machines, this instance one here.
>
> **[0:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=29)** This is a Linux instance, so the typical way you would do that is with an SSH client.
>
> **[0:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=34)** Now you could download and install a client on your local machine, but I consider that kind of non-cloud native.
>
> **[0:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=40)** When possible. I like to use cloud tools to connect with cloud services.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=45)** And to enable that, Google gives you an SSH-in-browser, and it gives you a number of different options here.
>
> **[0:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=52)** So you can see open in a window, custom port, you can have a private SSH key other than the one that Google provides, using the scripting gcloud command or another SSH client.
>
> **[1:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=62)** So I'm just going to go with the default here, and I've already created this VM and it's running.
>
> **[1:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=66)** It's a default Linux VM.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=68)** So what I like about this SSH in browser tool is there's zero installation.
>
> **[1:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=74)** And it is more secure than a desktop based tool, like if something on your laptop, because the keys are being handled, which is authentication by Google.
>
> **[1:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=84)** So you can see once you're in here, just make it bigger.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=87)** It's a regular Linux instance, and you can just do whatever inside of here.
>
> **[1:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=91)** And then a couple of other things that are nice about this tool is you have the ability to upload a file or download a file, just kind of gooified.
>
> **[1:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=99)** I mean, obviously you can do this with Linux commands.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=101)** You can send a key combination.
>
> **[1:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=103)** And then in the settings, you have themes, fonts, and some other configuration information.
>
> **[1:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=109)** So this is a virtual machine that Google is providing.
>
> **[1:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=114)** It does time out if you leave it on for hours, and it has to re-authenticate.
>
> **[1:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=119)** But what I like about it is the ability to connect in browser.
>
> **[2:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=124)** Now, if I switch back over here, you can see on the right side here, I can perform basic actions in the browser.
>
> **[2:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=131)** I can stop an instance.
>
> **[2:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=133)** I can reset it.
>
> **[2:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=133)** I can delete it.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=134)** I can look at network details or logs.
>
> **[2:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=137)** So for example, if I view network details, that's going to take me over to the network interface information.
>
> **[2:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=143)** So again, when you are learning, or when you are in a situation where you're developing, you're not in production, to me, it's completely fine to use the console to quickly understand or debug situations.
>
> **[2:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=157)** In addition to this, of course, we saw in our previous movie that we can use the Cloud Shell.
>
> **[2:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=162)** And if you remember how to do that, that's yet another VM.
>
> **[2:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=165)** So this is not the one for the SSH client.
>
> **[2:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=167)** And then we would use something like gcloud instances list.
>
> **[2:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=172)** And of course you'd have to know the command once you're authenticated.
>
> **[2:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=176)** And I don't know the command, I guess.
>
> **[2:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=178)** So, oh, gcloud compute, gcloud compute instances, and there is a way to auto complete this as well, list.
>
> **[3:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=187)** And once you're authenticated, then you can see all the instances, and then you can interact with them using the gcloud command, which is the basis for scripting.
>
> **[3:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-compute?u=76281980&t=196)** So what's nice about this Cloud Shell is again, it's a cloud based VM on the Google system, where the authentication is handled by Google, and it allows you to work in a lightweight way with your cloud services.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (6), gcloud (5), make (1)
> **Code Keywords:** let (1), private (1), switch (1), delete (1), interface (1)
> **Env Vars:** ssh (6)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Key Google Cloud services: Files and data
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=0)** - [Instructor] So continuing on looking at just some ways that the console works.
>
> **[0:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=4)** If we were now wanting to look at storage buckets, what do you think we should do?
>
> **[0:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=9)** Well, what I would do is I would just type in the search bucket and then I would go over to Cloud Storage.
>
> **[0:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=16)** So again, for all of the console services, your console's going to look different, 'cause I've set some examples up here.
>
> **[0:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=21)** I've just created a couple buckets, just like I had created some VMs.
>
> **[0:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=25)** Now, in addition to being able to use the console to perform basic activities, like create a bucket, view the contents of a bucket, which this has nothing in it, you can also think about what you want to see at the top level.
>
> **[0:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=38)** This I've found this to be useful when I'm working with various customers.
>
> **[0:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=42)** You can see there are a number of labels here and sometimes these things are useful, sometimes they're not useful to me.
>
> **[0:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=48)** So I generally will customize my view by going into Displayed columns, particularly for buckets 'cause I'm working with a lot of data lakes, and so you get lots and lots and lots of buckets.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=59)** So if I don't really care about the Retention policy or the Lifecycle rules, I'll turn that off.
>
> **[1:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=65)** If Requester Pays is not something that I'm interested in, if I understand what's going on with encryption, I don't need to see that.
>
> **[1:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=72)** And then, kind of strangely, Labels is not turned on.
>
> **[1:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=75)** So labels are key value pairs and this is something that just a real world tip.
>
> **[1:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=79)** I just see a lot of customers using labels and the default view in browser for storage doesn't turn this on.
>
> **[1:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=85)** I'm actually going to turn off a bunch of other things so you can see the labels pretty clearly.
>
> **[1:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=90)** And you can see that labels are optional, but again, it's a best practice in a lot of different scenarios.
>
> **[1:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=97)** And so just a couple different things I want you to be aware of.
>
> **[1:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=100)** One, the views of the objects are customizable.
>
> **[1:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=103)** This one happens to be under column Displayed options.
>
> **[1:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=106)** But it depends on which page of the console you're in.
>
> **[1:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=109)** And particularly with buckets, Labels are not turned on by default and they're not set up by default.
>
> **[1:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=116)** I had to manually assign these labels by going in here and saying Edit labels basically and to add them.
>
> **[2:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=122)** 'Cause you can see that this bucket, a default bucket, doesn't have any labels.
>
> **[2:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=126)** But it's very, very common that customers will add these for billing tracking, for security, and they just don't show up.
>
> **[2:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=133)** And also if you look really closely, this is not bolded.
>
> **[2:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=137)** You can see these are bolded. These are the defaults.
>
> **[2:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=139)** And the notice here, for example, you have Sort.
>
> **[2:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=141)** So the console has all these little nuggets in it, and I just see a lot of people, especially those that write code for a living, not taking the time to get the information they can get out of the console.
>
> **[2:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=152)** So, you know, there's a time and a place for it, mostly learning, mostly debugging.
>
> **[2:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=157)** Obviously in production, this is not going to be your primary place because you're going to want to script your production stuff and check that into source control.
>
> **[2:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=165)** But there's a lot of richness in the console, but you kind of have to mouse over to see what information is there sometimes.
>
> **[2:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=172)** Click the little menus to see what's there.
>
> **[2:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=175)** You see, this is full cell versus partial cell.
>
> **[2:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=178)** It's kind of a minimalist console, in that, it's not obvious sometimes.
>
> **[3:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=182)** Here's another one where you can filter the buckets.
>
> **[3:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=185)** So you can see if there, you know, was certain properties to the buckets.
>
> **[3:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=190)** 'Cause I've come into a lot of scenarios where there's tens or hundreds or even thousands of buckets, and filtering is pretty necessary.
>
> **[3:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-files-and-data?u=76281980&t=197)** So taking the time to explore all the knobs and widgets for the services you use constantly is a usability tip that I'd give to you.

> [!info]- Semantic Content
>
> **Analogies:** just like (1), for example (1)
> **Code Keywords:** default. (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Key Google Cloud services: IAM and more
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=0)** - [Instructor] So next up in the console is IAM R security.
>
> **[0:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=3)** So IAM is part of security, Identity and Access Management.
>
> **[0:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=8)** So over in IAM here, what I've done is in addition to me as the owner, I've set up a typical scenario where you have somebody else who has some sort of limited permissions 'cause obviously most people using the services aren't owner and I've set up an external, it's just another address I have as a storage object viewer.
>
> **[0:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=28)** And you can see inside of here that you can set security roles.
>
> **[0:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=31)** Security in GCP is probably the thing that I find a lot of customers having the most challenges with.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=37)** So I would say that understanding the console tools would be super, super helpful.
>
> **[0:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=44)** To that end, in addition to this IAM interface here where you can just verify basic permissions, notice we have this security insights which Google will be using machine learning to analyze how these accounts are actually accessing services and they would be recommending if things are over or it'd be over-permissioned basically so that you could tighten up those permissions.
>
> **[1:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=67)** Again, that's something I see a lot of customers they don't even know that's there when they're trying to debug permissions manually or tighten them manually.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=73)** So you definitely want to use this.
>
> **[1:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=76)** In addition to this, there are a number of tools inside of the IAM and Admin.
>
> **[1:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=81)** In particular, you've got policy troubleshooter and policy analyzer.
>
> **[1:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=86)** So you can put in a principal and then you can get a list of resources.
>
> **[1:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=92)** Now, remember that principle was set up that they could work with buckets, but nothing else.
>
> **[1:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=96)** So if I say, do they have permission on an instance to, this is a compute engine instance, to list the instances to see it?
>
> **[1:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=107)** This should fail, which it did.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=110)** I find a lot of customers are just not even aware of these tools.
>
> **[1:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=114)** And so the sort of takeaway is whether it's for security or whether it's for configuration.
>
> **[2:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=120)** Google is providing more in browser tools that are useful.
>
> **[2:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=123)** In addition to the policy troubleshooter, there's a policy analyzer that give you some queries.
>
> **[2:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=130)** So again, if you're in, especially a high secure type environment, a healthcare or finance or something, these tools can really help you as you're setting up production level security.
>
> **[2:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=139)** Now, as we wind down this section and we think about user tools and user application tools, I want to refer you to my GitHub repo and the section in my GitHub repo under set up in IAM called tools where there's more information about tools that users will use.
>
> **[2:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=157)** In particular, I've got a section on the Cloud Shell that talks about more configuration about Cloud Shell.
>
> **[2:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=163)** And I want to call your attention to this gcloud beta interactive, which will give you access to beta services and will also do autocomplete.
>
> **[2:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=173)** I think I mentioned that in an earlier movie.
>
> **[2:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=175)** So when you type gcloud compute for example, it'll give you a list of all the things that you can do with compute instances.
>
> **[3:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=182)** So I've got lots of additional information here and I will continually update this.
>
> **[3:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=186)** And this is found in gcp-essentials.
>
> **[3:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=188)** I have tools in each of the core areas.
>
> **[3:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=191)** So again, we just looked at storage.
>
> **[3:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=193)** I have tools inside of storage and these are the storage commands.
>
> **[3:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=197)** There are various commands.
>
> **[3:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=198)** So, so on and so forth.
>
> **[3:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=199)** So as you're going through this course, you might want to pause and go into the gcp-essential section.
>
> **[3:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=204)** We looked at compute as well, and I have tools in there and we haven't quite covered Terraform yet, but we will.
>
> **[3:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/key-google-cloud-services-iam-and-more?u=76281980&t=210)** So when you're working through this, you might use this as a companion.

> [!info]- Semantic Content
>
> **Code Keywords:** super (2), this. (2), this, (2), interface (1), else. (1)
> **Env Vars:** iam (6), gcp (1)
> **CLI Commands:** find (2), gcloud (2), terraform (1)
> **Prerequisites:** set up (4)
> **Tools:** github (2)
> **Exercise Files:** github repo (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 2. Tools for Data Scientists

#### Enable APIs for DLVMs
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=0)** - [Instructor] In this section, we're going to talk about GCP tools for data scientists.
>
> **[0:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=4)** In addition to the console, these include Cloud Shell and Scripts.
>
> **[0:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=9)** Using the GCloud scripting tool as a locally installed application on your laptop, Browser based CoLaboratory or CoLab Jupyter Notebooks, which run on Google Cloud but they're not accessible via the Google cloud console.
>
> **[0:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=27)** Google Cloud Managed Notebooks, which are called Vertex AI Deep Learning VMs and also the vertex AI machine learning APIs.
>
> **[0:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=39)** Just really, this is a subset of the tools.
>
> **[0:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=42)** Again, I have an entire course in the library called GCP ML that covers more extensively all the different services that are available.
>
> **[0:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=50)** The idea is to look at the tools from a data science viewpoint.
>
> **[0:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=55)** So let's start.
>
> **[0:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=56)** Although you could use a regular virtual machine and install whatever machine learning libraries, Jupyter Notebooks, so and so forth, and you might want to in some cases, there is an entire set of tools on the menu that are under Machine Learning and Google calls that AI or artificial intelligence.
>
> **[1:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=76)** The biggest set of these tools is under the Vertex AI Dashboard.
>
> **[1:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=81)** So if we go to that dashboard, the very first thing that we need to do is we need to enable the API.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=87)** Again, this is a pattern on the Google Cloud that some services are enabled by default, File Buckets for example, but most services are not.
>
> **[1:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=96)** You have to explicitly turn them on.
>
> **[1:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=98)** And the reason is to reduce the attack surface for security and to keep costs low.
>
> **[1:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=103)** So the first thing that we want to do is we want to enable this Vertex AI API, which is going to give us access to all the different services that include deep learning virtual machines, as well as other services.
>
> **[1:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=116)** So that takes a couple of minutes and while that's running what I'm going to do, oh, actually that was quicker than I thought, is I'm going to take us over to the Workbench area, which is where in the console you can have access to what are called Managed Notebooks.
>
> **[2:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=133)** It's also called deep learning virtual machines or DLVMs.
>
> **[2:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=137)** And the idea behind this is that you have data science tools that are pre-configured on virtual machines.
>
> **[2:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=144)** And if you click on New Notebook, you can see the plethora of different platforms that are available pre-configured and pre-optimized.
>
> **[2:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=153)** For most of my data science customers, they choose to use these pre-configured service instances rather than raw GCE VMs, because it's time saving and replicatable.
>
> **[2:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=164)** So for our purposes, we'll just select TensorFlow Enterprise.
>
> **[2:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=168)** And notice, we have a lot of different options here.
>
> **[2:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=170)** We can select GPUs or no GPUs.
>
> **[2:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=172)** GPUs of course are going to accelerate any workloads, but they're going to be more expensive.
>
> **[2:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=178)** So we're just going to take the smallest thing here just for demonstration, without GPU.
>
> **[3:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=184)** And then we're going to go ahead and looked at the advanced options as well.
>
> **[3:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=189)** And you can see that we have a monthly estimate, which again is some great information from the console and an hourly estimate that has details.
>
> **[3:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=197)** So again, this is this nuggets that you see in the console.
>
> **[3:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=200)** I think they're a little bit different than some of the other cloud vendors in the way the console is designed.
>
> **[3:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=205)** And various information that you can set up here.
>
> **[3:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=208)** And again, if you're ever unsure, just pass your mouse over the question mark, a nugget in the console, lots and lots of configuration options.
>
> **[3:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=217)** And then we can just go ahead and click create.
>
> **[3:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=220)** Now, one of the things about creating service instances for machine learning or really any purpose, is reproducibility.
>
> **[3:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=228)** So it's fine when you are learning to use the console, but what you want to be able to do is script the creation.
>
> **[3:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=238)** And we're going to get into that in subsequent movies.
>
> **[4:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=240)** Notice here we have our permission error.
>
> **[4:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=241)** "Could not list user managed notebooks from notebooks API.
>
> **[4:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=244)** Notebooks API has been disabled."
>
> **[4:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=247)** So one of the usability features of working with a Google services is APIs are turned off by default.
>
> **[4:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=254)** Remember, we turned on Vertex API, but in order to use this particular service, which uses Jupyter Notebooks, we also have to enable the Notebooks API, because rather than SSHing into this instance, we're going to use a Jupyter interface.
>
> **[4:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=268)** So this will take a couple of minutes to set up.
>
> **[4:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/enable-apis-for-dlvms?u=76281980&t=271)** So I'll pause here and we'll come back to this in a subsequent movie.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), gcp (2), gce (1), gpu (1)
> **Code Keywords:** let (1), default, (1), pass (1), default. (1), interface (1)
> **Tools:** jupyter (4), colab (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (2), install (1)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** gcloud (1)
> **Analogies:** for example (1)

#### Using Google Cloud or SDK with terminal
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=0)** - [Instructor] So your deep learning VM is ready and you can do your data science work with JupyterLab, so you just bring that up, and then go ahead, and I'm just got a sample notebook here.
>
> **[0:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=11)** You could run any notebook, for example.
>
> **[0:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=13)** This doesn't do anything, but just to show you that it's fully functional.
>
> **[0:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=17)** Then when you're done working, assuming you're not working 24/7, you not only you're probably going to close JupyterLab, but you're probably going to want to stop your instance.
>
> **[0:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=26)** Now, again, this is a VM, but it's a higher level, and the idea I'm trying to teach here using deep learning VMs is you always work in the console at the level, because if you go to Compute Engine, you can see that this instance is here, so you could, you know, go into the instance here at the console and you could work with it, but you don't see a stop button.
>
> **[0:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=49)** Well, the reason for that is because you need to stop it where it's being managed, which is here.
>
> **[0:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=56)** So you click STOP to stop it.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=59)** Now, if you're working with a raw VM, you could stop the raw VM, see, here's STOP button.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=68)** Or, of course, in either case, you could use a scripting command.
>
> **[1:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=72)** Now, if you're working in VMs, then you can see this is spinning 'cause it's stopping, to work with the gcloud command.
>
> **[1:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=81)** Do you remember how to pull up a Cloud Shell really quickly?
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=82)** You just click this button right here.
>
> **[1:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=85)** And then the command to do this is gcloud compute instances stop and then the instance name.
>
> **[1:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=92)** So that would be this instance-1.
>
> **[1:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=97)** And that would be the same thing as clicking that STOP button.
>
> **[1:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=100)** And the reason that you'd want to run it here is you'd want to test a script 'cause you might want to do it at the end of every day, for example, and kick that script off with a cron job.
>
> **[1:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=109)** So there's a couple things I'm showing you here.
>
> **[1:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=111)** First is that if you have a VM that's being managed by something higher level, in this case, TensorFlow is being managed by Vertex AI, then in the console, use the Vertex AI interface, even though it can show up in some other interfaces.
>
> **[2:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=126)** And then the second thing is the scripting capability.
>
> **[2:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=130)** 'Cause you would think, and I'll leave this for an exercise, that it would not be gcloud compute instances stop for the TensorFlow instance.
>
> **[2:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-or-sdk-with-terminal?u=76281980&t=137)** But I'll leave that for you as an exercise.

> [!info]- Semantic Content
>
> **CLI Commands:** gcloud (3)
> **Code Keywords:** case, (2), interface (1)
> **Env Vars:** stop (3)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using Google Colab notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=0)** - [Instructor] In addition to the managed notebooks that are available inside of the GCP platform that are associated to your account, there's another set of cloud-based tools that actually run on the Google Cloud, that are in separate types of accounts.
>
> **[0:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=16)** And the base level of account here is free.
>
> **[0:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=19)** And this is Colaboratory.
>
> **[0:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=21)** So it's at colab.research.[google.com](https://google.com).
>
> **[0:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=25)** And the basic tier of this allows you to have access to notebook resources that you can do your data science experiments.
>
> **[0:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=34)** Now this free tier has a lot of limits on it.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=37)** And I find that my customers who use this for anything other than just learning classes, they will usually invest in the pro tiers, which are paid, because of the amount of resources you get and the runtime.
>
> **[0:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=50)** But you can just go to this website and you can work with notebooks that either Google makes available that you've stored on Google drive, that are in GitHub, or you can upload.
>
> **[1:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=62)** So if I look at the recent here, and I've got this Welcome to Colaboratory, this is a notebook environment.
>
> **[1:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=69)** And notice you can copy it to Drive.
>
> **[1:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=71)** Now, notice I'm logged in as myself here.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=73)** So I'm logged in as a different person than my example.
>
> **[1:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=77)** And you can work with these notebooks in Drive, in GitHub, either in a GitHub repo or in a Gist.
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=83)** We can see right here, you can upload and download.
>
> **[1:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=86)** And again, once you're in the notebook, it's a typical type of environment.
>
> **[1:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=89)** If you want to run, you just click here, and you're going to run for your particular runtime.
>
> **[1:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=94)** I think this is Python, and it's going to show you the resources that are available.
>
> **[1:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=98)** And notice, it's connected to a Google Compute Engine backend.
>
> **[1:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=102)** But what's a little bit confusing I think for my data science customers is that Colab is a separate service, starting with this free tier.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=110)** And then you can go to the premium tier if you need more resources.
>
> **[1:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=115)** So you can see if you're in Colab Pro here, you get faster GPUs, longer runtimes, and more memory.
>
> **[2:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=122)** And there's restrictions on where this is as well.
>
> **[2:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=126)** So again, it's kind of two levels of usage, or really three, because either you use the free tier, you use the paid tier of this, or you experiment here.
>
> **[2:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=135)** And then when you're done, you take your notebooks and you store them somewhere, and then upload them and run them on a managed vertex AI deep learning VM instance in your commercial account.
>
> **[2:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=149)** So oftentimes, this is a great training environment, 'cause Colab's free.
>
> **[2:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=153)** But it's not an area that I find too many of my customers are using in production, but I do see 'em experimenting.
>
> **[2:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-colab-notebooks?u=76281980&t=160)** And so I wanted to include it in this course.

> [!info]- Semantic Content
>
> **Tools:** colab (4), github (3)
> **CLI Commands:** find (2), python (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (2)
> **Code Keywords:** this, (1)
> **URLs:** [google.com](https://google.com) (1)
> **Env Vars:** gcp (1)
> **Exercise Files:** github repo (1)

#### Using Google-managed Notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=0)** - [Instructor] So as a data scientist, when you're working with your managed notebook, you have two kinds, you have a user managed or managed.
>
> **[0:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=7)** And a typical thing that you might want to do is you might want to figure out which service is best for you and how they work.
>
> **[0:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=14)** So easy way to do that is to use the console to spin up a service, and then to run some workloads to see if your notebook is set up with enough resources, the notebook instance, I should say.
>
> **[0:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=26)** So in this case, we got 4 CPUs, 15 gigs of RAM.
>
> **[0:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=30)** And notice we could change that, which is one of the really powerful things about using cloud services for machine learning.
>
> **[0:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=36)** It's elastic.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=37)** Also, you could add GPUs, for example.
>
> **[0:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=40)** So to do that, we'll just open up JupyterLab and we'll just run some of these example notebooks just to run some workload.
>
> **[0:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=48)** So let's just look at these Python docs.
>
> **[0:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=52)** Oh, actually I don't want to run service integration, so let's see if there's something simpler here.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=59)** So here's a model builder.
>
> **[1:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=61)** Notice here on the top of this, you've got run in CoLab, which we saw in the previous movie, view on GitHub or open and Vertex AI Workbench.
>
> **[1:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=69)** Which again is that workflow I was talking about where you can experiment in CoLab, often for free, and then you move it to a production.
>
> **[1:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=76)** So this is a model build error.
>
> **[1:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=80)** Let's see what it does here.
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=82)** Set up a dev environment, install packages restart the kernel, set up your project.
>
> **[1:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=88)** And it's a little bit more involved than I want.
>
> **[1:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=90)** I want something a little simpler.
>
> **[1:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=95)** Explaining a tabular data model.
>
> **[1:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=97)** Again, these are all a little bit more involved.
>
> **[1:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=100)** All right, maybe I'll just run this just to run.
>
> **[1:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=102)** This doesn't do anything, but just so that it has an execution against the Python environment.
>
> **[1:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=108)** I'll just literally do something super simple to just run some workload.
>
> **[1:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=113)** And the reason here is I want to show you the tools that are available that show you the overhead on the underlying VM.
>
> **[2:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=121)** Again, you're going to want to go to the Vertex AI area rather than the VM area.
>
> **[2:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=128)** So I'm just going to shut this down and then going into TensorFlow here.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=134)** The most typical thing you think of is to go right to the logs.
>
> **[2:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=136)** But I would recommend, even though we can do that, that you go into the monitoring.
>
> **[2:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=140)** This is something I see people under utilizing.
>
> **[2:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=143)** Typically in machine learning, the things that you need to reconfigure is the amount of CPU, the amount of network, or the amount of RAM or GPUs.
>
> **[2:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=153)** So if CPUs are getting overutilized that could be a situation where you want to then move to GPU.
>
> **[2:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=160)** You also have a health monitor in here that you can enable, so let's do that.
>
> **[2:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=166)** And this would be for some productized notebook that you want to make sure is running some mission critical.
>
> **[2:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=173)** And again, there is an additional charge for this.
>
> **[2:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=175)** Notice, you have the ability to view the VM details.
>
> **[2:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=178)** Where do you think that will take us?
>
> **[3:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=180)** Let's click that and see where it goes.
>
> **[3:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=183)** Did you think it would take us back to the compute engine are?
>
> **[3:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=186)** You would be right.
>
> **[3:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=188)** And so we have additional information here as well around observability, in particular memory, is one that I use with customers.
>
> **[3:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=197)** And as you can see, this requires the installation of an agent, which I won't take the time to do here but I do often do this with customers in production.
>
> **[3:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=206)** So the point is, this is running on a VM.
>
> **[3:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=208)** So you got the observability tools that are available for VMs, and then you have the observability tools and monitoring that are available specifically for let me just go back here, the VM that is set up for deep learning.
>
> **[3:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=228)** Now, in addition to the user managed notebooks, which you can see notebooks have Jupyter 3 pre-installed configure with GPU enabled machine learning frameworks, you have managed notebooks.
>
> **[3:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=238)** So if you're like me, you're wondering what's the difference.
>
> **[4:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=240)** So again, a use of the console for a data scientist is there's so many different services to try things out quickly.
>
> **[4:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=248)** So here it says, manage notebooks provide JupyterLab services and flexible computing resources and are integrated with Google cloud services.
>
> **[4:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=256)** That really doesn't tell me much difference, but I can click on the open JupyterLab.
>
> **[4:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=261)** And then I can see in terms of my samples and my models if we're going to have a different overhead in terms of running, because these instances the user managed and the managed are set up differently.
>
> **[4:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=273)** You can see right off the bat, we have to authenticate here, which we didn't have to do for the user managed.
>
> **[4:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=279)** To use managed notebooks with GCP, you need to grant Vertex AI Workbench permission to access your data.
>
> **[4:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=285)** So again, this right away has applicability in scenarios with higher security environments.
>
> **[4:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=290)** And here we have to explicitly say, yes, it can access data.
>
> **[4:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=298)** And here, in addition to this call, we have to go in and we'd have to set permissions.
>
> **[5:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=304)** And do you remember from a previous video where we would debug this, we would go into the IM permission section and we could use some of the permission tools.
>
> **[5:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=311)** So right off the bat, I can see, and you can probably tell that I haven't used managed notebooks in production.
>
> **[5:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=317)** I always learn when I teach, I like to say, is these seem to be having a more restrictive security, whereas the user managed notebooks, not necessarily implicit in the title, assume a certain level of security, more for learning like next step up from CoLab in my mind.
>
> **[5:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=335)** In addition to managed, which seem to be more secure by default, we have these executions, which we haven't enabled.
>
> **[5:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=342)** This is when you schedule your notebooks to be run on a regular basis, like a job.
>
> **[5:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=347)** And then we have schedules inside of here.
>
> **[5:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=349)** So interesting, and this is one I happen to be familiar with 'cause I used a lot of user managed notebooks and it seems like what has evolved in the console here, as the services have evolved, is different types and capabilities of notebooks that are configurable and testable via the console.
>
> **[6:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-managed-notebooks?u=76281980&t=368)** So for me and my data science customers in the Workbench area, I now have more choices and I can quickly test them out using the console.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (2), case, (1), super (1), this. (1)
> **Prerequisites:** set up (5), install (1), configure (1)
> **Env Vars:** ram (2), gpu (2), cpu (1), gcp (1)
> **Tools:** colab (3), github (1), jupyter (1)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** previous video (1)

#### Using BigQuery ML
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=0)** - [Instructor] In addition to the Vertex AI section of Google Cloud, a tool that I find many of my data scientists don't realize is available, is associated to a very powerful service called BigQuery.
>
> **[0:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=14)** BigQuery is SQL query on top of unstructured or semi-structured data, so file-based data, and it's Google's data warehousing solution.
>
> **[0:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=23)** It also has extensions to the BigQuery SQL language, which is NC compliant, so regular SQL, that allow you to do machine learning.
>
> **[0:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=33)** And so it's just an area in general that I included in my associated GCP ML course on the LinkedIn Learning library.
>
> **[0:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=41)** So there's that, but also the toolset is really rich in the console, so it's one of the few areas where I find most people, even in production, will use the console, because the toolset is sort of unexpectedly rich, and we do run into this with some services, it's just an example that happens to be for data science.
>
> **[1:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=63)** So the use case here is creating a model off of public data.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=68)** But again, if you look at the console, it's very unexpected.
>
> **[1:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=71)** It looks like a database client, if you will, 'cause it is, basically, but it's browser based.
>
> **[1:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=77)** So really, there'd be no reason to get a locally-installed client here, because this does everything you would want it to.
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=83)** You can run this query, you can save the query, once you run it, you can share it, you can schedule the query, you can format the query, look at the settings, translate it, if it's some sort of nonstandard SQL, and this interface itself has the various BigQuery options.
>
> **[1:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=100)** But in addition to that, it has this intermediate explorer here, and if you want to add data, you can explore public datasets, for example, and there's all kinds of datasets that are available here, this is associating to the Google marketplace, or you can look at pinned projects.
>
> **[1:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=118)** So in this particular case, if I were to execute this query, this creates a machine learning model, a logistic regression model, using standard SQL that has been extended for BigQuery, and then it also has some really nice viewers, in terms of the quality of the model.
>
> **[2:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=138)** So cookbook style, because this takes a few minutes, what I have done is I have created one of these in advance, and while this is running, I'll show you where the source code is.
>
> **[2:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=147)** So it's here.
>
> **[2:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=148)** It's just a modified version of the tutorial.
>
> **[2:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=152)** You have to create a BigQuery dataset called bqml_tutorial and then run the code, and you notice on line 16, it's querying from the BigQuery public data.
>
> **[2:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=162)** It's basically showing you how to create.
>
> **[2:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=164)** It's actually a logistic regression, even though this is linear.
>
> **[2:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=167)** So inside of here, I'll show you the one that is completed, so you can take a look at it.
>
> **[2:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=174)** It creates a model, and you can see, again, what I'm really trying to show you as a data scientist is that tooling is evolving to be part of the cloud interface.
>
> **[3:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=185)** So you can see that you've got model details, the training information here, all kinds of the things you're going to need as a data scientist in terms of the parameters of the model, you can see training information here, so the loss and the learn rate.
>
> **[3:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=201)** You can also see important metrics to determine the quality of the model, and again, I'll remind you, this is in the Google Cloud interface, and this is a tool that is running against file based data, basically.
>
> **[3:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=217)** And we have the sort of standard tools, the confusion matrix, precision recall threshold and curve, and the ROC curve, and then you have a schema.
>
> **[3:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=228)** So it's just a set of tools that I find, when I work with my data scientists, they're actually not aware that it's available oftentimes, first of all, and second, they're surprised that I think the best way to work with BigQuery in general, often, not always, is in the console and particularly in data science scenarios, if you're working with machine learning, and again, I have a whole bunch more samples here, in GCP Essentials, and then lots and lots more examples, because this is kind of a trend I've seen with my customers starting to try to build basic models using BigQuery on their data that's stored in Google Cloud, and then in some cases they're going to customize, or well, maybe even just tune the parameters.
>
> **[4:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=272)** Notice here, you can query the model, and it's just from ml.predict, and you have the ability to export the model, and that's something I see a lot of customers doing as well.
>
> **[4:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-bigquery-ml?u=76281980&t=285)** So just a couple of additional points for data scientists with BigQuery ML, and the big tip I have from a tooling point is to really leverage the console.

> [!info]- Semantic Content
>
> **Env Vars:** sql (5), gcp (2), roc (1)
> **Code Keywords:** public (3), interface (3), case, (1)
> **CLI Commands:** find (3)
> **Code Identifiers:** bqml_tutorial (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Tools for DevOps

#### Using Google Cloud scripts with Cloud Shell for storage
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=0)** - [Instructor] In this section of the course we'll look at cloud tools for DevOps roles.
>
> **[0:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=4)** Those will be scripts and Cloud Shell, deployments and Terraform, security and the security command center in GCP and design and architecture tools.
>
> **[0:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=16)** Let's start.
>
> **[0:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=17)** Most of the time DevOps professionals think of starting with virtual machines probably because the focus of my work has been data pipeline building, I usually start with buckets, but I often find that buckets are simpler, primitive to work with than VMs.
>
> **[0:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=32)** So I recommend on your DevOps tooling journey you start there as well.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=37)** So we are clearly comfortable with the console and that's great, but now we want to move to a scripting type environment.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=45)** So do you remember how to invoke a Cloud Shell within the console?
>
> **[0:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=49)** It's this button right here.
>
> **[0:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=51)** So we're going to use Cloud Shell and we have the ability to customize our Cloud Shell, which we're not going to do.
>
> **[0:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=57)** We are in our current project.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=60)** However, I will tell you and remind you that within my GCP Essentials, I have a whole bunch of, at the level of set up an IM in tools, links about customizing your Cloud Shell, but we really want to work with storage.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=73)** So within storage, what I have here is a high level of the storage commands.
>
> **[1:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=80)** Now most of the tools for Google Cloud are GCloud than the service, like GCloud Compute, in this case, GCloud storage, GCloud, whatever it might be.
>
> **[1:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=90)** But there are some different scripting tools that relate to storage.
>
> **[1:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=96)** And the first one is around buckets, it's gsutil.
>
> **[1:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=98)** That's really where we started the protocol when you address a bucket is Google Storage or GS:WWA, so GS utilities.
>
> **[1:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=107)** Google Cloud Storage is alpha, as of this recording, but this is an area for you to watch.
>
> **[1:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=113)** Now, when you work with other types of file-based storage there are different commands, BQ for BigQuery data sets, CBT for big table for cloud Bigtable and Google Firestore for Google Cloud Firestore.
>
> **[2:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=127)** You may remember or know that Google bought Firestore and Filestore.
>
> **[2:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=132)** So again, there's the rest of Google Cloud Services are G Cloud, but when it comes to file storage, it's a little bit bifurcated, so I just put this in here.
>
> **[2:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=141)** Now this entire area of my GCP Essentials repository has a whole bunch of examples of commands.
>
> **[2:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=150)** So for example, if you click into the gsutil example here, I basically have all of the example commands.
>
> **[2:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=159)** So we'll start with listing the buckets, gsutil ls but, and it won't run through all of them but you can practice because these are commands that you're going to use in your script.
>
> **[2:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=170)** So once we're authenticated so we just say gsutil ls, and that's going to give us, once we authorize, our two buckets.
>
> **[3:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=181)** In general, the scripting pattern is you test the script using some sort of shell, either the Cloud Shell, or you can set up this locally on your desktop using a download of the Google Cloud tools that we'll see subsequently.
>
> **[3:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=196)** But it's works basically the same.
>
> **[3:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=198)** You authenticate set your project and then you use the associated GCloud scripting tool.
>
> **[3:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=203)** Now, confusingly, as I said, we can use GCloud Storage, and just to show you, it tells you this is still an alpha as of this recording.
>
> **[3:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=218)** So here it's telling us information about the command.
>
> **[3:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=221)** And I'm just going to X out of there because I've got this information here under G Cloud Storage.
>
> **[3:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=229)** Now there's some interesting information about G Cloud Storage because I work with so many data lakes this is something I'm really interested in and it matters in terms of tools.
>
> **[3:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=238)** You notice here, according to Google G Cloud Storage is 79% faster than gsutil on certain types of downloads and uploads 33% faster on uploads.
>
> **[4:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=247)** So not only do the tools vary, the optimization of the tools vary.
>
> **[4:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=252)** So it's really important that you use the most current tools.
>
> **[4:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=256)** So here, if we want to quickly try it out.
>
> **[4:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=262)** So what I'm doing here is I'm running the GCloud alpha storage on my tools, example bucket which is going to be kind of not exciting because it's empty.
>
> **[4:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=270)** There's nothing inside of it.
>
> **[4:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=272)** So if I just wanted to list my buckets I would just run it like that.
>
> **[4:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=277)** Again, it looks functionally the same, but the really big takeaway here is the difference is, according to Google, these tools perform differently.
>
> **[4:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=285)** So when you're using the command line tools you want to use the correct tool.
>
> **[4:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=290)** I always try to use the most current tool.
>
> **[4:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=291)** For some customers, they can't use anything that's not general availability or GA, so they couldn't use this yet because it's still alpha.
>
> **[4:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=298)** But I've just been including it because file transfer is so important.
>
> **[5:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=302)** It is an example of the Google tools paradigm which is to evolve the tools just like they evolve their services.
>
> **[5:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=311)** So in addition to working with this tool you have an additional tool in the editor.
>
> **[5:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=316)** So if I click open editor, what this is, is this is a IDE, a cloud-based integrated development environment.
>
> **[5:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=325)** And again, this might be surprising to some folks because this is a relatively new development, in terms of tools, that you have a cloud based IDE.
>
> **[5:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=336)** So you can see inside of here, this is a full on editor where you have debugging and so on and so forth.
>
> **[5:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=342)** And I'm going to go ahead and add some assets that I need.
>
> **[5:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=345)** So be using this in subsequent movies but I just wanted to really preview that you can switch back and forth between the terminal and the editor here.
>
> **[5:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=357)** And then you have some more configuration.
>
> **[5:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=359)** You have a web preview, you have session information.
>
> **[6:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=363)** And this is important if you use Cloud Shells often as I do, you have a usage quota on Cloud Shell.
>
> **[6:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=369)** So you can see that you have the amount of hours that is shown here.
>
> **[6:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=373)** And then you have the ability to upload, download.
>
> **[6:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=376)** You have some different modes and then you can set the sizing on this.
>
> **[6:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/using-google-cloud-scripts-with-cloud-shell-for-storage?u=76281980&t=381)** So this is something we'll be using in this DevOps section both the terminal and the cloud based editor.

> [!info]- Semantic Content
>
> **CLI Commands:** gcloud (7), ls (2), terraform (1), find (1)
> **Env Vars:** gcp (3), ide (2), wwa (1), cbt (1)
> **Definitions:** is a  (3), is an  (2)
> **Code Keywords:** let (1), case, (1), switch (1), this. (1)
> **Tools:** terminal (2), command line (1)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Deploying a VM with Google Cloud script
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=0)** - [Instructor] When you're working with virtual machines, it's really common, as with other cloud services, to use scripts rather than clicking in the console.
>
> **[0:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=8)** But let me show you a neat trick.
>
> **[0:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=10)** So here we are in the console, and if I click Create Instance, and if I just look at the instance information here, and I just change a couple of things.
>
> **[0:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=20)** I just say, I'm going to have two GPUs.
>
> **[0:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=24)** I use the console because I get the pricing, which is really great.
>
> **[0:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=27)** And it's fast to do this.
>
> **[0:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=29)** And then I want to just change a couple of things.
>
> **[0:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=36)** I have access to all this advanced configuration here.
>
> **[0:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=41)** I can add additional disk if I want to.
>
> **[0:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=47)** It's a pretty rich console.
>
> **[0:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=49)** And then when I'm done, rather than clicking Create, I have this magic button down here, Equivalent Command Line.
>
> **[0:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=55)** And if I click it, what I can do is I can take all of this generated code, which would've taken me a long time to write, and I can either copy it to the clipboard or I can run it in cloud shell.
>
> **[1:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=69)** I love this feature.
>
> **[1:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=71)** I use this all the time, and I'm happy to be sharing it with you.
>
> **[1:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=75)** So now, if I want to provision this, I just click Enter, and I not only can quickly provision it.
>
> **[1:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=81)** I of course have my G Cloud script.
>
> **[1:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=84)** This is a fantastic, almost hidden feature.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=87)** Now notice, another thing that happens here is I didn't actually do this because I requested a bunch of GPUs and this is a trial account.
>
> **[1:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=95)** And it tells me, nope, you're going to have to get your quota adjusted before you set this up.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=101)** So this is the way I like to work.
>
> **[1:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=103)** Quickly iterate, past this in here, figure out if I need to adjust any security or resource configuration, and not sit there and type this manually.
>
> **[1:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=112)** In addition to this capability, what I can do, I'm just going to close out of here, is I can use REST.
>
> **[2:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=121)** Now, why would I use REST?
>
> **[2:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=123)** Well, it says right up at the top, the REST API reference.
>
> **[2:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=126)** This would be if I was programmatically, so in other words, from some sort of application code, dynamically creating instances.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=134)** So it could be any application programming language that the API supports.
>
> **[2:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=138)** Could be Go language or Java or Node or whatever.
>
> **[2:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=142)** Again, this is that same information that's presented.
>
> **[2:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=146)** I just really like this.
>
> **[2:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=148)** I wish that every service had this Equivalent Command Line button.
>
> **[2:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=152)** It doesn't, but VMs is just a common use case.
>
> **[2:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=156)** So then I could go back and I could fix my configuration here, and then I could just regenerate it and run it as a script, and then copy that script into my source control.
>
> **[2:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=166)** So it's a great tip, and it's something I wanted to share with you.
>
> **[2:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/deploying-a-vm-with-google-cloud-script?u=76281980&t=169)** So look for that button in the console.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1), this, (1), case. (1)
> **Env Vars:** rest (3), api (2)
> **Definitions:** is a  (2), in other words (1)
> **Tools:** command line (2)
> **CLI Commands:** node (1)
> **Documentation:** api reference (1)
> **Speakers:** - [instructor] (1)

#### Running GCP Deployments
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=0)** - So in addition to using scripts with gcloud or REST APIs, you can deploy sets of services using services like deployment service.
>
> **[0:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=11)** So they're designed to work with other services such as Marketplace.
>
> **[0:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=14)** So I'm in the Google Marketplace and I'm going to select this WordPress on a virtual machine.
>
> **[0:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=21)** I've already enabled the APIs in advance and I'm going to click Launch.
>
> **[0:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=28)** And here I get an interface that looks like the UI for the VMs.
>
> **[0:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=32)** But again, just like, if you've been watching this entire course, the deep learning VMs have a set of services for machine learning data science on top of regular VMs or Compute Engine instances.
>
> **[0:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=43)** The marketplace deployments have a set of services, in this case, WordPress, that are on a VM that you can configure.
>
> **[0:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=52)** The deployment produces this UI, a template, a script, kind of like the gcloud script.
>
> **[0:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=58)** But let's just go into it here.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=60)** So you can see the pricing.
>
> **[1:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=62)** Similar type of idea.
>
> **[1:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=63)** You can do any kind of configuration you want to do here.
>
> **[1:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=69)** And you can also enable advanced logging and monitoring with Stackdriver.
>
> **[1:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=75)** And you have to accept the Terms of Service.
>
> **[1:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=77)** And then you click Deploy.
>
> **[1:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=79)** Now, how is this different than just putting WordPress on a VM?
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=83)** And I need to fix whatever errors I have.
>
> **[1:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=85)** So I have to put my address.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=87)** So I'll just do my other user here.
>
> **[1:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=93)** How this is different is, you can see, it's generating this template file that has a number of resources on it.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=101)** Because a WordPress site isn't just a VM.
>
> **[1:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=104)** A WordPress site running in production has firewall configuration, as you can see there.
>
> **[1:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=109)** It has other configuration.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=110)** It has password information.
>
> **[1:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=112)** It's a set of configuration files that you would check into source control.
>
> **[1:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=117)** This is really when we start getting into the DevOps core principle, which is configuration files as code.
>
> **[2:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=124)** Applications that run on cloud are a set of services.
>
> **[2:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=128)** And these configuration files are just as essential to the proper running of your application as your application code files.
>
> **[2:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=137)** So using mechanisms like Google Cloud deployments helps you with reproducibility.
>
> **[2:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=143)** So you can see we're set up here and we can log into the admin panel and we can access our WordPress site.
>
> **[2:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=150)** Now, if we go back, we have our deployment.
>
> **[2:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=154)** There is some security warnings, but I'm just going to ignore those for right now and notice we have our labels.
>
> **[2:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=159)** So what is great about this is we have a set of services, so VMs and security services and other services, that we can then work with as a set.
>
> **[2:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=171)** If we deployed these things individually, we would have to remove them individually.
>
> **[2:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=176)** One of the advantage of the pattern of using deployments, or a type of service, is when we delete, we would delete the entire deployment.
>
> **[3:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=184)** Now, in addition to using Google deployments there are some other types of templates, KRM or Terraform.
>
> **[3:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=192)** And this link takes you out to an article.
>
> **[3:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=195)** One of the patterns that I see happening is the Kubernetes Resource Model or Terraform which is a third party company that has an open source set of templates that works with GCP, Amazon, Azure, and other services, and is increasingly becoming a standard around infrastructure code is supported by Google.
>
> **[3:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=215)** So you can see that we've got this utility DM Convert that can transition these deployment files into Terraform.
>
> **[3:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=223)** And I would recommend this as the best practice.
>
> **[3:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=225)** In fact, if you're just getting started, there's courses in the library on Terraform and I have this summary where you can try out a single compute instance, which I'll leave as kind of a take home exercise.
>
> **[3:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=237)** The first thing that you do with Terraform is you initialize the Terraform state.
>
> **[4:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=242)** And then you have a set of Terraform commands that run against a set of templates.
>
> **[4:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=248)** So you create the plan, you validate it, you apply it, and then you show the state and then you can destroy.
>
> **[4:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=255)** I also have in this repository area, a sample, which is always main.tf, and you can have modules and all kinds of things.
>
> **[4:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=263)** But this shows you, kind of like the REST API, but this is for a Terraform deployment of an instance.
>
> **[4:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=271)** So in any case, this pattern of deployments is a best practice, scripting, tooling pattern because you've got all the scripts together as a unit.
>
> **[4:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=283)** And indeed, if I click Delete, this will clean all this out.
>
> **[4:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=287)** Notice I have the option to Delete WordPress-1, and all resources such as VMs, or I can keep the resources.
>
> **[4:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/running-gcp-deployments?u=76281980&t=293)** And I'm going to just click Delete All.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (8), gcloud (2)
> **Code Keywords:** delete (5), case, (2), interface (1), let (1)
> **Env Vars:** rest (2), krm (1), gcp (1), api (1)
> **Analogies:** such as (2), kind of like (2), just like (1)
> **Prerequisites:** configure (1), set up (1), getting started (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (2)

#### Monitoring GCP with Cloud Logging
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=0)** - [Instructor] An important aspect of DevOps is monitoring and the various services have associated information and I'm in Compute Engine here and I'm just looking at observability, for example, so you can see, by default, information about the CPU of a VM, and your data might vary here.
>
> **[0:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=19)** And sometimes as you can see popping up, you have to install agents in order to see more detailed information.
>
> **[0:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=26)** You can see operating system information if you've enabled that, but even beyond that, for services in general, and I'm just using VMs, as an example, Cloud Logging is an area that Google has really made a lot of enhancements and I encourage you to check it out if you're in a DevOps role.
>
> **[0:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=41)** So let's take a look.
>
> **[0:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=43)** So over in Cloud Logging here, we have a Log Explorer and you can see that we have the ability to query.
>
> **[0:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=50)** We have recent queries, suggested queries, and a library.
>
> **[0:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=54)** And I have a bunch of things running on this project.
>
> **[0:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=57)** I have some Kubernetes clusters. I have some other VMs.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=60)** We did some machine learning work just to simulate kind of more of a real world situation.
>
> **[1:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=66)** I could probably do an eight-hour course just on logging, but I'll just show you some of the highlights here in this short movie.
>
> **[1:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=72)** So we've got suggested queries.
>
> **[1:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=74)** So there's a lot of things here about Kubernetes, but because I haven't really covered that yet in this course, and I've talked about BigQuery in the machine learning section, here we have a BigQuery job completed, and this is around our machine learning example that we saw.
>
> **[1:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=89)** So you get this rich visualization with the histogram.
>
> **[1:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=92)** You get the query results and really a lot of control, a lot of knobs and widgets here so that you can understand.
>
> **[1:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=100)** Also notice you can stream the logs.
>
> **[1:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=102)** You have the ability to run the query and stream.
>
> **[1:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=105)** In addition to the Log Explorer here, you have a log dashboard and this is a typical kind of dashboard.
>
> **[1:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=112)** And here we've got the GKE or the Kubernetes clusters showing us information.
>
> **[1:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=117)** We've got some container errors in our WordPress instance, for example.
>
> **[2:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=121)** We've got also some GCE errors.
>
> **[2:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=123)** Again, some stuff I was just messing around basically to get some information on here.
>
> **[2:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=128)** And then we have the logs aggregated here.
>
> **[2:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=131)** Dealing with logs and being able to manage them is a key aspect of success in a DevOps role.
>
> **[2:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=138)** So Google has really listened to customer requests in terms of aggregating and improving the visualization of log information.
>
> **[2:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=147)** We can also make log-based metrics and they have a bunch of suggested ones here, so system-defined metrics that you can work with.
>
> **[2:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=156)** You have a log router.
>
> **[2:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=158)** Log information is stored in buckets and you can specify how that is stored because as you might imagine if you have a production situation, you can run into some pretty extensive amount of storage for logs, so you have the ability to create a logging bucket that's customized and create a usage alert.
>
> **[2:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=178)** But again, this interface and the Log Explorer is the one that I think is the most interesting, Google's done the most augmentation of this recently.
>
> **[3:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=186)** So you can see, for example, we've got all this Kubernetes stuff showing up here and you have these rich histograms that are showing me log aggregates.
>
> **[3:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=195)** I can jump to now. I can create a metric inside of here.
>
> **[3:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=199)** I can drill down.
>
> **[3:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=200)** I find this to be very, very intuitive and useful.
>
> **[3:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=205)** Previously, I worked with my customers to buy third-party log visualizers and there's still some really great ones out there, but something I have seen made much more usable over the past 12 months actually is this Log Explorer.
>
> **[3:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-with-cloud-logging?u=76281980&t=218)** So if you work in a DevOps role, I would encourage you to spend some time in here and understand how you can create custom views that are going to help you do your job more effectively.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), imagine (1)
> **Code Keywords:** default, (1), let (1), interface (1)
> **Env Vars:** cpu (1), gke (1), gce (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Monitoring GCP Security with SCC
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=0)** - [Instructor] When you're looking at the security tools in the Google Cloud, what you can see depends on who you are.
>
> **[0:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=5)** By design, the security tools are designed to be seen by a very small subset of DevOps professionals.
>
> **[0:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=13)** You have to have permissions at the organizational level to see the information from the logs that's available in the Security Command Center.
>
> **[0:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=22)** So you can see I am the administrator on a project, but not at the organizational level, so if I go to the Security Section, and you'll notice that, in the Project menu here, I'm at the organizational level and it tells me I don't have permission, which is correct because I am a project owner, but not the organizational owner.
>
> **[0:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=42)** You can also see the security information is grayed out for most of the security tools.
>
> **[0:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=48)** So you're really going to have to have the permissions that are shown here.
>
> **[0:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=52)** If I go ahead and I set this to my project that I'm working in, it just tells me that the project's not viewable at this level.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=60)** So this set of tools is really kind of outside of scope of what I'm showing here, but it is extremely important.
>
> **[1:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=69)** Organizationally, you're going to start at the level of the Security Command Center.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=73)** At the project level, however, from a practical point, this is kind of for both DevOps and developer professionals, you do want to use some of these tools, in particular, the Secret Manager.
>
> **[1:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=86)** The Secret Manager, you have to enable the API like everything else here, is a key value store that is secured by Google that you can then call from your code that allows you to store, as it says, your API keys, passwords and certificates.
>
> **[1:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=102)** So when you're working with this, you create a secret by working with the Secret Manager API.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=110)** And in some cases, you're going to need credentials.
>
> **[1:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=113)** So I'm going to go ahead and click Create Credentials.
>
> **[1:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=117)** You need to fill out this form and say that I'm going to use a user data or application data.
>
> **[2:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=123)** So I'm going to say user data and then say Next.
>
> **[2:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=128)** And then you'd have to fill out the rest of this information, which I'm not going to take the time to do 'cause we're not developing an application quite yet, but the Secret Manager service is a best practice in DevOps so that you do not have to deal with application code that has secrets hard-coded in it.
>
> **[2:29](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=149)** So you want to, as a DevOps person, enable the service and work with your developers to have the storage of secrets in the Secret Manager service.
>
> **[2:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=159)** The rest of the security tools really are more at the organizational level.
>
> **[2:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=164)** They're extremely important, but again, they're complex enough that they weren't their own course.
>
> **[2:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/monitoring-gcp-security-with-scc?u=76281980&t=168)** I would just say either look for a course in the library or explore the Google documentation, starting with the SCC, or the Security Command Center.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), scc (1)
> **Definitions:** is a  (2)
> **Code Keywords:** this, (1)
> **UI Navigation:** go to (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Designing GCP Solutions with Architecture Diagramming
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=0)** - [Instructor] Whether you're working in DevOps or you're a developer or both, a lot of times you want to design an architecture that reflects either the upcoming state of a system or the current state or the desired state.
>
> **[0:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=14)** There are a number of architecture design tools out there.
>
> **[0:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=17)** I personally use tools that come from third-parties, like Lucidcharts, for example.
>
> **[0:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=22)** However, there's a relatively new tool that's free.
>
> **[0:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=26)** It's an integration with, I think it's called Excalidraw, and it's found at googlecloudcheatsheet.[withgoogle.com/architecture](https://withgoogle.com/architecture), and if you bring this up, you can see you get reference architectures.
>
> **[0:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=39)** And how this can be helpful for DevOps is I've often been called in as a consultant in situations where things are frankly messed up.
>
> **[0:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=48)** And sometimes I need to have a picture of what would be a reference good state to kind of get from where we are now to where we might want to go.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=59)** So an example from a real world is some work that I've been doing with data pipelines.
>
> **[1:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=63)** So these are reference architectures, but you can just drag 'em right on here.
>
> **[1:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=67)** And then, you have to size it quite a bit here 'cause of my resolution.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=73)** There we go.
>
> **[1:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=74)** So you can see that this is a reference architecture for data analytics pipeline on Google Cloud, and yeah, it's Excalidraw.
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=82)** You can see on the bottom there.
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=83)** This is a architecture pattern, really good for discussion.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=87)** Now of course this is not live.
>
> **[1:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=88)** This does not connect to any actual running Google infrastructure.
>
> **[1:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=93)** An interesting discovery I made while working on this course is that, for a pretty hefty fee, but maybe useful for certain DevOps situations, Lucidcharts has a premium tier that allows for a connection to a live GCP infrastructure and will generate a diagram.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=110)** Diagramming in general is an area that I'm really interested in in terms of systems for what you may build and what is the current state.
>
> **[1:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=118)** So I have, again, more information up on my GitHub about this in the Learn Cloud repository.
>
> **[2:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=123)** But this is interesting because you have all these reference architectures, so if you're trying to learn something new, you also have some basic icons, so you can draw your own basically and it's free and web-based.
>
> **[2:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=137)** So I really do like this and you can annotate and do all the basic stuff that you need and import/export as well.
>
> **[2:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=144)** So I just thought I would include it in this course because it's something that I started using and both I and my customers like this incorporated Excalidraw tool in addition to using tools like Lucidcharts.
>
> **[2:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=157)** Another one that I've used is third-party is called [hava.io](https://hava.io).
>
> **[2:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=161)** They also have a live component with GCP.
>
> **[2:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/designing-gcp-solutions-with-architecture-diagramming?u=76281980&t=164)** This is becoming more and more the trend and I think that it's useful when you're in a DevOps situation where you're trying to figure out what state you want to get to and where you're at now.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1), is called (1)
> **URLs:** [withgoogle.com](https://withgoogle.com) (1), [hava.io](https://hava.io) (1)
> **Env Vars:** gcp (2)
> **Analogies:** for example (1), picture (1)
> **Code Keywords:** new, (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### 4. Tools for Developers

#### Coding with the GCP local Google Cloud SDK
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=0)** - [Instructor] In this section of movies, we'll be talking about GCP tools for developers.
>
> **[0:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=5)** We're going to look at the GCP add-in for the editor VSCode.
>
> **[0:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=10)** There are others, but that's the one I'm using, so I'll share with you.
>
> **[0:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=13)** Using cloud source repos or repositories for code.
>
> **[0:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=18)** Using the artifact registry.
>
> **[0:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=20)** Using the Secrets Manager service.
>
> **[0:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=23)** And seeing full continuous integration and continuous deployment using the Cloud Build service as our underlying service that we're implementing CI and CD.
>
> **[0:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=34)** We'll be working with the Cloud Run service with Cloud Build here as well.
>
> **[0:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=39)** So again, I'm just giving you a sampling, basically my favorite tools in GCP.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=45)** Now, the type of tools that you work with to write scripts depend on how you work.
>
> **[0:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=49)** As I've been showing frequently in this course, I most often use the included cloud shell tool to generate my G Cloud scripts because I'm working in the early phases of application projects, building POCs, and trying out technologies.
>
> **[1:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=64)** Just for being complete, I want to also mention the ability to take the Google Cloud software development kit and install the client locally.
>
> **[1:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=74)** This is not something that I generally do.
>
> **[1:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=76)** I tend to work at the cloud in the cloud, but I know a lot of people do it.
>
> **[1:20](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=80)** So I've got this link, and you can just copy this link for the aggregate information.
>
> **[1:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=84)** The install process depends on what kind of operating system you have.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=87)** So you want to follow the link that is shown on the install.
>
> **[1:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=91)** I only have Macs myself.
>
> **[1:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=93)** And so, some tips for Mac is I generally like to use the Homebrew Package Manager.
>
> **[1:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=98)** And there's a medium article that is really well written that I've linked here.
>
> **[1:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=102)** Once you have the client installed locally, then you're going to open a terminal if you're in Mac or a command window if you're in Windows, and so on and so forth.
>
> **[1:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=112)** So I'll show you what that looks like.
>
> **[1:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=114)** I'm going to go ahead and make this full screen.
>
> **[1:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=116)** And you would validate that you have the appropriate version.
>
> **[2:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=120)** One of the things, when you are working locally, you want to manually update.
>
> **[2:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=124)** This is not necessary as often when you're working in the cloud shell, 'cause Google will update it.
>
> **[2:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=129)** And it's really important, especially if we're working with newer APIs, that you are having the right version.
>
> **[2:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=136)** There's various commands you can use to understand the versions of the APIs that are installed in your SDK.
>
> **[2:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=144)** And G Cloud info was one of those.
>
> **[2:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=146)** So you can see, this tells detailed information about where and how you've installed.
>
> **[2:30](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=150)** And this is going to vary depending on how you've done your install.
>
> **[2:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=153)** Now you're going to have to authenticate.
>
> **[2:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=156)** So to do that, you go G Cloud auth space login, and then it's going to take you out to an account to authenticate, and then you're going to select Authenticate.
>
> **[2:48](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=168)** And then once you're authenticated, you're going to go back to your terminal.
>
> **[2:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=172)** And what has happened is you can see, after G Cloud auth login, this browser window automatically popped up and there was a key exchange that was done.
>
> **[3:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=181)** Then you can set your project that you're working with with the command shown here, G Cloud config set project project ID.
>
> **[3:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=188)** So I'll do that.
>
> **[3:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=190)** And then you can run your command, such as GS util, and get a list of your buckets for example.
>
> **[3:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=196)** And there's a list of all the buckets.
>
> **[3:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=198)** Again, this is not something I use, because I don't like to keep it updated, and I don't like to install stuff on my machine, but it's something that I know a lot of customers use.
>
> **[3:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=207)** So I wanted to be complete and include it in this course as well.
>
> **[3:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=212)** And then just to round this out from this link list, I really recommend this cheat sheet.
>
> **[3:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=217)** And here it is.
>
> **[3:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=218)** This will give you all the getting started, all the help commands, so on and so forth.
>
> **[3:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=223)** It's just pretty useful.
>
> **[3:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=224)** So when you're using G Cloud, either locally or with cloud shell, this cheat sheet I've found to be pretty useful.
>
> **[3:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-local-google-cloud-sdk?u=76281980&t=231)** So I wanted to share it in this movie.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5), getting started (1)
> **Env Vars:** gcp (3), sdk (1)
> **CLI Commands:** cd (1), make (1)
> **Tools:** terminal (2)
> **Analogies:** such as (1), for example (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Coding with the GCP add-in for VSCode
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=0)** - [Instructor] Now in addition to installing the SDK locally, if you are going to be installing, it's typical that you're going to use some sort of code editor.
>
> **[0:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=8)** And so, I've got VS Code here.
>
> **[0:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=10)** And the extension that I would recommend is Cloud Code, which I have installed here.
>
> **[0:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=15)** You can see that in addition to installing this, I opened a terminal window up at the bottom and I just typed in G-Cloud version.
>
> **[0:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=22)** The order that you're going to do this is you're going to install G-Cloud on your system locally first, as I showed in the previous movie, then you're going to use the extensions, if you're using VS Code, there's different extensions for different IDEs.
>
> **[0:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=36)** This is just one of those that are available.
>
> **[0:39](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=39)** The one that I happen to use.
>
> **[0:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=40)** And then you're going to go ahead and install it.
>
> **[0:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=42)** So make sure you do it in that order.
>
> **[0:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=44)** It's going to go better for you.
>
> **[0:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=46)** So once you have that, then you can work with the features which support, as it says here, Dev Workflow, Kubernetes, Cloud Run, Containerization, Built-In Secret Manager, APIs.
>
> **[0:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=59)** What I really use often on this is the API feature.
>
> **[1:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=63)** So I tend to work with a lot of the newer services.
>
> **[1:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=66)** And so, if we bring this up, the Cloud Code, you can see that you have these various capabilities here.
>
> **[1:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=74)** And Cloud APIs is the one that I use most frequently.
>
> **[1:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=78)** You may use something different, but I'm sure a lot of people watching will be using Kubernetes, for example.
>
> **[1:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=83)** But if I wanted to work with an API, and I just brought up Cloud Storage, I really like the way the documentation is integrated here and it has a nice flow to it.
>
> **[1:32](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=92)** It tells you how to get started.
>
> **[1:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=94)** First, you enable the API, and once you enable the API, then you have to install the client library.
>
> **[1:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=100)** So you PIP install gsutil for that and see how that's taking it down in the bottom.
>
> **[1:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=106)** Now I don't have PIP on my system, so it's not going to work without the PIP package manager.
>
> **[1:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=111)** And then you would have the code sample, and here's the code sample.
>
> **[1:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=114)** And you have multiple code samples here.
>
> **[1:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=116)** So if you wanted to, for example, make a bucket public, here's the sample code.
>
> **[2:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=121)** So I like this integration.
>
> **[2:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=123)** You can do this API work also up in the cloud, which I'll show you in a subsequent video, but if you are doing things locally, I found this to be super useful.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=134)** In addition to this, like I said, I'm sure some of you watching will be working with Kubernetes, and so, there's some nice integration with Kubernetes here as well that I would recommend if you have that as a use case.
>
> **[2:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=146)** So you notice that I have signed in.
>
> **[2:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=148)** You have to sign in to get this functionality because, of course, for example, I turned on an API in my own project through this interface.
>
> **[2:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=156)** So it's a different way of working.
>
> **[2:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=158)** If you want to work on a local IDE, this is in the extensions under Cloud Code.
>
> **[2:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=164)** So that's the way that you would set this up.
>
> **[2:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/coding-with-the-gcp-add-in-for-vscode?u=76281980&t=165)** And there are other GCP extensions, but this is I think really the key that all GCP developers are going to want to use.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), pip (3), gcp (2), sdk (1), ide (1)
> **Code Keywords:** this, (2), public (1), super (1), case. (1), interface (1)
> **CLI Commands:** pip (3), make (2)
> **Prerequisites:** install (4)
> **Tools:** vs code (2), terminal (1)
> **Analogies:** for example (3)
> **Documentation:** the documentation (1)
> **Exercise Files:** sample code (1)

#### Storing code in Cloud Source Repositories
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=0)** - [Instructor] A relatively new offering in the Google service for developer list is Cloud Source Repositories.
>
> **[0:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=6)** These are Git repositories where your application code is stored on the Google Cloud.
>
> **[0:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=12)** And this is designed for scenarios with CI/CD, or continuous integration, continuous deployment.
>
> **[0:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=19)** As well as an alternative using repository like GitHub.
>
> **[0:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=22)** So just to set up, I had set up a repository already and if I click add repository, I can create a new repository or connect to external, which was a mirror of a hosted service, such as GitHub or Bitbucket.
>
> **[0:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=35)** So you have two different options here.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=37)** So if I say continue, and I just say demo2 and then I want a project ID, and I'm just going to set my project ID.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=45)** And then I'm going to click create.
>
> **[0:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=49)** So once I have a repository, then I can push code from a local git repository, or I can clone.
>
> **[0:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=55)** And I have different methods I can use SSH.
>
> **[0:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=58)** I can use Google cloud SDK with G Cloud or manually generated credentials.
>
> **[1:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=64)** So again, what I'm going to do here is I'm just going to kind of bypass this, just to show you a really interesting integration.
>
> **[1:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=73)** And before I do that, I want you to notice this button up at the top cloud console.
>
> **[1:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=77)** Cloud Source Repository's web UI is a separate console.
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=82)** Notice the URL [source.cloud](https://source.cloud).[google.com](https://google.com) from the main console.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=87)** And this is by design.
>
> **[1:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=88)** It has separate credentials, separate ways to work.
>
> **[1:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=91)** And really this is indicative of the modernization of tools.
>
> **[1:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=96)** As I said, in an earlier movie, I don't normally download and install things on my laptop.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=101)** I actually work with tools such as Cloud Source Repositories and the associated cloud based IDE, which you can access by clicking edit code.
>
> **[1:51](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=111)** Now, what this is going to do is clone the repo, which is actually empty, but that's okay.
>
> **[1:57](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=117)** And then you do have to enable cookies, which I've done, on your browser.
>
> **[2:01](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=121)** So you can see, we have a command running in Cloud Shell, which is cloning a repo, down here.
>
> **[2:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=127)** And inside of here I have a Cloud Shell Editor.
>
> **[2:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=130)** You might remember from an earlier movie, that there's two different implementations of Cloud Shell, which is a GCP hosted VM.
>
> **[2:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=138)** There's a terminal that has G cloud and the tools on it.
>
> **[2:21](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=141)** And then there's this browser based IDE, which looks kind of like a vs code.
>
> **[2:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=146)** I don't think it's actually based on that, but it's based on a similar type of open source IDE.
>
> **[2:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=151)** It is a full IDE, I've got a couple other demos in here.
>
> **[2:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=154)** and you can see, for example, this has got something in go, just to show you that understands languages.
>
> **[2:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=161)** You can see up the bottom, it's go language.
>
> **[2:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=163)** We have syntax coloring.
>
> **[2:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=165)** We have the ability to run with a debugger, put in break points.
>
> **[2:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=169)** Just like as we saw in the previous movie, we do have the integration with Cloud Code, which allows us to plug in to the IDE, allows us to work with Kubernetes, Secret Manager, API Manager.
>
> **[3:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=182)** So just like we saw in the previous movie, if I wanted to work with the cloud storage API and this is the way I would probably actually do it rather than working locally.
>
> **[3:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=191)** I would enable the API.
>
> **[3:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=192)** I would have to sign in 'cause in this movie I'm using a demo account.
>
> **[3:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=196)** In the previous movie, I was using my own personal demo account.
>
> **[3:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=199)** And then I can install the client library if I wanted to work in Python and then I could try my code sample.
>
> **[3:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=205)** So it's basically the same plugin.
>
> **[3:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=207)** The difference is this editor is hosted entirely on the Google Cloud.
>
> **[3:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=211)** So it's an important aspect of modernization.
>
> **[3:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=214)** I know it's not for every developer.
>
> **[3:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=217)** But it also works great if you have distributed remote teams.
>
> **[3:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=220)** It's great for onboarding, because you don't have to do as much installation for setup.
>
> **[3:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=224)** And it's really a modern way to work with Cloud to have the tools that you use to generate scripts and application code for the infrastructure being developed in cloud-based tools.
>
> **[3:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-code-in-cloud-source-repositories?u=76281980&t=235)** In this case, the Cloud Shell Editor.

> [!info]- Semantic Content
>
> **Env Vars:** ide (5), api (3), ssh (1), sdk (1), url (1)
> **Analogies:** such as (2), just like (2), kind of like (1), for example (1)
> **CLI Commands:** git (2), cd (1), ssh (1), python (1)
> **Tools:** github (2), bitbucket (1), terminal (1), vs code (1)
> **Prerequisites:** set up (2), install (2), setup (1)
> **Code Keywords:** continue (1), this, (1), case, (1)
> **Definitions:** is a  (3)
> **URLs:** [source.cloud](https://source.cloud) (1), [google.com](https://google.com) (1)

#### Storing artifacts in GCR or Artifact Registry
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=0)** - [Instructor] The developer tools for storing container images and other artifacts have been having more options.
>
> **[0:06](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=6)** So initially, Google Cloud came out with this container registry service, which I use the tutorial over here, which again, is another tip in the UI here.
>
> **[0:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=16)** Basically, anytime you want to learn about the service, you just bring up the tutorial, run through that, and then you can get a "Hello World" going, which is what I ran through to get something in here.
>
> **[0:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=25)** So you can see this "Hello World" has a couple of Docker images, and one of the advantages to using a registry like this rather than a Docker hub is you can have vulnerability scanning.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=37)** Also it's integrated, so you can see that you can deploy this to services like Cloud Run, GKE, or GCE with just a click of the command here.
>
> **[0:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=46)** So in terms of the vulnerability scanning, this is super important for really all my customers but particularly high security customers.
>
> **[0:54](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=54)** It's integrated in this service.
>
> **[0:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=56)** So this service has been around for a while, and here's where you turn on the vulnerability scanning.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=60)** You set the repository to on or off.
>
> **[1:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=63)** What's new in this world is the artifacts that you are going to store for your applications might be more than container images.
>
> **[1:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=71)** And so to recognize that Google has relatively recently created this new service called an Artifact Registry, and it uses what are called repositories as registries.
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=82)** It's a little confusing, 'cause you have source repositories for application code, and then artifact registries for artifacts like Docker images, Maven, NPM, Python, Apt, Yum, Kubeflow Pipelines, or built Go binaries.
>
> **[1:38](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=98)** So it's more than Docker images, if you will.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=101)** So this supersedes the Container Registry, and I would recommend that you use the Artifact Registry, and Google is trying to guide you there too.
>
> **[1:50](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=110)** It says, you have [gcr.io](https://gcr.io) repositories in Container Registry.
>
> **[1:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=113)** Create these repositories in Artifact Registry.
>
> **[1:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=116)** And if you just click Create, then it's going to tell you hostname, and you click Create, and it's going to go ahead and allow you to migrate these over.
>
> **[2:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=124)** So they're trying to evolve their customers to the more feature-filled Artifact Registry service, which contains these repositories.
>
> **[2:14](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=134)** So this is just a pointer now.
>
> **[2:16](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=136)** So for backward compatibility, and just like the Container Registry, I used the Learn and I ran through a couple of the quick starts to get this Docker Repo in here so that I could take a look at the features and capability, which are basically the same.
>
> **[2:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=153)** They have vulnerability scanning, and the same type of activities.
>
> **[2:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-artifacts-in-gcr-or-artifact-registry?u=76281980&t=157)** So it looks to be feature identical, and so I would recommend to use the Artifact Registry for container images and other binaries, and no longer use the Container Registry, 'cause that seems to be an outdated service.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (5), npm (1), python (1), apt (1), yum (1)
> **Env Vars:** gke (1), gce (1), npm (1)
> **Code Keywords:** super (1), while, (1)
> **URLs:** [gcr.io](https://gcr.io) (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Storing secrets in Secrets Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=0)** - [Instructor] An important best practice for developers is to use services to properly store secrets and keys.
>
> **[0:07](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=7)** And in Google Cloud, those are Secret Manager or KMS.
>
> **[0:10](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=10)** So let's start with Secret Manager.
>
> **[0:13](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=13)** I've already enabled the API here and created an example secret.
>
> **[0:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=17)** So to create a secret, you just click create secret, give it a name.
>
> **[0:24](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=24)** And then specify if you want to upload a file or just put the value in.
>
> **[0:33](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=33)** Then you specify the replication policy, the encryption where you can supply your own key if need be, the rotation, and notifications if a secret version is changed.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=45)** By default, the secret never expires, but you can set an expiration date, and then you can create a label as well.
>
> **[0:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=55)** So once you have a secret, then you have versions, and you have permissions and you have logs.
>
> **[1:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=62)** And notice, you can view the secret value.
>
> **[1:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=65)** You can disable, destroy, or copy the resource ID.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=68)** Now, if we go back to the initial part here.
>
> **[1:11](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=71)** You notice up at top, it says try accessing secrets in the IDE using Cloud Code.
>
> **[1:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=77)** So you typically are going to call these secrets from your application code.
>
> **[1:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=82)** So they are objects inside of Google Cloud.
>
> **[1:25](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=85)** And this is a best practice.
>
> **[1:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=87)** In addition to Secret Manager to store keys, we have the KMS service, the Key Management.
>
> **[1:34](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=94)** And this service is designed if you are going to be handling your own encryption keys.
>
> **[1:41](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=101)** So there's two different services in Google.
>
> **[1:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=104)** And if you work with this, I won't take the time to show it here, but I'll tell you that one of the key concepts is you use key rings to store your keys.
>
> **[1:52](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=112)** This is generally in healthcare and FinTech.
>
> **[1:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=115)** So the high secure type environments.
>
> **[1:58](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=118)** You can't use the Google provided keys.
>
> **[2:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/storing-secrets-in-secrets-manager?u=76281980&t=120)** So you've got the KMS service for keys, and the Secret Manager for regular secrets.

> [!info]- Semantic Content
>
> **Env Vars:** kms (3), api (1), ide (1)
> **Code Keywords:** let (1), default, (1), this, (1)
> **Best Practices:** best practice (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Implementing CI/CD with Cloud Build
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=0)** - [Instructor] Now to pull together modern tooling on GCP for developers, I've created a scenario that I use for testing and just decided to share it in this movie.
>
> **[0:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=9)** I like to use Cloud Run because I work a lot with containers and it's a quick way to run containers as you're getting ready to create container clusters for use and Kubernetes, or in my case, data pipelines.
>
> **[0:22](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=22)** But I just did a hello world here and set up a service in Cloud Run.
>
> **[0:27](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=27)** And then inside of Cloud Run, I was working with different revisions.
>
> **[0:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=31)** So first of all, the service just looks like this, just a simple, it's written and go, just a simple service.
>
> **[0:37](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=37)** And then if you want to manually do an update if you click this edit and deploy new revision, that's going to automatically open up in the Cloud Shell Editor.
>
> **[0:47](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=47)** And I've opened to the page where I want to just make a simple change, and again okay.
>
> **[0:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=53)** And I'm going to go ahead and save this.
>
> **[0:56](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=56)** All right, now, if I wanted to make a change here I made a change to the application code.
>
> **[1:03](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=63)** And once this code is done then I'm going to go ahead and close this site.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=68)** And then I want to manually update this change.
>
> **[1:12](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=72)** Now that might be all that I need for working in POC kind of environment, but when you're in a full production, whether it's Cloud Run or whether it's any other kind of application you often want full continuous deployment or CD.
>
> **[1:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=88)** So the integration here is really nicely done.
>
> **[1:31](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=91)** It also helps you understand how it works, if you want to do fully cloud, in terms of dev tools.
>
> **[1:36](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=96)** So if you click this edit continuous deployment what you get is you get the ability to set up a build trigger inside of the Cloud Build service.
>
> **[1:44](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=104)** And this is a serverless service that replaces in separate build server.
>
> **[1:49](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=109)** And it really represents the future of tools kind of from a DevOps and a developer standpoint.
>
> **[1:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=115)** In that, in the real world, I've seen build servers, be the bottleneck lots and lots of times because various teams are trying to build and the server is not very often used.
>
> **[2:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=124)** It has a small capacity.
>
> **[2:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=125)** So this is a really, really good example of something that if it's a serverless service that can burst like Cloud Build can, then you never have to worry about waiting for the build server or putting too much capacity in a build server that's rarely used.
>
> **[2:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=139)** So the way that this works, in this particular scenario, is you set up a build trigger and then you set up the event information.
>
> **[2:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=146)** So the repository event, and this would be on, if you remember, a cloud source code repository when you do a push, assuming that your source code is stored on a cloud source repository or a mirrored GitHub or bit bucket repository.
>
> **[2:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=163)** When there's a push to a branch, push tag, or you can set it to pull requests for those non-cloud source repository locations, or you can say manually, or Pub/Sub, or Webhook.
>
> **[2:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=175)** You want to set the repository and then you need to set the branch.
>
> **[2:59](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=179)** You can also put in your nor files here.
>
> **[3:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=182)** And then you're going to say a configuration that's Cloud Build, YAML or JSON, Dockerfile, or the new CNCF standard, which is a build pack, which is a descriptor which generates a Dockerfile and a Docker image on the build.
>
> **[3:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=195)** Whatever types of build outputs you create, these will be stored in the Google Cloud Artifact Registry.
>
> **[3:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=203)** So this is a reason to enhance the scope.
>
> **[3:26](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=206)** If you'll remember from a previous movie, that was called originally the container registry, but the Artifact Registry now can hold additional artifacts binary, such as Java JAR files, go binary, so and so forth.
>
> **[3:40](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=220)** And then you set the location.
>
> **[3:42](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=222)** And then you have the variables.
>
> **[3:43](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=223)** You can say that if you need approval or a service account.
>
> **[3:46](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=226)** Once you set the trigger, then you basically have set the conditions on which your application will automatically update.
>
> **[3:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=233)** So this is really a great place for us to pause our learning because CI/CD is a deep topic.
>
> **[4:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=240)** And I know there are some courses in the library that talk about that topic.
>
> **[4:04](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=244)** And I find with most of my customers this is a relatively new capability.
>
> **[4:09](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=249)** What is exciting for me is in GCP we now have the tools that we can do this completely on the cloud.
>
> **[4:17](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/implementing-ci-cd-with-cloud-build?u=76281980&t=257)** So no installation, no servers, the full CI/CD scenario.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3), make (2), docker (1), find (1)
> **Env Vars:** gcp (2), poc (1), yaml (1), json (1), cncf (1)
> **Definitions:** is a  (7)
> **Code Keywords:** case, (1), this, (1), this. (1), pub (1)
> **Prerequisites:** set up (4)
> **Exercise Files:** source code (2)
> **Tools:** github (1)
> **Analogies:** such as (1)


### Conclusion

#### Next steps with Google Cloud Developer and DevOps Tools
> [LinkedIn Learning](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=0)** - Well, if you've journeyed with me on this course so far, you agree with me that tools matter.
>
> **[0:05](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=5)** And cloud architects worldwide, and all those that work with us, developers, DevOps, data scientists, and our application users, benefit from great tools.
>
> **[0:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=15)** So how can you learn more?
>
> **[0:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=18)** As I've been mentioning, for the Google Cloud I have several courses in the LinkedIn learning library.
>
> **[0:23](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=23)** GCP Essentials, GCP Enterprise Essentials, GCP Machine Learning.
>
> **[0:28](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=28)** I also have a course focusing on GCP Data Proc, which is Scaling Hadoop and Apache Spark.
>
> **[0:35](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=35)** If you are transitioning in your career, I have a short one hour course as well on mapping Cloud Careers to existing technical careers.
>
> **[0:45](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=45)** In addition, I recommend that you take a look at the Google Developer Experts, or GDE Cloud community.
>
> **[0:53](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=53)** Lots of great information there.
>
> **[0:55](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=55)** There is a new Google partner community called the Google Cloud Innovators.
>
> **[1:00](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=60)** Again, great resources.
>
> **[1:02](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=62)** And recommending to follow the Google Developer Relations team members as well.
>
> **[1:08](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=68)** In addition, I have my core GitHub repository, which is under my name, Lynn Langet, it on GitHub.
>
> **[1:15](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=75)** GCP essentials with the tool sections and more.
>
> **[1:18](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=78)** Again, I'm Lynn Langet.
>
> **[1:19](https://www.linkedin.com/learning/leveraging-google-cloud-developer-and-devops-tools/next-steps-with-google-cloud-developer-and-devops-tools?u=76281980&t=79)** Thanks for listening.

> [!info]- Semantic Content
>
> **Env Vars:** gcp (5), gde (1)
> **Tools:** github (2)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Speakers:** - well (1)


## Path Context

### In [[Getting Started with Cloud Development]]
← [[Azure Understanding The Big Picture]] | **4 of 4**

## Appears In

- [[Getting Started with Cloud Development]]

## Related Courses

_Courses sharing skills:_

- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Google Cloud Platform (GCP), Cloud Development
- [[DevOps Foundations- Your First Project]] — DevOps
- [[DevOps Foundations- Monitoring and Observability]] — DevOps
- [[Advanced Data Engineering with Snowflake]] — DevOps
- [[Automated Data Governance in Practice]] — DevOps

---

[↑ Back to top](#)