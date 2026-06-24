---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: vector-databases-in-practice-deep-dive
url: "https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive"
duration_minutes: 110
duration: 1h 50m
level: Intermediate
updated: 3/20/2024
learners: 15873
skills:
  - Database Development
  - Vector Databases
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/vector-databases-in-practice-deep-dive-4513162"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQExzIHfNrjPEw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710796088760?e=2147483647&amp;v=beta&amp;t=zPT5HbEEOP1hqMzL_wzXM5L6Kg2qzovDoTUdf0o0tLo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Vector Databases Professional Certificate by Weaviate](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Vector%20Databases%20Professional%20Certificate%20by%20Weaviate.md)'
  - '[Explore AI for Data Engineering](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Explore%20AI%20for%20Data%20Engineering.md)'
  - '[Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)'
prev_courses:
  - '[Introduction To Ai Native Vector Databases](Introduction%20To%20Ai%20Native%20Vector%20Databases.md)'
  - '[Introduction To Ai Native Vector Databases](Introduction%20To%20Ai%20Native%20Vector%20Databases.md)'
  - '[RAG and Fine-Tuning Explained](RAG%20and%20Fine-Tuning%20Explained.md)'
next_courses:
  - null
  - '[GraphRAG Essential Training](GraphRAG%20Essential%20Training.md)'
  - '[Generative AI- Introduction to Large Language Models](Generative%20AI-%20Introduction%20to%20Large%20Language%20Models.md)'
path_nav: '[{"path":"Vector Databases Professional Certificate by Weaviate","position":2,"total":2,"prev":"Introduction To Ai Native Vector Databases","next":null},{"path":"Explore AI for Data Engineering","position":6,"total":8,"prev":"Introduction To Ai Native Vector Databases","next":"GraphRAG Essential Training"},{"path":"Master Retrieval-Augmented Generation (RAG)","position":2,"total":7,"prev":"RAG and Fine-Tuning Explained","next":"Generative AI- Introduction to Large Language Models"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/database-development
  - skill/vector-databases
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Vector%20Databases%20in%20Practice-%20Deep%20Dive.md)

![Vector Databases in Practice: Deep Dive](https://media.licdn.com/dms/image/v2/D560DAQExzIHfNrjPEw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1710796088760?e=2147483647&amp;v=beta&amp;t=zPT5HbEEOP1hqMzL_wzXM5L6Kg2qzovDoTUdf0o0tLo)

# Vector Databases in Practice: Deep Dive

> Vector databases and their uses are transforming how we work. They are fundamentally changing how data is stored, managed, and retrieved through their deep integration with AI models. In this course, learn practical, end-to-end skills on how to build and use vector databases. Instructor Joon-Pil Hwang guides you through building an application that is primarily powered by a vector database, taking

> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive) | 1h 50m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The power of AI-powered vector databases](#the-power-of-ai-powered-vector-databases)
- [**1. Search Functions in a Vector Database**](#1-search-functions-in-a-vector-database) (10 videos)
  - [A high-level view of vector databases](#a-high-level-view-of-vector-databases)
  - [What you can do with vector databases](#what-you-can-do-with-vector-databases)
  - [Get set up for the course](#get-set-up-for-the-course)
  - [Keyword filtering and keyword searches](#keyword-filtering-and-keyword-searches)
  - [Vector searches](#vector-searches)
  - [Searching with filters](#searching-with-filters)
  - [Hybrid searches](#hybrid-searches)
  - [Retrieval augmented generation](#retrieval-augmented-generation)
  - [Challenge: Vector database queries](#challenge-vector-database-queries)
  - [Solution: Vector database queries](#solution-vector-database-queries)
- [**2. Building a Vector Database**](#2-building-a-vector-database) (8 videos)
  - [Create your own database](#create-your-own-database)
  - [Work with Weaviate](#work-with-weaviate)
  - [Create an object collection](#create-an-object-collection)
  - [Basic data import in Weaviate](#basic-data-import-in-weaviate)
  - [Establishing relationships with references](#establishing-relationships-with-references)
  - [Recap: Building a vector database](#recap-building-a-vector-database)
  - [Challenge: Add another object collection](#challenge-add-another-object-collection)
  - [Solution: Add another object collection](#solution-add-another-object-collection)
- [**3. Building a Vector Database-Powered App**](#3-building-a-vector-database-powered-app) (7 videos)
  - [Web apps and vector databases](#web-apps-and-vector-databases)
  - [Create a basic app](#create-a-basic-app)
  - [Connect the app to Weaviate](#connect-the-app-to-weaviate)
  - [Parsing query responses](#parsing-query-responses)
  - [Recommendations with RAG](#recommendations-with-rag)
  - [Challenge: App enhancements](#challenge-app-enhancements)
  - [Solution: App enhancements](#solution-app-enhancements)
- [**4. Making a Vector Database Work for Your Data**](#4-making-a-vector-database-work-for-your-data) (6 videos)
  - [Messiness of real data](#messiness-of-real-data)
  - [Pre-processing text for vector databases](#pre-processing-text-for-vector-databases)
  - [Chunking longer texts](#chunking-longer-texts)
  - [Chunk Wikipedia articles](#chunk-wikipedia-articles)
  - [Challenge: Import Wikipedia data chunks](#challenge-import-wikipedia-data-chunks)
  - [Solution: Import Wikipedia data chunks](#solution-import-wikipedia-data-chunks)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue learning about vector databases](#continue-learning-about-vector-databases)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The power of AI-powered vector databases](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=0)** - AI technologies are transforming how all of us work and [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) at the forefront of this transformation at the infrastructure level. They are fundamentally changing how data's stored, managed and retrieved through their deep integration with AI models. Hi, I'm JP. And in this course, you'll learn practical end-to-end skills which will take you all the way from database creation to usage and even app integration. You'll be using keyword, vector and hybrid searches to find the right data faster. And you'll be applying retrieval augmented generation, which makes [Generative AI Tools](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI%20Tools.md) even better by grounding them with your data. Join me here and by the end, you'll have built a search and recommendation web app that is powered by a vector database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1), [Generative AI Tools](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI%20Tools.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - ai (1)


### 1. Search Functions in a Vector Database

[↑ Back to Table of Contents](#table-of-contents)

#### [A high-level view of vector databases](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=0)** - [Lecturer] So what is a vector database and how are they different from other types of [Databases](../../Skills/Software%20Development/Databases.md)? At a very high level, a vector database is a type of database that is capable of organizing data by their meaning. This allows a vector database to perform searches, to find database entries that are most similar to the search query. For instance, let's say you search a vector database containing words for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) cat. Using a vector search, the results would not only include the word cat and derivative words like cats, but also words with similar meaning like kitten, lion, jaguar, and so on. And if you searched a vector database containing paragraphs for the phrase history of computing, the top results would include those most relevant to this idea or concept of history of computing. You'll notice that these results don't necessarily include the same words that were used for search, and yet our vector database was able to identify those results as relevant. This is what vectors allow. Vectors capture or represent meaning as a series of numbers, and that goes for a word like cat, sentences, paragraphs, or even other media. These representations work a little bit like how different systems like RGB or CMYK systems represent colors. An RGB representation of a color is a set of three numbers, like 255, 0, 0 for red,
>
> **[1:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=95)** or 65, 105, 225 for royal blue. By changing each of these three numbers like a dial, we can represent any color that we'd like to. And if we plot colors in three dimensions according to these numbers, similar colors magically end up next to each other. [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) extend this idea, but instead of three dials, we have hundreds of dials to represent more nuanced meaning. And these vectors are used to find object with similar meaning, just like how similar colors can be found by similar RGB values. This ability to deal with data by their meaning provides vector databases with tremendous power and flexibility, as you'll see throughout the course. And of course, vector databases can make use of traditional searching tools as well. Vector databases can, for example, perform keyword filtering and keyword searches for use cases where the exact matches matter. These can also be combined with vector search capabilities as you'll see later on. So at a high level, vector databases catalog and retrieve information based on the concept of vectors. And vectors represent an object's meaning as a series of numbers, which is the idea at the heart of this technology.
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=180)** - Now, these capabilities are very exciting, but might also sound a little bit abstract at the moment. But don't worry, in the upcoming videos, you'll see all of these capabilities and more in action. So let's get into it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** cat (3), find (2), make (1)
> **Env Vars:** rgb (3), cmyk (1)
> **Definitions:** is a  (3)
> **Analogies:** for instance (1), just like (1), for example (1)
> **Speakers:** - [lecturer] (1), - now (1)

#### [What you can do with vector databases](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=0)** - [Presenter] Before we get really hands-on, let's talk a little bit about what [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) can do. Being a type of database, they can, of course, manage data. That means being able to create new entries or objects as well as being able to read, update, and delete existing objects. And they can perform keyword searches and filtering just like many traditional [Databases](../../Skills/Software%20Development/Databases.md). But vector databases can do other things to get value out of your data, more specifically, by leveraging modern AI technologies. These capabilities include additional types of search and integration with [Generative AI Tools](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI%20Tools.md). Vector databases can perform vector searches and hybrid searches as well using something called a vector index. A database index is similar to an index in a book or a library catalog. It's a store information for where to find the actual data. And just like a book index or a library catalog, a database index helps you to find the information faster because you don't need to look through the actual data. We learned earlier that vector database is organized data by meaning. This is what a vector index is. And just as a good book index gets you to the right page faster, a good vector index enables fast, high-quality vector searches, even for truly big datasets with billions of objects. And some vector databases
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=94)** can perform hybrid searches as well. A hybrid search performs both a vector search and a keyword search separately, and combines the results to produce the final results set. This often produces a best-of-both-worlds output. The keyword search looks for exact matches, which is great for when, say, using domain specific words or key phrases. Then these results are complemented by the vector search, whose results are based on the degree of similarity between the input and the database objects. And last, but not least, some vector databases can perform [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) or RAG. This is a very powerful tool that combines the use of a large language model with data retrieved from the database. This helps to ground the model with reliable, valuable information, and that grounding in turn gives the model clear and accurate context to perform the requested task with. As with all the other features, you'll see this in more detail later on. RAG is a very powerful and important tool for many, especially as [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) continue to become even more capable. As you can see, there's a lot that vector databases can do to help you find the right information faster. So let's get you set up to try these tools out yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (6), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Generative AI Tools](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI%20Tools.md) (1), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **CLI Commands:** find (3)
> **Analogies:** just like (2), similar to (1)
> **Env Vars:** rag (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### [Get set up for the course](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=0)** - [Instructor] Before we go further, let's get set up with the tools and resources that you'll need for the course. The main tools that we'll be using are [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) for our programming, [Weaviate](../../Glossary/Service/Weaviate.md) as our vector database, and the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) for their various AI models. So here, we'll set you up with Python and the related tools, an example script to connect to Weaviate, and an OpenAI API key. Let's start by getting set up with Python. This is going to depend a lot on your system, but I recommend following the official Python documentation and installing Python 3.10 or newer. Once you have Python installed on your system, I recommend working with a virtual environment. If you're using a Mac, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), or even [Windows](../../Glossary/Service/Windows.md) with WSL, you can do this by navigating to your working directory and running a command like this. This runs the venv script, which will create a virtual environment in the .venv subdirectory. Then you can activate the virtual environment with this command. Then you can install your desired libraries into the environment. We'll install the Weaviate Python client and these other libraries, which will be used throughout the course. Additionally, I recommend using an IDE for development. Personally, I use VS code, which is free on open source, but you can use any others. We'll also need access to some AI models, one to generate vectors
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=94)** and another which will be a large language model. You can use any number of different models for this. With Weaviate, you could use local models or services like, Cohere, [HuggingFace](../../Glossary/Service/Hugging%20Face.md), and so on, but for the course, we'll be using OpenAI's models. Let's go to the OpenAI website, sign up if you haven't, and then create a new API key. Once you log in, you can go to the API keys tab, like so, and click on this button. Give it a name. This is just for you to keep track of the different keys, and then make sure to save the key, for example, in a password management application, as you won't see it again. Now, let's make sure that we can also run our code examples. Navigate to the project repository, which you should have cloned, and then, open this file. For now, we'll use this function, which provides the details for connecting to our demo database. You should replace this part here to update that with your own key. And if you run this file, it should print this success message without any errors. You will also see this function be used in other places for convenience, and don't worry, you'll get to build your own database as well. From the next video onwards, you'll start to see some code examples, and as you get started,
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=186)** if you don't fully understand everything in those snippets, that's okay. You can always look up the correct latest syntax from the official documentation. For now, aim to get a high level understanding of what the key parts of the code are doing and experimenting by changing small parts of it, as we'll be suggesting throughout the course. Well, you should now have your coding environment set up, have an OpenAI API key, and be able to connect to our demo Weaviate server. Next, let's start to put those tools to use, starting with searches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (7), [Weaviate](../../Glossary/Service/Weaviate.md) (5), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **CLI Commands:** python (7), make (2)
> **Env Vars:** api (5), wsl (1), ide (1)
> **Prerequisites:** set up (3), install (2), you'll need (1)
> **UI Navigation:** go to (2), click on (1), navigate to (1)
> **Versions:** python 3 (1)
> **Cross-References:** next video (1)
> **Tools:** vs code (1)

#### [Keyword filtering and keyword searches](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=0)** - [Instructor] Let's dive in to explore some of the things you can do with [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). Why don't we start by taking a look at searches in practice? After all, searches are what the end users will be doing the most often to find the right data. Let's begin by looking at keyword filters and keyword searches. As the name suggests, a keyword search or filter looks for the exact keyword or keywords in the data, but these two concepts are slightly different from each other. Filters are about reducing results, whereas searches rank them. Let's take a closer look, starting with filters. A keyword filter simply reduces the number of results based on whether it matches the provided criteria or not. Let's try it out with a query on our demo database, using a synthetic data set of movies. These movies don't actually exist, but I promise they're just as fun and interesting as a real movie data set. This code snippet will [Fetch](../../Skills/Web%20Development/Fetch.md) objects from our collection of movies for those containing the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) love in the description, returning a maximum of three movie objects. And if we take a look at the results here, we do indeed see that the word love appears in each of our return results. In other words, a filter provides a set of conditions to match against. All it does is determine whether to include or exclude objects in the results. You can try out these filters yourself
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=94)** in the included code example. Try varying the keyword used in the filtering examples, and note how the response changes. Next, let's take a look at keyword searches. A keyword search is similar to keyword filtering in that they both use a specific word or words to compare against. Having said that, there's a big difference between a keyword search and a keyword filter. Unlike keyword filtering, which simply evaluates whether a database object meets the given criteria, keyword searching produces a score indicating how relevant a result is to the query. So a keyword search for the string "love" will not only look for the objects containing the word "love," but also a calculate a score indicating how significant the term love is in its object. This code snippet will look for entries in our synthetic movie database containing the word love, but also score them, again, based on how significant the word is. Now if we take a look at the results, we once again see that the word love appears in each of our return results. But notice that the top results are different here from what they were before. And also notice these numbers. That's us showing the results score on the screen. You'll notice that the score decreases for each item down the list. The decreasing scores indicate the declining relevance of each result. This is because a keyword search ranks results based
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=187)** on the score value. The exact algorithm used to produce the score is called BM25F. The intuition behind this algorithm is that it measures how significant these terms are in the target documents. We won't go into the exact details of the algorithm in this video, but we've included further resources where you can find out more about them, if you're interested. And also try out keyword searches yourself in the included code examples by varying the query and also this limit parameter. We would also encourage you to read the doc strings, which you can see by hovering over the function, for example. So, that was an introduction to keyword filters and keyword searches. Remember that filters include or exclude objects based on certain criteria, and keyword searches rank results based on their score. Note that there are other types of filters too, in addition to keyword filters. You'll see them later on. These techniques allow for precise control over what comes back, and as a result, they are great, complimentary tools to the more forgiving, fuzzier domain of meaning based vector search that you'll see next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (7), [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** find (2)
> **Definitions:** in other words (1), is called (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** bm25f (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Vector searches](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=0)** - Let's take a look at vector searches. As we talked about before, vector searches are all about similarity between meaning as represented by vectors. Recall that we talked about analogies to colors with similar RGB values. [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) allow us to capture meaning as vectors, which are just a series of numbers, and then perform fast, accurate searches based on how close they are in meaning to each other. This probably still seems a little bit abstract, so let's turn that into something more concrete by exploring examples of vector search. This query here will search our vector database for objects most similar in meaning to this search string. For example, if we run this query and look at the results, at a first glance, they all look relevant to query and probably quite similar to what we saw before with keyword search. But something interesting is happening here. Let's do another vector search this time for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) amorous. You'll see that we can do that with the same code as before, just with a different search string. And interestingly, when we look at the results, they are very similar. Even though the word amorous doesn't appear in any of the results. How did that happen? Well, the answer is vectors. Because vectors represent meaning, the vector database was able to follow the intent of the query regardless of the actual word that was used.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=96)** In fact, these models that produce vectors can do a lot more than understand individual words. When we perform vector searches for queries like adventure movies set in outer galaxy and look at the results. These search results are very much relevant to our query. The title and the description of the top results match our search query criteria almost perfectly. Even though, as before, the exact words don't really appear anywhere. It's pretty amazing, right? And that's just a small flavor of what you can do with vector search. Some vectorizing models can even vectorize across multiple languages. So you could search Japanese text with a French query or vice versa. Others can work with data in multiple modalities. For example, with images and text. In those cases, a search using images might be able to [Fetch](../../Skills/Web%20Development/Fetch.md) text that best matches its description and again, vice versa. The key idea, again, is that vector searches allows to search these objects by their key concepts or meanings. You can try out vector searches yourself using the included code example. Try varying the search term here and note how the results change. You can try using individual words or longer queries, like sentences or even paragraphs. I think trying these out will improve your feel for how vector search works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Analogies:** for example (2), similar to (1)
> **Cross-References:** we talked about (2)
> **Env Vars:** rgb (1)
> **Speakers:** - let (1)

#### [Searching with filters](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=0)** - [Instructor] So far, you learned about filters and different types of searches. But what we haven't mentioned yet is that these two can be combined. This approach lets you precisely narrow down your scope before looking for the best results within them. As you can probably imagine, this is a common scenario like searching in a particular publication or searching for particular publications by an author. So let's take a look at this workflow in practice. We covered keyword filters earlier, with syntax like this, which include or exclude results based on a set of particular criteria. These criteria can include looking for exact or partial matches, as well as conditional matches like whether any or all of a list of strings are matched. And filters can be actually constructed more broadly based on many other types of data. You've seen that you can filter by keywords. You can also filter by range of numbers in a particular property or by the [Metadata](../../Skills/Web%20Development/Metadata.md). Metadata might include things like object ID, object creation date, or whether a particular property is null, as well as many more. So filtering is quite a flexible, yet precise tool at your disposal. Here's an example: Let's say you're hosting a trivia night and have a movie category. You might decide that you don't want to make the questions too difficult, so you want to look at particular year ranges,
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=94)** let's say 1990 or newer, and you want to pick science fiction movies as your friends are really into that genre. Here, the year is a perfect candidate for a filter because we have exact criteria to match. So we can construct a filter to only look for year values equal to or greater than 1990. Now let's consider the search to combine with our filter. What search type would be appropriate here to find science fiction movies? Would you say use a keyword search or a vector search? In my opinion, I would try a vector search. That's because what we're looking for is the general idea of a science fiction movie, and we don't really mind if the writer used different words. So, what do we get if we run the search? Well, it looks like the query returns some fun sounding sci-fi movies all from the year 1990 or later. To repeat the filter is the part that's defined the allowed years and the vector search sorted the results by how well they matched the meaning of science fiction. While we showed the simple example here, we can construct more nuanced filters as well. For example, you can combine multiple filters with AND or OR operators denoted by ampersands or pipes in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) client.
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=187)** You could, for example, require that results be from earlier than a particular year, or that description to contain a particular [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). Using filters with a search is a versatile technique that lets you control your search domain with precision before carrying out the search. Note that this is different to hybrid search, which combines a vector search with a keyword search, and we'll see exactly how they work up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** we covered (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Hybrid searches](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=0)** - [Instructor] A hybrid search is a really interesting best-of-both-worlds type search. A hybrid search actually involves a vector database performing two searches under the hood. Those two searches being a vector search and a separate keyword search. Then the hybrid search fusion algorithm will cleverly combine the two sets of results from those searches to produce one final set of results. It sounds relatively simple and in some ways it is, but it has very high utility. In fact, many of our users tell us how useful they find it for their particular real-life applications. So now let's take a look at a few examples of hybrid search. You can perform a hybrid search with just one search query like we do here for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) stellar. And if we perform the search, we see those results come up. You'll notice that the top result includes the exact word used in the query while the others do not. Of course, that could still happen in a vector search. So why don't we dig a little bit deeper into our results? Let's update our search query to retrieve the score and explain score [Metadata](../../Skills/Web%20Development/Metadata.md) and see what that tells us.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=86)** First, let's inspect the score. The score is a measure of how well that object meets the search criteria like the BM25 score, and here you'll also see the explanation of the score. This shows us what hybrid search does. What we're seeing is that the top result did well in the vector search as well as the BM25 or the keyword search. Remember that BM25 is the specific keyword search algorithm that we're using, and because hybrid search combines two searches, the vector and the keyword searches, the results are weighted relative to each other based on a parameter. Alpha is adjustable by the user. You can adjust it to tune whether you want the hybrid search to act more like a keyword search by moving alpha towards zero or more like a vector search by moving alpha towards one. To demonstrate, let's try the same search with the alpha of zero, which is a pure keyword search. Now here, as you might expect, the only results that now come up are the objects that contain the exact word of which there's just the one. You can try the same query yourself with a keyword search syntax, and the results here should be identical to our query here where the alpha is set to zero. Hybrid search is a very practical tool that we see quite a lot in the wild. Of course, there's no best or one-size-fits-all search type, but hybrid search can work very well
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=180)** with real-life datasets by providing a balanced approach. Because it combines the two complimentary search types and allows you to weight them with the alpha value, we often see this capability being adopted as the favorite search type. As always, please try it out, including trying different queries and alpha values to see what happens. Next, we'll take a look at retrieval augmented generation. This is where we can go beyond simple data retrieval by combining data with the power of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Definitions:** is a  (4)
> **Env Vars:** bm25 (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Retrieval augmented generation](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=0)** - [Instructor] Let's talk about [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md), which combines the power of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) models with the grounding of your real data. I think many of you have probably heard of generative AI models. For example, [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) like the GPT or the [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) models that can produce human-like text. These models can do all sorts of things like recite the capital of Australia, explain how gravity works, or even write a haiku about toothbrushes. These models can do it all. In fact, they've even been shown to perform relatively high levels of reasoning or deduction as well. But as amazing as they are, they're not quite perfect. They often fall short by confidently producing answers that are either out of date or just simply incorrect. These are often called hallucinations. One key reason for this is that the data used to produce or train these models can go out of date or simply not be available. Facts like the population of Australia change over time and some proprietary data like customer data or company information may not have been available to the model in the first place. This is where retrieval-augmented generation or RAG comes in. RAG remedies this problem by retrieving relevant data and then providing it to the AI model along with a prompt. So let's take a look at a few examples of RAG queries. Here's an example syntax for RAG.
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=94)** This query will search for objects most similar to science fiction and then perform the task, which is to summarize each description. Look at that, the models returned well-written summaries of the description like we asked. And if you think the query syntax here looks familiar, you would be correct. Here's an equivalent search-only syntax. Just above the RAG query. You'll see that the only differences are the sub-module name here and the prompt that's provided with the RAG query. The thing is RAG is a two-step process. The first is a search, just like any of the searches we've just learned about. And then we can send some of the search results along with a prompt to the AI model for it to base its answer on. Let's try another one. Here's a RAG query where we find objects related to science fiction. We then pass a group task prompt to say, "Extract some of the key common themes in these movies." And if we take a look at the generated output, you'll see that the model has produced quite a good answer. And it was able to do that even though the data is synthetic and available only to us. This is enabled by retrieving the data from a proprietary data source and sending it to the model. RAG is a powerful two-step process, combining search or retrieval with generation.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=189)** RAG can address generative AI models' potential shortcomings like hallucinations or simply not having the right data available to it. So as such, RAG is a really exciting area that's transforming how we think of data and deal with it. So of course we'll be expanding on the idea further as we go on in the course as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (3), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (1)
> **Env Vars:** rag (11), gpt (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Vector database queries](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=0)** - [Instructor] For this first challenge, you're going to put your querying skills into practice by writing your own [Database Queries](../../Skills/Software%20Development/Database%20Queries.md). To get started, open up this [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) script, which provides some code to help you get on the way. The provided code here connects to the database, gets the movie collection, and then fetched a couple of objects before displaying the results on the screen. The first query will be a hybrid search on a collection called, Review. This collection has just the one property called, body. And the query string can be any text you'd like to search for in a movie review. As a starting point, maybe I'd suggest a phrase, fun for the whole family, but again, it can be anything you would like to search for. Try this with two different alpha values, 0.1 and 0.9, and see if the results differ at all. If they do, if they don't, consider why they might be. And retrieve the top three results only, which should be sufficient for this exercise. The second query would be a RAG query on the Movie collection, and we'll do that with a vector search for the string, action adventure. Grab the top five results, and then prompt the language model to generate a tagline for each movie based on the movie's title and description properties. And, of course, for each search, display the relevant parts of the response so that you can inspect them. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Database Queries](../../Skills/Software%20Development/Database%20Queries.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Versions:** 0.1 (1), 0.9 (1)
> **CLI Commands:** python (1)
> **Env Vars:** rag (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Vector database queries](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=0)** - [Instructor] Okay, let's now take a look at how I implemented those tasks for the challenge. The first task was to perform a hybrid search on the review collection. So first of all, I got the review collection like so, so that we can interact with it. Now I know that I need to run two queries, so let's set up a for loop here with two alpha values. And then of course, I'm running a search. So I'll look in the query submodule for the hybrid method, where my query here is "fun for the whole family". We'll provide the alpha value from our loop, and then limit the number of results to three. I would also like to get the score [Metadata](../../Skills/Web%20Development/Metadata.md), so I'll specify the return metadata parameter and use the metadata query class. And then with the response, I've written a note here to display what the alpha value used was, so I can see it in the results before iterating through the objects and displaying the review body, as well as the metadata score. And when we run this code, I get these results for each alpha value. And what did you think of these results? For me, the second set of results with the alpha of 0.9 matches the intent of my search better, which was looking for movies that talked about enjoyment
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=93)** for the family, as in family friendly movies. Now the alpha value of 0.9 very much lends the result towards vector search. So it makes sense that these results align with my general meaning of the phrase of the query, but of course, your mileage may vary depending on your search string, intent, and the data set itself. Now let's have a look at the second task, which was to construct a RAG query. We were instructed to use the movies collection. So we'll use the movies object, and it's a RAG query, so we'll use the generate submodule. And it's a vector search, which means we need to use the near text method with action adventure as our query string. Now our task was to generate a tagline for each movie. As a result, the RAG task to use here is single prompt, that will act on each individual object and send the object to the language model with the query. So here's the prompt that I came up with. Here, I ask the language model to suggest a tagline for this film based on the title and the description. And I break down what the title is, as well as what the description is. Just a reminder, again, this is a template for [Weaviate](../../Glossary/Service/Weaviate.md) to replace these variables within the braces, within the collection property. This is not a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) F-String. The results can then be printed out with something like this. We'll have a heading for generated results. And for each object, we'll print out the movie information,
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=187)** including the title and the description that the language model would've based its answer on before showing the generated tagline. And of course, we should remember to close our client connection as well. And now if we run this code, we're seeing the results for the earlier query as well. And then we get our generated taglines. So for the movie The Enchanted, we get a tagline like "Embark on enchanting journey" . And for Galactic Odyssey, we get the tagline, "Embark on an ultimate space adventure to save Earth". How does yours go? New results will probably differ from mine for a couple of reasons. One is that [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) are not deterministic. And of course, your prompt probably differed from mine in some way or another, but hopefully you arrived at a similar query syntax as they did, and your language model was to generate a tagline that made sense in the context of the given information. So that's your first challenge down. If you can write queries like these, you are well in your way to making great use of [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). But you might also be wondering, "Hey, how did the data get there in the first place?" Well, that's exactly what we're going to explore and work on in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Weaviate](../../Glossary/Service/Weaviate.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1)
> **Env Vars:** rag (3)
> **Versions:** 0.9 (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 2. Building a Vector Database

[↑ Back to Table of Contents](#table-of-contents)

#### [Create your own database](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=0)** - [Instructor] So far, we've been learning by running queries on our pre-populated demo database, but you probably know that there's no substitute for building something yourself. Well, in this section, you'll get to do just that. You'll get to create your own vector database instance, populate it with data, and run queries on it. You can even use it to build a web app with it in the next section. First, let's start with a database creation step. At its core level, deviate is a free open source database software library, but it is packaged and offered through multiple installation or deployment methods to meet different users' needs. For this course, we'll use a cloud-based managed solution called [Weaviate](../../Glossary/Service/Weaviate.md) [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). The free tier should be more than good enough for us, so let's do that. This will let us focus on the course and not about managing any [Hardware](../../Topics/Hardware.md) or infrastructure concerns, but if you do have another preferred method like running a [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster, please feel free to do so and come back. You'll find the required information in the official documentation. For those of us continuing with WCS, let's go to the address shown below to create our database. If you are watching this later on, what we're doing is to create an account to log in and to create a Weaviate eight instance to use. Even if the interface has changed. These steps should still be generally applicable. You probably don't have an account just yet.
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=93)** You can create one by clicking on this button right here. I do have an account, so I'll just log in here using my email address and password. Once you've logged in, all you need to do to create a new database is to click this create cluster button and follow the prompts. I'll select the Sandbox tier, which is free with a limited lifetime. Now, if you provide a cluster name like my Learning Vector database and click create, you should be good to go. That will spin up a Weaviate eight database server in just a minute or so. Once that's ready, you can click here to see cluster details like the URL and where to find your secret API key for this server. So just like that you've set up your first vector database. Next, let's connect to your own database with a similar connection script to one that you saw earlier. Let's open utils.py again in our code editor. Here, you'll notice this connect to my DB function. You can now set up this function to connect to your own database. To do that, replace the cluster URL with the one that you find on the console like so, and also the API key that you can find here on the console.
>
> **[3:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=181)** Lastly, remember to update the open AI API Key, as you did before. Now, if you open up this file and just simply run it, you should see it return true in the console. Excellent, you are now a proud owner of a Vector database. Next, we'll start to work with it by showing you a little bit more about how to interact with it using the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) client before going on to populate it with some actual data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Weaviate](../../Glossary/Service/Weaviate.md) (3), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** api (3), url (2), wcs (1)
> **CLI Commands:** find (4), python (1)
> **Prerequisites:** set up (2)
> **File Paths:** utils.py (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### [Work with Weaviate](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=0)** - [Instructor] Now that you've got a [Weaviate](../../Glossary/Service/Weaviate.md) database instance set up, let's talk a little more about how to work with it. Weaviate's actually configured with many [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) endpoints, which you can access directly. For example, I can browse for the URL of a WCS instance and get this response, reassuringly telling me at the server's running, at least. But if we try any of these links that are shown on the page, the server refuses to show us the contents as I'm not authorized. That's good. We want our database to be access controlled for security. This is why we used an API key in our earlier code examples to authenticate ourselves. Authentication with a username and password is also supported, but we'll stick to using the API key for our course. And since it's likely that you'd be working with Weaviate using a client library, let's continue to look at what else we can do with the client. You've seen code examples like this earlier when we looked at queries, but now let's take a little more time going through it in detail, starting with this import statement. What we're doing here is to import the necessary classes that the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) client provides for typing. We'll use quite a few of them, so we import them all as wvc here for convenience. You'll see it used throughout, like here, when we specify what [Metadata](../../Skills/Web%20Development/Metadata.md) to retrieve. And just above, you see this statement. A collection of objects in Weaviate is like a table in [SQL](../../Skills/Data%20Science/SQL.md).
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=96)** Here we create a Python object for interacting with the movie collection, whether it be data operations like creating, updating, and deleting objects, running queries like keyword, vector, and hybrid searches, or expanding on them with RAG requests. Having typed objects help us out with responses as well. When we run this search query, the response is structured so that you can get code completion as you work. For example, the response has an object attribute for the results set, with each one having attributes like properties, metadata, references, and so on. This particular example prints the properties and the vector distance metadata that we requested. You might get different object types with different attributes depending on the query, but these hints and code completions will really make your life easier as a developer. And when we're done, it's best to close the connection so that we don't have hanging connections against the server. So that's the basics of working with your instance of Weaviate. As we've said before, if you find this all to be a bit foreign, don't worry. It'll all become more and more familiar over time as you gain experience. And if you're unsure about anything, please check out the official documentation, where there'll be plenty of code examples on the latest syntax. Now that you know the basics of working with Weaviate, let's go into adding some data to your database by creating collections and importing data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Weaviate](../../Glossary/Service/Weaviate.md) (6), [Metadata](../../Skills/Web%20Development/Metadata.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** api (2), url (1), wcs (1), sql (1), rag (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Analogies:** for example (2)
> **Best Practices:** it's best to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create an object collection](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=0)** - [Instructor] What we need to do next is to create a framework for our data. This is also called creating an object collection in [Weaviate](../../Glossary/Service/Weaviate.md). This is a little bit like creating tables in [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). Collection definitions are where we'll define the structure of the data, like what properties each collection will contain and their data types, like whether to hold text data, numbers and so on. This is also where we'll define how the database will work with the data. This part is a little bit like choosing a set of tools. For example, we'll define what vectorizer model will be used, which generative model to use for rag applications, and how the database is going to organize or index the data for optimized queries. So when you make these decisions, just like building something in the real world, it's good to think about the end goal so that you can choose the right tools for the job. Vector database can deal with almost any kind of data, but for this course, we'll build a movie database and later on we'll even build a web app on top of it too. Who doesn't like movies, right? As mentioned before, we have a synthetic data set of movies. The data set includes a host of data for each movie, like movie title, brief description, longer synopsis, year and rating, and it even includes critics reviews for our movies. Very handy for avoiding the terrible films even if they're made up. Now let's begin to create our [Data Collection](../../Skills/Data%20Science/Data%20Collection.md). Seeing how it's a movie database,
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=93)** we'll start with the collection for individual movies, first, we'll need a name. Let's call it movie after individual objects. And then let's define how the data will be vectorized and what [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) tool to integrate with. In Weaviate this is done through the concept of modules. As mentioned before, we'll use OpenAI here, but it could be any number of different modules. You could also specify specific models, but we'll stick with the default ones for now. Next, we define properties, which are like columns in [SQL](../../Skills/Data%20Science/SQL.md). Each property needs a name and a data type at a minimum. So we'll add properties for the title and description as text. We'll also save the movie row ID so that we can easily identify them. And the movie here, these are whole integers so we'll use the INT data type. Now I know that the rating data is in decimals, so let's set that as a floating point number, which is called number in Weaviate. The last property is the director data, which is in text. This will let us filter movies by a particular director name, for example. But let's pause to consider. Does the name of the director add much to the meaning of the movie vector? For me, I would want to use this collection for just searching movies by their title and their description. So what we can do is to set Weaviate
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=186)** to skip this property when determining its vector. Commonly you might also do this with text of things like product IDs or URLs. Basically any text that doesn't contain much meaning but might just add noise to your vector, and we'll make sure to close our connection. And that's it, you can run this code to create the collection for movies on your database. Now, of course, we don't yet have any data in this collection, so let's go ahead and do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Weaviate](../../Glossary/Service/Weaviate.md) (4), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (1), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1), int (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Basic data import in Weaviate](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=0)** - [Instructor] It's time to add data to our database. In many ways, we've done a lot of the hard work already. We've created a database and created a scaffold or blueprint by defining our movie collection. All we need to do now is to load our data and pass it to [Weaviate](../../Glossary/Service/Weaviate.md) in a way that matches the collection definition. So let's take a look. What we're going to do first is to load the dataset using a library called [pandas](../../Skills/Software%20Development/Pandas%20(Software).md). This line loads our movie data from a CSV to a nice tabular format called a DataFrame. But of course, you can load your data any way you like. We'll connect to our database and then get the movie collection that we just defined. Next, we're going to create a list of data objects, one for each movie by iterating through the movie rows. Next, we'll create a list of properties. This is the data that's going on to our collection. The keys on the left match the collection property names and the values on the right are column names from our DataFrame. Then we'll generate a unique identifier, also called a UID, for each object. UUIDs are how Weaviate internally identifies objects. We'll use this helper function here to generate a deterministic identifier using the movie ID as the original source. And then we can use the data properties that we created and the UUID to create a data object instance for each movie.
>
> **[1:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=95)** Specifying an ID like this allows us to prevent duplication. Because the movie's row ID is unique, the UUID will be as well. But another important factor is that this is a deterministic or predictable way of generating IDs. And as a result, if the data changes, all we need to do is to insert it with the same UUID generated from the same movie ID. Doing so will override the data and you will not as a result have any duplication. Next, we'll append the object to our list and then insert our dataset with the insert_many method. Note the syntax here. We've used something like movies query.number times before for our searches, but now we're using movies.data. What the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) client does here is to separate functions or methods into submodules like query or data or generate to make usage easier for developers. We'll close the connection and then run this code. So when we now run this code with the insert_many method, it'll populate Weaviate with the movie data. Note that while Weaviate does so, it'll contact the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). Remember that we defined the vectorizer module earlier to obtain vectors to represent each object. You probably also remember that we provided the OpenAI API key in our connection code earlier. That's the key that's going to be used by Weaviate
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=189)** during the import to create the vectors. Now we'll run the code. It shouldn't take a lot of time. And just like that, you've built a fully functioning vector database. This means you can already run any of the queries you've learned about earlier, whether they be vector, keyword, or hybrid searches, as well as filters. In fact, I'd encourage you to try and run some of the queries you've learned about on your own database. So that's it for basic imports or object insertions. We're almost done here building our database. Before we wrap up, let's move on to references, which will let us establish relationships between collections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Weaviate](../../Glossary/Service/Weaviate.md) (5), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** uuid (3), api (2), csv (1), uid (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** insert_many (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Establishing relationships with references](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=0)** - [Instructor] So far, you've seen how to define our movie [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) as well as how to populate it, but this didn't include a common aspect of data sets, which is relationships. In real life, data objects are often related to each other in some way. A product might belong to a company, a book has an author, and a restaurant or a movie might have reviews. So how do we model these relationships? Well, that's where references, also called cross references, come in. In [Weaviate](../../Glossary/Service/Weaviate.md), references are created by defining them between collections. In our data set, we happen to have reviews for our movies. So let's model this relationship between these two collections. Each movie can have one or more reviews, of course, and when we find the movie, we would like our users to be able to see what reviews are associated with each one. We can do this by creating a reference property called hasReview that'll point each movie to its corresponding reviews. So far, we've defined the movie collection only. To implement our relationships, we'll need to add the collection definition for reviews before adding references to them from movies. This will let us retrieve reviews that are associated with each movie without directly searching for any reviews. To make this more concrete, let's have a look at some code examples. Here's one that prepared earlier, modifying our collection creation script. We'll just start by deleting our previously created data
>
> **[1:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=95)** and start again. This time through, we'll add a review collection first. It's a pretty simple collection definition with the same vectorizer and generative module configurations and just the one property for the review body. And then we come to our movie collection. Now this collection definition is identical to what we defined before, but this time we'll make a modification to specify the reference or the relationship between movies and reviews. And we'll do that by specifying a value for the reference parameter. We'll define a reference property instance with a name hasReview. And all we need to do then is to point it to the review collection by providing the name of the collection, which I've done here by reference. And that's it. If you run this code, it'll create those two collections in your database. Data import code here has been updated in the same way as well. Now instead of importing data for the one collection, we'll import data for two collections, but the import process largely remains the same. For each collection, we iterate through the movie data and import them in sets. This goes for reviews, as you see in this code block. This iteration is just so that it happens that there are three reviews here for each movie in our data set, and they're called Critic Review 1, 2, or 3. And just as before, we can add the objects by using the insert_many method.
>
> **[3:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=190)** And again, the movie import process has remained largely the same. But interestingly, you'll notice that we here loop through the review data while importing movie objects. So why might we do that? Well, that's so that we can add them as references to each movie. What we're doing here is to generate IDs or reviews in the same way as we did further above while importing the reviews. And then we create the references here to each review from the movies so that the relationships between the movies and the reviews are created when we create the movie objects. If we run the script, we'll have a full data set again, but this time with a set of reviews as well as movies that refer to them. So that's a quick tour of references. This is a more advanced topic for sure, but once again, the key thing to remember is not the syntax, but the fact that you can model relationship between data sets using references. Well done. You've built quite a fully featured database with multiple collections and references already. I think we've covered quite a lot of ground. So let's catch our breath with a very brief recap.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1), [Weaviate](../../Glossary/Service/Weaviate.md) (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** hasreview (2), insert_many (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Recap: Building a vector database](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=0)** - [Instructor] We've done a lot. We've learned how to create structure and add data to a vector database. Let's pause here to recap the steps so far, and also discuss what you can do with the database. First, you started up a new database instance with (indistinct) eight [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). This created a server that you or any other user can communicate with, given of course, the right authentication details. And then, we created a blueprint for our data. This meant creating the collections for our data with each collection definition, including the data structure like which properties and references to store. It also included how the data would be managed, like configuring modules for integrated vectorization and retrieval augmented generation. We then imported the data into our database instance according to the collection definition. In other words, building each object according to that blueprint that we defined. That meant providing the property values. And then you reference data for each object according to the collection definition. And this means that now you can perform any other searches you learned about on your own database. So, here's an example. To run queries on your own database, you can simply replace the connection script from using the connected demo DB function to connect to my DB function as I've done here. You'll be then able to run any of the existing queries on the database you've just built.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=96)** And remember that this is possible because as you imported the data, the vector database stored that data as well as creating what's called indexes to help you look through the data efficiently. What we've built so far is obviously a fairly small database, but excitingly, you now have the tools to potentially build a database with millions or even billions of objects. Given of course, the appropriate [Hardware](../../Topics/Hardware.md) resources, vector database can scale to these types of numbers while remaining performant, which is really exciting and a differentiating factor in this data rich age. And the skills to populate those larger [Databases](../../Skills/Software%20Development/Databases.md) really don't differ from populating a smaller database. Now, in the next section, let's start to put this in something a little bit more user-friendly. What we'll do is to create a friendly interface for our users by building a simple web app. There, you'll see how to create a web app that's powered by a vector database to really take this journey end-to-end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [Hardware](../../Topics/Hardware.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Definitions:** in other words (1), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Add another object collection](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=0)** - [Instructor] We are going to extend the database that you created earlier to add another collection called Synopsis. This will separately store the synopsis for each movie, which can be thought of as a summary of key ideas for each movie. So in contrast to the movie collection, whose vectors are based on the title and the brief description, the synopsis collection will allow searching by the vector of this slightly richer, fuller idea of each movie. Start by extending the collection definition in this file. As before, we provide an outline that you can start it from. The synopsis collection can have a similar structure to what you've seen before, for example, the review collection. It just needs the one property called body and the reference property for movie that'll point to the movie collection. And then we'll add another reference property to the movie collection so that for each movie you can find the corresponding synopsis as well. Take a note of this hint that says you can use the movies.config.add.reference method to create the references. I'll note that we haven't tackled this exact task before of adding references after a collection's been created. So if you get stuck, take a look at these hints and also take a look at the docstrings for any functions or methods you're not sure about. The docstrings will provide you with the help and guidance for how to use these particular functions. As a bonus task, you can also attempt to import the synopsis data
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=93)** by extending this import file. Once again, the structure for these imports will be very similar to what you've seen before with the other collections. The main difference will come from the fact that you're now working with different collections, which will have different property names and column names, but generally speaking, the overall process of looping over objects and then importing them in sets don't necessarily change. Once again, another difference might be adding references from these movies to synopsis. Take a look at these hints and the associated docstrings for these methods if you need any further guidance. Good luck and have fun.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **File Paths:** movies.config (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Add another object collection](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=0)** - [Instructor] Okay, let's now have a look at my challenge solution. We'll need to create our collection first, which I'll do with this client.collections.create method. We'll give you the name Synopsis and use the same modules as above. We'll need to create a property called body and it'll have a text data_type. So these parts are essentially identical to the review collection above. Something the review collection doesn't have is references. For Synopsis, here's one of them here. We'll call it forMovie, since this is a synopsis for a particular movie and we'll point it to the Movie collection. And that's the Synopsis collection defined. The next task was to add a reference property to the Movie collection pointing to the Synopsis collection. And our hint was to use the movies.config.add_reference method. So let's start with that. And at this point you might not have been so sure what to do next, but if you move your mouse over this method, you'll see that the argument should be of the ReferenceProperty data type. So following that, we'll add an instance of the ReferenceProperty class with the name hasSynopsis. Remember, this is for pointing from the movie to the synopsis and target the Synopsis collection. And if we now run this code, it'll redefine our collections with the difference being that
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=94)** before we had two collections for Movies and Reviews. Now you have three with Movies, Reviews and Synopsis. With this done, let's now turn to the imports. The first thing to do, of course, is then to load or get the synopsis collection. And then the process of importing the synopsis objects would be very similar to what we showed before for the other collections. So we'll create a list of objects, which are the synopses in this case, and iterate over the data rows. Now our only property is called body, and it comes from the Synopsis column. As before, let's create IDs for our Synopsis objects. Now, we could use the synopsis text to generate these, but I'm actually just going to use the movie ID here. Hey, and you might ask, doesn't that overwrite the movie objects, which will have the same ID? Well, actually, in this case, the movie items will be safe. The reason being that these synopses will be in a separate collection from the movies, and each collection is a distinct namespace. So then we can build a data object just like before with the properties and the UUID specified. Remember to add the reference here under the ReferenceProperty name for movie with the target object being the movie collection, and they'll have the same movie ID since you're now pointing to the movie object with that same ID, but again, in a different collection.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=189)** Don't forget to add the data object from each iteration to our list. And definitely don't forget to insert the list of objects into our database with the insert_many method. We've got some print statements here also to print the responses and make sure that there were no errors. And then once the synopsis objects are created, we need to create additional references that point from each movie back to each synopsis. This is done similarly to creating objects, but we'll build a list of references this time, not a list of objects. And the method that we use to insert these references will be different again, but let's go through the steps one by one. First we'll create a list of references and iterate through our data. We'll need UUIDs of the synopsis and the movie, but remember that we use the movie ID for both, and then we'll create the reference object that goes from the hasSynopsis property, but more specifically from the movie object to the synopsis object. Remember that they have the same UUID. Append the object and then add them all using the reference_add_many method. And you're done. Now running this code will add your data to the database, including the new references. Note that the Movie and synopsis collections now have what's called a two-way reference because these objects refer to each other in both directions, and that means they can be retrieved in either direction
>
> **[4:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=282)** by retrieving a movie from a corresponding synopsis or vice versa, which can be very handy. If you've come this far, well done. You should now have a database that's identical to the demo database on the cloud, and that also means you can use either of the demo or your own database to build your web app in the next chapter.

> [!info]- Semantic Content
>
> **Code Identifiers:** hassynopsis (2), data_type (1), formovie (1), add_reference (1), insert_many (1)
> **Definitions:** is a  (2), is called (1)
> **Best Practices:** don't forget (2), remember to (1)
> **Env Vars:** uuid (2)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** movies.config (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)


### 3. Building a Vector Database-Powered App

[↑ Back to Table of Contents](#table-of-contents)

#### [Web apps and vector databases](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=0)** - [Instructor] These days, web apps drive much of our activity on the internet. Unlike the classic static websites, modern web apps are powerful, interactive tools, just like traditional programs running on your local computing device. But just like a website, web apps are incredibly accessible. All you need to use a web app is an internet connection and a web browser, and this gives them great reach to a wide audience. In this chapter, you are going to build a web app that is powered by a vector database. More specifically, you'll be building a movie search and recommendation app. It's going to be able to support a variety of search methods and filters, which means you'll be able to put into practice all the skills we've learned to date. And the end user, in turn, will be able to run vector or hybrid searches and filter movies according to their criteria. But that's not all. The app's going to be able to recommend movies for its users based on what they tell the app about what they want to search and the viewing occasion. It's pretty neat, right? And to do this, we'll use the same movie database that we built earlier or the demo database. By this point, they should be identical, but if you're not sure, you can use the demo database. And we'll also use a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) framework called Streamlit. Streamlit makes it really easy to produce these data-driven web apps. Streamlit is another free, open-source Python library. Now, I know we haven't really covered Streamlit at all yet,
>
> **[1:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=95)** but don't worry, the main reason for choosing Streamlit here was for its gentle learning curve. You shouldn't need much code at all to get it to produce good-looking, functional web apps. Additionally, for this exercise, we'll provide much of the Streamlit code for you. The truth is, most of the principles that you'll be learning and applying here relate to how to work with a vector database and to produce a data-driven app. These aspects will be applicable to other frameworks, whether using tools like [Django](../../Skills/Web%20Development/Django.md) or Flask, or even tools in other languages, like Express. What's important is for you to conceptually see how a vector database can be connected to these interactive elements of a web app, how a user's inputs can be translated into queries, and how those queries and the responses can produce results that then can display back to the user. Building a web app with a vector database might seem a little bit daunting now, but I think you'll very quickly start to see that you'll already have most of the skills to achieve this very, very cool task. Well, then, let's get on with building our web app.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Django](../../Skills/Web%20Development/Django.md) (1)
> **CLI Commands:** python (2)
> **Analogies:** just like (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Create a basic app](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=0)** - [Instructor] Before we build our fully featured movie recommendation app, let's start with something smaller. Here, we're going to build a simpler app using just placeholder data. That way we can separate the task of building a web app from the task of getting it to work with a vector database. The placeholder app that we build will also work as a guide when we connect our vector database to it as well. Now, given that we don't expect you to learn a lot of Streamlit in a short amount of time, we'll go through this example step by step. This code is provided for you so you don't have to build this yourself, although you can, of course. Streamlit code generally runs top to bottom rendering elements on our browser in that order. So first we can import the library and provide a title like so. I've called it ReelRecommender. It's pretty catchy, right? And actually, we can run this app already by just going to shell and typing streamlit run, followed by the file name like this. And that should show you an app with a title just like I'm showing here. Now, since I know that Streamlit supports tabs, I've outlined the app with multiple tabs with a tabs function, and now we can add components to each tab by using a context manager with the returned objects, like I'm doing here with a search tab. Let's add a header and capture a text input using this text input function. This is an input component that'll capture
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=92)** whatever the user enters, so we can later use this query string variable for our searches. We'll also create two columns. On the first column, we'll add elements for the context manager again, and what we'll add is a radio input for the user to select a search type. On the other column, we'll add a slider input so that we can filter by ratings. This list comprehension builds a few placeholder search results with some summary data objects similar to what we might expect to see in the real data from our vector database. So we'll display these objects as well. Now since these are search results, we'll create some collapsible expander sections so that just the title is shown to begin with, and the user can expand it if they really want to see more details about each movie. We'll display our placeholder data here as though they're real. Of course, they'll be replaced with a real data from our vector database. Now, as you know, the synopsis tends to be a little bit long, so we'll truncate that so it doesn't take up too much space on our screen. Now, if you save the file and refresh the app, you should see that the app now has these three tabs and that you can interact with these elements that you've just created. Next is the movie tab. This tab is for users who want to get more details about each movie. Here we'll have an input field so that if a user enters a movie ID, they'll be shown its data.
>
> **[3:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=185)** Well, at least place all the data for now anyway. Here are the place all the data that I've created, including a full synopsis, again, hidden away on an expander. The third tab will have our AI-powered recommendations. This will take two text inputs, one for the kind of movie and the other for the context or the occasion of the viewing. And once the user enters both pieces of information, it'll perform a RAG query to provide recommendations. And of course, we'll to show the recommendations to the user. We'll also display a few details for each movie that's been analyzed by the language model. Now with those edits made and the file saved, when we refresh the app one more time, you should see each tab running and the features populated. So all we need to do now is to connect our vector database to it. And up next we'll do just that.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1), similar to (1)
> **Env Vars:** rag (1)
> **Speakers:** - [instructor] (1)

#### [Connect the app to Weaviate](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=0)** - [Instructor] Although we've built an app with our desired layout, it's not quite ready for use, and that's because it only displays up placeholder data, and these inputs don't actually do a whole lot just yet. So let's fix that by connecting our app to the database that we've built before. More concretely, what this will do is to take user's inputs from these elements and then build queries by passing them on to our database. As you'll recall, this is the code we've built so far. Let's begin to modify to connect to our database. I'll start by adding these imports and creating our connection to the [Weaviate](../../Glossary/Service/Weaviate.md) instance. And of course, remembering to close the connection. I'm also going to wrap the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the streamlet code in a try block like this. So I'll add the line try, indent all of this code, and add the finally close, and indent the client close function. This will help to close the connection when we shut down the streamlet app. Next up, we'll get the movie and synopsis collection to run queries against. The search tab interface doesn't need to be changed here at all because it's already set up to capture our user inputs, so that's great. What we do need to do is to take those inputs from the user, like the search querying and the radial selection, and build an actual query. Remember that the radial selector can be for a vector or a hybrid search. So let's build different queries
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=93)** for each case using if else statements. First, we'll delete the placeholder data. In all of these cases, we'll be using a filter. So let's start by creating a filter object. We'll ask you to only return movies with ratings greater than or equal to the lower of the ratings, and we'll combine that with a similar filter that requires a rating less than or equal to the higher value in the slider selection. And you probably remember that we created references between movies and synopses earlier. To [Fetch](../../Skills/Web%20Development/Fetch.md) those, we'll use a query reference object like so. We'll give it the reference property name to link on, which is hassynopsis, and then names of the properties to get from the target collection, which is called body in the case of the synopsis collection. And now for the [Control Flow](../../Skills/Software%20Development/Control%20Flow.md), let's only have it perform a search when there is a search string entered. If the selection is for a vector search, we'll have the app run the near text method. The text input here will be the query string, and then we can pass on the filter, set a limit, and the return references. And if it's not a vector search, we'll have the app send a hybrid query, which basically looks the same. So we'll have the same query, same filter, same limit, and the same return reference. The only difference here is that we're using the hybrid method as opposed to the near text method. And lastly, I would like to actually show some results at least when the user hasn't input anything
>
> **[3:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=185)** into the search bar. So I'm actually just going to call this fetch objects method, which will grab the first few objects from the database without any other search criteria. We'll just apply the same filters that the user might have supplied like the movie filter range here, and of course, provide the return references data. Now, this isn't quite going to work just yet, that's because we've yet to actually pass our outputs onto the user interface. In the next video, let's explore how to do that, including spending a little bit more time on how to retrieve cross-references and how they work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Weaviate](../../Glossary/Service/Weaviate.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Control Flow](../../Skills/Software%20Development/Control%20Flow.md) (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Parsing query responses](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=0)** - [Instructor] Our web app is now connected to the [Weaviate](../../Glossary/Service/Weaviate.md) instance and able to send queries using the user's inputs. Now let's pass the response back through the front end. Each response to a search will have an object attribute containing a list of objects, so we can use that to loop through the actual response like this. We can then retrieve each property through the properties attribute within each object. Now the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) client returns all the properties by default as a dictionary, so we can access each property as a key, like rating here and movie_id. Next, we need to retrieve the synopsis for each movie. In the query above, we requested the reference data through the hasSynopsis reference property. As a result, we'll have the requested data available through the references attribute within the response. And this is how you would [Fetch](../../Skills/Web%20Development/Fetch.md) that data. Hopefully, this syntax is starting to look a little bit familiar. We fetch a specific reference through the references attribute using its property name, in this case, hasSynopsis. The corresponding value then is like a response on its own, giving a kind of recursive structure. So to drill down, we can do that the same way as before. The response, or in this case, the reference in this case will have an objects attribute. Now we know that that's going to contain a list, and we know that each movie has just a one synopsis. So we'll just grab the first object.
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=93)** And within that synopsis, we can grab the body property within the properties attribute. And that will be our synopsis. And since we've assigned that synopsis text into this variable, we can just display it just like we've done before. The next task is to add details to the movie_tab. Remember that this is where the user will enter a particular movie row ID and get details. So let's get rid of our placeholder data first. To get the movie data, we can rely on the movie's UUID. Remember that when we imported data, we generated the movie's UUID from the row ID. So let's do the same thing using the user's input. And then this movie_uuid can be fed into the fetch_object_by_id method, which lets us grab just the one specific object from Weaviate based on its object ID. Remember that the properties are returned by default, so we don't need to specify anything there. The return_references on the other hand are not, of course. So let's fetch the synopsis again using the exact syntax as before. So that should be all of our data, which means we can pass it to the placeholder values. In some of our other queries, we've had a response with multiple objects in it, but here, we've just fetched the one object, which means that the object itself called movie here will have a properties attribute with a dictionary
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=186)** so it can extract them just like I've shown here. And if I now run this app again, these features should be fully functioning. So our users can search our movie database like this, and if they like a particular movie, they can look into its details here, get the movie ID, and then enter into the Movie details tab, which we've just put together. It's pretty neat, right? So that's our movie search and details exploration tabs done. There's just a one more feature to add, which is possibly the most exciting. I'm talking, of course, about adding our recommendation feature using [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md). We'll tackle that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (3), [Weaviate](../../Glossary/Service/Weaviate.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1)
> **Code Identifiers:** hassynopsis (2), movie_id (1), movie_tab (1), movie_uuid (1), fetch_object_by_id (1)
> **Env Vars:** uuid (2)
> **Analogies:** just like (2)
> **CLI Commands:** python (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Recommendations with RAG](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=0)** - [Instructor] Okay, at last, we've come to what, at least for me, might be the most exciting feature of this app. We're going to add a recommendation feature to this app using retrieval augmented generation or RAG. Here's a reminder of our requirements. The app's going to recommend movies to watch to our user based on two inputs, which are already shown here. One is the search criteria or the kind of movie that they would want to watch, and the other is some context or occasion. So what's needed then is for us to formulate a query in our code. Firstly, what collection should the generative query be based on? We could use the movie or the synopsis collection. For me, I think it'll be better to base it on the synopsis. Each synopsis contains richer details of the movie so it'll make more sense in my view for these recommendations to be based on those. And then what search type do we use? Well, I guess the user could type in anything in their query. Could be something general, like a genre, but it also could be something like a specific title. So I would prefer a robust search method that can search by meaning, but also respect these exact matches when they occur. And to me, that sounds like a job for a hybrid search. So let's start to construct our query. Here's our hybrid search on synopsis, and the query is just passed on from the user input. And then how would we prompt the model? First, we want an overall recommendation, so that's a job for our group task prompt. And as for the exact prompt,
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=94)** well, it's not an exact science, but I find that generally the more precise and specific prompts work well. Here's my attempt at it. The users looking to watch something types of movies for some occasion. Provide a movie recommendation based on the provided movie synopsis. Note that this is an F string. So these names in braces, search string and occasion will be replaced by whatever the user inputs into our interface. We'll have the large language model base the answer on three objects. And since this is a query on synopsis, let's also retrieve the movie data. So this is a reverse of how we've used references before where we've fetched synopsis based on movie data. This time we'll use the reference property for movie to [Fetch](../../Skills/Web%20Development/Fetch.md) details of the reference movie object from the synopsis. So all that's left to do is to pass the results back to the user. Let's start with the recommendation. So you'll recall this was a group task, meaning there will be one generated answer for all the objects combined. So what we can do is to display the generated text by fetching it as an attribute like so. And then we can get details of each movie, like we've done before. We'll access the objects attribute to get the list of movies, and from there we'll get rid of the placeholder data. And here's a movie title. Remember that this is again, fetched via the reference so we'll dig into the reference object and get the property of the movie object
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=186)** within the reference and the ID. And let's get the movie description as well. And they have the same variable names as before, so we don't need to change how they are displayed on the screen. So if we save this and refresh our app, we should have a fully functioning web app that's connected to a vector database. Let's try something. Here's a recommendation for a thriller that's for any occasion. What if I change the query to look for a thriller that might be suitable for watching with children? Look at that. It's providing two different recommendations based on the context, even though it's actually grabbing the same objects from the database. In other words, our app can now find relevant parts of your data and process it using AI or a language model, taking into account specific inputs from our user based on their needs. And this is only a relatively simple application. Think about the possibilities for your own complex data and needs. As we've mentioned before, this transformative capability is really exciting. As long as you have the right data, you can find them with a vector database and then transform it using these AI models. In the next chapter, let's talk a little bit more about exactly that, more complex real world data and some of the techniques that deal with them as you import them into a vector database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Env Vars:** rag (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: App enhancements](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=0)** - [Instructor] In this challenge, we're going to expand our app's capabilities by introducing some upgrades. First of all, we're going to introduce some options for an additional search type. So the user will be able to choose to run a keyword search in addition to our vector and hybrid search, if they so choose. This should fit as an additional radio button next to the vector and the hybrid search options. We've added the keyword search option here for the radio button in Streamlit, but you'll have to have that reflected in the queries and make sure it gets sent to deviate. The second feature is to add another filter, more specifically to add a year range filter for the user to select. The year filters will be set by using minimum and maximum years as inputs and only matching movies that fall within that criteria. Again, we provided the UI element here for you, so all you need to do is to construct the filter. And, lastly, we'd also like you to extend the Movie tab so that each movie's reviews are also displayed on that tab. This will help the users to see, along with the movie data, what the critics thought about the movie. As I've said before, this course is not really about learning how to write web apps, although if you do, that's great. So all we've done is to provide hints and some code snippets here on how to use Streamlit's interface elements. Your job will be to connect those elements to the queries
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=93)** to make sure that the right outputs are created and then the response is passed on to the user. Okay then, good luck and have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: App enhancements](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=6)** - [Instructor] Okay, here's my solutions to challenge exercise. You are asked to make improvements through our app by adding a keyword search option, add a year based filter, and to show review data for each movie. The UI element for selecting keyword search had been added already. So what we needed to do was to construct the keyword or BM25 search query. The way I did it was to add an if else clause just here if the input was keyword, and then construct a search just like this. Remember that BM25 is the search ranking algorithm and the method name for keyword searches. And once you've called that function, you can pass the same parameters as you've done above. So that's our keyword search implemented. And now let's get onto the filter. Again, the UI has been done already. We can capture the user's inputs as integers. Now just be mindful that the inputs here must be integers because we've defined the year property to be an integer at the database level. Once we've done that, what we need to do is to add those conditions to our filter. Now this is an additional requirement, so the right operator would be an and. So we can add that with an ampersand and construct the filter. This filter of course will make sure that the year is greater than or equal to the minimum specified year.
>
> **[1:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=99)** And this will do a similar thing, but for the maximum year and make sure the data that's returned has the year that's less than or equal to the maximum year specified. So lastly, let's [Fetch](../../Skills/Web%20Development/Fetch.md) and display the review data. For this, we need to remember how the movie collection is linked to the review collection. If we now inspect the collection definition for the movies, you see that the collection has a hasReview property that links to the review collection. This is what we're going to use to fetch or query the referenced collection. The general pattern here is the same as a hasSynopsis reference. We use the query reference class and then link on the hasReview reference property instead of the hasSynopsis property, which we use above. And then we get the body property back as that is the property in the review collection. Now we need to remember to do something with the data that is returned as this is an additional data that's returned that wasn't displayed before. In my case, I added a section at the bottom of the tab just here. So I add a subheader called Reviews and just iterate it through each review like this, display a little bolded heading for each review. This is just markdown syntax. And then show the review body for each review. If we save that and run the app again,
>
> **[3:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=194)** we now see that the app has been updated. We have an additional keyword option here in the radio buttons, and we have the year filters. Let's pick a keyword search for the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) time, and then perform our search. And if we change the year filter, let's say to between 1980 and 2000. You see that there's just the one hit that meet these criteria. And if we inspect the results in the movie details tab, we see that the year is indeed within our criteria. And what else do we have here? We actually have the reviews displayed as well. I hope you found this interesting. There's obviously a lot that you can do with apps like this that'll be really valuable and interesting to the end user. So I would encourage you to continue to tinker with apps like this or even build your own powered by your own data sets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** hasreview (2), hassynopsis (2)
> **CLI Commands:** make (3)
> **Env Vars:** bm25 (2)
> **Definitions:** is an  (2)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 4. Making a Vector Database Work for Your Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Messiness of real data](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=0)** - [Instructor] Up until now, we've dealt with relatively neat data sets that have been pretty straightforward to work with. Our movie data, for example, is contained in a tabular CSV format, and we haven't had to do much further processing than deciding which columns to use and what the corresponding properties might look like in our database. When it comes to dealing with real data, though, things can look a little bit trickier. Data, especially semantic data like text, can often be quite messy. Take a look at this web page, for example, from Wikipedia. There's a great deal of really useful information in here, but it doesn't quite lend itself to a simple data import, like what we've done here, for a couple of reasons. First of all, you'll see that the page is actually quite long. Remember that each data object will be saved with one vector that represents its meaning. What this means is that in this particular case, we might not want to save the entire page as one data object, but break it down as a series of smaller portions so that we can find the relevant sections from it for better precision. This is called chunking. And we'll cover some examples of it on how to chunk data very soon. Another is a matter of context. If we're reading a book, we would be aware of the title of the book and perhaps already have an idea of what it's about. This information is a very useful part of understanding the overall meaning of a data object.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=96)** So we might want to consider providing this type of overall, higher-level information to each chunk as well. But how much of it should we provide? Should we, for example, save the page title for each chunk? What about its section headings or the URL if it's a website? In some cases, you might also want to save a summary of the overall page, as well as the chunk itself. Another is just a matter of formatting. This web page is nicely presented on our browser, but take a look at the underlying code. Yikes. Well, that's not very readable at all, is it? All of this extra code defines how the page is organized and displayed on our web browser so that we as humans find it easier to read. But it's not really semantically useful. So what we need to do is to find some ways of extracting the information, such that key aspects, like section headings and paragraph markers, are identified. And we can discard these purely cosmetic things, like typefaces and background colors, as well as layouts. The good news is, we won't need to build tools from the ground up to perform these tasks. Because this is a fairly common challenge, many tools already exist that can help us with these tasks. So in summary, these are some of the typical things you'll be doing with real data: chunking, deciding what contextual information to include with each chunk, as well as extracting semantic information. Over the next couple of sections,
>
> **[3:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=192)** we'll take a look at how we might be able to tackle some of these challenges.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (3)
> **Analogies:** for example (3)
> **Env Vars:** csv (1), url (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Pre-processing text for vector databases](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=0)** - [Instructor] Let's take a look at a couple of pre-processing tools and examples that might be applicable for [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md). Here, as we often do, we'll talk about some general scenarios, before moving on to specific ones. We talked earlier about the need to extract semantic information and stripping away the styling. That might seem very hard, but luckily for us there's a wide array of great tools available for this, like Beautiful Soup, pypdf, or even AI models. Beautiful Soup, for example, is a popular tool that extracts text from [HTML](../../Skills/Web%20Development/HTML.md) or XML files. And pypdf will let you extract text from a PDF file, which is notoriously tricky to extract information from. In fact, these days, you can even extract text from other media, like videos or audio, quite easily. You can do this by using an AI model that can transcribe audio to text. Current state-of-the-art open source models, like Whisper, work remarkably well for this purpose. These models can produce text outputs from conversations, or even instructional videos, even when multiple languages are spoken consecutively. So, there's definitely a limited need to reinvent the wheel in many cases. And when it comes to popular data sources, you might even find specific tools written just for them, and Wikipedia is a classic example of this. Since Wikipedia is such a well established and reputable source of information,
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=92)** there are lots of high quality tools that let you extract information from it. Actually, Wikipedia even produce regular data dumps itself for its users. But, for downloading just a few files, you can use API based tools like MediaWiki API. These tools will [Fetch](../../Skills/Web%20Development/Fetch.md) and parse Wikipedia articles with items like the summaries, sections, headings, and so on, parsed. So these in turn, help us to build sensible, context-rich data objects in no time. Let's take a look at how. Here's an example of a script that you can use to inspect the contents of a Wikipedia page. Once you import this MediaWiki class, all you need to do to use it, is to instantiate it to retrieve an article like this by nominating the title. The data is then parsed by MediaWiki, so you can access attributes like the title, summary, different sections, and so on. But very simply, you can also print out the whole page with very simple, text-based formatting. And if we scroll through, you'll see that different levels of headings are helpfully pre-formatted differently with these markers. Here's one section of that page comparing the rendered version on a browser against extracted text. You can see that the headings are marked here using standardized formatting. And, exciting for us, this means that we can write code to extract this information.
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=187)** So, we now have just the text from a Wikipedia article with natural breakpoints to split the text, and we can also find contextual information of section and subsection headings to match the text. Next up, we'll show you how real life data like this might be imported into [Weaviate](../../Glossary/Service/Weaviate.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Weaviate](../../Glossary/Service/Weaviate.md) (1)
> **Env Vars:** api (2), html (1), xml (1), pdf (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Chunking longer texts](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=0)** - [Instructor] Once you've extracted the text data, there's just one more thing to consider, before adding the data to a vector database. You need to decide whether and how to split up the source data into smaller sections. This topic is known as chunking. At a high level, you can think of chunking as a way to help define a unit of information. When it comes to [Databases](../../Skills/Software%20Development/Databases.md), chunking would define the smallest amount of retrievable information. At a library, a unit of information might be a book, but in a book's index, the unit of information might be a page. So in a database, a unit of information is a data object. So the question is how much information will each data object contain? This is an especially important topic in [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) where each chunk is going to be represented by a vector. You should also know, though, that there are trade-offs depending on the size of each chunk as well. What might happen if each chunk was large, like if it contained a chapter of text each? Well, the good news is that there would not be too many chunks in our database, and each chunk would contain a lot of rich contextual information. So it might make it easier to retrieve the right chunk with a search and then to understand what that chunk is about. But also this might mean that finding specific information might be challenging, like getting an entire book when what you actually want is a specific passage
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=93)** from within it. And if each chunk was too small, well, it'll be like looking for an index card or a sticky note in a very big pile of them. Now, this would make it easier to find granular specific passages that we're looking for, but this could lead to the opposite problem. Short passages can often be confusing when out of context, like a baffling sticky note from months and months ago. So you can see that chunking is a nuanced topic and unfortunately, there's no one-size-fits-all type answer, but we can provide some general tips and starting points that would work relatively well. Let's go back to the example of our Wikipedia page. One really great chunking method is to use available section markers. Here, the text helpful includes headings like these, and the text within each section contains a related coherent idea. So all of that naturally means headings make a natural good candidate for text chunks. The section titles can even be used as additional structured information, but this method might not always be available as extracting section titles isn't always possible in every text examples, as you've seen before. So another really good approach is to split the source text simply by length. This is a simple but a quite effective and robust approach. You can set a maximum [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) count or a character count for each chunk
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=186)** and split the text accordingly. As a rule of thumb, a good starting point would be something like 100, 150 words or five to 700 characters per chunk with an optional overlap somewhere between say, 10 to 15%. This will lead to chunks that have enough information to be meaningful, and the overlap will provide some robustness against any awkward splits, either in words or sentences. Chunking longer text for ingestion into a database is an important and nuanced task, although there's no one-size-fits-all answer, you could start with chunking by sections or by length, like we discussed earlier. These guidelines will give you a pretty good starting point from which you can make adjustments to suit your specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1), [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Definitions:** is a  (4), is an  (2), known as (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (1), we discussed (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### [Chunk Wikipedia articles](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=0)** - [Instructor] Now let's see how chunking and text processing is done in practice. Here I've put together some scripts to process a set of articles from Wikipedia. Off the top, I'm using the same mediawikiapi library that you saw earlier, as well as a few other standard libraries. And this is a list of some, what I think at least, are interesting articles ranging from history of computing to [Databases](../../Skills/Software%20Development/Databases.md). For each of these Wikipedia article then, we need to download it, pause it to raw text, and chunk the body as you just learned to import it into the database. So what I did was set up a couple of functions to break up these tasks. The first task is to turn our text into just a list of words, so we can use the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) count for chunking. This is what this word split of function does. It just takes a string of source text as inputs and it uses regular expressions to replace multiple white spaces into a single space and then splits them up based on these spaces. If you're not sure what the syntax does, don't worry too much about it. All you need to know is that it takes a text body as an input and it'll produce a list of words. And then we use this function to make sure that we get lists of chunks of the provided size. So what we'll do is to use this function, provide a chunk_size_max parameter and an overlap. These parameters will be used to produce lists of sets of words, in other words, lists of chunks that we can ingest
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=93)** into the database. And then what we can do here is to use the functions that are defined above to go through each page. And then for each page, we'll get a list of chunks that pertains to those page, and then we'll save those chunks into this [JSON](../../Skills/Web%20Development/JSON.md) file here. It's a fairly simple piece of code that's quite useful. It can be extended of course or modified to use section headers if you'd prefer that. Now let's have a look at a sample query that'll show you what you can do with chunked data like this. Let's say you want to know what our database says about how [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) are different from [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md). So hopefully this syntax seems familiar. You connect to a database here, get the chunks collection, and then we perform a query using a vector search. We'll grab 10 of those chunks that we've just defined using the query, and here's our prompt to the generative model. For this particular exercise, I'm going to, of course, print the generated text, but we want to know where those chunks are coming from. So here I'm going to loop through the objects and produce the chunk_number as well as the title of the article that the chunk comes from. Let's run it and see what happens. So here's our model's answer about how vector databases might be different from relational databases. I won't go through the specifics of it, but they seem pretty good to me. And you're probably not surprised by that at this point.
>
> **[3:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=190)** But crucially, take a look at the data that the RAG query is using to produce this answer. The source data came from multiple pages from the Vector database article in Wikipedia, or the database article in Wikipedia, and from different places throughout the document. Have a look at these lines, for example, for the database article. It's a long article and it's used chunks from anywhere between the first chunk to the 78th chunk, which means it's gone through all those chunks and found relevant bits before producing the answer. And notably, it didn't use any of the chunks from these other articles because they weren't relevant to the query, or at least the most relevant to our query. This is what makes chunking technique with RAG so powerful. This technique allows you to have as big a database as you can imagine, and from there, you can retrieve just the relevant information before transforming it with the language model. As we've said before, this is a great way to combine the creative and reasoning capabilities of generative models with the facts or data that you can only retrieve from a database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (2), [Relational Databases](../../Skills/Software%20Development/Relational%20Databases.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** rag (2), json (1)
> **Definitions:** is a  (2), in other words (1)
> **Code Identifiers:** chunk_size_max (1), chunk_number (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Import Wikipedia data chunks](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=0)** (energetic electronic music)
>
> **[0:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=5)** - [Instructor] In the last section, we showed you how to chunk your data and then to query a collection of these chunks from multiple articles in a vector database. Now, you might be wondering, wait, didn't we skip a step? How did the data get in the database? You would be absolutely correct. So in this challenge, you're going to import these Wikipedia data chunks into your vector database. We've provided you here with some starter code and placeholder comments to get you started. Here you connect to your database. You load your chunked pages into a file. This will load your chunked data into a dictionary where its key has a corresponding set of chunks as its values. And then you can follow the commented instructions. So first, you'll need to create a collection called WikiChunk, and then follow the process as you've done multiple times, hopefully, by now. And then once you have your collection, you would get the collection and insert the chunks by iterating through your data. In this case, that'll be your chunked pages. Keep in mind that here, we have data from multiple pages as well as multiple chunks per page. So think about how that might change the pattern of the import code that you've seen before. Another interesting question for this exercise is how to generate a unique UUID for each chunk. Recall that for our movie collection, we use the movie row ID to generate the UUID from. Consider whether that might be appropriate here
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=100)** and how that might change for this particular application. Okay, good luck and have fun.

> [!info]- Semantic Content
>
> **Env Vars:** uuid (2)
> **Cross-References:** in the last (1)
> **Exercise Files:** starter code (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic electronic music) (1)

#### [Solution: Import Wikipedia data chunks](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=0)** - [Instructor] Okay, here's my solution. Let's see if we arrived at Civil Loss Solutions. First, of course, we need to create a collection, so hopefully this process is familiar to you by now. We define a name for our collection, we'll call it WikiChunk. We define a vectorizer for creating vectors and a generative module for RAG queries. Then let's create some properties. We have a title here with text data type and a chunk with the same text data type. What I'm going to do is to also add a chunk number as an integer. This is not from the original data set, but this is going to be handy because without it you won't be able to tell where in the source document the chunk comes from. This will create the collection definition, so now we'll get the newly created collection before inserting our chunks into it. Remember our hint from before, the chunked pages object is a dictionary where the key is the title of each document, so we can iterate through it like this. First, we'll iterate through the chunked pages dictionary for each page name and the values, which will be the page chunks. What we'll do then is to create a list of data objects, which will be the chunked objects, and we need to iterate through the page chunks again, because that's going to be the inner loop that allows you
>
> **[1:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=97)** to iterate through the page chunks for each page. And now it comes to the question of how to generate the UUID for each object. Remember that before in our movie database we used the row number, but here that won't necessarily work, and that's because there are multiple chunks here with the same chunk number. Again, remember that there are multiple pages, so there'll be, for example, multiple chunk zeros. So what I do here instead, is to use the page name as well as the chunk number to generate the ID from. That will ensure that the seed for our UUID is unique. Once we've made that decision, we generate the data object similarly to what you have done before. We use the properties of title and the chunk in this case, and we'll pass on the chunk number as well so that we can retrieve it when we get each chunk. Remember to pass the UUID on as well, and once you have the chunk object appended to our list of chunk objects for each page, we'll just insert the chunk object at this point and let's print out a message just telling us that, "Hey, it's important finishing this particular page." And of course, remember to close the client connection. So if you run that code, it'll populate your instance (indistinct), with a few hundred Wikipedia chunks. And that means you'll now have your own searchable mini set
>
> **[3:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=193)** of Wikipedia pages that you can perform RAG, or any other searches with. Just as a note, this type of individual page downloading isn't really for bulk downloads for various reasons. If you want the large Wikipedia corpus, you can actually download Wikipedia's official data dumps that we've discussed before. If you're interested in building a vector database with a big dataset, this could be actually a very good option. These types of chunking and data import techniques are really useful and applicable for many types and sources of data, and you now know how to apply them yourself end to end from creating a database to importing this data. This is really exciting and I would really encourage you to build your own [Databases](../../Skills/Software%20Development/Databases.md) with whatever data you're interested in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** uuid (3), rag (2)
> **Best Practices:** remember to (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue learning about vector databases](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=0)** - Congratulations. I hope you've found this course as interesting as I did building it. [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) are fast becoming key pieces of infrastructure for many organizations. And by learning how to build and then use vector databases, you've taken a huge first step towards mastery of this exciting field. Where you go next is up to you. You could, for example, explore selection and even fine-tuning of AI models. Advanced RAG techniques or database deployment in a production setting might also be great learning paths. This is a fast-moving field, so I also suggest checking out resources like popular blogs, papers, or additional courses. We'll have links to some of these in the read me file. You can find me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). I would love to hear about what you're building with these new skills. Cheers, then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vector Databases](../../Skills/Artificial%20Intelligence%20(AI)/Vector%20Databases.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (1)
> **Env Vars:** rag (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - congratulations (1)


## Instructor

- [Joon-Pil Hwang](../../Instructors/Artificial%20Intelligence%20(AI)/Joon-Pil%20Hwang.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/vector-databases-in-practice-deep-dive-4513162)

## Skills Covered

- Database Development
- Vector Databases
- Artificial Intelligence (AI)

## Path Context

### In [Vector Databases Professional Certificate by Weaviate](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Vector%20Databases%20Professional%20Certificate%20by%20Weaviate.md)
← [Introduction To Ai Native Vector Databases](Introduction%20To%20Ai%20Native%20Vector%20Databases.md) | **2 of 2**

### In [Explore AI for Data Engineering](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Explore%20AI%20for%20Data%20Engineering.md)
← [Introduction To Ai Native Vector Databases](Introduction%20To%20Ai%20Native%20Vector%20Databases.md) | **6 of 8** | [GraphRAG Essential Training](GraphRAG%20Essential%20Training.md) →

### In [Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)
← [RAG and Fine-Tuning Explained](RAG%20and%20Fine-Tuning%20Explained.md) | **2 of 7** | [Generative AI- Introduction to Large Language Models](Generative%20AI-%20Introduction%20to%20Large%20Language%20Models.md) →

## Part of

- [Vector Databases Professional Certificate by Weaviate](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Vector%20Databases%20Professional%20Certificate%20by%20Weaviate.md)

## Appears In

- [Vector Databases Professional Certificate by Weaviate](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Vector%20Databases%20Professional%20Certificate%20by%20Weaviate.md)
- [Explore AI for Data Engineering](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Explore%20AI%20for%20Data%20Engineering.md)
- [Master Retrieval-Augmented Generation (RAG)](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Master%20Retrieval-Augmented%20Generation%20(RAG).md)

## Related Courses

_Courses sharing skills:_

- [Introduction To Ai Native Vector Databases](Introduction%20To%20Ai%20Native%20Vector%20Databases.md) — Artificial Intelligence (AI), Vector Databases
- [RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance](RAG%20Fine-Tuning-%20Advanced%20Techniques%20for%20Accuracy%20and%20Model%20Performance.md) — Artificial Intelligence (AI), Vector Databases
- [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) — Artificial Intelligence (AI), Vector Databases
- [LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)](LLM%20Foundations-%20Vector%20Databases%20for%20Caching%20and%20Retrieval%20Augmented%20Generation%20(RAG).md) — Artificial Intelligence (AI), Vector Databases
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI)

---

[↑ Back to top](#)