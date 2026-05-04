---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: java-data-structures-14403471
url: "https://www.linkedin.com/learning/java-data-structures-14403471"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 6/21/2024
learners: 346150
skills:
  - Data Structures
  - Java
exercise_files: true
github: "https://github.com/LinkedInLearning/java-data-structures-3001429"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQELe07gbOJkkw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351837356?e=2147483647&amp;v=beta&amp;t=qF2X11bb4lrEAT8rSE6ZGdOhnBHco4gvcAZ51lNwMYE"
linkedin_topic: Data Science
learning_paths:
  - '[Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)'
  - '[Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)'
prev_courses:
  - '[Java Algorithms](Java%20Algorithms.md)'
  - '[Java Object-Oriented Programming](Java%20Object-Oriented%20Programming.md)'
next_courses:
  - null
  - '[Learning JDBC](Learning%20JDBC.md)'
path_nav: '[{"path":"Getting Started as a Java Developer","position":10,"total":10,"prev":"Java Algorithms","next":null},{"path":"Java Foundations Professional Certificate by JetBrains","position":4,"total":5,"prev":"Java Object-Oriented Programming","next":"Learning JDBC"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - topic/web-development
  - skill/data-structures
  - skill/java
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Java-%20Data%20Structures.md)

![Java: Data Structures](https://media.licdn.com/dms/image/v2/D560DAQELe07gbOJkkw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719351837356?e=2147483647&amp;v=beta&amp;t=qF2X11bb4lrEAT8rSE6ZGdOhnBHco4gvcAZ51lNwMYE)

# Java: Data Structures

> Data structures are used in almost all applications, so developers need to know what they are and how to use the most common ones. In this course, instructor Bethan Palmer explains what data structures in Java are and what you can do with some of the most common types. After giving some definitions, Bethan presents what you should consider when choosing a data structure, such as different levels o

> [LinkedIn Learning](https://www.linkedin.com/learning/java-data-structures-14403471) | 49m | Intermediate | 346K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Data structures in Java](#data-structures-in-java)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
  - [Tour of CoderPad](#tour-of-coderpad)
- [**1. Java Data Structures**](#1-java-data-structures) (2 videos)
  - [What is a data structure?](#what-is-a-data-structure)
  - [How to choose a data structure](#how-to-choose-a-data-structure)
- [**2. Using Arrays**](#2-using-arrays) (2 videos)
  - [Understanding arrays](#understanding-arrays)
  - [Using arrays](#using-arrays)
- [**3. Java Collections**](#3-java-collections) (5 videos)
  - [The Collection interface](#the-collection-interface)
  - [LinkedLists](#linkedlists)
  - [Stacks](#stacks)
  - [Queues](#queues)
  - [TreeSets](#treesets)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Data structures in Java](https://www.linkedin.com/learning/java-data-structures-14403471/data-structures-in-java?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/data-structures-in-java?u=76281980&t=0)** - [Bethan] [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) are everywhere in coding. Most applications, even from the smallest and simplest right up to the biggest and most complex, have some form of data structures in them. So because they're used everywhere, being confident using data structures will actually make you a better developer, and knowing how to choose the right one for a certain situation can make a big difference in the performance of your code. So it can make your apps run faster. I'm going to show you what to look for when you're choosing a data structure, and I'll introduce you to some of the most common, and useful ones in [Java](../../Skills/Software%20Development/Java.md). There's also some exercises along the way. So you'll get some hands-on experience of using them yourself. I'm Bethan Palmer. I'm a member of the Java Champions, and I've been working as a Java Developer for the last five years. So if you're ready to improve your Java coding skills, then join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course on data structures in Java.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** make (3)
> **Speakers:** - [bethan] (1)

#### [What you should know](https://www.linkedin.com/learning/java-data-structures-14403471/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/what-you-should-know?u=76281980&t=0)** - [Narrator] Before you get started with this course, there are a few things you should know. You should already be familiar with the basics of writing code and [Java](../../Skills/Software%20Development/Java.md). So if you're completely new to Java, I'd suggest watching the course Learning Java before starting this one. If you're comfortable with the basics of writing Java code it's times open your favorite IDE. I'll be working in IntelliJ which has a free community edition You can download from [jetbrains.com/idea/download](https://jetbrains.com/idea/download). But you can use whichever IDE you're most comfortable with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4)
> **Env Vars:** ide (2)
> **URLs:** [jetbrains.com](https://jetbrains.com) (1)
> **Tools:** intellij (1)
> **Speakers:** - [narrator] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/java-data-structures-14403471/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The examples and exercise files for this course is stored on [GitHub](../../Skills/Software%20Development/GitHub.md). To download them, you'll need to have [Git](../../Skills/Software%20Development/Git.md) installed on your computer. So if you don't, you can go to [git-scm.com/downloads](https://git-scm.com/downloads), and there are options there to download Git for Mac or for [Windows](../../Glossary/Service/Windows.md). So there's a branch for every video where we work on code. All of my examples start with an empty class. So the code in the branches shows the end state of the code I'm demonstrating. You can view a list of all the branches right here in GitHub from the branch dropdown. So if I click up here where it says main, I'll actually get a dropdown which shows every branch available in this course. So if, for example, if I wanted to see the branch 02_02, I could click on it here and the page will update and show all the code for that video. I'm going to show you how to download the code using the command line. Your IDE might have tools to do this visually, which might be easier for you and feel free to use those if you want to. But if you do it from the command line, you can then open the code in any IDE and it will give you some useful practice with the Git commands too. So the first step is to copy the link for the repository. So I'm going to click on this green button here, where it says code. And if I click on these two little squares, it will copy the link for me. Next, I need to go to the command line. So I'm on a Mac, so I'm going to go to my terminal, or if you're on a windows computer, if you search for a command prompt, that will open up your command prompt there as well. Now, the first thing I need to do in here is I need to go to the directory where I want to save the code. The commands are changed directory and the command prompt is CD. So I'm going to type CD and I've got a folder
>
> **[1:36](https://www.linkedin.com/learning/java-data-structures-14403471/using-the-exercise-files?u=76281980&t=96)** called [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) in here. And a little tip, if you press tap in here, it will auto complete the name of your directory. So I'm going to CD into data structures. And you can save this any way you'd like on your computer. I've just created a folder called data structures where I'm going to save the code, but you can save it absolutely anywhere. Now I need to download the code and the commands for that is called Git clone. So I'm going to type Git clone. And then I can just paste the URL. I copy just now in the GitHub window. So I press Enter and that will download the code into my folder. The next step is to open the code in your IDE. I'm going to be using IntelliJ. So I'm going to open up IntelliJ and I click on this button here that says open. Then I just need to go to the folder where I saved the code. So I saved it in a folder called data structures. And in here, it will be called [Java](../../Skills/Software%20Development/Java.md) data structures, 300149. And I just click Open. So by default, the code will start off on the main branch. As I mentioned earlier, I've created branches for each video in the course where we modify code. If you'd like to follow along in IntelliJ, you can use the branches pop-up menu in the lower right-hand corner. So down here, there's a little branch symbol and it says main. So if I click on this, it will show a list of all the possible branches I can use. So let's say I want to go to 02_02. So I just click on here and then it will come up with a menu with checkouts at the top and I just click on Checkouts. Now you might see a little window down in the bottom right
>
> **[3:09](https://www.linkedin.com/learning/java-data-structures-14403471/using-the-exercise-files?u=76281980&t=189)** that says Maven build scripts found. And if you see that click on load Maven projects. Then you might get this second pop-up, which is asking you if you want to trust the Maven project. Feel free to click on trust project. So now I'm on the branch 02_02 and you can find the code in this source menu in main Java. And then there's a class here called array examples. So that's how you change branches inside IntelliJ ID. I'm going to show you how to get from the command line now as well in case we're using a different IDE or just want to get some practice using the command line. So I'm going to go back to my terminal. And the first thing I need to do here is I need to go into the directory where my code is saved. So it saved inside a folder called Java data structures, 3001429. And again, I'm pressing tap to auto complete and then answer. So now I'm inside that directory. The next thing I want to do is check out the branch I want. So let's say I want to check out 02_03. To do that, the command is Git, checkouts and then the name of the branch, so, 02_03 and then I press Enter and it switched to that new branch for me. So if I go back to IntelliJ now, I can see everything's updated. The branch has changed to 02_03. I can see down here in the bottom. And the code for this branch has loaded inside IntelliJ.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Java](../../Skills/Software%20Development/Java.md) (3), [Windows](../../Glossary/Service/Windows.md) (2)
> **Tools:** intellij (6), command line (5), github (3), command prompt (3), terminal (2)
> **UI Navigation:** click on (9), go to (6), dropdown (2), open the (2)
> **CLI Commands:** git (7), cd (3), find (1)
> **Env Vars:** ide (4), url (1)
> **Exercise Files:** download the (2), exercise files (1)
> **Cross-References:** go back to (2)
> **URLs:** [git-scm.com](https://git-scm.com) (1)

#### [Tour of CoderPad](https://www.linkedin.com/learning/java-data-structures-14403471/tour-of-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/tour-of-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors you can use to create and test your own solution to the challenge. These challenges are hosted by CoderPad and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with code challenges, but you can use the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning mobile app if you prefer. The code challenge has four areas, instructions in the top left, a code editor for your answer in the top right, another code editor where you see how your code is used in the bottom right, and a console for outputs in the bottom left. You can use these drag handles to allocate space as you like. For example, I can make the console output bigger, or I can make the answer and test code section wider. To get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that includes a description of the challenge and the challenge's parameters and desired results. Parameters are arguments that will be passed into a method in your code, and they have to be of a particular data type. The return value also has to be of a particular type, and you'll also see that noted in the instructions. The constraint section also has useful information about the parameters that will be passed in. The examples show different argument values and what result would be returned for each of those test cases. Create your answer in the top right code editor. There are comments in the starting code
>
> **[1:32](https://www.linkedin.com/learning/java-data-structures-14403471/tour-of-coderpad?u=76281980&t=92)** showing where to put your solution. When you click test my code, you'll see a message indicating whether your code returned a correct results. So for example, if I click it now, in the console output, it said that I have another one solved and my code returned: 19. If your code isn't successful, you can ask for help. So for example, if I change max to min and press test my code again, this time I get in the console output, "That's not the expected result. Your code returned: 5." The show expected results and show hints variables determine whether you see the expected results and any hints. Change them to a value of true to control the output. So for example, I'm going to change show expected results to true and show hints to true, and now if I click test my code again, this time in the console output, I also see that the expected result is 19 and it gives me a hint about how to solve the challenge. The code editor in the lower right shows how your solution is used. You can change that code to experiments with different test cases. So for example, if I change this five to a six and press test my code again, this time it's returning six as the lowest number. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, you can scroll sideways to see all of the text. When you finish each code challenge, return to the course's table of contents and click on the text explanation of the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)


### 1. Java Data Structures

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a data structure?](https://www.linkedin.com/learning/java-data-structures-14403471/what-is-a-data-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/what-is-a-data-structure?u=76281980&t=0)** - [Instructor] So what actually is a data structure? In any application that you write, it doesn't matter what programming language you're using, there will be data in it. And most likely, you'll want to group that data together in some way. [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) are basically where you store the data together. A simple list is a really common example of a data structure. Say, for example, you have a to-do list application where people can add items to the to-do list. You're going to need somewhere to store the to-do items so you can keep track of them in your app, and somewhere you can retrieve them from later. What you need is a data structure. In this scenario, the to-do items are the data, and then list you put them in is the data structure. So you can think of data structures as a group of things like a group of to-do items, but as well as being a place to put things, they also give you a way to access the data inside them. In the to-do list, we want to be able to access the to-do items, and you'll also want to be able to add items, and delete items from the list. You might also want to iterate over the items and applies some changes to them. Data structures also tell you how the items relate to each other. For example, does it matter what order the things are in or can they be in any random order? Can you have duplicated items in the data structure or do they all have to be unique and different? The answers to these questions will vary for different use cases, and the data structure you choose will be determined by your answers to those questions. The type of data you put in a data structure could be pretty much anything. They could be numbers or strings or billions or bytes, or there could be instances of your own [Java](../../Skills/Software%20Development/Java.md) classes. Say you have a to-do item Java class,
>
> **[1:32](https://www.linkedin.com/learning/java-data-structures-14403471/what-is-a-data-structure?u=76281980&t=92)** you could create a data structure, and put to-do item objects in there. You could even have a data structure made up of other data structures, for example a list of lists. So say you have a list of food, within that you could have a list of fruit, and a list of vegetables. So data structures, and I use a group data together. They give you a way to access, and modify the data, and they define the relationships between the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (5), [Java](../../Skills/Software%20Development/Java.md) (2)
> **Analogies:** for example (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [How to choose a data structure](https://www.linkedin.com/learning/java-data-structures-14403471/how-to-choose-a-data-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/how-to-choose-a-data-structure?u=76281980&t=0)** - [Instructor] Now, there are loads of different kinds of [Data Structures](../../Skills/Software%20Development/Data%20Structures.md). In fact, there are probably more than you'll ever use in your whole career. So how do you decide which one to use? The answer depends on your use case. There are a few things to consider when you're deciding which ones to go for. The first thing to think about is do you know in advance how many items are going to be in the data structure? There might only ever be 10 things in there, or you might have no idea how many items are going to end up inside this thing. Another thing to think about is whether you want to allow duplicates. Sometimes you might not care if your data structure contains several of the same thing, but to other times you might want to enforce that no duplicates are allowed and everything in it has to be unique. Next up is the order of elements. Is it important that the data stays in a specific order? For example, imagine a real life queue of people outside a store. The first person to join is the first person to leave the queue. So in this case, the order needs to stay fixed, but at other times, it might not matter what order the elements are in. Another important thing to think about is the performance of the data structure you choose. Some are quicker if you want to insert and delete elements, but others are quicker at retrieving elements. So it's a good idea to have a think about what you're going to be doing with the data. Are you going to be changing and updating it a lot, or is it going to stay the same the whole time, and you're just going to be finding and accessing elements in it. The time differences might not be noticeable when you start writing a new app, but some bigger applications, or as new app scale up, these things can actually have a huge impact on performance. One more thing to think about is memory. Some data structures take up more memory than others, which can also affect performance.
>
> **[1:33](https://www.linkedin.com/learning/java-data-structures-14403471/how-to-choose-a-data-structure?u=76281980&t=93)** This may seem like a lot to think about for something as simple as choosing a data structure, but the more you use them, the easier it gets, and there's never a perfect data structure, so there will always be some trade offs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2)
> **Analogies:** for example (1), imagine (1)
> **Speakers:** - [instructor] (1)


### 2. Using Arrays

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding arrays](https://www.linkedin.com/learning/java-data-structures-14403471/understanding-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/understanding-arrays?u=76281980&t=0)** - [Instructor] One of the simplest [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) in [Java](../../Skills/Software%20Development/Java.md), and other languages too, is the array. Arrays are objects that contain a fixed number of elements of the same type. So when you create an array, you have to say upfront how many elements are going to be in it. If you change your mind later and decide you want to add some extra elements, you can't just make it bigger, you'd have to create a whole new array. Arrays can contain pretty much any type of value from primitive types like int and double, to object types like string or our own custom types. Every element in the array has to be the same type. So for example, you couldn't have an array where the first element is an int and the second element is a string, that wouldn't be allowed. Arrays are indexed, and they start at zero. So the index of the first element in the array is zero. And the index of the last element in the array is the length of the array minus one. So if an array has four elements in it, the first one is at index zero and the last one is at index three. A really common bug with arrays is trying to access an elements that's out of bounds. For example, trying to access index four in an array of four elements will cause an array index out of bounds exception because the last index is actually three. In Java there's a class called the arrays class, which provides some utility methods that can be performed on arrays. This class can be used to do things like turn the array into a human readable string with a to string method or turning a list into an array and also for searching and sourcing arrays with the sort and binary search methods. Arrays are best learned from seeing some examples. So let's have a look at some code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Using arrays](https://www.linkedin.com/learning/java-data-structures-14403471/using-arrays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/using-arrays?u=76281980&t=0)** - [Instructor] So let's see how we'd go about creating and using arrays in [Java](../../Skills/Software%20Development/Java.md). So I've got a class here called ArrayExamples with a main method in it, and I'm just going to stick all my code in this main method. So to create an array, the first thing I need to do, is I need to put the type of elements that's going to be in it. So to create an array of strings, for example, I would put the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) String, followed by a pair of square brackets, and then the name of my array. So I'm going to call this one weekdays. And then after the equal sign, I put "new String" and then another pair of square brackets and a semi-colon. And inside these square brackets, I need to put how many elements are going to be inside the array and this won't change. So it will be the same for the whole lifetime of the array. So there are seven weekdays, so I'm going to put the number seven. I'm going to print this out now and see what it gives me. So if I do System.out.println, I'm using an IntelliJ shortcut there so if you do, S-O-U-T and press tab, it will complete that automatically for you. And then I'm going to pass in the name of the array, which is weekdays. And I'm going to run this now and see what happens. So to run it, I can click on this green arrow here and do "Run ArrayExamples.main()." And I can see it prints out this Ljava.lang.String and some hash code, which isn't particularly useful. So instead of passing in weekdays, I'm going to do Arrays.toString() and then pass in the name of the array, so weekdays. And make sure that you have the import statements at the top. So IntelliJ added it automatically,
>
> **[1:33](https://www.linkedin.com/learning/java-data-structures-14403471/using-arrays?u=76281980&t=93)** but just make sure you've got the import there for the arrays.toString() method. So let's run this again and see what I get now. And it should give me a more human readable version. So now I've got an array with seven nulls in. What's happening here is when you first create an array, if you don't say what any of the values are going to be, Java will just use the default value for that type. So the default value for a string is null. So for ints it would be zero and for booleans it would be false, and thing like that. So now let's try setting some of the values. I want to set the first one to Monday. So to do that, I can do weekdays. And then in a pair of square brackets, I put the index of the elements I want to change. So to change the first value, I put the number zero, and then after the equal sign, I'm going to put the string Monday. Now I'm going to copy and paste the System.out.println and put this underneath here and run it again. And now I can see that I've got the first value as Monday and all the others are still null. So I could go through and set all the values like this so I could do weekdays one equals Tuesday, weekdays two equals Wednesday and so on. But another way to set arrays is when you create them, instead of saying how many values are going to be in it, you can say straight away, what all the values are. So let's do that with the weekdays variable. I'm going to put weekdays and I'm going to replace this array and create a whole new one. So I'm going to do "new String" and a pair of square brackets.
>
> **[3:08](https://www.linkedin.com/learning/java-data-structures-14403471/using-arrays?u=76281980&t=188)** And then instead of putting a number in the square brackets, I'm going to put a pair of curly braces. And then inside the curly braces, I put the values that I want to be in the array. So I'm going to put Mon for Monday, Tue for Tuesday, Wed for Wednesday, and I'll stop there because I'm lazy and I can't be bothered to write all seven. So let's copy the System.out.println again and put that underneath and rerun it. And now I've got an array with three values in, Monday, Tuesday, Wednesday. So there are two different ways that you can create arrays and instantiate the values inside them. The next thing we might want to do is we might want to iterate over the array. So to do that, one thing I can do is use a for each loop. So I could do for String day in weekdays, so that's going to go through each string in the weekdays array. And let's say I want to print out weekday and then the weekday. So I'm going to do System.out.println and pass in the string "Week day," and then add the day to that string. So I'm going to run this again. Another way you can run the program in IntelliJ is at the top, there's a green arrow that will run the class for you. And so now I can see I've got weekday Mon, weekday Tues, weekday Wednesday. So that for each loop lets me iterate over each value in the array and access it. But I can't actually alter any of the elements when I do it like this. I need an index to keep track of them.
>
> **[4:41](https://www.linkedin.com/learning/java-data-structures-14403471/using-arrays?u=76281980&t=281)** So another way to iterate over them is using a for loop with an index. So I can do for and then int i equals zero for the index. And then i is smaller than weekdays.length. I don't want it to ever be equal to weekdays.length because that would give me an out of bounds exception because the index starts at zero, and then i++. And so let's say I want to make every value in the array, all in capital letters. So to get each element, I'm going to do weekdays and then pass in i for the index and I can do equals weekdays i and I'm going to call the toUpperCase() method. So this should make every element in the array, all in capitals. I'm going to copy and paste the System.out.println again and put this underneath. So let's see what happens when I run it now. And now I can see that every element in the array is all to uppercase. So that's how you'd iterate over the array, if you wanted to make some changes to the elements inside it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (5)
> **Code Identifiers:** tostring (2), touppercase (1)
> **Tools:** intellij (3)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Java Collections

[↑ Back to Table of Contents](#table-of-contents)

#### [The Collection interface](https://www.linkedin.com/learning/java-data-structures-14403471/the-collection-interface-23038543?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/the-collection-interface-23038543?u=76281980&t=0)** - [Instructor] Most [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) in [Java](../../Skills/Software%20Development/Java.md) implements the collection interface. So if you've ever even created a simple list, then you've probably used the classes that implement collection. There are several other interfaces that sits underneath this. So things like list, queue, and set all extends the collection interface. And since Java 21, there's also a new one called sequenced collection. And this provides a more uniform way of getting the first and last elements in the collection. And then there are all the concrete classes that sits underneath these that implements these interfaces. So for example, a realist implements the list interface, which extends the collection interface and PriorityQueue implements queue and HashSet implements set. These are just a couple of examples. There are actually lots more interfaces that extend collection and lots more classes that implements those interfaces. You might hear this structure referred to as the collections framework. It's the backbone of most data structures in Java, so it gets talked about quite a lot. The fact that these classes are all part of the same group of classes that stem from collection at the top is pretty handy. It means that there's a consistent API. There are only a set number of methods to remember when using all of these different classes. For example, add, remove, clear, contains, isEmpty, size and so on. These are all the same in all the different concretes implementations. So once you're used to using those methods, you can use them on loads of different concrete classes. And above the collection interface, there's actually another interface called Iterable. This is the very top of the collections framework. This means that any of the classes in the framework can be iterated over
>
> **[1:33](https://www.linkedin.com/learning/java-data-structures-14403471/the-collection-interface-23038543?u=76281980&t=93)** using an iterator object if you want to. There are lots of differences between collections and arrays and Java. For example, collections can change in size and you don't have to specify when you create them how many items will be in it, so it can grow bigger over time or become smaller as elements are removed. They also can't hold primitive types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (4), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2)
> **Analogies:** for example (3)
> **Definitions:** means that (2)
> **Code Identifiers:** isempty (1)
> **Env Vars:** api (1)
> **Versions:** java 21 (1)
> **Speakers:** - [instructor] (1)

#### [LinkedLists](https://www.linkedin.com/learning/java-data-structures-14403471/linkedlists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/linkedlists?u=76281980&t=0)** - [Instructor] The first data structure from the collections framework I'm going to look at is the LinkedList. This is an interesting one because it's doubly linked, which means that each elements in the list has a reference to the next element and the previous elements. So let's see what it looks like by creating a simple shopping list using a LinkedList. To do that, I do LinkedList. And then in a pair of diamonds brackets, I need to put the type of elements that's going to be in the list. So if I want string to be in my LinkedList, I put string. And then I can give it a name. So I'm going to name this one shoppingList and I can do equals new LinkedList. So now I've got a new empty LinkedList and the next thing is to add some items to it. To do that there's a method called add, so I can do shoppingList.add, and then I'm going to pass in the string apple. Then I'm going to add a few more shopping items. So I'm going to do shoppingList.add and pass in banana, and then shoppingList.add and I'm going to pass in pear. So let's print this out and see what it looks like at the moment. So I'm going to do system.out.println and pass in shoppingList. And I'm going to run this now and see what I get. So in the output down here, I can see I've got a list with three items in it, apple, banana, and pear. I notice that they're in the same order that I added them in the list. So LinkedLists keep items in the same order. Now let's say I wanted to add an item as second place in the list, so not at the end, but after apple and before banana.
>
> **[1:33](https://www.linkedin.com/learning/java-data-structures-14403471/linkedlists?u=76281980&t=93)** I can do that with LinkedLists by using the add method again. So I can do shoppingList.add, and then I'm going to put the index where I want the element to go. LinkedLists start at index zero. So in this example, apple is at index zero and banana is at index one. And I want my new items to be an index one. So I'm going to pass in one and then the name of the item. So I'm going to add a mango. Now I'm going to print this out again. So I'm going to do system.out.println and pass in shoppingList again and rerun it. And now I can see I've got a mango in second place. So it's apple, mango, banana and pear now. LinkedLists are quite quick at adding elements. Like I've just done there. They're quicker than ArrayLists for adding elements and removing them. ArrayLists look really similar to LinkedLists, but behind the scenes, ArrayLists actually raised, like get resized. Whereas on the other hand, a LinkedList is a test of elements where each is linked to the other one. So in this example, the banana has a reference to the pear which comes next, and it has a reference to the mango, which comes before it. And that's changed since I added the mango. So before banana has a reference to apple which is coming before it. So it had to update that reference when I inserted mango. This means that LinkLists are a bit slower, randomly accessing elements because it has to go through and see what one comes next until it gets to the one at once. So ArrayList are quicker for randomly accessing elements, but LinkedLists are quicker for adding and deleting elements from the list. LinkedLists also comes with some handy methods called addFirst, addLast, removeFirst and removeLast to add or remove elements to the front
>
> **[3:09](https://www.linkedin.com/learning/java-data-structures-14403471/linkedlists?u=76281980&t=189)** or the back of the list. So I'm going to give a go with the remove fast method. So I'm going to do shoppingList.removeFirst, and then I'm going to print out the list again, see what's in it now. So I'm going to do system.out.println shoppingList. And when I rerun it, I can see that it's removed apple from the front of the list. So now it's just mango banana and pear. One last thing to know about LinkedLists is they aren't synchronized, which is a good thing in terms of performance and memory and things like that. But it does mean that it's not thread safe. So if you've got multiple threads trying to modify the list at the same time, they might overwrite each other's changes. Luckily, it's really easy to make LinkedLists synchronized, and I'll show you how to do that now. So I'm going to create a new list. So I'm going to do List string and diamond brackets again, and I'm going to call this one synchronizedShoppingList. And I just need to make sure that I've imported the list class and then I can do equals and on the right side, I'm going to do Collections.synchronizedList, and then I can pass in shoppingList. So this will make a copy of the shopping list, but put it in a list that is synchronized. So if I print this out and I do system.outdoorprintln, synchronizedShoppingList and rerun the program, I can see my new list, SynchronizedShoppingList is exactly the same as the old one. So it's made a copy of it, but now it's thread safe and I can just continue using it like a normal LinkedList.

> [!info]- Semantic Content
>
> **Code Identifiers:** shoppinglist (10), removefirst (2), synchronizedshoppinglist (2), addfirst (1), addlast (1)
> **Definitions:** means that (2), is a  (2), is an  (1)
> **CLI Commands:** make (3)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Stacks](https://www.linkedin.com/learning/java-data-structures-14403471/stacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/stacks?u=76281980&t=0)** - [Instructor] The next data structure we're going to look at, is the stack. Stacks are data structure, where the first element you add to it, is the last one you take out. So you can think of it like a real life stack of plates. When you stack plates on top of each other, when you want to pick one up, you would take it from the top of the pile. And the first one you put down stays at the bottom. There's actually a couple of different ways to create a stack in [Java](../../Skills/Software%20Development/Java.md). And neither of them are perfect. There is a stack class, but it has a few limitations. For example, it lets us remove elements from anywhere in the stack. If you imagine a real life stack of plates, this isn't very stack-like behavior. So it's generally recommended to use the deque interface instead. So I'm going to demonstrate using a deque here, but it is worth being aware of the stack class, because you might come across it in older code. So, to create my stack, I'm first going to type deque, which is about D-E-Q-U-E. And then in a pair of diamond brackets, I put the type that's going to be in the deque, say I'm going to put string, and I'm going to call it 'Stack.' And then after the equal sign, I'm going to put new. And then I can't put deque, because deque is an interface. So I need to put a concrete type. And the name of the concrete type I'm going to be using, is called ArrayDeque. So now I want to add some things to my stack. The method for adding things to a stack, is called push. So I'm going to do stack.push, and I'm going to pass in the string first request. So when you're using a stack, you might have a load of requests, where you want to make sure that the last one you add to the stack, is the first one that gets processed.
>
> **[1:34](https://www.linkedin.com/learning/java-data-structures-14403471/stacks?u=76281980&t=94)** And then I'm going to do stack.push and put second request. One more. I'm going to do stack.push and pass in third request. So now let's print out and see what it looks like. So, I'm going to do system.out.println, and pass in stack. So if I run it now, I can see I've got three objects. And the last one I added third request is first, and then second request, and then first request. So it's in reverse order to the order that I added them in. If I did this using the stack class, it would actually print out the elements in the opposite order. So, the first request would be on top, and the third request would be last. Again, this isn't really how stacks should behave. So, is another reason to use the deque interface instead. Now, the method to get the top elements of the stack is called peek. So I'm going to do system.out.println, and pass in stack.peek, to get the first element. And when I rerun it now, I get back third request because that's the item on the top of the stack. So, if I want to remove the first element from the top of the stack, I can use a method called pop. So I'm going to do stack.pop, and then another system.out.println. And I'm going to pass in stack again, to see what the stack looks like now. So if I run this again, I can see that third request has been removed from the top of the stack. So now, I've just got second request, first request. You can also use a method called poll, which is very similar and pretty much does the same thing.
>
> **[3:08](https://www.linkedin.com/learning/java-data-structures-14403471/stacks?u=76281980&t=188)** So if I do stack.poll, and then another system.out.println and pass in stack. When I rerun it, it's removed the top elements again. So now, I'm just down to one thing, first request. The only difference between poll and pop, is when you use pop on an empty key, it will throw a no such element exception. Whereas if you do that with poll, it will overturn now. One last thing to bear in mind is that ArrayDeque is not thread-safe. This means that it's much faster than the stack class, which is synchronized. But, it is something to be aware of. If you use it in a multithreaded context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **Definitions:** is called (3), is a  (1), is an  (1), means that (1)
> **Analogies:** think of it like (1), for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Queues](https://www.linkedin.com/learning/java-data-structures-14403471/queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/queues?u=76281980&t=0)** - Now let's look at the queue data structure. In a queue data structure, the first thing you add is the first thing you take out. Think of it like a real queue of people waiting outside a store. The first person that joins the queue is the first person that gets served. So like with stacks, there's actually multiple ways to implement a queue in [Java](../../Skills/Software%20Development/Java.md), in fact, there's lots of ways. But the good news is that when you know how to do it with one concrete class, it's very similar for all of them. Because they all implement the Queue interface in Java, the methods they have are largely the same. So, when you choose which one to use, you don't have to worry about learning a whole new sets of methods. You can just worry about what specific features you want your queue to have. One way to make a queue is with an ArrayDeque, which is the same class I used to create a stack in the previous video. So I'm going to demo using this ArrayDeque class again. To create my queue, the first thing I'm going to do is type queue. And then in the pair of square brackets, the type of elements in the queue. So I'm going to put string and I'm going to call this queue. And I just need to make sure that I've imported the queue class. It is important to use queue on the left side of the assignment, because that makes it easier to change which concrete type you use later on, if you want to. It also makes it less likely people will accidentally use methods that aren't queue related, because they might then inadvertently change the behavior to not be queue-like. So on the right hand side, I'm going to put the concrete type. I'm going to use a ArrayDeque, so I'm going to put new ArrayDeque. The methods to add items to a queue is called offer. So I'm going to add three people to the queue, person one, person two and person three.
>
> **[1:33](https://www.linkedin.com/learning/java-data-structures-14403471/queues?u=76281980&t=93)** And to do that, I do Queue.offer and then person one, and then Queue.offer again and person two and then queue.offer and person three. So now I've got three people in my queue, let's print it out and see what it looks like. So I'm going to do system.out.print line in person queue. And when I run this, I can see I've got person one, person two and person three. So the first thing I added is at the front of the queue and then person two, and then person three. The last one I added is the last thing in the queue. Now I want to see the item that's first in the queue. So similar to the stack example, I'm going to use the peak method again. So I'm going to do system.out.print line Queue.peak and rerun it. And this tells me that the first thing in the queue is person one. Now let's say I want to remove the first item, to do that I can do queue.poll, and I'm going to print it out again. So I'm going to do system.out.print line and person queue and rerun it. And it's removed person one from the front. So now I've got person two and person three. Unlike stack there's no pop method. So this time I have to use poll. Now, I could actually change this ArrayDeque class to some other concrete implementation. For example, I could change it to LinkedList, so let's change it to LinkedList.
>
> **[3:06](https://www.linkedin.com/learning/java-data-structures-14403471/queues?u=76281980&t=186)** And I don't actually have to make any changes at this point, if I run it again. I can see the output's still the same. So I've got a list of person one, person two, person three. And when I do Queue. Peak to get the first item, it gives me person one. And then when I do Queue. Poll to remove the first item, I still got person two and person three. So everything is exactly the same. And LinkedList is quite a common implementation to use for a queue. But in most cases, the ArrayDeque has better performance. Linkedlist is better if you're removing the current element during iteration though. Another option I could change it to is something called priority key. So I'm going to change Linkedlists to priority key. And let's run it again and see what happens. So this one is slightly different. So I've got person one, person two and person three. And then when I get the first element again as person one, but when I remove that element, what I've got left is person three and person two. So person two and person three have swapped places. What's happening here is with a priority queue, the retrieval order is the natural order. So for strings, it's done alphabetically. So person one is still first because it's first alphabetically, but person three comes before person two alphabetically. So the order's actually person one person three person two. So when I remove the first element, it removes person one, but it leaves person three and then person two, because it's done it alphabetically. If it was a queue of numbers, even if you put the numbers in a random order, the first ones to be retrieved will be the lowest.
>
> **[4:40](https://www.linkedin.com/learning/java-data-structures-14403471/queues?u=76281980&t=280)** And the last one will be the highest number. So that's what priority queue is for. But for this demo, I'm going to put this back to a ArrayDeque because it's one of the more common implementations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2)
> **CLI Commands:** make (3)
> **Analogies:** think of it like (1), similar to (1), for example (1)
> **Cross-References:** previous video (1)
> **Definitions:** is called (1)
> **Speakers:** - now (1)

#### [TreeSets](https://www.linkedin.com/learning/java-data-structures-14403471/treesets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/treesets?u=76281980&t=0)** - [Instructor] Next up, we're going to look at tree sets. Tree sets are data structure that store unique elements in a sorted order. So let's see what that actually looks like. I'm going to create a tree set. So the first thing I want to do is I'm going to type set. It's good practice to use the parent's type on the left hand side. So that means that if you change your mind about which concrete type to use later, you can just change the right hand side and leave the left hand side as it is. So I'm going to type set the interface and in diamond brackets, I'm going to put the type of elements that's going to be in the set. So I'm going to create a tree set of integers, so I'm going to type integer and I need to make sure that I've imported the sets as well. And I'm going to call this one tree set, then I'm going to do equals new tree set. So on the right hand side, I've put the concrete type tree set. Now the methods add elements to a tree set is called add. So I'm going to do tree set dot add one to add the number one to my sets. And then I'm just going to go ahead and add some more random numbers. So let's do tree set dot add 300, tree set dot add 47 and tree set dot add, let's go six.
>
> **[1:14](https://www.linkedin.com/learning/java-data-structures-14403471/treesets?u=76281980&t=74)** Now I'm going to go ahead and print this out to see what it looks like. So I'm going to do system dot out dot print line and pass in tree set. So let's run this and see what I get. And I can see I've got 1, 6, 47, 300. So it's not put them in the order that I added the elements in, but it's put them in ascending order from lowest to highest. So one up to 300. One of the key features of the tree set is that it stores elements by defaults in ascending order. So if a number it would store them going up with the smallest first and the largest at the end. Another feature of tree sets is that you can't store duplicate values. So let's give that a go and see what happens. So I'm going to add a new line and do tree set dot add, and I'm going to try adding another six. Then I'll do another system dot out dot print line and pass in tree set again and run it again. And I can see I've still got 1, 6, 47, 300. So there's still only one six in that, even though I tried to add another one. Now I'm going to try creating a tree set of strings and see what that looks like. So I'm going to do sets and in my diamond brackets, I'm going to put string and I'm going to call this one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) set. Then I'll do equals new tree set. I'm going to go ahead and add some animals to this one, so I'm going to do word set dot add and pass in tiger, word set dot add and pass in giraffe and word set dot add and I'm going to pass in bear. Now I'm going to print it out and see what's I get.
>
> **[2:51](https://www.linkedin.com/learning/java-data-structures-14403471/treesets?u=76281980&t=171)** I'm going to do system dot out dot print line and pass in word set and run the app again. And I can see us put them in alphabetical order this time. So it's gone bear, giraffe tiger, because bear comes first alphabetically and tiger comes last. I can also define a different way to order strings if I want to. Say for example, I could order these ones by length instead. To do this, I'm going to put something inside the constructor for the tree set. I'm going to type Comparotor with a capital C dot comparing, and I'm going to pass in a string and two colons and length. So this is telling it to sort to the words by the length of them rather than alphabetically. So let's go ahead and run this again. And now I can see it's bear, tiger, giraffe because bear has four letters, tiger has five letters and giraffe has seven letters. Now let's see what happens when I add another animal. So I'm going to do words set dot add and pass in wolf. So, wolf has four letters in it. So I'm expecting it either to come before bear at the beginning, or maybe after bear in between bear and tiger because bear and wolf both have four letters. Now let's print out the word set again, so system dot out dot print line and pass in word set, and I can see that unexpectedly wolf actually isn't in their at all. I've got bear, tiger and giraffe though, but even though I've added wolf, it's not appearing. This is because wolf has four letters and bear also has four letters.
>
> **[4:23](https://www.linkedin.com/learning/java-data-structures-14403471/treesets?u=76281980&t=263)** And when I'm comparing strings by length, the tree set is counting that as a duplicate. So in this case, it's not including words with the same length. I can also remove elements from a tree set by using the remove method. So let's try removing giraffe. So I'm going to do word set dots remove and I just pass in the string giraffe, and I'm going to print it out again. So I'm going to do a system dot out dot print line and pass in word set and run the app again. And now I can see I've just got bear and tiger so it's removed the giraffe elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (9)
> **Definitions:** means that (1), is called (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/java-data-structures-14403471/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/java-data-structures-14403471/next-steps?u=76281980&t=0)** - [Narrator] So this brings us to the end of the course. Well done on completing it and thanks for joining me. Hopefully you now feel more confident in choosing which [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) to use in your programs and how to use some of the most common and useful ones. The best way to keep learning is to keep practicing so feel free to add your own tests to the ones in the exercises. And if you're feeling adventurous, maybe even at some from more data structures that I haven't covered in this course. If you want to keep learning more about [Java](../../Skills/Software%20Development/Java.md), check out the many other Java courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning library. Good luck with your continued learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (2), [Java](../../Skills/Software%20Development/Java.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [Bethan Palmer](../../Instructors/Software%20Development/Bethan%20Palmer.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/java-data-structures-3001429)

## Skills Covered

- Data Structures
- Java

## Path Context

### In [Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)
← [Java Algorithms](Java%20Algorithms.md) | **10 of 10**

### In [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)
← [Java Object-Oriented Programming](Java%20Object-Oriented%20Programming.md) | **4 of 5** | [Learning JDBC](Learning%20JDBC.md) →

## Part of

- [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)

## Appears In

- [Getting Started as a Java Developer](../../Paths/Data%20Science/Learning%20Paths/Getting%20Started%20as%20a%20Java%20Developer.md)
- [Java Foundations Professional Certificate by JetBrains](../../Paths/Data%20Science/Professional%20Certificates/Java%20Foundations%20Professional%20Certificate%20by%20JetBrains.md)

## Related Courses

_Courses sharing skills:_

- [Practice It- Java](../Software%20Development/Practice%20It-%20Java.md) — Java
- [Hands-On Introduction- Java](../Software%20Development/Hands-On%20Introduction-%20Java.md) — Java
- [Learning Java 17](../Software%20Development/Learning%20Java%2017.md) — Java
- [Python Data Structures- Trees](../Database%20Management/Python%20Data%20Structures-%20Trees.md) — Data Structures
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Java

---

[↑ Back to top](#)