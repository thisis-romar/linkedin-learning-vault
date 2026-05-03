---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mastering-ai-tools-for-efficient-c-sharp-development
url: "https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development"
duration_minutes: 64
duration: 1h 4m
level: Intermediate
updated: 8/16/2024
learners: 44046
skills:
  - Generative AI
  - Software Development
  - Artificial Intelligence (AI)
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/mastering-ai-tools-for-efficient-c-sharp-development-4496091/tree/main"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHIUZH6xqAasQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723574020710?e=2147483647&amp;v=beta&amp;t=uLo-GWBvIaN6XA0uJLKV6xhulHXGLrypiz5crArO64c"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Foundations- From Basics to Building Blocks]]'
prev_courses:
  - '[[C- Refactoring Tips and Tricks]]'
path_nav: '[{"path":"C- Foundations- From Basics to Building Blocks","position":5,"total":5,"prev":"C- Refactoring Tips and Tricks","next":null}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/generative-ai
  - skill/software-development
  - skill/artificial-intelligence-ai
  - skill/c
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Mastering%20AI%20Tools%20for%20Efficient%20C-%20Development.md)

![Mastering AI Tools for Efficient C# Development](https://media.licdn.com/dms/image/v2/D4E0DAQHIUZH6xqAasQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1723574020710?e=2147483647&amp;v=beta&amp;t=uLo-GWBvIaN6XA0uJLKV6xhulHXGLrypiz5crArO64c)

# Mastering AI Tools for Efficient C# Development

> Discover the innovative intersection of artificial intelligence (AI) with coding and technical writing. This course is designed to help enhance and streamline your software development and documentation processes. First, explore AI autocomplete tools, with a focus on GitHub Copilot. Learn about its installation, customization, and practical use for code completion, refactoring, and cleanup. Then, 

> [LinkedIn Learning](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development) | 1h 4m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [What to expect in this course](#what-to-expect-in-this-course)
  - [What you should know](#what-you-should-know)
- [**1. Using AI for Code Completion**](#1-using-ai-for-code-completion) (4 videos)
  - [Introduction to AI autocomplete tools](#introduction-to-ai-autocomplete-tools)
  - [Introduction to and installation of GitHub's Copilot](#introduction-to-and-installation-of-githubs-copilot)
  - [Using comments to guide code completion](#using-comments-to-guide-code-completion)
  - [Using Copilot for refactoring and cleanup](#using-copilot-for-refactoring-and-cleanup)
- [**2. Leveraging AI for Documentation**](#2-leveraging-ai-for-documentation) (3 videos)
  - [Documenting your code with AI](#documenting-your-code-with-ai)
  - [Documenting your code with GitHub Copilot](#documenting-your-code-with-github-copilot)
  - [Documenting your code with ChatGPT](#documenting-your-code-with-chatgpt)
- [**3. AI-Assisted Technical Writing Based on Code**](#3-ai-assisted-technical-writing-based-on-code) (3 videos)
  - [Technical writing with AI](#technical-writing-with-ai)
  - [Best practices for AI technical writing](#best-practices-for-ai-technical-writing)
  - [Building a custom GPT for writing tutorials](#building-a-custom-gpt-for-writing-tutorials)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [What to expect in this course](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/what-to-expect-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/what-to-expect-in-this-course?u=76281980&t=0)** - Hi, my name is Jesse Freeman and in this course you'll learn how to build, document, and create tutorials using AI tools like [[GitHub]]'s [[Microsoft Copilot|Copilot]] and [[ChatGPT]]. I'll introduce you to setting up and configuring [[GitHub Copilot]] and Visual Studio code, using GitHub Copilot to generate and complete code, letting Copilot help us refactor code and document it, and using ChatGPT to turn our final project into a step-by-step tutorial. By the end of this course, you'll have a solid understanding of how to use AI tools to help you write better C Sharp code and properly document it for others to use and build upon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[ChatGPT]] (2), [[GitHub Copilot]] (2), [[GitHub]] (1)
> **Tools:** github (3), visual studio (1)
> **Speakers:** - hi (1)

#### [What you should know](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/what-you-should-know?u=76281980&t=0)** - [Instructor] Before taking this course, you should have a basic understanding of C# programming and its syntax, including knowledge of [[Object-Oriented Programming (OOP)|object-oriented programming]] principles. Being familiar with the .NET ecosystem and command line [[Application Development]] will also be helpful. Additionally, experience Visual Studio Code and installing extensions is critical to get the .NET development environment up and running, as well as using [[GitHub]]'s [[Microsoft Copilot|Copilot]]. Since we'll be integrating AI-generated content into our project, having a basic understanding of prompting and the limitations of these AI tools will also be helpful. However, don't worry if you're new to using AI to help you code and write documentation. I'll guide you through the entire process. Finally, to follow along, you'll need a GitHub account in order to use Copilot, and you'll need an OpenAI account in order to use [[ChatGPT]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Microsoft Copilot|Copilot]] (2), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Application Development]] (1), [[ChatGPT]] (1)
> **Tools:** github (2), command line (1), visual studio (1)
> **Env Vars:** net (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [instructor] (1)


### 1. Using AI for Code Completion

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to AI autocomplete tools](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-ai-autocomplete-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-ai-autocomplete-tools?u=76281980&t=0)** - [Lecturer] In this video, we're going to talk about the evolution of autocomplete tools for developers and how AI is changing everything. But before we get into that, I'm going to talk a little bit about how I've seen this evolve over the years. When I first started coding back in the '80s, I was using a program called HyperCard. I remember it came with a giant book full of documentation. I had to look up all the commands and functions in the index of the book. This process didn't help me understand the concepts behind the code, just the functionality. Unfortunately, this didn't really change until the early 2000s. Eventually, the internet became more accessible, which opened up a new world for learning how to code. Search engines and online communities allowed me to see how others coded and to find answers to my questions more easily. This was a significant improvement over the manual reference books, which were still being shipped with software at the time. As IDEs evolved, they started including code completion features. Code completion is a feature in IDEs that predicts and suggests completions are partially typed code, reducing the need to remember detailed syntax. This meant I no longer had to memorize all the parts of a language. I could focus on understanding the concepts while the IDE helped me with the specifics. This marked a shift towards more efficient coding. In the past few years, AI has taken code completion to a whole new level. With the release of more capable [[Large Language Models (LLM)|large language models]] or LLMs like chat GPT, I can now focus on my ideas and let the AI help with the specifics,
>
> **[1:33](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-ai-autocomplete-tools?u=76281980&t=93)** functionality, and even explanations. These LLMs are advanced AI systems trained on vast amounts of text, capable of generating and understanding code to assist developers. This brings us to [[GitHub]]'s [[Microsoft Copilot|Copilot]]. I started testing GitHub's Copilot when it was first announced. It was a game changer for generating code for my fantasy game console, Pixel Vision 8. However, it wasn't very intuitive at the time. There was a learning curve, but the potential was evident. Initially, I felt like Copilot was suggesting other people's code that didn't always fit the context of what I was working on. Despite this, I could see the promise in enhancing my coding and making me more efficient while providing valuable suggestions. Now, copilot is built on top of open AI's codex. This transformation makes it more than just an auto complete engine. It's an intelligent assistant that helps from ideation to execution, significantly enhancing the coding process. We've come a long way from the manual reference books to AI driven code completion. Tools like GitHub's Copilot are not just about making coding easier. They allow us to focus on creativity and problem solving. Embracing these AI tools can significantly boost your productivity and efficiencies as we'll learn in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[GitHub]] (3), [[Large Language Models (LLM)|Large language models]] (1)
> **Tools:** github (3)
> **Env Vars:** ide (1), gpt (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)

#### [Introduction to and installation of GitHub's Copilot](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-and-installation-of-github-s-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-and-installation-of-github-s-copilot?u=76281980&t=0)** - [Presenter] Welcome to this video on [[GitHub]]'s [[Microsoft Copilot|Copilot]]. We'll cover what Copilot is, why it's beneficial for C# developers, how to install it in visual studio code, pricing, and key settings for you to customize to help fit your needs and coding style. Additionally, we'll discuss other AI tools and plugins for coding as well. So what is [[GitHub Copilot]]? GitHub Copilot is an AI powered code completion tool developed by GitHub. It's built on Open AI's codex and assists developers by providing code suggestions and even entire code blocks. It's marketed as more than just an auto complete tool, it's a comprehensive coding assistant. In the next video, we'll go on to see how it works in action, but first, let's talk about what it is, how you should use it, and how it applies to C# development. As a C# developer, Copilot can accelerate your development process by suggesting relevant code snippets. It helps you learn and apply C# syntax and best practices while reducing context switching by providing in-editor assistance. This allows you to stay focused on coding. Even for someone like me who's been writing C# code for over a decade, there's still a lot I don't know or remember, so having a tool like this is faster than using [[Google]]. Installing GitHub Copilot and Visual Studio Code is straightforward. Simply open Visual Studio Code's extension panel, search for GitHub Copilot, and then click install.
>
> **[1:39](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-and-installation-of-github-s-copilot?u=76281980&t=99)** Once you've installed it, you'll need to sign in with your GitHub account and follow the instructions to finish configuring it. As of now, GitHub Copilot is free for verified students and maintainers of popular open source projects. This is actually how I have a copy from working on my open source fantasy game console, Pixel Vision 8, which has over 1700 followers. For individual developers, it costs $10 a month or $100 a year. Businesses can subscribe for $19 per user per month, which includes additional features for [[Team Management]]. Keep in mind that these prices may change by the time you watch this video. Now that you've installed Copilot and Visual Studio Code, let's look at some of the settings you may want to customize, starting with language completions. You can enable or disable Copilot completions for specific languages, which allows you to tailor Copilot suggestions based on the languages you are working with. Enabling Copilot Code Actions allows Copilot to suggest code improvements and refactoring options directly in your editor, which helps make accessing Copilot faster. This will add it to the contextual help icon, the one that looks like a little light bulb, that normally helps you fix issues or address warnings in your code. Rename Suggestions is a setting that enables Copilot to automatically suggest renaming variables and functions. It helps maintain consistency and readability in your code. Sometimes this can get a bit too noisy for me,
>
> **[3:13](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/introduction-to-and-installation-of-github-s-copilot?u=76281980&t=193)** since I like to use Copilot for more complex tasks like code generation and refactoring, so you may want to turn it off. I find that IntelliSense already does a pretty good job of this, so test it out and see what you like. Using project templates allows you to quickly start a new project with relevant GitHub repositories as a base. This streamlines the initial setup of a process. This isn't something that I use, but if you're getting started in a new project, it may help you get over a coders block, which can happen sometimes when you're staring at a blank page with no code on it. Besides GitHub's Copilot, there are other AI tools available for coding. [[ChatGPT]], for example, is a general purpose AI that can help with coding and a variety of other tasks. However, it's not as integrated in the Visual Studio code as Copilot is, but there are a number of plugins that are starting to leverage it. Later on in this course, we'll look at how to use ChatGPT directly, which is especially helpful for documenting your code and to get a better sense of what the code you share with it is actually doing, since you can feed it more data than Copilot is able to access. Now let's take a look at how to actually use Copilot to build a simple C# command line app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (15), [[GitHub]] (5), [[GitHub Copilot]] (5), [[ChatGPT]] (2), [[Google]] (1)
> **Tools:** github (10), visual studio (5), command line (1)
> **Prerequisites:** install (2), you'll need (1), setup (1), getting started (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### [Using comments to guide code completion](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=0)** - [Instructor] In this video, we're going to take a look at how to actually use [[Microsoft Copilot|Copilot]] inside a Visual Studio Code. As you can see, I've opened up Visual Studio Code and I'm presented with the welcome screen. One of the easiest ways of working with Copilot is to simply ask it what you want to do. One of the easiest ways to work with Copilot is to simply open the chat window and start talking to it. In this case, I'm going to ask it how to create a new .NET project inside of Visual Studio Code. Right now, I'm just going to expand this window so we can see this a little bit easier. And as you can see, it's given us instructions on how to create a new project in Visual Studio Code via the command line. However, I've already created a project folder, so I want to create a new .NET project inside of the folder itself. So let me ask Copilot. So here are the new instructions. So let's go ahead, I'm going to open up the terminal and here, I'm going to go into the project folder I've already created. Next I'm going to follow the commands that it gave me. Let's type out dotnet new console, and I'm going to list the directory to see what's inside of it now. As we can see, it's created our program.cs file. It's also created our project file based on the folder name itself. Now let me ask it how I can open up this folder since I'm already inside of it.
>
> **[1:34](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=94)** So now it's giving us all the instructions we need to open the project via the command line in order to open it up in Visual Studio Code. Now I already have the command line tools installed for Visual Studio Code, but if you don't, you can simply ask Copilot how to install them. Let's go ahead and open up the new project I just created. As you can see, Visual Studio just opened up a new instance of itself with the project that we just created. I'm going to go ahead and close out the old project. Let's go ahead and expand this out. Now I'm going to open up my program file and take a look at what's in here. As you can see, we've created the traditional Hello World project. So now I'm going to ask Copilot how to actually run this in order to see what it does. One thing to point out is that now that we've opened up a new project in a new window, our chat history from the previous session is completely gone. And this is one of the things you should keep in mind when working with Copilot and Visual Studio Code is that it's contextual to what you're doing at the time. It doesn't know what you've done in the past, so sometimes, you'll have to re-prompt it to remind it what you want to do. In this case, let me ask it how to run this .NET project in Visual Studio Code. Now, as you can see, it's given us the commands in order to run the program CS file, because this is what's open and this is the current context. But it didn't really give me the answer I was looking for. I want to learn how to run it
>
> **[3:07](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=187)** inside a Visual Studio Code itself, not on the command line. So let me ask it again. As you can see, it's still giving me the same response just in a different way. And this is one of the issues you'll find with any of these AI tools as you're coding, is that sometimes it just doesn't understand the context and the response that it gives you is always going to be random in the sense that it's not going to be the same as the previous response. So let me try this another way. So in this case, I asked it how I can build a run file and it went through all the steps to do it, but this is one of those scenarios where it's just actually easier to do it yourself. So I'm just going to go into the run and debug and I'm going to click run and debug. I'm going to select C#, I'll select this project. And now it's built the file for us and I can run it. And as you can see, we now have Hello, World. So just keep in mind that even though I'm going to show you some really interesting things that Copilot can do, it still doesn't really understand what you're asking it unless you're very, very specific. And in some cases, it's just easier to do it yourself and just rely on Copilot in those scenarios where you don't know what to do, you don't understand, or as I'm about to show you, you want to generate out specific code and you're very clear with it on what to do. So let's go ahead and we're going to delete this code
>
> **[4:41](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=281)** and I'm going to show you some ways of talking to Copilot. Now, as you can see right off the bat, it's telling us that we can use Command + I since I'm on the Mac, to open up the prompt and start typing to it. But what happens if you're already working in code and you want to use more of the auto complete features? If I started typing out public right now, it doesn't understand what I want to do. In this case, I want to create a public function that can say, "Hello, world." But if we delete this, add a comment, and then start writing public, as you can see, it's now creating code based on the comment above it. In this case, since it's an empty CS file and I want it to say Hello World, it's going to create a public static main method, and inside of it, it'll call console right line. In order to get this code, we simply need to hit tab, and now we have it written in the IDE. Let's save. But if we go and run it, we might be getting an error. And as you see, it's telling us that the modifier public not valid for this item. Now let's go ahead and ask Copilot what's wrong with this line. I'm going to hit Command + Shift + I, and on [[Windows]] it's Control + Shift + I, and here you'll see the Copilot prompt just came up. Let's ask it how we can fix this code.
>
> **[6:18](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=378)** As you can see, it's giving us some code that we can run, so we can copy this code, close out the prompt, and then paste it back. But as you can see, it's still giving us the same error, and that's because it doesn't have context that we need to actually wrap this inside of a public class program. So let's do this. We'll select this code, we'll ask it again, we'll ask it if we need to wrap it in a class in order to work, and now it knows how to fix it. As you can see, in order for this method to work, it needs to be inside of a class called program. Let's go ahead and copy this code, close out our window, select all, and paste it in. Now, if we run this, we should see Hello World again. But what if we want to do something a little bit more complicated? One of the things that Copilot's good at is creating large blocks of code. So in this case, let's create a rock paper scissors game, and we're going to have Copilot help us do it. The first way of doing it is to simply make a comment that says, "This is a simple rock," and as I'm typing out paper, it's automatically giving me a completion because it understands the context of rock and paper and it's going to help us auto complete. Scissor game. And let's just be very clear with it that this is going to be in C# because we wanted to create code in C#
>
> **[7:50](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=470)** and not in another language. Again, it's important to be very specific with Copilot or any of these AI tools so that it has the context of what you're doing. Now, if we go to the next line and we start typing out public, you'll see that it is now generated out all the code we need for our game. Let's hit Tab. I'm going to close the terminal so we can see this. And now, we have all the code for a rock, paper, scissors game. Let's save this and run it. So I'm going to enter in rock, and it looks like the computer wins. As you can see, after you make a choice and you get the result, this automatically quits. Now, one interesting thing to point out is that when I was testing this before doing this video, it gave me a completely different way of writing the paper rock scissors app. In fact, all of the code actually existed inside of the main method and it didn't create any of these other static methods. So let's try one last thing. Let's delete all this code, and now, let's ask Copilot if it can make us a new game. So now it's giving us all the code. Now it's created the same game, but in a completely different way. So let's go ahead and copy this, close our prompt and paste it in. Now, if we run it, let's see what happens.
>
> **[9:26](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=566)** Now it's asking us to play it a different way. It's actually telling us to enter a rock, paper, or scissor. I'll type in rock and I lose again. Paper beats rock, but you'll see this time, it isn't actually saying that the computer won and I lost. And this is one of the things that I wanted to point out about the randomness of Copilot and these AI tools for generating a code. It's always going to do this in different ways, one, depending on how you ask it, and two, just depending on how it feels at the moment. Let's do a few other things real quick just to show off how we can use Copilot to help clean up our code. One of the things I want to do is make sure that if the user enters in something that's not correct, it gives them an error. So let's go ahead and highlight this part of the code. And now we're going to ask Copilot, how can I make sure that the user can only enter in something that's valid? Now, as you can see, instead of it just fixing this one line of code, it realize that the entire app itself needs to be wrapped in a while loop. This way, if the user enters in something that's incorrect, it'll be able to go back to the beginning of the app and then ask the player again to put in the correct thing. So let's go ahead and we'll copy this code, close the window, and then replace this code with the new code. Let's run it and see if it actually works. I'm going to enter in pen and it tells us that we've made an invalid choice
>
> **[11:01](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-comments-to-guide-code-completion?u=76281980&t=661)** and that we need to enter in rock, paper, or scissor. There's one last thing that I want to do here, and I just want to make sure that if you enter in the [[Microsoft Word|word]] "quit," it'll exit out of the program. So again, I'm going to go and highlight this part of the code and I'm going to ask Copilot, how can we enter in a command to quit the game? So now it's telling us how we need to modify the entire app in order to accept a quit command. Let's go ahead and we'll copy all this code, paste it, and now we can see that the user choice if it's set to quit, will exit the program. You also see the Copilot's gone ahead and it's updated the information that it displays to the player. Now it says, enter rock paper, or scissor, or quit to exit. So let's enter in pen. It looks like that's not valid. Let's enter in rock and I lose and it beat me. Now if we run again, let's see if we can quit. And now it exited the program. So these are just a few examples of how you can use Copilot to create code from scratch. And in the next video, I'm going to show you some ways of using Copilot to help you refactor.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (23), [[Windows]] (1), [[Microsoft Word|Word]] (1)
> **Tools:** visual studio (10), command line (4), terminal (2)
> **CLI Commands:** make (6), dotnet (1), find (1)
> **Env Vars:** net (3), ide (1)
> **UI Navigation:** open the (2), go to (1)
> **Cross-References:** go back to (1), in the next (1)
> **Warnings:** keep in mind (2)
> **Definitions:** is a  (1)

#### [Using Copilot for refactoring and cleanup](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980&t=0)** - [Instructor] So in the previous video, I showed you how we can generate new code using [[Microsoft Copilot|Copilot]]. Now let's take a look at how we can refactor and clean up existing code and take the game we made in the last video and make it more object-oriented. To start, let's go ahead and highlight our rock, paper, scissor string array and see what we can do to make this an enum. Now, you'll see when we highlight this line, we get a little light bulb. Previously, this light bulb would give you quick fixes or solutions, but now that it's tied into Copilot, if we click on it, you'll see it gives us our quick fixes like before, but it gives us the option to rewrite and modify it using Copilot or a bunch of different actions. Let's go ahead and modify this using Copilot. And I'm going to ask it how we can turn this into an enum. I'm going to hit return and now you'll see the Copilot has gone ahead and it's showing us a preview of the code it's about to modify. So here I can either accept or discard the changes or I can continue to talk to it and try different variations. Right now, I'm going to go ahead and accept it. And now, we have our enum. But you'll see that there's some issues, because we can't have an enum sitting inside of the class like it's doing right now. I'm going to highlight this and see what it can do to fix it. Let's select Fix using Copilot.
>
> **[1:33](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980&t=93)** And now it's telling us, "To fix the error in the code, "you need to add the missing closing brace." So let's accept this change and see what happens. Now, you'll see it's actually broken all of the code. And the reason why I'm doing this is just to highlight that you can't just blindly accept all the choices that Copilot is going to suggest. It really doesn't understand the context, and in reality, this is just an auto-complete engine, because it's been trained on other people's code, so it gives you its best guess at what the code should be structured like. I'm going to undo this change, and I'm going to pull this enum out and put this above the static method and now save it. So now it's giving us another error, because we've turned this into an enum that we cannot implicitly convert the type 'Program.Choice' to a string. So let's see if there's a quick fix for it. We'll ask Copilot again. Now, in order to fix this error, it's going to convert the enum into a string before comparing it, so let's accept. But you see that there's a ripple effect that's going on and that we made one little refactor, but because Copilot didn't understand the context of what we were trying to do, we now have to go through and manually fix it each step of the way. But there's a better way of doing this. I'm going to revert our changes and go back to how we had this before. And now, I'm going to select all of this code, and I'm going to ask Copilot
>
> **[3:05](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980&t=185)** how we can make the choices in enum and see what it gives me back. One thing to note is that if you want to add new lines without submitting the prompt, hold down shift and then hit return. Let's go ahead and paste the code and see what it has to say. I'll make this window a little bit bigger. So now it's going through and giving us the complete code with all the fixes down the line. Let's see if this actually works now. We'll paste this and now we'll run the program. So, let's enter in a value. We will type in rock, and it looks like I lose, because paper beats rock, but the program is now working, and as you can see, we now have abstracted this out to have its own enum for the choices. But let's go a step further. It's not good for us to have all of our logic inside of one main method. Plus, there's an additional fix that I really want to do, which is I want to be able to play the game again once you've made a selection whether you've won or lost. So let's go ahead and select this code and see what we can do about it. I'm going to pull up the Copilot prompt again, and I'm going to ask it, "How can we fix this "to replay the game until the user quits?" So here it's walking us through all the steps we need to do, and it's going to give us our code. So now let's copy this and then paste it in its place and now rerun the program to see if it works. So both players select rock. It's a tie.
>
> **[4:42](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980&t=282)** And now it's asking me again to enter my option. Let me do paper, and it looks like I finally win, so paper beats rock. Now let's see if we can quit the game and exit out of this loop. And now, we've successfully refactored our program to fix the loop so that the player can continue to play if they choose to. And there's one more thing I want to do, which is make this more object-oriented. Now, this is going to require a much larger and complicated refactoring, but this is something that Copilot can do as long as you limit the scope of what you're trying to refactor. So let's go ahead and copy all of our code, and now we're going to go back into the prompt and we're going to ask Copilot if it can make this more OOP, and let's see what it suggests. So now it's telling us we want to make a game class, a player class, a choice enum, which we already have, and a game rule class. So as you can see, it's now giving us the code that breaks out each of these classes. It's also creating a base class and extending these classes and breaking down our program to be a lot more modular. And this is a good technique, one, if you're not an advanced developer and you're still learning how to program, or if you have a large, complicated block of code or a lot of code inside of a method, and you want to figure out how to make it more modular, you can ask Copilot to help you break it down. Let's copy this code, select all of it, we'll paste it in, and we'll rerun the program.
>
> **[6:17](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980&t=377)** But it looks like there's some build errors. And this is what happens from time to time when you let Copilot try to refactor way too much code, and it doesn't understand how to do it. Let's take a look and see what the problem is and if we can identify a way to fix it. It looks like there's two places where there is a problem. This could be a possible null, which is fine, but then we have this !Enum.IsDefined, and it says that there's no overload method for it. Now, this is a common problem. Let me copy this and paste it into Copilot and ask it for a fix. So, as you can see, it's giving me another solution. In this case, instead of using the IsDefined, which doesn't exist in C#, it's now telling me that I can TryParse. So now, let's go ahead and paste the code that Copilot gave us. Now you can see we're getting another error, and that's because we're defining the user choice, and it's being redefined down here. This is because Copilot didn't have the context of what was outside of the code that we shared with it. So let's go ahead, highlight this, and see if there's a way of fixing this. So now it's going to offer us a solution, and it's telling us what the problem is. Let's accept it, save our game, and try to run it. I'm going to enter in rock. It looks like I lose.
>
> **[7:53](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/using-copilot-for-refactoring-and-cleanup?u=76281980&t=473)** Let me try to enter in something that's not a rock, paper, or scissor. Good, it's still telling me that we have an invalid choice. And the last thing we need to do is test quit. And there we go. We've now used Copilot to successfully refactor a very large, single-function program into multiple classes in a more object-oriented way. Just remember, your mileage is going to vary. A lot of the times when I was testing this out before doing the video, the code that it would generate was completely different than what I'm seeing now. Sometimes it would give me the error. Sometimes it wouldn't. But you, as a developer, need to be able to go through the code and problem solve it. You can use Copilot to help, but don't rely on it, because it doesn't understand how to really build the stuff you're asking, it's just trying to predict what it thinks is going to be the right pattern to match the request that you're giving it. But over time, as you get used to the way that Copilot works, and you start learning when to ask it for help or when to write your own stuff and then ask it to fix the things that you write or clean up the stuff that you write, you'll find a better way to put it into your own workflow as a developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (21)
> **CLI Commands:** make (8), find (1)
> **Cross-References:** previous video (1), in the last (1), go back to (1)
> **Definitions:** is a  (3)
> **Env Vars:** oop (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 2. Leveraging AI for Documentation

[↑ Back to Table of Contents](#table-of-contents)

#### [Documenting your code with AI](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-ai?u=76281980&t=0)** - [Instructor] Now it's time to talk about one of the features that I really love using AI for, which is helping with code documentation. Not only can it give you useful documentation, AI tools can help in a number of ways to make sure that others understand what's happening in your code, which is especially useful if you're working on a large team or on an open source project. We'll start with some theory on how to properly document code, we'll show examples of good code documentation and then explore how AI tools like [[GitHub]]'s [[Microsoft Copilot|Copilot]] and [[ChatGPT]] can assist in generating and explaining code. Documenting code is probably the least favorite part of coding for most developers. Unless you do it while you're writing your code, going back and adding it in can be a chore, but code documentation is critical as it helps developers understand the code, aids in better maintaining and updating it, and enhances knowledge sharing among team members. Well-documented code can not only save time and reduce errors, it's critical for when you need to extend or return to a project that you haven't touched in months or years. A lot of this is common sense, but I want to cover it anyways. It goes without saying that good code documentation should be clear and concise, relevant to the code it describes, and consistent in style and format. These principles ensure that the documentation is helpful and easy to follow. Now let's talk about how to properly comment C-Sharp code. In this example, the XML comment provides a clear description
>
> **[1:34](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-ai?u=76281980&t=94)** of what the player class represents. In this example, the XML comment describes what the name property is used for. This example shows how to document a constructor, and the same can also be applied to a method. As you can see, the XML code includes a description for the method itself and the parameters as well as its purpose. While most people simply focus on big ticket items like classes, public properties and methods, inline comments are just as important to help explain specific lines or blocks of code and what your intention is when writing them. They should be concise and directly relevant to the code they describe. In this example, inline comments explain the purpose of each line of code within the MakeChoice method. I can't tell you how many times these comments help remind me of what I was doing in parts of my project that I don't often touch. Most developers are familiar with tools that automatically document your code by simply reading through all the code and generating out an [[HTML]] site or a PDF that goes through all the public methods and classes and links them all together. And while these automated tools can help generate the documentation by parsing your code, they often lack the contextual explanations and do not capture the rationale behind the code. This is where AI tools can provide more meaningful insights. In certain situations, these automated documentation tools do a much better job than AI does
>
> **[3:08](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-ai?u=76281980&t=188)** for generating out complete documentation for your entire code, but they're useless when it comes to code that isn't well documented. GitHub's Copilot can generate contextual comments as you code if you use it correctly. This is very useful for explaining the current file or method you're working on, however, it's limited to the current context and doesn't have the capability to remember information across multiple files. ChatGPT, on the other hand, can generate comprehensive documentation by remembering the context across multiple files, which helps you in tying together different parts of your project. However, it requires manual prompts and is not fully integrated into the IDE like Copilot is. But one thing you can do is feed it a PDF of your code and then prompt it to help you document specific parts so it has the full context. The output of both of these are only as good as the prompts and the data you give it. So here are some helpful prompts that you can use with GitHub's Copilot and ChatGPT to help speed up your code documentation. These prompts will help you generate detailed and contextual comments for your code when used correctly. When using Copilot, you can use prompts as comments such as, explain this method, describe the purpose of this class, add comments for the parameters and value types, document this property, and add a summary for this function. Sometimes simply just adding the two slashes for a comment before a piece of code
>
> **[4:42](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-ai?u=76281980&t=282)** will automatically generate the documentation for you. ChatGPT, on the other hand, you may want to tell it things like, generate a summary of this class, document the responsibilities of this method, explain how this property is used within the class, and describe the interaction between these classes. Now that we've gone over some of the prompts we can use, let's take a look at how to use these in our example project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[ChatGPT]] (4), [[GitHub]] (3), [[HTML]] (1)
> **Env Vars:** xml (3), pdf (2), html (1), ide (1)
> **Documentation:** the documentation (3)
> **Tools:** github (3)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Documenting your code with GitHub Copilot](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-github-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-github-copilot?u=76281980&t=0)** - [Instructor] In this video, we're going to learn how to document our code using [[GitHub Copilot]]. We'll explore different ways to leverage [[Microsoft Copilot|Copilot]] to generate code documentation, including inline prompts, highlighting code to prompt, and finally, the chat window. One of the ways I like to do this is by automatically adding the comments as I'm writing my code. Let's take a look at how we can add a comment for our choice enum. If we go ahead and add two forward slashes for a comment and a space, you'll see that Copilot is automatically going to guess what this comment should be. Now, sometimes it's going to guess incorrectly and give you a suggestion talking about maybe what an enum is. But in this case, since I've already been playing around with it previously, it's making the assumption that we're going to need a comment for this enum. Once we hit Tab, we now have this comment in our code and we can continue to move on. But what happens when we want to comment something that requires a little bit more complicated comments like a class? Let's scroll down to our Player class and try this again. We'll hit two forward slashes and now you see it's giving us a generic Player class comment. This isn't very helpful. If we go ahead and start adding an XML comment with summary, you'll see that it'll start auto-completing the XML comment style for us. If we go to the next line, it'll now begin to auto-complete the comment
>
> **[1:34](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-github-copilot?u=76281980&t=94)** it thinks is appropriate for this code. So right now, it's telling us that this is the Player class to make a choice. We can hit Tab. And now if we go to the last line, it should close out the XML comment with a /summary. Now this is very helpful 'cause it's giving us well-structured XML style comments, but it doesn't really give us a lot of context as to what this should do. So let's go ahead and copy this code and we're going to start by opening up the prompt and we're going to ask it, "Tell me more about this code." So as you can see, it's giving us a lot more information now about what this code does, the context of it, what other requirements it uses or needs, and it gives us some basic information about return types and error handling. So let's ask it to make us a comment that better reflects this. So I'm going to ask it, "Can you give me an XML style comment that sums all of this up?" As you see, it's now giving us a much more detailed comment, which is more useful to anyone who's reading the code instead of the generic, well, this is just a Player class. Let's copy this, close out the prompt window, and replace our comment. One thing that's also good to know is that as we start adding more comments like this, if we were to continue to add new lines
>
> **[3:08](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-github-copilot?u=76281980&t=188)** inside of the summary or in the remarks, for example, it may add even more information. Here's an example. So now I'm going to hit slash slash and let's see what it does. It looks like this time now, it's assuming that we need to close the summary because we already have the comment above. So now I'm going to write a comment saying, "Can you tell me more about this class?" And now if we hit Return, you see it's going to continue to try to get us to close the XML comment summary node because it doesn't really understand in context what the comment is doing. All it's doing is trying to give you feedback on the code itself. It's not really reading the comment and then giving you anything in return. So let's go ahead and delete these two lines since we don't need them. And let's talk about other ways that we can comment this code. So I'm going to go ahead and copy all of this code now and we're going to go over to the chat window. We're going to now ask Copilot to give us a header for this code file in order to tell others what this does, who made it, and anything useful that they should know about it. So as you see, it's now giving us a properly formatted header comment that goes through and explains everything inside of the code. And since it doesn't know my name or the date, it's just going to give me a placeholder. So here we can go copy this
>
> **[4:43](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-github-copilot?u=76281980&t=283)** and paste it at the top of our class file. I'm going to fill this in with my name and then we're just going to remove the date. So these are just a few of the ways that you can use Copilot in order to help you comment your code. The last thing I want to touch on before we go is that it's also important to comment the code inside of your logic and not just the public methods and classes that others would have access to if they were using this in case this was a library. So now I want to go ahead and add some more comments inside of this particular method. Here you can see I added two slashes and it's telling us that it's generating a random choice. And the interesting thing about this is that because these two lines are together, it's giving us a comment that encapsulates both of these lines. In this case, we have a choices array with our choices from the enum and then it returns a random choice. So let's delete this, add some space between the lines of code and then try to add a comment again. Now you can see it's treating each one of these lines individually. In this case, it's now telling us that we have an array of possible choices, and if we hit Return here, it's now telling us that it randomly selects a choice. And now you've seen all the ways that we can use Copilot to help us document your code. My suggestion is that as you continue to write code or even as Copilot generates code,
>
> **[6:16](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-github-copilot?u=76281980&t=376)** you can either tell it to generate code with comments, or you can go through, start breaking up the code and adding comments yourself. This way you know what the code is doing, especially if it's generating out code that you're not familiar with or you've asked it to do something that you haven't built before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), [[GitHub Copilot]] (1)
> **Env Vars:** xml (6)
> **CLI Commands:** make (2), node (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Documenting your code with ChatGPT](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980&t=0)** - [Instructor] In the previous video we discussed using [[GitHub Copilot]] to help us add comments as we wrote and generated our code. Now we'll look at how [[ChatGPT]] approaches the same tasks. For this scenario, I'm going to have ChatGPT open in my browser on the left and my code on the right. This is something to keep in mind when using ChatGPT over [[Microsoft Copilot|Copilot]] since it's not built into the IDE. So the first thing I'm going to do is copy all of the code we created previously, including its comments, and I'm going to tell ChatGPT to strip it of all the comments. Now as you can see, ChatGPT is going through taking the code that already exists and removing all the comments that we had previously. This also tells ChatGPT, the structure of the code. So now it can keep this in memory. In order to take code from ChatGPT and put it back into our application, simply look for the copy code button at the top of the code block and then we can go back over to Visual Studio, select all and just paste it. Now that ChatGPT is familiar with the code, let's ask it what it knows about it. Here I'm going to type in the prompt, "Tell me everything you know about this code." And as you can see, ChatGPT is going to go through and extensively document all of the pieces of the code and what it knows, what it can tell us about, and also some of the definitions of the terms, and the things that have been architected in order for us to better understand what's going on in the code. You can see that it's also giving us the flow, the key concepts, and at the end it'll summarize everything for us.
>
> **[1:34](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980&t=94)** Now, one of the things that I want though is for it to tell me what's in the code more as a narrative, like how would I explain it to another person? So let's ask it, "Can you tell me this as a narrative?" So as you can see, ChatGPT really doesn't understand the context of a narrative in this sense. For me, I wanted the narrative to be explained to me what the code is like, but since I left it vague, ChatGPT is going ahead and it's generating out a story based on our code. Now that it's stopped, let's explain to ChatGPT what we're really looking for. I'm going to start by telling ChatGPT how it should act. In this case, I'm telling it that you're a C# sharp developer that is documenting their code, but we can stack prompts together so we don't just have to give it one prompt at a time. Now that I've told it that it's a C# developer that's documenting their code, I'm going to give it the additional instructions. I'm going to tell it, "You'll want to provide clean, clear, succinct comments to the code and when commenting, it would be helpful to make sure that you add detailed inline comments to the code you show me in addition to XML style comments on the major elements like classes, constructors, methods, and properties. Do you understand?" Now let's submit this prompt, and as you can see, ChatGPT is a little bit eager to show us it knows. So normally when you're talking to someone else and you'd ask it if it would understand, that person would say yes
>
> **[3:06](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980&t=186)** and then wait for the next command. In this case, ChatGPT informed us that it understood and then just went ahead and started giving us all the code. But as you can see, it's doing things correctly. It's adding XML comments where it's applicable and it's adding inline comments as well. Now we have much cleaner code that's well documented, which we can copy back over into our program.cs file. Now there isn't a lot of difference between what Copilot and what ChatGPT can do as far as comments go at this particular point. There are some unique prompts that we can use for ChatGPT since it understands the entirety of the program. Normally, we would have these classes in different files, so Copilot would have a difficult time reading across files because it doesn't understand how to do that. Whereas in ChatGPT, if we aggregated all the code together and fed it back to it, it would be able to look through and understand the relationship between the code. To illustrate how that works, let's try to prompt it to give us a diagram of the project structure. So here I'm going to tell it, can you give me an ASCII diagram of the project structures and the relation between the classes? I'm being very specific here in telling it I want an ASCII diagram because if I just asked it for a diagram, it's going to attempt to generate an image and the image would have nothing to do with the code that we're asking it about. So as you see, it's now generating out this map that shows us the code, our classes,
>
> **[4:40](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980&t=280)** how they relate to each other, and the main methods that are being called in order for us to know where the interaction points are throughout our program. It also gives us a nice detailed explanation in order to go along with our graph. Now let's go and copy the same prompt and we're going to paste it into Copilot just to see the difference. So in this case, it drew the diagram a little bit different, showing better relationships between the level to the game, the player and the enemy. But if we take a look, it actually isn't giving us a diagram for the code that we're asking for, because it doesn't have the context. What we need to do is highlight the code in our program, paste the prompt back in and be very specific. Now it's gone ahead and it's generated out a new diagram. This diagram actually now relates to the code that we asked it about, but you see it isn't giving us any of the contextual information. What's interesting about this, and this is something that I've talked about before, is that both of these AIs sometimes hallucinate and they make up things, especially when they don't understand the context. So at first when we asked it for a diagram inside a Visual Studio, it looked like we were getting a very detailed and useful diagram. But once you start reading what it's actually giving back to you, you quickly realize that it didn't understand and instead of asking you about the code or what it should document, it just went ahead and made something up. One of the last things that I like to do with ChatGPT,
>
> **[6:16](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980&t=376)** is I like to have it help me map out what else I should do with my code. So let's create a new prompt. So now I'm asking it what should I do for the next steps to build out this game? And it's going to give us a list of things to do and it's breaking them up in this case by category. And now it's giving us some examples of how to implement this. So let's stop it because it'll just keep generating out code. And what I want to do is make this more structured. So here I've asked it to give me the top five things I should do, but again, ChatGPT doesn't understand the context. So it's giving us at least five elements inside of each of these subcategories. Let's try one more prompt to see if we can get it back on track. Now I'm going to tell it, can you just give me five tasks as a to-do list to implement next? As you can see, it's given us the tasks and some sub-bullet points in order to show us what should be implemented in each of the tasks. The final thing I'm going to do is ask it to give me all the code for each of these tasks. Now what you're going to see is that it's just going to generate out code and it's going to keep giving us code thinking it's doing the right thing. I just wanted to show you another example about how these ais tend to hallucinate. So in this case, while it's giving us lots of code and it's implementing some of these tasks it suggested, it doesn't really understand the context of what rock paper scissor games are, so it's actually going to head and added two new options,
>
> **[7:49](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/documenting-your-code-with-chatgpt?u=76281980&t=469)** lizard and spock. Now, sometimes this can work to your advantage if you want it to be creative, ChatGPT can go ahead and give you very good ideas or it can help you brainstorm. But most of the time if you don't do things step by step or in small broken down pieces, it's just going to give you a lot of garbage code or a lot of garbage feedback and you're going to wind up copying and pasting this code into your program and spending a lot of hours trying to debug it. So my suggestion is think through what you want to do, be very specific with ChatGPT, and also see what the differences are between using Copilot and ChatGPT, because the same prompt is going to give you different answers and each of them have a different way of looking at the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (23), [[Microsoft Copilot|Copilot]] (5), [[GitHub Copilot]] (1)
> **Env Vars:** xml (2), ascii (2), ide (1)
> **CLI Commands:** make (3)
> **Tools:** visual studio (2), github (1)
> **Cross-References:** previous video (1), we discussed (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. AI-Assisted Technical Writing Based on Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Technical writing with AI](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/technical-writing-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/technical-writing-with-ai?u=76281980&t=0)** - [Instructor] In this video, we're going to talk about how to use AI to help you with your technical writing. Whether it's writing to teach other developers how to use your code or to teach developers new coding concepts, AI can help speed this process up and even make your writing better. Technical writing is a critical skill that all developers should learn. Not only does it help with knowledge sharing within a team, it also helps support learning and development for developers just getting started or looking for help to get better. If it wasn't for other developers sharing their knowledge when I was getting started, I wouldn't be here today. So learning how to pay it forward is valuable to keep passing on the knowledge we learn each time we fix a problem, find a solution, or create something new. I've been involved in technical writing for decades now, starting with blogging about my code and best practices when I was a Flash developer, and I've continued this with the courses I now teach on [[LinkedIn]]. Over time, I've built lots of tools to help speed up and automate this process. One of my tools called Tutorial Writer would run through code line by line and turn it into Step-by-step tutorials. I created several versions of this over the years, but none were perfect and still required me to do a lot of cleanup on the tutorials it generated. If you're curious about this project, I made it public, and you can take a look at the code on [[GitHub]]. I used tools like this to help me create all the tutorials for my open source fantasy game console, Pixel Vision Eight, as part of its onboarding documentation.
>
> **[1:34](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/technical-writing-with-ai?u=76281980&t=94)** This allowed me to focus on making all kinds of game demos, and then I can use my Tutorial Writer tools to turn them into step-by-step guides to teach others, all without having to do anything more than ensure the code was clean and well-documented. These tools did all the heavy lifting for me, and it allowed me to create hundreds of pages of tutorials and documentation, which I put on the Wiki for my code project on GitHub. However, I was never able to create something generic enough to understand multiple languages without manually adding new definitions myself. My approach was similar to a Decompiler versus what LLMs do now. The thought of using an AI to automate this wasn't even a reality when I started making my Game engine seven years ago. I had to hack together Regex definitions for each language, which made it very complicated to expand and maintain. Now, with tools like [[ChatGPT]], I can run my code to them and have it build out tutorials for me. It's not perfect, but there's a lot you can do with it. AI tools can speed up the technical writing process and allow you to focus on what's more important, making the code itself. They're versatile, and can handle multiple languages better than any of the tools I've written over the years. In the next video, we'll go over some techniques to help turn your code into tutorials to teach others. These techniques will show you how AI can be a powerful ally in technical writing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[LinkedIn]] (1), [[ChatGPT]] (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** github (2)
> **Prerequisites:** getting started (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Best practices for AI technical writing](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/best-practices-for-ai-technical-writing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/best-practices-for-ai-technical-writing?u=76281980&t=0)** - [Instructor] In this video, I'm going to cover some best practices for technical writing and making tutorials to teach others. We'll focus on important concepts you need to know when it comes to writing technical documents and tutorials, all while talking about how to use [[ChatGPT]] to do this for you. As I discussed in the previous videos, technical writing is essential for facilitating knowledge transfer, enhancing the understanding and usability of your code, and providing long-term support knowledge to users and other developers looking to build with or extend your project. Good technical writing should be clear and concise, well-structured, accurate, and tailored to the audience level of understanding. These four concepts will help you when approaching all of your technical writing. Effective tutorials should include: step-by-step instructions, visual aids, like screenshots and diagrams, practical examples, and interactive elements, such as quizzes and exercises. While AI can help with a lot of these, you'll always want to go back over what AI generates and add a personal touch to it. ChatGPT can be a powerful tool to help you with your technical writing. It can generate initial drafts, provide explanations and context, and help you edit and refine the output. It can also help you brainstorm, focus on specific ways to approach a topic, and critique your work to make sure you're getting your point across correctly. Here are some example prompts you can use with ChatGPT to create tutorials.
>
> **[1:35](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/best-practices-for-ai-technical-writing?u=76281980&t=95)** You can ask it to: "Explain the purpose of this method," "Break down this code into step-by-step instructions," "Describe the role of each parameter in this function," "Provide an example for using this class," and, "Generate a detailed explanation of how this code works." Using ChatGPT can also be incredibly frustrating because it requires detailed prompts. It has issues maintaining consistent formatting, and there's often context loss between sessions when you spend too much time in a single session and it runs out of memory and characters. Usually this is when it starts hallucinating, which is a common issue in many LLM-based AIs. I like to think of it as ChatGPT just gets lazy and tells you what it thinks you want to hear just to make you stop bothering it. The last thing I want to talk about is that OpenAI has recently introduced a new, no-code tool called [[Custom GPTs]]. These can help overcome a lot of challenges I previously mentioned when using ChatGPT for technical writing. You can feed the custom GPT instructions on how to act, which will help it better retain context, allow for personalized prompts and responses, and maintain consistent formatting and structure when done correctly. In the next video, we'll look at how to build our own custom GPT to help us write tutorials from our example project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (6), [[Custom GPTs]] (1)
> **Env Vars:** gpt (2), llm (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), think of it as (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Building a custom GPT for writing tutorials](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/building-a-custom-gpt-for-writing-tutorials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/building-a-custom-gpt-for-writing-tutorials?u=76281980&t=0)** - [Instructor] In this last video, we're going to talk about making [[Custom GPTs]] for turning our C# code into tutorials. We're going to start with the basic instructions, test the results, and then we'll discuss them. We'll also progressively add more details until we have a comprehensive tutorial writer. We'll use our Rock, Paper, Scissors game we created earlier for the example. Now let's take a look at how we can do this. Before I jump into the custom GPTs, what I just wanted to show you is that regular [[ChatGPT]] can also do this task. The problem is, which you may have seen in the previous videos, is that you have to spend a lot of time prompting the AI in order to understand the context of what you're doing. In this case, I would tell it you're a C# developer, you're looking to write code, you want to share it with others, and I'd have to keep building these prompts up until it got to a place where it understood. Because if I just take all of this code, copy it, and tell it, "Turn this into a tutorial," it's not going to give us exactly what we want because it really doesn't understand. On the surface, it's going to show us the different steps, it's going to explain things. But, the thing about ChatGPT is that it does things differently every time. So, in this case, it's going to go ahead and give us a nice, clean-looking tutorial. But, in the previous attempts, when I was practicing with this, it gave me back really bad tutorials. And this is just the way that it goes. Now, you can continue to prompt it and get it to refine it to exactly what you want,
>
> **[1:33](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/building-a-custom-gpt-for-writing-tutorials?u=76281980&t=93)** but whenever you want start a new tutorial, you're going to have to retrain ChatGPT exactly what you want, and that's where the custom GPTs come into play. So before you get started, you're going to need a Pro account or a Workspace account in order to create custom GPTs. If you click on the Explore GPTs, you'll see that it gives you a list of all different custom GPTs that other people have created. Let's go ahead and create our own. We're going to keep this really simple just to show how this can work and how if you spend a good amount of time training a custom GPT, you'll be able to get reproducible results whenever you start a new session. We'll start by going to Configure, and we're going to name this Tutorial Writer. Next, we'll give it a description that will let us know and others who use it what this does. And now, we give it instructions. Instructions are basically prompt stacking. It allows us to put lots of prompts together in order to give it the knowledge it needs in order to be more specialized, instead of it being so generic. So, in this case, I'm going to give it five prompts. So my prompts are: explain the purpose of the code, break down the code into steps, describe each step in detail, provide and expected output, and include tips and best practices. All of these make sense to us for what you want a tutorial to be.
>
> **[3:08](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/building-a-custom-gpt-for-writing-tutorials?u=76281980&t=188)** We'll go to Preview, and now we can copy our code, paste it in, and see what happens. So, as you can see, it's now going through our code, but instead of creating a tutorial, it's really just doing a more elaborate documentation of the code. It didn't seem to understand that when we tell it, "Break the code down into steps," that that means step-by-step tutorial. So, let's go back and we'll go to the Configure tab once this is done outputting. And back in the Configure tab, we can continue to add more instructions, so that it understands what we want it to do. How about we're going to start this time with explaining that its goal is to create a tutorial. We'll do something similar to what we did in the previous video when we talked about using ChatGPT for documentation. So here, you can see, I'm telling it that, "You're a C# developer and you're trying to teach other developers how to code. I'm going to give you code and you're going to turn it into a step-by-step tutorial, using the following as a guideline." And now, each of these things that we added originally are going to be the guidelines for what makes a proper tutorial for our custom GPT. Let's go back to Preview, and we're going to paste the code back in. So now you can see it started out by saying that this is the tutorial, it's telling us the purpose, it's breaking it down, and now it's going through and adding step-by-step explanations for the code. But one of the things that I'm noticing is that it's no longer actually giving us comments
>
> **[4:42](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/building-a-custom-gpt-for-writing-tutorials?u=76281980&t=282)** inside of our code. And to me, it's important that, one, when you teach someone how to build code, you break these code blocks up into smaller steps, and two, you add comments into the code. This way, they can see exactly what's going on and get other context that may not be in the [[Representational State Transfer (REST)|rest]] of the text, especially for people who like to just copy and paste code, instead of reading through full tutorials. So we can go ahead and we can tell it to do this in the prompt here, or we can just add it back to the configuration. So, right here, I'm just going to modify this prompt and I'm going to tell it. So now I've modified it in order to tell it that each code block should be broken down into steps based on each code line or grouping of code lines that make sense together. And that I also want you to add comments in line for all code examples that you show me. And then I tell it to continue to use the following guidelines. Now, let's try this one last time. We'll paste back in our code, submit it, and let's see what kind of tutorial it gives us. So, as you can see, it's going back through giving us step-by-step instructions, and it's also adding comments, again, back into the code. There are lots of things that we can do to continue to configure this. I'll let you play around with it on your own, so that you can get it to match your style. But for me, I would take things like explanation and these sub-bullet points, and I tell it not to do it. Other things you can do in the configuration is that you can give it examples
>
> **[6:14](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/building-a-custom-gpt-for-writing-tutorials?u=76281980&t=374)** of how you like it to structure code or how you want a step to be. And you can also upload PDFs if you want to give it best practices. Maybe you find a site that talks about how to correctly write tutorials or something about technical writing. You can continue to feed it information, and it'll use those all as reference points in order to help build your custom GPT. And whenever you're done, you can simply hit Create, and you can use it privately for your own use or you can publish it and make it public to others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Custom GPTs]] (5), [[ChatGPT]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** configure (4)
> **Env Vars:** gpt (3)
> **Cross-References:** previous video (1), we talked about (1), go back to (1)
> **UI Navigation:** go to (2), click on (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mastering-ai-tools-for-efficient-c-sharp-development/next-steps?u=76281980&t=1)** - Now, that you've completed this course, you should have a solid understanding of how to create and refactor your C# code using [[GitHub Copilot]], as well as how to document it with [[ChatGPT]]. Here are some next steps, like using GitHub Copilot to add new features like a scoring system, leveraging co-pilot to generate more documentation for the game as you enhance it, plus use ChatGPT to create a Read Me file, instructions and a setup guide, and finally using ChatGPT to help turn this into a series that you can post on your own blog and share with others. Good luck, and I hope you find these tools as helpful as I do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[GitHub Copilot]] (2)
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **Prerequisites:** setup (1)
> **Speakers:** - now (1)


## Instructor

- [[Jesse Freeman]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/mastering-ai-tools-for-efficient-c-sharp-development-4496091/tree/main)

## Skills Covered

- Generative AI
- Software Development
- Artificial Intelligence (AI)
- C#

## Path Context

### In [[C- Foundations- From Basics to Building Blocks]]
← [[C- Refactoring Tips and Tricks]] | **5 of 5**

## Appears In

- [[C- Foundations- From Basics to Building Blocks]]

## Related Courses

_Courses sharing skills:_

- [[Building with Google Gemini Advanced and Ultra]] — Generative AI, Artificial Intelligence (AI), Software Development
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), Software Development
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)