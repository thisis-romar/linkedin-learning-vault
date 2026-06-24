---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-projects-14276284
url: "https://www.linkedin.com/learning/python-projects-14276284"
duration_minutes: 92
duration: 1h 32m
level: Intermediate
updated: 1/29/2024
learners: 101584
skills:
  - Python (Programming Language)
  - Software Projects
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEstYqHCE2X1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632340359788?e=2147483647&amp;v=beta&amp;t=Ahpn_sTuxSjKMIULt0OFtNq9ykVf0h8FDD7sTiWUCY4"
linkedin_topic: Software Development
learning_paths:
  - '[Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)'
prev_courses:
  - '[Create an Open-Source Project in Python](Create%20an%20Open-Source%20Project%20in%20Python.md)'
next_courses:
  - '[Python Practice- Real-World Coding Challenges](Python%20Practice-%20Real-World%20Coding%20Challenges.md)'
path_nav: '[{"path":"Python Hands-On Practice","position":9,"total":14,"prev":"Create an Open-Source Project in Python","next":"Python Practice- Real-World Coding Challenges"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
  - skill/software-projects
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Projects.md)

![Python Projects](https://media.licdn.com/dms/image/v2/C560DAQEstYqHCE2X1Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1632340359788?e=2147483647&amp;v=beta&amp;t=Ahpn_sTuxSjKMIULt0OFtNq9ykVf0h8FDD7sTiWUCY4)

# Python Projects

> Canned challenge problems are sufficient practice for brand-new Python developers. But if you're an intermediate programmer looking to bring a novel idea to life, you require more nuanced, in-depth instruction and practice. In this course, instructor Barron Stone helps you learn Python the hands-on way, showing you what it takes to bring a Python project to the finish line. He walks you step by st

> [LinkedIn Learning](https://www.linkedin.com/learning/python-projects-14276284) | 1h 32m | Intermediate | 102K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Create your own Python projects](#create-your-own-python-projects)
  - [What you should know](#what-you-should-know)
  - [Finding inspiration](#finding-inspiration)
- [**1. Planning the Project**](#1-planning-the-project) (5 videos)
  - [User stories](#user-stories)
  - [Use cases](#use-cases)
  - [Requirements](#requirements)
  - [Program architecture](#program-architecture)
  - [Stub code](#stub-code)
- [**2. Retrieving Content**](#2-retrieving-content) (5 videos)
  - [Daily inspirational quotes](#daily-inspirational-quotes)
  - [Weather forecast using OpenWeatherMap](#weather-forecast-using-openweathermap)
  - [2023 Update on X (formerly known as Twitter)](#2023-update-on-x-formerly-known-as-twitter)
  - [Trending X (formerly known as Twitter) topics](#trending-x-formerly-known-as-twitter-topics)
  - [Random Wikipedia articles](#random-wikipedia-articles)
- [**3. Emailing the Digest**](#3-emailing-the-digest) (3 videos)
  - [Format an email message](#format-an-email-message)
  - [Send an email](#send-an-email)
  - [Schedule a task](#schedule-a-task)
- [**4. Building the GUI**](#4-building-the-gui) (2 videos)
  - [Plan the GUI](#plan-the-gui)
  - [Explore a Python Tkinter GUI](#explore-a-python-tkinter-gui)
- [**5. Iterating on the Design**](#5-iterating-on-the-design) (2 videos)
  - [Iterative improvements](#iterative-improvements)
  - [Save configuration settings](#save-configuration-settings)
- [**6. Packaging and Distribution**](#6-packaging-and-distribution) (1 videos)
  - [Distribute Python applications](#distribute-python-applications)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Create your own Python projects](https://www.linkedin.com/learning/python-projects-14276284/create-your-own-python-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/create-your-own-python-projects?u=76281980&t=0)** - [Barron] On the path to becoming a software developer, the best way to grow your programming skills is to actually write code. Many new programmers use coding challenge problems to get that practice, and that's a great starting point, but those challenge problems are well scoped with clearly defined goals. Programming in the real world is way more open-ended. As a developer, you'll likely be involved in scoping and defining what a program needs to do, not just writing code. Developing personal projects is a great way to build that muscle, but it can be a bit overwhelming for new programmers. Where do you begin, what should you make? How should you organize your code? I'm Barron Stone, and I love helping new developers take the next step in their programming journey. If you're excited to get started creating your own [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) projects, let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (1), python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [barron] (1)

#### [What you should know](https://www.linkedin.com/learning/python-projects-14276284/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is intended to help new programmers take the first steps towards creating their own [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) projects. The kind of personal projects you might work on during the weekend for fun or practice to grow your hands-on programming skills. As an example project throughout this course, I'll take you through my journey to develop a Python application which automates generating and sending a daily email digest. Now, this course is not intended to teach advanced software architectures, [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md), or the type of development methodologies you might encounter in a professional workplace with teams of developers working together on a large-scale project. There are lots of other courses that cover those more advanced topics. Before beginning this course, you should already have a basic working knowledge of Python and fundamental concepts like functions, conditional statements, variables, and so on. You don't need to be an expert, but you should be comfortable writing and executing your own Python scripts. If you're not already familiar with Python, I recommend getting started with the Learning Python course or the more comprehensive [Python Essential Training](Python%20Essential%20Training.md). To explore and run my Python scripts throughout this course, I'll be using the Visual Studio Code Editor, which is available to download for free from code.[visualstudio.com](https://visualstudio.com). That said, feel free to use any Python development environment that you're already familiar with to follow along with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9), [Design Patterns](../../Skills/Software%20Development/Design%20Patterns.md) (1)
> **CLI Commands:** python (9)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Tools:** visual studio (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Finding inspiration](https://www.linkedin.com/learning/python-projects-14276284/finding-inspiration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/finding-inspiration?u=76281980&t=0)** - [Instructor] When you decide to take on a new programming project for fun or for practice, the first thing to figure out is what should the program do? That's a simple question, but it's open-endedness can sometimes be difficult to overcome. It's similar to the challenge an aspiring author faces when they decide to write a novel, they open up their text editor, and then they stare at a blank page for hours trying to figure out what their story should be about. To help get past that writer's block, here are some potential sources of inspiration for your own next [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project. First, what are your hobbies? Besides writing Python code, of course. Maybe you love going to concerts. Could you write a Python script to monitor when your favorite bands are coming to town so you can snag tickets? Or maybe you're into photography and capture thousands of images a month. Could some Python scripts help you organize all those photos in just the way you like? Your workplace can also be a good source of inspiration. Are there parts of your job that could benefit from automation? Do you and your coworkers spend countless hours manually copying data into and out of spreadsheets or generating reports? Write a Python script to automate those processes and you'll be the hero of the [office](../../Skills/Web%20Development/Microsoft%20Office.md). Along those lines, what are things in your own daily routine at home that could benefit from some sort of automation? I know I wake up every morning and instinctively scroll through the same set of apps and websites on my phone to check the weather, news, and so on.
>
> **[1:34](https://www.linkedin.com/learning/python-projects-14276284/finding-inspiration?u=76281980&t=94)** That routine seemed like it could be streamlined with some automation and it's what inspired me to create an application to send a daily email digest to give me all of that information in one place, which is the example project we'll look at throughout this course. However, before continuing on, I encourage you to pause a moment and come up with at least three project ideas inspired by your own life and write them down, and as other ideas come into your head, you can add them to that list, that way you'll always have a handful of project ideas ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **CLI Commands:** python (5)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 1. Planning the Project

[↑ Back to Table of Contents](#table-of-contents)

#### [User stories](https://www.linkedin.com/learning/python-projects-14276284/user-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/user-stories?u=76281980&t=0)** - [Instructor] Now that I have the general idea for my next [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project to generate and send a daily email digest. I can start the planning process to figure out more specific details of what exactly it should do. I'd like to begin that process by writing out a few user stories, which describe a single small scenario from a user's perspective, the story should focus on the user's goal, what they want to do and why, rather than focusing on the application itself, we'll get to the applications requirements a bit later. Writing user stories is an easy way to start capturing your ideas because they're intended to be short, simple, and casual. That kind of thing you can write down on an index card, user stories, generally follow the format that looks something like as a type of user or role I want. And here you describe the goal. So that and then the reason or the benefit. That final part is optional, but useful to provide context on how and why the application will be used. For example, as a digest recipient, I want to receive an email every morning with current and useful information so that I know what's going on in the world and learn something new each day. This user story captures the reason why a digest recipient wants to receive a daily email, but it's still fairly broad. So let's write a few more user stories to get into some more specifics. As a digest recipient,
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/user-stories?u=76281980&t=92)** I want to read an inspirational quote so that I have something to ponder throughout my day. As a digest recipient, I'll also want to know the weather forecast so I know how to dress. Will I need my raincoat today or my sunglasses. That's important to know. As a digest recipient, I want to know what's currently trending on Twitter so I can stay hip and relevant to keep up with what's happening in the world. And as a digest recipient, I want to learn random facts so I can get a little bit smarter every day. Now it's easy to keep doing this and thinking up all the things I might want to know and include in the digest. Like what about new recipes to try? How's the stock market doing? Did my favorite sports team win their game yesterday? Is tonight going to be a full moon? What's my horoscope? Well, coming up with all these ideas is a fun, creative exercise. The scope of what I expect my application to do is quickly ballooning out of control. If I try to cram every possible feature, I can imagine until the first version of my program, that's going to be a lot to take on all at once. And honestly, I'll probably get overwhelmed, give up and never actually finish the project. When scoping work for a new project, fight the urge to include every possible feature in the initial release. Keep the initial scope, small and reasonable and use a separate backlog to keep a list of ideas for additional features that you might want to add to the program later. Now in addition to thinking through user stories
>
> **[3:06](https://www.linkedin.com/learning/python-projects-14276284/user-stories?u=76281980&t=186)** for the digest recipient, this application will have another important user or role that I need to consider, the administrator. So what might they need to do. Well as an admin, I would probably want to curate the content that gets included in the daily email to create the best experience for my digest recipients. As an admin, I'll also want to control when the email will be sent. So it arrives with relevant information to prepare recipients for their day ahead. It probably makes more sense to send the email early in the morning, then late at night. And finally as an admin, I'll want to add and remove recipients from the email list to control who receives the daily digest. Notice that this user story does not say something like, as an admin I want to click a button to add and remove recipients from the list when writing user stories, we don't focus on things like the user interface and how tasks are accomplished. Instead, we focus on what the user wants to accomplish and why we'll figure out the implementation details later. If you want to practice writing your own user stories, I encourage you to take a few minutes to write a handful of user stories for your own Python project before continuing on with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), imagine (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### [Use cases](https://www.linkedin.com/learning/python-projects-14276284/use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/use-cases?u=76281980&t=0)** - [Instructor] In addition to capturing user stories, another tool or format for planning an application is called a use case. Use cases generally consist of a title, written as a short phrase with an active verb that describes a goal. An actor, which is an entity external to the application. Usually a user or another computer system, which interacts with the program. And finally the scenario, which is the real meat of the use case detailing, how the goal is accomplished. This scenario can be written as a paragraph or a list of steps, either way. The aim is to write in short and succinct non-technical language. For example, this use case involves the digest recipient, reading tweets about a specific Twitter trend. The recipient opens the digest email, and their email client sees an interesting Twitter trend in the digest. They click on the trend, which is a link, and that opens their web browser to the Twitter page of related tweets. Although not explicitly described here, this use case implies part of the implementation that the digest email does not include actual tweets, just a list of trends, but that each of those trends can link you to the corresponding webpage of relevant tweets. This is a simple example, but use cases can get quite complex. And there's a lot of flexibility in the format and level of detail based on your needs. Now at the surface user stories, and use cases can seem like
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/use-cases?u=76281980&t=92)** they're doing the same thing just in alternate formats, but they are different tools for capturing different information. A user story focuses on the who, what and why of a particular task or goal, or as a use case captures the who, what and how that goal should be accomplished. They're not competing tools they're complimentary. That said, you don't necessarily always need to use both. For my own personal [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) projects, The scope is usually small enough that I can adequately capture the information I need with user stories, which are quicker and easier to write. So I tend to stick with those. If your application is more complex and it's useful to capture a step-by-step explanation for how tasks will be accomplished, then writing use cases may be more useful, or you might decide to use some combination of the two, it's really up to your own working style and which tools work best to organize your thoughts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **CLI Commands:** python (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Requirements](https://www.linkedin.com/learning/python-projects-14276284/requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/requirements?u=76281980&t=0)** - [Instructor] In addition to writing user stories and use cases, to describe the user's desired experience and how the user and system will interact, it can also be useful to write more traditional requirements, which formally capture the capabilities and constraints of the application. Functional requirements describe what the application should or should not do, and are typically written as sentences that begin with the application must or shall. For example, my daily digest application must generate a random inspirational quote. This is a required functionality it has to have. The application must also retrieve current weather forecast information for a specified location, retrieve current Twitter trends and retrieve a random Wikipedia article. It must format that content into an email and then send that email to a specified list of recipients. These requirements may seem obvious, from the earlier user stories and use cases, but writing them out like this can serve as a handy checklist to verify that the application, I eventually build, does everything I need it to do. Also, notice that I've kept these requirements at a fairly high level. I did not specify details of the weather forecast to retrieve, like how many days ahead should it look, or should the temperature be in Celsius or Fahrenheit. I also didn't specify the region for the Twitter trends or the language for the Wikipedia article. If I was working in a professional environment,
>
> **[1:33](https://www.linkedin.com/learning/python-projects-14276284/requirements?u=76281980&t=93)** as part of a large team, I might need to formally capture those details in the requirements to document those decisions. But, for personal projects, the level of detail shown here is sufficient. As a solo developer, it's probably not worth my time to write lengthy and elaborate requirements now because I'll figure out those details later during implementation. I should also capture a few more functional requirements related to what this application must enable the admin to do. It should enable the admin to configure which content sources to include in the email digest, it should enable the admin to add recipients to the distribution list as well as remove recipients. Notice that I did not combine add and remove recipients into a single requirement, which might seem natural to do, because add and remove operations typically accompany each other. That said, they are distinctly different operations, which is why I split them apart here. Each requirement, here, represents a single capability. My application will also need to enable the admin to schedule a reoccurring daily time to send the email digest as well as configure the email account credentials for sending the email. Now, in addition to these functional requirements, which describe what the application must do, I can also write a few non-functional requirements to describe how it should do it. Non-functional requirements can be written starting with a phrase like the application should be, and they typically focus on the ilities
>
> **[3:08](https://www.linkedin.com/learning/python-projects-14276284/requirements?u=76281980&t=188)** like maintainability, reliability, availability, and so on. For example, regarding usability, how will the admin interact with this application to perform their various tasks? To do that, the application should be configurable by the admin using a Graphical User Interface, or GUI. In regards to extensibility, the application should be extensible to add more content types. I'll start by implementing the four types of content, I described earlier for my daily digest, but there's a good chance I'll want to add more later so I should structure my application in a way that will enable that. Finally, regarding [Resiliency](../../Skills/Software%20Development/Resiliency.md), since I'll be retrieving content from various sources on the web, there's always the possibility that certain content may be unavailable or unusable for some reason. I don't want my application to crash, if it encounters one of those problems, so it should be fault tolerant and resilient to content errors. I think those are enough requirements to get going on the first iteration of my application, so I'll stop for now. If you're following this course with your own personal [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project in mind, this is a good time to pause and write down your own set of functional and non-functional requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** python (1)
> **Env Vars:** gui (1)
> **Speakers:** - [instructor] (1)

#### [Program architecture](https://www.linkedin.com/learning/python-projects-14276284/program-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/program-architecture?u=76281980&t=0)** - [Instructor] Now that I've captured my requirements, it's time to figure out how I'm going to organize and structure my code for this application. [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is an [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) language, so I'll need to consider the objects in my program and the classes I might need to create. A good starting point for that is to look at the various requirements, use cases, and user stories I've written, and pick out the nouns. For example, in the set of functional requirements shown here, I see quote, forecast, location, trends, article, content, email, and recipients. These are all potential objects within my program. Now, I won't necessarily end up needing to create classes for all of these, but gathering a list of nouns serves as inspiration for elements of my program that I might want to instantiate as objects. Looking at that list of nouns from all of my requirements, I notice that the first handful of nouns, quote, forecast, location, trends, and article, are all related to content. And content was already one of the words on that list. So, I mentally group those together. Along the same lines, recipients, time, and credentials all relate to sending an email. And email was conveniently already captured on the list. So, I mentally group those together as well. That leaves me with content, email, and GUI as potential candidates to turn into classes. Now, in addition to figuring out names for the classes
>
> **[1:36](https://www.linkedin.com/learning/python-projects-14276284/program-architecture?u=76281980&t=96)** I might want to create, I also need to figure out their behaviors and responsibilities. To do that, I looked through my requirements again to extract simplified verb phrases, such as generate quote, retrieve forecast, format content, and send email. These are all things my program will need to do. I then assign those behaviors to one of my three potential classes, based on where it made the most sense. The responsibility for generating and retrieving the various types of content made sense to put in the content class. I decided to make the email class responsible for formatting the content into a message, as well as sending the email itself. And finally, I assigned the remaining configuration-related behaviors as responsibilities of the GUI. These simplified verb phrases easily translate into a first draft of method names. All that gives me an idea of how to structure my program in terms of classes and their corresponding methods, but there's still a lot left to figure out. For example, where should the list of digest recipients be stored? The GUI is responsible for adding and removing recipients, but the email will need that list of recipients to know who to send the digest to. So, I thought it made more sense for that attribute to be part of the email class. Along the same lines, some part of my program will need to keep track of what time to send a digest email each day. I decided that a send time property made sense as part of the email class as well,
>
> **[3:09](https://www.linkedin.com/learning/python-projects-14276284/program-architecture?u=76281980&t=189)** even though the GUI has a responsibility to configure it. Now, if I wanted to, I could continue this process, attempting to predict and map out every attribute and method my entire program will ever need. And if I was working on this project with a team of developers, it would be important to work out those details together so everyone knows exactly what needs to be implemented. But as a solo developer, creating a Python project for the sake of learning and fun, and with a project this small in scope, the time and effort needed to reach a high level of detail may not be worth it. This rough plan with three classes gives me enough of a structure and starting point to begin writing code. And as I start implementing parts of the program, I'll learn new things along the way and likely make changes to this original plan. Spoiler alert: if you stick with me until the end of this course, the final product will differ a bit from the plan you see here. If you want to learn more about how to organize and structure programs written in object-oriented languages like Python, I recommend checking out the Object-Oriented Design course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (3), make (2)
> **Env Vars:** gui (4)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Stub code](https://www.linkedin.com/learning/python-projects-14276284/stub-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/stub-code?u=76281980&t=0)** - [Instructor] The past few videos have been about planning my application, figuring out what it should do and how to organize it. Now it's finally time to start writing some code. To give myself a structure to implement my design, I've created stub code for the entire program as three [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) modules, which are included with the exercise files for this course. Those are dd_content.py, dd_email.py, and dd_gui.py. In dd_email.py, I've laid out the skeleton for a daily digest email class, including it's init constructor method, ascend email method, and a format message method. Notice that I've used Python's pass statement as a placeholder for the future code I'll add to the script. By using pass as a placeholder in those methods, this is a valid Python script that can be executed. I can run it in the terminal with the command python dd_email.py. Obviously this skeleton script doesn't do anything useful yet, but the point is it's valid Python code that can be run without producing any errors. I've included an if name equals main section of code at the bottom of this script at line 12. As I fill out the parts of my daily digest email class, I can add corresponding test code to that bottom section, which will get executed when I run this Python module as the top level or main script.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-14276284/stub-code?u=76281980&t=93)** Switching over to the dd content module, notice that I've included a similar if name equals main section at the bottom of this script to hold test code. However, unlike the daily digest email module, which defined an email class, this module does not define a daily digest content class. After some thought, I realized that functions to get a random quote, get the weather forecast, get current Twitter trends and getting a random Wikipedia article, were all independent from one another. Sure, I could wrap them up into a daily digest content class structure, but that doesn't really add much value. So instead I decided to make dd content a Python module containing a handful of independent functions to get the various types of content. In the future, if I decide to include other types of content in my daily digest emails, I can easily build out this library with other functions to get those new content sources. Finally, there's the dd GUI module, which as its name implies, will build and handle the graphical user interface for the email digest administrator to use. I made the decision to use Python's TK inter module to build out the user interface. So I went ahead and added the appropriate import statements at the top of the script. I also filled out the if name equals main section with standard code to build and run the GUI when I execute this Python module as the top level main script. Notice that rather than creating stub code
>
> **[3:06](https://www.linkedin.com/learning/python-projects-14276284/stub-code?u=76281980&t=186)** for the various methods I think my GUI will need, I just left a comment to myself describing what the GUI needs to do. Designing a graphical user interface is a process in and of itself, and those are details I'll work through later. So I left these comments to remind my future self of the things I'll need the GUI to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9)
> **CLI Commands:** python (9), make (1)
> **File Paths:** dd_email.py (3), dd_content.py (1), dd_gui.py (1)
> **Code Identifiers:** dd_email (3), dd_content (1), dd_gui (1)
> **Env Vars:** gui (5)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)


### 2. Retrieving Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Daily inspirational quotes](https://www.linkedin.com/learning/python-projects-14276284/daily-inspirational-quotes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/daily-inspirational-quotes?u=76281980&t=0)** - [Instructor] Now that I have a plan for my program, and the structure of my program is stubbed out. It's time to start implementing the various pieces of code. Over the next several videos, I'll be implementing the four functions shown here , in the dd content.py module. If you want to get a little extra programming practice, this is a good point to pause the course, and take a few minutes to implement your own version of a get random quote function. Which should return a random quote, along with its author. Your implementation of that function will almost certainly differ from mine, and that's expected. I've left the requirements somewhat open-ended. So there are implementation decisions I'll be making along the way, which impact the final result. Now, let's walk through my thought process, to implement the get random quote function. First, I needed to decide where I wanted to get my random quotes from. A quick internet search for random quotes, will turn up countless webpages devoted to generating random quotes. For example, [randomwordgenerator.com](https://randomwordgenerator.com), has this motivational quote generator. Problem solved, right? It would be fairly straightforward to use a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) Web Scraping Library, like Beautiful Soup, or Scrapy, to scrape random quotes from that page. However, after clicking the button to generate random quotes several times, I realized that not all of the random quotes it produced, motivated and inspired me. I want the random quote for my daily digest to be something more personal.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/daily-inspirational-quotes?u=76281980&t=92)** So I decided to curate my own list of quotes, that I consider inspirational. There are lots of file formats I could have used, to store a collection of quotes, along with their respective authors, as structured data. Common ones, include the comma-separated value, or CSV format, [JSON](../../Skills/Web%20Development/JSON.md), and XML, all of which have standard Python modules, to make parsing them easy. Since storing a bunch of quotes, with their corresponding authors, does not require the hierarchical structure, that JSON and XML can provide. I ultimately decided to keep things simple, and use a CSV format. My collection of personal quotes is shown here in the quotes.csv file. Now, the file extension CSV implies that the fields or values on each line, will be separated by commas. However, we actually have the flexibility to decide which character we want to use, to separate the values. Since the quotes I'll be storing are sentences, which may likely include commas. I decided to use the vertical pipe symbol as my delimiter, between the author and their corresponding quote, since the vertical pipe seemed unlikely to show up anywhere else in this data. Switching over to dd content.py. (computer mouse clicking) Here, we can see my implementation of the get random quote function, starting at line seven. I gave the function a named parameter, for the location of the quotes file, which I assigned a default value of quotes.csv. Since I'll be loading the file from disk,
>
> **[3:06](https://www.linkedin.com/learning/python-projects-14276284/daily-inspirational-quotes?u=76281980&t=186)** which has the potential for problems, that might trigger an Exception. I included the code to load the CSV file in a Try Except Block. Line nine, opens this CSV file. And then lines 10 and 11, use a Python list comprehension, to build a list of dictionaries, where each dictionary contains a set of keys for an author and their quote. Notice that on line 11, when I use the CSV modules Reader function, I have to tell it to use the vertical pipe character as the delimiter, so that it does not use the default of a comma delimiter. Down in the except block below that, I define a default quote, to use in case the program is unable to load the CSV file. Notice that, even though I'm only defining a single dictionary for this default quote, I still wrap it inside of list brackets, so that structurally, it matches the list of quotes, generated on lines 10 and 11. Finally, line 17 uses the random modules choice function, to pick a random quote from the quotes list, and then return that selected quote as a dictionary object. Scrolling down to the bottom of this script. Within the main execution block, at line 28, I've added a few lines of code, to test the new quote generation functionality. Lines 32 and 33, called the get random quote function, without an input argument, and then print the returned quote. If all goes well, that should retrieve a random quote from my quotes.csv file. The two lines after that, 35 and 36, are similar,
>
> **[4:40](https://www.linkedin.com/learning/python-projects-14276284/daily-inspirational-quotes?u=76281980&t=280)** but when calling the get random quote function, I set the quotes file argument to be None. That should trigger the exception clause on line 13, and therefore return the default quote from Eric Idle. Now let's test it out. I'll right-click on this folder, within the folder Explorer. (computer mouse clicking) And select Open an integrated terminal. And then I'll run this script, with the command Python, (computer keyboard clicking) dd content.py. The first quote says, "the truth is rarely pure and never simple", which comes from my quotes.csv file. And as expected, the second default quote, advises us to always look on the bright side of life.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** csv (7), json (2), xml (2)
> **File Paths:** quotes.csv (4), content.py (3)
> **CLI Commands:** python (4), make (1)
> **Non-Speech:** (computer mouse clicking) (2), (computer keyboard clicking) (1)
> **URLs:** [randomwordgenerator.com](https://randomwordgenerator.com) (1)
> **Tools:** terminal (1)
> **UI Navigation:** right-click (1)

#### [Weather forecast using OpenWeatherMap](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980&t=0)** - [Instructor] Now that I've finished my get_random_quote function, I'll use the editor's code folding feature to hide that code and then move on to implement my next content function, get_weather_forecast, which is defined at line 19. Since weather forecast data needs to be current, I can't simply store it in a local CSV file like I did for the quotes. I'll need to get my weather information from the internet, and there are a couple of ways I could do that. I could use a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) web-scraping library to scrape forecast information from a site like [weather.com](https://weather.com). I could search the Python Package Index for a Python library to pull weather data from some online source. Or I can find an online source of weather information with an API that I can directly call from my program. I decided to go with that last option using [openweathermap.org](https://openweathermap.org). I'll mention here there are several Python libraries available on [pypy.org](https://pypy.org) to retrieve OpenWeatherMap data. However, I decided to go the more manual route and call the website API directly because I thought it improved the diversity of code examples I'll be showing you throughout this course. OpenWeatherMap provides a number of callable APIs to access current and forecast weather data. You do need to register with OpenWeatherMap to get an API key to use the service. And fortunately, they have a free access tier which provides more than enough capability to meet the needs of this project.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980&t=92)** If you want to use OpenWeatherMap for your own projects, you can click this link to get an API key and then follow the prompts to register an account. Looking back at the page of available APIs, I decided to use the 5 Day / 3 Hour Forecast to get a lookahead at the weather data in three-hour intervals. The API documentation provides examples showing the different ways this API can be called. You can request the forecast based on the city's name, the city's ID number, by geographic coordinates, or even a ZIP code. I decided to use the geographic coordinates option which takes a latitude and longitude value for where the forecast should be. And that raises up a designed question I had not thought about yet. Where should the forecast be for my digest email? If my daily digest has lots of readers scattered around the world, then it would make sense to customize the email for each person to give them their local forecast. That means I would need to know and keep track of where everyone lives which would add an extra layer of complexity to my program. So to keep things simple, for the initial version of my application, I'll just use my location for the forecast which is probably fine because realistically I'll be the only recipient of my email digest. When I call the forecast API for a specific latitude and longitude,
>
> **[3:05](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980&t=185)** by default, it will return the forecast data formatted as [JSON](../../Skills/Web%20Development/JSON.md). And we can see an example of what that looks like here in the documentation. This JSON response provides way more weather information than I'll need for my little digest email, so I'll be selectively using a subset of these fields for the things I care about. Now let's look at my Python code to call and use the forecast API. Notice at the top of my dd_content script, I've imported three new modules on lines three to five. I used the request module from the urllib package to open the URL for the forecast API, the json module to parse the response, and the datetime module as a format to store the timestamp for each of the forecast periods. Scrolling down, my get_weather_forecast function on line 25 has an optional parameter named coords which is a dictionary containing the desired latitude and longitude. If get_weather_forecast is called without a coord argument, then I use a default location which I picked to be near Cape Canaveral, Florida. Next, since retrieving data from the internet has a potential for errors, I enclose the code to retrieve the forecast within a try block. Line 27 contains my OpenWeatherMap API key. I've hard coded my key into the script here, but if you're going to be using OpenWeatherMap, you'll need to register for your own API key to use. Line 28 uses that API key
>
> **[4:38](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980&t=278)** along with the latitude and longitude coordinates to format a URL for the request. And then on line 29, I use the request module's urlopen function to retrieve the JSON response from the API. I pass that response to the JSON module's load function which parses the JSON text into a Python dictionary. Now, I could have just returned that dictionary I got from the load function because it contains all of the weather data. However, the JSON schema can be a bit cumbersome to navigate, and there's a lot of extra stuff in there that gets returned by the API that I don't really care about. So to simplify things, I created my own forecast dictionary on line 31 and populated it with just the information I want, including the city and country of the forecast as well as a list to hold the forecast data for future periods of time. As the 5 Day / 3 Hour Forecast API's name implies, this API gives me five days' worth of forecast at three-hour intervals. I don't really need five days' worth of forecast data for my daily email. I think a one-day lookahead is enough. So the for loop on line 35 iterates through the first nine of the three-hour forecast periods, gathering select information to represent the next 24 hours' worth of forecast. For each period, I build a dictionary to store its timestamp, temperature, a text description of the forecast,
>
> **[6:11](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980&t=371)** as well as an OpenWeatherMap icon for the forecasted condition. That gets appended to the periods list stored within the forecast dictionary. And if everything goes smoothly without any errors, line 41 will return my newly constructed forecast dictionary. If there was a problem along the way, the except block on line 43 will execute, printing the exception, and the get_weather_forecast function will return none. That's how my get_weather_forecast function works. To test it out, I've added some new test code to execute when this dd_content module is called as the main script. The first test case on line 65 calls get_weather_forecast without an argument so it should return the forecast for the default location near Cape Canaveral, Florida which then gets printed as output. The second test case on line 71 provides coordinates for the Texas' state capital, so it should retrieve and print the weather forecast for Austin, Texas. And then the final test case on line 78 defines an invalid set of coordinates which should cause an error trying to retrieve the forecast, and the get_weather_forecast function should return none. I've designed these three test cases to test out my new function into a variety of situations it might encounter. To run this script, I'll open a terminal in VS Code and type the command python dd_content.py. Looking at the output, testing the get_weather_forecast function, as expected, I first see a forecast
>
> **[7:45](https://www.linkedin.com/learning/python-projects-14276284/weather-forecast-using-openweathermap?u=76281980&t=465)** for the default location of Cape Canaveral, followed by a forecast for Austin, Texas, and then finally an error message from when I passed invalid coordinates along with a message to verify that, as expected, the function returned none.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (7)
> **Env Vars:** api (16), json (6), url (2), csv (1), zip (1)
> **Code Identifiers:** get_weather_forecast (8), dd_content (3), get_random_quote (1)
> **CLI Commands:** python (7), find (1), make (1)
> **URLs:** [weather.com](https://weather.com) (1), [openweathermap.org](https://openweathermap.org) (1), [pypy.org](https://pypy.org) (1)
> **Definitions:** is called (2), is a  (1)
> **Tools:** terminal (1), vs code (1)
> **File Paths:** dd_content.py (1)

#### [2023 Update on X (formerly known as Twitter)](https://www.linkedin.com/learning/python-projects-14276284/2023-update-on-x-formerly-known-as-twitter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/2023-update-on-x-formerly-known-as-twitter?u=76281980&t=0)** - [Instructor] Before continuing to the next video about Twitter, I want to address some things that have changed since I originally recorded this course in 2021. As you may know, Twitter was taken private and rebranded as X. As part of that transition, X has been making lots of changes to their API and moved many of the features that were previously free to now be behind a paywall. Unfortunately, the trends endpoint I use in the next video is one of those features, so you won't be able to follow along for free anymore. If you want to retrieve that trend data, you'll need to pay for a higher access level. I decided to keep the Twitter video in this course anyways because I think it contains several good lessons about working with APIs even if you can't access that specific API.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Cross-References:** next video (1), in the next (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Trending X (formerly known as Twitter) topics](https://www.linkedin.com/learning/python-projects-14276284/trending-twitter-topics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/trending-twitter-topics?u=76281980&t=0)** - [Instructor] Continuing to build out my DD content module, my next function to implement is the function to get current Twitter trends. Fortunately, Twitter has an API that enables software developers to do just that, which you can read about in the documentation on their website. As with the OpenWeatherMap API, you'll need to register a Twitter account and request access to the API, which will give you an API key. You can find instructions for that on the Getting started page under the Getting access to the Twitter API section. Now, as I looked through the Twitter API documentation, I noticed that the APIs authentication process looked a bit more complicated than I wanted to deal with. So rather than figuring out how to implement that myself, I decided to see if there was an existing [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library, I could use to interface with the Twitter API. I started my search for a Twitter library at [pypi.org](https://pypi.org) by searching for, well, Twitter. The first result was a library simply named Twitter, and that sounded promising, so I checked it out. One of the first things I look at when considering a new library from PyPI is when it was last updated. This Twitter library has been updated fairly recently, which is a good sign indicating it's not one of the mini abandoned projects in the Python Package Index. That's especially important for libraries that interface with APIs like this one, because APIs can and will change over time. And you want to be using a library
>
> **[1:34](https://www.linkedin.com/learning/python-projects-14276284/trending-twitter-topics?u=76281980&t=94)** that's actively maintained to keep up with those changes. This library seemed promising, so I looked through its documentation to see if it can give me access to Twitter trends. And unfortunately, it did not seem to have that capability, so it was not going to work for my purposes and my search continued. Looking back at the page of PyPI search results. There were over 3,000 Python projects related to Twitter. I could work my way down this really long list, reading the documentation for various libraries until I find one that will work, but that could take a long time and I might not necessarily find the best library for the job. So I changed my search strategy from PyPI to [Google](../../Glossary/Service/Google.md). I searched for Python Twitter trends, and that led me to several blog posts and tutorials from people who had already figured out the problem I'm trying to solve. Now, I'm intentionally telling you this story about my learning journey, figuring out how to retrieve Twitter trends, because I've worked with some beginner programmers in the past who think that using Google is cheating and they think that a real programmer should know how to do things offhand. However, if you ask any real experienced programmer, they'll almost certainly tell you they Google it. In fact, in the most recent Stack Overflow Developer Survey, nearly 90% of respondents said they turned to when they get stuck. The point I want to make is this. There's no shame in using Google or other similar resources to figure out how to do something.
>
> **[3:08](https://www.linkedin.com/learning/python-projects-14276284/trending-twitter-topics?u=76281980&t=188)** It's a rare but lingering stigma in the programming community that we need to get past. The body of knowledge for [Software Development](../../Topics/Software%20Development.md) has grown beyond what any one person can be expected to know, and it grows more and more every day. We all need to share our knowledge with each other and use it to get better collectively. Now, I'm not advocating for blindly copying and pasting code, you find online without understanding it, but don't reinvent wheels that have already been built for you. Learn from others and use that knowledge to build your next great program. My own Google searching and reading blog tutorials led me to a Python library called Tweepy, which I would have probably not discovered through my original search strategy of just using the PyPI search engine. This Tweepy library is current, seems to be popular and has the capabilities I need for my project. Looking at its documentation, Tweepy's API has a method called trends place, which will retrieve the current trends for a specific location given it's Where On Earth Identifier or WOEID, which is a 32-bit number used to uniquely identify various places or regions on earth. That looks perfect for what I needed, so I installed the Tweepy library on my computer using the command pip install tweepy. After that finished installing, I was ready to begin writing code. Looking at my Python code in the DD content module. I imported the Tweepy module at the top
>
> **[4:42](https://www.linkedin.com/learning/python-projects-14276284/trending-twitter-topics?u=76281980&t=282)** of the script to use it. Scrolling down to the get_twitter_trends function of line 50. Notice that I've added an optional parameter for the Where On Earth Identifier value, which I've given a default value that corresponds to the United States at large, you can search online to find other WOEIDs for various places around the world. As with the previous get_weather_forecast function when retrieving data from the internet, there are lots of things that can go wrong, so I wrapped my code within a try block. Lines 52 and 53 define my Twitter API key as well as the secret key, which is similar to a password to use the API key. I pass those keys to the Tweepy modules function to go through the authentication process. And then finally on line 55, I use the trends_place method from the Tweepy modules API class to retrieve the current trends for the given WOEID and return that information stored in a list of dictionaries containing the information about current trends. Of course, if something goes wrong during that whole process, the except block on line 57 will execute printing an error message and returning the object None from the get_twitter_trends function. Scrolling down to test code, I've written three test cases to try out this function. The first at line 97 calls the get_twitter_trends function without any arguments. So it should retrieve and print trends for the default region of the United States. The for loop on line 100 iterates through the top 10 trends in the list to print the name of the trend,
>
> **[6:18](https://www.linkedin.com/learning/python-projects-14276284/trending-twitter-topics?u=76281980&t=378)** along with the URL corresponding to that trend or hashtag. The second test at line 103 passes in a WOEID corresponding to London, and then prints the current trends for there. And the last test at line 109 passes an invalid WOEID of -1, which should produce an exception and cause the get_twitter_trends function to return None, just like the previous set of test cases for the get_weather_forecast function, I want to run my new get_twitter_trends function through a set of common scenarios it might encounter. Now, I'll open up a new terminal and then run this DD content module as the top level script. In the output, we can see the current top Twitter trends for the United States followed by the top Twitter trends for London. And finally, an error message because the get_twitter_trends function was enabled to retrieve Twiends for the invalid WOEID as expected and it returned None.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Google](../../Glossary/Service/Google.md) (5), [Software Development](../../Topics/Software%20Development.md) (1)
> **Env Vars:** api (11), woeid (5), url (1)
> **CLI Commands:** python (6), find (5), make (1), pip (1)
> **Code Identifiers:** get_twitter_trends (6), get_weather_forecast (2), trends_place (1)
> **Documentation:** the documentation (2), stack overflow (1)
> **Prerequisites:** you'll need (1), getting started (1), install (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), just like (1)

#### [Random Wikipedia articles](https://www.linkedin.com/learning/python-projects-14276284/random-wikipedia-articles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/random-wikipedia-articles?u=76281980&t=0)** - [Instructor] To implement the final of my four content retrieval functions. I'll need to retrieve a random Wikipedia article from the web. So I checked to see if Wikipedia has an API, I could call it to do that. I searched [Google](../../Glossary/Service/Google.md) for Wikipedia API documentation. And the second result gave me exactly what I was looking for. Wikipedia conveniently has a [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, which can be used to access Wikimedia content, Expanding the page content section, and then scrolling down near the bottom of it, I see a description that sounds like get content for a random page. That sounds like exactly what I need. So I'll click on the get button and then click the try it out button. This allows me to then select the desired return format from the dropdown menu. It has options to get a random page title, the full page [HTML](../../Skills/Web%20Development/HTML.md), or just a summary of its key points. I don't need to include an entire Wikipedia article in my digest email, getting a summary sounds perfect for my needs. So I'll select that option and then click the execute button. This request URL field shows me the URL I can use to get a random summary and below it, I can see an example of the response body I'll get back, which is formatted as [JSON](../../Skills/Web%20Development/JSON.md).
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/random-wikipedia-articles?u=76281980&t=92)** It has fields for things like the page title, thumbnail images, the URL for the full page, and near the very bottom there's a field called extract, which contains a couple of sentences summarizing the article. Since this information is formatted as JSON, the code for my get Wikipedia article function to parse the response is going to have a lot in common with my previous get weather forecast function, which also used JSON. So let's look at my implementation. Now my get Wikipedia article function uses the request modules URL open function at line 65 to access the URL for a random page summary and then passes the response to the JSON modules load function to parse it. I don't need all of the information included in that response. So lines 66 through 68 extract the three things I care about the page title, summary extract and URL, and it packages those into a dictionary which then gets returned. That's all there is to it. This turns out to be the simplest of my four content functions. Scrolling down to the bottom of this script, I've added one final test case, which calls the get Wikipedia article function to retrieve a random page and then prints out the three parts. it's title, URL, and extract. To demonstrate that, I'll open a new terminal window and run this script.
>
> **[3:02](https://www.linkedin.com/learning/python-projects-14276284/random-wikipedia-articles?u=76281980&t=182)** At the end of the output, we can see that the function retrieved a page about nano letters along with the URL to the full article and it's extract summary. If I run this script again, now I get a different random article. This time it's about Decatur downtown historic district. That completes my set of four content functions, which means I can check off the first four of my functional requirements to retrieve various types of content. We saw examples of how to use several different APIs along the way to retrieve information from the web, like a weather forecast, Twitter trends and Wikipedia articles. If you want to learn more about using web APIs in general, I recommend taking the course introduction to web APIs, which provides a great overview of everything from connecting to APIs to handling errors. Another course you might also find useful is web scraping with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). When there's not an API available to use, then web scraping is another way to extract data from the web.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4), [Google](../../Glossary/Service/Google.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** url (8), api (4), json (4), rest (1), html (1)
> **UI Navigation:** click on (1), select the (1), dropdown (1)
> **CLI Commands:** find (1), python (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 3. Emailing the Digest

[↑ Back to Table of Contents](#table-of-contents)

#### [Format an email message](https://www.linkedin.com/learning/python-projects-14276284/format-an-email-message?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/format-an-email-message?u=76281980&t=0)** - [Narrator] Now that my application can retrieve various types of content. It's time to move on to another part of the program, the email itself. which will be implemented in the DD email [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) module. Here you can see the methods I stubbed out to implement for my Daily Digest email class. If you want some extra programming practice, now is a good time to pause the course and implement your own version of these methods, before I show you how I approach them. Now, before I could send an email, I needed to have something to send. So it made sense for me to tackle the format message. Method next. When I was coming up with the original requirements and a rough plan for my class, I planned to have a method called format message, whose job would be to format all of the assorted content into the message body for the email. later, when it came time to actually implement that method, I realized I didn't actually know the details of how an email message should be formatted. So I booted up my trusty web browser and searched for how to format an email message with Python. I'm clearly not the first person to have this problem. And after scanning through the Python documentation and a handful of tutorials, I quickly realized there are multiple ways to format an email message. The message body can be written as Plaintext without any special formatting. Or it can be formatted using [HTML](../../Skills/Web%20Development/HTML.md), similar to a webpage.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-14276284/format-an-email-message?u=76281980&t=93)** And it's possible to include both a Plaintext and HTML version within a single email message using the Multipart content type that's implemented by Python's MIMEMultipart class. Which we'll see in the next video. Although most people view emails as HTML these days. There are some situations where Plaintext is the preferred option. So for broader compatibility, I wanted my Daily Digest email to include both versions. Which meant my format message method would need to generate both types of content. Looking at my implementation of the daily digest email class, starting with the init constructor method on line six, I initialize an instance variable to store my four types of content in a dictionary. For each of the four types of content, I have a Boolean flag to indicate whether or not to include that content in the email message. And I retrieved the latest content for each type by calling the corresponding function for my DD content module, which is imported at the top of the script. Scrolling down, we find my format message method at line 18. And as the big green comment indicates, it begins by formatting the Plaintext version of the message body. I initialize the variable named text on line 22 as a formatted string with a Daily Digest header line for the top of my Plaintext body, which includes the current date. I've also added in some asterisks and tildes to my Plaintext section header, to give it some more visual pizazz.
>
> **[3:06](https://www.linkedin.com/learning/python-projects-14276284/format-an-email-message?u=76281980&t=186)** The next section at line 25 uses an IF statement to check if the random quote should be included in the email message. And if so, I can catenate a section header for the Quote of the Day to my text variable, along with the formatted F string on line 27, displaying the quote and its author. The next three sections of code from lines 30 to 46, perform a similar function checking to see if the weather forecast, Twitter trends, and Wikipedia articles should be included. And if so, concatenating the corresponding section headers and formatted text content. Notice that in the weather forecast section, I've used a for-loop at line 32 to format and add a line for each of the nine forecast periods. Similarly, the Twitter section uses a for-loop at line 36 to include the top 10 trends. Those four sections work together to build up the text variable into a single string containing the entire Plaintext message. Scrolling down, this next big green comment indicates the beginning of the section to generate HTML content. It's similar to the Plaintext section above it, except I'll be concatenating strings containing formatted HTML to the HTML variable initialized at line 51. If you're not familiar with HTML and what these various tags and angle brackets mean. Don't worry about trying to understand it. Just know that this is building the code that describes how to display the content similar to a webpage. Notice that I'm using triple quotes
>
> **[4:41](https://www.linkedin.com/learning/python-projects-14276284/format-an-email-message?u=76281980&t=281)** to define Multiline strings that preserve the indentation from line to line. And that it's an F string, which allows me to embed variables to be formatted in curly braces such as the date on line 54. As in the Plaintext section above, I use a series of four IF statements like the one at line 58 to determine whether or not to include each type of content. The code to insert a Quote of the Day is fairly simple. with just a section header and the quote along with its author. But the weather forecast section is a lot longer. because this code uses a for-loop to build an HTML table to hold all of the forecast elements. We'll see what the resulting table looks like in a moment. Continuing on, as you might expect, I have a section for the Twitter trends, which uses a for-loop at line 96 to add the top pin trends. And then a section for the Wikipedia article. I've included different types of HTML formatting in these sections to hopefully make the content look nice and easily readable. Finally, at the end of the format message function, I can catenate an HTML footer at line one 114. And then line 120 returns both the text and HTML message. Packaging them together as a dictionary. My test code for the format message function generates a new message at line 127. then lines 130 through 134 print out the Plaintext and HTML message content to the console.
>
> **[6:14](https://www.linkedin.com/learning/python-projects-14276284/format-an-email-message?u=76281980&t=374)** And then the last four lines save those messages to text and HTML files to be inspected. I'll open a terminal, and run this script, And we can scroll up through the output with the HTML code, and then the Plaintext version above that. looking in the file directory, I can see that created a message text dot text file. So I'll open that. and we can see all of the content represented as Plaintext. including my squiggly art to highlight the section headers. And then if I open the HTML file, I can scroll through that to see all of the HTML code. which is about 150 lines long. Now this HTML code itself is just text data. So to view it in its full glory, we'll need to open it in a web browser. To do that, I'll right click on the HTML file. So like reveal in file Explorer and then double click on the HTML file in the Explorer window to open it in a browser. Now you can see the result of my various formatting efforts. such as the Quote of the Day being an italics. the forecast data being organized within an invisible table. and the Twitter trends being hyperlinks, which I can click on to see the corresponding Twitter trends search results. I'll admit, it's not a great looking webpage because my HTML skills are super basic. But it's good enough for my purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (20), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **Env Vars:** html (20)
> **CLI Commands:** python (4), find (1), make (1)
> **UI Navigation:** click on (2), scroll up (1), open the (1)
> **Analogies:** similar to (2), such as (2)
> **Cross-References:** coming up (1), in the next (1)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)

#### [Send an email](https://www.linkedin.com/learning/python-projects-14276284/send-an-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/send-an-email?u=76281980&t=0)** - [Instructor] Now that I have a function to format my daily digest content into an email message, it's time to implement the send email function to actually send an email. The [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) standard library includes an email package which is a library for managing email messages. That package contains several modules. And for my implementation, I'll be using the email.message module to represent the email message itself. At the heart of this module is a class called, "Email Message," which is what I'll use to assemble the various parts of my daily digest email, such as the subject line, list of recipients, and of course, the message content itself. Now, going back up a level to the email package, as the documentation points out, while this package can help manage email messages, it is not designed to actually send those messages. That functionality is included in other Python modules, such as SMTP-Lib. This module can be used to set up a client session to send mail through an SMTP server, which means I'll need an SMTP email server to connect to. I could set up and run my own email server locally, but that sounds like a lot of work. And fortunately many online email services provide an SMTP server you can use with external email clients and other types of applications. When I originally recorded this course in August of 2021, I used a Gmail account to send my daily digest email.
>
> **[1:38](https://www.linkedin.com/learning/python-projects-14276284/send-an-email?u=76281980&t=98)** However, around May of 2022, [Google](../../Glossary/Service/Google.md) changed its security policy to no longer allow programmatic sign in with just a username and password, which is considered less secure. That means Gmail no longer worked for my solution. So, I updated my application to use an [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) email address instead. In this video, I'll show you how I configured my application to send emails with Outlook and I'll update the course exercise files accordingly, but keep in mind when you see me interacting with Gmail in later videos in this course, that's because they were from the original course recording. This documentation from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s support page shows the server name, port, and encryption method I'll need to use when connecting the Outlook SMTP server. Now, let's look at how I implemented my send email function. Notice near the top of the script, I've imported a few new modules. SMTP-Lib to establish a connection with the outlook server to send the email, and the email message class from the email.message module. Also, notice that I've added two more instance variables to the init method for my daily digest email. At line 14, I initialize a list for the recipient email addresses to send the digest to and I pre-populate it with two addresses for test purposes. And then at line 17, I create a dictionary to store the email address for sending the digest,
>
> **[3:10](https://www.linkedin.com/learning/python-projects-14276284/send-an-email?u=76281980&t=190)** along with the account password. Scrolling down, my send email function begins by instantiating a new email message object on line 25 and then configuring fields like the subject line, sender email address, and list of recipient addresses. Line 31 calls the format message method to generate the message body. Then, I use the set content method on line 32 to configure the email to use the plain text version of the content. After that, on line 33, I use the ad alternative method to add the [HTML](../../Skills/Web%20Development/HTML.md) version of the content. This converts the message into a multi-part container with the original plain text message as the first part and the new HTML message as the second part. Finally, the last section of my send email method establishes a secure connection to the SMTP server using TLS encryption. After logging in with my senders credentials, at line 38 I call the send message method on line 40 to send my email message object. And that's all there is to it. At the bottom of my script, I've added a call to the send email method to test my code. So, I'll open a terminal, run the script,
>
> **[4:46](https://www.linkedin.com/learning/python-projects-14276284/send-an-email?u=76281980&t=286)** and after it finishes, I'll switch over to the inbox for one of my recipients. And I can see that a new message has just arrived with the subject daily digest and today's date. I'll open that email and within it, I see my HTML formatted content with the quote of the day, weather forecast, Twitter trends, and a Wikipedia summary for some daily random learning. The email client is only showing the HTML version of my message, but we can see that the plain text version was included as well by clicking on these three dots, selecting view, and then view message source. If I scroll down past the header information,
>
> **[5:41](https://www.linkedin.com/learning/python-projects-14276284/send-an-email?u=76281980&t=341)** I'll eventually reach the plain text version of my digest content, and then below that is the HTML. By including both content types, I've made my daily digest compatible with a wider range of email clients and settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Google](../../Glossary/Service/Google.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** smtp (7), html (5), tls (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)

#### [Schedule a task](https://www.linkedin.com/learning/python-projects-14276284/schedule-a-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/schedule-a-task?u=76281980&t=0)** - [Instructor] Let's look back at the original outline for a daily digest email class that I created earlier in this course. I've successfully implemented format message and send email methods so I can check those off as complete. And as part of implementing those functions, I added a list to store the recipient email addresses along with a few other instance variables that I had not originally planned for as part of my rough outline. That leaves me with one final piece to implement, the ability to send the daily digest at a reoccurring time every day. Now I did include a method called schedule time as part of the GUI. My idea was that the administrator will use the GUI to configure the time at which they want the email to be sent every day. And that gets passed to the email object, which is then responsible for sending the email itself at that specific time. Keep in mind, this was my initial plan. I created it as a rough outline to organize the pieces of my application I would need to create before I actually dove into the details of implementation. To give my application the ability to schedule a reoccurring time to send the email every day, I decided to use this schedule library, which I found on the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package index. I picked it because it provides a super simple API for scheduling tasks that repeat at a specified interval or time of day, which seemed like a perfect match for my needs. However, as I read through the documentation, I soon realized that this schedule library had a limitation I would need to overcome.
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/schedule-a-task?u=76281980&t=92)** Out of the box, the scheduler cannot run in the background. So if I schedule a future task to send an email, my program will be stuck waiting until that task executes. That'll lock up the main thread, which would prevent the administrator from interacting with the program. If you've ever been stuck waiting on a frozen user interface, you know how frustrating that can be. And that's not what I want for my program. The workaround is to run the scheduler as a separate thread. This page from the documentation shows an example of how to do that by defining a class named schedule thread, which inherits Python's thread class to run the scheduling activity separate from the main thread. Now this particular example defines the schedule thread class locally within a function named run continuously. I could do something similar for my program. However, personally, I'm not as big of a fan of defining classes locally like this. I usually prefer to define classes separately so they can easily be reused elsewhere. So for my implementation, I decided to take the concept of a scheduled time method from the GUI class and the send time field from the email class and move them into a new class I'll call the scheduler. My scheduler class will inherit from the Python threading module's thread class, so it can run separately from the main thread. The scheduler will call the email class's send email method when it's time to send another email digest and the GUI will use these scheduler's scheduled time method to, well, scheduled the send time.
>
> **[3:06](https://www.linkedin.com/learning/python-projects-14276284/schedule-a-task?u=76281980&t=186)** This is far from a formal or complete UML diagram, but it's enough to convey my intent and the important idea. Now, I just made a fairly significant change to my original plan for this application and that's okay. I created the initial plan to have a structure and direction to start doing work and making progress. But as I gain experience and learn more along the way, I should maintain the flexibility to adjust my course of action and modify that original plan. It's almost guaranteed I'll encounter challenges that I didn't foresee at the beginning. Of course, as I've said, many times in this course, if I was working as part of a larger team of developers, I should explicitly communicate that learning and discuss the proposed changes I intend to make before running off and implementing them in code. But since this is a one man project, I only need to convince myself that this change is a good idea. Now let's dive into my actual implementation. I created a new Python module named dd_schedule to house my daily digest scheduler class. On line five, you can see that my new class inherits from the threading module's thread class. Within its constructor method, on line eight, I use the super function to call the thread class's init method. Then I create a new threading event object to serve as an internal flag, so I know when to stop running this thread. I define my method to schedule a task at line 14, which I've renamed from schedule send to schedule daily because that's a bit more descriptive of what it actually does.
>
> **[4:39](https://www.linkedin.com/learning/python-projects-14276284/schedule-a-task?u=76281980&t=279)** Line 15 calls the schedule module's clear function to clear any tasks that may have been previously scheduled and then line 16 uses the schedule API to schedule the specified function, to execute every day at the specified time. Notice that I don't actually store an instance variable for the send time as part of my schedule or class, like I had planned earlier. Instead, I simply pass it to the schedule API, which in turn stores and uses that time. This is another example of a change I realized I could make during implementation. Scrolling down, the run method uses a while loop at line 23 to continuously run and execute any pending schedule task until the stop running flag gets set. And the stop method below that at line 30 can be called to set that flag. Moving down to the test code, I start by importing and instantiating, a daily digest email object, which I'll use for it's send email method after that line 39 instantiates a new scheduler object, and then line 40 calls the start method, which is inherited from the thread class to begin running the scheduler as a separate thread. The next four lines, get the current system time and then schedule a test email to be sent the next minute into the future. Line. 47 sleeps the main thread for 60 seconds to keep the program alive while the scheduler waits to send the email, before finally calling the stop method to shut everything down. I'll open a terminal, And then run this DD scheduler script.
>
> **[6:18](https://www.linkedin.com/learning/python-projects-14276284/schedule-a-task?u=76281980&t=378)** And I can see that it's scheduling a test email to be sent at 11:20. Let's fast forward until after that sent. Alright, it's sent. And if I switch over to my email client, I see that I've received a new daily digest at the specified time. So that's how my new scheduler class works. Now. I mentioned the need to run the scheduler as a separate thread, but I didn't really go into details about why and how to do that. If you want to learn more about multithreaded programming, I encourage you to check out my course on parallel and [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Concurrent Programming](../../Skills/Software%20Development/Concurrent%20Programming.md) (1)
> **Env Vars:** gui (4), api (3), uml (1)
> **CLI Commands:** python (5), make (2)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** dd_schedule (1)
> **Ports:** :20 (1)
> **Cross-References:** earlier in (1)


### 4. Building the GUI

[↑ Back to Table of Contents](#table-of-contents)

#### [Plan the GUI](https://www.linkedin.com/learning/python-projects-14276284/plan-the-gui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/plan-the-gui?u=76281980&t=0)** - [Instructor] Now that I finished implementing all four content generation functions, an email class to format and send the daily digest, and a scheduler. I can check off the majority of my functional requirements. These three modules contain the real meat of my application. However, I did include a non-functional requirement, to implement a graphical user interface, or GUI, for the admin to use. So, let's turn our attention to that. I usually save GUI development for the end of a project, because I could create a fantastic looking GUI, but it would be useless if I haven't implemented the underlying application for it to control. Now, a quick disclaimer here. I am not an experienced UX designer. I'm an engineer. And true to the stereotypes about user interfaces developed by engineers, mine tend to be, well, not the greatest, but they're functional and get the job done. I'm going to show you the quick and dirty process I used to lay out my GUI. And you'll see how to implement a GUI, using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s [Tkinter](../../Skills/Software%20Development/Tkinter.md) module, but don't expect this lesson to be a masterclass in proper UX design principles. For my own GUI planning. I tend to sketch out my ideas on a sheet of paper, or by moving shapes around on [PowerPoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) slides. I'm sure there are better UX design tools out there, but this is what I have on hand, and it's good enough for my own purposes. Since this GUI is intended for the admin to control my daily digest application, I looked back at the list of requirements for things the admin must be able to do.
>
> **[1:34](https://www.linkedin.com/learning/python-projects-14276284/plan-the-gui?u=76281980&t=94)** This GUI should enable them to configure which content source to include in the digest email, add and remove recipients, schedule the daily time to send the email, and configure the email sender credentials, on the GUI elements related to each of these tasks. Now, I could start by drawing out a big old box to represent the GUI window, giving it a title or header label, and then figuring out all the elements I'll need, and how to arrange them. However, I found that trying to figure out the entire GUI all at once is a bit overwhelming. And after awhile, I usually just find myself staring at an empty sheet of paper. So, to break up the problem and make the process more manageable, I thought of each of the tasks my GUI needs to accomplish, as separate boxes. I individually figured out how to arrange the elements within each box. And then later, I rearranged those boxes as subsections of the overall GUI. I did make the decision to combine the boxes, for adding and removing recipients, because they seemed like closely related tasks, and there would likely be some interaction between their GUI elements. Now, let's fill out these boxes, starting with configuring the email content. Since choosing which types of content to include is a set of binary choices, turning each one on or off, using check buttons seemed like the logical choice. I also decided to add a section header to make it clear what these check buttons were related to. Next, for managing the recipients list, I decided to use a list box,
>
> **[3:09](https://www.linkedin.com/learning/python-projects-14276284/plan-the-gui?u=76281980&t=189)** which can display multiple texts entries at once. The ListBox widget also enables the user to click and select multiple entries. So I decided to use that as my mechanism for removing recipients from the list, by adding a Remove Selected button below it. That covers removing recipients. To add recipients, I'll use a single line text entry field, along with the Add Recipient button. I originally put the field to Add Recipients, at the bottom of this section, but after some thought, I rearranged things to put it at the top, because I thought that made more sense for usability. By focusing on small subsections of the overall GUI, one at a time, it's easy to play around and rearrange elements like this. Finally, once I was happy with that layout, I added a section header for the recipient configuration controls. Moving on. To schedule when to send the digest, I planned to use a set of spin boxes, to select the hour and minute in 24 hour time format. And to configure the sender credentials, I simply planned text entry fields for the account email and password. Now that I've individually planned out my four subsections, I can lay them out to see how they look together. One thing I considered at this point was, how will configuration changes be registered with the program? I could build this GUI, such that whenever any change is made to one of these fields, it will immediately update the corresponding variable within my program. However, that could cause some minor chaos. For example, if the admin was using the scroll boxes to schedule a new send time,
>
> **[4:41](https://www.linkedin.com/learning/python-projects-14276284/plan-the-gui?u=76281980&t=281)** and they happen to scroll past the current time, that could prematurely send an unwanted email digest to all the recipients, and that's no good. So to prevent that kind of thing from happening, I decided to add an Update Settings button, that the admin will use to intentionally lock in new configuration settings. Now that I have all the pieces in place, I can play around with the relative arrangement, to find the layout I like. For example, maybe I want to make my GUI short and wide, by arranging the elements into two columns. I could consider using tabs to organize these sections, or perhaps a set of multiple [Windows](../../Glossary/Service/Windows.md), whatever makes sense. The modularity of these subsections makes that rearranging easy. After some consideration, I ultimately decided on the vertical layout shown here, moving the recipient section to the top, because it's simple and functional. Now, as I mentioned earlier, I am not an expert UX designer. If you're interested in learning more about how to better design user interfaces, you're in luck, because there are several great courses about UX design on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning. The course, [User Experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) for non-designers, is a good starting point for beginners. And it's a course I should probably take myself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Tkinter](../../Skills/Software%20Development/Tkinter.md) (1), [Powerpoint](../../Skills/Cloud%20Computing/Microsoft%20PowerPoint.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** gui (17)
> **CLI Commands:** make (4), find (2), python (1)
> **Definitions:** is a  (3)
> **Prerequisites:** configure (3)
> **Analogies:** for example (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Explore a Python Tkinter GUI](https://www.linkedin.com/learning/python-projects-14276284/explore-a-python-tkinter-gui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/explore-a-python-tkinter-gui?u=76281980&t=0)** - [Instructor] Now that we've seen my plan for the GUI let's dive into the code I wrote to actually implement it. This dd GUI module is 250 lines long. So for the sake of time, I won't step through it line by line. And I've used my editor's code folding feature to hide a lot of the code to make it more manageable for viewing. Instead, I'll focus on a few key design decisions, and of course the full code is included in the exercise files if you want to explore it in more detail yourself. Notice at the top, in addition to importing [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s [Tkinter](../../Skills/Software%20Development/Tkinter.md) module, I've also imported the daily digest email and scheduler modules because my GUI will interact with instances of both. Expanding my daily digest classes init method at line eight, we see that it takes a parameter named route, which corresponds to the TKinter window in which I want to build this GUI. Lines 11 through 14, use the TKinter API to add a title to the window and create a header label to pack into the top of the window frame. And then lines 16 through 18, define a couple of font styles I'll be using. After that, the next five sections of my code create the various subsections of my GUI and all work in basically the same way. For example, to create the section to add and remove recipients, I create a TKinter frame named recipient's frame and insert it into my window at lines 21 and 22. The next two lines, 23 and 24 instantiate two TKinter variables to hold the string data in my entry field to add a recipient
>
> **[1:34](https://www.linkedin.com/learning/python-projects-14276284/explore-a-python-tkinter-gui?u=76281980&t=94)** and the data in the list box to display the current recipients. Then finally, I passed those two variables along with a reference to the recipient's frame, to the build GUI recipients function at line 25, which handles creating the various GUI widgets. The next few sections of code follow a similar process to build the GUI sections, to schedule delivery time, configure which content to include in the email, update the cinder credentials and control when to update the settings. Now, rather than instantiating all of those TKinter variables within the init method, and then passing them as arguments to the various builder methods as I did here, I could have instantiated those variables within their respective builders. However, I decided to structure my code this way with all of the variables instantiated within the init method so that I could then initialize their values within the init method. You can see that code on lines 66 through 80, by keeping all of this initialization code together within init, if I later decide that I want to change how I initialize some of the fields, I can easily do that in one place. instead of needing to search around through the variable builder methods for those variables. There's not necessarily a right or wrong way to organize the code, to build a GUI, this is just how I chose to do it. Finally, the last couple of lines in my init method, instantiate and start the scheduler thread. At line 85 I also registered the event of the GUI window being closed to call a shutdown method of defined to make sure the scheduler thread
>
> **[3:07](https://www.linkedin.com/learning/python-projects-14276284/explore-a-python-tkinter-gui?u=76281980&t=187)** gets stopped before trying to exit the program. Now let's move on to look at my functions, to create and place the GUI widgets within their respective frames, by expanding the function to build GUI recipients. I've organized this function into two sections. The first part creates the various TKinter GUI widgets I'll need to add and remove recipients, including a header label, a text entry field, a list box with a scroll bar and add and remove buttons. The second section starting at line 108, then uses TKinters grid geometry manager to place those widgets within the frame. I like to separate out the grid placement code like this because it makes things easier to debug. When widgets were not showing up where I wanted them, I could easily see what was wrong and tweak the row and column settings because all of those function calls were located together in one place. If I expand some of my other GUI builder methods at a quick glance, we can see that they follow a similar pattern first instantiating all of the necessary widgets, and then placing them with the grid geometry manager. I'll leave it up to you if you want to explore these methods more within the exercise files. Continuing on, after the set of builder methods are four callback methods, which I've associated with the various buttons in my GUI. For example, the add recipients method contains the code to execute when the user clicks the add recipient button. It uses the TKinter variables get and set methods to take the string from the add recipient text field, and appropriately update the list box of recipients.
>
> **[4:44](https://www.linkedin.com/learning/python-projects-14276284/explore-a-python-tkinter-gui?u=76281980&t=284)** Below that the remove selected recipients method does what you might expect removing the selected recipients from the recipients list box. The update settings method, which gets called when the user clicks the update button gets the values from all of the TKinter field variables and assigns them to the corresponding variables in the email and scheduler objects. Now, since the process of updating these values does not mean it actually sends an email, when I was developing this GUI, I wanted a way to quickly verify changes to things like the recipients list and content dictionary actually worked correctly without having to wait until the next scheduled sin time. So I added a bonus button to my GUI to manually send an email digest whenever I want to, by calling the email classes, send email method. I originally put this in for debugging purposes, but I found it so handy that I decided to keep it in the end product. The final method in my daily digest GUI class is shutdown, which as I mentioned before, stops the scheduler thread before closing the GUI window. I haven't added any additional test code to the, if name is main section of the program, it simply spawns the GUI when called as the top level script. So let's do that now. I'll open a terminal. Run this module, and we can see the GUI window it creates. If I type a new recipient address into the top entry field and then click the add recipient button,
>
> **[6:21](https://www.linkedin.com/learning/python-projects-14276284/explore-a-python-tkinter-gui?u=76281980&t=381)** I can see it gets added to the bottom of the recipients list. If I click to select one or more recipients from that list and then click the remove selected button as expected, they disappear from the list. I can click on the spin box buttons to schedule the digest send time and select which types of content to include with the check buttons. Finally, to submit those changes, I'll click the update settings button, and if I'm feeling antsy to send a new digest right away, I can always click the manual send button. That completes my Python GUI. It's simple with all the controls I need for this project. If you want to learn how to use Python's TKinter module to build GUIs for your own Python projects, I encourage you to check out my course on [Python GUI Development with Tkinter](Python%20GUI%20Development%20with%20Tkinter.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tkinter](../../Skills/Software%20Development/Tkinter.md) (11), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5)
> **Env Vars:** gui (23), api (1)
> **CLI Commands:** python (5), make (2)
> **Exercise Files:** exercise files (2)
> **Analogies:** for example (2)
> **Prerequisites:** configure (1), initialization (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)


### 5. Iterating on the Design

[↑ Back to Table of Contents](#table-of-contents)

#### [Iterative improvements](https://www.linkedin.com/learning/python-projects-14276284/iterative-improvements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/iterative-improvements?u=76281980&t=0)** - [Instructor] By finishing my GUI, I've accomplished the initial scope of goals I set out to achieve and created a fully functioning product. At this point, I can consider this personal [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project a success and I should definitely take a moment to celebrate. However, this does not mean I have to be done working on my daily digest project. Now that I've planned, built, and effectively released a working program, I can continue to iteratively test and gather user feedback and build on this baseline to add new features and enhancements. Now, in the case of my daily digest project, I'm realistically the only person who will use this program from the admin perspective, so I can informally capture my own ideas that crop up while using my program to build a backlog of potential features to support the admin. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the recipients will likely be consenting friends and family members I convinced to sign up for my daily newsletter, so I should gather feedback from them as well to see what they like and dislike about my daily emails and then add those ideas to my backlog to consider implementing as well. I thought of a few ways I can enhance the experience for my digest recipients, such as allowing the recipients to individually customize which content they wanted to be included in their digest. The program could also customize the weather forecast to match each recipient's individual location instead of giving everyone the same forecast which may or may not be relevant to where they are, and along those lines, the digest could also change when it sends the email based on the recipient's timezone,
>
> **[1:35](https://www.linkedin.com/learning/python-projects-14276284/iterative-improvements?u=76281980&t=95)** so all of my recipients can receive the digest at the same relative time in their day. Implementing any of these three ideas would require my application to store extra information about each recipient in addition to just their email address. I could also expand my digest to include more types of content with several of the ideas I came up with during my initial planning cycle shown here. I also came up with a few ideas to enhance my application for the administrator's experience. I thought it would be useful if the program notified the admin when a certain content source became unavailable or couldn't be accessed. Perhaps there was a change to one of the APIs. This would let the admin know they need to go investigate the issue. From a usability perspective, I realized it would be really great if the application saved any configuration changes between program runs. In its current state, my program reverts back to the default settings anytime I restart the program, which is really annoying. Also, in its current state, my Python application has to be left running to send out emails at the daily send time. It would be nice if the application could interface with the operating system to run as a scheduled service so I didn't need to leave the Python interpreter running 24/7. From a security standpoint, storing the sender's credentials and various API keys in plain text is not secure at all, so I should probably find a better way to store that sensitive information. And finally, I can always make improvements to my GUI to make it easier on the eyes. If you're looking for some extra programming practice,
>
> **[3:09](https://www.linkedin.com/learning/python-projects-14276284/iterative-improvements?u=76281980&t=189)** I encourage you to pick a couple of these tasks that interest you and try implementing them within my daily digest application. For my own project, after prioritizing all those backlog items, I decided that adding the ability to save configuration settings between program runs was my top priority. It only took restarting the program a handful of times as the admin to realize how much that feature was needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** python (3), make (2), find (1)
> **Env Vars:** gui (2), api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Save configuration settings](https://www.linkedin.com/learning/python-projects-14276284/save-configuration-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/save-configuration-settings?u=76281980&t=0)** - [Instructor] I want to show you how I implemented my first backlog feature to save and restore configuration settings when I exit and restart my application as an example of how I integrated new code into my existing program. Fortunately, all of the configuration settings I needed to save, existed as part of the GUI, so I only needed to add code within my GUI module. In order to save information between program runs, I'll need to save it to some sort of file. All of my GUI information can be represented as text data, so I decided to use [JSON](../../Skills/Web%20Development/JSON.md) as my file format, and you can see that I imported the JSON module up at line five. Scrolling down, I added two new methods to my GUI class, a save config method at line 259 and a load config method at line 276. Within the save config method, I get the current state from all of my GUI elements, package them into a configuration dictionary and then save that to file using the JSON.dump function on line 271. Notice that this method has an optional input parameter for the file path with a default argument of dd_config.Jason. I gave it the flexibility to accept an arbitrary file path in case I need that capability later. But for implementing this particular feature, I stuck with using its default argument. Below that my load config method performs the complimentary task of loading the JSPN file into a dictionary and using that to set all of the GUI variables. Then at the end,
>
> **[1:32](https://www.linkedin.com/learning/python-projects-14276284/save-configuration-settings?u=76281980&t=92)** it calls the update settings method at line 289, to commit that configuration. Save config and load config are pretty straightforward load and save methods. Now, there are two places I needed to call those methods within the flow of my program. To save the current configuration when closing the program, I added a tri except block to the shutdown method, on lines 250 through 253 to use my new save config method. Then to load that saved configuration, when I restart the program. At the end of my classes and nit method, when I set the initial values for all of the GUI variables I just created, I added the tri clause at line 68 to attempt to load the configuration from the JSON file. If that fails to load for some reason, then my application will use the default settings just as before. That's all there is to my new feature to save and reload settings. It took me a little over half an hour to implement, but this is a huge improvement to the usability of my digest project. And now I'm ready to tackle the next idea in my backlog.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (4)
> **Env Vars:** gui (7), json (4), jspn (1)
> **Code Identifiers:** dd_config (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Packaging and Distribution

[↑ Back to Table of Contents](#table-of-contents)

#### [Distribute Python applications](https://www.linkedin.com/learning/python-projects-14276284/distribute-python-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/distribute-python-applications?u=76281980&t=0)** - [Instructor] Continuing to add new features onto a personal [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) project can become a never-ending endeavor, but as long as you're still learning and having fun, I say go for it. At some point, though, you might want to distribute your fancy new application for others to use. Let's say my mother decides she wants to start sending out her own daily email digest to friends and family. After making a few changes to add the content and features she wants, I'll need to package my application up in a way that she can use. To my mom, the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) python just means a type of snake, so I can't simply hand her a bunch of .py files. A great way to distribute Python applications is using the PyInstaller utility, which bundles a Python application and all of its dependencies into a single package. It's conveniently available through the Python package index, so we can easily install it with the command pip install pyinstaller. This one can take a while to install, so let's fast forward. Now that the PyInstaller tool is installed and my terminal is navigated to the project directory with all of my Python scripts, I'll build this application into an executable with the command pyinstaller -w -F and then the top-level Python script for this application, which is my dd_gui.py module. I'll press enter to run it, and while PyInstaller builds my program, let's talk about what those flags mean. The first flag argument, -w, tells [Windows](../../Glossary/Service/Windows.md) and Mac OS
>
> **[1:39](https://www.linkedin.com/learning/python-projects-14276284/distribute-python-applications?u=76281980&t=99)** to not open a console window for standard IO when running the program. Without this flag, a console window will pop up at any time you run this program in addition to the [Tkinter](../../Skills/Software%20Development/Tkinter.md) GUI window I want. The next, -F flag, tells PyInstaller to create a one-file bundled executable, which includes everything this program needs to run. And the last argument is the top-level Python module. When I package my script with PyInstaller, I get a native executable file that contains everything needed to run the program. Since I'm using Windows after running PyInstaller, I end up with this folder named dist in my project directory, and within it is the generated EXE file. This is an executable I can send to my mom or any other friends and family members that want to send their own digest emails. If I double-click on it, it runs the program and the GUI pops up. The PyInstaller tool has a lot more features and capability than I demonstrated here, so if you're interested in distributing your own Python applications as an executable, I encourage you to read the PyInstaller documentation to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (9), [Windows](../../Glossary/Service/Windows.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Tkinter](../../Skills/Software%20Development/Tkinter.md) (1)
> **CLI Commands:** python (9), pip (1)
> **Env Vars:** gui (2), exe (1)
> **Prerequisites:** install (3)
> **File Paths:** dd_gui.py (1)
> **Code Identifiers:** dd_gui (1)
> **Tools:** terminal (1)
> **UI Navigation:** double-click (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-projects-14276284/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-14276284/next-steps?u=76281980&t=0)** - [Barron] Congratulations, you've reached the end of this course. I've taken you through my own process to create new personal [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) projects from start to finish, and I hope it's given you some inspiration and motivation to begin or continue building your own Python creations. There's still plenty to learn, and I've mentioned a lot of other Python courses along the way, so I've included a list of those in the exercise files for reference if you want to continue learning. Don't feel like you need to complete them all. Pick and choose the topics that most interest you. I wish you the best of luck on your Python endeavors, happy programming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [barron] (1)


## Instructor

- [Barron Stone](../../Instructors/Software%20Development/Barron%20Stone.md)

## Resources

- Exercise files available

## Skills Covered

- Python (Programming Language)
- Software Projects

## Path Context

### In [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)
← [Create an Open-Source Project in Python](Create%20an%20Open-Source%20Project%20in%20Python.md) | **9 of 14** | [Python Practice- Real-World Coding Challenges](Python%20Practice-%20Real-World%20Coding%20Challenges.md) →

## Appears In

- [Python Hands-On Practice](../../Paths/Software%20Development/Learning%20Paths/Python%20Hands-On%20Practice.md)

## Related Courses

_Courses sharing skills:_

- [Learning ArcGIS Python Scripting](../Data%20Science/Learning%20ArcGIS%20Python%20Scripting.md) — Python (Programming Language)
- [QGIS and Python for AEC](../Data%20Science/QGIS%20and%20Python%20for%20AEC.md) — Python (Programming Language)
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Python (Programming Language)
- [Using SQL with Python](../Data%20Science/Using%20SQL%20with%20Python.md) — Python (Programming Language)
- [Python- Working with Predictive Analytics (2019)](Python-%20Working%20with%20Predictive%20Analytics%20(2019).md) — Python (Programming Language)

---

[↑ Back to top](#)