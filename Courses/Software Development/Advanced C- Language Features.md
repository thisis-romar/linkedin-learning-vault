---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-c-sharp-language-features
url: "https://www.linkedin.com/learning/advanced-c-sharp-language-features"
duration_minutes: 103
duration: 1h 43m
level: Advanced
updated: 8/29/2022
learners: 45099
skills:
  - C#
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-c-sharp-language-features-2491189"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGZRKLVLjW08A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661448132171?e=2147483647&amp;v=beta&amp;t=ohKgw-T9t0eODNybZqySudQaC5NRnE207Di0-UpJqdw"
linkedin_topic: Software Development
learning_paths:
  - '[[C- Excellence- Architecting High-Performance Solutions]]'
prev_courses:
  - '[[C- Applied Data Structures]]'
next_courses:
  - '[[Advanced C- Object-Oriented Programming]]'
path_nav: '[{"path":"C- Excellence- Architecting High-Performance Solutions","position":3,"total":6,"prev":"C- Applied Data Structures","next":"Advanced C- Object-Oriented Programming"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/c
status: not-started
created: 2026-04-21
---

![Advanced C#: Language Features](https://media.licdn.com/dms/image/v2/C4E0DAQGZRKLVLjW08A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661448132171?e=2147483647&amp;v=beta&amp;t=ohKgw-T9t0eODNybZqySudQaC5NRnE207Di0-UpJqdw)

# Advanced C#: Language Features

> Projects
Use what you learn about structural pattern matching to build a sales commission calculator tool for a securities trade consisting of stocks or bonds.

In this advanced C# course, instructor Joe Marini dives deep into language features. Joe has worked in the web and software industries for more than 30 years, speaks regularly at industry conferences, and has authored or co-authored severa

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features) | 1h 43m | Advanced | 45K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Joe Marini]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-c-sharp-language-features-2491189)

## Skills Covered

- C#

## Table of Contents

### Introduction

#### C# language features
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=0)** - [Joe] One of the things I've always loved about the C# language is that there's always more to learn about it.
>
> **[0:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=6)** Somehow, C# manages to be both a language that is easy to learn and be proficient with, while at the same time having some really great advanced features that enable developer productivity for a wide variety of programming scenarios.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=19)** Hi, I'm Joe Marini.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=20)** And throughout my career, I've been developing software for some of the biggest and best known companies in Silicon Valley for more than 30 years.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=27)** In this course, we're going to investigate some of the more advanced features of C#.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=32)** We'll start off by learning about some of the language features that make it easier to write more concise, easier to understand code.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=39)** Then we'll take a look at structural pattern matching, a feature that dramatically simplifies writing program logic that would otherwise require complex switch and if-else structures.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=49)** We'll wrap up by working with some of the newer object-oriented features that make building custom class types easier to create, compare, and manipulate.
>
> **[0:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=58)** C# has come a long way and improved immeasurably from its humble beginnings as a Windows-only programming language into the world class cross-platform language that it is today.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/c-sharp-language-features?u=76281980&t=68)** Let's get started learning about some of these advanced topics.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), switch (1), let (1)
> **CLI Commands:** make (2)
> **Speakers:** - [joe] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is intended for C# developers who want to learn about some of the more advanced features of the language.
>
> **[0:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=6)** If you're just starting out with C# programming, then this probably isn't the right course to start off with.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=11)** A better place to start might be Learning C# or [[C- and .NET Essential Training]] before taking this course.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=18)** So before we begin, make sure you're comfortable with the following topics.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=22)** First, you should already have a firm grasp of the basics of the C# language, such as how to work with statements and functions and classes and so on.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=32)** Now, you don't need to be an expert, but I'm going to assume that you already have enough familiarity with C# that I don't need to explain these concepts.
>
> **[0:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=40)** You should also be familiar with using the .NET command-line interface.
>
> **[0:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=43)** We're not going to be using it very much, but you should at least be aware of the tool and what it does.
>
> **[0:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=48)** Finally, you should be familiar with using either Visual Studio or Visual Studio Code.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=53)** In this course, I'm going to use Visual Studio Code but all of the examples in the course should work in regular Visual Studio as well.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=60)** That's pretty much all the foundational knowledge you'll need for this course.
>
> **[1:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/what-you-should-know?u=76281980&t=64)** So if you're okay with these concepts, then you are ready to get started.

> [!info]- Semantic Content
>
> **Tools:** visual studio (4)
> **Code Keywords:** interface (1), finally, (1)
> **Env Vars:** net (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Setting up the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=0)** - [Instructor] To complete the exercises in this course, you're going to need to make sure that your development environment is set up to work with .NET.
>
> **[0:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=6)** The examples in this course are built using .NET Six, so you'll need to either have .NET Six on your machine or you can use the source files to create projects for whatever version of .NET you're using.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=20)** They should work as far back as .NET Five, but if you've got .NET Six on your machine, that's ideal.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=25)** So let's start by opening the terminal program on your computer.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=29)** And then, let's go ahead and type in dotnet, and then dash dash version.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=34)** And you can see here on my computer that I've got version six already installed.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=39)** Now if running this command gives you an error or you have a version earlier than six, you need to install the .NET SDK.
>
> **[0:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=47)** So let's go ahead and switch over to the browser and you can download .NET Six from this link on the Microsoft website.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=55)** The page should automatically select the right version for your operating system, but you can manually change it if you need to.
>
> **[1:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=62)** So if you're downloading for the Mac, you click on Mac.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=65)** Windows is over here and the other operating systems are here.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=68)** So when you install this, make sure that you install the SDK version of .NET.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=74)** You don't want just the runtime.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=76)** Since we're going to be building applications, we actually need the SDK for this.
>
> **[1:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=79)** So follow the instructions for your operating system and install the SDK and then go back to the terminal and run that command again to make sure that it was installed correctly.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=89)** Now I mentioned earlier that I'm going to be using Visual Studio Code for this course and you can find that at, if we go to code.[visualstudio.com](https://visualstudio.com), this is where you can download Visual Studio Code.
>
> **[1:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=102)** Now technically, you can use any editor you want because we're going to be running things from the command line, so I recommend Visual Studio Code because it's free.
>
> **[1:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=111)** It runs on pretty much every operating system that there is and it's a great editor.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=115)** If you've already got Visual Studio Proper, you can use that too, but if you're using an editor like Adam, for example, that should also work.
>
> **[2:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=122)** It doesn't really matter.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=123)** I suggest using Visual Studio Code because it's a great editor.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=126)** It comes from Microsoft.
>
> **[2:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=128)** It's got lots of great features for working with .NET code, so that's what I recommend people to use.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=132)** So once you have .NET Six and Visual Studio Code on your computer or whatever editor you're using, make sure that you install the example files for this course, which you can find in the dedicated GitHub repository at this link, just in that popup right there.
>
> **[2:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/setting-up-the-environment?u=76281980&t=146)** Go to that link and download or clone that repository on your computer to wherever you want and you are ready to get started.

> [!info]- Semantic Content
>
> **Env Vars:** net (11), sdk (4)
> **Tools:** visual studio (6), terminal (2), command line (1), github (1)
> **CLI Commands:** make (4), find (2), dotnet (1)
> **Prerequisites:** install (5), set up (1), you'll need (1)
> **Code Keywords:** let (3), switch (1), this, (1), this. (1)
> **UI Navigation:** go to (2), select the (1), click on (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Cross-References:** go back to (1)


### 1. Language Constructs

#### Indexes and ranges
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=0)** - [Instructor] In this chapter, we're going to take a look at some of the core language enhancements that make code easier to read and write.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=8)** And we're going to start off by learning about indexes and ranges.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=11)** So here in my code, in the start section under general, here in the indexes and ranges folder, we'll open up the code.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=21)** So one of the most common programming operations that you'll encounter when working with arrays and other sequences of data is having to access items within the sequence.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=33)** And the C# language provides some nice convenience features for working with individual items, as well as ranges of items within a sequence.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=42)** So here in my example code, I have this list of strings.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=46)** And you've probably already been used to seeing some code that looks like this.
>
> **[0:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=50)** So there's square brackets with the integer index into the array.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=55)** So before we do anything, let's go ahead and run the code that we have.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=60)** And what I'm going to do is right click on indexes ranges, and choose open in integrated Terminal.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=66)** And this is one of the things I like about VS Code, it has this Terminal built in.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=70)** If you're not using VS code, just go into your Terminal program, go into this folder and type the commands that I type.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=76)** So once we're inside this folder, here in Terminal.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=81)** And we'll wait for the Terminal to come up.
>
> **[1:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=82)** All right, there we go.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=83)** So what I'm going to do is type, dotnet run.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=89)** And then the application will compile and it'll run.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=94)** And when it runs, we can see right there in the output, that the output is quick.
>
> **[1:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=101)** And sure enough, the word at index one, and remember this is a zero-based index.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=106)** So the is index zero.
>
> **[1:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=108)** So index one is the word quick, and sure enough that's what we're getting, okay.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=112)** Now, suppose you wanted to access the words in this array relative to the end.
>
> **[1:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=118)** Well, one way to do that would be to use the length of the array, and then subtract off an index, right Something like this.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=126)** So for example, I could write, let's see console.WriteLine.
>
> **[2:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=130)** And I'm going to write, words[words.length - 1],
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=139)** so I'll save that.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=141)** And now that works, but C# has a much more efficient way of writing this, using what's called the index from end operator.
>
> **[2:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=149)** So rather than typing out this formula, calculating the lengths, subtracting off one, I can write something that looks like this.
>
> **[2:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=156)** I can use the little up arrow character, and sometimes it's called the hat, cause it looks a little hat.
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=161)** like a gnome might wear, like a garden gnome.
>
> **[2:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=163)** Yeah, no, I know I didn't make this up.
>
> **[2:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=165)** It's just, it's called that sometimes.
>
> **[2:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=167)** Anyway, so the up arrow one, and I'm going to save this and let's run this again.
>
> **[2:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=172)** And when this runs, so we can see sure enough.
>
> **[2:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=175)** Okay, here's the word at index one and then the word at the last part of the array.
>
> **[3:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=180)** And remember this is the up arrow one.
>
> **[3:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=183)** That's the last item.
>
> **[3:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=184)** We're not zero based from the end of the array, only the start, okay.
>
> **[3:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=187)** So we have the word at index one and then the last word in the array.
>
> **[3:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=192)** All right, it's also pretty easy to define a set of range values to operate on using what's called the range operator.
>
> **[3:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=201)** So what I'm going to do is define a string array and I'm going to call that word range and then I'm going to use what's called the range operator to select a range of words.
>
> **[3:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=214)** So what I'm going to do is type, so words, that's the list.
>
> **[3:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=218)** And then I'm going to want words two through five.
>
> **[3:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=221)** So this little double period right here is the range operator.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=225)** And then once again, I will go ahead and print that out.
>
> **[3:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=228)** And that's going to be, well, let's go ahead and call string.join, and we're going to join using commas.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=237)** And we're going to use the word range that we just built.
>
> **[4:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=240)** And to select an entire array, you can actually omit the two values.
>
> **[4:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=246)** So let's go ahead and copy this code, right.
>
> **[4:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=253)** And in this case, what I'm going to do is take off the five and take off the two.
>
> **[4:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=257)** That basically means give me the entire array.
>
> **[4:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=260)** And you can also omit either the first or last values, so I'll take off the five and then I'll take off the two.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=270)** And so what this means here is give me all the words from starting from index two to the end.
>
> **[4:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=276)** And this means give me all the words starting from index zero, so from the beginning up to index five.
>
> **[4:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=283)** So it's pretty cool.
>
> **[4:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=284)** You can use this to write more concise code.
>
> **[4:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=286)** Let's go ahead and run these examples.
>
> **[4:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=289)** So I'll save and then we'll run again.
>
> **[4:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=294)** And now here you can see the result and the output.
>
> **[4:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=296)** So here's the original examples.
>
> **[4:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=298)** We just did those.
>
> **[4:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=299)** Then we have two through five then we have, so starting from this is right here.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=304)** So we've got index two all the way to the end, right.
>
> **[5:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=308)** Then we've got starting from the beginning all the way up to index five.
>
> **[5:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=312)** And that's this guy right here, okay.
>
> **[5:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=314)** So we've got, let's see.
>
> **[5:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=316)** Yeah, so we've got two through five.
>
> **[5:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=318)** We've got, this is no indexes at all, right.
>
> **[5:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=321)** This is all the words.
>
> **[5:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=323)** Then we've got two to the end and then we've got the end up until index five.
>
> **[5:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=328)** So using the range in index operators, you can easily operate on sequences.
>
> **[5:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=333)** There's one more thing I want to show here and that's that indexes and ranges can also be declared as variables.
>
> **[5:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=339)** So let's go back up to the code and what I'm going to do is I'm going to declare a variable of type index and I'll call that idx and I'll give that a value of ^4, okay.
>
> **[5:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=352)** And then I'm going to console right line.
>
> **[5:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=355)** And I'm going to print out the words.
>
> **[5:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=358)** Instead of using a constant value, I'll use the variable I just declared.
>
> **[6:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=362)** I can also declare a range as a variable using surprise, range as the type, and I'll call that rng.
>
> **[6:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=370)** And I'll set that variable to 3.., and then we'll use the ^ 1 to mean the last element in the array.
>
> **[6:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=380)** And so once again, we'll call word range equals words and then I'll use my range variable.
>
> **[6:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=387)** And then we'll just go ahead and copy that line rather than write it all over again.
>
> **[6:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=392)** So let's go ahead and comment out the previous code.
>
> **[6:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=397)** So we'll comment this out and we'll go ahead and comment that out because we don't want to initialize that.
>
> **[6:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=407)** All right, so now we're going to use variables instead of hard coded values.
>
> **[6:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=411)** So let's go ahead and run this and now you can see the results here.
>
> **[6:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=416)** So the word at the fourth from the end index is over.
>
> **[7:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=421)** And then when I declare this range three to the end we can see that that's the result right here.
>
> **[7:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/indexes-and-ranges?u=76281980&t=427)** So using these syntax enhancements can make your code much easier to read while working with sequences of data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), this. (3), type, (3), type. (1), this, (1)
> **Tools:** terminal (5), vs code (2)
> **CLI Commands:** make (3), dotnet (1)
> **Definitions:** is a  (1), basically means (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Literal number improvements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=0)** - [Instructor] In this example, we're going to take a look at a pretty simple C# enhancement that significantly helps to improve the readability of code, specifically numerical data.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=10)** Let's go ahead into our NumberLiterals folder here in the General folder and open the code.
>
> **[0:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=17)** So working with numbers is probably one of, if not the most, common things that a programmer has to do, and sometimes having to read numerical data can be pretty cumbersome, so let's take a look at this example, right.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=32)** We have a few different types of numbers.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=34)** In this case, we have an integer, a floating point number, a hex decimal and binary numbers.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=42)** Now each of these numbers is valid as specified and we've also got some code that writes them out to the console here.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=49)** So before we do anything else, let's just run what we already have.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=53)** So I'm going to right-click, open my integrated terminal, and dotnet run this.
>
> **[1:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=61)** And here, in the output, you can see the numerical data.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=65)** Now starting with C# version seven, you can use the underscore character as a number separator to help make numbers more readable.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=75)** So let's make a few adjustments.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=76)** So for the integer, we can use the underscore as a separator between orders of magnitude.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=83)** So for example, this is 123456.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=87)** And so, I could put a little underscore right in there to make that easier to read and I can do the same thing with the floating point number.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=94)** So here, we've got 1234.5, and right here between the thousands separator, I can put that little underscore in there.
>
> **[1:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=103)** So each of these changes makes the number easier to read.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=107)** The code, as it's generated, doesn't change, like this isn't going to affect the underlying intermediate code, but the source code is much easier to read this way, right?
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=115)** It's pretty obvious that this is, you know, hundred thousands, this is 1000, and we can do the same thing with hex decimal numbers separating each of the bites.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=126)** So for example, in this case, I can separate AB from CD and EF.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=132)** It's still a valid hex number, but it's easier to read now.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=135)** And it also works for binary data.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=137)** I can do this between every four digits.
>
> **[2:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=139)** So for example, I can put the underscore here and the underscore here and underscore here.
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=147)** Okay, so I haven't really made any actual code changes.
>
> **[2:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=151)** They're still the same numbers, but they're much easier to read now.
>
> **[2:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=155)** So let's go ahead and run our code again and you can see that I'm getting the exact same output, but the programming syntax is much easier to read.
>
> **[2:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/literal-number-improvements?u=76281980&t=166)** So this is a really great example of a simple enhancement to the basic C# syntax that makes code easier to read and leads to fewer mistakes that are just hard to track down.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), else, (1), this. (1)
> **CLI Commands:** make (3), dotnet (1), cd (1)
> **Analogies:** for example (3)
> **UI Navigation:** open the (1), right-click (1)
> **Versions:** 1234.5 (1)
> **Tools:** terminal (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### The null-coalescing operator
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=0)** - [Instructor] All right, now let's take a look at one of the C Sharp operators called the null coalescing operator.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=7)** It's fairly common programming operation to test a value for null, and then do something in response to that test such as assign a value or throw an exception or do something else.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=20)** And the null coalescing operator makes this much easier in C Sharp.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=25)** So let's take a look at an example.
>
> **[0:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=27)** So here in my start folder, in general, I'll go into the null operator and open up my program file.
>
> **[0:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=35)** So here in my editor, I have a function called old school log string and this takes a string argument and checks to see if the argument is null, in which case, it writes out that no string was given.
>
> **[0:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=51)** Otherwise, it just writes out the string, right?
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=54)** And I have two lines of code that test the function.
>
> **[0:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=58)** So let's go ahead and run what we have.
>
> **[1:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=61)** So let's go back to the folder here and open this up in the terminal.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=70)** All right, and let's dotnet run this.
>
> **[1:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=77)** And when we run this, we can see that in the output, that it's pretty straightforward.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=81)** So in the first example, we passed in test strings.
>
> **[1:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=84)** That's what was written out.
>
> **[1:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=85)** And then in the second example, we've got null and sure enough, no string given.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=90)** Yep, that's the result right there.
>
> **[1:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=92)** So using the null coalescing operator, we can make the check for null much more concise.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=98)** So let's go back to our code and let's go ahead and write the new school version of this.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=104)** So I'm going to write void log string, and that's going to take a string called the string.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=115)** And what I'm going to do is I'm going to call Console.WriteLine, only in this example, I'm going to write the string and then two question marks and then no string given.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=129)** So the way that the null coalescing operator works is it will choose the value on the left if it is not null, and it will choose the value on the right, if it is.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=141)** So we've basically condensed down these six lines of code right here, into this one single line of code.
>
> **[2:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=149)** So, okay, let's go ahead and try this example.
>
> **[2:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=152)** So I'm going to copy my original lines of code and in this case, I'm going to call regular log string.
>
> **[2:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=160)** Okay.
>
> **[2:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=162)** And just to make these little warnings go away, let's just go ahead and make these nullable values.
>
> **[2:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=169)** I guess I should be proper about my C Sharp here.
>
> **[2:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=171)** All right, so we'll save and actually, let's go ahead and comment out the previous example.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=178)** Okay, so now let's go ahead and run this again.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=182)** And when I run the code, you can see that sure enough, the result is pretty much the same as in the first case.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=188)** Now it's also possible to throw an exception as part of the right sided expression.
>
> **[3:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=195)** All right.
>
> **[3:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=196)** So let's go back to our code and let's create a function called ThrowableLogString, and sure enough, this will also take a string variable, called theString.
>
> **[3:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=217)** All right.
>
> **[3:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=219)** And what we're going to do here is we'll use the same Console.WriteLine call and I'll choose the string and then use the null coalescing operator.
>
> **[3:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=229)** But in this case, if someone passes null, I want to throw an exception.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=234)** So I'm going to write throw new and I'm going to use the argument to null exception.
>
> **[4:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=240)** And I'm going to say that the string, which is the parameter, and then the message is going to be cannot be null.
>
> **[4:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=251)** And that's pretty much it.
>
> **[4:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=252)** Okay, so in this case, we'll throw an exception rather than choosing a different value.
>
> **[4:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=257)** So let's go ahead and test this.
>
> **[4:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=259)** So let's copy these two lines and paste them and we'll call throwable instead of the regular log string.
>
> **[4:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=269)** And let's comment those guys out.
>
> **[4:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=273)** All right, one more time.
>
> **[4:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=274)** Let's go ahead and run our code.
>
> **[4:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=279)** And when I do that, you can see sure enough that test string, that worked and then when I pass in null, we get an exception.
>
> **[4:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=287)** So the exception is being thrown for the null argument case, all right?
>
> **[4:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=292)** Now there's one more version of this operator I want to demonstrate and that's the assignment version of the operator which actually performs an assignment in the case of a null value.
>
> **[5:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=302)** So let's go back up to my code.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=304)** So let's imagine that I have a string variable and I'll call it str and I'll set the value to null.
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=311)** And then later on in my code, I can write something like this.
>
> **[5:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=314)** I can write str and then the two question marks followed by an equal sign.
>
> **[5:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=320)** And I'll just put something like default value in there.
>
> **[5:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=325)** So this version of the null coalescing operator, it performs the same check to see if the variable is null and then assigns the value on the right, if it is.
>
> **[5:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=336)** Otherwise, it just keeps the current value.
>
> **[5:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=339)** So let's go ahead and try this out.
>
> **[5:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=341)** I'm going to Console.WriteLine.
>
> **[5:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=348)** And we'll write out str, and then let's go ahead and comment out the previous examples.
>
> **[5:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=357)** And let's comment out the functions as well because they're not being called and it's giving me these warnings.
>
> **[6:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=370)** Okay, so now let's run our code.
>
> **[6:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=372)** Let me scroll back down so we can see it.
>
> **[6:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=374)** All right, let's run our code again.
>
> **[6:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=378)** And so, when I run the code, you can see that when str is null, it gets set to the right side value.
>
> **[6:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=386)** That's why it's being printed out here, default value.
>
> **[6:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=389)** So let me try setting this to something else.
>
> **[6:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=392)** I'll set this to, you know, this is a string and save that and let's run it again.
>
> **[6:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=399)** And when I run it again, now that it has a value to start with, it just simply keeps that value when it runs.
>
> **[6:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/the-null-coalescing-operator?u=76281980&t=406)** So the null coalescing operator is one of those nice C Sharp language features that takes a fairly common programming operation and makes the code much more concise and easier to read.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), throw (5), case, (5), this. (4), function (3)
> **CLI Commands:** make (3), dotnet (1)
> **Cross-References:** go back to (3)
> **Analogies:** such as (1), imagine (1)
> **Code Identifiers:** thestring (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Deconstruction with tuples
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=0)** - [Instructor] The tuple structure was introduced back in C# 7.0, and it introduced to C# a feature that had long been available in other languages like Python.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=11)** Essentially, a tuple is a very lightweight way of grouping multiple values into a single object.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=19)** And one of the most popular uses for tuples is to return multiple values from a function.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=25)** So let's go ahead and open up the DeconstructTuples example.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=32)** All right.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=34)** So you can see here in the example code that I have a function named GetStockValues and GetStockValues returns a tuple of three values for a given stock ticker, the high, low, and closing value for that day of stock trading.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=53)** So what we're going to do in this example is take a look at using what's called deconstruction syntax to work with the values in a tuple that's returned by a function.
>
> **[1:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=64)** And to understand the value of this, let's take a look at some more of our code.
>
> **[1:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=68)** So working with individual values in a tuple can sometimes be a tedious process.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=74)** So each item in the tuple is accessed using the item and syntax.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=81)** So here in this example, I've got my result, which is returned by calling GetStockValues for the ticker ABCD.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=89)** And you can see that to access each value, I've got Item1, Item2, Item3 in the returned tuple.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=96)** So before we do anything else, let's go ahead and run this, so we have a baseline understanding of what this does.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=104)** So let me scroll down to that code and let's run it.
>
> **[1:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=111)** And when the program runs, you can see that the program just prints out the three values for that stock ticker: the high, the low, and the close.
>
> **[1:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=119)** So deconstruction makes it easy to assign the individual tuple values directly to variables.
>
> **[2:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=127)** So let's go ahead and try this using our WXYZ ticker.
>
> **[2:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=133)** I'm going to define a variable, and I'm going to define a tuple variable, and it's going to have high, low, and close.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=143)** And then I'm going to call GetStockValues.
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=147)** And in this case, this ticker is going to be WXYZ.
>
> **[2:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=153)** And if we scroll back up really quick, you can see that WXYZ will return these values right here.
>
> **[2:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=160)** All right, and then we'll just write them out.
>
> **[2:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=164)** So we will just simply Console.WriteLine, and I'll write out high, low, and close.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=178)** So let's run the example again.
>
> **[3:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=183)** And you can see that I get a similar result, but this time I did it with easier to read code.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=190)** Instead of this like Item1, Item2 nonsense, I actually get named variables that I can work with.
>
> **[3:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=196)** So if I was going to manipulate these further, it's much better to have them in actual named variables.
>
> **[3:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=201)** And, of course, you can also use explicit variable definitions.
>
> **[3:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=205)** So let me add that.
>
> **[3:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=206)** So let's go ahead.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=209)** Okay, let's type decimal, and we'll call that cl for the close.
>
> **[3:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=214)** And you can also use what's called the discard syntax to ignore values that you're not interested in using.
>
> **[3:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=221)** So for example, if I only cared about the closing value that was returned by this function, I could write something like this.
>
> **[3:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=228)** What I would write is underscore and then underscore, and then cl, and then I would call GetStockValues, and let's use ABCD again, and then I can just simply write out my value.
>
> **[4:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=243)** In this case, it's just closing value.
>
> **[4:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=246)** So the underscores are used to discard the values that won't be used.
>
> **[4:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=250)** Basically, I'm saying, "Hey, compiler, I don't really care what this value is.
>
> **[4:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=254)** Just go ahead and toss it.
>
> **[4:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=255)** I'm not even going to give it a variable name."
>
> **[4:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=257)** So let's go ahead and run this once more.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=261)** And when I do that, you can see that now I'm only using the closing value right here.
>
> **[4:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-tuples?u=76281980&t=268)** So if your program needs to work with tuples returned from functions, the deconstruction syntax can simplify your code and condense several operations into just a couple of lines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (4), this, (2), case, (2), else, (1)
> **Env Vars:** wxyz (3), abcd (2)
> **CLI Commands:** python (1)
> **Versions:** 7.0 (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Deconstruction with classes
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=0)** - [Narrator] In a previous video we saw how to use deconstruction syntax to work with data values returned in Tuples.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=7)** Turns out deconstruction also works with custom classes.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=10)** And it's easy to implement in your own class definitions so that they can support the deconstruct syntax.
>
> **[0:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=17)** All you need to do is define one or more deconstruct methods in your class.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=23)** So let's take a look at this in a real example.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=25)** So let's go ahead and open up deconstruct custom and we'll open up the program code and we'll open up this file here called well, here's a program code and I've got a file here called planets.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=39)** Let's go ahead and condense that down.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=41)** All right.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=41)** So, suppose we have a class named planet that holds some information about one of the planets in the solar system.
>
> **[0:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=48)** And if we hop over to the program code, you could see we have some code that creates a couple of planet objects, right, we got one for Earth and one for Venus.
>
> **[0:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=57)** So to support deconstruction of these classes we just need to add some deconstruct methods to our class definition.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=66)** So let's go back to the planet's code.
>
> **[1:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=69)** And so what we're going to do first is add a deconstruct method that returns the name of the planet along with the number of moons that it has.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=78)** You can see here that in each planet definition we have the planet's name, it's radius, how many moons it has and its distance from the sun.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=87)** So to do this, I'm going to create a function that returns a void value and it has to be named deconstruct.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=98)** And then inside the function signature we're going to add an out parameter to the function signature for each value that we want to return.
>
> **[1:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=108)** So I'm going to write out and in the case of the planet name, it's going to be a string and we'll call that name and then I'll have out int moons and then we'll simply return so your name is equal to name and moons is equal to moon count.
>
> **[2:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=127)** Next, let's overload the function by adding a deconstruct version to return the name, the moon count and the radius.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=137)** So I'll just go ahead and copy this and paste it here.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=141)** And we'll add in addition to the moons, we'll have out, int, radius and we'll return that as well, so that's going to be radius is equal to radius.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=157)** So now let's go back to the main program and add some code to exercise these features, okay.
>
> **[2:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=163)** So go back to the program.
>
> **[2:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=165)** So first let's get the name and the moon count for the Earth.
>
> **[2:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=170)** So I'll declare a Tuple variable and I'll have the name and the moons.
>
> **[2:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=179)** And I'm going to just go ahead and assign that to Earth.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=182)** And then I will write out name and moons and then let's get some data for Venus.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=194)** So let's go ahead, and in the case of Venus, we're going to get the moons and we're going to get the radius as well.
>
> **[3:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=207)** And I'm just going to declare a variable in line here called radius.
>
> **[3:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=217)** And in this case we'll just go ahead and add radius on the end.
>
> **[3:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=222)** Okay, so we have two examples, one for the Earth and one for Venus.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=225)** And in the first case we're getting the name and the moons and then we're getting the name, the moons and the radius.
>
> **[3:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=231)** So let's go ahead and run this.
>
> **[3:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=233)** We'll bring up our integrated terminal.
>
> **[3:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=239)** All right.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=241)** And let's run this code.
>
> **[4:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=245)** All right, sure enough, we've got Earth and it's got one moon and Venus doesn't have any moons, and it's 6,052, I guess that's the radius of the planet.
>
> **[4:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=255)** Okay. So, one of the things you need to be careful about when using the deconstruct method is that you can't define more than one version of the function with the same number of parameters because the compiler can't distinguish between functions with the same number of parameters during overload resolution.
>
> **[4:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=276)** So for example, if I go back to the planets and what I'm going to try to do now is add another deconstruct method, right?
>
> **[4:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=285)** So I'll call that deconstruct, and this time with parameters for the name and distance from the sun.
>
> **[4:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=294)** So I'll have out string name and out int distance
>
> **[5:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=303)** and I'll assign name to name and distance is distance.
>
> **[5:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=313)** There we go.
>
> **[5:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=315)** All right.
>
> **[5:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=315)** So, when I try to run this when I try to compile this, right, you can see it's already giving me an error right here but let's just go ahead and try to run this.
>
> **[5:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=324)** And you'll see, it says I've got an error, right?
>
> **[5:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=326)** It says type planet already defines a member called deconstruct with the same parameter types.
>
> **[5:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=333)** And that's because it's looking here, it says, all right, I've got two parameters and this one here's got two parameters and I really can't tell them apart.
>
> **[5:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=342)** So you have to make sure that you're defining different versions of the deconstruct method each with a different number of parameters.
>
> **[5:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/deconstruction-with-classes?u=76281980&t=350)** But as you can see, it's pretty easy to support the deconstruct syntax in your own custom defined classes as it is for regular Tuples that are built into C Sharp.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (5), this, (2), this. (2), class. (1)
> **Cross-References:** go back to (4), previous video (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [narrator] (1)


### 2. Structural Pattern Matching

#### Overview of pattern matching
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=0)** - [Instructor] In this chapter, we're going to take a look at the pattern matching feature of C#, which was first introduced to the language back in C# Seven and has had several enhancements since then.
>
> **[0:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=11)** So first, let's understand what pattern matching is, and to be clear, I'm not referring to regular expression patterns here.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=19)** Alright, those are separate from C# itself.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=22)** Pattern matching is the process of examining an expression to see if it has certain characteristics and then taking specific actions based on the result.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=32)** These checks are performed using the is operator and an enhanced version of the switch statement.
>
> **[0:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=39)** And we'll get into that in a little bit.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=41)** Pattern matching doesn't technically add new functionality to the C# language in the sense that you could already accomplish the same results by using existing C# language constructs.
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=54)** However, it makes certain kinds of logical operations a lot easier to write and more concise than a large block of if else statements or complex switch statements.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=65)** So there are a number of different types of patterns supported and we're going to take a look at several of them, starting with basic patterns like constant and declaration patterns and then moving on to some of the more advanced patterns.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overview-of-pattern-matching?u=76281980&t=78)** Pattern matching is one of those language features that once you start using it, you'll begin to wonder why it wasn't part of the language all along.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), let (1)
> **Speakers:** - [instructor] (1)

#### Basic patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=0)** - [Instructor] The first type of pattern matching we'll try out is called the constant pattern, in which we compare an expression to a known constant.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=8)** So one of the most popular uses for this type of pattern is to perform a null value check.
>
> **[0:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=13)** So here in our start folder, let's open up the basic patterns folder, and we'll open up the code and condense that down.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=21)** All right, so let's suppose we have a nullable string value and it's set to this value to begin with.
>
> **[0:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=28)** So we can use the is operator to check for null, and starting with C# 9, you can use the not operator to negate that check.
>
> **[0:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=38)** So for example, I can write if and then str is not null, then I can take some action.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=45)** So for example, I can write out, the value of str is,
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=54)** and then we'll put the value in there, and then I can write else... I'll write str is null.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=66)** So let's go ahead and try this out.
>
> **[1:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=69)** And we'll open up our integrated terminal and we'll dotnet run this.
>
> **[1:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=80)** And so sure enough, because the string is currently not null, we can see that we print out the value, and if I change this to be a null and run this again, and you can see that when I run it, okay, now we see that str is null.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=98)** So that's a very simple demonstration of the constant pattern.
>
> **[1:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=101)** So here we have the variable, we have the is operator, and then we've got the constant where comparing it to, but the is expression can also be used with what's called a declaration pattern, where you declare a variable in line and then use it if the expression evaluates to true.
>
> **[2:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=121)** So to demonstrate this, let's go back to the code, and let's close that, let's comment this out.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=129)** So let's assume we have a function called dashedLine, and this function prints a number of dashes based upon the value of the argument, and the argument in this case is a generic object, and it can either be an integer or a string that represents an integer.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=148)** Now, the old way of doing this might look something like this, where we first have to determine whether the argument holds an integer or a string, and then perform the appropriate conversion, and then finally use the value to print the dashed line.
>
> **[2:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=167)** So let's go ahead and run this.
>
> **[2:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=169)** Let's run it back up and let me go down here and uncomment these lines that call.
>
> **[2:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=177)** And so you can see we have 25, and then we have a value of 50 inside of a string, And then we've got this floating point number, which is neither a integer or string, okay, so we'll run this.
>
> **[3:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=191)** And sure enough, it works.
>
> **[3:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=192)** So here we have 25 dashes, then we have 50 dashes, and because the floating point value is not an integer or a string, nothing happens.
>
> **[3:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=202)** But by using the is operator, we can do both the test and the declaration in the same statement.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=209)** So let me show you what I mean.
>
> **[3:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=210)** So we'll close this and we'll comment this old code out.
>
> **[3:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=218)** So what I'm going to write is if, and then I'm going to write o is, and then I'm going to declare the variable in line, I'm going to write int l, okay.
>
> **[3:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=229)** So in this case, what's going to happen is, if the object is an integer, it's going to be assigned into this local variable L.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=237)** Then I could write or o is string s.
>
> **[4:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=245)** So in this case, if the o is a string, then the string will be put into the s variable here, and then I'll write and int.TryParse, and I'm going to write s and then out l, and that's an if statement, so I'll have to put some brackets around here.
>
> **[4:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=264)** So what this statement is basically saying is, hey, first try to convert this to an integer, and if it is, put it in l.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=270)** Now, I've already declared l, so I can use it again.
>
> **[4:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=273)** Hey, if it's not an integer, well, is it a string?
>
> **[4:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=276)** If it's a string, put that string in s here and then call the TryParse function on that string to convert it to the integer that I've already declared.
>
> **[4:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=285)** Now, this is much more concise than the code that I already have, and then assuming one of these works, what I'm going to do is write string str equals new string, and I'm going to create a string of dashes, and it's going to be l characters long, and then I'll just simply Console.WriteLine that string.
>
> **[5:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=310)** Okay, now look, you've got, what is this, four lines of code versus all these lines of code here.
>
> **[5:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=316)** This is much more concise and it's much more obvious what's going on.
>
> **[5:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=320)** It's either an integer or it's a string, and if a string, I parse it.
>
> **[5:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=323)** So when I run it, let's go back to the terminal, and we'll run it again.
>
> **[5:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=332)** And sure enough, the output is the same.
>
> **[5:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=335)** Okay, one more thing to look at.
>
> **[5:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=337)** Let's look at something called the property pattern.
>
> **[5:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=340)** So the property pattern, let me go ahead and comment this out here, the property pattern examines the individual properties of an object and then returns true or false, depending on whether they match a set of given values.
>
> **[5:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=357)** So let me go ahead and uncomment this code right here.
>
> **[6:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=362)** Let me comment that line.
>
> **[6:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=363)** So let's imagine that I'm Julius Caesar, and I want to know whether a particular date corresponds to the Ides of March, because obviously, if you're Julius Caesar, that's a pretty important date, right?
>
> **[6:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=374)** If you don't know what I'm talking about, go ahead and look it up.
>
> **[6:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=376)** All right, so I've written a function that takes a DateTime as a parameter and I need to determine if that date is March 15th.
>
> **[6:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=384)** So I can do that by using a property pattern like this.
>
> **[6:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=388)** I'm going to replace this false, I'm going to return, whoops, I'm going to return date is, right, using the is keyword, and then in these brackets, I'm going to write Month: 3 and then Day: 15.
>
> **[6:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=404)** So I'm examining the month and day properties of this date object.
>
> **[6:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=409)** So let's go ahead and uncomment some of this code here, show you what that code does.
>
> **[6:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=416)** Basically, I'm calling IsTheIdesOfMarch with a couple of test dates, so we have January 13th, and then we have March 14th, 15th, and 16th.
>
> **[7:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=426)** So let's go ahead and run this and see what happens.
>
> **[7:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=430)** So we'll open up the integrated terminal... And then let's run this.
>
> **[7:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=438)** And when I run this code, you can see that it returns true for the March 15th date, but not for the others.
>
> **[7:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=447)** So it seems to be working, but let's suppose that, you know, I'm Julius Caesar and I'm really paranoid, right?
>
> **[7:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=452)** And I want to know if it's really the Ides of March, or maybe it's the day before, so I can prepare.
>
> **[7:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=458)** So what I'm going to do instead is, I'm going to modify this code to write day, and it's going to write 14 or 15.
>
> **[7:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=466)** So here, now I'm comparing this property using this logical statement to test to see if the day property is equal to 14 or 15, so now I should get true for both of these dates right here.
>
> **[7:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=479)** So let's save that, and now let's run again.
>
> **[8:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=486)** And now sure enough, I'm getting true for both the 14th and the 15th.
>
> **[8:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/basic-patterns?u=76281980&t=490)** So as you can see, pattern matching makes writing certain kinds of logical statements much easier to read in fewer lines of code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), this. (5), function (4), this, (3), case, (2)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Tools:** terminal (3)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** dotnet (1)
> **Code Identifiers:** dashedline (1)
> **Speakers:** - [instructor] (1)

#### Enhanced switch statements
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=0)** - [Instructor] So far we've seen how to use the is operator to perform pattern matching.
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=5)** But very often the expressions that we need to evaluate are more complex than just a simple Boolean true or false with only one value to test.
>
> **[0:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=14)** And just about every programming language has something like the switch statement, which makes it easy to compare a given value against multiple cases.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=22)** So let's open up our switch expression example and we're going to open the Program file.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=29)** And so you've probably seen something like this before.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=32)** I've got my function here called NumToString, that takes a number and returns a string.
>
> **[0:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=38)** And if we run this, so before we do anything, let's go ahead and run it.
>
> **[0:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=47)** And you can see I'm calling the function with the integers 2 and 4.
>
> **[0:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=53)** And sure enough, when the application runs, we see Two and then unknown because four is not handled.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=59)** So starting back in C# seven, the switch statement became a lot more powerful.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=65)** You're no longer limited to just using constant values like integers and strings as the switch value.
>
> **[1:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=71)** You can now switch on just about any type.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=74)** So to demonstrate this, let's open up the Shapes file.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=78)** First, I'll close the terminal there.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=81)** So here in my Shapes file, you can see I have a few classes defined that represent different shapes that will use for the next few examples.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=89)** So I've got a circle, a rectangle, and a triangle.
>
> **[1:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=91)** Let's go back to the program code and let's condense this down.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=96)** So I can now create a ShapeToString function that takes a shape as an argument.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=104)** So I'm going to write string and I'll call this ShapeToString and it'll take an object named, oops, named shape.
>
> **[1:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=116)** And what this is going to do is return a string based upon the type of shape it's given.
>
> **[2:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=121)** So what I'm going to do here is switch on the object, the argument itself.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=126)** So I'll write switch and then shape.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=132)** And then I can use actual types as my cases so I can write case Circle and that will return a Circle string.
>
> **[2:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=144)** And then we can copy and paste this.
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=147)** I'll do Triangle and that'll return a Triangle, and then a Rectangle and we'll return Rectangle in that case.
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=161)** Copy, paste. All right.
>
> **[2:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=163)** And then we'll have a default case which will return Unknown.
>
> **[2:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=173)** So let's go ahead and try this out.
>
> **[2:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=175)** What I'm going to do is write some code to try a couple of these.
>
> **[2:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=179)** So what I'm going to be doing is writing Console.WrileLine, and I'm going to call ShapeToString with a new Circle.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=194)** And in that new Circle, I'm going to give it a radius of 10 and I'll also call it with a new rectangle and I'll give that a length of 5 and a width of 10.
>
> **[3:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=222)** Don't want to close off the brackets there.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=225)** I'm going to close it off there.
>
> **[3:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=228)** All right.
>
> **[3:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=229)** So let's go ahead and comment out our previous example.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=234)** All right.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=236)** Now let's run what we have.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=237)** So open up the terminal once again.
>
> **[4:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=244)** All right, and let's run this.
>
> **[4:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=250)** And when I do that, you can see that sure enough we get the output that we would expect.
>
> **[4:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=254)** So when I call ShapeToString with a Circle and a Rectangle, I get the strings Circle and Rectangle back.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=261)** So this is pretty powerful because now we can switch on types.
>
> **[4:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=264)** And this opens up a lot of new ways of writing more concise code.
>
> **[4:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=268)** So this particular language feature, the enhanced switch statement got even better in C# eight with the introduction of something called switch expressions.
>
> **[4:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=278)** So what we're going to do is rewrite this example as a switch expression.
>
> **[4:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=283)** So I'll write this again and I'll call it ShapeToString2.
>
> **[4:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=288)** And once again, it will take an object.
>
> **[4:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=291)** And in this case, I'm going to write a Lambda expression so I'll write shape and then I'm going to use the word switch.
>
> **[4:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=297)** So what this expression does is, it tells the switch statement that we're going to switch on this particular value right here.
>
> **[5:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=306)** And then I'm going to specify each case but I don't need to use the case keyword.
>
> **[5:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=312)** What I'm going to do is write Circle and then an arrow operator and that's going to return Circle, just like we did before.
>
> **[5:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=320)** And then I'll copy each of these.
>
> **[5:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=322)** And then, so we'll do Rectangle like we did previously.
>
> **[5:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=330)** And then we'll do triangle.
>
> **[5:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=334)** Actually, let me just copy this whole line right here and that's going to be Triangle.
>
> **[5:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=344)** And then I can use the underscore operator which we saw previously as the discard.
>
> **[5:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=349)** So this is the case I don't really care about and this will be unknown.
>
> **[5:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=354)** And then we need to have a semicolon 'cause it's a statement.
>
> **[5:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=356)** So this is a lot more compact and easier to read than this much more verbose example up here.
>
> **[6:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=364)** So let's go ahead and run this with the same code as above.
>
> **[6:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=369)** So I'll copy these lines and paste it down here.
>
> **[6:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=375)** Oh, actually, you know what? I've already got these lines.
>
> **[6:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=376)** Let's just use these lines instead.
>
> **[6:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=379)** So we've got circles and rectangles with different values.
>
> **[6:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=382)** So I'll save that.
>
> **[6:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=383)** And let's comment out the previous example here so we don't see some output that's confusing.
>
> **[6:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=389)** So let's go ahead and run this again.
>
> **[6:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=393)** And sure enough, you can see that the output is basically the same.
>
> **[6:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=396)** So I've got two circles and two rectangles, and sure enough, that's exactly what happens but where this feature gets really interesting is when you make use of a switch feature called case guards.
>
> **[6:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=408)** So sometimes these individual case statements aren't expressive enough to handle conditions by themselves.
>
> **[6:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=417)** So you can add additional conditions to the case by using the when keyword.
>
> **[7:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=422)** So let's update our code to use case guards.
>
> **[7:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=425)** What I'm going to do here is I'm going to write circle.
>
> **[7:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=427)** And then in brackets, I'm going to write Radius: var r, and then outside the brackets I'm going to write when r is greater than 10, that's going to return the value Big Circle.
>
> **[7:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=443)** And then I'll copy that and paste it.
>
> **[7:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=447)** And so when r is less than a equal to 10, that's going to return Little Circle.
>
> **[7:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=458)** So what's happening here is I'm using one of the properties of the circle object declaring a local variable, and then saying, "Hey, when that variable meets this condition, this is the case value that you should return."
>
> **[7:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=470)** So let's keep on going with rectangle.
>
> **[7:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=473)** So in this case, I'm going to have rectangle.
>
> **[7:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=476)** Let's go ahead and copy this.
>
> **[7:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=477)** Copy that, and paste it there.
>
> **[7:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=479)** So I'm going to have rectangle, and rectangles have length.
>
> **[8:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=484)** So I'll call that var l.
>
> **[8:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=487)** And then they have a width, and I'll call that var w.
>
> **[8:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=491)** And then my when case is going to be when l is the same as w, that's going to return the word Square.
>
> **[8:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=501)** So these case guards, let me create even more specific conditions to test each match.
>
> **[8:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=508)** So you can see that here in the code, I've got property values for each of these objects.
>
> **[8:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=512)** And what I'm going to do is save.
>
> **[8:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=514)** And I'll run this again now.
>
> **[8:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=515)** All right.
>
> **[8:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=518)** And now you can see that when I run this code, right now we have actually different case triggers being run when the values are different settings.
>
> **[8:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=528)** So here we have Big Circle, Little Circle and we have a Square and a Rectangle.
>
> **[8:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=532)** So now the different cases are being met for the different when clauses.
>
> **[8:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=536)** So one of the things you need to make sure of though is that each of your cases can be reached.
>
> **[9:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=541)** And what I mean by that is this.
>
> **[9:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=542)** If I take this generic Rectangle case right here and I put it above this case here, you can see that I'm already getting an error.
>
> **[9:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=552)** And the error says that the pattern is unreachable.
>
> **[9:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=554)** It has already been handled by a previous arm of the switch expression or it is impossible to match.
>
> **[9:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=560)** And that's because this case right here is going to match every single rectangle that comes through.
>
> **[9:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=565)** And then this one, which is more specific, is never going to trigger.
>
> **[9:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=568)** So I'm going to undo that change.
>
> **[9:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=571)** Now, the good news is that the compiler obviously helps identify these cases in your code to catch the problems before they happen.
>
> **[9:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/enhanced-switch-statements?u=76281980&t=577)** But by using these switch expressions along with these case guards, you can create some pretty complex logic handling cases in some pretty concise code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), switch (17), this. (4), function (3), var (3)
> **CLI Commands:** make (2)
> **Tools:** terminal (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Position patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=0)** - [Instructor] Now we're going to look at the positional pattern which was introduced in C# 8.
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=5)** The positional pattern lets us take advantage of something that we learned about earlier in the course when we looked at using the deconstruction feature to return tuples of values.
>
> **[0:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=14)** Let's go ahead and open up the PositionalPattern folder and open the code.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=21)** So this pattern enables us to deconstruct an expression result and then match the resulting values against the corresponding nested patterns.
>
> **[0:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=32)** So let's try this out.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=33)** Let's imagine that we have a program that calculates the amount of a group discount available when purchasing tickets to an event.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=41)** I have a function here named GetGroupTicketPriceDiscount.
>
> **[0:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=45)** This is going to return the discount percentage based upon some criteria which are the size of the group and the date that the visit is happening.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=55)** So the first technique I want to show is that you can switch on a tuple of values directly, which you can see here as a part of the switch expressions.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=66)** And remember, we learned about switch expressions earlier in the chapter.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=70)** So then I can start filling in some of the pattern cases.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=74)** So if the day of the week is either a Saturday or a Sunday, then there's no discount given regardless of the group size.
>
> **[1:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=82)** So when I hear the word regardless, that means that I've used the discard operator, 'cause I don't care about the group size.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=87)** And I'm going to test for DayOfWeek dot Saturday or DayOfWeek dot Sunday, in which case, there's no discount at all.
>
> **[1:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=100)** And you can see that what I'm doing here is switching on a tuple pattern.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=104)** In this case, I don't care what the first value is, so I discard it.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=107)** But the pattern lets me use the position of each value in this switch expression up here.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=114)** And the first position is groupSize.
>
> **[1:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=116)** Second is the day of the week.
>
> **[1:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=117)** So let's keep on going.
>
> **[1:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=119)** If the groupSize is between five and 10 on a Monday.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=123)** So if it's greater than a week equal to five, and it's less than 10, and DayOfWeek is a Monday, then we'll give a 20% discount.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=137)** If it's a Monday, and there are 10 or more people.
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=140)** So if we've got greater than 10, and DayOfWeek is a Monday then we will give a 30% discount.
>
> **[2:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=154)** If the group is between five and 10, so we've got greater than equal to five and less than 10, and we don't care what day of the week it is otherwise, then that will be a 12% discount.
>
> **[2:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=172)** And if the group is 10 or more, so we'll have greater than or equal to 10.
>
> **[2:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=179)** And once again, we don't care what the date is.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=182)** So if it's 10 or more, and it's not a Monday, because that condition's already taken care of right here, then we will give a discount of 15%.
>
> **[3:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=193)** Otherwise, the discount is zero.
>
> **[3:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=195)** And also, let's make sure that the groupSize is greater than zero.
>
> **[3:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=201)** Otherwise, we will raise an exception.
>
> **[3:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=203)** So if the group is less than or equal to zero, and we don't care about the day of the week, then we are going to throw a new ArgumentException.
>
> **[3:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=217)** And we're going to say that Group size must be positive number.
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=226)** All right.
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=226)** And then down here, we have some test data with different group sizes and dates.
>
> **[3:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=232)** So now let's write some code to test each of the conditions.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=237)** So I'm going to write a foreach loop.
>
> **[4:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=240)** And I'm going to loop over.
>
> **[4:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=242)** So I'm going to have a var size and var date.
>
> **[4:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=249)** And that's going to be in the TestDiscountData.
>
> **[4:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=253)** So I'm going to get each one of these tuples in this array right here.
>
> **[4:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=259)** And I'm going to write decimal discount is equal to GetGroupTicketPriceDiscount.
>
> **[4:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=268)** And I'm going to pass in the size and the date.
>
> **[4:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=271)** And then I will simply write out the results.
>
> **[4:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=274)** So I'll write out The discount for a size dash person group on.
>
> **[4:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=286)** And then we'll format the date.
>
> **[4:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=289)** So we'll have date formatted as a day, a month and a single day name is.
>
> **[4:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=297)** And then we'll put in discount.
>
> **[5:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=302)** So now we have our test code.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=304)** We're going to loop over each one of these tuples and write the output.
>
> **[5:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=309)** So let's go ahead and open up our integrated terminal.
>
> **[5:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=313)** Oh, looks like I got an error in there somewhere.
>
> **[5:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=316)** Where's my error? Oops.
>
> **[5:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=319)** Oh, okay.
>
> **[5:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=321)** Looks like, oh yeah, no, that's a, not a semicolon, that should be a comma.
>
> **[5:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=324)** Here we go. All right. Do catch their compiler.
>
> **[5:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=327)** Okay, let's go ahead and run this.
>
> **[5:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=336)** And let's make this a little bit larger.
>
> **[5:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=340)** All right. And so sure enough, here we have our output.
>
> **[5:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=343)** So for four person, that's zero.
>
> **[5:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=345)** Seven people on a Monday, that's 20%.
>
> **[5:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=348)** 20 people on a Monday, that's 30%.
>
> **[5:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=351)** 15 on a Tuesday, that's 15%.
>
> **[5:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=354)** And nine people on a Wednesday, that's 12%, right?
>
> **[5:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=357)** Looks like the data is correct.
>
> **[5:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=359)** So what's cool about this pattern is that we can use it on our custom types that support deconstruction.
>
> **[6:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=367)** So I've used it in tuple in this case.
>
> **[6:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=369)** But remember, custom types can also support deconstruction.
>
> **[6:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=372)** We saw that earlier in the course.
>
> **[6:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=373)** So let's go ahead and try it with our next example.
>
> **[6:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=378)** So here in the next example, I have a structure down here, and it defines a 2D point with X and Y coordinates.
>
> **[6:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=387)** And there's also a deconstruct method that returns the two coordinates as a tuple.
>
> **[6:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=393)** And of course, we've got some test data.
>
> **[6:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=395)** We've got these four points here.
>
> **[6:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=397)** And this test data creates points within different quadrants of a graph.
>
> **[6:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=402)** So what I'm going to do is create a function that is going to determine which quadrant a point is in and then return that value as a string.
>
> **[6:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=411)** So I'm going to write a string expression called Classify.
>
> **[6:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=416)** And that's going to take a point.
>
> **[7:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=421)** And remember, that's going to be a switch, so I'm going to call point switch.
>
> **[7:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=426)** And if both points are greater than zero, that's going to be the upper right quadrant.
>
> **[7:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=438)** And I'll just copy these.
>
> **[7:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=440)** So if we've got less than zero on the X, that's going to be the upper left quadrant.
>
> **[7:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=450)** If the Y is less than zero, and X is greater than zero, that is going to be the lower right quadrant.
>
> **[7:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=463)** And then finally, we'll have the lower left quadrant if these guys are both less than zero.
>
> **[7:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=472)** All right. Otherwise, it's just a point.
>
> **[8:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=481)** And semicolon there, 'cause it's statement.
>
> **[8:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=484)** So when the switch expression is evaluated on the point, that's going to call the deconstruct method here.
>
> **[8:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=490)** That's going to return the tuple of two values which I then use as positional patterns.
>
> **[8:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=496)** So let's uncomment the code that runs these tests right here.
>
> **[8:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=502)** And we'll save that.
>
> **[8:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=504)** And then we'll comment out our code that does the previous example.
>
> **[8:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=510)** All right, so let's save.
>
> **[8:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=512)** Let's go ahead and run.
>
> **[8:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=515)** And when I run, you can see that each of the points is classified into which quadrant it falls into.
>
> **[8:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/position-patterns?u=76281980&t=522)** So by using positional patterns, I can operate on multiple values that are either explicitly supplied to the switch expression or are obtained by using the deconstruct method.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), switch (8), function (2), case, (2), var (2)
> **Cross-References:** earlier in (3), in the next (1)
> **Code Identifiers:** groupsize (3)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **UI Navigation:** open the (1)
> **Analogies:** imagine (1)

#### Relational patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=0)** - The last pattern that we're going to look at is the relational pattern.
>
> **[0:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=3)** You can use the relational pattern construct to compare the result of an expression to a constant value using the less than greater than or less than or equal to or greater than or equal to operators.
>
> **[0:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=16)** So, let's look at our example.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=18)** Here in the relational patterns folder, let's open up our code.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=23)** (computer mouse clicking) So, suppose I need to figure out which quarter a given date falls within.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=29)** And, I've got my switch expression here that I need to fill in to do so.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=34)** So, this switch expression takes a date and then it's switches on the date month.
>
> **[0:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=40)** Since I know that dates that fall within the first three months of the year are within Q1.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=46)** And then the next three months are in Q2, and so on.
>
> **[0:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=49)** I can build a switch expression that looks like this.
>
> **[0:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=52)** So, I'm going to write greater than or equal to one (computer keyboard clicking) and less than or equal to three.
>
> **[0:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=58)** (computer keyboard clicking) That's going to be Q1, outside the quotes there.
>
> **[1:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=64)** All right and I can copy and paste these (computer mouse clicking) (computer keyboard clicking) and this will be Q2, Q3 and Q4.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=75)** And so let's see, this is going to be greater than four and then less than equal to six and then seven and nine.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=83)** (computer keyboard clicking) And then finally 10 and 12.
>
> **[1:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=89)** And then I have my default handler that throws an argument out of range exception if a badly formed date is given.
>
> **[1:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=97)** So, by using these logical operators I can easily categorize a given date into a quarter number.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=104)** So, let's go ahead and try this out.
>
> **[1:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=105)** And I've got some sample data right here.
>
> **[1:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=107)** So let's un-comment these lines and you can see them calling get quarter from date with a couple of different date options that fall within different quarters within the year.
>
> **[1:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=118)** So, let's go ahead and open up our integrated terminal.
>
> **[2:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=122)** (computer mouse clicking) All right and then let's run this (computer keyboard clicking) and we can see that the dates are being categorized into the corresponding quarter numbers.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=135)** Now, this type of logical expression also works with the regular is statement.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=141)** You don't need to use a switch expression if it's too much for your purpose.
>
> **[2:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=146)** So, let's take a look at another example.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=148)** Let me make this smaller for a second.
>
> **[2:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=151)** So, in this case, I want to see if a given date falls in the first half or the second half of the year.
>
> **[2:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=158)** So, now I have a function called first or second half.
>
> **[2:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=160)** And what I'm going to do is write a simple expression using the is expression.
>
> **[2:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=166)** So, I'm going to write if, and then I have my argument which is the date right here. (computer mouse clicking) So, if DT is... (computer keyboard clicking) a date time, (computer keyboard clicking) where the month and I'm using the property pattern here remember.
>
> **[3:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=183)** So, if month is greater than six, then I know that, that has to be within the second half. (computer keyboard clicking) So, I'll write date is in second half.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=194)** (computer keyboard clicking) Otherwise, else if... (computer keyboard clicking) DT is, (computer keyboard clicking) date time, where the month (computer keyboard clicking) is less than or equal to six, (computer keyboard clicking) then I'm going to write, (computer keyboard clicking) date is in the first half. (computer keyboard clicking) And you can see down here for my test data I've got a couple of sample dates.
>
> **[3:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=233)** So, let's go ahead and comment out the first example.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=237)** All right.
>
> **[3:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=237)** And let's make this a little bit larger.
>
> **[4:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=241)** Okay. And now let's run this.
>
> **[4:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=243)** (computer keyboard clicking) All right and so the result shows that the first date is in the second half of the year and the other date is in the first half.
>
> **[4:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/relational-patterns?u=76281980&t=253)** So, this syntax might take a little getting used to but I'm sure that you can see how this is a lot more powerful than having to write out all of this logic without using patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), switch (4), this. (2), this
( (1), case, (1)
> **Non-Speech:** (computer keyboard clicking) (16), (computer mouse clicking) (4)
> **CLI Commands:** make (2)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### Pattern challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=5)** - [Instructor] All right, it's time for a programming challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=7)** So for this challenge, we are going to use what we learned about pattern matching in this chapter to calculate the sales commission of a certain type of securities trade, consisting of either stocks or bonds.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=20)** And so for this challenge, let's go into the PatternChallenge folder here in Start.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=25)** So for this challenge, assume that you have the following classes defined.
>
> **[0:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=30)** And you can do more than assume because I've given you the source code.
>
> **[0:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=33)** And each of these represents a trade involving either a stock or a bond.
>
> **[0:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=37)** So the base class defines the quantity and unit price for the trade.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=42)** And then each subclass has properties for either the stock symbol or the bond name and bond duration.
>
> **[0:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=52)** So for this challenge, you are going to create a class named CommissionCalculator with a method named PrintTradeCommission.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=60)** This method will output the amount of the sales commission for a given stock or bond trade according to the following rules.
>
> **[1:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=69)** And if we look in the Program file, we can see that we have some sample data here that creates new stock and bond trades.
>
> **[1:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=79)** And then loops over each one and calls PrintTradeCommission.
>
> **[1:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=83)** So here are the rules: A stock trade of zero shares should be caught and flagged as invalid.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=90)** A stock trade less than $5,000 is a 0.1% commission.
>
> **[1:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=94)** A stock trade that is more or equal to $5,000 is a 0.05% commission.
>
> **[1:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=100)** Any stock trade of 1,000 shares or more is a flat fee of $10.
>
> **[1:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=104)** Any stock trade of 1,000 shares or more with a value of $10,000 or more is a flat fee of, let's scroll over, $5.
>
> **[1:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=113)** Any bond trade, and we get to the bond trades now, so any bond trade of five years duration is $20, or $15 if the total trade value is $10,000 or more.
>
> **[2:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=124)** Any bond trade of 10 years duration is $12.
>
> **[2:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=127)** A bond trade of 20 years duration is $10, or $5 if the total is $5,000 or more.
>
> **[2:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=133)** And a bond trade of any other duration, other than 5, 10, or 20 years, should be caught and flagged as invalid.
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=140)** So your program is going to take this data here, these example trades, as input.
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=147)** There's five stock trades and five bond trades.
>
> **[2:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=151)** And you're going to write this function right here.
>
> **[2:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=153)** And you can use it whatever method you want using what we've learned in this chapter.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=157)** And you should throw exceptions for the exceptions we've talked about.
>
> **[2:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=162)** Duration here and zero shares or so.
>
> **[2:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=164)** And so, you're going to output the value in dollars of the trade commission.
>
> **[2:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=171)** So, let's go ahead and run my finished version of the application.
>
> **[2:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=176)** So we'll close this.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=178)** And in the the Finished folder.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=181)** Under PatternMatching.
>
> **[3:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=183)** Let's go ahead and open our terminal.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=186)** All right.
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=188)** And we'll collapse that down.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=190)** And what I'm going to do is call dotnet run.
>
> **[3:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=194)** Let's wait a moment while the application runs.
>
> **[3:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=197)** And once the application runs, we can see here in the output.
>
> **[3:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=200)** Okay.
>
> **[3:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=201)** So here are the results.
>
> **[3:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=203)** And you can compare the results to your own.
>
> **[3:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=205)** So you can see the results of the stock trade.
>
> **[3:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=206)** And here's one that was caught because it was invalid.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=209)** And here we can see that the bond trade was invalid.
>
> **[3:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=213)** And it looks like we've calculated the commission of each one of these.
>
> **[3:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=216)** So these all match up to the rules that I've specified, and this is what your output should look like, okay?
>
> **[3:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=222)** So go ahead and spend some time on this challenge.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-challenge?u=76281980&t=225)** And then I'll be back in the next video to explain my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), throw (1), this. (1)
> **Definitions:** is a  (4)
> **Versions:** 0.1 (1), 0.05 (1)
> **CLI Commands:** dotnet (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Pattern solution
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=0)** - [Instructor] All right, let's take a look at how I solved this challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=8)** And remember, we had to use patterns to calculate the commission of a securities trade based on a set of rules.
>
> **[0:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=16)** So let's go into the finished code, and we'll open up my program file.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=21)** So here is the code that we had to run, and here are the rules that we had to follow, and these are the base classes that we had to work with.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=29)** So let me open up my code and I'll show you how it works, and I'll collapse this down so we can see more of the code.
>
> **[0:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=36)** So here in my commission calculator class, I have a method named CalculateTradeCommission, and remember that's called here from the PrintTradeCommission function.
>
> **[0:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=48)** And so this CalculateTradeCommission takes a securities trade object as the argument.
>
> **[0:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=55)** And I used a switch expression on that argument, along with various case guards, which we learned about earlier, to figure out the commission value based on each rule.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=66)** And so what made this a little bit tricky was that you had to make sure that each of the rules were evaluated in order from the more specific to the more general, otherwise the more general ones would never be reached.
>
> **[1:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=80)** So the first five lines of code handle the stock trades, and you can see that they progress from being very specific, so for example, in this case, we have when the quantity is zero for stocks, we throw in the exception, and the exception is that this is an invalid trade, it can't be zero shares.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=98)** And then we go to the next case where, okay, the quantity is more than 1,000 and the value is more than 10,000.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=106)** And that comes before checking for just the quantity more than 1,000, right?
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=110)** Because this one is more specific.
>
> **[1:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=112)** And so if this one came first, then this condition would never be reached.
>
> **[1:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=117)** So those are the stock conditions.
>
> **[2:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=120)** And then the bond ones come next.
>
> **[2:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=122)** So these five conditions handle the bond trades.
>
> **[2:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=125)** And again, they follow a similar path of more specific to more general, which is followed by the argument exception here for an unknown trade type.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=135)** So if the duration is not five, 10 or 20 years, obviously that's a problem.
>
> **[2:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=140)** So the PrintTradeCommission method attains the result of the calculation, which is right here, and then prints the correct output string based upon the type of the actual trade.
>
> **[2:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=152)** So if the trade is a stock trade, and remember we learned about the is operator earlier, then it uses this line of code to print out the value for the stock trade.
>
> **[2:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=163)** Otherwise, if the trade is a bond trade, then we print out the corresponding line for the bond trade.
>
> **[2:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=169)** And in the cases where the argument exception is thrown, if we go back to the main code, we can see that that's handled here.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=178)** And so the exceptions for the zero shares and the bad duration, that's where this message gets printed out.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=186)** All right, so how did you solve this problem?
>
> **[3:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=188)** Were you able to build the switch expression to handle all the cases?
>
> **[3:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=192)** Take a few moments to compare your code to mine.
>
> **[3:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=195)** And remember it's not important that your solution matches mine.
>
> **[3:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=198)** There are almost always multiple ways to solve any programming problem.
>
> **[3:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/pattern-solution?u=76281980&t=203)** What's important here is to see how others have solved a problem and then compare it to your own and then learn from it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (2), class, (1), function (1), case, (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Object-Oriented Programming Features

#### Working with indexers
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=0)** - [Instructor] In this chapter, we're going to look at some of the advanced support that C Sharp provides for working with object oriented programming constructs.
>
> **[0:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=7)** And we're going to start off with a relatively simple feature called a class indexer.
>
> **[0:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=12)** Let's go ahead and open up the indexers folder here in our start area.
>
> **[0:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=17)** So a class indexer gives your class the ability to access its content as if it were an array.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=25)** And you can use this feature to retrieve as well as set content.
>
> **[0:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=30)** This kind of convenience feature is useful when your class is used to encapsulate an internal collection of data that you don't want to directly expose to the class consumers.
>
> **[0:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=41)** So let's take a look at a simple example and it should help illustrate how this feature can be used to simplify your code.
>
> **[0:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=48)** So let's imagine that we had a class named stock record and the purpose of this class is to represent a week's worth of stock trading data, the average closing price for the week, the highs and low values and so on.
>
> **[1:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=65)** The data is represented internally by an array of decimal values.
>
> **[1:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=71)** But we want to encapsulate this implementation detail inside the class.
>
> **[1:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=75)** For convenience, we want to let consumers of this class access the individual stock values for the week, but we don't want to expose the way that that list is implemented.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=86)** So we can do this by using a class indexer.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=90)** So first, what I'm going to do is define a length property which is a good practice so that consuming classes can check to see how much data is in the class.
>
> **[1:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=100)** So I'm going to define a public integer named length and that's going to just simply return the length of the prices array.
>
> **[1:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=109)** Because again, if we scroll up, prices is where all the stock prices are kept.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=115)** Next, I'm going to declare the indexer and the indexer is very similar to a property.
>
> **[2:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=121)** What I'm going to do is declare this as a decimal value and then I use the this keyword and then inside brackets, I'm going to declare an integer index type.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=136)** And the indexer is basically going to just simply return the value of the prices array at that index.
>
> **[2:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=144)** So now notice, this indexer only has a getter.
>
> **[2:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=148)** There's no setter so the values inside the list can't be changed.
>
> **[2:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=152)** Now I could add a setter if I wanted to to make the values settable, but for this example, I'm not going to do that.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=157)** Okay, now let's open the code for the main program.
>
> **[2:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=160)** Now there's already some code here to create a new stock record and exercise some of the properties.
>
> **[2:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=168)** So let's add some code to access the new indexer that we just added.
>
> **[2:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=173)** What I'm going to do is write Console.WriteLine.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=178)** And, and I'm going to write out that the number of days of trading data is going to be stock1.Length.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=190)** And now, let's access the stock data using the indexer method.
>
> **[3:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=196)** So I'm going to write a for loop and I will loop starting at zero, over the length of the array.
>
> **[3:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=210)** And I will get the value at that index.
>
> **[3:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=214)** And I'm going to access this object.
>
> **[3:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=217)** This is the actual class object and notice I'm accessing it as if it were an array itself.
>
> **[3:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=224)** And then I will just simply write out the value there and I'll write value and that's going to be the whoops.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=234)** I have to declare the variable, sorry, decimal, call that val.
>
> **[3:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=238)** There we go.
>
> **[3:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=239)** And we'll wrap the value and we'll format that as currency.
>
> **[4:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=244)** And then after all that, we'll just write out a blank line.
>
> **[4:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=248)** So now let's run what we have.
>
> **[4:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=251)** Okay, so I'm going to, oh, looks like I have a little bit of an error here.
>
> **[4:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=256)** Let me just fix this really quick.
>
> **[4:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=260)** Oh, forgot to put the variable declaration in there.
>
> **[4:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=265)** All right.
>
> **[4:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=266)** There we go, and okay.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=270)** Looks like that's all fixed.
>
> **[4:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=271)** All right, so let's go ahead and run this.
>
> **[4:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=274)** I'm going to open this up in my terminal and let's make this a little bit bigger, and I'll call dotnet run.
>
> **[4:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=285)** So, when the program runs, you can see in the output of the class properties, so here are the average, the high and the low, and then here is the length property right here that's being accessed.
>
> **[4:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=298)** And then we have all the values that are being accessed by the indexer.
>
> **[5:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=303)** So we're looping over all the values and printing them all out.
>
> **[5:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=306)** So that's pretty straightforward, but what's great about class indexers is that you can override them just like any other method in your class.
>
> **[5:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=315)** In fact, indexers don't even have to use integers.
>
> **[5:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=318)** So let's go back to our class and what I'm going to do, go back here.
>
> **[5:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=325)** Let's make this a little bit smaller.
>
> **[5:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=326)** All right.
>
> **[5:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=326)** So I'm going to overload the indexer and I'm going to let the consumer of this class pass an index value that is the name of the particular trading day from Monday to Friday.
>
> **[5:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=338)** So once again, I'm going to create a public decimal property named this but instead of an integer index, I'm going to have a string and it's going to be called the day argument and there's going to be a getter for this.
>
> **[5:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=352)** And so if the day is equal to Monday, then we're going to return prices at zero.
>
> **[6:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=364)** And I'll just copy and paste this just for simplicity.
>
> **[6:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=367)** So it's Monday, Tuesday, Wednesday, Thursday, Friday.
>
> **[6:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=369)** So let's go ahead and fill these in.
>
> **[6:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=372)** Monday, Tuesday, Wednesday, Thursday, and Friday.
>
> **[6:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=380)** And that's going to be the prices at zero, one, two, three and four.
>
> **[6:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=387)** And if none of those work, then we'll just simply return zero.
>
> **[6:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=392)** So in this case, I'm using a string to access the index into my list of stock prices for the week.
>
> **[6:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=400)** So now let's go back to our test code and let's update our test code to use these new string values.
>
> **[6:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=407)** So let's go ahead and access Monday's value and that is going to be stock one and we're going to index it using the string Monday and we will format that as currency and I'll copy and paste.
>
> **[7:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=428)** And then we'll do the same thing on Wednesday.
>
> **[7:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=437)** Okay, and then let's comment out the previous example.
>
> **[7:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=442)** All right.
>
> **[7:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=443)** Okay, now let's run this again.
>
> **[7:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=446)** Make this a little bit larger.
>
> **[7:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=450)** And now you can see the results of indexing the class content using a string.
>
> **[7:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=455)** Now of course, in real world code, you would want to make sure that you're checking the index value to make sure it's not out of range and maybe raising an exception if that happens.
>
> **[7:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=465)** So for example, if the consumer of this class passed a string that didn't correspond to a real day name, I could throw an exception.
>
> **[7:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=474)** So for example, if you go back here, rather than returning zero, what I would do is I would throw a new index out of range exception.
>
> **[8:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=486)** And what I would do is I would have a string that said that the day given is not a valid index to stock record.
>
> **[8:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=503)** And now, let me collapse that down.
>
> **[8:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=507)** So now I have an exception that says, hey, the day that you gave me is not valid.
>
> **[8:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=511)** Let's go back to our program code and now let's try to access a non-existent day.
>
> **[8:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=517)** So we'll access blurg day.
>
> **[8:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=520)** All right.
>
> **[8:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=522)** Okay, and then let's try the code one more time.
>
> **[8:49](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=529)** And sure enough, you can see that we're getting the blurg is not a valid index to stock record exception.
>
> **[8:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/working-with-indexers?u=76281980&t=536)** So by using a class indexer, you can provide easy access to the values of your encapsulated collection without having to expose the actual collection itself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), class. (3), public (2), this. (2), throw (2)
> **CLI Commands:** make (6), dotnet (1)
> **Analogies:** for example (2), imagine (1), similar to (1), just like (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** scroll up (1), open the (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)

#### Overriding ToString()
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=0)** - [Instructor] You're probably already familiar with the fact that just about everything in .NET is an object and that all objects are descendants of the object base class.
>
> **[0:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=10)** As a result, all objects in .NET inherit the methods of the base class, some of which I've listed here.
>
> **[0:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=17)** Now, this isn't all of the methods that are provided by the base object class.
>
> **[0:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=22)** I've only listed some of the main ones.
>
> **[0:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=23)** And in this particular example, we're going to specifically take a look at the ToString method.
>
> **[0:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=29)** The main purpose of the ToString method is to return a string representation of that object.
>
> **[0:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=36)** So let's take a look at some code to see how that works.
>
> **[0:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=40)** So here in VS Code, let's go ahead and open up in our ToString folder, the program code.
>
> **[0:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=46)** So built in .NET types like numbers, for example, implement the ToString method, which enables them to return their content as a string.
>
> **[0:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=56)** So you can see here, I have a floating point number named X and then I call x.ToString on that number and then I'm going to write out the string.
>
> **[1:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=66)** So let's go ahead and run this code.
>
> **[1:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=70)** And I'll bring this up in the terminal and we'll run this using dotnet run.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=78)** And sure enough, you can see that when I run this, here's the output right here.
>
> **[1:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=81)** So the number 42.0 is represented as the string 42.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=87)** So custom class type definitions can override this method to provide similar information about their classes.
>
> **[1:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=95)** Basically, the guideline here is to provide enough information about your object for it to be useful and meaningful in a situation such as debugging.
>
> **[1:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=105)** If you don't override the method, then .NET will provide a default implementation of it for you but it's a bare bones result that only contains the name of the class.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=115)** So let's take a look at an example.
>
> **[1:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=117)** So here I have a custom type defined that represents information about a person, including the first and last name, along with an age value.
>
> **[2:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=128)** So I'll add some code that creates a new person object.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=137)** And we'll provide a first name and a last name and an age, whoops.
>
> **[2:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=153)** So now, what I'm going to do is use the WriteLine function which will automatically cast my method.
>
> **[2:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=161)** It will call the ToString method on my class.
>
> **[2:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=164)** So let's go ahead and write this out.
>
> **[2:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=168)** And we'll call it on the P object.
>
> **[2:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=172)** And let's go ahead and run this.
>
> **[2:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=175)** So back, oh, after I got the terminal open.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=178)** So let's run this again.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=182)** And you can see that when I run this, it just shows the name of the class.
>
> **[3:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=185)** Now that's not particularly useful.
>
> **[3:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=187)** So let's override the function to make it a little bit better.
>
> **[3:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=190)** So let's go back to the code.
>
> **[3:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=193)** And what I'm going to do is write my own function.
>
> **[3:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=197)** I'm going to call that public override and it returns a string and the ToString function, it fills in this template for me, but I'm just going to make a little bit of a Lambda function here.
>
> **[3:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=210)** So I'm going to return a formatted string and that is going to contain the text person and then first name, which is going to be, not surprisingly, the first name and then the last name, and then the age.
>
> **[3:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=236)** So now we have our ToString function and it returns a nicely formatted string using all of the available properties.
>
> **[4:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=244)** So let's go ahead and save this and let's run it again.
>
> **[4:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=248)** And actually, let's go ahead and comment out the first example.
>
> **[4:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=252)** No reason to see that.
>
> **[4:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=253)** There we go.
>
> **[4:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=258)** And now in the result, you can see that we've provided a lot more detail about this instance of the class.
>
> **[4:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/overriding-tostring?u=76281980&t=264)** In general, whenever you define a custom class, you should always override the ToString method because it will be used in all kinds of troubleshooting and debugging scenarios.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), class. (6), function (6), override (5), class, (2)
> **Env Vars:** net (4)
> **CLI Commands:** make (2), dotnet (1)
> **Tools:** terminal (2), vs code (1)
> **Analogies:** for example (1), such as (1)
> **Versions:** 42.0 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)

#### Equality testing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=0)** - [Instructor] Sometimes when you define a custom class, you're going to need to be able to compare instances of that class to other instances to see if they have what's called value equality.
>
> **[0:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=12)** In other words, you want to see if the values of all the properties of the two instances are the same.
>
> **[0:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=18)** And in this example, we'll see how to do that.
>
> **[0:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=21)** So let's open the program code in the Comparing folder.
>
> **[0:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=28)** Now, by default, .NET doesn't support comparing two custom types to each other in this way.
>
> **[0:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=34)** In this example, I have a class named Point2D, which contains X and Y properties along with some code that creates two points and then compares them using the equals function and the double equal and not equal operators.
>
> **[0:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=51)** Now let's go ahead and just run the code as it is.
>
> **[0:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=54)** So I'm going to right click and open up the integrated terminal.
>
> **[1:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=60)** Alright, and let's run this.
>
> **[1:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=64)** And if I run the code as is, you can see that the result indicates that they are not equal to each other even though they clearly have the same values, because .NET is comparing the object references.
>
> **[1:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=76)** It's not comparing the properties.
>
> **[1:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=78)** So if I want to compare two classes to each other based on values, then I need to override some of the base object class methods.
>
> **[1:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=87)** So let's go ahead and do that.
>
> **[1:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=88)** So let's go ahead and minimize this.
>
> **[1:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=90)** First, what I'm going to do is scroll down here, and I'm going to implement the IEquatable interface on my Point2D class.
>
> **[1:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=99)** And that is going to give me a type specific version of the equals method.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=106)** So I'll go ahead and put my type definition in there.
>
> **[1:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=110)** Okay, now I need to override some methods.
>
> **[1:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=113)** First, let's go ahead and override the base class version of the equals method in the object class.
>
> **[2:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=120)** So I'm going to override.
>
> **[2:03](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=123)** And this is the Equals function.
>
> **[2:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=126)** And I don't want the default version.
>
> **[2:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=130)** There we go.
>
> **[2:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=131)** So I'm just going to simply return my type specific version of Equals.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=137)** So I'm going to cast my object as a Point2D.
>
> **[2:22](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=142)** So now let's write that function.
>
> **[2:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=145)** So the public bool Equals function, which is going to take a Point2D.
>
> **[2:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=156)** And this function here, this Equals function is what is required by this interface.
>
> **[2:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=160)** So I'm going to check to see that the argument is not equal to null, because obviously that's bad.
>
> **[2:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=166)** And then, I'll check to see if my X property is the same as the argument's X property, and Y is equal to p.Y.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=181)** So I make sure the argument's not null, and then I compare X and Y to the X and Y properties of the argument to make sure that they're the same.
>
> **[3:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=189)** Finally, I need to override the GetHashCode function.
>
> **[3:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=193)** So I'm going to override int GetHashCode.
>
> **[3:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=200)** And once again, I'm going to implement this as a Lambda.
>
> **[3:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=205)** Now to make things simple, I'm going to just get a hash code, a tuple of the two properties, rather than calculate my own hash.
>
> **[3:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=214)** So I'm going to have X and Y, and I'm going to call GetHashCode on that.
>
> **[3:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=219)** And .NET requires you to override this function whenever you override the Equals function.
>
> **[3:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=224)** Now, you could calculate your own hash code.
>
> **[3:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=226)** I find it easier just to simply put the properties into a tuple and call .GetHashCode on that.
>
> **[3:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=233)** So, next I'm going to override the double equals and not equal operators.
>
> **[3:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=239)** So those are static bool operator, and that's going to be the double equal operator.
>
> **[4:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=249)** And that's going to take two arguments.
>
> **[4:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=252)** It's going to be p1 and p2.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=261)** So first, let's check to see if p1 is null.
>
> **[4:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=265)** And if p1 is null, let's check to see if p2 is null.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=270)** Because if they're both null, well, then clearly they're equal to each other because two nulls are equal.
>
> **[4:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=276)** If only one of them is null, well, then clearly they're not equal.
>
> **[4:40](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=280)** So that's going to return a false.
>
> **[4:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=282)** And then finally, let's call return p1.Equals(p2).
>
> **[4:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=291)** Now I need to implement the not equals operator.
>
> **[5:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=301)** And that is also going to take two Point2D objects.
>
> **[5:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=311)** And that is simply going to return p1 is equal to p2, but the negation of that, right?
>
> **[5:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=321)** To see if they're not equal.
>
> **[5:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=323)** All right, so let's recap.
>
> **[5:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=325)** I've got my two Equals functions.
>
> **[5:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=327)** I've got my GetHashCode, which is required.
>
> **[5:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=329)** And then I've got the two operators, double equal and not equal.
>
> **[5:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=333)** So now, when I run this code on these two points which clearly have the same property values, this should be true.
>
> **[5:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=343)** This should be true.
>
> **[5:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=345)** And this should be false.
>
> **[5:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=346)** So let's try this again.
>
> **[5:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=350)** And just to refresh your memory, we have false, false, and true.
>
> **[5:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=354)** So now let's run this.
>
> **[5:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=357)** Oh, Oops! I've got a little bit of an error there.
>
> **[6:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=360)** And it looks like it's on line 27.
>
> **[6:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=365)** Oh! That should be a return true.
>
> **[6:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=368)** Sorry about that.
>
> **[6:10](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=370)** Let's try it again.
>
> **[6:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=373)** And now we have true, true, and false, right?
>
> **[6:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=375)** Because if we scroll back up, we can see that clearly p1 is equal to p2 value-wise.
>
> **[6:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=383)** And the operator equals should be the same.
>
> **[6:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=385)** And clearly they're not different, so that returns false.
>
> **[6:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=389)** And let's see.
>
> **[6:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=390)** Let's add an example just to make sure that we're doing this correctly.
>
> **[6:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=393)** Let's add an example of two null points.
>
> **[6:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=396)** So I'll declare p3 equals null, and p4 is equal to null.
>
> **[6:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=403)** And then let's go ahead and write out the result of p3 is equal to p4.
>
> **[6:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=414)** And let's run this again, because two nulls should be equal to each other.
>
> **[7:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=421)** And yep, sure enough they are.
>
> **[7:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=422)** That situation equally as well.
>
> **[7:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=425)** Now this might seem like a lot of work.
>
> **[7:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=428)** And for custom classes, it kind of is, right?
>
> **[7:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=431)** I mean, you have to override these methods and the GetHashCode... What is that?
>
> **[7:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=434)** Starting with C# 9, there's actually a new reference type called a record, which alleviates you from having to write all this code.
>
> **[7:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/equality-testing?u=76281980&t=444)** And we'll take a look at how records work in a separate video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), override (10), function (9), this. (3), interface (2)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** net (3)
> **UI Navigation:** open the (1), scroll down (1)
> **Tools:** terminal (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Using records
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=0)** - [Instructor] Starting with C# version nine, a new reference type was introduced called a record.
>
> **[0:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=5)** And records have multiple benefits.
>
> **[0:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=8)** A record defines a reference type that is intended to be used to represent data.
>
> **[0:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=14)** Specifically, they are mainly used to hold data that is intended to be immutable.
>
> **[0:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=19)** In other words, data whose values in the record won't be changed by the code.
>
> **[0:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=25)** It's possible to create record types that immutable.
>
> **[0:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=28)** But that's not really their intended purpose.
>
> **[0:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=31)** Records provide default implementations for the Equals, ToString and GetHashCode functions, which I'm sure you remember from the example where we saw how to compare two classes to each other.
>
> **[0:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=42)** Records handle all of that for you.
>
> **[0:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=44)** And they also provide default implementations of the double equal and not equal operators as well.
>
> **[0:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=51)** Records also support an operation called non-destructive mutation, using the with keyword.
>
> **[0:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=57)** And we'll see how that works in a moment.
>
> **[0:59](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=59)** By using records, you can avoid having to write all that code that handles string representation and comparing equality and all that stuff and just focus on your program logic.
>
> **[1:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=71)** So let's go ahead and open up the records example.
>
> **[1:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=74)** Right, so here in the code, let's go to the Start folder and Records.
>
> **[1:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=80)** Now, suppose I want to define a record that holds temperature information for a given day.
>
> **[1:26](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=86)** So what I'm going to do is scroll here to the bottom, because top level statements have to come before all the class definitions.
>
> **[1:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=93)** And I'm going to declare a record like this.
>
> **[1:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=96)** I'm going to declare it as if it was a class.
>
> **[1:38](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=98)** But instead of the word class, I'm going to use the word record.
>
> **[1:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=101)** So I'll declare a public record named DayTemperature.
>
> **[1:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=106)** And it's going to have a decimal value for the high and a decimal value for the low.
>
> **[1:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=114)** And that's it.
>
> **[1:55](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=115)** I mean, that's literally all I need to do.
>
> **[1:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=118)** That one line of code creates a new type with properties for the high and low values.
>
> **[2:05](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=125)** It implements the default methods I talked about earlier.
>
> **[2:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=129)** It implements Equals, ToString, GetHashCode.
>
> **[2:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=132)** It provides default string representation.
>
> **[2:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=135)** It does all of that for you.
>
> **[2:16](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=136)** Just that one line of code right there.
>
> **[2:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=137)** So now let's create some instances of this record.
>
> **[2:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=141)** So I'm going to scroll back up.
>
> **[2:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=143)** And let's create some day temperatures.
>
> **[2:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=147)** So we'll make a new DayTemperature, and we'll give, let's see, 29.6 and 24.1.
>
> **[2:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=157)** And let's make a couple of copies of these.
>
> **[2:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=163)** Oh, I should give these names actually.
>
> **[2:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=165)** So we'll call that temp1.
>
> **[2:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=172)** And that'll be temp2 and temp3.
>
> **[2:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=174)** So now we have some instances of our day temperature record.
>
> **[2:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=178)** And again, yeah, it's just that one line of code.
>
> **[3:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=181)** I didn't have to declare any properties.
>
> **[3:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=182)** I didn't have to declare a constructor.
>
> **[3:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=184)** It's just that one line of code.
>
> **[3:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=186)** So now let's see what we get from this.
>
> **[3:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=189)** Let's try out the default ToString implementation.
>
> **[3:12](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=192)** So I'll go ahead and write this out, and that's going to be, let's use temp1 for this.
>
> **[3:19](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=199)** So let's pause here and run what we have.
>
> **[3:23](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=203)** So I'm going to open this up in my terminal.
>
> **[3:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=207)** All right.
>
> **[3:29](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=209)** And let's run this.
>
> **[3:34](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=214)** And when I run this, you can see that these string output automatically includes the generated property names and the values along with the record type.
>
> **[3:45](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=225)** Now remember, we had to do this by ourselves in the overriding ToString example.
>
> **[3:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=230)** So now let's add some code to try out some of the builtin equality testing.
>
> **[3:54](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=234)** So let's see if, let me make this a little bit smaller.
>
> **[4:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=240)** Let's see if temp1 is equal to temp2.
>
> **[4:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=248)** And if we look, we can see that, yeah, they are the same.
>
> **[4:11](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=251)** And in fact, actually, let me change some of these values, because I want to make some variety here.
>
> **[4:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=255)** So we'll make that 30.1.
>
> **[4:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=258)** And we'll just choose some other values.
>
> **[4:21](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=261)** And then we'll make temp3 the same as temp1.
>
> **[4:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=264)** So temp2 and temp1 are not equal to each other.
>
> **[4:27](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=267)** So that should be false.
>
> **[4:30](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=270)** And then let's try comparing temp1 and temp3.
>
> **[4:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=272)** And those are the same according to their values.
>
> **[4:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=275)** So now let's run that.
>
> **[4:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=279)** And when we run that, yep, sure enough, temp1 is not equal to temp2, but temp1 and temp3 are equal to each other.
>
> **[4:46](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=286)** So now we have default equality without having to write any additional code.
>
> **[4:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=291)** Now, of course, just like with classes, you can add your own properties and methods.
>
> **[4:56](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=296)** So let's go ahead down here.
>
> **[4:57](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=297)** And let's add, inside of the record, definition.
>
> **[5:01](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=301)** Let's add public decimal.
>
> **[5:04](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=304)** Let's have an Average.
>
> **[5:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=306)** And I'll just have a getter for this.
>
> **[5:08](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=308)** And it's going to return high plus low divided by two.
>
> **[5:15](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=315)** Now let's add some code to output that value.
>
> **[5:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=320)** And we'll simply write out temp1 dot Average.
>
> **[5:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=324)** Okay, now let's run this again.
>
> **[5:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=328)** All right. And when I run this, so notice that, yeah, we output the Average.
>
> **[5:32](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=332)** But also notice that the existing code that outputs the string representation now has the average property included by default automatically.
>
> **[5:42](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=342)** I didn't have to change anything.
>
> **[5:44](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=344)** The compiler just generated the updated ToString function for me.
>
> **[5:48](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=348)** Okay. Let's try one more thing.
>
> **[5:50](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=350)** Let's take a look at the immutability feature.
>
> **[5:53](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=353)** So if I try to change a property value, I'm going to try to change temp1, the high property, to a new value.
>
> **[6:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=360)** So let's go ahead and try to run this.
>
> **[6:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=362)** And that little red squiggle kind of gives you a hint I'm going to get an error here.
>
> **[6:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=366)** But if I run this, you can see it says, Init-only property or indexer can only be assigned in an object initializer or on this or base or blah, blah, blah.
>
> **[6:17](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=377)** In other words, it's read only.
>
> **[6:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=378)** I can't mutate the data that's in the class, because the record is immutable.
>
> **[6:24](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=384)** Now, I can use what's called the with keyword to create a new record with some change data like this.
>
> **[6:31](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=391)** So I can make a new DayTemperature, and I'll call it temp4.
>
> **[6:36](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=396)** What I can do is I can copy over all the existing values from temp1.
>
> **[6:41](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=401)** So I'll say temp1 with.
>
> **[6:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=403)** And then I'll just simply change the properties I want to change.
>
> **[6:47](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=407)** So I'll say high is equal to 32.0m.
>
> **[6:51](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=411)** So this automatically gives me all the existing property values and just the ones that I want to change.
>
> **[6:58](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=418)** So then let's go ahead and write that out and make sure that it worked.
>
> **[7:06](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=426)** And let's comment that back out, because that's clearly an error.
>
> **[7:09](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=429)** And now let's run this again.
>
> **[7:13](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=433)** And now you can see here, this is my new temp4 variable.
>
> **[7:18](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=438)** And sure enough, the high value has been replaced with the 32 that I entered into the code.
>
> **[7:25](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=445)** So records are a really great addition to the C# language, because they make working with data-centric classes so much easier.
>
> **[7:33](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=453)** Defining them is more concise.
>
> **[7:35](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=455)** Common operations like equality testing and string formatting are automatic.
>
> **[7:39](https://www.linkedin.com/learning/advanced-c-sharp-language-features/using-records?u=76281980&t=459)** And they prevent accidental changes to the data by being immutable by default.

> [!info]- Semantic Content
>
> **Code Keywords:** let (30), this. (7), this, (3), class, (2), public (2)
> **CLI Commands:** make (9)
> **Versions:** 29.6 (1), 24.1 (1), 30.1 (1)
> **Definitions:** in other words (2)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=0)** - [Instructor] Alright, that brings us to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=2)** I really hope you enjoyed learning along with me about some of the more advanced features of the C# programming language and maybe you've already thought of some ways that you can apply what you've learned here to some of the projects that you're working on.
>
> **[0:14](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=14)** I have a few suggestions on where to go next to learn more about using C# with .NET.
>
> **[0:20](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=20)** So if you're interested in learning more about using C# with the .NET framework, then check out [[C- and .NET Essential Training]].
>
> **[0:28](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=28)** To learn more about some of the key features of C#, take a look at C#: Events, Delegates and Lambdas and [[C- Interfaces and Generics]].
>
> **[0:37](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=37)** And if you're interested in using C# to work with data, then have a look at C#: Collections.
>
> **[0:43](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=43)** The C# language continues to improve and evolve, so it's a good idea to stay up-to-date with the language by visiting the C# documentation at the Microsoft website.
>
> **[0:52](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=52)** You can find that website right here at this link and this website contains all you could ever want to know about the C# language from the documentation to samples and all kinds of educational materials.
>
> **[1:02](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=62)** Thanks again for watching and I hope to see you again soon in another one of my courses.
>
> **[1:07](https://www.linkedin.com/learning/advanced-c-sharp-language-features/conclusion?u=76281980&t=67)** Until then, happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** net (3)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[C- Excellence- Architecting High-Performance Solutions]]
← [[C- Applied Data Structures]] | **3 of 6** | [[Advanced C- Object-Oriented Programming]] →

## Appears In

- [[C- Excellence- Architecting High-Performance Solutions]]

## Related Courses

_Courses sharing skills:_

- [[Learning C-]] — C#
- [[Cert Prep- Unity Certified Associate Game Developer Scripting with C-]] — C#
- [[Nail Your C- Interview]] — C#
- [[C- Design Patterns Part 2]] — C#
- [[C- Design Patterns Part 1]] — C#

---

[↑ Back to top](#)