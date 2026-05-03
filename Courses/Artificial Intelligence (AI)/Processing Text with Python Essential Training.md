---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGTubKeur8sMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008930353?e=2147483647&amp;v=beta&amp;t=PZUtYX6-bOg6xbI_5l58ZD_rgUmE9NdkRfkR2tgE86s"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Machine Learning with Python Professional Certificate by Anaconda]]'
prev_courses:
  - '[[Machine Learning with Python- k-Means Clustering]]'
path_nav: '[{"path":"Machine Learning with Python Professional Certificate by Anaconda","position":6,"total":6,"prev":"Machine Learning with Python- k-Means Clustering","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/unstructured-data
  - skill/python-programming-language
  - skill/text-mining
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Processing%20Text%20with%20Python%20Essential%20Training.md)

![Processing Text with Python Essential Training](https://media.licdn.com/dms/image/v2/D560DAQGTubKeur8sMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008930353?e=2147483647&amp;v=beta&amp;t=PZUtYX6-bOg6xbI_5l58ZD_rgUmE9NdkRfkR2tgE86s)

# Processing Text with Python Essential Training

> In the world of big data, more and more information is consumed and analyzed in text form. Websites, social media, emails, and chats have become the key sources for data and insights. If you work with data, then understanding how to deal with unstructured text data is essential. In this course, instructor Kumaran Ponnambalam helps you build your text mining skill set, covering key techniques for e

> [LinkedIn Learning](https://www.linkedin.com/learning/processing-text-with-python-essential-training) | 33m | Intermediate | 18K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The need for text mining skills in data science](#the-need-for-text-mining-skills-in-data-science)
- [**1. Text Mining**](#1-text-mining) (5 videos)
  - [Text mining today](#text-mining-today)
  - [Document concepts](#document-concepts)
  - [Corpus concepts](#corpus-concepts)
  - [Introduction to the NLTK library](#introduction-to-the-nltk-library)
  - [Setting up the environment](#setting-up-the-environment)
- [**2. Reading Text**](#2-reading-text) (4 videos)
  - [Reading raw files](#reading-raw-files)
  - [Reading files with corpus reader](#reading-files-with-corpus-reader)
  - [Exploring the corpus](#exploring-the-corpus)
  - [Analyzing the corpus](#analyzing-the-corpus)
- [**3. Text Cleansing and Extraction**](#3-text-cleansing-and-extraction) (5 videos)
  - [Tokenization](#tokenization)
  - [Cleansing text](#cleansing-text)
  - [Stop word removal](#stop-word-removal)
  - [Stemming](#stemming)
  - [Lemmatization](#lemmatization)
- [**4. Advanced Text Processing**](#4-advanced-text-processing) (4 videos)
  - [Building n-grams](#building-n-grams)
  - [Tagging parts of speech](#tagging-parts-of-speech)
  - [Term frequency-inverse document frequency (TF-IDF)](#term-frequency-inverse-document-frequency-tf-idf)
  - [Building a TF-IDF matrix](#building-a-tf-idf-matrix)
- [**5. Best Practices**](#5-best-practices) (3 videos)
  - [Storing text](#storing-text)
  - [Processing text data](#processing-text-data)
  - [Scalable processing of text data](#scalable-processing-of-text-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for text mining skills in data science](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/the-need-for-text-mining-skills-in-data-science?u=76281980&t=0)** - [Kumaran P] Let's say you have a massive amount of text that you need to analyze. That's a fairly likely scenario considering more and more text is being generated today. It takes the form of messages, emails, blogs, and comments on social media. Hand in hand, the need to understand, analyze, and act on these data is also growing. As such, text processing and analytics is a key skill for any data professional. My name is Kumaran Ponnambalam. In this course, I will show you the tools and techniques available for text processing in [[Python (Programming Language)|Python]]. We will use NLTK library to build use cases in Jupyter notebooks. You need prior familiarity with Python 3.7 and Jupyter notebooks. That being said, let's explore on how to do processing and transformation of text with Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3)
> **CLI Commands:** python (3)
> **Tools:** jupyter (2)
> **Env Vars:** nltk (1)
> **Versions:** python 3 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [kumaran (1)


### 1. Text Mining

[↑ Back to Table of Contents](#table-of-contents)

#### [Text mining today](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/text-mining-today?u=76281980&t=0)** - [Instructor] One of the fastest growing areas in the field of analytics and machine learning is text processing and analytics. Why? More and more data generated today is free text. New technological advances are generating humongous amounts of text data. The internet today contains a number of blogs, reviews, comments, notes, and other text-based facts. Social media is generating millions of messages every day in the form of messages, tweets, hashtags, and references. Computer software generates log messages and audit trails that need to be looked at. Emails are another form of text data. In addition, other media like audio and video are transcribed as text. The need to analyze and understand text data is growing every day. Businesses want to automatically mine insights from text data and use them for business actions. But, processing text possesses various unique challenges. Text data is many times in volume than numeric data. Also, text does not have a fixed structure or schema that makes understanding it difficult. In this course, we will look at tools and techniques offered in [[Python (Programming Language)|Python]] for processing text data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Document concepts](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/document-concepts?u=76281980&t=0)** - [Instructor] A document is a key entity that is used in the [[Text Mining]] world. Text processing software libraries receive and process documents. Let us define the term document. A document is a collection of sentences that represent a specific fact or entity. Examples of a document include a product review, a log file produced by a software instance, a blog entry, or a tweet. Documents can be big or small, but every document contains text about a specific context. A document contains paragraphs, sentences, and words. The definition of these terms is the same as the English language. For comparison's sake, a document can be said to be an equivalent of a row or record in the database. Similar to how a record contains relevant information about an entity, a document contains relevant text. The scope of a document can vary from case to case. For example, an individual tweet can be considered a document, or a set of tweets containing a specific hashtag can be considered a document. A data architect will decide the scope based on the problem being solved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Corpus concepts](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/corpus-concepts?u=76281980&t=0)** - [Instructor] The next concept we need to look into is that of a corpus. The plural of a corpus is copora. In [[Text Mining]], a corpus is a collection of documents. Documents inside a corpus are related to each other either by entity or by time periods. For example, a corpus may contain all reviews for a given product in a month, or log files generated in a day by a software process, or all tweets by a Twitter user. A corpus is equivalent of a table in a database for comparison reasons. What makes up a corpus may vary depending upon the specific use case. For example, all reviews by a user, all reviews for a product, or the global list of reviews in the system can all be examples of corpora. Text mining libraries work with a corpus, hence converting text data to a corpus and understanding its structure are important capabilities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to the NLTK library](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/introduction-to-the-nltk-library?u=76281980&t=0)** - [Instructor] [[Python (Programming Language)|Python]] supports a number of packages for [[Natural Language Processing (NLP)|natural language processing]]. The most important among this is the natural language toolkit or NLTK. NLTK is a suite of libraries for natural language processing available in Python. It has a strong suite of capabilities built over a period of time. It provides text processing capabilities, like tokenization and parts of speech tagging. It provides analytics capabilities, like frequency analysis, sentiment analysis, and n-grams generation. NLTK also comes with a corpora of sample data of various types. A developer can use these to experiment with the library. It also supports a number of machine learning features, like classification and clustering [[Algorithms]]. This makes NLTK an end to end library for text processing and analytics. We will be using NLTK libraries extensively in this course. Details about setup and use of NLTK is available in the website [nltk.org](https://nltk.org).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Algorithms]] (1)
> **Env Vars:** nltk (6)
> **CLI Commands:** python (2)
> **URLs:** [nltk.org](https://nltk.org) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Setting up the environment](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=0)** - [Instructor] This course uses [[Python (Programming Language)|Python]] 3.7 and Jupyter Notebooks. If you do not have it already set up, you can set it up using the Anaconda Distribution. You can download from this website, [anaconda.com/distribution](https://anaconda.com/distribution). It contains executables for multiple operating systems, including [[Windows]], macOS, and [[Linux]]. Please download the one that is appropriate for you. Make sure you download the Python 3.7 version since that is what we would be using as part of this course. Once you download and install Anaconda, you're going to get the Anaconda utilities in your dropdown here. In this, go to Jupyter Notebooks, right-click, More, Open file location. On Jupyter Notebook, right-click and say Properties. By default, the Jupyter Notebook launches by using the %USERPROFILE% variable as your home data tree. You can change it to suit to your requirements. Let's say you downloaded all your course material into a specific data tree. You can make Jupyter launch with that data tree as its root data tree. In my case, I'm going to change this %USERPROFILE% to my own data tree, where I have downloaded the code. Now do an Apply, do a Continue, and this is set. Now when you go and launch Jupyter Notebook,
>
> **[1:37](https://www.linkedin.com/learning/processing-text-with-python-essential-training/setting-up-the-environment?u=76281980&t=97)** it will start and launch Jupyter Notebook from your specific data tree. Now you can see all the code and the data files for the specific codes available to you to launch from here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Windows]] (1), [[Linux]] (1)
> **Tools:** jupyter (7), anaconda (4)
> **CLI Commands:** python (2), make (2)
> **UI Navigation:** right-click (2), dropdown (1), go to (1)
> **Env Vars:** userprofile (2)
> **Versions:** python 3 (2)
> **Exercise Files:** download the (2)
> **Prerequisites:** set up (1), install (1)


### 2. Reading Text

[↑ Back to Table of Contents](#table-of-contents)

#### [Reading raw files](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-raw-files?u=76281980&t=0)** - [Instructor] In this chapter, we will explore reading data into a corpus and exploring it. The code samples are available in the notebook zero two XX reading data dot ipynb. For exercises in this course, we use a file called Spark Course Description dot text. This is available as part of your course material. Let us explore its content. It contains description of a course on [[Apache Spark]]. All text data needed for processing have to be acquired from a data source. In this code example, we will read a text file into a [[Python (Programming Language)|python]] variable. This is standard python and does not use the NLTK library. We read the Spark Course Description dot txt into a variable called file data and then we print the first 200 characters of the file. Let us run the code now. In general, data can be acquired from various sources, including files, [[Databases]], or strings. There are several python packages and tools that help to get data from these sources. We do not intend to focus on those areas in this course. Rather, we focus on processing data once it is acquired from the source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Apache Spark]] (1), [[Databases]] (1)
> **CLI Commands:** python (3), apache (1)
> **Env Vars:** nltk (1)
> **Speakers:** - [instructor] (1)

#### [Reading files with corpus reader](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/reading-files-with-corpus-reader?u=76281980&t=0)** - [Narrator] NLTK supports a special sort of functions for reading a list of files into a corpus. It comes as part of the NLTK corpus reader package. More details of the same, can be found in the NLTK website. Please install the NLTK package, if you have not done so before, using the pip install nltk command. We will also download the punkt package that we will use later in the examples. The plain text Corpus Reader is used to read a list of text files under a directory. Each text file becomes a single file id but the contents of the file are (mumbles) together in to a single corpus. Data is then split in to paragraphs, sentences, and [[Tokens]] automatically, while the corpus is read. In this example, we need the same "Spark-Course-Description.txt" file into the corpus. The raw contents of the files are then printed using the corpus.raw command. Let us run the code now and see the output.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **Env Vars:** nltk (4)
> **Prerequisites:** install (2)
> **File Paths:** spark-course-description.txt (1)
> **CLI Commands:** pip (1)
> **Cross-References:** later in (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [narrator] (1)

#### [Exploring the corpus](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=0)** - [Instructor] As discussed in the previous video, the corpus reader analyzes the input data, and splits them into paragraphs, words and sentences. It also supports various methods to view this extracted content. We will see examples of those in this video. First, we print the list of file IDs. The file IDs are one per physical file read. In our case, we used only one file. We can then extract paragraphs from the corpus using the paragraphs command. Paragraphs are identified by a blank line separating the text. We print the number of paragraphs, which should be one in this case. Next, we extract the sentences in the corpus, using the sents command. This actually gives you a list of lists. Each sentence is made into a list of words, then those individual [[Microsoft Word|word]] lists make up the sentence list. We first print the total number of sentences in the corpus, which gives a value of five. We then just print the first sentence. This should actually print the list of words that [[Forms]] the first sentence in the corpus. Finally, we print all the words in the corpus using the words (mumbles). This is a long list of all words that I used in the corpus. Let us run the code now, and see the output. There is only one file ID in the corpus,
>
> **[1:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/exploring-the-corpus?u=76281980&t=95)** spark course description.txt. The total paragraphs in the corpus is one. The total sentences in the corpus is five. And the first sentence is broken up into a list of words in the sentence. The words in the corpus is a long list, and only the first part of that list is printed here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Forms]] (1)
> **Definitions:** is a  (2)
> **File Paths:** description.txt (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing the corpus](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/analyzing-the-corpus?u=76281980&t=0)** - [Instructor] The NLTK library provides a number of functions to analyze the distribution of data as well as aggregate data in the corpus. First, we use the frequency distribution method to understand the distribution of words in the corpus. This helps us understand the most popular words in the corpus. We then print the top 10 words in the corpus. This is a list of couples. It prints out each [[Microsoft Word|word]] and the number of times it occurs in the corpus. We can also look up a specific word to see its distribution in the corpus. We use the get method to get the frequency distribution for the word spark. In the output, you see the top 10 words listed and there are couples mentioning the word as well as the number of times it occurs in the corpus. We also see the distribution for the word spark to be three.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5)
> **Env Vars:** nltk (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Text Cleansing and Extraction

[↑ Back to Table of Contents](#table-of-contents)

#### [Tokenization](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tokenization?u=76281980&t=0)** - [Instructor] The first extraction task that is usually done on a corpus is tokenization. Tokenization is the process of breaking down a stream of textual content into its parts, words, terms, symbols, sentences, paragraphs, and other meaningful elements. Converting text into a set of [[Tokens]] makes it easy for further cleansing of the corpus. The code for this chapter is available in the notebook named 03_XX Text Cleansing and Extraction. In the previous chapter, we directly used a corpus reader to both read text and convert it into tokens. In this example, we will use a specific tokenize method available in NLTK library. We read the Spark-Course-Description.txt file into a raw text variable. We then use the [[Microsoft Word|word]] tokenize method to convert it into a token list. We then print the first 20 tokens. Let's run the code and see the results. We see that there are 110 tokens that have been in total identified as part of this file. The first 20 tokens are printed here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (5), [[Microsoft Word|Word]] (1)
> **File Paths:** spark-course-description.txt (1)
> **Env Vars:** nltk (1)
> **Cross-References:** previous chapter (1)
> **Speakers:** - [instructor] (1)

#### [Cleansing text](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=0)** - [Instructor] X-data need to undergo a series of cleansing steps before it's ready for analytics and machine learning. We will review some of these steps in this video. X-cleansing covers a number of general purpose and specific cleansing activities. Text may need to be formatted and standardized. For example, dates inside text may need to be converted to a standard format. Language conversions may also need to be done. Punctuations like period, comma, et cetera, need to removed also since they don't carry any inside value in a text carapace. Abbreviations need to be removed or converted to their full form. Case conversion may also be necessary to standardize text. Elements like hashtags, mentions, and URLs need to be cleaned up also. In this example, we do two cleansing activities. Removing punctuations, and conversion to lowercase. In order to remove punctuations, we use the Punkt package in NLTK. Using a Lambda function, we ran each token, created in the previous video, through this package, and it removes punctuations for you. The resulting token list is printed. Let us run this code now. The original list had 110 [[Tokens]]. Now it only has 100 because the punctuations are removed from the list.
>
> **[1:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/cleansing-text?u=76281980&t=94)** Next, we convert each token to lowercase using a standard [[Python (Programming Language)|Python]] function for this purpose. The results are again printed. Let us execute this code and see the results. We see a [[Microsoft Word|word]] like [[DevOps]] in the previous example now being converted to lowercase. The number of tokens still remain the same at hundred.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Python (Programming Language)|Python]] (1), [[Microsoft Word|Word]] (1), [[DevOps]] (1)
> **CLI Commands:** python (1)
> **Env Vars:** nltk (1)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Stop word removal](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stop-word-removal?u=76281980&t=0)** - [Instructor] Stop-words are words that do not carry any insights and they need to be removed. Stop-words are a group of words that do not carry any meaning by themselves. For example, words like in, and, the, and which are abundant in text data, but they do not have any meaning. They are called stop-words. They are not required for analytics purposes, but need resources for storage and processing. Hence, it is recommend to remove them. A number of stop-[[Microsoft Word|word]] dictionaries are available by human language that contain the list of stop-words in that language. Those need to be used to identify and remove stop-words. In this example, we will remove stop-words from the previously created token list. There is a stop-words package in NLTK, which we will download and import. We run the token list through a filter function that checks if the token exists in the stop-words list. If so, the stop-word is not sent to token_list4. We finally print the remaining [[Tokens]] and the count of tokens in the token list. Let us execute this code. We see that from a list of 100 tokens, the list has now come down to 62 tokens only after removing stop-words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[Microsoft Word|Word]] (2)
> **Env Vars:** nltk (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Stemming](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/stemming?u=76281980&t=0)** - [Instruction] In this video I will discuss stemming, a key processing step in [[Text Mining]]. What is stemming? To understand that we need to define a stem. A stem is the base part of a [[Microsoft Word|word]] to which affixes can be attached for derivatives. For example, the word combine is the stem for combine, combining, and combined. The first part of these words are common. The different words represent different grammatical elements with the same meaning. Stemming is a process that converts a word into its stem. It keeps the base word. As a result, the total unique words in the corpus goes down and the words with similar meaning can be grouped together. Stemming simply cuts off the affix, so it may not result in a complete word. In this example, we will do stemming by using the PorterStemmer function available in NLTK. Each word in the remaining token list is passed through the stemmer, which will give back the stemmed representation of the word. The results are collected in another list called Token_list5. Let us execute this code and examine the results. In the result, we see that stemming has happened for words like dev ops and engine. We will look at a better alternative to stemming in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7), [[Text Mining]] (1)
> **Env Vars:** nltk (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instruction] (1)

#### [Lemmatization](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/lemmatization?u=76281980&t=0)** - [Instructor] Lemmatization is another important step in [[Text Mining]]. What is lemmatization? Lemmetization is similar to stemming, but it produces a proper root [[Microsoft Word|word]] that belongs to the language. For example, combine is the lemmatized version of combine, combined, and combining. As opposed to stemming, which produced an incomplete word, combine is a proper English word. Lemmatization uses a dictionary to match words to their root word. It is a more expensive operation than stemming because of the dictionary and resources vitamins. For our example with lemmatization, we will use the WordNet Dictionary and the WordNet Lemmatizer. Each token in the original token list4 are passed through the lemmatizer, which returns the lemmatized string. The results are printed. Let us execute the code and review the results. You will notice that words like engine and [[DevOps]] are now complete as opposed to stemming, which produced incomplete word. To review an example, we will compare the raw, stemmed, and lemmatized versions of the word technology. We will see that the raw word was technologies in plural. The stemmed version is technolog and lemmatized is technology, which is the singular version of technologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (7), [[Text Mining]] (1), [[DevOps]] (1)
> **Definitions:** is a  (2)
> **Analogies:** similar to (1), for example (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced Text Processing

[↑ Back to Table of Contents](#table-of-contents)

#### [Building n-grams](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=0)** [Instructor] We will now look at some advanced text processing and transformation techniques in this module. First, we look at N-Grams. What is N-Grams? N-Grams is a sequence of n items in a sample of text. The sequence can be any number. Depending on N, it's called bigrams, trigrams, four-grams, and et cetera. For example, let's take a sentence: "Dogs are favorite pets". If we do bigrams conversion of these, we will end up with three bigrams: "dogs" and "are", "are" and "favorite", "favorite" and "pets". If we do trigrams we end up with: "dogs", "are", "favorite" and "are", "favorite", "pets". N-grams are used for building predictive text systems that predict the next sequence of words. Let's now look at the code. The code for this chapter is available in the file, called "04_xx advanced text processing". The first part of this code we see here is a repeat of all the processing we did in the previous chapter. This takes raw text from Spark course description into our text, and test organization, cleansing, removal of star words, and limitation. Let's exclude this code now. Next, we use the n-grams package with an NLDK to
>
> **[1:37](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-n-grams?u=76281980&t=97)** generate n-grams for this token list. We passed the processed token list to the n-grams matter, and NLDK'd the value of n. We generate bigrams and trigrams. We then print the 5 most common bigrams and trigrams in the corpus. Let's exclude this code now. From the results, we see that the most common bigram is "big" and "data" since this phrase "[[Big Data]]" appears multiple times in the corpus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1)
> **Env Vars:** nldk (2)
> **Definitions:** is a  (2)
> **Cross-References:** previous chapter (1)
> **Analogies:** for example (1)

#### [Tagging parts of speech](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/tagging-parts-of-speech?u=76281980&t=0)** - [Instructor] The next [[Text Mining]] technique we review in this video is parts of speech tagging. Parts of speech tagging involves identifying the part of speech for each [[Microsoft Word|word]] in a given corpus. POS tagging uses an NLTK package that classifies a given word. The POS is tagged with abbreviations like NN for a noun, VBP for verb singular present, and JJ for adjective. POS tagging is used for entity recognition, filtering data, and sentiment analysis. It is also used in advanced applications like chat bots. Now let us review the code. POS tagging is supported in NLTK using the averaged perceptor tagger feature. First, we download the averaged_perceptron_tagger package from NLTK. Using this library is simple. We just call the POS tag method with a list of words and it provides the POS tag for each of those words. We pass the first 10 words in the token list and we will see the POS tag printed out. Let us execute this code now and review the results. We see that the words order and construct are tagged as nouns, while stream is tagged as a verb.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Text Mining]] (1)
> **Env Vars:** pos (7), nltk (3), vbp (1)
> **Code Identifiers:** averaged_perceptron_tagger (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Term frequency-inverse document frequency (TF-IDF)](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=0)** - In this video, we will look at a popular text-mining technique called term frequency-inverse document frequency, or TF-IDF. A number of machine learning [[Algorithms]] do not work on text values. They only work on numeric features. This means text needs to be converted to an equivalent numeric representation to do machine learning. TF-IDF is a technique to convert text to a numeric table representation. TF-IDF outputs a table. In this table, each row represents a document in the corpus. Each column represents a [[Microsoft Word|word]] in the corpus. Each cell in the table provides a value that indicates the relative strength of the word with respect to the document. A higher value indicates higher correlation between the word and the document. How do we do TF-IDF? Let's say we have a corpus of three documents. Each document is a simple sentence as shown here. We first do text cleansing described in the previous chapter to arrive at a clean corpus as shown here. Next, we create a count table. In this table, each document is a row, and each word is a column. The count indicates the number of times the word appeared in the document. Next, we create the text frequency table. To do this, we divide each cell
>
> **[1:34](https://www.linkedin.com/learning/processing-text-with-python-essential-training/term-frequency-inverse-document-frequency-tf-idf?u=76281980&t=94)** with the total number of words in the document. For example, Document 1 has three words. Each word count in the document is divided by three, and we get .33 for all words in the document. Next, we find inverse document frequency. IDF is computed for each word across all documents in the corpus. For this, we use the formula log e, total documents in the corpus divided by documents that have this word. The purpose of IDF is to find words that are unique and prevalent in a few documents only. The fewer the documents having the word, the higher is the IDF. Finally, we find TF-IDF by multiplying the TF value in each cell with the IDF value for that word. In the next video, we will see a code example for computing TF-IDF.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (10), [[Algorithms]] (1)
> **Env Vars:** idf (10)
> **Definitions:** is a  (4)
> **CLI Commands:** find (3)
> **Cross-References:** previous chapter (1), in the next (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### [Building a TF-IDF matrix](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=0)** - [Instructor] In this video, we will look at code examples for building a TF-IDF matrix. NLTK does not support a simple TF-IDF function, hence, for this purpose, we will use scikit-learn library in [[Python (Programming Language)|Python]]. From scikit-learn we import the TF-IDF vectorizer package. We create a simple corpus with a list of sentences. We are keeping the corpus simple and small so we can view and understand the TF-IDF array easily. Next, we initialize the TF-IDF vectorizer. We also provide a stop-[[Microsoft Word|word]] dictionary setting so the vectorizer automatically removes stop-words from this corpus before building TF-IDF. To create the TF-IDF array, we simply call the fit_transform method. Once this is complete, we print all the featured names or words from which the array was built. Next, we print the dimensions of the array. And finally, we print the array itself. Let us execute this code and review the results. We first see the list of [[Tokens]] from the corpus. There are only seven tokens and the stop-words are already been removed. It generates a TF-IDF array of size three by seven. This is three documents and seven tokens or words. Finally, we see the actual array generated.
>
> **[1:35](https://www.linkedin.com/learning/processing-text-with-python-essential-training/building-a-tf-idf-matrix?u=76281980&t=95)** If you look at the first document, the second, third, and fourth values represent the tokens basketball, league, and NBA respectively. Basketball is a token that occurs in all documents. So it has a lower value of .38 compared to league and NBA, which only occurs in the first document and hence has higher values of .65. A real world matrix for a big corpus can have thousands of columns based on the words found in the corpus.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[Python (Programming Language)|Python]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** idf (8), nba (2), nltk (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** fit_transform (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Best Practices

[↑ Back to Table of Contents](#table-of-contents)

#### [Storing text](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/storing-text?u=76281980&t=0)** - [Instructor] Storing text data during and after the [[Text Mining]] process possesses unique challenges because of its size and lack of structure. So, what are the best practices to store text data? Do not try to cram text data into an RDBMS. Rather, use a suitable [[Big Data]] storage like HDFS, S3, or [[Google Cloud Platform (GCP)|Google Cloud]] Storage to store text data. References to the storage can then be stored in RDBMS records. It is important to be able to query and filter data in these object stores. Create indexes on key data elements or words either in a document database, like [[MongoDB]], or a search engine, like [[Elasticsearch]]. Another option is to store processed data, like [[Tokens]] or TF-IDF arrays, for future consumption. This reduces the need to process raw text again while also saving on storage costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Text Mining]] (1), [[Big Data]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[MongoDB]] (1), [[Elasticsearch]] (1)
> **Env Vars:** rdbms (2), hdfs (1), idf (1)
> **Speakers:** - [instructor] (1)

#### [Processing text data](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/processing-text-data?u=76281980&t=0)** - [Instructor] What are some of the key practices to consider while processing text? First, filter text data as early as possible in the process. Text data is heavy and the lighter we make it earlier, it is easier on resource consumption in the later stages. Use an exhaustive and context specific stop-[[Microsoft Word|word]] list to eliminate stop-words. Stop-words do not carry any insights, so eliminating most of them is important for efficiency. Identify domain specific data for special use. Examples of such strings would be product names, which occur in text data. These special words mean a specific purpose for the text and can be used to index and classify them. While building TF-IDF matrices, eliminate [[Tokens]] that occur rarely. They usually are not useful in classification or analysis. Build a clean and indexed corpus based on the language and business context persisted for future use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Tokens]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** idf (1)
> **Speakers:** - [instructor] (1)

#### [Scalable processing of text data](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/scalable-processing-of-text-data?u=76281980&t=0)** - [Instructor] How do we process large quantities of text data in a scalable manner? [[Big Data]] is revolutionizing the way we process text. We should take advantage of big data technologies to process text. First, use technologies that allow for parallel access and storage of data. Technologies like Kafka, HDFS, and [[MongoDB]] support of a number of nodes and channels to allow for parallaxes, movement, and storage of data. Process each document independently with a map function. Activities like cleansing and tokenization can be done this way. This allows for multiple nodes to process documents in parallel and hence, speed up the pipeline. Use reduce functions late in the processing cycle after all filtering and cleansing is done. Reduce functions like aggregations create choke points. So we want to use as small data sets as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (2), [[MongoDB]] (1)
> **Env Vars:** hdfs (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/processing-text-with-python-essential-training/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/processing-text-with-python-essential-training/next-steps?u=76281980&t=0)** - [Kumaran] Now that you have taken this course, you can take your learning even further, learn in depth about analytics and machine learning techniques for text data, explore text processing at scale with [[Big Data]] technologies, build an end-to-end live project for text analytics in your organization. Data always intrigues me. I bet it intrigues you, too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1)
> **CLI Commands:** find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Unstructured Data
- Python (Programming Language)
- Text Mining

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

---

[↑ Back to top](#)