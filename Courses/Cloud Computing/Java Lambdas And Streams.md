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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Java%20Lambdas%20And%20Streams.md)

![Java Lambdas And Streams](https://media.licdn.com/dms/image/v2/D560DAQE9ni67NPykmg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351910833?e=2147483647&amp;v=beta&amp;t=DolbyuGsb_3Of4uo0GVDGqcJu-SRq0kXnefCWxCAeXg)

# Java Lambdas And Streams

> Suggested prerequisites Learning Java 17 Projects Practice your new skills with hands-on coding exercises on GitHub. Get set up quickly and easily using your favorite IDE and practice applying the theory of functional programming using test-driven development. Write a lambda expression to perform an operation and successfully get a unit test to pass, leveraging a variety of different classes, obje

> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams) | Intermediate | 45K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Functional Programming]]** (1 videos)
- **[[#2. Lambdas]]** (3 videos)
- **[[#3. Streams]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Java lambdas and streams
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=0)** - [Bethan] When Java 8 was released back in 2014, the two biggest new features introduced to Java were lambdas and streams.
>
> **[0:07](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=7)** Lambdas and streams have made it much easier to use a really powerful style of programming in Java called functional programming.
>
> **[0:12](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=12)** Functional programming with lambdas and streams can help you to write powerful code in a concise way, and streams in particular allow you to do complex things with data manipulation.
>
> **[0:20](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=20)** Lambdas and streams are also very commonly used in Java now, so being able to read and understand this style of coding is a really important part of being a Java developer.
>
> **[0:28](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=28)** Most Java developers are more used to object-oriented programming, so learning to use functional style programming can seem like a daunting new skill to learn.
>
> **[0:36](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=36)** It's a very different way of thinking about solving problems and takes some practice and getting used to, but once mastered this style of programming, you'll be able to write more powerful code.
>
> **[0:45](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=45)** So in this course, I'm going to explain what lambdas and streams are and show you how they work with lots of examples.
>
> **[0:50](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=50)** There are also exercises along the way so you'll get some hands-on experience of using them yourself.
>
> **[0:55](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=55)** So by the end of this course, you'll be comfortable with understanding and using Lambdas and streams.
>
> **[0:59](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=59)** I'm Bethan Palmer.
>
> **[1:00](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=60)** I'm a member of the Java Champions and I've working as a Java developer for the last five years.
>
> **[1:04](https://www.linkedin.com/learning/java-lambdas-and-streams/java-lambdas-and-streams?u=76281980&t=64)** So if you're ready to improve your Java coding skills, then join me in my LinkedIn Learning course on lambdas and streams in Java.

> [!info]- Semantic Content
>
> **Versions:** java 8 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [bethan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you get started with this course, there are a few things you should know.
>
> **[0:04](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980&t=4)** You should already be familiar with the basics of writing code in Java.
>
> **[0:07](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980&t=7)** If you're completely new to Java, I'd suggest watching the course "Learning Java" on LinkedIn Learning before starting this one, but if you're comfortable with the basics of writing Java code, it's time to open your favorite IDE.
>
> **[0:18](https://www.linkedin.com/learning/java-lambdas-and-streams/what-you-should-know?u=76281980&t=18)** I'll be working in IntelliJ, which has a free Community Edition you can download from [jetbrains.com/idea/download](https://jetbrains.com/idea/download), but you can use whichever you are most comfortable with.

> [!info]- Semantic Content
>
> **URLs:** [jetbrains.com](https://jetbrains.com) (1)
> **Env Vars:** ide (1)
> **Tools:** intellij (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=0)** - [Speaker] The examples and exercise files for this course are stored on GitHub.
>
> **[0:04](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=4)** To download them, you'll need to have Git installed on your computer.
>
> **[0:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=7)** If you don't, you can go to [git-scm.com/downloads](https://git-scm.com/downloads) and you can download different versions for Mac or Windows or for Linux.
>
> **[0:16](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=16)** So there's a branch for every video in this course.
>
> **[0:19](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=19)** And I can see all the branches by click on this dropdown menu here.
>
> **[0:22](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=22)** So if I click on where it says main, it will show me every branch in the course.
>
> **[0:26](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=26)** You'll notice that some of them have a B at the end and some of them have an E at the end.
>
> **[0:31](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=31)** This is because the ones that have a B at the end show the state of the code at the beginning of the video.
>
> **[0:35](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=35)** And the ones with an E at the end show the state of the code at the end of the video.
>
> **[0:39](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=39)** So 0201B is what the code looks like at the beginning of 0201, and 0201E is what the code looks like at the end of 0201.
>
> **[0:48](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=48)** So I'm going to show you how to download the code.
>
> **[0:51](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=51)** The first thing I need to do is I need to get the link for this repository.
>
> **[0:55](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=55)** And to do that, I click on this green button that says Code, and it will give me the link.
>
> **[0:59](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=59)** And if I click on this little icon with two squares, it will actually copy that for me.
>
> **[1:05](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=65)** So the next thing I need to do is go to my command line.
>
> **[1:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=67)** So if you're on a Windows computer, you can open the Start menu and search for commands prompt, and it will come up.
>
> **[1:13](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=73)** Or if you're on a Mac, you can go to the terminal.
>
> **[1:15](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=75)** So I'm going to open up my terminal.
>
> **[1:18](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=78)** Now, the first thing I need to do in the terminal is I need to go to the directory where I want to save the code.
>
> **[1:23](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=83)** The command to change directory on Mac or in Windows is the same.
>
> **[1:26](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=86)** It's CD.
>
> **[1:27](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=87)** So I'm going to type CD and I'm going to save my code on my Desktop.
>
> **[1:32](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=92)** So I'm going to change to my Desktop directory.
>
> **[1:35](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=95)** And if I press tab, it will auto-complete the name of the directory for me and press Enter.
>
> **[1:40](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=100)** And then I need to type in the command to download the code for me.
>
> **[1:43](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=103)** So in this case, it's git clone.
>
> **[1:45](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=105)** So I'm going to type git clone and then I can just paste the URL that I copied from GitHub.
>
> **[1:50](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=110)** So I can do paste and press Enter and that will download the code for me.
>
> **[1:58](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=118)** So the next step is to open the code in your IDE.
>
> **[2:01](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=121)** I'm using IntelliJ so I'm going to my IntelliJ and I'm going to click on the button that says Open at the top.
>
> **[2:08](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=128)** Then I need to navigate to where I saved the code.
>
> **[2:10](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=130)** So mine's on my Desktop.
>
> **[2:11](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=131)** So I'm going to go to Desktop and then java lambda streams and click Open.
>
> **[2:18](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=138)** So by default, the code will start on the main branch.
>
> **[2:21](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=141)** As I mentioned earlier, I've created branches for each video in the course where we modify code.
>
> **[2:25](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=145)** So if you'd like to follow along, in IntelliJ, you can change branches by clicking on a little icon at the bottom with a picture of a branch symbol and it will say main to begin with.
>
> **[2:34](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=154)** So if I click on that, it will show me all of the available branches I've got.
>
> **[2:38](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=158)** So let's say I want to check out 0201B.
>
> **[2:42](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=162)** So I click on that and choose Checkout.
>
> **[2:45](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=165)** And now I'm at the start point for the video 0201.
>
> **[2:49](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=169)** So if you're using a different IDE or you want to know how to change branch with the Git command, you can go back to your command prompt.
>
> **[2:55](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=175)** So I'm going to go back to my terminal and I need to change directory to where the code is.
>
> **[3:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=180)** So at the moment, I'm still in my Desktop directory.
>
> **[3:03](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=183)** So I'm going to CD to java lambda streams 2453107 and press Enter.
>
> **[3:10](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=190)** And now I'm inside that directory.
>
> **[3:12](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=192)** And from here, I can change branch.
>
> **[3:14](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=194)** So the Git command to change branch is git checkout and then the name of the branch.
>
> **[3:20](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=200)** So let's say, I want to see 0201E.
>
> **[3:24](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=204)** So I'm going to do git checkout 02_01e and press Enter.
>
> **[3:29](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=209)** And that switched to that branch for me.
>
> **[3:31](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=211)** So if I go back to IntelliJ, I can see at the bottom here it's actually changed branch for me.
>
> **[3:37](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=217)** And I can see I've got some code here.
>
> **[3:41](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=221)** You might see a message saying that Project JDK is not defined.
>
> **[3:44](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=224)** If you see that, you can just click on Setup SDK and choose which one you want and that will set it up for you.
>
> **[3:50](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=230)** You might also notice that there's no arrow here to run the main method.
>
> **[3:54](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=234)** So one way to fix that is if you right click on pom.xml and go to add as Maven project.
>
> **[4:02](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=242)** You can click on Trust Project at this point.
>
> **[4:05](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=245)** And then it will scan it as a Maven project and recognize that this is a main class with a main method.
>
> **[4:10](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=250)** And then you should be able to click on those and run the methods.
>
> **[4:13](https://www.linkedin.com/learning/java-lambdas-and-streams/using-the-exercise-files?u=76281980&t=253)** So that's all you need to know about checking out the code for the videos.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (11), go to (6), open the (2), dropdown (1), navigate to (1)
> **Tools:** terminal (4), intellij (4), github (2), command line (1), command prompt (1)
> **CLI Commands:** git (8), cd (3)
> **Code Keywords:** lambda (2), let (2), case, (1), default, (1)
> **Env Vars:** ide (2), url (1), jdk (1), sdk (1)
> **Exercise Files:** download the (3), exercise files (1)
> **Cross-References:** go back to (3)
> **Prerequisites:** you'll need (1), setup (1)

#### Tour of CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents.
>
> **[0:06](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=6)** Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge.
>
> **[0:13](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=13)** These challenges are hosted by CoderPad, and they appear in the same area of the course page where you watch the course's videos.
>
> **[0:19](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=19)** We recommend using a desktop browser for the best experience with code challenges, but you can use the LinkedIn Learning mobile app if you'd prefer.
>
> **[0:27](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=27)** The code challenge has four areas, instructions in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and the console for outputs in the bottom left.
>
> **[0:41](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=41)** You can use these drag handles to allocate space as you like.
>
> **[0:44](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=44)** For example, I can make the console output bigger, or I can make the answer and test code section wider.
>
> **[0:50](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=50)** To get even more horizontal space for the code editors, you can collapse the courses table of contents on the left.
>
> **[0:56](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=56)** Each challenge has instructions that includes a description of the challenge and the challenge's parameters and desired results.
>
> **[1:03](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=63)** Parameters are arguments that will be passed into a method in your code, and they have to be of a particular data type.
>
> **[1:09](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=69)** The return value also has to be of a particular type, and you'll also see that noted in the instructions.
>
> **[1:15](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=75)** The constraints section also has useful information about the parameters that will be passed in.
>
> **[1:20](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=80)** The examples show different argument values and what result would be returned for each of those test cases.
>
> **[1:27](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=87)** Create your answer in the top right code editor.
>
> **[1:30](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=90)** There are comments in the starting code showing where to put your solution.
>
> **[1:34](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=94)** When you click test my code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:39](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=99)** So for example, if I click it now, in the console output, it said that I have another one solved and my code returned 19.
>
> **[1:50](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=110)** If your code isn't successful, you can ask for help.
>
> **[1:53](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=113)** So for example, if I change max to min and press test my code again, this time I get in the console output, "That's not the expected results.
>
> **[2:03](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=123)** Your code returned 5."
>
> **[2:05](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=125)** The show expected results and show hints variables determine whether you see the expected results and any hints.
>
> **[2:11](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=131)** Change them to a value of true to control the output.
>
> **[2:14](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=134)** So for example, I'm going to change "show expected results" to true, and "show hints" to true.
>
> **[2:20](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=140)** And now if I click test my code again, this time in the console outputs, I also see that the expected result is 19, and it gives me a hint about how to solve the challenge.
>
> **[2:31](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=151)** The code editor in the lower right shows how your solution is used.
>
> **[2:35](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=155)** You can change that code to experiment with different test cases.
>
> **[2:38](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=158)** So for example, if I change this five to a six and press test my code again, this time it's returning six as the lowest number.
>
> **[2:47](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=167)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left.
>
> **[2:52](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=172)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[2:58](https://www.linkedin.com/learning/java-lambdas-and-streams/tour-of-coderpad?u=76281980&t=178)** When you've finished each code challenge, return to the course's table of contents and click next video to see my solution.

> [!info]- Semantic Content
>
> **Analogies:** for example (5)
> **CLI Commands:** make (2)
> **Code Keywords:** type. (1), type, (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 1. Functional Programming

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is functional programming?
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=0)** - [Instructor] To understand lambdas and streams, it's useful to understand first what functional programming is.
>
> **[0:06](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=6)** You've probably heard Java described as an object-oriented programming language.
>
> **[0:10](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=10)** And if you've done any coding with Java before you'll be familiar with the concepts of classes and objects.
>
> **[0:15](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=15)** In fact, classes and objects were probably one of the first things you learned when you picked up Java.
>
> **[0:20](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=20)** So in Java, you might have a class called car, and this might have a field called gas level and a field called mileage and a method called drive.
>
> **[0:28](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=28)** So then you would create objects of type car, and then you might call the drive method on the car objects.
>
> **[0:35](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=35)** This might then change the state of the object.
>
> **[0:37](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=37)** So the fuel level might go down and the mileage might go up.
>
> **[0:41](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=41)** So that's how you think of object-oriented programming.
>
> **[0:43](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=43)** And that concept should hopefully be quite familiar.
>
> **[0:46](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=46)** Functional programming is a different way of thinking about coding.
>
> **[0:49](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=49)** It's quite different to object-oriented programming, but once you get used to it, it can be very powerful and let you write clean code without using lots of boiler plates.
>
> **[0:57](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=57)** In functional programming, you forget about classes and objects and all of that and you just focus on functions.
>
> **[1:03](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=63)** Functions in functional programming give you the same output every time you give the same input.
>
> **[1:08](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=68)** So let's say you have a function called double the number.
>
> **[1:12](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=72)** If you give it the input three, the output will always be six.
>
> **[1:15](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=75)** If you give it 140, the output will always be 280.
>
> **[1:20](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=80)** So this is quite straightforward with things like number operations.
>
> **[1:24](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=84)** As another example, let's say you have a function called filter to filter out numbers we don't like.
>
> **[1:29](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=89)** Say for some reason we don't like the number four, so we tell the function to filter out fours.
>
> **[1:34](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=94)** If we parse on a list of numbers, e.g., one, two, three, four, five, the outputs will be one, two, three, five.
>
> **[1:41](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=101)** But you might want to do some more sophisticated filtering, like filtering out odd numbers.
>
> **[1:46](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=106)** So there might be a function called isOddNumber to work out if a number is even or odd.
>
> **[1:51](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=111)** And instead of parsing in the number four, you can parse in that function as an argument to the filter function.
>
> **[1:57](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=117)** So then if the input is one, two, three, four, five, the output will be two, four, because it's filtered out the odd numbers using another function.
>
> **[2:04](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=124)** So functions can take functions as input.
>
> **[2:07](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=127)** And in some cases, the output might be a function as well.
>
> **[2:10](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=130)** So you might set a function that produces another function.
>
> **[2:13](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=133)** So functional programming is a different way of thinking about code.
>
> **[2:17](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=137)** Most modern programming languages use a mix of different programming types and Java's no different.
>
> **[2:23](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=143)** Although it is very much an object-oriented language, there are ways to do functional programming with it.
>
> **[2:27](https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming?u=76281980&t=147)** And two of the features introduced in Java 8, lambdas and streams, allow you to do functional style programming in Java.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** isoddnumber (1)
> **Versions:** java 8 (1)
> **Speakers:** - [instructor] (1)


### 2. Lambdas

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Functional interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=0)** - [Instructor] Lambdas are a way of using functional programming to write concise and powerful code in Java.
>
> **[0:05](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=5)** And the first thing you need to know about using Lambdas is that they implement something called functional interfaces.
>
> **[0:11](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=11)** So let's start off with seeing what functional interfaces look like.
>
> **[0:15](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=15)** So I'm going to create one by right clicking on com.example, and going to new Java class.
>
> **[0:20](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=20)** And I'm going to select the interface option, and I'm going to call this Greeting.
>
> **[0:25](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=25)** So now I've got my interface, and I need to add one single method to it to make it a functional interface.
>
> **[0:30](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=30)** So this method is just going to print out some text to the console.
>
> **[0:34](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=34)** So it's going to be a void return type, and I'll call it, say hello.
>
> **[0:39](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=39)** And I don't need to implement the body of the method here, because this is in the interface.
>
> **[0:43](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=43)** It's also a good practice to add the functional interface annotation to the class.
>
> **[0:47](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=47)** So above where it says public interface greeting, I'm going to add @functionalInterface.
>
> **[0:53](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=53)** This doesn't really look like it does anything, but under the hood, it's basically making sure that I can't add any more methods.
>
> **[0:59](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=59)** So let's say someone came along later, and they wanted to add a say goodbye method.
>
> **[1:03](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=63)** And they did void say goodbye.
>
> **[1:08](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=68)** Now I've got a compiler warning that basically tells me I can't have more than one method in this interface, because it's a functional interface.
>
> **[1:16](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=76)** So I'm going to go ahead and remove that say goodbye method again.
>
> **[1:21](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=81)** Now the next step is to implement this functional interface.
>
> **[1:24](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=84)** The best and quickest way is to do this with a Lambda.
>
> **[1:27](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=87)** But first, I'm going to do it in the long hand object oriented way.
>
> **[1:30](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=90)** This is because it's easier to understand this way to begin with.
>
> **[1:33](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=93)** And if you understand this bit, then you'll understand what Lambdas are doing under the hood and how they work.
>
> **[1:37](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=97)** So to create my concrete implementation, I'm going to right click on com.example again and go to new Java class.
>
> **[1:44](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=104)** And I'm going to call this one Hello Greeting.
>
> **[1:49](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=109)** And this one needs an implement greeting added to it to make sure that it implements my greeting interface.
>
> **[1:55](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=115)** So now I need to override the say hello method.
>
> **[1:58](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=118)** So I'm going to do public void say hello.
>
> **[2:02](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=122)** And I'm just going to put a system.out.printline with the phrase, hello world in it.
>
> **[2:07](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=127)** And there's a handy IntelliJ shortcut for this, which is SOUT and then Tab.
>
> **[2:11](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=131)** And that will fill out system.out.printline for me.
>
> **[2:14](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=134)** And in the brackets, I'm just going to put hello world.
>
> **[2:19](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=139)** So now I've got my functional interface, and my concrete implementation of it.
>
> **[2:23](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=143)** And now I just need somewhere to run my code.
>
> **[2:26](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=146)** So I'm going to create one more Java class by right clicking on com.example again and going to new Java class.
>
> **[2:32](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=152)** And I'm going to call this one Main.
>
> **[2:35](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=155)** Now I want a public static void main method in here to run some code.
>
> **[2:39](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=159)** So I'm going to use another handy shortcut, which is PSVM and then Tab.
>
> **[2:43](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=163)** And that will fill out public static void main for me.
>
> **[2:46](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=166)** And now I'm going to create greeting object.
>
> **[2:49](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=169)** So I'm going to do greeting, and let's call it Greeting.
>
> **[2:54](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=174)** And then I'm going to do equals new hello greeting.
>
> **[2:59](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=179)** And then I can do greeting.sayhello to call my say hello methods.
>
> **[3:04](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=184)** And this should print out my hello world message to the console.
>
> **[3:07](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=187)** So I'm going to run this now by clicking on the green arrow on the left, and clicking on run main domain.
>
> **[3:14](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=194)** And I can see down in the console here, that it prints out my message, hello world, as expected.
>
> **[3:19](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=199)** So that's one way of implementing the interface, but it was quite a lot of code for something quite small.
>
> **[3:24](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=204)** I mean, it's just a single method, and I had to create an interface and then a class to implement it.
>
> **[3:29](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=209)** But because it's a functional interface, there's actually a quicker way of doing this.
>
> **[3:33](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=213)** I didn't actually need to create the class, hello greeting.
>
> **[3:35](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=215)** Instead, I can just create a new instance of greeting right here in the main method, and override the say hello method right here.
>
> **[3:42](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=222)** So let's see what that looks like.
>
> **[3:45](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=225)** So I'm going to do greeting, and let's call this new one Greeting2, and then I'm going to do equals new greeting.
>
> **[3:56](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=236)** And then IntelliJ again has a shortcut which will fill out the rest for me.
>
> **[3:59](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=239)** So I'm going to press Enter, and it adds in the overridden say hello method for me.
>
> **[4:05](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=245)** So I'm going to put in the same content as in my original hello greeting one.
>
> **[4:09](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=249)** So I'm going to do system.out.printline, and pass in hello world again.
>
> **[4:16](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=256)** And then I just need to add a semicolon after this curly brace.
>
> **[4:21](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=261)** Then I can call my say, rephrase.
>
> **[4:23](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=263)** Then I can call my say hello method in the same way.
>
> **[4:26](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=266)** So I'm going to do greeting2.sayhello.
>
> **[4:31](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=271)** And let's run this again by clicking on the green arrow again.
>
> **[4:37](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=277)** And now I can see in the console, I've got two hello world messages.
>
> **[4:41](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=281)** We can actually now make this even shorter by using a Lambda instead.
>
> **[4:45](https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces?u=76281980&t=285)** So in the next video, I'm going to show you how to make this cleaner and more concise by using Lambdas.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (14), let (6), class. (4), public (4), lambda (2)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (1), click on (1), go to (1)
> **Env Vars:** sout (1), psvm (1)
> **Tools:** intellij (2)
> **Code Identifiers:** functionalinterface (1)
> **Cross-References:** in the next (1)
> **Best Practices:** good practice (1)

#### Using lambdas
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=0)** - [Instructor] Now let's rewrite this code in a cleaner and more concise way by using lambdas.
>
> **[0:05](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=5)** So I've implemented my functional interface right here in the main method with greeting2.
>
> **[0:09](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=9)** But if I hop over a new greeting, IntelliJ actually gives me a message that says anonymous new greeting can be replaced with lambda.
>
> **[0:16](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=16)** And if I click on replace with lambda, it would actually generate a lambda for me but I'm going to write it out so we can see how it works.
>
> **[0:23](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=23)** So I'm going to create a new greeting object.
>
> **[0:25](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=25)** So I'm going to do greeting and let's call it greeting3 and an equal sign.
>
> **[0:31](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=31)** And then on this side of the equal sign, the first thing I'm going to do is I'm going to put a pair of brackets.
>
> **[0:36](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=36)** This is where you'd pass in any arguments if there were any.
>
> **[0:39](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=39)** So this pair of brackets is actually doing the same thing as this pair of brackets after say hello in greeting2.
>
> **[0:46](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=46)** Then the next thing I need to do is I need to write an arrow.
>
> **[0:49](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=49)** So I'm going to do a dash and then a left angle bracket.
>
> **[0:53](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=53)** And on the other side of that, I essentially put the body of the method.
>
> **[0:56](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=56)** So again, I'm just going to do a system.out.println and again, I'm going to pass in hello world.
>
> **[1:04](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=64)** And I need to put a semicolon at the end as usual.
>
> **[1:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=67)** Then I can call my say hello method in the same way as with the others.
>
> **[1:10](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=70)** So I'm going to do greeting3.sayHello and I'll run this again, just to check it works so I'm going to click on the green arrow and choose run.
>
> **[1:21](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=81)** And again, I can see I've got hello world.
>
> **[1:23](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=83)** So I can see that this lambda is doing the same thing as the other ones.
>
> **[1:27](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=87)** But this one's only taken one line of code to write that out.
>
> **[1:30](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=90)** So far, I've been demonstrating the different ways to implement my greeting interface, so now let's try using an interface which has a single method that takes some arguments.
>
> **[1:38](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=98)** Let's say, I want a lambda that takes two numbers as arguments and then does some calculations on them and returns a result of that calculation.
>
> **[1:46](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=106)** So I'm going to create a new interface.
>
> **[1:48](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=108)** So I'm going to right click on com.example and go to new Java class and select the interface option.
>
> **[1:55](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=115)** And I'm going to call this one calculator.
>
> **[1:58](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=118)** So I've got my interface and I'm going to add the functional interface annotation.
>
> **[2:03](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=123)** And now I need my single method.
>
> **[2:05](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=125)** So this is going to return an int.
>
> **[2:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=127)** So I'm going to do int, and I'll call the method calculate.
>
> **[2:12](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=132)** And then in the brackets, I'm going to pass in two integers.
>
> **[2:15](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=135)** So I'm going to do int X, int Y.
>
> **[2:19](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=139)** So I've got my functional interface.
>
> **[2:22](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=142)** I don't need to implement it anywhere because I'm just going to use a lambda.
>
> **[2:25](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=145)** So I'm going to go back to my main method and under the greetings, I'm going to create a calculator.
>
> **[2:32](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=152)** So I'm going to do calculator, calculator = and now I need to implement the calculate method using a lambda.
>
> **[2:39](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=159)** So the first thing I'm going to do, again, is a pair of brackets.
>
> **[2:43](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=163)** Then inside the brackets, I know I need to pass in the two ints.
>
> **[2:47](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=167)** So I'm going to do int X, int Y.
>
> **[2:51](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=171)** And then I need an arrow so I'm going to do the dash and then the left angle brackets.
>
> **[2:57](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=177)** And now I can do my calculation.
>
> **[2:59](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=179)** So let's say I want to do some complex calculations that are going to take up multiple lines, rather than the single line system.out.println.
>
> **[3:08](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=188)** So to do multiple lines, I can use curly braces.
>
> **[3:11](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=191)** So I'm going to do a curly brace and press enter.
>
> **[3:14](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=194)** And after the closing brace, I need to put a semicolon.
>
> **[3:17](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=197)** Then in between them, I can put my code to do the calculation.
>
> **[3:21](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=201)** So let's say I want to do some kind of calculation where I generate a random number and then I times X and Y together and add the random number to it.
>
> **[3:30](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=210)** So I'm going to use the random class in java.util.
>
> **[3:34](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=214)** So I'm going to do random, random = new random and then to generate the random number, I'm going to do int randomNumber = random.nextInt and I'm going to pass in 50.
>
> **[3:50](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=230)** So that will generate a random int between zero and 49.
>
> **[3:54](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=234)** Then I want to return X times Y plus my random number.
>
> **[3:58](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=238)** So I'm going to do return X * Y + randomNumber.
>
> **[4:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=247)** So I've got my lambda, now I need to call that calculate method.
>
> **[4:11](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=251)** So I'm going to do calculator.calculate and let's pass in one and two.
>
> **[4:17](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=257)** And then I'm also going to wrap this in a system.out.println so that I can see the results.
>
> **[4:22](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=262)** So I'm going to do system.out.println and pass in calculator.calculate, and then pass in one and two.
>
> **[4:29](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=269)** So let's run this again.
>
> **[4:34](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=274)** And I can see I've got my five hello worlds and my random number added to one times two, which is five in this case.
>
> **[4:43](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=283)** So I've implemented my new calculator interface, but actually I didn't need to create that interface at all.
>
> **[4:50](https://www.linkedin.com/learning/java-lambdas-and-streams/using-lambdas?u=76281980&t=290)** In the next video, I'll show you how actually, I could have saved myself from writing that code and didn't need to implement the calculator interface.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (11), let (8), lambda (8), pass (8), case. (1)
> **UI Navigation:** click on (3), go to (1), select the (1)
> **Code Identifiers:** randomnumber (2), sayhello (1), nextint (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** intellij (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using existing interfaces
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=0)** - [Instructor] Most of the time, you actually won't need to write your own functional interfaces.
>
> **[0:04](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=4)** Java's already got quite a few implementations of functional interfaces that you can use.
>
> **[0:08](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=8)** In the previous video, I created an interface called Calculator and this has a single method, calculate that takes two ints as inputs and returns an int, but Java's actually already got a ready-made interface that does exactly this.
>
> **[0:21](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=21)** There's a package called java.util.function, which contains lots of useful functional interfaces.
>
> **[0:27](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=27)** So, let's take a look at the documentation at docs.[oracle.com](https://oracle.com) for this package, java.util.function.
>
> **[0:34](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=34)** If you take a look at this page you can see a list of the ones they already have, and actually most of your use cases for writing lambdas will probably be covered by one of the ones in here.
>
> **[0:42](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=42)** For most lambdas, you basically want to pass in a certain number of arguments and either return something or return nothing.
>
> **[0:49](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=49)** A commonly used one is this one called Function, which represents a function that accepts one argument and produces a result.
>
> **[0:57](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=57)** So let's say you want to pass in one argument and get one thing back of a type of your choosing.
>
> **[1:02](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=62)** In that case, you could use Function.
>
> **[1:04](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=64)** So, for my Calculator interface, I said the method takes two ints and returns an int.
>
> **[1:09](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=69)** There are actually quite a few int-specific interfaces here, and there's one in particular called IntBinaryOperator, and this represents an operation upon two int-valued operands and produces an int-valued result.
>
> **[1:23](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=83)** So, basically it takes two ints as arguments and returns an int, which is exactly the same as what my Calculator interface does.
>
> **[1:30](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=90)** So, if I go back to my code and back to my Main method, I can actually replace this calculator with IntBinaryOperator.
>
> **[1:40](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=100)** So the other thing I need to do is I need to change the name of the method.
>
> **[1:43](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=103)** So in my interface, I called it calculate, but in this case, the method in this interface is called applyAsInt, so this will do exactly the same thing.
>
> **[1:53](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=113)** And now I can actually go ahead and delete my Calculator interface.
>
> **[1:57](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=117)** So I'm going to right click on Calculator, and go to Delete, and choose Okay.
>
> **[2:04](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=124)** Now, I'm going to run this one more time just to check it still works.
>
> **[2:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=127)** So I'm going to click on the green arrow, and go Run Main.main, and I can see I still get my number, which is a random number added to one times two.
>
> **[2:16](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=136)** So, this is an example of where you don't actually normally have to write your own functional interface.
>
> **[2:21](https://www.linkedin.com/learning/java-lambdas-and-streams/using-existing-interfaces?u=76281980&t=141)** You can use one of the ready-made ones in the JDK.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (8), function (5), let (2), pass (2), case, (2)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is called (1), is a  (1), is an  (1)
> **Cross-References:** previous video (1), go back to (1)
> **CLI Commands:** go run (1)
> **Code Identifiers:** applyasint (1)
> **URLs:** [oracle.com](https://oracle.com) (1)
> **Env Vars:** jdk (1)


### 3. Streams

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Understanding streams
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=0)** - [Instructor] The other big important feature that was introduced in Java 8 was the streams API.
>
> **[0:05](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=5)** When you use streams together with lambdas, the streams API allows you to process groups of elements in powerful ways using functional style programming.
>
> **[0:12](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=12)** Like with lambdas, the syntax can take a bit of practice to get used to, but once you have got used to it, streams allow you to write nice, concise code.
>
> **[0:20](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=20)** And being able to read and understand streams with lambdas is really important because a lot of Java code that's been written since Java 8 uses this syntax.
>
> **[0:28](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=28)** So let's think about an example of where streams might be used.
>
> **[0:32](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=32)** Let's say we have an array list of strings containing the names of countries, and let's say you want to process the elements in that list in some way.
>
> **[0:40](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=40)** So for example, you want to capitalize all the letters and then you want to filter out all the countries beginning with a C, and then you want to print out those countries to the console.
>
> **[0:49](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=49)** So without streams, the first thing I'd probably do is create a forEach loop.
>
> **[0:53](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=53)** So I'd say for each country in my list, do something.
>
> **[0:56](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=56)** Then, to tackle the first requirements of capitalizing everything, I can do country = country to upper case, and then print out the country name to the console.
>
> **[1:05](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=65)** The next requirement is to filter out countries beginning with the letter C.
>
> **[1:08](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=68)** So I can add an if statement and say if the country doesn't begin with a C, then print it out.
>
> **[1:14](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=74)** The final requirement is to sort the countries alphabetically.
>
> **[1:17](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=77)** I need to do this before my forEach loop so I've put it at the top and I've put a collections.sort and parsed in countries.
>
> **[1:23](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=83)** Now let's see what this would look like with streams.
>
> **[1:26](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=86)** With the streams API, you can chain methods together to keep processing the list in different ways.
>
> **[1:31](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=91)** So each new line here handles each of the requirements.
>
> **[1:34](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=94)** The map method is used to capitalize the strings, the filter method is to filter out countries beginning with a C, and the sorted method puts the results in alphabetical order.
>
> **[1:43](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=103)** And finally, the forEach method prints out each one to the console.
>
> **[1:46](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=106)** It's important to note that this code won't actually change the list of countries at all.
>
> **[1:50](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=110)** This is because streams are immutable, so you can't go making changes to elements in the middle of the stream.
>
> **[1:56](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=116)** In some of these methods, you'll see that Lambda star notation is used.
>
> **[1:59](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=119)** So this is an example of a function being parsed into a method as an argument, which is something that's quite often done in functional programming.
>
> **[2:06](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=126)** It's also worth noting that the forEach method has to go at the end here.
>
> **[2:10](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=130)** This is because there are two types of method in the streams API, intermediate and terminal.
>
> **[2:15](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=135)** Map filter and sorted are examples of intermediate operations and forEach is an example of a terminal operation.
>
> **[2:22](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=142)** Intermediate operations all return a stream as a result, so you can keep chaining them together for as long as you like.
>
> **[2:29](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=149)** Terminal operations return something else, so either void or some other return type, so they have to go at the end of the chain.
>
> **[2:36](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=156)** So to summarize, stream operations are either intermediate or terminal.
>
> **[2:40](https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams?u=76281980&t=160)** Terminal operations have to come last if you're chaining methods together and streams are immutable so you can't make changes to the elements in the original list when you perform stream operations on them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), finally, (1), lambda (1), function (1)
> **Code Identifiers:** foreach (5)
> **Tools:** terminal (5)
> **Env Vars:** api (4)
> **Versions:** java 8 (2)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)

#### Using streams
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=0)** - [Instructor] So now let's start writing some streams.
>
> **[0:03](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=3)** There are two ways to create a stream, and luckily they're both quite simple.
>
> **[0:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=7)** The most common use of a stream is to create a stream from an existing array or collection.
>
> **[0:12](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=12)** So, I have a class already set up here called Main which has a main method in it, and in my method, I've got an array called scores with some numbers in.
>
> **[0:20](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=20)** So it's got 80, 66, 73, 92, and 43.
>
> **[0:24](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=24)** So, to create a stream from this array, I first need to create a stream variable.
>
> **[0:28](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=28)** So I'm going to type stream, and then in angle brackets, I put the type of the stream.
>
> **[0:33](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=33)** So this one is going to be integer, and I also need to make sure that I'm importing the right class.
>
> **[0:39](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=39)** So IntelliJ will do this for me if I click Alt + Enter, and it will import java.util.stream.Stream.
>
> **[0:47](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=47)** So, I need to give this variable a name.
>
> **[0:49](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=49)** So I'm going to call it scoresStream, and then after the equals I'm going to do Arrays.stream, and then pass in my array.
>
> **[0:58](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=58)** So, I'm going to pass in scores.
>
> **[1:00](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=60)** So, I've got my first stream.
>
> **[1:02](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=62)** I can also create a stream from a collection.
>
> **[1:05](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=65)** So, under here I have an array list of strings called shoppingList, and I've added some shopping items to the list.
>
> **[1:11](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=71)** So in my list I've got coffee, bread, pineapple, milk, and pasta.
>
> **[1:16](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=76)** So to create a stream from this, I again create a new variable.
>
> **[1:19](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=79)** So, I'm going to do Stream and then in angle brackets, the type.
>
> **[1:22](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=82)** So, the one is going to be of type String, and I'm going to call this one shoppingListStream.
>
> **[1:32](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=92)** Then I can do equals, and then after the equals, I do shoppingList.stream, and now I've created a stream from my array list.
>
> **[1:42](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=102)** The other option is to create a stream without a collection or an array at all.
>
> **[1:46](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=106)** I can just pass in the elements I want to be in the stream.
>
> **[1:49](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=109)** So, let's say I want to create a stream with some strings in it, which are just going to be letters.
>
> **[1:54](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=114)** So, I'm going to create another variable of type stream, and this one is also going to contain strings.
>
> **[1:59](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=119)** So I'm going to put string in angle brackets, and I'm going to call this one lettersStream, then I can do equals Stream.of, so I'm using the of method, and then I just pass in what I want to be in the stream.
>
> **[2:14](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=134)** So I'm going to pass in some letters.
>
> **[2:15](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=135)** So let's just pass in A, B, and C.
>
> **[2:21](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=141)** So now I have three streams.
>
> **[2:24](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=144)** Obviously, this code doesn't really do anything.
>
> **[2:26](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=146)** I've just got three stream variables that I'm not doing anything with.
>
> **[2:29](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=149)** So let's do something with one of our streams to see how they really work.
>
> **[2:32](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=152)** I'm going to use my shoppingList stream because that's the slightly more interesting one.
>
> **[2:36](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=156)** Let's say I want to sort all the items in my shoppingList in alphabetical order.
>
> **[2:40](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=160)** Luckily the streams API has a handy method that can be used for this called sorted.
>
> **[2:45](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=165)** So, all I need to do is I need to do shoppingListStream.sorted, and that will sort everything in alphabetical order.
>
> **[2:53](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=173)** So I'm going to run the app and see what happens.
>
> **[2:55](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=175)** So, I'm going to click on the arrow next to public class Main, and click on Run Main domain, and nothing actually happens.
>
> **[3:02](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=182)** There's nothing in the terminal.
>
> **[3:03](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=183)** This is because I sorted the elements, but I've not done anything with the result of that.
>
> **[3:08](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=188)** So let's say I want to print out the result of the console.
>
> **[3:11](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=191)** So I'm going to add another method onto the end of here called for each.
>
> **[3:15](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=195)** So, I just add dot forEach.
>
> **[3:19](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=199)** So, IntelliJ is telling me that this method takes a Consumer as an argument.
>
> **[3:24](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=204)** So, I'm going to have a look at where this forEach method is defined.
>
> **[3:27](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=207)** In IntelliJ I can use the keyboard shortcut Command + B on Mac, or Control + B on Windows, and this will take me to the method definition.
>
> **[3:35](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=215)** So I'm going to click on Command + B, and this takes me to the stream class which is part of the JDK, and it takes me to the forEach method.
>
> **[3:42](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=222)** And again, here, it says that this needs a Consumer.
>
> **[3:45](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=225)** So let's click through again to Consumer.
>
> **[3:47](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=227)** So I'm going to do Command + B again, and now I'm in the Consumer class, and I can actually see that this is a functional interface, and it just has one single method called accept.
>
> **[3:58](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=238)** So accept takes a single argument and has a void return type.
>
> **[4:02](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=242)** Because it's a functional interface, this means I can use a lambda for this.
>
> **[4:07](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=247)** So I'm going to go back to my Main class to where I've got my forEach, and in here I need to put a lambda.
>
> **[4:13](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=253)** So, the first thing I need to do when I write a lambda is I need to write any arguments.
>
> **[4:18](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=258)** So, this is going to take a string and I'm going to call it item.
>
> **[4:22](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=262)** I don't need to explicitly say that this is a string because I've created a stream of strings already.
>
> **[4:26](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=266)** So I'm just going to call it item, and then I need to do my arrow.
>
> **[4:30](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=270)** So, I'm going to do a dash and a left angle bracket, and then after this is the body.
>
> **[4:36](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=276)** So I just want to do system.out.println item.
>
> **[4:40](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=280)** So I'm going to do system.out.println, and pass in item.
>
> **[4:44](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=284)** So if I rerun this app, it should print out the contents of my stream, and here's my shopping list now sorted in alphabetical order.
>
> **[4:51](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=291)** So I've got bread, coffee, milk, pasta, and pineapple.
>
> **[4:54](https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams?u=76281980&t=294)** So, that's how you'd use streams to sort items alphabetically, and print them out to the console.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (7), lambda (3), type. (2), interface (2)
> **Code Identifiers:** shoppinglist (4), foreach (4), shoppingliststream (2), scoresstream (1), lettersstream (1)
> **Tools:** intellij (3), terminal (1)
> **UI Navigation:** click on (3)
> **Env Vars:** api (1), jdk (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)

#### More streams operations
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=0)** - [Narrator] So now I've got my shopping list, and I'm sorting the items alphabetically and printing out the results using Streams.
>
> **[0:06](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=6)** So now, let's see what other cool things I can do with the Streams API.
>
> **[0:10](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=10)** Let's say I want to make everything in my shopping list be written in capital letters.
>
> **[0:14](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=14)** The Streams API has a method called map, which I can use to do this.
>
> **[0:17](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=17)** So I'm not going to put this map method, so I'm not going to put app method at the end of this chain of methods here on my Stream.
>
> **[0:24](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=24)** For each has to go last because it's a terminal method.
>
> **[0:27](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=27)** So no methods can go after that.
>
> **[0:29](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=29)** But sorted is an intermediate method, and so is map.
>
> **[0:33](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=33)** So I can put these anywhere before there for each.
>
> **[0:35](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=35)** So I'm going to put it after the sorted one.
>
> **[0:38](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=38)** And I'm going to put it on a new line just because I think it's a bit more readable, because it doesn't have to be on a new line.
>
> **[0:43](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=43)** So I'm going to do .map.
>
> **[0:47](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=47)** And this map method takes a function as an argument.
>
> **[0:50](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=50)** You might remember from the Lambda exercise, that function is a functional interface with a method that takes one argument and returns one thing.
>
> **[0:58](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=58)** In this case, the argument is the shopping list item.
>
> **[1:01](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=61)** And I want to return an uppercase version of that string.
>
> **[1:03](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=63)** So the first thing I need is my argument, which is going to be the item.
>
> **[1:08](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=68)** So I'm going to do item and then an arrow, and then I need the body.
>
> **[1:12](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=72)** So I want to do this item to uppercase.
>
> **[1:15](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=75)** So I'm going to do item.toUpperCase.
>
> **[1:21](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=81)** So let's run the app again.
>
> **[1:24](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=84)** And, now, in the console, I can see I've got my shopping list sorted in alphabetical order, but also, everything is written in upper case.
>
> **[1:31](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=91)** It's actually important to remember with map that the purpose of this method, it's actually important to remember with map, that the purpose of this method is to create a new object rather than modify an existing one.
>
> **[1:41](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=101)** This is something that can seem odd when you're learning functional programming.
>
> **[1:44](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=104)** In this case, it seems to work nicely, because that's a upper case method actually returns a new string object.
>
> **[1:50](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=110)** I haven't changed the original string at all.
>
> **[1:51](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=111)** But if you had a stream of objects, and you're trying to change a field on the object with a set method, for example.
>
> **[1:58](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=118)** So let's say you have a person and you're trying to do person.setname.
>
> **[2:02](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=122)** You wouldn't be able to do that here.
>
> **[2:04](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=124)** You'd have to create a whole new person object and set the value on the new object.
>
> **[2:09](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=129)** So now, let's say I want to get the items beginning with a P.
>
> **[2:12](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=132)** The Streams API has a method for that too, called filter.
>
> **[2:16](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=136)** So I'm going to chain another method onto this and I'm going to .filter.
>
> **[2:22](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=142)** So this one takes a predicate argument.
>
> **[2:25](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=145)** Again, this is a functional interface, and this one takes a single argument, but returns a billion.
>
> **[2:30](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=150)** So I need to write another Lambda.
>
> **[2:32](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=152)** Again I'm going to call the argument item, and then I need an arrow.
>
> **[2:36](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=156)** And this time, I need something that returns either true or false.
>
> **[2:40](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=160)** So I want to return true if the item begins with P, 'cause I only want items beginning with P in this case.
>
> **[2:46](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=166)** So I'm going to do item.startsWith and pass in the letter P.
>
> **[2:53](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=173)** I know it'll always be an uppercase P, because I'm doing this after I've called there to uppercase method.
>
> **[2:58](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=178)** So it's all going to be in capitals.
>
> **[3:00](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=180)** So now, if I run the app again, I can see I've just got the items beginning with P, and they're still in alphabetical order and they're still capitalized.
>
> **[3:09](https://www.linkedin.com/learning/java-lambdas-and-streams/more-streams-operations?u=76281980&t=189)** So those are some of the most common methods you'll find with the Streams API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), lambda (2), interface (2), case, (2)
> **Env Vars:** api (4)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** touppercase (1), startswith (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Advanced streams operations
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=0)** - [Speaker] So now we've covered the most common uses of streams.
>
> **[0:03](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=3)** Let's take a look at some slightly more advanced features and concepts.
>
> **[0:06](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=6)** So let's find out a bit more about how streams work.
>
> **[0:09](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=9)** So I've got this stream here where I'm applying lots of operations to my stream.
>
> **[0:13](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=13)** So I'm sourcing it, I'm mapping the items to uppercase.
>
> **[0:16](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=16)** I'm filtering it so there's only items beginning with P.
>
> **[0:19](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=19)** And then I'm printing them all out.
>
> **[0:21](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=21)** So if I run this now, I just get pasta and pineapple in capital letters.
>
> **[0:27](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=27)** Now let's say at some point later on, I want to print it out again.
>
> **[0:31](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=31)** So underneath my stream, let's say I do shoppingList.Stream and I do forEach.
>
> **[0:37](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=37)** And then again, I'm going to do item arrow System.out.println and pass in item.
>
> **[0:45](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=45)** So I'm going to run this again.
>
> **[0:47](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=47)** And this time I get an exception.
>
> **[0:49](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=49)** Specifically, an illegal states exception.
>
> **[0:53](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=53)** And it says that the stream has already been operated upon or closed.
>
> **[0:57](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=57)** This is because streams can only be used once.
>
> **[1:00](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=60)** Streams aren't designed for storing objects.
>
> **[1:02](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=62)** They're designed for performing operations on groups of objects.
>
> **[1:04](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=64)** We can't do that, so I'm going to delete that line and instead, let's see what happens if I print out my original shopping list.
>
> **[1:11](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=71)** So I'm going to do System.out.println and pass in shoppingList.
>
> **[1:15](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=75)** So if I run this again, as you might expect, this original list hasn't changed at all.
>
> **[1:21](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=81)** It's still got all my items in, in lower a case letters, in the original order.
>
> **[1:25](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=85)** This is because I created a new stream here and performed operations on the stream.
>
> **[1:31](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=91)** In fact, I didn't really need to create this variable here because I'm not actually using it anywhere.
>
> **[1:37](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=97)** Instead, I could get rid of this and here, I could do shoppingList.stream.
>
> **[1:45](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=105)** But let's say I do want to keep the results of my streams somewhere so that I can refer to them or use them later on.
>
> **[1:51](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=111)** In this case, I need to create a new collection and save the results to that new collection.
>
> **[1:56](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=116)** So in front of my stream, I'm going to create a variable and it's going to be another list.
>
> **[2:00](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=120)** So I'm going to do list and it's going to be of type string.
>
> **[2:04](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=124)** So in angle brackets, I'm going to put String and I'm going to call this one sortedShoppingList.
>
> **[2:13](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=133)** So I need an equals and then the other side can be my stream with all of its operations.
>
> **[2:18](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=138)** So I can see immediately that I get a compile time error.
>
> **[2:21](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=141)** This is because my terminal method, forEach has a void return type.
>
> **[2:26](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=146)** So I need to replace this with a method that's going to return a collection.
>
> **[2:30](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=150)** So I'm going to get rid of this forEach line.
>
> **[2:32](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=152)** And instead I'm going to use a method called collect.
>
> **[2:36](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=156)** So I'm going to .collect and pass in, and then I'm going to pass in Collectors.toList.
>
> **[2:43](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=163)** So now let's print out this new list to see what we've got in it.
>
> **[2:47](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=167)** So I'm going to do system.out.println and pass in sortedShoppingList.
>
> **[2:53](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=173)** So let's run this again and see what we get.
>
> **[2:56](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=176)** So now I've got two array lists and the first one is sorted in alphabetical order and capitalized and filtered.
>
> **[3:02](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=182)** So only the ones begin with P are in it.
>
> **[3:04](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=184)** So everything I did on my stream.
>
> **[3:06](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=186)** And the other one is still the original with no changes made to it.
>
> **[3:10](https://www.linkedin.com/learning/java-lambdas-and-streams/advanced-streams-operations?u=76281980&t=190)** So it's important to remember that streams are for performing operations on a group of elements in a functional style and not for storing things.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (5), delete (1), case, (1), type. (1)
> **Code Identifiers:** shoppinglist (3), foreach (3), sortedshoppinglist (2), tolist (1)
> **CLI Commands:** find (1)
> **Tools:** terminal (1)
> **Speakers:** - [speaker] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continuing on with Java
> [LinkedIn Learning](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=0)** - [Instructor] This brings us to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=2)** Well done on completing it, and thanks for joining me.
>
> **[0:05](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=5)** Hopefully you now feel more confident in understanding lambdas and streams and how to use them in your code.
>
> **[0:10](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=10)** The best way to keep learning is to keep practicing, so feel free to add your own tests to the ones in the exercises.
>
> **[0:16](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=16)** If you want to keep learning more about Java, check out the many other Java courses in the LinkedIn Learning library.
>
> **[0:22](https://www.linkedin.com/learning/java-lambdas-and-streams/continuing-on-with-java?u=76281980&t=22)** Good luck with your continued learning.

> [!info]- Semantic Content
>
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