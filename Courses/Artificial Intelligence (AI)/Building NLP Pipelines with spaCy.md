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
  - '[Advance Your Skills in Natural Language Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Natural%20Language%20Processing.md)'
prev_courses:
  - '[Hands-On Natural Language Processing](Hands-On%20Natural%20Language%20Processing.md)'
next_courses:
  - '[Deep Learning with TensorFlow- Insights and Innovations](Deep%20Learning%20with%20TensorFlow-%20Insights%20and%20Innovations.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20NLP%20Pipelines%20with%20spaCy.md)

![Building NLP Pipelines with spaCy](https://media.licdn.com/dms/image/v2/D560DAQGSkPQj_ARTiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682109018848?e=2147483647&amp;v=beta&amp;t=lM2LLL8LtXPGQkV_R3QLy3GIbwTXrRviITV5K423u_w)

# Building NLP Pipelines with spaCy

> Projects Predict linguistic annotations using a model. Use PhraseMatcher and the add property feature to implement a matching operation and add patterns. Build a training loop from scratch. Label a dataset to prepare it for the training process, including the annotations for various entities. Looking to learn more about the key features and functionalities built into spaCy? Look no further. This c

> [LinkedIn Learning](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy) | 1h | Advanced | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why use spaCy?](#why-use-spacy)
  - [Prerequisites of the course](#prerequisites-of-the-course)
  - [How to install spaCy](#how-to-install-spacy)
- [**1. Text Processing with spaCy**](#1-text-processing-with-spacy) (6 videos)
  - [Introduction to spaCy](#introduction-to-spacy)
  - [spaCy's statistical models](#spacys-statistical-models)
  - [spaCy's containers](#spacys-containers)
  - [Introduction to matching based on rules](#introduction-to-matching-based-on-rules)
  - [Challenge: Predicting linguistic annotations](#challenge-predicting-linguistic-annotations)
  - [Solution: Predicting linguistic annotations](#solution-predicting-linguistic-annotations)
- [**2. Data Analysis Using spaCy**](#2-data-analysis-using-spacy) (5 videos)
  - [spaCy's data structures](#spacys-data-structures)
  - [Similarity and word vectors](#similarity-and-word-vectors)
  - [Integrating spaCy's models and rules](#integrating-spacys-models-and-rules)
  - [Challenge: Phrase matching](#challenge-phrase-matching)
  - [Solution: Phrase matching](#solution-phrase-matching)
- [**3. Processing Pipelines with spaCy**](#3-processing-pipelines-with-spacy) (7 videos)
  - [Processing pipelines](#processing-pipelines)
  - [Pipeline's custom components](#pipelines-custom-components)
  - [Extension attributes: Part 1](#extension-attributes-part-1)
  - [Extension attributes: Part 2](#extension-attributes-part-2)
  - [Performance and scaling](#performance-and-scaling)
  - [Challenge: Processing streams and selective processing](#challenge-processing-streams-and-selective-processing)
  - [Solution: Processing streams and selective processing](#solution-processing-streams-and-selective-processing)
- [**4. Training an Artificial Neural Network**](#4-training-an-artificial-neural-network) (7 videos)
  - [Training and updating models](#training-and-updating-models)
  - [Training loop](#training-loop)
  - [Challenge: Building a training loop](#challenge-building-a-training-loop)
  - [Solution: Building a training loop](#solution-building-a-training-loop)
  - [Training loop best practices](#training-loop-best-practices)
  - [Challenge: Training multiple labels](#challenge-training-multiple-labels)
  - [Solution: Training multiple labels](#solution-training-multiple-labels)
- [**Conclusion**](#conclusion) (1 videos)
  - [Wrap-up](#wrap-up)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use spaCy?](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/why-use-spacy?u=76281980&t=0)** - [Prateek Sawhney] Machine learning professionals struggle with keeping up to date on new packages and libraries. One library you need to know is [spaCy](../../Skills/Software%20Development/spaCy.md). It's rapidly being adopted for its ease of use and ability to fasten the process with voice-based devices like Alexa, [Google](../../Glossary/Service/Google.md) Assistant, and many more. In this course, you will learn about [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) pipelines in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and how to apply it to real world, complex problems using SpaCy's advanced nlp library. By the end of this course, we'll build a custom training loop and train multiple levels. Hi, I'm Prateek Sawhney. I work on AI projects and open source machine learning frameworks. SpaCy is by far the fastest library right now in natural language processing. Let me show you what SpaCy can achieve for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (4), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (2), [Google](../../Glossary/Service/Google.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [prateek (1)

#### [Prerequisites of the course](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/prerequisites-of-the-course?u=76281980&t=0)** - [Instructor] To get the most out of this course, it's good to have an understanding of the basic idea behind [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md). NLP refers to the branch of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) that gives computers the ability to understand and learn natural language just as a human does. For example, it's the process of how we educate the computer to understand the actual meaning of human language; further, not just the human language, it also gives the ability to the machine to understand raw text of data. Apart from this, intermediate to advanced knowledge of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and virtual environments, like Anaconda, is necessary for this course. To brush up your skills in Python and virtual environments, you can also refer to the Python documentation. [spaCy](../../Skills/Software%20Development/spaCy.md) supports 66-plus languages and it's open source; this means you can also contribute to it after completing this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [spaCy](../../Skills/Software%20Development/spaCy.md) (1)
> **CLI Commands:** python (3)
> **Code Identifiers:** spacy (1)
> **Env Vars:** nlp (1)
> **Tools:** anaconda (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [How to install spaCy](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=0)** - To install [spaCy](../../Skills/Software%20Development/spaCy.md), I would recommend installing it inside a virtual environment that is, a conda environment. By conda, it means an environment taken from the Anaconda distribution. For downloading Anaconda, head over to Anaconda's website and download the setup for your particular [System Architecture](../../Skills/Software%20Development/System%20Architecture.md). I'll download the setup for MacOS. Open the setup which you downloaded and then follow the onscreen instructions to fully install Anaconda. We can click on 'Continue' and then accept the README and the license page and then the installation type would be default and then we can wait for the installation to complete. And that's it. From this page, we can clearly identify that Anaconda is installed correctly. Now we can head over to [spaCy.io](https://spaCy.io) and then follow the onscreen instructions to select the appropriate type for our system type and usage. I'll select macOS with M1 chip and conda as the package manager. [Hardware](../../Topics/Hardware.md) will be CPU for default. I would recommend selecting both of the configurations, that is virtual environment and train models. Language will be English for now and for pipeline, we can select efficiency as the training pipeline parameter. Now we can run all of these commands one by one into a terminal window to fully install spaCy. On top of it, we can check if Anaconda is installed correctly
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/how-to-install-spacy?u=76281980&t=94)** by typing conda. The output confirms that Anaconda is installed correctly. Also, we can install an instance of Jupiter notebook by typing 'pip install notebook'. All the dependencies will be installed automatically. That's it. With this, we have installed everything that is needed for this course. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (3), [System Architecture](../../Skills/Software%20Development/System%20Architecture.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Tools:** anaconda (7), terminal (1)
> **Prerequisites:** install (5), setup (3)
> **Code Identifiers:** spacy (3), macos (1)
> **UI Navigation:** open the (1), click on (1), select the (1)
> **Env Vars:** readme (1), cpu (1)
> **Exercise Files:** download the (2)
> **CLI Commands:** pip (1)


### 1. Text Processing with spaCy

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to spaCy](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=0)** - [Instructor] Let's start by focusing on the most basic and important concepts of the [spaCy](../../Skills/Software%20Development/spaCy.md) library. SpaCy supports a variety of languages, but in this course we'll focus on the language English as we have downloaded the configuration related to it. One can import the spaCy object from the English language class of the spaCy library. To explore more languages and related attributes we can also explore the German or Spanish version. For now we can use the spaCy dot language dot English package and instantiate the English language class with any names. For example, nlp just as we create an object in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Now, this nlp object inherits all the properties of spaCy and is capable of performing different operations surrounding spaCy. An nlp object takes as input the text that has to be processed and gives the output as the slices of the text or its sub parts. Now, let's try to process a normal text of data like how to learn Python, with this NLP object. We can iterate over the object dog with the help of a for-loop and text attribute. This means if we want to know the text or value corresponding to each slice we can use the text property. It will output each separate part of the input text as how to learn Python, and a question mark. This slice object is known as the Doc object in spaCy. It contains the slices of the original text and these slices are known as [Tokens](../../Skills/Web%20Development/Tokens.md). Now, let's look at the Span object. A group of tokens is called a Span
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-spacy?u=76281980&t=94)** so this means Span represents a part of a Doc object. Now, let's see how to create a Span object. A Span object can easily be created by indexing our object Doc. For instance, indexing our current example from index zero to four would yield the tokens starting from index zero to index three. We can print the results using the text attribute of the Span object, just like the tokens. Also, there are various attributes or properties of tokens which we discuss just now. We know about the text attribute which returns the text or value associated with the token. Let's see them one by one. Apart from this, there is an is alpha attribute, which tells us whether the token is an alpha numeric value or not. Apart from this, another attribute is called the is punctuation. This tells us whether the token is a punctuation corrector like dot, question mark, and an exclamation mark, et cetera. The last one is like number. From this we get to know about whether the token is a number or not. As the names of all these attributes suggest printing these attributes returns, Boolean values, status, true or false. These are very helpful in [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) pipelines and reduce a large amount of effort whilst cleaning and normalizing data. These are called lexical attributes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (8), [Tokens](../../Skills/Web%20Development/Tokens.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Code Identifiers:** spacy (7)
> **Definitions:** known as (2), is called (2), is a  (2), is an  (1)
> **CLI Commands:** python (3)
> **Analogies:** for example (1), for instance (1), just like (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### [spaCy's statistical models](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=0)** - [Instructor] We have already learned about some Lexical attributes and how to process the textual data via Spans and [Tokens](../../Skills/Web%20Development/Tokens.md). But what about some contextual data? For example, data from a conversation like part of speech, text or named entities. How do you know whether any token represents a noun or a verb? Now, we'll learn about [spaCy](../../Skills/Software%20Development/spaCy.md) statistical models which help us to perform these tasks at a very fast pace by using linguistic contextual data, it means that the meaning of some of the words are dependent on the other. How would we know whether some of the tokens or slices are verbs or pronouns? In the same way whether a Span, that is a group of tokens, represents a person's name or not? SpaCy's statistical models come to the rescue here because they are trained on large amounts of contextual data taken from the internet and various functions could be used in no time to predict the actual meaning of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). One such statistical English model is the EN core web SM package, which is pre-trained and can be downloaded along with its weight from the internet. There are various other pre-trained models and packages which could be used for different tasks. By pre-trained it means that the machine learning model is trained on a different machine and could be used wherever necessary along with its weight. Now, let's see the small English statistical model in action. The load method in spaCy can be used to load the EN core web SM model into a model object. We will try to predict some contextual data
>
> **[1:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=93)** or part of speech tags with the help of the model object. For example, let's field in the sentence, Ram went to India on Monday, into our model object. Also, we know about the token dot text attribute which gives us the texture value associated with the slice or token out of the Doc object. Now let's jump to what each token or slice from the input sentence means according to the statistical model. The attribute which help us here to data mine the predicted part of speech for each token or slice is the token dot pos property. As we can see in the output, the statistical model work brilliantly and figured out what each token represents. Ram means proper noun, went corresponds to verb, et cetera. We can see the meaning of each word using the spaCy dot explain method and refer to the spaCy documentation. Now, let's take the example of named entities. These are real world objects that have been assigned a tag or a label, such as various organizations or world leaders. A statistical model is able to predict that too. Let's look at a quick example. This is possible through the entity property, which can be applied to the Doc object, that is entities in this case. From the output, we can observe that the label attribute worked really well and predicted Samsung is an organization and two more labels corresponding to Asian and 1 billion. In order to know what these two mean, we can use the explain method. So as we saw, statistical models can be a great help
>
> **[3:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-statistical-models?u=76281980&t=186)** to derive the meaning of technical or complex textual data. Using pre-trained models, which are handy to incorporate and use in our code. These techniques save a lot of time and effort. Also, the knowledge of statistical models could be increased, that is their accuracy could be increased by updating them with more examples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (5), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2)
> **Code Identifiers:** spacy (4)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **Analogies:** for example (2), such as (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### [spaCy's containers](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=0)** - [Instructor] To get a more clear understanding of the [spaCy](../../Skills/Software%20Development/spaCy.md) basic concepts, let's deep dive into the containers concept of spaCy. We looked at containers previously, and now, I want to clearly describe the fundamentals related to them. There are several containers in spaCy, like Doc, Span, Token, Example, Language, SpanGroup, et cetera. The most important among them are the Doc, Token, and Span. Let's try to compare this with the help of a basic example. Consider a tree and its branches. At the bottom lies the root of the tree which in this case corresponds to the Doc object. The Doc object, as I described previously, is instantiated from the root, that is, the object inherited from the particular language class of spaCy. The Doc object behaves as a root and contains various [Tokens](../../Skills/Web%20Development/Tokens.md), just as a branches on the tree. Try to relate it with the sentence. The Doc object takes as input the sentence and gives as output a group of Tokens. Each Token corresponds to a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), that is, noun, verb, proposition, or a punctuation character. If we group some branches of a tree, it becomes a bush. Same is the case with Tokens. A group of Tokens is called a Span. Span can contain two to various Tokens, but one common thing about Spans is they can cross or cover multiple Tokens. Another container is Example. It contains two Doc objects. Now, as you have understood the basic idea behind containers,
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-containers?u=76281980&t=94)** it would be very easy for you to refer to the spaCy documentation and learn about it in more detail. That's it. You must have acquired a good understanding of how the containers concept works in spaCy. This will be very helpful later in the course to understand and solve complex scenarios involving multi-level text dependency. Let's jump to the next video and see how rule-based matching works in spaCy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (7), [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** spacy (7)
> **Cross-References:** later in (1), next video (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to matching based on rules](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=0)** - [Instructor] We already know about using regular expressions on raw text. Now let's focus on [spaCy](../../Skills/Software%20Development/spaCy.md)'s matcher. With the inbuilt matcher, it becomes very easy to find words, phrases or strings of text. It not only works with strings but also with the Doc object. We can also match [Tokens](../../Skills/Web%20Development/Tokens.md) and other lexical attributes too. The whole concept works on rules, so we can even write rules that use the model's prediction. For example, finding a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md), address, only if it's a verb and not a noun. Now, in order to implement the rule-based matching, there is something known as a match pattern. A list of dictionaries is called a match pattern and within each dictionary, there is one token. The keys of the dictionary are the names of the token attributes mapped to the expected values as you can see. Now this example represents matching two tokens with the text, phone and M. This is used when we want to exactly match the token text. In the same way, we can also match lexical attributes. Like here in this example, we are matching two token text whose lowercase equals phone and M. Another example would be to match two values of text like banana and drum from a sentence. Also, as we saw before, there are various attributes predicted by the model so we can even write matches with model attributes. In this matcher, we are matching a token with the lemma, buy and a noun. So this would match phrases like buying groceries or bought sweets because lemma is the base form. Let's import the matcher from the spacy.matcher
>
> **[1:37](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/introduction-to-matching-based-on-rules?u=76281980&t=97)** and also load the en_core_web_sm model into the model object. An important point to note is to initialize the matcher with a shared vocabulary. I'll let you know about the vocabulary later. As you saw previously, let's create a pattern consisting of the properties we want to match, and ingest them into the matcher using the matcher.add argument. The matcher.add takes in three arguments as input. The first argument is a unique ID to identify which pattern was matched. The second argument is the optional callback. We have set it to none because we don't need one here. The third argument is the pattern itself. Let's analyze some text using the model to create the Doc object and then feed that Doc object into the matcher. The output of the matcher returns a list of tuples. Each tuple contains three parts, the match_id, the starting index and the ending index of the matched_span. The match_id corresponds to the hash value of the pattern, name. Using this iterating over a matcher and creating a span object is easy, just like this. Using the starting and the ending index. So as we see, matching based on tokens is a very powerful technique and can be used to extract meaningful information from a large set of textual data. Information extraction becomes easy and fast using rule-based matching. So let's try what we have learned 'till now in the upcoming challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [spaCy](../../Skills/Software%20Development/spaCy.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Code Identifiers:** match_id (2), spacy (1), en_core_web_sm (1), matched_span (1)
> **Definitions:** is a  (2), known as (1), is called (1)
> **Cross-References:** as we saw (1), as you saw (1)
> **Analogies:** for example (1), just like (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Predicting linguistic annotations](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-predicting-linguistic-annotations?u=76281980&t=5)** - [Narrator] We already learned about the space's pre-trained machine learning models and also the variety of languages it supports. Now, let's use the EN code Web SM model and see its predictions in action. You can use it on your own text too. I have included some text in your exercise files and sample code. Use this text and process it with the help of the small English model to create a doc object. For all the [Tokens](../../Skills/Web%20Development/Tokens.md) associated with the doc object, print the tokens' text, dependency label, and part of speech text. Apart from this, another sub-task would be to iterate over all the entities of the doc object and print the entities' text and label attribute. Use the sample text for both of the problems. Also, please note if you can't recollect what a tag or a label actually means, you can use the spacey dot explain method and proceed. Now, I leave it to you before I explain the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2)
> **Exercise Files:** exercise files (1), sample code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Predicting linguistic annotations](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=0)** (bright upbeat music)
>
> **[0:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-predicting-linguistic-annotations?u=76281980&t=6)** - [Instructor] Here's the solution to the previous challenge. We have to process the given text, using the en_core_web_sm model. For this, let's import the model using the [spaCy](../../Skills/Software%20Development/spaCy.md).load method and create a nlp object. Passing the text into this nlp object would give us the doc object. Now simply we can iterate over the doc object, as we have learned in the previous videos, and for each of the [Tokens](../../Skills/Web%20Development/Tokens.md), printing the three attributes. Token.text would give us the value of the text, and token.pos would give us the part of speech tags associated with the respective token, and the dependency label could be fetched using the token.dependency property. Running the for loop across these three statements and printing the three attributes, would give us the desired output. Now, coming to the second sub-problem In order to [Fetch](../../Skills/Web%20Development/Fetch.md) the entities corresponding to the doc object, we can use the doc.ents property and in the same way iterate over all the entities using a for loop. We can print the entity's text using the entity.text property and the label using the label attribute. So that's it. This concludes the challenge which revolved around predicting linguistic annotations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Code Identifiers:** en_core_web_sm (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 2. Data Analysis Using spaCy

[↑ Back to Table of Contents](#table-of-contents)

#### [spaCy's data structures](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=0)** - [Instructor] Now let's focus on the things [spaCy](../../Skills/Software%20Development/spaCy.md) does in the backend for us. One such thing is shared vocabulary, which we used earlier for initializing the match up. Shared vocabulary, as the name suggests, contains a large vocabulary of textual data which is shared by multiple chapters or documents. This data is not stored in the basic text format. SpaCy encodes or generates all the vocabulary strings in hash format IDs. For all the textual data, SpaCy stores the hash values corresponding to only one ID of each [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) once, and ignores the further occurrence of each word. In this way, all the original string data is stored only once, and thus saves a lot of space. All of this data is stored in the StringStore, which is located in the nlp dot vocab dot strings package. In the vocabulary, we can find the hashes of any word via the StringStore. For example, we can get the hash of the word car, which is present in the vocabulary and vice versa. This means if we know the hash value, we can also get the corresponding word. For example, we can make use of nlp dot vocabulary package and get the hash representation of a word like knife. And at the same time, input that hash value in the nlp dot vocabulary package, and get the original string back again. So, this defines that shared vocabulary stores data in hash format. ID corresponds to original strings, and values corresponds to the hash values of that particular string. This is a pure example of how shared vocabulary works in SpaCy.
>
> **[1:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=93)** But one point to notice that we can't make any hash pair entries on our own in the vocabulary. If a word is not present in the vocabulary there is not any way we can get its string by the nlp dot vocabulary dot strings package. This is one of the reasons why we need to pass the shared vocabulary. Now, let's focus on lexemes. In simple words, these are context-independent entries in the vocabulary. This means they contain specific information about a particular word in the vocabulary, like its associated text, hash value, or whether it contains alphanumeric value or not. Lexemes don't correspond to part of speech text and entity labels. These things depend on context. Look at this example. This is done in a particular sentence, like "Ram loves physics." The doc contains the words in context. Some of the [Tokens](../../Skills/Web%20Development/Tokens.md) could be part of speech tags, or dependency labels. Each token refers to a lexeme, which knows the words hash id. And, as we know, to get the string representation of a hash, SpaCy looks up that hash in the StringStore. For a particular word, lexeme can be fetched from nlp dot vocabulary package. In this particular example, lexeme dot text prints out the corresponding textual value. Lexeme dot orth gives out the hash value. And lexeme dot is_alpha tells if the word corresponds to an alphanumeric value or not. Now comes the most important part, which will summarize what we have learned 'till now on vocabulary, hashes, and lexemes.
>
> **[3:06](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/spacy-s-data-structures?u=76281980&t=186)** Let's practice and learn about the most important concept of SpaCy, that is the doc object. First, we can import the nlp object from the English language class of the SpaCy library. For importing the dock class, we can use it from spacy dot tokens. In order to create a doc object, from the doc class, we have to supply three arguments to the doc class. Which includes vocabulary, words, and spaces. By words, it means the actual words, which we want to process and create the dock object from. And spaces means whether a particular word is followed by a space or not. Every space is represented by a Boolean value, and every token consists of that information, from first to last. So, we'll input the sample words into the second argument and sample spaces into the third argument. Now, let's refresh what we have learned about the Span object. The Span object is a sub part of the doc object, consisting of one or more tokens. In order to create a Span object, one has to supply three arguments. That is the doc itself, from which we want to create the span, the starting, and the ending index. The Span object is created from the starting index, 'till the ending minus one index. If we want to create the Span object manually, just like the doc object, we can follow the same process and in the end, use the doc object and create the span if required. To create a span with an entity label, we can paste in the fourth argument, with label equal to the label argument that we want to pass.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (11), [spaCy](../../Skills/Software%20Development/spaCy.md) (8), [Tokens](../../Skills/Web%20Development/Tokens.md) (3)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), refers to (1)
> **Analogies:** for example (2), just like (1)
> **Code Identifiers:** is_alpha (1)
> **Speakers:** - [instructor] (1)

#### [Similarity and word vectors](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=0)** - [Instructor] In [spaCy](../../Skills/Software%20Development/spaCy.md), we can compare two objects, such as Spans, [Tokens](../../Skills/Web%20Development/Tokens.md), or even Doc objects to extract the semantic similarity between one another. This technique is useful if we want to compare the similarity between two sentences or even two documents. Similarity depends on the application context. Let's dig into these techniques in [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) applications including chat bots, voice assistants, et cetera. Each document, Span, or a single Token object comes with a similarity method or function, which takes in another object, to which we want to compare its similarity to. The result of prediction is a flawed value between zero and one, which tells us how similar the two objects are to each other. This is often called the similarity score. But, in order to use similarity function we should be using the medium and large English SpaCy models, like the en_core_web_large, which means the English large SpaCy model, and the en_core_web_md, which denotes the medium SpaCy model of the English language class. Suppose we want to predict two documents. First, we'll import the en_core_web_md, or the medium English SpaCy model, which contains [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) vectors too. Then, we'll create two Doc objects and use the similarity method of the first Doc object to predict the similarity with the second Doc object. A higher value means the two Doc objects, or the two sentences, I like phones and I like laptops, are more similar to each other. The same approach could be used
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=94)** if we want to compare the Tokens with the help of the similarity method. To justify if the tokens, phones, and laptops are similar to each other, we can use the previous example and expand the tokens corresponding to the word phones, and laptops from the two Doc objects. A higher value of similarity score justifies the same. Another way of using the similarity method is the fact that we can use it on two different type of objects too. One can use it to compare a Doc object with a Token also. Look at this example. In this, the words phones and cars are very less similar to each other. That's why we get a less similarity score. In the same way, we can also use a similarity method to compare a Doc with a Span. The root of a similarity is derived from word vectors, which are generated using [Algorithms](../../Skills/Software%20Development/Algorithms.md) like for two vectors and in large quantities. These can also be added to SpaCy's statistical models. By default, the similarly returned by SpaCy is the cosine similarity between two entities. Let's look at word vectors that work behind the similarity method, to give us the desired results. Let's import the SpaCy English model, that is preloaded with word vectors, and instantiate it into the nlp object. Now, create a Doc object, on top of an example sentence, to derive the Tokens. To print the vectors of a particular token, we can use the token dot vector attribute. The result is a 300 dimensional vector of the word cars. This concept of similarity and word vectors
>
> **[3:07](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/similarity-and-word-vectors?u=76281980&t=187)** form the basis for many day-to-day machine learning applications, like recommendation systems, et cetera. For example, if you play a particular video on some social media website, similar kinds of videos start to appear from the next time in your feed. This is just based on the context and its similarity. Now, it's your turn to check your understanding of [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), and apply SpaCy techniques to solve complex problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (9), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (7), [Tokens](../../Skills/Web%20Development/Tokens.md) (5), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Analogies:** similar to (3), such as (1), for example (1)
> **Code Identifiers:** en_core_web_md (2), en_core_web_large (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Integrating spaCy's models and rules](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=0)** - [Instructor] We have looked at statistical models and rule-based approaches in [spaCy](../../Skills/Software%20Development/spaCy.md), now, let's focus on how to efficiently use both of them together. We will start by preparing a more dominant method for NLP-related tasks or an advanced method to find complex sequences of data from a particular problem statement. To import the Matcher, we can use it from spacy.matcher. The second step is to initialize the matcher with the shared vocabulary that is nlp.vocab. To perform the matching operation, we have to feed in the patterns, which are nothing but dictionaries consisting of a token and its attributes, one example would be something like this. We have to feed in the pattern into the matcher where the matcher not add function. Also, one can define operators, which can specify how many times the token should be matched. Operators are also inefficient and yet advanced way to deal with rule-based matching. If we call the matcher on the Doc object, we will get a list of matches. First of all, we'll see how to add statistical predictions for a particular example, running a four loop over the results or matches given by the matcher, we can create a span object from the starting and the ending index of the matched attributes, this span object contains the entire raw document and other properties such as linguistic features. Now, we can print other properties of the span, such as the text of its root token and other details such as previous token and its part of speech tag, apart from this, the root tag token
>
> **[1:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/integrating-spacy-s-models-and-rules?u=76281980&t=93)** and its properties could also be displayed. Another technique to find sequences of words or patterns in a particular data set is phrase matching, let's import it first and at the same time learn more about it so that it would be easy. Phrase matching is extremely fast, it can be imported in the same way we import the matcher datas from the spacy.matcher. First of all, initializing it with a shared vocabulary, now, creating a doc object for a sample sentence and assigning it to pattern, adding that pattern, which is made up of doc object using the matcher.add attribute. As you must have noticed, one major difference between a normal matcher and phrase matcher is that with the phrase matching it's possible to input even doc objects such as patterns instead of a list of dictionaries. Phrase matching is capable of doing keyword search on the document, but instead of only picking up strings, it gives us direct access to the relevant [Tokens](../../Skills/Web%20Development/Tokens.md) in context. After this, we can just iterate over the matcher in the same way as we did earlier and extract the starting and the ending index of the matched span. So at the end, a span object has been created for us by the algorithm for the match tokens to analyze it in context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (2)
> **Analogies:** such as (4)
> **CLI Commands:** find (2)
> **Code Identifiers:** spacy (1)
> **Env Vars:** nlp (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Phrase matching](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-phrase-matching?u=76281980&t=5)** - [Instructor] In this challenge we'll see what matches can do in real life examples. For this challenge, I have included some incomplete code for you in the exercise files. The task is to implement a phrase matching technique over a list of countries. First of all, you have to import all the necessary packages to implement the phrase matcher and initialize it with a shared vocabulary. Another sub-task would be to create a Doc object and use it as a pattern. After this, you need to add that pattern to the phrase matcher, and then call that matcher on the Doc object. For instance, you can also create your own NLP object in the Doc object and see how the code performs on different examples of sample text. At the end, I trade over the result of the matches and print the results set. Feel free to make changes in the code, and try to make it as compact as you can. Phrase matching is a very fast operation and is generally used in place of normal matching techniques. You can try this code snippet on different example text and large coppers too.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** nlp (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Phrase matching](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-phrase-matching?u=76281980&t=5)** - [Instructor] Let me walk through my solution. To import the phrase matcher, we can import it from the [spaCy](../../Skills/Software%20Development/spaCy.md) dot matcher, and initialize it with the shared vocabulary using nlp dot vocab. I'm assuming you already know how to create a nlp and a dock object, and initialize it. Since we are using phrase matcher, we can write a pattern which will consume the dock object and we can write it like this. Now, this pattern can be added to the matcher using the matcher dot add property. The add attribute expects three arguments like this. And then, we can [Fetch](../../Skills/Web%20Development/Fetch.md) the matches or the results set of matches, by using our matcher, or the dock object, which we created above. Lastly, we can iterate over the result set, by using a for loop. Within the for loop, we should print the corresponding, matching dock object and part by part using the starting and the ending index of the dock object. This gives us what we are expecting and prints the matched result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### 3. Processing Pipelines with spaCy

[↑ Back to Table of Contents](#table-of-contents)

#### [Processing pipelines](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=0)** - [Instructor] It's time to talk about processing pipelines. Let's see what happens in the background when one calls the NLP object on some textual data. And see about various subprocesses that execute one by one when the NLP object works on some text of data. These subprocesses are called pipeline components. We already know that when the NLP object is applied on a string for example, it returns a dock object. What does the dock object stand for, and how it can be further processed and used? This whole process of applying the NLP object and getting the dock object as output can be determined as a pipeline. This pipeline contains several steps in between. The first step is the tokenizer. The tokenizer converts the strings of text into dock objects. This is what we saw in the previous videos. After the tokenizer finishes converting each part of the string into a dock object, various operations are applied over it. These series of operations are called pipeline components. As you can see, tagger, parser, and the named-entity recognizer work one by one on the dock object processed by the tokenizer. These are called built-in pipeline components. First comes the tagger. Token.tag attribute is created by the tagger component. Further, the dependency parser is responsible for the token.dependency and the head properties. Also, detecting sentences and non-phrases is also done by the dependency parser. Named entity recognizer is responsible for adding the detected entities to the Doc.ents property. Whereas the text classifier creates category labels
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/processing-pipelines?u=76281980&t=94)** and adds this information to the Doc.cats attribute. Now, let's look at some pipeline attributes in detail in order to see what are the components included in the NLP object which we are currently using. We can use the nlp.pipe_names property. This tells us various pipeline components in the current NLP object. Also, there is another attribute called as nlp.pipelines, and gives us a list of components name and their function.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (6)
> **Code Identifiers:** pipe_names (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Pipeline's custom components](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=0)** - [Instructor] Custom pipeline components are self-selected components that you can add to the pipeline of NLP object. When we want the pipeline to execute one by one we can define our own pipeline components other than that we talked about previously. This means when the NLP object is called on a string of text or data, it would run the pipeline components defined by us. Till now we talked about the default pipeline components that come under the NLP object of [spaCy](../../Skills/Software%20Development/spaCy.md). Now, let's talk about more modifying them or adding new ones. Remember, when an NLP object is applied on a text of data, for example, Ran goes to school daily, at first, the tokenizer does its work and then a series of pipeline components are applied one by one on the doc object. The pipeline is executed automatically and all components run on their own. The custom components are important when we need to add our own [Metadata](../../Skills/Web%20Development/Metadata.md) to documents and [Tokens](../../Skills/Web%20Development/Tokens.md). The simple meaning of a component is like anything such as an operation or a method which is applied on a doc object and prepares the output to be taken up for the next pipeline component as an input. So the modified and tokenized doc object is processed one after the other through a series of pipeline components. Also, with custom components the original built-in properties could be updated like doc.entity or named entity spans. In order to define a custom component, we can define the function that takes as input the doc object, does some processing on it in the middle, and returns the same. But to add this component which is made by us,
>
> **[1:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/pipeline-s-custom-components?u=76281980&t=95)** we can use the nlp.add_pipe method, which takes as input the custom_component function name defined by us. Now, if there are more than two pipeline components already existing in the NLP object pipeline, there is an option for us to decide the position where our self-made component would be added in the pipeline. This thing has a major significance in real world scenarios in which pipeline components are responsible for analyzing large chunks of data. The position of each component in the pipeline will decide the accuracy of our final results. Apart from the first argument in the nlp.add_pipe method, which is the custom_component function name, we can pass a second argument to tell spaCy the position in the pipeline where we want to add that component. There are several options for us given by spaCy. The first one is setting last is equal to True. Through this spaCy would set this custom component in the last of the desired pipeline. Setting first is equal to two would set the component in the first place ahead from every component. Also, if there is a tagger and the named entity recognizer already added in the pipeline, we can set after is equal to named entity recognizer. This would add a new component after the named entity recognizer. In the other way around, setting before is equal to tagger will place the new component before the tagger. For these position scenarios, for example, the tagger and the named entity recognizer should be there in the pipeline, otherwise, spaCy would raise an error as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (5), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Code Identifiers:** spacy (5), add_pipe (2), custom_component (2)
> **Env Vars:** nlp (5)
> **Cross-References:** we talked about (2), in the last (1)
> **Definitions:** is called (1), is an  (1), is a  (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Extension attributes: Part 1](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=0)** - Now, we'll dig a step deeper and see how to add custom properties to the Doc, Token, and Span objects in order to store custom data into them. We already know that token.text is a built-in attribute by [spaCy](../../Skills/Software%20Development/spaCy.md) which gives us the text associated with the Token. If we want to add any other attribute or [Metadata](../../Skills/Web%20Development/Metadata.md) defined by us, for example, to the Doc object, such as Doc.title, here is when custom attributes come into picture. Let's see how to add these custom-made properties on the Doc, Token, and Span objects. In order to add custom properties, first of all, we need to add the Doc, Token, and Span from the global classes and import them from the spacy.[Tokens](../../Skills/Web%20Development/Tokens.md). Further, we can add new custom attributes by using the set_extension method for each of the Doc, Token, and Span objects. set_extension takes in as argument the name of the custom property to be added and the keyword argument. Keyword arguments tell us how the value should be computed. In this example, we are using the default value and it can be overwritten. Also, after adding the custom extensions to the Doc, Token, and Span objects, we need to access them too. For accessing them, we can use the ._ property for each of the Doc, Token, and Span objects and access the newly-defined properties like this. Now, let's look at the type of extension attributes. There are three types of extension attributes. Attribute extensions,
>
> **[1:32](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-1?u=76281980&t=92)** property extensions, and method extensions. In the attribute extensions, a default value is set, for example on the token, that can be easily overwritten. Here's an example. Let's import the Token from the spacy.tokens. Now, in order to add the custom attribute to the Token we'll use a set_extension method and apply it over the Token like this. is_color is the name of the custom attributes and the keyword argument default is equal to False. This means its value can be easily overwritten. Now we can process the sentence, "Ram loves to bowl with the red ball." With the help of the NLP object and get the corresponding Doc object. doc[6] token refers to the red color. On individual tokens, it's value can be changed by overriding it. Now, we can use the ._ property on the token corresponding to the doc[6] and access is_color custom attribute and set its value to True. In this case, True for the token red. In this way, in attribute extensions, we can override the custom attribute values. Now, we'll take a look at the other two types of extension attributes, that is, property extensions and method extensions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Code Identifiers:** set_extension (3), is_color (2), spacy (1)
> **Analogies:** for example (2), such as (1), picture (1)
> **Definitions:** is a  (1), refers to (1)
> **Env Vars:** nlp (1)
> **Speakers:** - now (1)

#### [Extension attributes: Part 2](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=0)** - [Instructor] We have already added custom extension attributes and their types. Now, let's learn about property and method extensions. First, let's take a look at property extensions. Property extensions work like getters and setters in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). A getter function is defined and also an optional setter is set up at the same time. When we want to retrieve the attribute or property the getter function is called. Let's see this in action. We'll import the token from the [spaCy](../../Skills/Software%20Development/spaCy.md) dot [Tokens](../../Skills/Web%20Development/Tokens.md) and define a getter function. For example, get is color which takes in as input only one argument, the object in this case, such as the token. Let's define a list of colors like this and then the function will return whether the token text is in the list of colors or not. Before we learned about the set extension method which takes as the first argument the name of the custom extension that is, is color and at the same time, we can also pass the second argument as the getter, which corresponds to the name of the getter function, which we defined above. So, when we register the extension we can provide the function via the getter key [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) argument. Now, processing the same example as in the last lesson video, that is processing the text, Ram loves to bowl with the red ball, with the nlp object and extracting the corresponding Doc object. This time we have the is color custom extension created using the property extension, that is using the getter function. Now, if we [Fetch](../../Skills/Web%20Development/Fetch.md) the token corresponding to the Doc six and access its custom attribute, is color,
>
> **[1:33](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/extension-attributes-part-2?u=76281980&t=93)** using the dot underscore and for the getter key word argument we can pass the Doc six dot text. That is text corresponding to the token at position six of the Doc object. We get the following output. The token red returns true for its color custom attribute. Now, we can take a look at method extensions. Let's go through an example. In method extensions the extension attribute is a callable function, which means we can pass one or more arguments to it and then the attribute could be computed easily. Let's import the Doc from the spaCy dot tokens and define a function with arguments, that is first argument as the Doc and the second argument as the token text. In this example, the function or method checks whether the Doc contains a token with a given text or not. Please note that in method extensions like this the first argument is always the Doc and it is passed automatically when the method is called. All the subsequent arguments will be taken as arguments on the method extensions. In this case token text is the second argument that will be taken as the argument for the method extension itself. Now, we can set the method extension on the Doc and declare the method as has token. Then we can process the string, Ram loves to ball with the red ball, with the nlp object. Now as we can see, it has token method returns true for the word red and false for the word ball. That's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [spaCy](../../Skills/Software%20Development/spaCy.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Definitions:** is called (2), is a  (1)
> **Code Identifiers:** spacy (2)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Performance and scaling](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=0)** - [Instructor] When thinking about the performance of NLP pipelines generally we need a lot of computing power. For example GPUs to generate a lot of doc objects and process a large volume of text in real world scenarios. If we apply the techniques we have learned till now it would definitely process the task at a very fast pace but the speed can be increased. Let's look at techniques to improve processing speeds, processing packets of data or in streams could be a way through which we can achieve this. In Spacey, we have the nlp.pipe method which processes data in streams and increases the speed of computing at a very significant rate. We know about [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) in machine learning. For those who don't know batch processing is a technique through which the machine learning model takes a chunk of data at a time processes it makes the prediction and performs this step again and again on subsequent chunks of data. The nlp.pipe function does the same thing. It processes large volumes of text test streams and yields the doc objects. Instead of applying the traditional LMP on each string of text the pipe method creates packages of data and gives out the doc objects. We can wrap the list method around it so that we get a list of doc through the nlp.pipe method like this. As you know when we process a text or data with the help of an NLP object a series of pipeline components are applied one after the other following the tokenizer. But if our end goal is to only extract the doc object, there is another method in Spacey called 'Make Doc'. The 'Make Doc' turns text into a doc object directly
>
> **[1:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/performance-and-scaling?u=76281980&t=95)** but processing the same text into the doc object via the NLP object takes a longer time because other pipeline components are also present in the latter one. In Spacey there is another technique to disable some of the pipeline components if we want to fasten them the NLP pipeline. This is only done intentionally if we don't want some of the pipeline components to not run. NLP.disable_pipes is the method through which we can disable the pipeline components we want. Suppose we have the entity the tokenizer tagger and the parser in our NLP pipeline and we want only to use the tagger, then we can disable the entity the tokenizer and the parser with the use of a with block like this and then process the text with the help of the NLP object. Outside the with block in the execution of the program all the disabled components become active again to be used further in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) program. So we can define some methods with the use of a Disabled Pipes method of NLP object where we only want to run the certain components of the NLP pipeline. By using this short yet simple techniques we can fasten up the execution of the program multiple times. This isn't observable in simple programs but when we have to deal with the large corpus of data, this comes to the rescue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** nlp (9), lmp (1)
> **CLI Commands:** make (2), python (1)
> **Code Identifiers:** disable_pipes (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Processing streams and selective processing](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-processing-streams-and-selective-processing?u=76281980&t=0)** - In this challenge, you would be responsible for processing the stream of text using only the techniques learned in the previous video. I have included a stream of text that we will be processing. There are two streams of text that will require your knowledge and work divided into two task. For task one, you need to import the [spaCy](../../Skills/Software%20Development/spaCy.md) small English model and load it into the NLP object. You'll be converting the text one into only [Tokens](../../Skills/Web%20Development/Tokens.md) or tokenizing the text without using the complete NLP pipeline. For task two, you will use the NLP pipeline and performed tokenization on text two. But NLP pipeline should not have built-in tagger and parser. In the end, you should print out the entities from the final Doc object. That's it, all the best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** nlp (4)
> **Code Identifiers:** spacy (1)
> **Cross-References:** previous video (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Processing streams and selective processing](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-processing-streams-and-selective-processing?u=76281980&t=0)** - [Instructor] Let me show you my solution for task one. First of all, let's import the en_core_web_sm model and instantiate it. Then as we have to convert the text_1 into only [Tokens](../../Skills/Web%20Development/Tokens.md), we can use the nlp.make_doc method. We can consume the text_1 from the nlp.make_doc method and thus we'll get the corresponding doc object. Now we can iterate over the tokens in the doc object and print the text corresponding to each one of them. In this way, we only use the tokenization part of the NLP pipeline and hence saved a lot of time by selective processing. For task two, we have to process the stream of text but not by using the tagger and parser in the NLP pipeline. For this, same as the previous task, we can import the small English model and declare the NLP object. Now we can make a method using nlp.disable_pipes which takes in as two arguments, that is tagger and parser, which we have to exclude from the NLP pipeline. And within that method, we can process the text_2, using the NLP object. Finally, printing the required entities of the doc object. That's it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2)
> **Env Vars:** nlp (5)
> **Code Identifiers:** make_doc (2), en_core_web_sm (1), disable_pipes (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Training an Artificial Neural Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Training and updating models](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=0)** - [Instructor] Training is the most useful and thoughtful process in machine learning. It involves a lot of detail and all the characteristics of the model depends on the end use case too. Training a machine learning model requires a lot of computing power depending upon the data and the architecture of the model. We have learned previously about [spaCy](../../Skills/Software%20Development/spaCy.md)'s pre-trained models. Pre-trained models work in many scenarios brilliantly but they couldn't be used in all of the end use case scenarios. There are numerous pre-trained models available online and open source too, but they make predictions based on the examples they were trained on. So, to fulfill our specific domain-related problems, there is a need to build or train custom machine learning models. That's where spaCy comes to the rescue. spaCy supports creating training pipelines for new models as well as updating the existing pre-trained models. Let's take a look at how to train a fresh, new spaCy model. First of all, we will randomly initialize the weights. There is a function in spaCy called nlp.begin_training which initializes the model by random weights. In order to minimize the loss, which is the core phenomena of training a machine learning model, we can use the nlp.update method which takes on its own, a batch of examples with the current weights and then checks the output or predictions with the current weights, or compare the predictions with the true labels of the batch of examples. Then, the algorithm analyzes how to change the weights in order to compare a better output or prediction next time,
>
> **[1:34](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=94)** that is, on the next batch of examples. After this, a small correction is applied on the current weights so that the next time, the comparison between predicted labels and true labels is even less. Finally, the same step is repeated. This iterative approach to predict the most accurate weights by taking a batch of examples again and again and then updating the weights after each step with a correction is the most basic yet dominant technique in machine learning for all subcategories. Now, here is an illustration depicting the process. Training data is the bunch of examples which will be feed into the machine learning model which we want to train. Small batches or chunks of data would be taken one by one from this dataset. The input text is the X, that is, the entity the model should predict the result for. Label, highlighted in yellow, is the output or predicted value. This is Y. So, the model takes as input the X, that is, the training data or batch of examples, and predicts Y, that is, the value. The gradient in between is the measure of how one should change the model weights in order to reduce the error. The error here is the difference between the actual labels and the predicted labels. It could be positive or negative depending upon the situation in the current iteration. We can define upfront the number of iterations, that is, the number of times this cycle will repeat. Also, it's usually called the number of steps. After the iteration of N number of steps,
>
> **[3:08](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-and-updating-models?u=76281980&t=188)** the model weights, along with its configuration, would be saved in the respected folder, which we can use further. Now, let's see how to train an entity recognizer in spaCy. The entity recognizer takes as input the document or text and predicts phrases and their corresponding labels. So, this means the document or training data, in this case, should contain the entities and their corresponding labels. As we know, entities can't overlap so each token would be a part of only one entity because the entity recognizer predicts entities in context. As a result, they also need to be trained upon entities and their surrounding context so that the loss decreases rapidly. That is, the goal is to teach the model to recognize new entities in the similar context given the fact they were not available in the training phrase data, as I explained before. For this process, the quality of training data is very important. It should contain a large number of examples of what we want the model to predict. The data could also include [Tokens](../../Skills/Web%20Development/Tokens.md) and their part-of-speech tags. One important and fundamental point to note here is that whenever we want to create a new categorized model, we may need a large amount of data, say one lakh examples. But if we want to update an existing model to predict a new category, we may need 1/10 of the previous one, that is 10,000. That's it. In the next lesson, let's dig deeper to know more about the training loop.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (6), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Code Identifiers:** spacy (6), begin_training (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Training loop](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=0)** - As the name suggests, the training loop contains all the steps that we have discussed till now. The steps were predict for an input example, compare the predicted output with two values, calculate the gradient, and in the end, update the weights. By loop, we mean the number of times these steps would be performed. Typically, for training a complex machine learning model it would take 10,000 to one lakh steps to achieve the best weights for a good machine learning model depending upon the use case too. Also to prevent the model from getting stuck at some point during training. Another approach that is shuffling the training set before each iteration in the loop is also done. The third step would be to divide the training set into batches of small data. Last but not the least, we have to update the model by correcting or updating its weight for each batch. In the end, we can save the model to use in the application. These are the steps of the training loop. Suppose we have a large training data as a list containing texts and their corresponding entity labels. Now we'll make a training loop, for example, for 10 iterations and start with shuffling the retaining data as we have learned just now. Then we'll create mini batches or this is called [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) in simple language. Mini batches are created using the [spaCy](../../Skills/Software%20Development/spaCy.md).util.minibatch package available in spacy.util. This is used to divide the training data into batches. Using this from each batch, we'll get the text
>
> **[1:35](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=95)** and the corresponding annotations like this. Following this, we can use the nlp.update function to update the model, which will take as input the text and their corresponding annotations. In the end, after our training process is done and this code runs for 10 iterations, we have to save the model for this nlp.to_disk method takes as input the path of location where we want to save the model and thus saves the model to the storage path. Now let's see how to update an existing pre-train model with more data so that we can add a new category to the model to predict successfully with good results. For this, we can import a blank English model using the spacy.blank function. By a blank model, it means that the model will not have any pipeline components and will only contain language data and tokenization rules. After this, we can create an entity recognizer and then add it to the NLP object using the add_pipe method. For example, we want the model to predict one new class that is electronic gadgets so we can add a new label to identity recognizer like this. As in this case, we don't have any weights assigned to the machine learning model. We can call the nlp.begin training function which will initialize the model with random weights as we have learned in the previous lesson. Then we can start the training loop and shuffle the data set too in each iteration so that our model can learn efficiently. After this, we'll perform batch processing
>
> **[3:09](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop?u=76281980&t=189)** with the batch size of two and extract the text and their corresponding annotations. Finally, we update the NLP model with the text and their corresponding annotations and continue the training loop. We'll practice this in the upcoming challenges too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (3), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2)
> **Code Identifiers:** to_disk (1), add_pipe (1)
> **Env Vars:** nlp (2)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - as (1)

#### [Challenge: Building a training loop](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-building-a-training-loop?u=76281980&t=5)** - [Instructor] In this challenge, you'll practice how to initially build a training loop. I have already imported [spaCy](../../Skills/Software%20Development/spaCy.md) and random. I have also completed half of the code, and also defined the training data for this task. I also imported the blank English model and created an entity recognizer and added it to the pipeline of the NLP object. I also added the label gadget to the named entity recognizer. Your task is to build a training loop that will iterate for 10 times using NLP third begin training. The first step in that training pipeline should be shuffling of the data. Further, you should use [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md), and use a batch size of two. Within that batch processing, extract the text and their corresponding annotations from the respective entities. Be sure to update the model within each iteration so as to save the model state and print the respective iteration loss.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2), [spaCy](../../Skills/Software%20Development/spaCy.md) (1)
> **Env Vars:** nlp (2)
> **Code Identifiers:** spacy (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Building a training loop](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-building-a-training-loop?u=76281980&t=5)** - [Instructor] First, we will create a blank English model using [spaCy](../../Skills/Software%20Development/spaCy.md).blank. Then we can create a new entity recognizer and add it to the training pipeline. Also, adding the label, GADGET, to the named entity recognizer. For the task, we can start the training pipeline or process using the nlp.begin_training(). Then iterate for 10 iterations using a for loop and using the random.shuffle function to shuffle the training data like this. Remember to declare the empty losses that we would be printing in the end of each iteration. After this, we have to do the [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md), and for that, we can use a spacy.util.minibatch function. This function takes as input two arguments. First, the training data and the second argument would be the size of batches which will be two in this case. Then we can easily [Fetch](../../Skills/Web%20Development/Fetch.md) the text and their corresponding annotations, and then update the model in the end using the nlp.update method, which will take three arguments. That is text, annotations and losses. Finally, we can print the loss for the respective iteration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (2), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Code Identifiers:** begin_training (1)
> **Env Vars:** gadget (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Training loop best practices](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/training-loop-best-practices?u=76281980&t=0)** - [Instructor] By now, you might have already tweaked or modified the code to see what would happen if you change the training data or increased the number of iterations. Does the loss increase or decrease? Is the model now predicting correctly? Training is a very complex process and depends upon a lot of factors like quality of dataset, size of dataset, is data set necessary for the type of category we want the model to predict? There are plenty of other factors which influence the accuracy of the ML model but there are some best practices we should keep in mind while training or updating the model. One common scenario is overfitting. Overfitting means that the model can overfit on new data, thus forgetting the earlier data which it already knows. This is also known as catastrophic forgetting problem. Another common problem is sometimes, despite several techniques and tweaks, the model is not learning what we want it to learn. Generally, [spaCy](../../Skills/Software%20Development/spaCy.md) models make predictions based on the local context. For example, the surrounding words are extremely important while predicting name identities. Predicting contextual characteristics is difficult for the spaCy model if there is less contextual data in the training set. Setting up the label scheme to be more generic rather than being too specific is the right technique to overcome this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (2)
> **Definitions:** is a  (1), means that (1), known as (1)
> **Code Identifiers:** spacy (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Training multiple labels](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/challenge-training-multiple-labels?u=76281980&t=0)** - [Instructor] In this challenge you'll be training multiple labels by using the incomplete training dataset that is provided to make it ready for training new entity types. You are responsible for labeling this dataset on your own. Also, you should include annotations for the person entities as well as the website entities so that the model is able to figure out and learn both of these from the training dataset. Complete the following incomplete dataset and make it ready for training.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Training multiple labels](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=0)** (bright upbeat music begins)
>
> **[0:05](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/solution-training-multiple-labels?u=76281980&t=5)** - [Instructor] Let's go through the solution. To complete the following training data set and include the annotations for the person and websites or entities, we can create a list that includes the configuration of the entities that we want. Entities can be described as a group of couples like this. We have to label the entity type by specifying the starting and the ending, plus one index of the specific training data. The starting index starts from zero. Like this, we can have both entity types specified, so that our model learns both of them at the same time. I hope you enjoy training multiple data labels.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music begins) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Wrap-up](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-nlp-pipelines-with-spacy/wrap-up?u=76281980&t=0)** - [Prateek Sawhney] Congratulations, thank you for following along and completing this course. I encourage you to keep learning new techniques and strategies to deal with [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) tasks using advanced libraries. The machine learning space is vast and rapidly growing. Keeping up to date is the best way you can follow along. There are new and advanced libraries such as [spaCy](../../Skills/Software%20Development/spaCy.md) you can learn. I have included a list of resources for you in the handout. To keep practicing, I recommend you extract the [Google](../../Glossary/Service/Google.md) search results data, and process that using the spaCy package. I have included a step-by-step guide in the handout. If you want to follow me for more AI content, you can find me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and subscribe to my AI newsletter. If you have any questions or comments, feel free to leave them in the Q&A. I would love to hear about your takeaways and successes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (2), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Google](../../Glossary/Service/Google.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Code Identifiers:** spacy (2)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [prateek (1)


## Instructor

- [Prateek Sawhney](../../Instructors/Artificial%20Intelligence%20(AI)/Prateek%20Sawhney.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-nlp-pipelines-with-spacy-3094275)

## Skills Covered

- Artificial Intelligence (AI)
- Natural Language Processing (NLP)
- spaCy

## Path Context

### In [Advance Your Skills in Natural Language Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Natural%20Language%20Processing.md)
← [Hands-On Natural Language Processing](Hands-On%20Natural%20Language%20Processing.md) | **3 of 6** | [Deep Learning with TensorFlow- Insights and Innovations](Deep%20Learning%20with%20TensorFlow-%20Insights%20and%20Innovations.md) →

## Appears In

- [Advance Your Skills in Natural Language Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Natural%20Language%20Processing.md)

## Related Courses

_Courses sharing skills:_

- [Hands-On Natural Language Processing](Hands-On%20Natural%20Language%20Processing.md) — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [Advanced Nlp With Python For Machine Learning](Advanced%20Nlp%20With%20Python%20For%20Machine%20Learning.md) — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [Complete Guide to NLP with R](../Data%20Science/Complete%20Guide%20to%20NLP%20with%20R.md) — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [Applied AI- Building NLP Apps with Hugging Face Transformers](Applied%20AI-%20Building%20NLP%20Apps%20with%20Hugging%20Face%20Transformers.md) — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [TensorFlow- Working with NLP](TensorFlow-%20Working%20with%20NLP.md) — Artificial Intelligence (AI), Natural Language Processing (NLP)

---

[↑ Back to top](#)