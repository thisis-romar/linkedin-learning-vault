---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: building-nlp-pipelines-with-spacy
url: "https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy"
duration_minutes: 60
duration: 1h
level: Advanced
updated: 4/25/2023
learners: 24490
skills:
  - Artificial Intelligence (AI)
  - Natural Language Processing (NLP)
  - spaCy
exercise_files: true
github: "https://github.com/LinkedInLearning/building-nlp-pipelines-with-spacy-3094275"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGSkPQj_ARTiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682109018848?e=2147483647&amp;v=beta&amp;t=lM2LLL8LtXPGQkV_R3QLy3GIbwTXrRviITV5K423u_w"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in Natural Language Processing]]'
prev_courses:
  - '[[Hands-On Natural Language Processing]]'
next_courses:
  - '[[Deep Learning with TensorFlow- Insights and Innovations]]'
path_nav: '[{"path":"Advance Your Skills in Natural Language Processing","position":3,"total":6,"prev":"Hands-On Natural Language Processing","next":"Deep Learning with TensorFlow- Insights and Innovations"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
  - skill/spacy
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20NLP%20Pipelines%20with%20spaCy.md)

![Building NLP Pipelines with spaCy](https://media.licdn.com/dms/image/v2/D560DAQGSkPQj_ARTiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682109018848?e=2147483647&amp;v=beta&amp;t=lM2LLL8LtXPGQkV_R3QLy3GIbwTXrRviITV5K423u_w)

# Building NLP Pipelines with spaCy

> Projects Predict linguistic annotations using a model. Use PhraseMatcher and the add property feature to implement a matching operation and add patterns. Build a training loop from scratch. Label a dataset to prepare it for the training process, including the annotations for various entities. Looking to learn more about the key features and functionalities built into spaCy? Look no further. This c

> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy) | 1h | Advanced | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Text Processing with spaCy]]** (6 videos)
- **[[#2. Data Analysis Using spaCy]]** (5 videos)
- **[[#3. Processing Pipelines with spaCy]]** (7 videos)
- **[[#4. Training an Artificial Neural Network]]** (7 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Why use spaCy?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=0)** - [Prateek Sawhney] Machine learning professionals struggle with keeping up to date on new packages and libraries.
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=5)** One library you need to know is SpaCy.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=8)** It's rapidly being adopted for its ease of use and ability to fasten the process with voice-based devices like Alexa, Google Assistant, and many more.
>
> **[0:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=17)** In this course, you will learn about natural language processing pipelines in Python, and how to apply it to real world, complex problems using SpaCy's advanced nlp library.
>
> **[0:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=26)** By the end of this course, we'll build a custom training loop and train multiple levels.
>
> **[0:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=31)** Hi, I'm Prateek Sawhney.
>
> **[0:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=32)** I work on AI projects and open source machine learning frameworks.
>
> **[0:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=36)** SpaCy is by far the fastest library right now in natural language processing.
>
> **[0:40](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=40)** Let me show you what SpaCy can achieve for you.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Speakers:** - [prateek (1)

#### Prerequisites of the course
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=0)** - [Instructor] To get the most out of this course, it's good to have an understanding of the basic idea behind natural language processing.
>
> **[0:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=7)** NLP refers to the branch of artificial intelligence that gives computers the ability to understand and learn natural language just as a human does.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=16)** For example, it's the process of how we educate the computer to understand the actual meaning of human language; further, not just the human language, it also gives the ability to the machine to understand raw text of data.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=29)** Apart from this, intermediate to advanced knowledge of Python and virtual environments, like Anaconda, is necessary for this course.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=37)** To brush up your skills in Python and virtual environments, you can also refer to the Python documentation.
>
> **[0:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=43)** spaCy supports 66-plus languages and it's open source; this means you can also contribute to it after completing this course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** this, (1)
> **Code Identifiers:** spacy (1)
> **Env Vars:** nlp (1)
> **Tools:** anaconda (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### How to install spaCy
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=0)** - To install spaCy, I would recommend installing it inside a virtual environment that is, a conda environment.
>
> **[0:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=7)** By conda, it means an environment taken from the Anaconda distribution.
>
> **[0:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=11)** For downloading Anaconda, head over to Anaconda's website and download the setup for your particular system architecture.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=18)** I'll download the setup for MacOS.
>
> **[0:22](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=22)** Open the setup which you downloaded and then follow the onscreen instructions to fully install Anaconda.
>
> **[0:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=30)** We can click on 'Continue' and then accept the README and the license page and then the installation type would be default and then we can wait for the installation to complete.
>
> **[0:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=46)** And that's it.
>
> **[0:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=47)** From this page, we can clearly identify that Anaconda is installed correctly.
>
> **[0:52](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=52)** Now we can head over to [spaCy.io](https://spaCy.io) and then follow the onscreen instructions to select the appropriate type for our system type and usage.
>
> **[1:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=61)** I'll select macOS with M1 chip and conda as the package manager.
>
> **[1:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=66)** Hardware will be CPU for default.
>
> **[1:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=68)** I would recommend selecting both of the configurations, that is virtual environment and train models.
>
> **[1:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=75)** Language will be English for now and for pipeline, we can select efficiency as the training pipeline parameter.
>
> **[1:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=83)** Now we can run all of these commands one by one into a terminal window to fully install spaCy.
>
> **[1:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=90)** On top of it, we can check if Anaconda is installed correctly by typing conda.
>
> **[1:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=97)** The output confirms that Anaconda is installed correctly.
>
> **[1:40](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=100)** Also, we can install an instance of Jupiter notebook by typing 'pip install notebook'.
>
> **[1:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=107)** All the dependencies will be installed automatically.
>
> **[1:49](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=109)** That's it.
>
> **[1:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=111)** With this, we have installed everything that is needed for this course.
>
> **[1:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=114)** Let's get started.

> [!info]- Semantic Content
>
> **Tools:** anaconda (7), terminal (1)
> **Prerequisites:** install (5), setup (3)
> **Code Keywords:** continue (1), default. (1), this, (1), let (1)
> **Code Identifiers:** spacy (3), macos (1)
> **UI Navigation:** open the (1), click on (1), select the (1)
> **Env Vars:** readme (1), cpu (1)
> **Exercise Files:** download the (2)
> **CLI Commands:** pip (1)


### 1. Text Processing with spaCy

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to spaCy
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=0)** - [Instructor] Let's start by focusing on the most basic and important concepts of the spaCy library.
>
> **[0:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=6)** SpaCy supports a variety of languages, but in this course we'll focus on the language English as we have downloaded the configuration related to it.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=15)** One can import the spaCy object from the English language class of the spaCy library.
>
> **[0:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=20)** To explore more languages and related attributes we can also explore the German or Spanish version.
>
> **[0:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=26)** For now we can use the spaCy dot language dot English package and instantiate the English language class with any names.
>
> **[0:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=33)** For example, nlp just as we create an object in Python.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=37)** Now, this nlp object inherits all the properties of spaCy and is capable of performing different operations surrounding spaCy.
>
> **[0:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=46)** An nlp object takes as input the text that has to be processed and gives the output as the slices of the text or its sub parts.
>
> **[0:53](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=53)** Now, let's try to process a normal text of data like how to learn Python, with this NLP object.
>
> **[1:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=61)** We can iterate over the object dog with the help of a for-loop and text attribute.
>
> **[1:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=66)** This means if we want to know the text or value corresponding to each slice we can use the text property.
>
> **[1:12](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=72)** It will output each separate part of the input text as how to learn Python, and a question mark.
>
> **[1:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=80)** This slice object is known as the Doc object in spaCy.
>
> **[1:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=83)** It contains the slices of the original text and these slices are known as tokens.
>
> **[1:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=89)** Now, let's look at the Span object.
>
> **[1:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=91)** A group of tokens is called a Span so this means Span represents a part of a Doc object.
>
> **[1:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=97)** Now, let's see how to create a Span object.
>
> **[1:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=102)** A Span object can easily be created by indexing our object Doc.
>
> **[1:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=106)** For instance, indexing our current example from index zero to four would yield the tokens starting from index zero to index three.
>
> **[1:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=115)** We can print the results using the text attribute of the Span object, just like the tokens.
>
> **[2:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=121)** Also, there are various attributes or properties of tokens which we discuss just now.
>
> **[2:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=126)** We know about the text attribute which returns the text or value associated with the token.
>
> **[2:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=131)** Let's see them one by one.
>
> **[2:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=133)** Apart from this, there is an is alpha attribute, which tells us whether the token is an alpha numeric value or not.
>
> **[2:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=141)** Apart from this, another attribute is called the is punctuation.
>
> **[2:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=145)** This tells us whether the token is a punctuation corrector like dot, question mark, and an exclamation mark, et cetera.
>
> **[2:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=152)** The last one is like number.
>
> **[2:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=155)** From this we get to know about whether the token is a number or not.
>
> **[2:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=159)** As the names of all these attributes suggest printing these attributes returns, Boolean values, status, true or false.
>
> **[2:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=168)** These are very helpful in data processing pipelines and reduce a large amount of effort whilst cleaning and normalizing data.
>
> **[2:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=175)** These are called lexical attributes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), yield (1)
> **Code Identifiers:** spacy (7)
> **Definitions:** known as (2), is called (2), is a  (2), is an  (1)
> **CLI Commands:** python (3)
> **Analogies:** for example (1), for instance (1), just like (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### spaCy's statistical models
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=0)** - [Instructor] We have already learned about some Lexical attributes and how to process the textual data via Spans and tokens.
>
> **[0:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=7)** But what about some contextual data?
>
> **[0:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=9)** For example, data from a conversation like part of speech, text or named entities.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=15)** How do you know whether any token represents a noun or a verb?
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=19)** Now, we'll learn about spaCy statistical models which help us to perform these tasks at a very fast pace by using linguistic contextual data, it means that the meaning of some of the words are dependent on the other.
>
> **[0:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=32)** How would we know whether some of the tokens or slices are verbs or pronouns?
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=37)** In the same way whether a Span, that is a group of tokens, represents a person's name or not?
>
> **[0:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=44)** SpaCy's statistical models come to the rescue here because they are trained on large amounts of contextual data taken from the internet and various functions could be used in no time to predict the actual meaning of the word.
>
> **[0:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=57)** One such statistical English model is the EN core web SM package, which is pre-trained and can be downloaded along with its weight from the internet.
>
> **[1:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=65)** There are various other pre-trained models and packages which could be used for different tasks.
>
> **[1:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=71)** By pre-trained it means that the machine learning model is trained on a different machine and could be used wherever necessary along with its weight.
>
> **[1:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=80)** Now, let's see the small English statistical model in action.
>
> **[1:24](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=84)** The load method in spaCy can be used to load the EN core web SM model into a model object.
>
> **[1:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=90)** We will try to predict some contextual data or part of speech tags with the help of the model object.
>
> **[1:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=96)** For example, let's field in the sentence, Ram went to India on Monday, into our model object.
>
> **[1:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=103)** Also, we know about the token dot text attribute which gives us the texture value associated with the slice or token out of the Doc object.
>
> **[1:52](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=112)** Now let's jump to what each token or slice from the input sentence means according to the statistical model.
>
> **[1:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=119)** The attribute which help us here to data mine the predicted part of speech for each token or slice is the token dot pos property.
>
> **[2:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=127)** As we can see in the output, the statistical model work brilliantly and figured out what each token represents.
>
> **[2:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=133)** Ram means proper noun, went corresponds to verb, et cetera.
>
> **[2:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=137)** We can see the meaning of each word using the spaCy dot explain method and refer to the spaCy documentation.
>
> **[2:24](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=144)** Now, let's take the example of named entities.
>
> **[2:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=147)** These are real world objects that have been assigned a tag or a label, such as various organizations or world leaders.
>
> **[2:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=154)** A statistical model is able to predict that too.
>
> **[2:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=157)** Let's look at a quick example.
>
> **[2:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=159)** This is possible through the entity property, which can be applied to the Doc object, that is entities in this case.
>
> **[2:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=167)** From the output, we can observe that the label attribute worked really well and predicted Samsung is an organization and two more labels corresponding to Asian and 1 billion.
>
> **[2:58](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=178)** In order to know what these two mean, we can use the explain method.
>
> **[3:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=182)** So as we saw, statistical models can be a great help to derive the meaning of technical or complex textual data.
>
> **[3:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=190)** Using pre-trained models, which are handy to incorporate and use in our code.
>
> **[3:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=195)** These techniques save a lot of time and effort.
>
> **[3:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=197)** Also, the knowledge of statistical models could be increased, that is their accuracy could be increased by updating them with more examples.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case. (1)
> **Code Identifiers:** spacy (4)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### spaCy's containers
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=0)** - [Instructor] To get a more clear understanding of the spaCy basic concepts, let's deep dive into the containers concept of spaCy.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=8)** We looked at containers previously, and now, I want to clearly describe the fundamentals related to them.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=15)** There are several containers in spaCy, like Doc, Span, Token, Example, Language, SpanGroup, et cetera.
>
> **[0:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=23)** The most important among them are the Doc, Token, and Span.
>
> **[0:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=27)** Let's try to compare this with the help of a basic example.
>
> **[0:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=30)** Consider a tree and its branches.
>
> **[0:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=33)** At the bottom lies the root of the tree which in this case corresponds to the Doc object.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=38)** The Doc object, as I described previously, is instantiated from the root, that is, the object inherited from the particular language class of spaCy.
>
> **[0:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=48)** The Doc object behaves as a root and contains various Tokens, just as a branches on the tree.
>
> **[0:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=54)** Try to relate it with the sentence.
>
> **[0:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=56)** The Doc object takes as input the sentence and gives as output a group of Tokens.
>
> **[1:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=62)** Each Token corresponds to a word, that is, noun, verb, proposition, or a punctuation character.
>
> **[1:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=69)** If we group some branches of a tree, it becomes a bush.
>
> **[1:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=73)** Same is the case with Tokens.
>
> **[1:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=74)** A group of Tokens is called a Span.
>
> **[1:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=77)** Span can contain two to various Tokens, but one common thing about Spans is they can cross or cover multiple Tokens.
>
> **[1:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=85)** Another container is Example.
>
> **[1:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=87)** It contains two Doc objects.
>
> **[1:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=90)** Now, as you have understood the basic idea behind containers, it would be very easy for you to refer to the spaCy documentation and learn about it in more detail.
>
> **[1:41](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=101)** That's it.
>
> **[1:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=102)** You must have acquired a good understanding of how the containers concept works in spaCy.
>
> **[1:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=108)** This will be very helpful later in the course to understand and solve complex scenarios involving multi-level text dependency.
>
> **[1:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=116)** Let's jump to the next video and see how rule-based matching works in spaCy.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (7)
> **Code Keywords:** let (3)
> **Cross-References:** later in (1), next video (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Introduction to matching based on rules
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=0)** - [Instructor] We already know about using regular expressions on raw text.
>
> **[0:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=4)** Now let's focus on spaCy's matcher.
>
> **[0:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=7)** With the inbuilt matcher, it becomes very easy to find words, phrases or strings of text.
>
> **[0:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=13)** It not only works with strings but also with the Doc object.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=16)** We can also match tokens and other lexical attributes too.
>
> **[0:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=20)** The whole concept works on rules, so we can even write rules that use the model's prediction.
>
> **[0:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=25)** For example, finding a word, address, only if it's a verb and not a noun.
>
> **[0:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=31)** Now, in order to implement the rule-based matching, there is something known as a match pattern.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=37)** A list of dictionaries is called a match pattern and within each dictionary, there is one token.
>
> **[0:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=42)** The keys of the dictionary are the names of the token attributes mapped to the expected values as you can see.
>
> **[0:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=48)** Now this example represents matching two tokens with the text, phone and M.
>
> **[0:53](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=53)** This is used when we want to exactly match the token text.
>
> **[0:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=57)** In the same way, we can also match lexical attributes.
>
> **[1:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=61)** Like here in this example, we are matching two token text whose lowercase equals phone and M.
>
> **[1:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=67)** Another example would be to match two values of text like banana and drum from a sentence.
>
> **[1:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=73)** Also, as we saw before, there are various attributes predicted by the model so we can even write matches with model attributes.
>
> **[1:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=81)** In this matcher, we are matching a token with the lemma, buy and a noun.
>
> **[1:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=86)** So this would match phrases like buying groceries or bought sweets because lemma is the base form.
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=94)** Let's import the matcher from the spacy.matcher and also load the en_core_web_sm model into the model object.
>
> **[1:41](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=101)** An important point to note is to initialize the matcher with a shared vocabulary.
>
> **[1:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=105)** I'll let you know about the vocabulary later.
>
> **[1:49](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=109)** As you saw previously, let's create a pattern consisting of the properties we want to match, and ingest them into the matcher using the matcher.add argument.
>
> **[1:58](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=118)** The matcher.add takes in three arguments as input.
>
> **[2:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=121)** The first argument is a unique ID to identify which pattern was matched.
>
> **[2:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=126)** The second argument is the optional callback.
>
> **[2:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=129)** We have set it to none because we don't need one here.
>
> **[2:12](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=132)** The third argument is the pattern itself.
>
> **[2:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=135)** Let's analyze some text using the model to create the Doc object and then feed that Doc object into the matcher.
>
> **[2:22](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=142)** The output of the matcher returns a list of tuples.
>
> **[2:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=146)** Each tuple contains three parts, the match_id, the starting index and the ending index of the matched_span.
>
> **[2:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=152)** The match_id corresponds to the hash value of the pattern, name.
>
> **[2:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=157)** Using this iterating over a matcher and creating a span object is easy, just like this.
>
> **[2:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=163)** Using the starting and the ending index.
>
> **[2:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=166)** So as we see, matching based on tokens is a very powerful technique and can be used to extract meaningful information from a large set of textual data.
>
> **[2:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=177)** Information extraction becomes easy and fast using rule-based matching.
>
> **[3:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=181)** So let's try what we have learned 'till now in the upcoming challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), match, (1), this. (1)
> **Code Identifiers:** match_id (2), spacy (1), en_core_web_sm (1), matched_span (1)
> **Definitions:** is a  (2), known as (1), is called (1)
> **Cross-References:** as we saw (1), as you saw (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Predicting linguistic annotations
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=5)** - [Narrator] We already learned about the space's pre-trained machine learning models and also the variety of languages it supports.
>
> **[0:12](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=12)** Now, let's use the EN code Web SM model and see its predictions in action.
>
> **[0:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=17)** You can use it on your own text too.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=19)** I have included some text in your exercise files and sample code.
>
> **[0:24](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=24)** Use this text and process it with the help of the small English model to create a doc object.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=29)** For all the tokens associated with the doc object, print the tokens' text, dependency label, and part of speech text.
>
> **[0:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=36)** Apart from this, another sub-task would be to iterate over all the entities of the doc object and print the entities' text and label attribute.
>
> **[0:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=45)** Use the sample text for both of the problems.
>
> **[0:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=48)** Also, please note if you can't recollect what a tag or a label actually means, you can use the spacey dot explain method and proceed.
>
> **[0:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=55)** Now, I leave it to you before I explain the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this, (1)
> **Exercise Files:** exercise files (1), sample code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright electronic music) (1)

#### Solution: Predicting linguistic annotations
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=6)** - [Instructor] Here's the solution to the previous challenge.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=8)** We have to process the given text, using the en_core_web_sm model.
>
> **[0:12](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=12)** For this, let's import the model using the spacy.load method and create a nlp object.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=18)** Passing the text into this nlp object would give us the doc object.
>
> **[0:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=23)** Now simply we can iterate over the doc object, as we have learned in the previous videos, and for each of the tokens, printing the three attributes.
>
> **[0:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=31)** Token.text would give us the value of the text, and token.pos would give us the part of speech tags associated with the respective token, and the dependency label could be fetched using the token.dependency property.
>
> **[0:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=44)** Running the for loop across these three statements and printing the three attributes, would give us the desired output.
>
> **[0:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=50)** Now, coming to the second sub-problem In order to fetch the entities corresponding to the doc object, we can use the doc.ents property and in the same way iterate over all the entities using a for loop.
>
> **[1:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=62)** We can print the entity's text using the entity.text property and the label using the label attribute.
>
> **[1:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=69)** So that's it.
>
> **[1:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=70)** This concludes the challenge which revolved around predicting linguistic annotations.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Code Identifiers:** en_core_web_sm (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Data Analysis Using spaCy

> [[#Table of Contents|↑ Back to Table of Contents]]

#### spaCy's data structures
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=0)** - [Instructor] Now let's focus on the things SpaCy does in the backend for us.
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=5)** One such thing is shared vocabulary, which we used earlier for initializing the match up.
>
> **[0:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=10)** Shared vocabulary, as the name suggests, contains a large vocabulary of textual data which is shared by multiple chapters or documents.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=18)** This data is not stored in the basic text format.
>
> **[0:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=21)** SpaCy encodes or generates all the vocabulary strings in hash format IDs.
>
> **[0:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=26)** For all the textual data, SpaCy stores the hash values corresponding to only one ID of each word once, and ignores the further occurrence of each word.
>
> **[0:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=35)** In this way, all the original string data is stored only once, and thus saves a lot of space.
>
> **[0:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=42)** All of this data is stored in the StringStore, which is located in the nlp dot vocab dot strings package.
>
> **[0:49](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=49)** In the vocabulary, we can find the hashes of any word via the StringStore.
>
> **[0:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=54)** For example, we can get the hash of the word car, which is present in the vocabulary and vice versa.
>
> **[0:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=59)** This means if we know the hash value, we can also get the corresponding word.
>
> **[1:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=64)** For example, we can make use of nlp dot vocabulary package and get the hash representation of a word like knife.
>
> **[1:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=71)** And at the same time, input that hash value in the nlp dot vocabulary package, and get the original string back again.
>
> **[1:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=78)** So, this defines that shared vocabulary stores data in hash format.
>
> **[1:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=83)** ID corresponds to original strings, and values corresponds to the hash values of that particular string.
>
> **[1:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=89)** This is a pure example of how shared vocabulary works in SpaCy.
>
> **[1:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=93)** But one point to notice that we can't make any hash pair entries on our own in the vocabulary.
>
> **[1:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=99)** If a word is not present in the vocabulary there is not any way we can get its string by the nlp dot vocabulary dot strings package.
>
> **[1:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=107)** This is one of the reasons why we need to pass the shared vocabulary.
>
> **[1:52](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=112)** Now, let's focus on lexemes.
>
> **[1:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=114)** In simple words, these are context-independent entries in the vocabulary.
>
> **[1:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=119)** This means they contain specific information about a particular word in the vocabulary, like its associated text, hash value, or whether it contains alphanumeric value or not.
>
> **[2:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=129)** Lexemes don't correspond to part of speech text and entity labels.
>
> **[2:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=134)** These things depend on context.
>
> **[2:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=136)** Look at this example.
>
> **[2:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=137)** This is done in a particular sentence, like "Ram loves physics."
>
> **[2:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=141)** The doc contains the words in context.
>
> **[2:24](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=144)** Some of the tokens could be part of speech tags, or dependency labels.
>
> **[2:28](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=148)** Each token refers to a lexeme, which knows the words hash id.
>
> **[2:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=153)** And, as we know, to get the string representation of a hash, SpaCy looks up that hash in the StringStore.
>
> **[2:41](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=161)** For a particular word, lexeme can be fetched from nlp dot vocabulary package.
>
> **[2:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=165)** In this particular example, lexeme dot text prints out the corresponding textual value.
>
> **[2:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=171)** Lexeme dot orth gives out the hash value.
>
> **[2:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=174)** And lexeme dot is_alpha tells if the word corresponds to an alphanumeric value or not.
>
> **[2:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=179)** Now comes the most important part, which will summarize what we have learned 'till now on vocabulary, hashes, and lexemes.
>
> **[3:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=186)** Let's practice and learn about the most important concept of SpaCy, that is the doc object.
>
> **[3:12](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=192)** First, we can import the nlp object from the English language class of the SpaCy library.
>
> **[3:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=197)** For importing the dock class, we can use it from spacy dot tokens.
>
> **[3:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=201)** In order to create a doc object, from the doc class, we have to supply three arguments to the doc class.
>
> **[3:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=207)** Which includes vocabulary, words, and spaces.
>
> **[3:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=211)** By words, it means the actual words, which we want to process and create the dock object from.
>
> **[3:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=217)** And spaces means whether a particular word is followed by a space or not.
>
> **[3:41](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=221)** Every space is represented by a Boolean value, and every token consists of that information, from first to last.
>
> **[3:49](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=229)** So, we'll input the sample words into the second argument and sample spaces into the third argument.
>
> **[3:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=236)** Now, let's refresh what we have learned about the Span object.
>
> **[4:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=240)** The Span object is a sub part of the doc object, consisting of one or more tokens.
>
> **[4:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=245)** In order to create a Span object, one has to supply three arguments.
>
> **[4:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=248)** That is the doc itself, from which we want to create the span, the starting, and the ending index.
>
> **[4:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=254)** The Span object is created from the starting index, 'till the ending minus one index.
>
> **[4:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=259)** If we want to create the Span object manually, just like the doc object, we can follow the same process and in the end, use the doc object and create the span if required.
>
> **[4:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=269)** To create a span with an entity label, we can paste in the fourth argument, with label equal to the label argument that we want to pass.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), class, (2), class. (1), from. (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), refers to (1)
> **Analogies:** for example (2), just like (1)
> **Code Identifiers:** is_alpha (1)
> **Speakers:** - [instructor] (1)

#### Similarity and word vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=0)** - [Instructor] In SpaCy, we can compare two objects, such as Spans, Tokens, or even Doc objects to extract the semantic similarity between one another.
>
> **[0:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=10)** This technique is useful if we want to compare the similarity between two sentences or even two documents.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=16)** Similarity depends on the application context.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=19)** Let's dig into these techniques in natural language processing applications including chat bots, voice assistants, et cetera.
>
> **[0:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=26)** Each document, Span, or a single Token object comes with a similarity method or function, which takes in another object, to which we want to compare its similarity to.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=37)** The result of prediction is a flawed value between zero and one, which tells us how similar the two objects are to each other.
>
> **[0:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=44)** This is often called the similarity score.
>
> **[0:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=47)** But, in order to use similarity function we should be using the medium and large English SpaCy models, like the en_core_web_large, which means the English large SpaCy model, and the en_core_web_md, which denotes the medium SpaCy model of the English language class.
>
> **[1:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=64)** Suppose we want to predict two documents.
>
> **[1:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=67)** First, we'll import the en_core_web_md, or the medium English SpaCy model, which contains word vectors too.
>
> **[1:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=74)** Then, we'll create two Doc objects and use the similarity method of the first Doc object to predict the similarity with the second Doc object.
>
> **[1:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=83)** A higher value means the two Doc objects, or the two sentences, I like phones and I like laptops, are more similar to each other.
>
> **[1:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=92)** The same approach could be used if we want to compare the Tokens with the help of the similarity method.
>
> **[1:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=97)** To justify if the tokens, phones, and laptops are similar to each other, we can use the previous example and expand the tokens corresponding to the word phones, and laptops from the two Doc objects.
>
> **[1:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=110)** A higher value of similarity score justifies the same.
>
> **[1:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=114)** Another way of using the similarity method is the fact that we can use it on two different type of objects too.
>
> **[2:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=120)** One can use it to compare a Doc object with a Token also.
>
> **[2:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=124)** Look at this example.
>
> **[2:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=126)** In this, the words phones and cars are very less similar to each other.
>
> **[2:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=130)** That's why we get a less similarity score.
>
> **[2:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=134)** In the same way, we can also use a similarity method to compare a Doc with a Span.
>
> **[2:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=139)** The root of a similarity is derived from word vectors, which are generated using algorithms like for two vectors and in large quantities.
>
> **[2:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=147)** These can also be added to SpaCy's statistical models.
>
> **[2:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=150)** By default, the similarly returned by SpaCy is the cosine similarity between two entities.
>
> **[2:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=157)** Let's look at word vectors that work behind the similarity method, to give us the desired results.
>
> **[2:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=163)** Let's import the SpaCy English model, that is preloaded with word vectors, and instantiate it into the nlp object.
>
> **[2:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=170)** Now, create a Doc object, on top of an example sentence, to derive the Tokens.
>
> **[2:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=175)** To print the vectors of a particular token, we can use the token dot vector attribute.
>
> **[3:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=180)** The result is a 300 dimensional vector of the word cars.
>
> **[3:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=185)** This concept of similarity and word vectors form the basis for many day-to-day machine learning applications, like recommendation systems, et cetera.
>
> **[3:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=194)** For example, if you play a particular video on some social media website, similar kinds of videos start to appear from the next time in your feed.
>
> **[3:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=203)** This is just based on the context and its similarity.
>
> **[3:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=206)** Now, it's your turn to check your understanding of data structures, and apply SpaCy techniques to solve complex problems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), class. (1), this, (1), default, (1)
> **Analogies:** similar to (3), such as (1), for example (1)
> **Code Identifiers:** en_core_web_md (2), en_core_web_large (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Integrating spaCy's models and rules
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=0)** - [Instructor] We have looked at statistical models and rule-based approaches in spaCy, now, let's focus on how to efficiently use both of them together.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=8)** We will start by preparing a more dominant method for NLP-related tasks or an advanced method to find complex sequences of data from a particular problem statement.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=19)** To import the Matcher, we can use it from spacy.matcher.
>
> **[0:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=23)** The second step is to initialize the matcher with the shared vocabulary that is nlp.vocab.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=29)** To perform the matching operation, we have to feed in the patterns, which are nothing but dictionaries consisting of a token and its attributes, one example would be something like this.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=38)** We have to feed in the pattern into the matcher where the matcher not add function.
>
> **[0:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=43)** Also, one can define operators, which can specify how many times the token should be matched.
>
> **[0:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=48)** Operators are also inefficient and yet advanced way to deal with rule-based matching.
>
> **[0:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=54)** If we call the matcher on the Doc object, we will get a list of matches.
>
> **[0:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=59)** First of all, we'll see how to add statistical predictions for a particular example, running a four loop over the results or matches given by the matcher, we can create a span object from the starting and the ending index of the matched attributes, this span object contains the entire raw document and other properties such as linguistic features.
>
> **[1:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=81)** Now, we can print other properties of the span, such as the text of its root token and other details such as previous token and its part of speech tag, apart from this, the root tag token and its properties could also be displayed.
>
> **[1:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=96)** Another technique to find sequences of words or patterns in a particular data set is phrase matching, let's import it first and at the same time learn more about it so that it would be easy.
>
> **[1:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=108)** Phrase matching is extremely fast, it can be imported in the same way we import the matcher datas from the spacy.matcher.
>
> **[1:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=116)** First of all, initializing it with a shared vocabulary, now, creating a doc object for a sample sentence and assigning it to pattern, adding that pattern, which is made up of doc object using the matcher.add attribute.
>
> **[2:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=131)** As you must have noticed, one major difference between a normal matcher and phrase matcher is that with the phrase matching it's possible to input even doc objects such as patterns instead of a list of dictionaries.
>
> **[2:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=143)** Phrase matching is capable of doing keyword search on the document, but instead of only picking up strings, it gives us direct access to the relevant tokens in context.
>
> **[2:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=154)** After this, we can just iterate over the matcher in the same way as we did earlier and extract the starting and the ending index of the matched span.
>
> **[2:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=164)** So at the end, a span object has been created for us by the algorithm for the match tokens to analyze it in context.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), this. (1), function (1)
> **Analogies:** such as (4)
> **CLI Commands:** find (2)
> **Code Identifiers:** spacy (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Phrase matching
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=5)** - [Instructor] In this challenge we'll see what matches can do in real life examples.
>
> **[0:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=10)** For this challenge, I have included some incomplete code for you in the exercise files.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=15)** The task is to implement a phrase matching technique over a list of countries.
>
> **[0:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=20)** First of all, you have to import all the necessary packages to implement the phrase matcher and initialize it with a shared vocabulary.
>
> **[0:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=27)** Another sub-task would be to create a Doc object and use it as a pattern.
>
> **[0:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=32)** After this, you need to add that pattern to the phrase matcher, and then call that matcher on the Doc object.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=38)** For instance, you can also create your own NLP object in the Doc object and see how the code performs on different examples of sample text.
>
> **[0:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=47)** At the end, I trade over the result of the matches and print the results set.
>
> **[0:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=51)** Feel free to make changes in the code, and try to make it as compact as you can.
>
> **[0:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=56)** Phrase matching is a very fast operation and is generally used in place of normal matching techniques.
>
> **[1:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=62)** You can try this code snippet on different example text and large coppers too.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** this, (1)
> **Env Vars:** nlp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Phrase matching
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=5)** - [Instructor] Let me walk through my solution.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=8)** To import the phrase matcher, we can import it from the SpaCy dot matcher, and initialize it with the shared vocabulary using nlp dot vocab.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=16)** I'm assuming you already know how to create a nlp and a dock object, and initialize it.
>
> **[0:22](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=22)** Since we are using phrase matcher, we can write a pattern which will consume the dock object and we can write it like this.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=29)** Now, this pattern can be added to the matcher using the matcher dot add property.
>
> **[0:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=34)** The add attribute expects three arguments like this.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=38)** And then, we can fetch the matches or the results set of matches, by using our matcher, or the dock object, which we created above.
>
> **[0:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=45)** Lastly, we can iterate over the result set, by using a for loop.
>
> **[0:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=50)** Within the for loop, we should print the corresponding, matching dock object and part by part using the starting and the ending index of the dock object.
>
> **[0:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=59)** This gives us what we are expecting and prints the matched result.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### 3. Processing Pipelines with spaCy

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Processing pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=0)** - [Instructor] It's time to talk about processing pipelines.
>
> **[0:03](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=3)** Let's see what happens in the background when one calls the NLP object on some textual data.
>
> **[0:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=9)** And see about various subprocesses that execute one by one when the NLP object works on some text of data.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=16)** These subprocesses are called pipeline components.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=19)** We already know that when the NLP object is applied on a string for example, it returns a dock object.
>
> **[0:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=25)** What does the dock object stand for, and how it can be further processed and used?
>
> **[0:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=30)** This whole process of applying the NLP object and getting the dock object as output can be determined as a pipeline.
>
> **[0:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=36)** This pipeline contains several steps in between.
>
> **[0:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=39)** The first step is the tokenizer.
>
> **[0:41](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=41)** The tokenizer converts the strings of text into dock objects.
>
> **[0:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=45)** This is what we saw in the previous videos.
>
> **[0:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=47)** After the tokenizer finishes converting each part of the string into a dock object, various operations are applied over it.
>
> **[0:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=54)** These series of operations are called pipeline components.
>
> **[0:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=57)** As you can see, tagger, parser, and the named-entity recognizer work one by one on the dock object processed by the tokenizer.
>
> **[1:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=65)** These are called built-in pipeline components.
>
> **[1:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=68)** First comes the tagger.
>
> **[1:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=69)** Token.tag attribute is created by the tagger component.
>
> **[1:12](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=72)** Further, the dependency parser is responsible for the token.dependency and the head properties.
>
> **[1:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=79)** Also, detecting sentences and non-phrases is also done by the dependency parser.
>
> **[1:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=85)** Named entity recognizer is responsible for adding the detected entities to the Doc.ents property.
>
> **[1:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=91)** Whereas the text classifier creates category labels and adds this information to the Doc.cats attribute.
>
> **[1:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=98)** Now, let's look at some pipeline attributes in detail in order to see what are the components included in the NLP object which we are currently using.
>
> **[1:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=107)** We can use the nlp.pipe_names property.
>
> **[1:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=110)** This tells us various pipeline components in the current NLP object.
>
> **[1:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=115)** Also, there is another attribute called as nlp.pipelines, and gives us a list of components name and their function.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (6)
> **Code Keywords:** let (2), for, (1), function (1)
> **Code Identifiers:** pipe_names (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Pipeline's custom components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=0)** - [Instructor] Custom pipeline components are self-selected components that you can add to the pipeline of NLP object.
>
> **[0:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=6)** When we want the pipeline to execute one by one we can define our own pipeline components other than that we talked about previously.
>
> **[0:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=14)** This means when the NLP object is called on a string of text or data, it would run the pipeline components defined by us.
>
> **[0:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=21)** Till now we talked about the default pipeline components that come under the NLP object of spaCy.
>
> **[0:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=27)** Now, let's talk about more modifying them or adding new ones.
>
> **[0:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=31)** Remember, when an NLP object is applied on a text of data, for example, Ran goes to school daily, at first, the tokenizer does its work and then a series of pipeline components are applied one by one on the doc object.
>
> **[0:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=45)** The pipeline is executed automatically and all components run on their own.
>
> **[0:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=50)** The custom components are important when we need to add our own metadata to documents and tokens.
>
> **[0:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=55)** The simple meaning of a component is like anything such as an operation or a method which is applied on a doc object and prepares the output to be taken up for the next pipeline component as an input.
>
> **[1:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=67)** So the modified and tokenized doc object is processed one after the other through a series of pipeline components.
>
> **[1:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=74)** Also, with custom components the original built-in properties could be updated like doc.entity or named entity spans.
>
> **[1:22](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=82)** In order to define a custom component, we can define the function that takes as input the doc object, does some processing on it in the middle, and returns the same.
>
> **[1:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=92)** But to add this component which is made by us, we can use the nlp.add_pipe method, which takes as input the custom_component function name defined by us.
>
> **[1:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=102)** Now, if there are more than two pipeline components already existing in the NLP object pipeline, there is an option for us to decide the position where our self-made component would be added in the pipeline.
>
> **[1:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=114)** This thing has a major significance in real world scenarios in which pipeline components are responsible for analyzing large chunks of data.
>
> **[2:03](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=123)** The position of each component in the pipeline will decide the accuracy of our final results.
>
> **[2:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=128)** Apart from the first argument in the nlp.add_pipe method, which is the custom_component function name, we can pass a second argument to tell spaCy the position in the pipeline where we want to add that component.
>
> **[2:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=140)** There are several options for us given by spaCy.
>
> **[2:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=143)** The first one is setting last is equal to True.
>
> **[2:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=147)** Through this spaCy would set this custom component in the last of the desired pipeline.
>
> **[2:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=152)** Setting first is equal to two would set the component in the first place ahead from every component.
>
> **[2:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=158)** Also, if there is a tagger and the named entity recognizer already added in the pipeline, we can set after is equal to named entity recognizer.
>
> **[2:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=168)** This would add a new component after the named entity recognizer.
>
> **[2:52](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=172)** In the other way around, setting before is equal to tagger will place the new component before the tagger.
>
> **[2:58](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=178)** For these position scenarios, for example, the tagger and the named entity recognizer should be there in the pipeline, otherwise, spaCy would raise an error as expected.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (5), add_pipe (2), custom_component (2)
> **Code Keywords:** function (3), self (2), let (1), pass (1), raise (1)
> **Env Vars:** nlp (5)
> **Cross-References:** we talked about (2), in the last (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### Extension attributes: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=0)** - Now, we'll dig a step deeper and see how to add custom properties to the Doc, Token, and Span objects in order to store custom data into them.
>
> **[0:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=11)** We already know that token.text is a built-in attribute by spaCy which gives us the text associated with the Token.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=18)** If we want to add any other attribute or metadata defined by us, for example, to the Doc object, such as Doc.title, here is when custom attributes come into picture.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=29)** Let's see how to add these custom-made properties on the Doc, Token, and Span objects.
>
> **[0:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=35)** In order to add custom properties, first of all, we need to add the Doc, Token, and Span from the global classes and import them from the spacy.tokens.
>
> **[0:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=44)** Further, we can add new custom attributes by using the set_extension method for each of the Doc, Token, and Span objects.
>
> **[0:53](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=53)** set_extension takes in as argument the name of the custom property to be added and the keyword argument.
>
> **[0:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=59)** Keyword arguments tell us how the value should be computed.
>
> **[1:03](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=63)** In this example, we are using the default value and it can be overwritten.
>
> **[1:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=68)** Also, after adding the custom extensions to the Doc, Token, and Span objects, we need to access them too.
>
> **[1:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=75)** For accessing them, we can use the ._ property for each of the Doc, Token, and Span objects and access the newly-defined properties like this.
>
> **[1:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=85)** Now, let's look at the type of extension attributes.
>
> **[1:28](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=88)** There are three types of extension attributes.
>
> **[1:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=91)** Attribute extensions, property extensions, and method extensions.
>
> **[1:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=95)** In the attribute extensions, a default value is set, for example on the token, that can be easily overwritten.
>
> **[1:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=102)** Here's an example.
>
> **[1:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=104)** Let's import the Token from the spacy.tokens.
>
> **[1:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=107)** Now, in order to add the custom attribute to the Token we'll use a set_extension method and apply it over the Token like this.
>
> **[1:55](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=115)** is_color is the name of the custom attributes and the keyword argument default is equal to False.
>
> **[2:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=121)** This means its value can be easily overwritten.
>
> **[2:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=125)** Now we can process the sentence, "Ram loves to bowl with the red ball."
>
> **[2:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=129)** With the help of the NLP object and get the corresponding Doc object.
>
> **[2:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=133)** doc[6] token refers to the red color.
>
> **[2:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=137)** On individual tokens, it's value can be changed by overriding it.
>
> **[2:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=141)** Now, we can use the ._ property on the token corresponding to the doc[6] and access is_color custom attribute and set its value to True.
>
> **[2:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=152)** In this case, True for the token red.
>
> **[2:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=156)** In this way, in attribute extensions, we can override the custom attribute values.
>
> **[2:41](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=161)** Now, we'll take a look at the other two types of extension attributes, that is, property extensions and method extensions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), case, (1), override (1)
> **Code Identifiers:** set_extension (3), is_color (2), spacy (1)
> **Analogies:** for example (2), such as (1), picture (1)
> **Definitions:** is a  (1), refers to (1)
> **Env Vars:** nlp (1)
> **Speakers:** - now (1)

#### Extension attributes: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=0)** - [Instructor] We have already added custom extension attributes and their types.
>
> **[0:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=4)** Now, let's learn about property and method extensions.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=8)** First, let's take a look at property extensions.
>
> **[0:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=11)** Property extensions work like getters and setters in Python.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=15)** A getter function is defined and also an optional setter is set up at the same time.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=19)** When we want to retrieve the attribute or property the getter function is called.
>
> **[0:24](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=24)** Let's see this in action.
>
> **[0:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=26)** We'll import the token from the spaCy dot tokens and define a getter function.
>
> **[0:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=31)** For example, get is color which takes in as input only one argument, the object in this case, such as the token.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=38)** Let's define a list of colors like this and then the function will return whether the token text is in the list of colors or not.
>
> **[0:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=45)** Before we learned about the set extension method which takes as the first argument the name of the custom extension that is, is color and at the same time, we can also pass the second argument as the getter, which corresponds to the name of the getter function, which we defined above.
>
> **[1:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=62)** So, when we register the extension we can provide the function via the getter key word argument.
>
> **[1:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=68)** Now, processing the same example as in the last lesson video, that is processing the text, Ram loves to bowl with the red ball, with the nlp object and extracting the corresponding Doc object.
>
> **[1:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=80)** This time we have the is color custom extension created using the property extension, that is using the getter function.
>
> **[1:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=86)** Now, if we fetch the token corresponding to the Doc six and access its custom attribute, is color, using the dot underscore and for the getter key word argument we can pass the Doc six dot text.
>
> **[1:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=99)** That is text corresponding to the token at position six of the Doc object.
>
> **[1:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=105)** We get the following output.
>
> **[1:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=106)** The token red returns true for its color custom attribute.
>
> **[1:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=111)** Now, we can take a look at method extensions.
>
> **[1:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=114)** Let's go through an example.
>
> **[1:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=116)** In method extensions the extension attribute is a callable function, which means we can pass one or more arguments to it and then the attribute could be computed easily.
>
> **[2:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=126)** Let's import the Doc from the spaCy dot tokens and define a function with arguments, that is first argument as the Doc and the second argument as the token text.
>
> **[2:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=136)** In this example, the function or method checks whether the Doc contains a token with a given text or not.
>
> **[2:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=143)** Please note that in method extensions like this the first argument is always the Doc and it is passed automatically when the method is called.
>
> **[2:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=151)** All the subsequent arguments will be taken as arguments on the method extensions.
>
> **[2:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=156)** In this case token text is the second argument that will be taken as the argument for the method extension itself.
>
> **[2:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=163)** Now, we can set the method extension on the Doc and declare the method as has token.
>
> **[2:49](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=169)** Then we can process the string, Ram loves to ball with the red ball, with the nlp object.
>
> **[2:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=174)** Now as we can see, it has token method returns true for the word red and false for the word ball.
>
> **[3:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=182)** That's it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (6), pass (3), case, (1)
> **Definitions:** is called (2), is a  (1)
> **Code Identifiers:** spacy (2)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### Performance and scaling
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=0)** - [Instructor] When thinking about the performance of NLP pipelines generally we need a lot of computing power.
>
> **[0:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=6)** For example GPUs to generate a lot of doc objects and process a large volume of text in real world scenarios.
>
> **[0:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=13)** If we apply the techniques we have learned till now it would definitely process the task at a very fast pace but the speed can be increased.
>
> **[0:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=21)** Let's look at techniques to improve processing speeds, processing packets of data or in streams could be a way through which we can achieve this.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=29)** In Spacey, we have the nlp.pipe method which processes data in streams and increases the speed of computing at a very significant rate.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=37)** We know about batch processing in machine learning.
>
> **[0:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=39)** For those who don't know batch processing is a technique through which the machine learning model takes a chunk of data at a time processes it makes the prediction and performs this step again and again on subsequent chunks of data.
>
> **[0:53](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=53)** The nlp.pipe function does the same thing.
>
> **[0:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=56)** It processes large volumes of text test streams and yields the doc objects.
>
> **[1:01](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=61)** Instead of applying the traditional LMP on each string of text the pipe method creates packages of data and gives out the doc objects.
>
> **[1:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=69)** We can wrap the list method around it so that we get a list of doc through the nlp.pipe method like this.
>
> **[1:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=76)** As you know when we process a text or data with the help of an NLP object a series of pipeline components are applied one after the other following the tokenizer.
>
> **[1:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=85)** But if our end goal is to only extract the doc object, there is another method in Spacey called 'Make Doc'.
>
> **[1:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=92)** The 'Make Doc' turns text into a doc object directly but processing the same text into the doc object via the NLP object takes a longer time because other pipeline components are also present in the latter one.
>
> **[1:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=105)** In Spacey there is another technique to disable some of the pipeline components if we want to fasten them the NLP pipeline.
>
> **[1:52](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=112)** This is only done intentionally if we don't want some of the pipeline components to not run.
>
> **[1:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=117)** NLP.disable_pipes is the method through which we can disable the pipeline components we want.
>
> **[2:03](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=123)** Suppose we have the entity the tokenizer tagger and the parser in our NLP pipeline and we want only to use the tagger, then we can disable the entity the tokenizer and the parser with the use of a with block like this and then process the text with the help of the NLP object.
>
> **[2:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=141)** Outside the with block in the execution of the program all the disabled components become active again to be used further in the Python program.
>
> **[2:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=149)** So we can define some methods with the use of a Disabled Pipes method of NLP object where we only want to run the certain components of the NLP pipeline.
>
> **[2:40](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=160)** By using this short yet simple techniques we can fasten up the execution of the program multiple times.
>
> **[2:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=166)** This isn't observable in simple programs but when we have to deal with the large corpus of data, this comes to the rescue.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (9), lmp (1)
> **Code Keywords:** this. (2), let (1), function (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** disable_pipes (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Processing streams and selective processing
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=0)** - In this challenge, you would be responsible for processing the stream of text using only the techniques learned in the previous video.
>
> **[0:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=13)** I have included a stream of text that we will be processing.
>
> **[0:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=17)** There are two streams of text that will require your knowledge and work divided into two task.
>
> **[0:23](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=23)** For task one, you need to import the spaCy small English model and load it into the NLP object.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=29)** You'll be converting the text one into only tokens or tokenizing the text without using the complete NLP pipeline.
>
> **[0:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=36)** For task two, you will use the NLP pipeline and performed tokenization on text two.
>
> **[0:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=43)** But NLP pipeline should not have built-in tagger and parser.
>
> **[0:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=46)** In the end, you should print out the entities from the final Doc object.
>
> **[0:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=51)** That's it, all the best.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (4)
> **Code Keywords:** require (1)
> **Code Identifiers:** spacy (1)
> **Cross-References:** previous video (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Processing streams and selective processing
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=0)** - [Instructor] Let me show you my solution for task one.
>
> **[0:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=8)** First of all, let's import the en_core_web_sm model and instantiate it.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=15)** Then as we have to convert the text_1 into only tokens, we can use the nlp.make_doc method.
>
> **[0:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=21)** We can consume the text_1 from the nlp.make_doc method and thus we'll get the corresponding doc object.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=29)** Now we can iterate over the tokens in the doc object and print the text corresponding to each one of them.
>
> **[0:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=35)** In this way, we only use the tokenization part of the NLP pipeline and hence saved a lot of time by selective processing.
>
> **[0:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=43)** For task two, we have to process the stream of text but not by using the tagger and parser in the NLP pipeline.
>
> **[0:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=51)** For this, same as the previous task, we can import the small English model and declare the NLP object.
>
> **[0:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=57)** Now we can make a method using nlp.disable_pipes which takes in as two arguments, that is tagger and parser, which we have to exclude from the NLP pipeline.
>
> **[1:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=69)** And within that method, we can process the text_2, using the NLP object.
>
> **[1:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=74)** Finally, printing the required entities of the doc object.
>
> **[1:17](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=77)** That's it.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (5)
> **Code Keywords:** let (2), this, (1), finally, (1)
> **Code Identifiers:** make_doc (2), en_core_web_sm (1), disable_pipes (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Training an Artificial Neural Network

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Training and updating models
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=0)** - [Instructor] Training is the most useful and thoughtful process in machine learning.
>
> **[0:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=4)** It involves a lot of detail and all the characteristics of the model depends on the end use case too.
>
> **[0:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=10)** Training a machine learning model requires a lot of computing power depending upon the data and the architecture of the model.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=18)** We have learned previously about spaCy's pre-trained models.
>
> **[0:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=21)** Pre-trained models work in many scenarios brilliantly but they couldn't be used in all of the end use case scenarios.
>
> **[0:28](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=28)** There are numerous pre-trained models available online and open source too, but they make predictions based on the examples they were trained on.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=37)** So, to fulfill our specific domain-related problems, there is a need to build or train custom machine learning models.
>
> **[0:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=44)** That's where spaCy comes to the rescue.
>
> **[0:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=46)** spaCy supports creating training pipelines for new models as well as updating the existing pre-trained models.
>
> **[0:53](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=53)** Let's take a look at how to train a fresh, new spaCy model.
>
> **[0:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=57)** First of all, we will randomly initialize the weights.
>
> **[1:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=60)** There is a function in spaCy called nlp.begin_training which initializes the model by random weights.
>
> **[1:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=67)** In order to minimize the loss, which is the core phenomena of training a machine learning model, we can use the nlp.update method which takes on its own, a batch of examples with the current weights and then checks the output or predictions with the current weights, or compare the predictions with the true labels of the batch of examples.
>
> **[1:27](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=87)** Then, the algorithm analyzes how to change the weights in order to compare a better output or prediction next time, that is, on the next batch of examples.
>
> **[1:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=96)** After this, a small correction is applied on the current weights so that the next time, the comparison between predicted labels and true labels is even less.
>
> **[1:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=106)** Finally, the same step is repeated.
>
> **[1:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=108)** This iterative approach to predict the most accurate weights by taking a batch of examples again and again and then updating the weights after each step with a correction is the most basic yet dominant technique in machine learning for all subcategories.
>
> **[2:03](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=123)** Now, here is an illustration depicting the process.
>
> **[2:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=127)** Training data is the bunch of examples which will be feed into the machine learning model which we want to train.
>
> **[2:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=134)** Small batches or chunks of data would be taken one by one from this dataset.
>
> **[2:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=139)** The input text is the X, that is, the entity the model should predict the result for.
>
> **[2:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=146)** Label, highlighted in yellow, is the output or predicted value.
>
> **[2:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=150)** This is Y.
>
> **[2:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=151)** So, the model takes as input the X, that is, the training data or batch of examples, and predicts Y, that is, the value.
>
> **[2:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=159)** The gradient in between is the measure of how one should change the model weights in order to reduce the error.
>
> **[2:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=166)** The error here is the difference between the actual labels and the predicted labels.
>
> **[2:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=171)** It could be positive or negative depending upon the situation in the current iteration.
>
> **[2:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=176)** We can define upfront the number of iterations, that is, the number of times this cycle will repeat.
>
> **[3:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=182)** Also, it's usually called the number of steps.
>
> **[3:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=185)** After the iteration of N number of steps, the model weights, along with its configuration, would be saved in the respected folder, which we can use further.
>
> **[3:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=195)** Now, let's see how to train an entity recognizer in spaCy.
>
> **[3:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=199)** The entity recognizer takes as input the document or text and predicts phrases and their corresponding labels.
>
> **[3:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=205)** So, this means the document or training data, in this case, should contain the entities and their corresponding labels.
>
> **[3:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=213)** As we know, entities can't overlap so each token would be a part of only one entity because the entity recognizer predicts entities in context.
>
> **[3:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=223)** As a result, they also need to be trained upon entities and their surrounding context so that the loss decreases rapidly.
>
> **[3:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=231)** That is, the goal is to teach the model to recognize new entities in the similar context given the fact they were not available in the training phrase data, as I explained before.
>
> **[4:02](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=242)** For this process, the quality of training data is very important.
>
> **[4:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=246)** It should contain a large number of examples of what we want the model to predict.
>
> **[4:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=251)** The data could also include tokens and their part-of-speech tags.
>
> **[4:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=255)** One important and fundamental point to note here is that whenever we want to create a new categorized model, we may need a large amount of data, say one lakh examples.
>
> **[4:26](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=266)** But if we want to update an existing model to predict a new category, we may need 1/10 of the previous one, that is 10,000.
>
> **[4:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=275)** That's it.
>
> **[4:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=276)** In the next lesson, let's dig deeper to know more about the training loop.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (1), this, (1), finally, (1), for. (1)
> **Code Identifiers:** spacy (6), begin_training (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Training loop
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=0)** - As the name suggests, the training loop contains all the steps that we have discussed till now.
>
> **[0:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=6)** The steps were predict for an input example, compare the predicted output with two values, calculate the gradient, and in the end, update the weights.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=16)** By loop, we mean the number of times these steps would be performed.
>
> **[0:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=20)** Typically, for training a complex machine learning model it would take 10,000 to one lakh steps to achieve the best weights for a good machine learning model depending upon the use case too.
>
> **[0:31](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=31)** Also to prevent the model from getting stuck at some point during training.
>
> **[0:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=36)** Another approach that is shuffling the training set before each iteration in the loop is also done.
>
> **[0:42](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=42)** The third step would be to divide the training set into batches of small data.
>
> **[0:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=46)** Last but not the least, we have to update the model by correcting or updating its weight for each batch.
>
> **[0:53](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=53)** In the end, we can save the model to use in the application.
>
> **[0:57](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=57)** These are the steps of the training loop.
>
> **[1:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=60)** Suppose we have a large training data as a list containing texts and their corresponding entity labels.
>
> **[1:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=67)** Now we'll make a training loop, for example, for 10 iterations and start with shuffling the retaining data as we have learned just now.
>
> **[1:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=75)** Then we'll create mini batches or this is called batch processing in simple language.
>
> **[1:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=81)** Mini batches are created using the spacy.util.minibatch package available in spacy.util.
>
> **[1:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=89)** This is used to divide the training data into batches.
>
> **[1:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=92)** Using this from each batch, we'll get the text and the corresponding annotations like this.
>
> **[1:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=98)** Following this, we can use the nlp.update function to update the model, which will take as input the text and their corresponding annotations.
>
> **[1:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=107)** In the end, after our training process is done and this code runs for 10 iterations, we have to save the model for this nlp.to_disk method takes as input the path of location where we want to save the model and thus saves the model to the storage path.
>
> **[2:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=126)** Now let's see how to update an existing pre-train model with more data so that we can add a new category to the model to predict successfully with good results.
>
> **[2:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=136)** For this, we can import a blank English model using the spacy.blank function.
>
> **[2:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=141)** By a blank model, it means that the model will not have any pipeline components and will only contain language data and tokenization rules.
>
> **[2:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=149)** After this, we can create an entity recognizer and then add it to the NLP object using the add_pipe method.
>
> **[2:36](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=156)** For example, we want the model to predict one new class that is electronic gadgets so we can add a new label to identity recognizer like this.
>
> **[2:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=166)** As in this case, we don't have any weights assigned to the machine learning model.
>
> **[2:51](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=171)** We can call the nlp.begin training function which will initialize the model with random weights as we have learned in the previous lesson.
>
> **[2:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=179)** Then we can start the training loop and shuffle the data set too in each iteration so that our model can learn efficiently.
>
> **[3:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=187)** After this, we'll perform batch processing with the batch size of two and extract the text and their corresponding annotations.
>
> **[3:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=194)** Finally, we update the NLP model with the text and their corresponding annotations and continue the training loop.
>
> **[3:21](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=201)** We'll practice this in the upcoming challenges too.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (4), function (3), this. (2), let (1), case, (1)
> **Code Identifiers:** to_disk (1), add_pipe (1)
> **Env Vars:** nlp (2)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - as (1)

#### Challenge: Building a training loop
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=5)** - [Instructor] In this challenge, you'll practice how to initially build a training loop.
>
> **[0:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=10)** I have already imported spaCy and random.
>
> **[0:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=13)** I have also completed half of the code, and also defined the training data for this task.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=18)** I also imported the blank English model and created an entity recognizer and added it to the pipeline of the NLP object.
>
> **[0:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=25)** I also added the label gadget to the named entity recognizer.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=29)** Your task is to build a training loop that will iterate for 10 times using NLP third begin training.
>
> **[0:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=35)** The first step in that training pipeline should be shuffling of the data.
>
> **[0:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=39)** Further, you should use batch processing, and use a batch size of two.
>
> **[0:43](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=43)** Within that batch processing, extract the text and their corresponding annotations from the respective entities.
>
> **[0:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=50)** Be sure to update the model within each iteration so as to save the model state and print the respective iteration loss.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (2)
> **Code Identifiers:** spacy (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Building a training loop
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=5)** - [Instructor] First, we will create a blank English model using spacy.blank.
>
> **[0:10](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=10)** Then we can create a new entity recognizer and add it to the training pipeline.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=15)** Also, adding the label, GADGET, to the named entity recognizer.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=19)** For the task, we can start the training pipeline or process using the nlp.begin_training().
>
> **[0:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=25)** Then iterate for 10 iterations using a for loop and using the random.shuffle function to shuffle the training data like this.
>
> **[0:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=33)** Remember to declare the empty losses that we would be printing in the end of each iteration.
>
> **[0:39](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=39)** After this, we have to do the batch processing, and for that, we can use a spacy.util.minibatch function.
>
> **[0:46](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=46)** This function takes as input two arguments.
>
> **[0:48](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=48)** First, the training data and the second argument would be the size of batches which will be two in this case.
>
> **[0:56](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=56)** Then we can easily fetch the text and their corresponding annotations, and then update the model in the end using the nlp.update method, which will take three arguments.
>
> **[1:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=67)** That is text, annotations and losses.
>
> **[1:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=71)** Finally, we can print the loss for the respective iteration.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this. (1), this, (1), case. (1), finally, (1)
> **Code Identifiers:** begin_training (1)
> **Env Vars:** gadget (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Training loop best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=0)** - [Instructor] By now, you might have already tweaked or modified the code to see what would happen if you change the training data or increased the number of iterations.
>
> **[0:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=9)** Does the loss increase or decrease?
>
> **[0:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=11)** Is the model now predicting correctly?
>
> **[0:14](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=14)** Training is a very complex process and depends upon a lot of factors like quality of dataset, size of dataset, is data set necessary for the type of category we want the model to predict?
>
> **[0:25](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=25)** There are plenty of other factors which influence the accuracy of the ML model but there are some best practices we should keep in mind while training or updating the model.
>
> **[0:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=35)** One common scenario is overfitting.
>
> **[0:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=37)** Overfitting means that the model can overfit on new data, thus forgetting the earlier data which it already knows.
>
> **[0:44](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=44)** This is also known as catastrophic forgetting problem.
>
> **[0:47](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=47)** Another common problem is sometimes, despite several techniques and tweaks, the model is not learning what we want it to learn.
>
> **[0:54](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=54)** Generally, spaCy models make predictions based on the local context.
>
> **[0:59](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=59)** For example, the surrounding words are extremely important while predicting name identities.
>
> **[1:04](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=64)** Predicting contextual characteristics is difficult for the spaCy model if there is less contextual data in the training set.
>
> **[1:11](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=71)** Setting up the label scheme to be more generic rather than being too specific is the right technique to overcome this.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), means that (1), known as (1)
> **Code Identifiers:** spacy (2)
> **CLI Commands:** make (1)
> **Code Keywords:** this. (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Training multiple labels
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980&t=0)** - [Instructor] In this challenge you'll be training multiple labels by using the incomplete training dataset that is provided to make it ready for training new entity types.
>
> **[0:15](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980&t=15)** You are responsible for labeling this dataset on your own.
>
> **[0:18](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980&t=18)** Also, you should include annotations for the person entities as well as the website entities so that the model is able to figure out and learn both of these from the training dataset.
>
> **[0:30](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980&t=30)** Complete the following incomplete dataset and make it ready for training.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Training multiple labels
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=5)** - [Instructor] Let's go through the solution.
>
> **[0:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=7)** To complete the following training data set and include the annotations for the person and websites or entities, we can create a list that includes the configuration of the entities that we want.
>
> **[0:19](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=19)** Entities can be described as a group of couples like this.
>
> **[0:22](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=22)** We have to label the entity type by specifying the starting and the ending, plus one index of the specific training data.
>
> **[0:29](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=29)** The starting index starts from zero.
>
> **[0:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=32)** Like this, we can have both entity types specified, so that our model learns both of them at the same time.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=38)** I hope you enjoy training multiple data labels.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1), this, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Wrap-up
> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=0)** - [Prateek Sawhney] Congratulations, thank you for following along and completing this course.
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=5)** I encourage you to keep learning new techniques and strategies to deal with natural language processing tasks using advanced libraries.
>
> **[0:13](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=13)** The machine learning space is vast and rapidly growing.
>
> **[0:16](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=16)** Keeping up to date is the best way you can follow along.
>
> **[0:20](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=20)** There are new and advanced libraries such as spaCy you can learn.
>
> **[0:24](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=24)** I have included a list of resources for you in the handout.
>
> **[0:28](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=28)** To keep practicing, I recommend you extract the Google search results data, and process that using the spaCy package.
>
> **[0:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=35)** I have included a step-by-step guide in the handout.
>
> **[0:38](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=38)** If you want to follow me for more AI content, you can find me on LinkedIn and subscribe to my AI newsletter.
>
> **[0:45](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=45)** If you have any questions or comments, feel free to leave them in the Q&A.
>
> **[0:50](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=50)** I would love to hear about your takeaways and successes.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [prateek (1)


## Instructor

- [[Prateek Sawhney]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-nlp-pipelines-with-spacy-3094275)

## Skills Covered

- Artificial Intelligence (AI)
- Natural Language Processing (NLP)
- spaCy

## Path Context

### In [[Advance Your Skills in Natural Language Processing]]
← [[Hands-On Natural Language Processing]] | **3 of 6** | [[Deep Learning with TensorFlow- Insights and Innovations]] →

## Appears In

- [[Advance Your Skills in Natural Language Processing]]

## Related Courses

_Courses sharing skills:_

- [[Hands-On Natural Language Processing]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Advanced Nlp With Python For Machine Learning]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Complete Guide to NLP with R]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Applied AI- Building NLP Apps with Hugging Face Transformers]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[TensorFlow- Working with NLP]] — Artificial Intelligence (AI), Natural Language Processing (NLP)

---

[↑ Back to top](#)