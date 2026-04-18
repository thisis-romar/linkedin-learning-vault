---
type: course
slug: hands-on-natural-language-processing
url: "https://www.linkedin.com/learning/hands-on-natural-language-processing"
duration_minutes: 50
duration: 50m
level: Advanced
updated: 6/29/2022
learners: 13970
skills:
  - Artificial Intelligence (AI)
  - Natural Language Processing (NLP)
exercise_files: true
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
status: not-started
created: 2026-04-17
---

# Hands-On Natural Language Processing

> Dexterity at deriving insight from text data is a competitive edge for businesses and individual contributors. This course with instructor Wuraola Oyewusi is designed to help developers make sense of text data and increase their relevance. This is a hands-on course teaching practical application of major natural language processing tasks. Learn how to replicate the knowledge gained into the data t

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing) | 50m | Advanced | 14K learners

## Instructor

- [[Wuraola Oyewusi]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence (AI)
- Natural Language Processing (NLP)

## Table of Contents

### Introduction

#### Gain insights from unstructured text data
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980&t=0)** - [Instructor] It is estimated that between 80 to 90% of business data is unstructured and the organizations that can effectively glean insight from unstructured data, such as text, have a competitive advantage over those who don't.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980&t=15)** In this course, I'll teach you how to use different natural language processing technique to analyze text data.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980&t=23)** My name Wuraola Oyewusi.
>
> **[0:27](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980&t=27)** As an experienced data scientist, some of my most important work is related to natural language processing.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980&t=35)** If one fact about me, I have a lot of experience learning online.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/gain-insights-from-unstructured-text-data?u=76281980&t=39)** So, come on this journey with me as we explore different natural language processing tasks with practical use cases.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the best out of this course, I'm assuming that you have a fundamental understanding of Python programming, machine learning, and natural language processing.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-you-should-know?u=76281980&t=12)** Feel free to follow along, but also just to explore courses on those topics.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=0)** - This course is designed to be hands on.
>
> **[0:03](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=3)** So, it is encouraged that you walk along with the provided exercise files.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=9)** We will be using Google Colab to run our code.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=13)** Let's take a brief tour of how it works by going to the file I shared on colab.research.google.
>
> **[0:22](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=22)** To upload an IPython file, you click on the file button, and then upload Notebook.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=34)** Now that we have our Notebook, to run a cell, you click here.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=43)** And to upload another file type, you come to files and then click on upload to storage session and select the file.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=57)** Sometimes when you pip install the library you may need to restart the page by clicking on runtime, restart runtime.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=68)** That's it for now.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-natural-language-processing/exercise-files?u=76281980&t=69)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type, (1)
> **UI Navigation:** click on (2), select the (1)
> **Tools:** colab (2)
> **CLI Commands:** pip (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** install (1)
> **Speakers:** - this (1)


### 1. Named Entity Recognition (NER)

#### What is named entity recognition (NER)?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=0)** - Named entity recognition is a natural language processing technique that locates named entities in a structured text data and classifies entities into predefined categories.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=13)** It is also called entity extraction, entity identification or entity chunking.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=21)** The algorithm is able to recognize named entities, searchers, people's and companies names, addresses, dates, expression quantities, monetary values and percentages.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=36)** And the machine learning used for named entity recognition can either be supervised, where the training data is labeled, or unsupervised, where the training data is not labeled.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=48)** In practice, the supervised machine learning is the most popular approach.
>
> **[0:54](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=54)** The central principle of named entity recognition is to understand what's in the text, retrieving collect important information for storage into databases.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=65)** Some of the most popular frameworks are spaCy, scispaCy, which is like spaCy, but it focuses on scientific and clinical documents.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=78)** Then there is flairNLP, AllenNLP, Stanza and Stafford NER.
>
> **[1:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=85)** All those frameworks are based on Python, except for Stafford NER, which is based on Java.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=93)** Now, there are many practical use cases of named entity recognition.
>
> **[1:38](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=98)** In fact, you may already have come across them and may not even know it.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=103)** You can apply named entity recognition to review customer feedback and detect recurring problems in a certain location.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=110)** For example, you can automatically categorize customer support tickets by product name or type to route the ticket to the appropriate agent.
>
> **[2:02](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=122)** Now, if you watch movies, listen to music or browse products online, named entity recognition systems are probably improving the efficiency of the recommendation.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=135)** They can also help recruiters save a lot of time when reviewing hundreds of resumes.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=140)** The algorithm can extract relevant information about candidates, such as their name, email, degrees, work experience and so on automatically.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=154)** And then there is plain text cataloging where the type of texts is determined based on valid recognized entities.
>
> **[2:42](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-named-entity-recognition-ner?u=76281980&t=162)** So as you can see, named entity recognition techniques keep those valuable tools to speed up our work to better evaluate large amounts of texture data to categorize items and even to create item recommendation.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (2), scispacy (1), flairnlp (1)
> **Env Vars:** ner (2)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - named (1)

#### NER with spaCy
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=0)** - In this notebook we will demonstrate how to leave it Spacey a Python natural longer processing framework for name daily recognition or any harmful shot.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=13)** The sample text we are going to use is a snippet from LinkedIn Wikipedia page.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=20)** First we input Spacey for NER and Placey for visualization of the extracted entities.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=29)** Then we load an English pretrained pipeline into a variable called NER pipeline.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=36)** We then assess the names of the available entity labels and save them into a variable code NER pipeline labels.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=46)** To understand what each label means.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=49)** We can run spacey.explain using the label name we are interested in in this case.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=56)** We see that the label ORJ is for companies, agencies, institutions, and so on.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=66)** We then create a variable called sample text to save the text.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=71)** And then we estimate the total number of sentences in the sample text is 59.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=79)** Now we apply the NER pipeline to sample the text and save it into a verbal code NER text with any rate over the NER text to assess de-identified entities its label, the start and the ending spans.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=100)** The first start.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=101)** What we see is December, 2022 and it's been tacked correctly as a date.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=109)** We can also explore all the details such as the number of occurrences of an extracted entity.
>
> **[1:55](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=115)** For example, there are threat entities doctors money now to have a better appreciation of identities extracted, we will go ahead and view them using displacing here.
>
> **[2:09](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=129)** We can see all the identified I entities in their collocated labels.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=134)** In this exercise, we explored how to use Spacey and industrial strength, natural longer processing library for and name day recognition task.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/ner-with-spacy?u=76281980&t=145)** The task goes fast, efficient, and easy to use.

> [!info]- Semantic Content
>
> **Env Vars:** ner (6), orj (1)
> **CLI Commands:** python (1)
> **Code Keywords:** case. (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Data preprocessing for custom NER
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=0)** - The general idea behind data annotation for named entity recognition is that the entities of interest get tagged with the desired labels in an appropriate format, depending on the training data.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=15)** In this notebook, we will learn how to notate data in a format that is compatible with Spacy a natural longer processing library that uses an open source notebook compatible library called Spacy annotator.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=31)** The sample text used in this video is a snippet from LinkedIn's Wikipedia page.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=39)** First we install the library using pip.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=43)** Then we input the necessary models.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=46)** Then we save the text into a variable called sample text.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=51)** We then split the sample text using the next line corrector and save into a list called sample text list.
>
> **[0:59](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=59)** After removing the empty strings there are 15 sentences in total.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=65)** Now go ahead to save the sample text list into the pd data frame called DF with a column name: text.
>
> **[1:16](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=76)** To process our raw text.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=78)** We load a phython Spacey pipeline into a variable called NLP.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=84)** We then iinitiate an annotator object with our customs labels and model.
>
> **[1:31](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=91)** Our customs labels here are: company, person, money, plays, and dates.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=100)** Now we can start a data annotation by initiating annotates, for the annotator object and saved as a variable called TF labels.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=112)** Now we have an interactive view with submit, skip and finish function where appropriate entities can be assigned to their labels by copying from the displayed sentence.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=126)** For the first sentence of my view we have the company was founded in December, 2022.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=134)** A date by Reid Hoffman, a person from PayPal and SocialNet companies.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=146)** After annotation, we can view the DF labels.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=150)** You will notice a new column called annotations.
>
> **[2:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=154)** To understand the difference between the raw text and the annotated text.
>
> **[2:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=159)** We print the data type and content of a row from the text column.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=167)** We can see the data and its type, our strength and for the annotations column, the data and its type it's a Topo Denotation from Spacey training data is usually a Topo.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=183)** So we are on the right path.
>
> **[3:05](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-custom-ner?u=76281980&t=185)** For future use we save our data frame as a CSV file in download.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), type, (1)
> **Env Vars:** nlp (1), csv (1)
> **CLI Commands:** pip (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - the (1)

#### Custom model training with spaCy
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=0)** - [Instructor] Now, let's learn how to train a custom Named Entity Recognition model, NER, with spaCy.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=7)** To successfully walk along, some configuration files are provided in the exercise folder.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=14)** This section shows how to annotate data for NER.
>
> **[0:21](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=21)** First, we install the spaCy library using pip.
>
> **[0:26](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=26)** Then we go ahead to input the necessary modules like spaCy, and pandas.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=31)** And we verify the version of spaCy is 3.2.3.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=37)** Then we load the data set into a variable called df.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=43)** And we use the head() command to see the data and get the available columns.
>
> **[0:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=49)** Then we apply ast.literal_eval to the annotations column to change the data from string to tuple.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=60)** We then use the info() command to see the data frame as 15 rows.
>
> **[1:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=66)** In practice, it is advisable to have at least 15 instances of an entity in the training data.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=74)** 15 rows of annotation will not provide that.
>
> **[1:18](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=78)** So for the purpose of this exercise, we increase our data instances by multiplying our data frame by 100.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=87)** And great.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=88)** Now we have 1,500 instances.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=92)** Let's go ahead and save the first one to the list called train_data.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=97)** And save the remaining 300 into another list called test_data.
>
> **[1:44](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=104)** We then load the blank spaCy pipeline into a variable called nlp, and create an instance of a DOCBin.
>
> **[1:53](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=113)** And save it to a variable called db.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=117)** Now we can iterate over our training data, and format it into a spaCy format, and save to disk as train.spaCy.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=128)** We repeat the above step for test data, and save to disk as test.spaCy in the directory.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=139)** You should have two files in your notebook, train.spaCy and test.spaCy.
>
> **[2:26](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=146)** We can verify the data by running spaCy debug data on the default config file.
>
> **[2:33](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=153)** We then run the command throughout the field.training configuration.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=158)** You may need to open the config file generated, and point the variables to the train and test spaCy files.
>
> **[2:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=167)** Great! Now we are ready to train our model.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=173)** We then load the best of the model outputs into variable called test_nlp.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=179)** We can see that the available labels are company, dates, and place.
>
> **[3:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=186)** We then test that train.NER model on test data, and visualize with displacy.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=193)** Our custom NER model correctly predicted September, 2022 as a date, Lagos as a place, LinkedIn as a company.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=205)** Due to the limitation in the training data, it's predicted Nigeria which fits as a place, as a company.
>
> **[3:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=214)** And we, a pronoun, as a container as well.
>
> **[3:38](https://www.linkedin.com/learning/hands-on-natural-language-processing/custom-model-training-with-spacy?u=76281980&t=218)** In this exercise, we successfully trained a custom Named Entity Recognition model using spaCy.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (13), literal_eval (1), train_data (1), test_data (1), test_nlp (1)
> **Env Vars:** ner (4)
> **Code Keywords:** let (2)
> **CLI Commands:** pip (1)
> **Versions:** 3.2.3 (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Topic Modeling

#### Introduction to topic modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=0)** - Topic modeling is one of the most important and useful techniques used when analyzing large text data sets.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=7)** It is an unsupervised machine learning technique that automatically finds patterns.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=13)** And in first topics within text based data, the findings are usually context aware.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=20)** In other words, the categories of text elements or documents into classes is based not only on text similarity but also on semantic similarity.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=32)** For example, documents containing words like health, doctor, patient, hospital, will be categorized under a topic called healthcare.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=43)** And for a topic called famine, you might see words like farm, crops, corn, and wheat.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=52)** The assumption of topic modeling is that every document comprises a statistical distribution of topics that can be obtained by combining all the distributions for all the topics covered.
>
> **[1:05](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=65)** In other words, the algorithms try to figure out which topics are present in the data set and how strong that presence is.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=75)** In this course, we are going to focus on two main topic modeling algorithms: LSA for latent semantic analysis and LDA for latent dirichlet allocation.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=88)** LSA is one of the foundational techniques used for component analysis applied to text data.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=94)** It is a well-known linear algebra method called singular value decomposition, or SVD.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=102)** On the other hand, LDA uses a probabilistic method using dirichlet powers, making it less prone to over-fitting.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=112)** In general, the best practice is to try several different algorithms and see which one works best with your data set.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=121)** Topic modeling is used in several application, such as gathering insights to improve your product from customer reviews and customer support emails, who cluster millions and millions of news articles and published papers to find common patterns.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=139)** Topic modeling is used in recommendation engine or information retriever systems to find similar products, topics, or articles related to what you're looking for, making for a better user experience.
>
> **[2:35](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=155)** Another application of topic modeling is for text annotation.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=160)** One of the most tedious tasks one can do manually, it automatically categorizes your data set into classes, making it easier to collect insight and analyze your information.
>
> **[2:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/introduction-to-topic-modeling?u=76281980&t=172)** These are just a few examples of what this powerful technique of topic modeling can do for you and your large text-based data sets.

> [!info]- Semantic Content
>
> **Env Vars:** lsa (2), lda (2), svd (1)
> **Definitions:** in other words (2), is an  (1), is a  (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (1), such as (1)
> **Code Keywords:** for, (1)
> **Best Practices:** best practice (1)
> **Speakers:** - topic (1)

#### Data preprocessing for topic modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=0)** - Now, let's see how all these work in practice.
>
> **[0:04](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=4)** We will be using the 20 news script data set, from the open source UCI Machine Learning Repository, in this notebook.
>
> **[0:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=14)** And to get a clean version of this data, we are going to use Psyche plan to input.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=20)** As you can see here in the first cell we start by importing the required Python libraries escalan dot data sets, pay, print, and pandas.
>
> **[0:33](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=33)** We then save the data from Fetch 20 news group into a variable called "Data Sets" on the function call.
>
> **[0:42](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=42)** We specified that the subset of the data retrieved should be whole.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=47)** We set the random state to 32 in order to ensure consistency.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=53)** And finally, we specify that we want to remove headers, photos, and quotes, that are present in the original dataset.
>
> **[1:04](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=64)** Once we get the data, we can print out the keys using dataset dot keys function.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=71)** The results is a dictionary key array with data, file names, target names, and description.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=82)** Now let's get the value for the data key with data sets, data command, and then print in the data set's targets name using pay print.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=95)** You can also check the length of the data using the lens command.
>
> **[1:40](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=100)** In the same fashion you can get the shape of the target and the file names.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=107)** We can now save the data sets into an appendix data frame called "Data Sets DF", renaming the data to "news" and the target to "label," which we can see its view here by simply calling the variable data sets "DF."
>
> **[2:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=128)** Now, if you want more context about the label you can apply a simple lamb function to map the numeric label to the string label name.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=138)** And there we go.
>
> **[2:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=140)** The data set data frame now adds three columns, news, label, and label name.
>
> **[2:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=148)** Great. So up to now, we have inputted the data set, transferred it to a data frame for ease of manipulation, and renamed the columns appropriately.
>
> **[2:41](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=161)** Now let's pre process the data so it can be used for topic modeling using the Jensen Python library.
>
> **[2:50](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=170)** We first update and import the appropriate functions from the Jensen Library and use the help command to see that we stop pre processing filters available to be used on our text data.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=184)** As an example, we create the clean news column to show what the pre processed strength function does.
>
> **[3:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=193)** So now let's pre process strengths, but this time we are going to set the filters to convert the text to lowercase and also apply the strip tag, strip punctuation, strip numeric, remove stop wood, strip shot filters and then put the outputs in a column called "clean use one" applying the filters to the dataset "DF news column."
>
> **[3:42](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=222)** To see the results we called the dataset "DF" and see the new column.
>
> **[3:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=229)** Now the Jensen Library requires that the input data is a dictionary object.
>
> **[3:57](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=237)** So we transform the data into one, install it in the dataset dictionary variable.
>
> **[4:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=246)** I usually like to check that the operation went well by checking the length of the dictionary.
>
> **[4:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=253)** Great. It's not zero. So we're good to go!
>
> **[4:17](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=257)** Looking to ID a map of text talking to its numerical representation is assessable by the dictionary dot talking to ID function.
>
> **[4:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=268)** We then vectorized the data sets dictionary using the bag-of-words or ductible method.
>
> **[4:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=277)** Remember: the topic modeling algorithms accept vector representation, not text!
>
> **[4:44](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=284)** We check the results using the length method and print the results to see an instance of the vectorized text.
>
> **[4:54](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=294)** Now let's explore another vectorization technique called TF IDF; temp, frequency, inverse document frequency.
>
> **[5:05](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=305)** TF IDF is vectorized by getting the bag of words vectors into a TF IDF model function.
>
> **[5:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=313)** As shown here, we can then check the length of the TF IDF output and inspect an instance of the vectorized text.
>
> **[5:23](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=323)** Notice that the second value isn't decimals and not all numeric like in the bag-of-words instance above.
>
> **[5:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=332)** We have learned how to download and pre process our data.
>
> **[5:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/data-preprocessing-for-topic-modeling?u=76281980&t=337)** Now we are ready for the next step in applying topic modeling to add data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (5), finally, (1)
> **Env Vars:** idf (4), uci (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1)
> **Speakers:** - now (1)

#### Topic modeling with Gensim
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=0)** - [Instructor] Now, let's see how to apply topic modeling algorithms to a pre-processed data set.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=6)** We'll apply the Latent Dirichlet Allocation, LDA, and the Latent Semantic Analysis, LSA, algorithms from the Gensim Python library to the train and use script data set that has been pre-processed, using two methods of vectorization.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=25)** To start, we import the LDA model from the gensim models module, and then create the variable called "LDA bow" to hold the LDA model (indistinct) with hyper-parameters.
>
> **[0:41](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=41)** For the bag of words corpus, the number of topic and identity to word mapping and the random states of zero to ensure consistency.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=53)** Now, we'll print the possible topic classes that were inferred by the Lda algorithm.
>
> **[1:01](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=61)** The predictions will include up to 20 topics and about 8 words as we specified.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=68)** Now, if I take a look at the output, we'll see that the model did a good job.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=74)** This topic contains words like space, NASA, and shuttle, for example.
>
> **[1:23](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=83)** Take some time to observe the data and see the other topics that follow the same pattern of grouping related words together.
>
> **[1:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=92)** Now, let's apply the Lda topic modeling algorithm to the data set that was vectorized using the Term frequency-inverse document frequency or Tf-idf.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=107)** As you can see, the topics predicted by the Lda model on the Tf-idf vectorized data doesn't seem to be as in-sync as the previous application on the bag of word vectors.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=121)** This makes a case for always varying hyper-parameters such as number of topics, the data vectorization method, and the algorithm used.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=133)** To emphasize this point, let's apply the latent semantic analysis, Lsa, or latent semantic indexing, Lsi algorithm to the same data set.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=147)** We start off by inputting the Lsi model from the Gensim models module, then we create a variable called "Lsi bow" to hold an Lsi model (indistinct) with the parameters that you can see here.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=166)** And then we'll print the topics to see if the predicted words are related at all.
>
> **[2:53](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=173)** For example, this topic grouped jpeg, file, edu, image together.
>
> **[3:03](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=183)** Great.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=184)** So now, let's apply the Lsi model to the Tf-idf vectorized data to see how it performs.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=191)** So you can see, that the topic groupings are different than the ones above.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=196)** For example, words like Armenian, Israel, Turkish were grouped together.
>
> **[3:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=205)** Sure in there could be a relationship with countries or nationalities.
>
> **[3:31](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=211)** In this case, on eyeballing, I'll say the Lda model on the bag of words data performed the best, but this will vary depending on your data set, so always explore all possibilities and variation.
>
> **[3:45](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=225)** So to review, we've applied two of the most popular algorithms used in topic modelings leveraging the Gensim python library.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-with-gensim?u=76281980&t=235)** And so our words are grouped differently within the topics depending on the text vectorization methods used to pre-process the data that the algorithm used to group the words into topic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (2), case, (1)
> **Env Vars:** lda (4), lsa (1), nasa (1)
> **Analogies:** for example (3), such as (1)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)

#### Topic modeling visualization with pyLDAvis
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=0)** - Visualization is an important tool that enables you to gain insight from your data.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=6)** For topic modeling, the AVI Python library enables us to do that easily.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=12)** We did.
>
> **[0:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=13)** We can view, interact and make decisions about our topic models.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=19)** Now, you might have guessed by the name that this library uses the Latent Dirichlet Allocation, LDA Algorithm.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=29)** Two steps will install the pyLDAVIS Python library using PIP.
>
> **[0:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=34)** Then we import the pyLDAVIS library and the Gensim models to be able to interact with the Jensen library.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=45)** We also have to enable the notebook, in order for the visualization to show within a code notebook.
>
> **[0:53](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=53)** Okay, now let's create the variable called "vis_bov", that contains the LDA model, the dataset coppers, and the dictionary that has been preprocessed using the bag-of-word vectorization on the 20 new script dataset.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=75)** Now, when we run the visible variable, we can see an interactive visualization within our code notebook.
>
> **[1:24](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=84)** The bubbles on the left represents the different topics identified in our close or interconnected data.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=94)** The bigger the bubble there is, the more words are associated with the particular topic.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=99)** We can also see how close the topics are.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=102)** For example, it is obvious that topic three is far from topic 17, and there is an intersection between topic three and topic ten, which may be a prompt to reduce the number of topics defined in the LDA model.
>
> **[2:01](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=121)** On the right side of the visualization, there is a Lambda slider on the top, and the blue and red resulted bar below the Lambda slider.
>
> **[2:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=133)** Adjust the relevance matrix by ordering the word frequency bar, the consensus estats 0.6 is the optimal value for Lambda.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=145)** The blue bars represent the word frequency in the entire document and the red bar represents the word frequency in the selected topic.
>
> **[2:36](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=156)** To learn more about our data, we'll apply the same visualization to the 20 new script dataset that was vectorized using TF-IDF.
>
> **[2:46](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=166)** The frequency in this document frequency.
>
> **[2:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=169)** Install the value in a variable called "visTFIDF".
>
> **[2:54](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=174)** The visualization parameters are the same as the ones above, but we can see a distinct difference in the distribution of the topic.
>
> **[3:04](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=184)** For example, topics two and five were very close in the back of our visualization, while they are distinct and far from each other in TFIDF visualization, even though it is the same dataset in algorithm.
>
> **[3:21](https://www.linkedin.com/learning/hands-on-natural-language-processing/topic-modeling-visualization-with-pyldavis?u=76281980&t=201)** In this model, we explored the application of the pylDAVIS library to visualize topic models with interactive graphs that helps us to gain valuable insight into our data.

> [!info]- Semantic Content
>
> **Env Vars:** lda (3), avi (1), pip (1), idf (1), tfidf (1)
> **Code Identifiers:** pyldavis (3), vis_bov (1), vistfidf (1)
> **CLI Commands:** python (2), make (1), pip (1)
> **Code Keywords:** lambda (3), let (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2)
> **Prerequisites:** install (2)
> **Versions:** 0.6 (1)

#### Model evaluation for topic modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=0)** - Model evaluation is one of the most important steps of any analytics task.
>
> **[0:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=6)** Topic coherence is the quantitative measure of the quality of topics.
>
> **[0:12](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=12)** We're going to implement the u_mass Coherence measure, which is usually set between -14 and 14.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=19)** And then, the c_v measure which is usually set between zero and one.
>
> **[0:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=25)** The higher the score, the higher the Coherence of the topic models.
>
> **[0:30](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=30)** To start, we import the Coherence model from gensin.models.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=35)** Then we run the Coherence and see the human Coherence score using the Latent Dirichlet model on the bag of word vectors of the 20 used data sets.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=48)** The output is -2.61.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=52)** Now, when we run it using the Latent Semantic Index, the score of the same data and the same vector is -4.87.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=63)** Now, we can fill out the rows with empty list and save the results into a variable called texts.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=70)** If we use the c_v Coherence parameter, the score for the LDA on bag of word vectors is 0.50.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=81)** While using the LSI score on the same data in vector is 0.45.
>
> **[1:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=88)** For this use case, the data vectors created with the bag of word model and analyzed using LDA, had better Coherence scores, for both u_mass and c_v.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/model-evaluation-for-topic-modeling?u=76281980&t=99)** Go ahead and try the same analysis with the data vectorized using TF-IDF.

> [!info]- Semantic Content
>
> **Env Vars:** lda (2), lsi (1), idf (1)
> **Versions:** 2.61 (1), 4.87 (1), 0.50 (1), 0.45 (1)
> **Code Identifiers:** u_mass (2)
> **Code Keywords:** case, (1)
> **Speakers:** - model (1)


### 3. Text Summarization

#### What is text summarization?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=0)** - [Narrator] Text summarization is a computational technique for generating brief, accurate and coherent subsets of lengthier documents.
>
> **[0:11](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=11)** When summarizing text, one or more documents are given as an input, and a summary is obtained as an output.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=19)** Text summarization typically happens in three key steps.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=23)** Topic identification, topic interpretation and summary generation.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=31)** Summarization can either be abstractive or extractive.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=36)** The abstractive summarization technique leverages natural longer processing algorithm to understand the meaning of text.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=45)** It is generally considered to be a more complex and computationally intensive of input.
>
> **[0:51](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=51)** The results in summary is comparable to how humans read and then summarize text in their our words.
>
> **[1:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=60)** Extractive summarization technique, leverages statistical and linguistic characteristics to assign importance to sentences and paragraphs.
>
> **[1:09](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=69)** The summary with this technique consists of phrases extracted from the original document.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=75)** The central principle of summarization is to reduce text size while retaining the important content.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=82)** They can be tuned to fit the need of the target audience, and their accuracy is measured by Recall-Oriented Understudy for Gisting Evaluation or ROUGE metrics.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=94)** Some of the most important libraries and frameworks for summarization are pysummarization, sumy, Pyteaser, Gensim TextRank.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=107)** All these frameworks are based on Python.
>
> **[1:50](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=110)** Now there are many practical uses of summarization and many more are emerging every day.
>
> **[1:57](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=117)** Summarization is used in the generation of news headline, book summarization, email summaries, research abstract, question answering, study notes and flashcards, social media content generation, and summary from transcripts.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=138)** As more data is generated globally the need to capture the most important part of text data increases.
>
> **[2:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-text-summarization?u=76281980&t=145)** Understanding text summarization and how to implement its methodology is an important skill in your professional toolbox.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Code Keywords:** abstract (1)
> **Env Vars:** rouge (1)
> **Speakers:** - [narrator] (1)

#### Text extraction for summarization
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=0)** - [Instructor] Let's demonstrate how the extractive text summarization method works, using the Python library Sumy.
>
> **[0:09](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=9)** We'll be using a snippet of the blog article by LinkedIn Learning as our data set.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=15)** First, we install Sumy using pip.
>
> **[0:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=20)** Then we input all the necessary modules including LexRank summarizer and LSA summarizer, which provide us with the paths in summarization algorithms.
>
> **[0:35](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=35)** We then create a variable called sample_text to save the text.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=39)** And to confirm the number of words in the sample_text is 606.
>
> **[0:46](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=46)** We then pass those string using plain text summarizer with English as a tokenizer.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=52)** Tokenization is the process of breaking down sentences into words.
>
> **[0:57](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=57)** And that is why we have to specify in what language we want that to occur.
>
> **[1:02](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=62)** Next, we instantiate the LexRank summarizer and generate the summary with a sentence count of 20.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=71)** Voila! We have a summary.
>
> **[1:14](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=74)** Note that we can increase or decrease the sentence count depending on the length of the desired summary.
>
> **[1:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=80)** Now let's try the LSA summarizer on the same data.
>
> **[1:26](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=86)** We first instantiate the algorithm, and then run it with a sentence count of 20 as well.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=93)** There you go.
>
> **[1:34](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=94)** A new summary.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=95)** Notice that some of the sentences are exactly the same as the ones in the first summary, but there are some new ones.
>
> **[1:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=103)** Great!
>
> **[1:45](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=105)** Now that we know our loading data from plain text works, let's explore loading data from a URL.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=112)** To start, you specify a URL, and use the html_parser to import the text element from the site, using the English tokenizer.
>
> **[2:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=126)** We then generate our summary using the Lex summarizer.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=130)** And then we run it again, but now using the LSA summarizer.
>
> **[2:16](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=136)** Now, if you compared the output of both summarizers, you might notice some difference in performance.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=144)** But glancing over the results, it is clear that both summaries could be useful.
>
> **[2:30](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=150)** Therefore, making a decision on which algorithm to use, is determined by wide range of factors.
>
> **[2:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-extraction-for-summarization?u=76281980&t=157)** But for sure, domain expertise is the greatest contributing factor.

> [!info]- Semantic Content
>
> **Env Vars:** lsa (3), url (2)
> **Code Keywords:** let (3), pass (1)
> **Code Identifiers:** sample_text (2), html_parser (1)
> **CLI Commands:** python (1), pip (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Text summarization with sumy
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=0)** - Now let's demonstrate the abstractive text summarization method, using pre-trained transformers from Huggingface.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=8)** Transformers are a type of deep planning models that leverages attention mechanism when learning sequences like text.
>
> **[0:16](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=16)** Will be using the same data set from the previous video, the snippet from the blog article by LinkedIn learning.
>
> **[0:24](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=24)** First, we install transformers using PIP and we input pipeline from transformers that's what we will actually use as a pipeline for all that we want to do.
>
> **[0:36](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=36)** Then we save a text into a variable called sample text and verify that the total number of characters 3,654.
>
> **[0:48](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=48)** And the number of words is 606.
>
> **[0:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=52)** With an instant sheet the summarization pipeline by simply giving it a name, as you can say from the outputs it's default to a distilled bat model.
>
> **[1:03](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=63)** Now, let's say the performance of this model on our sample text, we have a minimal full summary of the simple text in about six lines.
>
> **[1:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=75)** Now, let's try another transformer called Pegasus, this time when instant sharing, the summarization pipeline we specify the model, the tokenizer and the private framework or PT.
>
> **[1:33](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=93)** Now let's see the performance of this summary.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=97)** This model summarized the sample text in four lines and made a great attempted personalization, which is similar to how humans summarize.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=107)** Great. So now let's repeat the above steps four bats transformer, but this time using the tense of flu framework, printed the output the bat model summarized the sample text into about four lines.
>
> **[2:03](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=123)** In this video, we explored using transformers for abstractive text summarization and we saw that out of the three transformer models used for login phase. Pegasus seemed to be the most promising.
>
> **[2:18](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=138)** Notes that we used to pre-train models to optimize their performances.
>
> **[2:23](https://www.linkedin.com/learning/hands-on-natural-language-processing/text-summarization-with-sumy?u=76281980&t=143)** They can be tweaked to use your data in your specific use cases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), private (1)
> **CLI Commands:** pip (1)
> **Env Vars:** pip (1)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)
> **Prerequisites:** install (1)
> **Speakers:** - now (1)


### 4. Sentiment Analysis

#### What is sentiment analysis?
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=0)** - [Narrator] Sentiment analysis is a text analysis technique that infers opinions, sentiments, emotions, and attitude from entities, such as products, services, organization and event from data and classifies them according to polarity, which I'll talk about shortly.
>
> **[0:23](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=23)** Now, the sentiment can be explicit where the text directly expresses an opinion.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=29)** For example, this dress is beautiful.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=32)** So for obvious reason explicit sentiments are easier to analyze.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=37)** On the other hand, a sentiment can be implicit where the opinion is implied.
>
> **[0:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=43)** For example, the dress is a bargain.
>
> **[0:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=47)** The statement could be categorized as an excitement or is it just a factual statement with no sentiment?
>
> **[0:54](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=54)** Now , depending on how you use sentiment analysis, it can also be called opinion mining, subjectivity analysis, appraisal extraction, or polarity classification.
>
> **[1:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=68)** Sentiment polarity is usually represented as a range of classes, such as positive, negative, and neutral, or in numerical scale, like zero to five.
>
> **[1:22](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=82)** The machine learning used for sentiment analysis can either be supervised where there's access to input and output data representation during training or unsupervised where the only input data is accessible during training.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=99)** The central principles of sentiment analysis is that opinions are essential to most human activities and shape and they shape action.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=109)** The sentiment can be at the word, sentence, or document level.
>
> **[1:54](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=114)** Typically, you first run the sentiment detection and then you run polarity classification to identify patterns and make data-driven decisions.
>
> **[2:05](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=125)** Some of the most popular libraries and framework for sentiment analysis are N L T K Natural Language Toolkit Vader, Valence Aware Dictionary for Sentiment Reasoning, TextBlob, Hugging Face, spaCy.
>
> **[2:24](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=144)** All those frameworks are based on Python except for Stanford CoreNLP, which is based on Java.
>
> **[2:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=152)** Now, there are many practical uses of sentiment analysis and more uses are emerging everyday.
>
> **[2:40](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=160)** People make decisions based on what others feel.
>
> **[2:43](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=163)** So you can apply sentiment analysis to review how customers feel about a product.
>
> **[2:48](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=168)** For example, you can try to predict how the stock and commodities markets will trend by measuring sentiment of news articles in market research.
>
> **[2:59](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=179)** You can also use it to forecast the outcome of elections.
>
> **[3:02](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=182)** On social media platform. you can use opinion mining to determine the topic of discourse.
>
> **[3:09](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=189)** Online information is also monitored by security agencies in order to detect and identify key situation in developing event.
>
> **[3:20](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=200)** While there are limitation in language structure for sentiment detection of implicit expression, such as sarcasm.
>
> **[3:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/what-is-sentiment-analysis?u=76281980&t=208)** Sentiment analysis, as a natural language process and technique, is still a valuable tool to detect patterns, gather insights and enable data-driven decision.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (3)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** spacy (1)
> **Speakers:** - [narrator] (1)

#### Sentiment analysis with VADER
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=0)** - [Instructor] Let's practice how to do sentiment analysis with Valence Aware Dictionary and sEntiment Reasoner, VADER.
>
> **[0:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=8)** At the end of the exercise, you will be able to calculate your own sentiment score and label them according to polarity.
>
> **[0:17](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=17)** We'll be using the sentiment labeled sentences dataset from the open source UCI Machine Learning Repository and the Python library, VADER.
>
> **[0:28](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=28)** First, download and unzip the dataset using the wget and unzip commands.
>
> **[0:37](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=37)** Then combine the subsets of the dataset into a single data frame called df using pandas.
>
> **[0:45](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=45)** Now, let's view information about the combined data frame using df.info and df itself.
>
> **[0:56](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=56)** The output shows a total of 2,784 rows or reviews and their pre-labeled sentiment, where zero means negative and one means positive.
>
> **[1:11](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=71)** Now, we can go ahead and generate the VADER sentiment score based on the review column.
>
> **[1:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=79)** Looking at the data frame again, we can see we now have a new column named vader_sentiment_score, and it has a range of numbers assigned to it.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=90)** With VADER, sentiment scores greater than 0.05 are positive and those with less than -0.05 are negative.
>
> **[1:42](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=102)** Scores between -0.05 and 0.05 are neutral.
>
> **[1:49](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=109)** So for simplicity, we'll encode the VADER sentiments scores into three distinct numerical values: zero for negative, one for positive, and two for neutral.
>
> **[2:04](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=124)** Now we can assign text polarity as sentiment labels, positive, neutral or negative, based on the numerical encoding.
>
> **[2:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-vader?u=76281980&t=135)** In this exercise, we downloaded our data, used VADER, a rule-based sentiment analysis tool, to calculate the sentiment scores, and labeled them according to polarity.

> [!info]- Semantic Content
>
> **Env Vars:** vader (6), uci (1)
> **CLI Commands:** unzip (2), python (1), wget (1)
> **Versions:** 0.05 (4)
> **Code Keywords:** let (2)
> **Code Identifiers:** sentiment (1), vader_sentiment_score (1)
> **Speakers:** - [instructor] (1)

#### Sentiment analysis with transformers
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=0)** - [Narrator] Now we will explore how to do sentiment analysis with transformers.
>
> **[0:07](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=7)** The transformer is a type of neuro network architecture that captures context and sequences such as text, using a self attention mechanism.
>
> **[0:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=19)** In this video, we will be using the sentiment labeled "sentences data sets".
>
> **[0:25](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=25)** You can find how to download and pre-process the data here.
>
> **[0:31](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=31)** First, we install transformers from the organ first Python library using PP-install.
>
> **[0:39](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=39)** Then, then we import pipeline from transformers.
>
> **[0:44](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=44)** The pipeline is where we specify which pre-treat transformer model we want to use.
>
> **[0:50](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=50)** We then create a pipeline instance, and save it into a variable called "distill bed classifier".
>
> **[0:58](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=58)** We're going to use sentiment analysis as the default transformer model, and set truncation to "true".
>
> **[1:06](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=66)** So that sentences longer than the specified token length for the model are truncated.
>
> **[1:13](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=73)** Let's practice, by applying the defined classifier on the second review in our data.
>
> **[1:21](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=81)** The output shows put the sentiment label in score.
>
> **[1:27](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=87)** The review here says good case, excellent value, and the model predicts it as a positive sentiment, and a score of 0.99.
>
> **[1:41](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=101)** We can now go ahead and apply this to the reviews column in our data frame.
>
> **[1:47](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=107)** This may take a few minutes to run, so be patient.
>
> **[1:52](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=112)** So now, you can see the data frame has a new column called "distill bed sentiment".
>
> **[2:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=120)** To compare performance, we repeat the above for Roberta and Beth transformer models.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=128)** Just looking over the data, we see that both the distill Beth and the Roberta results were efficient as they aligned with the original sentiment label.
>
> **[2:19](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=139)** However, the results from Beth were not as precise and had lower sentiment scores.
>
> **[2:27](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=147)** Now, in terms of speed, distilled Beth was the fastest, followed by Bert and then Roberta model the slowest of the three.
>
> **[2:38](https://www.linkedin.com/learning/hands-on-natural-language-processing/sentiment-analysis-with-transformers?u=76281980&t=158)** So, if I had to make a choice about which transformer model to use, I'll go with the distilled Beth model for similar sentiment analysis task.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), python (1), make (1)
> **Code Keywords:** self (1), let (1), case, (1)
> **Prerequisites:** install (2)
> **Versions:** 0.99 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-natural-language-processing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-natural-language-processing/next-steps?u=76281980&t=0)** - [Instructor] We've been on the learning journey.
>
> **[0:02](https://www.linkedin.com/learning/hands-on-natural-language-processing/next-steps?u=76281980&t=2)** We've explored natural language processing tasks such as sentiment analysis, named entity recognition, topic modeling and summarization together.
>
> **[0:15](https://www.linkedin.com/learning/hands-on-natural-language-processing/next-steps?u=76281980&t=15)** Now, I will encourage you to study the principles and frameworks further, attempt to replicate what you've learned, and apply to your own data, and practice until you've achieved mastery.
>
> **[0:29](https://www.linkedin.com/learning/hands-on-natural-language-processing/next-steps?u=76281980&t=29)** I hope this learning experience has been interesting.
>
> **[0:32](https://www.linkedin.com/learning/hands-on-natural-language-processing/next-steps?u=76281980&t=32)** Feel free to connect with me via LinkedIn or ask you questions about the course below in the Q and A section.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your Skills in Natural Language Processing]]
← [[Advanced Nlp With Python For Machine Learning]] | **2 of 6** | [[Building NLP Pipelines with spaCy]] →

## Appears In

- [[Advance Your Skills in Natural Language Processing]]

## Related Courses

_Courses sharing skills:_

- [[Building NLP Pipelines with spaCy]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Advanced Nlp With Python For Machine Learning]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Complete Guide to NLP with R]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Applied AI- Building NLP Apps with Hugging Face Transformers]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[TensorFlow- Working with NLP]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
