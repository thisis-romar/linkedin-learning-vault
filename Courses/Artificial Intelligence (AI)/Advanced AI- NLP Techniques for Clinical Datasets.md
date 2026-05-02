---
type: course
cssclasses:
  - lle-course
slug: advanced-ai-nlp-techniques-for-clinical-datasets
url: "https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets"
duration_minutes: 43
duration: 43m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFLyC0idBGRFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667324955293?e=2147483647&amp;v=beta&amp;t=TluUTDDPXcz8NA55vriTfe5sMM0Zc1G9gaYglWLzXlI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[AI for Healthcare- Essentials for Technical Roles]]'
prev_courses:
  - '[[Hands-on Data Science and AI for Healthcare]]'
next_courses:
  - '[[Deep Learning Fundamentals for Healthcare]]'
path_nav: '[{"path":"AI for Healthcare- Essentials for Technical Roles","position":5,"total":6,"prev":"Hands-on Data Science and AI for Healthcare","next":"Deep Learning Fundamentals for Healthcare"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20AI-%20NLP%20Techniques%20for%20Clinical%20Datasets.md)

![Advanced AI: NLP Techniques for Clinical Datasets](https://media.licdn.com/dms/image/v2/D560DAQFLyC0idBGRFg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667324955293?e=2147483647&amp;v=beta&amp;t=TluUTDDPXcz8NA55vriTfe5sMM0Zc1G9gaYglWLzXlI)

# Advanced AI: NLP Techniques for Clinical Datasets

> The healthcare industry is one of the fastest growing sectors using AI applications and techniques. When working with clinical data, written text forms a major part of how scenarios and treatment progression are documented. With the advent and availability of more and more digital health data, this course provides hands-on lessons at making sense of clinical text data using natural language proces

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets) | 43m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Use NLP techniques for your data](#use-nlp-techniques-for-your-data)
  - [What you should know](#what-you-should-know)
  - [How to use the exercise files](#how-to-use-the-exercise-files)
- [**1. Clinical Named Entity Recognition (CNER)**](#1-clinical-named-entity-recognition-cner) (2 videos)
  - [What is clinical named entity recognition (CNER)?](#what-is-clinical-named-entity-recognition-cner)
  - [Clinical named entity recognition using scispaCy](#clinical-named-entity-recognition-using-scispacy)
- [**2. Clinical Entity Resolution**](#2-clinical-entity-resolution) (3 videos)
  - [What is clinical entity resolution?](#what-is-clinical-entity-resolution)
  - [Medical abbreviation resolution with scispaCy](#medical-abbreviation-resolution-with-scispacy)
  - [Entity linkage and resolution with a biomedical knowledge base](#entity-linkage-and-resolution-with-a-biomedical-knowledge-base)
- [**3. Clinical Text Representation**](#3-clinical-text-representation) (3 videos)
  - [What is clinical text representation?](#what-is-clinical-text-representation)
  - [Clinical text representation using fastText](#clinical-text-representation-using-fasttext)
  - [Clinical text representation using Universal Sentence Encoder (USE)](#clinical-text-representation-using-universal-sentence-encoder-use)
- [**4. Transformers for Clinical Text**](#4-transformers-for-clinical-text) (4 videos)
  - [What are transformers?](#what-are-transformers)
  - [Clinical diagnosis prediction using transformers](#clinical-diagnosis-prediction-using-transformers)
  - [Clinical named entity recognition using transformers](#clinical-named-entity-recognition-using-transformers)
  - [Clinical word prediction using transformers](#clinical-word-prediction-using-transformers)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Use NLP techniques for your data](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980&t=0)** - [Wuraola] Clinical narratives are data-rich, and it makes them viable use cases for the application of AI methodologies.
>
> **[0:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980&t=8)** In this course, we will explore how to apply [[Natural Language Processing (NLP)|natural language processing]] to clinical and biomedical data.
>
> **[0:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980&t=16)** The exercise cover range of techniques, from clinical named entity recognition, clinical aberration resolution, transformers for clinical diagnosis, and ward prediction.
>
> **[0:29](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980&t=29)** My name is Wuraola Oyewusi.
>
> **[0:32](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980&t=32)** Before transitioning to [[Data Science]], I began my career as a pharmacist working with a range of clinical datasets, and I am excited to be your instructor in this [[LinkedIn]] learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Data Science]] (1), [[LinkedIn]] (1)
> **Speakers:** - [wuraola] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the best out of this course, I'm assuming that you have a basic understanding of [[Python (Programming Language)|Python]] programming, machine learning and [[Natural Language Processing (NLP)|natural language processing]], and you're comfortable with clinical and biomedical terminologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] To maximize your learning experience, it is encouraged that you work along with the provided exercise files.
>
> **[0:07](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=7)** Let's start by going to collab.research.[[[Google]].com](https://google.com).
>
> **[0:12](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=12)** To upload an I [[Python (Programming Language)|Python]] file, click on file at the top left corner.
>
> **[0:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=19)** Then select upload notebook.
>
> **[0:21](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=21)** (mouse clicking) Now that you have your notebook to upload another type of file, let's say csv, click on upload to session storage.
>
> **[0:39](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=39)** Select your file and let it run.
>
> **[0:43](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=43)** To run a cell, click on the button that looks like a play button or press shift and enter on the keyboard.
>
> **[0:53](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=53)** In many cells, especially library installations, there is the magic comment capture to contain run outputs.
>
> **[1:03](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=63)** If you'd like to see the process, you can comment it out.
>
> **[1:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=73)** To use the GPU support, click on run time, then change run time type to gpu.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (4)
> **CLI Commands:** python (1)
> **URLs:** [google.com](https://google.com) (1)
> **Env Vars:** gpu (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (mouse clicking) (1)


### 1. Clinical Named Entity Recognition (CNER)

[↑ Back to Table of Contents](#table-of-contents)

#### [What is clinical named entity recognition (CNER)?](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=0)** - Clinical named entity recognition.
>
> **[0:02](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=2)** is a, natural longer processing task, that, locates and extracts named entities, in clinical and biomedical narratives.
>
> **[0:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=14)** In classifies important concepts, into predefined categories.
>
> **[0:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=19)** One of the principle of clinical named entity recognition, is the same as any other application, of named entity recognition.
>
> **[0:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=28)** There are some things to be considered when working, with clinical data.
>
> **[0:33](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=33)** The use of synonyms is common in clinical narratives, For example, cardiac arrest, cardiac infection, heart attack could be used interchangeably, in the same notes.
>
> **[0:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=47)** The design of clinical narratives is, to be as descriptive as possible.
>
> **[0:52](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=52)** This means, there is increase, in the [[Probability]] of, nested entities.
>
> **[0:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=58)** And finally, if you're training, a custom clinical named entity recognition model, because the domain is specific, only experts can be annotators.
>
> **[1:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=70)** Depending on your use case, there are many clinical named entities that you can use, either pre trained or custom models for.
>
> **[1:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=79)** Some examples are, medication, disease, symptoms, adverse drug reaction, anatomy, duration of medication, gene and genetics, specialty of practice, laboratory tests, and route of administration.
>
> **[1:41](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=101)** And the machine learning [[Algorithms]], used for clinical named entity recognition, can either be supervised, where the training data is labeled, or unsupervised, where the training data is unlabeled.
>
> **[1:56](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=116)** The supervised approach, is more prominent in real life.
>
> **[2:01](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=121)** The key things to remember, about clinical named entity recognition are, it is a token classification task, where, you are assigning entities to different classes.
>
> **[2:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=134)** In our context, the entities are clinical, or biomedical.
>
> **[2:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=139)** and it's four, Clinical information, collection, mining and retrieval.
>
> **[2:27](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=147)** In the implementation of clinical named entity recognition, there are existing and useful libraries and frameworks, such as, scispaCy for scientific and clinical data, which is built on [[spaCy]].
>
> **[2:42](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=162)** A popular general framework, for [[Natural Language Processing (NLP)|natural language processing]] task.
>
> **[2:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=167)** CliNER from clinical named entity recognition Clamp, a tool for clinical language annotation,modeling and processing.
>
> **[2:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=178)** Then cTAKES, a clinical text analysis, and knowledge extraction system.
>
> **[3:04](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=184)** And, spark NLP, a framework, for, natural language processing tasks, related to healthcare.
>
> **[3:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=194)** In your work, there are many practical uses, of clinical named entity recognition.
>
> **[3:20](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=200)** You can apply clinical named entity recognition, to identify and extract entities such as, genes and biomarkers, to identify entities, before mapping into clinical knowledge bases.
>
> **[3:36](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=216)** A common source of clinical data, is electronic health records.
>
> **[3:40](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=220)** CNER, can improve, how you derive insight from this data.
>
> **[3:46](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=226)** CNER, can be applied to detect, and extract medications, their doses, route of administration, and even adverse drug reactions.
>
> **[3:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=238)** And sometimes, clinical named entity recognition, is only a pre processing task, in your research of production pipeline.
>
> **[4:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=248)** We have explored clinical named entity recognition, its principles, uses, and how it enables generation of insight, from clinical in biomedical narratives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Probability]] (1), [[Algorithms]] (1), [[spaCy]] (1)
> **Code Identifiers:** scispacy (1), spacy (1), ctakes (1)
> **Env Vars:** cner (2), nlp (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - clinical (1)

#### [Clinical named entity recognition using scispaCy](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=0)** - [Instructor] We will demonstrate how to liberate scispaCy, a [[Python (Programming Language)|Python]] natural longer processing framework for scientific, biomedical, and clinical name entity recognition tasks.
>
> **[0:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=13)** There are different portrayed models based on the data trade on and the entities they can recognize.
>
> **[0:21](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=21)** The sample text is a published case report about hypoglycemia.
>
> **[0:25](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=25)** And you can read more about it here.
>
> **[0:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=28)** First, we install scispaCy in the necessary portrayed models.
>
> **[0:36](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=36)** Then we import the necessary modules as shown here.
>
> **[0:40](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=40)** Next, we save our sample data into a variable called case report.
>
> **[0:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=47)** Since we will be experimenting with up to four pre-train models, we'll write the Python function that takes a model name, document that string in color options as a dictionary that returns the detected entities and labels as to pose and the visualization of the same.
>
> **[1:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=71)** The visualization requires that we set the color options for the entities.
>
> **[1:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=76)** So for the first display we set the color to yellow.
>
> **[1:21](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=81)** Note that this is flexible, it can be any color.
>
> **[1:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=86)** Now, we go ahead to call the display entities function with the English core scibert model.
>
> **[1:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=95)** This is a general model that can detect up to 785,000 scientific entities.
>
> **[1:43](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=103)** Looking at the outputs, you see that the entities in the sample text that may be of clinical significance such as hypoglycemia, diabetes mellitus, differential diagnosis, normal plasma glucose levels, have been highlighted in yellow color and also returned as an entity label top player.
>
> **[2:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=130)** For the second model, we assign the color options based on the documented entities it is portrayed to detect.
>
> **[2:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=139)** Then we call the display entities function, on the English ner_jnlpba model, which is portrayed to find entities such as DNA, cell type, and protein.
>
> **[2:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=155)** This returns no highlighted entities.
>
> **[2:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=158)** This means there are no related entities in a sample text.
>
> **[2:44](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=164)** The user warning also confirms this by saying, "no entities to visualize found."
>
> **[2:52](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=172)** We repeat the color option specification for the next model, which is, English ner_bc5cdr model, portraying to recognize entities that are related to disease or chemical.
>
> **[3:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=188)** The outputs display entities related to disease such as diabetes mellitus, Raynaud's phenomenon, and chemical, like glucose.
>
> **[3:22](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=202)** Now, we define color options and display entities for the English ner_bionlp13cg model.
>
> **[3:32](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=212)** This model is portrayed to detect up to patient entities, like anatomical system, organism, organism substance, simple chemical.
>
> **[3:44](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=224)** When we explore the outputs, we can see the detection of people as organism, capillary as tissue, plasma glucose as organism substance, which are all fitting for the context.
>
> **[4:03](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=243)** To assess only the entities and labels without the visualization, which tweak the original display entities function and name it entities and label extractor.
>
> **[4:15](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=255)** Next, we call the entity and label extractor function on an ner model and save the outs outputs into a variable called bionlp_ner.
>
> **[4:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=268)** And find out the variable type is set when checked.
>
> **[4:32](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=272)** Then we save the entities, labels and models into a [[Pandas (Software)|Pandas]] data frame.
>
> **[4:39](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=279)** Finally, we may go ahead to save the data frame as a CSV, maybe for future use.
>
> **[4:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=287)** Working with different name detection models and exploring the range of available entities should have improved your intuition on replicating similar task on your clinical datasets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (2), find (2)
> **Code Identifiers:** scispacy (2), ner_jnlpba (1), bionlp_ner (1)
> **Analogies:** such as (3)
> **Env Vars:** dna (1), csv (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), warning (1)
> **Documentation:** specification (1)


### 2. Clinical Entity Resolution

[↑ Back to Table of Contents](#table-of-contents)

#### [What is clinical entity resolution?](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=0)** - [Instructor] Clinical entity resolution is one of the useful technique to derive insight from detected and recognized clinical entities.
>
> **[0:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=10)** It includes activities such as abbreviation detection, since abbreviation are common in clinical narratives.
>
> **[0:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=19)** And linking clinical entities to existing knowledge bases.
>
> **[0:25](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=25)** It can also be referred to as clinical record matching, clinical fuzzy matching, and clinical record linkage.
>
> **[0:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=35)** Clinical knowledge bases are curated [[Databases]] for clinical and biomedical data.
>
> **[0:42](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=42)** These entities and concepts covered in a clinical knowledge base can usually be inferred from their names.
>
> **[0:51](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=51)** For example, UMLS, Unified Medical Language System.
>
> **[0:56](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=56)** It captures about 3 million concepts at different levels.
>
> **[1:01](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=61)** [[Mesh]], medical subject heading which contains about 30,000 entities and useful for indexing.
>
> **[1:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=70)** RxNorm based on 100,000 concepts related to clinical drugs and pharmacy concepts.
>
> **[1:18](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=78)** Then Go, gene ontology that contains about six to 7,000 concepts about genes and its function.
>
> **[1:27](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=87)** And the HPO, human phenotype ontology, containing approximately 16,000 concepts about phenotypic abnormalities encountered in human diseases.
>
> **[1:42](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=102)** When you think of clinical entity resolution, think of it as a pipeline from entity recognition and extraction as a pre-task, the availability of established clinical and biomedical knowledge bases and the ability to derive further insight by entity matching and linkage without unique identifiers.
>
> **[2:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=128)** To implement clinical entity resolution, there are existing and useful libraries in framework such as scispaCy, a [[Python (Programming Language)|Python]] library for scientific, biomedical and clinical data.
>
> **[2:24](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=144)** It is useful for resolving abbreviation and has an easy to use programming interface to clinical knowledge bases, and Spark NLP for healthcare.
>
> **[2:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=158)** There are many uses of clinical entity resolution and one of the goals of a class like this is for you to customize the skills gained for your unique use cases.
>
> **[2:50](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=170)** You can apply clinical entity resolution to ensure only unique candidates are processed, to derive deeper insight from clinical entities, to combine information about a clinical entity from different databases and to make information about clinical entities clearer.
>
> **[3:12](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=192)** And sometimes, clinical named entity resolution is only a pre processing task in your research or production pipeline.
>
> **[3:21](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=201)** We examined what clinical entity resolution is, what knowledge bases are, and their importance in making meaning of clinical named entities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (2), [[Mesh]] (1), [[Python (Programming Language)|Python]] (1)
> **Analogies:** such as (2), for example (1), think of it as (1)
> **Env Vars:** umls (1), hpo (1), nlp (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** scispacy (1)
> **Speakers:** - [instructor] (1)

#### [Medical abbreviation resolution with scispaCy](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=0)** - We will explore how to detect and resolve abbreviations in clinical narratives using scispaCy.
>
> **[0:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=8)** The sample text are case reports and they can be found here.
>
> **[0:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=13)** First, we install scispaCy in two [[Python (Programming Language)|Python]] models.
>
> **[0:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=19)** Then we input necessary models like the abbreviation detector from scispaCy dot abbreviation.
>
> **[0:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=28)** Next, we save the sample data snippets into variables called case report one and case reports two.
>
> **[0:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=38)** Now we write the simple Python function named show medical abbreviation that takes a scispaCy model and text documents and returns a list of unique abbreviations and their resolution.
>
> **[0:55](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=55)** Each line of coding, the function is clear on what it does.
>
> **[1:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=60)** Now we go ahead to call the show medical abbreviation with the BIONLPDCG model and case report one.
>
> **[1:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=70)** The code output is an empty list.
>
> **[1:12](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=72)** This means no abbreviations were detected and resolved in case report one with this model.
>
> **[1:20](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=80)** To see if the empty output is due to the model used, we repeat the above code with the different NER model called BC5CDR.
>
> **[1:32](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=92)** This run also returns an empty list.
>
> **[1:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=95)** Now we are confident that no abbreviations were detected or resolved.
>
> **[1:40](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=100)** Next, we call the show medical abbreviation function on case reports two with BIONLPDCG.
>
> **[1:49](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=109)** Voila! This time we have a list of about 11 outputs showing their abbreviation detected and their resolution.
>
> **[1:59](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=119)** Some of them are T2DM for type-2 diabetes, CVD for cardiovascular disease, NCD for noncommunicative disease.
>
> **[2:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=134)** If we repeat the code, but with another NER model, the output is the same.
>
> **[2:20](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=140)** We work together to detect and resolve abbreviations in our sample text.
>
> **[2:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=146)** This is an incredibly useful technique in your work pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **Env Vars:** bionlpdcg (2), ner (2), bc5cdr (1), t2dm (1), cvd (1)
> **Code Identifiers:** scispacy (4)
> **CLI Commands:** python (2)
> **Definitions:** is an  (2)
> **Prerequisites:** install (1)
> **Speakers:** - we (1)

#### [Entity linkage and resolution with a biomedical knowledge base](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=0)** - [Instructor] In this exercise, we will work together to resolve clinical entities by linking them to established knowledge bases.
>
> **[0:09](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=9)** We will be leveraging scispaCy linking submodel to connect to the [[Mesh]], HPO, RxNorm, GO, and UMLS biomedical knowledge bases.
>
> **[0:23](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=23)** First, we install scispaCy in the necessary pre-trained models.
>
> **[0:30](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=30)** Then we import the necessary models as shown here.
>
> **[0:34](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=34)** Next, we save our sample data into a variable called entities_dataframe.
>
> **[0:41](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=41)** On inspection, the dataframe shows three columns of Entity, Label, and the named-entity recognition model they were extracted with.
>
> **[0:53](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=53)** In this example, the BioNLP13CG model was used.
>
> **[1:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=60)** For ease of comparison, entity resolution tasks will be applied to the entities column.
>
> **[1:09](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=69)** To link with the MeSH knowledge base, first, we specify a general pipeline named mesh_nlp and then specify other parameters, such as resolve_abbreviations.
>
> **[1:24](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=84)** Now that we have a linker object for the MeSH knowledge base, this is then fed into a function called mesh_entity_linker.
>
> **[1:34](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=94)** Now, we apply the mesh_entity_linker to the Entity column in the entities_dataframe.
>
> **[1:41](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=101)** The output is saved into a new column in the entities_dataframe called mesh_output.
>
> **[1:48](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=108)** Let's see the entities_dataframe.
>
> **[1:51](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=111)** On inspection, we see a new column, with entities resolved and their confidence score.
>
> **[1:57](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=117)** Some of the rows return None, which means those entities are not available in the MeSH knowledge base.
>
> **[2:05](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=125)** We can expand our view by selecting the first entity resolution output.
>
> **[2:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=130)** In this case, we have patients with the exact match of "patients" and the confidence score of 0.999, CUI identifier, and the definition as "Individuals participating in the health care system "for the purpose of receiving therapeutic, diagnostic, "and preventive procedures".
>
> **[2:37](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=157)** Then, Mentally Ill Persons with a score of 0.826 and Inpatients with a score of 0.74.
>
> **[2:48](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=168)** These also have the CUId and definitions.
>
> **[2:53](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=173)** We repeat the above step for the HPO knowledge base.
>
> **[2:57](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=177)** If you observe the dataframe, you will notice that only entities that may be related to human phenotypes, such as lymphocytes and electrolytes, add an output with score returned.
>
> **[3:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=193)** As part of the exploration, you can view the view resolution for lymphocytes.
>
> **[3:20](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=200)** Now, let's explore our code with the RxNorm Database.
>
> **[3:24](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=204)** The RxNorm is designed to resolve medication-related entities.
>
> **[3:31](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=211)** We can go ahead and connect to the Gene Ontology knowledge base.
>
> **[3:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=215)** This was able to resolve genetic-related entities and even chemicals, such as glutathione.
>
> **[3:44](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=224)** As the final knowledge base, we will connect to the UMLS nodes.
>
> **[3:49](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=229)** This is a large database and may take a while to loading into your workspace.
>
> **[3:55](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=235)** In fact, because I am using the free tier with limited RAM support, I loaded these as a new connection.
>
> **[4:03](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=243)** We have explored different types of biomedical knowledge bases, and we saw in [[Real-Time]] how they work to resolve clinical entities they were designed to work with.
>
> **[4:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=253)** This will guide your decision on the most appropriate knowledge base for your specific use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (4), [[Real-Time]] (1)
> **Code Identifiers:** entities_dataframe (4), scispacy (2), mesh_entity_linker (2), mesh_nlp (1), resolve_abbreviations (1)
> **Env Vars:** hpo (2), umls (2), cui (1), ram (1)
> **Versions:** 0.999 (1), 0.826 (1), 0.74 (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 3. Clinical Text Representation

[↑ Back to Table of Contents](#table-of-contents)

#### [What is clinical text representation?](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=0)** - Clinical text down structured data such as: words, sentences and paragraphs from clinical narratives.
>
> **[0:09](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=9)** And these narratives include patient case notes, family history, and laboratory reports.
>
> **[0:17](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=17)** Depending on the type and capacity of the health system the data can be electronic from electronic health records or handwritten.
>
> **[0:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=26)** Now that we've established what clinical text means, what is different about it and why should we pay attention?
>
> **[0:34](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=34)** The most important reason is domain nuances and contextual [[Microsoft Word|word]] use, such as the heavy use of notations and abbreviations that would typically not be in normal text.
>
> **[0:46](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=46)** And they are influential in making sense of clinical data.
>
> **[0:52](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=52)** And this is important in designing pipeline in how data pre-processing is done.
>
> **[0:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=58)** For example, in normal English task, many times single letters are dropped as part of pre-processing, but I typically will not do that with clinical data because the single letter may be in notation from electrolytes.
>
> **[1:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=73)** Think K for potassium.
>
> **[1:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=76)** The central principle for text representation including clinical text, is that machine learning [[Algorithms]] cannot directly process text documents, so, they expect numerical feature vectors with fixed size rather than the raw text documents with variable length.
>
> **[1:36](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=96)** And transforming text is usually performed by building language models.
>
> **[1:42](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=102)** These models typically assign probabilities, frequencies or numbers to words, sentences or documents.
>
> **[1:51](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=111)** There are different techniques for text representation and the decision on which to apply, is dependent on practicality, team experience, availability and cost of compute.
>
> **[2:05](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=125)** There is the one-hot encoding, which is based on binary vectors, where presence of docking is represented as one, in all others as zeros.
>
> **[2:17](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=137)** Counts vectors, which is based on watch docking counts and frequency.
>
> **[2:23](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=143)** The most popular hot, the Back of Word and Temp Frequency - Inverse Document Frequency.
>
> **[2:31](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=151)** Then embeddings which encodes context for words, sub words or sentences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Algorithms]] (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - clinical (1)

#### [Clinical text representation using fastText](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=0)** - [Instructor] This notebook is an awesome practice to represent entering custom fast text models on clinical data.
>
> **[0:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=8)** The sample data is from this STI treatment guideline.
>
> **[0:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=13)** First, we download the sample data into our workspace using the wget command.
>
> **[0:20](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=20)** Then we install fast text and Tika using Peep.
>
> **[0:25](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=25)** Tika is a [[Python (Programming Language)|Python]] library to extract text from pdf.
>
> **[0:31](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=31)** Now we go ahead to input the necessary models and sub models.
>
> **[0:37](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=37)** To prepare the sample text data, we firstly downloaded a STI guideline and saving to a variable code raw_text.
>
> **[0:46](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=46)** We then inspect the data type after passing.
>
> **[0:50](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=50)** In this case it's a Python dictionary.
>
> **[0:54](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=54)** We pre process the data further by lowering the case and strip punctuations and then convert it back to string from the list format and strip the punctuations and then convert it back to string from the list format, saved into a variable called STI string.
>
> **[1:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=74)** You can view the output of STI string by using pre print and then we write the text into a text file.
>
> **[1:24](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=84)** Since this will be used to train our fast text models.
>
> **[1:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=88)** Now we will go ahead to train three unsupervised fast text models at 10, 20 and 50 epochs.
>
> **[1:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=98)** The dimension for the three is 300 and we can explore the difference in the performance of this fast text models.
>
> **[1:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=107)** The 10 epochs model is saved as STI model 10.
>
> **[1:52](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=112)** Both has a variable and has a bin file.
>
> **[1:56](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=116)** The training time took about two minutes.
>
> **[1:59](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=119)** The 20 epochs is saved as STI model 20, but has a variable and a bin file.
>
> **[2:06](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=126)** The training took about three minutes.
>
> **[2:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=128)** The 50 epochs model is saved as STI model 50, but has a variable and a bin file.
>
> **[2:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=136)** The training took about seven minutes.
>
> **[2:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=139)** The bin files of the three models were then loaded into variables named fast text trained model 10, 20 and 50 respectively.
>
> **[2:30](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=150)** Now we will go ahead to use our model to find the top five most similar words in confidence score to the clinical text supplied.
>
> **[2:40](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=160)** For chlamydia, there was no significant difference in the prediction of the models.
>
> **[2:46](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=166)** All three were able to predict gonorrhea, trachomatis as similar words.
>
> **[2:53](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=173)** For doxycycline, all three models predicted tetracycline and this makes sense because they belong to the same class of antibiotics and can be substituted in practice.
>
> **[3:06](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=186)** Epochs 10 and 20 captured context such as milligram and orally.
>
> **[3:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=194)** This indicates the dosage strength and the routes of administration.
>
> **[3:19](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=199)** Epochs 20 and 50 captured hundred which is a common presentation of doxycycline.
>
> **[3:27](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=207)** This shows how decisions are made in practice.
>
> **[3:30](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=210)** To decide that an optimal training epoch you try and figure out what works well in your context.
>
> **[3:37](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=217)** Here I intentionally misspelled doxycycline as doxycline.
>
> **[3:44](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=224)** All three models were able to predict doxycycline and tetracycline as similar words.
>
> **[3:51](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=231)** We'll also apply the train fast text models to decide on the [[Microsoft Word|word]] that does not match in a series.
>
> **[3:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=238)** Here we have paracetamol, headache, diarrhea, and dizziness.
>
> **[4:04](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=244)** The three models predicted paracetamol as the odd one out, which is true.
>
> **[4:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=251)** It is a medication while the others words as symptoms.
>
> **[4:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=256)** For hydrochlorothiazide, doxycycline, tetracycline and azithromycin, the three models predicted hydrochlorothiazide as a mismatch.
>
> **[4:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=268)** This is also true as it is a diuretic and other medications in the series are antibiotics.
>
> **[4:37](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=277)** In the doxycycline, tetracycline and azithromycin series, the models predicted azithromycin as the old one out.
>
> **[4:46](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=286)** This is also true, even though the three medications are antibiotics azithromycin belongs to different subclass.
>
> **[4:55](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=295)** First text models can also be used to compare what similarities with confidence cause.
>
> **[5:01](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=301)** Headache and drowsiness are common symptoms and when compared have very similarity scores with the 10 epochs model score of 0.51.
>
> **[5:12](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=312)** When pain and headache were compared, the 10 epoch model assigned a high similarity score, which I agree with as there is no headache without pain.
>
> **[5:22](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=322)** Of course there can be pain without headache.
>
> **[5:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=326)** When discharge and itching were compared, there was similarity detected.
>
> **[5:33](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=333)** While the spellings are dissimilar, the contextual similarity exist.
>
> **[5:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=338)** If you think of STIs, they may cause itching and discharge.
>
> **[5:43](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=343)** When discharge and bleeding were compared there was similarity detected.
>
> **[5:49](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=349)** Generally, the 10 epoch model did a good job with the similarity scoring and the performance of the 20 and 50 epoch command, there was overfeeding in their training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** sti (7)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** python (2), wget (1), find (1)
> **Code Identifiers:** raw_text (1)
> **Versions:** 0.51 (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)

#### [Clinical text representation using Universal Sentence Encoder (USE)](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=0)** - We will demonstrate how to use the Universal Sentence Encoder for vector representation of clinical text.
>
> **[0:07](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=7)** First, we install [[spaCy]] Universal Sentence Encoder using pip.
>
> **[0:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=14)** Our choice of using the spaCy implementation is because of ease of comparing vector similarities.
>
> **[0:21](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=21)** Then, we input spacy_universal_sentence_encoder.
>
> **[0:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=26)** Next, we load the portrayed large USC model into variable code model.
>
> **[0:34](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=34)** Now, we go ahead to load our sample clinical text into variables code case_report1 and case_report2.
>
> **[0:44](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=44)** To generate the fixed lens vector representation for the sample text, we paste the raw text into an insta shaded model for both samples and set the outputs into variables called case_report1_vector and case_report2_vector.
>
> **[1:03](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=63)** We can verify the vector lens by assessing their shape using case_report1_vector.vector_shape and case_report2_vector.vector_shape.
>
> **[1:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=76)** To compare the contextual similarity between the two documents we do case_report1_vector.similarity(case_report2_vector).
>
> **[1:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=86)** This gives an output of 0.228, which is of low similarity score between the two sample case reports.
>
> **[1:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=95)** We can play around by comparing parts of the two documents.
>
> **[1:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=98)** Let's compare the first hundred sub vectors which results in the higher score of 0.474.
>
> **[1:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=107)** The comparison of the first 200 sub vector has a similarity score of 0.575.
>
> **[1:55](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=115)** The last hundred sub vectors with a score of 0.176.
>
> **[2:02](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=122)** In the last 250 sub vectors with a negative score of -0.002.
>
> **[2:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=131)** This gives a picture of our semantic similarity of two documents are calculated with the final score being in aggregation of all the sub parts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[spaCy]] (2)
> **Code Identifiers:** spacy (2), vector_shape (2), spacy_universal_sentence_encoder (1)
> **Versions:** 0.228 (1), 0.474 (1), 0.575 (1), 0.176 (1), 0.002 (1)
> **CLI Commands:** pip (1)
> **Env Vars:** usc (1)
> **Cross-References:** in the last (1)
> **Analogies:** picture (1)
> **Prerequisites:** install (1)


### 4. Transformers for Clinical Text

[↑ Back to Table of Contents](#table-of-contents)

#### [What are transformers?](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=0)** - [Instructor] Transformers are a type of neural network architecture that are suitable for sequence to sequence or encoder-decoded model task.
>
> **[0:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=11)** And one of the concepts that make them stand out from other models is the attention mechanism.
>
> **[0:17](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=17)** Attention mechanism replaces recurrence by focusing on the most important part of sequences.
>
> **[0:24](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=24)** Before transformers, there were different models to solve sequence tasks.
>
> **[0:30](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=30)** This include [[Microsoft Word|word]] embedding, such as Word2vec, recurring [[Neural Networks]], and context-based embedding, such as ELMo.
>
> **[0:41](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=41)** There are three main types of transformers.
>
> **[0:44](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=44)** Autoregressive, also called decoder, such as GPT, XLNet.
>
> **[0:51](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=51)** Autoencoding, also known as encoding, such as BERT and RoBERTa.
>
> **[0:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=58)** And the sequence-to-sequence, such as BART and Pegasus.
>
> **[1:04](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=64)** The central principle of our transformers' warp for data, including clinical texts, is that they are pretrained, learning can be transferred to smaller task, they can be fine tuned to specific task, and they have longer memory compared to recurrent models.
>
> **[1:25](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=85)** There are some [[Transformer Models]] specifically trained on clinical empowerment medical related texts, Bio_ClinicalBERT, Clinical-Longformer, CORe clinical diagnosis prediction, Clinic-dialog-sum-T5, BioBERT, PubMedBERT, Clinical-BigBird, BERT-ClinicalQA, roberta-base-biomedical-clinical.
>
> **[1:54](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=114)** Some libraries and frameworks for working with transformers are Transformers by [[Hugging Face]], [[TensorFlow]] Hub, [[PyTorch]]-Transformers, and project specific repositories on platforms like [[GitHub]].
>
> **[2:10](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=130)** As with other data types, transformers are used in the clinical context for tasks such as treatment outcome prediction, translation of clinical notes to other languages, summarization of clinical narratives, and detection of clinical entities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Neural Networks]] (1), [[Transformer Models]] (1), [[Hugging Face]] (1), [[TensorFlow]] (1)
> **Analogies:** such as (6)
> **Env Vars:** bert (2), gpt (1), bart (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Clinical diagnosis prediction using transformers](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=0)** - [Instructor] The data snippets used there are from the clinical practice in cases in emergency medicine, in the [[Transformer Models]] from the organ face [[Python (Programming Language)|Python]] library.
>
> **[0:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=11)** First we install transformers.
>
> **[0:15](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=15)** Then we input the necessary modules such as auto organizer, auto model for sequence classification, from transformers and touch.
>
> **[0:27](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=27)** Next, we load pretrained tokenizer and classification models for core clinical diagnosis prediction and save them into variables called tokenizer and model.
>
> **[0:41](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=41)** Now we save a sample data into a variable code input.
>
> **[0:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=47)** We tokenize the inputs by passing into tokenizer.
>
> **[0:51](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=51)** Then we get the predicted labels by mapping the predicted logic using the ID to label configuration.
>
> **[1:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=60)** Running predictions alone shows number, but if we run to predicted labels, it shows what the model thinks the clinical diagnosis is based on the history in the input.
>
> **[1:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=73)** For example, this 58 year old male presents to the emergency department with headache and numbness, and from here is suspected to be hemorrhaging or have (indistinct) of hypertension.
>
> **[1:29](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=89)** If we repeat them both for input two, which is a case of a 19 year old female presenting with intermittent chest pain, palpitations, and weakness for two months, who had previously been evaluated at the emergency department one week earlier.
>
> **[1:48](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=108)** The clinical diagnosis prediction model predicts anemia, congestive heart disorder, and maybe a condition related to the artery.
>
> **[1:59](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=119)** For the third input is 60 year old female presented with sudden onset visual disturbance in her right eye.
>
> **[2:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=128)** The predictions are related to cerebral disorder, or some type of infection.
>
> **[2:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=134)** And finally input four of a 33 year old previously healthy male who presented to the the emergency department for evaluation of transient right-sided facial droop with visual changes.
>
> **[2:28](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=148)** His symptoms began 12 days after falling off a scooter.
>
> **[2:33](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=153)** Imaging revealed an extracranial internal CAD.
>
> **[2:39](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=159)** The transformer model was also able to predict cerebral related diagnosis.
>
> **[2:45](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=165)** By now, you should have a better intuition of how transformers can support clinical diagnosis decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Transformer Models]] (1), [[Python (Programming Language)|Python]] (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Env Vars:** cad (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Clinical named entity recognition using transformers](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=0)** - Return [[Transformer Models]] can also be used for clinical name data recognition.
>
> **[0:06](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=6)** The sample text is about hypoglycemia.
>
> **[0:09](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=9)** The first step is to install transformers, then input the necessary modules, searches, pipeline, [[Pandas (Software)|pandas]], and pretty prints.
>
> **[0:21](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=21)** We then go ahead to share the pipeline with the BES based on case clinical NER model and saving to a variable code NER pipe.
>
> **[0:31](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=31)** This model is portrayed to recognize entities such as; problem, treatment, and test.
>
> **[0:40](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=40)** Now we've passed the sample text into the NER pipe and save the output into a variable code entities list.
>
> **[0:49](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=49)** For a better view we make the entities list into a pandas data frame, and view the first 50 rows.
>
> **[0:57](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=57)** From the output, hypoglycemia takes the first five rows, and was labeled as a problem, which is true.
>
> **[1:06](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=66)** The breaking [[Microsoft Word|word]] as seen here typically happens when a pre-trained models do not have the exact representation of a word at training time.
>
> **[1:16](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=76)** Another transformer model, which can detect up to one hundred and seven English power medical entities such as; this is disorder, diagnostic procedure, qualitative concepts, therapeutic procedure, science symptom, biological structure and clinical event, is the biomedical N.E.R.O.
>
> **[1:39](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=99)** We can implement that by running this code on our sample data and see the output.
>
> **[1:45](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=105)** The model predicted hypoglycemia as this is disorder, 46 year old as age, gastrectomy as therapeutic procedure.
>
> **[1:58](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=118)** These predictions are right and you can see further details such as the confidence score, token stats for each word group identified.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Pandas (Software)|Pandas]] (2), [[Transformer Models]] (1)
> **Env Vars:** ner (3), bes (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - return (1)

#### [Clinical word prediction using transformers](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=0)** - [Instructor] We're going to make clinical [[Microsoft Word|word]] prediction with Transformers.
>
> **[0:05](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=5)** A use case for this can be an implementing text prediction in electronic health record systems.
>
> **[0:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=11)** First, we install Transformers and import pipeline from Transformers.
>
> **[0:18](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=18)** We then install share the pipeline with a few mask pask and specify the portrayed model of choice.
>
> **[0:25](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=25)** This time, biomed NLP, Pubmedbert and save into a variable code a unmasker.
>
> **[0:33](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=33)** Now we apply their masker to the first sentence.
>
> **[0:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=38)** A 58 year old male presents to the emergency department with headache, hand numbness and mask.
>
> **[0:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=47)** The predictions for mask in descendants cause are dizziness, vomiting, weakness, and nausea.
>
> **[0:56](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=56)** This predicted entities are all possible in real clinical setting.
>
> **[1:01](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=61)** Now let's try it on.
>
> **[1:03](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=63)** We'll present the case of a 19 year old female presenting with intermittent chest pain, palpitations and weakness present for mask.
>
> **[1:15](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=75)** The patient at previously been evaluated at a emergency department one week earlier.
>
> **[1:22](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=82)** Yes. Evaluation months, fever weeks were all predicted as possible Values for MASK and I agree with the model.
>
> **[1:33](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=93)** For the third imputes, the model predicted high and heres which align with the original sentence.
>
> **[1:41](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=101)** Finally, when the model was applied to, we report the case of a tense three year old previously elder male who presented to the mask department for evaluation of transient right sided facial drip with visual changes.
>
> **[2:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=120)** His symptoms began 12 days after falling off a scooter.
>
> **[2:04](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=124)** Imaging reviewed an extracranial internal C A D emergency neurology, ophthalmology, neurosurgery and radiology were predicted as possible values for the mask objects and any of the listed that could have been fueled in and be correct.
>
> **[2:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=146)** One of the limitations of this particular model is an ability to take on multiple mask value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** nlp (1), mask (1)
> **Prerequisites:** install (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980&t=0)** - [Wuraola] It's been a pleasure working through a range of applications of [[Natural Language Processing (NLP)|natural language processing]] on clinical data.
>
> **[0:07](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980&t=7)** The next steps is to implement those new skills in your work from research to production pipelines.
>
> **[0:15](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980&t=15)** I'm looking forward to your building and sharing.
>
> **[0:18](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980&t=18)** You can connect with me on [[LinkedIn]] and feel free to ask your questions in the community question and answer section.
>
> **[0:26](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980&t=26)** Cheers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[LinkedIn]] (1)
> **Speakers:** - [wuraola] (1)


## Instructor

- [[Wuraola Oyewusi]]

## Path Context

### In [[AI for Healthcare- Essentials for Technical Roles]]
← [[Hands-on Data Science and AI for Healthcare]] | **5 of 6** | [[Deep Learning Fundamentals for Healthcare]] →

## Appears In

- [[AI for Healthcare- Essentials for Technical Roles]]

---

[↑ Back to top](#)