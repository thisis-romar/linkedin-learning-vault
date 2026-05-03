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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Complete%20Guide%20to%20NLP%20with%20R.md)

![Complete Guide to NLP with R](https://media.licdn.com/dms/image/v2/D560DAQFLD7mdGLaSfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722010134160?e=2147483647&amp;v=beta&amp;t=sRHBezRhvt01iGAc-5GnbR9a6qBcW2Q5-NYeykUGc7g)

# Complete Guide to NLP with R

> Natural Language Processing is to words as Computer Vision is to pictures! Learn NLP with the R programming language. In this course, experienced technologist Mark Niemann-Ross shows you how to use the R programming language to implement natural language processing algorithms. R is uniquely adept at manipulating matrices and producing statistics, both of which are core to NLP. Learn about framewor

> [LinkedIn Learning](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r) | 5h 4m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Welcome to natural language processing with R](#welcome-to-natural-language-processing-with-r)
  - [Skills and tools you need to be successful in this course](#skills-and-tools-you-need-to-be-successful-in-this-course)
- [**1. Up and Running with tm**](#1-up-and-running-with-tm) (4 videos)
  - [What is tm and why do you need it?](#what-is-tm-and-why-do-you-need-it)
  - [Real-world NLP with tm](#real-world-nlp-with-tm)
  - [Real-world NLP with quanteda](#real-world-nlp-with-quanteda)
  - [Real-world NLP with tidytext](#real-world-nlp-with-tidytext)
- [**2. Corpora and Sources**](#2-corpora-and-sources) (5 videos)
  - [Understanding corpora and sources](#understanding-corpora-and-sources)
  - [Examining corpora](#examining-corpora)
  - [Examining sources](#examining-sources)
  - [Custom sources](#custom-sources)
  - [Combining and subsetting corpora](#combining-and-subsetting-corpora)
- [**3. Working with NLP Metadata**](#3-working-with-nlp-metadata) (3 videos)
  - [Working with document metadata](#working-with-document-metadata)
  - [Make useful metadata](#make-useful-metadata)
  - [Finding and filtering based on metadata](#finding-and-filtering-based-on-metadata)
- [**4. Preprocessing Text in Preparation for NLP**](#4-preprocessing-text-in-preparation-for-nlp) (7 videos)
  - [Transformations](#transformations)
  - [Stop words](#stop-words)
  - [Stemming](#stemming)
  - [Lemmatization](#lemmatization)
  - [Tokenization](#tokenization)
  - [N-grams](#n-grams)
  - [Part of speech tagging](#part-of-speech-tagging)
- [**5. Create Structured Data**](#5-create-structured-data) (4 videos)
  - [Understanding the document-term matrix](#understanding-the-document-term-matrix)
  - [Create the document-term matrix](#create-the-document-term-matrix)
  - [Weighting the document-term matrix](#weighting-the-document-term-matrix)
  - [Focus the document-term matrix](#focus-the-document-term-matrix)
- [**6. Apply Statistics to Text**](#6-apply-statistics-to-text) (3 videos)
  - [Word and document frequency](#word-and-document-frequency)
  - [Hierarchical clustering](#hierarchical-clustering)
  - [Associated terms](#associated-terms)
- [**7. Sentiment Analysis**](#7-sentiment-analysis) (4 videos)
  - [What is sentiment analysis?](#what-is-sentiment-analysis)
  - [Real-world example of sentiment analysis](#real-world-example-of-sentiment-analysis)
  - [Sentiment datasets](#sentiment-datasets)
  - [Sentiment tools](#sentiment-tools)
- [**8. Visualizing Natural Language Processing**](#8-visualizing-natural-language-processing) (3 videos)
  - [Plotting text mining](#plotting-text-mining)
  - [Plotting Zipf’s and Heap’s Law](#plotting-zipfs-and-heaps-law)
  - [Word clouds](#word-clouds)
- [**9. Conclusion**](#9-conclusion) (1 videos)
  - [Your next steps in NLP](#your-next-steps-in-nlp)
- [**10. Introduction to NLP Tidytext R**](#10-introduction-to-nlp-tidytext-r) (2 videos)
  - [Welcome to natural language processing with R](#welcome-to-natural-language-processing-with-r)
  - [Skills you need to be successful in this course](#skills-you-need-to-be-successful-in-this-course)
- [**11. Use of Tidytext for NLP**](#11-use-of-tidytext-for-nlp) (9 videos)
  - [How to think like tidytext](#how-to-think-like-tidytext)
  - [An example: Calculate the most popular terms in a document](#an-example-calculate-the-most-popular-terms-in-a-document)
  - [Tokenizing with unnest_tokens( )](#tokenizing-with-unnest_tokens)
  - [Stopwords, punctuation, whitespace, and numbers](#stopwords-punctuation-whitespace-and-numbers)
  - [Stemming and lemmatization](#stemming-and-lemmatization)
  - [Term frequency with bind_tf_idf( )](#term-frequency-with-bind_tf_idf)
  - [Sentiment analysis with sentiments( )](#sentiment-analysis-with-sentiments)
  - [Parts of speech with parts_of_speech( )](#parts-of-speech-with-parts_of_speech)
  - [Import and export from other NLP packages](#import-and-export-from-other-nlp-packages)
- [**12. Conclusion**](#12-conclusion) (1 videos)
  - [Next steps](#next-steps)
- [**13. Introduction to NLP with Quanteda R**](#13-introduction-to-nlp-with-quanteda-r) (2 videos)
  - [Welcome to natural language processing with R](#welcome-to-natural-language-processing-with-r)
  - [Skills and tools you need](#skills-and-tools-you-need)
- [**14. Getting Started with Quanteda**](#14-getting-started-with-quanteda) (2 videos)
  - [Introduction to quanteda](#introduction-to-quanteda)
  - [Install quanteda](#install-quanteda)
- [**15. Understanding Corpora**](#15-understanding-corpora) (5 videos)
  - [Create a quanteda corpus](#create-a-quanteda-corpus)
  - [Create metadata with docvars](#create-metadata-with-docvars)
  - [Corpus subsets and groups](#corpus-subsets-and-groups)
  - [Reshape and segment a corpus](#reshape-and-segment-a-corpus)
  - [Remove lines from a corpus](#remove-lines-from-a-corpus)
- [**16. Understanding Tokens**](#16-understanding-tokens) (4 videos)
  - [Corpus and tokens](#corpus-and-tokens)
  - [Remove tokens and stopwords](#remove-tokens-and-stopwords)
  - [Group tokens](#group-tokens)
  - [Stemming with tokens](#stemming-with-tokens)
- [**17. Understanding Document-Feature Matrix (DFM)**](#17-understanding-document-feature-matrix-dfm) (3 videos)
  - [Corpus, tokens, and DFM](#corpus-tokens-and-dfm)
  - [Create and modify a DFM](#create-and-modify-a-dfm)
  - [Real-world analysis with DFM](#real-world-analysis-with-dfm)
- [**18. Analysis and Visualization**](#18-analysis-and-visualization) (6 videos)
  - [The quanteda textstats package](#the-quanteda-textstats-package)
  - [Real-world text statistics with textstats](#real-world-text-statistics-with-textstats)
  - [Understand the quanteda sentiment package](#understand-the-quanteda-sentiment-package)
  - [Real-world sentiment analysis with quanteda sentiment](#real-world-sentiment-analysis-with-quanteda-sentiment)
  - [Visualization with textplots](#visualization-with-textplots)
  - [Use dplyr with quanteda](#use-dplyr-with-quanteda)
- [**19. Conclusion**](#19-conclusion) (1 videos)
  - [Your next steps in NLP](#your-next-steps-in-nlp)
- [**20. Capstone Project**](#20-capstone-project) (2 videos)
  - [Project introduction](#project-introduction)
  - [Project explanation](#project-explanation)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to natural language processing with R](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442818?u=76281980&t=1)** - [Mark] There is an astounding amount of information in the world, with more being created every minute. Much of that information is stored as unstructured human language. For example, social media users alone account for at least 500,000 sentences every minute. That's more information than any one person can read, much less research or draw conclusions from. Here's where [[Natural Language Processing (NLP)|natural language processing]] can help. By teaching a computer to recognize parts of human language, we can use it to give us insights and summaries of the obvious, or hiddenm meaning, behind the words. Natural language processing, put simply, is using computers to perform research on human languages. That isn't to say NLP will teach computers to understand human languages, only that they might be able to make observations about those languages. Welcome to Introduction to Natural Language Processing using R. In this course, we'll use the R programming language to implement natural language processing [[Algorithms]]. R is uniquely adept at manipulating matrices and producing [[Statistics]], both of which are core to NLP. I'm Mark Neimann-Ross, and I'm excited to travel with you on this journey. So let's get started with natural language processing using R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (5), [[Algorithms]] (1), [[Statistics]] (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [mark] (1)

#### [Skills and tools you need to be successful in this course](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=1)** - [Instructor] This course on [[Natural Language Processing (NLP)|natural language processing]] requires knowledge of the R programming language. This is decidedly not a beginner course. I assume you already have experience with programming in R. Before you start, ask yourself these questions. Do you understand how to create and use a vector in R? Do you understand how to create a function in R? Are you familiar with installing and linking an R package? Can you run an R program and debug any errors? These are simple tasks, but if you can answer yes, then you have the rudimentary knowledge of R required to get you through this class. If you aren't sure about these concepts, you might want to look at one of the beginning R courses in this library. Another alternative is to take the [[LinkedIn]] Skills Assessment Test, you'll find it via your profile, under skills. Go ahead and take the test. If you score in the top 30%, you're good to go. If you're still unsure, go ahead and dive in. When you encounter a concept you're unfamiliar with, take time to research the answer. Experience is one of the best teachers, so don't be afraid to get started, you may pleasantly surprise yourself. Programming natural language processing can be done with a regular text editor but it's going to be a painful process. To perform NLP efficiently
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-ll-need-to-be-successful-in-this-course?u=76281980&t=95)** requires an integrated development environment such as R Studio, Visual Studio Code, or R Commander. These IDEs will help you write efficient code and avoid mistakes. Amazingly, all of them have no cost options. In this course, I'll be using R Studio by Posit. It's popular, but by no means the only option available. I have also used Visual Studio Code and dabbled with several other [[Microsoft Products|products]]. Whatever IDE you choose will be fine. And of course, if you are unhappy with the IDE you are using at the start of this course, simply pause the video and choose another. We'll be happy to wait for you to catch up and get settled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[LinkedIn]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** ide (2), nlp (1)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 1. Up and Running with tm

[↑ Back to Table of Contents](#table-of-contents)

#### [What is tm and why do you need it?](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=1)** - [Instructor] R is an excellent programming language for [[Statistics]] and matrix manipulation. Given a table or matrix where data is organized, R can return a wealth of insights and visualizations. However, data is rarely stored in clean tables with well-ordered rows and columns. Data is messy and requires cleaning, often referred to as [[Data Wrangling]]. Human language is a prime example of messy data. Concepts aren't tagged, context is fluid, there are no standardized rules, and absolutely no reliable indicators to help a computer understand what is being said and how to separate the information from the presentation. This is where [[Natural Language Processing (NLP)|natural language processing]] comes in. Natural language processing is a collection of tools and techniques to convert human language into a format useful to computers. If you wanted to, you could do this by hand but it would be painful. Instead, it's easier to use a framework. In this course, we'll use a package called Tm, short for [[Text Mining]]. Tm is a standard R package. To use it, you'll need to install it in your copy of R. Like all R packages, once you've installed Tm you don't need to install it again. When you want to use features of this package, you can link it with the library command. Tm requires an additional package called NLP,
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-tm-and-why-do-you-need-it?u=76281980&t=99)** a package that provides infrastructure for natural language processing. You may notice this happening when you install Tm but you don't have to learn anymore about that particular package. When TM is loaded and linked, you can list the contents. This confirms you have successfully loaded the package. For documentation on the Tm package, use the help command with package=tm. As you'll see, Tm has quite a few functions. In the next few chapters, we'll break Tm down into bite size chunks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Statistics]] (1), [[Data Wrangling]] (1), [[Text Mining]] (1)
> **Definitions:** is a  (3), is an  (1), short for (1)
> **Prerequisites:** install (3), you'll need (1)
> **Env Vars:** nlp (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Real-world NLP with tm](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=1)** - [Instructor] As part of the introduction to a [[Natural Language Processing (NLP)|natural language processing]] with TM, I'd like to show you three instances of how to do natural language processing. First, we'll be with TM and Base R. The second one will be Quanteda which is a package for natural language processing in R. And a third will be Tidy Text which is another package for doing natural language processing in R. Let's start with Base R and TM. One heads up, you'll want to make sure that your current working directory shows the poetry folder and I've illustrated this in the lower-right hand corner of the screen. You can see towards the bottom that there is a poetry folder. You can set your current working directory under the more menu. Move yourself to the folder that shows poetry, just like I've done here, and then set this as the working directory. Now, the task that I have set for myself is to find out the most popular words used in a collection of poetry. I've downloaded various poems from Gutenberg, and I've stored them into the poetry folder in the exercise files. In this instance, I'm going to use Base R with TM. Let's start by bringing in the TM library. I do that in line 11. I've already installed packages, TM, so I don't need to do that.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=95)** Starting in line 13, what I've said here is I'm going to create a vector. It's called Top Poetry Terms and into it, I am going to store the result of a number of functions. In line 13, I've created a corpus directory source and the directory source points to a directory called poetry. Now I'll explain more about corpuses and directory sources in following sessions. For right now, all you need to know is corpus is a special text-mining object. At the end of line 13 which actually continues on line 14, you'll see a pipe forward. And this pipe forward is new in R. It's very similar to the magrittr pipe symbol which is percent greater than percent, but in this case, pipe forward is native to R, so I'm going to go ahead and use that. What it says is take the results of the corpus operation and pass it to the document term matrix operation, and in this case, it's going to create a document term matrix for me, and again, I'll explain what document term matrices are in a future session. Again, on line 18, you'll see that I am pipe forwarding into line 19 which is remove sparse terms. Document term matrix is a sparse matrix and so many of the spaces in the matrix are vacant, and we will remove those.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=192)** I pipe that forward into line 20 which says convert it from a sparse matrix to a regular matrix. Then in line 21, I ask R to give me the sums of all of the columns. Now, what's important here to realize is that this matrix is a collection of a number of rows. Each row identifies the document that we're talking about, and each column identifies a term or a [[Microsoft Word|word]]. So the spaces in the matrix are the number of times that a word appears in a particular document. When I do column sums, what I'll return is the number of times that a particular term appears in the entire corpus which is a collection of documents. In line 22, I've said sort this with decreasing equals true, so I've got the most frequent terms at the very top. And then line 23 says, just give me the top 10. I'm going to put my [[Cursor]] in line 13. I'll click on run and we give it a minute and our returns with a top poetry terms, and you'll see that that's appeared in the top-right-hand corner in the environment. On line 25, I'm going to run top poetry terms and what that does is return the top poetry terms, like, one, now, will, now, project, see, love, may, upon. Each term is accompanied by the number
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tm?u=76281980&t=286)** of times it appears in the corpus. So, like appears 3,057 times. One appears 2,802 times. Now I have the most popular words used in this collection of poetry, and I've done this with Base R with TM. Next, we'll accomplish the exact same task, but we'll use the Quanteda package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (4), [[Microsoft Word|Word]] (2)
> **Definitions:** is a  (6)
> **CLI Commands:** make (1), find (1)
> **Analogies:** just like (1), similar to (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### [Real-world NLP with quanteda](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=1)** - [Lecturer] As an introduction to [[Natural Language Processing (NLP)|natural language processing]], I'm showing how to do a task with three different tools. One of them is Base R with the [[Text Mining]] package. One of them is Quanteda, also a text mining package for R, and the third is going to be with Tidytext which again is text mining with R. In this session, let's talk about Quanteda. A note, you'll need to make sure to set your working directory so that you can find the poetry folder. Now, let's start with Quanteda. Quanteda is a package. So of course, you'll need to install it. I've already done this. And you'll also need the readtext package. In line 15 and 16, I bring both of those packages in with a library command. And then in line 19, I've set up a series of commands that will produce the top poetry features. And in this case, our task is to find the top 10 words being used in a collection of poetry. That's what lines 19 through 25 will accomplish. Let's take a look at what's actually happening. In line 19, I've created top poetry features, which is a vector, that will contain the top 10 features or words in this collection of poetry. In line 19, I've also used the readtext command to read in all of the text files in the poetry directory. At the end of line 19,
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=93)** you can see that I've used the pipe forward command which is new to R and allows me to send the contents of one function to the next, and that's exactly what I do. I take all of the contents of the poetry files and send it to the corpus command. The corpus command is a Quanteda function that creates a corpus, and a corpus is nothing more than a collection of documents. I send that corpus then to [[Tokens]] in line 21 which breaks each document up into a series of what Quanteda calls features, what most of the [[Representational State Transfer (REST)|rest]] of us call words. In this case, you'll notice that I'm removing all of the numbers and the punctuation. I then send this to line 22 where I also remove something called stop words and we'll discuss stop words in a later session. In line 23, I convert all of the tokens to lowercase. And then in line 24, I create a document feature matrix, DFM for short. A document feature matrix is nothing more than a matrix where all of the rows are labeled with the names of documents. All of the columns are labeled with the names of features or words. Each cell in the matrix contains the frequency of the terms in each document. Line 25 is top features, and this is a Quanteda command
>
> **[3:06](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-quanteda?u=76281980&t=186)** that gives me the top features in the document feature matrix. I'm going to select line 19 and then run it. We give Quanteda a minute or two to think about this and you'll see that Quanteda has returned top poetry features, and that's evidenced in the upper right hand corner in the environment pane. On line 27, I can run top poetry features and inspect its contents. Now you'll see that Quanteda has returned SG and ST, and this is an artifact of something that Quanteda does. The rest of the terms are identical to the terms returned by Base R with TM. As a side note, for those of you who are not familiar with the pipe forward command, I've included in lines 30 through 42 code that does exactly the same but does not use pipe forward. If you need to learn about pipe forward, you can compare these two sets of code and see how they look and work in a similar fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (3), [[Tokens]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** you'll need (2), install (1), set up (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** dfm (1)
> **Speakers:** - [lecturer] (1)

#### [Real-world NLP with tidytext](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=1)** - [Instructor] In this third introductory file, I'm going to show you how to accomplish our task of finding the most popular words in a collection of poetry, and we're going to use Tidy Text to find that answer. In previous sessions, I used base R with the [[Text Mining]] package, or tm. Then I used Quantita. Now, I'm going to show the same task using Tidy Text. Again, a note, you'll want to make sure that your home directory points to the exercise files, just like I've shown in the lower right-hand corner. Let's begin. In line 11 and 12, I activate the Tidyverse and Tidy Text packages. Then in line 14, I've set up code that will accomplish our task. In line 14, you can see that I'm using list.files with a path to the poetry folder, and I've only asked for text files. I'm also asking for full names, which will give me the complete path name, including the directory. At the end of line 14, which actually overflows into line 15, I'm using the standard Magrittr greater than, or pipe symbol, which is percent greater than percent. In line 16, I use MAP df, which applies a function across a series of files. In this case, the files are piped from line 14 into line 16. It's just a collection of all of the files
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=95)** in the poetry folder, and I've said, create a data frame where you read in all of those files. In line 17, tidy text provides the unnest [[Tokens]] function. And what this will do is break all of those documents down into individual words. In keeping with the tidy verse mandate unnest provides one [[Microsoft Word|word]] per row. In line 18, I used a filter command to remove any numbers. Unnest in line 17 automatically removes all of the punctuation. In line 19, I use anti join stop words, and this removes all stop words, which we will talk about in a future session. Finally, in line 20, I ask for count, which gives me the count of all unique words in that file. And then on line 21, I ask for the top 10 instances. Let's go ahead and run that. I'll select line 14 and hit run, and tidy text comes back, and if I open up our console, you can see that tidy text has provided us with the top 10 words used in this poetry collection. If you compare this to the original example, you'll see that these words are very similar, except for sg. So this is how tidy text would accomplish our task. Again, we've talked about base R with TM,
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-nlp-with-tidytext?u=76281980&t=192)** and Quantita, and then finally this example with Tidy Text. In future sessions, we'll talk about how these actually work some of the concepts involved, and how to implement them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (1), [[Tokens]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** just like (1), compare this to (1)
> **Env Vars:** map (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Corpora and Sources

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding corpora and sources](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=1)** - [Instructor] [[Natural Language Processing (NLP)|Natural language processing]] revolves around several data objects, corpus, documents, [[Tokens]], and DTMs or document-token matrices. A corpus is a collection of documents, and those documents come from various sources. The tm package provides for the import of many sources, and let's take a minute to examine how sources are brought into corpora. A corpus is an R object much like a data frame or a list, it contains documents in a consistent structure that simplifies manipulating and performing research on the text. Think of a corpus like an egg carton, the eggs are documents and the egg carton is a corpus. When eggs are placed in an egg carton, it is easy to confirm their shape, size, and condition. When they're loose on the countertop, it is more difficult to individually assess each egg, using a corpus to contain text is the same thing. When contained in a corpus, it is easier to confirm a document's size, content, and format. With the tm package, different corpora are included and can also be created with plugin packages. Here is a table showing their basic capabilities and how they are installed into tm. I've included this table with the example files. Natural language processing can import several types
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-corpora-and-sources?u=76281980&t=96)** of documents with special functions called sources. Different sources are used for different types of documents, tm provides the command getSources to provide a list of available sources. Here's a table briefly describing these document sources and the corpora able to use them. This table is also included in the example files for this chapter. Each of these sources are used to describe different types of documents. In the next lessons, we will dive deeper into each of these sources and corpora.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Tokens]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** getsources (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Examining corpora](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=1)** - Let's talk about corpora, the plural of corpus. There are different types of corpus available with the TM library. In most cases, you'll use simple corpus but it's useful to know of the other types in case you either run into them or you find that you need their capabilities. Let's start in line one where I bring in the [[Text Mining]] library, and then in line five I'm going to use the corpus command. I've created a directory source pointing to a directory called poetry and I'm only selecting the text files. Now, direct resource is a special command that we'll cover in the next session on sources. For right now what you need to know is that direct resource pulls in files from a directory. The corpus command is interesting because TM provides it as a shortcut to selecting whatever is the appropriate corpus type. In most cases, it will produce a simple corpus. In some cases it will produce other types. Let's go ahead and run line five. I'm going to select it and then click on run and you can see in the upper right hand corner I have a new corpus. It's a large simple corpus. In line nine, I can look at the structure of that new corpus. I'll open up the console a bit so you can see what it produced. The classes are simple corpus, which is a subtype of corpus.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=98)** There is a content element in the corpus and you can see there that there's actual readable content. There are attributes which are the names of each of the documents included in this corpus and some [[Metadata]] and we'll talk about metadata in a minute. If I select the class of new corpus, you'll see that it returns simple corpus, which is a subtype of corpus. Let's move on to a Vcorpus and this is called a volatile corpus. This only exists in memory and it has a few more capabilities than a simple corpus. To start, I'm going to clear my console and then in line 15, I'm going to list the files in the current directory and I'll use that again in a second. In line 17, I create a new Vcorpus and note that instead of just simply asking for a corpus I've asked for a Vcorpus. In the upper right hand corner you can see that I now have a new Vcorpus which is a large Vcorpus, different than a large simple corpus, and we can take a look at what that corpus looks like. In the console, I'll type in class new Vcorpus and you can see that it now says it's a Vcorpus which is a subtype of corpus. Now, where is a Vcorpus stored? In line 22, I re-list the contents of the current directory and you'll notice that there is no new Vcorpus listed.
>
> **[3:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=200)** Instead, we need to list the objects in memory which is what I've done in line 25 and there now you can see both our new corpus and our new Vcorpus and new Vcorpus is stored in volatile memory. Let's move on and talk a bit more about a simple corpus. These are optimized for current usage. You'll most often be using these type of corpuses. When you create a simple corpus the punctuation is automatically stripped out. Now, there's a note. You can only create a simple corpus from a data frame, a directory, or a vector source. You'll see that there are other sources that we can use to create corpora. Let's run line 31, which will create a new simple corpus and you'll see that it looks very much like a new corpus. In fact, there's no difference because the original new corpus created by the corpus command was a simple corpus itself. In line 34, I can run a summary of new corpus and you'll see that it contains a series of plain text documents. Finally, let's talk about Pcorpus which is a permanent corpus. It's saved out to your hard drive, so it's not limited by the amount of volatile memory on your computer. Now, this sounds great. You might even think that
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=291)** if you write it out to a hard drive there's a file there that you can recall in future sessions. However, the process for reopening one of these files is somewhat byzantine and difficult, so you may find that it's just easier to recreate the Pcorpus each time you need it. That said, let's go through how to create a Pcorpus. You'll note in line 42 that I call up a library file hash. If you haven't already installed file hash, you'll need to do that as instructed in line 41. Simply remove the hash mark and run install packages file hash for this package, Pcorpus doesn't require file hash. It suggests file hash, but I've found that it's essential when you're running Pcorpus. In this case, I'll run line 42, and then in line 43 I've set up for a Pcorpus. I'll run that as well. Line 43 and 44 should look very similar with the change of Pcorpus instead of corpus, simple corpus or Vcorpus. Line 45 and 46 do something called DB control where I list the DB name, which is now my Pcorpus.rds and the DB type, which is rds. You'll see a note down below where it says database mycorpus.rds already exists,
>
> **[6:26](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-corpora?u=76281980&t=386)** and that's okay, it's just a warning. In 48, we can list files on the hard drive and there it is, myPcorpus.rds. If we were to list this new Pcorpus you'll find it looks very similar to all of the other corpora that we have created in previous steps, so again, TM provides us with several different corpora types, simple corpus, Vcorpus, Pcorpus. In most cases, you'll use the corpus command which will give you either a simple corpus or a Vcorpus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Text Mining]] (1)
> **Definitions:** is a  (8), is called (1)
> **CLI Commands:** find (3)
> **Prerequisites:** you'll need (1), install (1), set up (1)
> **UI Navigation:** click on (1), select the (1)
> **Warnings:** note that (1), warning (1)
> **Code Identifiers:** mypcorpus (1)
> **Cross-References:** in the next (1)

#### [Examining sources](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=1)** - [Instructor] As we've discussed, sources are a way to bring in documents into Corpora and there are several different types of sources. Let's take a look at them. In line one, I've brought in the [[Text Mining]] library and I'm also going to bring in the read text library 'cause I'll need it here in a minute. Before we get too far, you can always pull up a list of sources available to you with the text mining get Sources command as shown in line five. When I run that command, you can see that the console has produced a list of different sources dataframe source, directory source, URI source, vectorSource, XMLSource, and zip source. We'll cover each of those. Let's start with dataframe source. In line 10, I create a dataframe, read text, reads a bunch of files and produces a dataframe with those files in it. We'll run that and you'll see that I now have a dataframe, which is a dataframe of all of the poetry files. Let's take a quick look at that. I have two columns. One of them is the document ID, in this case, the file name. The second column is the text of that particular file. Now it's important that each document ID is unique and in line 15 through 19 I've created some code that will confirm that and you can see the result
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=94)** is document_ID is unique, so I'm good to go. Now I've done all of that to create aCorpus and this happens in line 21. I'm creating aCorpus . I'm using the corpus command, which you'll remember creates the most efficient corpus for my needs and I'm using DataFrameSource with an argument of a dataframe, so I'm using the contents of a dataframe to create aCorpus and we run that and you'll see that I now have aCorpus , which turns out to be a large simple corpus and simple corpus was selected for us by the corpus command. If we summary the aCorpus , you'll see that it contains all of the files, a class, and a mode. So dataframe source is pretty upfront and clear. Next, let's look at directory source and that happens in line 27. In this case, I'm going to create newCorpus which will be a corpus containing the contents of a directory, DirSource. The directory is poetry and the pattern is *.text. When I run that, DirSource searches through the poetry directory, pulls in all the text files and gives us a newCorpus, and in this case you'll see that newCorpus is identical to aCorpus . If I summarize newCorpus, you'll see that I've received the exact same listing as I received earlier with aCorpus . Now in line 34, I use URISource
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=193)** and you'll notice that URISource accepts the use of a series of URLs or universal resource indicators. These are Gutenberg files, they're text files, and when I run this, I'm going to overwrite newCorpus. The URISource command goes out to the internet for each URL that it has, pulls in that file, and then builds aCorpus out of it. You'll see that newCorpus is now a large Vcorpus with two elements instead of 26, 2 elements because it only pulled in two files. If we summarize newCorpus, you'll see that we only have two files, 573117-0 and 41707-0. Next is vectorSource. VectorSource allows us to create aCorpus from a simple text vector. I create that in line 41 and then in line 43, I give it names. Let's take a quick look at vectorOfText and I'll do that down in the console and you'll see that I have two elements, first line, second line. In most cases, the actual contents would be an entire document. I've only provided a sentence for brevity. In line 45, I use the Vcorpus command with a vectorSource using the vectorOfText so aCorpus is now going to change and you'll see that in the upper right-hand corner, aCorpus has changed
>
> **[4:50](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=290)** to a list of two instead of an actual corpus. If I go down to the console and I select class of aCorpus, the class function correctly identifies aCorpus as a VCorpus instead of a list of two. In line 49, I'll run a summary of aCorpus and you can see that in fact there are two documents in this corpus. Next is XMLSource, and in many cases you'll find a lot of documents in XML format on the internet. In order to use XMLSources, you'll need to bring in both the XML library and the XML two library. Then you need to set up an XML reader, which is what I've done from line 56 through 71 and I won't get into this. Suffice to say it brings in XML in a format that the corpus command can read. The actual business happens down in line 74. I'm creating an XMLCorpus using corpus with XMLSource. I've identified a source of XML data, in this case, [nasa.gov](https://nasa.gov) and I've said the reader will be my XML reader which I just defined earlier. Let's run line 74, and you can see that I now have an XMLCorpus, which is a list of one because I only gave it one document to read.
>
> **[6:25](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/examining-sources?u=76281980&t=385)** In 77, I summarized that document and you can see that I have a various list of documents inside my new XMLCorpus. Finally, we have a zipsource which, no surprise, brings in zip archives. It's fairly simple. In line 81, I create a corpus called aZipCorpus and I use zip source and point it at a zip file called archive.zip. When I run that, it creates a zip corpus which you'll see in the upper right hand corner. It's a large Vcorpus with 26 elements. In line 83, I can run a summary of that and you can see that the contents of the archive.zip file happen to be a archived version of the poetry folder. An important note is that all files must be at the root level of an archive. You cannot embed a folder with files in it. Zip source doesn't seem to recurse through folders, so these are sources that you can use to bring in different type of documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (2)
> **Code Identifiers:** acorpus (14), newcorpus (7), vectorsource (3), vectoroftext (2), azipcorpus (1)
> **Env Vars:** xml (7), uri (1), url (1)
> **Exercise Files:** zip file (2)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1), set up (1)
> **CLI Commands:** find (1)
> **URLs:** [nasa.gov](https://nasa.gov) (1)

#### [Custom sources](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=1)** - The authors of tm knew there were more document formats than they could possibly support. As an answer to this problem, they provided a way for developers to create their own sources and add them to tm as plug-in packages. In this lesson, let's take a look at some of these additional sources for document import. None of these additional sources can be used with simple corpus. Instead, they all use V Corpus, E Corpus or others. And let's take a look at these additional sources. Mbox Source provides a way to directly read mailboxes in Mbox format. It's added by installing tm.plugin.mail. This plugin also adds several functions for cleaning mail messages. AlcesteSource is added by installing tm.plugin.alceste and provides support for the Alceste format. EuropresseSource is added by installing tm.plugin.europresse and reads documents coming from Europresse. LexusNexusSource is added by installing tm.plugin.LexusNexus and provides a way to directly read and text mine LexusNexus documents. If one of the above sources doesn't work for the document type you are researching you can write your own.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/custom-sources?u=76281980&t=95)** This isn't an advanced task, but documented as part of the tm documentation. Search for extensions, how to handle custom file formats for more details. You may also find it helpful to follow the examples provided by other developers. This is easiest if you go to the CRAN page for tm then scroll down to the package source. This provides the entire source code for tm and all included sources. In the R directory, you'll find source R which illustrates how to write your own custom source.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** cran (1)
> **Exercise Files:** source code (1)
> **Speakers:** - the (1)

#### [Combining and subsetting corpora](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=1)** - As you're working with Corpora, you're sometimes going to need to filter them or combine them together. And TM provides ways for you to do this. In order to present this, I'll need a couple of Corpora, and in line four, I create simpleCorp, and in line five, I create newVCorpus. And you'll notice that one is a VCorpus, and one is a simpleCorpus. Let's move on and look at how to combine two Corpora into one. To do this, you use the C command, the standard combined command that you've used so many times in Basar. And you'll see that set up in line 13. Let's go ahead and run that, and what you'll notice is, in the upper right hand corner, I now have combinedCorpora, which is a large VCorpus, it's 97 elements, which is 26 plus 71. That all makes sense. I would like to point out something, in line 14, I've swapped simpleCorpus and newVCorpus. And now, watch what happens when I run that. You'll note that combinedCorpora has turned into a large list instead of a corpus. Now, the contents are pretty much the same in either way, but be aware that when you use combine, it will use the class of the first element for the resulting class.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=97)** simpleCorpus, at least in our studio, at some points, refers to a list instead of a corpus. I can confirm that this corpus is okay by using class, and then I'll enter the name combinedCorpora. You'll see that it's a list. If I run line 13 again, you'll see that I still have 97 elements, and if I go down below and run class(combinedCorpora), you'll see that I now have a VCorpus. In either case, you should be able to use this combinedCorpus in other Corpora-related type commands. Next, let's talk about TM filter, which is [[Text Mining]] filter. TM filter returns a corpus of documents matching a particular filter, and I've set this up in line 20. I'm going to create a filteredCorpus, where each document must have the [[Microsoft Word|word]] will not. And I'm going to filter the simpCorp, or simpleCorpus. So, I'll run line 20, and you'll see that I have a new filteredCorpus line in the environment. It's a large simpleCorpus, and it has 13 elements, which means that only 13 documents of the original simpCorp corpus had the words will not. I can summarize that and receive
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=191)** a list of all of the documents that actually had the words will not in them. Now, in your case, you can change the filter by changing line 21. F-U-N, which of course means fun, 'cause this is fun, but it actually refers to function and the function follows. In this case, I've used Grip L, which is a simple logic grip. It returns true or false on whether a document contains the words will not. In line 24, I've created TM index. TM index is very similar to TM filter, but it produces the numbers of the documents. And I can illustrate this in line 25, where I've used TM index on simpleCorpus with an identical function. And it returns a series of indexes and trues or false. In the console, you'll see that item 261 does not have will not, and item 262 also does not. It's not until we get to item 847, that I've finally found the word will not. I can use this logical return to filter out documents. And you can see this in line 27. I've produced a filteredCorpus from simpleCorpus, and I've given it a standard sub setting command to produce a yes or no result on whether a file should be included.
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/combining-and-subsetting-corpora?u=76281980&t=285)** Now, let's go ahead and run line 27, and what you'll see is, filteredCorpus is still 13 elements. This is a longer method than TM filter, but in this case, you can use any true, false, or logical return to select which items will go into the new corpus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Text Mining]] (1)
> **Code Identifiers:** simplecorpus (7), combinedcorpora (4), filteredcorpus (4), newvcorpus (2), simpcorp (2)
> **Definitions:** is a  (5), refers to (2), means that (1)
> **Warnings:** note that (1), be aware (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - as (1)


### 3. Working with NLP Metadata

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with document metadata](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=1)** - [Instructor] The tm package for R provides a lot of different [[Metadata]] options. Metadata is information about the data, the content of the corpus that you're working with. Metadata can include things like authors or the data publication or it can contain anything that you think is useful. tm provides three different types of metadata and it can be a bit confusing as to what appears when and why you might want to use one or the other type of metadata. Let's spend a couple of sessions talking about metadata, why it's important and how to use it effectively. Now, to demonstrate metadata, of course, I'll need to bring in the tm library and I can do that in line one. Before you go any further, it's important to check your working directory. The working directory needs to point to a directory called poetry, and if you look in the lower right-hand corner you'll see what that directory looks like. It's the exercise files. I'm going to use RStudios set as working directory to set this as the current working directory. Now, I can run line six to bring in a new VCorpus, which I'll use for demonstration purposes. Once I've done that, let's take a quick look at the different type of metadata and I've outlined this in lines 10, 11, and 12.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=97)** I'll clear the console and then I'll select line 10 and run that line. This is providing me with something called corpus level metadata. And you can see that right now, it doesn't include very much. In line 11, I ask for the local metadata. The difference between these two is with the corpus metadata, the metadata is stored as part of the corpus. So it could be things like who created this corpus or when they created it. At local, information is stored at the document level, and let's take a quick look at that. In this case, you can see that I have one set of local metadata for each document. In this case, we're looking at poetry_9622.txt which is one of the poetry files in the poetry directory. I don't have an author. I do have a date stamp, which is the time that I actually imported it, and I have an ID, which is the poetry_9622.txt. And we'll take a look at how to change that and update that in the second. The third line line 12 pulls up something called indexed. I'm going to clear the console and run line 12 and you'll see that I have a data frame with zero columns and 26 rows. The indexed metadata is actually stored as a data frame. You can add metadata to a corpus
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=195)** by simply inserting information into this data frame. And again, we'll talk a bit more about that particular type of metadata. One note, simple corpus, which is one of the many types of corpus provided by the tm package does not have local metadata, only indexed and corpus. Now let's move on. In line 17 and 18, we're going to create some corpus metadata. Look at line 17, it's meta and then it declares what corpus we're working with. In this case, new VCorpus. The tag for the metadata is going to be mnrMeta and the type is going to be corpus. In intuit, I'm putting, well, a random string called My Stuff. We'll run that line. And then let's take a look at the corpus data. Now, you'll remember the bottom two lines, attribute class one corpus meta but the top two lines dollar sign mnrMeta, are set to My Stuff. Well, that's obviously new and you can see exactly how that was placed into the corpus by line 17. In line 22, we can create some local metadata and you'll see that it says meta, that's the command we're going to affect new VCorpus. The tag is due date.
>
> **[4:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=288)** The type is local. What we're going to put into it is a sequence of dates. I'm using seq.date starting at 2023-01-13.
>
> **[5:03](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=303)** I'm going to set these due dates every week and the number of dates that I'm creating is equal to the length of this new VCorpus. Let's run line 22. And before we check all of this data, let's take another look at something else. In line 26, I'm using the meta command again and you'll notice that I'm using bracket bracket one. Bracket bracket of course, in R, refers to the content of an indexed object. So I'm placing a metadata into the contents of the first object of new VCorpus. The tag is going to be comment and the value is going to be great writing. Let's run line 26. Then we will run line 27 which does pretty much the same thing but in the second document, then I'll run line 28 which does the same thing but in the third document. I'm going to clear the console. And now let's take a look at line 30 which will show us all of this metadata we've added. And it shows us this because we're not assigning anything. So I've run line 30. Let's scroll up to the top first of all. Poetry_1020.txt is the first document and you'll note that at the bottom it says, Comment, "Great writing." And that comes from line 26 of the code.
>
> **[6:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=397)** Likewise, in poetry_12031.txt, the comment is "another story." In the third, you can see the due date has been added and changed but it also has a description that says, "A pirate story." This comes from line 28. Now getting back to these due dates, you'll notice that these are all new and were of course added by line 22 above. These dates are all a sequence one week apart. So that's local metadata. And again, you can see that I asked for that when I ran line 30 where the type was local. The third type of metadata we've been talking about is indexed metadata. In line 34, I've said meta and the tag is random letter. The type is indexed and into this particular tag, I'm going to place random letters. I'm going to place the same number as the length of the new VCorpus. Let's run line 34 and then use line 36 to examine the indexed metadata. Well, no surprise, what you'll see here is 26 values. The column is labeled random letter. And this actually is a data frame that's stored within new VCorpus.
>
> **[8:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/working-with-document-metadata?u=76281980&t=493)** So that's the three types of metadata we've been talking about. Indexed, local, and corpus. Let's take a look at how to actually use this metadata in a real world application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (28)
> **File Paths:** poetry_9622.txt (2), poetry_1020.txt (1), poetry_12031.txt (1)
> **Definitions:** is a  (2), refers to (1)
> **Code Identifiers:** mnrmeta (2)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Make useful metadata](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=1)** - [Host] We've identified three types of [[Metadata]], corpus, indexed, and local. Let's take a look at how to use them. I'm going to show you an example that will eventually get to line 40 of this exercise file, and I want to look at that line to tell you, where it is we're eventually going. In line 40, I create something called newVCorpus, and I'm using a V corpus command. Note that I'm using a data frame source and I'm importing the contents of a data frame. The important point that we're going to demonstrate is that that data frame contains a document ID. It contains content, but it also includes several columns, and those columns will be imported as additional metadata and we'll take a look at where that metadata shows up. Now that you know where we're going, let's go all the way to the top of the exercise file. Of course, we need to make the TM package available and I'll use the library command to do that. I'm also going to use a command called read text, and that's in the read text package. One important note here as you're doing this demonstration, check to make sure your working directory includes the poetry directory. We'll need that here in a minute. In line six, I set up a data directory variable, and in line seven, I create a file list,
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=95)** that contains a list of all of the files in that directory. In line 10, I use the read text command to read each of those files into a data frame, and if we look at aDataframe, you can see we have two columns. One is labeled doc ID and one is labeled text, and it's the actual text of the file that we have imported. Let's continue. In line 15, we begin the process of bringing in a bunch of metadata. I'm going to use the stringr library. Then in line 18, I use string match. The string will come from aDataframe$text which we just looked at aDataframe and looked at the text column. And the pattern I'm looking for is the [[Microsoft Word|word]] language, followed by a colon, followed by a space, and then one or more of anything, followed by a return. When we run line 18, you can see that I now have language and if I click on that, you can see that language contains three things. The actual string that it found, V1 identifies the complete string that it found. V2 is the first part of that string. And V3 is the second part of the string. And if we go back and look at the code,
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=189)** the first part is in the first parenthesis. The second part is in the second parenthesis. Titles, which I'll run now, release date, which I'll also run, and authors, which I just ran, all follow the same logic. They look through aDataframe$text for a specific string identified as title, release date, or author, and then pulls up the following value for me. In line 31, I use a C bind to combine the original aDataframe with the new language, title, release, and author. When I run that, we can take a look at aDataframe again, and you'll notice that I have new columns, one of them labeled language, one of them labeled title, one is the release, and one is the author. Now look, we're back at line 40. When I import that data frame into a VCorpus, which I'll do right now, new VCorpus will contain all of that extra information as metadata, and we can show that. When I run line 43, you'll see that I'm requesting any indexed metadata. If I scroll up to the top, you'll see that I now have a language, a title, the release date, and the author. Remember that indexed is actually a data frame that's stored in the corpus. If I clear the console and run line 44,
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/make-useful-metadata?u=76281980&t=285)** well, none of that information appears as local information. And again, if I look at the corpus, you can see that none of that information appears at the corpus level. It's all stored as indexed information. Now I can add corpus level information. Look at line 48. I'm using the meta command. I've said the type as corpus, the tag is compiler, and into it, I've placed my name. And if I run line 49, I can now see the contents of the corpus data and you can see that I've added a new tag called compiler. Likewise, I can add local metadata. The type is local. The tag is assigned reader and I've asked for a random sample of three names. When I run this and show the local metadata, you can see that we have assigned readers attached to each document as part of the local metadata. So we've seen how to attach information to indexed metadata, corpus metadata, and local metadata. In line 58, I save this VCorpus out for the next session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (12), [[Microsoft Word|Word]] (1)
> **Code Identifiers:** adataframe (6), newvcorpus (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1), scroll up (1)
> **Exercise Files:** exercise file (2)
> **Warnings:** note that (1), important note (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [host] (1)

#### [Finding and filtering based on metadata](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=1)** - [Instructor] We've just created a bunch of [[Metadata]] and attached it to a corpus. In this session, let's talk about how to find and filter parts of the corpus based on that metadata. To do this, I'm going to use the library command to bring in the TM package, and I'm going to check to make sure that my current working directory is pointing the directory that contains poetry as well as my newVCorpus RDS. In line five, I'll bring in the newVcorpus that we created in the previous session. Now in many cases, I'll need only a part of the corpus that I'm working with. The most obvious and easy way to do this is with base R'S standard sub setting, and I've demonstrated this in lines nine, 10, and 11. I've selected line nine and I'm going to run it, and what you can see is that I have the first document of newVcorpus, actually the metadata for the first document. In line 10, I'm going to select the author field of the first document of newVcorpus. The author happens to be Amy Lowell, and you can see this in the console in the lower left hand corner. Now let's also look at the indexed data while we're here, and in line 11 you can see that I've used the newVcorpus type indexed,
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=96)** and that pulls up again, the contents of a data frame that contains all of the indexed metadata that we attached in the previous session. In line 16, it looks very much like line nine, but you'll notice I'm using double brackets instead of single brackets. A double bracket will produce the contents of an indexed item versus the indexed item itself. And this can be a little bit confusing until you actually dive in and use it. Let's run line 16, and what you'll see is the metadata for that particular document. Now, if I were to run line nine again, you can see that the information I receive is a bit different. This is because double brackets show the contents or the first local document, a single bracket reverts to the indexed information. Now in line 17, I can pull up one element of the metadata. Sarah is the assigned reader, and you'll remember that we assigned that as local information, and in line 18 we can see all of the local information. Now let's step through how to use metadata to actually filter out documents to get a subset of a newVcorpus. In line 22, I'm going to create a logical vector called 'assigned to Sarah' and in to it, I'm going to use the meta command to find any local tags with assigned reader in the string Sarah.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=196)** And I could of course put a combine to produce a vector with multiple names instead of just one single name. I'll select 22. I'll run it. If we look at that vector, you'll see that it's a logical vector which just contains true false, true false, and what this is saying is the first document has been assigned to Sarah. The second document has not been assigned to Sarah. We can use this new vector to filter out a corpus, and in line 25 you can see that I'll be creating a filtered corpus, and it is a corpus produced by TM Underbar filter, which is a command in the TM package. TM underbar filter will look inside of newVcorpus, and using a function. FUN stands for function. It will look for any metadata tags with a local type and a tag of assigned reader in Sarah, which is what we looked at previously. When I run this, you'll notice in the upper right hand corner that I now have two corpuses. One is called filtered, and the other one is called New corpus. The new corpus, which is our original document, had 26 elements, filtered corpus has only 11 items, and that's because it's only the tags that have been assigned to Sarah. We can prove that by looking at line 27. I'll run that code, and you can see
>
> **[4:52](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/finding-and-filtering-based-on-metadata?u=76281980&t=292)** that we have a subset of text. If we were to look at the local information, we'd see that the tag for that was Sarah. In line 28, we can look at the local metadata with the tag of assigned reader in that filtered corpus, and what we'll see is that Sarah has in fact been assigned to all of those documents. We can find out the title of those particular Corpus documents with line 29. This demonstrates actually using metadata to filter out the contents of a corpus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (10)
> **Code Identifiers:** newvcorpus (7)
> **Definitions:** is a  (3), is called (2), stands for (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** rds (1), fun (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 4. Preprocessing Text in Preparation for NLP

[↑ Back to Table of Contents](#table-of-contents)

#### [Transformations](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=0)** - [Host] Part of [[Natural Language Processing (NLP)|natural language processing]] is performing [[Statistics]] on documents. It's important to perform those statistics on the important parts of the document and that's why natural language processing frameworks provide ways to transform the content. This is things like removing white space or removing numbers or removing punctuation. Let's take a look at a couple of the functions provided by the TM package for performing these kind of transformations and document cleanup. As always, we need to bring in the library for TM and I've done that in line two, and then in line five, I'm creating a sample corpus. We'll pull that from the directory called poetry, in the current working directory. TM provides a convenient function for listing all of the current available transformations. And not surprisingly, this function is called getTransformations and I'll run that in line eight. You can see that TM provides, remove numbers, remove punctuation, remove words, stem document, and strip white space. Let's start with strip white space, which seems pretty obvious, and actually it is. In line 12, I'm going to pull up the contents of the first document in the corpus, and I'm going to scroll up to the top and point out a couple of things. In line four, between the period and you, you'll notice that there are two spaces. If I scroll down further into the document,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=97)** you'll notice that like, on 47, there are several spaces at the very start of the line. I'll clear that and then run line 15, which is strip those white spaces. Now, when I scroll up to the top, you'll notice that in line four, there is only one space between the period and you, and further on down in the document, you'll notice that the poetry is now flushed to the left. All of the extra spaces have been removed. So strip white space behaves exactly the way you intend it to. Let's take a look at the same example, but with removed numbers. Line 19, I'll pull up the first document of the corpus. Let's take a look at a couple of things. Here, in line 13 and 14, there is a posting date and a release date with lots of numbers. When I run line 22 and scroll back up to the top, you'll notice that those numbers are all gone. Well, that's because we ran remove numbers on this particular document. Finally, there's a way to remove punctuation. I'll clear the console, run line 27, which gives us the contents of the first document of the first corpus. Look at line six, where we've got www.[gutenberg.org](https://gutenberg.org). And further on down things like line 11, Author: Amy Lowell. When I clear the console and run line 30, I'll scroll up to the top.
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/transformations?u=76281980&t=189)** Now, you'll notice line six has no more periods and in this case it's somewhat of a problem, because www.[gutenberg.org](https://gutenberg.org) has been changed to www gutenberg org with no punctuation. Likewise, in line 11, it's no longer Author: Amy Lowell, it's just simply Author, space, Amy, space, Lowell. These are the very obvious transformations that TM provides. Other packages provide nuances to these particular removed transformations, but in this case, this gives you a really clear picture of the kind of tools that are available to you immediately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Statistics]] (2)
> **UI Navigation:** scroll up (3), scroll down (1)
> **URLs:** [gutenberg.org](https://gutenberg.org) (2)
> **Definitions:** is called (1), is a  (1)
> **Code Identifiers:** gettransformations (1)
> **Analogies:** picture (1)
> **Speakers:** - [host] (1)

#### [Stop words](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=1)** - [Instructor] In [[Natural Language Processing (NLP)|natural language processing]], when we run [[Statistics]] on documents, it's important to run those statistics on significant words in the document. Stop words is a term or a phrase used to describe words that may not be all that useful, things like And and The and Too, words that are nice for humans, but when it comes down to analyzing the actual meaning of a document may not significantly add to our information and in fact may cloud our results. So it's important to be able to remove those stop words and TM provides the stop words dictionary to do that. Let's take a look at how it works. In line three, I, of course, bring in the TM package using the library command. Then in line six, I define a vector called myText and myText is simply a vector full of words. I'm going to open this up a bit. I'm going to clear the console. And now in line 13, I'm going to use removeWords which is a transformation provided by the TM package. I'm going to remove words from my text and the words that I'm going to remove are English stop words. Let's run that and we can compare the results to the lines above in the code, 6, 7, 8, 9, 10, and 11. What used to be stop words are nice words for humans is now stop words, nice words, humans.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=96)** They make sentences pleasant, read, sometimes, clarify. You probably understand what's going on here. The non-essential words, which are defined as stop words, have been removed from the text. We can take a look at what those stop words are by just using the stopwords English command. I'll type that in and then I need to specify which stop words I'm going to use. This provides me with a list of the words that stopwords is going to pull out of the text that we're looking at. Now, TM provides several dictionaries and we can look at that as listed in line 16. These are a list of many different languages plus the S-M-A-R-T dictionary, which is a specially built dictionary full of stop words obviously. In line 17, I've said give me all of the contents of the Italian dictionary. And you can see here that we have Italian stop words. If you're in a technical field, you may need a custom dictionary or specific words that should be left out of documents. You can build a custom dictionary, and I'm showing how to do that starting in line 20. In line 20, I create a vector called moreWords. And into it, I'm going to store associated and clarify. And you can see that appear in the upper right-hand corner in the environment pane.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stop-words?u=76281980&t=188)** Now on line 21, I combine the English stopwords dictionary with moreWords, the vector that I just created. Now, I can take removeWords, myText, and use myStopwords to produce my new text. In this case, I'll also strip the whitespace and I'll remove punctuation. Let's take a look at what myNewText looks like and I'll scroll down so you can compare that in the code above lines 6 through 11. You'll notice the punctuation is gone, extra spaces are gone, and, of course, various stop words have been removed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Code Identifiers:** mytext (3), removewords (2), morewords (2), mystopwords (1), mynewtext (1)
> **Definitions:** is a  (3), defined as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Stemming](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=1)** - [Instructor] Another transformation available in [[Natural Language Processing (NLP)|natural language processing]] is something called stemming and this is a really interesting tool. For example, consider the following words: walked, walking, walker, and walk. All of those words are derivatives of the [[Microsoft Word|word]] walk. When you're calculating things like word frequency or appearance or [[Statistics]] about a document, you may not want all four of those words to appear separately since they all essentially mean the same thing. Instead of counting four words, you may want to count one word with a frequency of four. A way to solve this problem is with stemming and what stemming does is reduce a word to the stem. Let's take a look at what that actually does. In line 16, of course, I bring in the TM package, and then in line 19, I create some sample text for us to work with. Here in line 31, I'm using the TM command called stemDocument and I'm going to apply it to my text. Let's run that and you can compare the code in the lower pane in the console to the code that I gave it in lines 19 through 29. The immediate thing that you'll notice is the word before spelled B-E-F-O-R-E has been changed to B-E-F-O-R.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=96)** In code line 20, you'll see that I have the word empty. And if you look below on the console, you'll see that this has been turned into E-M-P-T-I. We can assume that empty or emptiest or emptier or emptiness would all be changed into E-M-E-T-I. You'll see other examples in that text if you compare the two. Now, you should be asking just what exactly is doing this and how is it making these decisions? And the answer to that is Porter's stemming algorithm. It's described in a paper. It's fairly sophisticated and there's a lot of math. I provided a link that you can find it. The important thing to note is is that it's doing its best, but sometimes it doesn't do it correctly. You may get princely or prince or principle, and all of those become stemmed down to the same word, but principle and prince are not the same word. Stemming tries to be a bit more sophisticated by providing additional languages. In line 49, we can take that same text document that we just used and apply Turkish to it. Now you can compare the Turkish version of stemming to the original document, and you'll notice there are several changes that it has made as well. For example, you'll see upon it perfumed I,
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming?u=76281980&t=192)** which corresponds to line 21 where I just simply used the word perfumed. Stemming is a useful tool to change how words are counted, but you'll want to understand why those words are changed, what is being done to change them, and some of the obvious problems that you might run into with stemming.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (9), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Statistics]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** stemdocument (1)
> **Speakers:** - [instructor] (1)

#### [Lemmatization](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=1)** - [Instructor] We just recently spoke about stemming. There is a related concept called lemmatization which accomplishes much the same task but does it in a different way and has different results. Let's take a quick look at lemmatization. In line four, I bring in the text stream package which provides stemming and lemmatization tools. In line seven, I'll define some sample texts that we'll play around with. Now, with lemmatization, what happens is that words are compared against a dictionary and that dictionary provides alternative words to the meaning of the first one. For example, ball, orb, globe, and sphere all mean essentially the same thing. You may want those to be counted as one [[Microsoft Word|word]] with four instances rather than four words with one instances. If you create or use the proper dictionary with lemmatization, lemmatization will accomplish that for you. In this case, I'm using the standard Hunspell dictionary to perform lemmafication. And let's take a look at what that does to our sample text. In line 60, I'm creating a vector called lemma dictionary and I'm using the make lemna dictionary command against my text. This produces a data frame with 13 observations and two variables.
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=93)** Let's take a look at that data frame real quick. The first column is the word that the lemmatization software found in my original text. The second word is the suggested lemma that should be substituted out for that first word. Let's go back to our code and use 64 lemmatized strings to actually perform that replacement. What you're seeing down in the console is the result of using lemmatization against the original text. Now, in comparison, I've set up line 65 to stem my text and now you're looking at first lemmatization followed by second stemming of the document. If you take a minute to compare back and forth between the two paragraphs, you can see that changes have been made. Stemming a document changes before to B-E-F-O-R. Lemmatization leaves before alone. In contrast, lemmatization changes the word bow to bowed, but stemming leaves bowed untouched. Likewise, stemming changes empty to E-M-P-T-I, lemmatization leaves that word alone. So you can see that there is very similar operations happening but the results are different. In all cases, you're going to want to be aware when stemming
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/lemmatization?u=76281980&t=189)** and lemmatization start to manipulate your text that they may not be making the correct decisions and you want to check to make sure that the context of your document is still intact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Tokenization](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=1)** - [Instructor] Tokenizers are at the heart of [[Natural Language Processing (NLP)|natural language processing]]. Put very simply, tokenizers convert text into [[Tokens]] or words, but sometimes sentences or phrases or arbitrary strings depending on how you set the tokenizer up. Let's take a look at the tokenizers included with the TM package. Of course, that implies that we're going to bring in the TM package, which is what we do in line three. I'm going to place some sample text into a vector called sample text, and I've done that in line five through eight. In line 11, I use the Boost Tokenizer to break up sample text. Let's go ahead and run that, and if we expand the console what you'll see is is that Boost tokenizer has broken sample text up into individual words. This is the operation of a tokenizer. Very simply put, the TM package comes with several tokenizers, and we can look at those tokenizers with the command called get tokenizers, and if I run that you can see the TM has included a boost tokenizer, an MC tokenizer, and scan tokenizer, and I'll talk about these in just a little bit later, but essentially they all do the same thing. One very important tool is the Regexp Tokenizer, and it's actually part of the natural language processing package, which is loaded by TM. The Regexp Tokenizer is based on
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=97)** base R'S regular expression function, and it allows for extra functionality such as ignore case, things like that. Let's take a look at it. In line 24, I define a tokenizer based on Regexp Tokenizer. My pattern is one or more spaces. I'll define that by simply running line 24. Then in 25, I go ahead and run my tokenizer against sample text, and place that into my indexes. Let's take a look at my indexes. Instead of words, what you're getting is the start and end of each matched [[Microsoft Word|word]]. I can convert these set of indexes into actual sample text, and this is what I do in line 27. Here you see something very similar to what Boost Tokenizer did for us, but I'm using a regular expression this time. TM includes several other tokenizers, one of them being a white-space tokenizer. Let's go ahead and run that in line 30, and you can see that again we have received a series of indexes. In line 31, I have a blank-line tokenizer, and this only shows one because I only have one blank line at the very end, so it starts and ends at 231. If I had multiple blank lines, this tokenizer would've broken my text into several different lines. In line 32, I run the word punctuation tokenizer.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenization?u=76281980&t=193)** In this case, it looks for tokens that have a word or a space. A lot of thought has been given to tokenizers, and there is a lot of customization and other packages include other tokenizers. I've included a list of some of these alternatives in line 35, 36, and 37. In particular, we'll talk about n-grams, something called skip-n-grams, word stems, and many other tokenizers . I would highly recommend that based on your individual needs, you explore a bit with these different tokenizers to find which one best suits your needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Tokens]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [N-grams](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=1)** - [Instructor] N-grams are a special type of token. They're actually combinations of [[Tokens]]. You might consider them to be phrases. The question is, how do you break tokens up into phrases? Let's take a look at how to use an N-gram command. In line three, I bring in the [[Text Mining]] package, and then in line six, I define some text with some sample text, very simple this time. In line seven, I use the boost tokenizer to break some text into individual tokens, and we can take a look at that just by typing in ngram_tokens. This shows that the original sumtext is now a vector of individual words. In line eight, I use the N-grams command supplied by the Tm package against ngram_tokens and I've given N-grams a number of three. Three is the number of tokens I want combined into each N-gram. I'll run line eight and then we'll use line nine to show the contents of what just resulted. Start with the first item, which was "Brillig and". Well, that's pretty obvious, that's three tokens combined together. The second item is "Brillig and the." Do you see how N-grams started with the second token and combined the next two tokens for a combination of three?
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=97)** Likewise, the third started with the third token and combined the next two for a combination of three N-grams. If I went back to line eight and changed three to four and then ran line eight and line nine, now what you get is an N-gram of four tokens. Now, how are N-grams useful and I've set up some code in line 14 onwards that shows how this works. Now, this is fairly complex, so follow along as I explain what's going on. In line 14, I pull in the Gutenberg R library and this allows us to access the Gutenberg website from our R instance. Gutenberg, by the way, is a collection of eBooks and texts. In line 16, I run a command called gutenberg_subjects and I'm grepping for anything that has the [[Microsoft Word|word]] politic in the subjects, and I place that into a vector called downloadThese. In line 17, I use download these, which is a collection of IDs and I put it into gutenberg_download. The result of this will be a series of downloaded books. When you run this, it may take a minute or two for your computer to download the books that you've chosen. As a side note, you might want
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=189)** to change the word in line 16 to different subjects to see how your system responds. You may receive some error messages, but as long as you have a certain amount of text to play with, this works successfully. Now, let's look at line 19 through 29. The first thing you'll note is that I've done some abbreviated coating. I'm using the pipe forward command, which is very similar to the magritt percent, greater than percent command. Pipe forward takes the results of one command and gives it to the next. So let's step through starting at line 19. Line 19 simply takes downloaded books and it pulls the text element out of it and then passes it to Paste. Paste takes each line in the downloaded books data frame and converts it into one single large text file. In line 21, I use the standard remove punctuation command to remove all the punctuation. Then in line 22, I remove numbers. In 23, I strip all the extraneous white space out. In line 24, I used Boost_tokenizer to break that paragraph up into individual words. In line 25, I've used the ngrams command to break out N-grams with a length of three. In line 26, I use vapply to condense
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=285)** each set of three tokens, each N-gram into one phrase. 27 tabulates all of those phrases, combining multiple instances of the same phrase. In line 28, it sorts it. In line 29, the head command provides me with the top 10 instances. Now, while this command is running, this is going to supply us with a list of the top ten three word phrases used by political speeches. I can also change the line 25 n = 3 to a larger number to find more commonly used phrases. Depending on how much text you've downloaded from the Gutenberg library, this may take a while. When you use N-grams, what you'll find is that it increases the size of the source file by the number of tokens in your N-gram. In this case, I've increased the amount of texts that I have to process by three. When our string of functions completes their tasks, we see the results of the top ten three token phrases for all of the political speeches available on the Gutenberg website. In this case, the most common three word phrase is "To the world", the next most common, "Comparison to the", and then after that "Country comparison to".
>
> **[6:20](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/ngrams?u=76281980&t=380)** We can come up with all sorts of interesting conclusions based on these most common phrases. That's what N-grams is all about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (9), [[Microsoft Word|Word]] (4), [[Text Mining]] (1)
> **Code Identifiers:** ngram_tokens (2), ebooks (1), gutenberg_subjects (1), downloadthese (1), gutenberg_download (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (2)
> **Exercise Files:** download the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Part of speech tagging](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=1)** - [Instructor] NLP includes a useful concept called parts of speech tagging, and this is where you take text and identify the parts of speech that that particular piece is. It requires some specialized tools. TM does not have a part of speech tagging, but there is a package called UD pipe which does a fairly admirable job at it. Let's take a look at how to use UD Pipe to identify parts of speech. In line three, I install the UD pipe package and then in line four, I use the library command to bring it into my session. In line five, I bring in the poetCorpus.RDS to create a poet corpus. You'll recall we've used this in the past, and of course, it's important that your current working directory points to a directory that contains poetCorpus.RDS. Now we're ready to run the command in line seven. You'll see that I'm taking UD pipe, I'm giving it poetCorpus, the first document, and the contents of the first document. I've identified this document as English. When I run UD pipe, it creates a data frame and places it into UD pipe results. Let's take a look at UD pipe results to see what it's actually done. Start in line one. The document that I pulled this from was called document one. The first paragraph is one,
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=95)** and the sentence that I'm working on is number one. The actual sentence is a dome of many colored glass, et cetera, et cetera. And the first item of interest starts at character one and ends with character one. The term idea is one, and the token idea is also one. The token that we're working with happens to be the capital letter A. The next column identifies the lema, and we've talked about lema in the past. The interesting column here is called UPOS, or Universal Part of Speech, and you can see that A, as in a dome of many colored glass, has been identified as a DET. The second [[Microsoft Word|word]], which is dome, is on the second line and it's been identified as a noun. The third word is of, and it's identified as an ADP. Now, you might be interested in what these abbreviations mean, and if you look in the help file, you'll see that there is a very extensive website that is pointed to. Let's take a look at that website right now. One page in that website identifies the universal part of speech tags used by UD pipe. If you look down towards the bottom half of the page, you'll see that DET is defined as a determiner. ADP is an adposition, ADJ is an objective, and ADV is an adverb, and so on.
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=192)** Let's go back to our code. Now, we can do several things with part of speech. One of the more interesting things is a way of identifying stop words. Simple words like determinants or adverbs are oftentimes stop words, and you can identify and remove them just based on that part of speech. You can also analyze the type of writing you're doing. So for example, in line 14 I've selected a bar plot to show the results of our UDP pipe results. When I run that command, I'll [[Zoom]] in on the plot and you can see that a majority of the words in this particular document are nouns, followed by punctuation, and then verbs. Depending on how you feel about your writing, what type of writing you're doing, or who's doing the writing, you can identify different patterns. As a side note, in line 17 through 20, I've broken line 14 up into individual commands using the pipe forward command. This is just a simple exercise in learning how to program R. In summary, parts of speech is an interesting way to analyze a document that you're working with. It can reveal a lot of interesting details, and the thoughts behind parts of speech are pretty far reaching and well documented. It will take you some time to understand the nuances
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/part-of-speech-tagging?u=76281980&t=286)** of use of parts of speech.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Zoom]] (1)
> **Env Vars:** rds (2), det (2), adp (2), nlp (1), upos (1)
> **Definitions:** is an  (4), is a  (3), is called (1), defined as (1)
> **Code Identifiers:** poetcorpus (3)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Create Structured Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the document-term matrix](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=1)** - [Instructor] You won't spend much time with [[Natural Language Processing (NLP)|natural language processing]] before you run into the concept of a document term matrix or a term document matrix or a document feature matrix. Let's take a look at the basic concept of a DTM. The [[Text Mining]] package provides us with tools to create a DTM, so in line two, I bring it in to my current R session. Then in line five, I bring in a poet corpus and this is the poet corpus we've been using in the past. Remember that your current working directory needs to point to a directory that contains poet corpus. Now I'm all ready to build a document term matrix and I've set this up in lines eight through 12. Lines 9, 10, 11, and 12 should look very familiar by now. Stop words, remove punctuation, remove numbers and stemming are all concepts we've talked about. To create a document term matrix, I use the code starting with line eight, and the command is document term matrix. When that code runs successfully, I now have DT Matrix and let's take a look at what DT Matrix actually is. If I run the inspect command, I can open up the console and you'll see that inspect DT Matrix provides us with a certain amount of informational text, the name of the matrix, non sparse sparsity, maximal term waiting. All of that we can come to later. Right now what I'm interested in
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=94)** is the matrix towards the middle of your screen. The first column is labeled docs 12759 or 112924. And these are the names of the documents that we have imported. The columns each have a term, day, heart, life, like, love, now, one, you can see that I've applied stemming to THIS, which produces THI, and so on. Each number tells me the frequency of a particular term in a particular document. So for instance, the first column is labeled day. The first row is labeled 12759, and the number is 217. That indicates that day appears in document 12759 217 times. Likewise, heart appears 226 times. So a document term matrix is just a simple matrix. Each row is a document, each column is a term. Let's return to our code and look at line 17. This is where we produce a term document matrix. Notice that the code for 17 through 21 is almost identical to the code from Lines eight through lines 12. When I run line 17, I produce a TD matrix or term document matrix. I'll clear the console, and then in line 23,
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understanding-the-document-term-matrix?u=76281980&t=192)** I'll inspect the term document matrix. Again, we see a fair amount of information at the top, sparsity, waiting, things like that. Then the matrix identifies terms compared to documents. So all we've done is just transposed document numbers and term numbers. In many cases, document term matrices are interchangeable with term document matrices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Text Mining]] (1)
> **Env Vars:** dtm (2), thi (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Create the document-term matrix](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=1)** - In the previous session, I showed you the simple concept of setting up a document term matrices, or a term document matrices, or a document feature matrices. There are options you'll want to be aware of that will save you time and processing power when you're working with larger documents. Let's spend some time looking at how you can tweak the creation of a document term matrix. In the code I'm showing you in line two, I bring in the TM package and then in line five I read the poet corpus dot rds and this is a sample file. Your current working directory should of course point towards a directory that contains poet corpus dot rds. In lines 10 through 22, I've set up a standard document term matrix creation command and I'll run that, and in a second it will produce the DT matrix. Let's take a quick look at that matrix. In line 24, I'm using the inspect command, and it gives me information about the matrix, plus it also gives me a list of the documents and a few of the terms. Now, it's important to look at DT Matrix and realize that there is actually 79,000 terms in this particular document term matrix, so we're only seeing a small, small list. In line 25, I can list all of the terms. You can see that it omits 78,000 entries, so we're only seeing a few of these.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=96)** Let's look at the first option. It's in line 18. It's called dictionary. I'm going to remove the comment mark, add a comma, and let's run this again. I'll select line 10 and run the document term matrix. Now, when we inspect the DT matrix, we'll see a change. Notice that I've only got three terms, and you can confirm that by looking over in the upper right hand corner in the global environment. Look for the line that says "terms" and you'll see one colon three. This document term matrix only has three terms. They are child, hate, and love, and that's because I gave the document term matrix command a dictionary of only those words. If you have a specific list of terms you're trying to tabulate against, this is a way to quickly and easily reduce the amount of data that you're working with. Next, let's comment out dictionary, and let's look at bounds as shown in line 19. When I run bounds with a local list of 60 to 201, this is going to list for me only words that appear at least 60 times and no more than 201 times. When I inspect DT matrix, you'll see that there are no numbers lower than 60.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=191)** If it's lower than 60, but still appears in other documents, you'll see the number zero as if it's been taken out. For example, in document row 12759, the term "life" appears less than 60 times, and so the document term matrix has given it a zero. Conversely, if any term appears 201 or more times, it's also taken out. This is an easy way to remove terms that don't appear frequently enough to be interesting, or appear so often that they are just generating noise. Now let's look at [[Microsoft Word|word]] lengths as shown in the code line 20. I'll run the document term matrix command with word lengths of 10 and 50. When we inspect the document term matrix, you can see that our terms have been severely trimmed back. Again, look at the terms over in document term matrix in the global environment, and you can see that the number of terms has been trimmed down to 13,000. This is because our document term matrix no longer considers terms that are 10 characters or less, or 50 characters or more. Now, if I list all the terms that it actually considered as shown in line 25, you'll see that I have several words that are considered that are at least 10 characters. In line 972, we have a rather long phrase.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-the-document-term-matrix?u=76281980&t=287)** Obviously, we've missed some spaces. I know that this particular token is about 40 characters, so it falls within the 50 character limit. Word length is a way of trimming your document back to a specific length of word, and for some technical documents, this is useful, especially if you are omitting spaces or punctuation in certain crucial areas. So the creation of document term matrix can be tweaked to your needs. This allows you to focus on the parts that are important and strip out any noise or insignificant terms that may appear in your research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)

#### [Weighting the document-term matrix](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=1)** - [Instructor] A typical document term matrix indicates the frequency of a term within a particular document. Let's take a quick look at a standard DTM. To do that, I'll need to bring in the TM library and I'll pull in the poetCorpus which we've used in previous sessions. Now in line eight, I create a document term matrix. And in line 15, we'll inspect that document term matrix. This is what you've seen before. There's a matrix. Each row is the name of a document and each column is a term. So we have 217 occurrences of day in document 12759.
>
> **[0:48](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=48)** TM provides us with three, actually four built-in weighting options. The first option, which is what we're looking right now and is the default, is just simply the term frequency. The third option called weightBin is a logical option. It provides us with a true or false. Does the term appear in this document, yes or no? The second one is term frequency inverse document frequency and it's a little bit more complex. I've set this up in line 23 and you can see how I've changed the last two lines, weighting equals a function called weightTfIdf with some parameters. I've run line 23, and then we'll inspect it. Now notice how our matrix has changed. It's no longer indicating the frequency of terms. It's indicating a fairly complex relationship between each term and the document that contains it. I've switched over to the documentation for TM and went to this section that talks about weightTfIdf. In the documentation, weightTfIdf is described along with the math used to determine what the weighting function is. There's a fair amount of deep discussion about this particular weighting function and the usefulness of it. Some people like it, some people don't. In your case, you'll need to experiment a bit with it
>
> **[2:22](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/weighting-the-document-term-matrix?u=76281980&t=142)** and determine if this is a function that will actually provide you with useful information. TM also provides weightSMART. In line 36, I'll pull up the help file for weightSMART and you can see that TM provides a description of what smart weightings are. In line 38 through 47, I've set up DocumentTermMatrix to use weightSMART. I'll run that. Then let's inspect the resulting document term matrix. You'll notice that most of these numbers are zero except for document 13830. The math behind smart weightings is fairly complex and the discussion is even more complex. You'll want to do more research into the weightSMART function before you use it, but you may find it applicable to your specific needs. If you're not satisfied with the built-in weighting functions, you can create your own with the weightFunction function and there's information in the documentation about how to set this up. Using weightFunction, you can create a function that will evaluate the importance of a term based on criteria you choose. Again, the TM package comes with three built-in weighting functions: weightTf, weight term frequency inverse document frequency, weightBin, and a fourth called weightSMART.

> [!info]- Semantic Content
>
> **Code Identifiers:** weightsmart (5), weighttfidf (3), weightbin (2), weightfunction (2), poetcorpus (1)
> **Documentation:** the documentation (3)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (1), set up (1)
> **CLI Commands:** find (1)
> **Env Vars:** dtm (1)
> **Speakers:** - [instructor] (1)

#### [Focus the document-term matrix](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=1)** - [Host] A document term matrix is actually a sparse matrix, which means that empty cells in the matrix actually don't exist, and this is how the actual object is structured. Let's take a look at sparse matrices, how to trim them, and how this affects [[Natural Language Processing (NLP)|natural language processing]]. In line three, I'm going to bring in the TM library and then in line six, I bring in our old friend, the poet corpus. In line eight, I create a most simple document term matrix and then let's inspect it. Notice at the top of this inspected document term matrix, we have non-sparse entries, a sparsity level, a maximal term length, and waiting. We already talked about waiting and we've talked about term length. Let's talk about the sparsity and non-sparse entries. If we look at the actual breakdown of the structure of our document term matrix, you'll notice that we have I, J, and V. I and J are the actual grid numbers for elements in a matrix. V is the value in that matrix. Notice that we also have N row, which is the number of rows, and the number of columns, which is equivalent to the number of terms. This sparse matrix has 79,004 terms, and if we look in the documents and terms,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=97)** documents contains the name of each document and terms contains each term. One way to trim out less important terms is to reduce the sparsity. In line 18, TM provides the remove sparse terms, I've given remove sparse terms DT matrix, and indicated that I want a sparsity of 0.2. The important thing to remember about this number is, the lower the number, the fewer the terms. I'll run line 18. Let's compare our new, sparser DT matrix with the original DT matrix. At the top of the console, I have non compared to sparse entries. Towards the bottom, you can see that I have non compared to sparse entries. It's the same document term matrix, but look at the difference in the numbers. Where I've reduced the sparsity, I now have 17,947. Originally I had 285,420 entries. My sparsity has been reduced to 16%. We can do this again with a higher number. In line 19, I've used the same command, but this time I've used the sparsity of 0.8. Now we can compare a sparsity of 0.2 with a sparsity of 0.8.
>
> **[3:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/focus-the-document-term-matrix?u=76281980&t=194)** Notice the change in the number of terms. At 0.2, I have 300 terms. At 0.8, I've got 4,716. If I scroll up to the top at the original document, I have 79,004 terms. This means two things. It means that I've reduced the amount of information that I need to process. In the case of large document term matrices, I may want to reduce the sparsity, so that I have fewer terms to actually compute through. This also means that I can trim out some of the extraneous terms that I may not be concerned about. As you're noticing, there are several ways to focus a document term matrix on the important terms, rather than the entire bag of words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Versions:** 0.2 (3), 0.8 (3)
> **Definitions:** means that (3)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [host] (1)


### 6. Apply Statistics to Text

[↑ Back to Table of Contents](#table-of-contents)

#### [Word and document frequency](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=1)** - A document term matrix contains the frequency of a term in each document. TM provides us with a couple of tools to research and manipulate this particular information. Let's take a look at that. In line two, I'm going to bring in the tm package and then in line five I'm going to import the poetCorpus that we've been using as a demonstration tool. In line eight I create a DTmatrix using document term matrix and only a few options. Now, one of the things that we may be interested in is how many documents are actually in that particular document term matrix and tm provides us with nDocs as shown in line 15. If I run line 15, you can see that there is 71 documents in Dtmatrix. Line 16 which is just simply docs gives us a list of the names of a particular document in the document term matrix. Not surprising, we have a corresponding couple of functions for terms. In line 17, nTerms provides us with a number of terms in a matrix and line 18 provides us with those terms. Now note that I've printed this out and there is a limit to the number of terms that are printed out. There are 78,000 more terms available for us.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=94)** In some cases, the frequency of a term will indicate that term's importance. TM provides us with a couple of tools to research that term frequency. The most obvious is a command called termFreq. It's shown in line 21. It looks very much like a document term matrix command but in this case provides us with the frequency of each particular term. In line 29, you can see find frequent terms. In this case, I've said I'm only interested in terms that appear more than 100 times and in high frequency, I've said it can show an infinite number of times. I could change high frequency to indicate the highest frequency I'm interested in. I'll run line 29. In return, I'm presented with a list of frequent terms that have appeared 100 or more times. In line 31, I'm using tms, find most frequent terms and I've asked it to only give me the top 10. In this case, find most frequent terms has produced this information for each document in the corpus. In this case, find most frequent terms has found that in document 25340 of the Dtmatrix, stanza appears 485 times.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-and-document-frequency?u=76281980&t=187)** One appears 344. Byron appears 336 and so on. It's only giving me the top 10 for each document. Again, tm provides us with some simple tools for finding the frequency of a term within a document term matrix.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Code Identifiers:** poetcorpus (1), ndocs (1), nterms (1), termfreq (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Speakers:** - a (1)

#### [Hierarchical clustering](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=1)** - [Instructor] Hierarchical clustering is a way to determine the relationship between different documents in a DTM or a corpus, and TM provides us with some tools to do that. Let's take a look at how to use this with the TM package. In line three, I bring in the TM package. And then in line four, I bring in the poetCorpus. We've been using this as a demonstration tool. In line seven, I create a standard DocumentTermMatrix. Then we're ready to create a hierarchical cluster. I've set this up in line 15 using the hclust command which uses the DIST command which is actually for distance. This will calculate the hierarchical clustering for the poet DTM. Now, if we look at the results, we can see that it has successfully completed and used a Euclidean method of calculating the distance, but that really doesn't give us an idea of the results. Instead, what we should do is plot the results and I've done that in line 17. You can see in the lower right-hand corner of R studio that we have a clustered dendrogram representing all of the documents in the poet DTM. Let's [[Zoom]] in on that and take a look at some of the numbers and the relationships. The way to interpret this graph is that the numbers that are close together have some sort of a relationship. Numbers that are further apart are probably dissimilar. As a way of checking this,
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=96)** we can look up the titles of these individual documents. On the lower edge towards the left, you'll see the numbers 2039 and 15390. These are close together. Let's go back to our code. In line 22, I've created a function to get the title from the document id. Then down in line 29, I've created getTitle with the document IDs that we were just wondering about. Let's run that. The title of these two documents are both about Evangeline, so they probably are pretty closely related. Let's look at another example. On the far right, 13223 and 13224 are closely related. We'll go back to our function. It's the first one in line 27. And when I run that, you can see that these are both poems by Jean Ingelow, two volumes, so they are closely related. For a third example, let's take a look at the far, far left number 9700 and compare it to the farthest right number 12924. I've set this up down in line 30, and when I run that, the far left happens to be Anglo-Saxon poems, the far right happens to be the world's best poetry. Now, you can interpret that however you like, but the cluster dendrogram tells us that those two documents are worlds apart.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/hierarchical-clustering?u=76281980&t=190)** Again, hierarchical clustering is one way of looking at the relationship between terms in a document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Env Vars:** dtm (3), dist (1)
> **Code Identifiers:** poetcorpus (1), gettitle (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Associated terms](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=1)** - [Instructor] In our research with [[Natural Language Processing (NLP)|natural language processing]], it might be helpful to understand what terms are associated, what terms are similar, and one way that we can assume that a term is similar is by looking at how often they appear together. So for example, crisp might often appear with apple or wet might appear with ocean. Those two terms would be correlated. The TM package provides us with a couple of commands to simplify this type of research. Let's take a look at how to do that. In lines three, I bring in the TM package. And then in line six and seven, I bring in both the poet DTM and the poet corpus. Now we're all set to do Find Associates, which is what I have set up in line 12. Find Associates is a command provided by the TM package. I give it a DTM. And I give it some terms that I'm trying to correlate with. In this case, I've chosen love, hate, and child, but this will differ depending on your research. The final part of Find Associates is the correlation limit and I've set it to 0.95. The lower this correlation limit is the larger the results set and a lower value means these terms overlap less frequently in documents. Let's run line 12 and look at the results. In the console,
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=92)** you'll see that we have three elements that have been returned, love, hate, and child. With a correlation limit of 0.95, love only has one other [[Microsoft Word|word]] that correlates and that's lie. Well, that's an interesting correlation and it tells us something about the poets. Likewise, with hate we have correlated terms, crime, prey, hell, quench and sustain, and those kind of make sense. You can see the correlations are fairly high. Our third element child has no correlations whatsoever. This leads me to ask the question, well where does child begin to correlate? And for the sake of the demonstration, I've already experimented around and found that a correlation limit of 0.8 produces some results. So I'll run line 16, where I've set terms equal to child and correlation limit equal to 0.8. Ah, that produces a lot of results. Child correlates with feign, with mark, near, rear, work, assurance, gulf, all sorts of words. Now with further experimentation, I could reduce this list by increasing the correlation limit. It might also be interesting to find out where child appears. In line 19, I've used the TM filter command we talked about previously to produce a subset of the corpus. Then in line 24, I use the meta command to find the title tags. This returns the title of documents
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/associated-terms?u=76281980&t=188)** that have the word child in them. TM also provides something called "Find Most Frequent Terms" and you can see this setup in line 27. When I run that command, I receive a list of each document with the most frequent terms for each document. So for example, 16,328, the most frequent terms are Beowulf, one, Hrothgar, hero, Grendel, and king. Depending on your research, this may be significant [[Statistics]] or it may be just interesting research. In either case, TM provides an easy way to find both the most frequent terms and the associated terms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Statistics]] (1)
> **CLI Commands:** find (7), make (1)
> **Versions:** 0.95 (2), 0.8 (2)
> **Env Vars:** dtm (2)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)


### 7. Sentiment Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [What is sentiment analysis?](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=1)** - [Instructor] Sentiment analysis is an interesting and subjective part of [[Natural Language Processing (NLP)|natural language processing]]. Sentiment analysis provides insight into the emotional content of a document. The concept is easy. A dictionary of terms, or words, is weighted as to their meaning or sentiment. That dictionary is then compared to a source document. Each [[Microsoft Word|word]] in the source document is given a score and the cumulative score indicates the sentiment of the document. There are several dictionaries tailored for different types of documents. For example, the Rauh is tailored for the German language. Loughran McDonald is focused on EDGAR 10-K financial reports. Dictionaries are nothing more than lists of words with positive or negative values. Some dictionaries contain extra dimensions beyond just negative or positive connotations. The NRC dictionary from the Canadian government is an interesting example. It contains positive and negative dimensions as well as dimensions for anger, anticipation, disgust, fear, joy, sadness, surprise, and trust. By matching words in the NRC dictionary with words in the subject document, sentiment analysis provides a perspective of the expressed emotions.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/what-is-sentiment-analysis?u=76281980&t=94)** As you might expect, there is debate and controversy about sentiment analysis. Comparing a word list to a source document provides an arbitrary weighting, but there are other dimensions to documents. For example, who is speaking is just as important as what they are saying. In recognition of the subjective nature of applying a list of words to a document, focused groups provide different dictionaries to address varied circumstances. For example, the word bear can be positive in one context and negative in another. If you're analyzing financial documents, use a dictionary that indicates bear is a negative word. If you are looking at an ecology report, bear might be positive. It's important to choose an appropriate semantic dictionary. Let's take a look at how to implement these concepts using the R language in the next sessions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Env Vars:** nrc (2), edgar (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Real-world example of sentiment analysis](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=1)** - Let's take a look at how to code up sentiment analysis. The TM package by itself does not contain tools for sentiment analysis but that's okay because there are other packages that do. I'm going to demonstrate one of them the syuzhet project from the NLP Group at Stanford University. If you haven't already installed this package look to line five for the installation process. In line six, I bring that package into my version of R, and then in line nine I get small text from the [[Tokens]], hate, love, and apathy. This is just a simple vector. Now, in line 12 I can actually get down to some sentiment analysis. I'm going to run line 12 to get the NRC based sentiment analysis for small text and what I received back is a series of columns labeled anger, anticipation, disgust, fear joy, sadness, surprise, trust, negative and positive. You'll recognize these as the categories that are contained in the NRC project. I have three rows and each row corresponds with the [[Microsoft Word|word]] that I've asked to get the sentiment for. So the first row is hate, and you can see that it ranks one for anger and one for disgust, and one for fear but zero for joy and zero for anticipation. Overall hate is ranked as a negative sentiment. Line two is love
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=97)** and you can see that overall it's a positive sentiment. We can use this information to determine whether small text is positive or negative. I've set this up in line 15 which I'll run and we receive a -1. Well, that means that small text unfortunately is somewhat negative. If you're curious about where this -1 came from run line 16 to get the sentiment you'll get a sentiment for each word. So the first one, -1 is hate. The second one is love, and the third one is apathy. If I choose to, I can use different methods for determining the positive or negative sentiment values. In line 19, I've set it up to use rowMeans. When I run line 19 I get three values, 0.5, 0.2, 0.2, which is a mean of all of the values for each individual row. So the values, anger and anticipation, and disgust and fear and joy are all produced and then given a mean value. Now, is this a valid way of doing sentiment analysis? That will depend on your research methodology. Let's look at a little bit more sophisticated example and which results in a lesson learned. In line 22, I bring in our old friend poet Corpus and then I bring in the TM library. In line 26, I'm going to use get NRC sentiment again
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=193)** on the first document of Poet Corpus down below you'll see the ranking, anger is 104 anticipation is 152, and so on. Overall, it seems to be somewhat of a positive document. Now, I can use TM Map to apply get NRC sentiment to all the documents in the corpus and I've done that in line 29. TM Map, I apply it to Poet Corpus and my function or FUN is get NRC sentiment. Now, I'd like to move that information to a data frame for a bit more useful information, and I do that in line 31. Let's take a look at that data frame. There it is, and as you might expect, it's a series of columns and a series of rows. The columns labeled anger, anticipation, disgust and so on. Each row corresponds to one of the documents in the corpus. Now, for my own edification I'm going to attach titles to each row. Now I can look back at poet DF and I can see that the final column is titles. Each row now has a title and has a sentiment. Well, this is great. Let's look for the angriest document and I can do that by sorting anger in a descending fashion. The maximum anger value for a document is 674. That's the complete poetical works of James Russell Lowell. Well, James Lowell must be a pretty angry guy. Now, let's take a look at which is the most joyful document.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-example-of-sentiment-analysis?u=76281980&t=286)** I'll do the same operation. I'm going to sort joy and look for the most joyful document which happens to be, wait a minute. The complete poetical works of James Russell Lowell. Well, this happens to be the angriest and the most joyful document. Actually, this is a false conclusion. The way that sentiment analysis works gives me a value for a document, but it's not necessarily giving me a value across documents. What I've done is created a false correlation or a false conclusion. You need to be careful with sentiment analysis. There are other [[Statistics]] that may be more useful in this case. For example, you might want to look at TF IDF which we talked about way back in this section on waiting document, term matrices. Sentiment analysis seems like a really powerful tool, and it is but you have to use it carefully to get reasonable results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Tokens]] (1), [[Statistics]] (1)
> **Env Vars:** nrc (5), nlp (1), fun (1), idf (1)
> **Versions:** 0.2 (2), 0.5 (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** rowmeans (1)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)

#### [Sentiment datasets](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=1)** - [Instructor] Dictionaries are at the heart of sentiment analysis. Dictionaries provide quantifiable values for the emotional content of different words. These dictionaries are provided by different groups and are the results of different methodologies. It's important to understand which dictionary you are using when you do sentiment analysis, and to make sure to use the dictionary that's most appropriate for the research that you're conducting. So let's take a minute and become familiar with some of the different dictionaries that are available for sentiment analysis. Now I'm going to show you the contents of some of these dictionaries, and the easiest way for me to do that is to use something called quanteda. So in line seven and eight, I've brought that package in. Now we're ready to look at the AFINN dated dictionary, that's in line 12. Down in the console in the lower left-hand corner, you can see that AFFIN has produced a list of words. Although they're not shown, each [[Microsoft Word|word]] has a corresponding valence or value. We can calculate that using the text stat under bar valence command, heart of quanteda I give it the string anger and I tell it to use the data dictionary AFINN. When I run line 13, I receive a sentiment of negative three. Let's turn our attention to ANEW which is a different dictionary. Running lines 16 and 17 produces a printout
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=96)** of the ANEW dictionary and the names used as keys in this dictionary, when I come up with a word it'll be listed as part of one of the keys. So for example, abduction is part of pleasure and has of value related to pleasure. Abduction also is an arousal and has a value aerated to that. Likewise, abduction is listed in dominance and has a dominance value or valence. Now we can find out what these are. In line 18, 20 and 22 you can see where I've used tech stat valence for the word anger, and I'm using the pleasure component of the A new dictionary. This tells me that anger has a valence value of 2.34 when compared against the pleasure component of the ANEW dictionary. In line 20, I see that I have a 7.63 valence when I'm in the arousal dictionary and in line 22 I can see that I have a 5.5 sentiment value in the dominance component of the ANEW dictionary. Now let's look at NRC. And incidentally, NRC was the dictionary that we used in our previous session. Here's the data dictionary and here are the names for the NRC data dictionary.
>
> **[2:59](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=179)** - These should be familiar terms. Now I can find out what the polarity is for anger in line 29, and I come up with a negative polarity which indicates that it's probably a negative word. Now I can do further research and find out which keys are related to anger and I can do that in line 32 where I do a token lookup. You'll see that anger is listed as part of the anger key, not surprising, and it's also part of the negative key, also not surprising. Now, there are a few other dictionaries that we can take a look at. And in order to look at these I'm going to look at the syuzhet library. I'll pull that in, and I need to define small texts with three [[Tokens]], love, hate, and apathy. Again, I can get the NRC sentiment for small text and we did this in the previous session. Let's take a look at the top of the NRC dictionary and then at the tail of the NRC dictionary. What this shows us is, is that in each component of the NRC dictionary, there is a word, there is a positive or negative or other keyword listing and a value. Remember that positive and trust are keys that are part of the NRC dictionary. In line 42, I can pull up the sentiment dictionary bing, bing has a word and a value and if we went far enough in there we would see that different words have different values. In the AFINN dictionary, we can see
>
> **[4:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-datasets?u=76281980&t=272)** that we also have a word and a value. So BING and AFINN are similar in the way that they attach value to a specific word. Now, this may be a bit confusing, but the takeaway here is is that when you are doing sentiment analysis take a look at different dictionaries and make sure that the results you're getting make sense with the words that you're using and the dictionary you've applied against them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Tokens]] (1)
> **Env Vars:** nrc (8), afinn (4), anew (4), affin (1), bing (1)
> **CLI Commands:** make (3), find (3)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 2.34 (1), 7.63 (1), 5.5 (1)
> **Speakers:** - [instructor] (1), - these (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)

#### [Sentiment tools](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=1)** - [Instructor] Sentiment analysis provides a quantified rating of unstructured text. As discussed previously, this requires a dictionary but also requires a software tool to calculate the rating from the information in the dictionary. The Tm package doesn't provide sentiment tools but there are plenty of other options. I've broken out the obvious ones into categories, and there may be others I'm not aware of, and there is always new development and new packages. Let's start with simple sentiment analysis tools. I demonstrated one of these, syuzhet. These tools are easy to set up and use. In some cases, the package only contains one command. For exploratory research, these packages are an excellent choice to provide quick insight into sentiment analysis. On the other end of the continuum are these frameworks. Quanta in particular is a full featured [[Natural Language Processing (NLP)|natural language processing]] environment and includes sentiment analysis. These packages provide intricate control over the parameters used to generate sentiment analysis. If the simple tools don't satisfy your research needs, look to these packages instead. Beware, these tools require detailed setup and more time to learn how to use them. If you're coming from the world of [[Python (Programming Language)|Python]] programming
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-tools?u=76281980&t=94)** you might feel more at home using an R version of Python NLP libraries. These two packages, [Sentiment.ai](https://Sentiment.ai) and transforEmotion provide an R interface to Python NLP tools. At the time of this recording, the future of the Twitter API is uncertain. This is unfortunate, as there are many are packages designed to determine the sentiment expressed by the users of Twitter. There are are packages to download this information directly and there are packages specialized for sentiment analysis of this data. Unfortunately, I can't even demonstrate these tools at this time. I mentioned them here so you're aware of their existence and use, in the case of the Twitter API becoming available again. There are natural language processing web services from [[Microsoft]], [[Google]], IBM, and other companies. There is a package on CRAN which provides R access to Microsoft Cognitive Services and it does require creating an account with that service. Although we don't have time in this course to cover each of these tools in any sort of detail, these tools will appear as separate sessions in my companion course titled "R for [[Data Science]]: Lunch Break Lessons."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Microsoft]] (2), [[Google]] (1), [[Data Science]] (1)
> **Env Vars:** nlp (2), api (2), ibm (1), cran (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), setup (1)
> **Code Identifiers:** transforemotion (1)
> **URLs:** [sentiment.ai](https://sentiment.ai) (1)
> **Speakers:** - [instructor] (1)


### 8. Visualizing Natural Language Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Plotting text mining](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=1)** - [Instructor] Visualizations are useful for interpreting any dataset and it's the same way with [[Natural Language Processing (NLP)|natural language processing]]. There are a couple of ways to visualize the results of natural language processing. In this session, let's talk about simple plots. The first thing to note is is that the plot command, which is included as part of the TM package, requires something called Rgraphviz. To install Rgraphviz, I've first of all brought in the TM package. Then I need to install something called BiocManager which is short for the bioconductor manager. In this case, it gave me an error because I've already installed this package and it wants to know if I want to reinstall it. In line five, I use the BiocManager to install Rgraphviz. Now I can read in our old friend the poetCorpus and I'm going to create a term document matrix from that corpus. Once I have that term document matrix, I can use the very simple plot command as shown in line 16. Now, what I receive is of questionable value. It's a list of all the phrases and some relationship between those terms. Let's refine this a little bit. I'm going to scroll up to line 18 through 26. I'll run that series of commands.
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=94)** Notice that I'm starting with a poetCorpus, and I've just selected the first 10 documents. Then I've finally come up with a series of the most frequent terms. If you look in the upper right-hand corner in the global environment, you'll see that I have a vector called frequentTerms and it contains a series of words, one, like, now, love, will, et cetera. Now in line 29, I've set up a plot. And I've done something in line 30. I've used frequentTerms, but I've also added another phrase called zweites and zweites is not connected to any of the most frequent terms so let's take a look at that plot to find out what happens when I plot frequentTerms against a non-frequent term. To do this, I select line 29 and I run 29, 30, and 31, which produces the plot that you're seeing in the lower right-hand corner. The plot shows a strong correlation between day and will and like and one and love and now. This is indicated by the thick black line and that's produced by line 31 where I asked for weighting to be true. These are the most frequent terms, so it's not surprising that there is a strong correlation between these. In the lower right-hand corner sits our little friend zweites, all alone, not connected to any of the most frequent terms. The graph is showing us that that term is not related
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-text-mining?u=76281980&t=188)** to the most frequent terms. There's another type of graph that we can create. It's a bar plot and I've set this up in lines 34 through 39. You'll notice I'm using the pipe forward command, a vertical bar followed by a greater than sign, to send data from one function to the next. You may not be familiar with line 38. This is a Lambda function and all it does is subset for the first 10 items. The bar plot it produces, which is shown in the lower right-hand corner, is a bar plot of the most frequent terms used in this document. The terms are across the lower bar and a number of times each term has been used is across the vertical axis. These are two simplistic plots that you can easily access for natural language processing, and based on your research may or may not be useful. Let's look at some more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3)
> **Code Identifiers:** frequentterms (3), poetcorpus (2)
> **Definitions:** is a  (3), short for (1)
> **Prerequisites:** install (3), set up (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### [Plotting Zipf’s and Heap’s Law](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=1)** - [Instructor] Zip's Law and Heap's Law are two interesting concepts in the world of [[Natural Language Processing (NLP)|natural language processing]]. TM provides tools for plotting both of these and exploring those concepts. To demonstrate this, I'll need to create a term document matrix, and I do this in lines three, five, and six. In line 20, I use the zip plot command as part of the TM package, and I've asked it to use a line. When I run this, you can see that we have a nice graph. Now, what does this actually mean? Zip's Law states that the most frequent [[Microsoft Word|word]] will occur about twice as often as the second most frequent word. It'll appear three times as often as the third most frequent word, and so on. The plot that we're looking at on the right hand side illustrates this. If the presentation of Zip's Law is useful in your research I highly encourage you to do some research on the actual math behind this correlation. Next is Heap's Law, and Heap's Law states that more words doesn't necessarily result in different words. So in other words, the larger the document doesn't necessarily result in more different words. In line 27, we see that it's been set up for us. TM provides Heap's plot. I feed it a term document matrix with a type of L,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/plotting-zipf-s-and-heap-s-law?u=76281980&t=97)** and we receive back an intercept and an X, which gives us the plot on the right hand side. Again, I'm not going to get into the math behind Heap's law. There is a lot of very scholarly information that describes in great detail how this is calculated. And if it's useful for your research, I would encourage you to take a deeper dive into it. For now, all that's important to understand is that the TM package provides tools for plotting both of these interesting laws.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Word clouds](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=1)** - [Instructor] [[Microsoft Word|Word]] clouds are a colorful, but simplistic way of looking at term frequency within a document. The TM package, along with two word cloud packages makes it fairly simple to produce these simplistic graphs. Let's take a look at how to do this. In line three, I bring in the TM package. In line four, I've given the command to install the word cloud package should you need to do so. And then in line five, I use the library command to bring it into my session of R. I pull in some standard data, I create a term document matrix, and then in line 18 through 24, I create a simplistic word cloud. Notice again, I'm using the pipe forward command to send data from one command to the next. The result shows up in line 23 where I've used the simple command word cloud. I've asked word cloud to only plot terms that appear more than 50 times and less than 100. Depending on the speed of your computer, this may take a certain amount of time. After a bit of time, we have the result of a word cloud command. We can [[Zoom]] in and take a look at this result and you can see terms that we've been working with. Some of them are the most frequent terms. Next, let's look at Word Cloud 2 which is an enhanced version of Word cloud. It has more features, but it's a bit more fidgety. Line 28 and 29 brings this package into play
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/word-clouds?u=76281980&t=99)** and then in line 31 through 42, I've set up a series of commands to produce a star-shaped Word Cloud of all of the frequent terms. Let's zoom in on that graph. You can see that this is much more colorful and much more visually interesting. There is a question of how much more understanding it actually adds to our analysis. Again, word clouds are a colorful but simplistic way of looking at term frequency within a document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (11), [[Zoom]] (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)


### 9. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your next steps in NLP](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=1)** - [Narrator] Thanks for participating in this class on [[Natural Language Processing (NLP)|natural language processing]]. You might think, since this is the last video of the course, there's nothing left to learn. Not true. In this course, I've provided you with guidelines and insights into natural language tools, and techniques. But this is changing at an increasing rate. For instance, language itself is dynamic and unstructured. We add new words and new languages every day. The way we express ourselves changes with cultural shifts. English and Japanese frequently exchange words and phrases. Words gain additional meanings, depending on who is using them, and how. For example, cosplay was originally from Japan but has become a commonly understood [[Microsoft Word|word]] among English speakers. These shifts in language require new approaches to NLP. For instance, stemming [[Algorithms]] will need to understand how to work with multiple languages. Stop words will need to accommodate changes to pronouns, such as they and them. And of course, our technology changes. Online cognitive services provide exciting new tools and [[Hardware]]'s becoming faster, specialized, and more capable. Lately, handheld language translators cost less than $300. They carry 40 languages
>
> **[1:33](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp-24442815?u=76281980&t=93)** and have a translation accuracy of 95%. Most recently, [[Artificial Intelligence (AI)|artificial intelligence]] has advanced natural language processing and participates in conversations, ranging from amusing to alarming. By completing this course, you have a basis for understanding how NLP works and can make educated guesses about the next research advances. I'm excited about this emerging field and I hope you are as well. And until our next encounter, Klaatu barada [[Nikto]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Microsoft Word|Word]] (1), [[Algorithms]] (1), [[Hardware]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Analogies:** for instance (2), for example (1), such as (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 10. Introduction to NLP Tidytext R

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to natural language processing with R](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r?u=76281980&t=1)** - [Mark] [[Natural Language Processing (NLP)|Natural language processing]] provides computerized tools to help us quantify human speech and research the intent behind a piece of writing. There are lots of tools to do this analysis. In this course, we're going to focus on tidytext; a tidy verse package available for the R programming language. There are lots of other packages, tm, Quantida, UDPipe are among them. I encourage you to become familiar with those packages at some point in your career. But for now, let's focus on tidytext. Tidytext is unique from other packages in that it is built from tidyverse principles from the ground up. Tidyverse principles are that each variable is a column. Each observation is a row and each type of observational unit is a table. Tidytext interprets these tidy verse rules as a table with one token per row. In this course, we'll examine what that actually means and how to perform NLP on data that appears in this way. I'm Mark Neiman-Ross and I'm excited to travel with you on this journey. So let's get started with natural language processing using tidytext.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2)
> **Definitions:** is a  (3)
> **Env Vars:** nlp (1)
> **Speakers:** - [mark] (1)

#### [Skills you need to be successful in this course](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=1)** - [Instructor] This course on [[Natural Language Processing (NLP)|natural language processing]] requires knowledge of the R programming language. This is decidedly not a beginning course. I assume you already have experience with programming in R. Before you start, ask yourself these questions. Do you understand how to create and use a vector in R? Do you understand how to create a function in R? Are you familiar with installing and linking an R package? Can you run an R program and debug errors? These are simple tasks, but if you can answer yes, then you have the rudimentary knowledge of R required to get you through this class. If you aren't sure about these concepts, you might want to look at one of the beginning R courses in this library. Another alternative is to take the [[LinkedIn]] Skills Assessment Test. You'll find it via your profile under Skills. Go ahead and take the test. If you score in the top 30%, you're good to go. If you're still unsure, go ahead and dive in. When you encounter a concept you are unfamiliar with, take time to research the answer. Experience is one of the best teachers. Don't be afraid to get started. You may pleasantly surprise yourself. Programming natural language processing tasks can be done with a regular text editor, but it will be a painful process. To perform NLP efficiently requires an integrated development environment
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-you-ll-need-to-be-successful-in-this-course?u=76281980&t=95)** such as [[RStudio]], VS Code, or R Commander. These IDEs will help you write efficient code and avoid mistakes, and amazingly, all of them have no-cost options. In this course, I'll be using RStudio by Posit. It's popular, but by no means the only option available. I have also used Visual Studio Code and dabbled with several other [[Microsoft Products|products]]. Whatever IDE you choose will be fine. And of course, if you're unhappy with the IDE you are using at the start of this course, simply pause the video and choose another. We'll be happy to wait for you to catch up and get settled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[RStudio]] (2), [[LinkedIn]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** ide (2), nlp (1)
> **Tools:** vs code (1), visual studio (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 11. Use of Tidytext for NLP

[↑ Back to Table of Contents](#table-of-contents)

#### [How to think like tidytext](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=1)** - [Instructor] Many [[Natural Language Processing (NLP)|natural language processing]] packages work with lists and matrices. These objects are commonly described as corpora, collections of documents, and document term matrices, documents showing term frequency in a collection of documents. In contrast, tidytext subscribes to tidyverse concepts. The tidyverse is a collection of packages based around three rules of data. Each variable is a column. Each observation is a row and each type of observational unit is a table. Tidytext brings these concepts to [[Text Mining]], resulting in a document structure with one [[Microsoft Word|word]] or token per row. There isn't an inherent advantage of one method over another, but if you are used to data in one form or another, you may find it easier to work with what you already know. For example, if you haven't used the tidyverse in the past, this type of data representation and the associated coding syntax can seem confusing and obscure. In contrast, if you've worked with the tidyverse and understand pipelining, which is %&gt;%, and tools such as dplyr or lubridate, you may be more comfortable using tidytext for NLP. For example, where tidytext relies on existing tools such as dplyr and count to produce the same [[Statistics]], many base-R NLP packages provide specialized tools
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/how-to-think-like-tidytext?u=76281980&t=98)** to find the most frequent terms in a document term matrix. In this course, we'll be entirely focused on the tidytext method of NLP. If the tidyverse isn't your preference, you may want to explore other courses in this library that cover other NLP tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Text Mining]] (1), [[Microsoft Word|Word]] (1), [[Statistics]] (1)
> **Env Vars:** nlp (4)
> **Definitions:** is a  (4)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [An example: Calculate the most popular terms in a document](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=1)** - [Instructor] I could spend a lot of time talking about theory and practice behind [[Natural Language Processing (NLP)|natural language processing]], but we're talking about how to use tidytext to do that. So let's dive right in. Let's start with an easy concept, frequent terms in a document and how would you use tidytext to calculate that number. Before we start this example, you'll want to make sure that your current working directory points to the working files that we'll be using. To do that, make sure that your right hand corner shows the Patchwork Oz, Wonderful Wizard of Oz, OSMA Oz and Oz Hungry Tiger text example files. Go up to more, set as working directory. This will allow the code that we're using to understand where to find the files it needs. In the example file 0102, I've started in line eight with three libraries you'll need. The first is the tidyverse library, the second is tidytext, and the third is a library called readtext. Now we're ready to start exploring how to use tidytext to calculate term frequency. In line 12 through 17, I've set up a chunk of tidytext code. When we run it, you'll see that I receive a list of terms, Dorothy with an N of 347, which means that the [[Microsoft Word|word]] Dorothy appears 347 times, Scarecrow appears 219 times.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/an-example-calculate-the-most-popular-terms-in-a-document?u=76281980&t=97)** Let's look at the code to see where this actually came from. In line 12, I'm using the read text command to read WonderfulWizardofOz.text. This is just simply the text of the book "Wonderful Wizard of Oz." In line 13, I use unnest underbar [[Tokens]] and we'll talk quite a bit about unnest tokens in a future session, what unnest tokens does is take all the words of WonderfulWizardofOz.text and convert them to one word per row. In line 14, I use filter to remove all of the numbers in the text. Then in line 15, I use anti-join to remove stop words and we'll talk quite a bit about stop words in another future session. Finally, in line 16, I use the standard tidyverse count function to give me a count of each word and I told it to sort it. Then in line 17, I've used the print command to show 10 lines from the resulting table and that's what shows up down in a console. This should serve to give you a reminder of what the tidyverse looks like in terms of code and also to give you a kind of a preview of what we'll be talking about when we talk about tidytext and natural language processing. Let's take a look at these lines in more depth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Tokens]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (2)
> **CLI Commands:** make (2), find (1)
> **Prerequisites:** before we start (1), you'll need (1), set up (1)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** osma (1)
> **Speakers:** - [instructor] (1)

#### [Tokenizing with unnest_tokens( )](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=1)** - [Instructor] tokenizing is at the heart of [[Natural Language Processing (NLP)|natural language processing]] and tidytext provides some useful tools to do that. In this session, let's look at how tokenizing is accomplished with tidytext. Right up front, tidytext uses something called unnest [[Tokens]] to accomplish this task, here is some code to accomplish this. In order to run this code, of course you'll need to make sure that your current working directory points to the exercise files where it can find wonderful wizard of oz dot text. In line five, six, and seven I've shown how to use libraries to bring in a tidyverse, tidytext, and readtext. Now I'll need the text of wonderful wizard of oz dot text, and in line nine I use read text to bring that in and place it into a tibble. Let's take a quick look at that tibble just so we know what we're talking about. You can see that there are two fields and one record. The first field is doc id, which in this case is the name of the text file we brought in. The second column is text and this is the entire text, all in one field. In some cases, there may be multiple rows, one for each document. In line 11, I've set up a very basic tokenization command in tidytext, line 11 takes the wiz oz tibble which we just created and pipes it through unnest tokens. In unnest tokens, we've said our tokens should be words.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=97)** The input is a field called text and the output will be wiz words. Since I didn't select an output tibble this is sent to the console and you can see this down below. WizOzTibble has one observation of two variables. One observation being the document and two variables being doc id and text. But you'll notice that the new object that we've created consists of 42,972 documents and zero doc variables. Well, this is a little confusing, but if we look down at the actual output, we have a doc id, which is the name of the document. The second column is wiz words, which you'll see in line 13 was our output column. And then there's the text, which is what the original text was that we took the wiz [[Microsoft Word|word]] from. If we scroll down a bit, you'll see that wiz words is actually each individual word in the entire document. The, project, Gutenberg, ebook. And if we were to look at the actual text, you would see that that would be the first six words. Now, the first thing to understand is that tokens don't have to be words. And in line 17, I've taken the exact same code we just looked at. But you'll notice that I've changed the token from words to paragraphs, and when I run that, you'll see that wiz words now contains each paragraph taken from the document Wizard of Oz.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=190)** Line 20 accomplishes exactly the same thing. But what you'll notice is instead of using unnest tokens in line 17, I'm now using unnest paragraphs and token equals paragraphs has disappeared. Tidytext provides unnest paragraphs as a wrapper around unnest tokens with tokens set to paragraph and I'll be using those wrapper functions from tidytext in the future lines of this segment. In line 24, I have unnest sentences, and this is almost like paragraphs, but in this case, I'm looking at sentences. In line 26, I have unnest characters, and when I run that you'll see that each line is an individual character from the document Wizard of Oz. You can see that the number of documents has increased exponentially. In line 28, I have lines and lines are defined as line returns in the document itself. This may or may not correspond with paragraphs or sentences. Another important concept in natural language processing is something called ngrams and ngrams are combinations of words. In line 32, I've changed our example line to use unnest ngrams and you'll notice that in line 34 I've said n equals three. When we run line 32, what you'll see is that wiz words now contains sets of three words.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=287)** The first line is the Project Gutenberg. The second line is Project Gutenberg ebook. The third line is Gutenberg ebook of, what you should notice is that unnest ngrams has combined each group of three in a series. This creates a rather large document but can be useful for identifying phrases. In line 37, I've used unnest character shingles with an n of four. When I run those lines what you'll see is just characters instead of words. And again, this can be useful for identifying keywords that may not break at specific word segments. Skip ngrams are similar to ngrams but in this case they skip words. In line 42, I've used unnest skip ngrams with an n of three and a k of two. Now what you're seeing is the, followed by the project, followed by the Gutenberg, and what you're seeing is that k which is equal to two, that's in line 45 of the code has said, skip two words, but give me combinations of three, and wherever it can, skip ngrams will try to follow that formula. Tidytext provides other specialty tokenizers. The penn treebank tokenizer handles special cases and what we'll do is we'll run this
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=381)** and I have created a tibble called ptbk tokens. Let's take a look at that. I've made a note to look at line 54. Now, what you should notice is line 54 has re-use, the PTB tokenizer doesn't always strip out punctuation as you might expect in line 54. In certain cases, this will be useful and you might want to take a look and compare to how that changes. Now in our case, I can run 53, which is the original and let's take a look at the standard tokens versus the PTB tokens, and if I look down at 53, you'll see that use is on its own and above it is re. Recall that in PTB tokens in line 54, re-use was kept together. Finally, if none of those tokenizers accomplish what you want you can use regular expressions. In line 58, I've used unnest regular expression with a pattern that says search for two or more vowels. When I run that, what you'll see is that the tokenize has broken up the wonderful Wizard of Oz at instances of two vowels. So for example, ebook has two vowels, oh oh, and you'll see in lines one and two that that break has happened at ebook. Now my example may not be particularly useful but in your case, if you're dealing with specific documents,
>
> **[7:55](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/tokenizing-with-unnest-tokens?u=76281980&t=475)** say text documents or scientific writing, you may find that there are specific cases where you want to break that don't make sense in normal text. So to summarize, what we've been talking about is tokenizers. Tokenizers break long documents down into smaller significant chunks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (12), [[Microsoft Word|Word]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (2)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** ptb (3)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** similar to (1), for example (1)
> **Prerequisites:** you'll need (1), set up (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** exercise files (1)

#### [Stopwords, punctuation, whitespace, and numbers](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=1)** - [Instructor] Tokenizing is breaking a document into small chunks. Most often this is words, but tokenizing can also break things into paragraphs or sentences or individual characters, punctuation, numbers, or whitespace. Some of these [[Tokens]] are not useful for doing [[Statistics]]. For example, numbers may not add context to what you're trying to understand, and there are many words that are only there for human consumption. They really don't add additional meaning. Let's take a look at removing punctuation, whitespace, numbers, and something called stop words. The sample code I've provided starts in line four by bringing in the tidyverse, tidytext, and readtext libraries. In line eight, I create a sample tibble called term frequency. This is "The Wonderful Wizard of Oz" text, unnested or tokenized into individual words, and then each [[Microsoft Word|word]] is counted. Let's take a look at what term frequency looks like. The first thing you might notice is we start off with a number of numbers, 0, 1, 1500, and it's not until later on in the tibble, line 32, where words actually start to appear. What you don't notice is that punctuation and whitespaces are already taken out, and unnest_tokens does this for us. If we'd like to see what those look like,
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=95)** I can go down to line 17, and you'll see in line 19 and 20, I've removed the strip punctuation command, and I've also told unnest_tokens not to change everything to lowercase. I'll run that, and let's take a look at the change in term frequency. Ah, you'll notice immediately that there's punctuation. There is a dash, and an em dash, and a comma, and a semicolon. There are numbers. Somewhere in here are returns and whitespaces. Notice in line 81, actual has not been changed to lowercase. In line 86 and 87, lowercase additional counts for two, but if you capitalize additional, it counts for an extra one. Well, should this be three instances of additional? The best way to do that would be to change line 87 additional to lowercase. Let's start with numbers. In line 24, I've set up some tidytext code that will remove numbers. I'll run that. Notice that in line 26 and 27, I've used the filter command. These two lines accomplish the same task, which is to remove digits from the list of tokens. The only difference happens to be in the regular expression I've used. Let's take a look at term frequency to see what the difference is. Well, you'll notice immediately that the punctuation is gone, and you'll also notice that the numbers have disappeared.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=190)** Note that I did not use strip punctuation equals false. I did not use to_lower equals false. But I did remove those numbers. Looking at term frequency, we have a list of words that we can probably perform some useful statistics on. But what about things like a, or the, or or? These are considered to be stop words. Let's take a look at what people consider to be stop words. When I run line 32, you'll see that the console pulls up a list of stop words. These actually aren't stop words. These are lists of stop words. In line 34, I run stop_words, and this is a list of all of those stop words themselves combined into one tibble. You'll see here we have, in line one, an a, or able, or about, or above. These are from the SMART lexicon. If we looked further at the stop words tibble, we'd see that there are other lexicons represented as well. Again, these are words that don't necessarily add meaning to the text. So, how do we remove these from the text? In line 36, I've set up some code to remove stop words. This is done in line 40, where I use the anti_join, and I've said get_stopwords from the nltk lexicon, and I want to remove these
>
> **[4:45](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=285)** overlapping with the column labeled word. I'll clear the console, and then I'll run lines 36 through 41. Now, if we take a look at term frequency, you'll notice that there are still numbers, because I have not removed those, but many of the stop words that we were previously looking at are gone, for example, a. Now, the words start with abide, which is a useful term that we can actually do statistics on. In line 38 and 39, I've provided other alternative methods for removing stop words. And if you have time, you might want to experiment with those two lines to see what the difference is. Finally, in lines 44 through 48, I've combined all of these filters. In line 46, I remove numbers. In line 47, I remove stop words. You'll recall that the default is to remove punctuation. If we take a look at term frequency, you'll notice that we start with abide. All of those numbers are gone, the punctuation is missing, whitespace has been removed, and stop words are nowhere to be seen. One note of caution, stop words are useful, but these are just simply dumb lists of words. In your particular industry, some words may have meanings outside of just being a useful way to read a text. It's worth your time to experiment with stop words, to experiment with different lists of stop words,
>
> **[6:21](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stopwords-punctuation-whitespace-and-numbers?u=76281980&t=381)** and to be aware of what stop_words is actually doing to your text and how that might affect your results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Tokens]] (2), [[Microsoft Word|Word]] (2)
> **Code Identifiers:** unnest_tokens (2), stop_words (2), to_lower (1), anti_join (1), get_stopwords (1)
> **Definitions:** is a  (3)
> **Warnings:** note that (1), caution (1), be aware (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (2)
> **Env Vars:** smart (1)
> **Exercise Files:** sample code (1)

#### [Stemming and lemmatization](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=1)** - [Instructor] Stemming and lemmification are two related concepts. They're both designed to aggregate words to improve [[Statistics]] on token counts. Let's take a look at how to do both processes and talk a bit about the concerns you might have with stemming and lemmification. I've set up some sample code and in line five, six and seven I bring in the tidy verse, tidy text, and read text libraries. Let's start with stemming with something called snowball C. Snowball C is a standard stemming library. Let's run the code in line 12 and then take a look at the results of using [[Microsoft Word|word]] stem which is part of the snowball C package. I'm going to click on stemmed and you'll see a table with three columns, doc id, the original word and the stemmed word. Look down at line 13, the original word was restrictions. Snowball C has converted that to restrict. If we look through the document anywhere you saw restrictions or restrict or restricted all three of these would've been changed to restrict, changing the count of that particular token. Even more interesting as line 14 where whatsoever has been abbreviated to what so with an ev, based on the rule used by stem, whatsoever has been changed to this abbreviation.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=97)** Now look at line 15. Copy C O P Y has been changed to C O P I and stemming [[Algorithms]] will oftentimes remove the Y and replace it with an I. So you'll see copy or copied or copying all coming up as the same word. Now what you might want to do is add count and I've set this up for you in line 19 and 20. If you remove that and put the pipeline at the end of line 16, stemmed will now have a count of all of those words and we can take a look and see how that's affected our original text. Note that Dorothy, which ends in Y and now ends in I has been changed to 347 terms. In line 15, City has been changed to C I T I and in line 17 country has been changed to C O N T R I and this is all the result of stemmification. Snowball C is one library, but there are others and they all have different ways of performing stemming, in line 20, I've brought in the huns spell library and in line 22 through 27 I use the hun spell stem command to do the stemming process. Notice the changes in line 13 answered and answer now appear as a combined vector instead of just one word, country still maintains its Y at the end, in line 12, city maintains its Y.
>
> **[3:13](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=193)** What you should note is the huns spell stemming algorithm behaves differently than the snowball C stemming algorithm, stemming works with an algorithm to change words to common representations, lemmification in contrast uses a dictionary to look up words and substitute other words that may be similar to them. In line 32 and 33, I've created a lemma dictionary based on the words in wonderful Wizard of Oz dot text with the hun spell engine, I'll go ahead and run that and we have lemma dictionary. Let's take a look at what that actually looks like. In line one, we see that the token is is but the lemmification of it is a simple I. In line two, United has become unite, line three states has become state. You can see how the lemmification dictionary pulls up a related word. When we take that lemmification dictionary and apply to the original text, we'll see substitutions happen. In line 35 through 41, I've created a comparison table that will show us the original token, two versions of stemming and lemmification. Let's take a look at how that works. In the upper left hand corner you'll see the original word followed by the snowball C stemming then followed by the hun spell stemming
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-and-lemmatization?u=76281980&t=286)** followed by the hun spell lemmification. Wonderful is stemmed as wonder by snowball c, hun spell leaves it alone in both stemming and lemmification. Look at line six. United is stemmed as unite or unit U N I T. The hun spell stemming leaves it alone but huns spell lemmification changes it to U N I T E. It's worthwhile to take a look at what stemming and lemmification are doing to your document before you trust them to perform statistics. The results you get may be useful or you may find that lemmification or stemming has obscured some of the important concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Statistics]] (2), [[Algorithms]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** sample code (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)

#### [Term frequency with bind_tf_idf( )](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=1)** - [Instructor] [[Natural Language Processing (NLP)|Natural language processing]] uses a sophisticated statistic called term frequency and inverse document frequency. The math behind this particular statistic is deep and I'm not going to go into it right now, instead of what I'm going to do is spend time showing you how to compute this particular statistic. I've set up code and in line five, six, and seven I bring in the necessary libraries, tidyfirst, tidytext and readtext. The first thing I want to show you is a standard term frequency, which is what we've been using all along. Term frequency is simply the number of times a [[Microsoft Word|word]] appears in this document. Now, this is a bit different than the term frequency used in TFIDF. In TFIDF, term frequency is compared to the number of documents. One of the other things that's important about TFIDF is you'll need to know the number of words in a document. In line 17 and 18, I've provided you with this code, but we don't need to run that as it will be provided for us. There's another note about term frequency inverse document frequency. This statistic will fail if you're only using one document. You need to have a collection of documents and term frequency inverse document frequency will identify the most likely document attached to a specific word or token. In lines 26 through 31,
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=94)** I've set up ID text's bind TFIDF to calculate this statistic. Let's run it and then look at the results. Now, there's a couple of notes. In line 26, I've used list.files with a pattern.text to bring in a collection of documents. In line 28, I used unnest_tokens to break those documents into individual words. In 29, I count based on each document and each word. Then in line 30, I use the bind_tf_idf and I've arranged this in descending order according to that statistic. Let's take a look at the result and see what's actually happened. Under doc id, you'll notice that there is several different documents. The first one is Oz Hungry Tiger. Down in line five is Patchwork Oz, and if you look down in line 12, you'll see Ozma of Oz. The word column shows individual [[Tokens]] for each document. In this case, Betsy and Carter, Rash, Ready, Ojo, these are all members of the documents listed to their left. The third column, labeled N, is the frequency of each token in each document. So Betsy appears 327 times in the Hungry Tiger of Oz. Carter appears 188 times in the Hungry Tiger of Oz.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=191)** Now we have three new columns, TF, IDF, and tf_idf. Term frequency is different than N in that term frequency has been divided by the number of documents. Inverse document frequency is a statistic generated from a number of documents and a number of terms. And then finally, the last column is the most interesting statistic, tf_idf. Without going into the actual [[Statistics]] itself, what we know is that the best place to find the word Betsy would happen to be in OzHungryTiger.text. The higher the TFIDF, the more likely that a particular word is associated with the document. To bring this home, when you do an internet search you provide a word or a phrase. TFIDF could be run against a series of documents to find out which document you are searching for. Earlier we spoke about ngrams which are combinations of tokens. In line 34 through 41, I've created a TFIDF using ngrams. In line 36, you'll notice them, token ngrams with an N of six. Let's run line 34 through 41, and then take a look at TFIDF_Oz. What you should notice is
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/term-frequency-with-bind-tf-idf?u=76281980&t=284)** that the doc ID is still the name of the document but the word column indicates longer ngrams the Wicked Witch of the West, which happens to be six words. This is all one token. The number of times this phrase appears in Wonderful Wizard of Oz is listed in the third column labeled N. So in this case, the Wicked Witch of the West appears 12 times in the Wonderful Wizard of Oz. In the following three columns we can see the calculation for TFIDF. If I was going to look for the Wicked Witch of the West, I would most likely find it in the Wonderful Wizard of Oz. If I was going to look for the soldier with the green whiskers that would most likely appear in Patchwork Oz. So you can start to see the usefulness of TFIDF. When you're searching for words, or tokens, or ngrams, phrases, you can use the statistic to indicate the most likely document that that particular token will appear in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (8), [[Tokens]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Statistics]] (1)
> **Env Vars:** tfidf (9), idf (1)
> **Code Identifiers:** tf_idf (2), unnest_tokens (1), bind_tf_idf (1)
> **Prerequisites:** set up (2), you'll need (1), you need to have (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Sentiment analysis with sentiments( )](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=1)** - [Instructor] Sentiment analysis is a [[Natural Language Processing (NLP)|natural language processing]] tool used to determine the intent of a document. By attaching values to words, we can determine whether a document is intended to be negative or positive or angry or happy. Let's take a look at how tidytext implements sentiment analysis and let's take a look at why you might be concerned about how sentiment analysis operates. In line three, four, and five, I bring in the tidyverse and tidytext packages. Then in line eight is the sentiments command. And sentiments provides for us a list of words, you can see these down in a console, followed by a sentiment, in this case, negative. So if you look at line two, abnormal is ranked as negative. Line nine provides us with all of the sentiments available in this particular dictionary, and you'll notice that only negative and positive appear as sentiments in this particular dictionary. What you're seeing is that somebody has created this particular list of words and in their view, their judgment, words like abomination is a negative [[Microsoft Word|word]]. This is the immediate concern you should have. Did the person who subjectively assigned values to words do it in a way that you would agree with?
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=95)** For example, if you're looking at a financial document, the word bear, as in bear market, might be a negative word. If you're doing ecological research on bear habitats, bear might be a good term. There are several different dictionaries available. The most common are Afinn, NRC, Bing, and Loughran. We can take a look at these different dictionaries. In line 12, you'll need to install the text data package and this provides us with the ability to use get sentiments with the NRC lexicon, and I'll run that. This shows us the contents of the NRC lexicon. Now you'll notice that each word has more sophisticated sentiments. Abacus has trust and abandoned has fear. Abandoned also has a negative sentiment, and abandoned also has a sadness sentiment. The NRC dictionary allows us to have multiple sentiments for individual words. We can choose which collection of sentiments for each word to use. In line 16 through 20, we've attached the original sentiments dictionary and we can take a look at that table. You'll notice that the first column is the document ID where this particular token came from. The second column labeled word is actually a series of [[Tokens]]. The third column is sentiments
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/sentiment-analysis-with-sentiments?u=76281980&t=188)** attached to those particular tokens. In line 23 through 27, we perform the identical task, but this time we're using the NRC lexicon. Let's take a look at the difference there. Ah, now we can see that words have more sophisticated sentiments. Joy, positive, surprise, trust, anticipation. Be aware that I haven't applied any count functions so we don't know how many times joy has appeared or how many times wonderful has appeared. I can add this count by attaching line 30 to the end of line 27 and rerunning that code. Now, when we look at sentiments odds, we'll see that, oh, well, it seems to be a very positive document because 2122 of the phrases of the tokens appear as a positive, less so is negative at 1454. How about in line three, we're told that this is somewhat a fearful document, much more so than a surprising document or a disgusting document. Obviously, sentiment analysis provides us with a whole list of values that we can generate on [[Statistical Analysis]]. It's important to be careful to realize that the initial intent of these dictionaries were created by someone and are somewhat subjective in nature, but sentiment analysis can give us a view into the intent of a document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Tokens]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Statistical Analysis]] (1)
> **Env Vars:** nrc (5)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1), be careful (1)
> **Prerequisites:** you'll need (1), install (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Parts of speech with parts_of_speech( )](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=1)** - [Instructor] [[Natural Language Processing (NLP)|Natural language processing]] uses a tool called parts of speech to identify [[Tokens]] in context. Let's take a look at how tidy text implements this concept and why it might be useful or why you might want to be concerned about what parts of speech is doing. In line three, four, and five, I brought in the tidyverse tidy text and read text packages. Then in line seven, I've called up parts of speech. If you look down in the console, you'll notice that we have a tibble with two columns, [[Microsoft Word|Word]] and POS or parts of speech. Each word has an associated part of speech, adjective, noun, verb, things like that. You'll notice that there are 208,000 different terms located in this particular document. In line eight, I can use the unique command to list all of the different parts of speech available in this particular dictionary. Adjective, noun, plural, adverb, lots of verbs, noun phrases, someone or a group of someones have gone through and for each word in the original dictionary have attached the part of speech. In line 10 through 14, I've attached these parts of speech to the tokens from "Wonderful Wizard of Oz" and when we run that, we can open up that document and look and see what's been identified.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=95)** The first column is document ID which is where this word came from. The second column labeled word is actually a token, and you can see that we have project as the first row word column. The third column is labeled POS which is the part of speech, and in this case project has been labeled as a noun. Look at line two. The word project appears again. This time it's labeled as a verb, the same thing for three and four. Well, that's because project can also be project which is a verb. Project is a noun. Some words, depending on their context, can mean different things, and that's one of the initial concerns about parts of speech which is are you identifying the correct part of speech for the context of the word? Now, there's a question of what do you actually do with all this information? And I've set up a somewhat frivolous method of using parts of speech. In line 17 through 19, I create a very simple parts of speech called POS_OZ. Let's take a look at that. Once again, you can see that there is a document ID. There is a word, and there is a part of speech. In line 21 through 29 at creative function, briefly what this does is identify a type of word
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/parts-of-speech-with-parts-of-speech?u=76281980&t=192)** that I'd like and get a word returns a random instance of that in the "Wonderful Wizard of Oz" text. When I define that, I can use it in line 31. Line 31 will return a random noun. In this case, it returned hurt. If I run it again, it returns cottage. Now, whether hurt is a noun or not depends on if you believe the dictionary. What can I do with the get a word function? Look at line 33 through 36. I've created a very, very simple chatbot that randomly goes through and assembles sentences based on a pronoun, followed by a noun, followed by an adverb, followed by another verb. When I run line 33, you'll see I received the phrase, what down the will. If I run it again, them strong, some pride. In this case, I'm using parts of speech to identify words for the correct position in a sentence. My example is incredibly simplistic, but you can start to see how parts of speech affect analysis of a particular document.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), [[Tokens]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** is a  (6)
> **Env Vars:** pos (2), pos_oz (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Import and export from other NLP packages](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=1)** - [Instructor] This entire course has been about how to use tidy text and the tidy verse to do [[Natural Language Processing (NLP)|natural language processing]]. There are many other natural language processing tools such as Quantida or TM or UD Pipe. Tidy text provides tools to import documents created in those packages into a tidyverse universe. Let's take a look at how to bring in corpora or collections of documents into the tidyverse slash tidy text universe. In line two, I've brought in the tm or [[Text Mining]] package, followed by tidy verse and tidy text. In line seven, I've created something called a v corpus and it's important to notice that you can't use corpus or simple corpus, which are two document structures in the text mining package. The V corpus searches through the particular directory that we're currently in for any files ending in .txt and imports them into a tmCorpus. Well let's take a look at that and what you'll see is something that looks very different than what we've been working with. There is a list of documents, and then each of those is a list in itself that contains content and [[Metadata]]. For a deeper understanding of what this particular corpus actually contains, there is a class on tm located in this library.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/import-and-export-from-other-nlp-packages?u=76281980&t=96)** In line 11, I've set up tidy text code to import tmCorpus into the tidy universe. This is all done by line 12 where it just says tidy, tidy the corpus. When we run that, we can take a look at the result. When we take a look at this file we see something that looks much more familiar to the tidy text list of [[Tokens]] that we've been using in the past. There is an addition of some metadata, author, date, timestamp, description and heading, but there is a document ID and a token, the Project Gutenberg ebook. Once we've used the tidy command, we can now use all of the tidy text commands that we're so used to in our approach to natural language processing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Text Mining]] (2), [[Metadata]] (2), [[Tokens]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Code Identifiers:** tmcorpus (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 12. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=1)** - [Mark] Tidytext provides a well-designed set of tools for [[Natural Language Processing (NLP)|natural language processing]] using tidyverse concepts and packages. It doesn't have all the bells and whistles provided by other NLP packages such as Quanteda, tm, or Udpipe, but coupled with dplyr and other tidyverse tools, it accomplishes everything you'll need for effective [[Text Mining]]. In this course, I've provided you with guidelines and insights into natural language tools and techniques, but this field of knowledge is growing and changing at a rapid pace. Shifts in language require new approaches to NLP, for instance, stemming [[Algorithms]] will need to understand how to work with multiple languages. Stop words will need to accommodate changes to pronouns, such as they and them. And of course, our technology changes. Online cognitive services provide exciting new tools, and [[Hardware]] is becoming faster, specialized, and more capable. Most recently, [[Artificial Intelligence (AI)|artificial intelligence]] has advanced natural language processing and participates in conversations ranging from amusing to alarming. By completing this course, you have a basis for understanding how NLP works and can make educated guesses about the next research advances. I'm excited about this emerging field, and I hope you are as well. Thanks for joining me
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/next-steps?u=76281980&t=94)** for Natural Language Processing with tidytext.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Text Mining]] (1), [[Algorithms]] (1), [[Hardware]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Env Vars:** nlp (3)
> **Analogies:** such as (2), for instance (1)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [mark] (1)


### 13. Introduction to NLP with Quanteda R

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to natural language processing with R](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/welcome-to-natural-language-processing-with-r-24442823?u=76281980&t=1)** [[Natural Language Processing (NLP)|Natural language processing]] lets you mine huge collections of text, such as transcripts of every political speech for an election or every quarterly earnings call for a company. Is a candidate optimistic or pessimistic about the economy? Are analysts going to recommend you buy or sell a certain stock? Quanteda, a framework for natural language processing lets you process text data faster and easier, providing results to gain insight. Hi, I'm Mark Niemann-Ross. Join me to learn how to leverage Quanteda in your next [[Text Mining]], Natural Language Processing Project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Text Mining]] (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Skills and tools you need](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=1)** This course will introduce you to the use of quanteda for [[Natural Language Processing (NLP)|natural language processing]], research and [[Text Mining]] with the R programming language. Quanteda is a framework for natural language processing. It's much like TM or Tidy text. Before we start, I assume you already have a basic understanding of the R programming language. Ask yourself these questions. Do you understand how to create and use a vector in R? Do you understand how to create a function in R? Are you familiar with installing and linking an R package? Finally, can you run an R program and debug errors? These are simple tasks, but if you can answer yes, then you have the rudimentary knowledge of R required to get you through this class. If you aren't sure about these concepts, you might want to look at one of the beginning R courses in this library. Another alternative is to take the [[LinkedIn]] skills assessment test. You'll find it via your profile. Go to LinkedIn, then look in the upper right photo, view your profile. Go to skills, demonstrate skills, take a skill assessment and search for R. You'll find the R programming language skill assessment test. Go ahead and take the test.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=96)** If you score in the top 30%, you're good to go. Likewise, you won't need advanced [[Statistics]] skills, although anything you know will be helpful with text mining. An integrated development environment such as [[RStudio]] Visual Studio Code or R Commander will simplify the programming you'll need to do to explore NLP. These IDEs will help you write efficient code and avoid mistakes. Amazingly, all of them have no cost options. In this course, I'll be using RStudio by posit. It's popular, but by no means the only option available. I have also used Visual Studio Code and dabbled with several other [[Microsoft Products|products]]. Whatever IDE you choose will be fine. And of course, if you're unhappy with the IDE you are using at the start of this course, simply pause the video and choose another. We'll be happy to wait for you to catch up and get settled. Finally, this course assumes you have a passing familiarity with natural language processing concepts, such as using a corpora to collect documents, tokenizing, stemming and stopwords. I'll demonstrate how to accomplish these tasks with R and quanteda, but I won't spend much time explaining why you would want to do so. Text mining and natural language processing is a science to itself and takes dedicated study to use it effectively. Hopefully you don't feel discouraged by all these warnings.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/skills-and-tools-you-need?u=76281980&t=191)** Quanteda is an excellent package for R with a wide range of well thought out tools for natural language processing. The more you know going into the course, the more you'll learn from these sessions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (4), [[Text Mining]] (3), [[LinkedIn]] (2), [[RStudio]] (2), [[Statistics]] (1)
> **Env Vars:** ide (2), nlp (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** before we start (1), required to (1), you'll need (1)
> **CLI Commands:** find (2)
> **Tools:** visual studio (2)
> **UI Navigation:** go to (2)
> **Analogies:** such as (2)


### 14. Getting Started with Quanteda

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to quanteda](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=1)** Quanteda is an alternative [[Text Mining]] framework similar to TM or tidy text. Quanteda is short for Quantitative Analysis of Textual Data. There are several reasons you might dedicate some time to learning quanteda for [[Natural Language Processing (NLP)|natural language processing]]. It does everything you expect an NLP framework to do, but there are three particular advantages. First, quanteda is faster than TM or tidy text because core functions are written in C++ and support multithreading. Second, quanteda is written to be extended with plugins and supports connectivity with other text mining applications. Finally, quanteda defaults to sparse matrices for all data objects. This saves memory and provides better performance. Quanteda is easy to learn since functions are named according to their class. It's easy to guess the correct syntax and to see which functions are available for what objects. For example, all of the corpus functions begin with corpus under bar. When first learning quanteda, it's helpful to remember three concepts. First, documents are at the heart of natural language processing and they are collected into corpora. Second, a corpus can be tokenized. And third, [[Tokens]] can be used to create a document feature matrix.
>
> **[1:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/introduction-to-quanteda?u=76281980&t=101)** In the next chapters, we'll learn more about how these three concepts work together to provide a rich set of natural language processing tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Tokens]] (1)
> **Definitions:** is an  (1), short for (1)
> **Env Vars:** nlp (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)

#### [Install quanteda](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=1)** Normally, installing a package in R is straightforward. Just use instal.packages and if the package is on CRAN, you're all done. However, quanteda has chosen to break parts out into separate packages. So instead of one install, there are many. I've included a complete list in the exercise files. Well, let's step through the different packages and explain their purpose. The first and most obvious step is installing quanteda. There are a few standard packages that go along with the base installation. Textmodels includes some example datasets and functions for advanced calculations. Textstats provides functions for [[Statistics]] on words such as frequency or readability. Textplots provides visualizations such as [[Microsoft Word|word]] clouds and networks. In addition to the basic quanteda packages, there are other recommended packages. These are all authored by Kenneth Benoit, who is the main author of quanteda. He chose to break these out because so many R programmers were using these for more general purposes or in other NLP packages. Readtext is useful for reading text files. Spacyr provides access to the [[spaCy]] text processing library. Stopwords provides several dictionaries of stop words. Next is a list of packages still in development or not on CRAN
>
> **[1:40](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/install-quanteda?u=76281980&t=100)** for various reasons. These are hosted on [[GitHub]] and can be installed with the condition that you have first installed the dev tools package. Quanteda.corpora provides additional data libraries as pre-built corpora. Quantity.sentiment provides tools for sentiment analysis. Quantity.tidy extends dplyr to work with quanteda objects. Quantity.dictionaries provides several datasets for analysis of corpora. When you've installed the quanteda packages you find useful, don't forget to use the library command to bring them into play. After you've installed all of these packages, you may also want to change some options. In particular, you may want to check the number of threads. Most R packages will only use two threads, but your computer may support more. This depends on the number of cores and RAM you have available, but try increasing this number to see if your performance increases. Quanteda will probably release additional packages in the future. So it makes sense to watch for additional packages. Watch [quanteda.io](https://quanteda.io) for periodic announcements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Microsoft Word|Word]] (1), [[spaCy]] (1), [[GitHub]] (1)
> **Env Vars:** cran (2), nlp (1), ram (1)
> **Analogies:** such as (2)
> **Best Practices:** recommended (1), don't forget (1)
> **CLI Commands:** find (1)
> **URLs:** [quanteda.io](https://quanteda.io) (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)


### 15. Understanding Corpora

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a quanteda corpus](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=1)** [[Natural Language Processing (NLP)|Natural language processing]] works best when documents are collected into a consistent data structure. These data objects are called corpora. Quanteda provides five ways to create a corpus, vector, and data.frame are the most common. Quanteda also provides methods for the quanteda keyword in context object or quick, a vcorpus from the TM package and another quanteda corpus object. Creating corpora is easy. Let's take a look at some examples. We're looking at some R code in [[RStudio]]. In line one, the first thing we do, of course, is to load in the quanteda library. In line eight, we're going to create a named vector, which we'll eventually turn into a corpus for quanteda. To create myNamedVector, I just simply select line eight, and on my Macintosh, I hit command returned to run that code. I'm going to add some names to that vector. And let's take a look at what myNamedVector actually appears to be. If I open up the console, you'll see here at the bottom that we have four named objects in a vector; first, second, third and fourth being the lines from Jabberwocky poem. Now in line 15 is where we actually create a corpus from myNamedVector.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=96)** So I can select line 15 and if I go up to the corner here and hit run, you'll see a couple of things happen. First of all, the code is executed. And in the right hand side in the global environment, you'll see that we now have a myNamedVector and myCorpus. myCorpus was created by quanteda in line 15. If we run line 16, we'll see a summary of what myCorpus looks like. In this case, the summary is telling us that myCorpus contains four documents. The text of them is first, second, third, fourth, that's the document name. The number of types, the number of [[Tokens]], and the number of sentences. And we'll talk more about types, tokens, and sentences in a future session. You can also create a corpus from a dataframe and we can see this in line 19. myData.frame is created from as data frame myNameVector. So all I'm doing here is creating a data frame from that previous name vector. Let's go ahead and run that and you'll see in the right hand side that we now have a dataframe with four observations of one variable. We'll go back to the code here. Line 20, I've added a variable called docid and placed in one through four. And then in line 21, I also add someInfo to the dataframe. So let's go back and take a look at the dataframe in complete. You can see that we have observations named myNameVector, docid,
>
> **[3:12](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=192)** and someInfo. Those were all just created. Now, to convert myData.frame into a corpus is fairly simple and you can see this in line 24. myCorpus is created from the corpus command from quanteda, and the corpus command wants to know what object are we going to convert to a corpus? In this case, myData.frame. The docid field is an observation called docid which is what we just created. And the text field will be contained in an observation called myNamedVector. Now, I've also added some [[Metadata]], and that's in line 27 where it says meta equals a list, and I'm adding an object called thisCameFrom with the contents of I made this myself. Let's go ahead and run line 24. And you'll notice on the right hand side that we have a myCorpus object. Now, we'll talk more about metadata in the doc variables chapter. But let's take a look at the summary of myCorpus. Now you'll notice a couple of things that change from the named vector. We have a someInfo of this, that, another, and one more. What we're not seeing is the metadata and again, that'll come up here later on. Now I'm going to use this particular corpus again in the future. So in line 35, you can see where I have run saveRDS.
>
> **[4:46](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-a-quanteda-corpus?u=76281980&t=286)** And I've saved myCorpus as a file called quanteda/sampleCorpus.RDS. And if you look in your exercise files, you'll see that that file is available for you in future sessions. Again, quanteda provides five methods for creating corpora. They aren't much different from each other, except they allow for the import of different data objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[Tokens]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[RStudio]] (1)
> **Code Identifiers:** mycorpus (8), mynamedvector (5), mydata (3), someinfo (3), mynamevector (2)
> **Env Vars:** rds (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is an  (1)

#### [Create metadata with docvars](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=1)** Doc variables are quanteda's way of storing [[Metadata]] along with the corpus. So let's take a look at how do you create document variables. Now, in summary, they can be created along with a corpus or they can be created with a command docvars or with the command meta. Let's take a look at each one of those. In line one, I've brought in the quanteda library. No surprise. And then down in line nine, I'm retrieving a sampleCorpus. And this is the corpus we created in the previous session. You'll see that when I run line nine in the environment, I now have a sampleCorpus and we can take a look at the contents of sampleCorpus by hitting the summary. You'll see that there are four documents and types [[Tokens]], sentences and someInfo about each one of those. You'll remember this is the first four lines of the poem, Jabberwocky. You'll also remember that when we created this particular corpus, we also added a docvar and we can show that in line 14. I'll hit command return on my Macintosh, which runs the command docvars for sampleCorpus. And here you can see that we have a docvar named someInfo with some nonsense sort of identifiers that we've placed in there. Now you can also access a docvars in a sampleCorpus in a traditional notation, and this is shown in line 17.
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=98)** First, you see the name of the corpus, which is sampleCorpus. Then we use the dollar sign indexing for someInfo. And when I run this, you'll see this, that, another, and one more, which is showing me the contents of someInfo which happens to be the docvars for sampleCorpus. Now let's jump down to line 20 and we can assign a new variable to this particular corpus using the docvars command. So I see in line 20 it says docvars, followed by the name of sampleCorpus, which is the corpus we wish to assign the new variable. We're going to add a field called charcount, and into that we're going to place a number of characters from sampleCorpus. Let's go ahead and run that. And line 21 conveniently gives us a summary of our new sampleCorpus. You can see that the very last observation is charcount. And again, that's the number of characters in each particular line of this particular corpus. In line 24, I'm using meta, a command to access different types of metadata, and in this case I'm accessing the system metadata from sample corpus. Let's go ahead and run that. And what you'll see down here in the console is all of the system level information for this particular corpus. The package version that it was created under, the R version that
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=190)** it was created under, the system that it was created under. In this case, I'm using Darwin x86 64. And the user happens to be [[LinkedIn]] instructor, that's me. It shows the directory where this particular corpus is located, when it was created, December 29th of 2022, and what kind of a source was it? This came from a dataframe. Let's run line 25, which is showing us the same information but at the user provided level. And in this case, you can see this is where this came from, and I made this myself. And if you recall the previous session, we added that particular information at the time that we created sample Corpus. Finally, line 26, we can look at the type of object with sampleCorpus. And in this case you can see there's a unit, a summary and some summary data. We can also use the meta command to assign metadata. So let's look at line 29 where we use meta to assign a field called letters. And into it we place A, B, C, and D. I run that. Nothing changes. But we now have metadata in there. If I run line 30, I'll be able to see where that comes from. And you can see users letters now shows A, B, C, and D. So you'll notice that there is a field user and under user is another field called thisCameFrom
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-metadata-with-docvars?u=76281980&t=284)** and letters. In line 31 of the code I print out a summary of sample corpus and you'll notice that it does not show letters. This is because a summary command only shows document level metadata. Likewise, what happened to charcount. So let's take a look at line 34 where we reveal the field charcount. And I get null. Well, how come if I look at a sample dollar sign charcount, you'll see that that's still there. However, it's not showing under metadata because charcount is at the document level and meta doesn't list it because the metadata is for corpus level metadata. So the takeaway here is that when you're using metadata or docvars with quanteda objects, you need to be a little bit careful about where you're storing information and how you're looking for it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (10), [[Tokens]] (1), [[LinkedIn]] (1)
> **Code Identifiers:** samplecorpus (11), someinfo (4), thiscamefrom (1)
> **Definitions:** is a  (1)

#### [Corpus subsets and groups](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=1)** Quanteda provides tools to subset and group corpora. These tools are called corpus underbar subset, corpus underbar sample, and corpus underbar group. Let's take a look at how these work. In line four, I bring in the quanteda library and then in line seven, I pull in a sampleCorpus that I've saved as sampleCorpus.RDS. This should be in your exercise files. In line 11, I've set up a corpus subset command, and you'll notice that the first argument, the corpus underbar subset is a sampleCorpus, which we just pulled in. The second one, which is startsWith creates a logical vector. And let's take a second to look at how that logical vector is built. The first thing we're doing is looking at the contents of someInfo, a vector contained in sample corpus, and you'll see down in the console that someInfo contains the words this, that, another, and one more. startsWith examines that vector and checks to see if each of these elements starts with the letter T. So when I run startsWith sampleCorpus$someInfo, T, I get a logical vector. The logical vector says the first element is this, which starts with t, so that's true.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=95)** And the second element is that and it starts with T, so it's also true. The third element is another that starts with a letter A. Does not start with letter T, that's false. And likewise, one more is false. So when I run line 11, you'll see that I receive documents one and two, because the elements of someInfo are this and that which starts with t. To make this a little bit clear, corpus subset will accept any logical vector. And if you look in line 14, I've hardcoded a vector to be true, false, true, false. And when I run line 14, you'll see that I receive documents one and three because one is true and three is true. Likewise, I can randomly sample a corpus and I've set this up in line 17. Line 17 says corpus underbar sample. I'm sampling sample corpus and the size of my random sample I've set as the number of documents divided by two. So one half the number of documents. And when I run line 17, you'll see that I receive documents three and two. If I run line 17 again, I'll receive documents three and four.
>
> **[3:07](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=187)** So I'm randomly sampling the number of documents in sampleCorpus. Now, corpus underbar sample has an extra trick and it's called by which we'll set up here. The first thing I need to do to use by is build an observation that I can use to sample out how many characters are in each document. And in line 21, I've done that. I've created an observation or some [[Metadata]], a docvar that contains the number of characters in each element of sampleCorpus. When I run that, I can take a look at sampleCorpus. Let's go ahead and type that in. And you'll see that I now have a character count that indicates the number of characters in each line of the sampleCorpus. Going back up to line 23, I use corpus underbar sample. I'm sampling a corpus called SampleCorpus. I only want one document returned that's size in line 24, but I've said by charcount less than 31. What this has done is created two groups, documents that have less than 31 and documents that have greater than 31 or equal to 31. So when it pulls a sample of one, it will pull in a sample from each group. So rather than receive just one sample, you can see that I've received two samples.
>
> **[4:41](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=281)** And this is because corpus sample gave us one sample from the first group and one sample from the second group. So the by argument to corpus sample allows you to break up documents within your corpus by some arbitrary variable that you can store into a document variable. Now you can also group or concatenate documents in a corpus. And you can see the setup in line 32 where I'm using corpus underbar group, and I've said, build me a new corpus called groupSampleCorpus. Now, the groups you can see, have a vector where I've used groups equals myDoc, myDoc, yourDoc, and nobody. Let's go ahead and create that. And now in line 33, I'll summarize that. This is sampleCorpus, so I'm showing you the ungrouped documents. And then in line 34, let's take another summary of the groupedSampleCorpus. I'll open this up so we can compare the two. The first summary shows the ungrouped and the second summary shows the grouped. So you'll notice that the text has changed. In the original corpora, the text was 1, 2, 3, and 4. In the
>
> **[6:17](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=377)** grouped corpora, you can see the text is myDoc, Nobody and yourDoc indicating the groups that we created when we set up the group command. Now remember that the groups I set up were myDoc, myDoc, yourDoc, and nobody. MyDoc and myDoc were combined, they were grouped together. If you look at the types in the top sampleCorpus compared to the types in the groupedSampleCorpus, you'll notice that myDoc has 11 types and 13 [[Tokens]]. Now, you might think that you could just add the types from documents one and two. Well, document one has six types and document two has seven types. Six plus seven does not equal 11. So why did it get 11 types? Probably because within the first document or second document, there are repeated types. So it doesn't just simply add those numbers up. It compares to how many types you have and gives you the new number of types in that grouped document. The group document called myDoc. Likewise for tokens. Well, in this case, six plus seven actually makes sense. So there were no duplicated tokens. Now we can take a look at the different documents in each corpus. In line 36, I've said show me the first document in sampleCorpus, and that's listed below on the console as Twas brilling
>
> **[7:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-subsets-and-groups?u=76281980&t=471)** and the slithey toves. Now look at line 37 where I've said, show me the first document in the groupedSampleCorpus. And what you'll see here is this it is starts with Twas brilling and the slightly toves, but then finishes with did gyre and gimble and the waves, indicates that groupedSampleCorpus, first document, is a combination of sampleCorpus, first and second documents. Corpus underbar group can provide something of a confusing new corpus. But when you understand what it's trying to do with the different documents, it starts to make sense as to what it's building out. Again, we've been talking about subsetting corpus, sampling corpus and grouping purposes, all part of the quanteda package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Metadata]] (1)
> **Code Identifiers:** samplecorpus (12), mydoc (8), someinfo (4), groupedsamplecorpus (4), startswith (3)
> **Prerequisites:** set up (4), setup (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Env Vars:** rds (1)
> **Exercise Files:** exercise files (1)

#### [Reshape and segment a corpus](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=2)** Quanteda provides a way to reshape and segment corpora. And not surprisingly, this is corpus underbar reshape and corpus underbar segment. Let's take a look at how these work. In line two I, of course, bring in the quanteda library. In line five, I create a sample corpus called myCorpus. And let's take a look at what that is. In this case, it consists of one document with text 244 types, 529 [[Tokens]] and 15 sentences. Now, I only have one document. So if line eight calls for the second document in myCorpus, I'm going to receive an error. There is no second document. Let's reshape myCorpus. In line 12, I've created a corpus called reshapedCorpus. I'm using the corpus underbar reshape command. I'm going to reshape myCorpus and I'm going to break it apart by sentences rather than documents. So let's run line 12. I now have a reshaped corpus and I can take a look at that. And you'll notice that instead of just one document, I now have 15. Now, if I look for the second document of reshapedCorpus, as shown in the line 14, you'll see that I receive a line that says that policy has been dictated by the IMF, etc.
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=96)** . It's the second sentence of the original corpus that we brought in. Now to a segment a corpus is a little different. And what we'll do here is, first of all, we'll bring in some data called data corpus inaugural. It's provided as part of the quanteda package. Let's take a quick look at that data. You'll see that it's line after line of speeches. It's the inaugural speeches of each president. Now I only want the first one, which is by Washington. So in line 20, I create a corpus called Washington speech or washSpeech, and it contains the first document of data corpus inaugural. Now, in 23, I use corpus underbar segment, and I'm going to segment out the Washington speech. The pattern I'm going to use to segment out that speech is two line returns. It's basically a line followed by a blank line. Now the value type I've selected is regex. There are other types of values, but in this case I'm using a regular expression, so I have to use value type regex. And I've said that look for slash n slash n after the context. So I run line 23 and you'll see that segmentedCorpus has several lines that indicate each line of the Washington speech. We can see that by using line 28, which is as character washSpeech, which will show me the entire contents of washSpeech.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/reshape-and-segment-a-corpus?u=76281980&t=195)** And then I'll bring in as character for the segmentedCorpus. And you can see that I've only pulled in the first sentence of the original document, and I can compare that to the beginning of the original document, which starts as fellow citizens of the Senate and the House of Representatives slash n slash n. You can see that that's the first element of the segmentedCorpus. Likewise, line 30 says, what is the second line? Again, we're looking for a slash n slash n. The second line is much larger than the first, but it ends in slash n slash n. So that's segmentedCorpus. It's corpus reshaping by sentences or documents or paragraphs, and it's ways to break up a corpus into different types of objects versus just simply tokens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2)
> **Code Identifiers:** mycorpus (4), segmentedcorpus (4), washspeech (3), reshapedcorpus (2)
> **Env Vars:** imf (1)
> **Definitions:** is a  (1)

#### [Remove lines from a corpus](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=1)** Quanteda provides a way to remove unnecessary documents from a corpus. It's called corpus underbar trim. And let's take a look at how to use it. In line three, I bring in the quanteda library, then line six retrieves a sampleCorpus for us to experiment with. The summary of sampleCorpus shows us that it's a fairly simple corpus, but it's got types and [[Tokens]] and sentences and some document variables called someInfo. Now, let's suppose that we don't want short sentences in our corpus. Well, I've set this up in line 11 where it says corpus underbar trim. We're trimming the sampleCorpus, and what we're trimming by is sentences with a minimum token of six. So it will select sentences shorter than six. And let's run that. And what we see is we now have only two documents within our sampleCorpus. That's because these lines are each longer than six words. Likewise, we can remove sentences that have a pattern. In line 17, I've set up corpus trim with a regular expression, and that's shown in line 19 where I say the exclude pattern is any sentence that begins with T. So if we run that, what we'll see here is three lines,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-lines-from-a-corpus?u=76281980&t=97)** none of which start with T. This is a way to remove unnecessary or spurious documents from your corpus to improve the quality of your research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **Code Identifiers:** samplecorpus (4), someinfo (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 16. Understanding Tokens

[↑ Back to Table of Contents](#table-of-contents)

#### [Corpus and tokens](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=1)** A corpus is built of documents. A document is built of [[Tokens]]. In this chapter, let's look at the creation, manipulation and removal of tokens. Quanteda provides a large number of token tools as you gain more experience with [[Natural Language Processing (NLP)|natural language processing]], the use of some of these advanced token tools will become obvious. For the moment, let's focus on some of the basic tools for tokens. Again, quanteda provides a lot of tools for token manipulation. But if you start with this subset, you'll gain an understanding of how other token tools work and how quanteda works with tokens in general. Let's look at some code. To create tokens from a corpus, you'll of course, need to do a couple of setup things. In my case, we're first of all going to load the library for quanteda. In line six, we bring in a sampleCorpus, and let's take a look at what it is that we're looking at. This is a summary of the data corpus inaugural corpus that we'll be working with. As a further example, here's the first document of the same corpus as characters, which gives us the exact text of the document. Now, let's take that document and turn it into tokens. I'll take SampleCorpus document one and use the tokens command to tokenize it.
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=97)** Now, what the console is showing you is the first document broken into tokens, and in this case, tokens are words. It only shows us a few of them. You'll notice that the very last line is 1,525 more tokens in this document. So there's quite a few. You'll notice that this tokenization also includes things like the colon mark with punctuation and several other stopwords such as of and the. Starting in line 17, you'll see code that deals with all of these extraneous marks. Seventeen is the same as the previous line 14 where we're using the as character to show us all the contents of a document. And then it goes on to say, give me the tokens of sampleCorpus document one. Then in line 18, 19, 20, 21, and 22, I request the tokens command to remove punctuation, symbols, numbers, URLs and separators. Let's see how that looks differently. Previously, you could see that we have 1,525 plus tokens coming from this document. And then after removing all of the punctuation, symbols, numbers, URLs and separators, we have quite a few fewer numbers. Look at these results. Fellow citizens of the Senate and of the House. Well, that's still the same.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-and-tokens?u=76281980&t=191)** But you'll notice that the punctuation marks are gone. Now, what we haven't removed is stopwords, and we haven't done something called stemming, and we'll cover that here in just a minute or two. What you'll see is, is that tokenization and removing punctuation, symbols, numbers, URLs, and separators has converted a long string document into a collection of words. This is also known as bag of words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (13), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Code Identifiers:** samplecorpus (2)
> **Definitions:** is a  (1), known as (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### [Remove tokens and stopwords](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=1)** In our previous session, we talked about converting a corpus into [[Tokens]]. In this session, let's talk about removing tokens. We're looking at some code that will illustrate this concept. In line two, I use the library command to bring in the quanteda package. Then in line five, I retrieve a sampleCorpus. We can take a look at that sampleCorpus and you'll see that it's again just a series of documents, each of them titled things like 1789 Washington or 1793 Washington. Let's create a tokens object from that corpus, and that's done in line 10. And you'll notice that I've removed numbers, punctuation and symbols. If I go down here into the console, I can type in scTokens and we can look at the contents of the new tokens object. You'll see that I have a collection of tokens for each document. For example, the first document, which is titled 1789 Washington consists of tokens, fellow citizens, then of, then the, then Senate. It's a bag of words. Now, many of those tokens are not useful for analysis, and so we may want to select certain tokens to keep them or we may want to remove certain tokens. And by the way, removing tokens is a way of dealing with stopwords, things like of and the. And I'll explain that in a second. Let's look at tokens select. In line 17,
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=94)** you can see I've set this up. I'm working with the scTokens object, and the pattern that I'm going to be looking for is citizens. And I'm going to keep those tokens. So when I run that, you can see that all of my documents now list just the [[Microsoft Word|word]] citizens. There are two shortcuts for using tokens select. One of them, which is tokens remove, and one of them which is tokens keep. These are identical to changing the selection shown in line 19 to remove or keep, but they make it a little clear as to what you're trying to do. Let's take a look at tokens keep. In line 27, you can see that I've set this up. The pattern is a little bit more sophisticated, and this is a regex expression where I've said, find me anything that has a capital or lowercase citizen followed by s. The value, of course, is a regular expression and a window is one. And let's take a look at what that window actually means. I'm going to clear the console and then run line 27. And if we scroll up to the top, what we'll see here is citizens in 1789 Washington. Its fellow citizens, it found citizens there. And then it found another citizen.
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=188)** And you'll notice that the window is one word or one token before and one token after. So each time citizen appears, it's bracketed by a non-citizen, the beginning word and the ending word. And you can see all of those documents are now showing the location of citizens or the context of citizens. Now, more importantly, we might need to remove certain tokens. And this is what's called stopwords. You'll recall that there was lots of, and the, and a, and and, words that are nice for humans, but not so useful for [[Natural Language Processing (NLP)|natural language processing]]. In line 33, I'm using tokens remove. I've said use the scTokens object, and the pattern that I'm going to remove is called stopwords in English. And we can take a look at what stopwatchs actually is by typing it in. In this case, I'm just going to highlight stopwords English and then run that. And you can see a list of all of the words returned by the stopwords English command. In this case, I and me, and my, and myself, these are all considered stopwords. If I select line 33 and run it, what you'll see now is a series of documents that no longer contains all of those stopwords, the of's and I's and myself. Now we're getting down to the real valuable parts of these documents,
>
> **[4:43](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/remove-tokens-and-stopwords?u=76281980&t=283)** and that's the great value of removing stopwords.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (18), [[Microsoft Word|Word]] (4), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** is a  (5), is called (1)
> **Code Identifiers:** sctokens (3), samplecorpus (2)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** for example (1)

#### [Group tokens](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=1)** When you have a [[Tokens]] object, there are a couple of things that you can do with those tokens. We've just covered keep and remove. Now we're going to talk about grouping them in different ways. We're looking at code that illustrates this concept. In line three, I'm going to bring in the quanteda package and then I'm going to create a tokens object from our corpus titled data corpus inaugural. And you'll notice that I'm removing numbers, punctuations and symbols. Let's take a quick look at scTokens and I can do that just by typing it into the console here. And you'll see that I have a series of documents with tokens in them. Again, a bag of words. You'll also notice I haven't removed the stopwords, things like of and the. Well, I can replace certain phrases with individual things called compounds. We'll talk about ngrams in a second. But let's look at line 12 where I say tokens compound. And what I'm saying is take the scTokens object, and any time you see something such as friends and fellow or something such as constitution requires, I want to compound those into one phrase. Let's go ahead and run that. And I hit return. Let's take a look at the results. And in particular, the document titled 1801 dash Jefferson.
>
> **[1:35](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=95)** You can see friends and fellow has been compounded with an underbar as a concatenator. When we look for constitution requires such as an 1805 Jefferson, you'll see that constitution underbar requires has been compounded. This is a way to take domain specific concepts such as air pollution or fish mortality, and group that into a significant set of words that we can then later on do analysis on. Similar to compounding tokens is ngrams. And in line 18 I've set up the tokens underbar ngrams command. Let's take a look and see what that does. Now, line 18, of course, just set up tokens ngram, said operate on scTokens. In line 19, I said I want to see ngrams of two tokens. And the concatenator will be an underbar. So in fact, if you look in the console down below, you'll see 1789 dash Washington has two tokens in each ngram. The first one, which is fellow dash citizen, which was a token from before, plus of has been compounded into an ngram followed by of underbar the and then the underbar senate. Now, whether you choose to do this before you remove
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=189)** stopwords or after is going to be dependent on certain phrases that are important in your scientific domain. Note that ngrams can also be done on characters. And I've set this up in line 23 and 24. The first thing I had to do was create an object. I've called it charToken, and I've created as characters based on the tokens. Let's create that object and then take a quick look at it. If I type in charToken, you can see I have T, W, A, S, B, R, I, L, L, I, G, And the slide hey tovess, which is what it tokenized by character. Now, if I run line 24, I've said char ngrams. So I wanted to take each character of charToken, group them into two with an underbar. So when I run that, you see that it's taken the individual characters and grouped them together by an underbar. Finally, there's a concept called skipgram, which are close to ngrams, but they span multiple words. It's just as easy to see what actually happens when you run the tokens skipgrams command. And if we scroll up to the top, what you'll see is a strange combination of how these ngrams have been constructed. So if you look at this, it looks fellow citizens then of, and fellow citizens the, and fellow citizens Senate,
>
> **[4:44](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/group-tokens?u=76281980&t=284)** then fellow citizens and, and fellow citizens of. This is all based on the skip argument which is as currently says 0 to 4 and it can concatenate as underbar one. This is for very special uses in very special domains where you're coming up with certain ngrams that seem to make sense only in context. It'll take some experimentation, but at least you know that it's there and available for your use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (12)
> **Code Identifiers:** sctokens (3), chartoken (3)
> **Analogies:** such as (4), similar to (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** scroll up (1)

#### [Stemming with tokens](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=1)** Stemming is fairly easy to understand; or is it? The process of stemming is easy to understand. The algorithm used to stem words is fairly complex. To understand stemming, let's first of all do some and I've set up some code to do this. You can see it's fairly short. In line three, I use the library command to bring in quateda. Inline six, I created [[Tokens]] object called sctokens. Then in line 11 I remove stopwords from that object. Now let's take a quick look at what scTokens actually looks like. And I'll clear this and then open it up so we can do some comparison, and type in scTokens. And not surprisingly, you see that we have a series of documents just consisting the tokens, and I've removed the stopwords. Now in line 14 of the code, I use tokens underbar wordstem against the scTokens object. I'm going to run that. And let's take a look at what the difference is. If I go up to the top document titled 1789 dash Washington, you'll see fellow citizen and then Senat S-E-N-A-T but it's misspelled. It's missing the e or house, H-O-U-S but it's missing the e. And then you see R-E-P-R-E-S,
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/stemming-with-tokens?u=76281980&t=98)** which is very short for representative or representing or represented. This is what happens when you stem wards and what you've done using the tokens underbar wordstem command is apply an algorithm to each [[Microsoft Word|word]] which returns just the stem or the root of each particular word. If you look at the documentation, you'll see that in quanteda, stemming is based on something called Martin Porter's stemming algorithm. And you can look this up on the Internet. This is the home page for The Porter Stemming Algorithm, and it gives history and encoding and a lot of information about how this particular algorithm works. There is a lot of debate about whether stemming should be done this way or whether it should be done in another fashion. And this is something that you'll need to examine as you get into using stemming in your particular domain. In some cases, stemming canproduce the wrong word, such as representative instead of representing. In the domain where you're examining government or governmental type words, representative definitely has a meaning that's different from representing. These are the kind of things that you need to be aware of when you're using a stemming algorithm.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[Microsoft Word|Word]] (3)
> **Code Identifiers:** sctokens (3)
> **Definitions:** short for (1), is a  (1)
> **Prerequisites:** set up (1), you'll need (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)


### 17. Understanding Document-Feature Matrix (DFM)

[↑ Back to Table of Contents](#table-of-contents)

#### [Corpus, tokens, and DFM](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/corpus-tokens-and-dfm?u=76281980&t=1)** After tokenizing the documents in a corpus, we are ready to create a document feature matrix also referred to as a DFM. Most other [[Natural Language Processing (NLP)|natural language processing]] packages refer to this as a document term matrix or a term document matrix. Quanteda is unique in calling this a DFM. For most practical purposes, these three objects are the same. Quanteda provides many tools for manipulating document feature matrices. These can be broken into four rough groups. Create and modify, modify features, subset and select, and [[Statistics]]. Let's jump right into some code to demonstrate how to create a DFM and use some of these commands to perform statistic analysis on text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Statistics]] (1)
> **Env Vars:** dfm (3)

#### [Create and modify a DFM](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=1)** Quanteda works with document feature matrices and provides obviously tools to create those DFMs. And let's take a look at creating a DFM and also working with DFMs. In line six, I'll bring in the quanteda package. And then in line nine, I create a [[Tokens]] object called scTokens. And I'm doing that from a data underbar corpus underbar inaugural. You'll notice that I've removed numbers, punctuation and symbols. Now, in line 14, I'm going to remove stopwords. I'm using the smart source of stopwords. From that tokens object, I can create a document feature matrices. And that's exactly what we do in line 17. Now, in this case, we're just looking at how it looks. So let's open up the console a bit and you can see that we have a column labeled docs, starting with 1789 dash Washington, and then we have columns of features. The first column is fellow dash citizens, followed by senate and house. The numbers indicate how many of those particular tokens appear in each of these documents. I'm going to use this DFM for some next steps. So in line 20, I save myDFM to an object. And you'll notice that that appears in the upper
>
> **[1:34](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=94)** right hand corner. At this point, we've created a DFM. It's called myDFM, and you can use DFM for all sorts of different actions. Let's take a look at DFM sort, for example. And this starts in line 22. In this case, I've created a DFM from just one of the documents of the tokens object. And you can see that in line 23, DFM sort, followed by DFM scTokens bracket one, which means I'm only using the first document of scTokens that I'm creating a DFM from that document, and then I'm going to sort it. So let's go ahead and see what actually happens when I run that. You'll see down in the console that I've got one document, it's called 1789 dash Washington and there are features, government, public, present, country, citizens. There's eight instances of government in Washington. Six instances of the public token in Washington and so on. In line 25, I'll sort the entire DFM and put it into an object called sortedDFM. We can take a look at sortedDFM. Now this becomes a bit more confusing. Again, the first column is documents 1789, 1793, 1797, followed by a series of columns labeled as features, people,
>
> **[3:08](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/create-and-modify-a-dfm?u=76281980&t=188)** government, great, states. But it doesn't really appear that they're in any sort of sorted order. What's happened here is that DFA underbar sort has sorted across all the documents and we can prove that with line 29 where I'm calling up the head of feature frequency on the sortedDFM, feature frequency is a command that's part of quanteda, and when I run that, you'll see that I've got people, which is the most populous, followed by government, which is the second most populous. And if you compare that to these sort results up above, you'll see that in features people is first, government is second, grade is third, and so on. In line 31, I've refined this just a bit and selected just people. And you see that we have 584 occurrences of the token people in the entire DFM. Now, as a side note, I'm going to use myDFM in future sessions. So in line 34, I save that to disk as mydfm.rds. So in this session, we've done a very simple thing. We've created a DFM or a document feature matrix, and then we've applied a simple process to it. In this case, DFM underbar sort. Let's take a look at a real world example.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4)
> **Env Vars:** dfm (13), dfa (1)
> **Code Identifiers:** sctokens (3), mydfm (3), sorteddfm (3)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Real-world analysis with DFM](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=1)** Rather than just simply step through all of the quanteda tools for document feature matrices, let's take a real world example and show how to work through a problem. In this case, we're looking at code that helps us compare the United States inaugural speeches against the United States Bill of Rights. Specifically, I'm looking for interesting insights into what different presidents felt were important in their speeches against what the founding fathers felt were important about a US Bill of Rights. Well, this is a fairly complex setup, so I would encourage you to download the code that I supplied in the exercise files and to follow along. Do some examples. I'm going to be moving fairly quickly, so you'll need to concentrate and probably rewind the video a couple of times. With that in mind, let's get started. Lines two and three bring in the quanteda and read text packages that we'll need as we do our analysis. In line eight, I use read text to read the Gutenberg version of the Bill of Rights and will bring that into an object called billOfRights. Then in line nine, I trim off the top of the Bill of Rights text. We don't need all of the Gutenberg information. Finally, in line 11, I use the [[Tokens]] command to build a billOfRights token object from a corpus called billOfRights.
>
> **[1:39](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=99)** And you'll notice I've removed numbers, punctuation and symbols. In line 15, I remove stopwords from the Bill of Rights. In line 16, I stem all of the tokens. And then in line 17, I create a dictionary from the billOfRights token object. So I have a dictionary now that I can use to compare against all of the documents in the inaugural corpus. I'm going to fix one of the names in the Bill of Rights dictionary and I'm going to call it Bill of Rights. Let's take a look and see what we've done. I have a dictionary object with one key entry, and you'll notice that I have words like unite and state and bill, right, 10 origin. These are all the dictionary words that I'll use to compare against all of the inaugural speeches. In line 24, I create a stemmed dictionary from the 2015 Lexioder Sentiment Dictionary. And let's take a look at that real quick. You'll see that we have several different lists. We have a positive list, a negative positive, a negative negative and so on. Now, let's combine the Bill of Rights Dictionary and the LSD 2015 stemmed dictionary. That's line 33. Then in lines 34 and 35, I remove two of the columns. At this point, I have a completed Bill of Rights dictionary and I'm ready to bring in the inaugural speeches.
>
> **[3:16](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=196)** In line 38, I load our previous DFM, and I stem that current DFM. Now I have two things. I have myDFM, which has been stemmed, also, I have a Bill of Rights dictionary and I can compare these two. Let's start that in line 42 where I'm using the DFM lookup command. The document feature matrix that I'll be using is DFM underbar stemmed and the dictionary I'm using is the Bill of Rights Dictionary. Let's run line 42 and see what happens. Down in the console, you'll see that I've got a column labeled docs, which is a list of all of the documents in my DFM, followed by columns labeled features. And the first one is labeled Bill of Rights. What this is saying is that from the Bill of Rights Dictionary, the Bill of Rights column, 73 of those words match in the 1789 Washington document. I also have columns labeled negative and positive. Those come from the LSD 2015 stemmed dictionary that we created up above. You'll notice that I have 35 negative matches and 112 positive matches. So this gives us a vague notion of the 1789 Washington document. Bill of Rights 73, negative 35, positive 112. Compare that to 1797
>
> **[4:51](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=291)** Adams and you'll see that there are many more Bill of Rights words used and he's, by and large, very, very positive about his speech. In line 44 and 45, I've asked let's find the major features across all documents and recall that features in this case is very similar to terms or words. So when we run line 45, what we'll see here is, again, a column labeled docs and then features. And you'll notice that we have nations, and people, and state, and government. These are the major features that we've asked for. Actually, what I've asked for is any terms that show up more than 400 times. You'll see min underbar term frequency equals 400 in line 45. Quanteda also provides the text stats package, and in line 48 I have shown how to bring that in if you haven't already. In 49 I pull that in so it's available. And in line 50, I've set up the text stat underbar frequency command. I've said use the DFM stemmed package and only show me the top 20 most frequent terms. When I run that, you'll see what I get is a feature nation for example appears 691 times. It's the number one feature that appears in all documents. In line 52 and 53,
>
> **[6:27](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=387)** I've said, I'd like to subset any features that start with free. Now I'm going to break down line 53 into parts. First, I'll clear the console and let's look at feature names myDFM stemmed. Just that component of this command. What this gives me is all of the feature names coming from myDFM underbar stemmed, and that's quite a list. Now I expand this command to starts with anything that has free and you'll see that we get a logical return. This is showing us that most of these document terms do not start with free, but there is one located in the row labeled 352 that is true. This indicates a term or a frequency that starts with the [[Microsoft Word|word]] free. What I can say is I would like to select the documents from myDFM underbar stemmed with a pattern that starts with the word free. Now when I run this, you can see that 1789 dash Washington has no stemmed words that start with free. 1805 dash Jefferson obviously does, it as one. And Madison has two and so on. Now, in line 55, let's ask, what documents are older than 1800? And only make those available for examination. In line 56, you can see that I've set up a fairly long command. Let's break this down into smaller parts,
>
> **[8:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=481)** starting in line 59. Give me the document names of myDFM stemmed. And when I run just that part of the command, you can see that I get the document names from myDFM underbar stemmed. What I would like is the first part of each document name, which indicates the year that this was actually given. So I can use string split and I want to split on a dash. And now what I receive is the year followed by the name of the speaker. I've used lapply to apply string split to each document name. Then in line 60, I've declared the function that I will apply against each one of these names as show me the first part that's less than 1800. Let's go ahead and use lapply. And I receive, again a logical vector. Some of these will be true. Any of them that are less than 1800. Of course, those are going to be towards the top. So you can see that I start to get true, true, and then false. If I run the entire command, what I'll see now is a list of all of the features for the documents that are less than 1800. You'll notice that the document column ends at 1797 dash Adam and it lists the features of each one of those documents. If I was doing a random sample of documents, I could simply use the DFM underbar sample.
>
> **[9:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-analysis-with-dfm?u=76281980&t=576)** Again, a quanteda function provided for us and applied to myDFM stemmed. This provides us with a random list of documents. If I run it once, I get 1797, 1985, 1849. If I run it again, I get a different random sample of documents from myDFM. This is intended to be a fairly quick run through of some of the capabilities of quanteda when applied to document feature matrices. There are a lot of commands that quanteda provides for these type of functions, and it takes a fair amount of time to understand how to use each one of them. But it will behoove you to understand what functions quanteda provides for you as part of this powerful package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Microsoft Word|Word]] (2)
> **Code Identifiers:** mydfm (8), billofrights (4)
> **Env Vars:** dfm (7), lsd (2)
> **Definitions:** is a  (4)
> **Prerequisites:** set up (2), setup (1), you'll need (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Analogies:** similar to (1), for example (1)


### 18. Analysis and Visualization

[↑ Back to Table of Contents](#table-of-contents)

#### [The quanteda textstats package](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/the-quanteda-textstat-package?u=76281980&t=0)** Quanteda provides a collection of tools for [[Statistical Analysis]] of documents. Some of these are easy to understand, frequency of features, readability, documents similarity and summaries of features. Some features are more complex and require a bit of research on [[Natural Language Processing (NLP)|natural language processing]] concepts. Those topics are beyond the scope of this course, but provide valuable insight into the nature of documents. Let's take a brief look at some of these functions and the statistical analysis they provide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Statistical Analysis]] (1)

#### [Real-world text statistics with textstats](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=1)** Quanteda provides an associated package called textstats, and in that package are several useful functions. Let's take a look at just a few of them. In order to demonstrate this, I'll need to bring in both quanteda and quanteda.textstats, which I do in lines three and four. Now the first thing is calculating readability. And this provides a number that indicates how simple a document is to read. Ironically, the higher the number, the easier it is to read this. And to calculate that I've set this up in line seven or I've created a readability object and I'm using textstat underbar readability against the inaugural corpus. I'll run that, create the readability object, and let's take a look at that. Well, what this is giving me is list of all of the inaugural speeches followed by the flesh readability index. Now, it'd be handy to see this number sorted from most readable to least readable, and line nine does that using the order base R command. I'm going to clear the console and then run line nine. And if we scroll to the top of the list, we will see that the 2021 Biden inaugural speech rank the highest in the flesh readability scores. At the bottom, 1797 Adams was almost unreadable. Now let's do some comparison between different corpora. I'm going to clear the console and then in line 12,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=97)** I'm going to bring in our old friend, myDFM. To create a similarity, I use textstat underbar simil as shown in line 17. It's a fairly easy command. In line 16 I coerce it to a matrix because in line 15 I'm going to represent this as a heatmap. Let's go ahead and run 15 through 18 and you'll see in the lower right hand corner is a heatmap. Let's [[Zoom]] into it. The red diagonal line is the one to one correspondence between all speeches. Ironically, some speeches are more identical than others. The lighter the spot, the less similarity there is. So if you look towards the bottom, you'll see that 2009 Obama was not very similar to 1789 Washington. Conversely, we see that 2017 Trump in the upper right hand corner was very similar to 2021 Biden. This may be because the words that were used are more similar to contemporary audiences. Quanteda also provides a dissimilarity or distance function, and the setup for it is very similar to the similarity function. I've set this up in lines 20 through 23 and we run that. And let's zoom in on the heatmap
>
> **[3:09](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=189)** the results. You'll immediately note that 1841 Harrison is substantially different than every other inaugural speech provided. This would be a clue that we should take a deep look at this particular inaugural speech. In line 27, you can see that I've set up the textstat underbar summary command. This is fairly easy. It provides us with a summary of all of the documents in that particular corpus. Things that it tells us is the number of characters, the number of sentences, the number of [[Tokens]]. So, for example, in 1789 Washington, there were 1,537 tokens, 107 punctuations, zero numbers, zero symbols, zero URLs, not surprising for a speech given in 1789. Textstat also provides something called collocations, which is easiest to understand as often used phrases. Let's go ahead and run that and see what shows up. And if we scroll up to the top, you'll see that the most frequent phrase is on the part of there's 14 of them. There's lots of interesting data about Lambda and Z. But again, basically it's often used phrases. Quanteda also provides quick or key words in context. This is where you can select a particular keyword and have it shown in context of that particular document. Let's run line 33 and then show the results in line 34.
>
> **[4:47](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-text-statistics-with-textstat?u=76281980&t=287)** And if we scroll up to the top, what you see is that, for example, in the 1789 Washington document, at position 436, the [[Microsoft Word|word]] government appears. Before the word government is of the United States a government. And then if we scroll down to the continuation of that line, instituted by themselves for these. That's the first line. So again, key words in context provides us with the location of a pattern or a particular token, in this case government, and shows the words before and after that particular keyword. This is just a quick run through of the textstat package available with quanteda, and I encourage you to take a deeper look at all of the [[Statistics]] that it provides to analyze documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Tokens]] (2), [[Microsoft Word|Word]] (2), [[Statistics]] (1)
> **Analogies:** similar to (4), for example (2)
> **UI Navigation:** scroll up (2), scroll down (1)
> **Prerequisites:** setup (1), set up (1)
> **Code Identifiers:** mydfm (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)

#### [Understand the quanteda sentiment package](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=1)** Sentiment analysis is an interesting and subjective part of [[Natural Language Processing (NLP)|natural language processing]]. Sentiment analysis provides insight into the emotional context of a document. This is done by starting with a dictionary of terms or words weighted as to their meaning or sentiment, then comparing them to a source document. Quanteda includes several dictionaries tailored for different types of documents. This page lists those dictionaries, but only indicates the polarity positive or negative of the sentiment of a [[Microsoft Word|word]]. For example, positive words are things like celebration or amazement or insight. Negative words might be things like deviation or hapless or disgrace or sorrowful. Some dictionaries contain extra dimensions. The NRC dictionary from the Canadian government is an interesting example. It provides positive and negative dimensions as well as dimensions for anger, anticipation, disgust, fear, joy, sadness, surprise, and trust. By matching words in the NRC dictionary with words in a subject document, sentiment analysis provides a perspective of the expressed emotions. As you might expect, there is debate and controversy about sentiment analysis. Comparing a wordlist to a source document provides an arbitrary
>
> **[1:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/understand-the-quanteda-sentiment-package?u=76281980&t=98)** weighting. But there are other dimensions to documents. For example, who is speaking is just as important as what they are saying. In recognition of the subjective nature of applying a list of words to a document, focused groups provide different dictionaries to address varied circumstances. For example, the word bear can be positive in one context and negative in another. If you are analyzing financial documents, use a dictionary that indicates bear is a negative word. If you are looking at an ecology report, bear might be positive. It's important to choose an appropriate semantic dictionary. That said, let's take a look at how quanteda provides tools for semantic analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Analogies:** for example (3)
> **Env Vars:** nrc (2)
> **Definitions:** is an  (1), is a  (1)

#### [Real-world sentiment analysis with quanteda sentiment](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=0)** Sentiment analysis is a [[Natural Language Processing (NLP)|natural language processing]] tool used to identify the positivity or negativity of a particular document. It's a fairly subjective and a fairly complex process, and I'm going to walk you through the steps in order to set it up. And as we go along, you'll see how sentiment analysis actually works. The best way to demonstrate this is to give you an example of it actually finished. Then I'm going to show you how to set it up. And then I'm going to show you how you can modify the setup. In order to do that, I need to start halfway through the code and you'll see that I'm starting at line 35. This is the example code that's included with this course. In line 35, I'm using the textstat underbar polarity command that's part of quanteda. For that command, I have identified the corpus as scTokens and something called a dictionary as dd underbar geninq. Let's run line 35 and see the result. I'll open up the console and we can look down below. And what you'll see is two columns, one labeled doc and one labeled sentiment. The docid identifies each document within the corpus scTokens. So, for example, one document is 1789 Washington and this happens to be the inaugural speech that President
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=97)** Washington gave in 1789. He has a sentiment of 0.99725979. In line two labeled 1793 dash Washington, you can see that President Washington gave a second inaugural speech, this time with a sentiment of 1.60943791. The immediate takeaway from this sentiment analysis is that President Washington became more positive in his inaugural speech between the years 1789 and 1793. Now, let's back up in the code and find out how you get those numbers and what they actually mean. I'm going to scroll up to the top and I'll start in line 13. The first thing I need to do is bring in the quanteda package and the quanteda.sentiment packages which I use the library command for. Note that in line 10 and 11 above, if you need to install these packages, I've provided the code that allows you to do that. Sentiment analysis relies on dictionary and quantity.sentiment provides several data dictionaries. In line 17, I've given you the command to find out more information about the data underbar dictionary underbar NRC. And you'll see that in the right hand side in the help window, this dictionary is labeled the NRC [[Microsoft Word|word]] Emotion Association Lexicon, and there is a lengthy description provided for this particular dictionary.
>
> **[3:15](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=195)** If I scroll down to the index, you'll see that the quanteda.sentiment package includes several dictionaries and dictionaries are tailored for their specific use. You can find dictionary for medical use, you can find dictionaries for political use, or you can find dictionaries for general use. In this case, we're using a relatively general dictionary. In line 18, I make a copy of a data dictionary called geninqposnegative and you can see over here is the list. It is an augmented general Inquirer with positive and negative dictionary. Now, what exactly does that dictionary look like? And in line 19, I've created a line that will show us the contents of that particular dictionary. You can see that there are two documents in the dictionary. One document is labeled as positive, one document is labeled as negative. Each document contains a number of words. So in the positive document, we have words like abide or ability or able. In the negative we have abandoned and abandonment and abate. Now arguably and subjectively, these are positive and negative words. Now, you'll notice that this dictionary is abbreviated. For example, in the positive dictionary, there is 1,641 more words in that particular positive document. In the negative document, there's almost 2,000 more
>
> **[4:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=294)** words available. What we need to do for quanteda is identify what part of this dictionary is positive and what part of it is negative. And to do that, look at line 22. Polarity is a command from quanteda. It identifies the dictionary that we copied over dd underbar geninq, and then it says, here is a list of the positive documents P-O-S equals positive and then negative documents N-E-G equals negative. Now this is a bit confusing, but in this case the actual documents within the dictionary are already labeled as positive or negative. Be aware that this isn't always the case, and so we need to identify which document is positive and which one is negative. I'll run line 22 and then I need to create a corpus. And I'm going to use the data underbar corpus inaugural, which we've been using quite a bit in this course. In line 25, I create scTokens, I've removed numbers, punctuation and symbols. Then in line 30, I remove stopwords. Let's take a look at scTokens, and this should be familiar by now. This consists of 59 documents. It's the inaugural speeches of all of the United States presidents. And now we're back to line 35, where we actually identify the polarity of individual documents. So to recover line 35, I'm using the textstat underbar
>
> **[6:31](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=391)** polarity command from quanteda.sentiment. I've identified my corpus with x equals scTokens and I've identified the dictionary which now has polarity attached to it as dd underbar geninq. I'm going to clear the console and then run that command. Again, you see a list of all of the documents, that's the first column, and then a list of all of the associated sentiments. It's pretty common to want to sort these by the sentiment, and I've set this up in line 41 and 42. Now we have a list of sorted documents. You can see that we go from a 0.06 all the way up to 1.60. These numbers indicate the relative positivity or negativity of each inaugural speech. The way that textstat underbar polarity calculates this is by adding all of the positive values and subtracting all of the negative values. If you have a sentiment value of zero, then you would be halfway between positive or negative. As the number recedes away from zero, the sentiment becomes more negative. As it increases in value away from zero towards one or two, you have more positive sentiment. Now as you can see, this is something of a subjective and arguable value,
>
> **[8:05](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=485)** but it gives us an indication based on the words that have been polarized in the dictionary. Now let's look at some ways to modify that actual value. One thing you can do is use a different dictionary. So in this case, line 45, let's use data dictionary NRC. I'm going to clear the console and then let's take a look at the values in data dictionary NRC. This list shows the names of the documents in data underbar dictionary underbar NRC. You'll notice that values six and seven are negative and positive, but you'll also notice that there are several other. Anger, anticipation, disgust, fear, etc. . The data dictionary underbar NRC has several values that could be identified as positive and negative. Let's set up data dictionary NRC for use with textstat polarity. In line 46 I make a copy. And then on line 47, I check to see what the polarity is for DD underbar NRC. You'll see that the pos value is set to positive and the neg value is set to negative. But we know there are others, such as anger, anticipation, disgust and fear. So let's add those to our polarity rankings. This is done in line 48 where I say a sign to the polarity of dd underbar NRC the following list
>
> **[9:38](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=578)** where positive is equal to positive and joy and trust, and negative is equal to negative anger, disgust and fear. I run line 48. And now let's go back and check the polarities. And you can see that pos has now become positive, joy, and trust. And negative has become negative, anger, disgust, and fear. In theory, this gives us a more sophisticated polarity ranking based on the words in the data underbar dictionary underbar NRC dictionary. We can recalculate the polarity, line 50 and 51 provide us with a sorted list. If you were to compare back to the sentiments that we created with the previous dictionary, you'd see that these document IDs have been sorted in a different order. This is because sentiment calculated differently, because we've added other words to give us a more sophisticated indication of the sentiment of particular documents. And there's another thing we can do to modify polarity, and that's to use a different algorithm to compute the polarity. This is what I've done in line 55. I'm saying again, textstat underbar polarity. The corpus is data underbar corpus underbar inaugural dictionary is the same as just before, dd NRC, but fun stands for function and in this case I've requested that textstat polarity use sent, sentiment underbar abspropdiff.
>
> **[11:14](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=674)** And let's take a quick look at what that is. I'll type in senr underbar abspropdiff and look for the help file on that. And you can see that it pulls up a sentiment functions. There are three sentiment functions used to calculate sentiment with the quanteda package, sent underbar logit, sent underbar abspropdiff and sent underbar relpropdiff. I've selected one of them and set that up in line 55. And then in line 59, we run the same command. This provides us with an ordered list of the sentiment for each document in the inaugural corpus. If you compare back to your previous notes, you'll see that this order has changed. Incidentally, you can provide your own function. So if you want to calculate sentiment based on a particular dictionary and a particular algorithm, you can add that into the fun equals place it in as a function and textstat underbar polarity will use that function to calculate the sentiment. Something that I'm not going to discuss is something called textstat underbar valence, which is very similar to textsta underbar polarity, but where textstat under bar polarity assumes that sentiment or positive and negative values are attached to columns or documents with textstat underbar valence that
>
> **[12:54](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/real-world-sentiment-analysis-with-quanteda-sentiment?u=76281980&t=774)** positive or negative sentiment value is attached to individual words in each document of the corpus. To setup for textstat valence, what you'll need to do is generate a unique list of all of the terms in a corpus, all documents of the corpus, then you'll need to create a second dictionary that has positive or negative values for each one of those terms. So if you have 2,100 terms in a document, you'll need to have 2,100 valence values to associate with those terms. Then you can use textstat underbar valence to calculate a sentiment based on each individual word versus categories of words. What I've just covered is sentiment analysis, using quanteda and specifically using the textstat underbar polarity command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Env Vars:** nrc (11)
> **CLI Commands:** find (5), make (2)
> **Definitions:** is a  (5), is an  (1), stands for (1)
> **Prerequisites:** you'll need (3), setup (2), install (1), set up (1)
> **Code Identifiers:** sctokens (5)
> **Versions:** 0.99725979 (1), 1.60943791 (1), 0.06 (1), 1.60 (1)
> **Analogies:** for example (2), such as (1), similar to (1)

#### [Visualization with textplots](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=1)** Quanteda provides an entire package of tools for plotting the [[Statistics]] related to [[Natural Language Processing (NLP)|natural language processing]]. The quanteda folks have put all of this into a package called quanted.textplots, and we bring this in in lines six and seven. So I'll go ahead and run those two lines. And we need something to work with, so I'm going to bring in mydfm.rds. You'll notice that appears in the upper right hand corner in the environment. The easiest thing to do is, of course, plot a wordcloud. And in line 12, you can see how simple this is. I simply run textplot underbar wordcloud as shown in line 12 and wait for quanteda to make a wordcloud out of all the features. This is a pretty dense wordcloud and we can trim it down. In line 15, I've created something called smallerDFM, which is a subset of the original DFM where the year is greater than 2000. I'll run that and you can see that the number of documents in smallerDFM is six. You can look in the lower left hand corner of the console. Now in line 18, I'll run texplot underbar [[Microsoft Word|word]] cloud on this smallerDFM. In line 19, I've requested that the minimum occurrence of any feature is 10 and I'm using a selection of colors called topo colors. Let's go ahead and run line 18, 19,
>
> **[1:37](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=97)** 20 and you can see a new wordcloud. There are fewer phrases and there are more colors. Quanteda also provides something called textstat keyness. And in line 23 you can see we've set this up. My key now contains the keyness of the smallerDFM and then it provides textplot underbar keyness. Let's go ahead and run it and see what exactly happens. The plot is actually easier to understand than the original statistic. What it's doing is comparing two documents, the 2009 Obama inaugural speech against the reference, which is the entire document. Let's skip ahead to something called xray. And if you're a Kindle reader, you know about xray and how certain words or terms show up at certain places and it will show you where those words show up in the book that you're reading. Well, you can create that with quanteda. In line 27, I've created a KWIC object called mykwic and I'm looking for the word government. Now, in line 28, I can plot that. And let's [[Zoom]] in to see what this actually does for us. I'm looking for the word government. And the first row is 1789 Washington, and you can see approximately where the word government shows up.
>
> **[3:11](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/visualization-with-textplot?u=76281980&t=191)** This is a whirlwind tour through the quanteda textplot package. It provides several useful functions for visualizing the statistics that you've created using other packages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[Statistics]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Zoom]] (1)
> **Code Identifiers:** smallerdfm (4)
> **Definitions:** is a  (3)
> **Env Vars:** dfm (1), kwic (1)
> **CLI Commands:** make (1)

#### [Use dplyr with quanteda](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=1)** Quanteda provides a package to interface quanteda commands into the tidyverse. More specifically, this is a package that extends dplyr to account for some of the quanteda type [[Natural Language Processing (NLP)|natural language processing]] commands. Let's take a look at how this actually works. In line 11, I bring in quanteda and then in line 12 I bring in quanteda.tidy. We're ready to write an example. In line 15, I've set up a similar command to what I've done with the standard quantity package. But using tidyverse syntax. You'll notice at the end of line 15 is the percent greater than percent, which is a pipeline from one command to the other and is very familiar to tidyverse users. The way to read this is by starting in line 15. And what it says is use the data in data underbar corpus inaugural, pipe it to filter and only allow years that are greater than 1950 to pass through to a range which is in line 17, and this says arrange by party. Then pull a president. Let's see what happens when we run this. In the console, you can see that we have a list of president names. And this is because we've filtered all of the president names that were greater than 1950.
>
> **[1:32](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/use-dplyr-with-quanteda?u=76281980&t=92)** You'll notice that Washington, for example, is missing because Washington was prior to 1950. I've set up another example in line 20, 21, and 22. In this case, you can read this as create a new SampleCorp object. Into it placed the result of starting with the data corpus inaugural pipelined through distinct president and then pipelined through mutate. Bring in the first words with a substring at stop and start of 20. Let's go ahead and run that and then take a look at the first words in newSampleCorp. And what you're seeing is the first words of every speech by president. Again, quanteda provides a package called quanteda.tidy that provides a way to interface between quanteda and the tidyverse.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Code Identifiers:** newsamplecorp (1)
> **Analogies:** for example (1)


### 19. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Your next steps in NLP](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/your-next-steps-in-nlp?u=76281980&t=1)** We've been talking about quanteda, one of many [[Natural Language Processing (NLP)|natural language processing]] frameworks and packages written for R. You might be interested in two other packages. In particular, look at TM and tidytext. And there is always the R CRAN task view for natural language processing. Be sure to familiarize yourself with this comprehensive list of available tools. Of course, [[Text Mining]] and natural language processing can be done in multiple languages, not just R. [[Python (Programming Language)|Python]], for instance, has a collection of NLP tools, and some NLP libraries work across multiple languages. There are web API solutions from all of the major Cloud providers as well as other technology APIs. Mastering natural language processing is just like any other skill. The more you use it and practice, the better your results will become. So thanks for joining me in this course on using Quanteda for Natural Language Processing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Text Mining]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** nlp (2), cran (1), api (1)
> **Analogies:** for instance (1), just like (1)
> **CLI Commands:** python (1)


### 20. Capstone Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Project introduction](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-introduction?u=76281980)

#### [Project explanation](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=1)** - [Instructor] I hope you found this project to be challenging. It's a real-world problem, and like-real world problems, it doesn't come with a simple solution, or guidance to the correct answers. In past lessons, I've provided clean R code that illustrates a concept removing anything that doesn't illustrate that basic concept. In this project, I've included files showing the experiments I wrote and abandoned. Real-world research involves making some guesses, then having the depth of knowledge to switch methods if the first tactic isn't working. Take a look at the file labeled Mastodon Experiments. You'll find a messy file, where I first started work with the TM package, but then realized dealing with hashtags and punctuation would require some complex regular expressions. You'll see I switched to quanteda, because much of the code for working with hashtags was already part of the package. Switching made the task much simpler. Now take a look at the file titled Final [[Climate Change]] in Mastodon.qmd. This is a copy of the outline I provided for you earlier, but with code I wrote and cleaned up for publication. Let's step through the chapters in that document, starting with the segment labeled Results. If you studied the file
>
> **[1:36](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=96)** titled Explore Mastodon.r, in the Climate Change Experiments Folder, you already know I'm using quanteda. It's not the only way to address the project, but for me, it was the most direct. You may have decided to use TM or tidy text. In the tidyverse, all of these are valid tools. I'm also choosing to build code using the forward pipe command, as well as lambda functions. These may not be familiar, so I suggest you refer to lessons in my other course, R for [[Data Science]], Lunch Break Lessons. You already know how quanteda works, so I'll only review some of the highlights of the code. Let's start with the code block labeled Get Hashtags. You'll see I've built a corpus, then a document frequency matrix, and then used the dfm_keep function to only keep hashtags. In the next code block, I display the 10 top features. In other words, the top 10 hashtags. With quanteda, this is all pretty simple. Study this code chunk, then look at the following questions. You'll see the remaining solutions are very similar to the first solution. There are only minor changes towards the end of the pipeline to account for the particulars of each question. I hope you found this useful. I'm sure you found it challenging.
>
> **[3:10](https://www.linkedin.com/learning/complete-guide-to-nlp-with-r/project-explanation?u=76281980&t=190)** This course and this project is an advanced example. I have provided only the briefest of explanations, leaving it to you to learn by studying my work. R is an advanced language, as you well know. It provides in-depth tools for [[Natural Language Processing (NLP)|natural language processing]], but these require study. I encourage you to accept the challenge of improving your skills with natural language processing using the R language.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Climate Change]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Data Science]] (1)
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