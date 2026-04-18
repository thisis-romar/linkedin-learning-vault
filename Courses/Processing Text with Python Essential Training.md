---
type: course
slug: processing-text-with-python-essential-training
url: "https://www.linkedin.com/learning/processing-text-with-python-essential-training"
duration_minutes: 33
duration: 33m
level: Intermediate
updated: 6/20/2019
learners: 18493
skills:
  - Unstructured Data
  - Python (Programming Language)
  - Text Mining
exercise_files: true
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/unstructured-data
  - skill/python-programming-language
  - skill/text-mining
status: not-started
created: 2026-04-17
---

# Processing Text with Python Essential Training

> In the world of big data, more and more information is consumed and analyzed in text form. Websites, social media, emails, and chats have become the key sources for data and insights. If you work with data, then understanding how to deal with unstructured text data is essential. In this course, instructor Kumaran Ponnambalam helps you build your text mining skill set, covering key techniques for e

> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training) | 33m | Intermediate | 18K learners

## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Unstructured Data
- Python (Programming Language)
- Text Mining

## Table of Contents

### Introduction

#### The need for text mining skills in data science
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=0)** - [Kumaran P] Let's say you have a massive amount of text that you need to analyze.
>
> **[0:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=5)** That's a fairly likely scenario considering more and more text is being generated today.
>
> **[0:12](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=12)** It takes the form of messages, emails, blogs, and comments on social media.
>
> **[0:18](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=18)** Hand in hand, the need to understand, analyze, and act on these data is also growing.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=25)** As such, text processing and analytics is a key skill for any data professional.
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=31)** My name is Kumaran Ponnambalam.
>
> **[0:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=34)** In this course, I will show you the tools and techniques available for text processing in Python.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=40)** We will use NLTK library to build use cases in Jupyter notebooks.
>
> **[0:45](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=45)** You need prior familiarity with Python 3.7 and Jupyter notebooks.
>
> **[0:51](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=51)** That being said, let's explore on how to do processing and transformation of text with Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** let (2)
> **Tools:** jupyter (2)
> **Env Vars:** nltk (1)
> **Versions:** python 3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kumaran (1)


### 1. Text Mining

#### Text mining today
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=0)** - [Instructor] One of the fastest growing areas in the field of analytics and machine learning is text processing and analytics. Why?
>
> **[0:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=10)** More and more data generated today is free text.
>
> **[0:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=14)** New technological advances are generating humongous amounts of text data.
>
> **[0:20](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=20)** The internet today contains a number of blogs, reviews, comments, notes, and other text-based facts.
>
> **[0:29](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=29)** Social media is generating millions of messages every day in the form of messages, tweets, hashtags, and references.
>
> **[0:38](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=38)** Computer software generates log messages and audit trails that need to be looked at.
>
> **[0:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=44)** Emails are another form of text data.
>
> **[0:48](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=48)** In addition, other media like audio and video are transcribed as text.
>
> **[0:54](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=54)** The need to analyze and understand text data is growing every day.
>
> **[0:59](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=59)** Businesses want to automatically mine insights from text data and use them for business actions.
>
> **[1:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=66)** But, processing text possesses various unique challenges.
>
> **[1:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=71)** Text data is many times in volume than numeric data.
>
> **[1:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=76)** Also, text does not have a fixed structure or schema that makes understanding it difficult.
>
> **[1:23](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=83)** In this course, we will look at tools and techniques offered in Python for processing text data.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Document concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=0)** - [Instructor] A document is a key entity that is used in the text mining world.
>
> **[0:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=6)** Text processing software libraries receive and process documents.
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=11)** Let us define the term document.
>
> **[0:15](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=15)** A document is a collection of sentences that represent a specific fact or entity.
>
> **[0:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=21)** Examples of a document include a product review, a log file produced by a software instance, a blog entry, or a tweet.
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=31)** Documents can be big or small, but every document contains text about a specific context.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=40)** A document contains paragraphs, sentences, and words.
>
> **[0:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=44)** The definition of these terms is the same as the English language.
>
> **[0:49](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=49)** For comparison's sake, a document can be said to be an equivalent of a row or record in the database.
>
> **[0:57](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=57)** Similar to how a record contains relevant information about an entity, a document contains relevant text.
>
> **[1:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=65)** The scope of a document can vary from case to case.
>
> **[1:09](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=69)** For example, an individual tweet can be considered a document, or a set of tweets containing a specific hashtag can be considered a document.
>
> **[1:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=79)** A data architect will decide the scope based on the problem being solved.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Corpus concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=0)** - [Instructor] The next concept we need to look into is that of a corpus.
>
> **[0:04](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=4)** The plural of a corpus is copora.
>
> **[0:08](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=8)** In text mining, a corpus is a collection of documents.
>
> **[0:12](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=12)** Documents inside a corpus are related to each other either by entity or by time periods.
>
> **[0:20](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=20)** For example, a corpus may contain all reviews for a given product in a month, or log files generated in a day by a software process, or all tweets by a Twitter user.
>
> **[0:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=34)** A corpus is equivalent of a table in a database for comparison reasons.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=40)** What makes up a corpus may vary depending upon the specific use case.
>
> **[0:46](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=46)** For example, all reviews by a user, all reviews for a product, or the global list of reviews in the system can all be examples of corpora.
>
> **[0:57](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=57)** Text mining libraries work with a corpus, hence converting text data to a corpus and understanding its structure are important capabilities.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **Code Keywords:** case. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Introduction to the NLTK library
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=0)** - [Instructor] Python supports a number of packages for natural language processing.
>
> **[0:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=5)** The most important among this is the natural language toolkit or NLTK.
>
> **[0:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=14)** NLTK is a suite of libraries for natural language processing available in Python.
>
> **[0:20](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=20)** It has a strong suite of capabilities built over a period of time.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=25)** It provides text processing capabilities, like tokenization and parts of speech tagging.
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=31)** It provides analytics capabilities, like frequency analysis, sentiment analysis, and n-grams generation.
>
> **[0:39](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=39)** NLTK also comes with a corpora of sample data of various types.
>
> **[0:45](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=45)** A developer can use these to experiment with the library.
>
> **[0:49](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=49)** It also supports a number of machine learning features, like classification and clustering algorithms.
>
> **[0:56](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=56)** This makes NLTK an end to end library for text processing and analytics.
>
> **[1:02](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=62)** We will be using NLTK libraries extensively in this course.
>
> **[1:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=67)** Details about setup and use of NLTK is available in the website [nltk.org](https://nltk.org).

> [!info]- Semantic Content
>
> **Env Vars:** nltk (6)
> **CLI Commands:** python (2)
> **URLs:** [nltk.org](https://nltk.org) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Setting up the environment
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=0)** - [Instructor] This course uses Python 3.7 and Jupyter Notebooks.
>
> **[0:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=5)** If you do not have it already set up, you can set it up using the Anaconda Distribution.
>
> **[0:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=10)** You can download from this website, [anaconda.com/distribution](https://anaconda.com/distribution).
>
> **[0:17](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=17)** It contains executables for multiple operating systems, including Windows, macOS, and Linux.
>
> **[0:24](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=24)** Please download the one that is appropriate for you.
>
> **[0:27](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=27)** Make sure you download the Python 3.7 version since that is what we would be using as part of this course.
>
> **[0:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=35)** Once you download and install Anaconda, you're going to get the Anaconda utilities in your dropdown here.
>
> **[0:42](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=42)** In this, go to Jupyter Notebooks, right-click, More, Open file location.
>
> **[0:50](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=50)** On Jupyter Notebook, right-click and say Properties.
>
> **[0:55](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=55)** By default, the Jupyter Notebook launches by using the %USERPROFILE% variable as your home data tree.
>
> **[1:04](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=64)** You can change it to suit to your requirements.
>
> **[1:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=67)** Let's say you downloaded all your course material into a specific data tree.
>
> **[1:12](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=72)** You can make Jupyter launch with that data tree as its root data tree.
>
> **[1:18](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=78)** In my case, I'm going to change this %USERPROFILE% to my own data tree, where I have downloaded the code.
>
> **[1:28](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=88)** Now do an Apply, do a Continue, and this is set.
>
> **[1:33](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=93)** Now when you go and launch Jupyter Notebook, it will start and launch Jupyter Notebook from your specific data tree.
>
> **[1:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=104)** Now you can see all the code and the data files for the specific codes available to you to launch from here.

> [!info]- Semantic Content
>
> **Tools:** jupyter (7), anaconda (4)
> **Code Keywords:** this, (1), default, (1), let (1), case, (1), continue (1)
> **CLI Commands:** python (2), make (2)
> **UI Navigation:** right-click (2), dropdown (1), go to (1)
> **Env Vars:** userprofile (2)
> **Versions:** python 3 (2)
> **Exercise Files:** download the (2)
> **Prerequisites:** set up (1), install (1)


### 2. Reading Text

#### Reading raw files
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=0)** - [Instructor] In this chapter, we will explore reading data into a corpus and exploring it.
>
> **[0:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=6)** The code samples are available in the notebook zero two XX reading data dot ipynb.
>
> **[0:15](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=15)** For exercises in this course, we use a file called Spark Course Description dot text.
>
> **[0:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=22)** This is available as part of your course material.
>
> **[0:26](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=26)** Let us explore its content.
>
> **[0:29](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=29)** It contains description of a course on Apache Spark.
>
> **[0:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=34)** All text data needed for processing have to be acquired from a data source.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=40)** In this code example, we will read a text file into a python variable.
>
> **[0:46](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=46)** This is standard python and does not use the NLTK library.
>
> **[0:50](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=50)** We read the Spark Course Description dot txt into a variable called file data and then we print the first 200 characters of the file.
>
> **[1:01](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=61)** Let us run the code now.
>
> **[1:04](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=64)** In general, data can be acquired from various sources, including files, databases, or strings.
>
> **[1:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=71)** There are several python packages and tools that help to get data from these sources.
>
> **[1:18](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=78)** We do not intend to focus on those areas in this course.
>
> **[1:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=82)** Rather, we focus on processing data once it is acquired from the source.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), apache (1)
> **Code Keywords:** let (2)
> **Env Vars:** nltk (1)
> **Speakers:** - [instructor] (1)

#### Reading files with corpus reader
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=0)** - [Narrator] NLTK supports a special sort of functions for reading a list of files into a corpus.
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=7)** It comes as part of the NLTK corpus reader package.
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=11)** More details of the same, can be found in the NLTK website.
>
> **[0:17](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=17)** Please install the NLTK package, if you have not done so before, using the pip install nltk command.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=25)** We will also download the punkt package that we will use later in the examples.
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=31)** The plain text Corpus Reader is used to read a list of text files under a directory.
>
> **[0:37](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=37)** Each text file becomes a single file id but the contents of the file are (mumbles) together in to a single corpus.
>
> **[0:46](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=46)** Data is then split in to paragraphs, sentences, and tokens automatically, while the corpus is read.
>
> **[0:53](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=53)** In this example, we need the same "Spark-Course-Description.txt" file into the corpus.
>
> **[1:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=60)** The raw contents of the files are then printed using the corpus.raw command.
>
> **[1:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=65)** Let us run the code now and see the output.

> [!info]- Semantic Content
>
> **Env Vars:** nltk (4)
> **Prerequisites:** install (2)
> **File Paths:** spark-course-description.txt (1)
> **CLI Commands:** pip (1)
> **Code Keywords:** let (1)
> **Cross-References:** later in (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)

#### Exploring the corpus
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=0)** - [Instructor] As discussed in the previous video, the corpus reader analyzes the input data, and splits them into paragraphs, words and sentences.
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=11)** It also supports various methods to view this extracted content.
>
> **[0:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=16)** We will see examples of those in this video.
>
> **[0:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=19)** First, we print the list of file IDs.
>
> **[0:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=22)** The file IDs are one per physical file read.
>
> **[0:26](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=26)** In our case, we used only one file.
>
> **[0:30](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=30)** We can then extract paragraphs from the corpus using the paragraphs command.
>
> **[0:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=35)** Paragraphs are identified by a blank line separating the text.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=40)** We print the number of paragraphs, which should be one in this case.
>
> **[0:45](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=45)** Next, we extract the sentences in the corpus, using the sents command.
>
> **[0:51](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=51)** This actually gives you a list of lists.
>
> **[0:54](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=54)** Each sentence is made into a list of words, then those individual word lists make up the sentence list.
>
> **[1:02](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=62)** We first print the total number of sentences in the corpus, which gives a value of five.
>
> **[1:08](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=68)** We then just print the first sentence.
>
> **[1:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=70)** This should actually print the list of words that forms the first sentence in the corpus.
>
> **[1:17](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=77)** Finally, we print all the words in the corpus using the words (mumbles).
>
> **[1:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=82)** This is a long list of all words that I used in the corpus.
>
> **[1:27](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=87)** Let us run the code now, and see the output.
>
> **[1:32](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=92)** There is only one file ID in the corpus, spark course description.txt.
>
> **[1:37](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=97)** The total paragraphs in the corpus is one.
>
> **[1:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=100)** The total sentences in the corpus is five.
>
> **[1:43](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=103)** And the first sentence is broken up into a list of words in the sentence.
>
> **[1:49](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=109)** The words in the corpus is a long list, and only the first part of that list is printed here.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), case. (1), finally, (1), let (1)
> **Definitions:** is a  (2)
> **File Paths:** description.txt (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Analyzing the corpus
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=0)** - [Instructor] The NLTK library provides a number of functions to analyze the distribution of data as well as aggregate data in the corpus.
>
> **[0:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=10)** First, we use the frequency distribution method to understand the distribution of words in the corpus.
>
> **[0:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=16)** This helps us understand the most popular words in the corpus.
>
> **[0:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=21)** We then print the top 10 words in the corpus.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=25)** This is a list of couples.
>
> **[0:26](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=26)** It prints out each word and the number of times it occurs in the corpus.
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=31)** We can also look up a specific word to see its distribution in the corpus.
>
> **[0:36](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=36)** We use the get method to get the frequency distribution for the word spark.
>
> **[0:41](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=41)** In the output, you see the top 10 words listed and there are couples mentioning the word as well as the number of times it occurs in the corpus.
>
> **[0:51](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=51)** We also see the distribution for the word spark to be three.

> [!info]- Semantic Content
>
> **Env Vars:** nltk (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Text Cleansing and Extraction

#### Tokenization
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=0)** - [Instructor] The first extraction task that is usually done on a corpus is tokenization.
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=7)** Tokenization is the process of breaking down a stream of textual content into its parts, words, terms, symbols, sentences, paragraphs, and other meaningful elements.
>
> **[0:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=21)** Converting text into a set of tokens makes it easy for further cleansing of the corpus.
>
> **[0:28](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=28)** The code for this chapter is available in the notebook named 03_XX Text Cleansing and Extraction.
>
> **[0:36](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=36)** In the previous chapter, we directly used a corpus reader to both read text and convert it into tokens.
>
> **[0:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=44)** In this example, we will use a specific tokenize method available in NLTK library.
>
> **[0:53](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=53)** We read the Spark-Course-Description.txt file into a raw text variable.
>
> **[0:58](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=58)** We then use the word tokenize method to convert it into a token list.
>
> **[1:04](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=64)** We then print the first 20 tokens.
>
> **[1:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=67)** Let's run the code and see the results.
>
> **[1:12](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=72)** We see that there are 110 tokens that have been in total identified as part of this file.
>
> **[1:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=79)** The first 20 tokens are printed here.

> [!info]- Semantic Content
>
> **File Paths:** spark-course-description.txt (1)
> **Code Keywords:** let (1)
> **Env Vars:** nltk (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### Cleansing text
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=0)** - [Instructor] X-data need to undergo a series of cleansing steps before it's ready for analytics and machine learning.
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=7)** We will review some of these steps in this video.
>
> **[0:13](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=13)** X-cleansing covers a number of general purpose and specific cleansing activities.
>
> **[0:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=19)** Text may need to be formatted and standardized.
>
> **[0:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=22)** For example, dates inside text may need to be converted to a standard format.
>
> **[0:28](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=28)** Language conversions may also need to be done.
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=31)** Punctuations like period, comma, et cetera, need to removed also since they don't carry any inside value in a text carapace.
>
> **[0:42](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=42)** Abbreviations need to be removed or converted to their full form.
>
> **[0:47](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=47)** Case conversion may also be necessary to standardize text.
>
> **[0:52](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=52)** Elements like hashtags, mentions, and URLs need to be cleaned up also.
>
> **[0:57](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=57)** In this example, we do two cleansing activities.
>
> **[1:01](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=61)** Removing punctuations, and conversion to lowercase.
>
> **[1:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=66)** In order to remove punctuations, we use the Punkt package in NLTK.
>
> **[1:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=71)** Using a Lambda function, we ran each token, created in the previous video, through this package, and it removes punctuations for you.
>
> **[1:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=81)** The resulting token list is printed.
>
> **[1:23](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=83)** Let us run this code now.
>
> **[1:26](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=86)** The original list had 110 tokens.
>
> **[1:29](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=89)** Now it only has 100 because the punctuations are removed from the list.
>
> **[1:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=94)** Next, we convert each token to lowercase using a standard Python function for this purpose.
>
> **[1:42](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=102)** The results are again printed.
>
> **[1:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=104)** Let us execute this code and see the results.
>
> **[1:48](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=108)** We see a word like DevOps in the previous example now being converted to lowercase.
>
> **[1:54](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=114)** The number of tokens still remain the same at hundred.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), lambda (1)
> **CLI Commands:** python (1)
> **Env Vars:** nltk (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Stop word removal
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=0)** - [Instructor] Stop-words are words that do not carry any insights and they need to be removed.
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=7)** Stop-words are a group of words that do not carry any meaning by themselves.
>
> **[0:12](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=12)** For example, words like in, and, the, and which are abundant in text data, but they do not have any meaning.
>
> **[0:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=21)** They are called stop-words.
>
> **[0:23](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=23)** They are not required for analytics purposes, but need resources for storage and processing.
>
> **[0:30](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=30)** Hence, it is recommend to remove them.
>
> **[0:33](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=33)** A number of stop-word dictionaries are available by human language that contain the list of stop-words in that language.
>
> **[0:41](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=41)** Those need to be used to identify and remove stop-words.
>
> **[0:46](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=46)** In this example, we will remove stop-words from the previously created token list.
>
> **[0:52](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=52)** There is a stop-words package in NLTK, which we will download and import.
>
> **[0:58](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=58)** We run the token list through a filter function that checks if the token exists in the stop-words list.
>
> **[1:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=65)** If so, the stop-word is not sent to token_list4.
>
> **[1:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=70)** We finally print the remaining tokens and the count of tokens in the token list.
>
> **[1:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=76)** Let us execute this code.
>
> **[1:20](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=80)** We see that from a list of 100 tokens, the list has now come down to 62 tokens only after removing stop-words.

> [!info]- Semantic Content
>
> **Code Keywords:** import. (1), function (1), let (1)
> **Env Vars:** nltk (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Stemming
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=0)** - [Instruction] In this video I will discuss stemming, a key processing step in text mining.
>
> **[0:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=6)** What is stemming?
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=7)** To understand that we need to define a stem.
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=11)** A stem is the base part of a word to which affixes can be attached for derivatives.
>
> **[0:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=16)** For example, the word combine is the stem for combine, combining, and combined.
>
> **[0:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=22)** The first part of these words are common.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=25)** The different words represent different grammatical elements with the same meaning.
>
> **[0:30](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=30)** Stemming is a process that converts a word into its stem.
>
> **[0:33](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=33)** It keeps the base word.
>
> **[0:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=35)** As a result, the total unique words in the corpus goes down and the words with similar meaning can be grouped together.
>
> **[0:43](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=43)** Stemming simply cuts off the affix, so it may not result in a complete word.
>
> **[0:48](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=48)** In this example, we will do stemming by using the PorterStemmer function available in NLTK.
>
> **[0:55](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=55)** Each word in the remaining token list is passed through the stemmer, which will give back the stemmed representation of the word.
>
> **[1:03](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=63)** The results are collected in another list called Token_list5.
>
> **[1:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=67)** Let us execute this code and examine the results.
>
> **[1:12](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=72)** In the result, we see that stemming has happened for words like dev ops and engine.
>
> **[1:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=79)** We will look at a better alternative to stemming in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), let (1)
> **Env Vars:** nltk (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instruction] (1)

#### Lemmatization
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=0)** - [Instructor] Lemmatization is another important step in text mining.
>
> **[0:05](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=5)** What is lemmatization?
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=7)** Lemmetization is similar to stemming, but it produces a proper root word that belongs to the language.
>
> **[0:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=14)** For example, combine is the lemmatized version of combine, combined, and combining.
>
> **[0:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=21)** As opposed to stemming, which produced an incomplete word, combine is a proper English word.
>
> **[0:28](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=28)** Lemmatization uses a dictionary to match words to their root word.
>
> **[0:33](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=33)** It is a more expensive operation than stemming because of the dictionary and resources vitamins.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=40)** For our example with lemmatization, we will use the WordNet Dictionary and the WordNet Lemmatizer.
>
> **[0:47](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=47)** Each token in the original token list4 are passed through the lemmatizer, which returns the lemmatized string.
>
> **[0:54](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=54)** The results are printed.
>
> **[0:56](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=56)** Let us execute the code and review the results.
>
> **[1:01](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=61)** You will notice that words like engine and devops are now complete as opposed to stemming, which produced incomplete word.
>
> **[1:09](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=69)** To review an example, we will compare the raw, stemmed, and lemmatized versions of the word technology.
>
> **[1:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=79)** We will see that the raw word was technologies in plural.
>
> **[1:23](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=83)** The stemmed version is technolog and lemmatized is technology, which is the singular version of technologies.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced Text Processing

#### Building n-grams
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=0)** [Instructor] We will now look at some advanced text processing and transformation techniques in this module.
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=7)** First, we look at N-Grams. What is N-Grams?
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=11)** N-Grams is a sequence of n items in a sample of text.
>
> **[0:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=16)** The sequence can be any number.
>
> **[0:18](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=18)** Depending on N, it's called bigrams, trigrams, four-grams, and et cetera.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=25)** For example, let's take a sentence: "Dogs are favorite pets".
>
> **[0:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=31)** If we do bigrams conversion of these, we will end up with three bigrams: "dogs" and "are", "are" and "favorite", "favorite" and "pets".
>
> **[0:42](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=42)** If we do trigrams we end up with: "dogs", "are", "favorite" and "are", "favorite", "pets".
>
> **[0:50](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=50)** N-grams are used for building predictive text systems that predict the next sequence of words.
>
> **[0:58](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=58)** Let's now look at the code.
>
> **[1:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=60)** The code for this chapter is available in the file, called "04_xx advanced text processing".
>
> **[1:08](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=68)** The first part of this code we see here is a repeat of all the processing we did in the previous chapter.
>
> **[1:15](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=75)** This takes raw text from Spark course description into our text, and test organization, cleansing, removal of star words, and limitation.
>
> **[1:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=85)** Let's exclude this code now.
>
> **[1:32](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=92)** Next, we use the n-grams package with an NLDK to generate n-grams for this token list.
>
> **[1:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=100)** We passed the processed token list to the n-grams matter, and NLDK'd the value of n.
>
> **[1:46](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=106)** We generate bigrams and trigrams.
>
> **[1:50](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=110)** We then print the 5 most common bigrams and trigrams in the corpus.
>
> **[1:55](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=115)** Let's exclude this code now.
>
> **[1:58](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=118)** From the results, we see that the most common bigram is "big" and "data" since this phrase "big data" appears multiple times in the corpus.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (1)
> **Env Vars:** nldk (2)
> **Definitions:** is a  (2)
> **Cross-References:** previous chapter (1)
> **Analogies:** for example (1)

#### Tagging parts of speech
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=0)** - [Instructor] The next text mining technique we review in this video is parts of speech tagging.
>
> **[0:07](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=7)** Parts of speech tagging involves identifying the part of speech for each word in a given corpus.
>
> **[0:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=14)** POS tagging uses an NLTK package that classifies a given word.
>
> **[0:20](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=20)** The POS is tagged with abbreviations like NN for a noun, VBP for verb singular present, and JJ for adjective.
>
> **[0:32](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=32)** POS tagging is used for entity recognition, filtering data, and sentiment analysis.
>
> **[0:39](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=39)** It is also used in advanced applications like chat bots.
>
> **[0:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=44)** Now let us review the code.
>
> **[0:47](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=47)** POS tagging is supported in NLTK using the averaged perceptor tagger feature.
>
> **[0:54](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=54)** First, we download the averaged_perceptron_tagger package from NLTK.
>
> **[1:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=60)** Using this library is simple.
>
> **[1:02](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=62)** We just call the POS tag method with a list of words and it provides the POS tag for each of those words.
>
> **[1:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=71)** We pass the first 10 words in the token list and we will see the POS tag printed out.
>
> **[1:17](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=77)** Let us execute this code now and review the results.
>
> **[1:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=82)** We see that the words order and construct are tagged as nouns, while stream is tagged as a verb.

> [!info]- Semantic Content
>
> **Env Vars:** pos (7), nltk (3), vbp (1)
> **Code Keywords:** let (2), pass (1)
> **Code Identifiers:** averaged_perceptron_tagger (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### Term frequency-inverse document frequency (TF-IDF)
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=0)** - In this video, we will look at a popular text-mining technique called term frequency-inverse document frequency, or TF-IDF.
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=11)** A number of machine learning algorithms do not work on text values.
>
> **[0:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=16)** They only work on numeric features.
>
> **[0:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=19)** This means text needs to be converted to an equivalent numeric representation to do machine learning.
>
> **[0:27](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=27)** TF-IDF is a technique to convert text to a numeric table representation.
>
> **[0:33](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=33)** TF-IDF outputs a table.
>
> **[0:36](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=36)** In this table, each row represents a document in the corpus.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=40)** Each column represents a word in the corpus.
>
> **[0:44](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=44)** Each cell in the table provides a value that indicates the relative strength of the word with respect to the document.
>
> **[0:52](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=52)** A higher value indicates higher correlation between the word and the document.
>
> **[0:57](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=57)** How do we do TF-IDF?
>
> **[1:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=60)** Let's say we have a corpus of three documents.
>
> **[1:03](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=63)** Each document is a simple sentence as shown here.
>
> **[1:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=66)** We first do text cleansing described in the previous chapter to arrive at a clean corpus as shown here.
>
> **[1:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=74)** Next, we create a count table.
>
> **[1:17](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=77)** In this table, each document is a row, and each word is a column.
>
> **[1:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=82)** The count indicates the number of times the word appeared in the document.
>
> **[1:27](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=87)** Next, we create the text frequency table.
>
> **[1:31](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=91)** To do this, we divide each cell with the total number of words in the document.
>
> **[1:37](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=97)** For example, Document 1 has three words.
>
> **[1:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=100)** Each word count in the document is divided by three, and we get .33 for all words in the document.
>
> **[1:48](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=108)** Next, we find inverse document frequency.
>
> **[1:52](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=112)** IDF is computed for each word across all documents in the corpus.
>
> **[1:57](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=117)** For this, we use the formula log e, total documents in the corpus divided by documents that have this word.
>
> **[2:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=126)** The purpose of IDF is to find words that are unique and prevalent in a few documents only.
>
> **[2:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=134)** The fewer the documents having the word, the higher is the IDF.
>
> **[2:18](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=138)** Finally, we find TF-IDF by multiplying the TF value in each cell with the IDF value for that word.
>
> **[2:28](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=148)** In the next video, we will see a code example for computing TF-IDF.

> [!info]- Semantic Content
>
> **Env Vars:** idf (10)
> **Code Keywords:** this, (2), let (1), finally, (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (3)
> **Cross-References:** previous chapter (1), in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Building a TF-IDF matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=0)** - [Instructor] In this video, we will look at code examples for building a TF-IDF matrix.
>
> **[0:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=6)** NLTK does not support a simple TF-IDF function, hence, for this purpose, we will use scikit-learn library in Python.
>
> **[0:17](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=17)** From scikit-learn we import the TF-IDF vectorizer package.
>
> **[0:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=22)** We create a simple corpus with a list of sentences.
>
> **[0:27](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=27)** We are keeping the corpus simple and small so we can view and understand the TF-IDF array easily.
>
> **[0:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=34)** Next, we initialize the TF-IDF vectorizer.
>
> **[0:38](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=38)** We also provide a stop-word dictionary setting so the vectorizer automatically removes stop-words from this corpus before building TF-IDF.
>
> **[0:49](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=49)** To create the TF-IDF array, we simply call the fit_transform method.
>
> **[0:53](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=53)** Once this is complete, we print all the featured names or words from which the array was built.
>
> **[1:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=60)** Next, we print the dimensions of the array.
>
> **[1:03](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=63)** And finally, we print the array itself.
>
> **[1:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=66)** Let us execute this code and review the results.
>
> **[1:13](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=73)** We first see the list of tokens from the corpus.
>
> **[1:16](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=76)** There are only seven tokens and the stop-words are already been removed.
>
> **[1:23](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=83)** It generates a TF-IDF array of size three by seven.
>
> **[1:27](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=87)** This is three documents and seven tokens or words.
>
> **[1:32](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=92)** Finally, we see the actual array generated.
>
> **[1:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=95)** If you look at the first document, the second, third, and fourth values represent the tokens basketball, league, and NBA respectively.
>
> **[1:45](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=105)** Basketball is a token that occurs in all documents.
>
> **[1:50](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=110)** So it has a lower value of .38 compared to league and NBA, which only occurs in the first document and hence has higher values of .65.
>
> **[2:03](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=123)** A real world matrix for a big corpus can have thousands of columns based on the words found in the corpus.

> [!info]- Semantic Content
>
> **Env Vars:** idf (8), nba (2), nltk (1)
> **Code Keywords:** finally, (2), function (1), let (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** fit_transform (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Best Practices

#### Storing text
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=0)** - [Instructor] Storing text data during and after the text mining process possesses unique challenges because of its size and lack of structure.
>
> **[0:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=10)** So, what are the best practices to store text data?
>
> **[0:15](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=15)** Do not try to cram text data into an RDBMS.
>
> **[0:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=19)** Rather, use a suitable big data storage like HDFS, S3, or Google Cloud Storage to store text data.
>
> **[0:29](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=29)** References to the storage can then be stored in RDBMS records.
>
> **[0:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=35)** It is important to be able to query and filter data in these object stores.
>
> **[0:41](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=41)** Create indexes on key data elements or words either in a document database, like MongoDB, or a search engine, like Elasticsearch.
>
> **[0:52](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=52)** Another option is to store processed data, like tokens or TF-IDF arrays, for future consumption.
>
> **[1:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=60)** This reduces the need to process raw text again while also saving on storage costs.

> [!info]- Semantic Content
>
> **Env Vars:** rdbms (2), hdfs (1), idf (1)
> **Speakers:** - [instructor] (1)

#### Processing text data
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=0)** - [Instructor] What are some of the key practices to consider while processing text?
>
> **[0:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=6)** First, filter text data as early as possible in the process.
>
> **[0:11](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=11)** Text data is heavy and the lighter we make it earlier, it is easier on resource consumption in the later stages.
>
> **[0:19](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=19)** Use an exhaustive and context specific stop-word list to eliminate stop-words.
>
> **[0:25](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=25)** Stop-words do not carry any insights, so eliminating most of them is important for efficiency.
>
> **[0:32](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=32)** Identify domain specific data for special use.
>
> **[0:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=35)** Examples of such strings would be product names, which occur in text data.
>
> **[0:40](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=40)** These special words mean a specific purpose for the text and can be used to index and classify them.
>
> **[0:48](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=48)** While building TF-IDF matrices, eliminate tokens that occur rarely.
>
> **[0:53](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=53)** They usually are not useful in classification or analysis.
>
> **[0:58](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=58)** Build a clean and indexed corpus based on the language and business context persisted for future use.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** idf (1)
> **Speakers:** - [instructor] (1)

#### Scalable processing of text data
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=0)** - [Instructor] How do we process large quantities of text data in a scalable manner?
>
> **[0:06](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=6)** Big data is revolutionizing the way we process text.
>
> **[0:10](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=10)** We should take advantage of big data technologies to process text.
>
> **[0:14](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=14)** First, use technologies that allow for parallel access and storage of data.
>
> **[0:21](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=21)** Technologies like Kafka, HDFS, and MongoDB support of a number of nodes and channels to allow for parallaxes, movement, and storage of data.
>
> **[0:32](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=32)** Process each document independently with a map function.
>
> **[0:37](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=37)** Activities like cleansing and tokenization can be done this way.
>
> **[0:41](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=41)** This allows for multiple nodes to process documents in parallel and hence, speed up the pipeline.
>
> **[0:47](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=47)** Use reduce functions late in the processing cycle after all filtering and cleansing is done.
>
> **[0:54](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=54)** Reduce functions like aggregations create choke points.
>
> **[0:58](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=58)** So we want to use as small data sets as possible.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Env Vars:** hdfs (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/next-steps?u=76281980&t=0)** - [Kumaran] Now that you have taken this course, you can take your learning even further, learn in depth about analytics and machine learning techniques for text data, explore text processing at scale with big data technologies, build an end-to-end live project for text analytics in your organization.
>
> **[0:20](https://www.linkedin.com/learning/processing-text-with-python-essential-training/next-steps?u=76281980&t=20)** Data always intrigues me.
>
> **[0:22](https://www.linkedin.com/learning/processing-text-with-python-essential-training/next-steps?u=76281980&t=22)** I bet it intrigues you, too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [kumaran] (1)


## Path Context

### In [[Machine Learning with Python Professional Certificate by Anaconda]]
← [[Machine Learning with Python- k-Means Clustering]] | **6 of 6**

## Part of

- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Appears In

- [[Machine Learning with Python Professional Certificate by Anaconda]]

## Related Courses

_Courses sharing skills:_

- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)
- [[Python- Working with Predictive Analytics (2019)]] — Python (Programming Language)
