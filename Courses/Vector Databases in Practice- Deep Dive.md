---
type: course
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
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/database-development
  - skill/vector-databases
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-17
---

# Vector Databases in Practice: Deep Dive

> Vector databases and their uses are transforming how we work. They are fundamentally changing how data is stored, managed, and retrieved through their deep integration with AI models. In this course, learn practical, end-to-end skills on how to build and use vector databases. Instructor Joon-Pil Hwang guides you through building an application that is primarily powered by a vector database, taking

> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive) | 1h 50m | Intermediate | 16K learners

## Instructor

- [[Joon-Pil Hwang]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/vector-databases-in-practice-deep-dive-4513162)

## Skills Covered

- Database Development
- Vector Databases
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### The power of AI-powered vector databases
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=0)** - AI technologies are transforming how all of us work and vector databases at the forefront of this transformation at the infrastructure level.
>
> **[0:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=8)** They are fundamentally changing how data's stored, managed and retrieved through their deep integration with AI models.
>
> **[0:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=17)** Hi, I'm JP.
>
> **[0:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=19)** And in this course, you'll learn practical end-to-end skills which will take you all the way from database creation to usage and even app integration.
>
> **[0:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=29)** You'll be using keyword, vector and hybrid searches to find the right data faster.
>
> **[0:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=35)** And you'll be applying retrieval augmented generation, which makes generative AI tools even better by grounding them with your data.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/the-power-of-ai-powered-vector-databases?u=76281980&t=45)** Join me here and by the end, you'll have built a search and recommendation web app that is powered by a vector database.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - ai (1)


### 1. Search Functions in a Vector Database

#### A high-level view of vector databases
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=0)** - [Lecturer] So what is a vector database and how are they different from other types of databases?
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=7)** At a very high level, a vector database is a type of database that is capable of organizing data by their meaning.
>
> **[0:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=15)** This allows a vector database to perform searches, to find database entries that are most similar to the search query.
>
> **[0:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=23)** For instance, let's say you search a vector database containing words for the word cat.
>
> **[0:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=28)** Using a vector search, the results would not only include the word cat and derivative words like cats, but also words with similar meaning like kitten, lion, jaguar, and so on.
>
> **[0:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=42)** And if you searched a vector database containing paragraphs for the phrase history of computing, the top results would include those most relevant to this idea or concept of history of computing.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=55)** You'll notice that these results don't necessarily include the same words that were used for search, and yet our vector database was able to identify those results as relevant.
>
> **[1:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=66)** This is what vectors allow.
>
> **[1:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=69)** Vectors capture or represent meaning as a series of numbers, and that goes for a word like cat, sentences, paragraphs, or even other media.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=79)** These representations work a little bit like how different systems like RGB or CMYK systems represent colors.
>
> **[1:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=88)** An RGB representation of a color is a set of three numbers, like 255, 0, 0 for red, or 65, 105, 225 for royal blue.
>
> **[1:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=99)** By changing each of these three numbers like a dial, we can represent any color that we'd like to.
>
> **[1:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=107)** And if we plot colors in three dimensions according to these numbers, similar colors magically end up next to each other.
>
> **[1:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=115)** Vector databases extend this idea, but instead of three dials, we have hundreds of dials to represent more nuanced meaning.
>
> **[2:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=124)** And these vectors are used to find object with similar meaning, just like how similar colors can be found by similar RGB values.
>
> **[2:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=133)** This ability to deal with data by their meaning provides vector databases with tremendous power and flexibility, as you'll see throughout the course.
>
> **[2:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=143)** And of course, vector databases can make use of traditional searching tools as well.
>
> **[2:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=149)** Vector databases can, for example, perform keyword filtering and keyword searches for use cases where the exact matches matter.
>
> **[2:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=158)** These can also be combined with vector search capabilities as you'll see later on.
>
> **[2:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=164)** So at a high level, vector databases catalog and retrieve information based on the concept of vectors.
>
> **[2:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=172)** And vectors represent an object's meaning as a series of numbers, which is the idea at the heart of this technology.
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=180)** - Now, these capabilities are very exciting, but might also sound a little bit abstract at the moment.
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=186)** But don't worry, in the upcoming videos, you'll see all of these capabilities and more in action.
>
> **[3:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/a-high-level-view-of-vector-databases?u=76281980&t=193)** So let's get into it.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (3), find (2), make (1)
> **Env Vars:** rgb (3), cmyk (1)
> **Code Keywords:** let (2), abstract (1)
> **Definitions:** is a  (3)
> **Analogies:** for instance (1), just like (1), for example (1)
> **Speakers:** - [lecturer] (1), - now (1)

#### What you can do with vector databases
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=0)** - [Presenter] Before we get really hands-on, let's talk a little bit about what vector databases can do.
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=6)** Being a type of database, they can, of course, manage data.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=10)** That means being able to create new entries or objects as well as being able to read, update, and delete existing objects.
>
> **[0:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=19)** And they can perform keyword searches and filtering just like many traditional databases.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=24)** But vector databases can do other things to get value out of your data, more specifically, by leveraging modern AI technologies.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=33)** These capabilities include additional types of search and integration with generative AI tools.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=40)** Vector databases can perform vector searches and hybrid searches as well using something called a vector index.
>
> **[0:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=49)** A database index is similar to an index in a book or a library catalog.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=55)** It's a store information for where to find the actual data.
>
> **[1:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=60)** And just like a book index or a library catalog, a database index helps you to find the information faster because you don't need to look through the actual data.
>
> **[1:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=71)** We learned earlier that vector database is organized data by meaning.
>
> **[1:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=76)** This is what a vector index is.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=79)** And just as a good book index gets you to the right page faster, a good vector index enables fast, high-quality vector searches, even for truly big datasets with billions of objects.
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=93)** And some vector databases can perform hybrid searches as well.
>
> **[1:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=98)** A hybrid search performs both a vector search and a keyword search separately, and combines the results to produce the final results set.
>
> **[1:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=108)** This often produces a best-of-both-worlds output.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=112)** The keyword search looks for exact matches, which is great for when, say, using domain specific words or key phrases.
>
> **[2:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=120)** Then these results are complemented by the vector search, whose results are based on the degree of similarity between the input and the database objects.
>
> **[2:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=131)** And last, but not least, some vector databases can perform retrieval-augmented generation or RAG.
>
> **[2:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=139)** This is a very powerful tool that combines the use of a large language model with data retrieved from the database.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=146)** This helps to ground the model with reliable, valuable information, and that grounding in turn gives the model clear and accurate context to perform the requested task with.
>
> **[2:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=159)** As with all the other features, you'll see this in more detail later on.
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=163)** RAG is a very powerful and important tool for many, especially as large language models continue to become even more capable.
>
> **[2:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=172)** As you can see, there's a lot that vector databases can do to help you find the right information faster.
>
> **[2:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/what-you-can-do-with-vector-databases?u=76281980&t=178)** So let's get you set up to try these tools out yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1), continue (1)
> **CLI Commands:** find (3)
> **Analogies:** just like (2), similar to (1)
> **Env Vars:** rag (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### Get set up for the course
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=0)** - [Instructor] Before we go further, let's get set up with the tools and resources that you'll need for the course.
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=6)** The main tools that we'll be using are Python for our programming, Weaviate as our vector database, and the OpenAI API for their various AI models.
>
> **[0:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=17)** So here, we'll set you up with Python and the related tools, an example script to connect to Weaviate, and an OpenAI API key.
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=27)** Let's start by getting set up with Python.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=30)** This is going to depend a lot on your system, but I recommend following the official Python documentation and installing Python 3.10 or newer.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=40)** Once you have Python installed on your system, I recommend working with a virtual environment.
>
> **[0:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=46)** If you're using a Mac, Linux, or even Windows with WSL, you can do this by navigating to your working directory and running a command like this.
>
> **[0:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=56)** This runs the venv script, which will create a virtual environment in the .venv subdirectory.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=63)** Then you can activate the virtual environment with this command.
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=68)** Then you can install your desired libraries into the environment.
>
> **[1:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=72)** We'll install the Weaviate Python client and these other libraries, which will be used throughout the course.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=79)** Additionally, I recommend using an IDE for development.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=83)** Personally, I use VS code, which is free on open source, but you can use any others.
>
> **[1:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=89)** We'll also need access to some AI models, one to generate vectors and another which will be a large language model.
>
> **[1:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=97)** You can use any number of different models for this.
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=100)** With Weaviate, you could use local models or services like, Cohere, HuggingFace, and so on, but for the course, we'll be using OpenAI's models.
>
> **[1:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=111)** Let's go to the OpenAI website, sign up if you haven't, and then create a new API key.
>
> **[1:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=118)** Once you log in, you can go to the API keys tab, like so, and click on this button.
>
> **[2:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=125)** Give it a name.
>
> **[2:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=126)** This is just for you to keep track of the different keys, and then make sure to save the key, for example, in a password management application, as you won't see it again.
>
> **[2:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=136)** Now, let's make sure that we can also run our code examples.
>
> **[2:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=141)** Navigate to the project repository, which you should have cloned, and then, open this file.
>
> **[2:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=151)** For now, we'll use this function, which provides the details for connecting to our demo database.
>
> **[2:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=158)** You should replace this part here to update that with your own key.
>
> **[2:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=165)** And if you run this file, it should print this success message without any errors.
>
> **[2:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=170)** You will also see this function be used in other places for convenience, and don't worry, you'll get to build your own database as well.
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=180)** From the next video onwards, you'll start to see some code examples, and as you get started, if you don't fully understand everything in those snippets, that's okay.
>
> **[3:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=190)** You can always look up the correct latest syntax from the official documentation.
>
> **[3:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=195)** For now, aim to get a high level understanding of what the key parts of the code are doing and experimenting by changing small parts of it, as we'll be suggesting throughout the course.
>
> **[3:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=207)** Well, you should now have your coding environment set up, have an OpenAI API key, and be able to connect to our demo Weaviate server.
>
> **[3:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/get-set-up-for-the-course?u=76281980&t=216)** Next, let's start to put those tools to use, starting with searches.

> [!info]- Semantic Content
>
> **CLI Commands:** python (7), make (2)
> **Code Keywords:** let (5), this. (2), function (2)
> **Env Vars:** api (5), wsl (1), ide (1)
> **Prerequisites:** set up (3), install (2), you'll need (1)
> **UI Navigation:** go to (2), click on (1), navigate to (1)
> **Versions:** python 3 (1)
> **Cross-References:** next video (1)
> **Tools:** vs code (1)

#### Keyword filtering and keyword searches
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=0)** - [Instructor] Let's dive in to explore some of the things you can do with vector databases.
>
> **[0:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=5)** Why don't we start by taking a look at searches in practice?
>
> **[0:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=9)** After all, searches are what the end users will be doing the most often to find the right data.
>
> **[0:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=15)** Let's begin by looking at keyword filters and keyword searches.
>
> **[0:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=20)** As the name suggests, a keyword search or filter looks for the exact keyword or keywords in the data, but these two concepts are slightly different from each other.
>
> **[0:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=32)** Filters are about reducing results, whereas searches rank them.
>
> **[0:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=37)** Let's take a closer look, starting with filters.
>
> **[0:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=41)** A keyword filter simply reduces the number of results based on whether it matches the provided criteria or not.
>
> **[0:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=49)** Let's try it out with a query on our demo database, using a synthetic data set of movies.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=55)** These movies don't actually exist, but I promise they're just as fun and interesting as a real movie data set.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=62)** This code snippet will fetch objects from our collection of movies for those containing the word love in the description, returning a maximum of three movie objects.
>
> **[1:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=74)** And if we take a look at the results here, we do indeed see that the word love appears in each of our return results.
>
> **[1:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=82)** In other words, a filter provides a set of conditions to match against.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=86)** All it does is determine whether to include or exclude objects in the results.
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=92)** You can try out these filters yourself in the included code example.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=96)** Try varying the keyword used in the filtering examples, and note how the response changes.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=102)** Next, let's take a look at keyword searches.
>
> **[1:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=106)** A keyword search is similar to keyword filtering in that they both use a specific word or words to compare against.
>
> **[1:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=114)** Having said that, there's a big difference between a keyword search and a keyword filter.
>
> **[1:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=119)** Unlike keyword filtering, which simply evaluates whether a database object meets the given criteria, keyword searching produces a score indicating how relevant a result is to the query.
>
> **[2:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=134)** So a keyword search for the string "love" will not only look for the objects containing the word "love," but also a calculate a score indicating how significant the term love is in its object.
>
> **[2:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=148)** This code snippet will look for entries in our synthetic movie database containing the word love, but also score them, again, based on how significant the word is.
>
> **[2:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=158)** Now if we take a look at the results, we once again see that the word love appears in each of our return results.
>
> **[2:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=165)** But notice that the top results are different here from what they were before.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=169)** And also notice these numbers.
>
> **[2:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=171)** That's us showing the results score on the screen.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=174)** You'll notice that the score decreases for each item down the list.
>
> **[2:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=179)** The decreasing scores indicate the declining relevance of each result.
>
> **[3:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=184)** This is because a keyword search ranks results based on the score value.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=189)** The exact algorithm used to produce the score is called BM25F.
>
> **[3:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=195)** The intuition behind this algorithm is that it measures how significant these terms are in the target documents.
>
> **[3:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=203)** We won't go into the exact details of the algorithm in this video, but we've included further resources where you can find out more about them, if you're interested.
>
> **[3:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=213)** And also try out keyword searches yourself in the included code examples by varying the query and also this limit parameter.
>
> **[3:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=222)** We would also encourage you to read the doc strings, which you can see by hovering over the function, for example.
>
> **[3:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=229)** So, that was an introduction to keyword filters and keyword searches.
>
> **[3:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=234)** Remember that filters include or exclude objects based on certain criteria, and keyword searches rank results based on their score.
>
> **[4:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=243)** Note that there are other types of filters too, in addition to keyword filters.
>
> **[4:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=248)** You'll see them later on.
>
> **[4:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/keyword-filtering-and-keyword-searches?u=76281980&t=250)** These techniques allow for precise control over what comes back, and as a result, they are great, complimentary tools to the more forgiving, fuzzier domain of meaning based vector search that you'll see next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1)
> **CLI Commands:** find (2)
> **Definitions:** in other words (1), is called (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** bm25f (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Vector searches
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=0)** - Let's take a look at vector searches.
>
> **[0:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=3)** As we talked about before, vector searches are all about similarity between meaning as represented by vectors.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=10)** Recall that we talked about analogies to colors with similar RGB values.
>
> **[0:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=16)** Vector databases allow us to capture meaning as vectors, which are just a series of numbers, and then perform fast, accurate searches based on how close they are in meaning to each other.
>
> **[0:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=28)** This probably still seems a little bit abstract, so let's turn that into something more concrete by exploring examples of vector search.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=38)** This query here will search our vector database for objects most similar in meaning to this search string.
>
> **[0:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=47)** For example, if we run this query and look at the results, at a first glance, they all look relevant to query and probably quite similar to what we saw before with keyword search.
>
> **[0:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=59)** But something interesting is happening here.
>
> **[1:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=61)** Let's do another vector search this time for the word amorous.
>
> **[1:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=69)** You'll see that we can do that with the same code as before, just with a different search string.
>
> **[1:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=74)** And interestingly, when we look at the results, they are very similar.
>
> **[1:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=78)** Even though the word amorous doesn't appear in any of the results.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=83)** How did that happen?
>
> **[1:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=84)** Well, the answer is vectors.
>
> **[1:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=87)** Because vectors represent meaning, the vector database was able to follow the intent of the query regardless of the actual word that was used.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=96)** In fact, these models that produce vectors can do a lot more than understand individual words.
>
> **[1:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=103)** When we perform vector searches for queries like adventure movies set in outer galaxy and look at the results.
>
> **[1:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=111)** These search results are very much relevant to our query.
>
> **[1:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=115)** The title and the description of the top results match our search query criteria almost perfectly.
>
> **[2:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=121)** Even though, as before, the exact words don't really appear anywhere.
>
> **[2:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=127)** It's pretty amazing, right?
>
> **[2:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=128)** And that's just a small flavor of what you can do with vector search.
>
> **[2:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=132)** Some vectorizing models can even vectorize across multiple languages.
>
> **[2:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=137)** So you could search Japanese text with a French query or vice versa.
>
> **[2:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=143)** Others can work with data in multiple modalities.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=146)** For example, with images and text.
>
> **[2:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=149)** In those cases, a search using images might be able to fetch text that best matches its description and again, vice versa.
>
> **[2:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=158)** The key idea, again, is that vector searches allows to search these objects by their key concepts or meanings.
>
> **[2:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=167)** You can try out vector searches yourself using the included code example.
>
> **[2:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=172)** Try varying the search term here and note how the results change.
>
> **[2:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=176)** You can try using individual words or longer queries, like sentences or even paragraphs.
>
> **[3:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/vector-searches?u=76281980&t=182)** I think trying these out will improve your feel for how vector search works.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), abstract (1)
> **Analogies:** for example (2), similar to (1)
> **Cross-References:** we talked about (2)
> **Env Vars:** rgb (1)
> **Speakers:** - let (1)

#### Searching with filters
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=0)** - [Instructor] So far, you learned about filters and different types of searches.
>
> **[0:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=5)** But what we haven't mentioned yet is that these two can be combined.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=10)** This approach lets you precisely narrow down your scope before looking for the best results within them.
>
> **[0:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=18)** As you can probably imagine, this is a common scenario like searching in a particular publication or searching for particular publications by an author.
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=27)** So let's take a look at this workflow in practice.
>
> **[0:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=31)** We covered keyword filters earlier, with syntax like this, which include or exclude results based on a set of particular criteria.
>
> **[0:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=42)** These criteria can include looking for exact or partial matches, as well as conditional matches like whether any or all of a list of strings are matched.
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=52)** And filters can be actually constructed more broadly based on many other types of data.
>
> **[0:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=59)** You've seen that you can filter by keywords.
>
> **[1:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=61)** You can also filter by range of numbers in a particular property or by the metadata.
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=68)** Metadata might include things like object ID, object creation date, or whether a particular property is null, as well as many more.
>
> **[1:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=77)** So filtering is quite a flexible, yet precise tool at your disposal.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=83)** Here's an example: Let's say you're hosting a trivia night and have a movie category.
>
> **[1:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=88)** You might decide that you don't want to make the questions too difficult, so you want to look at particular year ranges, let's say 1990 or newer, and you want to pick science fiction movies as your friends are really into that genre.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=102)** Here, the year is a perfect candidate for a filter because we have exact criteria to match.
>
> **[1:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=110)** So we can construct a filter to only look for year values equal to or greater than 1990.
>
> **[1:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=119)** Now let's consider the search to combine with our filter.
>
> **[2:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=123)** What search type would be appropriate here to find science fiction movies?
>
> **[2:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=127)** Would you say use a keyword search or a vector search?
>
> **[2:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=131)** In my opinion, I would try a vector search.
>
> **[2:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=137)** That's because what we're looking for is the general idea of a science fiction movie, and we don't really mind if the writer used different words.
>
> **[2:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=145)** So, what do we get if we run the search?
>
> **[2:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=150)** Well, it looks like the query returns some fun sounding sci-fi movies all from the year 1990 or later.
>
> **[2:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=158)** To repeat the filter is the part that's defined the allowed years and the vector search sorted the results by how well they matched the meaning of science fiction.
>
> **[2:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=171)** While we showed the simple example here, we can construct more nuanced filters as well.
>
> **[2:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=178)** For example, you can combine multiple filters with AND or OR operators denoted by ampersands or pipes in the Python client.
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=187)** You could, for example, require that results be from earlier than a particular year, or that description to contain a particular word.
>
> **[3:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=197)** Using filters with a search is a versatile technique that lets you control your search domain with precision before carrying out the search.
>
> **[3:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/searching-with-filters?u=76281980&t=207)** Note that this is different to hybrid search, which combines a vector search with a keyword search, and we'll see exactly how they work up next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), match. (1), require (1)
> **CLI Commands:** make (1), find (1), python (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), imagine (1)
> **Cross-References:** we covered (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Hybrid searches
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=0)** - [Instructor] A hybrid search is a really interesting best-of-both-worlds type search.
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=6)** A hybrid search actually involves a vector database performing two searches under the hood.
>
> **[0:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=12)** Those two searches being a vector search and a separate keyword search.
>
> **[0:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=17)** Then the hybrid search fusion algorithm will cleverly combine the two sets of results from those searches to produce one final set of results.
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=27)** It sounds relatively simple and in some ways it is, but it has very high utility.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=33)** In fact, many of our users tell us how useful they find it for their particular real-life applications.
>
> **[0:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=41)** So now let's take a look at a few examples of hybrid search.
>
> **[0:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=46)** You can perform a hybrid search with just one search query like we do here for the word stellar.
>
> **[0:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=53)** And if we perform the search, we see those results come up.
>
> **[0:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=58)** You'll notice that the top result includes the exact word used in the query while the others do not.
>
> **[1:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=65)** Of course, that could still happen in a vector search.
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=68)** So why don't we dig a little bit deeper into our results?
>
> **[1:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=72)** Let's update our search query to retrieve the score and explain score metadata and see what that tells us.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=86)** First, let's inspect the score.
>
> **[1:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=89)** The score is a measure of how well that object meets the search criteria like the BM25 score, and here you'll also see the explanation of the score.
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=100)** This shows us what hybrid search does.
>
> **[1:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=103)** What we're seeing is that the top result did well in the vector search as well as the BM25 or the keyword search.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=112)** Remember that BM25 is the specific keyword search algorithm that we're using, and because hybrid search combines two searches, the vector and the keyword searches, the results are weighted relative to each other based on a parameter.
>
> **[2:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=128)** Alpha is adjustable by the user.
>
> **[2:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=130)** You can adjust it to tune whether you want the hybrid search to act more like a keyword search by moving alpha towards zero or more like a vector search by moving alpha towards one.
>
> **[2:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=141)** To demonstrate, let's try the same search with the alpha of zero, which is a pure keyword search.
>
> **[2:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=151)** Now here, as you might expect, the only results that now come up are the objects that contain the exact word of which there's just the one.
>
> **[2:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=160)** You can try the same query yourself with a keyword search syntax, and the results here should be identical to our query here where the alpha is set to zero.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=169)** Hybrid search is a very practical tool that we see quite a lot in the wild.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=174)** Of course, there's no best or one-size-fits-all search type, but hybrid search can work very well with real-life datasets by providing a balanced approach.
>
> **[3:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=184)** Because it combines the two complimentary search types and allows you to weight them with the alpha value, we often see this capability being adopted as the favorite search type.
>
> **[3:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=196)** As always, please try it out, including trying different queries and alpha values to see what happens.
>
> **[3:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=203)** Next, we'll take a look at retrieval augmented generation.
>
> **[3:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/hybrid-searches?u=76281980&t=206)** This is where we can go beyond simple data retrieval by combining data with the power of large language models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (1), type. (1)
> **Definitions:** is a  (4)
> **Env Vars:** bm25 (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Retrieval augmented generation
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=0)** - [Instructor] Let's talk about retrieval-augmented generation, which combines the power of generative AI models with the grounding of your real data.
>
> **[0:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=9)** I think many of you have probably heard of generative AI models.
>
> **[0:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=13)** For example, large language models like the GPT or the Llama models that can produce human-like text.
>
> **[0:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=20)** These models can do all sorts of things like recite the capital of Australia, explain how gravity works, or even write a haiku about toothbrushes.
>
> **[0:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=29)** These models can do it all.
>
> **[0:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=32)** In fact, they've even been shown to perform relatively high levels of reasoning or deduction as well.
>
> **[0:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=39)** But as amazing as they are, they're not quite perfect.
>
> **[0:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=44)** They often fall short by confidently producing answers that are either out of date or just simply incorrect.
>
> **[0:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=51)** These are often called hallucinations.
>
> **[0:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=54)** One key reason for this is that the data used to produce or train these models can go out of date or simply not be available.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=63)** Facts like the population of Australia change over time and some proprietary data like customer data or company information may not have been available to the model in the first place.
>
> **[1:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=75)** This is where retrieval-augmented generation or RAG comes in.
>
> **[1:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=80)** RAG remedies this problem by retrieving relevant data and then providing it to the AI model along with a prompt.
>
> **[1:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=88)** So let's take a look at a few examples of RAG queries.
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=92)** Here's an example syntax for RAG.
>
> **[1:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=94)** This query will search for objects most similar to science fiction and then perform the task, which is to summarize each description.
>
> **[1:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=104)** Look at that, the models returned well-written summaries of the description like we asked.
>
> **[1:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=110)** And if you think the query syntax here looks familiar, you would be correct.
>
> **[1:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=116)** Here's an equivalent search-only syntax.
>
> **[1:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=118)** Just above the RAG query.
>
> **[2:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=121)** You'll see that the only differences are the sub-module name here and the prompt that's provided with the RAG query.
>
> **[2:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=130)** The thing is RAG is a two-step process.
>
> **[2:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=133)** The first is a search, just like any of the searches we've just learned about.
>
> **[2:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=138)** And then we can send some of the search results along with a prompt to the AI model for it to base its answer on.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=146)** Let's try another one.
>
> **[2:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=149)** Here's a RAG query where we find objects related to science fiction.
>
> **[2:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=154)** We then pass a group task prompt to say, "Extract some of the key common themes in these movies."
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=163)** And if we take a look at the generated output, you'll see that the model has produced quite a good answer.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=169)** And it was able to do that even though the data is synthetic and available only to us.
>
> **[2:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=175)** This is enabled by retrieving the data from a proprietary data source and sending it to the model.
>
> **[3:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=182)** RAG is a powerful two-step process, combining search or retrieval with generation.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=189)** RAG can address generative AI models' potential shortcomings like hallucinations or simply not having the right data available to it.
>
> **[3:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=197)** So as such, RAG is a really exciting area that's transforming how we think of data and deal with it.
>
> **[3:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/retrieval-augmented-generation?u=76281980&t=204)** So of course we'll be expanding on the idea further as we go on in the course as well.

> [!info]- Semantic Content
>
> **Env Vars:** rag (11), gpt (1)
> **Code Keywords:** let (3), module (1), pass (1)
> **Definitions:** is a  (4)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Vector database queries
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=0)** - [Instructor] For this first challenge, you're going to put your querying skills into practice by writing your own database queries.
>
> **[0:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=12)** To get started, open up this Python script, which provides some code to help you get on the way.
>
> **[0:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=18)** The provided code here connects to the database, gets the movie collection, and then fetched a couple of objects before displaying the results on the screen.
>
> **[0:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=28)** The first query will be a hybrid search on a collection called, Review.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=33)** This collection has just the one property called, body.
>
> **[0:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=37)** And the query string can be any text you'd like to search for in a movie review.
>
> **[0:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=41)** As a starting point, maybe I'd suggest a phrase, fun for the whole family, but again, it can be anything you would like to search for.
>
> **[0:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=49)** Try this with two different alpha values, 0.1 and 0.9, and see if the results differ at all.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=55)** If they do, if they don't, consider why they might be.
>
> **[1:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=60)** And retrieve the top three results only, which should be sufficient for this exercise.
>
> **[1:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=65)** The second query would be a RAG query on the Movie collection, and we'll do that with a vector search for the string, action adventure.
>
> **[1:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=74)** Grab the top five results, and then prompt the language model to generate a tagline for each movie based on the movie's title and description properties.
>
> **[1:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=85)** And, of course, for each search, display the relevant parts of the response so that you can inspect them.
>
> **[1:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-vector-database-queries?u=76281980&t=91)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Versions:** 0.1 (1), 0.9 (1)
> **CLI Commands:** python (1)
> **Code Keywords:** for. (1)
> **Env Vars:** rag (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Vector database queries
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=0)** - [Instructor] Okay, let's now take a look at how I implemented those tasks for the challenge.
>
> **[0:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=11)** The first task was to perform a hybrid search on the review collection.
>
> **[0:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=16)** So first of all, I got the review collection like so, so that we can interact with it.
>
> **[0:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=23)** Now I know that I need to run two queries, so let's set up a for loop here with two alpha values.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=30)** And then of course, I'm running a search.
>
> **[0:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=32)** So I'll look in the query submodule for the hybrid method, where my query here is "fun for the whole family".
>
> **[0:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=39)** We'll provide the alpha value from our loop, and then limit the number of results to three.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=45)** I would also like to get the score metadata, so I'll specify the return metadata parameter and use the metadata query class.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=55)** And then with the response, I've written a note here to display what the alpha value used was, so I can see it in the results before iterating through the objects and displaying the review body, as well as the metadata score.
>
> **[1:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=71)** And when we run this code, I get these results for each alpha value.
>
> **[1:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=81)** And what did you think of these results?
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=83)** For me, the second set of results with the alpha of 0.9 matches the intent of my search better, which was looking for movies that talked about enjoyment for the family, as in family friendly movies.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=96)** Now the alpha value of 0.9 very much lends the result towards vector search.
>
> **[1:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=101)** So it makes sense that these results align with my general meaning of the phrase of the query, but of course, your mileage may vary depending on your search string, intent, and the data set itself.
>
> **[1:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=115)** Now let's have a look at the second task, which was to construct a RAG query.
>
> **[2:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=120)** We were instructed to use the movies collection.
>
> **[2:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=122)** So we'll use the movies object, and it's a RAG query, so we'll use the generate submodule.
>
> **[2:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=128)** And it's a vector search, which means we need to use the near text method with action adventure as our query string.
>
> **[2:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=137)** Now our task was to generate a tagline for each movie.
>
> **[2:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=141)** As a result, the RAG task to use here is single prompt, that will act on each individual object and send the object to the language model with the query.
>
> **[2:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=153)** So here's the prompt that I came up with.
>
> **[2:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=156)** Here, I ask the language model to suggest a tagline for this film based on the title and the description.
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=163)** And I break down what the title is, as well as what the description is.
>
> **[2:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=167)** Just a reminder, again, this is a template for Weaviate to replace these variables within the braces, within the collection property.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=174)** This is not a Python F-String.
>
> **[2:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=177)** The results can then be printed out with something like this.
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=180)** We'll have a heading for generated results.
>
> **[3:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=183)** And for each object, we'll print out the movie information, including the title and the description that the language model would've based its answer on before showing the generated tagline.
>
> **[3:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=198)** And of course, we should remember to close our client connection as well.
>
> **[3:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=204)** And now if we run this code, we're seeing the results for the earlier query as well.
>
> **[3:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=210)** And then we get our generated taglines.
>
> **[3:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=213)** So for the movie The Enchanted, we get a tagline like "Embark on enchanting journey" .
>
> **[3:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=218)** And for Galactic Odyssey, we get the tagline, "Embark on an ultimate space adventure to save Earth".
>
> **[3:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=224)** How does yours go?
>
> **[3:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=226)** New results will probably differ from mine for a couple of reasons.
>
> **[3:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=230)** One is that large language models are not deterministic.
>
> **[3:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=233)** And of course, your prompt probably differed from mine in some way or another, but hopefully you arrived at a similar query syntax as they did, and your language model was to generate a tagline that made sense in the context of the given information.
>
> **[4:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=249)** So that's your first challenge down.
>
> **[4:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=252)** If you can write queries like these, you are well in your way to making great use of vector databases.
>
> **[4:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=259)** But you might also be wondering, "Hey, how did the data get there in the first place?"
>
> **[4:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-vector-database-queries?u=76281980&t=263)** Well, that's exactly what we're going to explore and work on in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), this. (1)
> **Env Vars:** rag (3)
> **Versions:** 0.9 (2)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 2. Building a Vector Database

#### Create your own database
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=0)** - [Instructor] So far, we've been learning by running queries on our pre-populated demo database, but you probably know that there's no substitute for building something yourself.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=10)** Well, in this section, you'll get to do just that.
>
> **[0:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=14)** You'll get to create your own vector database instance, populate it with data, and run queries on it.
>
> **[0:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=21)** You can even use it to build a web app with it in the next section.
>
> **[0:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=26)** First, let's start with a database creation step.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=30)** At its core level, deviate is a free open source database software library, but it is packaged and offered through multiple installation or deployment methods to meet different users' needs.
>
> **[0:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=43)** For this course, we'll use a cloud-based managed solution called Weaviate Cloud Services.
>
> **[0:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=48)** The free tier should be more than good enough for us, so let's do that.
>
> **[0:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=53)** This will let us focus on the course and not about managing any hardware or infrastructure concerns, but if you do have another preferred method like running a Kubernetes cluster, please feel free to do so and come back.
>
> **[1:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=66)** You'll find the required information in the official documentation.
>
> **[1:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=69)** For those of us continuing with WCS, let's go to the address shown below to create our database.
>
> **[1:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=76)** If you are watching this later on, what we're doing is to create an account to log in and to create a Weaviate eight instance to use.
>
> **[1:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=84)** Even if the interface has changed.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=86)** These steps should still be generally applicable.
>
> **[1:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=90)** You probably don't have an account just yet.
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=93)** You can create one by clicking on this button right here.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=96)** I do have an account, so I'll just log in here using my email address and password.
>
> **[1:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=105)** Once you've logged in, all you need to do to create a new database is to click this create cluster button and follow the prompts.
>
> **[1:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=113)** I'll select the Sandbox tier, which is free with a limited lifetime.
>
> **[1:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=117)** Now, if you provide a cluster name like my Learning Vector database and click create, you should be good to go.
>
> **[2:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=126)** That will spin up a Weaviate eight database server in just a minute or so.
>
> **[2:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=131)** Once that's ready, you can click here to see cluster details like the URL and where to find your secret API key for this server.
>
> **[2:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=141)** So just like that you've set up your first vector database.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=146)** Next, let's connect to your own database with a similar connection script to one that you saw earlier.
>
> **[2:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=154)** Let's open utils.py again in our code editor.
>
> **[2:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=157)** Here, you'll notice this connect to my DB function.
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=163)** You can now set up this function to connect to your own database.
>
> **[2:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=166)** To do that, replace the cluster URL with the one that you find on the console like so, and also the API key that you can find here on the console.
>
> **[3:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=181)** Lastly, remember to update the open AI API Key, as you did before.
>
> **[3:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=188)** Now, if you open up this file and just simply run it, you should see it return true in the console.
>
> **[3:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=198)** Excellent, you are now a proud owner of a Vector database.
>
> **[3:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-your-own-database?u=76281980&t=202)** Next, we'll start to work with it by showing you a little bit more about how to interact with it using the Python client before going on to populate it with some actual data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), interface (1)
> **Env Vars:** api (3), url (2), wcs (1)
> **CLI Commands:** find (4), python (1)
> **Prerequisites:** set up (2)
> **File Paths:** utils.py (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)

#### Work with Weaviate
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=0)** - [Instructor] Now that you've got a Weaviate database instance set up, let's talk a little more about how to work with it.
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=7)** Weaviate's actually configured with many rest endpoints, which you can access directly.
>
> **[0:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=12)** For example, I can browse for the URL of a WCS instance and get this response, reassuringly telling me at the server's running, at least.
>
> **[0:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=22)** But if we try any of these links that are shown on the page, the server refuses to show us the contents as I'm not authorized.
>
> **[0:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=32)** That's good.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=33)** We want our database to be access controlled for security.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=38)** This is why we used an API key in our earlier code examples to authenticate ourselves.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=45)** Authentication with a username and password is also supported, but we'll stick to using the API key for our course.
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=52)** And since it's likely that you'd be working with Weaviate using a client library, let's continue to look at what else we can do with the client.
>
> **[1:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=61)** You've seen code examples like this earlier when we looked at queries, but now let's take a little more time going through it in detail, starting with this import statement.
>
> **[1:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=72)** What we're doing here is to import the necessary classes that the Python client provides for typing.
>
> **[1:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=78)** We'll use quite a few of them, so we import them all as wvc here for convenience.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=83)** You'll see it used throughout, like here, when we specify what metadata to retrieve.
>
> **[1:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=89)** And just above, you see this statement.
>
> **[1:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=91)** A collection of objects in Weaviate is like a table in SQL.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=96)** Here we create a Python object for interacting with the movie collection, whether it be data operations like creating, updating, and deleting objects, running queries like keyword, vector, and hybrid searches, or expanding on them with RAG requests.
>
> **[1:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=114)** Having typed objects help us out with responses as well.
>
> **[1:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=118)** When we run this search query, the response is structured so that you can get code completion as you work.
>
> **[2:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=125)** For example, the response has an object attribute for the results set, with each one having attributes like properties, metadata, references, and so on.
>
> **[2:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=135)** This particular example prints the properties and the vector distance metadata that we requested.
>
> **[2:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=142)** You might get different object types with different attributes depending on the query, but these hints and code completions will really make your life easier as a developer.
>
> **[2:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=153)** And when we're done, it's best to close the connection so that we don't have hanging connections against the server.
>
> **[2:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=160)** So that's the basics of working with your instance of Weaviate.
>
> **[2:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=164)** As we've said before, if you find this all to be a bit foreign, don't worry.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=169)** It'll all become more and more familiar over time as you gain experience.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=174)** And if you're unsure about anything, please check out the official documentation, where there'll be plenty of code examples on the latest syntax.
>
> **[3:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/work-with-weaviate?u=76281980&t=182)** Now that you know the basics of working with Weaviate, let's go into adding some data to your database by creating collections and importing data.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), url (1), wcs (1), sql (1), rag (1)
> **Code Keywords:** let (4), continue (1)
> **CLI Commands:** python (2), make (1), find (1)
> **Analogies:** for example (2)
> **Best Practices:** it's best to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create an object collection
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=0)** - [Instructor] What we need to do next is to create a framework for our data.
>
> **[0:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=4)** This is also called creating an object collection in Weaviate.
>
> **[0:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=8)** This is a little bit like creating tables in relational databases.
>
> **[0:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=13)** Collection definitions are where we'll define the structure of the data, like what properties each collection will contain and their data types, like whether to hold text data, numbers and so on.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=24)** This is also where we'll define how the database will work with the data.
>
> **[0:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=28)** This part is a little bit like choosing a set of tools.
>
> **[0:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=31)** For example, we'll define what vectorizer model will be used, which generative model to use for rag applications, and how the database is going to organize or index the data for optimized queries.
>
> **[0:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=44)** So when you make these decisions, just like building something in the real world, it's good to think about the end goal so that you can choose the right tools for the job.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=55)** Vector database can deal with almost any kind of data, but for this course, we'll build a movie database and later on we'll even build a web app on top of it too.
>
> **[1:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=65)** Who doesn't like movies, right?
>
> **[1:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=67)** As mentioned before, we have a synthetic data set of movies.
>
> **[1:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=71)** The data set includes a host of data for each movie, like movie title, brief description, longer synopsis, year and rating, and it even includes critics reviews for our movies.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=83)** Very handy for avoiding the terrible films even if they're made up.
>
> **[1:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=87)** Now let's begin to create our data collection.
>
> **[1:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=91)** Seeing how it's a movie database, we'll start with the collection for individual movies, first, we'll need a name.
>
> **[1:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=99)** Let's call it movie after individual objects.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=102)** And then let's define how the data will be vectorized and what generative AI tool to integrate with.
>
> **[1:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=109)** In Weaviate this is done through the concept of modules.
>
> **[1:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=113)** As mentioned before, we'll use OpenAI here, but it could be any number of different modules.
>
> **[1:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=119)** You could also specify specific models, but we'll stick with the default ones for now.
>
> **[2:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=125)** Next, we define properties, which are like columns in SQL.
>
> **[2:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=130)** Each property needs a name and a data type at a minimum.
>
> **[2:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=135)** So we'll add properties for the title and description as text.
>
> **[2:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=140)** We'll also save the movie row ID so that we can easily identify them.
>
> **[2:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=145)** And the movie here, these are whole integers so we'll use the INT data type.
>
> **[2:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=152)** Now I know that the rating data is in decimals, so let's set that as a floating point number, which is called number in Weaviate.
>
> **[2:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=161)** The last property is the director data, which is in text.
>
> **[2:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=166)** This will let us filter movies by a particular director name, for example.
>
> **[2:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=170)** But let's pause to consider.
>
> **[2:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=172)** Does the name of the director add much to the meaning of the movie vector?
>
> **[2:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=177)** For me, I would want to use this collection for just searching movies by their title and their description.
>
> **[3:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=184)** So what we can do is to set Weaviate to skip this property when determining its vector.
>
> **[3:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=191)** Commonly you might also do this with text of things like product IDs or URLs.
>
> **[3:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=197)** Basically any text that doesn't contain much meaning but might just add noise to your vector, and we'll make sure to close our connection.
>
> **[3:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=206)** And that's it, you can run this code to create the collection for movies on your database.
>
> **[3:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-an-object-collection?u=76281980&t=213)** Now, of course, we don't yet have any data in this collection, so let's go ahead and do just that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), type. (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (2)
> **Env Vars:** sql (1), int (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Basic data import in Weaviate
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=0)** - [Instructor] It's time to add data to our database.
>
> **[0:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=4)** In many ways, we've done a lot of the hard work already.
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=7)** We've created a database and created a scaffold or blueprint by defining our movie collection.
>
> **[0:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=15)** All we need to do now is to load our data and pass it to Weaviate in a way that matches the collection definition.
>
> **[0:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=22)** So let's take a look.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=24)** What we're going to do first is to load the dataset using a library called pandas.
>
> **[0:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=29)** This line loads our movie data from a CSV to a nice tabular format called a DataFrame.
>
> **[0:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=35)** But of course, you can load your data any way you like.
>
> **[0:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=39)** We'll connect to our database and then get the movie collection that we just defined.
>
> **[0:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=44)** Next, we're going to create a list of data objects, one for each movie by iterating through the movie rows.
>
> **[0:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=51)** Next, we'll create a list of properties.
>
> **[0:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=54)** This is the data that's going on to our collection.
>
> **[0:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=57)** The keys on the left match the collection property names and the values on the right are column names from our DataFrame.
>
> **[1:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=66)** Then we'll generate a unique identifier, also called a UID, for each object.
>
> **[1:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=72)** UUIDs are how Weaviate internally identifies objects.
>
> **[1:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=77)** We'll use this helper function here to generate a deterministic identifier using the movie ID as the original source.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=86)** And then we can use the data properties that we created and the UUID to create a data object instance for each movie.
>
> **[1:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=95)** Specifying an ID like this allows us to prevent duplication.
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=100)** Because the movie's row ID is unique, the UUID will be as well.
>
> **[1:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=105)** But another important factor is that this is a deterministic or predictable way of generating IDs.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=112)** And as a result, if the data changes, all we need to do is to insert it with the same UUID generated from the same movie ID.
>
> **[2:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=122)** Doing so will override the data and you will not as a result have any duplication.
>
> **[2:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=128)** Next, we'll append the object to our list and then insert our dataset with the insert_many method.
>
> **[2:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=136)** Note the syntax here.
>
> **[2:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=138)** We've used something like movies query.number times before for our searches, but now we're using movies.data.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=146)** What the Python client does here is to separate functions or methods into submodules like query or data or generate to make usage easier for developers.
>
> **[2:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=156)** We'll close the connection and then run this code.
>
> **[2:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=161)** So when we now run this code with the insert_many method, it'll populate Weaviate with the movie data.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=169)** Note that while Weaviate does so, it'll contact the OpenAI API.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=174)** Remember that we defined the vectorizer module earlier to obtain vectors to represent each object.
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=180)** You probably also remember that we provided the OpenAI API key in our connection code earlier.
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=187)** That's the key that's going to be used by Weaviate during the import to create the vectors.
>
> **[3:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=192)** Now we'll run the code.
>
> **[3:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=194)** It shouldn't take a lot of time.
>
> **[3:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=196)** And just like that, you've built a fully functioning vector database.
>
> **[3:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=201)** This means you can already run any of the queries you've learned about earlier, whether they be vector, keyword, or hybrid searches, as well as filters.
>
> **[3:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=211)** In fact, I'd encourage you to try and run some of the queries you've learned about on your own database.
>
> **[3:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=217)** So that's it for basic imports or object insertions.
>
> **[3:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=221)** We're almost done here building our database.
>
> **[3:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/basic-data-import-in-weaviate?u=76281980&t=224)** Before we wrap up, let's move on to references, which will let us establish relationships between collections.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1), function (1), override (1), module (1)
> **Env Vars:** uuid (3), api (2), csv (1), uid (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** insert_many (2)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Establishing relationships with references
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=0)** - [Instructor] So far, you've seen how to define our movie data collection as well as how to populate it, but this didn't include a common aspect of data sets, which is relationships.
>
> **[0:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=12)** In real life, data objects are often related to each other in some way.
>
> **[0:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=17)** A product might belong to a company, a book has an author, and a restaurant or a movie might have reviews.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=24)** So how do we model these relationships?
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=27)** Well, that's where references, also called cross references, come in.
>
> **[0:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=32)** In Weaviate, references are created by defining them between collections.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=38)** In our data set, we happen to have reviews for our movies.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=40)** So let's model this relationship between these two collections.
>
> **[0:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=44)** Each movie can have one or more reviews, of course, and when we find the movie, we would like our users to be able to see what reviews are associated with each one.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=55)** We can do this by creating a reference property called hasReview that'll point each movie to its corresponding reviews.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=63)** So far, we've defined the movie collection only.
>
> **[1:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=67)** To implement our relationships, we'll need to add the collection definition for reviews before adding references to them from movies.
>
> **[1:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=75)** This will let us retrieve reviews that are associated with each movie without directly searching for any reviews.
>
> **[1:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=82)** To make this more concrete, let's have a look at some code examples.
>
> **[1:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=87)** Here's one that prepared earlier, modifying our collection creation script.
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=92)** We'll just start by deleting our previously created data and start again.
>
> **[1:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=97)** This time through, we'll add a review collection first.
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=100)** It's a pretty simple collection definition with the same vectorizer and generative module configurations and just the one property for the review body.
>
> **[1:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=110)** And then we come to our movie collection.
>
> **[1:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=113)** Now this collection definition is identical to what we defined before, but this time we'll make a modification to specify the reference or the relationship between movies and reviews.
>
> **[2:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=126)** And we'll do that by specifying a value for the reference parameter.
>
> **[2:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=131)** We'll define a reference property instance with a name hasReview.
>
> **[2:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=136)** And all we need to do then is to point it to the review collection by providing the name of the collection, which I've done here by reference.
>
> **[2:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=145)** And that's it.
>
> **[2:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=145)** If you run this code, it'll create those two collections in your database.
>
> **[2:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=152)** Data import code here has been updated in the same way as well.
>
> **[2:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=156)** Now instead of importing data for the one collection, we'll import data for two collections, but the import process largely remains the same.
>
> **[2:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=165)** For each collection, we iterate through the movie data and import them in sets.
>
> **[2:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=170)** This goes for reviews, as you see in this code block.
>
> **[2:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=175)** This iteration is just so that it happens that there are three reviews here for each movie in our data set, and they're called Critic Review 1, 2, or 3.
>
> **[3:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=185)** And just as before, we can add the objects by using the insert_many method.
>
> **[3:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=190)** And again, the movie import process has remained largely the same.
>
> **[3:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=194)** But interestingly, you'll notice that we here loop through the review data while importing movie objects.
>
> **[3:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=201)** So why might we do that?
>
> **[3:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=203)** Well, that's so that we can add them as references to each movie.
>
> **[3:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=208)** What we're doing here is to generate IDs or reviews in the same way as we did further above while importing the reviews.
>
> **[3:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=215)** And then we create the references here to each review from the movies so that the relationships between the movies and the reviews are created when we create the movie objects.
>
> **[3:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=227)** If we run the script, we'll have a full data set again, but this time with a set of reviews as well as movies that refer to them.
>
> **[3:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=238)** So that's a quick tour of references.
>
> **[4:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=240)** This is a more advanced topic for sure, but once again, the key thing to remember is not the syntax, but the fact that you can model relationship between data sets using references.
>
> **[4:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=252)** Well done.
>
> **[4:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=253)** You've built quite a fully featured database with multiple collections and references already.
>
> **[4:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=259)** I think we've covered quite a lot of ground.
>
> **[4:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/establishing-relationships-with-references?u=76281980&t=261)** So let's catch our breath with a very brief recap.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** hasreview (2), insert_many (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Recap: Building a vector database
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=0)** - [Instructor] We've done a lot.
>
> **[0:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=2)** We've learned how to create structure and add data to a vector database.
>
> **[0:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=8)** Let's pause here to recap the steps so far, and also discuss what you can do with the database.
>
> **[0:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=14)** First, you started up a new database instance with (indistinct) eight cloud services.
>
> **[0:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=19)** This created a server that you or any other user can communicate with, given of course, the right authentication details.
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=27)** And then, we created a blueprint for our data.
>
> **[0:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=31)** This meant creating the collections for our data with each collection definition, including the data structure like which properties and references to store.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=40)** It also included how the data would be managed, like configuring modules for integrated vectorization and retrieval augmented generation.
>
> **[0:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=50)** We then imported the data into our database instance according to the collection definition.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=55)** In other words, building each object according to that blueprint that we defined.
>
> **[1:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=60)** That meant providing the property values.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=63)** And then you reference data for each object according to the collection definition.
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=68)** And this means that now you can perform any other searches you learned about on your own database.
>
> **[1:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=74)** So, here's an example.
>
> **[1:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=77)** To run queries on your own database, you can simply replace the connection script from using the connected demo DB function to connect to my DB function as I've done here.
>
> **[1:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=90)** You'll be then able to run any of the existing queries on the database you've just built.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=96)** And remember that this is possible because as you imported the data, the vector database stored that data as well as creating what's called indexes to help you look through the data efficiently.
>
> **[1:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=109)** What we've built so far is obviously a fairly small database, but excitingly, you now have the tools to potentially build a database with millions or even billions of objects.
>
> **[2:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=121)** Given of course, the appropriate hardware resources, vector database can scale to these types of numbers while remaining performant, which is really exciting and a differentiating factor in this data rich age.
>
> **[2:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=134)** And the skills to populate those larger databases really don't differ from populating a smaller database.
>
> **[2:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=140)** Now, in the next section, let's start to put this in something a little bit more user-friendly.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=146)** What we'll do is to create a friendly interface for our users by building a simple web app.
>
> **[2:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recap-building-a-vector-database?u=76281980&t=153)** There, you'll see how to create a web app that's powered by a vector database to really take this journey end-to-end.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), interface (1)
> **Definitions:** in other words (1), means that (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Add another object collection
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=0)** - [Instructor] We are going to extend the database that you created earlier to add another collection called Synopsis.
>
> **[0:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=11)** This will separately store the synopsis for each movie, which can be thought of as a summary of key ideas for each movie.
>
> **[0:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=18)** So in contrast to the movie collection, whose vectors are based on the title and the brief description, the synopsis collection will allow searching by the vector of this slightly richer, fuller idea of each movie.
>
> **[0:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=31)** Start by extending the collection definition in this file.
>
> **[0:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=35)** As before, we provide an outline that you can start it from.
>
> **[0:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=39)** The synopsis collection can have a similar structure to what you've seen before, for example, the review collection.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=45)** It just needs the one property called body and the reference property for movie that'll point to the movie collection.
>
> **[0:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=53)** And then we'll add another reference property to the movie collection so that for each movie you can find the corresponding synopsis as well.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=62)** Take a note of this hint that says you can use the movies.config.add.reference method to create the references.
>
> **[1:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=69)** I'll note that we haven't tackled this exact task before of adding references after a collection's been created.
>
> **[1:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=75)** So if you get stuck, take a look at these hints and also take a look at the docstrings for any functions or methods you're not sure about.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=83)** The docstrings will provide you with the help and guidance for how to use these particular functions.
>
> **[1:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=89)** As a bonus task, you can also attempt to import the synopsis data by extending this import file.
>
> **[1:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=97)** Once again, the structure for these imports will be very similar to what you've seen before with the other collections.
>
> **[1:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=104)** The main difference will come from the fact that you're now working with different collections, which will have different property names and column names, but generally speaking, the overall process of looping over objects and then importing them in sets don't necessarily change.
>
> **[2:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=120)** Once again, another difference might be adding references from these movies to synopsis.
>
> **[2:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=126)** Take a look at these hints and the associated docstrings for these methods if you need any further guidance.
>
> **[2:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-add-another-object-collection?u=76281980&t=132)** Good luck and have fun.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1)
> **File Paths:** movies.config (1)
> **CLI Commands:** find (1)
> **Code Keywords:** from. (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Add another object collection
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=0)** - [Instructor] Okay, let's now have a look at my challenge solution.
>
> **[0:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=9)** We'll need to create our collection first, which I'll do with this client.collections.create method.
>
> **[0:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=15)** We'll give you the name Synopsis and use the same modules as above.
>
> **[0:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=20)** We'll need to create a property called body and it'll have a text data_type.
>
> **[0:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=26)** So these parts are essentially identical to the review collection above.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=30)** Something the review collection doesn't have is references.
>
> **[0:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=34)** For Synopsis, here's one of them here.
>
> **[0:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=37)** We'll call it forMovie, since this is a synopsis for a particular movie and we'll point it to the Movie collection.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=45)** And that's the Synopsis collection defined.
>
> **[0:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=48)** The next task was to add a reference property to the Movie collection pointing to the Synopsis collection.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=55)** And our hint was to use the movies.config.add_reference method.
>
> **[1:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=60)** So let's start with that.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=62)** And at this point you might not have been so sure what to do next, but if you move your mouse over this method, you'll see that the argument should be of the ReferenceProperty data type.
>
> **[1:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=74)** So following that, we'll add an instance of the ReferenceProperty class with the name hasSynopsis.
>
> **[1:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=80)** Remember, this is for pointing from the movie to the synopsis and target the Synopsis collection.
>
> **[1:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=88)** And if we now run this code, it'll redefine our collections with the difference being that before we had two collections for Movies and Reviews.
>
> **[1:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=97)** Now you have three with Movies, Reviews and Synopsis.
>
> **[1:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=101)** With this done, let's now turn to the imports.
>
> **[1:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=106)** The first thing to do, of course, is then to load or get the synopsis collection.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=112)** And then the process of importing the synopsis objects would be very similar to what we showed before for the other collections.
>
> **[2:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=121)** So we'll create a list of objects, which are the synopses in this case, and iterate over the data rows.
>
> **[2:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=128)** Now our only property is called body, and it comes from the Synopsis column.
>
> **[2:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=133)** As before, let's create IDs for our Synopsis objects.
>
> **[2:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=137)** Now, we could use the synopsis text to generate these, but I'm actually just going to use the movie ID here.
>
> **[2:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=144)** Hey, and you might ask, doesn't that overwrite the movie objects, which will have the same ID?
>
> **[2:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=149)** Well, actually, in this case, the movie items will be safe.
>
> **[2:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=154)** The reason being that these synopses will be in a separate collection from the movies, and each collection is a distinct namespace.
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=163)** So then we can build a data object just like before with the properties and the UUID specified.
>
> **[2:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=171)** Remember to add the reference here under the ReferenceProperty name for movie with the target object being the movie collection, and they'll have the same movie ID since you're now pointing to the movie object with that same ID, but again, in a different collection.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=189)** Don't forget to add the data object from each iteration to our list.
>
> **[3:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=193)** And definitely don't forget to insert the list of objects into our database with the insert_many method.
>
> **[3:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=200)** We've got some print statements here also to print the responses and make sure that there were no errors.
>
> **[3:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=206)** And then once the synopsis objects are created, we need to create additional references that point from each movie back to each synopsis.
>
> **[3:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=215)** This is done similarly to creating objects, but we'll build a list of references this time, not a list of objects.
>
> **[3:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=222)** And the method that we use to insert these references will be different again, but let's go through the steps one by one.
>
> **[3:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=230)** First we'll create a list of references and iterate through our data.
>
> **[3:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=236)** We'll need UUIDs of the synopsis and the movie, but remember that we use the movie ID for both, and then we'll create the reference object that goes from the hasSynopsis property, but more specifically from the movie object to the synopsis object.
>
> **[4:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=253)** Remember that they have the same UUID.
>
> **[4:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=256)** Append the object and then add them all using the reference_add_many method.
>
> **[4:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=261)** And you're done.
>
> **[4:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=263)** Now running this code will add your data to the database, including the new references.
>
> **[4:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=270)** Note that the Movie and synopsis collections now have what's called a two-way reference because these objects refer to each other in both directions, and that means they can be retrieved in either direction by retrieving a movie from a corresponding synopsis or vice versa, which can be very handy.
>
> **[4:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=289)** If you've come this far, well done.
>
> **[4:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-add-another-object-collection?u=76281980&t=291)** You should now have a database that's identical to the demo database on the cloud, and that also means you can use either of the demo or your own database to build your web app in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), type. (1)
> **Code Identifiers:** hassynopsis (2), data_type (1), formovie (1), add_reference (1), insert_many (1)
> **Definitions:** is a  (2), is called (1)
> **Best Practices:** don't forget (2), remember to (1)
> **Env Vars:** uuid (2)
> **Analogies:** similar to (1), just like (1)
> **File Paths:** movies.config (1)
> **CLI Commands:** make (1)


### 3. Building a Vector Database-Powered App

#### Web apps and vector databases
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=0)** - [Instructor] These days, web apps drive much of our activity on the internet.
>
> **[0:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=5)** Unlike the classic static websites, modern web apps are powerful, interactive tools, just like traditional programs running on your local computing device.
>
> **[0:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=15)** But just like a website, web apps are incredibly accessible.
>
> **[0:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=19)** All you need to use a web app is an internet connection and a web browser, and this gives them great reach to a wide audience.
>
> **[0:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=29)** In this chapter, you are going to build a web app that is powered by a vector database.
>
> **[0:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=35)** More specifically, you'll be building a movie search and recommendation app.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=40)** It's going to be able to support a variety of search methods and filters, which means you'll be able to put into practice all the skills we've learned to date.
>
> **[0:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=49)** And the end user, in turn, will be able to run vector or hybrid searches and filter movies according to their criteria.
>
> **[0:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=57)** But that's not all.
>
> **[0:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=58)** The app's going to be able to recommend movies for its users based on what they tell the app about what they want to search and the viewing occasion.
>
> **[1:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=66)** It's pretty neat, right?
>
> **[1:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=69)** And to do this, we'll use the same movie database that we built earlier or the demo database.
>
> **[1:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=75)** By this point, they should be identical, but if you're not sure, you can use the demo database.
>
> **[1:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=80)** And we'll also use a Python framework called Streamlit.
>
> **[1:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=84)** Streamlit makes it really easy to produce these data-driven web apps.
>
> **[1:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=89)** Streamlit is another free, open-source Python library.
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=92)** Now, I know we haven't really covered Streamlit at all yet, but don't worry, the main reason for choosing Streamlit here was for its gentle learning curve.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=102)** You shouldn't need much code at all to get it to produce good-looking, functional web apps.
>
> **[1:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=108)** Additionally, for this exercise, we'll provide much of the Streamlit code for you.
>
> **[1:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=113)** The truth is, most of the principles that you'll be learning and applying here relate to how to work with a vector database and to produce a data-driven app.
>
> **[2:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=123)** These aspects will be applicable to other frameworks, whether using tools like Django or Flask, or even tools in other languages, like Express.
>
> **[2:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=132)** What's important is for you to conceptually see how a vector database can be connected to these interactive elements of a web app, how a user's inputs can be translated into queries, and how those queries and the responses can produce results that then can display back to the user.
>
> **[2:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=151)** Building a web app with a vector database might seem a little bit daunting now, but I think you'll very quickly start to see that you'll already have most of the skills to achieve this very, very cool task.
>
> **[2:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/web-apps-and-vector-databases?u=76281980&t=165)** Well, then, let's get on with building our web app.

> [!info]- Semantic Content
>
> **Code Keywords:** static (1), this, (1), let (1)
> **CLI Commands:** python (2)
> **Analogies:** just like (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Create a basic app
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=0)** - [Instructor] Before we build our fully featured movie recommendation app, let's start with something smaller.
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=6)** Here, we're going to build a simpler app using just placeholder data.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=10)** That way we can separate the task of building a web app from the task of getting it to work with a vector database.
>
> **[0:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=17)** The placeholder app that we build will also work as a guide when we connect our vector database to it as well.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=24)** Now, given that we don't expect you to learn a lot of Streamlit in a short amount of time, we'll go through this example step by step.
>
> **[0:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=31)** This code is provided for you so you don't have to build this yourself, although you can, of course.
>
> **[0:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=37)** Streamlit code generally runs top to bottom rendering elements on our browser in that order.
>
> **[0:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=43)** So first we can import the library and provide a title like so.
>
> **[0:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=49)** I've called it ReelRecommender. It's pretty catchy, right?
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=52)** And actually, we can run this app already by just going to shell and typing streamlit run, followed by the file name like this.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=62)** And that should show you an app with a title just like I'm showing here.
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=68)** Now, since I know that Streamlit supports tabs, I've outlined the app with multiple tabs with a tabs function, and now we can add components to each tab by using a context manager with the returned objects, like I'm doing here with a search tab.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=86)** Let's add a header and capture a text input using this text input function.
>
> **[1:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=90)** This is an input component that'll capture whatever the user enters, so we can later use this query string variable for our searches.
>
> **[1:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=99)** We'll also create two columns.
>
> **[1:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=101)** On the first column, we'll add elements for the context manager again, and what we'll add is a radio input for the user to select a search type.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=112)** On the other column, we'll add a slider input so that we can filter by ratings.
>
> **[1:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=118)** This list comprehension builds a few placeholder search results with some summary data objects similar to what we might expect to see in the real data from our vector database.
>
> **[2:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=129)** So we'll display these objects as well.
>
> **[2:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=131)** Now since these are search results, we'll create some collapsible expander sections so that just the title is shown to begin with, and the user can expand it if they really want to see more details about each movie.
>
> **[2:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=144)** We'll display our placeholder data here as though they're real.
>
> **[2:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=148)** Of course, they'll be replaced with a real data from our vector database.
>
> **[2:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=153)** Now, as you know, the synopsis tends to be a little bit long, so we'll truncate that so it doesn't take up too much space on our screen.
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=163)** Now, if you save the file and refresh the app, you should see that the app now has these three tabs and that you can interact with these elements that you've just created.
>
> **[2:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=172)** Next is the movie tab.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=174)** This tab is for users who want to get more details about each movie.
>
> **[2:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=179)** Here we'll have an input field so that if a user enters a movie ID, they'll be shown its data.
>
> **[3:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=185)** Well, at least place all the data for now anyway.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=189)** Here are the place all the data that I've created, including a full synopsis, again, hidden away on an expander.
>
> **[3:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=197)** The third tab will have our AI-powered recommendations.
>
> **[3:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=201)** This will take two text inputs, one for the kind of movie and the other for the context or the occasion of the viewing.
>
> **[3:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=209)** And once the user enters both pieces of information, it'll perform a RAG query to provide recommendations.
>
> **[3:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=217)** And of course, we'll to show the recommendations to the user.
>
> **[3:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=220)** We'll also display a few details for each movie that's been analyzed by the language model.
>
> **[3:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=226)** Now with those edits made and the file saved, when we refresh the app one more time, you should see each tab running and the features populated.
>
> **[3:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=237)** So all we need to do now is to connect our vector database to it.
>
> **[4:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/create-a-basic-app?u=76281980&t=241)** And up next we'll do just that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), this. (1), type. (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** just like (1), similar to (1)
> **Env Vars:** rag (1)
> **Speakers:** - [instructor] (1)

#### Connect the app to Weaviate
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=0)** - [Instructor] Although we've built an app with our desired layout, it's not quite ready for use, and that's because it only displays up placeholder data, and these inputs don't actually do a whole lot just yet.
>
> **[0:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=13)** So let's fix that by connecting our app to the database that we've built before.
>
> **[0:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=18)** More concretely, what this will do is to take user's inputs from these elements and then build queries by passing them on to our database.
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=27)** As you'll recall, this is the code we've built so far.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=30)** Let's begin to modify to connect to our database.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=33)** I'll start by adding these imports and creating our connection to the Weaviate instance.
>
> **[0:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=41)** And of course, remembering to close the connection.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=45)** I'm also going to wrap the rest of the streamlet code in a try block like this.
>
> **[0:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=50)** So I'll add the line try, indent all of this code, and add the finally close, and indent the client close function.
>
> **[1:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=61)** This will help to close the connection when we shut down the streamlet app.
>
> **[1:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=67)** Next up, we'll get the movie and synopsis collection to run queries against.
>
> **[1:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=72)** The search tab interface doesn't need to be changed here at all because it's already set up to capture our user inputs, so that's great.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=79)** What we do need to do is to take those inputs from the user, like the search querying and the radial selection, and build an actual query.
>
> **[1:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=87)** Remember that the radial selector can be for a vector or a hybrid search.
>
> **[1:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=91)** So let's build different queries for each case using if else statements.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=96)** First, we'll delete the placeholder data.
>
> **[1:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=99)** In all of these cases, we'll be using a filter.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=102)** So let's start by creating a filter object.
>
> **[1:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=105)** We'll ask you to only return movies with ratings greater than or equal to the lower of the ratings, and we'll combine that with a similar filter that requires a rating less than or equal to the higher value in the slider selection.
>
> **[2:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=120)** And you probably remember that we created references between movies and synopses earlier.
>
> **[2:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=124)** To fetch those, we'll use a query reference object like so.
>
> **[2:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=129)** We'll give it the reference property name to link on, which is hassynopsis, and then names of the properties to get from the target collection, which is called body in the case of the synopsis collection.
>
> **[2:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=141)** And now for the control flow, let's only have it perform a search when there is a search string entered.
>
> **[2:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=148)** If the selection is for a vector search, we'll have the app run the near text method.
>
> **[2:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=153)** The text input here will be the query string, and then we can pass on the filter, set a limit, and the return references.
>
> **[2:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=161)** And if it's not a vector search, we'll have the app send a hybrid query, which basically looks the same.
>
> **[2:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=167)** So we'll have the same query, same filter, same limit, and the same return reference.
>
> **[2:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=174)** The only difference here is that we're using the hybrid method as opposed to the near text method.
>
> **[3:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=180)** And lastly, I would like to actually show some results at least when the user hasn't input anything into the search bar.
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=186)** So I'm actually just going to call this fetch objects method, which will grab the first few objects from the database without any other search criteria.
>
> **[3:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=195)** We'll just apply the same filters that the user might have supplied like the movie filter range here, and of course, provide the return references data.
>
> **[3:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=203)** Now, this isn't quite going to work just yet, that's because we've yet to actually pass our outputs onto the user interface.
>
> **[3:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/connect-the-app-to-weaviate?u=76281980&t=211)** In the next video, let's explore how to do that, including spending a little bit more time on how to retrieve cross-references and how they work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (2), pass (2), this. (1), try, (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Parsing query responses
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=0)** - [Instructor] Our web app is now connected to the Weaviate instance and able to send queries using the user's inputs.
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=7)** Now let's pass the response back through the front end.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=10)** Each response to a search will have an object attribute containing a list of objects, so we can use that to loop through the actual response like this.
>
> **[0:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=21)** We can then retrieve each property through the properties attribute within each object.
>
> **[0:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=27)** Now the Python client returns all the properties by default as a dictionary, so we can access each property as a key, like rating here and movie_id.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=38)** Next, we need to retrieve the synopsis for each movie.
>
> **[0:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=42)** In the query above, we requested the reference data through the hasSynopsis reference property.
>
> **[0:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=48)** As a result, we'll have the requested data available through the references attribute within the response.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=55)** And this is how you would fetch that data.
>
> **[0:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=57)** Hopefully, this syntax is starting to look a little bit familiar.
>
> **[1:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=60)** We fetch a specific reference through the references attribute using its property name, in this case, hasSynopsis.
>
> **[1:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=69)** The corresponding value then is like a response on its own, giving a kind of recursive structure.
>
> **[1:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=75)** So to drill down, we can do that the same way as before.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=79)** The response, or in this case, the reference in this case will have an objects attribute.
>
> **[1:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=84)** Now we know that that's going to contain a list, and we know that each movie has just a one synopsis.
>
> **[1:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=90)** So we'll just grab the first object.
>
> **[1:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=93)** And within that synopsis, we can grab the body property within the properties attribute.
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=100)** And that will be our synopsis.
>
> **[1:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=103)** And since we've assigned that synopsis text into this variable, we can just display it just like we've done before.
>
> **[1:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=111)** The next task is to add details to the movie_tab.
>
> **[1:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=115)** Remember that this is where the user will enter a particular movie row ID and get details.
>
> **[2:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=121)** So let's get rid of our placeholder data first.
>
> **[2:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=126)** To get the movie data, we can rely on the movie's UUID.
>
> **[2:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=130)** Remember that when we imported data, we generated the movie's UUID from the row ID.
>
> **[2:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=135)** So let's do the same thing using the user's input.
>
> **[2:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=143)** And then this movie_uuid can be fed into the fetch_object_by_id method, which lets us grab just the one specific object from Weaviate based on its object ID.
>
> **[2:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=155)** Remember that the properties are returned by default, so we don't need to specify anything there.
>
> **[2:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=160)** The return_references on the other hand are not, of course.
>
> **[2:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=163)** So let's fetch the synopsis again using the exact syntax as before.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=169)** So that should be all of our data, which means we can pass it to the placeholder values.
>
> **[2:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=175)** In some of our other queries, we've had a response with multiple objects in it, but here, we've just fetched the one object, which means that the object itself called movie here will have a properties attribute with a dictionary so it can extract them just like I've shown here.
>
> **[3:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=191)** And if I now run this app again, these features should be fully functioning.
>
> **[3:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=199)** So our users can search our movie database like this, and if they like a particular movie, they can look into its details here, get the movie ID, and then enter into the Movie details tab, which we've just put together.
>
> **[3:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=216)** It's pretty neat, right?
>
> **[3:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=218)** So that's our movie search and details exploration tabs done.
>
> **[3:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=222)** There's just a one more feature to add, which is possibly the most exciting.
>
> **[3:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=227)** I'm talking, of course, about adding our recommendation feature using retrieval-augmented generation.
>
> **[3:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/parsing-query-responses?u=76281980&t=232)** We'll tackle that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), case, (2), this. (1), default, (1)
> **Code Identifiers:** hassynopsis (2), movie_id (1), movie_tab (1), movie_uuid (1), fetch_object_by_id (1)
> **Env Vars:** uuid (2)
> **Analogies:** just like (2)
> **CLI Commands:** python (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Recommendations with RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=0)** - [Instructor] Okay, at last, we've come to what, at least for me, might be the most exciting feature of this app.
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=6)** We're going to add a recommendation feature to this app using retrieval augmented generation or RAG.
>
> **[0:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=12)** Here's a reminder of our requirements.
>
> **[0:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=14)** The app's going to recommend movies to watch to our user based on two inputs, which are already shown here.
>
> **[0:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=21)** One is the search criteria or the kind of movie that they would want to watch, and the other is some context or occasion.
>
> **[0:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=28)** So what's needed then is for us to formulate a query in our code.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=33)** Firstly, what collection should the generative query be based on?
>
> **[0:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=37)** We could use the movie or the synopsis collection.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=40)** For me, I think it'll be better to base it on the synopsis.
>
> **[0:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=44)** Each synopsis contains richer details of the movie so it'll make more sense in my view for these recommendations to be based on those.
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=52)** And then what search type do we use?
>
> **[0:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=54)** Well, I guess the user could type in anything in their query.
>
> **[0:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=57)** Could be something general, like a genre, but it also could be something like a specific title.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=62)** So I would prefer a robust search method that can search by meaning, but also respect these exact matches when they occur.
>
> **[1:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=70)** And to me, that sounds like a job for a hybrid search.
>
> **[1:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=73)** So let's start to construct our query.
>
> **[1:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=77)** Here's our hybrid search on synopsis, and the query is just passed on from the user input.
>
> **[1:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=83)** And then how would we prompt the model?
>
> **[1:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=87)** First, we want an overall recommendation, so that's a job for our group task prompt.
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=92)** And as for the exact prompt, well, it's not an exact science, but I find that generally the more precise and specific prompts work well.
>
> **[1:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=100)** Here's my attempt at it.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=102)** The users looking to watch something types of movies for some occasion.
>
> **[1:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=107)** Provide a movie recommendation based on the provided movie synopsis.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=112)** Note that this is an F string.
>
> **[1:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=114)** So these names in braces, search string and occasion will be replaced by whatever the user inputs into our interface.
>
> **[2:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=121)** We'll have the large language model base the answer on three objects.
>
> **[2:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=125)** And since this is a query on synopsis, let's also retrieve the movie data.
>
> **[2:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=130)** So this is a reverse of how we've used references before where we've fetched synopsis based on movie data.
>
> **[2:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=137)** This time we'll use the reference property for movie to fetch details of the reference movie object from the synopsis.
>
> **[2:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=147)** So all that's left to do is to pass the results back to the user.
>
> **[2:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=152)** Let's start with the recommendation.
>
> **[2:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=153)** So you'll recall this was a group task, meaning there will be one generated answer for all the objects combined.
>
> **[2:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=161)** So what we can do is to display the generated text by fetching it as an attribute like so.
>
> **[2:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=167)** And then we can get details of each movie, like we've done before.
>
> **[2:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=170)** We'll access the objects attribute to get the list of movies, and from there we'll get rid of the placeholder data.
>
> **[2:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=177)** And here's a movie title.
>
> **[2:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=179)** Remember that this is again, fetched via the reference so we'll dig into the reference object and get the property of the movie object within the reference and the ID.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=189)** And let's get the movie description as well.
>
> **[3:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=193)** And they have the same variable names as before, so we don't need to change how they are displayed on the screen.
>
> **[3:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=199)** So if we save this and refresh our app, we should have a fully functioning web app that's connected to a vector database.
>
> **[3:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=208)** Let's try something.
>
> **[3:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=212)** Here's a recommendation for a thriller that's for any occasion.
>
> **[3:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=216)** What if I change the query to look for a thriller that might be suitable for watching with children?
>
> **[3:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=223)** Look at that.
>
> **[3:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=223)** It's providing two different recommendations based on the context, even though it's actually grabbing the same objects from the database.
>
> **[3:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=231)** In other words, our app can now find relevant parts of your data and process it using AI or a language model, taking into account specific inputs from our user based on their needs.
>
> **[4:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=245)** And this is only a relatively simple application.
>
> **[4:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=248)** Think about the possibilities for your own complex data and needs.
>
> **[4:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=252)** As we've mentioned before, this transformative capability is really exciting.
>
> **[4:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=258)** As long as you have the right data, you can find them with a vector database and then transform it using these AI models.
>
> **[4:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/recommendations-with-rag?u=76281980&t=265)** In the next chapter, let's talk a little bit more about exactly that, more complex real world data and some of the techniques that deal with them as you import them into a vector database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), interface (1), pass (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (2), is an  (1), in other words (1)
> **Env Vars:** rag (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Challenge: App enhancements
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=0)** - [Instructor] In this challenge, we're going to expand our app's capabilities by introducing some upgrades.
>
> **[0:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=11)** First of all, we're going to introduce some options for an additional search type.
>
> **[0:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=16)** So the user will be able to choose to run a keyword search in addition to our vector and hybrid search, if they so choose.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=24)** This should fit as an additional radio button next to the vector and the hybrid search options.
>
> **[0:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=29)** We've added the keyword search option here for the radio button in Streamlit, but you'll have to have that reflected in the queries and make sure it gets sent to deviate.
>
> **[0:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=39)** The second feature is to add another filter, more specifically to add a year range filter for the user to select.
>
> **[0:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=47)** The year filters will be set by using minimum and maximum years as inputs and only matching movies that fall within that criteria.
>
> **[0:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=56)** Again, we provided the UI element here for you, so all you need to do is to construct the filter.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=63)** And, lastly, we'd also like you to extend the Movie tab so that each movie's reviews are also displayed on that tab.
>
> **[1:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=70)** This will help the users to see, along with the movie data, what the critics thought about the movie.
>
> **[1:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=76)** As I've said before, this course is not really about learning how to write web apps, although if you do, that's great.
>
> **[1:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=82)** So all we've done is to provide hints and some code snippets here on how to use Streamlit's interface elements.
>
> **[1:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=90)** Your job will be to connect those elements to the queries to make sure that the right outputs are created and then the response is passed on to the user.
>
> **[1:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-app-enhancements?u=76281980&t=98)** Okay then, good luck and have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** type. (1), interface (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: App enhancements
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=6)** - [Instructor] Okay, here's my solutions to challenge exercise.
>
> **[0:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=9)** You are asked to make improvements through our app by adding a keyword search option, add a year based filter, and to show review data for each movie.
>
> **[0:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=20)** The UI element for selecting keyword search had been added already.
>
> **[0:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=25)** So what we needed to do was to construct the keyword or BM25 search query.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=30)** The way I did it was to add an if else clause just here if the input was keyword, and then construct a search just like this.
>
> **[0:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=42)** Remember that BM25 is the search ranking algorithm and the method name for keyword searches.
>
> **[0:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=48)** And once you've called that function, you can pass the same parameters as you've done above.
>
> **[0:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=55)** So that's our keyword search implemented.
>
> **[0:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=58)** And now let's get onto the filter.
>
> **[1:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=60)** Again, the UI has been done already.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=63)** We can capture the user's inputs as integers.
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=68)** Now just be mindful that the inputs here must be integers because we've defined the year property to be an integer at the database level.
>
> **[1:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=77)** Once we've done that, what we need to do is to add those conditions to our filter.
>
> **[1:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=82)** Now this is an additional requirement, so the right operator would be an and.
>
> **[1:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=87)** So we can add that with an ampersand and construct the filter.
>
> **[1:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=92)** This filter of course will make sure that the year is greater than or equal to the minimum specified year.
>
> **[1:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=99)** And this will do a similar thing, but for the maximum year and make sure the data that's returned has the year that's less than or equal to the maximum year specified.
>
> **[1:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=112)** So lastly, let's fetch and display the review data.
>
> **[1:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=116)** For this, we need to remember how the movie collection is linked to the review collection.
>
> **[2:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=122)** If we now inspect the collection definition for the movies, you see that the collection has a hasReview property that links to the review collection.
>
> **[2:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=131)** This is what we're going to use to fetch or query the referenced collection.
>
> **[2:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=138)** The general pattern here is the same as a hasSynopsis reference.
>
> **[2:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=143)** We use the query reference class and then link on the hasReview reference property instead of the hasSynopsis property, which we use above.
>
> **[2:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=152)** And then we get the body property back as that is the property in the review collection.
>
> **[2:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=159)** Now we need to remember to do something with the data that is returned as this is an additional data that's returned that wasn't displayed before.
>
> **[2:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=166)** In my case, I added a section at the bottom of the tab just here.
>
> **[2:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=173)** So I add a subheader called Reviews and just iterate it through each review like this, display a little bolded heading for each review.
>
> **[3:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=181)** This is just markdown syntax.
>
> **[3:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=184)** And then show the review body for each review.
>
> **[3:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=190)** If we save that and run the app again, we now see that the app has been updated.
>
> **[3:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=197)** We have an additional keyword option here in the radio buttons, and we have the year filters.
>
> **[3:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=203)** Let's pick a keyword search for the word time, and then perform our search.
>
> **[3:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=211)** And if we change the year filter, let's say to between 1980 and 2000.
>
> **[3:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=218)** You see that there's just the one hit that meet these criteria.
>
> **[3:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=223)** And if we inspect the results in the movie details tab, we see that the year is indeed within our criteria.
>
> **[3:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=232)** And what else do we have here?
>
> **[3:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=234)** We actually have the reviews displayed as well.
>
> **[3:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=238)** I hope you found this interesting.
>
> **[3:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=239)** There's obviously a lot that you can do with apps like this that'll be really valuable and interesting to the end user.
>
> **[4:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-app-enhancements?u=76281980&t=247)** So I would encourage you to continue to tinker with apps like this or even build your own powered by your own data sets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2), this. (1), function (1), pass (1)
> **Code Identifiers:** hasreview (2), hassynopsis (2)
> **CLI Commands:** make (3)
> **Env Vars:** bm25 (2)
> **Definitions:** is an  (2)
> **Analogies:** just like (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 4. Making a Vector Database Work for Your Data

#### Messiness of real data
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=0)** - [Instructor] Up until now, we've dealt with relatively neat data sets that have been pretty straightforward to work with.
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=7)** Our movie data, for example, is contained in a tabular CSV format, and we haven't had to do much further processing than deciding which columns to use and what the corresponding properties might look like in our database.
>
> **[0:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=21)** When it comes to dealing with real data, though, things can look a little bit trickier.
>
> **[0:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=26)** Data, especially semantic data like text, can often be quite messy.
>
> **[0:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=33)** Take a look at this web page, for example, from Wikipedia.
>
> **[0:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=36)** There's a great deal of really useful information in here, but it doesn't quite lend itself to a simple data import, like what we've done here, for a couple of reasons.
>
> **[0:46](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=46)** First of all, you'll see that the page is actually quite long.
>
> **[0:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=51)** Remember that each data object will be saved with one vector that represents its meaning.
>
> **[0:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=56)** What this means is that in this particular case, we might not want to save the entire page as one data object, but break it down as a series of smaller portions so that we can find the relevant sections from it for better precision.
>
> **[1:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=71)** This is called chunking.
>
> **[1:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=73)** And we'll cover some examples of it on how to chunk data very soon.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=79)** Another is a matter of context.
>
> **[1:22](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=82)** If we're reading a book, we would be aware of the title of the book and perhaps already have an idea of what it's about.
>
> **[1:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=89)** This information is a very useful part of understanding the overall meaning of a data object.
>
> **[1:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=96)** So we might want to consider providing this type of overall, higher-level information to each chunk as well.
>
> **[1:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=104)** But how much of it should we provide?
>
> **[1:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=107)** Should we, for example, save the page title for each chunk?
>
> **[1:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=111)** What about its section headings or the URL if it's a website?
>
> **[1:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=115)** In some cases, you might also want to save a summary of the overall page, as well as the chunk itself.
>
> **[2:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=123)** Another is just a matter of formatting.
>
> **[2:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=125)** This web page is nicely presented on our browser, but take a look at the underlying code.
>
> **[2:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=132)** Yikes.
>
> **[2:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=133)** Well, that's not very readable at all, is it?
>
> **[2:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=136)** All of this extra code defines how the page is organized and displayed on our web browser so that we as humans find it easier to read.
>
> **[2:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=146)** But it's not really semantically useful.
>
> **[2:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=148)** So what we need to do is to find some ways of extracting the information, such that key aspects, like section headings and paragraph markers, are identified.
>
> **[2:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=159)** And we can discard these purely cosmetic things, like typefaces and background colors, as well as layouts.
>
> **[2:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=165)** The good news is, we won't need to build tools from the ground up to perform these tasks.
>
> **[2:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=170)** Because this is a fairly common challenge, many tools already exist that can help us with these tasks.
>
> **[2:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=177)** So in summary, these are some of the typical things you'll be doing with real data: chunking, deciding what contextual information to include with each chunk, as well as extracting semantic information.
>
> **[3:11](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/messiness-of-real-data?u=76281980&t=191)** Over the next couple of sections, we'll take a look at how we might be able to tackle some of these challenges.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** find (3)
> **Analogies:** for example (3)
> **Code Keywords:** import, (1), case, (1)
> **Env Vars:** csv (1), url (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Pre-processing text for vector databases
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=0)** - [Instructor] Let's take a look at a couple of pre-processing tools and examples that might be applicable for vector databases.
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=7)** Here, as we often do, we'll talk about some general scenarios, before moving on to specific ones.
>
> **[0:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=13)** We talked earlier about the need to extract semantic information and stripping away the styling.
>
> **[0:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=20)** That might seem very hard, but luckily for us there's a wide array of great tools available for this, like Beautiful Soup, pypdf, or even AI models.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=30)** Beautiful Soup, for example, is a popular tool that extracts text from HTML or XML files.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=38)** And pypdf will let you extract text from a PDF file, which is notoriously tricky to extract information from.
>
> **[0:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=45)** In fact, these days, you can even extract text from other media, like videos or audio, quite easily.
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=52)** You can do this by using an AI model that can transcribe audio to text.
>
> **[0:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=57)** Current state-of-the-art open source models, like Whisper, work remarkably well for this purpose.
>
> **[1:04](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=64)** These models can produce text outputs from conversations, or even instructional videos, even when multiple languages are spoken consecutively.
>
> **[1:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=73)** So, there's definitely a limited need to reinvent the wheel in many cases.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=79)** And when it comes to popular data sources, you might even find specific tools written just for them, and Wikipedia is a classic example of this.
>
> **[1:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=88)** Since Wikipedia is such a well established and reputable source of information, there are lots of high quality tools that let you extract information from it.
>
> **[1:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=97)** Actually, Wikipedia even produce regular data dumps itself for its users.
>
> **[1:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=103)** But, for downloading just a few files, you can use API based tools like MediaWiki API.
>
> **[1:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=110)** These tools will fetch and parse Wikipedia articles with items like the summaries, sections, headings, and so on, parsed.
>
> **[1:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=118)** So these in turn, help us to build sensible, context-rich data objects in no time.
>
> **[2:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=125)** Let's take a look at how.
>
> **[2:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=128)** Here's an example of a script that you can use to inspect the contents of a Wikipedia page.
>
> **[2:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=133)** Once you import this MediaWiki class, all you need to do to use it, is to instantiate it to retrieve an article like this by nominating the title.
>
> **[2:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=144)** The data is then parsed by MediaWiki, so you can access attributes like the title, summary, different sections, and so on.
>
> **[2:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=152)** But very simply, you can also print out the whole page with very simple, text-based formatting.
>
> **[2:41](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=161)** And if we scroll through, you'll see that different levels of headings are helpfully pre-formatted differently with these markers.
>
> **[2:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=169)** Here's one section of that page comparing the rendered version on a browser against extracted text.
>
> **[2:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=176)** You can see that the headings are marked here using standardized formatting.
>
> **[3:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=181)** And, exciting for us, this means that we can write code to extract this information.
>
> **[3:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=187)** So, we now have just the text from a Wikipedia article with natural breakpoints to split the text, and we can also find contextual information of section and subsection headings to match the text.
>
> **[3:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/pre-processing-text-for-vector-databases?u=76281980&t=200)** Next up, we'll show you how real life data like this might be imported into Weaviate.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1), from. (1), this. (1), class, (1)
> **Env Vars:** api (2), html (1), xml (1), pdf (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Chunking longer texts
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=0)** - [Instructor] Once you've extracted the text data, there's just one more thing to consider, before adding the data to a vector database.
>
> **[0:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=8)** You need to decide whether and how to split up the source data into smaller sections.
>
> **[0:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=14)** This topic is known as chunking.
>
> **[0:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=17)** At a high level, you can think of chunking as a way to help define a unit of information.
>
> **[0:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=23)** When it comes to databases, chunking would define the smallest amount of retrievable information.
>
> **[0:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=29)** At a library, a unit of information might be a book, but in a book's index, the unit of information might be a page.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=38)** So in a database, a unit of information is a data object.
>
> **[0:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=42)** So the question is how much information will each data object contain?
>
> **[0:48](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=48)** This is an especially important topic in vector databases where each chunk is going to be represented by a vector.
>
> **[0:56](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=56)** You should also know, though, that there are trade-offs depending on the size of each chunk as well.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=62)** What might happen if each chunk was large, like if it contained a chapter of text each?
>
> **[1:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=68)** Well, the good news is that there would not be too many chunks in our database, and each chunk would contain a lot of rich contextual information.
>
> **[1:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=77)** So it might make it easier to retrieve the right chunk with a search and then to understand what that chunk is about.
>
> **[1:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=84)** But also this might mean that finding specific information might be challenging, like getting an entire book when what you actually want is a specific passage from within it.
>
> **[1:35](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=95)** And if each chunk was too small, well, it'll be like looking for an index card or a sticky note in a very big pile of them.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=102)** Now, this would make it easier to find granular specific passages that we're looking for, but this could lead to the opposite problem.
>
> **[1:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=111)** Short passages can often be confusing when out of context, like a baffling sticky note from months and months ago.
>
> **[1:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=118)** So you can see that chunking is a nuanced topic and unfortunately, there's no one-size-fits-all type answer, but we can provide some general tips and starting points that would work relatively well.
>
> **[2:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=132)** Let's go back to the example of our Wikipedia page.
>
> **[2:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=136)** One really great chunking method is to use available section markers.
>
> **[2:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=140)** Here, the text helpful includes headings like these, and the text within each section contains a related coherent idea.
>
> **[2:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=150)** So all of that naturally means headings make a natural good candidate for text chunks.
>
> **[2:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=156)** The section titles can even be used as additional structured information, but this method might not always be available as extracting section titles isn't always possible in every text examples, as you've seen before.
>
> **[2:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=171)** So another really good approach is to split the source text simply by length.
>
> **[2:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=177)** This is a simple but a quite effective and robust approach.
>
> **[3:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=182)** You can set a maximum word count or a character count for each chunk and split the text accordingly.
>
> **[3:08](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=188)** As a rule of thumb, a good starting point would be something like 100, 150 words or five to 700 characters per chunk with an optional overlap somewhere between say, 10 to 15%.
>
> **[3:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=201)** This will lead to chunks that have enough information to be meaningful, and the overlap will provide some robustness against any awkward splits, either in words or sentences.
>
> **[3:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=211)** Chunking longer text for ingestion into a database is an important and nuanced task, although there's no one-size-fits-all answer, you could start with chunking by sections or by length, like we discussed earlier.
>
> **[3:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunking-longer-texts?u=76281980&t=224)** These guidelines will give you a pretty good starting point from which you can make adjustments to suit your specific needs.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (2), known as (1)
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** for, (1), let (1)
> **Cross-References:** go back to (1), we discussed (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Chunk Wikipedia articles
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=0)** - [Instructor] Now let's see how chunking and text processing is done in practice.
>
> **[0:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=5)** Here I've put together some scripts to process a set of articles from Wikipedia.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=10)** Off the top, I'm using the same mediawikiapi library that you saw earlier, as well as a few other standard libraries.
>
> **[0:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=18)** And this is a list of some, what I think at least, are interesting articles ranging from history of computing to databases.
>
> **[0:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=26)** For each of these Wikipedia article then, we need to download it, pause it to raw text, and chunk the body as you just learned to import it into the database.
>
> **[0:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=36)** So what I did was set up a couple of functions to break up these tasks.
>
> **[0:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=40)** The first task is to turn our text into just a list of words, so we can use the word count for chunking.
>
> **[0:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=47)** This is what this word split of function does.
>
> **[0:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=50)** It just takes a string of source text as inputs and it uses regular expressions to replace multiple white spaces into a single space and then splits them up based on these spaces.
>
> **[1:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=61)** If you're not sure what the syntax does, don't worry too much about it.
>
> **[1:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=65)** All you need to know is that it takes a text body as an input and it'll produce a list of words.
>
> **[1:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=73)** And then we use this function to make sure that we get lists of chunks of the provided size.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=79)** So what we'll do is to use this function, provide a chunk_size_max parameter and an overlap.
>
> **[1:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=86)** These parameters will be used to produce lists of sets of words, in other words, lists of chunks that we can ingest into the database.
>
> **[1:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=98)** And then what we can do here is to use the functions that are defined above to go through each page.
>
> **[1:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=104)** And then for each page, we'll get a list of chunks that pertains to those page, and then we'll save those chunks into this JSON file here.
>
> **[1:54](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=114)** It's a fairly simple piece of code that's quite useful.
>
> **[1:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=117)** It can be extended of course or modified to use section headers if you'd prefer that.
>
> **[2:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=122)** Now let's have a look at a sample query that'll show you what you can do with chunked data like this.
>
> **[2:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=130)** Let's say you want to know what our database says about how vector databases are different from relational databases.
>
> **[2:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=137)** So hopefully this syntax seems familiar.
>
> **[2:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=140)** You connect to a database here, get the chunks collection, and then we perform a query using a vector search.
>
> **[2:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=147)** We'll grab 10 of those chunks that we've just defined using the query, and here's our prompt to the generative model.
>
> **[2:34](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=154)** For this particular exercise, I'm going to, of course, print the generated text, but we want to know where those chunks are coming from.
>
> **[2:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=162)** So here I'm going to loop through the objects and produce the chunk_number as well as the title of the article that the chunk comes from.
>
> **[2:51](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=171)** Let's run it and see what happens.
>
> **[2:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=175)** So here's our model's answer about how vector databases might be different from relational databases.
>
> **[3:01](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=181)** I won't go through the specifics of it, but they seem pretty good to me.
>
> **[3:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=186)** And you're probably not surprised by that at this point.
>
> **[3:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=190)** But crucially, take a look at the data that the RAG query is using to produce this answer.
>
> **[3:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=198)** The source data came from multiple pages from the Vector database article in Wikipedia, or the database article in Wikipedia, and from different places throughout the document.
>
> **[3:29](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=209)** Have a look at these lines, for example, for the database article.
>
> **[3:33](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=213)** It's a long article and it's used chunks from anywhere between the first chunk to the 78th chunk, which means it's gone through all those chunks and found relevant bits before producing the answer.
>
> **[3:45](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=225)** And notably, it didn't use any of the chunks from these other articles because they weren't relevant to the query, or at least the most relevant to our query.
>
> **[3:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=235)** This is what makes chunking technique with RAG so powerful.
>
> **[3:59](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=239)** This technique allows you to have as big a database as you can imagine, and from there, you can retrieve just the relevant information before transforming it with the language model.
>
> **[4:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/chunk-wikipedia-articles?u=76281980&t=249)** As we've said before, this is a great way to combine the creative and reasoning capabilities of generative models with the facts or data that you can only retrieve from a database.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (3), from. (2), this. (1)
> **Env Vars:** rag (2), json (1)
> **Definitions:** is a  (2), in other words (1)
> **Code Identifiers:** chunk_size_max (1), chunk_number (1)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Import Wikipedia data chunks
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=0)** (energetic electronic music)
>
> **[0:05](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=5)** - [Instructor] In the last section, we showed you how to chunk your data and then to query a collection of these chunks from multiple articles in a vector database.
>
> **[0:14](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=14)** Now, you might be wondering, wait, didn't we skip a step?
>
> **[0:18](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=18)** How did the data get in the database?
>
> **[0:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=21)** You would be absolutely correct.
>
> **[0:23](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=23)** So in this challenge, you're going to import these Wikipedia data chunks into your vector database.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=30)** We've provided you here with some starter code and placeholder comments to get you started.
>
> **[0:36](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=36)** Here you connect to your database.
>
> **[0:39](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=39)** You load your chunked pages into a file.
>
> **[0:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=42)** This will load your chunked data into a dictionary where its key has a corresponding set of chunks as its values.
>
> **[0:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=50)** And then you can follow the commented instructions.
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=52)** So first, you'll need to create a collection called WikiChunk, and then follow the process as you've done multiple times, hopefully, by now.
>
> **[1:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=62)** And then once you have your collection, you would get the collection and insert the chunks by iterating through your data.
>
> **[1:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=70)** In this case, that'll be your chunked pages.
>
> **[1:13](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=73)** Keep in mind that here, we have data from multiple pages as well as multiple chunks per page.
>
> **[1:19](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=79)** So think about how that might change the pattern of the import code that you've seen before.
>
> **[1:25](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=85)** Another interesting question for this exercise is how to generate a unique UUID for each chunk.
>
> **[1:31](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=91)** Recall that for our movie collection, we use the movie row ID to generate the UUID from.
>
> **[1:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=98)** Consider whether that might be appropriate here and how that might change for this particular application.
>
> **[1:44](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/challenge-import-wikipedia-data-chunks?u=76281980&t=104)** Okay, good luck and have fun.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), from. (1)
> **Env Vars:** uuid (2)
> **Cross-References:** in the last (1)
> **Exercise Files:** starter code (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic electronic music) (1)

#### Solution: Import Wikipedia data chunks
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=0)** - [Instructor] Okay, here's my solution.
>
> **[0:07](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=7)** Let's see if we arrived at Civil Loss Solutions.
>
> **[0:10](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=10)** First, of course, we need to create a collection, so hopefully this process is familiar to you by now.
>
> **[0:16](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=16)** We define a name for our collection, we'll call it WikiChunk.
>
> **[0:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=20)** We define a vectorizer for creating vectors and a generative module for RAG queries.
>
> **[0:26](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=26)** Then let's create some properties.
>
> **[0:28](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=28)** We have a title here with text data type and a chunk with the same text data type.
>
> **[0:38](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=38)** What I'm going to do is to also add a chunk number as an integer.
>
> **[0:43](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=43)** This is not from the original data set, but this is going to be handy because without it you won't be able to tell where in the source document the chunk comes from.
>
> **[0:53](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=53)** This will create the collection definition, so now we'll get the newly created collection before inserting our chunks into it.
>
> **[1:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=63)** Remember our hint from before, the chunked pages object is a dictionary where the key is the title of each document, so we can iterate through it like this.
>
> **[1:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=75)** First, we'll iterate through the chunked pages dictionary for each page name and the values, which will be the page chunks.
>
> **[1:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=84)** What we'll do then is to create a list of data objects, which will be the chunked objects, and we need to iterate through the page chunks again, because that's going to be the inner loop that allows you to iterate through the page chunks for each page.
>
> **[1:42](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=102)** And now it comes to the question of how to generate the UUID for each object.
>
> **[1:49](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=109)** Remember that before in our movie database we used the row number, but here that won't necessarily work, and that's because there are multiple chunks here with the same chunk number.
>
> **[2:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=120)** Again, remember that there are multiple pages, so there'll be, for example, multiple chunk zeros.
>
> **[2:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=126)** So what I do here instead, is to use the page name as well as the chunk number to generate the ID from.
>
> **[2:15](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=135)** That will ensure that the seed for our UUID is unique.
>
> **[2:20](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=140)** Once we've made that decision, we generate the data object similarly to what you have done before.
>
> **[2:27](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=147)** We use the properties of title and the chunk in this case, and we'll pass on the chunk number as well so that we can retrieve it when we get each chunk.
>
> **[2:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=157)** Remember to pass the UUID on as well, and once you have the chunk object appended to our list of chunk objects for each page, we'll just insert the chunk object at this point and let's print out a message just telling us that, "Hey, it's important finishing this particular page."
>
> **[2:58](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=178)** And of course, remember to close the client connection.
>
> **[3:03](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=183)** So if you run that code, it'll populate your instance (indistinct), with a few hundred Wikipedia chunks.
>
> **[3:09](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=189)** And that means you'll now have your own searchable mini set of Wikipedia pages that you can perform RAG, or any other searches with.
>
> **[3:17](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=197)** Just as a note, this type of individual page downloading isn't really for bulk downloads for various reasons.
>
> **[3:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=204)** If you want the large Wikipedia corpus, you can actually download Wikipedia's official data dumps that we've discussed before.
>
> **[3:32](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=212)** If you're interested in building a vector database with a big dataset, this could be actually a very good option.
>
> **[3:40](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=220)** These types of chunking and data import techniques are really useful and applicable for many types and sources of data, and you now know how to apply them yourself end to end from creating a database to importing this data.
>
> **[3:55](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/solution-import-wikipedia-data-chunks?u=76281980&t=235)** This is really exciting and I would really encourage you to build your own databases with whatever data you're interested in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), from. (2), pass (2), module (1), type. (1)
> **Env Vars:** uuid (3), rag (2)
> **Best Practices:** remember to (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Continue learning about vector databases
> [LinkedIn Learning](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=0)** - Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=2)** I hope you've found this course as interesting as I did building it.
>
> **[0:06](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=6)** Vector databases are fast becoming key pieces of infrastructure for many organizations.
>
> **[0:12](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=12)** And by learning how to build and then use vector databases, you've taken a huge first step towards mastery of this exciting field.
>
> **[0:21](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=21)** Where you go next is up to you.
>
> **[0:24](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=24)** You could, for example, explore selection and even fine-tuning of AI models.
>
> **[0:30](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=30)** Advanced RAG techniques or database deployment in a production setting might also be great learning paths.
>
> **[0:37](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=37)** This is a fast-moving field, so I also suggest checking out resources like popular blogs, papers, or additional courses.
>
> **[0:47](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=47)** We'll have links to some of these in the read me file.
>
> **[0:50](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=50)** You can find me on LinkedIn.
>
> **[0:52](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=52)** I would love to hear about what you're building with these new skills.
>
> **[0:57](https://www.linkedin.com/learning/vector-databases-in-practice-deep-dive/continue-learning-about-vector-databases?u=76281980&t=57)** Cheers, then.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Env Vars:** rag (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Vector Databases Professional Certificate by Weaviate]]
← [[Introduction To Ai Native Vector Databases]] | **2 of 2**

### In [[Explore AI for Data Engineering]]
← [[Introduction To Ai Native Vector Databases]] | **6 of 8** | [[GraphRAG Essential Training]] →

### In [[Master Retrieval-Augmented Generation (RAG)]]
← [[RAG and Fine-Tuning Explained]] | **2 of 7** | [[Generative AI- Introduction to Large Language Models]] →

## Part of

- [[Vector Databases Professional Certificate by Weaviate]]

## Appears In

- [[Vector Databases Professional Certificate by Weaviate]]
- [[Explore AI for Data Engineering]]
- [[Master Retrieval-Augmented Generation (RAG)]]

## Related Courses

_Courses sharing skills:_

- [[Introduction To Ai Native Vector Databases]] — Artificial Intelligence (AI), Vector Databases
- [[RAG Fine-Tuning- Advanced Techniques for Accuracy and Model Performance]] — Artificial Intelligence (AI), Vector Databases
- [[Advanced RAG Applications with Vector Databases]] — Artificial Intelligence (AI), Vector Databases
- [[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]] — Artificial Intelligence (AI), Vector Databases
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
