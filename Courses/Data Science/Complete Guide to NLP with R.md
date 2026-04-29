---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: complete-guide-to-nlp-with-r
url: "https://www.linkedin.com/learning/complete-guide-to-nlp-with-r"
duration_minutes: 304
duration: 5h 4m
level: Advanced
updated: 8/1/2024
learners: 10056
skills:
  - R (Programming Language)
  - Artificial Intelligence (AI)
  - Natural Language Processing (NLP)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFLD7mdGLaSfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722010134160?e=2147483647&amp;v=beta&amp;t=sRHBezRhvt01iGAc-5GnbR9a6qBcW2Q5-NYeykUGc7g"
linkedin_topic: Data Science
learning_paths:
  - '[[Moving from Data Scientist to Data Analyst]]'
prev_courses:
  - '[[Python- Working with Predictive Analytics]]'
next_courses:
  - '[[Advanced Tableau Desktop]]'
path_nav: '[{"path":"Moving from Data Scientist to Data Analyst","position":9,"total":10,"prev":"Python- Working with Predictive Analytics","next":"Advanced Tableau Desktop"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/r-programming-language
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Complete%20Guide%20to%20NLP%20with%20R.md)

![Complete Guide to NLP with R](https://media.licdn.com/dms/image/v2/D560DAQFLD7mdGLaSfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722010134160?e=2147483647&amp;v=beta&amp;t=sRHBezRhvt01iGAc-5GnbR9a6qBcW2Q5-NYeykUGc7g)

# Complete Guide to NLP with R

> Natural Language Processing is to words as Computer Vision is to pictures! Learn NLP with the R programming language. In this course, experienced technologist Mark Niemann-Ross shows you how to use the R programming language to implement natural language processing algorithms. R is uniquely adept at manipulating matrices and producing statistics, both of which are core to NLP. Learn about framewor

> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r) | 5h 4m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Up and Running with tm]]** (4 videos)
- **[[#3. 2. Corpora and Sources]]** (5 videos)
- **[[#4. 3. Working with NLP Metadata]]** (3 videos)
- **[[#5. 4. Preprocessing Text in Preparation for NLP]]** (7 videos)
- **[[#6. 5. Create Structured Data]]** (4 videos)
- **[[#7. 6. Apply Statistics to Text]]** (3 videos)
- **[[#8. 7. Sentiment Analysis]]** (4 videos)
- **[[#9. 8. Visualizing Natural Language Processing]]** (3 videos)
- **[[#10. 9. Conclusion]]** (1 videos)
- **[[#11. 10. Introduction to NLP Tidytext R]]** (2 videos)
- **[[#12. 11. Use of Tidytext for NLP]]** (9 videos)
- **[[#13. 12. Conclusion]]** (1 videos)
- **[[#14. 13. Introduction to NLP with Quanteda R]]** (2 videos)
- **[[#15. 14. Getting Started with Quanteda]]** (2 videos)
- **[[#16. 15. Understanding Corpora]]** (5 videos)
- **[[#17. 16. Understanding Tokens]]** (4 videos)
- **[[#18. 17. Understanding Document-Feature Matrix (DFM)]]** (3 videos)
- **[[#19. 18. Analysis and Visualization]]** (6 videos)
- **[[#20. 19. Conclusion]]** (1 videos)
- **[[#21. 20. Capstone Project]]** (2 videos)

### 1. Introduction

#### Welcome to natural language processing with R
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=1)** - [Mark] There is an astounding amount of information in the world, with more being created every minute.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=9)** Much of that information is stored as unstructured human language.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=14)** For example, social media users alone account for at least 500,000 sentences every minute.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=22)** That's more information than any one person can read, much less research or draw conclusions from.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=29)** Here's where natural language processing can help.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=33)** By teaching a computer to recognize parts of human language, we can use it to give us insights and summaries of the obvious, or hiddenm meaning, behind the words.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=43)** Natural language processing, put simply, is using computers to perform research on human languages.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=52)** That isn't to say NLP will teach computers to understand human languages, only that they might be able to make observations about those languages.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=62)** Welcome to Introduction to Natural Language Processing using R.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=66)** In this course, we'll use the R programming language to implement natural language processing algorithms.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=73)** R is uniquely adept at manipulating matrices and producing statistics, both of which are core to NLP.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=83)** I'm Mark Neimann-Ross, and I'm excited to travel with you on this journey.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=87)** So let's get started with natural language processing using R.

> [!info]- Semantic Content
>
> **Code Keywords:** from. (1), let (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [mark] (1)

#### Skills and tools you need to be successful in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=1)** - [Instructor] This course on natural language processing requires knowledge of the R programming language.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=7)** This is decidedly not a beginner course.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=11)** I assume you already have experience with programming in R.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=15)** Before you start, ask yourself these questions.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=18)** Do you understand how to create and use a vector in R?
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=24)** Do you understand how to create a function in R?
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=27)** Are you familiar with installing and linking an R package?
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=33)** Can you run an R program and debug any errors?
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=37)** These are simple tasks, but if you can answer yes, then you have the rudimentary knowledge of R required to get you through this class.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=46)** If you aren't sure about these concepts, you might want to look at one of the beginning R courses in this library.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=52)** Another alternative is to take the LinkedIn Skills Assessment Test, you'll find it via your profile, under skills.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=63)** Go ahead and take the test.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=64)** If you score in the top 30%, you're good to go.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=69)** If you're still unsure, go ahead and dive in.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=72)** When you encounter a concept you're unfamiliar with, take time to research the answer.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=78)** Experience is one of the best teachers, so don't be afraid to get started, you may pleasantly surprise yourself.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=85)** Programming natural language processing can be done with a regular text editor but it's going to be a painful process.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=93)** To perform NLP efficiently requires an integrated development environment such as R Studio, Visual Studio Code, or R Commander.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=104)** These IDEs will help you write efficient code and avoid mistakes.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=109)** Amazingly, all of them have no cost options.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=113)** In this course, I'll be using R Studio by Posit.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=117)** It's popular, but by no means the only option available.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=121)** I have also used Visual Studio Code and dabbled with several other products.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=127)** Whatever IDE you choose will be fine.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=130)** And of course, if you are unhappy with the IDE you are using at the start of this course, simply pause the video and choose another.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=138)** We'll be happy to wait for you to catch up and get settled.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), nlp (1)
> **Code Keywords:** function (1), class. (1)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Up and Running with tm

#### What is tm and why do you need it?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=1)** - [Instructor] R is an excellent programming language for statistics and matrix manipulation.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=7)** Given a table or matrix where data is organized, R can return a wealth of insights and visualizations.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=15)** However, data is rarely stored in clean tables with well-ordered rows and columns.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=22)** Data is messy and requires cleaning, often referred to as data wrangling.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=28)** Human language is a prime example of messy data.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=32)** Concepts aren't tagged, context is fluid, there are no standardized rules, and absolutely no reliable indicators to help a computer understand what is being said and how to separate the information from the presentation.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=47)** This is where natural language processing comes in.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=51)** Natural language processing is a collection of tools and techniques to convert human language into a format useful to computers.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=60)** If you wanted to, you could do this by hand but it would be painful.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=65)** Instead, it's easier to use a framework.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=68)** In this course, we'll use a package called Tm, short for Text Mining.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=75)** Tm is a standard R package.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=78)** To use it, you'll need to install it in your copy of R.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=82)** Like all R packages, once you've installed Tm you don't need to install it again.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=88)** When you want to use features of this package, you can link it with the library command.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=94)** Tm requires an additional package called NLP, a package that provides infrastructure for natural language processing.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=104)** You may notice this happening when you install Tm but you don't have to learn anymore about that particular package.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=111)** When TM is loaded and linked, you can list the contents.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=115)** This confirms you have successfully loaded the package.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=120)** For documentation on the Tm package, use the help command with package=tm.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=127)** As you'll see, Tm has quite a few functions.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=130)** In the next few chapters, we'll break Tm down into bite size chunks.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1), short for (1)
> **Prerequisites:** install (3), you'll need (1)
> **Env Vars:** nlp (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Real-world NLP with tm
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=1)** - [Instructor] As part of the introduction to a natural language processing with TM, I'd like to show you three instances of how to do natural language processing.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=11)** First, we'll be with TM and Base R.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=14)** The second one will be Quanteda which is a package for natural language processing in R.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=20)** And a third will be Tidy Text which is another package for doing natural language processing in R.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=26)** Let's start with Base R and TM.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=30)** One heads up, you'll want to make sure that your current working directory shows the poetry folder and I've illustrated this in the lower-right hand corner of the screen.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=41)** You can see towards the bottom that there is a poetry folder.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=46)** You can set your current working directory under the more menu.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=50)** Move yourself to the folder that shows poetry, just like I've done here, and then set this as the working directory.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=60)** Now, the task that I have set for myself is to find out the most popular words used in a collection of poetry.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=70)** I've downloaded various poems from Gutenberg, and I've stored them into the poetry folder in the exercise files.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=79)** In this instance, I'm going to use Base R with TM.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=84)** Let's start by bringing in the TM library.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=86)** I do that in line 11.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=88)** I've already installed packages, TM, so I don't need to do that.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=95)** Starting in line 13, what I've said here is I'm going to create a vector.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=101)** It's called Top Poetry Terms and into it, I am going to store the result of a number of functions.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=109)** In line 13, I've created a corpus directory source and the directory source points to a directory called poetry.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=119)** Now I'll explain more about corpuses and directory sources in following sessions.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=125)** For right now, all you need to know is corpus is a special text-mining object.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=130)** At the end of line 13 which actually continues on line 14, you'll see a pipe forward.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=139)** And this pipe forward is new in R.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=143)** It's very similar to the magrittr pipe symbol which is percent greater than percent, but in this case, pipe forward is native to R, so I'm going to go ahead and use that.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=154)** What it says is take the results of the corpus operation and pass it to the document term matrix operation, and in this case, it's going to create a document term matrix for me, and again, I'll explain what document term matrices are in a future session.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=173)** Again, on line 18, you'll see that I am pipe forwarding into line 19 which is remove sparse terms.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=181)** Document term matrix is a sparse matrix and so many of the spaces in the matrix are vacant, and we will remove those.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=192)** I pipe that forward into line 20 which says convert it from a sparse matrix to a regular matrix.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=200)** Then in line 21, I ask R to give me the sums of all of the columns.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=207)** Now, what's important here to realize is that this matrix is a collection of a number of rows.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=214)** Each row identifies the document that we're talking about, and each column identifies a term or a word.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=223)** So the spaces in the matrix are the number of times that a word appears in a particular document.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=230)** When I do column sums, what I'll return is the number of times that a particular term appears in the entire corpus which is a collection of documents.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=241)** In line 22, I've said sort this with decreasing equals true, so I've got the most frequent terms at the very top.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=249)** And then line 23 says, just give me the top 10.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=254)** I'm going to put my cursor in line 13.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=257)** I'll click on run and we give it a minute and our returns with a top poetry terms, and you'll see that that's appeared in the top-right-hand corner in the environment.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=270)** On line 25, I'm going to run top poetry terms and what that does is return the top poetry terms, like, one, now, will, now, project, see, love, may, upon.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=284)** Each term is accompanied by the number of times it appears in the corpus.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=290)** So, like appears 3,057 times.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=294)** One appears 2,802 times.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=299)** Now I have the most popular words used in this collection of poetry, and I've done this with Base R with TM.
>
> **[5:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=307)** Next, we'll accomplish the exact same task, but we'll use the Quanteda package.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6)
> **Code Keywords:** let (2), case, (2), pass (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** just like (1), similar to (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### Real-world NLP with quanteda
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=1)** - [Lecturer] As an introduction to natural language processing, I'm showing how to do a task with three different tools.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=8)** One of them is Base R with the text mining package.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=12)** One of them is Quanteda, also a text mining package for R, and the third is going to be with Tidytext which again is text mining with R.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=23)** In this session, let's talk about Quanteda.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=25)** A note, you'll need to make sure to set your working directory so that you can find the poetry folder.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=33)** Now, let's start with Quanteda.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=35)** Quanteda is a package.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=36)** So of course, you'll need to install it.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=38)** I've already done this.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=40)** And you'll also need the readtext package.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=43)** In line 15 and 16, I bring both of those packages in with a library command.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=50)** And then in line 19, I've set up a series of commands that will produce the top poetry features.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=57)** And in this case, our task is to find the top 10 words being used in a collection of poetry.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=65)** That's what lines 19 through 25 will accomplish.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=68)** Let's take a look at what's actually happening.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=72)** In line 19, I've created top poetry features, which is a vector, that will contain the top 10 features or words in this collection of poetry.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=83)** In line 19, I've also used the readtext command to read in all of the text files in the poetry directory.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=92)** At the end of line 19, you can see that I've used the pipe forward command which is new to R and allows me to send the contents of one function to the next, and that's exactly what I do.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=104)** I take all of the contents of the poetry files and send it to the corpus command.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=111)** The corpus command is a Quanteda function that creates a corpus, and a corpus is nothing more than a collection of documents.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=120)** I send that corpus then to tokens in line 21 which breaks each document up into a series of what Quanteda calls features, what most of the rest of us call words.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=135)** In this case, you'll notice that I'm removing all of the numbers and the punctuation.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=140)** I then send this to line 22 where I also remove something called stop words and we'll discuss stop words in a later session.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=150)** In line 23, I convert all of the tokens to lowercase.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=155)** And then in line 24, I create a document feature matrix, DFM for short.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=161)** A document feature matrix is nothing more than a matrix where all of the rows are labeled with the names of documents.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=169)** All of the columns are labeled with the names of features or words.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=175)** Each cell in the matrix contains the frequency of the terms in each document.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=181)** Line 25 is top features, and this is a Quanteda command that gives me the top features in the document feature matrix.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=190)** I'm going to select line 19 and then run it.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=195)** We give Quanteda a minute or two to think about this and you'll see that Quanteda has returned top poetry features, and that's evidenced in the upper right hand corner in the environment pane.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=207)** On line 27, I can run top poetry features and inspect its contents.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=213)** Now you'll see that Quanteda has returned SG and ST, and this is an artifact of something that Quanteda does.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=222)** The rest of the terms are identical to the terms returned by Base R with TM.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=229)** As a side note, for those of you who are not familiar with the pipe forward command, I've included in lines 30 through 42 code that does exactly the same but does not use pipe forward.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=245)** If you need to learn about pipe forward, you can compare these two sets of code and see how they look and work in a similar fashion.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), function (2), this. (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** dfm (1)
> **Speakers:** - [lecturer] (1)

#### Real-world NLP with tidytext
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=1)** - [Instructor] In this third introductory file, I'm going to show you how to accomplish our task of finding the most popular words in a collection of poetry, and we're going to use Tidy Text to find that answer.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=16)** In previous sessions, I used base R with the text mining package, or tm.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=21)** Then I used Quantita.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=23)** Now, I'm going to show the same task using Tidy Text.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=27)** Again, a note, you'll want to make sure that your home directory points to the exercise files, just like I've shown in the lower right-hand corner.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=36)** Let's begin.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=38)** In line 11 and 12, I activate the Tidyverse and Tidy Text packages.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=45)** Then in line 14, I've set up code that will accomplish our task.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=50)** In line 14, you can see that I'm using list.files with a path to the poetry folder, and I've only asked for text files.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=61)** I'm also asking for full names, which will give me the complete path name, including the directory.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=67)** At the end of line 14, which actually overflows into line 15, I'm using the standard Magrittr greater than, or pipe symbol, which is percent greater than percent.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=80)** In line 16, I use MAP df, which applies a function across a series of files.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=88)** In this case, the files are piped from line 14 into line 16.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=93)** It's just a collection of all of the files in the poetry folder, and I've said, create a data frame where you read in all of those files.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=103)** In line 17, tidy text provides the unnest tokens function.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=110)** And what this will do is break all of those documents down into individual words.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=117)** In keeping with the tidy verse mandate unnest provides one word per row.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=125)** In line 18, I used a filter command to remove any numbers.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=130)** Unnest in line 17 automatically removes all of the punctuation.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=136)** In line 19, I use anti join stop words, and this removes all stop words, which we will talk about in a future session.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=145)** Finally, in line 20, I ask for count, which gives me the count of all unique words in that file.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=154)** And then on line 21, I ask for the top 10 instances.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=158)** Let's go ahead and run that.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=160)** I'll select line 14 and hit run, and tidy text comes back, and if I open up our console, you can see that tidy text has provided us with the top 10 words used in this poetry collection.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=177)** If you compare this to the original example, you'll see that these words are very similar, except for sg.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=184)** So this is how tidy text would accomplish our task.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=188)** Again, we've talked about base R with TM, and Quantita, and then finally this example with Tidy Text.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=197)** In future sessions, we'll talk about how these actually work some of the concepts involved, and how to implement them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), case, (1), finally, (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** just like (1), compare this to (1)
> **Env Vars:** map (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Corpora and Sources

#### Understanding corpora and sources
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=1)** - [Instructor] Natural language processing revolves around several data objects, corpus, documents, tokens, and DTMs or document-token matrices.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=12)** A corpus is a collection of documents, and those documents come from various sources.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=18)** The tm package provides for the import of many sources, and let's take a minute to examine how sources are brought into corpora.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=28)** A corpus is an R object much like a data frame or a list, it contains documents in a consistent structure that simplifies manipulating and performing research on the text.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=42)** Think of a corpus like an egg carton, the eggs are documents and the egg carton is a corpus.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=50)** When eggs are placed in an egg carton, it is easy to confirm their shape, size, and condition.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=56)** When they're loose on the countertop, it is more difficult to individually assess each egg, using a corpus to contain text is the same thing.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=66)** When contained in a corpus, it is easier to confirm a document's size, content, and format.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=74)** With the tm package, different corpora are included and can also be created with plugin packages.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=82)** Here is a table showing their basic capabilities and how they are installed into tm.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=89)** I've included this table with the example files.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=93)** Natural language processing can import several types of documents with special functions called sources.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=100)** Different sources are used for different types of documents, tm provides the command getSources to provide a list of available sources.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=112)** Here's a table briefly describing these document sources and the corpora able to use them.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=118)** This table is also included in the example files for this chapter.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=123)** Each of these sources are used to describe different types of documents.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=128)** In the next lessons, we will dive deeper into each of these sources and corpora.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** getsources (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Examining corpora
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=1)** - Let's talk about corpora, the plural of corpus.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=5)** There are different types of corpus available with the TM library.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=11)** In most cases, you'll use simple corpus but it's useful to know of the other types in case you either run into them or you find that you need their capabilities.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=22)** Let's start in line one where I bring in the text mining library, and then in line five I'm going to use the corpus command.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=31)** I've created a directory source pointing to a directory called poetry and I'm only selecting the text files.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=39)** Now, direct resource is a special command that we'll cover in the next session on sources.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=46)** For right now what you need to know is that direct resource pulls in files from a directory.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=53)** The corpus command is interesting because TM provides it as a shortcut to selecting whatever is the appropriate corpus type.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=63)** In most cases, it will produce a simple corpus.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=66)** In some cases it will produce other types.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=69)** Let's go ahead and run line five.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=72)** I'm going to select it and then click on run and you can see in the upper right hand corner I have a new corpus.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=79)** It's a large simple corpus.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=83)** In line nine, I can look at the structure of that new corpus.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=88)** I'll open up the console a bit so you can see what it produced.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=94)** The classes are simple corpus, which is a subtype of corpus.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=98)** There is a content element in the corpus and you can see there that there's actual readable content.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=105)** There are attributes which are the names of each of the documents included in this corpus and some metadata and we'll talk about metadata in a minute.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=115)** If I select the class of new corpus, you'll see that it returns simple corpus, which is a subtype of corpus.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=124)** Let's move on to a Vcorpus and this is called a volatile corpus.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=129)** This only exists in memory and it has a few more capabilities than a simple corpus.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=136)** To start, I'm going to clear my console and then in line 15, I'm going to list the files in the current directory and I'll use that again in a second.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=147)** In line 17, I create a new Vcorpus and note that instead of just simply asking for a corpus I've asked for a Vcorpus.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=157)** In the upper right hand corner you can see that I now have a new Vcorpus which is a large Vcorpus, different than a large simple corpus, and we can take a look at what that corpus looks like.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=173)** In the console, I'll type in class new Vcorpus and you can see that it now says it's a Vcorpus which is a subtype of corpus.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=184)** Now, where is a Vcorpus stored?
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=187)** In line 22, I re-list the contents of the current directory and you'll notice that there is no new Vcorpus listed.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=200)** Instead, we need to list the objects in memory which is what I've done in line 25 and there now you can see both our new corpus and our new Vcorpus and new Vcorpus is stored in volatile memory.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=215)** Let's move on and talk a bit more about a simple corpus.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=219)** These are optimized for current usage.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=222)** You'll most often be using these type of corpuses.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=226)** When you create a simple corpus the punctuation is automatically stripped out.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=231)** Now, there's a note.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=233)** You can only create a simple corpus from a data frame, a directory, or a vector source.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=239)** You'll see that there are other sources that we can use to create corpora.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=246)** Let's run line 31, which will create a new simple corpus and you'll see that it looks very much like a new corpus.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=257)** In fact, there's no difference because the original new corpus created by the corpus command was a simple corpus itself.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=267)** In line 34, I can run a summary of new corpus and you'll see that it contains a series of plain text documents.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=276)** Finally, let's talk about Pcorpus which is a permanent corpus.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=280)** It's saved out to your hard drive, so it's not limited by the amount of volatile memory on your computer.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=289)** Now, this sounds great.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=290)** You might even think that if you write it out to a hard drive there's a file there that you can recall in future sessions.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=299)** However, the process for reopening one of these files is somewhat byzantine and difficult, so you may find that it's just easier to recreate the Pcorpus each time you need it.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=311)** That said, let's go through how to create a Pcorpus.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=316)** You'll note in line 42 that I call up a library file hash.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=322)** If you haven't already installed file hash, you'll need to do that as instructed in line 41.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=329)** Simply remove the hash mark and run install packages file hash for this package, Pcorpus doesn't require file hash.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=340)** It suggests file hash, but I've found that it's essential when you're running Pcorpus.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=347)** In this case, I'll run line 42, and then in line 43 I've set up for a Pcorpus.
>
> **[5:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=355)** I'll run that as well.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=356)** Line 43 and 44 should look very similar with the change of Pcorpus instead of corpus, simple corpus or Vcorpus.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=365)** Line 45 and 46 do something called DB control where I list the DB name, which is now my Pcorpus.rds and the DB type, which is rds.
>
> **[6:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=379)** You'll see a note down below where it says database mycorpus.rds already exists, and that's okay, it's just a warning.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=388)** In 48, we can list files on the hard drive and there it is, myPcorpus.rds.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=396)** If we were to list this new Pcorpus you'll find it looks very similar to all of the other corpora that we have created in previous steps, so again, TM provides us with several different corpora types, simple corpus, Vcorpus, Pcorpus.
>
> **[6:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=416)** In most cases, you'll use the corpus command which will give you either a simple corpus or a Vcorpus.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), type. (1), finally, (1), require (1), case, (1)
> **Definitions:** is a  (8), is called (1)
> **CLI Commands:** find (3)
> **Prerequisites:** you'll need (1), install (1), set up (1)
> **UI Navigation:** click on (1), select the (1)
> **Warnings:** note that (1), warning (1)
> **Code Identifiers:** mypcorpus (1)
> **Cross-References:** in the next (1)

#### Examining sources
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=1)** - [Instructor] As we've discussed, sources are a way to bring in documents into Corpora and there are several different types of sources.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=12)** Let's take a look at them.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=14)** In line one, I've brought in the text mining library and I'm also going to bring in the read text library 'cause I'll need it here in a minute.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=24)** Before we get too far, you can always pull up a list of sources available to you with the text mining get Sources command as shown in line five.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=37)** When I run that command, you can see that the console has produced a list of different sources dataframe source, directory source, URI source, vectorSource, XMLSource, and zip source.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=49)** We'll cover each of those.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=51)** Let's start with dataframe source.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=54)** In line 10, I create a dataframe, read text, reads a bunch of files and produces a dataframe with those files in it.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=64)** We'll run that and you'll see that I now have a dataframe, which is a dataframe of all of the poetry files.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=72)** Let's take a quick look at that.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=74)** I have two columns.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=75)** One of them is the document ID, in this case, the file name.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=80)** The second column is the text of that particular file.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=84)** Now it's important that each document ID is unique and in line 15 through 19 I've created some code that will confirm that and you can see the result is document_ID is unique, so I'm good to go.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=99)** Now I've done all of that to create aCorpus and this happens in line 21.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=104)** I'm creating aCorpus .
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=107)** I'm using the corpus command, which you'll remember creates the most efficient corpus for my needs and I'm using DataFrameSource with an argument of a dataframe, so I'm using the contents of a dataframe to create aCorpus and we run that and you'll see that I now have aCorpus , which turns out to be a large simple corpus and simple corpus was selected for us by the corpus command.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=135)** If we summary the aCorpus , you'll see that it contains all of the files, a class, and a mode.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=143)** So dataframe source is pretty upfront and clear.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=146)** Next, let's look at directory source and that happens in line 27.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=152)** In this case, I'm going to create newCorpus which will be a corpus containing the contents of a directory, DirSource.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=160)** The directory is poetry and the pattern is *.text.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=165)** When I run that, DirSource searches through the poetry directory, pulls in all the text files and gives us a newCorpus, and in this case you'll see that newCorpus is identical to aCorpus .
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=179)** If I summarize newCorpus, you'll see that I've received the exact same listing as I received earlier with aCorpus .
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=187)** Now in line 34, I use URISource and you'll notice that URISource accepts the use of a series of URLs or universal resource indicators.
>
> **[3:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=203)** These are Gutenberg files, they're text files, and when I run this, I'm going to overwrite newCorpus.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=210)** The URISource command goes out to the internet for each URL that it has, pulls in that file, and then builds aCorpus out of it.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=221)** You'll see that newCorpus is now a large Vcorpus with two elements instead of 26, 2 elements because it only pulled in two files.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=232)** If we summarize newCorpus, you'll see that we only have two files, 573117-0 and 41707-0.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=243)** Next is vectorSource.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=245)** VectorSource allows us to create aCorpus from a simple text vector.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=251)** I create that in line 41 and then in line 43, I give it names.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=256)** Let's take a quick look at vectorOfText and I'll do that down in the console and you'll see that I have two elements, first line, second line.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=267)** In most cases, the actual contents would be an entire document.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=271)** I've only provided a sentence for brevity.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=274)** In line 45, I use the Vcorpus command with a vectorSource using the vectorOfText so aCorpus is now going to change and you'll see that in the upper right-hand corner, aCorpus has changed to a list of two instead of an actual corpus.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=294)** If I go down to the console and I select class of aCorpus, the class function correctly identifies aCorpus as a VCorpus instead of a list of two.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=308)** In line 49, I'll run a summary of aCorpus and you can see that in fact there are two documents in this corpus.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=316)** Next is XMLSource, and in many cases you'll find a lot of documents in XML format on the internet.
>
> **[5:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=326)** In order to use XMLSources, you'll need to bring in both the XML library and the XML two library.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=334)** Then you need to set up an XML reader, which is what I've done from line 56 through 71 and I won't get into this.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=343)** Suffice to say it brings in XML in a format that the corpus command can read.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=350)** The actual business happens down in line 74.
>
> **[5:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=353)** I'm creating an XMLCorpus using corpus with XMLSource.
>
> **[6:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=360)** I've identified a source of XML data, in this case, [nasa.gov](https://nasa.gov) and I've said the reader will be my XML reader which I just defined earlier.
>
> **[6:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=372)** Let's run line 74, and you can see that I now have an XMLCorpus, which is a list of one because I only gave it one document to read.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=385)** In 77, I summarized that document and you can see that I have a various list of documents inside my new XMLCorpus.
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=394)** Finally, we have a zipsource which, no surprise, brings in zip archives.
>
> **[6:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=401)** It's fairly simple.
>
> **[6:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=402)** In line 81, I create a corpus called aZipCorpus and I use zip source and point it at a zip file called archive.zip.
>
> **[6:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=413)** When I run that, it creates a zip corpus which you'll see in the upper right hand corner.
>
> **[6:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=419)** It's a large Vcorpus with 26 elements.
>
> **[7:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=422)** In line 83, I can run a summary of that and you can see that the contents of the archive.zip file happen to be a archived version of the poetry folder.
>
> **[7:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=435)** An important note is that all files must be at the root level of an archive.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=440)** You cannot embed a folder with files in it.
>
> **[7:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=444)** Zip source doesn't seem to recurse through folders, so these are sources that you can use to bring in different type of documents.

> [!info]- Semantic Content
>
> **Code Identifiers:** acorpus (14), newcorpus (7), vectorsource (3), vectoroftext (2), azipcorpus (1)
> **Code Keywords:** let (6), case, (3), class, (1), this, (1), function (1)
> **Env Vars:** xml (7), uri (1), url (1)
> **Exercise Files:** zip file (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1), set up (1)
> **CLI Commands:** find (1)
> **URLs:** [nasa.gov](https://nasa.gov) (1)

#### Custom sources
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=1)** - The authors of tm knew there were more document formats than they could possibly support.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=7)** As an answer to this problem, they provided a way for developers to create their own sources and add them to tm as plug-in packages.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=18)** In this lesson, let's take a look at some of these additional sources for document import.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=23)** None of these additional sources can be used with simple corpus.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=28)** Instead, they all use V Corpus, E Corpus or others.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=33)** And let's take a look at these additional sources.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=36)** Mbox Source provides a way to directly read mailboxes in Mbox format.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=44)** It's added by installing tm.plugin.mail.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=49)** This plugin also adds several functions for cleaning mail messages.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=55)** AlcesteSource is added by installing tm.plugin.alceste and provides support for the Alceste format.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=64)** EuropresseSource is added by installing tm.plugin.europresse and reads documents coming from Europresse.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=75)** LexusNexusSource is added by installing tm.plugin.LexusNexus and provides a way to directly read and text mine LexusNexus documents.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=87)** If one of the above sources doesn't work for the document type you are researching you can write your own.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=95)** This isn't an advanced task, but documented as part of the tm documentation.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=100)** Search for extensions, how to handle custom file formats for more details.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=107)** You may also find it helpful to follow the examples provided by other developers.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=113)** This is easiest if you go to the CRAN page for tm then scroll down to the package source.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=122)** This provides the entire source code for tm and all included sources.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=126)** In the R directory, you'll find source R which illustrates how to write your own custom source.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), import. (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** cran (1)
> **Exercise Files:** source code (1)
> **Speakers:** - the (1)

#### Combining and subsetting corpora
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=1)** - As you're working with Corpora, you're sometimes going to need to filter them or combine them together.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=8)** And TM provides ways for you to do this.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=12)** In order to present this, I'll need a couple of Corpora, and in line four, I create simpleCorp, and in line five, I create newVCorpus.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=23)** And you'll notice that one is a VCorpus, and one is a simpleCorpus.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=29)** Let's move on and look at how to combine two Corpora into one.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=35)** To do this, you use the C command, the standard combined command that you've used so many times in Basar.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=43)** And you'll see that set up in line 13.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=45)** Let's go ahead and run that, and what you'll notice is, in the upper right hand corner, I now have combinedCorpora, which is a large VCorpus, it's 97 elements, which is 26 plus 71.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=61)** That all makes sense.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=63)** I would like to point out something, in line 14, I've swapped simpleCorpus and newVCorpus.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=70)** And now, watch what happens when I run that.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=73)** You'll note that combinedCorpora has turned into a large list instead of a corpus.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=82)** Now, the contents are pretty much the same in either way, but be aware that when you use combine, it will use the class of the first element for the resulting class.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=97)** simpleCorpus, at least in our studio, at some points, refers to a list instead of a corpus.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=105)** I can confirm that this corpus is okay by using class, and then I'll enter the name combinedCorpora.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=114)** You'll see that it's a list.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=116)** If I run line 13 again, you'll see that I still have 97 elements, and if I go down below and run class(combinedCorpora), you'll see that I now have a VCorpus.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=131)** In either case, you should be able to use this combinedCorpus in other Corpora-related type commands.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=139)** Next, let's talk about TM filter, which is text mining filter.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=144)** TM filter returns a corpus of documents matching a particular filter, and I've set this up in line 20.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=152)** I'm going to create a filteredCorpus, where each document must have the word will not.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=160)** And I'm going to filter the simpCorp, or simpleCorpus.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=166)** So, I'll run line 20, and you'll see that I have a new filteredCorpus line in the environment.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=175)** It's a large simpleCorpus, and it has 13 elements, which means that only 13 documents of the original simpCorp corpus had the words will not.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=189)** I can summarize that and receive a list of all of the documents that actually had the words will not in them.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=197)** Now, in your case, you can change the filter by changing line 21.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=202)** F-U-N, which of course means fun, 'cause this is fun, but it actually refers to function and the function follows.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=211)** In this case, I've used Grip L, which is a simple logic grip.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=215)** It returns true or false on whether a document contains the words will not.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=221)** In line 24, I've created TM index.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=225)** TM index is very similar to TM filter, but it produces the numbers of the documents.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=231)** And I can illustrate this in line 25, where I've used TM index on simpleCorpus with an identical function.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=240)** And it returns a series of indexes and trues or false.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=246)** In the console, you'll see that item 261 does not have will not, and item 262 also does not.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=256)** It's not until we get to item 847, that I've finally found the word will not.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=262)** I can use this logical return to filter out documents.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=267)** And you can see this in line 27.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=270)** I've produced a filteredCorpus from simpleCorpus, and I've given it a standard sub setting command to produce a yes or no result on whether a file should be included.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=285)** Now, let's go ahead and run line 27, and what you'll see is, filteredCorpus is still 13 elements.
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=292)** This is a longer method than TM filter, but in this case, you can use any true, false, or logical return to select which items will go into the new corpus.

> [!info]- Semantic Content
>
> **Code Identifiers:** simplecorpus (7), combinedcorpora (4), filteredcorpus (4), newvcorpus (2), simpcorp (2)
> **Code Keywords:** let (4), case, (4), function (3), this, (2), this. (1)
> **Definitions:** is a  (5), refers to (2), means that (1)
> **Warnings:** note that (1), be aware (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - as (1)


### 4. 3. Working with NLP Metadata

#### Working with document metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=1)** - [Instructor] The tm package for R provides a lot of different metadata options.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=7)** Metadata is information about the data, the content of the corpus that you're working with.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=15)** Metadata can include things like authors or the data publication or it can contain anything that you think is useful.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=26)** tm provides three different types of metadata and it can be a bit confusing as to what appears when and why you might want to use one or the other type of metadata.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=39)** Let's spend a couple of sessions talking about metadata, why it's important and how to use it effectively.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=47)** Now, to demonstrate metadata, of course, I'll need to bring in the tm library and I can do that in line one.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=55)** Before you go any further, it's important to check your working directory.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=60)** The working directory needs to point to a directory called poetry, and if you look in the lower right-hand corner you'll see what that directory looks like.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=69)** It's the exercise files.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=71)** I'm going to use RStudios set as working directory to set this as the current working directory.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=80)** Now, I can run line six to bring in a new VCorpus, which I'll use for demonstration purposes.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=88)** Once I've done that, let's take a quick look at the different type of metadata and I've outlined this in lines 10, 11, and 12.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=97)** I'll clear the console and then I'll select line 10 and run that line.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=103)** This is providing me with something called corpus level metadata.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=108)** And you can see that right now, it doesn't include very much.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=112)** In line 11, I ask for the local metadata.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=117)** The difference between these two is with the corpus metadata, the metadata is stored as part of the corpus.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=125)** So it could be things like who created this corpus or when they created it.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=131)** At local, information is stored at the document level, and let's take a quick look at that.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=137)** In this case, you can see that I have one set of local metadata for each document.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=144)** In this case, we're looking at poetry_9622.txt which is one of the poetry files in the poetry directory.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=153)** I don't have an author.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=155)** I do have a date stamp, which is the time that I actually imported it, and I have an ID, which is the poetry_9622.txt.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=165)** And we'll take a look at how to change that and update that in the second.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=169)** The third line line 12 pulls up something called indexed.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=175)** I'm going to clear the console and run line 12 and you'll see that I have a data frame with zero columns and 26 rows.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=187)** The indexed metadata is actually stored as a data frame.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=192)** You can add metadata to a corpus by simply inserting information into this data frame.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=199)** And again, we'll talk a bit more about that particular type of metadata.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=204)** One note, simple corpus, which is one of the many types of corpus provided by the tm package does not have local metadata, only indexed and corpus.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=220)** Now let's move on.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=222)** In line 17 and 18, we're going to create some corpus metadata.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=227)** Look at line 17, it's meta and then it declares what corpus we're working with.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=233)** In this case, new VCorpus.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=235)** The tag for the metadata is going to be mnrMeta and the type is going to be corpus.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=243)** In intuit, I'm putting, well, a random string called My Stuff.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=248)** We'll run that line.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=250)** And then let's take a look at the corpus data.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=254)** Now, you'll remember the bottom two lines, attribute class one corpus meta but the top two lines dollar sign mnrMeta, are set to My Stuff.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=266)** Well, that's obviously new and you can see exactly how that was placed into the corpus by line 17.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=274)** In line 22, we can create some local metadata and you'll see that it says meta, that's the command we're going to affect new VCorpus.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=286)** The tag is due date.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=288)** The type is local.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=291)** What we're going to put into it is a sequence of dates.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=295)** I'm using seq.date starting at 2023-01-13.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=303)** I'm going to set these due dates every week and the number of dates that I'm creating is equal to the length of this new VCorpus.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=314)** Let's run line 22.
>
> **[5:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=317)** And before we check all of this data, let's take another look at something else.
>
> **[5:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=322)** In line 26, I'm using the meta command again and you'll notice that I'm using bracket bracket one.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=331)** Bracket bracket of course, in R, refers to the content of an indexed object.
>
> **[5:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=336)** So I'm placing a metadata into the contents of the first object of new VCorpus.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=344)** The tag is going to be comment and the value is going to be great writing.
>
> **[5:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=350)** Let's run line 26.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=352)** Then we will run line 27 which does pretty much the same thing but in the second document, then I'll run line 28 which does the same thing but in the third document.
>
> **[6:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=365)** I'm going to clear the console.
>
> **[6:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=367)** And now let's take a look at line 30 which will show us all of this metadata we've added.
>
> **[6:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=375)** And it shows us this because we're not assigning anything.
>
> **[6:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=379)** So I've run line 30.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=381)** Let's scroll up to the top first of all.
>
> **[6:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=383)** Poetry_1020.txt is the first document and you'll note that at the bottom it says, Comment, "Great writing."
>
> **[6:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=394)** And that comes from line 26 of the code.
>
> **[6:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=397)** Likewise, in poetry_12031.txt, the comment is "another story."
>
> **[6:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=406)** In the third, you can see the due date has been added and changed but it also has a description that says, "A pirate story."
>
> **[6:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=418)** This comes from line 28.
>
> **[7:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=421)** Now getting back to these due dates, you'll notice that these are all new and were of course added by line 22 above.
>
> **[7:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=430)** These dates are all a sequence one week apart.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=434)** So that's local metadata.
>
> **[7:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=437)** And again, you can see that I asked for that when I ran line 30 where the type was local.
>
> **[7:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=444)** The third type of metadata we've been talking about is indexed metadata.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=449)** In line 34, I've said meta and the tag is random letter.
>
> **[7:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=455)** The type is indexed and into this particular tag, I'm going to place random letters.
>
> **[7:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=464)** I'm going to place the same number as the length of the new VCorpus.
>
> **[7:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=468)** Let's run line 34 and then use line 36 to examine the indexed metadata.
>
> **[7:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=476)** Well, no surprise, what you'll see here is 26 values.
>
> **[8:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=481)** The column is labeled random letter.
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=485)** And this actually is a data frame that's stored within new VCorpus.
>
> **[8:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=493)** So that's the three types of metadata we've been talking about.
>
> **[8:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=497)** Indexed, local, and corpus.
>
> **[8:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=500)** Let's take a look at how to actually use this metadata in a real world application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (3), else. (1)
> **File Paths:** poetry_9622.txt (2), poetry_1020.txt (1), poetry_12031.txt (1)
> **Definitions:** is a  (2), refers to (1)
> **Code Identifiers:** mnrmeta (2)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Make useful metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=1)** - [Host] We've identified three types of metadata, corpus, indexed, and local.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=8)** Let's take a look at how to use them.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=11)** I'm going to show you an example that will eventually get to line 40 of this exercise file, and I want to look at that line to tell you, where it is we're eventually going.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=22)** In line 40, I create something called newVCorpus, and I'm using a V corpus command.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=29)** Note that I'm using a data frame source and I'm importing the contents of a data frame.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=36)** The important point that we're going to demonstrate is that that data frame contains a document ID.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=43)** It contains content, but it also includes several columns, and those columns will be imported as additional metadata and we'll take a look at where that metadata shows up.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=57)** Now that you know where we're going, let's go all the way to the top of the exercise file.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=64)** Of course, we need to make the TM package available and I'll use the library command to do that.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=71)** I'm also going to use a command called read text, and that's in the read text package.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=77)** One important note here as you're doing this demonstration, check to make sure your working directory includes the poetry directory.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=85)** We'll need that here in a minute.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=88)** In line six, I set up a data directory variable, and in line seven, I create a file list, that contains a list of all of the files in that directory.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=100)** In line 10, I use the read text command to read each of those files into a data frame, and if we look at aDataframe, you can see we have two columns.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=113)** One is labeled doc ID and one is labeled text, and it's the actual text of the file that we have imported.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=122)** Let's continue.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=123)** In line 15, we begin the process of bringing in a bunch of metadata.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=129)** I'm going to use the stringr library.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=133)** Then in line 18, I use string match.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=138)** The string will come from aDataframe$text which we just looked at aDataframe and looked at the text column.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=147)** And the pattern I'm looking for is the word language, followed by a colon, followed by a space, and then one or more of anything, followed by a return.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=161)** When we run line 18, you can see that I now have language and if I click on that, you can see that language contains three things.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=171)** The actual string that it found, V1 identifies the complete string that it found.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=178)** V2 is the first part of that string.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=182)** And V3 is the second part of the string.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=186)** And if we go back and look at the code, the first part is in the first parenthesis.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=192)** The second part is in the second parenthesis.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=195)** Titles, which I'll run now, release date, which I'll also run, and authors, which I just ran, all follow the same logic.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=204)** They look through aDataframe$text for a specific string identified as title, release date, or author, and then pulls up the following value for me.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=216)** In line 31, I use a C bind to combine the original aDataframe with the new language, title, release, and author.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=226)** When I run that, we can take a look at aDataframe again, and you'll notice that I have new columns, one of them labeled language, one of them labeled title, one is the release, and one is the author.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=241)** Now look, we're back at line 40.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=244)** When I import that data frame into a VCorpus, which I'll do right now, new VCorpus will contain all of that extra information as metadata, and we can show that.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=258)** When I run line 43, you'll see that I'm requesting any indexed metadata.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=265)** If I scroll up to the top, you'll see that I now have a language, a title, the release date, and the author.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=275)** Remember that indexed is actually a data frame that's stored in the corpus.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=280)** If I clear the console and run line 44, well, none of that information appears as local information.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=290)** And again, if I look at the corpus, you can see that none of that information appears at the corpus level.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=296)** It's all stored as indexed information.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=299)** Now I can add corpus level information.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=302)** Look at line 48.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=304)** I'm using the meta command.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=306)** I've said the type as corpus, the tag is compiler, and into it, I've placed my name.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=312)** And if I run line 49, I can now see the contents of the corpus data and you can see that I've added a new tag called compiler.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=323)** Likewise, I can add local metadata.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=327)** The type is local.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=328)** The tag is assigned reader and I've asked for a random sample of three names.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=335)** When I run this and show the local metadata, you can see that we have assigned readers attached to each document as part of the local metadata.
>
> **[5:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=348)** So we've seen how to attach information to indexed metadata, corpus metadata, and local metadata.
>
> **[5:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=356)** In line 58, I save this VCorpus out for the next session.

> [!info]- Semantic Content
>
> **Code Identifiers:** adataframe (6), newvcorpus (1)
> **Code Keywords:** let (3), continue (1), match. (1), return. (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), scroll up (1)
> **Exercise Files:** exercise file (2)
> **Warnings:** note that (1), important note (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [host] (1)

#### Finding and filtering based on metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=1)** - [Instructor] We've just created a bunch of metadata and attached it to a corpus.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=6)** In this session, let's talk about how to find and filter parts of the corpus based on that metadata.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=14)** To do this, I'm going to use the library command to bring in the TM package, and I'm going to check to make sure that my current working directory is pointing the directory that contains poetry as well as my newVCorpus RDS.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=31)** In line five, I'll bring in the newVcorpus that we created in the previous session.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=39)** Now in many cases, I'll need only a part of the corpus that I'm working with.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=45)** The most obvious and easy way to do this is with base R'S standard sub setting, and I've demonstrated this in lines nine, 10, and 11.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=55)** I've selected line nine and I'm going to run it, and what you can see is that I have the first document of newVcorpus, actually the metadata for the first document.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=71)** In line 10, I'm going to select the author field of the first document of newVcorpus.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=80)** The author happens to be Amy Lowell, and you can see this in the console in the lower left hand corner.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=86)** Now let's also look at the indexed data while we're here, and in line 11 you can see that I've used the newVcorpus type indexed, and that pulls up again, the contents of a data frame that contains all of the indexed metadata that we attached in the previous session.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=107)** In line 16, it looks very much like line nine, but you'll notice I'm using double brackets instead of single brackets.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=117)** A double bracket will produce the contents of an indexed item versus the indexed item itself.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=124)** And this can be a little bit confusing until you actually dive in and use it.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=127)** Let's run line 16, and what you'll see is the metadata for that particular document.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=136)** Now, if I were to run line nine again, you can see that the information I receive is a bit different.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=144)** This is because double brackets show the contents or the first local document, a single bracket reverts to the indexed information.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=157)** Now in line 17, I can pull up one element of the metadata.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=162)** Sarah is the assigned reader, and you'll remember that we assigned that as local information, and in line 18 we can see all of the local information.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=172)** Now let's step through how to use metadata to actually filter out documents to get a subset of a newVcorpus.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=179)** In line 22, I'm going to create a logical vector called 'assigned to Sarah' and in to it, I'm going to use the meta command to find any local tags with assigned reader in the string Sarah.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=196)** And I could of course put a combine to produce a vector with multiple names instead of just one single name.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=204)** I'll select 22. I'll run it.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=207)** If we look at that vector, you'll see that it's a logical vector which just contains true false, true false, and what this is saying is the first document has been assigned to Sarah.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=220)** The second document has not been assigned to Sarah.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=224)** We can use this new vector to filter out a corpus, and in line 25 you can see that I'll be creating a filtered corpus, and it is a corpus produced by TM Underbar filter, which is a command in the TM package.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=241)** TM underbar filter will look inside of newVcorpus, and using a function.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=248)** FUN stands for function.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=251)** It will look for any metadata tags with a local type and a tag of assigned reader in Sarah, which is what we looked at previously.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=261)** When I run this, you'll notice in the upper right hand corner that I now have two corpuses.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=268)** One is called filtered, and the other one is called New corpus.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=273)** The new corpus, which is our original document, had 26 elements, filtered corpus has only 11 items, and that's because it's only the tags that have been assigned to Sarah.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=285)** We can prove that by looking at line 27.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=289)** I'll run that code, and you can see that we have a subset of text.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=294)** If we were to look at the local information, we'd see that the tag for that was Sarah.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=299)** In line 28, we can look at the local metadata with the tag of assigned reader in that filtered corpus, and what we'll see is that Sarah has in fact been assigned to all of those documents.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=312)** We can find out the title of those particular Corpus documents with line 29.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=319)** This demonstrates actually using metadata to filter out the contents of a corpus.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), function (2)
> **Code Identifiers:** newvcorpus (7)
> **Definitions:** is a  (3), is called (2), stands for (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** rds (1), fun (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Preprocessing Text in Preparation for NLP

#### Transformations
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=0)** - [Host] Part of natural language processing is performing statistics on documents.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=6)** It's important to perform those statistics on the important parts of the document and that's why natural language processing frameworks provide ways to transform the content.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=18)** This is things like removing white space or removing numbers or removing punctuation.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=23)** Let's take a look at a couple of the functions provided by the TM package for performing these kind of transformations and document cleanup.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=32)** As always, we need to bring in the library for TM and I've done that in line two, and then in line five, I'm creating a sample corpus.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=43)** We'll pull that from the directory called poetry, in the current working directory.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=48)** TM provides a convenient function for listing all of the current available transformations.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=54)** And not surprisingly, this function is called getTransformations and I'll run that in line eight.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=61)** You can see that TM provides, remove numbers, remove punctuation, remove words, stem document, and strip white space.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=70)** Let's start with strip white space, which seems pretty obvious, and actually it is.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=75)** In line 12, I'm going to pull up the contents of the first document in the corpus, and I'm going to scroll up to the top and point out a couple of things.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=86)** In line four, between the period and you, you'll notice that there are two spaces.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=94)** If I scroll down further into the document, you'll notice that like, on 47, there are several spaces at the very start of the line.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=105)** I'll clear that and then run line 15, which is strip those white spaces.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=110)** Now, when I scroll up to the top, you'll notice that in line four, there is only one space between the period and you, and further on down in the document, you'll notice that the poetry is now flushed to the left.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=123)** All of the extra spaces have been removed.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=126)** So strip white space behaves exactly the way you intend it to.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=131)** Let's take a look at the same example, but with removed numbers.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=135)** Line 19, I'll pull up the first document of the corpus.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=140)** Let's take a look at a couple of things.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=142)** Here, in line 13 and 14, there is a posting date and a release date with lots of numbers.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=149)** When I run line 22 and scroll back up to the top, you'll notice that those numbers are all gone.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=157)** Well, that's because we ran remove numbers on this particular document.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=161)** Finally, there's a way to remove punctuation.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=165)** I'll clear the console, run line 27, which gives us the contents of the first document of the first corpus.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=172)** Look at line six, where we've got www.[gutenberg.org](https://gutenberg.org).
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=179)** And further on down things like line 11, Author: Amy Lowell.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=184)** When I clear the console and run line 30, I'll scroll up to the top.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=189)** Now, you'll notice line six has no more periods and in this case it's somewhat of a problem, because www.[gutenberg.org](https://gutenberg.org) has been changed to www gutenberg org with no punctuation.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=204)** Likewise, in line 11, it's no longer Author: Amy Lowell, it's just simply Author, space, Amy, space, Lowell.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=213)** These are the very obvious transformations that TM provides.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=218)** Other packages provide nuances to these particular removed transformations, but in this case, this gives you a really clear picture of the kind of tools that are available to you immediately.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), finally, (1), case, (1)
> **UI Navigation:** scroll up (3), scroll down (1)
> **URLs:** [gutenberg.org](https://gutenberg.org) (2)
> **Definitions:** is called (1), is a  (1)
> **Code Identifiers:** gettransformations (1)
> **Analogies:** picture (1)
> **Speakers:** - [host] (1)

#### Stop words
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=1)** - [Instructor] In natural language processing, when we run statistics on documents, it's important to run those statistics on significant words in the document.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=10)** Stop words is a term or a phrase used to describe words that may not be all that useful, things like And and The and Too, words that are nice for humans, but when it comes down to analyzing the actual meaning of a document may not significantly add to our information and in fact may cloud our results.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=35)** So it's important to be able to remove those stop words and TM provides the stop words dictionary to do that.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=44)** Let's take a look at how it works.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=45)** In line three, I, of course, bring in the TM package using the library command.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=50)** Then in line six, I define a vector called myText and myText is simply a vector full of words.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=60)** I'm going to open this up a bit.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=61)** I'm going to clear the console.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=63)** And now in line 13, I'm going to use removeWords which is a transformation provided by the TM package.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=72)** I'm going to remove words from my text and the words that I'm going to remove are English stop words.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=80)** Let's run that and we can compare the results to the lines above in the code, 6, 7, 8, 9, 10, and 11.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=89)** What used to be stop words are nice words for humans is now stop words, nice words, humans.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=96)** They make sentences pleasant, read, sometimes, clarify.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=101)** You probably understand what's going on here.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=104)** The non-essential words, which are defined as stop words, have been removed from the text.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=111)** We can take a look at what those stop words are by just using the stopwords English command.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=117)** I'll type that in and then I need to specify which stop words I'm going to use.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=125)** This provides me with a list of the words that stopwords is going to pull out of the text that we're looking at.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=132)** Now, TM provides several dictionaries and we can look at that as listed in line 16.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=139)** These are a list of many different languages plus the S-M-A-R-T dictionary, which is a specially built dictionary full of stop words obviously.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=150)** In line 17, I've said give me all of the contents of the Italian dictionary.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=156)** And you can see here that we have Italian stop words.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=160)** If you're in a technical field, you may need a custom dictionary or specific words that should be left out of documents.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=170)** You can build a custom dictionary, and I'm showing how to do that starting in line 20.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=176)** In line 20, I create a vector called moreWords.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=180)** And into it, I'm going to store associated and clarify.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=184)** And you can see that appear in the upper right-hand corner in the environment pane.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=188)** Now on line 21, I combine the English stopwords dictionary with moreWords, the vector that I just created.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=198)** Now, I can take removeWords, myText, and use myStopwords to produce my new text.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=208)** In this case, I'll also strip the whitespace and I'll remove punctuation.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=213)** Let's take a look at what myNewText looks like and I'll scroll down so you can compare that in the code above lines 6 through 11.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=223)** You'll notice the punctuation is gone, extra spaces are gone, and, of course, various stop words have been removed.

> [!info]- Semantic Content
>
> **Code Identifiers:** mytext (3), removewords (2), morewords (2), mystopwords (1), mynewtext (1)
> **Code Keywords:** let (3), case, (1)
> **Definitions:** is a  (3), defined as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Stemming
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=1)** - [Instructor] Another transformation available in natural language processing is something called stemming and this is a really interesting tool.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=11)** For example, consider the following words: walked, walking, walker, and walk.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=18)** All of those words are derivatives of the word walk.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=24)** When you're calculating things like word frequency or appearance or statistics about a document, you may not want all four of those words to appear separately since they all essentially mean the same thing.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=39)** Instead of counting four words, you may want to count one word with a frequency of four.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=47)** A way to solve this problem is with stemming and what stemming does is reduce a word to the stem.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=56)** Let's take a look at what that actually does.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=59)** In line 16, of course, I bring in the TM package, and then in line 19, I create some sample text for us to work with.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=68)** Here in line 31, I'm using the TM command called stemDocument and I'm going to apply it to my text.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=77)** Let's run that and you can compare the code in the lower pane in the console to the code that I gave it in lines 19 through 29.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=88)** The immediate thing that you'll notice is the word before spelled B-E-F-O-R-E has been changed to B-E-F-O-R.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=96)** In code line 20, you'll see that I have the word empty.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=101)** And if you look below on the console, you'll see that this has been turned into E-M-P-T-I.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=107)** We can assume that empty or emptiest or emptier or emptiness would all be changed into E-M-E-T-I.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=118)** You'll see other examples in that text if you compare the two.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=123)** Now, you should be asking just what exactly is doing this and how is it making these decisions?
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=130)** And the answer to that is Porter's stemming algorithm.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=135)** It's described in a paper.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=137)** It's fairly sophisticated and there's a lot of math.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=140)** I provided a link that you can find it.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=144)** The important thing to note is is that it's doing its best, but sometimes it doesn't do it correctly.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=150)** You may get princely or prince or principle, and all of those become stemmed down to the same word, but principle and prince are not the same word.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=163)** Stemming tries to be a bit more sophisticated by providing additional languages.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=169)** In line 49, we can take that same text document that we just used and apply Turkish to it.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=177)** Now you can compare the Turkish version of stemming to the original document, and you'll notice there are several changes that it has made as well.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=186)** For example, you'll see upon it perfumed I, which corresponds to line 21 where I just simply used the word perfumed.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=197)** Stemming is a useful tool to change how words are counted, but you'll want to understand why those words are changed, what is being done to change them, and some of the obvious problems that you might run into with stemming.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** stemdocument (1)
> **Speakers:** - [instructor] (1)

#### Lemmatization
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=1)** - [Instructor] We just recently spoke about stemming.
>
> **[0:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=3)** There is a related concept called lemmatization which accomplishes much the same task but does it in a different way and has different results.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=14)** Let's take a quick look at lemmatization.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=17)** In line four, I bring in the text stream package which provides stemming and lemmatization tools.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=25)** In line seven, I'll define some sample texts that we'll play around with.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=30)** Now, with lemmatization, what happens is that words are compared against a dictionary and that dictionary provides alternative words to the meaning of the first one.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=44)** For example, ball, orb, globe, and sphere all mean essentially the same thing.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=50)** You may want those to be counted as one word with four instances rather than four words with one instances.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=59)** If you create or use the proper dictionary with lemmatization, lemmatization will accomplish that for you.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=67)** In this case, I'm using the standard Hunspell dictionary to perform lemmafication.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=74)** And let's take a look at what that does to our sample text.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=79)** In line 60, I'm creating a vector called lemma dictionary and I'm using the make lemna dictionary command against my text.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=88)** This produces a data frame with 13 observations and two variables.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=93)** Let's take a look at that data frame real quick.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=97)** The first column is the word that the lemmatization software found in my original text.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=104)** The second word is the suggested lemma that should be substituted out for that first word.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=112)** Let's go back to our code and use 64 lemmatized strings to actually perform that replacement.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=122)** What you're seeing down in the console is the result of using lemmatization against the original text.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=129)** Now, in comparison, I've set up line 65 to stem my text and now you're looking at first lemmatization followed by second stemming of the document.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=143)** If you take a minute to compare back and forth between the two paragraphs, you can see that changes have been made.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=150)** Stemming a document changes before to B-E-F-O-R.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=155)** Lemmatization leaves before alone.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=159)** In contrast, lemmatization changes the word bow to bowed, but stemming leaves bowed untouched.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=169)** Likewise, stemming changes empty to E-M-P-T-I, lemmatization leaves that word alone.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=178)** So you can see that there is very similar operations happening but the results are different.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=184)** In all cases, you're going to want to be aware when stemming and lemmatization start to manipulate your text that they may not be making the correct decisions and you want to check to make sure that the context of your document is still intact.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Tokenization
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=1)** - [Instructor] Tokenizers are at the heart of natural language processing.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=6)** Put very simply, tokenizers convert text into tokens or words, but sometimes sentences or phrases or arbitrary strings depending on how you set the tokenizer up.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=20)** Let's take a look at the tokenizers included with the TM package.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=24)** Of course, that implies that we're going to bring in the TM package, which is what we do in line three.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=30)** I'm going to place some sample text into a vector called sample text, and I've done that in line five through eight.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=40)** In line 11, I use the Boost Tokenizer to break up sample text.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=45)** Let's go ahead and run that, and if we expand the console what you'll see is is that Boost tokenizer has broken sample text up into individual words.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=55)** This is the operation of a tokenizer.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=58)** Very simply put, the TM package comes with several tokenizers, and we can look at those tokenizers with the command called get tokenizers, and if I run that you can see the TM has included a boost tokenizer, an MC tokenizer, and scan tokenizer, and I'll talk about these in just a little bit later, but essentially they all do the same thing.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=82)** One very important tool is the Regexp Tokenizer, and it's actually part of the natural language processing package, which is loaded by TM.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=94)** The Regexp Tokenizer is based on base R'S regular expression function, and it allows for extra functionality such as ignore case, things like that.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=105)** Let's take a look at it.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=107)** In line 24, I define a tokenizer based on Regexp Tokenizer.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=114)** My pattern is one or more spaces.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=117)** I'll define that by simply running line 24.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=121)** Then in 25, I go ahead and run my tokenizer against sample text, and place that into my indexes.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=129)** Let's take a look at my indexes.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=132)** Instead of words, what you're getting is the start and end of each matched word.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=140)** I can convert these set of indexes into actual sample text, and this is what I do in line 27.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=147)** Here you see something very similar to what Boost Tokenizer did for us, but I'm using a regular expression this time.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=155)** TM includes several other tokenizers, one of them being a white-space tokenizer.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=160)** Let's go ahead and run that in line 30, and you can see that again we have received a series of indexes.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=167)** In line 31, I have a blank-line tokenizer, and this only shows one because I only have one blank line at the very end, so it starts and ends at 231.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=180)** If I had multiple blank lines, this tokenizer would've broken my text into several different lines.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=188)** In line 32, I run the word punctuation tokenizer.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=193)** In this case, it looks for tokens that have a word or a space.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=198)** A lot of thought has been given to tokenizers, and there is a lot of customization and other packages include other tokenizers.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=207)** I've included a list of some of these alternatives in line 35, 36, and 37.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=213)** In particular, we'll talk about n-grams, something called skip-n-grams, word stems, and many other tokenizers .
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=222)** I would highly recommend that based on your individual needs, you explore a bit with these different tokenizers to find which one best suits your needs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), function (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### N-grams
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=1)** - [Instructor] N-grams are a special type of token.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=5)** They're actually combinations of tokens.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=8)** You might consider them to be phrases.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=11)** The question is, how do you break tokens up into phrases?
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=15)** Let's take a look at how to use an N-gram command.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=19)** In line three, I bring in the text mining package, and then in line six, I define some text with some sample text, very simple this time.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=29)** In line seven, I use the boost tokenizer to break some text into individual tokens, and we can take a look at that just by typing in ngram_tokens.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=43)** This shows that the original sumtext is now a vector of individual words.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=49)** In line eight, I use the N-grams command supplied by the Tm package against ngram_tokens and I've given N-grams a number of three.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=62)** Three is the number of tokens I want combined into each N-gram.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=68)** I'll run line eight and then we'll use line nine to show the contents of what just resulted.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=75)** Start with the first item, which was "Brillig and".
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=79)** Well, that's pretty obvious, that's three tokens combined together.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=83)** The second item is "Brillig and the."
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=88)** Do you see how N-grams started with the second token and combined the next two tokens for a combination of three?
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=97)** Likewise, the third started with the third token and combined the next two for a combination of three N-grams.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=105)** If I went back to line eight and changed three to four and then ran line eight and line nine, now what you get is an N-gram of four tokens.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=119)** Now, how are N-grams useful and I've set up some code in line 14 onwards that shows how this works.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=128)** Now, this is fairly complex, so follow along as I explain what's going on.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=134)** In line 14, I pull in the Gutenberg R library and this allows us to access the Gutenberg website from our R instance.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=145)** Gutenberg, by the way, is a collection of eBooks and texts.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=150)** In line 16, I run a command called gutenberg_subjects and I'm grepping for anything that has the word politic in the subjects, and I place that into a vector called downloadThese.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=165)** In line 17, I use download these, which is a collection of IDs and I put it into gutenberg_download.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=176)** The result of this will be a series of downloaded books.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=180)** When you run this, it may take a minute or two for your computer to download the books that you've chosen.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=187)** As a side note, you might want to change the word in line 16 to different subjects to see how your system responds.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=197)** You may receive some error messages, but as long as you have a certain amount of text to play with, this works successfully.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=206)** Now, let's look at line 19 through 29.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=210)** The first thing you'll note is that I've done some abbreviated coating.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=214)** I'm using the pipe forward command, which is very similar to the magritt percent, greater than percent command.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=222)** Pipe forward takes the results of one command and gives it to the next.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=228)** So let's step through starting at line 19.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=231)** Line 19 simply takes downloaded books and it pulls the text element out of it and then passes it to Paste.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=241)** Paste takes each line in the downloaded books data frame and converts it into one single large text file.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=251)** In line 21, I use the standard remove punctuation command to remove all the punctuation.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=257)** Then in line 22, I remove numbers.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=260)** In 23, I strip all the extraneous white space out.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=265)** In line 24, I used Boost_tokenizer to break that paragraph up into individual words.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=273)** In line 25, I've used the ngrams command to break out N-grams with a length of three.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=280)** In line 26, I use vapply to condense each set of three tokens, each N-gram into one phrase.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=291)** 27 tabulates all of those phrases, combining multiple instances of the same phrase.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=299)** In line 28, it sorts it.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=302)** In line 29, the head command provides me with the top 10 instances.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=308)** Now, while this command is running, this is going to supply us with a list of the top ten three word phrases used by political speeches.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=321)** I can also change the line 25 n = 3 to a larger number to find more commonly used phrases.
>
> **[5:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=330)** Depending on how much text you've downloaded from the Gutenberg library, this may take a while.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=337)** When you use N-grams, what you'll find is that it increases the size of the source file by the number of tokens in your N-gram.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=347)** In this case, I've increased the amount of texts that I have to process by three.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=352)** When our string of functions completes their tasks, we see the results of the top ten three token phrases for all of the political speeches available on the Gutenberg website.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=366)** In this case, the most common three word phrase is "To the world", the next most common, "Comparison to the", and then after that "Country comparison to".
>
> **[6:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=380)** We can come up with all sorts of interesting conclusions based on these most common phrases.
>
> **[6:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=387)** That's what N-grams is all about.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), this, (1), while. (1)
> **Code Identifiers:** ngram_tokens (2), ebooks (1), gutenberg_subjects (1), downloadthese (1), gutenberg_download (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Exercise Files:** download the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Part of speech tagging
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=1)** - [Instructor] NLP includes a useful concept called parts of speech tagging, and this is where you take text and identify the parts of speech that that particular piece is.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=15)** It requires some specialized tools.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=18)** TM does not have a part of speech tagging, but there is a package called UD pipe which does a fairly admirable job at it.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=26)** Let's take a look at how to use UD Pipe to identify parts of speech.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=31)** In line three, I install the UD pipe package and then in line four, I use the library command to bring it into my session.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=39)** In line five, I bring in the poetCorpus.RDS to create a poet corpus.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=47)** You'll recall we've used this in the past, and of course, it's important that your current working directory points to a directory that contains poetCorpus.RDS.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=57)** Now we're ready to run the command in line seven.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=60)** You'll see that I'm taking UD pipe, I'm giving it poetCorpus, the first document, and the contents of the first document.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=70)** I've identified this document as English.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=73)** When I run UD pipe, it creates a data frame and places it into UD pipe results.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=81)** Let's take a look at UD pipe results to see what it's actually done.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=85)** Start in line one.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=87)** The document that I pulled this from was called document one.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=91)** The first paragraph is one, and the sentence that I'm working on is number one.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=98)** The actual sentence is a dome of many colored glass, et cetera, et cetera.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=103)** And the first item of interest starts at character one and ends with character one.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=108)** The term idea is one, and the token idea is also one.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=114)** The token that we're working with happens to be the capital letter A.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=119)** The next column identifies the lema, and we've talked about lema in the past.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=124)** The interesting column here is called UPOS, or Universal Part of Speech, and you can see that A, as in a dome of many colored glass, has been identified as a DET.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=142)** The second word, which is dome, is on the second line and it's been identified as a noun.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=148)** The third word is of, and it's identified as an ADP.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=154)** Now, you might be interested in what these abbreviations mean, and if you look in the help file, you'll see that there is a very extensive website that is pointed to.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=165)** Let's take a look at that website right now.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=168)** One page in that website identifies the universal part of speech tags used by UD pipe.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=176)** If you look down towards the bottom half of the page, you'll see that DET is defined as a determiner.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=183)** ADP is an adposition, ADJ is an objective, and ADV is an adverb, and so on.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=192)** Let's go back to our code.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=194)** Now, we can do several things with part of speech.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=198)** One of the more interesting things is a way of identifying stop words.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=205)** Simple words like determinants or adverbs are oftentimes stop words, and you can identify and remove them just based on that part of speech.
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=215)** You can also analyze the type of writing you're doing.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=218)** So for example, in line 14 I've selected a bar plot to show the results of our UDP pipe results.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=228)** When I run that command, I'll zoom in on the plot and you can see that a majority of the words in this particular document are nouns, followed by punctuation, and then verbs.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=240)** Depending on how you feel about your writing, what type of writing you're doing, or who's doing the writing, you can identify different patterns.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=249)** As a side note, in line 17 through 20, I've broken line 14 up into individual commands using the pipe forward command.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=259)** This is just a simple exercise in learning how to program R.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=264)** In summary, parts of speech is an interesting way to analyze a document that you're working with.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=271)** It can reveal a lot of interesting details, and the thoughts behind parts of speech are pretty far reaching and well documented.
>
> **[4:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=282)** It will take you some time to understand the nuances of use of parts of speech.

> [!info]- Semantic Content
>
> **Env Vars:** rds (2), det (2), adp (2), nlp (1), upos (1)
> **Definitions:** is an  (4), is a  (3), is called (1), defined as (1)
> **Code Keywords:** let (4)
> **Code Identifiers:** poetcorpus (3)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Create Structured Data

#### Understanding the document-term matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=1)** - [Instructor] You won't spend much time with natural language processing before you run into the concept of a document term matrix or a term document matrix or a document feature matrix.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=13)** Let's take a look at the basic concept of a DTM.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=18)** The text mining package provides us with tools to create a DTM, so in line two, I bring it in to my current R session.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=26)** Then in line five, I bring in a poet corpus and this is the poet corpus we've been using in the past.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=33)** Remember that your current working directory needs to point to a directory that contains poet corpus.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=39)** Now I'm all ready to build a document term matrix and I've set this up in lines eight through 12.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=46)** Lines 9, 10, 11, and 12 should look very familiar by now.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=50)** Stop words, remove punctuation, remove numbers and stemming are all concepts we've talked about.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=56)** To create a document term matrix, I use the code starting with line eight, and the command is document term matrix.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=64)** When that code runs successfully, I now have DT Matrix and let's take a look at what DT Matrix actually is.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=74)** If I run the inspect command, I can open up the console and you'll see that inspect DT Matrix provides us with a certain amount of informational text, the name of the matrix, non sparse sparsity, maximal term waiting.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=90)** All of that we can come to later.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=92)** Right now what I'm interested in is the matrix towards the middle of your screen.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=97)** The first column is labeled docs 12759 or 112924.
>
> **[1:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=102)** And these are the names of the documents that we have imported.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=107)** The columns each have a term, day, heart, life, like, love, now, one, you can see that I've applied stemming to THIS, which produces THI, and so on.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=124)** Each number tells me the frequency of a particular term in a particular document.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=130)** So for instance, the first column is labeled day.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=134)** The first row is labeled 12759, and the number is 217.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=141)** That indicates that day appears in document 12759 217 times.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=149)** Likewise, heart appears 226 times.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=155)** So a document term matrix is just a simple matrix.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=159)** Each row is a document, each column is a term.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=163)** Let's return to our code and look at line 17.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=168)** This is where we produce a term document matrix.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=173)** Notice that the code for 17 through 21 is almost identical to the code from Lines eight through lines 12.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=182)** When I run line 17, I produce a TD matrix or term document matrix.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=188)** I'll clear the console, and then in line 23, I'll inspect the term document matrix.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=196)** Again, we see a fair amount of information at the top, sparsity, waiting, things like that.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=202)** Then the matrix identifies terms compared to documents.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=206)** So all we've done is just transposed document numbers and term numbers.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=213)** In many cases, document term matrices are interchangeable with term document matrices.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **Env Vars:** dtm (2), thi (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Create the document-term matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=1)** - In the previous session, I showed you the simple concept of setting up a document term matrices, or a term document matrices, or a document feature matrices.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=11)** There are options you'll want to be aware of that will save you time and processing power when you're working with larger documents.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=19)** Let's spend some time looking at how you can tweak the creation of a document term matrix.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=26)** In the code I'm showing you in line two, I bring in the TM package and then in line five I read the poet corpus dot rds and this is a sample file.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=36)** Your current working directory should of course point towards a directory that contains poet corpus dot rds.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=43)** In lines 10 through 22, I've set up a standard document term matrix creation command and I'll run that, and in a second it will produce the DT matrix.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=56)** Let's take a quick look at that matrix.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=58)** In line 24, I'm using the inspect command, and it gives me information about the matrix, plus it also gives me a list of the documents and a few of the terms.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=70)** Now, it's important to look at DT Matrix and realize that there is actually 79,000 terms in this particular document term matrix, so we're only seeing a small, small list.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=86)** In line 25, I can list all of the terms.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=89)** You can see that it omits 78,000 entries, so we're only seeing a few of these.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=96)** Let's look at the first option.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=97)** It's in line 18.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=99)** It's called dictionary.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=100)** I'm going to remove the comment mark, add a comma, and let's run this again.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=108)** I'll select line 10 and run the document term matrix.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=113)** Now, when we inspect the DT matrix, we'll see a change.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=118)** Notice that I've only got three terms, and you can confirm that by looking over in the upper right hand corner in the global environment.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=127)** Look for the line that says "terms" and you'll see one colon three.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=133)** This document term matrix only has three terms.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=137)** They are child, hate, and love, and that's because I gave the document term matrix command a dictionary of only those words.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=147)** If you have a specific list of terms you're trying to tabulate against, this is a way to quickly and easily reduce the amount of data that you're working with.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=158)** Next, let's comment out dictionary, and let's look at bounds as shown in line 19.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=166)** When I run bounds with a local list of 60 to 201, this is going to list for me only words that appear at least 60 times and no more than 201 times.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=184)** When I inspect DT matrix, you'll see that there are no numbers lower than 60.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=191)** If it's lower than 60, but still appears in other documents, you'll see the number zero as if it's been taken out.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=199)** For example, in document row 12759, the term "life" appears less than 60 times, and so the document term matrix has given it a zero.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=212)** Conversely, if any term appears 201 or more times, it's also taken out.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=218)** This is an easy way to remove terms that don't appear frequently enough to be interesting, or appear so often that they are just generating noise.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=229)** Now let's look at word lengths as shown in the code line 20.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=234)** I'll run the document term matrix command with word lengths of 10 and 50.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=241)** When we inspect the document term matrix, you can see that our terms have been severely trimmed back.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=247)** Again, look at the terms over in document term matrix in the global environment, and you can see that the number of terms has been trimmed down to 13,000.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=258)** This is because our document term matrix no longer considers terms that are 10 characters or less, or 50 characters or more.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=269)** Now, if I list all the terms that it actually considered as shown in line 25, you'll see that I have several words that are considered that are at least 10 characters.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=281)** In line 972, we have a rather long phrase.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=287)** Obviously, we've missed some spaces.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=289)** I know that this particular token is about 40 characters, so it falls within the 50 character limit.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=297)** Word length is a way of trimming your document back to a specific length of word, and for some technical documents, this is useful, especially if you are omitting spaces or punctuation in certain crucial areas.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=313)** So the creation of document term matrix can be tweaked to your needs.
>
> **[5:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=318)** This allows you to focus on the parts that are important and strip out any noise or insignificant terms that may appear in your research.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### Weighting the document-term matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=1)** - [Instructor] A typical document term matrix indicates the frequency of a term within a particular document.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=10)** Let's take a quick look at a standard DTM.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=13)** To do that, I'll need to bring in the TM library and I'll pull in the poetCorpus which we've used in previous sessions.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=22)** Now in line eight, I create a document term matrix.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=27)** And in line 15, we'll inspect that document term matrix.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=32)** This is what you've seen before.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=34)** There's a matrix.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=35)** Each row is the name of a document and each column is a term.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=40)** So we have 217 occurrences of day in document 12759.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=48)** TM provides us with three, actually four built-in weighting options.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=55)** The first option, which is what we're looking right now and is the default, is just simply the term frequency.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=63)** The third option called weightBin is a logical option.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=68)** It provides us with a true or false.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=71)** Does the term appear in this document, yes or no?
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=74)** The second one is term frequency inverse document frequency and it's a little bit more complex.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=82)** I've set this up in line 23 and you can see how I've changed the last two lines, weighting equals a function called weightTfIdf with some parameters.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=93)** I've run line 23, and then we'll inspect it.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=97)** Now notice how our matrix has changed.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=101)** It's no longer indicating the frequency of terms.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=104)** It's indicating a fairly complex relationship between each term and the document that contains it.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=112)** I've switched over to the documentation for TM and went to this section that talks about weightTfIdf.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=119)** In the documentation, weightTfIdf is described along with the math used to determine what the weighting function is.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=129)** There's a fair amount of deep discussion about this particular weighting function and the usefulness of it.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=136)** Some people like it, some people don't.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=139)** In your case, you'll need to experiment a bit with it and determine if this is a function that will actually provide you with useful information.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=148)** TM also provides weightSMART.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=151)** In line 36, I'll pull up the help file for weightSMART and you can see that TM provides a description of what smart weightings are.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=162)** In line 38 through 47, I've set up DocumentTermMatrix to use weightSMART.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=169)** I'll run that.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=170)** Then let's inspect the resulting document term matrix.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=174)** You'll notice that most of these numbers are zero except for document 13830.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=180)** The math behind smart weightings is fairly complex and the discussion is even more complex.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=187)** You'll want to do more research into the weightSMART function before you use it, but you may find it applicable to your specific needs.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=196)** If you're not satisfied with the built-in weighting functions, you can create your own with the weightFunction function and there's information in the documentation about how to set this up.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=208)** Using weightFunction, you can create a function that will evaluate the importance of a term based on criteria you choose.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=217)** Again, the TM package comes with three built-in weighting functions: weightTf, weight term frequency inverse document frequency, weightBin, and a fourth called weightSMART.

> [!info]- Semantic Content
>
> **Code Identifiers:** weightsmart (5), weighttfidf (3), weightbin (2), weightfunction (2), poetcorpus (1)
> **Code Keywords:** function (7), let (2), default, (1), case, (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (1), set up (1)
> **CLI Commands:** find (1)
> **Env Vars:** dtm (1)
> **Speakers:** - [instructor] (1)

#### Focus the document-term matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=1)** - [Host] A document term matrix is actually a sparse matrix, which means that empty cells in the matrix actually don't exist, and this is how the actual object is structured.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=14)** Let's take a look at sparse matrices, how to trim them, and how this affects natural language processing.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=22)** In line three, I'm going to bring in the TM library and then in line six, I bring in our old friend, the poet corpus.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=30)** In line eight, I create a most simple document term matrix and then let's inspect it.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=37)** Notice at the top of this inspected document term matrix, we have non-sparse entries, a sparsity level, a maximal term length, and waiting.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=49)** We already talked about waiting and we've talked about term length.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=54)** Let's talk about the sparsity and non-sparse entries.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=59)** If we look at the actual breakdown of the structure of our document term matrix, you'll notice that we have I, J, and V.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=70)** I and J are the actual grid numbers for elements in a matrix.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=76)** V is the value in that matrix.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=80)** Notice that we also have N row, which is the number of rows, and the number of columns, which is equivalent to the number of terms.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=88)** This sparse matrix has 79,004 terms, and if we look in the documents and terms, documents contains the name of each document and terms contains each term.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=105)** One way to trim out less important terms is to reduce the sparsity.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=112)** In line 18, TM provides the remove sparse terms, I've given remove sparse terms DT matrix, and indicated that I want a sparsity of 0.2.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=128)** The important thing to remember about this number is, the lower the number, the fewer the terms.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=134)** I'll run line 18.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=137)** Let's compare our new, sparser DT matrix with the original DT matrix.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=144)** At the top of the console, I have non compared to sparse entries.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=150)** Towards the bottom, you can see that I have non compared to sparse entries.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=155)** It's the same document term matrix, but look at the difference in the numbers.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=161)** Where I've reduced the sparsity, I now have 17,947.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=167)** Originally I had 285,420 entries.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=173)** My sparsity has been reduced to 16%.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=178)** We can do this again with a higher number.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=181)** In line 19, I've used the same command, but this time I've used the sparsity of 0.8.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=189)** Now we can compare a sparsity of 0.2 with a sparsity of 0.8.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=194)** Notice the change in the number of terms.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=198)** At 0.2, I have 300 terms.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=201)** At 0.8, I've got 4,716.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=206)** If I scroll up to the top at the original document, I have 79,004 terms.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=214)** This means two things.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=216)** It means that I've reduced the amount of information that I need to process.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=220)** In the case of large document term matrices, I may want to reduce the sparsity, so that I have fewer terms to actually compute through.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=231)** This also means that I can trim out some of the extraneous terms that I may not be concerned about.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=239)** As you're noticing, there are several ways to focus a document term matrix on the important terms, rather than the entire bag of words.

> [!info]- Semantic Content
>
> **Versions:** 0.2 (3), 0.8 (3)
> **Code Keywords:** let (4), new, (1)
> **Definitions:** means that (3)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [host] (1)


### 7. 6. Apply Statistics to Text

#### Word and document frequency
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=1)** - A document term matrix contains the frequency of a term in each document.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=8)** TM provides us with a couple of tools to research and manipulate this particular information.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=14)** Let's take a look at that.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=16)** In line two, I'm going to bring in the tm package and then in line five I'm going to import the poetCorpus that we've been using as a demonstration tool.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=27)** In line eight I create a DTmatrix using document term matrix and only a few options.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=35)** Now, one of the things that we may be interested in is how many documents are actually in that particular document term matrix and tm provides us with nDocs as shown in line 15.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=49)** If I run line 15, you can see that there is 71 documents in Dtmatrix.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=57)** Line 16 which is just simply docs gives us a list of the names of a particular document in the document term matrix.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=66)** Not surprising, we have a corresponding couple of functions for terms.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=72)** In line 17, nTerms provides us with a number of terms in a matrix and line 18 provides us with those terms.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=84)** Now note that I've printed this out and there is a limit to the number of terms that are printed out.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=90)** There are 78,000 more terms available for us.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=94)** In some cases, the frequency of a term will indicate that term's importance.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=100)** TM provides us with a couple of tools to research that term frequency.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=106)** The most obvious is a command called termFreq.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=110)** It's shown in line 21.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=112)** It looks very much like a document term matrix command but in this case provides us with the frequency of each particular term.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=122)** In line 29, you can see find frequent terms.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=128)** In this case, I've said I'm only interested in terms that appear more than 100 times and in high frequency, I've said it can show an infinite number of times.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=139)** I could change high frequency to indicate the highest frequency I'm interested in.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=146)** I'll run line 29.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=148)** In return, I'm presented with a list of frequent terms that have appeared 100 or more times.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=155)** In line 31, I'm using tms, find most frequent terms and I've asked it to only give me the top 10.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=165)** In this case, find most frequent terms has produced this information for each document in the corpus.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=174)** In this case, find most frequent terms has found that in document 25340 of the Dtmatrix, stanza appears 485 times.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=187)** One appears 344.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=189)** Byron appears 336 and so on.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=193)** It's only giving me the top 10 for each document.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=197)** Again, tm provides us with some simple tools for finding the frequency of a term within a document term matrix.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (1), return, (1)
> **CLI Commands:** find (4)
> **Code Identifiers:** poetcorpus (1), ndocs (1), nterms (1), termfreq (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Speakers:** - a (1)

#### Hierarchical clustering
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=1)** - [Instructor] Hierarchical clustering is a way to determine the relationship between different documents in a DTM or a corpus, and TM provides us with some tools to do that.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=14)** Let's take a look at how to use this with the TM package.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=19)** In line three, I bring in the TM package.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=21)** And then in line four, I bring in the poetCorpus.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=24)** We've been using this as a demonstration tool.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=28)** In line seven, I create a standard DocumentTermMatrix.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=32)** Then we're ready to create a hierarchical cluster.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=35)** I've set this up in line 15 using the hclust command which uses the DIST command which is actually for distance.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=45)** This will calculate the hierarchical clustering for the poet DTM.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=50)** Now, if we look at the results, we can see that it has successfully completed and used a Euclidean method of calculating the distance, but that really doesn't give us an idea of the results.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=62)** Instead, what we should do is plot the results and I've done that in line 17.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=67)** You can see in the lower right-hand corner of R studio that we have a clustered dendrogram representing all of the documents in the poet DTM.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=77)** Let's zoom in on that and take a look at some of the numbers and the relationships.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=83)** The way to interpret this graph is that the numbers that are close together have some sort of a relationship.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=90)** Numbers that are further apart are probably dissimilar.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=94)** As a way of checking this, we can look up the titles of these individual documents.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=100)** On the lower edge towards the left, you'll see the numbers 2039 and 15390.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=108)** These are close together.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=110)** Let's go back to our code.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=112)** In line 22, I've created a function to get the title from the document id.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=118)** Then down in line 29, I've created getTitle with the document IDs that we were just wondering about.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=124)** Let's run that.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=126)** The title of these two documents are both about Evangeline, so they probably are pretty closely related.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=133)** Let's look at another example.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=136)** On the far right, 13223 and 13224 are closely related.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=144)** We'll go back to our function.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=146)** It's the first one in line 27.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=149)** And when I run that, you can see that these are both poems by Jean Ingelow, two volumes, so they are closely related.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=158)** For a third example, let's take a look at the far, far left number 9700 and compare it to the farthest right number 12924.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=171)** I've set this up down in line 30, and when I run that, the far left happens to be Anglo-Saxon poems, the far right happens to be the world's best poetry.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=182)** Now, you can interpret that however you like, but the cluster dendrogram tells us that those two documents are worlds apart.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=190)** Again, hierarchical clustering is one way of looking at the relationship between terms in a document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), this, (1)
> **Env Vars:** dtm (3), dist (1)
> **Code Identifiers:** poetcorpus (1), gettitle (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Associated terms
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=1)** - [Instructor] In our research with natural language processing, it might be helpful to understand what terms are associated, what terms are similar, and one way that we can assume that a term is similar is by looking at how often they appear together.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=18)** So for example, crisp might often appear with apple or wet might appear with ocean.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=27)** Those two terms would be correlated.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=30)** The TM package provides us with a couple of commands to simplify this type of research.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=35)** Let's take a look at how to do that.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=38)** In lines three, I bring in the TM package.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=41)** And then in line six and seven, I bring in both the poet DTM and the poet corpus.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=46)** Now we're all set to do Find Associates, which is what I have set up in line 12.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=52)** Find Associates is a command provided by the TM package.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=56)** I give it a DTM.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=58)** And I give it some terms that I'm trying to correlate with.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=62)** In this case, I've chosen love, hate, and child, but this will differ depending on your research.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=69)** The final part of Find Associates is the correlation limit and I've set it to 0.95.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=76)** The lower this correlation limit is the larger the results set and a lower value means these terms overlap less frequently in documents.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=86)** Let's run line 12 and look at the results.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=91)** In the console, you'll see that we have three elements that have been returned, love, hate, and child.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=98)** With a correlation limit of 0.95, love only has one other word that correlates and that's lie.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=107)** Well, that's an interesting correlation and it tells us something about the poets.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=111)** Likewise, with hate we have correlated terms, crime, prey, hell, quench and sustain, and those kind of make sense.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=121)** You can see the correlations are fairly high.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=124)** Our third element child has no correlations whatsoever.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=129)** This leads me to ask the question, well where does child begin to correlate?
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=134)** And for the sake of the demonstration, I've already experimented around and found that a correlation limit of 0.8 produces some results.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=142)** So I'll run line 16, where I've set terms equal to child and correlation limit equal to 0.8.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=150)** Ah, that produces a lot of results.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=153)** Child correlates with feign, with mark, near, rear, work, assurance, gulf, all sorts of words.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=162)** Now with further experimentation, I could reduce this list by increasing the correlation limit.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=168)** It might also be interesting to find out where child appears.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=172)** In line 19, I've used the TM filter command we talked about previously to produce a subset of the corpus.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=180)** Then in line 24, I use the meta command to find the title tags.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=186)** This returns the title of documents that have the word child in them.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=191)** TM also provides something called "Find Most Frequent Terms" and you can see this setup in line 27.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=198)** When I run that command, I receive a list of each document with the most frequent terms for each document.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=206)** So for example, 16,328, the most frequent terms are Beowulf, one, Hrothgar, hero, Grendel, and king.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=217)** Depending on your research, this may be significant statistics or it may be just interesting research.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=224)** In either case, TM provides an easy way to find both the most frequent terms and the associated terms.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7), make (1)
> **Code Keywords:** let (2), case, (2)
> **Versions:** 0.95 (2), 0.8 (2)
> **Env Vars:** dtm (2)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)


### 8. 7. Sentiment Analysis

#### What is sentiment analysis?
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=1)** - [Instructor] Sentiment analysis is an interesting and subjective part of natural language processing.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=8)** Sentiment analysis provides insight into the emotional content of a document.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=15)** The concept is easy.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=17)** A dictionary of terms, or words, is weighted as to their meaning or sentiment.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=24)** That dictionary is then compared to a source document.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=28)** Each word in the source document is given a score and the cumulative score indicates the sentiment of the document.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=36)** There are several dictionaries tailored for different types of documents.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=40)** For example, the Rauh is tailored for the German language.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=45)** Loughran McDonald is focused on EDGAR 10-K financial reports.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=52)** Dictionaries are nothing more than lists of words with positive or negative values.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=59)** Some dictionaries contain extra dimensions beyond just negative or positive connotations.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=64)** The NRC dictionary from the Canadian government is an interesting example.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=70)** It contains positive and negative dimensions as well as dimensions for anger, anticipation, disgust, fear, joy, sadness, surprise, and trust.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=83)** By matching words in the NRC dictionary with words in the subject document, sentiment analysis provides a perspective of the expressed emotions.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=94)** As you might expect, there is debate and controversy about sentiment analysis.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=100)** Comparing a word list to a source document provides an arbitrary weighting, but there are other dimensions to documents.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=108)** For example, who is speaking is just as important as what they are saying.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=115)** In recognition of the subjective nature of applying a list of words to a document, focused groups provide different dictionaries to address varied circumstances.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=127)** For example, the word bear can be positive in one context and negative in another.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=133)** If you're analyzing financial documents, use a dictionary that indicates bear is a negative word.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=140)** If you are looking at an ecology report, bear might be positive.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=146)** It's important to choose an appropriate semantic dictionary.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=150)** Let's take a look at how to implement these concepts using the R language in the next sessions.

> [!info]- Semantic Content
>
> **Env Vars:** nrc (2), edgar (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (3)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Real-world example of sentiment analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=1)** - Let's take a look at how to code up sentiment analysis.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=6)** The TM package by itself does not contain tools for sentiment analysis but that's okay because there are other packages that do.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=15)** I'm going to demonstrate one of them the syuzhet project from the NLP Group at Stanford University.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=22)** If you haven't already installed this package look to line five for the installation process.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=28)** In line six, I bring that package into my version of R, and then in line nine I get small text from the tokens, hate, love, and apathy.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=40)** This is just a simple vector.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=42)** Now, in line 12 I can actually get down to some sentiment analysis.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=47)** I'm going to run line 12 to get the NRC based sentiment analysis for small text and what I received back is a series of columns labeled anger, anticipation, disgust, fear joy, sadness, surprise, trust, negative and positive.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=65)** You'll recognize these as the categories that are contained in the NRC project.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=71)** I have three rows and each row corresponds with the word that I've asked to get the sentiment for.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=79)** So the first row is hate, and you can see that it ranks one for anger and one for disgust, and one for fear but zero for joy and zero for anticipation.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=90)** Overall hate is ranked as a negative sentiment.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=95)** Line two is love and you can see that overall it's a positive sentiment.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=100)** We can use this information to determine whether small text is positive or negative.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=106)** I've set this up in line 15 which I'll run and we receive a -1.
>
> **[1:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=112)** Well, that means that small text unfortunately is somewhat negative.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=117)** If you're curious about where this -1 came from run line 16 to get the sentiment you'll get a sentiment for each word.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=127)** So the first one, -1 is hate.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=130)** The second one is love, and the third one is apathy.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=134)** If I choose to, I can use different methods for determining the positive or negative sentiment values.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=141)** In line 19, I've set it up to use rowMeans.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=146)** When I run line 19 I get three values, 0.5, 0.2, 0.2, which is a mean of all of the values for each individual row.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=159)** So the values, anger and anticipation, and disgust and fear and joy are all produced and then given a mean value.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=168)** Now, is this a valid way of doing sentiment analysis?
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=172)** That will depend on your research methodology.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=175)** Let's look at a little bit more sophisticated example and which results in a lesson learned.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=180)** In line 22, I bring in our old friend poet Corpus and then I bring in the TM library.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=187)** In line 26, I'm going to use get NRC sentiment again on the first document of Poet Corpus down below you'll see the ranking, anger is 104 anticipation is 152, and so on.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=202)** Overall, it seems to be somewhat of a positive document.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=207)** Now, I can use TM Map to apply get NRC sentiment to all the documents in the corpus and I've done that in line 29.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=216)** TM Map, I apply it to Poet Corpus and my function or FUN is get NRC sentiment.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=224)** Now, I'd like to move that information to a data frame for a bit more useful information, and I do that in line 31.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=231)** Let's take a look at that data frame.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=234)** There it is, and as you might expect, it's a series of columns and a series of rows.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=240)** The columns labeled anger, anticipation, disgust and so on.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=243)** Each row corresponds to one of the documents in the corpus.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=247)** Now, for my own edification I'm going to attach titles to each row.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=252)** Now I can look back at poet DF and I can see that the final column is titles.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=258)** Each row now has a title and has a sentiment.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=262)** Well, this is great.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=263)** Let's look for the angriest document and I can do that by sorting anger in a descending fashion.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=271)** The maximum anger value for a document is 674.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=275)** That's the complete poetical works of James Russell Lowell.
>
> **[4:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=280)** Well, James Lowell must be a pretty angry guy.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=283)** Now, let's take a look at which is the most joyful document.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=286)** I'll do the same operation.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=288)** I'm going to sort joy and look for the most joyful document which happens to be, wait a minute.
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=294)** The complete poetical works of James Russell Lowell.
>
> **[4:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=298)** Well, this happens to be the angriest and the most joyful document.
>
> **[5:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=302)** Actually, this is a false conclusion.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=305)** The way that sentiment analysis works gives me a value for a document, but it's not necessarily giving me a value across documents.
>
> **[5:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=316)** What I've done is created a false correlation or a false conclusion.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=321)** You need to be careful with sentiment analysis.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=324)** There are other statistics that may be more useful in this case.
>
> **[5:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=329)** For example, you might want to look at TF IDF which we talked about way back in this section on waiting document, term matrices.
>
> **[5:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=338)** Sentiment analysis seems like a really powerful tool, and it is but you have to use it carefully to get reasonable results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for. (1), function (1), case. (1)
> **Env Vars:** nrc (5), nlp (1), fun (1), idf (1)
> **Versions:** 0.2 (2), 0.5 (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** rowmeans (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)

#### Sentiment datasets
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=1)** - [Instructor] Dictionaries are at the heart of sentiment analysis.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=5)** Dictionaries provide quantifiable values for the emotional content of different words.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=12)** These dictionaries are provided by different groups and are the results of different methodologies.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=19)** It's important to understand which dictionary you are using when you do sentiment analysis, and to make sure to use the dictionary that's most appropriate for the research that you're conducting.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=32)** So let's take a minute and become familiar with some of the different dictionaries that are available for sentiment analysis.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=39)** Now I'm going to show you the contents of some of these dictionaries, and the easiest way for me to do that is to use something called quanteda.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=47)** So in line seven and eight, I've brought that package in.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=50)** Now we're ready to look at the AFINN dated dictionary, that's in line 12.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=57)** Down in the console in the lower left-hand corner, you can see that AFFIN has produced a list of words.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=63)** Although they're not shown, each word has a corresponding valence or value.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=70)** We can calculate that using the text stat under bar valence command, heart of quanteda I give it the string anger and I tell it to use the data dictionary AFINN.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=82)** When I run line 13, I receive a sentiment of negative three.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=87)** Let's turn our attention to ANEW which is a different dictionary.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=92)** Running lines 16 and 17 produces a printout of the ANEW dictionary and the names used as keys in this dictionary, when I come up with a word it'll be listed as part of one of the keys.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=108)** So for example, abduction is part of pleasure and has of value related to pleasure.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=114)** Abduction also is an arousal and has a value aerated to that.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=119)** Likewise, abduction is listed in dominance and has a dominance value or valence.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=126)** Now we can find out what these are.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=128)** In line 18, 20 and 22 you can see where I've used tech stat valence for the word anger, and I'm using the pleasure component of the A new dictionary.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=140)** This tells me that anger has a valence value of 2.34 when compared against the pleasure component of the ANEW dictionary.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=149)** In line 20, I see that I have a 7.63 valence when I'm in the arousal dictionary and in line 22 I can see that I have a 5.5 sentiment value in the dominance component of the ANEW dictionary.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=165)** Now let's look at NRC.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=167)** And incidentally, NRC was the dictionary that we used in our previous session.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=173)** Here's the data dictionary and here are the names for the NRC data dictionary.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=179)** - These should be familiar terms.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=181)** Now I can find out what the polarity is for anger in line 29, and I come up with a negative polarity which indicates that it's probably a negative word.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=191)** Now I can do further research and find out which keys are related to anger and I can do that in line 32 where I do a token lookup.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=200)** You'll see that anger is listed as part of the anger key, not surprising, and it's also part of the negative key, also not surprising.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=209)** Now, there are a few other dictionaries that we can take a look at.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=212)** And in order to look at these I'm going to look at the syuzhet library.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=216)** I'll pull that in, and I need to define small texts with three tokens, love, hate, and apathy.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=223)** Again, I can get the NRC sentiment for small text and we did this in the previous session.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=229)** Let's take a look at the top of the NRC dictionary and then at the tail of the NRC dictionary.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=237)** What this shows us is, is that in each component of the NRC dictionary, there is a word, there is a positive or negative or other keyword listing and a value.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=249)** Remember that positive and trust are keys that are part of the NRC dictionary.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=256)** In line 42, I can pull up the sentiment dictionary bing, bing has a word and a value and if we went far enough in there we would see that different words have different values.
>
> **[4:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=270)** In the AFINN dictionary, we can see that we also have a word and a value.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=276)** So BING and AFINN are similar in the way that they attach value to a specific word.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=283)** Now, this may be a bit confusing, but the takeaway here is is that when you are doing sentiment analysis take a look at different dictionaries and make sure that the results you're getting make sense with the words that you're using and the dictionary you've applied against them.

> [!info]- Semantic Content
>
> **Env Vars:** nrc (8), afinn (4), anew (4), affin (1), bing (1)
> **CLI Commands:** make (3), find (3)
> **Code Keywords:** let (4)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 2.34 (1), 7.63 (1), 5.5 (1)
> **Speakers:** - [instructor] (1), - these (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### Sentiment tools
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=1)** - [Instructor] Sentiment analysis provides a quantified rating of unstructured text.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=7)** As discussed previously, this requires a dictionary but also requires a software tool to calculate the rating from the information in the dictionary.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=18)** The Tm package doesn't provide sentiment tools but there are plenty of other options.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=25)** I've broken out the obvious ones into categories, and there may be others I'm not aware of, and there is always new development and new packages.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=35)** Let's start with simple sentiment analysis tools.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=39)** I demonstrated one of these, syuzhet.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=43)** These tools are easy to set up and use.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=46)** In some cases, the package only contains one command.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=50)** For exploratory research, these packages are an excellent choice to provide quick insight into sentiment analysis.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=59)** On the other end of the continuum are these frameworks.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=63)** Quanta in particular is a full featured natural language processing environment and includes sentiment analysis.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=71)** These packages provide intricate control over the parameters used to generate sentiment analysis.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=78)** If the simple tools don't satisfy your research needs, look to these packages instead.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=84)** Beware, these tools require detailed setup and more time to learn how to use them.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=91)** If you're coming from the world of Python programming you might feel more at home using an R version of Python NLP libraries.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=100)** These two packages, [Sentiment.ai](https://Sentiment.ai) and transforEmotion provide an R interface to Python NLP tools.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=110)** At the time of this recording, the future of the Twitter API is uncertain.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=116)** This is unfortunate, as there are many are packages designed to determine the sentiment expressed by the users of Twitter.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=124)** There are are packages to download this information directly and there are packages specialized for sentiment analysis of this data.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=133)** Unfortunately, I can't even demonstrate these tools at this time.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=138)** I mentioned them here so you're aware of their existence and use, in the case of the Twitter API becoming available again.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=147)** There are natural language processing web services from Microsoft, Google, IBM, and other companies.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=155)** There is a package on CRAN which provides R access to Microsoft Cognitive Services and it does require creating an account with that service.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=166)** Although we don't have time in this course to cover each of these tools in any sort of detail, these tools will appear as separate sessions in my companion course titled "R for Data Science: Lunch Break Lessons."

> [!info]- Semantic Content
>
> **Env Vars:** nlp (2), api (2), ibm (1), cran (1)
> **Code Keywords:** require (2), let (1), interface (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), setup (1)
> **Code Identifiers:** transforemotion (1)
> **URLs:** [sentiment.ai](https://sentiment.ai) (1)
> **Speakers:** - [instructor] (1)


### 9. 8. Visualizing Natural Language Processing

#### Plotting text mining
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=1)** - [Instructor] Visualizations are useful for interpreting any dataset and it's the same way with natural language processing.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=9)** There are a couple of ways to visualize the results of natural language processing.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=15)** In this session, let's talk about simple plots.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=19)** The first thing to note is is that the plot command, which is included as part of the TM package, requires something called Rgraphviz.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=30)** To install Rgraphviz, I've first of all brought in the TM package.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=36)** Then I need to install something called BiocManager which is short for the bioconductor manager.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=43)** In this case, it gave me an error because I've already installed this package and it wants to know if I want to reinstall it.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=51)** In line five, I use the BiocManager to install Rgraphviz.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=57)** Now I can read in our old friend the poetCorpus and I'm going to create a term document matrix from that corpus.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=66)** Once I have that term document matrix, I can use the very simple plot command as shown in line 16.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=75)** Now, what I receive is of questionable value.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=78)** It's a list of all the phrases and some relationship between those terms.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=85)** Let's refine this a little bit.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=87)** I'm going to scroll up to line 18 through 26.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=92)** I'll run that series of commands.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=94)** Notice that I'm starting with a poetCorpus, and I've just selected the first 10 documents.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=101)** Then I've finally come up with a series of the most frequent terms.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=107)** If you look in the upper right-hand corner in the global environment, you'll see that I have a vector called frequentTerms and it contains a series of words, one, like, now, love, will, et cetera.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=118)** Now in line 29, I've set up a plot.
>
> **[2:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=121)** And I've done something in line 30.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=124)** I've used frequentTerms, but I've also added another phrase called zweites and zweites is not connected to any of the most frequent terms so let's take a look at that plot to find out what happens when I plot frequentTerms against a non-frequent term.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=143)** To do this, I select line 29 and I run 29, 30, and 31, which produces the plot that you're seeing in the lower right-hand corner.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=153)** The plot shows a strong correlation between day and will and like and one and love and now.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=162)** This is indicated by the thick black line and that's produced by line 31 where I asked for weighting to be true.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=169)** These are the most frequent terms, so it's not surprising that there is a strong correlation between these.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=176)** In the lower right-hand corner sits our little friend zweites, all alone, not connected to any of the most frequent terms.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=184)** The graph is showing us that that term is not related to the most frequent terms.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=191)** There's another type of graph that we can create.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=193)** It's a bar plot and I've set this up in lines 34 through 39.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=199)** You'll notice I'm using the pipe forward command, a vertical bar followed by a greater than sign, to send data from one function to the next.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=208)** You may not be familiar with line 38.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=211)** This is a Lambda function and all it does is subset for the first 10 items.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=217)** The bar plot it produces, which is shown in the lower right-hand corner, is a bar plot of the most frequent terms used in this document.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=226)** The terms are across the lower bar and a number of times each term has been used is across the vertical axis.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=235)** These are two simplistic plots that you can easily access for natural language processing, and based on your research may or may not be useful.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=245)** Let's look at some more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), case, (1), this, (1), lambda (1)
> **Code Identifiers:** frequentterms (3), poetcorpus (2)
> **Definitions:** is a  (3), short for (1)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### Plotting Zipf’s and Heap’s Law
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=1)** - [Instructor] Zip's Law and Heap's Law are two interesting concepts in the world of natural language processing.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=9)** TM provides tools for plotting both of these and exploring those concepts.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=14)** To demonstrate this, I'll need to create a term document matrix, and I do this in lines three, five, and six.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=22)** In line 20, I use the zip plot command as part of the TM package, and I've asked it to use a line.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=32)** When I run this, you can see that we have a nice graph.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=36)** Now, what does this actually mean?
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=38)** Zip's Law states that the most frequent word will occur about twice as often as the second most frequent word.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=49)** It'll appear three times as often as the third most frequent word, and so on.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=54)** The plot that we're looking at on the right hand side illustrates this.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=58)** If the presentation of Zip's Law is useful in your research I highly encourage you to do some research on the actual math behind this correlation.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=70)** Next is Heap's Law, and Heap's Law states that more words doesn't necessarily result in different words.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=79)** So in other words, the larger the document doesn't necessarily result in more different words.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=86)** In line 27, we see that it's been set up for us.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=90)** TM provides Heap's plot.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=92)** I feed it a term document matrix with a type of L, and we receive back an intercept and an X, which gives us the plot on the right hand side.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=104)** Again, I'm not going to get into the math behind Heap's law.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=108)** There is a lot of very scholarly information that describes in great detail how this is calculated.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=115)** And if it's useful for your research, I would encourage you to take a deeper dive into it.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=120)** For now, all that's important to understand is that the TM package provides tools for plotting both of these interesting laws.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), this. (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Word clouds
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=1)** - [Instructor] Word clouds are a colorful, but simplistic way of looking at term frequency within a document.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=9)** The TM package, along with two word cloud packages makes it fairly simple to produce these simplistic graphs.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=18)** Let's take a look at how to do this.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=20)** In line three, I bring in the TM package.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=23)** In line four, I've given the command to install the word cloud package should you need to do so.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=30)** And then in line five, I use the library command to bring it into my session of R.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=34)** I pull in some standard data, I create a term document matrix, and then in line 18 through 24, I create a simplistic word cloud.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=45)** Notice again, I'm using the pipe forward command to send data from one command to the next.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=51)** The result shows up in line 23 where I've used the simple command word cloud.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=57)** I've asked word cloud to only plot terms that appear more than 50 times and less than 100.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=66)** Depending on the speed of your computer, this may take a certain amount of time.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=70)** After a bit of time, we have the result of a word cloud command.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=76)** We can zoom in and take a look at this result and you can see terms that we've been working with.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=81)** Some of them are the most frequent terms.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=84)** Next, let's look at Word Cloud 2 which is an enhanced version of Word cloud.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=91)** It has more features, but it's a bit more fidgety.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=94)** Line 28 and 29 brings this package into play and then in line 31 through 42, I've set up a series of commands to produce a star-shaped Word Cloud of all of the frequent terms.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=111)** Let's zoom in on that graph.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=114)** You can see that this is much more colorful and much more visually interesting.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=118)** There is a question of how much more understanding it actually adds to our analysis.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=124)** Again, word clouds are a colorful but simplistic way of looking at term frequency within a document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)


### 10. 9. Conclusion

#### Your next steps in NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=1)** - [Narrator] Thanks for participating in this class on natural language processing.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=6)** You might think, since this is the last video of the course, there's nothing left to learn.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=11)** Not true.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=13)** In this course, I've provided you with guidelines and insights into natural language tools, and techniques.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=20)** But this is changing at an increasing rate.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=24)** For instance, language itself is dynamic and unstructured.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=28)** We add new words and new languages every day.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=32)** The way we express ourselves changes with cultural shifts.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=36)** English and Japanese frequently exchange words and phrases.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=40)** Words gain additional meanings, depending on who is using them, and how.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=46)** For example, cosplay was originally from Japan but has become a commonly understood word among English speakers.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=56)** These shifts in language require new approaches to NLP.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=60)** For instance, stemming algorithms will need to understand how to work with multiple languages.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=67)** Stop words will need to accommodate changes to pronouns, such as they and them.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=73)** And of course, our technology changes.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=76)** Online cognitive services provide exciting new tools and hardware's becoming faster, specialized, and more capable.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=86)** Lately, handheld language translators cost less than $300.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=91)** They carry 40 languages and have a translation accuracy of 95%.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=98)** Most recently, artificial intelligence has advanced natural language processing and participates in conversations, ranging from amusing to alarming.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=110)** By completing this course, you have a basis for understanding how NLP works and can make educated guesses about the next research advances.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=120)** I'm excited about this emerging field and I hope you are as well.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=125)** And until our next encounter, Klaatu barada nikto.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), for example (1), such as (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Speakers:** - [narrator] (1)


### 11. 10. Introduction to NLP Tidytext R

#### Welcome to natural language processing with R
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=1)** - [Mark] Natural language processing provides computerized tools to help us quantify human speech and research the intent behind a piece of writing.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=10)** There are lots of tools to do this analysis.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=14)** In this course, we're going to focus on tidytext; a tidy verse package available for the R programming language.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=22)** There are lots of other packages, tm, Quantida, UDPipe are among them.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=28)** I encourage you to become familiar with those packages at some point in your career.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=33)** But for now, let's focus on tidytext.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=37)** Tidytext is unique from other packages in that it is built from tidyverse principles from the ground up.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=45)** Tidyverse principles are that each variable is a column.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=49)** Each observation is a row and each type of observational unit is a table.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=56)** Tidytext interprets these tidy verse rules as a table with one token per row.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=64)** In this course, we'll examine what that actually means and how to perform NLP on data that appears in this way.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=72)** I'm Mark Neiman-Ross and I'm excited to travel with you on this journey.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=76)** So let's get started with natural language processing using tidytext.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Code Keywords:** let (2)
> **Env Vars:** nlp (1)
> **Speakers:** - [mark] (1)

#### Skills you need to be successful in this course
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=1)** - [Instructor] This course on natural language processing requires knowledge of the R programming language.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=7)** This is decidedly not a beginning course.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=11)** I assume you already have experience with programming in R.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=14)** Before you start, ask yourself these questions.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=18)** Do you understand how to create and use a vector in R?
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=23)** Do you understand how to create a function in R?
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=27)** Are you familiar with installing and linking an R package?
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=32)** Can you run an R program and debug errors?
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=36)** These are simple tasks, but if you can answer yes, then you have the rudimentary knowledge of R required to get you through this class.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=44)** If you aren't sure about these concepts, you might want to look at one of the beginning R courses in this library.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=51)** Another alternative is to take the LinkedIn Skills Assessment Test.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=55)** You'll find it via your profile under Skills.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=59)** Go ahead and take the test.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=61)** If you score in the top 30%, you're good to go.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=65)** If you're still unsure, go ahead and dive in.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=68)** When you encounter a concept you are unfamiliar with, take time to research the answer.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=74)** Experience is one of the best teachers.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=76)** Don't be afraid to get started.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=78)** You may pleasantly surprise yourself.
>
> **[1:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=81)** Programming natural language processing tasks can be done with a regular text editor, but it will be a painful process.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=90)** To perform NLP efficiently requires an integrated development environment such as RStudio, VS Code, or R Commander.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=99)** These IDEs will help you write efficient code and avoid mistakes, and amazingly, all of them have no-cost options.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=107)** In this course, I'll be using RStudio by Posit.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=111)** It's popular, but by no means the only option available.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=115)** I have also used Visual Studio Code and dabbled with several other products.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=120)** Whatever IDE you choose will be fine.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=123)** And of course, if you're unhappy with the IDE you are using at the start of this course, simply pause the video and choose another.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=130)** We'll be happy to wait for you to catch up and get settled.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), nlp (1)
> **Code Keywords:** function (1), class. (1)
> **Tools:** vs code (1), visual studio (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 12. 11. Use of Tidytext for NLP

#### How to think like tidytext
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=1)** - [Instructor] Many natural language processing packages work with lists and matrices.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=7)** These objects are commonly described as corpora, collections of documents, and document term matrices, documents showing term frequency in a collection of documents.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=20)** In contrast, tidytext subscribes to tidyverse concepts.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=25)** The tidyverse is a collection of packages based around three rules of data.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=30)** Each variable is a column.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=32)** Each observation is a row and each type of observational unit is a table.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=40)** Tidytext brings these concepts to text mining, resulting in a document structure with one word or token per row.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=48)** There isn't an inherent advantage of one method over another, but if you are used to data in one form or another, you may find it easier to work with what you already know.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=59)** For example, if you haven't used the tidyverse in the past, this type of data representation and the associated coding syntax can seem confusing and obscure.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=70)** In contrast, if you've worked with the tidyverse and understand pipelining, which is %&gt;%, and tools such as dplyr or lubridate, you may be more comfortable using tidytext for NLP.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=86)** For example, where tidytext relies on existing tools such as dplyr and count to produce the same statistics, many base-R NLP packages provide specialized tools to find the most frequent terms in a document term matrix.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=103)** In this course, we'll be entirely focused on the tidytext method of NLP.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=108)** If the tidyverse isn't your preference, you may want to explore other courses in this library that cover other NLP tools.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (4)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### An example: Calculate the most popular terms in a document
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=1)** - [Instructor] I could spend a lot of time talking about theory and practice behind natural language processing, but we're talking about how to use tidytext to do that.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=10)** So let's dive right in.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=12)** Let's start with an easy concept, frequent terms in a document and how would you use tidytext to calculate that number.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=22)** Before we start this example, you'll want to make sure that your current working directory points to the working files that we'll be using.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=30)** To do that, make sure that your right hand corner shows the Patchwork Oz, Wonderful Wizard of Oz, OSMA Oz and Oz Hungry Tiger text example files.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=42)** Go up to more, set as working directory.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=46)** This will allow the code that we're using to understand where to find the files it needs.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=52)** In the example file 0102, I've started in line eight with three libraries you'll need.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=59)** The first is the tidyverse library, the second is tidytext, and the third is a library called readtext.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=68)** Now we're ready to start exploring how to use tidytext to calculate term frequency.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=74)** In line 12 through 17, I've set up a chunk of tidytext code.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=80)** When we run it, you'll see that I receive a list of terms, Dorothy with an N of 347, which means that the word Dorothy appears 347 times, Scarecrow appears 219 times.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=97)** Let's look at the code to see where this actually came from.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=100)** In line 12, I'm using the read text command to read WonderfulWizardofOz.text.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=109)** This is just simply the text of the book "Wonderful Wizard of Oz."
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=114)** In line 13, I use unnest underbar tokens and we'll talk quite a bit about unnest tokens in a future session, what unnest tokens does is take all the words of WonderfulWizardofOz.text and convert them to one word per row.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=133)** In line 14, I use filter to remove all of the numbers in the text.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=140)** Then in line 15, I use anti-join to remove stop words and we'll talk quite a bit about stop words in another future session.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=149)** Finally, in line 16, I use the standard tidyverse count function to give me a count of each word and I told it to sort it.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=159)** Then in line 17, I've used the print command to show 10 lines from the resulting table and that's what shows up down in a console.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=168)** This should serve to give you a reminder of what the tidyverse looks like in terms of code and also to give you a kind of a preview of what we'll be talking about when we talk about tidytext and natural language processing.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=184)** Let's take a look at these lines in more depth.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), from. (1), finally, (1), function (1)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** before we start (1), you'll need (1), set up (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** osma (1)
> **Speakers:** - [instructor] (1)

#### Tokenizing with unnest_tokens( )
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=1)** - [Instructor] tokenizing is at the heart of natural language processing and tidytext provides some useful tools to do that.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=10)** In this session, let's look at how tokenizing is accomplished with tidytext.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=14)** Right up front, tidytext uses something called unnest tokens to accomplish this task, here is some code to accomplish this.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=25)** In order to run this code, of course you'll need to make sure that your current working directory points to the exercise files where it can find wonderful wizard of oz dot text.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=35)** In line five, six, and seven I've shown how to use libraries to bring in a tidyverse, tidytext, and readtext.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=43)** Now I'll need the text of wonderful wizard of oz dot text, and in line nine I use read text to bring that in and place it into a tibble.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=53)** Let's take a quick look at that tibble just so we know what we're talking about.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=56)** You can see that there are two fields and one record.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=60)** The first field is doc id, which in this case is the name of the text file we brought in.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=66)** The second column is text and this is the entire text, all in one field.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=72)** In some cases, there may be multiple rows, one for each document.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=78)** In line 11, I've set up a very basic tokenization command in tidytext, line 11 takes the wiz oz tibble which we just created and pipes it through unnest tokens.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=92)** In unnest tokens, we've said our tokens should be words.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=97)** The input is a field called text and the output will be wiz words.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=104)** Since I didn't select an output tibble this is sent to the console and you can see this down below.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=110)** WizOzTibble has one observation of two variables.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=114)** One observation being the document and two variables being doc id and text.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=120)** But you'll notice that the new object that we've created consists of 42,972 documents and zero doc variables.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=132)** Well, this is a little confusing, but if we look down at the actual output, we have a doc id, which is the name of the document.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=140)** The second column is wiz words, which you'll see in line 13 was our output column.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=146)** And then there's the text, which is what the original text was that we took the wiz word from.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=151)** If we scroll down a bit, you'll see that wiz words is actually each individual word in the entire document.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=158)** The, project, Gutenberg, ebook.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=162)** And if we were to look at the actual text, you would see that that would be the first six words.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=168)** Now, the first thing to understand is that tokens don't have to be words.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=172)** And in line 17, I've taken the exact same code we just looked at.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=177)** But you'll notice that I've changed the token from words to paragraphs, and when I run that, you'll see that wiz words now contains each paragraph taken from the document Wizard of Oz.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=190)** Line 20 accomplishes exactly the same thing.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=195)** But what you'll notice is instead of using unnest tokens in line 17, I'm now using unnest paragraphs and token equals paragraphs has disappeared.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=207)** Tidytext provides unnest paragraphs as a wrapper around unnest tokens with tokens set to paragraph and I'll be using those wrapper functions from tidytext in the future lines of this segment.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=221)** In line 24, I have unnest sentences, and this is almost like paragraphs, but in this case, I'm looking at sentences.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=231)** In line 26, I have unnest characters, and when I run that you'll see that each line is an individual character from the document Wizard of Oz.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=242)** You can see that the number of documents has increased exponentially.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=246)** In line 28, I have lines and lines are defined as line returns in the document itself.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=254)** This may or may not correspond with paragraphs or sentences.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=259)** Another important concept in natural language processing is something called ngrams and ngrams are combinations of words.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=268)** In line 32, I've changed our example line to use unnest ngrams and you'll notice that in line 34 I've said n equals three.
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=279)** When we run line 32, what you'll see is that wiz words now contains sets of three words.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=287)** The first line is the Project Gutenberg.
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=290)** The second line is Project Gutenberg ebook.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=293)** The third line is Gutenberg ebook of, what you should notice is that unnest ngrams has combined each group of three in a series.
>
> **[5:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=305)** This creates a rather large document but can be useful for identifying phrases.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=311)** In line 37, I've used unnest character shingles with an n of four.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=319)** When I run those lines what you'll see is just characters instead of words.
>
> **[5:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=325)** And again, this can be useful for identifying keywords that may not break at specific word segments.
>
> **[5:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=333)** Skip ngrams are similar to ngrams but in this case they skip words.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=339)** In line 42, I've used unnest skip ngrams with an n of three and a k of two.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=347)** Now what you're seeing is the, followed by the project, followed by the Gutenberg, and what you're seeing is that k which is equal to two, that's in line 45 of the code has said, skip two words, but give me combinations of three, and wherever it can, skip ngrams will try to follow that formula.
>
> **[6:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=370)** Tidytext provides other specialty tokenizers.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=374)** The penn treebank tokenizer handles special cases and what we'll do is we'll run this and I have created a tibble called ptbk tokens.
>
> **[6:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=386)** Let's take a look at that.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=388)** I've made a note to look at line 54.
>
> **[6:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=390)** Now, what you should notice is line 54 has re-use, the PTB tokenizer doesn't always strip out punctuation as you might expect in line 54.
>
> **[6:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=402)** In certain cases, this will be useful and you might want to take a look and compare to how that changes.
>
> **[6:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=408)** Now in our case, I can run 53, which is the original and let's take a look at the standard tokens versus the PTB tokens, and if I look down at 53, you'll see that use is on its own and above it is re.
>
> **[7:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=426)** Recall that in PTB tokens in line 54, re-use was kept together.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=434)** Finally, if none of those tokenizers accomplish what you want you can use regular expressions.
>
> **[7:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=440)** In line 58, I've used unnest regular expression with a pattern that says search for two or more vowels.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=449)** When I run that, what you'll see is that the tokenize has broken up the wonderful Wizard of Oz at instances of two vowels.
>
> **[7:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=459)** So for example, ebook has two vowels, oh oh, and you'll see in lines one and two that that break has happened at ebook.
>
> **[7:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=469)** Now my example may not be particularly useful but in your case, if you're dealing with specific documents, say text documents or scientific writing, you may find that there are specific cases where you want to break that don't make sense in normal text.
>
> **[8:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=486)** So to summarize, what we've been talking about is tokenizers.
>
> **[8:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=490)** Tokenizers break long documents down into smaller significant chunks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (3), this. (1), from. (1), finally, (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** ptb (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** you'll need (1), set up (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)

#### Stopwords, punctuation, whitespace, and numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=1)** - [Instructor] Tokenizing is breaking a document into small chunks.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=5)** Most often this is words, but tokenizing can also break things into paragraphs or sentences or individual characters, punctuation, numbers, or whitespace.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=17)** Some of these tokens are not useful for doing statistics.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=22)** For example, numbers may not add context to what you're trying to understand, and there are many words that are only there for human consumption.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=32)** They really don't add additional meaning.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=35)** Let's take a look at removing punctuation, whitespace, numbers, and something called stop words.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=41)** The sample code I've provided starts in line four by bringing in the tidyverse, tidytext, and readtext libraries.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=50)** In line eight, I create a sample tibble called term frequency.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=55)** This is "The Wonderful Wizard of Oz" text, unnested or tokenized into individual words, and then each word is counted.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=64)** Let's take a look at what term frequency looks like.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=68)** The first thing you might notice is we start off with a number of numbers, 0, 1, 1500, and it's not until later on in the tibble, line 32, where words actually start to appear.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=82)** What you don't notice is that punctuation and whitespaces are already taken out, and unnest_tokens does this for us.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=92)** If we'd like to see what those look like, I can go down to line 17, and you'll see in line 19 and 20, I've removed the strip punctuation command, and I've also told unnest_tokens not to change everything to lowercase.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=111)** I'll run that, and let's take a look at the change in term frequency.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=116)** Ah, you'll notice immediately that there's punctuation.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=120)** There is a dash, and an em dash, and a comma, and a semicolon.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=124)** There are numbers.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=126)** Somewhere in here are returns and whitespaces.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=129)** Notice in line 81, actual has not been changed to lowercase.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=135)** In line 86 and 87, lowercase additional counts for two, but if you capitalize additional, it counts for an extra one.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=144)** Well, should this be three instances of additional?
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=148)** The best way to do that would be to change line 87 additional to lowercase.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=153)** Let's start with numbers.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=155)** In line 24, I've set up some tidytext code that will remove numbers.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=161)** I'll run that.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=162)** Notice that in line 26 and 27, I've used the filter command.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=167)** These two lines accomplish the same task, which is to remove digits from the list of tokens.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=175)** The only difference happens to be in the regular expression I've used.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=179)** Let's take a look at term frequency to see what the difference is.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=183)** Well, you'll notice immediately that the punctuation is gone, and you'll also notice that the numbers have disappeared.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=190)** Note that I did not use strip punctuation equals false.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=194)** I did not use to_lower equals false.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=198)** But I did remove those numbers.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=201)** Looking at term frequency, we have a list of words that we can probably perform some useful statistics on.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=208)** But what about things like a, or the, or or?
>
> **[3:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=215)** These are considered to be stop words.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=218)** Let's take a look at what people consider to be stop words.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=222)** When I run line 32, you'll see that the console pulls up a list of stop words.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=228)** These actually aren't stop words.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=229)** These are lists of stop words.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=233)** In line 34, I run stop_words, and this is a list of all of those stop words themselves combined into one tibble.
>
> **[4:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=242)** You'll see here we have, in line one, an a, or able, or about, or above.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=250)** These are from the SMART lexicon.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=254)** If we looked further at the stop words tibble, we'd see that there are other lexicons represented as well.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=260)** Again, these are words that don't necessarily add meaning to the text.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=264)** So, how do we remove these from the text?
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=268)** In line 36, I've set up some code to remove stop words.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=273)** This is done in line 40, where I use the anti_join, and I've said get_stopwords from the nltk lexicon, and I want to remove these overlapping with the column labeled word.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=288)** I'll clear the console, and then I'll run lines 36 through 41.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=295)** Now, if we take a look at term frequency, you'll notice that there are still numbers, because I have not removed those, but many of the stop words that we were previously looking at are gone, for example, a.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=308)** Now, the words start with abide, which is a useful term that we can actually do statistics on.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=314)** In line 38 and 39, I've provided other alternative methods for removing stop words.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=321)** And if you have time, you might want to experiment with those two lines to see what the difference is.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=327)** Finally, in lines 44 through 48, I've combined all of these filters.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=334)** In line 46, I remove numbers.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=337)** In line 47, I remove stop words.
>
> **[5:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=340)** You'll recall that the default is to remove punctuation.
>
> **[5:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=344)** If we take a look at term frequency, you'll notice that we start with abide.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=349)** All of those numbers are gone, the punctuation is missing, whitespace has been removed, and stop words are nowhere to be seen.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=357)** One note of caution, stop words are useful, but these are just simply dumb lists of words.
>
> **[6:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=364)** In your particular industry, some words may have meanings outside of just being a useful way to read a text.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=374)** It's worth your time to experiment with stop words, to experiment with different lists of stop words, and to be aware of what stop_words is actually doing to your text and how that might affect your results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (1)
> **Code Identifiers:** unnest_tokens (2), stop_words (2), to_lower (1), anti_join (1), get_stopwords (1)
> **Definitions:** is a  (3)
> **Warnings:** note that (1), caution (1), be aware (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (2)
> **Env Vars:** smart (1)
> **Exercise Files:** sample code (1)

#### Stemming and lemmatization
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=1)** - [Instructor] Stemming and lemmification are two related concepts.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=5)** They're both designed to aggregate words to improve statistics on token counts.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=12)** Let's take a look at how to do both processes and talk a bit about the concerns you might have with stemming and lemmification.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=21)** I've set up some sample code and in line five, six and seven I bring in the tidy verse, tidy text, and read text libraries.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=30)** Let's start with stemming with something called snowball C.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=34)** Snowball C is a standard stemming library.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=38)** Let's run the code in line 12 and then take a look at the results of using word stem which is part of the snowball C package.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=47)** I'm going to click on stemmed and you'll see a table with three columns, doc id, the original word and the stemmed word.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=58)** Look down at line 13, the original word was restrictions.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=63)** Snowball C has converted that to restrict.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=67)** If we look through the document anywhere you saw restrictions or restrict or restricted all three of these would've been changed to restrict, changing the count of that particular token.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=82)** Even more interesting as line 14 where whatsoever has been abbreviated to what so with an ev, based on the rule used by stem, whatsoever has been changed to this abbreviation.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=97)** Now look at line 15.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=100)** Copy C O P Y has been changed to C O P I and stemming algorithms will oftentimes remove the Y and replace it with an I.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=113)** So you'll see copy or copied or copying all coming up as the same word.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=118)** Now what you might want to do is add count and I've set this up for you in line 19 and 20.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=126)** If you remove that and put the pipeline at the end of line 16, stemmed will now have a count of all of those words and we can take a look and see how that's affected our original text.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=138)** Note that Dorothy, which ends in Y and now ends in I has been changed to 347 terms.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=145)** In line 15, City has been changed to C I T I and in line 17 country has been changed to C O N T R I and this is all the result of stemmification.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=159)** Snowball C is one library, but there are others and they all have different ways of performing stemming, in line 20, I've brought in the huns spell library and in line 22 through 27 I use the hun spell stem command to do the stemming process.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=177)** Notice the changes in line 13 answered and answer now appear as a combined vector instead of just one word, country still maintains its Y at the end, in line 12, city maintains its Y.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=193)** What you should note is the huns spell stemming algorithm behaves differently than the snowball C stemming algorithm, stemming works with an algorithm to change words to common representations, lemmification in contrast uses a dictionary to look up words and substitute other words that may be similar to them.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=218)** In line 32 and 33, I've created a lemma dictionary based on the words in wonderful Wizard of Oz dot text with the hun spell engine, I'll go ahead and run that and we have lemma dictionary.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=233)** Let's take a look at what that actually looks like.
>
> **[3:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=235)** In line one, we see that the token is is but the lemmification of it is a simple I.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=243)** In line two, United has become unite, line three states has become state.
>
> **[4:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=249)** You can see how the lemmification dictionary pulls up a related word.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=255)** When we take that lemmification dictionary and apply to the original text, we'll see substitutions happen.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=263)** In line 35 through 41, I've created a comparison table that will show us the original token, two versions of stemming and lemmification.
>
> **[4:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=274)** Let's take a look at how that works.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=276)** In the upper left hand corner you'll see the original word followed by the snowball C stemming then followed by the hun spell stemming followed by the hun spell lemmification.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=289)** Wonderful is stemmed as wonder by snowball c, hun spell leaves it alone in both stemming and lemmification.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=299)** Look at line six.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=301)** United is stemmed as unite or unit U N I T.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=306)** The hun spell stemming leaves it alone but huns spell lemmification changes it to U N I T E.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=314)** It's worthwhile to take a look at what stemming and lemmification are doing to your document before you trust them to perform statistics.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=323)** The results you get may be useful or you may find that lemmification or stemming has obscured some of the important concepts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** sample code (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### Term frequency with bind_tf_idf( )
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=1)** - [Instructor] Natural language processing uses a sophisticated statistic called term frequency and inverse document frequency.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=11)** The math behind this particular statistic is deep and I'm not going to go into it right now, instead of what I'm going to do is spend time showing you how to compute this particular statistic.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=23)** I've set up code and in line five, six, and seven I bring in the necessary libraries, tidyfirst, tidytext and readtext.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=31)** The first thing I want to show you is a standard term frequency, which is what we've been using all along.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=37)** Term frequency is simply the number of times a word appears in this document.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=43)** Now, this is a bit different than the term frequency used in TFIDF.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=49)** In TFIDF, term frequency is compared to the number of documents.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=55)** One of the other things that's important about TFIDF is you'll need to know the number of words in a document.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=63)** In line 17 and 18, I've provided you with this code, but we don't need to run that as it will be provided for us.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=69)** There's another note about term frequency inverse document frequency.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=74)** This statistic will fail if you're only using one document.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=79)** You need to have a collection of documents and term frequency inverse document frequency will identify the most likely document attached to a specific word or token.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=92)** In lines 26 through 31, I've set up ID text's bind TFIDF to calculate this statistic.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=101)** Let's run it and then look at the results.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=104)** Now, there's a couple of notes.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=106)** In line 26, I've used list.files with a pattern.text to bring in a collection of documents.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=115)** In line 28, I used unnest_tokens to break those documents into individual words.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=122)** In 29, I count based on each document and each word.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=128)** Then in line 30, I use the bind_tf_idf and I've arranged this in descending order according to that statistic.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=139)** Let's take a look at the result and see what's actually happened.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=143)** Under doc id, you'll notice that there is several different documents.
>
> **[2:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=148)** The first one is Oz Hungry Tiger.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=151)** Down in line five is Patchwork Oz, and if you look down in line 12, you'll see Ozma of Oz.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=159)** The word column shows individual tokens for each document.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=164)** In this case, Betsy and Carter, Rash, Ready, Ojo, these are all members of the documents listed to their left.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=174)** The third column, labeled N, is the frequency of each token in each document.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=180)** So Betsy appears 327 times in the Hungry Tiger of Oz.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=186)** Carter appears 188 times in the Hungry Tiger of Oz.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=191)** Now we have three new columns, TF, IDF, and tf_idf.
>
> **[3:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=198)** Term frequency is different than N in that term frequency has been divided by the number of documents.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=206)** Inverse document frequency is a statistic generated from a number of documents and a number of terms.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=213)** And then finally, the last column is the most interesting statistic, tf_idf.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=221)** Without going into the actual statistics itself, what we know is that the best place to find the word Betsy would happen to be in OzHungryTiger.text.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=233)** The higher the TFIDF, the more likely that a particular word is associated with the document.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=241)** To bring this home, when you do an internet search you provide a word or a phrase.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=247)** TFIDF could be run against a series of documents to find out which document you are searching for.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=255)** Earlier we spoke about ngrams which are combinations of tokens.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=260)** In line 34 through 41, I've created a TFIDF using ngrams.
>
> **[4:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=269)** In line 36, you'll notice them, token ngrams with an N of six.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=275)** Let's run line 34 through 41, and then take a look at TFIDF_Oz.
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=283)** What you should notice is that the doc ID is still the name of the document but the word column indicates longer ngrams the Wicked Witch of the West, which happens to be six words.
>
> **[4:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=297)** This is all one token.
>
> **[4:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=299)** The number of times this phrase appears in Wonderful Wizard of Oz is listed in the third column labeled N.
>
> **[5:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=308)** So in this case, the Wicked Witch of the West appears 12 times in the Wonderful Wizard of Oz.
>
> **[5:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=314)** In the following three columns we can see the calculation for TFIDF.
>
> **[5:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=319)** If I was going to look for the Wicked Witch of the West, I would most likely find it in the Wonderful Wizard of Oz.
>
> **[5:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=327)** If I was going to look for the soldier with the green whiskers that would most likely appear in Patchwork Oz.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=335)** So you can start to see the usefulness of TFIDF.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=339)** When you're searching for words, or tokens, or ngrams, phrases, you can use the statistic to indicate the most likely document that that particular token will appear in.

> [!info]- Semantic Content
>
> **Env Vars:** tfidf (9), idf (1)
> **Code Keywords:** let (3), case, (2), finally, (1), for. (1)
> **Code Identifiers:** tf_idf (2), unnest_tokens (1), bind_tf_idf (1)
> **Prerequisites:** set up (2), you'll need (1), you need to have (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### Sentiment analysis with sentiments( )
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=1)** - [Instructor] Sentiment analysis is a natural language processing tool used to determine the intent of a document.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=10)** By attaching values to words, we can determine whether a document is intended to be negative or positive or angry or happy.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=20)** Let's take a look at how tidytext implements sentiment analysis and let's take a look at why you might be concerned about how sentiment analysis operates.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=32)** In line three, four, and five, I bring in the tidyverse and tidytext packages.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=39)** Then in line eight is the sentiments command.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=43)** And sentiments provides for us a list of words, you can see these down in a console, followed by a sentiment, in this case, negative.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=53)** So if you look at line two, abnormal is ranked as negative.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=60)** Line nine provides us with all of the sentiments available in this particular dictionary, and you'll notice that only negative and positive appear as sentiments in this particular dictionary.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=74)** What you're seeing is that somebody has created this particular list of words and in their view, their judgment, words like abomination is a negative word.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=85)** This is the immediate concern you should have.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=88)** Did the person who subjectively assigned values to words do it in a way that you would agree with?
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=95)** For example, if you're looking at a financial document, the word bear, as in bear market, might be a negative word.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=104)** If you're doing ecological research on bear habitats, bear might be a good term.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=111)** There are several different dictionaries available.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=115)** The most common are Afinn, NRC, Bing, and Loughran.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=120)** We can take a look at these different dictionaries.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=123)** In line 12, you'll need to install the text data package and this provides us with the ability to use get sentiments with the NRC lexicon, and I'll run that.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=135)** This shows us the contents of the NRC lexicon.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=139)** Now you'll notice that each word has more sophisticated sentiments.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=144)** Abacus has trust and abandoned has fear.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=149)** Abandoned also has a negative sentiment, and abandoned also has a sadness sentiment.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=156)** The NRC dictionary allows us to have multiple sentiments for individual words.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=162)** We can choose which collection of sentiments for each word to use.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=168)** In line 16 through 20, we've attached the original sentiments dictionary and we can take a look at that table.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=176)** You'll notice that the first column is the document ID where this particular token came from.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=182)** The second column labeled word is actually a series of tokens.
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=186)** The third column is sentiments attached to those particular tokens.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=191)** In line 23 through 27, we perform the identical task, but this time we're using the NRC lexicon.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=199)** Let's take a look at the difference there.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=202)** Ah, now we can see that words have more sophisticated sentiments.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=206)** Joy, positive, surprise, trust, anticipation.
>
> **[3:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=210)** Be aware that I haven't applied any count functions so we don't know how many times joy has appeared or how many times wonderful has appeared.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=219)** I can add this count by attaching line 30 to the end of line 27 and rerunning that code.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=227)** Now, when we look at sentiments odds, we'll see that, oh, well, it seems to be a very positive document because 2122 of the phrases of the tokens appear as a positive, less so is negative at 1454.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=245)** How about in line three, we're told that this is somewhat a fearful document, much more so than a surprising document or a disgusting document.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=257)** Obviously, sentiment analysis provides us with a whole list of values that we can generate on statistical analysis.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=266)** It's important to be careful to realize that the initial intent of these dictionaries were created by someone and are somewhat subjective in nature, but sentiment analysis can give us a view into the intent of a document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), implements (1), case, (1), from. (1)
> **Env Vars:** nrc (5)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1), be careful (1)
> **Prerequisites:** you'll need (1), install (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Parts of speech with parts_of_speech( )
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=1)** - [Instructor] Natural language processing uses a tool called parts of speech to identify tokens in context.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=10)** Let's take a look at how tidy text implements this concept and why it might be useful or why you might want to be concerned about what parts of speech is doing.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=21)** In line three, four, and five, I brought in the tidyverse tidy text and read text packages.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=27)** Then in line seven, I've called up parts of speech.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=32)** If you look down in the console, you'll notice that we have a tibble with two columns, Word and POS or parts of speech.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=41)** Each word has an associated part of speech, adjective, noun, verb, things like that.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=49)** You'll notice that there are 208,000 different terms located in this particular document.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=56)** In line eight, I can use the unique command to list all of the different parts of speech available in this particular dictionary.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=64)** Adjective, noun, plural, adverb, lots of verbs, noun phrases, someone or a group of someones have gone through and for each word in the original dictionary have attached the part of speech.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=80)** In line 10 through 14, I've attached these parts of speech to the tokens from "Wonderful Wizard of Oz" and when we run that, we can open up that document and look and see what's been identified.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=95)** The first column is document ID which is where this word came from.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=99)** The second column labeled word is actually a token, and you can see that we have project as the first row word column.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=110)** The third column is labeled POS which is the part of speech, and in this case project has been labeled as a noun.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=119)** Look at line two.
>
> **[2:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=122)** The word project appears again.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=123)** This time it's labeled as a verb, the same thing for three and four.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=129)** Well, that's because project can also be project which is a verb.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=136)** Project is a noun.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=138)** Some words, depending on their context, can mean different things, and that's one of the initial concerns about parts of speech which is are you identifying the correct part of speech for the context of the word?
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=156)** Now, there's a question of what do you actually do with all this information?
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=160)** And I've set up a somewhat frivolous method of using parts of speech.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=166)** In line 17 through 19, I create a very simple parts of speech called POS_OZ.
>
> **[2:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=174)** Let's take a look at that.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=176)** Once again, you can see that there is a document ID.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=179)** There is a word, and there is a part of speech.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=183)** In line 21 through 29 at creative function, briefly what this does is identify a type of word that I'd like and get a word returns a random instance of that in the "Wonderful Wizard of Oz" text.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=200)** When I define that, I can use it in line 31.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=204)** Line 31 will return a random noun.
>
> **[3:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=208)** In this case, it returned hurt.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=211)** If I run it again, it returns cottage.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=214)** Now, whether hurt is a noun or not depends on if you believe the dictionary.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=220)** What can I do with the get a word function?
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=223)** Look at line 33 through 36.
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=226)** I've created a very, very simple chatbot that randomly goes through and assembles sentences based on a pronoun, followed by a noun, followed by an adverb, followed by another verb.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=239)** When I run line 33, you'll see I received the phrase, what down the will.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=246)** If I run it again, them strong, some pride.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=251)** In this case, I'm using parts of speech to identify words for the correct position in a sentence.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=258)** My example is incredibly simplistic, but you can start to see how parts of speech affect analysis of a particular document.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), case, (2), implements (1), from. (1)
> **Definitions:** is a  (6)
> **Env Vars:** pos (2), pos_oz (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Import and export from other NLP packages
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=1)** - [Instructor] This entire course has been about how to use tidy text and the tidy verse to do natural language processing.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=9)** There are many other natural language processing tools such as Quantida or TM or UD Pipe.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=18)** Tidy text provides tools to import documents created in those packages into a tidyverse universe.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=26)** Let's take a look at how to bring in corpora or collections of documents into the tidyverse slash tidy text universe.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=35)** In line two, I've brought in the tm or text mining package, followed by tidy verse and tidy text.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=45)** In line seven, I've created something called a v corpus and it's important to notice that you can't use corpus or simple corpus, which are two document structures in the text mining package.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=57)** The V corpus searches through the particular directory that we're currently in for any files ending in .txt and imports them into a tmCorpus.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=70)** Well let's take a look at that and what you'll see is something that looks very different than what we've been working with.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=76)** There is a list of documents, and then each of those is a list in itself that contains content and metadata.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=86)** For a deeper understanding of what this particular corpus actually contains, there is a class on tm located in this library.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=96)** In line 11, I've set up tidy text code to import tmCorpus into the tidy universe.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=104)** This is all done by line 12 where it just says tidy, tidy the corpus.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=110)** When we run that, we can take a look at the result.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=114)** When we take a look at this file we see something that looks much more familiar to the tidy text list of tokens that we've been using in the past.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=123)** There is an addition of some metadata, author, date, timestamp, description and heading, but there is a document ID and a token, the Project Gutenberg ebook.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=136)** Once we've used the tidy command, we can now use all of the tidy text commands that we're so used to in our approach to natural language processing.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **Code Keywords:** let (2)
> **Code Identifiers:** tmcorpus (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 13. 12. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=1)** - [Mark] Tidytext provides a well-designed set of tools for natural language processing using tidyverse concepts and packages.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=10)** It doesn't have all the bells and whistles provided by other NLP packages such as Quanteda, tm, or Udpipe, but coupled with dplyr and other tidyverse tools, it accomplishes everything you'll need for effective text mining.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=28)** In this course, I've provided you with guidelines and insights into natural language tools and techniques, but this field of knowledge is growing and changing at a rapid pace.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=40)** Shifts in language require new approaches to NLP, for instance, stemming algorithms will need to understand how to work with multiple languages.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=49)** Stop words will need to accommodate changes to pronouns, such as they and them.
>
> **[0:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=56)** And of course, our technology changes.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=59)** Online cognitive services provide exciting new tools, and hardware is becoming faster, specialized, and more capable.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=68)** Most recently, artificial intelligence has advanced natural language processing and participates in conversations ranging from amusing to alarming.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=79)** By completing this course, you have a basis for understanding how NLP works and can make educated guesses about the next research advances.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=88)** I'm excited about this emerging field, and I hope you are as well.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=93)** Thanks for joining me for Natural Language Processing with tidytext.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (3)
> **Analogies:** such as (2), for instance (1)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [mark] (1)


### 14. 13. Introduction to NLP with Quanteda R

#### Welcome to natural language processing with R
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=1)** Natural language processing lets you mine huge collections of text, such as transcripts of every political speech for an election or every quarterly earnings call for a company.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=14)** Is a candidate optimistic or pessimistic about the economy?
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=18)** Are analysts going to recommend you buy or sell a certain stock?
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=23)** Quanteda, a framework for natural language processing lets you process text data faster and easier, providing results to gain insight.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=34)** Hi, I'm Mark Niemann-Ross.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=36)** Join me to learn how to leverage Quanteda in your next text mining, Natural Language Processing Project.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Skills and tools you need
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=1)** This course will introduce you to the use of quanteda for natural language processing, research and text mining with the R programming language.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=11)** Quanteda is a framework for natural language processing.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=15)** It's much like TM or Tidy text.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=20)** Before we start, I assume you already have a basic understanding of the R programming language.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=27)** Ask yourself these questions.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=29)** Do you understand how to create and use a vector in R?
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=34)** Do you understand how to create a function in R?
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=38)** Are you familiar with installing and linking an R package?
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=43)** Finally, can you run an R program and debug errors?
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=48)** These are simple tasks, but if you can answer yes, then you have the rudimentary knowledge of R required to get you through this class.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=57)** If you aren't sure about these concepts, you might want to look at one of the beginning R courses in this library.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=64)** Another alternative is to take the LinkedIn skills assessment test.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=69)** You'll find it via your profile.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=73)** Go to LinkedIn, then look in the upper right photo, view your profile.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=80)** Go to skills, demonstrate skills, take a skill assessment and search for R. You'll find the R programming language skill assessment test.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=94)** Go ahead and take the test.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=96)** If you score in the top 30%, you're good to go.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=99)** Likewise, you won't need advanced statistics skills, although anything you know will be helpful with text mining.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=108)** An integrated development environment such as RStudio Visual Studio Code or R Commander will simplify the programming you'll need to do to explore NLP.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=119)** These IDEs will help you write efficient code and avoid mistakes.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=125)** Amazingly, all of them have no cost options.
>
> **[2:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=130)** In this course, I'll be using RStudio by posit.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=134)** It's popular, but by no means the only option available.
>
> **[2:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=138)** I have also used Visual Studio Code and dabbled with several other products.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=144)** Whatever IDE you choose will be fine.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=147)** And of course, if you're unhappy with the IDE you are using at the start of this course, simply pause the video and choose another.
>
> **[2:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=155)** We'll be happy to wait for you to catch up and get settled.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=158)** Finally, this course assumes you have a passing familiarity with natural language processing concepts, such as using a corpora to collect documents, tokenizing, stemming and stopwords.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=172)** I'll demonstrate how to accomplish these tasks with R and quanteda, but I won't spend much time explaining why you would want to do so.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=180)** Text mining and natural language processing is a science to itself and takes dedicated study to use it effectively.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=188)** Hopefully you don't feel discouraged by all these warnings.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=191)** Quanteda is an excellent package for R with a wide range of well thought out tools for natural language processing.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=199)** The more you know going into the course, the more you'll learn from these sessions.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), function (1), class. (1)
> **Env Vars:** ide (2), nlp (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** before we start (1), required to (1), you'll need (1)
> **CLI Commands:** find (2)
> **Tools:** visual studio (2)
> **UI Navigation:** go to (2)
> **Analogies:** such as (2)


### 15. 14. Getting Started with Quanteda

#### Introduction to quanteda
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=1)** Quanteda is an alternative text mining framework similar to TM or tidy text.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=9)** Quanteda is short for Quantitative Analysis of Textual Data.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=14)** There are several reasons you might dedicate some time to learning quanteda for natural language processing.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=22)** It does everything you expect an NLP framework to do, but there are three particular advantages.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=29)** First, quanteda is faster than TM or tidy text because core functions are written in C++ and support multithreading.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=39)** Second, quanteda is written to be extended with plugins and supports connectivity with other text mining applications.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=47)** Finally, quanteda defaults to sparse matrices for all data objects.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=53)** This saves memory and provides better performance.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=58)** Quanteda is easy to learn since functions are named according to their class.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=63)** It's easy to guess the correct syntax and to see which functions are available for what objects.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=70)** For example, all of the corpus functions begin with corpus under bar.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=77)** When first learning quanteda, it's helpful to remember three concepts.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=82)** First, documents are at the heart of natural language processing and they are collected into corpora.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=91)** Second, a corpus can be tokenized.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=95)** And third, tokens can be used to create a document feature matrix.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=101)** In the next chapters, we'll learn more about how these three concepts work together to provide a rich set of natural language processing tools.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), class. (1)
> **Definitions:** is an  (1), short for (1)
> **Env Vars:** nlp (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### Install quanteda
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=1)** Normally, installing a package in R is straightforward.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=5)** Just use instal.packages and if the package is on CRAN, you're all done.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=10)** However, quanteda has chosen to break parts out into separate packages.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=17)** So instead of one install, there are many.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=20)** I've included a complete list in the exercise files.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=23)** Well, let's step through the different packages and explain their purpose.
>
> **[0:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=28)** The first and most obvious step is installing quanteda.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=34)** There are a few standard packages that go along with the base installation.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=39)** Textmodels includes some example datasets and functions for advanced calculations.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=46)** Textstats provides functions for statistics on words such as frequency or readability.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=54)** Textplots provides visualizations such as word clouds and networks.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=60)** In addition to the basic quanteda packages, there are other recommended packages.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=65)** These are all authored by Kenneth Benoit, who is the main author of quanteda.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=71)** He chose to break these out because so many R programmers were using these for more general purposes or in other NLP packages.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=80)** Readtext is useful for reading text files.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=83)** Spacyr provides access to the spacy text processing library.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=90)** Stopwords provides several dictionaries of stop words.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=95)** Next is a list of packages still in development or not on CRAN for various reasons.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=101)** These are hosted on GitHub and can be installed with the condition that you have first installed the dev tools package.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=109)** Quanteda.corpora provides additional data libraries as pre-built corpora.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=116)** Quantity.sentiment provides tools for sentiment analysis.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=120)** Quantity.tidy extends dplyr to work with quanteda objects.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=126)** Quantity.dictionaries provides several datasets for analysis of corpora.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=133)** When you've installed the quanteda packages you find useful, don't forget to use the library command to bring them into play.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=143)** After you've installed all of these packages, you may also want to change some options.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=149)** In particular, you may want to check the number of threads.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=153)** Most R packages will only use two threads, but your computer may support more.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=159)** This depends on the number of cores and RAM you have available, but try increasing this number to see if your performance increases.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=168)** Quanteda will probably release additional packages in the future.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=172)** So it makes sense to watch for additional packages.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=176)** Watch [quanteda.io](https://quanteda.io) for periodic announcements.

> [!info]- Semantic Content
>
> **Env Vars:** cran (2), nlp (1), ram (1)
> **Code Keywords:** let (1), extends (1)
> **Analogies:** such as (2)
> **Best Practices:** recommended (1), don't forget (1)
> **CLI Commands:** find (1)
> **URLs:** [quanteda.io](https://quanteda.io) (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)


### 16. 15. Understanding Corpora

#### Create a quanteda corpus
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=1)** Natural language processing works best when documents are collected into a consistent data structure.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=8)** These data objects are called corpora.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=10)** Quanteda provides five ways to create a corpus, vector, and data.frame are the most common.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=19)** Quanteda also provides methods for the quanteda keyword in context object or quick, a vcorpus from the TM package and another quanteda corpus object.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=34)** Creating corpora is easy.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=37)** Let's take a look at some examples.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=40)** We're looking at some R code in RStudio. In line one, the first thing we do, of course, is to load in the quanteda library.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=50)** In line eight, we're going to create a named vector, which we'll eventually turn into a corpus for quanteda.
>
> **[1:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=60)** To create myNamedVector, I just simply select line eight, and on my Macintosh, I hit command returned to run that code.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=68)** I'm going to add some names to that vector.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=72)** And let's take a look at what myNamedVector actually appears to be.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=76)** If I open up the console, you'll see here at the bottom that we have four named objects in a vector; first, second, third and fourth being the lines from Jabberwocky poem.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=90)** Now in line 15 is where we actually create a corpus from myNamedVector.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=96)** So I can select line 15 and if I go up to the corner here and hit run, you'll see a couple of things happen.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=104)** First of all, the code is executed.
>
> **[1:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=106)** And in the right hand side in the global environment, you'll see that we now have a myNamedVector and myCorpus.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=115)** myCorpus was created by quanteda in line 15.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=119)** If we run line 16, we'll see a summary of what myCorpus looks like.
>
> **[2:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=125)** In this case, the summary is telling us that myCorpus contains four documents.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=131)** The text of them is first, second, third, fourth, that's the document name. The number of types, the number of tokens, and the number of sentences.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=141)** And we'll talk more about types, tokens, and sentences in a future session.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=145)** You can also create a corpus from a dataframe and we can see this in line 19.
>
> **[2:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=151)** myData.frame is created from as data frame myNameVector.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=157)** So all I'm doing here is creating a data frame from that previous name vector.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=161)** Let's go ahead and run that and you'll see in the right hand side that we now have a dataframe with four observations of one variable.
>
> **[2:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=170)** We'll go back to the code here.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=173)** Line 20, I've added a variable called docid and placed in one through four. And then in line 21, I also add someInfo to the dataframe.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=185)** So let's go back and take a look at the dataframe in complete.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=188)** You can see that we have observations named myNameVector, docid, and someInfo.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=194)** Those were all just created.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=196)** Now, to convert myData.frame into a corpus is fairly simple and you can see this in line 24.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=204)** myCorpus is created from the corpus command from quanteda, and the corpus command wants to know what object are we going to convert to a corpus?
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=214)** In this case, myData.frame.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=217)** The docid field is an observation called docid which is what we just created.
>
> **[3:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=223)** And the text field will be contained in an observation called myNamedVector.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=230)** Now, I've also added some metadata, and that's in line 27 where it says meta equals a list, and I'm adding an object called thisCameFrom with the contents of I made this myself.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=243)** Let's go ahead and run line 24.
>
> **[4:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=246)** And you'll notice on the right hand side that we have a myCorpus object.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=252)** Now, we'll talk more about metadata in the doc variables chapter.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=257)** But let's take a look at the summary of myCorpus.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=261)** Now you'll notice a couple of things that change from the named vector.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=267)** We have a someInfo of this, that, another, and one more.
>
> **[4:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=272)** What we're not seeing is the metadata and again, that'll come up here later on.
>
> **[4:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=276)** Now I'm going to use this particular corpus again in the future.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=281)** So in line 35, you can see where I have run saveRDS.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=286)** And I've saved myCorpus as a file called quanteda/sampleCorpus.RDS.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=295)** And if you look in your exercise files, you'll see that that file is available for you in future sessions.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=303)** Again, quanteda provides five methods for creating corpora.
>
> **[5:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=309)** They aren't much different from each other, except they allow for the import of different data objects.

> [!info]- Semantic Content
>
> **Code Identifiers:** mycorpus (8), mynamedvector (5), mydata (3), someinfo (3), mynamevector (2)
> **Code Keywords:** let (6), case, (2), this, (1)
> **Env Vars:** rds (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)

#### Create metadata with docvars
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=1)** Doc variables are quanteda's way of storing metadata along with the corpus.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=7)** So let's take a look at how do you create document variables.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=13)** Now, in summary, they can be created along with a corpus or they can be created with a command docvars or with the command meta.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=22)** Let's take a look at each one of those.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=25)** In line one, I've brought in the quanteda library.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=29)** No surprise.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=31)** And then down in line nine, I'm retrieving a sampleCorpus.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=36)** And this is the corpus we created in the previous session.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=39)** You'll see that when I run line nine in the environment, I now have a sampleCorpus and we can take a look at the contents of sampleCorpus by hitting the summary.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=49)** You'll see that there are four documents and types tokens, sentences and someInfo about each one of those.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=57)** You'll remember this is the first four lines of the poem, Jabberwocky.
>
> **[1:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=63)** You'll also remember that when we created this particular corpus, we also added a docvar and we can show that in line 14.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=73)** I'll hit command return on my Macintosh, which runs the command docvars for sampleCorpus.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=80)** And here you can see that we have a docvar named someInfo with some nonsense sort of identifiers that we've placed in there.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=90)** Now you can also access a docvars in a sampleCorpus in a traditional notation, and this is shown in line 17.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=98)** First, you see the name of the corpus, which is sampleCorpus.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=103)** Then we use the dollar sign indexing for someInfo.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=107)** And when I run this, you'll see this, that, another, and one more, which is showing me the contents of someInfo which happens to be the docvars for sampleCorpus.
>
> **[1:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=117)** Now let's jump down to line 20 and we can assign a new variable to this particular corpus using the docvars command.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=129)** So I see in line 20 it says docvars, followed by the name of sampleCorpus, which is the corpus we wish to assign the new variable.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=137)** We're going to add a field called charcount, and into that we're going to place a number of characters from sampleCorpus.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=146)** Let's go ahead and run that.
>
> **[2:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=147)** And line 21 conveniently gives us a summary of our new sampleCorpus.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=154)** You can see that the very last observation is charcount.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=158)** And again, that's the number of characters in each particular line of this particular corpus.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=166)** In line 24, I'm using meta, a command to access different types of metadata, and in this case I'm accessing the system metadata from sample corpus.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=178)** Let's go ahead and run that.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=180)** And what you'll see down here in the console is all of the system level information for this particular corpus.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=187)** The package version that it was created under, the R version that it was created under, the system that it was created under.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=193)** In this case, I'm using Darwin x86 64.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=197)** And the user happens to be Linkedin instructor, that's me.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=201)** It shows the directory where this particular corpus is located, when it was created, December 29th of 2022, and what kind of a source was it?
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=211)** This came from a dataframe.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=213)** Let's run line 25, which is showing us the same information but at the user provided level.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=220)** And in this case, you can see this is where this came from, and I made this myself.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=225)** And if you recall the previous session, we added that particular information at the time that we created sample Corpus.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=233)** Finally, line 26, we can look at the type of object with sampleCorpus.
>
> **[3:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=239)** And in this case you can see there's a unit, a summary and some summary data.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=247)** We can also use the meta command to assign metadata.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=252)** So let's look at line 29 where we use meta to assign a field called letters.
>
> **[4:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=258)** And into it we place A, B, C, and D.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=262)** I run that.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=264)** Nothing changes.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=265)** But we now have metadata in there.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=267)** If I run line 30, I'll be able to see where that comes from.
>
> **[4:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=272)** And you can see users letters now shows A, B, C, and D.
>
> **[4:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=277)** So you'll notice that there is a field user and under user is another field called thisCameFrom and letters.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=286)** In line 31 of the code I print out a summary of sample corpus and you'll notice that it does not show letters.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=296)** This is because a summary command only shows document level metadata.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=303)** Likewise, what happened to charcount.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=306)** So let's take a look at line 34 where we reveal the field charcount.
>
> **[5:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=312)** And I get null.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=313)** Well, how come if I look at a sample dollar sign charcount, you'll see that that's still there.
>
> **[5:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=321)** However, it's not showing under metadata because charcount is at the document level and meta doesn't list it because the metadata is for corpus level metadata.
>
> **[5:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=334)** So the takeaway here is that when you're using metadata or docvars with quanteda objects, you need to be a little bit careful about where you're storing information and how you're looking for it.

> [!info]- Semantic Content
>
> **Code Identifiers:** samplecorpus (11), someinfo (4), thiscamefrom (1)
> **Code Keywords:** let (8), this, (2), case, (2), from, (1), finally, (1)
> **Definitions:** is a  (1)

#### Corpus subsets and groups
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=1)** Quanteda provides tools to subset and group corpora.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=6)** These tools are called corpus underbar subset, corpus underbar sample, and corpus underbar group.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=14)** Let's take a look at how these work.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=17)** In line four, I bring in the quanteda library and then in line seven, I pull in a sampleCorpus that I've saved as sampleCorpus.RDS.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=27)** This should be in your exercise files.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=31)** In line 11, I've set up a corpus subset command, and you'll notice that the first argument, the corpus underbar subset is a sampleCorpus, which we just pulled in.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=43)** The second one, which is startsWith creates a logical vector.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=49)** And let's take a second to look at how that logical vector is built.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=53)** The first thing we're doing is looking at the contents of someInfo, a vector contained in sample corpus, and you'll see down in the console that someInfo contains the words this, that, another, and one more.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=71)** startsWith examines that vector and checks to see if each of these elements starts with the letter T.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=80)** So when I run startsWith sampleCorpus$someInfo, T, I get a logical vector.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=89)** The logical vector says the first element is this, which starts with t, so that's true.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=95)** And the second element is that and it starts with T, so it's also true.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=100)** The third element is another that starts with a letter A. Does not start with letter T, that's false.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=108)** And likewise, one more is false.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=111)** So when I run line 11, you'll see that I receive documents one and two, because the elements of someInfo are this and that which starts with t.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=128)** To make this a little bit clear, corpus subset will accept any logical vector.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=135)** And if you look in line 14, I've hardcoded a vector to be true, false, true, false.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=142)** And when I run line 14, you'll see that I receive documents one and three because one is true and three is true.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=152)** Likewise, I can randomly sample a corpus and I've set this up in line 17.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=160)** Line 17 says corpus underbar sample.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=164)** I'm sampling sample corpus and the size of my random sample I've set as the number of documents divided by two.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=173)** So one half the number of documents.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=175)** And when I run line 17, you'll see that I receive documents three and two.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=182)** If I run line 17 again, I'll receive documents three and four.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=187)** So I'm randomly sampling the number of documents in sampleCorpus.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=193)** Now, corpus underbar sample has an extra trick and it's called by which we'll set up here.
>
> **[3:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=199)** The first thing I need to do to use by is build an observation that I can use to sample out how many characters are in each document.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=209)** And in line 21, I've done that.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=212)** I've created an observation or some metadata, a docvar that contains the number of characters in each element of sampleCorpus.
>
> **[3:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=220)** When I run that, I can take a look at sampleCorpus.
>
> **[3:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=224)** Let's go ahead and type that in.
>
> **[3:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=227)** And you'll see that I now have a character count that indicates the number of characters in each line of the sampleCorpus.
>
> **[3:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=236)** Going back up to line 23, I use corpus underbar sample.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=241)** I'm sampling a corpus called SampleCorpus.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=245)** I only want one document returned that's size in line 24, but I've said by charcount less than 31.
>
> **[4:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=256)** What this has done is created two groups, documents that have less than 31 and documents that have greater than 31 or equal to 31.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=268)** So when it pulls a sample of one, it will pull in a sample from each group.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=275)** So rather than receive just one sample, you can see that I've received two samples.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=281)** And this is because corpus sample gave us one sample from the first group and one sample from the second group.
>
> **[4:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=293)** So the by argument to corpus sample allows you to break up documents within your corpus by some arbitrary variable that you can store into a document variable.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=306)** Now you can also group or concatenate documents in a corpus.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=311)** And you can see the setup in line 32 where I'm using corpus underbar group, and I've said, build me a new corpus called groupSampleCorpus.
>
> **[5:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=324)** Now, the groups you can see, have a vector where I've used groups equals myDoc, myDoc, yourDoc, and nobody.
>
> **[5:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=335)** Let's go ahead and create that.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=339)** And now in line 33, I'll summarize that.
>
> **[5:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=343)** This is sampleCorpus, so I'm showing you the ungrouped documents.
>
> **[5:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=349)** And then in line 34, let's take another summary of the groupedSampleCorpus.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=357)** I'll open this up so we can compare the two.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=362)** The first summary shows the ungrouped and the second summary shows the grouped.
>
> **[6:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=370)** So you'll notice that the text has changed. In the original corpora, the text was 1, 2, 3, and 4. In the grouped corpora, you can see the text is myDoc, Nobody and yourDoc indicating the groups that we created when we set up the group command.
>
> **[6:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=388)** Now remember that the groups I set up were myDoc, myDoc, yourDoc, and nobody.
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=393)** MyDoc and myDoc were combined, they were grouped together.
>
> **[6:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=398)** If you look at the types in the top sampleCorpus compared to the types in the groupedSampleCorpus, you'll notice that myDoc has 11 types and 13 tokens.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=414)** Now, you might think that you could just add the types from documents one and two.
>
> **[6:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=419)** Well, document one has six types and document two has seven types.
>
> **[7:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=425)** Six plus seven does not equal 11.
>
> **[7:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=428)** So why did it get 11 types?
>
> **[7:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=430)** Probably because within the first document or second document, there are repeated types.
>
> **[7:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=437)** So it doesn't just simply add those numbers up.
>
> **[7:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=439)** It compares to how many types you have and gives you the new number of types in that grouped document.
>
> **[7:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=447)** The group document called myDoc.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=449)** Likewise for tokens.
>
> **[7:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=451)** Well, in this case, six plus seven actually makes sense.
>
> **[7:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=454)** So there were no duplicated tokens.
>
> **[7:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=457)** Now we can take a look at the different documents in each corpus.
>
> **[7:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=462)** In line 36, I've said show me the first document in sampleCorpus, and that's listed below on the console as Twas brilling and the slithey toves.
>
> **[7:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=472)** Now look at line 37 where I've said, show me the first document in the groupedSampleCorpus.
>
> **[8:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=480)** And what you'll see here is this it is starts with Twas brilling and the slightly toves, but then finishes with did gyre and gimble and the waves, indicates that groupedSampleCorpus, first document, is a combination of sampleCorpus, first and second documents.
>
> **[8:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=500)** Corpus underbar group can provide something of a confusing new corpus.
>
> **[8:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=507)** But when you understand what it's trying to do with the different documents, it starts to make sense as to what it's building out.
>
> **[8:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=513)** Again, we've been talking about subsetting corpus, sampling corpus and grouping purposes, all part of the quanteda package.

> [!info]- Semantic Content
>
> **Code Identifiers:** samplecorpus (12), mydoc (8), someinfo (4), groupedsamplecorpus (4), startswith (3)
> **Code Keywords:** let (5), this, (2), case, (1)
> **Prerequisites:** set up (4), setup (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** rds (1)
> **Exercise Files:** exercise files (1)

#### Reshape and segment a corpus
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=2)** Quanteda provides a way to reshape and segment corpora.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=6)** And not surprisingly, this is corpus underbar reshape and corpus underbar segment.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=14)** Let's take a look at how these work.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=16)** In line two I, of course, bring in the quanteda library.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=21)** In line five, I create a sample corpus called myCorpus.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=24)** And let's take a look at what that is.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=27)** In this case, it consists of one document with text 244 types, 529 tokens and 15 sentences.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=38)** Now, I only have one document.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=40)** So if line eight calls for the second document in myCorpus, I'm going to receive an error.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=46)** There is no second document.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=49)** Let's reshape myCorpus.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=53)** In line 12, I've created a corpus called reshapedCorpus.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=58)** I'm using the corpus underbar reshape command.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=62)** I'm going to reshape myCorpus and I'm going to break it apart by sentences rather than documents.
>
> **[1:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=70)** So let's run line 12.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=73)** I now have a reshaped corpus and I can take a look at that.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=77)** And you'll notice that instead of just one document, I now have 15.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=83)** Now, if I look for the second document of reshapedCorpus, as shown in the line 14, you'll see that I receive a line that says that policy has been dictated by the IMF, etc.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=96)** .
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=96)** It's the second sentence of the original corpus that we brought in.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=101)** Now to a segment a corpus is a little different.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=105)** And what we'll do here is, first of all, we'll bring in some data called data corpus inaugural.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=110)** It's provided as part of the quanteda package.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=113)** Let's take a quick look at that data.
>
> **[1:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=115)** You'll see that it's line after line of speeches.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=119)** It's the inaugural speeches of each president.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=123)** Now I only want the first one, which is by Washington.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=126)** So in line 20, I create a corpus called Washington speech or washSpeech, and it contains the first document of data corpus inaugural.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=137)** Now, in 23, I use corpus underbar segment, and I'm going to segment out the Washington speech.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=146)** The pattern I'm going to use to segment out that speech is two line returns.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=153)** It's basically a line followed by a blank line.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=157)** Now the value type I've selected is regex.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=160)** There are other types of values, but in this case I'm using a regular expression, so I have to use value type regex.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=167)** And I've said that look for slash n slash n after the context.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=173)** So I run line 23 and you'll see that segmentedCorpus has several lines that indicate each line of the Washington speech.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=184)** We can see that by using line 28, which is as character washSpeech, which will show me the entire contents of washSpeech.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=195)** And then I'll bring in as character for the segmentedCorpus.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=201)** And you can see that I've only pulled in the first sentence of the original document, and I can compare that to the beginning of the original document, which starts as fellow citizens of the Senate and the House of Representatives slash n slash n. You can see that that's the first element of the segmentedCorpus.
>
> **[3:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=222)** Likewise, line 30 says, what is the second line?
>
> **[3:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=226)** Again, we're looking for a slash n slash n.
>
> **[3:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=230)** The second line is much larger than the first, but it ends in slash n slash n.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=237)** So that's segmentedCorpus.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=240)** It's corpus reshaping by sentences or documents or paragraphs, and it's ways to break up a corpus into different types of objects versus just simply tokens.

> [!info]- Semantic Content
>
> **Code Identifiers:** mycorpus (4), segmentedcorpus (4), washspeech (3), reshapedcorpus (2)
> **Code Keywords:** let (5), case, (1)
> **Env Vars:** imf (1)
> **Definitions:** is a  (1)

#### Remove lines from a corpus
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=1)** Quanteda provides a way to remove unnecessary documents from a corpus.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=6)** It's called corpus underbar trim.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=8)** And let's take a look at how to use it.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=11)** In line three, I bring in the quanteda library, then line six retrieves a sampleCorpus for us to experiment with.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=19)** The summary of sampleCorpus shows us that it's a fairly simple corpus, but it's got types and tokens and sentences and some document variables called someInfo.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=33)** Now, let's suppose that we don't want short sentences in our corpus.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=40)** Well, I've set this up in line 11 where it says corpus underbar trim.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=45)** We're trimming the sampleCorpus, and what we're trimming by is sentences with a minimum token of six.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=55)** So it will select sentences shorter than six.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=59)** And let's run that.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=61)** And what we see is we now have only two documents within our sampleCorpus.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=67)** That's because these lines are each longer than six words.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=72)** Likewise, we can remove sentences that have a pattern.
>
> **[1:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=78)** In line 17, I've set up corpus trim with a regular expression, and that's shown in line 19 where I say the exclude pattern is any sentence that begins with T.
>
> **[1:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=91)** So if we run that, what we'll see here is three lines, none of which start with T.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=100)** This is a way to remove unnecessary or spurious documents from your corpus to improve the quality of your research.

> [!info]- Semantic Content
>
> **Code Identifiers:** samplecorpus (4), someinfo (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 17. 16. Understanding Tokens

#### Corpus and tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=1)** A corpus is built of documents.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=4)** A document is built of tokens.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=7)** In this chapter, let's look at the creation, manipulation and removal of tokens.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=13)** Quanteda provides a large number of token tools as you gain more experience with natural language processing, the use of some of these advanced token tools will become obvious.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=25)** For the moment, let's focus on some of the basic tools for tokens.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=31)** Again, quanteda provides a lot of tools for token manipulation.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=35)** But if you start with this subset, you'll gain an understanding of how other token tools work and how quanteda works with tokens in general.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=45)** Let's look at some code.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=48)** To create tokens from a corpus, you'll of course, need to do a couple of setup things.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=54)** In my case, we're first of all going to load the library for quanteda.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=59)** In line six, we bring in a sampleCorpus, and let's take a look at what it is that we're looking at.
>
> **[1:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=66)** This is a summary of the data corpus inaugural corpus that we'll be working with.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=73)** As a further example, here's the first document of the same corpus as characters, which gives us the exact text of the document.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=83)** Now, let's take that document and turn it into tokens.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=88)** I'll take SampleCorpus document one and use the tokens command to tokenize it.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=97)** Now, what the console is showing you is the first document broken into tokens, and in this case, tokens are words.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=105)** It only shows us a few of them.
>
> **[1:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=107)** You'll notice that the very last line is 1,525 more tokens in this document.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=114)** So there's quite a few.
>
> **[1:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=116)** You'll notice that this tokenization also includes things like the colon mark with punctuation and several other stopwords such as of and the. Starting in line 17, you'll see code that deals with all of these extraneous marks.
>
> **[2:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=135)** Seventeen is the same as the previous line 14 where we're using the as character to show us all the contents of a document.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=144)** And then it goes on to say, give me the tokens of sampleCorpus document one.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=150)** Then in line 18, 19, 20, 21, and 22, I request the tokens command to remove punctuation, symbols, numbers, URLs and separators.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=165)** Let's see how that looks differently.
>
> **[2:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=167)** Previously, you could see that we have 1,525 plus tokens coming from this document.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=175)** And then after removing all of the punctuation, symbols, numbers, URLs and separators, we have quite a few fewer numbers.
>
> **[3:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=184)** Look at these results.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=185)** Fellow citizens of the Senate and of the House.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=189)** Well, that's still the same.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=191)** But you'll notice that the punctuation marks are gone.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=195)** Now, what we haven't removed is stopwords, and we haven't done something called stemming, and we'll cover that here in just a minute or two.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=204)** What you'll see is, is that tokenization and removing punctuation, symbols, numbers, URLs, and separators has converted a long string document into a collection of words.
>
> **[3:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=217)** This is also known as bag of words.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (2)
> **Code Identifiers:** samplecorpus (2)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### Remove tokens and stopwords
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=1)** In our previous session, we talked about converting a corpus into tokens.
>
> **[0:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=5)** In this session, let's talk about removing tokens.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=9)** We're looking at some code that will illustrate this concept.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=13)** In line two, I use the library command to bring in the quanteda package.
>
> **[0:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=18)** Then in line five, I retrieve a sampleCorpus.
>
> **[0:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=22)** We can take a look at that sampleCorpus and you'll see that it's again just a series of documents, each of them titled things like 1789 Washington or 1793 Washington.
>
> **[0:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=32)** Let's create a tokens object from that corpus, and that's done in line 10.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=38)** And you'll notice that I've removed numbers, punctuation and symbols.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=44)** If I go down here into the console, I can type in scTokens and we can look at the contents of the new tokens object.
>
> **[0:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=53)** You'll see that I have a collection of tokens for each document.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=57)** For example, the first document, which is titled 1789 Washington consists of tokens, fellow citizens, then of, then the, then Senate.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=69)** It's a bag of words.
>
> **[1:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=71)** Now, many of those tokens are not useful for analysis, and so we may want to select certain tokens to keep them or we may want to remove certain tokens.
>
> **[1:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=83)** And by the way, removing tokens is a way of dealing with stopwords, things like of and the.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=89)** And I'll explain that in a second.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=90)** Let's look at tokens select.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=92)** In line 17, you can see I've set this up.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=96)** I'm working with the scTokens object, and the pattern that I'm going to be looking for is citizens.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=105)** And I'm going to keep those tokens.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=108)** So when I run that, you can see that all of my documents now list just the word citizens.
>
> **[1:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=118)** There are two shortcuts for using tokens select. One of them, which is tokens remove, and one of them which is tokens keep.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=128)** These are identical to changing the selection shown in line 19 to remove or keep, but they make it a little clear as to what you're trying to do.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=139)** Let's take a look at tokens keep.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=141)** In line 27, you can see that I've set this up.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=146)** The pattern is a little bit more sophisticated, and this is a regex expression where I've said, find me anything that has a capital or lowercase citizen followed by s.
>
> **[2:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=160)** The value, of course, is a regular expression and a window is one.
>
> **[2:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=165)** And let's take a look at what that window actually means.
>
> **[2:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=168)** I'm going to clear the console and then run line 27.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=173)** And if we scroll up to the top, what we'll see here is citizens in 1789 Washington.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=181)** Its fellow citizens, it found citizens there.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=185)** And then it found another citizen.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=188)** And you'll notice that the window is one word or one token before and one token after.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=195)** So each time citizen appears, it's bracketed by a non-citizen, the beginning word and the ending word.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=202)** And you can see all of those documents are now showing the location of citizens or the context of citizens.
>
> **[3:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=209)** Now, more importantly, we might need to remove certain tokens.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=214)** And this is what's called stopwords.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=216)** You'll recall that there was lots of, and the, and a, and and, words that are nice for humans, but not so useful for natural language processing.
>
> **[3:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=229)** In line 33, I'm using tokens remove.
>
> **[3:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=233)** I've said use the scTokens object, and the pattern that I'm going to remove is called stopwords in English.
>
> **[4:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=243)** And we can take a look at what stopwatchs actually is by typing it in.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=247)** In this case, I'm just going to highlight stopwords English and then run that.
>
> **[4:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=254)** And you can see a list of all of the words returned by the stopwords English command.
>
> **[4:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=259)** In this case, I and me, and my, and myself, these are all considered stopwords.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=265)** If I select line 33 and run it, what you'll see now is a series of documents that no longer contains all of those stopwords, the of's and I's and myself.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=278)** Now we're getting down to the real valuable parts of these documents, and that's the great value of removing stopwords.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2)
> **Definitions:** is a  (5), is called (1)
> **Code Identifiers:** sctokens (3), samplecorpus (2)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** for example (1)

#### Group tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=1)** When you have a tokens object, there are a couple of things that you can do with those tokens. We've just covered keep and remove.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=9)** Now we're going to talk about grouping them in different ways.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=12)** We're looking at code that illustrates this concept.
>
> **[0:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=16)** In line three, I'm going to bring in the quanteda package and then I'm going to create a tokens object from our corpus titled data corpus inaugural.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=27)** And you'll notice that I'm removing numbers, punctuations and symbols.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=31)** Let's take a quick look at scTokens and I can do that just by typing it into the console here.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=40)** And you'll see that I have a series of documents with tokens in them.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=44)** Again, a bag of words.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=46)** You'll also notice I haven't removed the stopwords, things like of and the.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=51)** Well, I can replace certain phrases with individual things called compounds.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=59)** We'll talk about ngrams in a second.
>
> **[1:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=62)** But let's look at line 12 where I say tokens compound.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=67)** And what I'm saying is take the scTokens object, and any time you see something such as friends and fellow or something such as constitution requires, I want to compound those into one phrase.
>
> **[1:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=84)** Let's go ahead and run that.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=86)** And I hit return.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=88)** Let's take a look at the results.
>
> **[1:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=90)** And in particular, the document titled 1801 dash Jefferson.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=95)** You can see friends and fellow has been compounded with an underbar as a concatenator.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=103)** When we look for constitution requires such as an 1805 Jefferson, you'll see that constitution underbar requires has been compounded.
>
> **[1:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=114)** This is a way to take domain specific concepts such as air pollution or fish mortality, and group that into a significant set of words that we can then later on do analysis on.
>
> **[2:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=131)** Similar to compounding tokens is ngrams. And in line 18 I've set up the tokens underbar ngrams command.
>
> **[2:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=141)** Let's take a look and see what that does.
>
> **[2:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=144)** Now, line 18, of course, just set up tokens ngram, said operate on scTokens.
>
> **[2:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=150)** In line 19, I said I want to see ngrams of two tokens.
>
> **[2:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=156)** And the concatenator will be an underbar.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=159)** So in fact, if you look in the console down below, you'll see 1789 dash Washington has two tokens in each ngram.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=169)** The first one, which is fellow dash citizen, which was a token from before, plus of has been compounded into an ngram followed by of underbar the and then the underbar senate.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=185)** Now, whether you choose to do this before you remove stopwords or after is going to be dependent on certain phrases that are important in your scientific domain.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=197)** Note that ngrams can also be done on characters.
>
> **[3:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=201)** And I've set this up in line 23 and 24.
>
> **[3:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=204)** The first thing I had to do was create an object.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=207)** I've called it charToken, and I've created as characters based on the tokens.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=214)** Let's create that object and then take a quick look at it.
>
> **[3:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=218)** If I type in charToken, you can see I have T, W, A, S, B, R, I, L, L, I, G, And the slide hey tovess, which is what it tokenized by character.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=234)** Now, if I run line 24, I've said char ngrams.
>
> **[3:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=238)** So I wanted to take each character of charToken, group them into two with an underbar.
>
> **[4:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=245)** So when I run that, you see that it's taken the individual characters and grouped them together by an underbar.
>
> **[4:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=253)** Finally, there's a concept called skipgram, which are close to ngrams, but they span multiple words.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=260)** It's just as easy to see what actually happens when you run the tokens skipgrams command.
>
> **[4:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=267)** And if we scroll up to the top, what you'll see is a strange combination of how these ngrams have been constructed.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=275)** So if you look at this, it looks fellow citizens then of, and fellow citizens the, and fellow citizens Senate, then fellow citizens and, and fellow citizens of. This is all based on the skip argument which is as currently says 0 to 4 and it can concatenate as underbar one.
>
> **[4:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=296)** This is for very special uses in very special domains where you're coming up with certain ngrams that seem to make sense only in context.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=306)** It'll take some experimentation, but at least you know that it's there and available for your use.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), return. (1), finally, (1), this, (1)
> **Code Identifiers:** sctokens (3), chartoken (3)
> **Analogies:** such as (4), similar to (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** scroll up (1)

#### Stemming with tokens
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=1)** Stemming is fairly easy to understand; or is it?
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=6)** The process of stemming is easy to understand.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=10)** The algorithm used to stem words is fairly complex.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=15)** To understand stemming, let's first of all do some and I've set up some code to do this.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=21)** You can see it's fairly short. In line three, I use the library command to bring in quateda. Inline six, I created tokens object called sctokens.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=35)** Then in line 11 I remove stopwords from that object.
>
> **[0:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=40)** Now let's take a quick look at what scTokens actually looks like.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=45)** And I'll clear this and then open it up so we can do some comparison, and type in scTokens.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=55)** And not surprisingly, you see that we have a series of documents just consisting the tokens, and I've removed the stopwords.
>
> **[1:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=64)** Now in line 14 of the code, I use tokens underbar wordstem against the scTokens object.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=73)** I'm going to run that.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=74)** And let's take a look at what the difference is.
>
> **[1:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=77)** If I go up to the top document titled 1789 dash Washington, you'll see fellow citizen and then Senat S-E-N-A-T but it's misspelled. It's missing the e or house, H-O-U-S but it's missing the e. And then you see R-E-P-R-E-S, which is very short for representative or representing or represented.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=105)** This is what happens when you stem wards and what you've done using the tokens underbar wordstem command is apply an algorithm to each word which returns just the stem or the root of each particular word.
>
> **[2:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=124)** If you look at the documentation, you'll see that in quanteda, stemming is based on something called Martin Porter's stemming algorithm.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=134)** And you can look this up on the Internet.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=137)** This is the home page for The Porter Stemming Algorithm, and it gives history and encoding and a lot of information about how this particular algorithm works.
>
> **[2:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=149)** There is a lot of debate about whether stemming should be done this way or whether it should be done in another fashion.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=157)** And this is something that you'll need to examine as you get into using stemming in your particular domain.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=166)** In some cases, stemming canproduce the wrong word, such as representative instead of representing. In the domain where you're examining government or governmental type words, representative definitely has a meaning that's different from representing.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=185)** These are the kind of things that you need to be aware of when you're using a stemming algorithm.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1)
> **Code Identifiers:** sctokens (3)
> **Definitions:** short for (1), is a  (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)


### 18. 17. Understanding Document-Feature Matrix (DFM)

#### Corpus, tokens, and DFM
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=1)** After tokenizing the documents in a corpus, we are ready to create a document feature matrix also referred to as a DFM.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=10)** Most other natural language processing packages refer to this as a document term matrix or a term document matrix.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=20)** Quanteda is unique in calling this a DFM.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=24)** For most practical purposes, these three objects are the same.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=29)** Quanteda provides many tools for manipulating document feature matrices.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=35)** These can be broken into four rough groups.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=39)** Create and modify, modify features, subset and select, and statistics.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=48)** Let's jump right into some code to demonstrate how to create a DFM and use some of these commands to perform statistic analysis on text.

> [!info]- Semantic Content
>
> **Env Vars:** dfm (3)
> **Code Keywords:** let (1)

#### Create and modify a DFM
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=1)** Quanteda works with document feature matrices and provides obviously tools to create those DFMs.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=9)** And let's take a look at creating a DFM and also working with DFMs.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=14)** In line six, I'll bring in the quanteda package.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=19)** And then in line nine, I create a tokens object called scTokens.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=26)** And I'm doing that from a data underbar corpus underbar inaugural.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=31)** You'll notice that I've removed numbers, punctuation and symbols.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=35)** Now, in line 14, I'm going to remove stopwords.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=39)** I'm using the smart source of stopwords.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=44)** From that tokens object, I can create a document feature matrices.
>
> **[0:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=49)** And that's exactly what we do in line 17.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=52)** Now, in this case, we're just looking at how it looks.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=55)** So let's open up the console a bit and you can see that we have a column labeled docs, starting with 1789 dash Washington, and then we have columns of features.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=68)** The first column is fellow dash citizens, followed by senate and house.
>
> **[1:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=74)** The numbers indicate how many of those particular tokens appear in each of these documents.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=82)** I'm going to use this DFM for some next steps.
>
> **[1:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=86)** So in line 20, I save myDFM to an object.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=92)** And you'll notice that that appears in the upper right hand corner.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=96)** At this point, we've created a DFM.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=98)** It's called myDFM, and you can use DFM for all sorts of different actions.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=105)** Let's take a look at DFM sort, for example.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=109)** And this starts in line 22.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=111)** In this case, I've created a DFM from just one of the documents of the tokens object.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=119)** And you can see that in line 23, DFM sort, followed by DFM scTokens bracket one, which means I'm only using the first document of scTokens that I'm creating a DFM from that document, and then I'm going to sort it.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=137)** So let's go ahead and see what actually happens when I run that.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=140)** You'll see down in the console that I've got one document, it's called 1789 dash Washington and there are features, government, public, present, country, citizens.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=153)** There's eight instances of government in Washington.
>
> **[2:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=158)** Six instances of the public token in Washington and so on.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=164)** In line 25, I'll sort the entire DFM and put it into an object called sortedDFM.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=173)** We can take a look at sortedDFM.
>
> **[2:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=175)** Now this becomes a bit more confusing.
>
> **[2:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=178)** Again, the first column is documents 1789, 1793, 1797, followed by a series of columns labeled as features, people, government, great, states.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=191)** But it doesn't really appear that they're in any sort of sorted order.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=195)** What's happened here is that DFA underbar sort has sorted across all the documents and we can prove that with line 29 where I'm calling up the head of feature frequency on the sortedDFM, feature frequency is a command that's part of quanteda, and when I run that, you'll see that I've got people, which is the most populous, followed by government, which is the second most populous.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=225)** And if you compare that to these sort results up above, you'll see that in features people is first, government is second, grade is third, and so on.
>
> **[3:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=234)** In line 31, I've refined this just a bit and selected just people.
>
> **[4:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=241)** And you see that we have 584 occurrences of the token people in the entire DFM.
>
> **[4:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=250)** Now, as a side note, I'm going to use myDFM in future sessions.
>
> **[4:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=255)** So in line 34, I save that to disk as mydfm.rds.
>
> **[4:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=262)** So in this session, we've done a very simple thing.
>
> **[4:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=265)** We've created a DFM or a document feature matrix, and then we've applied a simple process to it.
>
> **[4:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=271)** In this case, DFM underbar sort.
>
> **[4:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=275)** Let's take a look at a real world example.

> [!info]- Semantic Content
>
> **Env Vars:** dfm (13), dfa (1)
> **Code Keywords:** let (5), case, (3), public (2)
> **Code Identifiers:** sctokens (3), mydfm (3), sorteddfm (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Real-world analysis with DFM
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=1)** Rather than just simply step through all of the quanteda tools for document feature matrices, let's take a real world example and show how to work through a problem.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=14)** In this case, we're looking at code that helps us compare the United States inaugural speeches against the United States Bill of Rights.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=24)** Specifically, I'm looking for interesting insights into what different presidents felt were important in their speeches against what the founding fathers felt were important about a US Bill of Rights.
>
> **[0:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=38)** Well, this is a fairly complex setup, so I would encourage you to download the code that I supplied in the exercise files and to follow along.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=48)** Do some examples.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=50)** I'm going to be moving fairly quickly, so you'll need to concentrate and probably rewind the video a couple of times.
>
> **[0:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=58)** With that in mind, let's get started.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=61)** Lines two and three bring in the quanteda and read text packages that we'll need as we do our analysis.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=69)** In line eight, I use read text to read the Gutenberg version of the Bill of Rights and will bring that into an object called billOfRights.
>
> **[1:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=80)** Then in line nine, I trim off the top of the Bill of Rights text.
>
> **[1:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=85)** We don't need all of the Gutenberg information.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=89)** Finally, in line 11, I use the tokens command to build a billOfRights token object from a corpus called billOfRights.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=99)** And you'll notice I've removed numbers, punctuation and symbols.
>
> **[1:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=103)** In line 15, I remove stopwords from the Bill of Rights.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=108)** In line 16, I stem all of the tokens.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=113)** And then in line 17, I create a dictionary from the billOfRights token object.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=120)** So I have a dictionary now that I can use to compare against all of the documents in the inaugural corpus.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=128)** I'm going to fix one of the names in the Bill of Rights dictionary and I'm going to call it Bill of Rights.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=134)** Let's take a look and see what we've done.
>
> **[2:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=137)** I have a dictionary object with one key entry, and you'll notice that I have words like unite and state and bill, right, 10 origin.
>
> **[2:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=146)** These are all the dictionary words that I'll use to compare against all of the inaugural speeches.
>
> **[2:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=152)** In line 24, I create a stemmed dictionary from the 2015 Lexioder Sentiment Dictionary.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=161)** And let's take a look at that real quick.
>
> **[2:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=163)** You'll see that we have several different lists.
>
> **[2:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=166)** We have a positive list, a negative positive, a negative negative and so on.
>
> **[2:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=172)** Now, let's combine the Bill of Rights Dictionary and the LSD 2015 stemmed dictionary.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=179)** That's line 33.
>
> **[3:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=182)** Then in lines 34 and 35, I remove two of the columns.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=189)** At this point, I have a completed Bill of Rights dictionary and I'm ready to bring in the inaugural speeches.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=196)** In line 38, I load our previous DFM, and I stem that current DFM.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=205)** Now I have two things.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=207)** I have myDFM, which has been stemmed, also, I have a Bill of Rights dictionary and I can compare these two.
>
> **[3:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=213)** Let's start that in line 42 where I'm using the DFM lookup command.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=219)** The document feature matrix that I'll be using is DFM underbar stemmed and the dictionary I'm using is the Bill of Rights Dictionary.
>
> **[3:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=228)** Let's run line 42 and see what happens.
>
> **[3:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=232)** Down in the console, you'll see that I've got a column labeled docs, which is a list of all of the documents in my DFM, followed by columns labeled features.
>
> **[4:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=244)** And the first one is labeled Bill of Rights.
>
> **[4:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=247)** What this is saying is that from the Bill of Rights Dictionary, the Bill of Rights column, 73 of those words match in the 1789 Washington document.
>
> **[4:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=263)** I also have columns labeled negative and positive.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=266)** Those come from the LSD 2015 stemmed dictionary that we created up above.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=273)** You'll notice that I have 35 negative matches and 112 positive matches.
>
> **[4:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=279)** So this gives us a vague notion of the 1789 Washington document.
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=284)** Bill of Rights 73, negative 35, positive 112.
>
> **[4:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=289)** Compare that to 1797 Adams and you'll see that there are many more Bill of Rights words used and he's, by and large, very, very positive about his speech.
>
> **[5:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=301)** In line 44 and 45, I've asked let's find the major features across all documents and recall that features in this case is very similar to terms or words.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=315)** So when we run line 45, what we'll see here is, again, a column labeled docs and then features.
>
> **[5:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=323)** And you'll notice that we have nations, and people, and state, and government.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=328)** These are the major features that we've asked for.
>
> **[5:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=331)** Actually, what I've asked for is any terms that show up more than 400 times.
>
> **[5:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=337)** You'll see min underbar term frequency equals 400 in line 45.
>
> **[5:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=342)** Quanteda also provides the text stats package, and in line 48 I have shown how to bring that in if you haven't already.
>
> **[5:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=352)** In 49 I pull that in so it's available. And in line 50, I've set up the text stat underbar frequency command.
>
> **[6:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=362)** I've said use the DFM stemmed package and only show me the top 20 most frequent terms.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=371)** When I run that, you'll see what I get is a feature nation for example appears 691 times.
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=381)** It's the number one feature that appears in all documents.
>
> **[6:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=386)** In line 52 and 53, I've said, I'd like to subset any features that start with free.
>
> **[6:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=393)** Now I'm going to break down line 53 into parts.
>
> **[6:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=396)** First, I'll clear the console and let's look at feature names myDFM stemmed. Just that component of this command.
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=407)** What this gives me is all of the feature names coming from myDFM underbar stemmed, and that's quite a list.
>
> **[6:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=414)** Now I expand this command to starts with anything that has free and you'll see that we get a logical return.
>
> **[7:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=422)** This is showing us that most of these document terms do not start with free, but there is one located in the row labeled 352 that is true.
>
> **[7:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=434)** This indicates a term or a frequency that starts with the word free.
>
> **[7:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=438)** What I can say is I would like to select the documents from myDFM underbar stemmed with a pattern that starts with the word free.
>
> **[7:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=448)** Now when I run this, you can see that 1789 dash Washington has no stemmed words that start with free.
>
> **[7:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=458)** 1805 dash Jefferson obviously does, it as one. And Madison has two and so on.
>
> **[7:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=465)** Now, in line 55, let's ask, what documents are older than 1800? And only make those available for examination.
>
> **[7:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=474)** In line 56, you can see that I've set up a fairly long command.
>
> **[7:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=478)** Let's break this down into smaller parts, starting in line 59.
>
> **[8:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=483)** Give me the document names of myDFM stemmed. And when I run just that part of the command, you can see that I get the document names from myDFM underbar stemmed.
>
> **[8:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=496)** What I would like is the first part of each document name, which indicates the year that this was actually given.
>
> **[8:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=502)** So I can use string split and I want to split on a dash.
>
> **[8:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=508)** And now what I receive is the year followed by the name of the speaker.
>
> **[8:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=513)** I've used lapply to apply string split to each document name.
>
> **[8:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=521)** Then in line 60, I've declared the function that I will apply against each one of these names as show me the first part that's less than 1800.
>
> **[8:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=532)** Let's go ahead and use lapply.
>
> **[8:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=535)** And I receive, again a logical vector.
>
> **[8:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=538)** Some of these will be true.
>
> **[8:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=539)** Any of them that are less than 1800.
>
> **[9:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=543)** Of course, those are going to be towards the top.
>
> **[9:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=545)** So you can see that I start to get true, true, and then false.
>
> **[9:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=549)** If I run the entire command, what I'll see now is a list of all of the features for the documents that are less than 1800.
>
> **[9:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=560)** You'll notice that the document column ends at 1797 dash Adam and it lists the features of each one of those documents.
>
> **[9:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=570)** If I was doing a random sample of documents, I could simply use the DFM underbar sample.
>
> **[9:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=576)** Again, a quanteda function provided for us and applied to myDFM stemmed.
>
> **[9:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=582)** This provides us with a random list of documents.
>
> **[9:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=586)** If I run it once, I get 1797, 1985, 1849.
>
> **[9:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=591)** If I run it again, I get a different random sample of documents from myDFM.
>
> **[9:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=597)** This is intended to be a fairly quick run through of some of the capabilities of quanteda when applied to document feature matrices.
>
> **[10:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=607)** There are a lot of commands that quanteda provides for these type of functions, and it takes a fair amount of time to understand how to use each one of them.
>
> **[10:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=616)** But it will behoove you to understand what functions quanteda provides for you as part of this powerful package.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (2), case, (1), finally, (1), for. (1)
> **Code Identifiers:** mydfm (8), billofrights (4)
> **Env Vars:** dfm (7), lsd (2)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (2), setup (1), you'll need (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Analogies:** similar to (1), for example (1)


### 19. 18. Analysis and Visualization

#### The quanteda textstats package
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980&t=0)** Quanteda provides a collection of tools for statistical analysis of documents.
>
> **[0:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980&t=6)** Some of these are easy to understand, frequency of features, readability, documents similarity and summaries of features.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980&t=17)** Some features are more complex and require a bit of research on natural language processing concepts.
>
> **[0:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980&t=23)** Those topics are beyond the scope of this course, but provide valuable insight into the nature of documents.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980&t=30)** Let's take a brief look at some of these functions and the statistical analysis they provide.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), let (1)

#### Real-world text statistics with textstats
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=1)** Quanteda provides an associated package called textstats, and in that package are several useful functions.
>
> **[0:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=9)** Let's take a look at just a few of them.
>
> **[0:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=12)** In order to demonstrate this, I'll need to bring in both quanteda and quanteda.textstats, which I do in lines three and four.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=20)** Now the first thing is calculating readability.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=24)** And this provides a number that indicates how simple a document is to read.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=29)** Ironically, the higher the number, the easier it is to read this.
>
> **[0:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=34)** And to calculate that I've set this up in line seven or I've created a readability object and I'm using textstat underbar readability against the inaugural corpus.
>
> **[0:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=46)** I'll run that, create the readability object, and let's take a look at that.
>
> **[0:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=50)** Well, what this is giving me is list of all of the inaugural speeches followed by the flesh readability index.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=59)** Now, it'd be handy to see this number sorted from most readable to least readable, and line nine does that using the order base R command.
>
> **[1:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=69)** I'm going to clear the console and then run line nine.
>
> **[1:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=73)** And if we scroll to the top of the list, we will see that the 2021 Biden inaugural speech rank the highest in the flesh readability scores. At the bottom, 1797 Adams was almost unreadable.
>
> **[1:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=89)** Now let's do some comparison between different corpora. I'm going to clear the console and then in line 12, I'm going to bring in our old friend, myDFM.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=101)** To create a similarity, I use textstat underbar simil as shown in line 17.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=109)** It's a fairly easy command.
>
> **[1:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=111)** In line 16 I coerce it to a matrix because in line 15 I'm going to represent this as a heatmap.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=119)** Let's go ahead and run 15 through 18 and you'll see in the lower right hand corner is a heatmap.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=126)** Let's zoom into it.
>
> **[2:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=128)** The red diagonal line is the one to one correspondence between all speeches.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=134)** Ironically, some speeches are more identical than others.
>
> **[2:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=139)** The lighter the spot, the less similarity there is.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=143)** So if you look towards the bottom, you'll see that 2009 Obama was not very similar to 1789 Washington.
>
> **[2:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=153)** Conversely, we see that 2017 Trump in the upper right hand corner was very similar to 2021 Biden.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=164)** This may be because the words that were used are more similar to contemporary audiences.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=171)** Quanteda also provides a dissimilarity or distance function, and the setup for it is very similar to the similarity function.
>
> **[3:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=181)** I've set this up in lines 20 through 23 and we run that.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=187)** And let's zoom in on the heatmap the results. You'll immediately note that 1841 Harrison is substantially different than every other inaugural speech provided.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=200)** This would be a clue that we should take a deep look at this particular inaugural speech.
>
> **[3:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=206)** In line 27, you can see that I've set up the textstat underbar summary command.
>
> **[3:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=212)** This is fairly easy.
>
> **[3:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=214)** It provides us with a summary of all of the documents in that particular corpus.
>
> **[3:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=219)** Things that it tells us is the number of characters, the number of sentences, the number of tokens.
>
> **[3:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=225)** So, for example, in 1789 Washington, there were 1,537 tokens, 107 punctuations, zero numbers, zero symbols, zero URLs, not surprising for a speech given in 1789.
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=240)** Textstat also provides something called collocations, which is easiest to understand as often used phrases.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=248)** Let's go ahead and run that and see what shows up.
>
> **[4:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=251)** And if we scroll up to the top, you'll see that the most frequent phrase is on the part of there's 14 of them.
>
> **[4:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=260)** There's lots of interesting data about Lambda and Z.
>
> **[4:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=264)** But again, basically it's often used phrases.
>
> **[4:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=268)** Quanteda also provides quick or key words in context.
>
> **[4:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=273)** This is where you can select a particular keyword and have it shown in context of that particular document.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=281)** Let's run line 33 and then show the results in line 34.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=287)** And if we scroll up to the top, what you see is that, for example, in the 1789 Washington document, at position 436, the word government appears.
>
> **[5:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=300)** Before the word government is of the United States a government.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=306)** And then if we scroll down to the continuation of that line, instituted by themselves for these.
>
> **[5:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=313)** That's the first line.
>
> **[5:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=315)** So again, key words in context provides us with the location of a pattern or a particular token, in this case government, and shows the words before and after that particular keyword.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=328)** This is just a quick run through of the textstat package available with quanteda, and I encourage you to take a deeper look at all of the statistics that it provides to analyze documents.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (2), this, (1), this. (1), lambda (1)
> **Analogies:** similar to (4), for example (2)
> **UI Navigation:** scroll up (2), scroll down (1)
> **Prerequisites:** setup (1), set up (1)
> **Code Identifiers:** mydfm (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### Understand the quanteda sentiment package
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=1)** Sentiment analysis is an interesting and subjective part of natural language processing.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=8)** Sentiment analysis provides insight into the emotional context of a document.
>
> **[0:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=13)** This is done by starting with a dictionary of terms or words weighted as to their meaning or sentiment, then comparing them to a source document.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=25)** Quanteda includes several dictionaries tailored for different types of documents.
>
> **[0:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=31)** This page lists those dictionaries, but only indicates the polarity positive or negative of the sentiment of a word.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=41)** For example, positive words are things like celebration or amazement or insight.
>
> **[0:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=47)** Negative words might be things like deviation or hapless or disgrace or sorrowful.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=55)** Some dictionaries contain extra dimensions.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=59)** The NRC dictionary from the Canadian government is an interesting example.
>
> **[1:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=65)** It provides positive and negative dimensions as well as dimensions for anger, anticipation, disgust, fear, joy, sadness, surprise, and trust.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=75)** By matching words in the NRC dictionary with words in a subject document, sentiment analysis provides a perspective of the expressed emotions.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=87)** As you might expect, there is debate and controversy about sentiment analysis.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=93)** Comparing a wordlist to a source document provides an arbitrary weighting.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=99)** But there are other dimensions to documents.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=101)** For example, who is speaking is just as important as what they are saying.
>
> **[1:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=108)** In recognition of the subjective nature of applying a list of words to a document, focused groups provide different dictionaries to address varied circumstances.
>
> **[2:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=120)** For example, the word bear can be positive in one context and negative in another.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=127)** If you are analyzing financial documents, use a dictionary that indicates bear is a negative word.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=134)** If you are looking at an ecology report, bear might be positive.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=140)** It's important to choose an appropriate semantic dictionary.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=145)** That said, let's take a look at how quanteda provides tools for semantic analysis.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Env Vars:** nrc (2)
> **Definitions:** is an  (1), is a  (1)
> **Code Keywords:** let (1)

#### Real-world sentiment analysis with quanteda sentiment
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=0)** Sentiment analysis is a natural language processing tool used to identify the positivity or negativity of a particular document.
>
> **[0:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=11)** It's a fairly subjective and a fairly complex process, and I'm going to walk you through the steps in order to set it up.
>
> **[0:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=19)** And as we go along, you'll see how sentiment analysis actually works.
>
> **[0:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=25)** The best way to demonstrate this is to give you an example of it actually finished.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=30)** Then I'm going to show you how to set it up.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=33)** And then I'm going to show you how you can modify the setup.
>
> **[0:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=37)** In order to do that, I need to start halfway through the code and you'll see that I'm starting at line 35.
>
> **[0:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=43)** This is the example code that's included with this course.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=48)** In line 35, I'm using the textstat underbar polarity command that's part of quanteda.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=55)** For that command, I have identified the corpus as scTokens and something called a dictionary as dd underbar geninq.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=67)** Let's run line 35 and see the result.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=72)** I'll open up the console and we can look down below.
>
> **[1:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=75)** And what you'll see is two columns, one labeled doc and one labeled sentiment.
>
> **[1:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=82)** The docid identifies each document within the corpus scTokens.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=88)** So, for example, one document is 1789 Washington and this happens to be the inaugural speech that President Washington gave in 1789.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=99)** He has a sentiment of 0.99725979.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=105)** In line two labeled 1793 dash Washington, you can see that President Washington gave a second inaugural speech, this time with a sentiment of 1.60943791.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=119)** The immediate takeaway from this sentiment analysis is that President Washington became more positive in his inaugural speech between the years 1789 and 1793.
>
> **[2:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=133)** Now, let's back up in the code and find out how you get those numbers and what they actually mean.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=140)** I'm going to scroll up to the top and I'll start in line 13.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=145)** The first thing I need to do is bring in the quanteda package and the quanteda.sentiment packages which I use the library command for.
>
> **[2:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=154)** Note that in line 10 and 11 above, if you need to install these packages, I've provided the code that allows you to do that.
>
> **[2:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=162)** Sentiment analysis relies on dictionary and quantity.sentiment provides several data dictionaries.
>
> **[2:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=171)** In line 17, I've given you the command to find out more information about the data underbar dictionary underbar NRC.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=180)** And you'll see that in the right hand side in the help window, this dictionary is labeled the NRC word Emotion Association Lexicon, and there is a lengthy description provided for this particular dictionary.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=195)** If I scroll down to the index, you'll see that the quanteda.sentiment package includes several dictionaries and dictionaries are tailored for their specific use.
>
> **[3:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=207)** You can find dictionary for medical use, you can find dictionaries for political use, or you can find dictionaries for general use.
>
> **[3:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=216)** In this case, we're using a relatively general dictionary.
>
> **[3:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=221)** In line 18, I make a copy of a data dictionary called geninqposnegative and you can see over here is the list.
>
> **[3:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=231)** It is an augmented general Inquirer with positive and negative dictionary.
>
> **[3:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=237)** Now, what exactly does that dictionary look like?
>
> **[4:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=240)** And in line 19, I've created a line that will show us the contents of that particular dictionary.
>
> **[4:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=248)** You can see that there are two documents in the dictionary.
>
> **[4:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=252)** One document is labeled as positive, one document is labeled as negative.
>
> **[4:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=257)** Each document contains a number of words.
>
> **[4:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=261)** So in the positive document, we have words like abide or ability or able.
>
> **[4:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=266)** In the negative we have abandoned and abandonment and abate. Now arguably and subjectively, these are positive and negative words.
>
> **[4:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=278)** Now, you'll notice that this dictionary is abbreviated.
>
> **[4:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=282)** For example, in the positive dictionary, there is 1,641 more words in that particular positive document.
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=291)** In the negative document, there's almost 2,000 more words available.
>
> **[4:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=295)** What we need to do for quanteda is identify what part of this dictionary is positive and what part of it is negative.
>
> **[5:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=304)** And to do that, look at line 22.
>
> **[5:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=306)** Polarity is a command from quanteda.
>
> **[5:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=311)** It identifies the dictionary that we copied over dd underbar geninq, and then it says, here is a list of the positive documents P-O-S equals positive and then negative documents N-E-G equals negative.
>
> **[5:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=328)** Now this is a bit confusing, but in this case the actual documents within the dictionary are already labeled as positive or negative.
>
> **[5:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=339)** Be aware that this isn't always the case, and so we need to identify which document is positive and which one is negative.
>
> **[5:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=347)** I'll run line 22 and then I need to create a corpus.
>
> **[5:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=351)** And I'm going to use the data underbar corpus inaugural, which we've been using quite a bit in this course.
>
> **[5:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=357)** In line 25, I create scTokens, I've removed numbers, punctuation and symbols.
>
> **[6:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=363)** Then in line 30, I remove stopwords.
>
> **[6:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=366)** Let's take a look at scTokens, and this should be familiar by now.
>
> **[6:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=371)** This consists of 59 documents.
>
> **[6:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=374)** It's the inaugural speeches of all of the United States presidents.
>
> **[6:18](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=378)** And now we're back to line 35, where we actually identify the polarity of individual documents.
>
> **[6:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=386)** So to recover line 35, I'm using the textstat underbar polarity command from quanteda.sentiment.
>
> **[6:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=395)** I've identified my corpus with x equals scTokens and I've identified the dictionary which now has polarity attached to it as dd underbar geninq.
>
> **[6:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=407)** I'm going to clear the console and then run that command.
>
> **[6:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=413)** Again, you see a list of all of the documents, that's the first column, and then a list of all of the associated sentiments.
>
> **[7:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=422)** It's pretty common to want to sort these by the sentiment, and I've set this up in line 41 and 42.
>
> **[7:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=430)** Now we have a list of sorted documents.
>
> **[7:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=433)** You can see that we go from a 0.06 all the way up to 1.60.
>
> **[7:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=441)** These numbers indicate the relative positivity or negativity of each inaugural speech.
>
> **[7:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=449)** The way that textstat underbar polarity calculates this is by adding all of the positive values and subtracting all of the negative values.
>
> **[7:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=459)** If you have a sentiment value of zero, then you would be halfway between positive or negative.
>
> **[7:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=466)** As the number recedes away from zero, the sentiment becomes more negative. As it increases in value away from zero towards one or two, you have more positive sentiment. Now as you can see, this is something of a subjective and arguable value, but it gives us an indication based on the words that have been polarized in the dictionary.
>
> **[8:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=492)** Now let's look at some ways to modify that actual value.
>
> **[8:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=497)** One thing you can do is use a different dictionary.
>
> **[8:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=500)** So in this case, line 45, let's use data dictionary NRC.
>
> **[8:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=506)** I'm going to clear the console and then let's take a look at the values in data dictionary NRC.
>
> **[8:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=513)** This list shows the names of the documents in data underbar dictionary underbar NRC.
>
> **[8:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=520)** You'll notice that values six and seven are negative and positive, but you'll also notice that there are several other.
>
> **[8:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=528)** Anger, anticipation, disgust, fear, etc.
>
> **[8:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=531)** .
>
> **[8:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=531)** The data dictionary underbar NRC has several values that could be identified as positive and negative.
>
> **[8:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=539)** Let's set up data dictionary NRC for use with textstat polarity.
>
> **[9:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=545)** In line 46 I make a copy.
>
> **[9:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=548)** And then on line 47, I check to see what the polarity is for DD underbar NRC.
>
> **[9:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=555)** You'll see that the pos value is set to positive and the neg value is set to negative.
>
> **[9:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=562)** But we know there are others, such as anger, anticipation, disgust and fear.
>
> **[9:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=567)** So let's add those to our polarity rankings.
>
> **[9:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=571)** This is done in line 48 where I say a sign to the polarity of dd underbar NRC the following list where positive is equal to positive and joy and trust, and negative is equal to negative anger, disgust and fear.
>
> **[9:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=587)** I run line 48.
>
> **[9:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=589)** And now let's go back and check the polarities.
>
> **[9:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=592)** And you can see that pos has now become positive, joy, and trust.
>
> **[9:58](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=598)** And negative has become negative, anger, disgust, and fear.
>
> **[10:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=601)** In theory, this gives us a more sophisticated polarity ranking based on the words in the data underbar dictionary underbar NRC dictionary.
>
> **[10:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=612)** We can recalculate the polarity, line 50 and 51 provide us with a sorted list.
>
> **[10:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=619)** If you were to compare back to the sentiments that we created with the previous dictionary, you'd see that these document IDs have been sorted in a different order.
>
> **[10:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=629)** This is because sentiment calculated differently, because we've added other words to give us a more sophisticated indication of the sentiment of particular documents.
>
> **[10:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=639)** And there's another thing we can do to modify polarity, and that's to use a different algorithm to compute the polarity.
>
> **[10:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=647)** This is what I've done in line 55.
>
> **[10:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=649)** I'm saying again, textstat underbar polarity.
>
> **[10:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=653)** The corpus is data underbar corpus underbar inaugural dictionary is the same as just before, dd NRC, but fun stands for function and in this case I've requested that textstat polarity use sent, sentiment underbar abspropdiff.
>
> **[11:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=674)** And let's take a quick look at what that is.
>
> **[11:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=677)** I'll type in senr underbar abspropdiff and look for the help file on that.
>
> **[11:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=685)** And you can see that it pulls up a sentiment functions.
>
> **[11:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=689)** There are three sentiment functions used to calculate sentiment with the quanteda package, sent underbar logit, sent underbar abspropdiff and sent underbar relpropdiff.
>
> **[11:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=707)** I've selected one of them and set that up in line 55.
>
> **[11:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=711)** And then in line 59, we run the same command.
>
> **[11:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=716)** This provides us with an ordered list of the sentiment for each document in the inaugural corpus.
>
> **[12:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=723)** If you compare back to your previous notes, you'll see that this order has changed.
>
> **[12:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=728)** Incidentally, you can provide your own function.
>
> **[12:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=732)** So if you want to calculate sentiment based on a particular dictionary and a particular algorithm, you can add that into the fun equals place it in as a function and textstat underbar polarity will use that function to calculate the sentiment.
>
> **[12:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=750)** Something that I'm not going to discuss is something called textstat underbar valence, which is very similar to textsta underbar polarity, but where textstat under bar polarity assumes that sentiment or positive and negative values are attached to columns or documents with textstat underbar valence that positive or negative sentiment value is attached to individual words in each document of the corpus.
>
> **[13:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=782)** To setup for textstat valence, what you'll need to do is generate a unique list of all of the terms in a corpus, all documents of the corpus, then you'll need to create a second dictionary that has positive or negative values for each one of those terms.
>
> **[13:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=802)** So if you have 2,100 terms in a document, you'll need to have 2,100 valence values to associate with those terms.
>
> **[13:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=813)** Then you can use textstat underbar valence to calculate a sentiment based on each individual word versus categories of words.
>
> **[13:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=822)** What I've just covered is sentiment analysis, using quanteda and specifically using the textstat underbar polarity command.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (4), case, (3), for. (1)
> **Env Vars:** nrc (11)
> **CLI Commands:** find (5), make (2)
> **Definitions:** is a  (5), is an  (1), stands for (1)
> **Prerequisites:** you'll need (3), setup (2), install (1), set up (1)
> **Code Identifiers:** sctokens (5)
> **Versions:** 0.99725979 (1), 1.60943791 (1), 0.06 (1), 1.60 (1)
> **Analogies:** for example (2), such as (1), similar to (1)

#### Visualization with textplots
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=1)** Quanteda provides an entire package of tools for plotting the statistics related to natural language processing.
>
> **[0:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=10)** The quanteda folks have put all of this into a package called quanted.textplots, and we bring this in in lines six and seven.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=21)** So I'll go ahead and run those two lines.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=24)** And we need something to work with, so I'm going to bring in mydfm.rds.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=30)** You'll notice that appears in the upper right hand corner in the environment.
>
> **[0:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=35)** The easiest thing to do is, of course, plot a wordcloud.
>
> **[0:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=39)** And in line 12, you can see how simple this is.
>
> **[0:42](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=42)** I simply run textplot underbar wordcloud as shown in line 12 and wait for quanteda to make a wordcloud out of all the features.
>
> **[0:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=54)** This is a pretty dense wordcloud and we can trim it down. In line 15, I've created something called smallerDFM, which is a subset of the original DFM where the year is greater than 2000.
>
> **[1:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=68)** I'll run that and you can see that the number of documents in smallerDFM is six.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=76)** You can look in the lower left hand corner of the console.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=79)** Now in line 18, I'll run texplot underbar word cloud on this smallerDFM. In line 19, I've requested that the minimum occurrence of any feature is 10 and I'm using a selection of colors called topo colors.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=95)** Let's go ahead and run line 18, 19, 20 and you can see a new wordcloud.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=100)** There are fewer phrases and there are more colors.
>
> **[1:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=104)** Quanteda also provides something called textstat keyness.
>
> **[1:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=109)** And in line 23 you can see we've set this up.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=113)** My key now contains the keyness of the smallerDFM and then it provides textplot underbar keyness.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=123)** Let's go ahead and run it and see what exactly happens.
>
> **[2:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=127)** The plot is actually easier to understand than the original statistic.
>
> **[2:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=132)** What it's doing is comparing two documents, the 2009 Obama inaugural speech against the reference, which is the entire document.
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=142)** Let's skip ahead to something called xray.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=145)** And if you're a Kindle reader, you know about xray and how certain words or terms show up at certain places and it will show you where those words show up in the book that you're reading.
>
> **[2:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=159)** Well, you can create that with quanteda. In line 27, I've created a KWIC object called mykwic and I'm looking for the word government.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=173)** Now, in line 28, I can plot that.
>
> **[2:56](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=176)** And let's zoom in to see what this actually does for us.
>
> **[3:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=180)** I'm looking for the word government.
>
> **[3:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=183)** And the first row is 1789 Washington, and you can see approximately where the word government shows up.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=191)** This is a whirlwind tour through the quanteda textplot package.
>
> **[3:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=197)** It provides several useful functions for visualizing the statistics that you've created using other packages.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Code Identifiers:** smallerdfm (4)
> **Definitions:** is a  (3)
> **Env Vars:** dfm (1), kwic (1)
> **CLI Commands:** make (1)

#### Use dplyr with quanteda
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=1)** Quanteda provides a package to interface quanteda commands into the tidyverse.
>
> **[0:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=7)** More specifically, this is a package that extends dplyr to account for some of the quanteda type natural language processing commands.
>
> **[0:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=17)** Let's take a look at how this actually works.
>
> **[0:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=20)** In line 11, I bring in quanteda and then in line 12 I bring in quanteda.tidy.
>
> **[0:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=26)** We're ready to write an example.
>
> **[0:29](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=29)** In line 15, I've set up a similar command to what I've done with the standard quantity package.
>
> **[0:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=36)** But using tidyverse syntax. You'll notice at the end of line 15 is the percent greater than percent, which is a pipeline from one command to the other and is very familiar to tidyverse users.
>
> **[0:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=51)** The way to read this is by starting in line 15.
>
> **[0:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=55)** And what it says is use the data in data underbar corpus inaugural, pipe it to filter and only allow years that are greater than 1950 to pass through to a range which is in line 17, and this says arrange by party.
>
> **[1:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=76)** Then pull a president.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=79)** Let's see what happens when we run this. In the console, you can see that we have a list of president names.
>
> **[1:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=87)** And this is because we've filtered all of the president names that were greater than 1950.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=92)** You'll notice that Washington, for example, is missing because Washington was prior to 1950.
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=100)** I've set up another example in line 20, 21, and 22.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=105)** In this case, you can read this as create a new SampleCorp object. Into it placed the result of starting with the data corpus inaugural pipelined through distinct president and then pipelined through mutate.
>
> **[2:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=123)** Bring in the first words with a substring at stop and start of 20.
>
> **[2:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=129)** Let's go ahead and run that and then take a look at the first words in newSampleCorp.
>
> **[2:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=136)** And what you're seeing is the first words of every speech by president.
>
> **[2:23](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=143)** Again, quanteda provides a package called quanteda.tidy that provides a way to interface between quanteda and the tidyverse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), extends (1), pass (1), this. (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Code Identifiers:** newsamplecorp (1)
> **Analogies:** for example (1)


### 20. 19. Conclusion

#### Your next steps in NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=1)** We've been talking about quanteda, one of many natural language processing frameworks and packages written for R.
>
> **[0:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=8)** You might be interested in two other packages. In particular, look at TM and tidytext.
>
> **[0:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=15)** And there is always the R CRAN task view for natural language processing.
>
> **[0:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=21)** Be sure to familiarize yourself with this comprehensive list of available tools.
>
> **[0:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=27)** Of course, text mining and natural language processing can be done in multiple languages, not just R.
>
> **[0:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=33)** Python, for instance, has a collection of NLP tools, and some NLP libraries work across multiple languages.
>
> **[0:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=44)** There are web API solutions from all of the major Cloud providers as well as other technology APIs.
>
> **[0:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=52)** Mastering natural language processing is just like any other skill.
>
> **[0:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=57)** The more you use it and practice, the better your results will become.
>
> **[1:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=61)** So thanks for joining me in this course on using Quanteda for Natural Language Processing.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (2), cran (1), api (1)
> **Analogies:** for instance (1), just like (1)
> **CLI Commands:** python (1)


### 21. 20. Capstone Project

#### Project introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-introduction?u=76281980)

#### Project explanation
> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=1)** - [Instructor] I hope you found this project to be challenging.
>
> **[0:04](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=4)** It's a real-world problem, and like-real world problems, it doesn't come with a simple solution, or guidance to the correct answers.
>
> **[0:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=14)** In past lessons, I've provided clean R code that illustrates a concept removing anything that doesn't illustrate that basic concept.
>
> **[0:24](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=24)** In this project, I've included files showing the experiments I wrote and abandoned.
>
> **[0:30](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=30)** Real-world research involves making some guesses, then having the depth of knowledge to switch methods if the first tactic isn't working.
>
> **[0:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=41)** Take a look at the file labeled Mastodon Experiments.
>
> **[0:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=45)** You'll find a messy file, where I first started work with the TM package, but then realized dealing with hashtags and punctuation would require some complex regular expressions.
>
> **[0:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=59)** You'll see I switched to quanteda, because much of the code for working with hashtags was already part of the package.
>
> **[1:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=67)** Switching made the task much simpler.
>
> **[1:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=72)** Now take a look at the file titled Final Climate Change in Mastodon.qmd.
>
> **[1:19](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=79)** This is a copy of the outline I provided for you earlier, but with code I wrote and cleaned up for publication.
>
> **[1:28](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=88)** Let's step through the chapters in that document, starting with the segment labeled Results.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=95)** If you studied the file titled Explore Mastodon.r, in the Climate Change Experiments Folder, you already know I'm using quanteda.
>
> **[1:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=105)** It's not the only way to address the project, but for me, it was the most direct.
>
> **[1:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=110)** You may have decided to use TM or tidy text.
>
> **[1:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=113)** In the tidyverse, all of these are valid tools.
>
> **[1:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=119)** I'm also choosing to build code using the forward pipe command, as well as lambda functions.
>
> **[2:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=126)** These may not be familiar, so I suggest you refer to lessons in my other course, R for Data Science, Lunch Break Lessons.
>
> **[2:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=134)** You already know how quanteda works, so I'll only review some of the highlights of the code.
>
> **[2:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=140)** Let's start with the code block labeled Get Hashtags.
>
> **[2:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=145)** You'll see I've built a corpus, then a document frequency matrix, and then used the dfm_keep function to only keep hashtags.
>
> **[2:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=157)** In the next code block, I display the 10 top features.
>
> **[2:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=161)** In other words, the top 10 hashtags.
>
> **[2:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=164)** With quanteda, this is all pretty simple.
>
> **[2:49](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=169)** Study this code chunk, then look at the following questions.
>
> **[2:53](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=173)** You'll see the remaining solutions are very similar to the first solution.
>
> **[2:57](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=177)** There are only minor changes towards the end of the pipeline to account for the particulars of each question.
>
> **[3:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=185)** I hope you found this useful.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=187)** I'm sure you found it challenging.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=190)** This course and this project is an advanced example.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=194)** I have provided only the briefest of explanations, leaving it to you to learn by studying my work.
>
> **[3:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=202)** R is an advanced language, as you well know.
>
> **[3:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=205)** It provides in-depth tools for natural language processing, but these require study.
>
> **[3:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=211)** I encourage you to accept the challenge of improving your skills with natural language processing using the R language.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (2), switch (1), lambda (1), function (1)
> **Definitions:** is an  (2), is a  (1), in other words (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** dfm_keep (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Mark Niemann-Ross]]

## Resources

- Exercise files available

## Skills Covered

- R (Programming Language)
- Artificial Intelligence (AI)
- Natural Language Processing (NLP)

## Path Context

### In [[Moving from Data Scientist to Data Analyst]]
← [[Python- Working with Predictive Analytics]] | **9 of 10** | [[Advanced Tableau Desktop]] →

## Appears In

- [[Moving from Data Scientist to Data Analyst]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning with Logistic Regression in Excel, R, and Power BI]] — Artificial Intelligence (AI), R (Programming Language)
- [[Building NLP Pipelines with spaCy]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Hands-On Natural Language Processing]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Advanced Nlp With Python For Machine Learning]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Applied AI- Building NLP Apps with Hugging Face Transformers]] — Artificial Intelligence (AI), Natural Language Processing (NLP)

---

[↑ Back to top](#)