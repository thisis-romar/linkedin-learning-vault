---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: kotlin-essential-training-object-oriented-and-async-code
url: "https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code"
duration_minutes: 171
duration: 2h 51m
level: Beginner
updated: 6/16/2022
learners: 3069
skills:
  - Kotlin
exercise_files: true
github: "https://github.com/LinkedInLearning/kotlin-essential-training-object-oriented-and-async-code-2497307"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGxZp_l7DwwKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655231468711?e=2147483647&amp;v=beta&amp;t=ISf0hBB9rBPf-mAubgtt0tB5KxNqeMowKUlL7dCu9zU"
linkedin_topic: Mobile Development
learning_paths:
  - '[[Kotlin Professional Certificate by JetBrains]]'
prev_courses:
  - '[[Kotlin Essential Training Functions Collections And I O]]'
next_courses:
  - '[[Kotlin Multiplatform Development]]'
path_nav: '[{"path":"Kotlin Professional Certificate by JetBrains","position":2,"total":4,"prev":"Kotlin Essential Training Functions Collections And I O","next":"Kotlin Multiplatform Development"}]'
path_count: 1
tags:
  - course
  - topic/mobile-development
  - topic/software-development
  - skill/kotlin
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Mobile%20Development/Kotlin%20Essential%20Training-%20Object-Oriented%20and%20Async%20Code.md)

![Kotlin Essential Training: Object-Oriented and Async Code](https://media.licdn.com/dms/image/v2/C560DAQGxZp_l7DwwKQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1655231468711?e=2147483647&amp;v=beta&amp;t=ISf0hBB9rBPf-mAubgtt0tB5KxNqeMowKUlL7dCu9zU)

# Kotlin Essential Training: Object-Oriented and Async Code

> If you’re looking to get up and running with Kotlin, the powerful programming language from JetBrains, join instructor Nate Ebel, the author of Mastering Kotlin, as he shows you the ins and out of Kotlin and walks you through its unique selling points for developers—from null safety and concise syntax to Java compatibility, to full support by Google for Android development. In this second installm

> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code) | 2h 51m | Beginner | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Building more with Kotlin
  - What you should know
  - Using GitHub
- [**1. Object-Oriented Programming with Kotlin**](#1-object-oriented-programming-with-kotlin) (9 videos)
  - Classes
  - Interfaces
  - Enum classes
  - Data classes
  - Object classes
  - Sealed classes
  - Companion objects
  - Challenge: Create a Result type using a sealed class
  - Solution: Create a Result type using a sealed class
- [**2. Writing Idiomatic Kotlin**](#2-writing-idiomatic-kotlin) (5 videos)
  - Top-level properties and functions
  - Extension properties and functions
  - Delegates
  - Challenge: Refactor a helper class to use top-level functions
  - Solution: Refactor a helper class to use top-level functions
- [**3. Writing Asynchronous Code with Kotlin Coroutines**](#3-writing-asynchronous-code-with-kotlin-coroutines) (5 videos)
  - Threads, thread pools, and executors
  - Understanding coroutines
  - Working with coroutines
  - Challenge: Manage multiple async requests
  - Solution: Manage multiple async requests
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Building more with Kotlin
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=1)** - [Nate] Kotlin is one of the most popular programming languages for building mobile applications being the default choice for Android development.
>
> **[0:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=8)** It's no surprise why developers are turning to Kotlin.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=11)** It's concise, flexible, and includes a powerful set of modern language features.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=16)** With Kotlin, developers can efficiently build robust, scalable applications that run on mobile devices, in the browser, and a variety of other targets.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=27)** I'm going to show you how to start writing idiomatic, object-oriented code with Kotlin.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=32)** We'll start by exploring object-oriented language constructs like classes and interfaces, discuss idiomatic Kotlin patterns, and finish by introducing the basics of writing asynchronous code with Kotlin.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=45)** My name is Nate Ebel.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=46)** I've been building mobile applications for over 10 years and have been working with Kotlin since before its 1.0 release.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/building-more-with-kotlin?u=76281980&t=53)** If you're excited to start learning Kotlin then join me in my LinkedIn Learning course on Kotlin essentials.

> [!info]- Semantic Content
>
> **Versions:** 1.0 (1)
> **Speakers:** - [nate] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/what-you-should-know?u=76281980&t=1)** - [Instructor] This course is designed to help you to continue learning the essentials of the Kotlin programming language.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/what-you-should-know?u=76281980&t=6)** To get the most out of it you should already be familiar with foundational Kotlin syntax, such as variables and functions.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/what-you-should-know?u=76281980&t=14)** You'll want to be comfortable with object oriented programming concepts and you should know your way around GitHub.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/what-you-should-know?u=76281980&t=21)** If you feel you should brush up on any of these concepts check out the course library for more resources and come back to this course when you're ready.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=0)** - [Instructor] The exercise files for this course are stored on GitHub.
>
> **[0:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=4)** There are branches for both the start and end states of each video where we work on code.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=10)** You can view a list of all the branches here in GitHub from the branch dropdown menu.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=16)** For example, if you wanted to find the start state for video 02_01, top level properties and functions, you could look through this dropdown menu and find the branch labeled 02_01b.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=30)** And the ending state would be in the 02_01e branch.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=36)** There are multiple ways to work with this project from within IntelliJ.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=41)** One simple way is to copy the URL from the Code button, and then open up into IntelliJ to check out the code.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=51)** Once in IntelliJ, you'll want to select Get from VCS.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=58)** You want to make sure Git is selected for the version control system.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=62)** And then you'll paste in that copied URL into the URL field.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=67)** Select whichever directory you'd like the code to be checked out into.
>
> **[1:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=71)** And then click Clone to clone that repo on your local development machine.
>
> **[1:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=81)** You may receive a few dialogs asking if you want to add the files to Git.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=85)** Go ahead and ignore those.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=87)** But chances are by the time you download the files, there will be updates to IntelliJ and the associated plugins.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=94)** If you receive a dialog asking you to upgrade your dependencies, please do so.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=99)** Then wait for the project to sync.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=101)** It typically takes longer when the project loads for the first time.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=105)** Once sync is complete, however, you're ready to work with this version of the code.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=112)** By default, we're running the code from the main branch.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=115)** As I mentioned earlier, I've created branches for each video in the course where we modified code.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=121)** If you'd like to follow long, use the branches popup menu in the lower right corner of IntelliJ to change your desired branch.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=132)** As an example, let's check out the code for the start of the 03_01 video.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=140)** So I can search 03_01 and I will select the b branch to check out the code for the beginning of that video.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=148)** Once I click the branch name, I'll be prompted to check out the code.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=152)** And now once that's complete, we're ready to work with this version of our project and follow along with 03_01.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/using-github?u=76281980&t=160)** If you run into any trouble checking out the different branches, or with using Git in general, I recommend searching the course library for the [[Git Essential Training]] videos.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), find (2), make (1)
> **Tools:** intellij (5), github (2)
> **Env Vars:** url (3), vcs (1)
> **UI Navigation:** dropdown (2), select the (1)
> **Code Keywords:** default, (1), let (1)
> **Exercise Files:** exercise files (1), download the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 1. Object-Oriented Programming with Kotlin

> [↑ Back to Table of Contents](#table-of-contents)

#### Classes
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=0)** - Classes are the cornerstone of object oriented programming, helping us model data types behavior and real world objects.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=9)** Let's dive right in and learn to define and extend classes in Kotlin.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=15)** To create a class, the first thing that we're going to do is come in to our source main Kotlin directory, right click, go to New, Kotlin class/file.
>
> **[0:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=28)** We're going to select class here.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=31)** And then we are going to type person, and hit Enter.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=39)** Notice what's created here.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=41)** We have this class keyword, and then the name of the class person followed by these empty curly braces.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=49)** And in fact, since there's nothing inside of those curly braces, we can actually remove them altogether.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=55)** And this will provide the basic definition of our person class.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=62)** Now we'll create a main.kt file and we will add a main function for us where we can then use this person class.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=75)** To instantiate a new instance of the person class, we'll create a variable called "Person."
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=82)** And then we use the name of the class that we want to create, followed by the open and close parentheses for the constructor.
>
> **[1:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=92)** So here we have a new instance of the person class that we created in our file person.kt.
>
> **[1:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=101)** Now classes may include variables that are scoped to a specific instance of that class.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=107)** This type of variable is also known as a class property.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=112)** Let's define a property named "Age" for our person class.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=117)** So we're going to add back those curly braces to define our class body.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=124)** And now within this class body, we define a variable like we would in let's say our main function.
>
> **[2:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=132)** So I'm going to make this a read only variable.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=135)** So I will use val.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=136)** I will name it Age, and I want it to be of type Int.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=142)** Now, as soon as we're done typing that we'll notice that the IDE warns us, that we must initialize the value or make our class abstract.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=153)** Abstract classes are like class templates.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=156)** They define state and behavior that may be reused by classes that are going to extend the base abstract class.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=166)** To mark a class abstract, we come to the beginning of the class declaration before the class keyword, and we add the abstract modifier to it.
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=178)** And if we wanted to leave our property uninitialized as well we could mark the property abstract as well.
>
> **[3:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=187)** So abstract can apply at both the class level and the property level.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=192)** By marking the property abstract in this case, we would leave the initialization to whatever class later extended the person class.
>
> **[3:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=201)** Now let's go ahead and remove those abstract modifiers for now.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=205)** And instead we're going to provide an initial value for our age property.
>
> **[3:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=211)** And we're going to do this by providing a constructor parameter to our class where we can pass in the age for that instance of the person class.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=221)** So to add a constructor parameter, we need to come after the class name and add parenthesis like we would if we were defining the parameters for a function.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=234)** And now within this, we can define parameters following the same pattern as we would with function parameters.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=240)** So in this case, we will have a parameter called Age of type Int.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=246)** Once we have our age constructor parameter, we can use that as the value for our age property.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=252)** So we could say val age equals age.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=257)** A property may have its value initialized by constructor properties, or we could have hard coded an age, say, of five here.
>
> **[4:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=271)** Now, what if we wanted to validate the state of the parameters passed into our constructor?
>
> **[4:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=277)** How could we check that our age parameter is a valid value before assigning it to our property?
>
> **[4:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=284)** For example, passing a negative age to our person constructor wouldn't make sense.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=291)** So we might want to check that it is not a negative value, for example.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=295)** So for this type of parameter validation, we could leverage an init block.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=303)** Init blocks are sections of code that run when an instance of a class is created.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=308)** To create init block, we simply type init followed by curly braces.
>
> **[5:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=315)** Init blocks and properties are processed in the order in which they're defined within a class body.
>
> **[5:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=320)** So if we want to check the value of age before it's used, we can add an init block before the declaration of our age property.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=329)** So in this case, I'm just going to move that property declaration before the init block.
>
> **[5:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=337)** And now within the init, we can use the check function to ensure that the age parameter is greater than zero.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=353)** What the check function will do here is throw in exception and print out the message defined by this lambda if the condition is not met.
>
> **[6:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=365)** So within the lambda passed to check here, we'll provide a message that says, "A person's age cannot be negative."
>
> **[6:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=380)** So just to test this out then, if we come back to our main function here, if we passed in an age of zero and we ran this code, actually in this case, when we ran our code, we see an error here by the IDE mentioning something about a duplicate JVM class name.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=402)** This is likely due to us incorrectly naming our Main kt file.
>
> **[6:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=407)** So in this case, we can rename this file, and we will use a M here.
>
> **[6:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=414)** So it's M .kt.
>
> **[6:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=419)** Now, if we run this again, this time we see an illegal state exception, and it says, "A person's age cannot be negative."
>
> **[7:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=431)** This makes sense here, as we used the check function to verify the age is greater than zero.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=441)** If we wanted to, we could probably make this greater than or equal to zero to make it just a little bit more what we would expect.
>
> **[7:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=450)** Technically, a person could maybe have an age of zero.
>
> **[7:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=454)** So if we run this one more time now with zero, we see no error.
>
> **[7:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=459)** And if we pass in negative one and rerun, this time we see the error that we expect.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=467)** So that's just one example of how we could use an init block to help validate the state of our class when it is being instantiated.
>
> **[7:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=476)** Now, in cases where we don't need to validate a parameter before assigning it to a property, we can use a simplified syntax for defining class properties right in the constructor itself.
>
> **[8:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=491)** We're going to add properties for storing the first name and last name in our person class.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=498)** To do so, we're going to come back up to the constructor after the age property, and we're going to define the first name and last name properties just like with the parameter.
>
> **[8:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=510)** The only difference is that now we will add Val before the name of the parameter.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=516)** So I'll say, val, first name of type string.
>
> **[8:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=521)** Val, last name of type string.
>
> **[8:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=526)** And just to help fit this all in the editor window, we'll break these all out onto their own lines, just to make it a little easier to see.
>
> **[8:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=536)** So now we have a parameter called Age and we actually have two class properties, first name and last name.
>
> **[9:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=547)** So now if we come back to our Main kt, we now need to add first name and last name like we did with the age perimeter.
>
> **[9:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=560)** So I could add my first name "Nate" and my last name of "Ebel" here.
>
> **[9:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=565)** And now I can access all of these values by using property access syntax.
>
> **[9:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=571)** So I could write a dot and then access the age property by its name directly.
>
> **[9:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=578)** Or person.firstname or person.lastname.
>
> **[9:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=586)** By default, these properties have all been public.
>
> **[9:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=591)** If we wanted to limit their scope, we could add the private visibility modifier to any of the properties.
>
> **[9:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=599)** So for example, if we wanted to make first name and last name private so that was only accessible within this class itself, we can add the private modifiers to them.
>
> **[10:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=611)** And now if we come back to our main function we'll get compiler errors telling us that first name and last name are private within the scope of the person class.
>
> **[10:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=620)** Meaning we can't access them.
>
> **[10:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=624)** So we'll just go ahead and clean those up for now, since they are now private to our person class.
>
> **[10:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=633)** Now, in addition to properties classes may have methods associated with them as well.
>
> **[10:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=639)** A method is just a function scoped to a particular class or interface.
>
> **[10:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=645)** Methods help us encapsulate class specific behavior in a reusable manner.
>
> **[10:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=651)** Let's write a method to print the full name of a person.
>
> **[10:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=656)** So I'll come down here within our person class body after the last property and I'm going to start writing a new function.
>
> **[11:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=664)** So I'll use the fun keyword and I want to call this function print name.
>
> **[11:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=670)** And I'll define this as a single expression function.
>
> **[11:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=672)** And the right side of that expression is going to use println, and we will use a string template here to print out first name and last name.
>
> **[11:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=688)** So now once this method is defined on our class if we come back over here to Main kt, we could access person.printName to invoke that function.
>
> **[11:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=703)** So now just before we run this code, let's change the age from a invalid negative age to a valid age here.
>
> **[11:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=713)** And if we run this, we'll see my name printed out to the console when that print name function is invoked.
>
> **[12:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=725)** One of the really powerful things about classes is that they can be extended and modified to reuse and change behavior.
>
> **[12:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=734)** Let's create a student class that extends person.
>
> **[12:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=740)** So the first thing that we're going to want to do here is modify our person class to make it open for extension.
>
> **[12:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=748)** We need to do this because classes in Kotlin are closed for extension by default.
>
> **[12:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=754)** This is to help enforce the concept of imutability.
>
> **[12:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=757)** So to open up the person class for extension we add the open keyword to it before the class declaration.
>
> **[12:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=768)** Once the person class has been marked as open, now we're ready to create a student class, which extends it.
>
> **[12:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=775)** So again, we'll come back over to our project window.
>
> **[12:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=778)** We'll go to source main Kotlin.
>
> **[13:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=781)** Right click, go to New, Kotlin file/class, and I'll create a new class called Student.
>
> **[13:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=792)** Now, the student class to start is going to take no parameters.
>
> **[13:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=797)** So we'll just add empty parentheses after the class name.
>
> **[13:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=801)** And now to make it extend the person class, we will add a colon.
>
> **[13:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=809)** The name of the person class, followed by parentheses representing the constructor of that person class.
>
> **[13:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=817)** Now person requires constructor parameters.
>
> **[13:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=820)** So we must pass those to the constructor.
>
> **[13:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=824)** So in some way, we have to be able to get those values into the person class.
>
> **[13:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=829)** And so we could pass those directly here within the class declaration or we could add constructive parameters to the student classes constructor.
>
> **[14:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=840)** So that's what we're going to do.
>
> **[14:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=842)** I'm going to just hit enter within the student constructor.
>
> **[14:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=846)** And then I'm going to add an age parameter.
>
> **[14:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=851)** A first name parameter, and a last name parameter.
>
> **[14:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=859)** Now notice that none of these are defined as properties.
>
> **[14:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=862)** We haven't added a val or var in front of any of these.
>
> **[14:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=866)** The idea is to simply pass them to the constructor and forward them onto the person constructor.
>
> **[14:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=873)** So once we have defined those parameters within the student constructor, we can go ahead and pass them to the person constructor here.
>
> **[14:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=884)** Now, if we come back over to our Main, we can demonstrate how we might use this.
>
> **[14:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=890)** So, anywhere that we need an instance of person we could provide an instant of student.
>
> **[14:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=899)** So let's come back up here where we've defined our person variable.
>
> **[15:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=906)** And we're going to be explicit with this.
>
> **[15:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=907)** And so we're going to explicitly define the person type on our person variable.
>
> **[15:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=914)** And now, rather than creating an instance of the person class, we will create an instance of the student class.
>
> **[15:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=923)** And because student is a subtype of person, this will compile just fine.
>
> **[15:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=930)** And in fact, if we run this code, we will still see that our print name method works as expected because it is public and present in that base class, so it's accessible from the child class student.
>
> **[15:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=947)** Now, what if we wanted to override the behavior of that print name method in the student class?
>
> **[15:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=956)** Well, the first thing we would need to do is go back to person and we would mark the print name method as open.
>
> **[16:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=965)** This is very much the same way that we marked the person class as open.
>
> **[16:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=972)** So if we want to override the behavior of a method, we mark it as open, and then we can come back to our student class now, and we will add a class body.
>
> **[16:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=983)** And now we can override the behavior of the print name method for an instance of student.
>
> **[16:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=992)** So to do this, we can start typing override and the compiler should suggest methods that are available to us to override.
>
> **[16:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1001)** So in this case, it suggests print name.
>
> **[16:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1004)** And I can hit Enter here, and it will generate the method signature here for us.
>
> **[16:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1011)** So notice that this signature looks very much the same as it did in person.
>
> **[16:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1016)** However, it has added the override modifier to it.
>
> **[17:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1021)** So that signifies that we are about to override the default behavior with our own custom behavior.
>
> **[17:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1028)** So, if we want to override that behavior, we could again use println.
>
> **[17:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1035)** And this time we will start off by typing student with maybe a colon here, just as a separator.
>
> **[17:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1045)** And then we will go ahead and print out first name and last name.
>
> **[17:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1054)** Now, notice that the compiler is telling us here that we cannot access last name or first name.
>
> **[17:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1066)** Now, why is that?
>
> **[17:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1069)** Hope you remember, we made first name and last name private in our person class here.
>
> **[17:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1078)** To expose a property or a method to just classes overriding it, we could use the protected modifier rather than private.
>
> **[18:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1093)** So with protected, our student class can now access those properties.
>
> **[18:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1099)** However, from our main function here, we still cannot access first name or last name.
>
> **[18:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1111)** So back here in student, we've now finished overriding the behavior of print name.
>
> **[18:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1118)** So now, if we were to run our main function here, when print name is called for our instance of student we see the updated behavior.
>
> **[18:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1128)** We see student prefix printout followed by the first and last name.
>
> **[18:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1133)** So this demonstrates the idea of polymorphic behavior where we have created custom behavior for the same method name.
>
> **[19:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1143)** And so if we had a student subtype, we could have one set of behavior.
>
> **[19:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1147)** We might have an instructor type that extends person.
>
> **[19:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1150)** It could have another behavior for a print name.
>
> **[19:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1153)** It's a very powerful concept for us.
>
> **[19:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1157)** This is just the beginning for classes in Kotlin.
>
> **[19:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/classes?u=76281980&t=1161)** Later, we'll see how Kotlin allows us to define multiple special types of classes that helps solve very specific object oriented programming challenges.

> [!info]- Semantic Content
>
> **Code Keywords:** function (17), class. (13), abstract (9), let (8), class, (8)
> **CLI Commands:** make (9)
> **Definitions:** is a  (2), known as (1), defined as (1), is called (1)
> **Analogies:** for example (3), just like (1)
> **Env Vars:** ide (2), jvm (1)
> **UI Navigation:** go to (3)
> **File Paths:** main.kt (1), person.kt (1)
> **Code Identifiers:** printname (1)

#### Interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=0)** - [Instructor] Interfaces allow us to define reusable type contracts to be implemented by other classes, objects, and even interfaces.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=9)** We're going to explore how to define an interface, how to define methods and properties on that interface, and finally, we'll see how to provide default implementations for interface methods.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=22)** Now let's define our first interface in Kotlin.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=25)** We're going to do this within our main.KT file here.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=31)** We could also do this in another file but for now we'll keep it all in one file just to keep it simple.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=37)** So to define a basic interface, we start by typing the interface keyword and then the name of the interface.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=47)** So in this case, we're going to call our interface string provider.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=53)** At the moment, This interface has no methods or properties but it could still be implemented by other types and we could check if a variable is an instance of strength provider by using the is keyword.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=67)** So for example, if we come down into our main function here, we'll create a variable called some variable and it will be of type knowable any and we'll just initialize it to a null value to start.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=84)** Now we could check if some variable is an instance of string provider, and if it is, we could do something like print an error message saying the variable was a string provider.
>
> **[1:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=105)** Now if we were to run this code, of course we would not see this message because we know some variable is assigned to null right now.
>
> **[1:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=114)** Now to extend the utility of our interfaces, we typically want to add methods to our interface which must then be implemented by any class implementing the interface.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=126)** We may add a method to an interface by defining a function signature within our interface body.
>
> **[2:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=134)** So we'll start by adding open and closed curly braces to define an interface body here.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=140)** And then we'll define a method named get string and it will take in an ID parameter of type int and it will return an int.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=153)** So the idea here is that a string provider will allow us to give it some resource identifier and hand us back a string.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=162)** So now any type that extends this string provider interface must either be marked abstract or implement this get string method signature.
>
> **[2:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=174)** Once we've defined an interface, we can define other types that then implement that interface.
>
> **[3:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=180)** So let's define a class called default resource provider.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=190)** To make default resource provider implement string provider, we add a colon after the class name and then we add the name of the interface.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=204)** As soon as we do that, the IDE is going to warn us that we need to implement the get string method.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=212)** Otherwise, default string provider must be made abstract.
>
> **[3:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=217)** So let's implement get string for default resource provider.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=225)** We'll start by adding open and close curly braces for our class body.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=229)** And then I'll hit enter a couple times just to give us some space and then we're going to start typing override.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=236)** Now notice here that my IDE is suggesting an override option of get string.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=244)** If I hit enter on that, it is going to generate a default implementation of this get string method needed for the string provider interface.
>
> **[4:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=255)** Now it defaults to this todo function here, which will actually throw an exception if this line of code is executed during runtime.
>
> **[4:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=266)** So for now, we're going to replace this todo with a string that indicates whatever ID was passed to us.
>
> **[4:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=276)** So we'll say ID: and then we will substitute in that ID.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=281)** So this will just give us some indication of what was actually passed into this method.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=288)** Now that our default resource provider is fully implemented, we can create an instance of it, and because it implements string provider, we can use it both as default resource provider or as the less specific type, string provider.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=303)** So let's come back down into our main function and create a variable here called string provider of type string provider.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=314)** And we will assign it an instance of default resource provider.
>
> **[5:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=322)** And if we wanted to, we could type print L in here and print out the result of calling string provider.get string and we'll pass in some int ID, in this case five.
>
> **[5:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=337)** So if we run this, we will see that we have the ID five printed out which is exactly what our implementation of get string is designed to do.
>
> **[5:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=349)** And now notice here, remember our string provider variable is defined using the less specific type of the interface.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=355)** If we wanted to, we could change this to default resource provider.
>
> **[6:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=363)** And if we run the code again, we would see the same output.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=369)** I'm going to go ahead and change it back to the more generic type, as that is usually a helpful coding practice.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=381)** Now classes aren't the only thing that may extend an interface.
>
> **[6:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=386)** Interfaces may actually extend other interfaces as well.
>
> **[6:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=391)** So let's create a new interface and this interface will be called resource provider
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=403)** and it will have a single method in it called get dimension.
>
> **[6:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=409)** And again, it will take an integer ID parameter.
>
> **[6:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=412)** And this time it will return along.
>
> **[6:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=416)** We're going to make this resource provider interface extend string provider in the same way that we would for class.
>
> **[7:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=429)** So now, if we come down here to our default resource provider class, if we change it from implementing string provider to implementing resource provider, the IDE will let us know that we need to add an implementation of get dimension.
>
> **[7:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=451)** So to complete the implementation here, we'll start typing override, we'll hit enter for get dimension.
>
> **[7:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=459)** And in this case, we will return id.toLong.
>
> **[7:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=465)** So again, just kind of a placeholder output here but notice the interesting thing here, we've overridden both get string and get dimension.
>
> **[7:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=475)** Now resource provider itself doesn't have a get string method on it but because it extends the string provider type, default resource provider must implement both.
>
> **[8:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=491)** This ability to have interfaces which themselves implement other interfaces can be really helpful when modeling data via composition.
>
> **[8:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=500)** In addition to methods, interfaces may also define properties.
>
> **[8:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=506)** Let's define a property named placeholder on our string provider interface.
>
> **[8:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=512)** To define a property, we do it much the same we would on a class.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=516)** So we would type val placeholder of type string.
>
> **[8:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=522)** Once we have done so, we must now update any classes that are implementing string provider.
>
> **[8:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=530)** So in this case here, that is really just our default resource provider class.
>
> **[8:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=538)** So to override a resource, we can start much the same way we would with a method.
>
> **[9:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=542)** We can start typing override and then we finish the implementation of the placeholder property.
>
> **[9:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=552)** Now by default here, the IDE starts by providing this getter and we could provide some default string value here using this syntax.
>
> **[9:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=563)** We could also assign a value directly, and in this case, that's what we'll go with.
>
> **[9:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=569)** So in this case, we'll define a placeholder using some special syntax here.
>
> **[9:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=575)** So we'll use angle brackets and the placeholder text here, just so that it's very clear that this is going to be a placeholder string.
>
> **[9:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=583)** Now, any place where we are working with default resource provider, we should have access to this placeholder value.
>
> **[9:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=592)** So if we come down to our main function, we could print this out by saying string provider.placeholder.
>
> **[10:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=603)** And if we run our code, we'll see that placeholder printed out as we would expect.
>
> **[10:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=612)** Now let's say we define an interface method that has a well-defined default behavior.
>
> **[10:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=620)** Rather than having to reimplement that default behavior in every implementing class.
>
> **[10:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=625)** Kotlin allows us to define a default implementation for an interface method.
>
> **[10:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=630)** To provide the default implementation, all we need to do is finish implementing the method in our interface.
>
> **[10:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=637)** To demonstrate this, let's update both string provider and default resource provider to provide default method implementations.
>
> **[10:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=647)** So first we'll provide the default implementation for get string by having it convert the past ID to a string and returning it.
>
> **[10:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=657)** So we can do that pretty simply here by turning this into a single expression function and returning id.tostring.
>
> **[11:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=668)** And next, we'll repeat this process for the get dimension method on resource provider.
>
> **[11:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=678)** And now, because both interfaces have default implementations for their methods, default resource provider now no longer needs to override those methods.
>
> **[11:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=692)** It could if we wanted to, but it doesn't need to.
>
> **[11:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=698)** And now let's come back to string provider and just take a look at our placeholder.
>
> **[11:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=703)** Could we provide a default value for a placeholder here?
>
> **[11:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=707)** Well, if we try to, we'll actually see that we have an error here as soon as we try and assign a string value.
>
> **[11:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=715)** And if we hover over this, we'll see this message saying property initializers are not allowed for interfaces.
>
> **[12:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=722)** So while we can provide default implementations for an interface, we cannot provide a default value for an interface property.
>
> **[12:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/interfaces?u=76281980&t=734)** Interfaces are an essential component to writing object-oriented code with Kotlin, and the ability to divine interface properties and default method implementations makes Kotlin's interfaces even more useful to developers.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (31), let (10), function (6), override (6), case, (4)
> **Env Vars:** ide (4)
> **CLI Commands:** make (2)
> **Definitions:** is an  (2)
> **File Paths:** main.kt (1)
> **Code Identifiers:** tolong (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Enum classes
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=0)** - [Instructor] Sometimes we want to define a new type that only has a limited set of values.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=7)** Enum classes are a special class type that help us do just that.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=12)** Let's look at how we can use enum classes or just enums to define some closed set of values.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=19)** When working with enums, we typically want to start by thinking about the values we need to model.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=26)** So for example, let's imagine we want to model the four cardinal directions.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=33)** So those would be north, east, south, and west.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=42)** These are the only four directions possible.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=45)** Because we know these are the only values we ever want to work with, an enum class is a natural fit.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=51)** We can define each possible value and prevent the addition of any other value.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=58)** To define the enum class, we're first going to create a new file by opening up our project pane here and within src, main, kotlin, we will right click, go to New, Kotlin Class or File.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=75)** And we'll scroll down this list and we will select enum class.
>
> **[1:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=79)** And for the name, we will use Direction.
>
> **[1:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=87)** And then I'm just going to remove the curly braces to make it a little bit easier to read here.
>
> **[1:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=94)** So what we have here is a class called Direction with the enum modifier added to it.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=103)** So in this case, Direction will be the type, and now we need to define the possible values of that Direction type.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=113)** To define the set of values for an enum class, we may add a class body and then write out comma-separated value names.
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=124)** These enum value names are typically written in all caps.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=128)** So we want to represent the directions, we would then have a value of NORTH, EAST, SOUTH, and finally, WEST.
>
> **[2:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=141)** Now we can define variables using the Direction type and we will only have these four possible values that can be assigned to that type.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=151)** So I'll return back to Main.kt here.
>
> **[2:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=155)** I will go ahead and just remove my notes there and within the main function, I'll create a variable called direction of type Direction and I can assign it a value by referencing the Direction type name and then one of the values.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=175)** So in this case, I've assigned it to Direction.EAST.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=179)** I could change it to NORTH if I wanted or any of the other two values.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=186)** Any enum value has a couple of common properties.
>
> **[3:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=191)** We may access the name of the enum value.
>
> **[3:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=195)** So in this case, I could reference my enum variable and then access the name property by writing .name.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=204)** The name will be a string representation of the actual type name defined in the enum class body.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=212)** So if we just print out this direction.name call here and we run our code, we will see NORTH printed out to the console just the same way that it was defined in the enum type declaration.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=230)** If I were to change this from NORTH to say WEST, and run this again, we'll see WEST printed out.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=240)** So there's a pretty direct mapping between the way the name is defined in the enum class, and how it is represented when accessing the name property.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=252)** We can also determine the index of the value within the type by using the ordinal property.
>
> **[4:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=260)** So let's again, we'll do a println here and this time we'll say direction.ordinal.
>
> **[4:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=268)** So again, the ordinal is representing the index into that type.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=273)** So in this case, for the value of WEST, its ordinal should be three because it is the fourth item we declared and because we're zero based, that means the indices would be zero, one, two, and finally, WEST would be three.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=291)** So if we return to Main.kt and we go ahead and print this out.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=297)** Sure enough we see the name WEST printed out and we see three printed out for the ordinal.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=304)** Now, we can use these concepts in the other direction as well.
>
> **[5:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=309)** We can convert a string into an enum value by using valueOf.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=314)** So we could do something like Direction.valueOf and pass in WEST here.
>
> **[5:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=324)** And if I created a new variable called parsedDirection, I could assign it the result of this value of call.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=335)** And if we then call println direction.name, if we run this, we will see WEST printed out a second time.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=348)** So we were able to correctly parse this string value, turn it into a valid Direction type and then print that out.
>
> **[5:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=358)** If we were to pass something else in here, like the word kotlin, and we try to run this code, we would get an exception.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=369)** We see an IllegalArgumentException here saying no enum constant Direction.kotlin.
>
> **[6:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=376)** So effectively, this is saying there is no value that matches this name.
>
> **[6:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=383)** If we wanted to understand all of the values that were available, we could do that as well by calling the values method.
>
> **[6:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=394)** So I'm going to create a new variable called apiValue here and I will assign it the result of saying Direction.values.
>
> **[6:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=405)** And this is going to give us back an array of the available values for this enum.
>
> **[6:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=411)** So if I wanted to get say the third item, I could pass in an index of two.
>
> **[6:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=419)** So again, let's go ahead and print out the name of this, so we could say apiValue.name.
>
> **[7:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=426)** And just to help us verify our output, I'm going to comment out the other print calls here.
>
> **[7:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=434)** So now if we run our code, oops, we need to make sure we comment out this parsing of the incorrect Kotlin value.
>
> **[7:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=449)** Now if we go ahead and run our code, we see SOUTH.
>
> **[7:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=453)** And if we check our direction type, sure enough, SOUTH is the third item corresponding to index two.
>
> **[7:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=462)** But again here, we need to be careful that we don't try to access an element that doesn't exist.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=467)** If we were to pass in an index of say six right here, and run our code, we would again get an exception.
>
> **[7:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=479)** This time an ArrayIndexOutOfBoundsException because there are not that many values in this Direction.values array.
>
> **[8:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=489)** So we must be careful when trying to access elements this way but when used safely, these approaches can help us when mapping non-type safe responses into our concrete enum values.
>
> **[8:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=504)** Now, let's create another enum class here.
>
> **[8:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=509)** And I'm going to open up the project directory again.
>
> **[8:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=512)** Again, navigate to src, main, kotlin.
>
> **[8:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=515)** Click New, Kotlin File or Class.
>
> **[8:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=519)** Again, I will select enum class and this time, we're going to name this HighlightColor.
>
> **[8:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=529)** So now we have again a very basic HighlightColor type with no values.
>
> **[8:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=535)** So now let's imagine that each value we define here should represent some hex color.
>
> **[9:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=542)** So we might want each value to provide its own hex color value that we could use to render to the screen.
>
> **[9:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=549)** Well, enum types can provide properties that every value type must then implement.
>
> **[9:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=559)** So within our enum class HighlightColor, we can add a constructor here, and we can define a property that will then be present on any value type of this enum.
>
> **[9:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=575)** So I'll type val value of type Int here.
>
> **[9:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=581)** So this will represent the hex value for any of the specific value types within HighlightColor.
>
> **[9:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=588)** Now we will go ahead and create a class body and we're ready to start defining some value types here.
>
> **[9:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=596)** So we could start off by writing the name of YELLOW, let's say, and now we see that we have an error here.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=604)** If we hover over that, we'll see that enum has no default constructor.
>
> **[10:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=609)** So effectively what it's saying here is that we need provide the value integer.
>
> **[10:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=614)** So instead of just defining the value name here, we will go ahead and add a constructor and now we can provide some integer value representing a hex color.
>
> **[10:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=625)** So in this case, I've got a couple of these colors saved off.
>
> **[10:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=629)** So I will just type this out.
>
> **[10:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=631)** 0xebba34.
>
> **[10:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=635)** And then I might want to define, let's say a BLUE value.
>
> **[10:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=642)** And lastly, I'll add in a PURPLE value.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=646)** So each of these are now named value types within the HighlightColor enum and they each have their own hex value available as a property.
>
> **[10:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=656)** So now if we come back to our Main.kt here, so now we'll create a variable called color, and assign it one of these HighlightColor values.
>
> **[11:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=667)** So in this case I'll say HighlightColor.BLUE.
>
> **[11:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=672)** And now I could print out the result of saying color.value.
>
> **[11:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=679)** So that value property then is corresponding to this property that we added to the HighlightColor constructor.
>
> **[11:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=689)** And if we print this code out, oh, we will again see our ArrayIndexOutOfBounds here, again because we didn't comment the previous example.
>
> **[11:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=700)** There we go.
>
> **[11:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=701)** Now we'll run this one more time.
>
> **[11:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=704)** And there we go.
>
> **[11:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=705)** We have the hex value for the blue color.
>
> **[11:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=711)** Enum classes are very helpful when we try to model real-world data in a type-safe way.
>
> **[11:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=718)** We might use enums to ensure our network responses are safer, or our database responses are safer.
>
> **[12:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/enum-classes?u=76281980&t=725)** They're a great option when trying to limit the set of values coming in or out of our APIs.

> [!info]- Semantic Content
>
> **Code Keywords:** enum (26), let (8), case, (5), pass (4), class, (3)
> **Env Vars:** west (8), north (4), south (3), east (2), blue (2)
> **Code Identifiers:** valueof (2), apivalue (2), parseddirection (1)
> **File Paths:** main.kt (3)
> **UI Navigation:** go to (1), scroll down (1), navigate to (1)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)

#### Data classes
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=0)** - [Instructor] When writing object oriented code, it's common practice to have types that are simple value holders, that have no real business, logic, or purpose other than to hold some set of data.
>
> **[0:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=14)** Data classes in Kotlin are specifically designed for this purpose and have several useful traits that help reduce boilerplate code.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=24)** We can define a data class, much like a regular class, but using the data modifier and with a few restrictions.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=33)** So let's open up our Project pane here, and we're going to create a new Kotlin class or file, and we are going to select the Data class option, and we will name this class Task.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=52)** So this is now created a new Task.kt file.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=56)** And with it, a data class named Task.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=60)** Notice the data modifier in front of the class name.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=64)** This is what differentiates a class from a data class.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=68)** Now, by adding that data modifier, we bring with it some restrictions that data classes have.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=75)** And one of those special restrictions on data classes is that they must contain at least one constructive property in their primary constructor.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=84)** So if we actually place our cursor over our constructor, we see that it is indicating to us here, Data class must have at least one primary constructor parameter.
>
> **[1:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=95)** So the IDE in compiler are working in conjunction here to let us know about this restriction.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=102)** So to satisfy this requirement to have at least one primary constructor perimeter, we will add a read only property named name.
>
> **[1:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=115)** I'll do that by adding val_name with the type of String.
>
> **[2:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=123)** Now, if we go back to Main.kt here, we can create a couple of tasks.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=129)** We'll create task1.
>
> **[2:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=133)** And when we call our constructor, we need to pass a name for that task.
>
> **[2:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=138)** So we will call that Build search feature.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=143)** And let's create a task2 variable here.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=147)** And this task will be named Add analytics.
>
> **[2:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=153)** Now, if we go back to our Task.kt file here, that name property is public.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=160)** So from Main.kt, we can access that public name property.
>
> **[2:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=166)** So here we will just print out the names of each task.
>
> **[2:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=170)** So we'll say println task1.name,
>
> **[2:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=178)** and then we'll duplicate that and we will do task2.name.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=183)** If we run our code, we will see Build search feature for task1 and Add analytics for task2, which are the names we provided.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=194)** Now, what if we wanted to know if these variables represented these same task?
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=200)** We could manually check the value of the name property to do the comparison and print out the results that might look something like this, where we have an if conditional here, and we could say task1.name == task2.name,
>
> **[3:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=219)** println Tasks are the same, else println Tasks are different.
>
> **[3:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=232)** And if we run this, we see tasks are different printed out.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=238)** No surprise.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=241)** If we compared, let's say, task1.name to task2.name,
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=249)** we see tasks are the same.
>
> **[4:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=252)** And, just as a more interesting example, let's take the name of task2 and use it for task1 as well.
>
> **[4:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=263)** Now, if we run this one more time, we, once again, we see tasks are the same.
>
> **[4:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=269)** So the idea here is that by using the data held in the task itself for comparison, we can more accurately compare these in situations where all we care about is the data.
>
> **[4:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=283)** So I'm just going to revert the change to task1's name here, put it back to the original Build search feature.
>
> **[4:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=290)** So we've seen with this name comparison here that we can accurately compare the data held in task1 and task2.
>
> **[4:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=299)** However, this doesn't scale well.
>
> **[5:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=302)** Imagine your task class had 5 properties or 10 properties.
>
> **[5:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=307)** Would you want to manually check each value?
>
> **[5:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=310)** Probably not.
>
> **[5:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=312)** In the Java world, the way we would solve this is by implementing equals and hash code so the values could be compared directly.
>
> **[5:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=320)** In Kotlin, data classes actually take care of this for us.
>
> **[5:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=325)** The Kotlin compiler will generate the needed code to compare data classes based on their constructor properties.
>
> **[5:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=334)** So rather than manually checking the name of each task and any other properties that we might add to task in the future, we can compare the task variables directly.
>
> **[5:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=346)** So we could say task1 == task2 here.
>
> **[5:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=353)** And unsurprisingly, if we run the code, we see that the tasks are different.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=362)** If we update the tasks, so the names are the same, the output will show that they are the same task.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=369)** So we'll repeat what we did before.
>
> **[6:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=371)** We will use the Add analytics name for both tasks.
>
> **[6:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=376)** And now, if we run this, this time, we see tasks are the same because that name property is the same for each task.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=387)** So I will now revert the name one more time.
>
> **[6:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=391)** Let's add an id property to our data class.
>
> **[6:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=396)** So we'll open up a Task.kt again and we will add another val, then with the name of id and of type String again.
>
> **[6:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=410)** Now back in Main.kt, we will need to update the constructors to provide an id.
>
> **[6:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=416)** So for task1, we'll provide an id a1.
>
> **[7:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=423)** And for task2, we'll provide an id b2.
>
> **[7:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=430)** But now, even though we've added this new id property, we don't have to update our equality check when doing the task comparison in our main function.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=441)** And so if we run this once again, we'll see tasks are different because they have different ids and different names.
>
> **[7:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=452)** If we were to, again, then use the same name for each task but leave the ids different, we still see that the tasks are different.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=467)** And if we use both the same name and the same id, now we see that the tasks are treated as the same.
>
> **[7:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=477)** So with this one equality comparison of task1 compared to task2, it is looking at the actual values held by each property and tells us whether those values are the same or not.
>
> **[8:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=490)** This is an incredibly powerful feature because it helps us scale our code base without having to update all of our comparisons in every place where we use a given data class type.
>
> **[8:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=503)** Another useful feature of data classes is that the compiler generates a copy function, which may be used to copy an instance of a data class along with all of its associated data.
>
> **[8:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=515)** So we could make a copy here of task2 and store it in a variable called task2Copy.
>
> **[8:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=525)** To make the copy, we would access task2.copy.
>
> **[8:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=530)** Now, in our comparison, we could compare task2Copy to task2.
>
> **[8:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=539)** And we see that the tasks are the same.
>
> **[9:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=546)** Now part of the data class magic is that the copy function allows us to modify specific values when calling that copy function.
>
> **[9:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=555)** So if we wanted to copy task2 but change the id, we could easily do so by using a named argument when calling copy.
>
> **[9:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=565)** So now we'll update our call to task2.copy to specify a custom id of c3.
>
> **[9:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=575)** So now, if we run this code, we'll see that the tasks are different because task2Copy has the id of c3, whereas task2 has the original id of a1.
>
> **[9:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=589)** The last data class feature we'll explore is destructuring.
>
> **[9:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=594)** Destructuring declarations allow us to extract the public values of a data class into variables without having to explicitly reference them.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=604)** Let's say we want to extract the id and name of task1.
>
> **[10:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=609)** Well, we could start by writing val.
>
> **[10:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=614)** And then in parentheses, we'll define the name of each variable that we want to hold the id and name for the task.
>
> **[10:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=622)** So in this case, we'll just say id and name.
>
> **[10:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=626)** Those will be our two variable names.
>
> **[10:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=630)** And then to assign those values, we simply say = task1.
>
> **[10:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=638)** The variables will have their values assigned in order of the property declarations in the data class.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=646)** So here, since we defined id first, it will be assigned to the first property in the data class, which corresponds to the id property.
>
> **[10:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=657)** And similarly, the name variable here will be associated with the name property of the task data class.
>
> **[11:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=665)** If a data class had three properties and used destructuring with only two variables, the first two data class properties would be extracted and the third one would be unused.
>
> **[11:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=677)** Once the destructuring declaration is executed, each variable will be initialized to match the data class property values.
>
> **[11:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=685)** Data classes help encourage immutability and reduce the amount of code required for making direct comparisons or for copying of our value holders.
>
> **[11:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/data-classes?u=76281980&t=695)** You might consider data classes for representing API responses, database elements, or UI states, really anything you might want to compare that would benefit from being immutable.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (4), function (4), class, (3), public (3)
> **File Paths:** task.kt (3), main.kt (3)
> **Code Identifiers:** task2copy (3), val_name (1)
> **CLI Commands:** make (2)
> **Env Vars:** ide (1), api (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1)
> **Exercise Files:** boilerplate (1)

#### Object classes
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=0)** - [Instructor] Singleton is a design pattern for ensuring that only a single instance of a class exists at any time within the runtime of an application.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=10)** In Kotlin, object declarations provide a concise thread safe syntax for writing singletons, creating an object declaration is quite simple.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=22)** So let's open up our project window here, navigate to source main Kotlin, we're going to right click, go to new Kotlin class or file and if we scroll down to the very bottom we will see an option for object.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=38)** So we're going to select that object choice and we are going to name this NetworkConfig and hit enter.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=49)** So, once we remove the empty class body that was generated we're left with this.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=55)** We have the object keyword representing that we want this to be an object declaration and NetworkConfig as the name.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=65)** So we have this network config object declaration defined which means there would only be one instance of this ever created within our application when we run it and it will be initialized the first time we access it.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=80)** So if we never actually use this then it'll never be in instantiated.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=84)** If we access it once, then we'll get the same object throughout the lifetime of our application.
>
> **[1:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=91)** Now, let's imagine we need to define several properties that might control our networking layer.
>
> **[1:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=98)** We can add those to our NetworkConfig class like we would any other class, except for one thing, we can't use a constructor.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=109)** So, we'll create a class body here and we'll start by defining a property called base URL and set that equal to [http://<some](http://<some) url>, the URL doesn't really matter here.
>
> **[2:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=128)** And then we might also have a property called userAgent and we'll set it equal to demo app.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=139)** Now, because object classes are singletons they're instantiated for us upon first access which means they do not have a constructor which also means that we may use them without having to first in instantiate them.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=156)** So, if we go back over to main KT, we could access the base URL by referencing the name of the type in this case, NetworkConfig, and accessing that base URL property directly.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=173)** If we go ahead and print this out we'll see that fake base URL printed out to the console.
>
> **[3:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=185)** Now, our object classes may define methods and implement interfaces just like any other class.
>
> **[3:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=193)** So let's go back to our project directory and we're going to create a new interface here and we're going to call this interface NetworkInfoProvider.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=210)** A network info provider is going to have a single method called getNetworkDetails which just returns a string.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=223)** So now we have this NetworkInfoProvider interface, our NetworkConfig object declaration could implement that interface and the associated method, to implement the interface it's just the same as with any other class.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=238)** We'll come to the object declaration here and after the name of that object, we will add a colon, and then the name of the interface we want to implement and then just like any other class as well, we can override that method and in this case, getNetworkDetails will return a string that can concatenates our base URL with a separator and the userAgent.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=274)** Once we finished implementing that method, we can come back to main and we're now free to access that method and call it on our NetworkConfig singleton.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=288)** So here we will print out the result of calling getNetworkDetails and there as the second output we see the base URL, our separator and the userAgent printed out to the console.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=304)** Now, it's also possible to create anonymous object declarations using what's called an object expression.
>
> **[5:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=312)** These are analogous to anonymous inner classes in Java.
>
> **[5:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=316)** So these are perfect for situations where you might just need a one off implementation of a particular interface or object.
>
> **[5:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=326)** So say we wanted to create a one off instance of NetworkInfoProvider.
>
> **[5:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=331)** We could define a variable called provider of type NetworkInfoProvider, and then we could assign it in object expression here, to define an object expression we start with the object keyword, a colon, and then the type that we want that object to implement or extend.
>
> **[5:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=357)** So in this case, we're basically saying create an anonymous object that implements NetworkInfoProvider and then we can add a class body here or in this case, an interface body and we can override that getNetworkDetails method.
>
> **[6:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=376)** So this object expression that we've just created will result in an object that will only be active during the life cycle of the provider variable.
>
> **[6:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=387)** So in this case, that provider variable is only active and alive during the invocation of the main function.
>
> **[6:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=395)** But during that time we can access all of the properties and methods of that type.
>
> **[6:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=401)** So with that provider variable we could call network details.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=406)** Now, in this case we haven't implemented network details, if we tried to run this we would actually get an exception thrown when we hit the to-do there.
>
> **[6:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=413)** But if we needed to, we could override that for whatever custom behavior we wanted.
>
> **[6:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/object-classes?u=76281980&t=419)** The ability to create concise, thread safe singletons is incredibly convenient and demonstrates Kotlin's focus on developer productivity and readable code.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), case, (5), let (3), override (3), class. (2)
> **Code Identifiers:** getnetworkdetails (4), useragent (3)
> **Env Vars:** url (7)
> **Analogies:** just like (2), imagine (1), analogous to (1)
> **UI Navigation:** navigate to (1), go to (1), scroll down (1)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [http://<some](http://<some) (1)
> **Cross-References:** go back to (1)

#### Sealed classes
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=0)** - [Instructor] Much like enum classes, sealed classes allow us to define restricted class hierarchies.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=6)** However, unlike enum classes each subtype in the hierarchy may include unique properties making them more flexible and perfect for modeling things like uistates or operation results.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=21)** So we're going to create our first sealed class here in IntelliJ by going to source, main, Kotlin, right clicking, navigating to new Kotlin class or file.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=33)** And then from this option, we'll select sealed class and we are going to name that sealed class uistate and then hit enter.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=46)** So we will imagine that we're going to use this uistate sealed class to represent uistates in let's say a mobile application or web application.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=59)** If this was an enum, each type in the enum would have to have the same properties but that doesn't work well for complex states.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=70)** For example, in our uistate here we might want to have a loading state and that loading state might not have any properties at all.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=83)** And we might want then a loaded state that represents exactly the data that we should be drawing to the screen.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=93)** And finally, we might want some type of errored state to indicate that something went wrong in this process and that we should show some type of fallback.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=103)** So if this was an enum, each of these loading, loaded and error states would have to have the same values but that's just not how we really want to model our data.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=112)** With a sealed class however, we can use a combination of classes, data classes or object classes to model each unique state in whatever manner makes the most sense.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=125)** For example, for our loading state we could use an object declaration to define a singleton loading value that takes no properties.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=139)** We need to then be sure to extend the base sealed class type or our loading value here wouldn't be considered part of the sealed hierarchy.
>
> **[2:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=152)** We could then use a data class for our loaded state.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=160)** Now data classes have to have at least one constructor property, so we could add a title of type string and a subtitle of type string.
>
> **[2:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=176)** And again, we're going to want to make sure that we extend the base uistate type so that loaded is recognized as part of our uistate hierarchy.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=192)** And finally, for our error state, we will define this as a basic class called error that takes in some error throwable.
>
> **[3:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=208)** So now we have our uistate type here and it has three possible values.
>
> **[3:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=213)** So now back here in main.kt, we could create a mutable variable called state that is set up to hold an instance of a uistate.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=223)** And we might initially set that to uistate.loading, now notice here, we don't have to instantiate an instance of loading because as we remember loading was defined as an object declaration, so it will be initialized once upon first access.
>
> **[4:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=244)** Now, after we're in the loading state we might eventually enter the loaded state.
>
> **[4:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=250)** So we could reassign our variable to an instance of uistate.loaded.
>
> **[4:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=257)** And we might need to then provide each parameter value here so we could say Kotlin for the title and is cool for the subtitle.
>
> **[4:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=272)** And lastly, we could assign an instance of uistate.error as well and we could pass it an instance of sum throwable so maybe we caught an error when making our network request we could forward it on to the error class here.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=291)** So in this case, I will just create a new instance of illegal state exception and that'll be forwarded on to our uistate.error instance.
>
> **[5:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=302)** So like with an enum, we have this restricted set of values either loading, loaded or error, but unlike an enum we can provide different values here or no values at all, we have the freedom to model and express our data in whatever way makes the most sense.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=318)** Now, because we've defined all possible value types in our sealed class, the compiler knows that as well and the compiler can help us enforce that we handle each possible value in certain situations.
>
> **[5:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=333)** We've got our uistate, let's imagine that we're now going to write a render function to actually render that state to the screen.
>
> **[5:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=344)** So we can simulate this by writing a new function called render and render will take in an instance of uistate and return unit.
>
> **[5:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=359)** Within our render function, we want to make sure that we handle each possible value from that uistate hierarchy.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=369)** To do this, we're going to leverage a when statement, so we'll type when, and we will pass our state parameter to that when statement.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=381)** If we use a when statement with a sealed class the compiler can recognize which types are in the sealed class and the IDE can generate branches for each of those possibilities.
>
> **[6:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=395)** So I'm going to move my cursor over the when keyword here and hit alt + enter and it'll give me an option here to add remaining branches.
>
> **[6:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=405)** So if I hit enter, we'll see that the IDE generates three branches here, one for each value in our sealed glass hierarchy.
>
> **[6:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=416)** Now, the fact that the IDE can help us generate each of these state branches in our when statement here is really helpful.
>
> **[7:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=425)** However, we have to remember to go in there and add each of those conditions.
>
> **[7:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=433)** It would be nice if we didn't have to remember that, it would be nice if the compiler could help enforce that for us, and as it turns out, it can.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=441)** So let's just remove what we added there and instead, we're going to define a render as a single expression function.
>
> **[7:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=451)** So we will say equals and then we were going to use when as an expression here instead of as a statement.
>
> **[7:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=458)** So I'll still pass in state to our when.
>
> **[7:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=463)** Now however, we have this little error highlighted over the when, it says when expression must be exhaustive.
>
> **[7:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=473)** So what this is indicating to us is that if using when as an expression in conjunction with a sealed class or even an enum class, we have to exhaustively handle every branch of that hierarchy.
>
> **[8:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=490)** So if I move my cursor back onto the when, hit alt + enter I could add an else branch here and that error would go away.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=498)** And so in this case, because we just have an else this will effectively be the only thing that's handled, this will be the fallback value, every time we called render, we would do whatever is defined in this else block.
>
> **[8:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=512)** However, if we removed the else, the other option is to generate all remaining branches.
>
> **[8:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=522)** Now, if we do this, each branch will then be handled for us, this helps us enforce that we're going to handle each one of our values from the uistate sealed class.
>
> **[8:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=537)** Now again, we now have a compiler warning here on the render function itself, it's indicating that a nothing return type needs to be specified explicitly this will go away in just a moment once we implement the branches here in our when expression.
>
> **[9:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=555)** So now let's actually define some behavior here.
>
> **[9:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=559)** So for the error case, we are going to simply print out the string error, and notice as soon as we do this that warning went away on the render function.
>
> **[9:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=572)** For the loading state, we will also print out just a string saying loading.
>
> **[9:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=581)** Now, for the loaded state however, we want to print out a little bit more information, we want to actually print out the title of the uistate passed to us.
>
> **[9:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=592)** If we're using when as a statement or an expression in this case, smart casting will kick in and automatically cast the state parameter to an instance of uistate.loaded.
>
> **[10:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=605)** This means we can directly access the unique properties of each of our sealed class subtypes once smart casting kicks in.
>
> **[10:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=614)** So in the case of the loaded state here we could print out loaded, colon and then we could use a string template here to substitute in the value of state.title.
>
> **[10:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=629)** We can access state.title because state has already been casted to an instance of uistate.loaded.
>
> **[10:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=636)** So now, if we come back down to our main function and we call render on each of our unique types here, we'll see the different outputs printed to the console.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=646)** So we'll call render once here when state is loading, we will call it a second time after we set it to a loaded value.
>
> **[10:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=657)** And finally, we will render once again when we have the error state.
>
> **[11:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=665)** And if we run our code, we will see loading, we will see loaded with the title of Kotlin and we will see error printed out.
>
> **[11:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=674)** So our render function when invoked is using the when expression to correctly check the type of each uistate passed to it and print out the custom error message.
>
> **[11:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=687)** The ability to create these sealed types with unique properties gives us a tremendous amount of flexibility when modeling states in our application.
>
> **[11:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/sealed-classes?u=76281980&t=696)** Imagine your own projects, can you think of any areas where sealed classes might be useful?

> [!info]- Semantic Content
>
> **Code Keywords:** enum (8), function (8), let (4), case, (4), finally, (3)
> **Analogies:** imagine (3), for example (2)
> **Env Vars:** ide (3)
> **CLI Commands:** make (2)
> **Warnings:** warning (2)
> **File Paths:** main.kt (1)
> **Tools:** intellij (1)
> **Exercise Files:** template (1)

#### Companion objects
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=0)** - [Instructor] Kotlin does not have a static keyword, instead relying on things like top level and extension functions to achieve similar semantics.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=10)** However, sometimes it's still useful to be able to scope properties or methods to a particular type.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=18)** Companion objects provide a mechanism for mimicking the semantics of static in Java and can be a useful tool for code organization or interoperability with Java.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=31)** Fundamentally, a companion object is an object declaration within a class.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=37)** So, we are going to create a new class called SearchController and within that SearchController class we are going to have a private mutable variable called query that holds a current search query string.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=66)** Now, what if we wanted to create some kind of factory method for creating a new instance of SearchController, we could just create a top level function, but then that function might have to be public or internal, possibly polluting the global name space.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=84)** As an alternative, we could add a companion object to our SearchController class, to add a companion object we need to come within the class body and then we will use the companion keyword followed by object, followed by a class body.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=108)** Within that companion object we can then add a create method that will take in a single parameter called initialQuery of type string and it will return an instance of SearchController.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=129)** Within that create method we'll create a variable called controller to hold onto an instance of SearchController and then we will set controller.query equal to the initialQuery, there we go.
>
> **[2:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=154)** And finally, we will return the controller.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=160)** Now, a couple of things are interesting about this.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=165)** One of which is that our SearchController class does not have a public constructor that allows for any parameters to be passed and if the query property is private, however, within this companion object that is within SearchController we have access to that query property.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=189)** So we can create an instance of SearchController and then set that initialQuery using the value passed to that create method.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=198)** This is one of the benefits of a companion object.
>
> **[3:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=202)** Companion objects have access to private properties and methods of the enclosing class.
>
> **[3:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=209)** Once we have our companion object, we can reference its properties and methods by referencing the enclosing class name.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=218)** So if we come back to our main function here, we'll create a variable named controller and we will set it equal to SearchController.create and we'll pass in an initial query of Kotlin.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=234)** So what we've done here is reference that commanding object by using the name of the enclosing class, in this case SearchController and then the name of the method on that companion object.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=246)** Another more verbose way of referencing the companion object would be to actually explicitly name it using Companion and then dot create, however from Kotlin we don't need to do this.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=262)** We can simply remove that companion naming.
>
> **[4:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=267)** If we were calling this from Java we would have to explicitly reference that companion instance.
>
> **[4:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=274)** Now, let's add a property to our companion object.
>
> **[4:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=278)** So we will come back over to SearchController and to add a property to the companion object, we will declare it like we would a property in any other class.
>
> **[4:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=287)** So we might want to define, let's say a constant for the maximum number of search results.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=293)** In this case, we'll make it private, we'll use the const keyword here, this will help make it defined as a true static by the compiler which will be a little bit more memory efficient.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=308)** Then we'll use val to indicate this will be a read only property, and then we will name it MAX_RESULTS and assign it to 20, this property, even though it's private may still be accessed from anywhere within the SearchController class, if it was made public it could be accessed externally, again by referencing a class name.
>
> **[5:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=333)** So I'll just remove private, go back to main KT here, and we could reference SearchController.MAX_RESULTS directly.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=345)** If we remove that, we'll come back to SearchController here, we will make it private once again and just to demonstrate, we could create an init block within SearchController and from within here we could reference SearchController.MAX_RESULTS or even more concisely because we are within the SearchController class, we don't even need to prefix it with the name of the enclosing class, we could just reference MAX_RESULTS directly.
>
> **[6:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/companion-objects?u=76281980&t=381)** Companion objects are most useful in organizing methods and properties so they are only accessible by first referencing an enclosing class name, when deciding between a companion object or a top level property or function, consider whether or not the function should be globally available or whether it makes more sense within the context of another explicit class.

> [!info]- Semantic Content
>
> **Code Keywords:** private (7), function (5), class, (5), class. (4), static (3)
> **Env Vars:** max_results (4)
> **CLI Commands:** make (3)
> **Code Identifiers:** initialquery (3)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a Result type using a sealed class
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=0)** - [Nate] Let's work through another challenge, this time to reinforce the concept of modeling data with sealed classes.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=12)** In this challenge your task is to create a sealed class named StringResult.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=18)** Imagine that you would use this class when fetching a string from the network or from a database.
>
> **[0:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=24)** Rather than returning a raw string we could use StringResult so that failures are strongly typed as opposed to using null or an empty string to represent the failure case.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=36)** StringResult should have two possible states: Success and Error.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=42)** The Success state should have a public String property and the Error state should have a public Throwable property.
>
> **[0:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=51)** To help test your StringResult sealed class we have some starter code.
>
> **[0:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=56)** This function getRandomString will simulate fetching a string from, let's say, a network.
>
> **[1:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=62)** Sometimes it will succeed and sometimes it will throw an exception.
>
> **[1:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=68)** Use the getRandomString function to write another function named getString that calls getRandomString and wraps that result into an instance of StringResult.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=82)** Calling getString should never crash but instead should wrap any failures into an instance of StringResult.Error.
>
> **[1:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-create-a-result-type-using-a-sealed-class?u=76281980&t=92)** To help get you started, we've already given a StringResult.kt file that outlines the details, so use this file to define your StringResult sealed class.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), public (2), case. (1), from, (1)
> **Code Identifiers:** getrandomstring (3), getstring (2)
> **File Paths:** stringresult.kt (1)
> **Exercise Files:** starter code (1)
> **Analogies:** imagine (1)
> **Speakers:** - [nate] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a Result type using a sealed class
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=5)** - [Instructor] Let's take a look at one way we could solve this challenge.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=9)** The first step towards a working solution is to create the string result sealed class.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=15)** So here within the string result KT file, I'm going to go ahead and define a sealed class named StringResult.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=25)** With that in place, we can move on to defining the success and error types.
>
> **[0:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=31)** Because success and error states both will contain properties, we'll use data classes to represent them both.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=39)** So to start, we will define a new data class for success.
>
> **[0:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=47)** And that class will have a single property called value of type string.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=54)** And then we will make sure that success extends StringResult so that it is recognized as part of that sealed hierarchy.
>
> **[1:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=63)** And next, we'll create our error type in much the same way.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=67)** So we will define data, class, error.
>
> **[1:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=72)** This time, instead of a value string, we will have an error property representing a throwable.
>
> **[1:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=82)** And again, we will extend StringResult.
>
> **[1:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=88)** This error property will help us represent any error that might occur when fetching a string, maybe a network request or a database failure, anything like that.
>
> **[1:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=100)** Now that we have our string result types set up, we can move on to implementing the get string function.
>
> **[1:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=107)** So we will move over to main KT here, and I will stub out a get string function.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=117)** So I know we want it to be called getString and we know that we want it to return a string result.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=126)** We also know that we want to use the provided get random string function to simulate making some type of request for the string.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=135)** So we'll go ahead and write in getRandomString here, even if we're not really doing anything with it yet.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=142)** If we take a closer look at the implementation of getRandomString, we'll see that there is a 50/50 possibility of that function throwing an illegal state exception.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=156)** So rather than calling getRandomString directly, which might lead to a runtime exception being thrown, we're actually going to wrap our call to getRandomString in a try catch.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=172)** So within the try block, we will call getRandomString, and within the catch block, we will catch any illegal state exceptions that might be thrown.
>
> **[3:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=188)** Now, we're set up to convert both the success case and the error case into instances of StringResult.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=197)** So for the success case, we will wrap the result of getRandomString in an instance of StringResult.Success.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=210)** And within the catch block, we can use the caught exception to create an instance of StringResult.Error.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=224)** And now just the last thing that we'll do is return the result of this try catch, and now our get string function should be ready to test out.
>
> **[3:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=238)** So we'll come back up into main and we'll write a little bit of test code here to help us validate that getString is working as expected.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=248)** So we're going to use a when statement here and within that when, we'll define a result variable and assign it the value of calling getString.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=264)** Now, because that getString result is going to be an instance of StringResult, we can generate the sealed class branches.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=275)** So in this case, we can make sure that we handle both the error and the success cases.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=281)** So in the case of error, we will print out, there was an error.
>
> **[4:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=290)** And in the success case, we will print out result.value.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=297)** So any instance of StringResult.Error will print out the error message and any instance of StringResult.Success will print out the actual value that was generated by getRandomString.
>
> **[5:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=311)** So now if we run this code a few times, we should be able to see instances of both results.
>
> **[5:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=317)** So in this case, we see one printed out which means that getRandomString did in fact return us a string value.
>
> **[5:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=326)** If we run it again, we see zero.
>
> **[5:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=329)** So again, another success.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=336)** And here we have output, there was an error.
>
> **[5:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=339)** So we've seen now cases of both the success case and the error case being successfully handled.
>
> **[5:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=345)** And more importantly, we've seen no crashes in our code, even though we know that getRandomString sometimes throws an exception.
>
> **[5:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=354)** This challenge represents the very common real world use case of modeling both success and error states.
>
> **[6:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-create-a-result-type-using-a-sealed-class?u=76281980&t=362)** Not all scenarios will have the same exact states or be implemented quite the same way but the concepts have wide applications, regardless of what you're building.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), case, (4), let (1), class. (1), extends (1)
> **Code Identifiers:** getrandomstring (9), getstring (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 2. Writing Idiomatic Kotlin

> [↑ Back to Table of Contents](#table-of-contents)

#### Top-level properties and functions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=0)** - [Instructor] Let's talk code organization in Kotlin.
>
> **[0:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=3)** More specifically, we're going to explore options for organizing our top-level properties and functions in a scalable way.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=12)** Now, to quickly review, top-level properties and top-level functions refer to any property or function that is defined outside of any enclosing class.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=22)** Now, throughout this course we've been using examples of both of these extensively.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=29)** So, if we imagine a variable like this we might name it DEFAULT_CLICK_DELAY.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=41)** This is an example of a top-level property.
>
> **[0:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=46)** Or if we define a function like this where it's standalone within some Kotlin file, so maybe we'll name this log.
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=60)** So, this would be an example then of a top-level function.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=65)** So, anytime that we create a standalone variable or a function in a Kotlin file and it's not within some other class you've created a top-level element.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=76)** The use of top-level elements is a standard practice in Kotlin, but we should still use them pragmatically.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=85)** Now, let's imagine that we have a file called TimeUtils.kt.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=90)** So, I'm just going to create that file real quick here, TimeUtils.kt, there we go.
>
> **[1:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=99)** Now, within TimeUtils here we want to define some constants and functions for working with time in our application.
>
> **[1:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=108)** To start we're going to define a top-level property here called hourInMillis and set it equal to 60 minutes times 60 seconds times 1,000.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=125)** This is a completely valid top-level property.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=129)** We know that it has to do with time, so we've organized it into a file called TimeUtils.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=136)** But there's still potentially an issue with the way this property is written and organized.
>
> **[2:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=143)** Do you have any guesses as to what that issue might be?
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=146)** Well, if we come back over to Main.kt we can explore this.
>
> **[2:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=150)** The potential problem here is that this property we've just defined within TimeUtils is public, and because it's public and because it's not scoped to any enclosing class that means it's available globally throughout our entire application.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=165)** So, we could access that quite simply by referencing that name directly.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=173)** Now, while this can be very convenient, especially in a small application, this can be problematic.
>
> **[3:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=181)** Global variables are easy to misuse.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=184)** They can be used for unrelated things, they can make it difficult to find other variables and functions as they pollute the global namespace, and they inherently break any kind of encapsulation we might have hoped for if we intended the top-level property to only be used within some given file or class.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=205)** So, when we use top-level elements we should be mindful about the visibility applied to the property or function.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=212)** If we return back to TimeUtils, in this case if we imagine we only wanted our hourInMillis property to be available within this TimeUtils file we could mark that property as private.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=229)** Once we've made it private we'll see that we can no longer access that value outside of the file.
>
> **[3:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=236)** So, in our Main.kt function here we now have an error indicating that hourInMillis is private within its file.
>
> **[4:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=246)** Now, the same concept applies for top-level functions as well.
>
> **[4:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=251)** So, again, we'll return back to TimeUtils here, and now let's imagine we're going to create some utility function here.
>
> **[4:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=258)** So, we will name that millisForHours.
>
> **[4:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=262)** It will take in an integer number of hours, and it will return that integer times our hourInMillis constant value.
>
> **[4:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=277)** So, again, because this function is public we can call this from within Main without any issue.
>
> **[4:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=286)** MillisForHours we could pass in a value of five here, and this will compile with no problem.
>
> **[4:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=293)** Again, if we wanted to then make that function private only within the TimeUtils file we could do that.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=303)** And again, we will now see the error in Main.kt indicating that the millisForHours function is private.
>
> **[5:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=313)** Now, we've looked at public visibility and private visibility.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=318)** However, there's also a middle ground that can be useful in certain situations, and that is internal.
>
> **[5:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=326)** The internal modifier makes a property, function, or a class accessible within a given module, but not to the entire project.
>
> **[5:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=335)** So, if we come back to TimeUtils and we replace the private with internal, now back in Main.kt we see that this Main.kt file has access to that millisForHours function.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=355)** However, other modules, if this was a multi-module project, for example, they would not have access to this.
>
> **[6:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=363)** Now, within the context of Kotlin and these visibility modifiers, a module essentially means a set of Kotlin files compiled together.
>
> **[6:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=375)** Most basic projects that you might generate by default in IntelliJ are going to be single module, but as codebases scale it's quite common to split code into separate reusable modules, especially if using a build system like Gradle which is quite common with Kotlin projects.
>
> **[6:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=394)** So, in these situations adding the internal modifier can be a good way to make constants and functions available to the specialized module, but not to the entire codebase.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=406)** So, we'll return to TimeUtils here, and we'll just make that change to our hourInMillis value as well just to demonstrate that it works for properties in addition to functions.
>
> **[6:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=419)** However, if we were going to be writing this in a production codebase we probably would want to keep that constant private.
>
> **[7:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=427)** So, we'll remove it from our Main.kt file, and we'll add it back here.
>
> **[7:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=434)** So, the idea here is that we have the constant private within the file, but the utility function is available more widely.
>
> **[7:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=444)** So, now we've kind of encapsulated that constant within this file while still making the useful function available to more of our codebase.
>
> **[7:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=455)** Understanding the different visibility modifiers is important when writing Idiomatic Kotlin with top-level properties and functions.
>
> **[7:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=463)** As you write Kotlin code think carefully about how much of your application should be able to access the code.
>
> **[7:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=470)** Is your property truly global?
>
> **[7:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=473)** Then public might be the way to go.
>
> **[7:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=475)** Should your function only be accessible within a file or within a class?
>
> **[8:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=480)** Then you might consider making it private or protected.
>
> **[8:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/top-level-properties-and-functions?u=76281980&t=483)** And if you're working in a multi-module project you'll find yourself using internal on many of your functions, classes, and properties.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), private (10), module (6), public (5), let (3)
> **File Paths:** main.kt (6), timeutils.kt (2)
> **Code Identifiers:** hourinmillis (5), millisforhours (3)
> **CLI Commands:** make (4), find (2)
> **Analogies:** imagine (4), for example (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** default_click_delay (1)
> **Tools:** intellij (1)

#### Extension properties and functions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=0)** - [Instructor] Extension functions and extension properties are two of the most powerful features of Kotlin.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=6)** They allow developers to extend types they don't own, making it easier to adapt types and APIs to fit your specific use cases.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=17)** Extension functions are defined outside a given type but may be called as if it exists on that type.
>
> **[0:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=26)** For example, let's revisit our earlier function, millisForHours, which converts an integer input, representing a number of hours, into the equivalent number of milliseconds.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=42)** If we go to Main.kt here, we can invoke this by always passing an integer value to it.
>
> **[0:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=53)** But what if we call that function on the integer rather than passing the integer?
>
> **[1:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=60)** This is something we can accomplish by adding an extension function.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=67)** So we'll return to TimeUtils.kt, and to define an extension function, we will start like any other function, by using the fun keyword.
>
> **[1:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=80)** Then, rather than defining the function name, we will specify the type that we want to extend, followed by a period and then the name of the function.
>
> **[1:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=92)** So in this case, we want to extend the Int type and then we will go ahead and give this the same function name of millisForHours.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=103)** You might notice that this syntax actually looks quite like a method invocation.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=109)** Now we need to finish implementing our function.
>
> **[1:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=112)** We need to multiply the integer by our hourInMillis constant.
>
> **[1:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=117)** But how do we do that if the integer is no longer passed as an argument to the function?
>
> **[2:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=124)** Well as it turns out, we still have access to the integer in the form of a receiver.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=130)** A receiver is a value made implicitly available within our function.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=135)** Essentially it means we don't need to explicitly reference the Int parameter because the function is being called on the Int itself.
>
> **[2:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=144)** And we can access the Int by referencing this.
>
> **[2:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=148)** So we can complete the body of our function here by referencing this, which will refer to the Int that the function's being called on, times hourInMillis.
>
> **[2:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=162)** Now if we notice here, now that we've finished our implementation, we have an error here, basically saying that both of these functions have the same signature.
>
> **[2:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=175)** So we are just going to comment out the first one for now.
>
> **[3:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=181)** Now, if we return to Main.kt, we will see that both of our previous invocations of the old function are giving us a compiler error now which is no surprise since we commented it out.
>
> **[3:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=194)** So let's go ahead and comment these as well.
>
> **[3:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=196)** And now we will replace them with our new extension function.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=200)** So instead of calling the function name and passing the integer into them, so this time we will type the integer of four representing our hours, period, and then type the name of the function, millisForHours.
>
> **[3:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=218)** And similarly, we could do the same thing for 10 hours here.
>
> **[3:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=224)** So even though that millisForHours function doesn't actually exist on the Int type, we can call it as if it does.
>
> **[3:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=233)** Extension functions like this are quite prominent in the Kotlin standard library.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=239)** For example, we can easily convert any string into a regular expression.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=245)** So I'll create a basic regular expression here that will simply match any number of the characters, A, B, or C.
>
> **[4:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=254)** And now I can turn that into a regular expression instance by typing toRegex.
>
> **[4:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=263)** Now, if we click into Regex here to look at its implementation, we can see that it is in fact defined as a extension function on the string type.
>
> **[4:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=277)** And it then wraps that string that the method is called on and uses it to create a new instance of the Regex type.
>
> **[4:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=289)** Now, extension functions like this don't actually insert new methods into the extended class.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=296)** The compiler essentially generates code for us that passes the receiver type as the first argument of a function, but allows us to call the function on the receiver itself.
>
> **[5:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=309)** So in our Regex example here, we're not inserting this toRegex function into the string type, but instead, the compiler is generating a version of toRegex that actually takes in the string.
>
> **[5:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=323)** But it provides some compiler magic for us and some syntactic sugar so that we can call it in this more fluent way, which looks like the method does exist on the string type.
>
> **[5:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=336)** Now we're not limited to extension functions either.
>
> **[5:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=341)** We can write extension properties as well.
>
> **[5:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=344)** The syntax is quite similar.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=348)** So if we wanted to write an extension of property on the Int integer, we could start by writing val.
>
> **[5:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=356)** And then again, we will reference the type we want to extend, in this case, Int.
>
> **[6:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=361)** And now let's say we want to add in isEven property to an integer.
>
> **[6:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=367)** So we could name that isEven and specify that it should be a Boolean type here.
>
> **[6:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=374)** Now just like methods don't insert code into the actual type, extension properties also can't insert member variables into the extended class.
>
> **[6:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=383)** So there's no efficient way to store the value in a backing field of any kind.
>
> **[6:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=390)** So to provide the property value, in this case, we must add a custom getter to our property.
>
> **[6:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=399)** Now we could do this in a number of ways.
>
> **[6:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=402)** In my case here, I'm going to hit enter and then type get with empty parenthesis, =, and we'll say this.mod 2 ==0.
>
> **[6:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=418)** The mod function here means modulous, so this is going to tell us what the remainder would be if we divided the Int receiver by two.
>
> **[7:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=429)** And if the remainder is zero, that means that the property is even.
>
> **[7:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=436)** And let me just fix this typo here, instead of is event, it should say isEven.
>
> **[7:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=442)** So now that we have our extension property, I could type the value eight here, .isEven or 7.isEven.
>
> **[7:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=455)** And if we wanted to, we could print both of these out just to verify that they show what we expect here.
>
> **[7:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=466)** And sure enough, we see eight is true, seven is false.
>
> **[7:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=471)** So each time that isEven property is accessed, this custom getter is actually going to be run behind the scenes and return a value to us.
>
> **[8:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=483)** Extension functions and properties follow the same visibility rules as any other functions.
>
> **[8:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=489)** So, if you have a common set of extensions, you could make them public or internal so they can be used by a large portion of your code base.
>
> **[8:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=498)** Or if you want to write a highly specific extension for a one off use case, you might make it private to that class or file.
>
> **[8:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=507)** Sometimes we may want to write an extension that applies to any type or to any type extending another base class.
>
> **[8:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=516)** In cases like this, we can write extension functions or properties using generics that can be reused in more places in our code.
>
> **[8:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=524)** To demonstrate this, let's create a new file, and we'll just name this file logging.
>
> **[8:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=535)** And now within this file, let's say we want to write a log function that we could call on an object of any type.
>
> **[9:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=544)** So as usual, we'll start by adding the fun keyword.
>
> **[9:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=549)** Now we need to set up our generic and we'll do this by adding angle brackets with an identifier inside of the angle brackets.
>
> **[9:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=560)** That identifier, in this case we're going to use T, represents sort of the generic type we want to use.
>
> **[9:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=568)** I like to think of T in this case, representing type, but we can use whatever letter we wanted here.
>
> **[9:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=575)** Now, we've defined that this function is going to operate with some generic type T.
>
> **[9:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=582)** Now we can define the rest of our extension function signature.
>
> **[9:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=587)** So rather than extending an explicit type like string or Int, we're going to extend the generic type T, and we're going to name this function log and it will print out the receiver object.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=604)** So effectively, we've just defined a function that we can call on any object and that object will be printed out to the console.
>
> **[10:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=613)** And because this function is public, we can now use it on any type in our project from any place in our project.
>
> **[10:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=622)** So we'll come back to Main.kt here, and just comment out the last two examples.
>
> **[10:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=631)** And now, we're going to demonstrate how we can use our new log function on any type.
>
> **[10:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=636)** So we could type 5.log here, and that'll work because our generic in this sense will be inferred to be an Int.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=646)** We could do a sample string here, .log, or we could even do something like listOf(1, 2, 3).log.
>
> **[11:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=662)** And if we run this code, we will see all three of our values printed out.
>
> **[11:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=669)** In the case of the integer, we simply see the integer printed out to the console.
>
> **[11:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=673)** For the string, likewise, we see the string printed out and for the list, we actually see the full list representation with all the values in that collection printed out.
>
> **[11:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=685)** Extension functions and properties are an essential part of Kotlin.
>
> **[11:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=689)** They have the potential to transform how we write and organize our code.
>
> **[11:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/extension-properties-and-functions?u=76281980&t=694)** By leveraging extensions, we can start to remove those helper or utils classes that are commonly found in code bases.

> [!info]- Semantic Content
>
> **Code Keywords:** function (31), type. (6), let (6), case, (5), type, (4)
> **Code Identifiers:** iseven (6), millisforhours (4), toregex (3), hourinmillis (2), listof (1)
> **File Paths:** main.kt (3), timeutils.kt (1)
> **Definitions:** is a  (1), is called (1), means that (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### Delegates
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=0)** - [Instructor] Delegation is an object-oriented design pattern that leverages object composition to achieve the same code reuse as inheritance, but in a more flexible way.
>
> **[0:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=11)** Kotlin supports delegation in two primary ways through interface delegation and property delegates.
>
> **[0:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=19)** Interface delegation allows us to delegate the implementation of an interface to some other object implementing that interface.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=27)** Let's define a Logger interface to demonstrate this.
>
> **[0:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=32)** So I'm going to create a new Kotlin file.
>
> **[0:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=37)** I'm going to select Interface.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=39)** I'm going to name that interface Logger.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=44)** Now within Logger, we will add a log method that takes in a tag and takes in any as an additional parameter.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=58)** Now we'll define a concrete implementation of that Logger interface, and we'll name that SimpleLogger.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=67)** So we'll come to New Kotlin File or Class, select Class and name that SimpleLogger.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=77)** SimpleLogger will then implement Logger.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=83)** Now we'll need to override that log method, and we'll do so using a basic println where we will print out the tag, followed by a colon.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=97)** And then we'll call two string on that any parameter.
>
> **[1:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=103)** So calling log here will give us some tag for an identifier and give us a string representation of whatever other object was passed into the log function here.
>
> **[1:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=113)** So while SimpleLogger is pretty straightforward, just printing out to the console, it does fully implement Logger.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=121)** so we can use it as a delegate for other classes needing to implement that Logger interface.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=129)** So let's come back and once again, create a new class here.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=135)** And this time, we're going to call this class ApplicationLogger.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=142)** ApplicationLogger will take no parameters to start within its construction, but it will implement Logger.
>
> **[2:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=155)** And at the moment, we see some compiler errors, because we haven't yet finished implementing Logger.
>
> **[2:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=161)** However, rather than implement the Logger interface directly, we're going to delegate that implementation to some other instance of a Logger.
>
> **[2:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=173)** To do this, we are going to add a parameter to our constructor.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=179)** So we'll define this as a private val, and we'll name it delegate.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=186)** And it will be of type Logger.
>
> **[3:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=190)** Now we can use the delegate property as our delegate for the Logger interface.
>
> **[3:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=196)** And we can do this by coming to the end of our class declaration here, right after we've specified Logger as an interface to implement, and we can say by and delegate.
>
> **[3:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=210)** By doing this, the compiler will take care of routing calls to ApplicationLogger dot log and passing those on to delegate dot log.
>
> **[3:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=222)** If we come to our main function here, we could create an instance of ApplicationLogger.
>
> **[3:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=231)** We'll call it appLogger.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=234)** And we will pass in an instance of SimpleLogger.
>
> **[4:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=240)** And now if we call appLogger dot log, we'll pass in a tag of example, and maybe we'll just pass in the appLogger itself as the extra parameter.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=256)** If we run this code, we will see that we have our output with the tag and the string representation of the extra parameter that was passed into it, in this case, appLogger.
>
> **[4:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=273)** So by passing in that instance of SimpleLogger as the delegate property of ApplicationLogger, we were able to forward all calls to ApplicationLogger dot log over to SimpleLogger dot log.
>
> **[4:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=291)** This approach is quite powerful when composing behaviors from multiple interfaces.
>
> **[4:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=297)** We can even delegate multiple interfaces on a single type.
>
> **[5:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=301)** Now, in addition to interface delegation, Kotlin supports delegation of properties as well.
>
> **[5:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=308)** We can define our own custom property delegates for specific use cases we might have.
>
> **[5:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=314)** But Kotlin also includes several built-in property delegates for common scenarios.
>
> **[5:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=320)** The lazy delegate allows us to defer initialization of a property until the time it's first accessed.
>
> **[5:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=328)** So let's demonstrate this.
>
> **[5:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=330)** Let's imagine that we have a ViewModel class.
>
> **[5:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=333)** So we'll just create that class quickly here.
>
> **[5:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=337)** And we will name it ViewModel.
>
> **[5:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=344)** And let's say that we want ViewModel to have a Logger property, so we can log interactions within the ViewModel.
>
> **[5:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=354)** So within the class body here, we will define a Logger property of type Logger.
>
> **[6:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=361)** And now notice the compiler is giving us an error here telling us that we need to initialize this property or make it abstract.
>
> **[6:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=369)** So we're going to look to initialize this by using the lazy delegate.
>
> **[6:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=374)** Now, to define Logger as a read-only property, we have to initialize it.
>
> **[6:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=380)** That's what the compiler error is telling us here.
>
> **[6:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=383)** But sometimes, objects are expensive to initialize, because they might take up a lot of memory, CPU, maybe even both.
>
> **[6:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=392)** For cases like this, we might want to avoid creating the object unless it's actually needed.
>
> **[6:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=399)** However, that creates kind of a chicken and the egg problem.
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=403)** If we want it to be a read-only property, we have to initialize it.
>
> **[6:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=407)** But we might not want to initialize it unless we absolutely need it.
>
> **[6:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=412)** So in cases like this, to defer the instantiation of our property until it's first use, we can use the lazy delegate.
>
> **[7:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=424)** To apply this lazy delegate, we come to our property declaration here.
>
> **[7:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=431)** And after the type, we add by lazy.
>
> **[7:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=436)** So in this case, lazy takes a Lambda.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=441)** And within that Lambda, we can then define the code to run when initializing the Logger.
>
> **[7:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=450)** So just to demonstrate this, we will add a print statement here that just says something like initializing the Logger.
>
> **[7:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=466)** And then we will create a new instance of ApplicationLogger.
>
> **[7:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=472)** So whenever ViewModel dot Logger is accessed for the first time, this Lambda will run, and a new instance of ApplicationLogger will be created.
>
> **[8:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=484)** Now, to finish rounding out our ViewModel here, we're going to create a method called search.
>
> **[8:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=492)** And search will take in a query of type string.
>
> **[8:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=497)** And within that method, we will use that Logger to log out whatever the query is being passed in.
>
> **[8:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=508)** Now let's test this all out.
>
> **[8:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=510)** Let's come back to our main function here.
>
> **[8:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=513)** We'll comment out the previous example.
>
> **[8:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=517)** And now we're going to create a new instance of our ViewModel.
>
> **[8:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=522)** If we run our code at this point, we shouldn't see any type of output indicating that our Logger has been created, because the Logger property hasn't been accessed yet.
>
> **[8:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=535)** However, if we use the search method to say search for Kotlin here, and we rerun our code, this time, we see initializing the logger printed out to the console, and then we see the actual log output.
>
> **[9:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=556)** So what this indicates to us here is that, in fact, when search is called, we access the Logger for the first time, which then calls the lazy delegate here which prints out the initialization statement and then creates that new instance of the Logger for us.
>
> **[9:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=578)** If we were to search then a second time, this time, we'll just search for the word code, and we run our code again.
>
> **[9:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=590)** We see that initialization output printed just once still the first time Logger is accessed.
>
> **[9:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=598)** And then on the second call to search, we don't see any additional initialization output, because the Logger has already been initialized the first time.
>
> **[10:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=610)** Another property delegate Kotlin provides is an observable delegate that lets us monitor and respond to changes in a property.
>
> **[10:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=619)** So let's return to our ViewModel here.
>
> **[10:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=622)** And we are going to create a new property here called currentQuery of type string.
>
> **[10:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=633)** And currentQuery is going to be a mutable variable.
>
> **[10:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=637)** The idea is anytime we call search, we will update this currentQuery property.
>
> **[10:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=643)** Now, to help monitor changes in this query, we're going to use an observable delegate and print out all property value changes.
>
> **[10:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=654)** To set up the delegate, we'll again come to the property declaration here, type by.
>
> **[11:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=660)** And then we'll type Delegates dot observable.
>
> **[11:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=667)** Now this observable method here requires us to pass in an initial value.
>
> **[11:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=673)** So in this case, we'll pass in an empty string as our initial query.
>
> **[11:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=679)** And then we also need to provide a Lambda.
>
> **[11:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=684)** Within this Lambda, we'll be given three things: the property, the oldValue and the newValue.
>
> **[11:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=694)** So anytime our currentQuery property changes, this Lambda will be called back, and we can use those past arguments to do whatever we like.
>
> **[11:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=704)** In this case, we are going to simply print out these changes.
>
> **[11:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=710)** So we will print oldValue and some separator here followed by newValue.
>
> **[12:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=720)** And then to actually make use of this property, we'll come down to our search method, and we will update currentQuery anytime search is called.
>
> **[12:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=736)** Now, if we come back to main here, we'll see that we are still calling search twice.
>
> **[12:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=743)** So if we run our code, we can observe the outputs here.
>
> **[12:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=750)** So again, we see initializing the logger, which is coming from our lazy delegate setting up the Logger itself.
>
> **[12:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=757)** Then we see query, Kotlin, that's from the Logger logging out the search call.
>
> **[12:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=765)** Then we see an empty string being transitioned into Kotlin.
>
> **[12:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=768)** So that is that transition from our initial currentQuery into the updated currentQuery when the first search is called.
>
> **[12:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=777)** Then we see the query log for code.
>
> **[13:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=781)** And then we see the value of currentQuery changing from Kotlin to code.
>
> **[13:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=786)** So each time that currentQuery is changed, we are in fact seeing this output logged to the console.
>
> **[13:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/delegates?u=76281980&t=794)** By leveraging both interface and property delegation, we can build complex behaviors with minimal code.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (14), let (8), lambda (6), this, (5), pass (5)
> **Code Identifiers:** currentquery (9), applogger (4), oldvalue (2), newvalue (2)
> **Definitions:** is called (3), is an  (2)
> **Prerequisites:** initialization (4), set up (1)
> **CLI Commands:** make (2)
> **Env Vars:** cpu (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Refactor a helper class to use top-level functions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=0)** - [Instructor] Let's work through another coding challenge.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=7)** In this challenge, we'll work through an example of refactoring a helper class into more idiomatic, top-level functions.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=16)** For this exercise, we have this class ListUtils which includes two methods within a companion object.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=25)** This class can be used from our main function here to create a nonEmptyList or to convert a set into a nonEmptyList.
>
> **[0:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=38)** And just to be clear, a nonEmptyList in this case is a list that is guaranteed to have at least one item in it.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=48)** So if we return to ListUtis, we can see the implementation of each of these methods within ListUtils.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=57)** Your challenge then is to refactor this code to leverage top-level, extension functions.
>
> **[1:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=66)** And ultimately we should be able to remove the ListUtils class altogether and the two methods will instead live as extension functions on the List type.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1), type. (1)
> **Code Identifiers:** nonemptylist (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Refactor a helper class to use top-level functions
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=0)** - [Instructor] Let's take a look at one possible solution for refactoring our ListUtils helper class to top level extension functions.
>
> **[0:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=15)** So I've opened up into ListUtils KT here.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=18)** And to start, I know that I want to ultimately move the functions out of the ListUtils class.
>
> **[0:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=27)** So I'm just going to hit enter a few times and make some space above that class where I'll write new functions.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=36)** Next, let's think of how to structure these updated functions.
>
> **[0:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=42)** The non empty list function acts much like a constructor, taking in an array of elements and returning a list of elements or throwing in exception if there isn't at least one element.
>
> **[0:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=59)** So, the way we might go about converting this into a top level function is to write an extension function on the array type.
>
> **[1:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=71)** We could do that by typing fun.
>
> **[1:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=77)** We'll use a template here to represent an array of any type.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=83)** And then we will define array of that generic type T.
>
> **[1:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=89)** And then we will name this extension function NonEmptyList.
>
> **[1:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=96)** And it will return a list of that generic type T.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=102)** To complete the implementation, we can then reuse the previous function body.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=109)** We simply need to remove the references to the items parameter and replace it with implicit calls to the extended receiver.
>
> **[1:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=119)** So we'll come down here to NonEmptyList, copy that code, and paste it back up here in our extension.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=130)** And we can simply remove that reference to the array because we're extending the array in this case.
>
> **[2:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=142)** So now if we come back to main KT here, we could replicate the behavior in the first example by doing array of 1, 2, 3, dot toNonEmptyList.
>
> **[2:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=165)** Oops.
>
> **[2:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=168)** Just nonEmptyList.
>
> **[2:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=171)** There we go.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=172)** So now, rather than having to reference ListUtils, calling the method and then passing the array to it, we simply create the array and then call the non empty list extension method.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=184)** The second function can then be refactored in much the same way.
>
> **[3:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=189)** So in this case, we're going to write our function to extend a generic set.
>
> **[3:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=197)** So again, we'll use a templated value here.
>
> **[3:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=200)** And we will extend set of that generic type.
>
> **[3:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=207)** Having set in the name of a function extending set is a bit redundant.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=212)** So for this function, we are going to change the name a little bit and we'll just change that name over to toNonEmptyList.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=225)** And it will also then return a list of T.
>
> **[3:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=229)** And once again, we can reuse the previous method body for our new function.
>
> **[3:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=239)** And again, this time we are extending the set type, so we don't need to reference set explicitly and instead it will be an implicit reference based on the receiver of set of generic T.
>
> **[4:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=256)** Now, if we come back over to main.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=259)** Like we did with the first example, we could now little bit more fluently generate a non empty list from a set by generating the set first.
>
> **[4:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=270)** In this case, A, B, and C.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=275)** And then calling toNonEmptyList on that set.
>
> **[4:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=282)** And now finally, because we have these top level extension functions that replace the functionality of the previous methods, we can go ahead and remove those methods.
>
> **[4:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=296)** And then, because there's nothing left there, we can go ahead and remove that ListUtils class.
>
> **[5:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=304)** So how did this compare to your solution?
>
> **[5:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-refactor-a-helper-class-to-use-top-level-functions?u=76281980&t=309)** As you compare solution, also think about design trade offs, such as visibility of the functions or potential naming conflicts.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), type. (3), let (2), class. (2), case, (2)
> **Code Identifiers:** tononemptylist (3), nonemptylist (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Writing Asynchronous Code with Kotlin Coroutines

> [↑ Back to Table of Contents](#table-of-contents)

#### Threads, thread pools, and executors
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=0)** - [Instructor] Writing multi-threaded code is one of the biggest challenges in software development.
>
> **[0:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=6)** Part of the challenge is choosing which sets of APIs and abstractions to work with.
>
> **[0:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=12)** In Kotlin, we have several options and we're going to start by reviewing core concurrency APIs from Java that are still available and viable in our Kotlin code.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=23)** Threads are fundamental elements of concurrency in Java or Kotlin programs.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=30)** A thread represents a thread of execution by the processor.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=34)** Having multiple threads can allow for multiple instructions to be carried out in parallel.
>
> **[0:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=40)** To create a thread, we can extend the thread class.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=45)** So here we'll create a class named custom thread and it will extend the thread class.
>
> **[0:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=54)** Now within our custom thread, we can override the run method to define what work should be executed when the thread is started.
>
> **[1:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=67)** In this case, we simply want to print out a message indicating that our code is running from this thread.
>
> **[1:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=74)** So we will simply add a print statement here that says customthread.run.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=83)** To start our thread then, we can come down into our main function and we can create a new instance of custom thread and then call the start method on that thread.
>
> **[1:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=97)** And if we then run our code, we'll see that customthread.run is printed out to the console.
>
> **[1:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=106)** Now, why do we care about threads?
>
> **[1:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=110)** Well, modern applications often require multiple streams of processing at any given time.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=116)** We may need to respond to user input and draw user interface while also monitoring for background location or listening to an open socket.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=125)** Doing all this work on the same thread can slow down our applications.
>
> **[2:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=129)** By doing work in parallel across multiple threads, we can make better use of the processing power of modern CPUs.
>
> **[2:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=137)** Take our current example.
>
> **[2:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=139)** How many threads do you think are currently running when we run our main function?
>
> **[2:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=144)** If you guessed two, you're right.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=147)** Let's print the name of the current thread, both at the beginning of our main function and within our custom thread run method.
>
> **[2:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=156)** So first we'll come into a main here and we will use print LN again and to get the name of the current thread, we can type thread.currentthread and access the name property from that current thread.
>
> **[2:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=172)** And now we will copy that code and we will add that to our custom thread run method as well.
>
> **[3:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=184)** Now if we run this code one more time, we can examine the output and we see that by default, our main function runs on a thread named main while our custom thread is running on a thread called thread-0.
>
> **[3:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=204)** So this highlights for us the fact that we have multiple threads being run at the same time when we execute our main function.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=212)** Now if we wanted to change the name of our custom thread here to make it easier to identify, we could pass a string to the thread constructor.
>
> **[3:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=221)** So we could call this custom thread.
>
> **[3:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=225)** And if we run this again, we'll see that thread-0 has been renamed to custom thread, making it easier to understand what's going on here.
>
> **[3:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=237)** Threads implement an interface called runnable.
>
> **[4:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=241)** By implementing the runnable interface, non-thread classes can be passed to a thread for execution.
>
> **[4:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=249)** This gives more flexibility in how we structure our code since Kotlin supports implementing multiple interfaces but not multiple inheritance.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=259)** So let's create a custom runnable and demonstrate this example.
>
> **[4:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=264)** So again, we'll create a new class here and we will call this one custom runnable and it will implement the runnable interface.
>
> **[4:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=275)** And because it's an interface, we will need to override the run method in this case.
>
> **[4:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=283)** And for the output of this run method, we will simply print out custom runnable.run.
>
> **[4:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=292)** Very similar to what we did in our custom thread.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=295)** We can then execute this custom runnable by creating a new thread.
>
> **[5:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=302)** So we'll come down here inside of our main function, create an instance of a new thread, and then when we invoke that thread construction we will pass an instance of custom runnable to it.
>
> **[5:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=315)** And then once again, call the start method.
>
> **[5:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=319)** Now just before I print this out, I am going to comment out the previous call to custom thread.start.
>
> **[5:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=330)** And now when we run our code, we will see that custom runnable.run is printed out to the console when we create that new thread and start it while passing in the runnable to define the behavior that should be run.
>
> **[5:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=348)** In a production code base, we typically want to avoid creating raw threads in this manner.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=355)** A thread is directly tied to real system resources.
>
> **[6:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=360)** Create too many and you could degrade the performance of your entire system.
>
> **[6:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=365)** To help with the managing of threads in a complex application, we can leverage thread pools.
>
> **[6:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=371)** A thread pool is a pattern in which runnable work is submitted to a processing queue to be run on some managed set of threads.
>
> **[6:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=380)** It could be a single thread, two threads, or many threads.
>
> **[6:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=385)** In Java, executors can be used to work with thread pools.
>
> **[6:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=392)** We can create a new single thread executor that will manage a single thread for us and create a new thread if the current one is terminated.
>
> **[6:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=403)** To do this, we'll create a property here called executor equals executors.newsinglethreadexecutor.
>
> **[7:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=420)** Runnable can then be submitted to be run by the thread pool as threads become available.
>
> **[7:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=427)** So we could access our new executor property here and call submit on it and pass in a new instance of custom runnable.
>
> **[7:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=441)** So now, if we comment out the previous call to our custom runnable and we run our code again, we'll see custom runnable printed out to the console, because that single thread executor handles submitting that runnable and running it on the first available thread.
>
> **[7:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=464)** If we need a pool with more than one thread, say for making simultaneous network requests, we can create a fixed thread pool using executors new fixed thread pool.
>
> **[7:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=477)** So let's create another property here, this time called multithread executor and assign it the value of executors.newfixedthreadpool.
>
> **[8:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=494)** And we will pass in three.
>
> **[8:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=496)** So in this case, this thread pool will have a maximum number of threads of size three.
>
> **[8:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=501)** So this means we could have up to three concurrent operations being performed at the same time using this thread pool.
>
> **[8:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=509)** So now if we submit multiple runnables, they will be spread across the available threads in that pool.
>
> **[8:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=518)** To visualize this ,let's print the name of the current thread within our custom runnable.
>
> **[8:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=524)** So like we did with custom thread, we will print out the result of calling thread.currentthread.name.
>
> **[8:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=535)** Then we can come back down into our main function.
>
> **[8:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=539)** We'll comment out the previous example and we're going to create a loop to submit multiple instances of our custom runnable.
>
> **[9:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=549)** So we will write a simple forward loop here for i in range of 0 to 10, and then for each iteration, we're going to submit a new instance of custom runnable to our fixed thread pool of size three.
>
> **[9:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=570)** If we then run this code, we'll see that in the output, we have three different named threads.
>
> **[9:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=579)** We see pool-2-thread-1, pool-2-thread-2, pool-2-thread-3, and those three threads are then repeated each time through the iteration.
>
> **[9:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=591)** So the thread pool is managing spreading the submitted runnables across those threads as the threads finish their work and become available.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=604)** Now, just remember our application code runs within threads which are tied to real system resources.
>
> **[10:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=612)** Do too much work on a single thread, and application performance may negatively impacted as that thread can become blocked or deadlocked.
>
> **[10:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=622)** To avoid this, modern applications are typically multi-threaded, spreading work across multiple threads at the same time.
>
> **[10:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=630)** Managing these threads and calculations are one of the biggest challenges in software development.
>
> **[10:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=636)** This only scratches the surface of the full set of Java concurrency APIs.
>
> **[10:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/threads-thread-pools-and-executors?u=76281980&t=640)** However, the concepts of threads and of thread pools are quite helpful in building a foundation for understanding Kotlin coroutines which we will explore later.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), interface (5), let (4), pass (4), class. (2)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Understanding coroutines
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=0)** - [Instructor] Coroutines are Kotlin's primary abstraction for writing multithreaded asynchronous code.
>
> **[0:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=7)** Understanding the core concepts behind coroutines will help us in learning how to use Kotlin's coroutine APIs in our application code.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=18)** Coroutines are not a new concept.
>
> **[0:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=20)** The term coroutines was coined in the 1950s as a means of describing a subroutine that could be suspended and resumed.
>
> **[0:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=30)** This concept has since been implemented in many languages, including C++, C#, Rust, and of course Kotlin.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=41)** In Kotlin, the Standard Library provides a few low-level APIs for coroutines, while most of the functionality is provided by the kotlinx.coroutines library.
>
> **[0:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=57)** The library is actually publicly available on GitHub and can be viewed as a great resource for getting started or for learning more about coroutines implementation.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=69)** In Kotlin, coroutines can be thought of as lightweight threads.
>
> **[1:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=75)** Like a thread, a coroutine allows us to run a block of code in parallel with other threads and coroutines.
>
> **[1:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=84)** However, unlike threads, coroutines are not directly tied to system resources.
>
> **[1:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=90)** A single thread may support multiple coroutines at the same time.
>
> **[1:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=95)** Because coroutines support suspension and resuming, they can be called from one thread, suspended, resumed on another thread, and so on, all in a non-blocking way.
>
> **[1:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=109)** Now to help manage all those coroutines and to avoid leaking resources, coroutines in Kotlin support the concept of Structured Concurrency.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=121)** Coroutines are launched into hierarchical scopes.
>
> **[2:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=125)** Those scopes essentially control the lifecycle of a coroutine.
>
> **[2:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=130)** Scopes can then be nested within one another as well to create parent-child relationships of concurrent coroutines.
>
> **[2:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=140)** Coroutines, and by extension coroutine scopes, support cancellation of work.
>
> **[2:26](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=146)** A single coroutine may be canceled, or an entire scope may be canceled.
>
> **[2:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=151)** Cancellation of a coroutine or a coroutine scope generally leads to the immediate cancellation of all child coroutines as well.
>
> **[2:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=160)** This structure is particularly helpful when managing asynchronous calls across multiple screens or API requests.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=169)** We can define scopes associated to specific API requests, or application screens, or other objects, and then clean up any and all launched coroutines by canceling that scope.
>
> **[3:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=183)** When a coroutine is launched, by default it will run on the thread associated with the context of the current coroutine scope.
>
> **[3:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=192)** However, we can also easily change the context or the thread that that coroutine runs on.
>
> **[3:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=199)** This gives us a great deal of flexibility in how our coroutines execute.
>
> **[3:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=205)** We can create our own coroutine context to provide custom threads for our coroutine.
>
> **[3:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=212)** Or we can use a predefined set of contexts, such as [dispatchers.io](https://dispatchers.io).
>
> **[3:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=220)** A common example in mobile development would be to launch a coroutine that runs on the main thread, process a network request or database access on a worker thread, and then update the UI back on the main thread.
>
> **[3:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=235)** While coroutines are simple in concept, they are still an abstraction around the inherently complex problem of concurrent programming.
>
> **[4:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/understanding-coroutines?u=76281980&t=245)** Keeping these core concepts in mind will help when learning to use Kotlin's coroutine APIs later on.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **URLs:** [dispatchers.io](https://dispatchers.io) (1)
> **Tools:** github (1)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Working with coroutines
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=0)** - [Instructor] By leveraging the co-routine APIs from Kotlin X co-routines, we can start building multithreaded code using a few basic APIs.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=10)** Let's jump in and learn how to start leveraging co-routines for asynchronous programming in Kotlin.
>
> **[0:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=16)** To start leveraging the co-routine APIs, we need to add the co-routine's dependency to our project.
>
> **[0:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=22)** So if we go to our project window on the left side of the screen here and open our build.gradle.kts file, we should see that the coroutines dependency has already been added.
>
> **[0:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=36)** If it hasn't, you're looking for KotlinX-coroutines- core version 1.6.0.
>
> **[0:45](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=45)** Now, once this dependency has been added and the Gradle old project has been synced, we should be ready to use the coroutine APIs.
>
> **[0:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=55)** So we'll come back over to our main.kt file here and we should now be ready to launch our very first coroutine.
>
> **[1:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=64)** To launch a coroutine, we need access to a coroutine scope.
>
> **[1:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=70)** The easiest way to access a scope is by using globalscope.
>
> **[1:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=78)** This scope is active for the lifetime of our application.
>
> **[1:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=83)** Because of this, we should be careful to only use it for coroutines that should truly persist across the entire life cycle of our program.
>
> **[1:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=93)** In our case, we're simply going to launch a new coroutine into global scope to print out a message.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=102)** We can do this by calling the launch method on the scope and then we will use print LN to print out hello coroutines.
>
> **[1:56](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=116)** Now, if we run this code, you might notice that we don't see our message printed out to the console.
>
> **[2:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=126)** Why do you think that might be?
>
> **[2:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=130)** The answer is that we are printing our message from a coroutine that runs asynchronously.
>
> **[2:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=136)** So we launch the coroutine and our main function then immediately completes because there's nothing left for it to do within that thread of execution.
>
> **[2:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=147)** If we come down to the bottom of our main function and we add a call to thread.sleep
>
> **[2:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=159)** and then we rerun our code, this time we see our hello coroutines output printed to the console.
>
> **[2:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=169)** Why does this work?
>
> **[2:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=170)** Well, the call to thread.sleep will block the main thread from completing for one second.
>
> **[2:59](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=179)** This gives our coroutine time to execute before the main function completes.
>
> **[3:06](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=186)** This highlights the fact that the threads that coroutines operate on still behave as normal threads of execution, even if we launch coroutine into them.
>
> **[3:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=198)** Now an easier way to prevent our program from completing early is to use the run blocking function.
>
> **[3:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=207)** Now to update our code to support this run blocking function, we will come up to our main function declaration, and after the parenthesis list, we'll add a colon.
>
> **[3:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=223)** We'll explicitly return the unit type and then we'll say equals run blocking.
>
> **[3:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=230)** And when prompted, we will import that.
>
> **[3:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=234)** And now because we're using this run blocking method, any coroutines launched within the scope provided by run blocking will be completed before our main function completes.
>
> **[4:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=248)** Now, this also means that we can launch our coroutine without the use of global scope.
>
> **[4:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=259)** So now when we launch our coroutine, it'll launch into the run blocking scope, it will complete its output, and then our main function will complete.
>
> **[4:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=269)** And if we run this, sure enough, we see hello coroutines printed out and then immediately our program terminates.
>
> **[4:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=281)** Now we're going to jump over to the refresh home KT file for another example.
>
> **[4:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=288)** So we'll open up our project window here, find a refresh home, and open that file.
>
> **[4:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=295)** And then we'll go ahead and close the project window, close our main file and any other remaining files we might have open.
>
> **[5:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=303)** So within refresh home here, we are simulating the loading of data from the home screen in an application.
>
> **[5:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=311)** We need to load data from three different sources, tasks, reservations, and a user endpoint.
>
> **[5:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=318)** So we have functions to simulate each of those, we have a refresh tasks function, a refresh reservations, and a refresh user.
>
> **[5:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=328)** Additionally, we have a couple other functions here for updating the UI and eventually canceling all this work.
>
> **[5:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=334)** We'll get to those shortly.
>
> **[5:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=337)** If we look at our main function here, we are launching a new coroutine here by calling run blocking and then we are calling each of those refresh tasks one after the other.
>
> **[5:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=350)** Now if we run this code, we'll notice a couple of things.
>
> **[5:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=355)** The calls are carried out sequentially and they all run on the same thread.
>
> **[6:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=361)** In this case, the main thread since that's the thread that called run blocking.
>
> **[6:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=368)** Within the same coroutine, code will execute sequentially by default.
>
> **[6:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=374)** However, we can change that by launching new coroutines within a scope.
>
> **[6:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=382)** Let's wrap the calls to refresh tasks and refresh reservations in another launch call and see what happens.
>
> **[6:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=392)** So we will come down into our main function.
>
> **[6:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=396)** We will call launch, and then we will move refresh tasks and refresh reservations into that new launch call.
>
> **[6:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=406)** Now if we run this code again, let's see what happens.
>
> **[6:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=410)** This time we see the call to refresh user completes first because the other two were launched into a separate child coroutine which then takes a little bit of time to run.
>
> **[7:03](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=423)** Also worth noticing here that each of these calls were still run in the same underlying thread, the main thread.
>
> **[7:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=432)** To change the thread on which a coroutine will ultimately be executed, we have a couple of options.
>
> **[7:19](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=439)** The easiest way is to specify a new coroutine context when launching the coroutine.
>
> **[7:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=447)** In this case, we can do this quite easily by passing [dispatchers.io](https://dispatchers.io) to our call to launch.
>
> **[7:40](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=460)** This will move the tasks and reservation calls onto a worker thread.
>
> **[7:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=467)** When we rerun this code, we now see those two calls being called from a different thread.
>
> **[7:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=478)** Another option for moving work onto a different thread within a coroutine is to use with context.
>
> **[8:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=487)** Let's imagine we want to update the application UI after the tasks and reservation calls are finished.
>
> **[8:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=496)** We can call with context and then pass in the context provided by the run blocking function to move the work back to the original thread.
>
> **[8:27](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=507)** So within our launch call to [dispatchers.io](https://dispatchers.io), we'll make a call to with context.
>
> **[8:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=515)** And now we want to reference the coroutine scope provided by run blocking, and we can do this by typing this@runblocking.coroutinecontext,
>
> **[8:50](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=530)** and then we need to provide a Lambda to control what should actually be run.
>
> **[8:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=537)** And in this case, we'll make our call to the update UI method.
>
> **[9:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=542)** So once the two refresh calls are completed, we'll then use with context to call the update UI method in whatever context run blocking provided.
>
> **[9:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=553)** So effectively what this has done is let us run the refresh calls on an IO thread, and then move the update call back to the main thread.
>
> **[9:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=562)** This type of pattern is very common in mobile development.
>
> **[9:28](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=568)** If we go ahead and run this real quick, we'll then see that the refreshing of user happens on the main thread.
>
> **[9:37](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=577)** Then our refreshing tasks and refreshing reservations calls happen on a worker thread and finally, updating the UI completes back on the main thread.
>
> **[9:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=589)** Now we've touched on the fact that code within a coroutine runs sequentially.
>
> **[9:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=595)** We can better demonstrate this by simulating long running operations with the delay suspending function.
>
> **[10:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=604)** Delay is similar to thread.sleep, but it only suspends the coroutine.
>
> **[10:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=612)** It doesn't block the entire thread.
>
> **[10:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=615)** So let's come up to our tasks and our reservations functions and add a call to delay and pass in a value of 3000.
>
> **[10:24](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=624)** So the idea here is that we will delay for three seconds.
>
> **[10:32](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=632)** Now as soon as we add that call to a delay, we get an error.
>
> **[10:36](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=636)** If we hover over that error, we'll see suspend function delay should be called only from a coroutine or another suspending function.
>
> **[10:46](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=646)** So this error stems from the fact that delay is a suspending function.
>
> **[10:51](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=651)** The suspend keyword indicates that a function can suspend operation of a coroutine to then be resumed at a later time.
>
> **[11:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=661)** Suspending functions can only be called from within a coroutine or from some other suspending function.
>
> **[11:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=668)** So to call delay in refresh tasks or refresh reservations, we need to add the suspend keyword to each of those functions.
>
> **[11:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=683)** As soon as the suspend keyword is added, that compiler error goes away.
>
> **[11:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=691)** If we run our code now, we can clearly see the delays operating sequentially, three seconds for the first function to complete, and three more for the second.
>
> **[11:43](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=703)** While this code is not blocking the underlying thread, it's still not as efficient as we could make it if we parallelized the work.
>
> **[11:55](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=715)** For that, we can leverage another coroutine builder, async.
>
> **[12:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=721)** Async, like launch, allows us to create a new coroutine, but async returns to us a deferred value which can then be later used to get a result.
>
> **[12:14](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=734)** And we can run multiple async coroutines at the same time and proceed only when all results are available.
>
> **[12:22](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=742)** So to demonstrate this, we are going to grab the code within our launch and just move it back out of the launch.
>
> **[12:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=753)** Now we're going to refactor this then to use a couple different calls to async.
>
> **[12:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=758)** So to start, we're going to create a variable called tasks and then we are going to call async on it.
>
> **[12:47](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=767)** And we're going to move our call to refresh tasks inside that call to async.
>
> **[12:54](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=774)** So now the tasks variable here is going to hold a deferred value that will eventually calculate the result of refresh tasks.
>
> **[13:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=784)** And similar here, I'm going to create a variable called reservations, and same thing.
>
> **[13:11](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=791)** We will move the refresh reservations call inside that call to async.
>
> **[13:20](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=800)** So now we have references to both of these deferred computations and we want to suspend completion of this coroutine until both of those operations complete.
>
> **[13:35](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=815)** So to do that, we can call await all and we will pass in both of those deferred values.
>
> **[13:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=824)** So calling await all here will suspend the coroutine until both deferred values are finished and only then will we call with context to update our UI.
>
> **[13:57](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=837)** So now if we run this, we see an initial delay, and then we see that both the refresh tasks call and the refresh reservations call complete at more or less the same time.
>
> **[14:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=852)** So now instead of having those three second delays executed serially, they happen in parallel so they complete together And then we go on to finish updating our UI.
>
> **[14:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=865)** Now notice here that refreshing the user happened last as well.
>
> **[14:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=871)** This is because we removed that other call to launch.
>
> **[14:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=874)** So now, because we are within the same run blocking coroutine, refresh user is going to be run serially after the await all call is completed.
>
> **[14:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=888)** The last thing we're going to touch on is coroutine cancellation.
>
> **[14:53](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=893)** Whether we start a coroutine using launch or async, we can cancel that coroutine and its children by calling cancel on the coroutine's job.
>
> **[15:04](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=904)** A job is a part of a coroutine scope and can be used to remember a coroutine and cancel it.
>
> **[15:12](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=912)** The launch builder returns a job.
>
> **[15:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=915)** So all we need to do is assign it to a variable and we can use it for cancellation.
>
> **[15:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=921)** So let's come down here to our refresh user call and we are going to make this call from within a launched coroutine.
>
> **[15:31](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=931)** So we'll create a variable here called job and assign it the result of calling launch.
>
> **[15:38](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=938)** And then we'll just move that call to refresh user within the launch.
>
> **[15:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=942)** So now we have this reference to a job, and if we wanted, we could call job.cancel here to cancel this work so that refresh user call was never completed.
>
> **[16:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=961)** And if we run this code, we will see that once our UI is updated, we never see the output indicating that the user was refreshed.
>
> **[16:13](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=973)** This is because as soon as we get a reference to the launched job for refreshing the user, we're immediately canceling it.
>
> **[16:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=983)** And this can be extended to multiple coroutines at the same time.
>
> **[16:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=989)** So let's just say for fun, we wanted to take all of our syncing and UI updates and move those into another launched coroutine.
>
> **[16:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=999)** So we could create another variable here called job2 and launch a new coroutine for all of that work.
>
> **[16:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1009)** If we then wanted to cancel all of this work together, we could make use of this cancel everything function that we had previously defined.
>
> **[17:02](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1022)** This will take in a number of jobs, and then we can iterate over each job to cancel them together.
>
> **[17:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1030)** So if we call cancel everything, pass in job and job2, now if we run our code, we see that nothing at all is printed out.
>
> **[17:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1045)** So this ability to get a reference to the work from a launched routine and to cancel all of the work being done within that given scope and within its child scopes is very powerful.
>
> **[17:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1059)** It gives us a lot of ability to ensure that we're not doing more work than is needed to make sure that work is scoped properly to different components in our applications.
>
> **[17:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1072)** Now, there's much more to learn when it comes to coroutines but here we've covered the core essentials.
>
> **[17:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1078)** As you continue to explore coroutines, be mindful of the coroutine's scope you're launching your coroutine into, and the thread on which it'll be running.
>
> **[18:08](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/working-with-coroutines?u=76281980&t=1088)** Being careful with those things will go a long ways towards helping you write effective async code with coroutines.

> [!info]- Semantic Content
>
> **Code Keywords:** function (20), async (10), let (8), this, (4), case, (4)
> **CLI Commands:** make (6), find (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** build.gradle (1), main.kt (1)
> **URLs:** [dispatchers.io](https://dispatchers.io) (2)
> **Versions:** version 1 (1), 6.0 (1)
> **Analogies:** imagine (1), similar to (1)
> **UI Navigation:** go to (1)

#### Challenge: Manage multiple async requests
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=0)** - [Instructor] Let's get some hands-on practice with coroutines.
>
> **[0:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=9)** In this challenge, your task is to use coroutines to parallelize the execution of two suspending functions.
>
> **[0:17](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=17)** We have load items from DB and load items from network.
>
> **[0:23](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=23)** These functions simulate making blocking requests to a database into the network.
>
> **[0:29](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=29)** Your task is to use the async coroutine builder to run both functions at the same time and then to use deferred data wait, to get the results of both async calls.
>
> **[0:41](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=41)** Convert those results into a unified list and print out that unified list to the console.
>
> **[0:48](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/challenge-manage-multiple-async-requests?u=76281980&t=48)** The resulting code should run in approximately five seconds if the coroutines are running in parallel.

> [!info]- Semantic Content
>
> **Code Keywords:** async (2), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Manage multiple async requests
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=0)** - [Instructor] All right, let's walk through a solution to our concurrent coroutines challenge.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=10)** To run our load functions in parallel and get back our result, we want to leverage the async coroutine builder.
>
> **[0:18](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=18)** So we will come into our main function here and we'll start by creating a variable called db that will hold the deferred result from loading the items from the database.
>
> **[0:33](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=33)** So we'll make a call to async and within that launched async coroutine, we will call loadItemsFromDB.
>
> **[0:44](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=44)** We'll then repeat this process for the network function.
>
> **[0:49](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=49)** So we'll create a variable called network equals async loadItemsFromNetwork.
>
> **[0:58](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=58)** Now we have two variables holding deferred results, DB and Network.
>
> **[1:05](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=65)** These deferred values act like futures in other languages.
>
> **[1:09](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=69)** They represent a handle to a value that will be returned in the future.
>
> **[1:16](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=76)** To get access to that future value, and suspend the parent coroutine until that happens, we can call await.
>
> **[1:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=85)** We're going to create a variable called results and assign it the resulting calculation of calling db.await plus network.await.
>
> **[1:42](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=102)** So what this is going to do is await for each of those deferred results and once each one has completed, it will concatenate the returned lists together, and give us back a unified list of results in our results variable.
>
> **[2:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=121)** While we wait for those results, the parent coroutine will be in a suspended state.
>
> **[2:07](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=127)** Once we have our results list, we can go ahead and print out each of those results.
>
> **[2:15](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=135)** So since these results are representing programming languages, we will rename that implicit lambda parameter to language and we will print out that language to the console.
>
> **[2:30](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/solution-manage-multiple-async-requests?u=76281980&t=150)** If we then run this code, we should see a delay for several seconds and then ultimately, we should see that unified list printed out to the console, just like that.

> [!info]- Semantic Content
>
> **Code Keywords:** async (4), await (4), function (2), let (1), lambda (1)
> **Code Identifiers:** loaditemsfromdb (1), loaditemsfromnetwork (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=1)** - [Nate] As we've seen throughout this course, Kotlin is a powerful and flexible language, designed for building modern applications across a variety of domains.
>
> **[0:10](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=10)** Language features, such as data and sealed classes, extension functions, and coroutines, provide first-party solutions to many common programming problems.
>
> **[0:21](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=21)** As you continue on with Kotlin, there are many other great resources out there.
>
> **[0:25](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=25)** Be sure to check out Kotlin's Getting Started guide, the Kotlin org on GitHub, or work through the Kotlin Koans for more practice.
>
> **[0:34](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=34)** You should now have the tools you need to start building complete applications with Kotlin.
>
> **[0:39](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=39)** For inspiration on where to apply those skills, explore the Kotlinlang website for more information on how to use Kotlin to build mobile, server, browser, and even multi-platform applications.
>
> **[0:52](https://www.linkedin.com/learning/kotlin-essential-training-object-oriented-and-async-code/next-steps?u=76281980&t=52)** There's plenty more to learn about Kotlin, but hopefully, this course has convinced you to try Kotlin for your next project.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [nate] (1)


## Instructor

- [[Nate Ebel]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/kotlin-essential-training-object-oriented-and-async-code-2497307)

## Skills Covered

- Kotlin

## Path Context

### In [[Kotlin Professional Certificate by JetBrains]]
← [[Kotlin Essential Training Functions Collections And I O]] | **2 of 4** | [[Kotlin Multiplatform Development]] →

## Part of

- [[Kotlin Professional Certificate by JetBrains]]

## Appears In

- [[Kotlin Professional Certificate by JetBrains]]

## Related Courses

_Courses sharing skills:_

- [[Exploring Ktor with Kotlin Multiplatform and Compose]] — Kotlin
- [[Kotlin Multiplatform Development]] — Kotlin
- [[Kotlin Essential Training Functions Collections And I O]] — Kotlin

---

[↑ Back to top](#)