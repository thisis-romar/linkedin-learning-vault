---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: coding-exercises-scala
url: "https://www.linkedin.com/learning/coding-exercises-scala"
duration_minutes: 53
duration: 53m
level: Intermediate
updated: 8/31/2022
learners: 2620
skills:
  - Scala
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQEq70puHe1nJg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661792803936?e=2147483647&amp;v=beta&amp;t=VU227eoLtuNCFDaebiBEQ5PN0UwSQX0P4dJt_MbMQmM"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Scala Skills for Data Engineering]]'
prev_courses:
  - '[[Scala Essential Training]]'
next_courses:
  - '[[End-to-End Data Engineering Project]]'
path_nav: '[{"path":"Develop Your Scala Skills for Data Engineering","position":5,"total":6,"prev":"Scala Essential Training","next":"End-to-End Data Engineering Project"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/scala
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Coding%20Exercises-%20Scala.md)

![Coding Exercises: Scala](https://media.licdn.com/dms/image/v2/C4D0DAQEq70puHe1nJg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1661792803936?e=2147483647&amp;v=beta&amp;t=VU227eoLtuNCFDaebiBEQ5PN0UwSQX0P4dJt_MbMQmM)

# Coding Exercises: Scala

> Level up your Scala skills in this Code Challenges course with instructor Noel Welsh. Noel provides 15 challenges that cover the language features most used in day-to-day programming, including a palindrome detector, password checker, colored boxes, and calculator. Challenges increase in difficulty level throughout the course, finishing with a challenge to create a rocket ship animation that bring

> [LinkedIn Learning](https://www.linkedin.com/learning/coding-exercises-scala) | 53m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Test your Scala skills](#test-your-scala-skills)
- [**1. Challenges**](#1-challenges) (15 videos)
  - [Palindrome detector](#palindrome-detector)
  - [Password checker](#password-checker)
  - [Colored boxes](#colored-boxes)
  - [System properties](#system-properties)
  - [Resistor tolerance](#resistor-tolerance)
  - [Snakes and camels](#snakes-and-camels)
  - [Stuff the stats sheet](#stuff-the-stats-sheet)
  - [A slice of Pi](#a-slice-of-pi)
  - [Cron and regular expressions](#cron-and-regular-expressions)
  - [Reservoir sampling](#reservoir-sampling)
  - [Evaluate a decision tree](#evaluate-a-decision-tree)
  - [Calculator](#calculator)
  - [Error handling](#error-handling)
  - [Sierpinski Triangle](#sierpinski-triangle)
  - [Rocketship](#rocketship)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Test your Scala skills](https://www.linkedin.com/learning/coding-exercises-scala/test-your-scala-skills?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/test-your-scala-skills?u=76281980&t=0)** (upbeat video game music)
>
> **[0:06](https://www.linkedin.com/learning/coding-exercises-scala/test-your-scala-skills?u=76281980&t=6)** - You can level up your [[Scala]] skills with practice. In my Scala code challenges course, I challenge you to get to grips with the fundamentals of the Scala programming language. The course consists of 15 challenges of increasing difficulty. They cover the language features you'll use in day-to-day programming in the context of examples that I hope you'll find fun and engaging. I'm Noel Welsh. I've been using Scala for over 10 years, and I'm really excited to have this opportunity to help you along your Scala learning journey. The first challenge is all about taco cats and kayaks, and I'm sure you'll have a lot of fun. So check it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (5)
> **CLI Commands:** find (1)
> **Speakers:** - you (1)
> **Non-Speech:** (upbeat video game music) (1)


### 1. Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Palindrome detector](https://www.linkedin.com/learning/coding-exercises-scala/palindrome-detector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/palindrome-detector?u=76281980&t=0)** (video game sounds and music)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/palindrome-detector?u=76281980&t=4)** - In this first challenge we'll write a method that detects palindromes. A palindrome is a [[Microsoft Word|word]] that is the same backwards and forwards. For example, "radar", "level", and "kayak" are palindromes, but "canoe", "bumpy", and "lighter" are not. Your task is to implement a method, "isPalindrome", that accepts a string and returns a Boolean indicating if the word is or is not a palindrome. It should have the signature shown accepting the string, the word, and returning the Boolean. Now remember to ignore case when checking for palindromes. Your message return true for all of "Tacocat" all in lowercase. "Tacocat" with a capital T and "Tacocat" all in uppercase. Here's a hint to get you started. [[Scala]] provides methods on a string that do everything you need to solve this problem. Your solution should be just a few method calls. You shouldn't have to write a loop, for example, to check for palindromes. Now, pause the video, write your method and then I'll share how I solve the challenge. (video game music) So here's the starting point; the code we've provided for you. And I need to implement the method where the triple question marks are. So I'm going to start by opening some curly braces so I can have more than one expression in this method. Now, my first step of actually writing code is going to be to turn the word into a lowercase version of itself. And then I can do a case sensitive comparison using that lowercase version. So we'll say, "Val lower is word".
>
> **[1:38](https://www.linkedin.com/learning/coding-exercises-scala/palindrome-detector?u=76281980&t=98)** And then we use a two lowercase method to convert to lowercase. Then I simply need to say "is the reverse of this the same as the original?". And if it is, it's a palindrome. Now that code looks pretty correct to me; there's not much to it. It's hard to see where it could go wrong, but it's always good to test our code. We provided some tests, I'm going to nip over to them and let's run them all. You can see that looking green already, but let's run them again just to make sure everything's working. And there we go. All green. So the code works and that's it. Our palindrome checker is complete. Good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Scala]] (1)
> **Analogies:** for example (2)
> **Non-Speech:** (video game sounds and music) (1), (video game music) (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** ispalindrome (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - in (1)

#### [Password checker](https://www.linkedin.com/learning/coding-exercises-scala/password-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/password-checker?u=76281980&t=4)** - [Instructor] A lot of us work on websites and web services. Most websites need logins. Logins need passwords, and we really should be checking that users are using strong passwords. In this challenge, we'll implement a simple password checker. Our password checker will accept a string and check that the following conditions are met. It has at least eight characters, has at least one uppercase character, at least one lowercase character, and at least one number or punctuation character. For our purposes, a punctuation character is one of full stop or period, comma, a semicolon, a colon, a question mark, an exclamation mark, a double quote, an underscore, and an open or closed parentheses. For example, the following passwords are all okay. However, these passwords are not. The first password is too short. The second password has no numbers or punctuation characters, and the third password has no uppercase characters. Your task is to implement isValidPassword that accepts a string and returns a Boolean indicating if the password is valid or not. There are methods in the [[Scala]] standard library that will help you with your implementation. Now, pause the video, write your method, and then I'll share how I solved the challenge. (electronic music) So here we go.
>
> **[1:37](https://www.linkedin.com/learning/coding-exercises-scala/password-checker?u=76281980&t=97)** My starting point, as always, is the code we've shared with you. I need to implement code right here at these triple question marks. I'm going to start by writing out directly the conditions we gave for a valid password. So the first condition is that the password must be eight or more characters. Next we're going to look for one or more uppercase characters, and to this, I can use the exist method, where I'm going to check for isUpper. So this is saying, is there at least one character in the string that meets the predicate I passed in here, which is looking for an uppercase character? I can do the same thing for lowercase. And the final condition is at least one punctuation or digit character. So I can check directly for digits, using the same technique we've seen before. However, I cannot do the same thing for punctuation. There's no method on character that does what I'm looking for, so I'm going to have to define my own method to do that. So let's call that method hasPunctuation and we're going to pass it in the password. Now I'm going to go up here and define this method, hasPunctuation. HasPunctuation is going to accept string and return a Boolean, indicating if it has punctuation or not. And now here I can do the same technique
>
> **[3:11](https://www.linkedin.com/learning/coding-exercises-scala/password-checker?u=76281980&t=191)** we've seen before, calling exists, getting a character, and saying does the character meet the condition I'm looking for. So what I'm looking for is a full stop or period, and then number of other conditions. So it's just copy and paste a bit of code and going through and fill them in. So, full stop, on a comma, semicolon, colon, question mark, exclamation mark, double quote, underscore, parentheses. I need one more here. Give that and get rid of that. And there we go. That's the code we're looking for. Just wants to format the file. Yep, go ahead and format. Now you may well ask, this looks good but does it actually work? And of course we should verify that with some tests. So we created some tests already. Let's quickly go over to them. And now we can run these tests and let's see what happens. All the tests pass, our code works. Great, now your solution probably doesn't look quite the same as mine, but that's absolutely fine. As long as it does the job you're doing well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (1)
> **Code Identifiers:** haspunctuation (2), isvalidpassword (1), isupper (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Colored boxes](https://www.linkedin.com/learning/coding-exercises-scala/colored-boxes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/colored-boxes?u=76281980&t=0)** (video game trills) (video game beeps) (video game dings) (video game warbles)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/colored-boxes?u=76281980&t=4)** - [Narrator] In this challenge we're going to draw some pictures. In particular, we're going to draw a stack of colored blocks. This requires a bit of setup, so make sure you download the code bundle we've provided. The file you want is called 01_03b.[[Scala]], and it's in the directory 01_03b. Your task is twofold. Firstly, I want you to create a method with the given signature. The method stack takes a count integer, the number of blocks to draw, and returns an image. I'm going to also want you to make sure the method is tail recursive. You might want to tackle each task in turn, rather than trying to do both at the same time. Note we can get Scala to check if our code is tail recursive, by annotating a method with the @tailrec annotation. Now pause the slide, work on your solution, and come back when you're done. (video game chiptune music) (mouse clicks) (video game warbles) So here's how I solved it. I'm going to start by implementing a tail recursive, helper method. It's going to have two parameters, count, which is the number of blocks, and image, which is the image we've created so far. And it's going to return an image, and the body is as follows. If the count is zero, then return image. Otherwise we call the helper with count decremented by one, and we're going to put block above image. And now stack is going to call helper with count,
>
> **[1:40](https://www.linkedin.com/learning/coding-exercises-scala/colored-boxes?u=76281980&t=100)** and we'll start with image empty. The final thing is to put that tailrec annotation in. Okay, we'd probably like to see if this works. So, what I'm going to do now is go into sbt and run this code. You see, we have a main method down here. So here we have sbt set up. I'm just going to run this, and we have to wait a little bit of time, and it runs, and here is the output. I'll just drag it onto the screen, and there's our stack of blocks. Great, now let's move on to the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (2)
> **CLI Commands:** make (2)
> **Prerequisites:** setup (1), set up (1)
> **Non-Speech:** (video game beeps) (1), (video game chiptune music) (1)
> **Exercise Files:** download the (1)
> **Definitions:** is called (1)
> **Speakers:** - [narrator] (1)

#### [System properties](https://www.linkedin.com/learning/coding-exercises-scala/system-properties?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/system-properties?u=76281980&t=0)** (arcade game sounds)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/system-properties?u=76281980&t=4)** - [Instructor] In this challenge, we'll find the values of system properties. System properties control a lot of the behavior of the [[Java]] virtual machine. Properties come from environment variables and from settings passed to the JVM, that's the Java virtual machine, when it is started. The [[Scala]] Standard Library provides an API for accessing system properties, which is in Scala.sys.SystemProperties. Your challenge is to find and print all the system properties. We want to see the name and the value of each property. Now pull the video and come back when you finish the challenge. (arcade game sounds)
>
> **[0:41](https://www.linkedin.com/learning/coding-exercises-scala/system-properties?u=76281980&t=41)** - Here's my solution. I'm starting, as always, with the empty file we provided for you. What I'm going to do is first, get all of the properties which I need to create a new instance of system properties for. Get an iterator from it. And then go over all of the elements in that iterator. Once I have an element, I just print it out and notice I'm using string interpolation here, and there we go. And that's it. Hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Scala]] (2)
> **CLI Commands:** find (2)
> **Env Vars:** jvm (1), api (1)
> **Speakers:** - [instructor] (1), - here (1)
> **Non-Speech:** (arcade game sounds) (2)

#### [Resistor tolerance](https://www.linkedin.com/learning/coding-exercises-scala/resistor-tolerance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/resistor-tolerance?u=76281980&t=0)** (video game noises)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/resistor-tolerance?u=76281980&t=4)** - [Instructor] Resistors are a common component in electronic circuits. They come in standard values, which are measured in ohms. They also have a tolerance which specifies the allowed range of the true resistance compared to the standard value. For example, the E12 series has 10% tolerance. So a 10 ohm E12 resistor could have an actual resistance between 9 and 11 ohms. In this challenge, we'll work out the range of possible resistance given a number of resistors. For you electrical engineers out there, we're assuming the resistors are connected in series so the resistances add. We've already defined some [[Data Structures]] to represent resistors. You'll find them in the file 01_05.[[Scala]]. Your task is to implement a method range with the signature shown on the screen. You'll accept a list of resistors and return a tuple of doubles. Just has the highest and lowest possible resistance. For example, if the input is a 10 ohm E12 resistor and a 10 ohm E6 resistor, the method should return the tuple 17, 23 indicating the lowest and highest possible resistance given the tolerances. Now pause the video and come back when you've completed the challenge. (upbeat video game music) So here's my solution. I'm starting as always with the file we provide for you. I have a list of resistors and what I'm going to do is fold over them. I need to start initial value
>
> **[1:37](https://www.linkedin.com/learning/coding-exercises-scala/resistor-tolerance?u=76281980&t=97)** for my accumulator, should be the tuple 0, 0. And then I need to specify what I do with the accumulator and resistor. Good to destructure the accumulator. So I have the lower and upper bounds. I'm going to work out the lowest possible value for the current resistor to resistor resistance times 1.0 take resistor tolerance. And the same thing for the upper bound for this resistor.
>
> **[2:20](https://www.linkedin.com/learning/coding-exercises-scala/resistor-tolerance?u=76281980&t=140)** And now I add this upper and lower bound onto the upper and lower bounds I've already established. The key thing here to recognize that a fold, in this case fold left, can do the job. Good work. Now let's move on to the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Structures]] (1), [[Scala]] (1)
> **Env Vars:** e12 (3)
> **Analogies:** for example (2)
> **Non-Speech:** (video game noises) (1), (upbeat video game music) (1)
> **CLI Commands:** find (1)
> **Versions:** 1.0 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Snakes and camels](https://www.linkedin.com/learning/coding-exercises-scala/snakes-and-camels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/snakes-and-camels?u=76281980&t=0)** (electronic music)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/snakes-and-camels?u=76281980&t=4)** - [Instructor] [[Scala]] uses so-called camel case. Names consisting of multiple words have spaces removed and the start of each [[Microsoft Word|word]] is capitalized. Some other languages, like [[Rust (Programming Language)|Rust]] and [[Python (Programming Language)|Python]], use snake case. In snake case spaces are replaced with an underscore and capital letters are not used. For example, in Scala we'd write printAll with a capital a, whereas in Rust we'd write print_all with a lowercase A. Your challenge is to write a method that converts from snake case to camel case. It should have the signature shown. The rules are: remove any underscores, uppercase any letter following an underscore, and furthermore, you should use a regular expression to find the substrings to replace. Now pause the video and come back when you've completed the challenge. (lively electronic music) Here's the starting code. Now we've been told to use regular expressions so I'm going to start by creating a regular expression to look for a snake case word. So I'm looking for an underscore and then I want to capture the letter following that. I convert it into a Regex using the .r method. Now, given the regular expression, I'm going to replace all of the matches in the string. I'm going to use a function from the matched group. Get me group 1, which is going to be that letter, and convert it to uppercase.
>
> **[1:39](https://www.linkedin.com/learning/coding-exercises-scala/snakes-and-camels?u=76281980&t=99)** Just reformat this slightly to make it a little bit easier to read. Prompted there to Create scalafmt files, create a Scala format file, and oh well, he wants to put it back there. Okay. There we have it. So regular expressions are very powerful. I've done a lot with very little code here and well worth learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (3), [[Microsoft Word|Word]] (2), [[Rust (Programming Language)|Rust]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), find (1), make (1)
> **Code Identifiers:** printall (1), print_all (1)
> **Non-Speech:** (electronic music) (1), (lively electronic music) (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Stuff the stats sheet](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=0)** (8-bit music)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=4)** - [Instructor] A box score is a summary of a basketball game. In this challenge, you'll get a list of events that occurred in a basketball game such as a two-point miss or a defensive rebound and you'll create a box score. In basketball, the goal is to get the ball through the hoop. If you do this, you get either two-points for close shots or three-points for shots that are further out. If you miss and your team manages to grab the ball, it's called an offensive rebound. If the other team gets the ball after a miss it's a defensive rebound. The box score is made up of stat lines, for each player on each team, the stat line records their made two-point shots, attempted two-point shots, made three-point shots, attempted three-point shots, offensive rebounds, and defensive rebounds. This challenge requires a little bit of setup so you'll want to load the file we provided for you which is shown now, your task is to implement a method boxScore with the signature shown. As a hint, look at using the groupBy method. Now pause the video and come back when you've completed the challenge. (8-bit music) So here I'm looking at the file we provided for you. Our job is to implement the method boxScore. Now, I know I'm going to have to implement a stat line for each player, so I'm going to go ahead and make a method which will construct a stat line given player's name and the events
>
> **[1:38](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=98)** for that player. So let's call that method makeStatLine, and I'm going to be given the player, String, and the events for that player, List of Event and I'm going to return a StatLine, which is type we've created for you. Now I have a list of events I want to convert into some kind of data structure, a StatLine, and the way I can do that is with a fold. So let's go foldLeft and I need the initial value which will be an empty StatLine, we've got zero for all of the stats and then our cumulative function where we get StatLine and the event,
>
> **[2:32](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=152)** and we need to go ahead and just check for the different types of event and take the appropriate action. So let's go ahead and match. If we have an Event, a TwoPtMake, then we want to add that onto stats. If we have an Event which is a TwoPtMiss, going to go ahead and add an attempt. And so on, three-points, let's go and just change that.
>
> **[3:19](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=199)** And the other cases we have are rebounds, so we have an offensive, just going to get these cases written out and we'll come back and fill them in, and we have defensive rebounds. All right, okay, add an offensive rebound here
>
> **[3:46](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=226)** and add a defensive rebound here. Okay, that's going to create the StatLine for the player, given the events of just that player, but now I need to get the events for just the player and this is where we gave you the hint to use groupBy. So let's open this up and block, and firstly, as I got events for all of the whole game I'm going to get the events by the team. So let me get eventsByTeam and that is going to be the events and I want to groupBy and I'm going to have the event goes to evt.team, okay.
>
> **[4:24](https://www.linkedin.com/learning/coding-exercises-scala/stuff-the-stats-sheet?u=76281980&t=264)** I'm going to get for the home team, I'm going to get the events by the players. So I'm going to start with eventsByTeam and I'm going to select the home key and I'm going to group this by player and I need it, same thing for the away and so we can just go ahead and do that as well. All right, now I need to calculate these stats for the home players and the away players and that's where I can use the method I defined before. So, homeStats is going to be homeByPlayers and I'm going to map, it's going to be a two pull, player and events, and I'm going to make a StatLine for a player and for the events and I need to do the same thing for the away team. Okay, now I've got my two sets of events for the home and for the away team and I've got the stat lines for the home and the away team, I just need to construct a BoxScore now, so the BoxScore has the homeStats, convert that into a list and the awayStats and convert that into a list. And I'm done.

> [!info]- Semantic Content
>
> **Code Identifiers:** groupby (3), boxscore (2), eventsbyteam (2), homestats (2), makestatline (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Non-Speech:** (8-bit music) (2)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [A slice of Pi](https://www.linkedin.com/learning/coding-exercises-scala/a-slice-of-pi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/a-slice-of-pi?u=76281980&t=0)** (digital jingle music plays)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/a-slice-of-pi?u=76281980&t=4)** - Who doesn't love pie? I mean, the irrational number pi which relates a circle's radius to a circumference and diameter. Let's look at how we can estimate the value of pi using a so-called Monte Carlo [[Simulation]]. Here's how it works. We start with the unit square. This is a square whose side is one unit in length. Inside this square, we draw the unit circle, which is as you probably guessed, a circle with a diameter of one or radius of one half. We then randomly draw points uniformly within the unit square and keep a count of the total number of points, and those that fall inside the circle. The proportion of points that fall inside the circle out of the total number of points, converges to pi on four. So we can use this proportion to estimate the value of pi. Why does this work? The area of the unit square is one. The area of the unit circle is pi times r squared. So pi on four in our case. So the ratio of the area of the unit circle to the unit square is pi on four. Therefore the proportional points that fall within the circle converges to pi on four. Your mission is to translate this algorithm into [[Scala]]. Implement a method pi, that takes a number of iterations or points that we should draw and returns at double the estimate of the value of pi. Some hints. You can use scala.util.random.nextdouble to get a random number uniformly between zero and one. You probably want to have
>
> **[1:37](https://www.linkedin.com/learning/coding-exercises-scala/a-slice-of-pi?u=76281980&t=97)** a teracative help method for the loop. And you'll need to run tens or hundreds of thousands of iterations to get a reasonably accurate result. Now pause the video and come back when you've completed the challenge. (digital jingle music plays) So, I'll show you how I implemented this. I'm starting with the file we've given you that contained some basic skeleton to work with. What I want to do now is implement the method pi. I'm going to start with the help method we suggested which is the teracative loop. And this needs to have two parameters. The number of points we've drawn that are inside the circle, and the total number of points. And it's going to return at double which is our estimate of pi. Check if the total number of points is equal to the number of iterations. And if so, then we return our estimate for pi which is four times the number of points inside divided by the total number of points. Then we have to do that conversion to double. If we keep going, well then we need to draw another random point and see if it lies within the unit circle. So let's start by generating some points. And now I need to see the distance of these points from the center. Now the center is the point 0.5, 0.5. So I need to actually take away 0.5 from each of these. And now I can calculate the distance
>
> **[3:09](https://www.linkedin.com/learning/coding-exercises-scala/a-slice-of-pi?u=76281980&t=189)** which is going to be, square root of x times x, plus y times y. Now we check if the distance is less than 0.5. And if it is we are inside the circle. So we need to call the loop again, with incrementing the number of points that are inside the circle, and incrementing the total number of points. And if it's not in the circle, then we loop again. You don't increment the number of points inside the circle but we do increment the total number of points. Now, the final thing we've implemented the teracative loop is we just need to call that loop to get started. So we're going to be out here, outside of this method, and we just want to call loop, and start zero and zero. So if you haven't drawn any points yet. Okay, that's the implementation but we probably want to check that it actually works. So let's just write a simple little case here where we're going to print the output. Print the output of calling pi and let's choose I don't know, hundred thousand iterations. Okay. Final thing to do. Oops, mistype there, go back here and just make this extend app, so that we can run it.
>
> **[4:48](https://www.linkedin.com/learning/coding-exercises-scala/a-slice-of-pi?u=76281980&t=288)** All right, now I've got that little run. Run button. I can click on that, and go and click on it. And the code will run. Take a little bit of time to run through all of this and eventually we get a result. And there we go. 3.1452, that's pretty close. So, good job. Let's move on to the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (2), [[Simulation]] (1)
> **Versions:** 0.5 (4), 3.1452 (1)
> **UI Navigation:** click on (2)
> **Non-Speech:** (digital jingle music plays) (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - who (1)

#### [Cron and regular expressions](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980&t=0)** (graphic blipping)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980&t=4)** - [Instructor] If you're familiar with the Unix family of operating systems, you'll know it's controlled by hundreds of text files, each written in their own special format. This task is to parse a simplified form of one of those files, the crontab file. You may well ask what is a crontab file? Unix has a program called cron, which is used to run other programs at regular intervals. For example, you could use cron to send an email every day. Cron is controlled by a file called crontab. The crontab file must be in a particular format for cron to understand it. We're not going to deal with the full format here as it's a little bit complicated, but our simplified example still has the essential details. Here is an example of the crontab format. Each line specifies an interval at which to run a command and then the command itself. The interval is given in terms of minute, hour, day, month, and day of week. The fields can be a number or an asterisk, where an asterisk means all possible values for that field. So this example means every 15 minutes, every hour, every third day of the month, every month of the year, and every day of the week run the command echo 'Hello'. We're going to assume that every line we give you is valid, so you don't need to do any error handling. You should use a regular expression with capture groups and character classes to do this. You'll need some support code here, so use the file I'm showing you right now.
>
> **[1:37](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980&t=97)** Now pause the video, and come back when you've completed the challenge. (happy music) (graphic blipping) So my starting point here is the file we've given you to start with, and we're going to implement this method parse, which is given the crontab line, the String, and return the CronLine. First thing I want to do is to define the regular expression that's going to parse the line. Now you remember I said to use capture groups and character classes, so we're going to do just that. I'm going to give this an uppercase name, and we'll see why that's useful in just a moment. Then we come to define the regular expression. So I'm looking for a number, that's \d. Any number of them will do. Or just a literal asterisk. So I need to put that in quote there. That's a slash, the escape key. And I want a bunch of these. \d or asterisk and so on. So let's just copy that and paste it.
>
> **[2:53](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980&t=173)** So one, two, three, four, five, and then we have our command. And the command is any text up to the end of the string. Convert this string into a regular expression using the .r method. Okay, I've now got the regular expression. And the reason I gave it this uppercase name, Line with a capital L, is I can then pattern match on it. Let's see what I mean by that. So I'm going to use here input match, and I'm going to use Line as a pattern to match. And the field within Line that I can match on are the groups that we're matching. So we have minute, hour, day, month, day of week, and the command. And once I've got all those, I'm going to create a CronLine.
>
> **[3:52](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980&t=232)** And we've got a little utility method here, which is Time.fromString, minute, I'm just going to call, saves me having to repeat this parsing code here checking for an asterisk or a number every time. So it definitely pays to read through the code before you attempt the challenge. fromString, and what're we up to? Month, and we have day of week, dayOfWeek.
>
> **[4:27](https://www.linkedin.com/learning/coding-exercises-scala/cron-and-regular-expressions?u=76281980&t=267)** And then I just have the command as a string. All right, that's it, good job.

> [!info]- Semantic Content
>
> **Code Identifiers:** fromstring (2), dayofweek (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (happy music) (1)

#### [Reservoir sampling](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980&t=0)** (gentle 8-bit video game music)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980&t=4)** - [Narrator] Reservoir sampling is a neat algorithm to sample an element from a collection when we don't know how many elements there are and we want to use only a single traversal of the collection. The trick is to keep account of the number of elements we've seen so far. And then we choose the current element with [[Probability]] equal to one on the number of elements. This means we choose the first element with probability one on one: one. Choose the second element with probability one on two. The third element with probability one on three. And so on. When we get to the end of the collection, we'll have an element chosen with equal probability amongst all the elements. Your challenge is to implement reservoir sampling with the signature shown. Your method should accept a list of elements, which we're going to sample from and return an option of an element. Why do we return an option? Because there might not be any elements in the list. Now pause the video, and come back when you've completed the challenge. (gentle 8-bit video game music) Here's my implementation. As always, I'm starting with the empty file we've given you. Rephrase. Here's my implementation. As always, we're starting with the skeleton file we've given you. The first thing I'm going to do is define a case class to store the state I need. I need two things in this. I need the result, which is going to be an option, and I need the count of the number of elements.
>
> **[1:43](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980&t=103)** And I'm just going to implement a little utility here to produce an empty state.
>
> **[1:59](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980&t=119)** Now onto the sample method itself. I need to process every element in the list, and I need to keep the state around as I do this. So I'm going to use a fold to implement this method. So elements fold left, and my initial state is going to be the empty state. And now I need to implement the method that accepts the state and the current element and handles them accordingly. The first thing I'm going to do is pull apart the state to get access to the result and the count. I can do that with the patent match there. Next thing I'm going to do is calculate the probability. I should be choosing the current element. That is equal to 1.0, divided by count plus one 'cause we want the current element to double. Then we choose a random number. And if that random number is less than the probability, then, a little bit annoying getting these completions, then we are going to choose the current element as our new result and increment the count. And if the other case comes up,
>
> **[3:35](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980&t=215)** we're going to keep the current result. And again, we need to increment the count. I'm almost done now. I get this result back from the fold left and this is a state. So what I want to do is get just the result from that. I don't care about the count once the algorithm has finished. So it's that. And we need to indent that, but my editor will do that when I save the file. So let's just go ahead and save it. And there we go. It's indented. Alright, so the code is almost complete. There's one little red underline there I need to fix up. There we go. But how do we know this actually works? As always, we want to have some kind of validation. And in this case we have some tests, so let's go onto those tests and let's just run them and see what happens. Take a little bit of time.
>
> **[4:47](https://www.linkedin.com/learning/coding-exercises-scala/reservoir-sampling?u=76281980&t=287)** And here we have our results. All the tests have passed. So nice job. Let's go onto the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (7)
> **Definitions:** is a  (2)
> **Non-Speech:** (gentle 8-bit video game music) (2)
> **Versions:** 1.0 (1)
> **Speakers:** - [narrator] (1)

#### [Evaluate a decision tree](https://www.linkedin.com/learning/coding-exercises-scala/evaluate-a-decision-tree?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/evaluate-a-decision-tree?u=76281980&t=0)** (computer whirling) (computer chiming) (computer whirling)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/evaluate-a-decision-tree?u=76281980&t=4)** - [Instructor] [[Decision Trees]] are a useful way to systematize decisions. In this challenge, we're going to give you a decision tree, and we want you to evaluate it, which means to find the decision it would make, given input. To keep them simple, our decision trees make choices based on a single number and give only true or false output. The trees have two branches. The left branch is for input less than or equal to a given number, and the right branch is for input that's greater. Your job is to implement the decide method, which is given on the code we provided. Now pause the video and come back when you've completed the challenge to see how I did it. (computer whirling) (videogame music) (computer chiming) (computer whirling) So as usual, I'm starting with the skeleton we provided to you, which has a decide method here, and the definition of the decision tree. Now notice that the decision tree is an enum, an enumeration. It consists of two cases, result and split. So the first thing I need to do is to see which case I'm working with, and the best way to do that is with a pattern match. So let's match this, the pattern match. Hoping I get a completion there for exhaustive matching, but it doesn't seem like it's going to come up. So I have to write it out myself. So in case the result, result. I need to do something and in case a split, and here I have split less than or equal and the greater-than case. Okay, so in the result case,
>
> **[1:39](https://www.linkedin.com/learning/coding-exercises-scala/evaluate-a-decision-tree?u=76281980&t=99)** there's only one thing I can do, which is return that result. So let's go ahead and do that and in the case of a split, well, I need to check this number, and if it's less than the value I'm looking at, then I choose the less-than-or-equal case and if it's greater than, then I choose the greater-than case. So pretty much just writing out the code I have just described. So if value is less than equal to split, then we're going to take the less-than-or-equal case, and we are going to decide with value else between the greater-than case, and we decide with value. Okay, that's it. Got a few little prompts on the editor, asking me to do things. So that's fine. Okay, so the code is done here, apart from one little typo. Let's fix that typo. Right, now, the code is done but as usual, we like to validate this actually works. So let's go onto some tests we prepared and just quickly run those tests and see what happens. So click the run icon. I'm going to wait a little bit while the test run, and all of the test passed, which is great. So as you can see, there's not much code to this. Pattern matching and recursion go a very long way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (2)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (videogame music) (1)

#### [Calculator](https://www.linkedin.com/learning/coding-exercises-scala/calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/calculator?u=76281980&t=0)** (videogame music)
>
> **[0:04](https://www.linkedin.com/learning/coding-exercises-scala/calculator?u=76281980&t=4)** - [Instructor] For this challenge, we have created a data structure that represents arithmetic expressions. Your challenge is to implement a method that evaluates those expressions, meaning to work out the answer of the expression they represent. To do this, you need to implement the apply method in the Eval object, in the file 01_12b.[[Scala]]. Now pause the video, and come back when you completed the challenge to see how I did it. (videogame music) I'm starting, as always, with the skeleton we've prepared for you. Our task is implement in the apply method in the Eval object, which is down the bottom of the file. Right here. Now we're dealing with an expression, and we want to return a double. Expression is an enumeration, so pattern matching is an ideal way to deal with it. So let's go ahead and implement a pattern match. Now, I need to handle each case appropriately, returning a double. So for a literal, I return just the literal. For addition, I have a left and a right expression. Now I need to return these left and right expressions as double somehow, and then add them together. And the method I implementing apply does exactly that. So I'm going to recursively call the apply method here, on the left and right, then add the result. And let's write out the short hand, like so,
>
> **[1:38](https://www.linkedin.com/learning/coding-exercises-scala/calculator?u=76281980&t=98)** just make the code a little bit easier to read. Now it's the same thing for the [[Representational State Transfer (REST)|rest]] of the cases. Subtraction, multiplication,
>
> **[1:55](https://www.linkedin.com/learning/coding-exercises-scala/calculator?u=76281980&t=115)** and division. And I just need to go and change the operation here. Subtraction, multiplication, and division. Okay, good, save the file, it's been formatted, all looking nice. Now we've done the task, but as always, we want to validate that it's correct, so let's head over to the test, and see how they've run. And that's runnable. So here are the tests, and I just need to run them and see if everything works.
>
> **[2:35](https://www.linkedin.com/learning/coding-exercises-scala/calculator?u=76281980&t=155)** So all the tests pass, this one is in the bag, let's move on to the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is an  (2)
> **Non-Speech:** (videogame music) (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Error handling](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980&t=0)** (bright video game music)
>
> **[0:03](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980&t=3)** - [Instructor] Every programmer has to deal with error handling. In this challenge, we're going to get some practice with error handling in a simplified version of an online store. In the file, 01>_13b.[[Scala]], you'll find some methods that sketch out how order fulfillment in an eCommerce store might work. We have methods to get an order, given a user ID, get delivery details, given an order ID and get fulfillment details, given an order and delivery details. Each of these methods can fail. For example, an order might not have any delivery details associated with it. Your task is to implement the method, processOrderForUser. It should get the order for the user ID, get the delivery details for the order if there is an order and get the fulfillment details for the order and delivery details. Each step can fail, so the final result is an option. You should use a for-comprehension to do this. Now pause the video and come back when you've completed the challenge to see how I tackled it. (bright video game music) As usual, I'm starting with the skeleton file we provided for you. The method we want to implement's at the bottom of the file, so let's go there. Here it is. Now, we suggested using a for-comprehension to do this, and we're going to do that now and see that it makes the code very simple. So, start our for-comprehension, and now we just need to do the task in the steps we gave you.
>
> **[1:35](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980&t=95)** First is to get the order for the user ID. So, get the order, user ID. Okay, now let's get those delivery details if we have any. Get delivery details, and we're given the order ID. And next up, let's just see if we get rid of this.
>
> **[2:05](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980&t=125)** Next up is to get the fulfillment details, fulfillment, given the order and delivery details we've just got.
>
> **[2:19](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980&t=139)** We need the order, and we need the delivery. And then if we've got all that, we should yield the fulfillment. All right, that's the code. As you can see a for-comprehension makes this code very concise and error handling is very simple in Scala when you can use a for-comprehension. As usual, we'd like to test that this actually works, so let's head on over to the test and run them.
>
> **[2:52](https://www.linkedin.com/learning/coding-exercises-scala/error-handling?u=76281980&t=172)** All the tests pass. We're good to go onto the next challenge, nice work!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (2)
> **Code Identifiers:** ecommerce (1), processorderforuser (1)
> **Definitions:** is an  (2)
> **Non-Speech:** (bright video game music) (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Sierpinski Triangle](https://www.linkedin.com/learning/coding-exercises-scala/sierpinski-triangle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/coding-exercises-scala/sierpinski-triangle?u=76281980&t=0)** (playful game music) (system chimes) (quirky tone plays)
>
> **[0:03](https://www.linkedin.com/learning/coding-exercises-scala/sierpinski-triangle?u=76281980&t=3)** - [Instructor] The Sierpinski triangle is an interesting fractal. It starts by putting a triangle above two triangles that are beside each other. Successive iterations repeat the pattern with the fragment from the previous iteration. Your challenge is to implement the Sierpinski triangle. We've given you a bit of code to start with in the file 01_14b.[[Scala]]. Now pause the video, come back when you've completed the challenge, and see how I did it. (upbeat retro video game music) (quirky tone plays) So here's the starting point that we've given you. We've defined a triangle here that you can build the Sierpinski triangle from. What we need to implement is the iterative fractal-building process. So, what I need to do is, on the first iteration when the depth is 1, I need to return just the triangle, and on the other iterations, I need to build from the previous result. So, start off with depth is 1. Then I'm just going to return this triangle. Else, I'm going to get the previous value from sierpinski. And then I need to get previous and put it above previous, beside previous. And that's it. We've defined the Sierpinski triangle.
>
> **[1:38](https://www.linkedin.com/learning/coding-exercises-scala/sierpinski-triangle?u=76281980&t=98)** Now I would like to validate that this works. And we're going to do that by drawing the triangle. So to run this code, I'm going to hop into SBT. Let's do that now. Here in SBT, and then just use the command Run. Goes and does its thing for a little while. And we've drawn the triangle. It should appear on a little window, looking something like this. Nice job!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Scala]] (1)
> **Non-Speech:** (playful game music) (1), (system chimes) (1), (upbeat retro video game music) (1)
> **Env Vars:** sbt (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Rocketship](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980&t=3)** - In this final challenge, we are going to take your Scarla skills to the stratosphere by making a rocket ship. Well, not an actual rocket ship, but an animation of one. The file 01_15b.scarla has all the setup you need. Comments in the file guide you through the process of writing the code. If you complete it all correctly, you'll end up with an animation of a rocket ship soaring into the sky. So jump right in and get coding. Now, pause a video and come back when you've completed the challenge and I'll show you how I tackled it. So here's a file we've given you and has a lot of comments describing what each section is doing. This is not stuff we have to change so let's keep going down the file. And eventually we'll get to the first bit, here we go, we need to implement. This is telling us that state is either countdown, containing an integer, counts left or flying, containing a point and location and so on. So let's implement this. So we're going to have a case Countdown which is going have counts and Int, and Flying which is going to contain, so location, it's going to be a point. And let's see what else. Unfortunately, this screen is a little bit narrow, can't read everything. Just a point. Okay, good. So more stuff we don't have to change,
>
> **[1:37](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980&t=97)** and here we go, implement this. If the state is Countdown, the count is zero, those should be so forth. Okay, so we have state. State, we're going to match on it. And we have case for countdown and case for flying. Case Countdown is going to be counts. And the case for flying and we have our location.
>
> **[2:22](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980&t=142)** Okay. So that's that. Now we need to, now we need to implement the [[Representational State Transfer (REST)|rest]] of it. And the description here is not quite all visible on my screen, but probably is for you. And we just need to basically translate this into code. So here we're saying if count is zero, then we return a flying starting at starting point, else turn the countdown with counts, take one. And here, if we're flying, result is flying to the position equal to the current position plus velocity. So flying is location plus velocity. Okay, good. And now getting these red underlines because I need to just prefix this by the name of enumeration. So I've temporarily forgotten its state, isn't it? Yeah, so it's a State.Countdown. That's a typo there. Oops. And these are going to be prefix with state as well.
>
> **[3:51](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980&t=231)** And this is counts. Okay. That should all be good. Onto the next one. Given the state, create the image using drawCountdown and drawFlying above. Okay. So once again, we're going to get the state. We're going to match on it. And when we have a State.Countdown going to do drawCountdown. And when we have flying, we're going to drawFlying. Okay. Right. Good. Oops. Error key press there. Implement this. Is true when the ship is Flying and location's Y value is greater than a 54. Okay. So once again, going to match. Get a countdown. Well, it doesn't matter what the value of counts is, 'cause this one is always false. And then when we have a flying rocket, we need to get the location out. And then we're saying, if location.y is greater than or equal to 54, return true, so we don't need to actually have the if here 'cause we can just do it like so. All right.
>
> **[5:26](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980&t=326)** Animation. Implement this. Should be a countdown with an initial count of 100. Okay. So we want this to be a State.Countdown. It's an initial count of 100. Good. And then that's it. We're done. So save everything. And of course we want to run it now to see our little animation. So let's switch into SBT and here it's going to run, code have a little compilation happening. And once that's done, an animation is going to pop up. Now it's going to pop up in a separate window and I'm going to need to be pretty quick to grab it and make sure you can see that on the screen. If I don't manage to do it, well, implement the code yourself and run it on your own machine. Right. If I'm quick, I can grab this. There we go. And it's a little bit bigger than the quite small screen I'm recording on. Here it comes the rocket. Zooming up. Okay. So that probably looks a little bit better on your screen than it does on mine because it didn't quite really like switching the resolution on the image. But hopefully, when you run it, you'll see something a little bit better. All right, we have come to the end of the course and I hope you've enjoyed it. I've had a great time doing it. Hope you've learned a lot.
>
> **[6:59](https://www.linkedin.com/learning/coding-exercises-scala/rocketship?u=76281980&t=419)** And onto the next one. Let me rephrase that. If you've come to the end of the course, I hope you've learned a lot and I hope you've enjoyed it. I've had a great time making it. Hope I see you around.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** drawcountdown (2), drawflying (2)
> **CLI Commands:** make (1)
> **Env Vars:** sbt (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - in (1)


## Instructor

- [[Noel Welsh]]

## Resources

- Exercise files available

## Skills Covered

- Scala

## Path Context

### In [[Develop Your Scala Skills for Data Engineering]]
← [[Scala Essential Training]] | **5 of 6** | [[End-to-End Data Engineering Project]] →

## Appears In

- [[Develop Your Scala Skills for Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Scala Essential Training]] — Scala
- [[Hands-On Introduction- Scala]] — Scala

---

[↑ Back to top](#)