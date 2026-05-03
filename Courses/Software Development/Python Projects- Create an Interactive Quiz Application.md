---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: python-projects-create-an-interactive-quiz-application
url: "https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application"
duration_minutes: 89
duration: 1h 29m
level: Intermediate
updated: 6/9/2022
learners: 55820
skills:
  - Python (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/python-project-build-a-quiz-application-2476116"
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQGKo6zGY36bbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654623850850?e=2147483647&amp;v=beta&amp;t=gNaxGv6pIADVIe5Blt508ioprQKgbSb7VpHRhj0odvk"
linkedin_topic: Software Development
learning_paths:
  - '[[Python Hands-On Practice]]'
prev_courses:
  - '[[Building the Classic Snake Game with Python]]'
next_courses:
  - '[[Create an Open-Source Project in Python]]'
path_nav: '[{"path":"Python Hands-On Practice","position":7,"total":14,"prev":"Building the Classic Snake Game with Python","next":"Create an Open-Source Project in Python"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/python-programming-language
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Python%20Projects-%20Create%20an%20Interactive%20Quiz%20Application.md)

![Python Projects: Create an Interactive Quiz Application](https://media.licdn.com/dms/image/v2/C4D0DAQGKo6zGY36bbw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1654623850850?e=2147483647&amp;v=beta&amp;t=gNaxGv6pIADVIe5Blt508ioprQKgbSb7VpHRhj0odvk)

# Python Projects: Create an Interactive Quiz Application

> Think you’ve got a grip on Python? Looking for ways to improve your programming skills? One of the best ways is to put your skills into action and build something real. Join Joe Marini in this course, as he shows you how to use Python to build a quiz-taking program, step by step, explaining how to build and test each feature as you go along. Joe starts with designing the basic features and finishe

> [LinkedIn Learning](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application) | 1h 29m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Building a quiz app in Python](#building-a-quiz-app-in-python)
  - [What you should know](#what-you-should-know)
  - [Setting up the project](#setting-up-the-project)
- [**1. Overview**](#1-overview) (4 videos)
  - [Defining the app requirements](#defining-the-app-requirements)
  - [Architecting the application](#architecting-the-application)
  - [Defining the quiz markup format](#defining-the-quiz-markup-format)
  - [Building the app starting point](#building-the-app-starting-point)
- [**2. The Basics**](#2-the-basics) (7 videos)
  - [Creating the Question and Answer classes](#creating-the-question-and-answer-classes)
  - [Creating the Quiz class](#creating-the-quiz-class)
  - [Reading and parsing the quiz](#reading-and-parsing-the-quiz)
  - [Creating the QuizManager class](#creating-the-quizmanager-class)
  - [Presenting the quiz](#presenting-the-quiz)
  - [Calculating the results](#calculating-the-results)
  - [Saving the results](#saving-the-results)
- [**3. Improvements**](#3-improvements) (3 videos)
  - [Presenting questions in random order](#presenting-questions-in-random-order)
  - [Timing the quiz](#timing-the-quiz)
  - [Redoing wrong questions](#redoing-wrong-questions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building a quiz app in Python](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-a-quiz-app-in-python?u=76281980&t=0)** - [Joe] One of the best ways to improve your programming skills is to work on a real project. In this course, we're going to use [[Python (Programming Language)|Python]] to build a quiz-taking program, and we're going to use quite a few Python features along the way. The program will run in the terminal and present the user with a menu to control the app. The user can list the available quizzes, select a quiz, and answer the questions, and then see the results and save them to a file. The quizzes themselves will be defined using XML, which means that we can create and edit the quizzes without having to change the code of the app. Hi, I'm Joe Marini. I've been building software for some of the biggest and best known companies in Silicon Valley for more than 30 years. In this course, we're going to take an iterative approach to building our app so we can see how to build and test each feature as we go along. In the first part of the course, we'll focus on the basics, from architecting the app and designing the basic features, up to a completed application that presents the user with a menu-driven interface, administers the quizzes, and saves the results to a file. Then we'll look at ways we can improve on the app and add new features, like presenting the questions in random order and measuring the amount of time it takes to complete a quiz. Like I said, sometimes the best way to learn is to put aside the theory for a little while and build something real. Let's get started building a quiz app with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Env Vars:** xml (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [joe] (1)

#### [What you should know](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/what-you-should-know?u=76281980&t=0)** - [Instructor] There are some concepts that you should be comfortable with before taking this course. First, since we're going to be building a [[Python (Programming Language)|Python]] application, you're obviously going to need to be familiar with the basics of programming along with knowledge of the Python language. If you need to brush up on these subjects, then check out [[Programming Foundations]]: Fundamentals and Learning Python. We're also going to be using XML to define our quiz content. So familiarity with structured markup like XML will be useful. You should be able to follow along pretty easily if you have any experience with other markup languages like [[HTML]]. But you can also refer to XML Essential Training if you want to go deeper on the subject. I also have a course specifically focused on using XML in Python if you want to refer to that one, called Python: XML, [[JSON]], and the Web. And finally, you should, of course, be familiar with using a text editor or other IDE to write code. I'm going to be using Visual Studio in this course. But it doesn't matter which editor you choose. If you want to learn more about using VS Code to work with Python, then refer to the Visual Studio Code for Python Developers course. Once you feel comfortable with these subjects, you are ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[Programming Foundations]] (1), [[HTML]] (1), [[JSON]] (1)
> **Env Vars:** xml (5), html (1), json (1), ide (1)
> **CLI Commands:** python (7)
> **Tools:** visual studio (2), vs code (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the project](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=0)** - [Instructor] Let's make sure that your environment is properly set up to complete this course. First, you'll need to have [[Python (Programming Language)|Python]] installed. So on your computer, open the terminal program and then enter the command Python -- and then version and then hit return. Now, if you're using a Mac or a [[Linux]] machine, you'll probably have to run the Python three command instead, because Mac's and some Linux machines have the older version of Python, Python two installed and we don't want to use that branch. We want to use Python three. So if you're using a Mac or Linux machine, use the Python three command instead. And if you're on [[Windows]], like I am here you can also just try typing PY --version. This should also work and you can see. Sure enough, it works. So if you get an error when you run this command, instead of seeing a message like this one with the [[Microsoft Word|word]] Python followed by a version number, then you need to install Python on your computer. If you already have Python installed, then make sure you have at least version three point 10 installed. If the version number on your machine is less than three point 10, then install the latest version. And to do that, we can go to the Python website, right. So here we are on the Python website, you can click on the downloads button and this will take you to the download section for your particular operating system. So after you download, go ahead and run the installer and then go back to your terminal program and then try that Python --version command again to make sure that it installed correctly. You will also need to choose a text editor for writing code.
>
> **[1:35](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/setting-up-the-project?u=76281980&t=95)** And in this course, I am going to be using visual studio code, because it's a great editor and it's free but it doesn't really matter which editor you use for the course. So use whichever one you're most comfortable with. If you want to use vs code, then come to the download page here. You can see the link there in the browser and install it on your machine. If you're going to use vs code, I highly recommend getting the Python extension to go with it. This is the one you want, the one from [[Microsoft]] with all these tens of millions of downloads. There's plenty of other Python extensions inside the visual studio marketplace but this is the one that you should be using. So if you're going to use visual studio code, use this extension, because it adds some really great Python features to the editor. To get the exercise files for the course, I have created a [[GitHub]] repository where you can find the code. You can either clone the repository locally or download the files as zip archive and then extract it to your machine. And then that's pretty much all the setup that you'll need to do for the course. So once you have Python along with the exercise files and your text editor selected, then you're ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (17), [[Linux]] (3), [[Windows]] (1), [[Microsoft Word|Word]] (1), [[Microsoft]] (1)
> **CLI Commands:** python (17), make (3), find (1)
> **Tools:** visual studio (3), terminal (2), vs code (2), github (1)
> **Prerequisites:** install (3), you'll need (2), set up (1), make sure you have (1), setup (1)
> **UI Navigation:** open the (1), go to (1), click on (1)
> **Exercise Files:** exercise files (2), download the (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining the app requirements](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=0)** - [Joe] Before we get started building our application, let's define what the requirements are going to be. And to better understand what we're going to build in this course, let's first take a look at the finished app. So here in my code, I'm going to open up the Finished folder and inside the Basics folder, I'm going to go down to chapter seven and I'm going to right-click on pyquiz.py and choose Run [[Python (Programming Language)|Python]] File in Terminal. And obviously if you're using a code editor, that's other than Visual Studio Code you'll need to do this in your terminal program, but since I have this built into VS Code I'm going to go ahead and do that. So when I run the app you can see that there's a simple start-up greeting, says, "Welcome to PyQuiz," and then I'm prompted for my name. So I'll put my name in. All right. And then we can see that the program prints out a menu of options. So I can Repeat this menu, List the quizzes that are installed, Take a particular quiz, or Exit the program. So let me go ahead and List the quizzes. So I'll enter version L and you can see that there are some quizzes that are available to take. So I'll choose to Take a quiz which is option T and then I'll choose the Sample Quiz, number 2. So there's two different types of questions. There's multiple choice and true-false. So let's go ahead and take this quiz and we can see that the quiz name is Sample Quiz and it's got some Description here. It's got four questions for a total of 28 points. So, "To the nearest billion, how old is the earth?" I'm pretty sure that's 5 billion years. And say true or false, "Broccoli is good for you."
>
> **[1:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-app-requirements?u=76281980&t=94)** Well, I like broccoli so I think that's true. True or false. "The world is flat." Well, you know what, I've ever been to space, so I'm not sure that the world is not flat. So I'm just going to say it's false. And then, "What was the color of George Washington's white horse?" Well, I'm pretty sure that that was white. So that's number 3. Okay, and you can see that I've completed the course and sure enough, I've got 4 out of 4 correct, so I've got 28 possible points, and then I'm prompted to Save the results to a file. I'm not going to do that for now, so say no. And you can see that now it go back to the main menu. So let's discuss some of the high-level requirements for our quiz application. First, the program needs to have a way of defining quizzes that can be added to the program without having to modify the code. Second, our quiz needs to keep track of the quiz results such as the score and number of correct answers and present them to the user when they complete the quiz. The app also needs to have a way to save the results to a file when the user is finished. Okay, so now that we know the high-level requirements of the app and we've seen the finished app in action, let's plan the app architecture. We'll do that in a separate video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Tools:** terminal (2), visual studio (1), vs code (1)
> **File Paths:** pyquiz.py (1)
> **CLI Commands:** python (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** right-click (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)

#### [Architecting the application](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=0)** - [Instructor] Just as you wouldn't try to build a house without a set of plans and blueprints, it's useful to plan the architecture of the application before we get started writing any code. So, let's take a look at the high level architecture of our quiz application. Each part of our application will have a specific set of responsibilities to perform. The main Quiz App class will be responsible for presenting and controlling the [[User Experience (UX)|user experience]] of the app. It will handle the menu selections from the user and create and maintain the Quiz Manager class. The Quiz Manager class will be responsible for managing the installed quizzes in the app. It will coordinate the user actions in the main app class and the installed quizzes. For example, presenting each quiz and then displaying and saving the results. The Quiz Manager class will also create the quiz parser class, which will handle the process of taking an XML file and building a quiz object from it. Each quiz object will consist of a series of questions and answers. The quiz class will also be responsible for presenting its own questions and checking for the correct answers each time. Each quiz object created by the parser will be presented to the user by the Quiz Manager. So by planning the architecture of our app ahead of time, we can help ensure that each part of the application maintains a good separation of concerns from other parts of the app and are mainly responsible for a single major piece of functionality. This will make it easier to catch problems
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/architecting-the-application?u=76281980&t=93)** before they crop up and help keep the code maintainable and extensible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** xml (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Defining the quiz markup format](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=0)** - Each of the individual quizzes will be created using XML files. The XML will then be loaded in parsed when the user selects a particular quiz. So, let's take a moment and understand the XML format that represents each individual quiz. So, what I'm going to do here is, in the quizzes folder, I'm going to make a new file, and I'm going to call it myquiz.XML. So, the root element for the XML file will be the quiz ML tag. So, it's going to be written as quiz ML. And, it has one attribute which is going to be the name of the quiz. And, I'll just call this sample quiz and I'll close that off. So, this tag will contain all of the information for the particular quiz. So, each quiz will have a description which will be presented to the user when the quiz starts and will use a description tag. And, let me indent that. This tag will contain the description for the quiz. So, I'll write, this is a sample quiz, and then we'll close that off. Alright, there will also be a series of questions that make up the content of the quiz. Questions can either be multiple choice or true false and they also have an associated points value. So, we are going to use a question tag to represent each question.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=93)** So, let's go ahead and write the question tag and then I'll close that off. Each question will have a type attribute which indicates the type of the question, whether it's multiple choice or true false, and there'll be an attribute named points, which indicates how many points the question is worth. So, for this particular question, let me make this one multi-choice, and I'll give it a points value of 10. Inside the question, we need to represent the text that will be asked of the user. And, for this, we're going to use a question text tag. And, on the question text, we're going to have an answer attribute which indicates the name of the possible answer that is the correct one. So, just bear with me for a second. I'm going to identify the answer here as number two. So, inside the question text, I'll ask a question, what is two plus two? So, following the question text for multiple choice questions, we're going to have a series of answer tags, and each one of these answer tags will represent a possible answer. So, I'll have an answer tag. And, in this case, the answer will be three, which is obviously wrong, and then we'll have a few different answers.
>
> **[3:07](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=187)** Okay. So, four, five, and six. These are all the possible answers. And, each one of these guys is going to have a name tag. So, this will be name one. Alright, and then I'll copy this and put it here. This will be name number two and name number three. And, by the way, this is the index or the label that will be shown to the user during the quiz. So, you can see here that I've identified that answer with the name of two is the correct one. Alright, now for true false questions, it's a little bit different. What we're going to do is create another question tag. And, in this case, the type will be TF for true false, and then we'll have a points value, and I'll make that one points five. And, then let's close off this question tag. Now, inside a question tag, because this is true or false, all we need is a question text. We don't need a series of possible answers, because this is not multiple choice. So, let's go ahead and write a question text tag.
>
> **[4:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/defining-the-quiz-markup-format?u=76281980&t=256)** And, the question will be, let's see, broccoli is good for you. Alright. And, the answer to that, in this case, the answer attribute isn't going to be the name of the right answer. It's just going to be either T or F for true or false. And, the correct answer to broccoli is good for you is true. So, we'll simply identify that question there. So, that's pretty much all we need to do, okay? We can create as many of these question tags as we want in order to build a finished quiz. And, later on in the course, we're going to see how to build the code that loads and parses this XML file into a quiz object that is ready to be presented to the user.

> [!info]- Semantic Content
>
> **Env Vars:** xml (6)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **File Paths:** myquiz.xml (1)
> **Speakers:** - each (1)

#### [Building the app starting point](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=0)** - [Instructor] At this point, we've defined our application requirements and architecture. And we've also created the XML file format that will define the quiz content. So now we're ready to start building the application starting point. So I'm going to go into the QuizApp Foundation folder and open up the pyquiz dot py file that will serve as the main entry point for the app. The QuizApp class will be the main class for the application. And you can see that I've already filled out some of the boilerplate user interface code. If I scroll down a bit, you can see that there's a function named run which is called from this point here in the main entry point for the program. So first, the startup function is called, which prints the application's greeting right here. So you can see it prints the greeting. And this is the greeting text right here. Then the menu function is called. And we can scroll up. And we can see here that that prints the menu for the user. So it calls menu header, and that's this information right here, so it prints out the menu. And then the program enters a loop which will run until the user exits the app. So let's make some changes to the code to get our starting point in running shape. First, let's ask the user to enter their name, so we can make the quiz a little bit more personal. You can see that I have a username property named here in the init for the class. So let's go ahead and set that.
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=93)** So I'll set self dot username equal to the input function. And we'll ask the user, what is your name? And then we will print out Welcome, self dot username. Okay, there we go. And we will pull exclamation point on that. And then we'll print a blank line. Next, let's fill out the menu function to accept the user selection and execute the appropriate code. So if we scroll down here. So the program loop will run until the user quits the app. So we're going to have a while loop that runs with a condition that is always true. So while true, we're going to get the selection from the user.
>
> **[2:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=153)** And we'll ask the user for their selection. So if they don't enter anything, then we will simply call the menu error function. And we'll continue the loop. So we don't want to break out just yet. And if we scroll and look at menu error, it simply prints out, hey, that's not a valid selection. Please try again. All right. So to make the text comparison easier, what we'll do is we will convert the user's entry to uppercase. So I'm going to call selection equals selection dot capitalize. So now whatever the user entered, the first letter is uppercase. And then I'm going to compare the entry to each of the possible menu options. So if the user enters anything starting with an E, then the program breaks and exits. So if the selection, and we want the first character is equal to E, then we'll print out self dot goodbye. And if we scroll up a little bit, you'll see that self goodbye just simply prints out the exit message. And then we'll break the loop. If the user wants to print the menu again, then they will enter an M. So I'll check to see if they entered an M.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=243)** And if they do that, I'll simply call self dot menu header one more time. And we'll continue the loop. And of course, the L command will list the currently available quizzes. So I have to check for that. So if they entered an L,
>
> **[4:28](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=268)** we're going to print. And we'll do a little carriage return and then Available Quizzes Are. And then we'll put a little reminder here for ourselves to do this later. List the quizzes. And then we'll simply print out a dividing line with a carriage return at the end. And we'll continue the loop. And then finally, if the user wants to take a particular quiz, they can enter the T option. So we've got to check for that one. So if they enter a T. Now, in this case, we're going to ask them for a number. And this could result in an exception if they enter something that's not an integer. So I'm going to use an exception handler here to ask them to enter the quiz number. And I'm going to convert that to an integer. And I'll ask them to input the quiz number.
>
> **[5:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=334)** And then I'll print You have selected quiz. And that's going to be quiznum. And then we'll put a little reminder to ourselves to start the quiz, 'cause we'll come back to this later. And if there's an exception, we'll simply print out self dot menu error. And then finally, if they entered anything else at all, then that's going to be something other than one of the available options. So we'll simply print the menu error. And then the loop will continue. All right. So we have the exit, menu, list the quizzes and take a quiz options entered, so let's go ahead and save this. And let's run what we have. So I'm going to right-click and choose to run this in the Terminal. All right. There's the welcome. I'll put in my name. And sure enough, you can see that it says, welcome, Joe, and asks me to make a selection. So let's try M. And you can see that that works. It repeats the menu. I'll try L. All right. And it says, okay, the available quizzes are. And there aren't any yet, so that's fine. Then I'll enter the T for take a quiz. And it asks me for a quiz number. Let's put in something that's not a number. I'll type L. And it says, oh, that's not a valid selection. Please try again. Okay. So I'll take a quiz. And once again, I'll enter quiz number two. It says, you have selected quiz number two. That appears to be working.
>
> **[7:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/building-the-app-starting-point?u=76281980&t=426)** And then finally, let's exit the application with an E. And sure enough, that works. Okay. So now we have our program at the starting point. And we can start building the [[Representational State Transfer (REST)|rest]] of the program logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** scroll down (2), scroll up (2), right-click (1)
> **CLI Commands:** make (4)
> **Definitions:** is called (3)
> **Env Vars:** xml (1)
> **Tools:** terminal (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [instructor] (1)


### 2. The Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating the Question and Answer classes](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=0)** - [Instructor] As we saw earlier when we were building our application architecture, every quiz in our app is made up of a series of questions and each of those questions has a correct answer. So it probably makes sense to start by building out the question and answer classes. So here in my Start folder, I'm going to go into the Basics in chapter 1, and open up quiz.py, which is where we're going to maintain our code that represents the components of a quiz. So let's start with the Question class, and we're going to organize questions into a base Question class, and then create subclasses for the true/false and multiple choice questions. So let's create the base class first. So every question will have a points value. So let's get rid of this pass statement and have self.points, and we'll visualize that to 0, and there will also be a correct_answer, and that'll be the empty string. And there will also be a text field that will hold the text of the question. And there will be an is_correct field that indicates if the answer was answered correctly. Okay, so we have those fields. Now let's define the true/false questions subclass, and you can see that it derives from the Question class here. Now this subclass doesn't add any new properties, but it does define a method named ask, which will present the question to the user and then prompt for the answer. So let's fill out this function. So you can already see that we have some code
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=93)** to ask the question to the user and then prompt for a response. So let's first check the condition where they don't enter any text. So if the length of response is 0, then we'll simply print Sorry, that's not a valid response. Please try again. And then we'll continue the loop. Let me shrink this down a little bit. Next, we have to check to see if the user entered a true or false answer. So to make the comparison easy, I'll convert this to lowercase. And then if response 0 is not equal to a t, and it's not equal to an f, that means they didn't answer either a true or false. And so once again, we'll just print this sorry message and then the loop will continue. And then finally, if the user entered an acceptable answer, then let's mark whether or not they answered the question correctly. So if response [0] is equal to the correct answer,
>
> **[2:58](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=178)** then we'll mark is_correct = True. And then, at this point, the loop breaks and the function returns. All right, let's do the same thing with the multiple choice questions. So for multiple choice, remember, each question will have a set of possible answers. So we need to have a property that represents those answers. So let's define that. And that's just going to be an empty list for now. And then just like for the true/false question, we need to have an ask function that presents the question to the user. So let's print the question text followed by the list of possible answers. So first, we'll print out self.text because that's the question, and then, for each answer in the possible answers, we're going to print, and we're going to print out, let's see, we'll put in what this in parentheses, and it's going to be a.name followed by a.text.
>
> **[4:03](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=243)** And then once again, we need to check to make sure the user entered a non empty strings. Let's go ahead and copy that one from here. And we'll paste that here. And then we need to check to see if the user entered the correct choice. So let's go ahead and copy this line here. So we'll convert it to lowercase, just to make the comparison easier. And then if the first letter is equal to the correct_answer,
>
> **[4:39](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=279)** then once again, we mark the question as being marked correctly, and then the loop breaks. Okay, so finally, let's create the Answer class for the multiple choice possible answers. And you can see here that we have to define the Answer field. So we'll have self.text, and then we'll have self.name.
>
> **[5:08](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-question-and-answer-classes?u=76281980&t=308)** And let's get rid of that pass statement. All right, so now we need to test this out to make sure that it works. And you can see here that I've got some test code. So let's uncomment all of this down here, and I'm going to type Control + /, and this Command + / on the Mac to uncomment all those lines. So this code creates a couple of questions. There's a true/false and a multiple choice question, and then runs the ask function on each one. Then it prints out the is_correct property, down here, to see if each answer is correct so that you can see the results. So what I'm going to do is run this. And when I do that, we can see that I've got my first question, and it says, all right, this is a true/false question. And I'm going to go ahead and answer that broccoli is not good for you. So that's false. All right, then it's asking me, oh, what is 2 + 2? Okay, and I think 2 + 2, if I remember my math correctly, it's 4, so that's answer b. So I'll enter b. And then you can see that the results are printed. And I can see I was wrong on the first question and right on the second. So our tests appear to be working. Our classes seem to be working just fine. And that's all we need to do for now. So we have the classes for the question and answers, and that will constitute the content of any one of our given quizzes.

> [!info]- Semantic Content
>
> **Code Identifiers:** is_correct (3), correct_answer (2)
> **CLI Commands:** make (4)
> **File Paths:** quiz.py (1)
> **Cross-References:** as we saw (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Quiz class](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=0)** - [Instructor] Now that we've defined the classes to represent the questions and answers, let's define the quiz class itself which will represent the finished quiz to the user. So here in chapter two, I'll open up quiz_py. Now, the quiz class itself is not very complex, and you can see that I've already filled out some of the base parts of the class. There's a function to print the quiz header at the start of the quiz. There's a function to print the results, and we'll come back to that later. And then there's a function called take_quiz, which will present the quiz to the user and then return the results. That's pretty much it, just those three functions. All right, so let's start by defining the properties for the quiz class. And I'll get rid of that past statement. So each quiz is going to have a name, and each quiz is going to have a description. Remember, these are going to correspond to the XML tags that we saw earlier in the course, and then we have a list of questions. So we'll have that be an empty list. Each quiz is going to have a score. Each quiz will have a number of correct questions. And then finally, each quiz will have a number of total points, and we'll initialize all of those, so when the quiz starts, the print header function will get called. So let's fill in that part
>
> **[1:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=94)** now that we have the properties defined. So we're going to print, and we'll print out the quiz name, and that's going to be self.name. And let's go ahead and copy this, paste it a few times. So then we'll have the quiz description, and that's going to be description. And then we'll have the number of questions, and that is going to be, let's see. So I'll take off these braces, and that is going to be the length of self.questions.
>
> **[2:24](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=144)** And then, of course, the total points, and that will be self.total_points. And we will leave the print results function for later in the course. That means we just have to fill in the take_quiz function. So when the quiz is about to be taken, we first have to initialize the state of the quiz in case it's already been taken before. So we'll re initialize all the properties like score and correct_count, and we'll go through each one of the questions and reset that state to false so that each question is now not necessarily corrected or answered correctly, and then we'll print the header. And now, we just need to execute each question and record the results. So I'll loop over each one of the questions. And then, for each question, we'll call the ask function. And then if that question is marked as correct, then we will increment the correct_count, and we'll update the score with however many points that question was worth. And then after we do that, we'll print out a little dividing line
>
> **[4:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=240)** at the end of the question sequence, all right, and then we'll just return the results. So we'll return a tuple of the results. And the tuple is going to consist of the score, the correct_count, and the total_points. And we can get rid of that past statement. So that's pretty much the code we need to write for the quiz class. So now, we have a quiz class that initializes its properties, prints out its header, And then when the take quiz function is called, it initializes the state, prints the header, and goes through each of the questions and asks the user, and then returns the score, the number of correct questions, and the total number of points. So let's go ahead and test this, and just as we did in the previous example, if I scroll down here, you'll see I have some test code, so let's go ahead and uncommon this. All right, and I'll explain it pretty briefly. All right, so in our test code, we create a new quiz object, and we set the name and the description, then we create a true-false question with a number of points and a right answer. And then we append that into the questions list of the quiz. Then we do the same thing with a multiple choice questions. So we have the question text, the points, and the correct answer. Then we create a series of possible answers and add each possible answer to the answers list in the question.
>
> **[5:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quiz-class?u=76281980&t=333)** And then we add that question to the questions list in the quiz. Then, we set the total points of the quiz to the points of question one in question two, and then we call take_quiz and print the result. Now, remember, this is just test code. When we get to the part where we parse the quiz and set the quiz up from the XML, all of this will be handled for us. So this is just some code to bootstrap a quiz and try it out. So what I'm going to do now is right click and choose Run [[Python (Programming Language)|Python]] File in the Terminal. All right, and sure enough, when this runs, we see the header, so here's the sample quiz and here's the description. So that appears to be working, that's this code right up here, all right. And we have our first question, which is the true-false which is "Broccoli is good for you." And you know what, I don't think it is. I'm just going to say false. All right, and then we get to our next question. What is 2+2? Well, I'm pretty sure 2+2 is 4. So that's answer number B. And when the quiz completes, you can see the tuple here that contains the score, the number of correct questions, 'cause I missed one, and the total number of points that were possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** take_quiz (3), correct_count (3), total_points (2), quiz_py (1)
> **Env Vars:** xml (2)
> **Cross-References:** earlier in (1), later in (1)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is called (1)

#### [Reading and parsing the quiz](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=0)** - [Instructor] At this point, we've constructed our question, answer and quiz classes, and we've used some test code to create a quiz with a couple of sample questions in it. But remember we want to be able to store our quizzes in XML files, so that we can create new quizzes and edit existing ones without having to hard code them into the app. So in this example, we'll see how to build a quiz object by reading and parsing an XML file. So here in chapter three of the start, I'm going to open up the QuizParser file and I'm going to be using the SAX parser that comes with [[Python (Programming Language)|Python]] to process the XML file. So I need to import the xml.sax module. We're also going to be using the quiz classes that we've created, so I need to import them as well. And then finally, I'm going to be using an enumeration to keep track of the state of the parser. So I need to import the Enum and unique classes. So my parser class, if we scroll down a little bit, you can see is a subclass of the ContentHandler class that the SAX parser defines. And the functions that I override in this class will be called by the parser as the XML is processed. So this QuizParserState class right here is just a simple enumeration used to help me keep track of which part of the XML is being processed. So if we look at the actual XML file, and you'll notice that here in this chapter I've created a folder named quizzes, and I've copied in one of the sample quizzes from here at the root level, right?
>
> **[1:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=94)** This is the sample quiz file. So if we open up the XML file, what you'll notice is that it's broken up into different types of tags, right? And in order for my code to know, for example, that this question text tag belongs to this particular question tag, I need to keep track of the question tag that's currently being processed. The SAX parser doesn't provide that information. So my class needs to keep track of it. As the SAX parser is working, it's just going to run through the file and say, okay, hey, here's this tag here, here's this tag here. There's no really way for my application to keep track of the context of each one of these tags. So that's up to me to do on my own, okay? And as we get into the code, we'll see how that works. So let's go back to the code and I apologize in advance, this is going to be a little bit of a long video, but by the end, hopefully you'll have a good understanding of how this parser works. So let's scroll down. So, the init function for this class defines a new property called new_quiz, which will be the quiz object that this parser returns. And you can see that it is being initialized to a new empty Quiz object. So I'll define some extra properties to help with the parsing, right? So I'll define self._parse_state, and parse_state is going to initialize to QuizParserState.IDLE, because it's idle to begin with. And then I'm going to define a couple of utility properties called current_question and current_answer.
>
> **[3:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=194)** And these will be used while I'm parsing question and answer tags. Then we have the parse_quiz function. This is where all the magic happens. So parse quiz will be called by the quiz manager class, which we haven't built yet, okay? We'll come to that in a little bit. It will perform the loading of the XML and parsing of the data. And you can see that I already have some code here that loads the XML file from the path that's supplied as an argument to the function. So all I need to do is call the parse string, on the parser class. So I'm going to call xml.sax.parseString and I'll parse in the quiztext that was just loaded. And then this second argument, when I pass in the value of self, that identifies this class, my QuizParser class, as the place where all the parsing functions are defined. And that's these functions down here, okay, startElement, endElement, and characters. The startElement function is called when the parser finishes parsing the opening tag of an XML element. So for example, when it reaches this closing angle bracket right here of QuizML, that's when this function will be called. The endElement is called when the parser finishes with a closing XML tag, and characters is called when the parser finishes processing text content. So all our code needs to do is intercept each of these events and then construct the corresponding content within the quiz class.
>
> **[4:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=287)** So let's start with the QuizML tag. All right, so right here in startElement. So when startElement is called with the QuizML tag, we set the parser state to PARSE_QUIZ, and then extract the quiz name from the name attribute in the attrs which gets passed, and that contains all the attributes on the tag. When endElement gets called, and we're ending the QuizML element, we set the parser_state back to being idle and that's because we've finished processing the file. So now let's fill out the [[Representational State Transfer (REST)|rest]] of the code. So remember that the next tag inside of QuizML is going to be the description. It's going to contain some text. So let's go back and handle that one, all right? So if the tag name being processed is description,
>
> **[5:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=342)** then we're going to set the parse_state to QuizParserState and we're parsing the description. Then, when the character's function is called for text inside the tag, we check to see if we're currently processing a description tag. So if the parse_state is equal to the PARSE_DESCRIPTION, then inside the new quiz, we're going to set the description and we're going to add the characters that were just processed. Then when the endElement is called, if we're currently processing the description tag, we set the parser back, the parser_state back to PARSE_QUIZ. So if the tag name is equal to description,
>
> **[6:45](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=405)** then parse_state gets reset. So this whole process makes it easy for our code to remember where we are in the XML file, so we can put the content in the right place in the Quiz object that we're building. All right, so let's continue. If we start parsing a question tag, then we need to see if it's true false or a multiple choice question, and create a new class to represent the question that we're currently building. So first we're going to set the parse_state correctly, and that's going to be PARSE_QUESTION. Then, if we check the attributes of the question, and we look at the type field and that is equal to multichoice, then we know we have a multiple choice question. So I'm going to use my little temporary placeholder called current_question to make a new multiple choice question. Otherwise, if the attribute's value is equal to true false, then I have to make a new true false question.
>
> **[8:15](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=495)** Then we set the question points to be the value of the points attribute, all right? So that means that the current_question points is equal to,
>
> **[8:30](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=510)** I'm going to cast this to an int, and that's going to be the value of the points attribute. And then we add those points to the quiz's total points property. So the new_quiz's total points, we're going to add the current_question's points value.
>
> **[8:59](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=539)** Okay, so when we reach the closing tag of the question element, what we're going to do is add the current_question object to the quiz's list of questions. And remember, we did this in code, in the testing code, in the previous example. What we're going to do now is we're going to tell the new quiz, we're going to access the questions list, and we're going to call the append function, with my current question. And then we're going to set the parse_state back to PARSE_QUIZ. Now, of course, question tags have question text tags, and maybe some answer tags in them. So we need to handle those too. So let's scroll back up and in startElement, we're going to check to see if the tag name is equal to QuestionText. And if it is then the parse_state gets set to parse question text.
>
> **[10:14](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=614)** And in the current question, we're going to set the correct_answer to the value of the answer attributes. So the parser will encounter the text inside the question text tag next. So we need to add that text to the current question. So let's scroll down to the characters function.
>
> **[10:46](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=646)** And if the current parse_state is equal to, we are parsing a question text then we're going to set the current_question's text and we're going to add the characters to that. And then when the closing tag is encountered, then we need to set the parse_state back to PARSE_QUESTION.
>
> **[11:22](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=682)** And then finally we need to parse the answer tags as they come in. And it's a very similar process to parsing the question text. So, let's go ahead and scroll back up to the startElement. So if the tag name is equal to answer,
>
> **[11:47](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=707)** then what we're going to do is use our current_answer placeholder, and we're going to create a new Answer object, and we will set the current_answer's name equal to the value of the name attribute. And then we'll set the parse_state to the fact that we are parsing an answer. And then once again, once we get to the text of the answer, so if we are in a parsing state where we are parsing an answer, then we're going to set the current_answer's text to the characters that we just read. And then of course, once we reach the closing tag, then we're going to add this answer to the list of answers for the current multiple choice question. So for the current_question, we're going to append the current_answer, and then we'll set the parse_state
>
> **[13:23](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/reading-and-parsing-the-quiz?u=76281980&t=803)** back to parsing a question. All right, (chuckles) I know that was long, but that's basically it, okay? So this code will now read and build a fully formed Quiz object from the XML. So we're going to try this out. And if we scroll down, you can see that we have some test code here, and the test code will create a new QuizParser class, which is the class we just built. It will call the parse_quiz function with the path to the XML file that we want to parse. And then we'll just print out some values, the name of the quiz, the description, the length of the questions, the total points, and then we'll print out each of the questions just to make sure everything worked, all right? So let's save this and let's go ahead and run. All right. And sure enough, you can see the output. Right here is the name of the quiz. Here is the description. Okay, and then what else did we have in the output here? We have the number of questions. Yep. Four, that looks correct. And then the total points, that looks correct. And then we loop over each of the questions and print out the question text. So everything appears to be working. And we now have a working QuizParser that can read the XML file and produce a quiz object.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** parse_state (11), current_question (7), startelement (6), current_answer (5), endelement (4)
> **Env Vars:** xml (15), sax (4), parse_quiz (3), parse_question (2), idle (1)
> **Definitions:** is called (6), is a  (1), means that (1)
> **CLI Commands:** make (3), python (1)
> **UI Navigation:** scroll down (4)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)

#### [Creating the QuizManager class](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=0)** - [Instructor] All right, we've reached the point now where we have a working quiz parser that can read an XML file and create a quiz object from it. But in order to work with multiple quizzes, we need to create a class that will manage all of the quiz files that the user has and take care of presenting the right quiz. In other words, we need to build a QuizManager class in accordance with the architecture that we created earlier in the course. So let's open the code here in step four in the Start folder. We're going to open up quizmanager.py. And the QuizManager class is responsible for several operations. It maintains the list of installed quizzes, displays a list of the available quizzes, allows the user to take a particular quiz, and print and saves the results of a quiz. So the __init__ function takes a folder path as a parameter which is the folder to find the quiz XML file is in. This path is stored in the quizfolder property on the class. And we're going to add a few more properties to the class. So we'll have a property for the most recently selected quiz. So we'll call that the quiz. And that's going to be kept along with a dictionary object that maintains the list of quizzes. And we'll call that the quizzes dictionary and will initialize that to an empty dictionary. We'll also have a property that stores the results
>
> **[1:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=96)** from the most recent quiz and we'll call that results. We'll also have a property of the name of the person who's taking the quiz and we'll call that quiztaker. So first, we need to make sure that the quiz folder exists. Otherwise, there's a pretty serious problem. And we're going to use the os standard library to do that. So I'm going to call if os.path, and this is a collection of path functions that you can access from the operating system utility library. So I'm going to make sure that a path exists and I'm going to call that on quizfolder. And if the result of that is false, then we know we've got a problem on our hands. So I'm just going to raise an exception at this point. I'm going to raise a FileNotFoundError and I'm going to say the quiz folder does not seem to exist.
>
> **[2:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=163)** Now, if the quiz folder is there, then we will call the internal function to build the quiz list. So I'm going to call self._build_quiz_list. And the function that builds the quiz list is this function right here. So this function uses the scandir function on the quiz folder to build a list of the folder contents. So to build the list, what we're going to do is create a quiz parser object and then use it on each file in the folder, adding the new quiz object to the quizzes dictionary. So what we're going to do here is going to loop over the enumeration of the dircontents. Okay, so each one of these dirt contents entries is going to be an index and a file that's in that folder. And what I'm going to do is I'm going to check to see if the f variable is a file. Then I'm going to say parser equals and I'm going to use the quizparser file to create a QuizParser. So I'm going to create a parser for each quiz. And the reason I'm doing this is because I'm going to get a nice new empty quiz parser for each one of the quizzes. So all the properties will be reset to zeros and all that stuff. So I don't have to worry about reinitializing each parser. And then, on my quizzes dictionary,
>
> **[4:21](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=261)** what I'm going to do is set the index + 1 to be the key. And I'm going to call parser.parse_quiz on the file that I got back. So remember, this is going to come back with a fully parsed quiz object, and I'm storing that fully parse quizzed object in my dictionary. And that dictionary will be indexed, it'll have keys. And each key will be an integer number starting at the number one. And the reason I'm doing this, the i+1, is so that when I present all the indexes to the user in the menu, I don't want to have to start indexing at zero and then keep track of, well, 0+1 and the off by one problem. I'm just going to have it all just be one-indexed rather than zero-indexed. Okay, so now that we've built the list, the list_quizzes function displays the list of available quizzes to the user. And it does this by iterating over that dictionary and printing the ID of the quiz along with the quiz name. So that's pretty straightforward. I'll simply have a loop. So for each key-value pair in self.quizzes.items, I'm simply going to print. And inside parentheses, I'm going to have the key which is going to be the index. And then I'm going to have the value. I'm going to print the name of the quiz.
>
> **[5:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/creating-the-quizmanager-class?u=76281980&t=354)** Okay, so we're going to leave the remaining functions, right? Take_quiz, print_results, save_results. We're going to save that for later in the course. For now, we're going to test what we have by exercising, you guessed it, the test code down here. And the test code is pretty simple and straightforward. You can see that we create a new QuizManager class. And once again, we're going to point to the Quizzes folder that I've also copied in here from the root level. And I've only included the one quiz just to make things simple. And so if everything goes well, when I call the list_quizzes function, it's going to list the quizzes that have been loaded and parsed. All right, so let's go ahead and save this. And let's run this in the terminal. And sure enough, you can see that quiz number one is the sample quiz. So we have our quiz manager successfully built and it is successfully parsing the quizzes and successfully printing out the list of installed quizzes for the user.

> [!info]- Semantic Content
>
> **Code Identifiers:** list_quizzes (2), parse_quiz (1), print_results (1), save_results (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** xml (2)
> **Cross-References:** earlier in (1), later in (1)
> **UI Navigation:** open the (1), in the menu (1)
> **File Paths:** quizmanager.py (1)
> **Tools:** terminal (1)

#### [Presenting the quiz](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=0)** - [Instructor] All right, we've now reached the moment where we can present the quiz to the user from our main application. So I've copied the pyquiz.py file here into the Start folder for chapter five. And I've copied it from the QuizApp Foundation folder. Remember when we worked on that back earlier in the course. So I've copied it into the chapter five folder and now we can start connecting things together and hooking stuff up. So let's open up pyquiz.py. All right, first, I'm going to make a couple of changes to the application file. I want to make the Quizzes folder location a constant value. So I have just one place to change it in the future. So I'm going to make that a class value up here.
>
> **[0:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=51)** And then I'm going to create an instance of the quizmanager to be used within the app. And I'll do that here in the init function, so I'll call that qm. And I'll create a QuizManager instance, and I'm going to pass in the Quiz folder constant as the place where the quizzes are kept. So with that complete, I can now connect the menu options to the quizmanager. So first, let's let the user list the available quizzes. So let's go down to the menu. And remember when we made this little reminder comment to ourselves, well, let's go ahead and fill this in. So I'm going to call self.qm on the quizmanager. I'm going to call list_quizzes. We can also let the user select and start a quiz. So down here, when the user has selected a quiz, we've already printed out, hey, you know, you've selected quiz number. What we're going to do is call self.qm.take_quiz,
>
> **[2:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=120)** and we'll pass in the quiz number and we'll pass in the username and then we'll call self.qm.print_results.
>
> **[2:19](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=139)** And then in the quizmanager, let's open that up. Let's connect up the code that lets the user actually take the quiz. So let's collapse that down and we're going to scroll down to take quiz. So this is the function that gets called from the main app. So we'll set self.quiztaker equal to username, and we'll call self.the_quiz. So we'll set the quiz equal to self.quizzes and we'll pass in the quizid that we were given. And then on the results, we'll set the results equal to self.the_quiz and we will just simply call take_quiz. All right, so now each quiz will present itself and let's get rid of that pass statement right there. Okay, so let's run what we have. So let's go back to the main application and I'm going to run this in the terminal. All right, so let's go ahead and I'll enter my name. So I enter my name and there's our menu. So first, let's try listing the quizzes available, so I'll enter l. All right, and we can see that there are two quizzes, right? So there's Geography Fun! and Sample Quiz.
>
> **[3:54](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-the-quiz?u=76281980&t=234)** So I'm going to try taking quiz two, okay? All right, there's our quiz. There's the header. We've got the number of questions and the points. I'll answer the questions. So to the nearest billion, how old is the earth? I think that's number two for 5 billion years. True or false: broccoli is good for you. Eh, I'm still not sure, I'll say false. True or false. The world is flat. Well, I know the world's not flat, so I'll say false. And what was the color of George Washington's white horse? Well, I'm pretty sure that was white. Okay, so now I've completed the quiz and well, hmm. I mean, it looks like things worked, but clearly we have some work to do in printing the results out for the user so they can see how they did. And we'll see how to do that in the next example.

> [!info]- Semantic Content
>
> **Code Identifiers:** take_quiz (2), the_quiz (2), list_quizzes (1), print_results (1)
> **CLI Commands:** make (3)
> **Cross-References:** earlier in (1), go back to (1), in the next (1)
> **File Paths:** pyquiz.py (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Calculating the results](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=0)** - [Instructor] Our quiz application is progressing nicely. We have almost all the pieces in place. We're able to present the user with a menu of options, load and parse quiz files, and take an actual quiz. So now we need to add the code that presents the results to the user. So here in the editor, in chapter six in the start folder I'm going to open up my pyquiz.py file. And you can see in the menu code right here, after we take a quiz, the code simply calls the print results function on the quiz manager after the quiz is completed. So let's open up the quiz manager. And the reason why nothing's happening is because this function has not yet been filled out. So what we're going to do is ask the quiz manager to simply inform the quiz that it needs to print out its own results. So we'll get rid of this pass statement and we'll call self.the_quiz, and we will simply print the results. And remember that the quiz, this is the property that holds the most recently completed quiz, right? So you can see here in take_quiz, that's the quiz that we just took, and we're going to pass in the name of the quiztaker to personalize the results. So now let's change the quiz code to print the results out. So let's open up quiz.py. And remember here in the quiz code, this is the quiz class. We've got print_header,
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=93)** but we haven't printed the results out yet. So let's add the code to print out the detailed results of the quiz. So we'll print out results for, and we'll pass in the name of the quiztaker. All right. And what we'll do is we're going to print out the date that the quiz was taken, and that is going to be datetime.datetime.today.
>
> **[2:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=129)** And they will also print out questions, and that's going to be self.correct_count out of, and that's going to be the length of the questions list correct.
>
> **[2:36](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=156)** And then finally, we will print out the score and that's going to be self.score points out of possible
>
> **[2:51](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/calculating-the-results?u=76281980&t=171)** and that's going to be self.total points. So now we're printing out the results, and we've got that hooked up to the quiz manager right here. And now when we call print_results we should see the results. Let me collapse that down right there. All right, let's try our app one more time. So let's go ahead and run this. And once again, I'll enter my name. All right, let's list the quizzes. There they are. Let's take the sample quiz. Whoops, got to take number two. All right, so the earth is, let's see, it's 5 billion years. Broccoli, eh, I'm not convinced. World's not flat, so that's false. And George Washington's white horse was white. All right, and then we've got the results. So the results for Joe. Here's the date I took the quiz. Three out of four were correct. Apparently I missed one, and I got 23 points out of a possible 28. Well, of course it sure would be nice if we could save these results, right, so we could review them later. In a separate video, we'll see how to receive these results to a file.

> [!info]- Semantic Content
>
> **Code Identifiers:** the_quiz (1), take_quiz (1), print_header (1), correct_count (1), print_results (1)
> **File Paths:** pyquiz.py (1), quiz.py (1)
> **UI Navigation:** in the menu (1)
> **Speakers:** - [instructor] (1)

#### [Saving the results](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=0)** - [Instructor] One of the requirements we've decided on for the app is that the user can choose to save the results of a quiz to a file. So what we need to do is fill out the save_results function in the quizmanager. But before we do that, what we're going to do is, in our main application, after the user completes the quiz, we're going to ask the user if they want to save the results from the quiz that they just completed. So what we'll do is we'll have a variable here named dosave, and we will ask the user, Save the results?, and they can answer either yes or no. And then let's see what they say. So we'll capitalize that result. And if the length of dosave is greater than 0 and dosave sub 0 is equal to Y, then we will call self, and we'll tell the quizmanager to save the results. So in a previous exercise, we already created the code that prints out the results of a quiz. So if we look here, remember, we have the print_results, and if we look in the code for the quiz, if we scroll down to, where's the print_results, there it is right here, so this is the code that prints out the results
>
> **[1:33](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=93)** for the quiz that was just taken. Now, we could just copy and paste the code that prints the results into a separate save_results function. But that doesn't seem like an optimal solution, right? We've already got the results right here. Wouldn't it be great if we just reuse the print_results function to write the results to a file? Well, it turns out that we can, and it's pretty straightforward. So first, let's go back to the quizmanager, and let's create a name for the file. So first, let's get rid of this pass statement. What we're going to do is, in the quizmanager function for saving the results, we're going to format the file name using today's date. So I'll have today, and I'll set that to datetime.datetime.now, and then the file name is going to be, and we're going to use a formatting string for this, it's going to be called QuizResults_, and it's going to be today.year followed by another underscore, and then today.month, and then today.day.txt.
>
> **[2:53](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=173)** Now, obviously, the user might have taken more than one quiz on a particular day. So if the file name exists, we're going to have to add an integer number to the end of the name until it's unique. So we'll do that in the code down here. Let me just collapse this down. And what we're going to do is we'll have our counter, so we'll set that to be 1. And then, we're going to use a little while loop. We're going to call os.path.exists, and we'll pass in the file name. So if that file name exists, then what we're going to do is set the file name equal to, and we'll do this same string here, so we'll just copy this and paste it. And then, instead of just ending with the day, we'll end with the value of n, and then we'll increment n. So that loop will run until we have a unique file name. And then, I'm going to call with, and I'm going to open the filename for writing as f,
>
> **[4:09](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=249)** so that's going to be the variable that holds the file. And then I'm going to call self.the_quiz, and I'm going to call print_results with the quiz taker,
>
> **[4:25](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=265)** and the file as the argument. So now what we're going to do is make a slight modification to the print_results function. So let's go over to the quiz.py file and make that change. What we're going to do is make a modification to the print_results function to accept a file argument. And it's going to be an optional argument. If no argument is given, it will simply default to the system's standard output stream, which is usually the terminal. So I'm going to add a new argument here called thefile, and it's going to default to sys.stdout. And it turns out that the standard print function can be used to print to a file if one is provided. Otherwise, it just uses standard out. So to do this, we supply a file reference to the print function like this. We're going to say file=thefile that we just passed in, and we'll pass for the flush argument we'll call True, which means just write things out right away. Some file systems maintain a cash, and we want to flush that cash each time. So now, if print_results is called with a file argument, then that's where the output will go. Otherwise, it will just go to the terminal as usual. So let's update the [[Representational State Transfer (REST)|rest]] of the code to do this. So I'm going to copy those lines right there, and I'm going to add them to each one of my print statements,
>
> **[6:04](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/saving-the-results?u=76281980&t=364)** and that's all we need to do. So now, we're reusing the print_results function to write data to a file if we have one. Otherwise, we just use standard out. So let's go back to the program, and, oh, looks like I have a little bit of an error right there. What's that? Oh, looks like I've got some extra parentheses on the ends here. There we go. Okay, now that looks okay. All right, so let's go back to the main program. Let's right click, and we'll run the [[Python (Programming Language)|Python]] file in the terminal. Let's try this out as my name, going to list the quizzes, I'm going to take quiz 2, and let's see, earth is, and it's 5 billion years, broccoli is, I just don't believe it, I don't think it's good for you, so false, the world is flat, well, that's not true, and George Washington's White Horse is White. Okay, so now we have the printed results, and now it's asking me, do you want to save the results? And I'll say yes. All right, and so now looks like everything worked. If I go back to the File Explorer here, sure enough, you can see that there is a file here, and sure enough, it's got my results in the file. So now, we have our fully built basic version of the quiz app. In the next chapter, we'll see how to add some improvements to make the program even better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Python (Programming Language)|Python]] (1)
> **Code Identifiers:** print_results (8), save_results (2), the_quiz (1)
> **CLI Commands:** make (4), python (1)
> **Cross-References:** go back to (4), in the next (1)
> **Tools:** terminal (3)
> **UI Navigation:** scroll down (1), open the (1), go to (1)
> **File Paths:** today.day.txt (1), quiz.py (1)
> **Definitions:** is called (1), is a  (1)


### 3. Improvements

[↑ Back to Table of Contents](#table-of-contents)

#### [Presenting questions in random order](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=0)** - [Instructor] At this point in the course, we've completed all the basic steps needed to create a workable quiz application. In this chapter, we're going to look at some improvements we can make to the quiz app that we've built so far. And the first improvement we're going to tackle is presenting the questions in a random order. This way, the quiz taker can't just memorize the order in which the questions are presented. So here in the start folder, in the improvements chapter, let's open up the quiz.py code, and let's scroll down to the take_quiz function. This is the function that presents the questions to the user. And right now we're just iterating over the questions list and presenting each one in order. What we need is a way of reordering this list so that all the questions are in a random sequence. And it turns out there's a function in the [[Python (Programming Language)|Python]] standard library that we can use to perform this function really easily. So let's quickly jump over to the documentation for the Python standard library. So here in the documentation for the Python standard library, I'm looking at the section for the numerical and mathematical modules, and specifically the random module. And this module is used to work with random numbers. And what I'm going to do is go over here into the nav bar and click on the functions for sequences link which is this one right here. And if I scroll down a little bit, we can see that there's a function named shuffle. This function takes a sequence or a list as an argument,
>
> **[1:37](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=97)** and then shuffles it in place. And since a Python list or an array is a sequence type, we can use this function to easily shuffle the list of questions. So let's go back to our quiz.py code. So here back in the code, let's scroll up to the top. So what I need to do in order to use that function is import the random module. So I'll do that here. And then all I need to do is shuffle the question list before the quiz begins. Let's scroll back down. And what I'm going to do is type random.shuffle and I'm going to shuffle self.questions. And this happens in place. I don't have to reassign the questions array to the result of this function, it just does it right in place. And this is pretty much all I need to do. This function will shuffle the questions in place and randomize the order. So let's run this program, I'm going to save this, and let's go to the quiz.py. All right, and then let's go ahead and run this in the terminal. Enter my name. And let's take one of the quizzes, and I'll take quiz two. And you can see now, that the questions are in a different order. So now the broccoli question is coming up first, and let's see broccoli's good for you. Yeah, I'll say that's true. And okay, the George Washington's horse question's coming up. Sure, that's number three. The world is flat. That's false. And how old is the earth?
>
> **[3:10](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/presenting-questions-in-random-order?u=76281980&t=190)** Well, that's 5 billion years. Okay, and I'm not going to save the results this time. All right, so we've saw that order of the questions, right? So let's go back and quickly review. So it came up the broccoli question, George Washington, the world is flat, and how old is the earth. Okay, so let's try this again. Now I'm going to take that quiz one more time. And now you can see that the George Washington question is coming up first. So we'll answer that one. Okay, now the age of the earth. Then the world is flat question. And then the broccoli question is last this time. So you can see that by using the standard library function, we were able to easily add a new feature to our app without having to write our own code to randomize the question order.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4)
> **CLI Commands:** python (4), make (1)
> **UI Navigation:** scroll down (2), click on (1), scroll up (1), go to (1)
> **Cross-References:** coming up (3), go back to (1)
> **File Paths:** quiz.py (3)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (2)
> **Code Identifiers:** take_quiz (1)

#### [Timing the quiz](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=0)** - [Instructor] In this example, we're going to add a feature to let the user see how long it took them to complete the quiz and to do this, we need to make some changes to the code in the quiz.py file. So here in my improvements, in chapter two, I'm going to open up the quiz file, and so what we're going to do is scroll up to the top, and what we're going to do is add a property to the quiz class to hold the completion time, and I'm going to name that self.completion time, and I'll initialize that to zero, then let's modify the code in the take quiz function to measure the elapsed time. Let's scroll down to take quiz. So first, let's make sure we reset the completion time each time the quiz is taken. So we'll say self.completion time = 0. Next, let's record the time that the user starts taking the quiz. So we can do this by using the datetime class to mark the moment when the quiz begins. So right here, I'll make a local variable named starttime. I'll set that to the value of datetime.datetime.now and then. Okay, so then we'll take the quiz, then after the quiz completes, we can mark the end time using the same method. So I'll make another variable named endtime, and that will be datetime.datetime.now, then we set the quiz completion time
>
> **[1:34](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=94)** to the difference between these two timestamps. So what I'm going to do now is say that self.completion time is equal to endtime minus the start time. All right, now let's add the completion time to the results. Oops, it's starttime. There we go. All right, so let's scroll back up to the results. So here in the results, right below. Let's see. Let's put it after the date. So let me collapse this down. Here we go. So we'll print that the elapsed time was self.completion time. All right, and remember, we have to be able to save this out. So we'll add the same code that we had from earlier in the course when we saved the results to a file. So let's go ahead and try this out. All right, so let me go back to the code here, open up the main app, and let's run this. All right, okay, there's the app, put in my name. Let's list the quizzes. Let's go ahead and take one of the quizzes. This time I'll do the Geography Fun quiz. Okay, oh, so I take one. There we go. All right, what's the largest state in the US? That's got to be Alaska. All right, true or false, the lowest point on land is Death Valley. That sounds true.
>
> **[3:06](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=186)** Okay, so I had two questions, and we can see I got two out of two correct, and we can see the elapsed time was nine seconds, and there's some milliseconds on there. That's not really useful, is it? I mean, come on. That's, milliseconds? Let's get rid of that milliseconds part. So what we're going to do is create a new timedelta object from the existing one, and what we're going to do is round off the milliseconds because this is just way too much detail. We don't need to know how many milliseconds it took me to take a quiz. All right, so let's go back to the quiz code. Oh, first, let me just say I don't want to save this, and then we'll exit. All right, let's close. Here we go. Okay, let's go back to the quiz, and let's scroll down to where we measure the completion time, and that is right here. Okay, so what we're going to do is set the completion time. Instead of just simply subtracting off the start time from the end time, what I'm going to do is create a new time delta. So I will create a new time, datetime.timeDelta. all right? And what I'm going to do is create a new time delta where the seconds parameter is equal to, and I'm going to call the round function here. So I'm going to round off. I'm actually going to copy and paste this. That's going to be a little bit easier. All right, so I'll copy and paste this line.
>
> **[4:43](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/timing-the-quiz?u=76281980&t=283)** So I've got my new completion time, and what I'm going to do here is create a new datetime.timeDelta, and I'm going to set the seconds parameter equal to rounding, and I'm going to round the self.completion time.total seconds. So this will round the number of seconds to the nearest second value, and it will get rid of those extraneous milliseconds. All right, so let's save this, and now let's try the updated code, okay? So let's go back here, run this again. All right, so here it comes and once again, put my name in. All right, let's list the quizzes. I'll take the Geography quiz. Largest state, that's got to be Alaska. True or false, let's see. Yeah, it's okay. All right, and now we can see that the milliseconds are gone, all right? So now we have a nice clean way of showing the user how long it took them to complete the quiz.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll down (2), scroll up (1)
> **Code Identifiers:** timedelta (2)
> **File Paths:** quiz.py (1)
> **Speakers:** - [instructor] (1)

#### [Redoing wrong questions](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=0)** - [Joe] All right, let's add one more improvement to our quiz application. We're going to give the user a chance to redo questions that they got wrong. To do this we just need to make a modification to the quiz file. So, let's go ahead and open up the code here in the Improvements section, and we'll open up quiz.py. So, if the number of questions that the user got correct is not equal to the total number of questions then some of them must be wrong. So, we're going to insert the new code after the endtime is recorded in case the user decides not to redo the wrong ones. So, remember, in the previous example we allowed the user to see how long it took them to take the quiz, but if they want to redo questions then we'll have to record a new endtime. However, if they answer the question no then we want to keep the original endtime, all right? So, here's what we're going to do. We're going to write if self.correct_count, no, not that one. There we go, correct. If the correct count is not equal to the length of self.questions that means that I must've gotten some of them wrong. So, then we're going to ask the user, so we'll input,
>
> **[1:20](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=80)** it looks like you missed some questions. Redo the wrong ones, right? And then tell them to input a yes or a no. All right, and we'll convert that to lowercase all in one fell swoop. Now, if the user wants to try and retake some of the questions then we need to build a list of the questions that have incorrect answers. So, we're going to do this in one line with a [[Python (Programming Language)|Python]] list comprehension. So, if the response, if they enter anything starting with a y, okay, then we'll make a new variable here called wrong_qs. And we're going to set that to the result of a Python comprehension. So, we're going to filter over all of the questions and only choose the ones that are marked as wrong, right? So, we'll look for each question for all the questions in self.questions if q.is_correct is equal to false.
>
> **[2:42](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=162)** So, this will give me a list of all the questions that are marked as incorrect, and then we'll just simply ask the wrong questions again. So, what I'm going to do is copy this code right here. So, we'll copy this, and we'll paste it in here. And we'll indent it properly. And instead of looping over self.questions we're going to loop over the wrong questions. So, for every q in the wrong questions list we'll ask it again, and then we'll do the same thing. If it's correct then we'll add the correct count, we'll do the points, and so on. Then after the retake we'll record the new endtime for the quiz. So, we'll copy this line here, all right? And we'll paste it in here. So, now we've calculated the new endtime in case the user has said sure, I'll redo the wrong questions. So, let's go ahead and save this. And now let's open up the application. And let's run this. And let me collapse that down. All right, so my name's Joe, let's list the quizzes. All right, let's take the sample quiz. Whoops, there we go, sample quiz. All right, true or false, broccoli is good for you? Let's just get that one wrong. To the nearest billion how old is the earth? Let's get that one wrong as well. Okay, George Washington's White Horse, well, that's a white horse. There we go. And the world is flat, that's false, okay? And you can see that because I got some questions wrong
>
> **[4:16](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/redoing-wrong-questions?u=76281980&t=256)** it's asking me hey, it looks like you missed some questions. Redo the wrong ones? So, I'll say sure, let's do 'em. All right, oh, okay, apparently I got the broccoli question wrong. Broccoli is good for you, sure, okay, fine. Obviously that's true. And to the nearest billion how old is the earth? Eh, let's get it right this time. And you can see that now I've got all the questions correct. There's the elapsed time, right? Because we chose to retake the quiz, or, well, redo the wrong questions the time was elongated. So, now I have all the data correctly, the new time, the new score, and the new points.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** make (2), python (2)
> **Code Identifiers:** correct_count (1), wrong_qs (1), is_correct (1)
> **File Paths:** quiz.py (1)
> **Definitions:** means that (1)
> **Speakers:** - [joe] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/python-projects-create-an-interactive-quiz-application/next-steps?u=76281980&t=0)** - [Instructor] All right, well, we've reached the end of the course. I hope you enjoyed following along with me as we built a working quiz application in [[Python (Programming Language)|Python]]. Now, as I said at the beginning of the course, sometimes the best way to learn is to build something real and exercise all the theoretical skills you've built up over time. Now, maybe you've already had some ideas on how to further improve and build on the app we've created in this course. So I've got some suggestions on where to go next that might be able to help you further your Python learning journey. If you feel pretty comfortable with your Python skills and you want to take your knowledge to the next level, consider watching Advanced Python. If you want to learn more about using some of the pre-built Python code available in the standard library, then take a look at Python Standard Library Essential Training and Learning the Python Standard Library. To learn more about using [[Object-Oriented Programming (OOP)|object-oriented programming]] techniques with Python, you can refer to Python: Object-Oriented Programming. And finally, if you want to see how to incorporate some of the great third-party libraries available in your Python programs, consider watching Python Essential Libraries. These courses, along with many others in the library, can help make you a better Python programmer. And you can apply the concepts from them here in this course as you continue to involve and improve on this program. I hope to see you again in another one of my courses soon. Until then, happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (12), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** python (12), make (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/python-project-build-a-quiz-application-2476116)

## Skills Covered

- Python (Programming Language)

## Path Context

### In [[Python Hands-On Practice]]
← [[Building the Classic Snake Game with Python]] | **7 of 14** | [[Create an Open-Source Project in Python]] →

## Appears In

- [[Python Hands-On Practice]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)

---

[↑ Back to top](#)