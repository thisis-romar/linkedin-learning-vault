---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: swift-delegations-and-data-sources-2018
url: "https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018"
duration_minutes: 66
duration: 1h 6m
level: Intermediate
updated: 3/21/2018
learners: 1968
skills:
  - Swift (Programming Language)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGSfsJszIFFgA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567794475117?e=2147483647&amp;v=beta&amp;t=JvupRiD4BQ3oY8JubP-06zOO0zwBsenWbr_vFTHcd4Q"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Master Swift]]'
prev_courses:
  - '[[Swift 5 Essential Training]]'
next_courses:
  - '[[Swift 5- Protocol-Oriented Programming]]'
path_nav: '[{"path":"Master Swift","position":3,"total":4,"prev":"Swift 5 Essential Training","next":"Swift 5- Protocol-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/swift-programming-language
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Swift-%20Delegations%20and%20Data%20Sources.md)

![Swift: Delegations and Data Sources](https://media.licdn.com/dms/image/v2/C4E0DAQGSfsJszIFFgA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567794475117?e=2147483647&amp;v=beta&amp;t=JvupRiD4BQ3oY8JubP-06zOO0zwBsenWbr_vFTHcd4Q)

# Swift: Delegations and Data Sources

> Have you ever been frustrated getting data from one storyboard scene to another using delegates? If so, then this concise course is for you. Discover how to work with delegates and data sources, two essential—but tricky—concepts that can confuse even seasoned iOS developers. Get the foundation you need to understand delegates and the theory of how they work. View examples demonstrating the steps t

> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018) | 1h 6m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. The Basics of Classes and MVC]]** (4 videos)
- **[[#3. 2. Delegation]]** (7 videos)
- **[[#4. 3. Data Sources]]** (2 videos)
- **[[#5. Conclusion]]** (1 videos)

### 1. Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=0)** - [Steven] I think the most frustrating thing for me to learn in iOS was the concept of delegates.
>
> **[0:05](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=5)** For the longest time they just didn't make sense to me.
>
> **[0:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=9)** You may be one of those people who is frustrated.
>
> **[0:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=11)** How to get data from one storyboard scene or view controller to another using delegates?
>
> **[0:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=17)** In this course I'm going to give you the foundation you need to understand delegates, the theory of how they work, and some hands-on examples in an Xcode project and Playground of building a delegate to send data between two view controllers.
>
> **[0:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=32)** I'll cover the differences in delegates for coding UI and for storyboards.
>
> **[0:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=37)** I'll look at the differences between iOS and watchOS.
>
> **[0:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=41)** I'll also cover delegates relative the data source.
>
> **[0:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=44)** I'll finish up with an example of APIs that use data sources.
>
> **[0:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/welcome?u=76281980&t=49)** Let's get started on the fun.

> [!info]- Semantic Content
>
> **Code Identifiers:** ios (2), watchos (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [steven] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=0)** - [Instructor] For this course, I'm assuming you've used Xcode and Swift before.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=4)** I'll assume a lot of you are beginners.
>
> **[0:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=6)** You might also be experienced developers coming from languages that don't use delegates and you haven't gotten the mindset for them yet.
>
> **[0:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=14)** We'll be using a lot of arrays, so I'll assume you have the basics of arrays down.
>
> **[0:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=18)** There will be some WatchOS code.
>
> **[0:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=20)** If you don't know WatchOS, don't worry.
>
> **[0:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=23)** I'll walk you through it.
>
> **[0:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-you-should-know?u=76281980&t=25)** Beyond that, I'll be going through most of what you need to know.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### How to use the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] If you have access to the exercise files, you can follow along with the same project I'll be using on screen.
>
> **[0:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980&t=6)** I'll be doing two projects, alternating between the two.
>
> **[0:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980&t=9)** The first is the Swift Playground, which you will write from scratch as we proceed through the course.
>
> **[0:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980&t=14)** The second is an ordering app for the Huli Pizza Company, except there's some delegates and data sources still to add to the beverages and desserts, so the app doesn't work perfectly.
>
> **[0:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/how-to-use-the-exercise-files?u=76281980&t=25)** Through the course, we'll add those delegates to make a fully functional app.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. 1. The Basics of Classes and MVC

#### What is a class?
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=0)** - [Instructor] Delegates make a lot more sense if you have some basic theory.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=4)** If you already know everything you want to ever know about classes and view controllers, then you can skip this chapter, but you might learn something along the way.
>
> **[0:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=13)** While we use classes in object-oriented programming, it's good to review what they actually are.
>
> **[0:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=18)** A class is a collection of data, which we call properties and actions we can do to those properties, which we call methods.
>
> **[0:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=26)** In Xcode, open up a new Swift playground.
>
> **[0:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=30)** And you can pick a blank playground for iOS and hit Next.
>
> **[0:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=36)** And I'm going to save it on the Desktop for the moment.
>
> **[0:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=41)** At the bottom, you'll see the Run button.
>
> **[0:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=44)** Hold it down and select Manually Run so that we don't have to worry about this giving us lots of error messages while we're working.
>
> **[0:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=54)** And go ahead and delete everything there.
>
> **[0:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=56)** And go ahead and add the libraries we'll need for this.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=59)** The first one will be import UIKit.
>
> **[1:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=64)** Second one will be import PlaygroundSupport.
>
> **[1:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=70)** Under that, I'm going to add a class, which I'm going to call Colors.
>
> **[1:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=76)** Now, Colors has both properties and methods.
>
> **[1:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=80)** So I'm going to start with a property called colorName.
>
> **[1:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=81)** So let colorName equal and I'm going to put an array here.
>
> **[1:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=90)** Red, green, blue, and purple.
>
> **[1:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=101)** Okay, so that's one property.
>
> **[1:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=103)** I'm going to make another property called color.
>
> **[1:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=107)** I'm going to make another array and this one, I'm going to make of UIColor, so it's the actual colors.
>
> **[1:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=115)** And I'll just use a UIColor.red, UIColor.green, UIColor.blue, and UIColor.purple.
>
> **[2:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=130)** So I have these two as properties.
>
> **[2:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=133)** Now, properties and methods are either public or private.
>
> **[2:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=137)** A public method of a property is one that is classes other than the defining class can see and use.
>
> **[2:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=143)** Private means the property or method is only usable and visible within the defining class.
>
> **[2:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=149)** For example, I can make this color private by putting the word 'private' in front of it.
>
> **[2:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=156)** Now, other classes won't be able to see it.
>
> **[2:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=158)** Meanwhile, colorName up here is still public.
>
> **[2:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=162)** I'm going to add one more thing to this.
>
> **[2:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=164)** That's a variable.
>
> **[2:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=166)** So it'll be a property that can be changed.
>
> **[2:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=169)** And we're going to call that colorIndex.
>
> **[2:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=172)** I'm just going to make that zero for now, which will keep track of our colors for us.
>
> **[2:58](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=178)** And so, I can have properties like this.
>
> **[3:01](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=181)** I can also add some methods.
>
> **[3:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=184)** I do that with the func keyword and then, I can put one that says name.
>
> **[3:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=191)** And I can add a parameter of index, which will be an integer and I will return from that my string of my colorName.
>
> **[3:22](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=202)** This is essentially what will be otherwise known as a getter in other languages.
>
> **[3:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=209)** Like so.
>
> **[3:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=210)** And I'll make one more.
>
> **[3:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=213)** For color, and again, I'll call an index for a parameter of Int.
>
> **[3:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=222)** And this returns the UIColor.
>
> **[3:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=226)** Return and this'll be color.
>
> **[3:51](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=231)** Again, just put an index.
>
> **[3:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=234)** All right, so this is essentially what we have for a class.
>
> **[4:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=240)** Now, I want to show you a few things about this class that are important, okay.
>
> **[4:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=244)** One very important thing that we want to look into.
>
> **[4:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=247)** We tend not to like other people messing with our insights and that is a good programming practice too.
>
> **[4:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=253)** In general, it's best to leave what is public by other classes to a necessary minimum, like our color class here.
>
> **[4:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=261)** Under the class, make an instance of the class.
>
> **[4:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=263)** So let's call let colors equals Colors.
>
> **[4:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=269)** I'm just going to instantiate like that.
>
> **[4:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=271)** So now, let us try to assign a color.
>
> **[4:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=274)** Let myColor equal colors.
>
> **[4:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=281)** And if I want to assign the colors from my color array here, I can't, it's not there in this auto-complete, because it's private.
>
> **[4:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=292)** I'm not allowed to use it.
>
> **[4:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=294)** Try one more thing.
>
> **[4:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=296)** Try doing color number one.
>
> **[4:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=299)** If you go ahead and you run that, you're going to get an error.
>
> **[5:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=303)** It doesn't exist.
>
> **[5:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=304)** It only exists, this color or method here only exists within the class.
>
> **[5:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=310)** The only way to get this to work right is I've got to do colors, so that I'm saying in the class colors, there's this method color.
>
> **[5:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=321)** Now, if I run that, that works.
>
> **[5:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=325)** And there's my color.
>
> **[5:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=328)** Okay, enclose the console there.
>
> **[5:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=330)** This is what's known as encapsulation.
>
> **[5:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=333)** It keeps the insides of the class to itself and nothing can change it from the outside of the class.
>
> **[5:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=338)** You must refer to the class to get the value or function.
>
> **[5:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/what-is-a-class?u=76281980&t=342)** This will be key to understanding why we need delegates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), private (5), class. (5), public (4), this. (3)
> **CLI Commands:** make (8)
> **Code Identifiers:** colorname (4), ios (1), colorindex (1), mycolor (1)
> **Definitions:** is a  (2), known as (2)
> **Analogies:** for example (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Model
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=0)** - [Instructor] A term heard often when working with Xcode is MVC.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=4)** MVC stands for model-view-controller.
>
> **[0:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=7)** It's not an exclusive term to Xcode projects.
>
> **[0:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=10)** It's a pattern of programming, a good organization of any program or application in a graphics-rich environment, and arguably any environment that interacts with a user.
>
> **[0:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=20)** MVC separates the major parts of an application.
>
> **[0:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=23)** Why is it important?
>
> **[0:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=24)** With model-view-controller, you only change one part completely, the view, and possibly some of the controller.
>
> **[0:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=31)** The code handling your data never changes between the versions, saving a lot of time and effort.
>
> **[0:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=36)** The parts of our program that deal with information we want to process is called the model.
>
> **[0:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=41)** A pizza shop ordering system has a list of data giving us information about each person's order.
>
> **[0:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=47)** There may be other links to that data with more data about each customer and about each pizza.
>
> **[0:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=53)** In the pizza ordering system, this is our model, the collection of all the data we will use in the ordering system.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=59)** It does not in any way interact with a user.
>
> **[1:01](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=61)** It does not display anything or does it ask for input.
>
> **[1:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=66)** The Colors class is another example of the model.
>
> **[1:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=70)** We have color information but nowhere to put the color information, nor any devices to input the color.
>
> **[1:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=77)** There is no user input or output here.
>
> **[1:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/model?u=76281980&t=79)** Models make calculations, convert data, or manipulate from a color to a string, but there is no user interaction here.

> [!info]- Semantic Content
>
> **Env Vars:** mvc (3)
> **Definitions:** stands for (1), is called (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### View
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=0)** - [Instructor] If the model does nothing with interaction, where is all the user interaction?
>
> **[0:05](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=5)** That's happening in the view.
>
> **[0:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=7)** Let's add a view to our playground.
>
> **[0:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=9)** Under the class, add this, and give yourself a little bit more room, so I'm adding a couple extra lines here, to soup this up a little, and I'm going to start with let view equal UIView, and I'm going to use the one for frame, so I can make a frame here, and CGRect, let me just the integer one, and that will be zero, zero, width of 400, and I'll make a height of 600.
>
> **[0:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=42)** And that makes us a view, and we're going to do a PlaygroundPage.current.liveView equals the view, and that displays the view on our live view that we'll use to see what we're doing here.
>
> **[0:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=57)** Now I can change the background color to orange.
>
> **[1:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=60)** So I can do view.backgroundColor equals UIColor.orange, go ahead and run this, and if I check my live view, I've got an orange box now.
>
> **[1:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=78)** That's a view, but it's kind of boring.
>
> **[1:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=80)** So I'm going to close up my live view again, and I'm going to add a little bit more code here.
>
> **[1:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=85)** And so what I'm going to do is add a button.
>
> **[1:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=87)** So let button equal UIButton, this is also going to have a frame, and it will CGRect again, I'll just use the integer version again.
>
> **[1:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=102)** Zero, tab zero, I'm going to make the width 200, and the height 400, okay.
>
> **[1:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=113)** And after that, I'm going to set a title on the button, and it'll, title will be Color Choice, for normal state.
>
> **[2:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=126)** And I can set a background color on the button too, and I'll make it dark gray.
>
> **[2:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=133)** And now I can take this view and add it to my super view by using view addSubview(button).
>
> **[2:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=143)** Okay, go ahead and run this.
>
> **[2:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=147)** Pop open the live view, and you can see our large gray button with an orange background.
>
> **[2:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=156)** For most codes we do things like this.
>
> **[2:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=159)** Add subviews to the root view.
>
> **[2:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=162)** Now you may be tempted to use the color instance above our view in the view.
>
> **[2:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=167)** This color's here.
>
> **[2:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=169)** This is what MVC is trying to avoid.
>
> **[2:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=172)** The reason why is rather simple.
>
> **[2:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=174)** If I keep my model separate from my view, which contains my user interface, if I change the model, I don't have to change the user interface.
>
> **[3:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=184)** Conversely, if I change the user interface, I don't have to change the model.
>
> **[3:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=188)** Keeping them separate, and you are free to make changes much easier.
>
> **[3:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=193)** The model never interacts with the view, the view never interacts directly with the data.
>
> **[3:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=198)** The view is what the user sees and interacts with.
>
> **[3:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=203)** It doesn't interact with anything else to keep things easy to change.
>
> **[3:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=207)** Because of that, the colors class up here and the view down here are not talking to each other.
>
> **[3:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/view?u=76281980&t=215)** We need something that does.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), this, (2), this. (2), class, (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** liveview (1), backgroundcolor (1), addsubview (1)
> **Env Vars:** mvc (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Controller
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=0)** - [Narrator] The view and the model don't talk to each other.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=4)** The heart of the model view controller, connects these two so they do.
>
> **[0:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=8)** Called the controller, it coordinates what happens in the model and what happens in the view.
>
> **[0:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=14)** Go ahead and stop the app.
>
> **[0:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=16)** Close up the live view for the moment.
>
> **[0:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=20)** And you'll notice something about my code here.
>
> **[0:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=23)** This view I kept out of a class.
>
> **[0:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=27)** You can make classes of UI View, but they're a bit complicated.
>
> **[0:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=32)** Most of the subclasses of UI View, we use regularly already made for us.
>
> **[0:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=36)** For example, UI Button.
>
> **[0:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=39)** Now, controllers have identifiers for both the view and the controller.
>
> **[0:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=44)** We can make this for example, appear just below my colors.
>
> **[0:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=50)** So let's use this, 'cause I'm going to make another class.
>
> **[0:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=55)** And I'm going to call it View Controller.
>
> **[0:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=57)** Like that.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=59)** Now, it's going to contain two properties.
>
> **[1:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=62)** Or two variables, really.
>
> **[1:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=64)** One is colors, which would be my colors.
>
> **[1:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=70)** And one would be my view.
>
> **[1:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=74)** Like that.
>
> **[1:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=76)** Now I have variables for both of these in one class, and that would be my controller.
>
> **[1:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=83)** I can access both of them and move them appropriately.
>
> **[1:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=88)** So that anything that happens in the model, can be reflected in the view.
>
> **[1:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=92)** Anything that happens in the view, can change the model.
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=95)** This is a controller at its most basic.
>
> **[1:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=98)** Now that would be an ideal case.
>
> **[1:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=100)** But Xcode changes this around a bit.
>
> **[1:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=103)** There's a class called view controller, which is the controller with a built-in view property.
>
> **[1:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=108)** We change this view controller I have here to look like this.
>
> **[1:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=114)** UI view controller class.
>
> **[1:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=117)** And I don't need the view.
>
> **[1:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=119)** Now, to handle the view and to configure it, use a special method view did load to load the components of the view if you're doing it programmatically.
>
> **[2:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=130)** For the story we will discuss later, the storyboard does much of this work for you.
>
> **[2:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=134)** I'll take much of the code I wrote and paste it directly into view did load to configure the button.
>
> **[2:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=140)** So I can take from view background color, down to add sub-view.
>
> **[2:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=145)** I'm going to hit command X.
>
> **[2:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=149)** Tap it up here.
>
> **[2:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=151)** Command V.
>
> **[2:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=153)** And there it all is.
>
> **[2:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=154)** I'm going to do one more thing here, and move the button declaration out of view did load, so I can use it in the rest of this class.
>
> **[2:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=163)** So I'm going to hit command X here.
>
> **[2:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=166)** And then command V just under colors.
>
> **[2:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=170)** And then down on the bottom here, I'm going to comment out this view and I'm going to make my live view a view controller.
>
> **[3:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=180)** And I'm going to hit run.
>
> **[3:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=183)** You'll see that it runs runs fine here.
>
> **[3:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=186)** And I get my app running over here in the live view.
>
> **[3:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=191)** So everything's the same as before.
>
> **[3:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=194)** Okay, go ahead and stop that.
>
> **[3:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=198)** Close up the live view.
>
> **[3:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=201)** And scroll up to view controller so you can see it well.
>
> **[3:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=205)** Now, the controller can use both the view and the model.
>
> **[3:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=208)** So let's make a color change of the background every time the user presses a button.
>
> **[3:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=213)** First of all, I'll add to this account.
>
> **[3:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=216)** So, above colors I make another variable, and set it to zero.
>
> **[3:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=224)** And then, above view did load here ... I'll make change color, and I'll increment it by one plus equals one.
>
> **[3:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=237)** To count, and then view.
>
> **[4:01](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=241)** Background color ... equals colors ... dot color count.
>
> **[4:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=254)** So here I am using my model.
>
> **[4:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=258)** For actions, I need to fancy this up a little bit.
>
> **[4:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=261)** I'm going to add IB Action up front here, and make this act like a button.
>
> **[4:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=267)** And then in change color, I'm going to change this to sender UI button.
>
> **[4:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=278)** So this is exactly the same thing as we'll see in a little bit when we drag things into the storyboard.
>
> **[4:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=286)** And then I come down here, I'm going to add the target to the button.
>
> **[4:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=290)** So button, add target ... Target is self.
>
> **[4:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=297)** Action is a selector.
>
> **[5:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=302)** And the selector is change color.
>
> **[5:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=307)** 'Kay.
>
> **[5:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=308)** And that'll be for UI control event of touch-up inside.
>
> **[5:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=320)** Now go ahead and run this.
>
> **[5:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=325)** You can click the button.
>
> **[5:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=328)** And the color changes.
>
> **[5:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=330)** Now notice we've got to index out of range.
>
> **[5:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=334)** So, we have a bug in our program.
>
> **[5:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=336)** And I'm going to go close this up.
>
> **[5:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=339)** And my program bug is right here, is that I just used count.
>
> **[5:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=343)** What I'm going to do is one more step.
>
> **[5:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=348)** And I'm going to do a percent, colors, dot color name, dot count.
>
> **[6:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=360)** This way it'll cycle through all the counts, all of the colors here and only do the number of colors we have.
>
> **[6:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=368)** Go ahead and run that.
>
> **[6:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=373)** Hit your button.
>
> **[6:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=377)** And now it'll cycle through colors.
>
> **[6:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=378)** We're doing two things at the same time here.
>
> **[6:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=381)** By pushing this button and changing the background here, that's view stuff.
>
> **[6:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=386)** Where I'm getting the color from is model stuff.
>
> **[6:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=390)** So model view controller or MVC is a modular way of connecting different functions of an application together.
>
> **[6:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/controller?u=76281980&t=398)** And at its center is a view controller.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (4), let (2), this. (2), this, (1), class, (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (4)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **Env Vars:** mvc (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [narrator] (1)


### 3. 2. Delegation

#### Destination view controllers in code
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=0)** - [Instructor] You've been looking at a single controller, but no app is a single controller, but a large number of them, and they need to talk to each other.
>
> **[0:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=8)** How does the MVC clusters communicate between each other?
>
> **[0:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=12)** That's what we'll answer next.
>
> **[0:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=14)** In the exercise file for this video, you'll find a code snippet for color chooser.
>
> **[0:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=19)** Select and copy the class, then close it back up, and above view controller, paste it.
>
> **[0:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=29)** This is another view controller using the same model colors.
>
> **[0:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=33)** For the view, instead of a button, it is a segmented control, with the color choices from the color model we made earlier.
>
> **[0:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=42)** Right now, all it does is change its own background color.
>
> **[0:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=46)** I want my view controller to open the color chooser when I press the button.
>
> **[0:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=50)** In that situation, we'll call color chooser a destination controller.
>
> **[0:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=56)** There are several ways to navigate from one controller to another.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=59)** I'll start with the simplest in code, a modal presentation.
>
> **[1:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=63)** Go to the view controller class.
>
> **[1:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=66)** Comment out what we had in the color chooser action.
>
> **[1:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=69)** So, comment out the count, and view dot background color.
>
> **[1:15](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=75)** Notice we are getting rid of the protection we have for the overflow situation.
>
> **[1:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=80)** Really, this overflow is a model, not a controller thing to do.
>
> **[1:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=85)** So go up to the model, and we'll fix it.
>
> **[1:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=89)** This should be index, percent.
>
> **[1:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=92)** For color name, it should be color name dot count.
>
> **[1:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=98)** And for the color, it should be index, mod, color dot count.
>
> **[1:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=109)** Pop down to the action.
>
> **[1:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=113)** Now to put a few more extra lines in here.
>
> **[1:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=116)** We're going to start by getting the color chooser.
>
> **[2:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=120)** I'll say let vc equals color chooser vc, like that.
>
> **[2:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=128)** You now have the object, which is this other controller.
>
> **[2:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=131)** You can present this other controller with the present method.
>
> **[2:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=136)** Present vc, animated true, completion nil.
>
> **[2:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=145)** Run this.
>
> **[2:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=150)** You can get to the color chooser by pressing the button, and you can see the red, green, blue, and purple buttons on top.
>
> **[2:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=157)** If I press blue, I get blue.
>
> **[2:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=159)** If I press green, press red, press purple.
>
> **[2:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=162)** I get my same color, but I can't get back to my view controller.
>
> **[2:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=168)** For that, I need something else.
>
> **[2:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=170)** So close that up.
>
> **[2:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=172)** Shut it down.
>
> **[2:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=174)** And go back to chooser in color chooser.
>
> **[2:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=179)** And then, after we put the background color in, we're going to dismiss this view.
>
> **[3:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=184)** So I'm going to do dismiss, true, completion nil, like so.
>
> **[3:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=193)** Now if you run that, push the button, click red, and we get back here.
>
> **[3:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=205)** Click blue, we get back here.
>
> **[3:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=209)** It working okay.
>
> **[3:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=211)** Now, I have an instance of color chooser in my view controller.
>
> **[3:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=215)** It points to the destination.
>
> **[3:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=217)** I can also change values here.
>
> **[3:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=220)** So before I present it, I can also do vc.
>
> **[3:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=226)** And so, I have the whole view controller.
>
> **[3:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=228)** I can actually get to some of the other things in the view controller, like current color, which sets the current color, and I can change that to count, since this is an integer.
>
> **[4:01](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=241)** So that all works right.
>
> **[4:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=243)** Now I can go ahead and run this, and whatever my current color is, is the color that's there.
>
> **[4:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=254)** Right now, the only color I can get is red.
>
> **[4:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=259)** So the background changes, and the selected color on top changes with it.
>
> **[4:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=263)** So we've moved data from one view controller, the source, to the destination.
>
> **[4:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-code?u=76281980&t=269)** That looks like another way of doing the same thing with storyboards.

> [!info]- Semantic Content
>
> **Code Keywords:** class, (1), class. (1), let (1), this. (1), else. (1)
> **Definitions:** is a  (3), is an  (1)
> **UI Navigation:** open the (1), go to (1)
> **CLI Commands:** find (1)
> **Env Vars:** mvc (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Destination view controllers in storyboards
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=0)** - [Narrator] Other than code, you may be using storyboards.
>
> **[0:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=3)** Instead of writing your code in viewDidLoad, you make scenes on the storyboard dragging and dropping other views into the superview of your controller.
>
> **[0:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=12)** You can find an example project in the exercise files.
>
> **[0:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=16)** On this storyboard there are plenty of scenes.
>
> **[0:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=20)** Each of the scenes is a different view controller.
>
> **[0:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=23)** Notice the lines between the scenes.
>
> **[0:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=26)** In Xcode, we have what are known are segues.
>
> **[0:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=29)** Segues point from one view controller to another.
>
> **[0:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=32)** When we move from one controller to the next, the segue tells the system to open up this particular view controller, which then opens up its view model.
>
> **[0:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=43)** To get a segue on the storyboard, you usually control drag from a button to another scene.
>
> **[0:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=48)** If I zoom down here a little there's no segue between the desserts button and the desserts view controller.
>
> **[0:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=57)** Control drag from desserts to the controller.
>
> **[1:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=64)** The segue highlights, and I release the mouse button.
>
> **[1:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=66)** I get a menu of the type of segue.
>
> **[1:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=69)** If you're using a navigation controller for navigation, as we are here, use a show segue.
>
> **[1:15](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=75)** Open the attributes and click on the segue, and in its attributes set the identifier to desserts.
>
> **[1:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=89)** The identifier is a string that makes it easy to identify this segue in the next step.
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=95)** Close up the attributes, open the navigator, and go to the main view controller.
>
> **[1:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=105)** Go to the bottom of this code.
>
> **[1:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=108)** Up to now, a segue has said nothing about the view controller class for the desserts controller.
>
> **[1:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=115)** Apple includes a method, prepare for segue, in the view controller class, which you use to access the destination controller.
>
> **[2:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=127)** You can have then many segues from one view controller.
>
> **[2:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=131)** Take look at main view controllers prepare for segue method.
>
> **[2:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=134)** You'll see we have one for beverage, one for order table, and one for pizza.
>
> **[2:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=139)** You have to identify the correct one with the identifier you typed in the attributes.
>
> **[2:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=144)** The segue parameter is a UI storyboard segue object with a property identifier.
>
> **[2:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=151)** The if clause identifies this segue.
>
> **[2:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=155)** Let's add an entry here for desserts like these others.
>
> **[2:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=159)** So above the beverage one, I'm going to add if segue.identifier == "desserts"{
>
> **[2:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=176)** Another property of UI storyboard segue is destination which gives a pointer to the destination controller which returns a UI view controller.
>
> **[3:05](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=185)** So I can start this by saying let vc =segue.destination
>
> **[3:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=196)** Now this is giving a generic UI view controller.
>
> **[3:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=199)** We want the dessert view controller, so I'm going to add as to downcast, and then put DessertViewController VC is now a link to my destination view controller of dessert view controller.
>
> **[3:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=215)** I can set properties, such as my last selection, since this is a dessert view controller.
>
> **[3:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=220)** So I'm going to do VC, and one of those is last selection.
>
> **[3:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=227)** And I'm going to put the ordered items, last selection.
>
> **[3:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=232)** So this is a way of taking my last selection of our menu on this menu ordering app and putting it on the dessert controller so you know what you last ordered before you ordered your dessert.
>
> **[4:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=248)** Now over in the destination view controller, which is dessert, you can format the last selection you got from the main view controller and set it on the dessert selections labeled text property.
>
> **[4:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=261)** So I can go over here to dessert view controller.
>
> **[4:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=265)** Here's last selection which is empty right now, but if I go down to viewDidLoad because I just changed it, I can now do this, and say that dessert selection, at the top of my UI, I can change
>
> **[4:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=285)** that text to be what I last selected.
>
> **[4:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=289)** Okay, go ahead and run this code.
>
> **[4:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=293)** You'll see on the front of this app that the Huli Pizza Company gives away free Huli Chips with any order, so we have the Huli Chips here, so that'll be our last order.
>
> **[5:05](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=305)** I can hit the desserts button, and it does send the segue over, and you can see on the top here it says Small Huli Chips.
>
> **[5:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=314)** So it's working this way.
>
> **[5:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=316)** When we press the Duke Pie, it shows up Duke Pie here.
>
> **[5:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=321)** But when I press done, it's not yet showing up in our label here of list of things that we've currently ordered.
>
> **[5:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=331)** The question for both the color chooser and the menu ordering is now the same.
>
> **[5:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/destination-view-controllers-in-storyboards?u=76281980&t=336)** How do you get something back from the destination?

> [!info]- Semantic Content
>
> **UI Navigation:** open the (2), go to (2), click on (1)
> **Definitions:** is a  (5)
> **Code Keywords:** let (2), class, (1), this, (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** viewdidload (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** such as (1)

#### Delegates in theory
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=0)** - [Instructor] You moved objects to the destination controller.
>
> **[0:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=3)** How do you move it from the destination to the source?
>
> **[0:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=7)** That's what delegates are for.
>
> **[0:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=10)** When we press duke pi in the app, we need a method to return a value.
>
> **[0:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=16)** With an encapsulated class you can't do that.
>
> **[0:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=20)** There's no way to send that revised model back to the original controller without breaking encapsulation or NVC.
>
> **[0:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=28)** The new view controller does not know anything about the class that called it.
>
> **[0:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=33)** We can't send objects backwards the same way we sent them forwards.
>
> **[0:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=38)** This is the problem that delegates and protocols solve by being sneaky.
>
> **[0:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=42)** Imagine a special class, one that is a skeleton of a class.
>
> **[0:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=47)** It declares methods in this class, but never implements them.
>
> **[0:51](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=51)** These are protocols.
>
> **[0:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=54)** We make a protocol class as a method we'll call when we finish the controller.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=59)** That method will have parameters you pass back to the original view controller.
>
> **[1:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=64)** In the destination view controller, make an instance of this protocol as a property of the destination class.
>
> **[1:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=71)** With the property of our protocol type, use its methods in the destination controller.
>
> **[1:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=76)** Nothing is defined yet.
>
> **[1:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=78)** We've just called the skeleton.
>
> **[1:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=80)** Since protocols are skeletons, any other class can make them part of their own class with a requirement.
>
> **[1:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=87)** We adopt a protocol in the original calling class.
>
> **[1:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=91)** As soon as a protocol gets adopted you flesh out the skeleton and write code for that protocol function.
>
> **[1:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=99)** You code the required methods in the adopted class's code.
>
> **[1:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=103)** If the source controller adopts the destination controller's protocol, it then implements the method used inside the source controller, which has parameters that come from the destination.
>
> **[1:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=114)** In this sneaky way we get the data back, placing it where it belongs.
>
> **[1:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=119)** This is a delegate, a function called in one class but running in another, which allows legal sharing of data.
>
> **[2:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=127)** I stated the delegate was an instance of the protocol in the destination controller.
>
> **[2:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=132)** I didn't state where the delegate was.
>
> **[2:15](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=135)** Your last and important step is doing that.
>
> **[2:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=138)** Make sure you tell the adopting class where you fleshed out the delegate function.
>
> **[2:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=144)** That's the theory.
>
> **[2:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-theory?u=76281980&t=145)** Let's see what it looks like in the two examples.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (3), function (3), class, (2), implements (2), for. (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Env Vars:** nvc (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Delegates in iOS code
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=0)** - [Lecturer] Now that you have some theory about delegates, let's get practical.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=4)** Making a delegate to change the background color of this source ViewController.
>
> **[0:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=8)** The first step is to define a protocol.
>
> **[0:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=11)** I'll do that at the top of my code.
>
> **[0:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=14)** You define a protocol the same as a class.
>
> **[0:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=17)** Just use protocol instead of a class.
>
> **[0:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=19)** So I'll type protocol, and I'll call it ColorChooser and traditionally we put delegate on the end so we know it's a delegate.
>
> **[0:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=31)** Then you put your braces.
>
> **[0:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=33)** Inside the protocol, will be the skeleton of the function.
>
> **[0:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=37)** No code, just the name of the function and any parameters.
>
> **[0:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=41)** I'll make one called selected color, that has an integer to represent the color.
>
> **[0:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=47)** So going to do func selectedColor, color, and that'll be an Int.
>
> **[0:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=54)** Head down to the ColorChooser.
>
> **[0:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=56)** In my properties, I'll declare a property delegate and I'll make it the type of my protocol.
>
> **[1:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=66)** I'll make it optional so it can be nil when not used.
>
> **[1:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=71)** In the chooser, before I dismiss the ViewController, I'll call the selected color method of the delegate, setting the current color as the color of the function.
>
> **[1:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=84)** So I'll use delegate and I can call its method selectedColor, and that will be the current color.
>
> **[1:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=94)** I've sent the color to the protocol.
>
> **[1:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=96)** Next I'll receive it in the source controller.
>
> **[1:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=100)** In ViewController, I adopt the delegate by placing the class after ViewController.
>
> **[1:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=106)** So go down to ViewController and where it says UIViewController here, you put ColorChooserDelegate, like that.
>
> **[1:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=116)** Now Xcode will give me an error.
>
> **[1:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=119)** Click on that error to look at it.
>
> **[2:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=122)** It says type ViewController does not conform to protocol ColorChooserDelegate.
>
> **[2:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=126)** Which is a long way of saying you need to implement that method that we had in ColorChooserDelegate.
>
> **[2:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=134)** Now you can have a fix here that says do you want to add the protocol stubs?
>
> **[2:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=137)** And I'll go ahead and do that, and there's SelectedColor all ready for some code.
>
> **[2:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=143)** Usually I stick this at the bottom, but for this one example I'll stick it at the top 'cause I like my delegates on the bottom of my Viewcontrollers.
>
> **[2:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=152)** Inside the function I'll change the count and update the background.
>
> **[2:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=158)** Count equals color, and view.backgroundColor equals colors.color, and for the index I'll put color.
>
> **[2:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=176)** Now the last step is an important one.
>
> **[2:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=179)** When you start with delegates you will forget it.
>
> **[3:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=182)** Delegate is currently set to nil.
>
> **[3:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=186)** When you try to call a delegate like this you will get an unwrapping nil value error.
>
> **[3:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=191)** You must assign a class where the fleshed-out delegate method resides.
>
> **[3:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=196)** That class is ViewController.
>
> **[3:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=200)** Before I present the chooser I assign delegate to this ViewController, otherwise known as self.
>
> **[3:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=207)** So down here, when I present it, I'm going to go here, I'm going to put vc 'cause that's color chooser, and I'm going to pick the delegate and assign it to self.
>
> **[3:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=222)** With all that in place, you can run this code.
>
> **[3:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=229)** Head over to the live view, click the button, we get our red screen.
>
> **[3:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=235)** I'll pick blue, and blue comes back as my background.
>
> **[3:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=239)** Same thing with green.
>
> **[4:01](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=241)** You've gone through the steps in code for delegate.
>
> **[4:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-code?u=76281980&t=244)** Since we've done it once, let's do it one more time for the storyboards, and see the variations.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (2), class. (2), self (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** selectedcolor (2), backgroundcolor (1)
> **Definitions:** is a  (1), is an  (1), known as (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [lecturer] (1)

#### Delegates in iOS storyboards
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=0)** - [Narrator] Delegates in storyboards are not that much different than in code.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=4)** I'll finish getting the desserts controller working to show you the few differences for a storyboard.
>
> **[0:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=9)** Go to dessert view controller and at the very top of the code, above the class add the protocol for dessert view controller delegate.
>
> **[0:22](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=22)** Here I'll add one method: did choose dessert.
>
> **[0:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=25)** That has one parameter, dessert of type, order item.
>
> **[0:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=32)** In the properties for the dessert view controller I'll declare a property delegate.
>
> **[0:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=41)** That will be the type of my protocol.
>
> **[0:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=46)** Dessert view controller delegate.
>
> **[0:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=48)** Again I'll make it optional, and I'll set it's value to null.
>
> **[0:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=53)** Head down to the done button code.
>
> **[0:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=55)** We'll get rid of this console so we can see more.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=59)** And in here, above the pop view controller, add delegate, did choose dessert, and our order item will be dessert.
>
> **[1:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=71)** This code will run a function, which I don't know what it does yet, but will have a dessert value when I'm trying to communicate outside the controller.
>
> **[1:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=79)** All right, now we'll go to the receiver here, at main view controller.
>
> **[1:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=84)** Towards the top, you'll see I adopted several delegates replacing the delegate name after the sub-class declaration.
>
> **[1:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=92)** At the end of the list, place dessert view controller delegate.
>
> **[1:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=96)** And I'll get that error message again.
>
> **[1:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=99)** This time, I'll drop down to the bottom of my code where my delegates are.
>
> **[1:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=104)** And you'll see I already have two for choose beverage and select pizza.
>
> **[1:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=109)** And I'll go ahead and I'll put did choose dessert here.
>
> **[1:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=113)** You can see in this beverage delegate, I did two things.
>
> **[1:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=117)** First of all, I added the beverage to my order items and then I updated my table of ordered items.
>
> **[2:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=124)** I'm going to do the same thing with the dessert, but only with desserts.
>
> **[2:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=128)** So I'm going to do orderedItems.add and I want to make sure I've got the right add because there are two of those, add, order item, and then it'll be dessert, and then order table VC, update table, and we just did those, order items, and update it with that new set of items.
>
> **[2:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=155)** So I've moved a value from desserts to main, almost.
>
> **[2:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=159)** Again, don't forget that last step.
>
> **[2:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=162)** I need to tell the dessert controller where this fleshed out function is.
>
> **[2:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=167)** I have accessed the destination controller in prepare.
>
> **[2:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=170)** Go there, tell the dessert controller that the function it's looking for is right here by using self.
>
> **[2:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=177)** So, in here after I've defined VC, I'm going to do VC, and delegate is now one of my options here, equals, self.
>
> **[3:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=192)** This is one of the most common errors, forgetting to set the delegate.
>
> **[3:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=196)** Try running the app now.
>
> **[3:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=201)** Tap desserts, I'm going to pick up that Duke Pie, there.
>
> **[3:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=206)** And I'll hit done, and now the Duke Pie is there.
>
> **[3:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=210)** I'm hungry for dessert, so I'm going to go for a hot fudge sundae, too, and there's all my calories listed on my order sheet.
>
> **[3:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=218)** Delegates are sneaky ways of moving data between controllers that shouldn't share data.
>
> **[3:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=224)** I call them sneaky, but they're the most used and the best way to move data between view controllers.
>
> **[3:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-ios-storyboards?u=76281980&t=230)** When you need to move data, the first thought you should have is for setting up a delegate.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), self (2), type, (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (2)
> **Code Identifiers:** ordereditems (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)

#### Contexts in watchOS
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=0)** - [Narrator] You've seen delegates at work in iOS for a phone.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=4)** The pattern remains relatively the same for a watch, however, watchOS has a difference that I'd like to show you.
>
> **[0:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=11)** You'll find the app we've been working with is a watchOS app as well.
>
> **[0:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=16)** In Xcode, towards the bottom of the navigator, you'll see a few folders we haven't opened yet.
>
> **[0:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=21)** Opening them, you'll find the WatchKit app and the WatchKit extension.
>
> **[0:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=26)** For our purposes, the WatchKit app contains the views, and the WatchKit extension contains the model and controllers.
>
> **[0:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=34)** For more about watchOS, take a look at the course Learning Apple watchOS four App Development.
>
> **[0:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=40)** There's a small change in language here.
>
> **[0:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=42)** In watchOS, controllers are known as interface controllers.
>
> **[0:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=47)** The watch storyboard shows the same dessert order application.
>
> **[0:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=53)** I've yet to connect the segue.
>
> **[0:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=55)** Control drag from the dessert button to the selection list interface.
>
> **[1:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=62)** Select a push segue.
>
> **[1:05](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=65)** Select the segue.
>
> **[1:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=68)** Open the attributes, and change the identifier to dessert.
>
> **[1:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=73)** That segue, however, doesn't work like segues in iOS.
>
> **[1:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=78)** Select the main interface controller.
>
> **[1:22](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=82)** Look at awake with context.
>
> **[1:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=84)** It receives a context of optional type any, that this controller uses to configure itself.
>
> **[1:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=90)** Here's the big difference between iOS and watchOS.
>
> **[1:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=94)** There is no assigning values to destination controllers.
>
> **[1:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=97)** You don't get the destination controller in watchOS that assign values like iOS.
>
> **[1:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=103)** You send it in a context.
>
> **[1:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=105)** Context can be anything, but most often, there are dictionaries so you can send multiple values to the destination.
>
> **[1:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=112)** To send by a context for a segue, use the context for segue method, which I'm going to add right above awake.
>
> **[2:01](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=121)** Inside the context for segue, I usually declare the context first using a dictionary of string for the key, and any for the value.
>
> **[2:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=131)** So I'm going to do var context.
>
> **[2:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=136)** It returns an any, so my dictionary will actually be an optional, and inside it I'm going to have a string for a key, and any for a value.
>
> **[2:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=151)** And I'm going to set that to nil.
>
> **[2:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=154)** Like it's cousin prepare for segue, you check the identifier for the segue.
>
> **[2:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=160)** If segueIdentifier equals dessert,
>
> **[2:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=170)** if this is the correct identifier, I'll assign the dictionary payload to the context.
>
> **[2:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=176)** Context equals in this case, my payload is selection.
>
> **[3:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=184)** And the value will be the string dessert.
>
> **[3:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=188)** Then after the if, I'll return the context.
>
> **[3:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=194)** In the destination, I'll take that dictionary in the awake method, and get back my values.
>
> **[3:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=201)** Since it's a dictionary, I have a bit of work to do.
>
> **[3:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=204)** So head over to dessert interface controller, and you'll find the awake with context on the bottom here, so the first thing I'm going to do is unwrap my dictionary, since it's an optional.
>
> **[3:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=217)** If let contextDictionary equals context,
>
> **[3:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=226)** and I'm going to cast it here too, and if it's the wrong cast, this will fail.
>
> **[3:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=233)** And I won't go into the if statement.
>
> **[3:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=237)** So I can check my type and check if I actually have a dictionary.
>
> **[4:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=242)** Then I'll check if I have the entries I'm looking for in the right type.
>
> **[4:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=246)** If let selection equals context dictionary selection,
>
> **[4:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=263)** again I'll optionally cast this, so I can see if I'm actually in the right type, as string.
>
> **[4:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=272)** And do what I have to with that value, which in this case, I'm just going to set a text value.
>
> **[4:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=276)** So I'm going to do this, take my label, my selected label that I have, And I'm going to just set the text on it.
>
> **[4:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=285)** And I've set up my context.
>
> **[4:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=288)** watchOS is a bit more difficult to send values than iOS.
>
> **[4:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=292)** Which makes sending delegates a little more interesting too.
>
> **[4:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/contexts-in-watchos?u=76281980&t=296)** Now let's look at using a delegate in watchOS.

> [!info]- Semantic Content
>
> **Code Identifiers:** watchos (9), ios (5), segueidentifier (1), contextdictionary (1)
> **Code Keywords:** interface (4), let (3), case, (2), this, (2), var (1)
> **CLI Commands:** find (3)
> **UI Navigation:** select the (2), open the (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** configure (1), set up (1)
> **Speakers:** - [narrator] (1)

#### Delegates in watchOS
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=0)** - Instead of getting a class and sending properties like we do in iOS, watchOS requires sending values through Context.
>
> **[0:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=8)** This is the big change.
>
> **[0:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=10)** To send the delegate, you need to send it with a context.
>
> **[0:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=14)** Let's see this in action by finishing the delegate for the watch project.
>
> **[0:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=18)** Hop over to the Desserts Interface Controller and once there we'll make a protocol.
>
> **[0:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=23)** So slide up to the top, and above the class we'll start a protocol.
>
> **[0:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=29)** And I'm going to call it Desserts Interface Controller Delegate and it'll have one required function and that is did Finish Selecting Dessert.
>
> **[0:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=52)** And that'll be an item of type OrderItem.
>
> **[0:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=57)** So we have a protocol.
>
> **[1:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=60)** Now we'll go into the interface controller to our properties, and I'm going to add the delegate declaration.
>
> **[1:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=69)** So it'll be var delegate Desserts Interface Controller Delegate.
>
> **[1:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=79)** That's going to be optional, and it'll have a value of nil.
>
> **[1:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=85)** Now I can use this and so find the button pressed method, right here, and above the pop, which is a watch version of dismiss, add the delegate method call.
>
> **[1:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=97)** So we'll do delegate, didFinishSelectingDessert item.
>
> **[1:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=103)** And the order item is going to be orderItem, which we configured above it.
>
> **[1:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=110)** Now go to the main interface controller, and again we're going to adopt the delegate, like we have in the past.
>
> **[1:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=119)** And so this is DessertsInterfaceControllerDelegate, right here, click that, should give us our error.
>
> **[2:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=129)** Open the error and save ourselves some time to and use fix to get what we need.
>
> **[2:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=138)** I'm going to do a command x here and I want to move it down to the bottom of my class.
>
> **[2:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=146)** I like to keep my delegates on the bottom.
>
> **[2:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=150)** Okay, now in the delegate itself, orderItem equals item.
>
> **[2:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=156)** And there's my transfer.
>
> **[2:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=158)** So I've taken what's in the destination and brought it over to the source.
>
> **[2:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=165)** And along with that I'm going to go ahead and reflect that change.
>
> **[2:51](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=171)** Dessert Selection Label dot setText, and that'll be orderItem dot itemString.
>
> **[3:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=184)** Okay, by now most of that should be familiar, even if you know nothing about watchOS.
>
> **[3:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=190)** What's different is a sign of the delegate.
>
> **[3:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=193)** The easy part is up here in context for segue.
>
> **[3:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=197)** To assign the delegate, I just add another dictionary entry.
>
> **[3:22](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=202)** I put delegate and self.
>
> **[3:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=207)** That's not too hard.
>
> **[3:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=208)** But now we're going to have to go back to the DessertsInterfaceController and do one more step.
>
> **[3:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=216)** So in awake with Context I'm now going to unwrap that and get that entry from the dictionary.
>
> **[3:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=223)** So underneath the if let selection, I'm going to put if let delegate equals contextDictionary and then I'm going to look for the delegate entry by putting the key delegate, and that is a DessertsInterfaceController delegate.
>
> **[4:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=251)** If that exists then self.delegate equals a local delegate.
>
> **[4:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=259)** Okay.
>
> **[4:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=261)** So now we have everything set up properly for this.
>
> **[4:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=266)** Change over to the WatchKit app, delegate and data sources, and set it to iPhone 8 Plus Apple Watch Series 3.
>
> **[4:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=276)** Go ahead and run, and everything should load.
>
> **[4:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=282)** It says your selection.
>
> **[4:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=284)** I can hit dessert, pick a Duke Pie, and I get Duke Pie.
>
> **[4:50](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=290)** I can do it again.
>
> **[4:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=292)** Hula Hot Fudge sounds good too, and there comes Hula Hot Fudge.
>
> **[4:56](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=296)** And it has read that delegate.
>
> **[4:58](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=298)** The key change for watchOS is using a Context instead of a destination view controller to tell the app where the delegate's method implementation is.
>
> **[5:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=309)** To do so, you make a dictionary of String:Any and have as one of your entries, the delegate.
>
> **[5:15](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=315)** Unwrap that context in awake with Context.
>
> **[5:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=318)** By casting Context as the dictionary then extracting the delegate location from the dictionary you set the delegate.
>
> **[5:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-in-watchos?u=76281980&t=325)** As far as using delegates, everything else is the same as iOS.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (5), let (3), self (2), function (1), var (1)
> **Code Identifiers:** watchos (3), orderitem (3), ios (2), didfinishselectingdessert (1), settext (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), open the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - instead (1)


### 4. 3. Data Sources

#### Data sources
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=0)** - [Instructor] So far, we've used protocols for delegates.
>
> **[0:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=3)** There's one other common use for protocols that's related to delegates called data sources.
>
> **[0:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=8)** Even if you never implement a data source, you will be using them all the time, so it's important to understand them.
>
> **[0:15](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=15)** Data sources solve another problem with encapsulation and inaccessible properties.
>
> **[0:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=20)** Go to my playground and the color chooser.
>
> **[0:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=25)** And let's go up to our model here of colors, and I want to talk about a few things here.
>
> **[0:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=31)** Let's take a look again.
>
> **[0:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=32)** Let's suppose that instead of a let we have a var here for the color names.
>
> **[0:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=39)** And instead of private we have var here.
>
> **[0:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=44)** So these are two perfectly big and normal properties.
>
> **[0:51](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=51)** There's dozens of ways, given the code we've got, that anyone setting these methods could crash this class.
>
> **[0:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=59)** Now, another developer could change the data tapes on you, such as turn a UI color into a string, or have a mismatch in the sizes of the arrays.
>
> **[1:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=67)** So how do I hold on to the data integrity?
>
> **[1:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=70)** Now, for some customization situations, the best way to do this is to use a data source, which is another type of protocol.
>
> **[1:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=79)** A data source is a function that defines the data in a class.
>
> **[1:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=84)** You write the function to return the data you want to use.
>
> **[1:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=88)** So we can make another protocol here, and I'm going to put it right next to my color chooser delegate, make some space.
>
> **[1:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=95)** Protocol.
>
> **[1:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=99)** Color.
>
> **[1:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=101)** Chooser.
>
> **[1:43](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=103)** Data source.
>
> **[1:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=106)** And this time I'll actually put three in here.
>
> **[1:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=109)** Func, number of colors, and that's going to return an integer.
>
> **[2:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=120)** Func, name of color for index,
>
> **[2:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=131)** and I'm going to put an integer in here too.
>
> **[2:14](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=134)** And this will return a string.
>
> **[2:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=139)** Func, color of color for index.
>
> **[2:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=147)** Again, we'll make it an integer, the parameter.
>
> **[2:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=151)** And that will return our UI color.
>
> **[2:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=154)** Now notice something interesting here.
>
> **[2:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=157)** I'm not returning an array, I'm returning an individual value.
>
> **[2:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=162)** This way all of the responsibility of making the arrays work right will not fall to the class colors, it'll fall to the class that's calling colors and used in adopting the data source.
>
> **[2:55](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=175)** So all of the errors are no longer color's responsibility, which is the whole point of a data source.
>
> **[3:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=183)** Now, as I also said here, we're returning a value, and my general rule for what's the difference between a data source and a delegate is delegates don't return values, they only take values in a parameter.
>
> **[3:15](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=195)** And data sources return values.
>
> **[3:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=198)** That's a general rule, it doesn't always work and I'll give you an exception a little later.
>
> **[3:24](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=204)** Now that I have this protocol, just like a delegate, I can declare it.
>
> **[3:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=213)** And I'll declare it a data source and use color chooser data source, make that optional, make it nil.
>
> **[3:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=225)** And now I can use it in my code.
>
> **[3:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=228)** Now if you go down to our functions for here, we had two methods.
>
> **[3:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=232)** I'm going to change those.
>
> **[3:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=234)** I'm going to comment them out.
>
> **[3:58](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=238)** 'Cause they were using internal things.
>
> **[4:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=240)** And now I can use these two external things.
>
> **[4:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=243)** So what I'm going to do here is I'm going to start with making a color index, and that's going to be equal to the index from this function, mod my data source dot number of colors.
>
> **[4:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=259)** Instead of using color count, I'm using number of colors.
>
> **[4:22](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=262)** So the user, or the person who's calling this, the class that's calling this, gets to pick how many colors are going to be in here.
>
> **[4:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=269)** And then once you do that, you're going to do the return.
>
> **[4:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=272)** And we'll do data source dot name of color for that color index.
>
> **[4:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=286)** And then once I'm done with that, I can do the same thing down here for color.
>
> **[4:51](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=291)** And that'll be again, color index equals index, data source dot number of colors.
>
> **[5:06](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=306)** So we got color index, index, mod data source, number of colors, just like before, and then we can just return the data source version of color of color.
>
> **[5:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=320)** And again that's going to be the color index.
>
> **[5:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=323)** So colors are now no longer taking responsibility for the data.
>
> **[5:28](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=328)** It's just reading them and processing them.
>
> **[5:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=331)** Now, since they're doing that, these two things are redundant, and they also need to be somewhere completely different.
>
> **[5:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=339)** So copy them, and they're now part of the color chooser view controller and the view controller.
>
> **[5:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=349)** So paste them into both.
>
> **[5:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=353)** Now it's time to adopt the protocol, and I'm going to start in the view controller.
>
> **[5:59](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=359)** And you adopt it the same way you adopted the delegate.
>
> **[6:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=364)** Color chooser data source is adopted in the class declaration.
>
> **[6:09](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=369)** We get an error message.
>
> **[6:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=372)** You can hit fix to get those.
>
> **[6:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=373)** Again, I don't like these up here, so I'm going to copy all these.
>
> **[6:18](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=378)** I'm going to slide down to the bottom of my code here.
>
> **[6:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=387)** I'm going to paste them here.
>
> **[6:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=389)** And I got that, and that's all good.
>
> **[6:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=393)** Now I can get rid of this.
>
> **[6:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=396)** They're not redundant.
>
> **[6:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=398)** And now I can fill out these.
>
> **[6:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=400)** So number of colors, I'm just going to return that array color names count.
>
> **[6:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=407)** The name of the color, I'm going to return.
>
> **[6:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=412)** Color name, index.
>
> **[6:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=417)** And the color of color, I'm going to return color index.
>
> **[7:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=427)** So there's our three data source methods that we would need here.
>
> **[7:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=432)** And you'll notice again, I'm only returning a single value in here, which is a common thing you'll see in delegates.
>
> **[7:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=437)** This way whatever else is going on, it's not the fault of the protocol.
>
> **[7:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=443)** So you have to take care of it here, you'll get your errors here, you won't get them further down the code where you don't want people playing.
>
> **[7:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=451)** And of course, go back to view did load.
>
> **[7:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=454)** And you need to set the data source.
>
> **[7:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=459)** So colors dot data source equals self.
>
> **[7:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=465)** So that's one.
>
> **[7:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=467)** I got to do the same thing over here in color chooser.
>
> **[7:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=472)** So in color chooser I'm going to put, again, color chooser data source.
>
> **[7:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=477)** And it again gives me that error message, but it's going to be the exact same data sources, so I'm going to just copy these and pop them to the end of my code.
>
> **[8:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=493)** Now all I have to do is go to view did load, colors dot data source equals self.
>
> **[8:21](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=501)** So I make sure I tell it where it is.
>
> **[8:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=503)** So that's all the code that you're going to write.
>
> **[8:25](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=505)** And now you've got it all set up.
>
> **[8:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=507)** You can go ahead and run this, and you will get a fatal error.
>
> **[8:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=512)** And here's an example of those fatal errors that you'll get if you forget to put the data source equals self in here.
>
> **[8:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=519)** And we do have one.
>
> **[8:40](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=520)** It's all the way down here, I intentionally did this.
>
> **[8:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=524)** We have colors, color one.
>
> **[8:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=528)** This was assuming, before we had a data source, that we could put a direct value in here.
>
> **[8:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=533)** And we need to get rid of this, so I'm just going to comment out both of these lines.
>
> **[9:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=540)** Outside of a class, it's very very hard to adopt a delegate or a data source.
>
> **[9:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=547)** And with that done, I'll close up the console again, run this, the error disappears.
>
> **[9:17](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=557)** Looks like we've got code running.
>
> **[9:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=559)** I'll pop this up.
>
> **[9:22](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=562)** We got a button.
>
> **[9:23](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=563)** We push the button, we get colors.
>
> **[9:27](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=567)** I push one of my buttons and the color shows up.
>
> **[9:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=570)** Working exactly the same way as we did before.
>
> **[9:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=573)** Generally, you won't pass an object with data sources or do what we did here with a model.
>
> **[9:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=579)** Generally you'll be using that on UI.
>
> **[9:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=582)** And doing it to different kinds of user interface elements.
>
> **[9:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=587)** And the reason for that, as you can see here, is that it might not be the same everywhere with what your data source will look like.
>
> **[9:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=594)** I just copied and pasted, so it worked fine.
>
> **[9:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=597)** So that's not the best place to use this.
>
> **[10:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=600)** However, it is used very often in user interfaces.
>
> **[10:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/data-sources?u=76281980&t=603)** And let's go take a look now at that use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (5), function (3), this. (3), self (3)
> **CLI Commands:** make (6)
> **Analogies:** just like (2), such as (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Best Practices:** general rule (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### Delegates and data sources in Apple methods
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=0)** - I've shown you the workings of a data source.
>
> **[0:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=2)** The prime place you'll see data sources is for user interface controls, many already in the APIs.
>
> **[0:10](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=10)** Knowing how they work will give you insight into using them.
>
> **[0:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=13)** Let's look at an example of this in the Huli Pizza order app.
>
> **[0:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=16)** Head over to the app, and go to the storyboard.
>
> **[0:19](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=19)** If you zoom out the storyboard a little bit, you'll see towards the bottom, there's one that's for beverages, and I'll zoom in on that.
>
> **[0:29](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=29)** You'll see this beverage scene uses a picker.
>
> **[0:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=31)** Pickers are one of many controls that use data sources as delegates.
>
> **[0:36](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=36)** This picker is not yet implemented.
>
> **[0:37](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=37)** So we'll add data sources to implement it.
>
> **[0:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=41)** So go to the BeverageViewController.
>
> **[0:44](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=44)** I've already implemented the delegate for you.
>
> **[0:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=46)** But go ahead and implement the data source.
>
> **[0:49](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=49)** So at the end of UIPickerViewDelegate, you'll put UI... PickerViewDataSource.
>
> **[0:58](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=58)** Once again, we get that little error, that says we do not conform to protocol.
>
> **[1:03](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=63)** I'm going to go ahead and create the stubs.
>
> **[1:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=67)** I'm again going to cut them out, with the Command + X.
>
> **[1:12](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=72)** And you'll see further down the code, I've already made a mark for where to put them.
>
> **[1:16](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=76)** And I'll put a Command + V here, so I put them in the right place.
>
> **[1:20](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=80)** Now, a picker uses an array of arrays to work, which I called pickerComponents, if you look at the top here.
>
> **[1:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=90)** Each of the spinning wheels on the picker is a separate component.
>
> **[1:33](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=93)** That component is an array, usually strings, that make up the selections on that picker wheel.
>
> **[1:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=99)** Like the color chooser, the data source wants to know how many components and how many rows in each component.
>
> **[1:46](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=106)** For the number of components, I return a count of picker components.
>
> **[1:51](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=111)** So I'm just going to return pickerComponents.count.
>
> **[1:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=117)** For the number of rows in component, I have the component number as a parameter.
>
> **[2:02](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=122)** So I return the count of the component, return pickComponents[component].count.
>
> **[2:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=133)** While I consider a data source, and the equivalent in table views is a data source, there's one more method to implement, which is grouped with the delegates, but really should be a data source.
>
> **[2:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=146)** Underneath the data sources we've got so far, add one more.
>
> **[2:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=152)** pickerView, title for row.
>
> **[2:34](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=154)** This one takes the picker component and returns it.
>
> **[2:39](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=159)** So what we're going to do is just do, return pickerComponents, and I have the component, and the row, like so.
>
> **[2:54](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=174)** Now head to viewDidLoad.
>
> **[2:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=177)** Make sure you set the data source to self.
>
> **[3:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=180)** beveragePicker.dataSource equals self.
>
> **[3:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=187)** Okay, build and run.
>
> **[3:11](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=191)** And if you forgot to turn back to the watch, you can slide over on the phone, click the icon, click on beverages, and you'll see we have a nice picker that has small, regular, large, and different drinks.
>
> **[3:26](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=206)** I am going to to go for a root beer.
>
> **[3:30](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=210)** Press done.
>
> **[3:32](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=212)** And there's my root beer, appearing on my menu.
>
> **[3:35](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=215)** There's a lot more delegate and data source-based classes in both watchOS and iOS.
>
> **[3:41](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=221)** The most common you're looking at right now, a table view.
>
> **[3:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=225)** I just wanted to give you a sample of one of them.
>
> **[3:47](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=227)** You can find out about these and more in some of the other courses available in the library.
>
> **[3:52](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=232)** What I want to emphasize is the three things you want to do when you use most of these.
>
> **[3:57](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/delegates-and-data-sources-in-apple-methods?u=76281980&t=237)** Whenever a delegate or data source is involved in an API, do three things: adopt the protocol in the class definition, set the delegate or data source to the object involved to self, and then write the required methods.

> [!info]- Semantic Content
>
> **Code Identifiers:** pickercomponents (3), pickcomponents (1), pickerview (1), viewdidload (1), beveragepicker (1)
> **Code Keywords:** self (3), interface (1), let (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** api (1)
> **Speakers:** - i (1)


### 5. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=0)** - [Instructor] I hope I cleared up some of the confusion about delegates and data sources.
>
> **[0:04](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=4)** For some, this is one of the hardest concepts to understand.
>
> **[0:07](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=7)** Once you do, you open up a lot of powers and opportunities with iOS and watchOS.
>
> **[0:13](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=13)** Here's a few places I'd suggest exploring next: Apple's documentation for some of the classes that use delegates and data sources, such as UITableViewController, UIPickerView, that we've already discussed, and the documentation for UIImagePickerView for the basic camera and photo library functions.
>
> **[0:31](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=31)** The more you read some of your favorite UI kit documentation, you may find there's extra power coming from a delegate.
>
> **[0:38](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=38)** I encourage you to play with the sample demo.
>
> **[0:42](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=42)** Take it apart, change parts of it, and see what happens.
>
> **[0:45](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=45)** I put a lot of cool delegates and techniques in them.
>
> **[0:48](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=48)** The best way to learn about delegates and data sources is to use them, and this is a great training ground.
>
> **[0:53](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=53)** Take a look at the watchOS and other courses I mention throughout the course.
>
> **[0:58](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=58)** You'll find in my Learning Apple watchOS 4 App Development course, several other examples of delegates for the Apple Watch, including how to use a delegate to read the digital crown.
>
> **[1:08](https://www.linkedin.com/learning/swift-delegations-and-data-sources-2018/next-steps?u=76281980&t=68)** For many iOS topics you can follow me on LinkedIn at Steven Lipton, or on Twitter @Steve Lipton.

> [!info]- Semantic Content
>
> **Code Identifiers:** watchos (3), ios (2)
> **CLI Commands:** find (2)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Steven Lipton]]

## Resources

- Exercise files available

## Skills Covered

- Swift (Programming Language)

## Path Context

### In [[Master Swift]]
← [[Swift 5 Essential Training]] | **3 of 4** | [[Swift 5- Protocol-Oriented Programming]] →

## Appears In

- [[Master Swift]]

## Related Courses

_Courses sharing skills:_

- [[Swift 5- Protocol-Oriented Programming]] — Swift (Programming Language)
- [[Programming For Non Programmers Ios 17 And Swift 5]] — Swift (Programming Language)
- [[Swift 5 Essential Training]] — Swift (Programming Language)

---

[↑ Back to top](#)