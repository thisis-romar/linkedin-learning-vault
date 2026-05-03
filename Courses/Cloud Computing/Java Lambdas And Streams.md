---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: java-lambdas-and-streams
url: "https://www.linkedin.com/learning/java-lambdas-and-streams"
level: Intermediate
updated: 6/12/2024
learners: 45390
skills:
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/java-lambdas-streams-2453107"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE9ni67NPykmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351910833?e=2147483647&amp;v=beta&amp;t=DolbyuGsb_3Of4uo0GVDGqcJu-SRq0kXnefCWxCAeXg"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Building Your Java Skills]]'
next_courses:
  - '[[Java- Generic Classes]]'
path_nav: '[{"path":"Building Your Java Skills","position":1,"total":6,"prev":null,"next":"Java- Generic Classes"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Java%20Lambdas%20And%20Streams.md)

![Java Lambdas And Streams](https://media.licdn.com/dms/image/v2/D560DAQE9ni67NPykmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351910833?e=2147483647&amp;v=beta&amp;t=DolbyuGsb_3Of4uo0GVDGqcJu-SRq0kXnefCWxCAeXg)

# Java Lambdas And Streams

> Suggested prerequisites Learning Java 17 Projects Practice your new skills with hands-on coding exercises on GitHub. Get set up quickly and easily using your favorite IDE and practice applying the theory of functional programming using test-driven development. Write a lambda expression to perform an operation and successfully get a unit test to pass, leveraging a variety of different classes, obje

> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams) | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Java lambdas and streams](#java-lambdas-and-streams)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Tour of CoderPad](#tour-of-coderpad)
- [**1. Functional Programming**](#1-functional-programming) (1 videos)
  - [What is functional programming?](#what-is-functional-programming)
- [**2. Lambdas**](#2-lambdas) (3 videos)
  - [Functional interfaces](#functional-interfaces)
  - [Using lambdas](#using-lambdas)
  - [Using existing interfaces](#using-existing-interfaces)
- [**3. Streams**](#3-streams) (4 videos)
  - [Understanding streams](#understanding-streams)
  - [Using streams](#using-streams)
  - [More streams operations](#more-streams-operations)
  - [Advanced streams operations](#advanced-streams-operations)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with Java](#continuing-on-with-java)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Java lambdas and streams](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=0)** - [Bethan] When [[Java]] 8 was released back in 2014, the two biggest new features introduced to Java were lambdas and streams. Lambdas and streams have made it much easier to use a really powerful style of programming in Java called [[Functional Programming]]. Functional programming with lambdas and streams can help you to write powerful code in a concise way, and streams in particular allow you to do complex things with [[Data Manipulation]]. Lambdas and streams are also very commonly used in Java now, so being able to read and understand this style of coding is a really important part of being a Java developer. Most Java developers are more used to [[Object-Oriented Programming (OOP)|object-oriented programming]], so learning to use functional style programming can seem like a daunting new skill to learn. It's a very different way of thinking about solving problems and takes some practice and getting used to, but once mastered this style of programming, you'll be able to write more powerful code. So in this course, I'm going to explain what lambdas and streams are and show you how they work with lots of examples. There are also exercises along the way so you'll get some hands-on experience of using them yourself. So by the end of this course, you'll be comfortable with understanding and using Lambdas and streams. I'm Bethan Palmer. I'm a member of the Java Champions and I've working as a Java developer for the last five years. So if you're ready to improve your Java coding skills, then join me in my [[LinkedIn]] Learning course on lambdas and streams in Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (10), [[Functional Programming]] (2), [[Data Manipulation]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[LinkedIn]] (1)
> **Versions:** java 8 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [bethan] (1)

#### [What you should know](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course, there are a few things you should know. You should already be familiar with the basics of writing code in [[Java]]. If you're completely new to Java, I'd suggest watching the course "Learning Java" on [[LinkedIn]] Learning before starting this one, but if you're comfortable with the basics of writing Java code, it's time to open your favorite IDE. I'll be working in IntelliJ, which has a free Community Edition you can download from [jetbrains.com/idea/download](https://jetbrains.com/idea/download), but you can use whichever you are most comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4), [[LinkedIn]] (1)
> **URLs:** [jetbrains.com](https://jetbrains.com) (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=0)** - [Speaker] The examples and exercise files for this course are stored on [[GitHub]]. To download them, you'll need to have [[Git]] installed on your computer. If you don't, you can go to [git-scm.com/downloads](https://git-scm.com/downloads) and you can download different versions for Mac or [[Windows]] or for [[Linux]]. So there's a branch for every video in this course. And I can see all the branches by click on this dropdown menu here. So if I click on where it says main, it will show me every branch in the course. You'll notice that some of them have a B at the end and some of them have an E at the end. This is because the ones that have a B at the end show the state of the code at the beginning of the video. And the ones with an E at the end show the state of the code at the end of the video. So 0201B is what the code looks like at the beginning of 0201, and 0201E is what the code looks like at the end of 0201. So I'm going to show you how to download the code. The first thing I need to do is I need to get the link for this repository. And to do that, I click on this green button that says Code, and it will give me the link. And if I click on this little icon with two squares, it will actually copy that for me. So the next thing I need to do is go to my command line. So if you're on a Windows computer, you can open the Start menu and search for commands prompt, and it will come up. Or if you're on a Mac, you can go to the terminal. So I'm going to open up my terminal. Now, the first thing I need to do in the terminal is I need to go to the directory where I want to save the code. The command to change directory on Mac or in Windows is the same. It's CD. So I'm going to type CD and I'm going to save my code on my Desktop. So I'm going to change to my Desktop directory.
>
> **[1:35](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=95)** And if I press tab, it will auto-complete the name of the directory for me and press Enter. And then I need to type in the command to download the code for me. So in this case, it's git clone. So I'm going to type git clone and then I can just paste the URL that I copied from GitHub. So I can do paste and press Enter and that will download the code for me. So the next step is to open the code in your IDE. I'm using IntelliJ so I'm going to my IntelliJ and I'm going to click on the button that says Open at the top. Then I need to navigate to where I saved the code. So mine's on my Desktop. So I'm going to go to Desktop and then [[Java]] lambda streams and click Open. So by default, the code will start on the main branch. As I mentioned earlier, I've created branches for each video in the course where we modify code. So if you'd like to follow along, in IntelliJ, you can change branches by clicking on a little icon at the bottom with a picture of a branch symbol and it will say main to begin with. So if I click on that, it will show me all of the available branches I've got. So let's say I want to check out 0201B. So I click on that and choose Checkout. And now I'm at the start point for the video 0201. So if you're using a different IDE or you want to know how to change branch with the Git command, you can go back to your command prompt. So I'm going to go back to my terminal and I need to change directory to where the code is. So at the moment, I'm still in my Desktop directory. So I'm going to CD to java lambda streams 2453107 and press Enter.
>
> **[3:10](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=190)** And now I'm inside that directory. And from here, I can change branch. So the Git command to change branch is git checkout and then the name of the branch. So let's say, I want to see 0201E. So I'm going to do git checkout 02_01e and press Enter. And that switched to that branch for me. So if I go back to IntelliJ, I can see at the bottom here it's actually changed branch for me. And I can see I've got some code here. You might see a message saying that Project JDK is not defined. If you see that, you can just click on Setup SDK and choose which one you want and that will set it up for you. You might also notice that there's no arrow here to run the main method. So one way to fix that is if you right click on pom.xml and go to add as Maven project. You can click on Trust Project at this point. And then it will scan it as a Maven project and recognize that this is a main class with a main method. And then you should be able to click on those and run the methods. So that's all you need to know about checking out the code for the videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (8), [[Windows]] (3), [[GitHub]] (2), [[Java]] (2), [[Linux]] (1)
> **UI Navigation:** click on (11), go to (6), open the (2), dropdown (1), navigate to (1)
> **Tools:** terminal (4), intellij (4), github (2), command line (1), command prompt (1)
> **CLI Commands:** git (8), cd (3)
> **Env Vars:** ide (2), url (1), jdk (1), sdk (1)
> **Exercise Files:** download the (3), exercise files (1)
> **Cross-References:** go back to (3)
> **Prerequisites:** you'll need (1), setup (1)

#### [Tour of CoderPad](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [[LinkedIn]] Learning mobile app if you'd prefer. The code challenge has four areas, instructions in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and the console for outputs in the bottom left. You can use these drag handles to allocate space as you like. For example, I can make the console output bigger, or I can make the answer and test code section wider. To get even more horizontal space for the code editors, you can collapse the courses table of contents on the left. Each challenge has instructions that includes a description of the challenge and the challenge's parameters and desired results. Parameters are arguments that will be passed into a method in your code, and they have to be of a particular data type. The return value also has to be of a particular type, and you'll also see that noted in the instructions. The constraints section also has useful information about the parameters that will be passed in. The examples show different argument values and what result would be returned for each of those test cases. Create your answer in the top right code editor. There are comments in the starting code
>
> **[1:32](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=92)** showing where to put your solution. When you click test my code, you'll see a message indicating whether your code returned a correct result. So for example, if I click it now, in the console output, it said that I have another one solved and my code returned 19. If your code isn't successful, you can ask for help. So for example, if I change max to min and press test my code again, this time I get in the console output, "That's not the expected results. Your code returned 5." The show expected results and show hints variables determine whether you see the expected results and any hints. Change them to a value of true to control the output. So for example, I'm going to change "show expected results" to true, and "show hints" to true. And now if I click test my code again, this time in the console outputs, I also see that the expected result is 19, and it gives me a hint about how to solve the challenge. The code editor in the lower right shows how your solution is used. You can change that code to experiment with different test cases. So for example, if I change this five to a six and press test my code again, this time it's returning six as the lowest number. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you've finished each code challenge, return to the course's table of contents and click next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Functional Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [What is functional programming?](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=0)** - [Instructor] To understand lambdas and streams, it's useful to understand first what [[Functional Programming]] is. You've probably heard [[Java]] described as an [[Object-Oriented Programming (OOP)|object-oriented programming]] language. And if you've done any coding with Java before you'll be familiar with the concepts of classes and objects. In fact, classes and objects were probably one of the first things you learned when you picked up Java. So in Java, you might have a class called car, and this might have a field called gas level and a field called mileage and a method called drive. So then you would create objects of type car, and then you might call the drive method on the car objects. This might then change the state of the object. So the fuel level might go down and the mileage might go up. So that's how you think of object-oriented programming. And that concept should hopefully be quite familiar. Functional programming is a different way of thinking about coding. It's quite different to object-oriented programming, but once you get used to it, it can be very powerful and let you write clean code without using lots of boiler plates. In functional programming, you forget about classes and objects and all of that and you just focus on functions. Functions in functional programming give you the same output every time you give the same input. So let's say you have a function called double the number. If you give it the input three, the output will always be six. If you give it 140, the output will always be 280. So this is quite straightforward with things like number operations. As another example, let's say you have a function called filter to filter out numbers we don't like. Say for some reason we don't like the number four, so we tell the function to filter out fours.
>
> **[1:34](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=94)** If we parse on a list of numbers, e.g., one, two, three, four, five, the outputs will be one, two, three, five. But you might want to do some more sophisticated filtering, like filtering out odd numbers. So there might be a function called isOddNumber to work out if a number is even or odd. And instead of parsing in the number four, you can parse in that function as an argument to the filter function. So then if the input is one, two, three, four, five, the output will be two, four, because it's filtered out the odd numbers using another function. So functions can take functions as input. And in some cases, the output might be a function as well. So you might set a function that produces another function. So functional programming is a different way of thinking about code. Most modern programming languages use a mix of different programming types and Java's no different. Although it is very much an object-oriented language, there are ways to do functional programming with it. And two of the features introduced in Java 8, lambdas and streams, allow you to do functional style programming in Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (7), [[Functional Programming]] (6), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** isoddnumber (1)
> **Versions:** java 8 (1)
> **Speakers:** - [instructor] (1)


### 2. Lambdas

[↑ Back to Table of Contents](#table-of-contents)

#### [Functional interfaces](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=0)** - [Instructor] Lambdas are a way of using [[Functional Programming]] to write concise and powerful code in [[Java]]. And the first thing you need to know about using Lambdas is that they implement something called functional interfaces. So let's start off with seeing what functional interfaces look like. So I'm going to create one by right clicking on com.example, and going to new Java class. And I'm going to select the interface option, and I'm going to call this Greeting. So now I've got my interface, and I need to add one single method to it to make it a functional interface. So this method is just going to print out some text to the console. So it's going to be a void return type, and I'll call it, say hello. And I don't need to implement the body of the method here, because this is in the interface. It's also a good practice to add the functional interface annotation to the class. So above where it says public interface greeting, I'm going to add @functionalInterface. This doesn't really look like it does anything, but under the hood, it's basically making sure that I can't add any more methods. So let's say someone came along later, and they wanted to add a say goodbye method. And they did void say goodbye. Now I've got a compiler warning that basically tells me I can't have more than one method in this interface, because it's a functional interface. So I'm going to go ahead and remove that say goodbye method again. Now the next step is to implement this functional interface. The best and quickest way is to do this with a Lambda. But first, I'm going to do it in the long hand object oriented way. This is because it's easier to understand
>
> **[1:32](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=92)** this way to begin with. And if you understand this bit, then you'll understand what Lambdas are doing under the hood and how they work. So to create my concrete implementation, I'm going to right click on com.example again and go to new Java class. And I'm going to call this one Hello Greeting. And this one needs an implement greeting added to it to make sure that it implements my greeting interface. So now I need to override the say hello method. So I'm going to do public void say hello. And I'm just going to put a system.out.printline with the phrase, hello world in it. And there's a handy IntelliJ shortcut for this, which is SOUT and then Tab. And that will fill out system.out.printline for me. And in the brackets, I'm just going to put hello world. So now I've got my functional interface, and my concrete implementation of it. And now I just need somewhere to run my code. So I'm going to create one more Java class by right clicking on com.example again and going to new Java class. And I'm going to call this one Main. Now I want a public static void main method in here to run some code. So I'm going to use another handy shortcut, which is PSVM and then Tab. And that will fill out public static void main for me. And now I'm going to create greeting object. So I'm going to do greeting, and let's call it Greeting. And then I'm going to do equals new hello greeting. And then I can do greeting.sayhello to call my say hello methods.
>
> **[3:04](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=184)** And this should print out my hello world message to the console. So I'm going to run this now by clicking on the green arrow on the left, and clicking on run main domain. And I can see down in the console here, that it prints out my message, hello world, as expected. So that's one way of implementing the interface, but it was quite a lot of code for something quite small. I mean, it's just a single method, and I had to create an interface and then a class to implement it. But because it's a functional interface, there's actually a quicker way of doing this. I didn't actually need to create the class, hello greeting. Instead, I can just create a new instance of greeting right here in the main method, and override the say hello method right here. So let's see what that looks like. So I'm going to do greeting, and let's call this new one Greeting2, and then I'm going to do equals new greeting. And then IntelliJ again has a shortcut which will fill out the [[Representational State Transfer (REST)|rest]] for me. So I'm going to press Enter, and it adds in the overridden say hello method for me. So I'm going to put in the same content as in my original hello greeting one. So I'm going to do system.out.printline, and pass in hello world again. And then I just need to add a semicolon after this curly brace. Then I can call my say, rephrase. Then I can call my say hello method in the same way. So I'm going to do greeting2.sayhello. And let's run this again by clicking on the green arrow again. And now I can see in the console,
>
> **[4:38](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=278)** I've got two hello world messages. We can actually now make this even shorter by using a Lambda instead. So in the next video, I'm going to show you how to make this cleaner and more concise by using Lambdas.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (5), [[Functional Programming]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (1), click on (1), go to (1)
> **Env Vars:** sout (1), psvm (1)
> **Tools:** intellij (2)
> **Code Identifiers:** functionalinterface (1)
> **Cross-References:** in the next (1)
> **Best Practices:** good practice (1)

#### [Using lambdas](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=0)** - [Instructor] Now let's rewrite this code in a cleaner and more concise way by using lambdas. So I've implemented my functional interface right here in the main method with greeting2. But if I hop over a new greeting, IntelliJ actually gives me a message that says anonymous new greeting can be replaced with lambda. And if I click on replace with lambda, it would actually generate a lambda for me but I'm going to write it out so we can see how it works. So I'm going to create a new greeting object. So I'm going to do greeting and let's call it greeting3 and an equal sign. And then on this side of the equal sign, the first thing I'm going to do is I'm going to put a pair of brackets. This is where you'd pass in any arguments if there were any. So this pair of brackets is actually doing the same thing as this pair of brackets after say hello in greeting2. Then the next thing I need to do is I need to write an arrow. So I'm going to do a dash and then a left angle bracket. And on the other side of that, I essentially put the body of the method. So again, I'm just going to do a system.out.println and again, I'm going to pass in hello world. And I need to put a semicolon at the end as usual. Then I can call my say hello method in the same way as with the others. So I'm going to do greeting3.sayHello and I'll run this again, just to check it works so I'm going to click on the green arrow and choose run. And again, I can see I've got hello world. So I can see that this lambda is doing the same thing as the other ones. But this one's only taken one line of code to write that out. So far, I've been demonstrating the different ways
>
> **[1:32](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=92)** to implement my greeting interface, so now let's try using an interface which has a single method that takes some arguments. Let's say, I want a lambda that takes two numbers as arguments and then does some calculations on them and returns a result of that calculation. So I'm going to create a new interface. So I'm going to right click on com.example and go to new [[Java]] class and select the interface option. And I'm going to call this one calculator. So I've got my interface and I'm going to add the functional interface annotation. And now I need my single method. So this is going to return an int. So I'm going to do int, and I'll call the method calculate. And then in the brackets, I'm going to pass in two integers. So I'm going to do int X, int Y. So I've got my functional interface. I don't need to implement it anywhere because I'm just going to use a lambda. So I'm going to go back to my main method and under the greetings, I'm going to create a calculator. So I'm going to do calculator, calculator = and now I need to implement the calculate method using a lambda. So the first thing I'm going to do, again, is a pair of brackets. Then inside the brackets, I know I need to pass in the two ints. So I'm going to do int X, int Y. And then I need an arrow so I'm going to do the dash and then the left angle brackets. And now I can do my calculation. So let's say I want to do some complex calculations that are going to take up multiple lines,
>
> **[3:04](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=184)** rather than the single line system.out.println. So to do multiple lines, I can use curly braces. So I'm going to do a curly brace and press enter. And after the closing brace, I need to put a semicolon. Then in between them, I can put my code to do the calculation. So let's say I want to do some kind of calculation where I generate a random number and then I times X and Y together and add the random number to it. So I'm going to use the random class in java.util. So I'm going to do random, random = new random and then to generate the random number, I'm going to do int randomNumber = random.nextInt and I'm going to pass in 50. So that will generate a random int between zero and 49. Then I want to return X times Y plus my random number. So I'm going to do return X * Y + randomNumber.
>
> **[4:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=247)** So I've got my lambda, now I need to call that calculate method. So I'm going to do calculator.calculate and let's pass in one and two. And then I'm also going to wrap this in a system.out.println so that I can see the results. So I'm going to do system.out.println and pass in calculator.calculate, and then pass in one and two. So let's run this again. And I can see I've got my five hello worlds and my random number added to one times two, which is five in this case. So I've implemented my new calculator interface, but actually I didn't need to create that interface at all. In the next video, I'll show you how actually, I could have saved myself from writing that code and didn't need to implement the calculator interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2)
> **UI Navigation:** click on (3), go to (1), select the (1)
> **Code Identifiers:** randomnumber (2), sayhello (1), nextint (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Using existing interfaces](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=0)** - [Instructor] Most of the time, you actually won't need to write your own functional interfaces. [[Java]]'s already got quite a few implementations of functional interfaces that you can use. In the previous video, I created an interface called Calculator and this has a single method, calculate that takes two ints as inputs and returns an int, but Java's actually already got a ready-made interface that does exactly this. There's a package called java.util.function, which contains lots of useful functional interfaces. So, let's take a look at the documentation at docs.[oracle.com](https://oracle.com) for this package, java.util.function. If you take a look at this page you can see a list of the ones they already have, and actually most of your use cases for writing lambdas will probably be covered by one of the ones in here. For most lambdas, you basically want to pass in a certain number of arguments and either return something or return nothing. A commonly used one is this one called Function, which represents a function that accepts one argument and produces a result. So let's say you want to pass in one argument and get one thing back of a type of your choosing. In that case, you could use Function. So, for my Calculator interface, I said the method takes two ints and returns an int. There are actually quite a few int-specific interfaces here, and there's one in particular called IntBinaryOperator, and this represents an operation upon two int-valued operands and produces an int-valued result. So, basically it takes two ints as arguments and returns an int, which is exactly the same as what my Calculator interface does. So, if I go back to my code and back to my Main method, I can actually replace this calculator
>
> **[1:37](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=97)** with IntBinaryOperator. So the other thing I need to do is I need to change the name of the method. So in my interface, I called it calculate, but in this case, the method in this interface is called applyAsInt, so this will do exactly the same thing. And now I can actually go ahead and delete my Calculator interface. So I'm going to right click on Calculator, and go to Delete, and choose Okay. Now, I'm going to run this one more time just to check it still works. So I'm going to click on the green arrow, and go Run Main.main, and I can see I still get my number, which is a random number added to one times two. So, this is an example of where you don't actually normally have to write your own functional interface. You can use one of the ready-made ones in the JDK.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (4)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Cross-References:** previous video (1), go back to (1)
> **CLI Commands:** go run (1)
> **Code Identifiers:** applyasint (1)
> **URLs:** [oracle.com](https://oracle.com) (1)
> **Env Vars:** jdk (1)


### 3. Streams

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding streams](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=0)** - [Instructor] The other big important feature that was introduced in [[Java]] 8 was the streams API. When you use streams together with lambdas, the streams API allows you to process groups of elements in powerful ways using functional style programming. Like with lambdas, the syntax can take a bit of practice to get used to, but once you have got used to it, streams allow you to write nice, concise code. And being able to read and understand streams with lambdas is really important because a lot of Java code that's been written since Java 8 uses this syntax. So let's think about an example of where streams might be used. Let's say we have an array list of strings containing the names of countries, and let's say you want to process the elements in that list in some way. So for example, you want to capitalize all the letters and then you want to filter out all the countries beginning with a C, and then you want to print out those countries to the console. So without streams, the first thing I'd probably do is create a forEach loop. So I'd say for each country in my list, do something. Then, to tackle the first requirements of capitalizing everything, I can do country = country to upper case, and then print out the country name to the console. The next requirement is to filter out countries beginning with the letter C. So I can add an if statement and say if the country doesn't begin with a C, then print it out. The final requirement is to sort the countries alphabetically. I need to do this before my forEach loop so I've put it at the top and I've put a collections.sort and parsed in countries. Now let's see what this would look like with streams. With the streams API, you can chain methods together to keep processing the list in different ways. So each new line here handles each of the requirements.
>
> **[1:34](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=94)** The map method is used to capitalize the strings, the filter method is to filter out countries beginning with a C, and the sorted method puts the results in alphabetical order. And finally, the forEach method prints out each one to the console. It's important to note that this code won't actually change the list of countries at all. This is because streams are immutable, so you can't go making changes to elements in the middle of the stream. In some of these methods, you'll see that Lambda star notation is used. So this is an example of a function being parsed into a method as an argument, which is something that's quite often done in [[Functional Programming]]. It's also worth noting that the forEach method has to go at the end here. This is because there are two types of method in the streams API, intermediate and terminal. Map filter and sorted are examples of intermediate operations and forEach is an example of a terminal operation. Intermediate operations all return a stream as a result, so you can keep chaining them together for as long as you like. Terminal operations return something else, so either void or some other return type, so they have to go at the end of the chain. So to summarize, stream operations are either intermediate or terminal. Terminal operations have to come last if you're chaining methods together and streams are immutable so you can't make changes to the elements in the original list when you perform stream operations on them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (3), [[Functional Programming]] (1)
> **Code Identifiers:** foreach (5)
> **Tools:** terminal (5)
> **Env Vars:** api (4)
> **Versions:** java 8 (2)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### [Using streams](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=0)** - [Instructor] So now let's start writing some streams. There are two ways to create a stream, and luckily they're both quite simple. The most common use of a stream is to create a stream from an existing array or collection. So, I have a class already set up here called Main which has a main method in it, and in my method, I've got an array called scores with some numbers in. So it's got 80, 66, 73, 92, and 43. So, to create a stream from this array, I first need to create a stream variable. So I'm going to type stream, and then in angle brackets, I put the type of the stream. So this one is going to be integer, and I also need to make sure that I'm importing the right class. So IntelliJ will do this for me if I click Alt + Enter, and it will import [[Java]].util.stream.Stream. So, I need to give this variable a name. So I'm going to call it scoresStream, and then after the equals I'm going to do Arrays.stream, and then pass in my array. So, I'm going to pass in scores. So, I've got my first stream. I can also create a stream from a collection. So, under here I have an array list of strings called shoppingList, and I've added some shopping items to the list. So in my list I've got coffee, bread, pineapple, milk, and pasta. So to create a stream from this, I again create a new variable. So, I'm going to do Stream and then in angle brackets, the type. So, the one is going to be of type String, and I'm going to call this one shoppingListStream. Then I can do equals, and then after the equals,
>
> **[1:35](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=95)** I do shoppingList.stream, and now I've created a stream from my array list. The other option is to create a stream without a collection or an array at all. I can just pass in the elements I want to be in the stream. So, let's say I want to create a stream with some strings in it, which are just going to be letters. So, I'm going to create another variable of type stream, and this one is also going to contain strings. So I'm going to put string in angle brackets, and I'm going to call this one lettersStream, then I can do equals Stream.of, so I'm using the of method, and then I just pass in what I want to be in the stream. So I'm going to pass in some letters. So let's just pass in A, B, and C. So now I have three streams. Obviously, this code doesn't really do anything. I've just got three stream variables that I'm not doing anything with. So let's do something with one of our streams to see how they really work. I'm going to use my shoppingList stream because that's the slightly more interesting one. Let's say I want to sort all the items in my shoppingList in alphabetical order. Luckily the streams API has a handy method that can be used for this called sorted. So, all I need to do is I need to do shoppingListStream.sorted, and that will sort everything in alphabetical order. So I'm going to run the app and see what happens. So, I'm going to click on the arrow next to public class Main, and click on Run Main domain, and nothing actually happens. There's nothing in the terminal. This is because I sorted the elements, but I've not done anything with the result of that. So let's say I want to print out the result of the console.
>
> **[3:11](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=191)** So I'm going to add another method onto the end of here called for each. So, I just add dot forEach. So, IntelliJ is telling me that this method takes a Consumer as an argument. So, I'm going to have a look at where this forEach method is defined. In IntelliJ I can use the keyboard shortcut Command + B on Mac, or Control + B on [[Windows]], and this will take me to the method definition. So I'm going to click on Command + B, and this takes me to the stream class which is part of the JDK, and it takes me to the forEach method. And again, here, it says that this needs a Consumer. So let's click through again to Consumer. So I'm going to do Command + B again, and now I'm in the Consumer class, and I can actually see that this is a functional interface, and it just has one single method called accept. So accept takes a single argument and has a void return type. Because it's a functional interface, this means I can use a lambda for this. So I'm going to go back to my Main class to where I've got my forEach, and in here I need to put a lambda. So, the first thing I need to do when I write a lambda is I need to write any arguments. So, this is going to take a string and I'm going to call it item. I don't need to explicitly say that this is a string because I've created a stream of strings already. So I'm just going to call it item, and then I need to do my arrow. So, I'm going to do a dash and a left angle bracket, and then after this is the body. So I just want to do system.out.println item. So I'm going to do system.out.println, and pass in item. So if I rerun this app, it should print out the contents
>
> **[4:47](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=287)** of my stream, and here's my shopping list now sorted in alphabetical order. So I've got bread, coffee, milk, pasta, and pineapple. So, that's how you'd use streams to sort items alphabetically, and print them out to the console.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Windows]] (1)
> **Code Identifiers:** shoppinglist (4), foreach (4), shoppingliststream (2), scoresstream (1), lettersstream (1)
> **Tools:** intellij (3), terminal (1)
> **UI Navigation:** click on (3)
> **Env Vars:** api (1), jdk (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### [More streams operations](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=0)** - [Narrator] So now I've got my shopping list, and I'm sorting the items alphabetically and printing out the results using Streams. So now, let's see what other cool things I can do with the Streams API. Let's say I want to make everything in my shopping list be written in capital letters. The Streams API has a method called map, which I can use to do this. So I'm not going to put this map method, so I'm not going to put app method at the end of this chain of methods here on my Stream. For each has to go last because it's a terminal method. So no methods can go after that. But sorted is an intermediate method, and so is map. So I can put these anywhere before there for each. So I'm going to put it after the sorted one. And I'm going to put it on a new line just because I think it's a bit more readable, because it doesn't have to be on a new line. So I'm going to do .map. And this map method takes a function as an argument. You might remember from the Lambda exercise, that function is a functional interface with a method that takes one argument and returns one thing. In this case, the argument is the shopping list item. And I want to return an uppercase version of that string. So the first thing I need is my argument, which is going to be the item. So I'm going to do item and then an arrow, and then I need the body. So I want to do this item to uppercase. So I'm going to do item.toUpperCase. So let's run the app again. And, now, in the console, I can see I've got my shopping list sorted in alphabetical order, but also, everything is written in upper case. It's actually important to remember with map
>
> **[1:32](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=92)** that the purpose of this method, it's actually important to remember with map, that the purpose of this method is to create a new object rather than modify an existing one. This is something that can seem odd when you're learning [[Functional Programming]]. In this case, it seems to work nicely, because that's a upper case method actually returns a new string object. I haven't changed the original string at all. But if you had a stream of objects, and you're trying to change a field on the object with a set method, for example. So let's say you have a person and you're trying to do person.setname. You wouldn't be able to do that here. You'd have to create a whole new person object and set the value on the new object. So now, let's say I want to get the items beginning with a P. The Streams API has a method for that too, called filter. So I'm going to chain another method onto this and I'm going to .filter. So this one takes a predicate argument. Again, this is a functional interface, and this one takes a single argument, but returns a billion. So I need to write another Lambda. Again I'm going to call the argument item, and then I need an arrow. And this time, I need something that returns either true or false. So I want to return true if the item begins with P, 'cause I only want items beginning with P in this case. So I'm going to do item.startsWith and pass in the letter P. I know it'll always be an uppercase P, because I'm doing this after I've called there to uppercase method. So it's all going to be in capitals. So now, if I run the app again, I can see I've just got the items beginning with P,
>
> **[3:06](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=186)** and they're still in alphabetical order and they're still capitalized. So those are some of the most common methods you'll find with the Streams API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Functional Programming]] (1)
> **Env Vars:** api (4)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** touppercase (1), startswith (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Advanced streams operations](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=0)** - [Speaker] So now we've covered the most common uses of streams. Let's take a look at some slightly more advanced features and concepts. So let's find out a bit more about how streams work. So I've got this stream here where I'm applying lots of operations to my stream. So I'm sourcing it, I'm mapping the items to uppercase. I'm filtering it so there's only items beginning with P. And then I'm printing them all out. So if I run this now, I just get pasta and pineapple in capital letters. Now let's say at some point later on, I want to print it out again. So underneath my stream, let's say I do shoppingList.Stream and I do forEach. And then again, I'm going to do item arrow System.out.println and pass in item. So I'm going to run this again. And this time I get an exception. Specifically, an illegal states exception. And it says that the stream has already been operated upon or closed. This is because streams can only be used once. Streams aren't designed for storing objects. They're designed for performing operations on groups of objects. We can't do that, so I'm going to delete that line and instead, let's see what happens if I print out my original shopping list. So I'm going to do System.out.println and pass in shoppingList. So if I run this again, as you might expect, this original list hasn't changed at all. It's still got all my items in, in lower a case letters, in the original order. This is because I created a new stream here and performed operations on the stream. In fact, I didn't really need to create this variable here
>
> **[1:34](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=94)** because I'm not actually using it anywhere. Instead, I could get rid of this and here, I could do shoppingList.stream. But let's say I do want to keep the results of my streams somewhere so that I can refer to them or use them later on. In this case, I need to create a new collection and save the results to that new collection. So in front of my stream, I'm going to create a variable and it's going to be another list. So I'm going to do list and it's going to be of type string. So in angle brackets, I'm going to put String and I'm going to call this one sortedShoppingList. So I need an equals and then the other side can be my stream with all of its operations. So I can see immediately that I get a compile time error. This is because my terminal method, forEach has a void return type. So I need to replace this with a method that's going to return a collection. So I'm going to get rid of this forEach line. And instead I'm going to use a method called collect. So I'm going to .collect and pass in, and then I'm going to pass in Collectors.toList. So now let's print out this new list to see what we've got in it. So I'm going to do system.out.println and pass in sortedShoppingList. So let's run this again and see what we get. So now I've got two array lists and the first one is sorted in alphabetical order and capitalized and filtered. So only the ones begin with P are in it. So everything I did on my stream. And the other one is still the original
>
> **[3:07](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=187)** with no changes made to it. So it's important to remember that streams are for performing operations on a group of elements in a functional style and not for storing things.

> [!info]- Semantic Content
>
> **Code Identifiers:** shoppinglist (3), foreach (3), sortedshoppinglist (2), tolist (1)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Speakers:** - [speaker] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with Java](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=0)** - [Instructor] This brings us to the end of the course. Well done on completing it, and thanks for joining me. Hopefully you now feel more confident in understanding lambdas and streams and how to use them in your code. The best way to keep learning is to keep practicing, so feel free to add your own tests to the ones in the exercises. If you want to keep learning more about [[Java]], check out the many other Java courses in the [[LinkedIn]] Learning library. Good luck with your continued learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[LinkedIn]] (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/java-lambdas-streams-2453107)

## Skills Covered

- Java

## Path Context

### In [[Building Your Java Skills]]
**1 of 6** | [[Java- Generic Classes]] →

## Appears In

- [[Building Your Java Skills]]

## Related Courses

_Courses sharing skills:_

- [[Practice It- Java]] — Java
- [[Hands-On Introduction- Java]] — Java
- [[Learning Java 17]] — Java
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Java
- [[Advanced Java- Hands-on with Streams, Lambda Expressions, Collections, Generics and More]] — Java

---

[↑ Back to top](#)