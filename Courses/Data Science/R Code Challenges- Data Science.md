---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: r-code-challenges-data-science
url: "https://www.linkedin.com/learning/r-code-challenges-data-science"
duration_minutes: 57
duration: 57m
level: Intermediate
updated: 8/12/2024
learners: 3359
skills:
  - R (Programming Language)
  - Data Science
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHtFNVHKSaikA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721939711133?e=2147483647&amp;v=beta&amp;t=McNeGQ_cT2wim78sqzFYP0Is5sB6s1Lsb1NxRx4RBNY"
linkedin_topic: Data Science
learning_paths:
  - '[[Getting Started with R for Data Science]]'
  - '[[Advance Your Skills in R]]'
prev_courses:
  - '[[R for Data Science- Analysis and Visualization]]'
  - '[[R for Data Science- Analysis and Visualization]]'
next_courses:
  - null
  - '[[Learning the R Tidyverse]]'
path_nav: '[{"path":"Getting Started with R for Data Science","position":4,"total":4,"prev":"R for Data Science- Analysis and Visualization","next":null},{"path":"Advance Your Skills in R","position":4,"total":8,"prev":"R for Data Science- Analysis and Visualization","next":"Learning the R Tidyverse"}]'
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/r-programming-language
  - skill/data-science
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/R%20Code%20Challenges-%20Data%20Science.md)

![R Code Challenges: Data Science](https://media.licdn.com/dms/image/v2/D560DAQHtFNVHKSaikA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1721939711133?e=2147483647&amp;v=beta&amp;t=McNeGQ_cT2wim78sqzFYP0Is5sB6s1Lsb1NxRx4RBNY)

# R Code Challenges: Data Science

> Want to test—and develop—your R data-engineering skills? Join instructor Mark Niemann-Ross in this Code Challenges course as he presents short, bite-sized challenges you can use to practice R programming. Each video is less than four minutes and self-contained, so you can skip around and watch the videos in any order. Mark shares his solutions for every problem, most of which contain fewer than 10

> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science) | 57m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Practice with R programming](#practice-with-r-programming)
  - [CoderPad](#coderpad)
- [**1. Data Science Basics with R**](#1-data-science-basics-with-r) (4 videos)
  - [Solution: Subsetting](#solution-subsetting)
  - [Solution: Join three datasets](#solution-join-three-datasets)
  - [Solution: Palindrome](#solution-palindrome)
  - [Solution: Password validator](#solution-password-validator)
- [**2. Data Science Concepts with R**](#2-data-science-concepts-with-r) (3 videos)
  - [Solution: Fizz buzz](#solution-fizz-buzz)
  - [Solution: Create a random door code](#solution-create-a-random-door-code)
  - [Solution: Comparing stock price and interest rates](#solution-comparing-stock-price-and-interest-rates)
- [**3. Think Like an R Programmer**](#3-think-like-an-r-programmer) (3 videos)
  - [Solution: Play rock, paper, scissors, lizard, spock](#solution-play-rock-paper-scissors-lizard-spock)
  - [Solution: Dealing with unexpected data](#solution-dealing-with-unexpected-data)
  - [Solution: Find the middle city](#solution-find-the-middle-city)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Practice with R programming
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/practice-with-r-programming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/practice-with-r-programming?u=76281980&t=0)** - [Mark] Hello, and welcome to R Code Challenges for Data Science.
>
> **[0:04](https://www.linkedin.com/learning/r-code-challenges-data-science/practice-with-r-programming?u=76281980&t=4)** In this course, we'll explore creative and efficient ways to use R to solve a range of problems.
>
> **[0:11](https://www.linkedin.com/learning/r-code-challenges-data-science/practice-with-r-programming?u=76281980&t=11)** I'll describe some of the unique aspects of working with this language, and show you some tips on how to make your code run faster and be more reliable, as well as pointers on making it more readable.
>
> **[0:24](https://www.linkedin.com/learning/r-code-challenges-data-science/practice-with-r-programming?u=76281980&t=24)** My name is Mark Niemann-Ross, and I'm excited to show you my solutions for these challenges.
>
> **[0:30](https://www.linkedin.com/learning/r-code-challenges-data-science/practice-with-r-programming?u=76281980&t=30)** So, let's get started with R Code Challenges: Data Science.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2)
> **CLI Commands:** make (1)
> **Speakers:** - [mark] (1)

#### CoderPad
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=0)** - [Instructor] This course provides you with the CoderPad development environment.
>
> **[0:05](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=5)** When you open CoderPad, you'll see four panes.
>
> **[0:11](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=11)** On the top left, you'll see a list of parameters and functions, and a description of the challenge.
>
> **[0:17](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=17)** Parameters are values that you'll need to pass into the function.
>
> **[0:23](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=23)** The result is also described.
>
> **[0:26](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=26)** Take note that the type of the result is important.
>
> **[0:30](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=30)** In this case, notice that the result must be a named vector, versus just a standard vector.
>
> **[0:37](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=37)** Each challenge includes one or more examples.
>
> **[0:40](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=40)** They show different parameter values and what results would be returned for each test case.
>
> **[0:47](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=47)** Create your answer in the top right panel.
>
> **[0:51](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=51)** There are comments in the starting code showing where to put your solution.
>
> **[0:56](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=56)** When you click Test my code, you'll see a message indicating whether your code returned a correct result.
>
> **[1:03](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=63)** The showExpectedResult, showHints and showPackages will help you debug your solutions.
>
> **[1:12](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=72)** If they're false, turn them to true to showHints, expectedResults, or showPackages.
>
> **[1:20](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=80)** The showPackages variable will list all of the R packages installed and available for your use.
>
> **[1:28](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=88)** The code editor in the lower right corner shows how your solution is used.
>
> **[1:34](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=94)** You can change that code to test different cases.
>
> **[1:39](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=99)** Regardless of whether your answer is successful, you'll see messages in the console output in the lower left-hand corner.
>
> **[1:46](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=106)** If any messages are too long to fit in that area, you can scroll sideways to see all of the text.
>
> **[1:52](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=112)** When you finished each code challenge, press Submit and return to the course's table of contents.
>
> **[2:00](https://www.linkedin.com/learning/r-code-challenges-data-science/coderpad?u=76281980&t=120)** Then click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (1)
> **Code Identifiers:** showpackages (3), showhints (2), showexpectedresult (1), expectedresults (1)
> **Cross-References:** next video (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Data Science Basics with R

[↑ Back to Table of Contents](#table-of-contents)

#### Solution: Subsetting
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=0)** - [Instructor] Working with big data almost always involves subsetting the dataset.
>
> **[0:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=6)** You only want the parts that you're interested in, and it's kind of like eating a watermelon.
>
> **[0:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=12)** When you eat a watermelon, you don't eat the rind and you don't eat the seeds.
>
> **[0:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=17)** All you want is the delicious red melon.
>
> **[0:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=22)** Essentially, you are subsetting that watermelon to the only parts you're interested in, and that's what we've done with this world population dataset.
>
> **[0:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=32)** I ask you to find the world population data for countries with population densities greater than the median density for the year 2021, and told you that you could use the medium variant.
>
> **[0:47](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=47)** Let's take a look at that dataset first of all before we go any further, and you'll see that we have several rows, or observations, and lots of columns, also called variables.
>
> **[1:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=62)** The time variable or column is the year that that particular observation was made.
>
> **[1:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=68)** You can see Variant where it says Medium, and there's several different values for that.
>
> **[1:14](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=74)** You'll see columns for population male, population female, and population total.
>
> **[1:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=81)** All we're really interested in is the population density.
>
> **[1:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=85)** Let's look at the code that I wrote in order to solve this particular challenge.
>
> **[1:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=90)** It's a function called high pop density, and the first thing that I've done is import the world population file passed to me as part of the function.
>
> **[1:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=101)** I put that into a variable called worldPop.
>
> **[1:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=104)** Now I've already done that so that we can play with this example.
>
> **[1:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=108)** In line 5, I combine a couple of commands.
>
> **[1:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=112)** Let's break them out.
>
> **[1:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=114)** Starting with the contents of the return function, you'll see that I take the database called worldPop, which you'll see from line 3 is the contents of the CSV file.
>
> **[2:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=127)** I'm using subsetting and an ampersand symbol.
>
> **[2:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=131)** The ampersand provides us with a logical and operator.
>
> **[2:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=136)** What I'm saying here is worldPop column Time = 2021.
>
> **[2:26](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=146)** And if I go ahead and run that, what I'll receive is a table with false or true.
>
> **[2:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=155)** It's true if the time variable is equal to 2021.
>
> **[2:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=161)** If it's not equal to 2021, then I'll receive false.
>
> **[2:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=166)** It's a logical, so I can use that as an argument to the logical and symbol at the end of line 5.
>
> **[2:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=175)** Next, in line 6, you can see that I'm taking population density and checking for the median.
>
> **[3:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=183)** I'm actually comparing to see is it greater than the median of the world population population density column.
>
> **[3:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=192)** And when I run that, you'll again see I receive true and false, not the actual values, they're logical values that I can again use as an argument to a logical construct.
>
> **[3:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=204)** In line 7, I state that I only want to use rows where the variant is equal to medium.
>
> **[3:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=212)** Now, this might be a good place to take a quick look at the database.
>
> **[3:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=217)** What I'll receive back from that particular line is only variants that are equal to medium.
>
> **[3:43](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=223)** So let's go further on down here.
>
> **[3:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=226)** You'll notice that variant contains things other than medium.
>
> **[3:51](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=231)** Now, as a side note, we can check to see what it contains using the simple command unique from worldPop$Variant.
>
> **[4:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=247)** This provides us with all of the values that are in the variant column.
>
> **[4:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=252)** You can see medium, high, low, constant fertility, and other values.
>
> **[4:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=258)** We're only interested in the rows where variant is equal to medium.
>
> **[4:23](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=263)** And if we go back to our code, that's what line 7 does.
>
> **[4:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=270)** So worldPopTime, worldPopDensity, worldPopVariant are all conditions that we're selecting a row based on.
>
> **[4:38](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=278)** All I need back from that particular row is the location column.
>
> **[4:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=284)** Everything before this particular comma will select the rows.
>
> **[4:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=289)** Anything after the comma will select columns.
>
> **[4:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=293)** So to put this into a narrative, what I've said in line 5 is return data from the worldPop dataset.
>
> **[5:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=303)** I only am interested in rows where the time is greater than 2021 and the population density is greater than the medium world population density and the variant is equal to medium.
>
> **[5:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=317)** Only provide me with location.
>
> **[5:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=321)** And if I run all of that, you'll see that I receive a list of locations.
>
> **[5:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=331)** I can be confident that the time was 2021, the density was greater than the median density, and the variant was medium.
>
> **[5:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=340)** You'll notice that I didn't have to use any flow control statements, such as switches or if then.
>
> **[5:47](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-subsetting?u=76281980&t=347)** This is one of the unique features of R, being able to subset databases without having to step through each line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), database (2), [[Big Data]] (1), next (1), [[Databases]] (1)
> **Code Identifiers:** worldpop (5), worldpoptime (1), worldpopdensity (1), worldpopvariant (1)
> **Analogies:** kind of like (1), such as (1)
> **CLI Commands:** find (1)
> **Env Vars:** csv (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### Solution: Join three datasets
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980&t=0)** - [Instructor] Data scientists spend 80% of their time 2 cleaning and joining datasets. 3 The other 20% of the time 4 they spend complaining about cleaning data sets. 5 So, cleaning and joining data sets is very important 6 and that's what this challenge is all about. 7 I've given you three data sets that are related 8 and you are asked to come up with some conclusions 9 based on houseColor versus maximumIncome. 10 Comparing house color to income 11 is a somewhat silly analysis, 12 but it's a great way to demonstrate 13 how R can be used to identify these correlations. 14 So, let's take a look at how I solve this problem. 15 You were given a set of databases, 16 AcmeData and StarResearch, asked to join them, 17
>
> **[0:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980&t=52)** and then set up categories that would identify house color 18 and then result in the maximum income for each house color. 19 In line 5, I jump right into merging 20 AcmeData_Demographic and AcmeData_Survey by surveyID. 21 So, let's take a look at those two databases. 22 Here's demographic. 23 It's only two columns or variables. 24 The first is named firstName 25 and the second is the surveyID. 26 The AcmeData_Survey has that same surveyID column, 27 but this time it's related to Income, houseColor and Age. 28 In line 5, we use a simple merge command 29 to create the acmeData data frame. 30 Now if we look at acmeData, 31
>
> **[1:43](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980&t=103)** you'll see that we have surveyID, 32 firstName, Income, houseColor, and Age. 33 This is comparable to an SQL JOIN. 34 Before we can bring in StarResearch, we need to make sure 35 that the column names or variable names are the same 36 between StarResearch and acmeData, 37 and that's what Line 10 accomplishes. 38 We just change the name to common names. 39 Line 11 rearranges StarResearch 40 so that it is in the same order 41 as the acmeData values we just looked at. 42 Let's take a quick look at StarResearch, 43 and you'll see the surveyID, firstName, 44 Income, houseColor, and Age is the same as acmeData. 45 With the column names or variables named the same, 46
>
> **[2:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980&t=152)** I can now use R's rbind to glue acmeData 47 to the top of StarResearch, 48 and that's what line 14 accomplishes. 49 I now have a data frame called allTheData. 50 Let's take a look at that. 51 Over here in the right hand side 52 you can see allTheData as 18,000 observations, 53 which is quite a bit more than acmeData or StarResearch. 54 Either one. 55 In line 16, I use the by command. 56 Now you may not have been familiar with this, 57 so let's take a look at the help value for by. 58 And what we find out is the function of by 59 is just simply a wrap around tapply. 60 Tapply being a member of the apply set of functions. 61 So to understand by, you'll need to understand tapply. 62
>
> **[3:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980&t=205)** That's something that you should look up 63 because it means that you have to also understand apply. 64 By the way, there's also sapply and lapply 65 and several other applies. 66 This is all very R-centric type of stuff. 67 In line 16, I'm going to create a mydf data frame. 68 I'm using the by function. 69 I'm going to apply this to each row of allTheData, 70 and I'm going to group by the index allTheDatahouseColor. 71 This will create groups based on the color of the house. 72 Once I've created the group, then I'm applying the function. 73 This is line 18 74 where the return value is for each row 75 where xIncome is equal to the maximumIncome. 76
>
> **[4:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-join-three-datasets?u=76281980&t=257)** Then I want it to return firstName, Income, and houseColor. 77 I've asked it to simplify 78 and this produces just a data frame. 79 When I run line 16 and then line 17, 80 I have the two of them return now as a data frame, 81 and let's take a look at that. 82 You'll see that I now have firstName, Income and houseColor. 83 Each row is named by the house colors available 84 within the original dataset, 85 And each one identifies the maximum income per house color. 86 When it comes right down to it, 87 it isn't this difficult to find this data out, 88 but you do have to understand how R is used 89 to merge and filter datasets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Databases]] (2), [[SQL]] (1)
> **Code Identifiers:** acmedata (7), housecolor (6), surveyid (5), firstname (5), allthedata (3)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** sql (1), join (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** set up (1), you'll need (1)
> **SQL:** join (1)
> **Speakers:** - [instructor] (1)

#### Solution: Palindrome
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=0)** - [Instructor] Identifying a palindrome is a quick and easy way to test your knowledge of regular expressions and string manipulation.
>
> **[0:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=9)** It's a fairly easy challenge, but let's take a look at how to solve it.
>
> **[0:13](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=13)** This requires the creation of a function called is.palindrome, and in the code window you can see my code to solve this problem.
>
> **[0:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=22)** If I define is.palindrome and I give it a value,
>
> **[0:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=31)** I'll say, "Mark", it should return FALSE because that word does not look the same forward as backward.
>
> **[0:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=41)** If I give it a true palindrome, let's say, "Race car", I should return TRUE.
>
> **[0:51](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=51)** What's even more interesting is if I give it a phrase, something like, "Madam, I'm Adam."
>
> **[1:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=66)** You'll see that I have uppercase, lowercase, and punctuation, but it's still a palindrome.
>
> **[1:13](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=73)** So there are several cases we need to filter out and change in order to identify palindromes correctly.
>
> **[1:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=81)** In line two, three, and four of the code in the upper right hand corner, you can see that I'm filtering this out.
>
> **[1:28](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=88)** The first thing I do in line two is convert testThisWord to all lowercase.
>
> **[1:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=95)** For the purpose of this exhibit, I've set up testThisWord as "Madam, I'm Adam", and in line two, I convert that phrase to lower case so we can take a look at what actually happens.
>
> **[1:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=109)** You can see down below in the console window, it now says, "Madam, I'm Adam", but all in lowercase.
>
> **[1:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=115)** In line three, I use gsub to remove any spaces, and if I go ahead and select that and run it, you'll see that I've removed all spaces from the phrase.
>
> **[2:10](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=130)** In line four, I again use gsub to remove any punctuation.
>
> **[2:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=137)** Now in the lower corner, you can see that I now have "MadamImAdam."
>
> **[2:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=142)** You may note that our phrase has lower and uppercase back in it, and that's because I have not been saving the results of the three functions we ran.
>
> **[2:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=152)** If I go back up to line two and simply run each line, now testThisWord will accurately reflect our current status.
>
> **[2:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=164)** In line five and six is where the fun starts.
>
> **[2:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=168)** I've used the string split command, and you can see that in line five.
>
> **[2:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=172)** I'll highlight it for you here to split testThisWord into individual characters.
>
> **[3:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=182)** So here's a vector.
>
> **[3:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=183)** It contains characters, and each item in the vector is one letter from the original phrase.
>
> **[3:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=191)** Now, I go on to use unlist, and that's because string split produces a list of characters, which is a little bit difficult to manipulate in this particular situation.
>
> **[3:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=201)** So I've just simply said, unlist, these characters, it looks the same, but it's no longer a list.
>
> **[3:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=211)** If you compare the previous string split, you'll notice that we're looking at the first element, which is the bracket, bracket one, bracket, bracket followed by bracket, one bracket.
>
> **[3:42](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=222)** This is the contents of the first element of the list.
>
> **[3:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=226)** When I use unlist, I no longer have the bracket bracket one, bracket bracket followed by bracket, one bracket.
>
> **[3:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=233)** Now I'm only looking at one element, it's a vector.
>
> **[3:57](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=237)** Now, in order to proceed, I need to assign forward_pal, so I'll go ahead and click on line five and run the entire line.
>
> **[4:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=246)** Now I can reverse forward_pal in line six, and what this does is just simply reverse the string, rev.
>
> **[4:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=256)** So now I have reverse_pal.
>
> **[4:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=260)** In line seven, I'm going to combine the return command with a quick test.
>
> **[4:27](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=267)** If reverse_pal is equal to forward_pal, and I can go ahead and run just that.
>
> **[4:33](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=273)** You'll see that I get a string of TRUEs.
>
> **[4:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=277)** This is testing each element of reverse_pal against each element of forward_pal, so it returns a string of TRUE rather than just a simple, true or false.
>
> **[4:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=288)** If I want one true or false, I need to test for all values, and when I run that, you'll see that I get TRUE.
>
> **[4:59](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=299)** There is a related function called any, which would say, are any of these values true?
>
> **[5:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=306)** All says, are all of these values true?
>
> **[5:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=309)** This is the value that I return, which indicates whether forward_pal is equal to reverse_pal, and if that's true, then we have a palindrome.
>
> **[5:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=321)** As you can see, it's a very simple function, but again, you don't need any tests any loop controls.
>
> **[5:29](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-palindrome?u=76281980&t=329)** All of that is done through vector manipulation, which is where R really shines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** forward_pal (5), testthisword (4), reverse_pal (4)
> **Env Vars:** true (3), false (1)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Solution: Password validator
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=0)** - [Instructor] Checking a password against a series of conditions is all about setting up regular expressions.
>
> **[0:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=8)** If you haven't become really familiar with regular expressions, now is the time.
>
> **[0:14](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=14)** They're a little bit difficult to understand at first, and they are kind of particular and fidgety to deal with, but once you've mastered regular expressions, all of your other work will fall into place.
>
> **[0:27](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=27)** Diagnosed password is all about setting up regular expressions, and in fact, you can see in my code that my line two returns the value of just a bunch of regular expressions.
>
> **[0:42](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=42)** Let's take a look at diagnose password really quickly.
>
> **[0:45](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=45)** I'll go ahead and define the function, and let's give it a test, diagnose password, and then I'll give it a password of mark, and you can see that I've failed several tests, lengths and numbers and punctuation and all that kind of stuff.
>
> **[1:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=66)** Now, what just actually happened?
>
> **[1:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=68)** Well, let's go back to the code and line two.
>
> **[1:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=72)** You'll see that line two says return, which means it's going to return a named vector.
>
> **[1:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=80)** The name of each vector will be the test that I've performed, and in this case, the first element of the name vector is called length.
>
> **[1:28](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=88)** So in line two, I've said length equals a test of the number of characters of a password greater than 10, and that's going to return true or false.
>
> **[1:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=101)** Notice a difference between N char and length.
>
> **[1:45](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=105)** If I type in length of mark, for example, I get a length of one.
>
> **[1:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=114)** What I want is to know the number of characters in a string.
>
> **[1:59](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=119)** Oftentimes, people confuse the two functions.
>
> **[2:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=122)** In this case, length will be a true/false related to number of characters greater than 10.
>
> **[2:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=131)** In line three, I name an element of the vector lowercase, and that element is set to grepl, which is grep logic.
>
> **[2:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=142)** It'll return true or false.
>
> **[2:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=144)** If lower cases are found in X, which is a password.
>
> **[2:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=150)** For simplicity, let's set up a password real quick.
>
> **[2:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=157)** We'll set it to mark, and now, what I can do is come into line three, I'll select that one, chunk and we'll run it.
>
> **[2:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=168)** You can see that grepl has returned a true or false value based on whether there are lowercase values in a password.
>
> **[2:58](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=178)** In line four, we do the same thing.
>
> **[3:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=180)** We create an element called uppercase, and I'll use grepl with upper, which is part of a regular expression, to see if there are any uppercase in mark.
>
> **[3:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=192)** And in this case, M-A-R-K lowercase has no uppercase, so it returns false.
>
> **[3:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=200)** Line five checks for numbers.
>
> **[3:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=204)** There are no numbers, so it returns false again.
>
> **[3:27](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=207)** And in line six, I create an element called punctuation, and return a logical true or false of whether there are any punctuation marks in a password.
>
> **[3:39](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=219)** All of this then returns a named vector indicating a series of tests and the result of each test.
>
> **[3:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=226)** Again, diagnosing a password is an exercise in regular expressions.
>
> **[3:51](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-password-validator?u=76281980&t=231)** You may have found a different way to do this, but in my case, it was easiest to do regular expressions and tests for each condition.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is a  (1), is an  (1)
> **CLI Commands:** grep (1)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Data Science Concepts with R

[↑ Back to Table of Contents](#table-of-contents)

#### Solution: Fizz buzz
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=0)** - [Instructor] Now fizzBuzz may seem like a kid's game, but it's actually a really good demonstration of how R approaches large sets of numbers.
>
> **[0:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=9)** We often call them vectors.
>
> **[0:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=12)** With R, you don't need to use any flow control statements.
>
> **[0:15](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=15)** You don't need to use for or if or while, you can do all of this manipulation just simply using vectors.
>
> **[0:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=25)** Let's demonstrate how I solve this problem.
>
> **[0:29](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=29)** In line eight, I create a function called fizzBuzz.
>
> **[0:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=31)** I'm going to go ahead and define that, and then in line 31, I call that function with fizz equal to two and buzz equal to seven.
>
> **[0:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=40)** What that produces for us is a named vector, and by named I mean that each value in the vector has a name.
>
> **[0:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=49)** In this case, it's one or two or three or four.
>
> **[0:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=53)** And it has a value.
>
> **[0:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=54)** It's kind of like key value pairs.
>
> **[0:57](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=57)** So item number one has the character value of one, item number two has a character value of fizz and so on.
>
> **[1:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=68)** Let's step through each line in the function that I created and examine how I solve this problem.
>
> **[1:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=76)** We'll start in line nine where I create a vector called numbers and I fill it with numbers from one to 100.
>
> **[1:23](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=83)** Now if you take a quick look at numbers, let's go ahead and do that down here in the console, and then open this up a bit, you'll see that I have a vector of just simple one through 100.
>
> **[1:36](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=96)** This is not a named vector. It's just a simple vector.
>
> **[1:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=101)** The next thing I do is change it to characters.
>
> **[1:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=104)** Now you might ask, why am I changing this from an integer vector to a character vector?
>
> **[1:51](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=111)** That's because vectors can only have one type of value.
>
> **[1:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=115)** Right now, it has an integer type, but the words fizz and buzz happen to be character types.
>
> **[2:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=122)** Well, you can't mix character and integer in one vector.
>
> **[2:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=127)** You can only have one type of value.
>
> **[2:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=131)** Since I need fizz and buzz, I convert the entire vector to a character vector.
>
> **[2:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=138)** In line 12, I name each element in that fizzBuzzVector with a number.
>
> **[2:26](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=146)** Now, when I go ahead and hit 12, you'll see that I change the names to numbers, and if I open up that console and then list fizzBuzzVector, you'll see that each element now has a numbered value and a character value.
>
> **[2:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=168)** The one which is actually a number is the name of the element.
>
> **[2:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=173)** The character one, "1" is the value.
>
> **[2:58](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=178)** It's a name value pair.
>
> **[3:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=182)** We'll go back to the code here.
>
> **[3:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=184)** In line 14, 15 and 16, I'm going to identify which values in our named vector are equal to or divisible by the value that's been passed in through fizz.
>
> **[3:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=197)** Now, you'll notice that I've already defined a buzz and a fizz, buzz as five and fizz as three.
>
> **[3:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=204)** Normally, when you call the function, fizz and buzz are passed in as parameters.
>
> **[3:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=211)** I'm in line 15 and I hit command return on my Macintosh, which is the same as running that line, whichFizz now becomes a vector filled with true and false.
>
> **[3:45](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=225)** The true and false results from identifying each value in the numbers vector and modulo it with fizz.
>
> **[3:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=234)** Modulo gives us the remainder of any division.
>
> **[3:57](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=237)** If the remainder is zero, then that value happens to be divisible by the other number.
>
> **[4:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=244)** So in this case, anywhere that numbers modulo fizz equals zero is divisible by fizz.
>
> **[4:13](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=253)** If we take a look at whichFizz, let's do that down here in the console, you'll see that I have false, false, true.
>
> **[4:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=264)** Well, the third value of numbers happens to be three, and fizz is equal to three, which is divisible by each other.
>
> **[4:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=271)** So I get a value of zero, and I mark that as true.
>
> **[4:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=277)** In line 16, I go into fizzBuzzVector, which is the character version of numbers, and I use the whichFizz vector to identify which elements should be equal to fizz.
>
> **[4:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=292)** When I run line 16, we'll see that fizzBuzzVector changes.
>
> **[5:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=304)** And now instead of true false, I have one, two, fizz.
>
> **[5:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=312)** Going back to the code, in line 18, I repeat this, but I use the value of buzz.
>
> **[5:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=318)** So line 19 identifies which values of numbers is modulo buzz equal to zero, and then I use that mask to put in the word buzz anywhere it's true.
>
> **[5:33](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=333)** The third and final task I need to accomplish is to identify fizzBuzz, which is multiples of fizz and buzz.
>
> **[5:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=340)** So in line 23, I create a value called fizzBuzz, which is just simply multiplying fizz by buzz.
>
> **[5:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=349)** And then in line 24, I repeat the previous two steps, which is to identify which values of numbers is modulo by fizzBuzz, and then use that true false mask to identify fizzBuzz.
>
> **[6:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=368)** Now, if I open up the console again and look for fizzBuzzVector, you'll see that I have a complete set of named values and the values reflect the fizzBuzz game.
>
> **[6:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=385)** Again, the important part about this challenge is being able to use R in a way that R was intended to be used.
>
> **[6:33](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-fizz-buzz?u=76281980&t=393)** Use vector math any time you think about possibly stepping through a large set of numbers, such as a vector or a data frame.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** game (2), hit (2), next (1), [[Microsoft Word|Word]] (1), data (1)
> **Code Identifiers:** fizzbuzz (7), fizzbuzzvector (5), whichfizz (3)
> **Analogies:** kind of like (1), such as (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a random door code
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=0)** - [Instructor] Creating a door code that looks like a date can be done several ways.
>
> **[0:05](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=5)** You could solve this problem additively, where you select a valid year, and then a valid month, and then a valid date.
>
> **[0:15](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=15)** Or what I chose to do is subtractive.
>
> **[0:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=18)** I created a list of all the available dates, and then chose one, and then reformatted it to fit the appropriate format.
>
> **[0:28](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=28)** Let's take a look at how I did that.
>
> **[0:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=30)** Here's a function called uniqueDoorCode.
>
> **[0:34](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=34)** In line 2, I set up a loop by declaring candidateCode equal to one, and I know this is a false value, so it will loop at least once.
>
> **[0:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=46)** In line 4 is where I set up the while loop and I test for all unique values in candidateCode that are greater than or equal to six.
>
> **[0:56](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=56)** This is going to check to make sure that the number that I've chosen has a unique set of numbers.
>
> **[1:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=63)** Now how do I create that candidateCode?
>
> **[1:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=66)** Let's start in line 5.
>
> **[1:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=69)** I'll select that line and then run it.
>
> **[1:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=71)** And I now have a value called candidateCodes with one through, huh, a lot of values.
>
> **[1:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=80)** Let's take a look at the top of it.
>
> **[1:28](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=88)** And you'll see that this vector is equal to a series of dates, starting from 1900s all the way to today.
>
> **[1:36](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=96)** So I've got a very large list of potential values.
>
> **[1:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=100)** Now they may not all be unique and that's what I'll test for later on.
>
> **[1:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=104)** Now I only need one value and I accomplish that using a sample value.
>
> **[1:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=109)** I've told it to sample a number from candidateCode.
>
> **[1:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=112)** I only need one value.
>
> **[1:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=114)** When I run line 6, candidateCode becomes equal to one date, and you can see that change in the right-hand side where it says Values.
>
> **[2:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=124)** Line 7 says to format that candidate code using year, year, month, date.
>
> **[2:10](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=130)** And since this is an actual date, it's not a string, I can tell it to format it is as a date.
>
> **[2:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=136)** And there it is, 240521.
>
> **[2:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=140)** Now I've said split that down into individual numbers.
>
> **[2:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=145)** Now I have a list, and if I look at that list, let's go ahead and do that, you'll see that this is the first element of the first item of the list.
>
> **[2:39](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=159)** Look for the double brackets followed by the single brackets.
>
> **[2:42](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=162)** "2" "4" "0" "5" "2" "1" are the elements of the first element of the first item of the list.
>
> **[2:50](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=170)** I don't want a list, I want a vector, and that's what I accomplished in line 9.
>
> **[2:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=175)** Now you see in the upper right-hand corner, that candidateCode is a vector, six items of type character.
>
> **[3:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=183)** I go back up to the loop in line 4 and I check to see the length of unique values in candidateCode.
>
> **[3:10](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=190)** Let's break that down.
>
> **[3:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=192)** So if I do unique(candidateCode), I have each of the unique values, and then the length of the resulting vector from unique is equal to five.
>
> **[3:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=204)** Hmm, that's not equal to six.
>
> **[3:27](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=207)** So I'll need to go through this loop, create a series of values, sample it down, and then reformat.
>
> **[3:36](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=216)** Arguably, I could make this quicker by moving the sequence in line 5 outside of the while loop and just continue to use the same value.
>
> **[3:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=228)** Now I'd like to show you an alternative.
>
> **[3:50](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=230)** I couldn't show you this in the current version of CoderPad because CoderPad does not support R v4.0 structures, such as the pipe forward command.
>
> **[4:01](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=241)** I've rewritten my language using R 4.0's pipe forward command, and you can see what that looks like in 5, 6, 7, 8, and 9.
>
> **[4:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=251)** This is very similar to the pipe command available through magrittr and often used in tidyverse.
>
> **[4:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=257)** That is percent greater than a percent.
>
> **[4:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=260)** In this case, the pipe and forward command are native to R.
>
> **[4:26](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=266)** All I've done is created a list of values.
>
> **[4:29](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=269)** I sample one. In line 7, I format it.
>
> **[4:33](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=273)** In line 8, I split it. In line 9, I unlist it.
>
> **[4:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=277)** Again, compare lines 5, 6, 7, 8, and 9 to the original code that I produced, which is in 5, 6, 7, 8, and 9.
>
> **[4:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=289)** You can make the decision as to which one is clear.
>
> **[4:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=293)** So again, creating a unique door code can be done one of two ways.
>
> **[4:57](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=297)** I chose to do it subtractively, and the clue I gave you when I started this was pick something that looks like a date.
>
> **[5:05](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-create-a-random-door-code?u=76281980&t=305)** If you know about the sequence command and know that you can use it with dates, then you've got half of the problem solved immediately.

> [!info]- Semantic Content
>
> **Code Identifiers:** candidatecode (8), uniquedoorcode (1), candidatecodes (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** v4.0 (1), 4.0 (1)
> **Analogies:** such as (1), similar to (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)

#### Solution: Comparing stock price and interest rates
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=0)** - [Instructor] In this challenge, I ask you to find the correlation between stock price and interest rates.
>
> **[0:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=7)** You're supplied with two data sets, the Apple stock prices from June 6th, 2019 to the current day, and this is a data frame.
>
> **[0:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=16)** You're also supplied with US interest rates from July, 1954 to the current day, so you can see that these two data sets somehow map together, but it's not a one-to-one correspondence.
>
> **[0:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=31)** Somehow you'll need to join these two and then return the correlation.
>
> **[0:36](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=36)** Let's take a look at how that can be done.
>
> **[0:38](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=38)** Here's the code I wrote to solve this problem, and you may have done this a different way.
>
> **[0:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=44)** What I've chosen to do is create a function called core stock, and you're going to give it the first date and the last date.
>
> **[0:51](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=51)** That's part of the setup for the code of pad experiment.
>
> **[0:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=55)** Line three loads in the files that you'll need.
>
> **[0:59](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=59)** In line five and six, I've created a vector called first date and a second vector called last date.
>
> **[1:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=66)** This is unnecessary as you can just put this into the function, but for the sake of experimentation and demonstration, I've chosen to create those two variables.
>
> **[1:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=76)** Let's define those two.
>
> **[1:19](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=79)** Now I can step into the function itself.
>
> **[1:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=82)** In line nine, you'll see that I'm using a merge function, which is very similar to an SQL join.
>
> **[1:29](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=89)** I'm going to merge AAPL, which is one of the data sets I've had, with interest rates, another dataset I have.
>
> **[1:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=100)** I've said use the date column from the X data set, which in this case, happens to be AAPL and use the date column in the Y data set, which is interest rates.
>
> **[1:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=115)** You'll notice that the X column is capital D-A-T-E, and the Y column is lowercase, d-a-t-e.
>
> **[2:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=124)** They look very similar, but upper and lowercase is important.
>
> **[2:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=129)** Let's go ahead and run line nine and let's take a look at the result.
>
> **[2:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=137)** Now what we have is a date, the open, high, low close, adjust close, volume and value is the interest rate.
>
> **[2:28](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=148)** The join command, or the merge command, depending on if you're SQL or R, has automatically assigned the correct date, because that's the column we chose to use.
>
> **[2:43](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=163)** In line 15 and 16, I subset so that anything that's greater than the first date and anything that's less than the last date is saved into AAPL interest subset.
>
> **[2:56](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=176)** Let's run that and you'll notice in the right hand side, we have 22 observations of eight variables.
>
> **[3:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=184)** Let's take a look at that.
>
> **[3:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=186)** This is the subset, only 22 lines.
>
> **[3:10](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=190)** This is the original dataset which had 1,251 observations.
>
> **[3:19](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=199)** Now that I have that subset, I can use COR, which is an R function called correlate, where my X and Y are defined as the close and the value of the data set I just created.
>
> **[3:36](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=216)** I'll select the code that I'm interested here, the correlation, and I'll hit return and you can see that I receive a negative value.
>
> **[3:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=226)** Correlation returns a value between one and negative one, depending on how much the two values correlate to each other, so you can see that there is a slightly negative correlation between the closing value and the interest values at that time.
>
> **[4:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=247)** This is one way to solve the problem.
>
> **[4:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=249)** You may have chosen a different way.
>
> **[4:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-comparing-stock-price-and-interest-rates?u=76281980&t=251)** If you didn't use our correlate function, it's something you'll want to learn more about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (7), [[SQL]] (2), hit (1)
> **Env Vars:** aapl (3), sql (2), cor (1)
> **Definitions:** is a  (3), is an  (1), defined as (1)
> **Prerequisites:** you'll need (2), setup (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Think Like an R Programmer

[↑ Back to Table of Contents](#table-of-contents)

#### Solution: Play rock, paper, scissors, lizard, spock
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=0)** - [Instructor] I like this challenge because it really points out who's thinking like an R programmer, and who comes to this from a different programming language.
>
> **[0:10](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=10)** Oftentimes, people will try to solve the rock paper scissors lizard Spock challenge with a long, long list of if else statements.
>
> **[0:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=21)** Our strength is manipulating matrices.
>
> **[0:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=25)** So I looked at how can I use a matrix to solve this problem?
>
> **[0:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=31)** In the code you're looking at, you can see I've created a couple of things.
>
> **[0:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=35)** The first thing I'll need is rock, paper, scissors, lizard, Spock, a vector with the words rock, paper, scissors, lizard, Spock, and I do that in line one.
>
> **[0:45](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=45)** I've already defined that 'cause I'll use that list several times.
>
> **[0:50](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=50)** In line three, I set up the function player1, player2, these are the choices that I'll pass into who won.
>
> **[0:57](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=57)** Then in line six through 15, I set up the truth table or a matrix that I'll use to test player1 against player2.
>
> **[1:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=66)** Let's create that matrix.
>
> **[1:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=68)** And I will skip through lines 6, 7, 8, 9, 10, and then line 12, which actually creates the matrix that I'll be using.
>
> **[1:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=78)** Let's take a look at the resulting matrix.
>
> **[1:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=82)** Each row is labeled with rock, paper, scissors, lizard, Spock, and each column is also labeled with rock, paper, scissors, lizard, Spock.
>
> **[1:31](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=91)** And I'll leave it to you to look at the matrix completion code to identify how those columns are created and the names that they're given.
>
> **[1:39](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=99)** The important point is, is that you can look across from a row and find out how a particular choice will fare against another choice.
>
> **[1:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=108)** Rock versus paper is not a win, so it results in a false.
>
> **[1:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=114)** Rock crushes scissors, which is true.
>
> **[1:58](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=118)** Rock crushes lizard, which is true.
>
> **[2:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=123)** But Spock pulverizes rock.
>
> **[2:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=126)** So in that case, rock would lose against Spock, and you can see that that's false.
>
> **[2:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=131)** So we have a truth table to understand which choice is going to win against which corresponding choice.
>
> **[2:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=141)** Since I've created a matrix, I can move on down to line 17, and in line 17, I check to see which values are played against which values.
>
> **[2:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=152)** In line 17, I set up to test player1, and what I'll do is check to see which value of rock paper lizards Spock is equivalent to player1.
>
> **[2:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=166)** I've already created a player1 for test, I've set it to rock, and so which returns a number, which happens to be the first value of the vector of rock paper scissors lizard Spock is equal to the value in player1.
>
> **[3:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=182)** That's the value in player1 int.
>
> **[3:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=184)** And let's go ahead and set that.
>
> **[3:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=187)** Now, I say if player1 int equals zero, then I'm warning that player1 is an invalid choice, which means that I've created something like missiles or hand grenades.
>
> **[3:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=198)** Nobody knows what that value is and it's not a fair value to put into the function.
>
> **[3:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=204)** In this case, it's okay.
>
> **[3:27](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=207)** Line 19 does the exact same thing except for player2.
>
> **[3:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=212)** Let's go ahead and create player2 int.
>
> **[3:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=215)** Of course, if player2 int is equal to zero, then I've chosen something that's invalid, and I need to issue a warning.
>
> **[3:42](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=222)** Now I go down to line 23, and this is where I test player1 against player2.
>
> **[3:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=228)** Now I know that the two values are not the same because I came back with a equals value of false.
>
> **[3:55](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=235)** So player1 and player2 have not chosen the same value.
>
> **[4:01](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=241)** If they had chosen the same value, then the winner would've been neither.
>
> **[4:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=246)** In line 25, I compare the matrix against player1 and player2.
>
> **[4:13](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=253)** It's done by this chunk of code right here.
>
> **[4:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=256)** All I'm doing is I'm indexing into the matrix by player1 and player2.
>
> **[4:23](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=263)** What I find is true, well, let's step through that.
>
> **[4:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=265)** I know that player1 is one and player2 is equal to four.
>
> **[4:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=270)** If I look at the matrix player1 is the first line, which is rock, and player2 is the fourth column, which is rock, paper, scissors, lizard, which is true in this case.
>
> **[4:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=286)** So I've gotten a true.
>
> **[4:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=289)** If that's true, then the winner is equal to one.
>
> **[4:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=292)** If it's false, then the winner will be player number two.
>
> **[4:56](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=296)** So all I'm doing is indexing into a matrix using the values from player1 and player2.
>
> **[5:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=304)** Again, there are two ways to solve this.
>
> **[5:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=306)** One, which would be a lengthy list of if else statements.
>
> **[5:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-play-rock-paper-scissors-lizard-spock?u=76281980&t=311)** Or if you're thinking like an R programmer, start with a truth table, a simple matrix, and then index into that matrix to find out the value of who's the winner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (1)
> **CLI Commands:** find (3)
> **Prerequisites:** set up (3)
> **Definitions:** is an  (1), means that (1)
> **Warnings:** warning (2)
> **Speakers:** - [instructor] (1)

#### Solution: Dealing with unexpected data
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=0)** - [Lecturer] Oh boy, what a mess.
>
> **[0:04](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=4)** Much of the data you're going to experience as a data scientist is a random mix of values and characters, and who knows what got in there.
>
> **[0:15](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=15)** Your job is oftentimes just cleaning things up and giving them the appropriate data types that you can actually draw analysis from.
>
> **[0:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=24)** That's what this problem is all about.
>
> **[0:27](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=27)** You're given a random list of types of values and then forced to make decisions based on the type of the value versus the value of the element.
>
> **[0:39](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=39)** So let's step through this code to find out how I chose to solve this problem.
>
> **[0:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=46)** The code shows you my definition for deal with this, an R function, and the parameter is mysteryMeat.
>
> **[0:54](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=54)** Now the important things to start off with is you're being handed a list.
>
> **[0:59](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=59)** This isn't a vector or a data frame, it's a list.
>
> **[1:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=62)** I chose that because a list allows you to mix types of values.
>
> **[1:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=69)** I've created a vector called mysteryMeat.
>
> **[1:13](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=73)** Let's take a look at what that is.
>
> **[1:19](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=79)** The first thing you should notice is, is there are six elements to mysteryMeat.
>
> **[1:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=85)** The first value of the first item in the list is 3.
>
> **[1:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=90)** The contents of the second item in the list is mice.
>
> **[1:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=95)** Notice that each line has a double bracket followed by a single bracket.
>
> **[1:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=100)** This indicates the list item and the list content.
>
> **[1:45](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=105)** Let's go back to the code.
>
> **[1:48](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=108)** I'm going to need two global variables inside this function.
>
> **[1:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=112)** One of them called mysterySum, and I set that to 0, and then one of them called cumulativeStrings, and I set that to a vector of zero length.
>
> **[2:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=123)** In line five, I set up a for loop.
>
> **[2:06](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=126)** I'll be indexing on the value of valIndx, which goes from one to the number of items in mysteryMeat.
>
> **[2:16](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=136)** So if the length of mysteryMeat is six, then valIndx will step through one, two, three, four, five, six.
>
> **[2:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=144)** Each time it goes through the loop, it looks at the switch statement in line six, which says, what is the type of this particular index into mysteryMeat?
>
> **[2:36](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=156)** Let's set that up so we can look at what type of does.
>
> **[2:40](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=160)** I'm going to open up the console down here, we'll clean things out a bit, and then I'm going to show you typeof(mysteryMeat).
>
> **[2:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=172)** I'm going to select the contents of the first item, so I'll need to USE \[\[.
>
> **[2:59](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=179)** I'm going to select 1, and in return, the typeof of the first item is double.
>
> **[3:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=188)** What is that actual value?
>
> **[3:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=189)** Let's take a look at mysteryMeat, and I'll put in \[\[1.
>
> **[3:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=197)** The actual value is 3.
>
> **[3:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=200)** Well, it could be a float or it could be an int, but in this case, a double is conclusive.
>
> **[3:26](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=206)** You may be asking, what happens if I use a single bracket?
>
> **[3:29](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=209)** Let's find out.
>
> **[3:33](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=213)** [1, notice I'm not using double brackets, and in this case, I get the item one, and it shows that the contents of that first item is 3.
>
> **[3:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=224)** This is the difference between a list and a vector, and it's something you'll want to be aware of.
>
> **[3:50](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=230)** Going back to our code, what we've said is switch on the typeof value for each index of valIndx.
>
> **[4:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=240)** Line eight says, if the typeof is double, then add to mysterySum the sum of the original mysterySum plus the ceiling, which is rounding up the value in mysteryMeat valIndx.
>
> **[4:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=258)** In line 10, if the typeof happens to be logical, then we're taking the value of mysterySum and adding the value of true or false.
>
> **[4:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=270)** You can do this in R.
>
> **[4:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=272)** True evaluates to 1 and false evaluates to 0.
>
> **[4:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=277)** After switching on the typeof, we can now compute the average length of all non-empty strings.
>
> **[4:44](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=284)** In line 15, we check to make sure that the typeof of this particular element in the list is character, and that the number of characters in that element is greater than 0.
>
> **[4:56](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=296)** If both of those conditions are true, and that's signified by the && at the end of line 15, then we add the string to cumulativeStrings.
>
> **[5:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=308)** So cumulativeStrings is a vector of strings that we'll use later on to calculate the median.
>
> **[5:15](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=315)** Our for loop goes from line five to line 19.
>
> **[5:19](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=319)** Then in 20, we calculate mysterySum plus mean, which is the average of the number of characters of each element of cumulativeStrings.
>
> **[5:32](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=332)** So this is going to give us the average length of the cumulativeStrings, and it's a mysterySum.
>
> **[5:39](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=339)** Oh, and then of course, in line 23, we subtract the count of any empty strings.
>
> **[5:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-dealing-with-unexpected-data?u=76281980&t=346)** Again, in data science, one of the important things you'll need to do is clean up the data, and part of that is recognizing what kind of data or what type of data you've been handed, and act appropriately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (8)
> **Code Identifiers:** mysterymeat (9), mysterysum (6), cumulativestrings (5), valindx (4)
> **CLI Commands:** make (2), find (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Warnings:** be aware (1)

#### Solution: Find the middle city
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=0)** - [Narrator] The problem of finding a middle city between a start city and an end city is really pretty interesting to do via R.
>
> **[0:09](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=9)** You can do it completely with subsetting and vector analysis.
>
> **[0:14](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=14)** You don't need to use any for loops or if-then statements or while loops.
>
> **[0:19](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=19)** Let's take a look at how to solve this.
>
> **[0:22](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=22)** The first thing you'll want to do is look at the master list of cities, and this contains many, many lists of cities you can start from and cities you can go to and the mileage between them.
>
> **[0:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=35)** So for example, in line one, Camp Hill Town, Alabama is 22 miles from Abanda CDP, Alabama.
>
> **[0:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=46)** The first thing I'm going to do is create a data frame of only the starting cities.
>
> **[0:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=52)** I don't need a list of all the cities, only the starting cities that we have people starting from.
>
> **[0:59](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=59)** Line 18, 19, and 20 does this for me.
>
> **[1:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=62)** And the way that it does that is subsets city, state, DIST for distance, and it uses an and statement.
>
> **[1:11](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=71)** So the first thing it says is, find me any states from which are equal to the start state.
>
> **[1:18](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=78)** That will produce true or false for each line.
>
> **[1:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=81)** In line 19, I do the exact same thing, except find from the cities that match start city.
>
> **[1:28](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=88)** Again, this will be true and false.
>
> **[1:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=90)** The ampersand at the end of each of these lines will and these true and false statements together.
>
> **[1:38](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=98)** The third line 20 says, find me miles that are less than or equal to the total mileage.
>
> **[1:47](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=107)** If the mileage between two cities is larger than the total distance, it's not an option.
>
> **[1:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=113)** And so I've chosen to filter those cities out.
>
> **[1:57](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=117)** To run this, I'll click in line 18 and then hit Run.
>
> **[2:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=122)** And in line 21, I rename all of the columns just so it's more consistent.
>
> **[2:08](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=128)** So let's click on onlyStarts and take a look at what happens.
>
> **[2:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=132)** Now you'll notice that there are only 106 observations versus the million or more observations in the original dataset.
>
> **[2:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=141)** These are only the cities that are eligible for consideration.
>
> **[2:25](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=145)** And in fact, if you look at the start state and start city, you'll see these are all New Cumberland City, West Virginia, which happens to be the start state and start city that we've specified.
>
> **[2:38](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=158)** All of the start miles will be less than 32.
>
> **[2:42](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=162)** The second thing I've done is find only the ending cities and states.
>
> **[2:47](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=167)** This is line 23, 24, and 25.
>
> **[2:50](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=170)** 26 renames the columns.
>
> **[2:53](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=173)** We can take a look at that column and you'll notice that the end state and end city are Cross Creek CDP, Pennsylvania.
>
> **[3:02](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=182)** All of the miles will be 32 miles or less.
>
> **[3:05](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=185)** In line 28, I do a merge between these two.
>
> **[3:10](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=190)** I want to find out all of the mid cities between only starts and only ends are the same.
>
> **[3:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=197)** Merge is very much like SQL merge.
>
> **[3:20](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=200)** In this case, I've chosen to merge only starts with only ends by the column labeled mid city.
>
> **[3:30](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=210)** When I do that, I produce all starts and ends.
>
> **[3:34](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=214)** I'm going to trim out the columns that I don't need and then rename those columns to be consistent.
>
> **[3:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=221)** Now, if I look at all starts and ends, you'll see that we have 70 observations out of the original set.
>
> **[3:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=229)** All of the start cities are New Cumberland City, West Virginia, and all the end cities are Cross Creek CDP, Pennsylvania.
>
> **[3:58](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=238)** I also have intermediary miles.
>
> **[4:01](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=241)** So start miles between New Cumberland City and Aliquippa City are 20.
>
> **[4:07](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=247)** The distance from Aliquippa to Cross Creek is 22.
>
> **[4:12](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=252)** Now that's obviously more than 32, so we need to filter those out.
>
> **[4:17](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=257)** Going back, you can see in line 36, in this case, it will build a data frame called possible routes from all starts and ends where the miles combined from the start city to the mid city and from the mid city to the end city is equal to the mileage specified.
>
> **[4:37](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=277)** Let's go ahead and run that and you'll see that our final result, possible routes has three lines in it.
>
> **[4:46](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=286)** Will always start in New Cumberland City, will always end in Cross Creek CDP.
>
> **[4:52](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=292)** In line one, you can see that we've gone through Clinton, Pennsylvania, and 18 miles plus 14 miles is equal to 32.
>
> **[5:03](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=303)** Line two, New Alexandria Village, Ohio is 17 plus 15, and Richmond Village, Ohio is 11 plus 21.
>
> **[5:13](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=313)** All three of these lines are potential solutions because the mileage is correct, as in 32 miles.
>
> **[5:21](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=321)** The start city and end city are correct.
>
> **[5:24](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=324)** But we go through Clinton CDP, New Alexandria Village, or Richmond Village, it's up to us later to figure out which of the mid cities we actually went through.
>
> **[5:35](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=335)** In the very end line 39, I return the dataset possible routes.
>
> **[5:41](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=341)** Again, the interesting thing about this particular solution is that it involves no flow control statements whatsoever.
>
> **[5:49](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=349)** It's only done by subsetting out data, merging it together and searching for a possible solution.
>
> **[5:56](https://www.linkedin.com/learning/r-code-challenges-data-science/solution-find-the-missing-city?u=76281980&t=356)** This is the beauty of R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (3), hit (1), [[SQL]] (1)
> **Env Vars:** cdp (5), dist (1), sql (1)
> **CLI Commands:** find (5)
> **UI Navigation:** go to (1), click on (1)
> **Code Identifiers:** onlystarts (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=0)** - [Mark] Congratulations on completing this course.
>
> **[0:04](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=4)** The R programming language encourages a novel way to think about solving large data challenges.
>
> **[0:10](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=10)** You can apply standard programming constructs with R, but if you strive to think like an R programmer, you'll find your solutions will run faster and be more succinct and understandable by your peers.
>
> **[0:24](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=24)** This course provided a series of challenges to improve your knowledge of the R programming language.
>
> **[0:30](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=30)** Working through these solutions hopefully provided you with new insights on programming.
>
> **[0:36](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=36)** I encourage you to browse the extensive collection of courses available in this library.
>
> **[0:40](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=40)** You'll find courses on statistics, visualization, and data analysis, all using the R programming language.
>
> **[0:49](https://www.linkedin.com/learning/r-code-challenges-data-science/next-steps?u=76281980&t=49)** I look forward to your comments both in this course and in the general LinkedIn community.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Programming]] (5), data (2), [[Statistics]] (1), [[LinkedIn]] (1)
> **CLI Commands:** find (2)
> **Speakers:** - [mark] (1)


## Instructor

- [[Mark Niemann-Ross]]

## Skills Covered

- R (Programming Language)
- Data Science

## Path Context

### In [[Getting Started with R for Data Science]]
← [[R for Data Science- Analysis and Visualization]] | **4 of 4**

### In [[Advance Your Skills in R]]
← [[R for Data Science- Analysis and Visualization]] | **4 of 8** | [[Learning the R Tidyverse]] →

## Appears In

- [[Getting Started with R for Data Science]]
- [[Advance Your Skills in R]]

## Related Courses

_Courses sharing skills:_

- [[Advanced SQL for Data Science- Time Series]] — Data Science
- [[Lessons from Data Scientists]] — Data Science
- [[Big Data in the Age of AI]] — Data Science
- [[A Day In The Life Of A Data Scientist]] — Data Science
- [[Data Science for Java Developers]] — Data Science

---

[↑ Back to top](#)