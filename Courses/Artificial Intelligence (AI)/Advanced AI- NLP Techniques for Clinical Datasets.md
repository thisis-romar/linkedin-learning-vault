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
  - '[AI for Healthcare- Essentials for Technical Roles](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/AI%20for%20Healthcare-%20Essentials%20for%20Technical%20Roles.md)'
prev_courses:
  - '[Hands-on Data Science and AI for Healthcare](../Data%20Science/Hands-on%20Data%20Science%20and%20AI%20for%20Healthcare.md)'
next_courses:
  - '[Deep Learning Fundamentals for Healthcare](Deep%20Learning%20Fundamentals%20for%20Healthcare.md)'
path_nav: '[{"path":"AI for Healthcare- Essentials for Technical Roles","position":5,"total":6,"prev":"Hands-on Data Science and AI for Healthcare","next":"Deep Learning Fundamentals for Healthcare"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/use-nlp-techniques-for-your-data?u=76281980&t=0)** - [Wuraola] Clinical narratives are data-rich, and it makes them viable use cases for the application of AI methodologies. In this course, we will explore how to apply [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) to clinical and biomedical data. The exercise cover range of techniques, from clinical named entity recognition, clinical aberration resolution, transformers for clinical diagnosis, and ward prediction. My name is Wuraola Oyewusi. Before transitioning to [Data Science](../../Topics/Data%20Science.md), I began my career as a pharmacist working with a range of clinical datasets, and I am excited to be your instructor in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Data Science](../../Topics/Data%20Science.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [wuraola] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the best out of this course, I'm assuming that you have a basic understanding of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming, machine learning and [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), and you're comfortable with clinical and biomedical terminologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [How to use the exercise files](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/how-to-use-the-exercise-files?u=76281980&t=0)** - [Instructor] To maximize your learning experience, it is encouraged that you work along with the provided exercise files. Let's start by going to collab.research.[google.com](https://google.com). To upload an I [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) file, click on file at the top left corner. Then select upload notebook. (mouse clicking) Now that you have your notebook to upload another type of file, let's say csv, click on upload to session storage. Select your file and let it run. To run a cell, click on the button that looks like a play button or press shift and enter on the keyboard. In many cells, especially library installations, there is the magic comment capture to contain run outputs. If you'd like to see the process, you can comment it out. To use the GPU support, click on run time, then change run time type to gpu.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=0)** - Clinical named entity recognition. is a, natural longer processing task, that, locates and extracts named entities, in clinical and biomedical narratives. In classifies important concepts, into predefined categories. One of the principle of clinical named entity recognition, is the same as any other application, of named entity recognition. There are some things to be considered when working, with clinical data. The use of synonyms is common in clinical narratives, For example, cardiac arrest, cardiac infection, heart attack could be used interchangeably, in the same notes. The design of clinical narratives is, to be as descriptive as possible. This means, there is increase, in the [Probability](../../Skills/Data%20Science/Probability.md) of, nested entities. And finally, if you're training, a custom clinical named entity recognition model, because the domain is specific, only experts can be annotators. Depending on your use case, there are many clinical named entities that you can use, either pre trained or custom models for. Some examples are, medication, disease, symptoms, adverse drug reaction, anatomy, duration of medication, gene and genetics, specialty of practice, laboratory tests,
>
> **[1:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=98)** and route of administration. And the machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md), used for clinical named entity recognition, can either be supervised, where the training data is labeled, or unsupervised, where the training data is unlabeled. The supervised approach, is more prominent in real life. The key things to remember, about clinical named entity recognition are, it is a token classification task, where, you are assigning entities to different classes. In our context, the entities are clinical, or biomedical. and it's four, Clinical information, collection, mining and retrieval. In the implementation of clinical named entity recognition, there are existing and useful libraries and frameworks, such as, scispaCy for scientific and clinical data, which is built on [spaCy](../../Skills/Software%20Development/spaCy.md). A popular general framework, for [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) task. CliNER from clinical named entity recognition Clamp, a tool for clinical language annotation,modeling and processing. Then cTAKES, a clinical text analysis, and knowledge extraction system. And, spark NLP, a framework, for, natural language processing tasks, related to healthcare.
>
> **[3:14](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-named-entity-recognition-cner?u=76281980&t=194)** In your work, there are many practical uses, of clinical named entity recognition. You can apply clinical named entity recognition, to identify and extract entities such as, genes and biomarkers, to identify entities, before mapping into clinical knowledge bases. A common source of clinical data, is electronic health records. CNER, can improve, how you derive insight from this data. CNER, can be applied to detect, and extract medications, their doses, route of administration, and even adverse drug reactions. And sometimes, clinical named entity recognition, is only a pre processing task, in your research of production pipeline. We have explored clinical named entity recognition, its principles, uses, and how it enables generation of insight, from clinical in biomedical narratives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (2), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [spaCy](../../Skills/Software%20Development/spaCy.md) (1)
> **Code Identifiers:** scispacy (1), spacy (1), ctakes (1)
> **Env Vars:** cner (2), nlp (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - clinical (1)

#### [Clinical named entity recognition using scispaCy](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=0)** - [Instructor] We will demonstrate how to liberate scispaCy, a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) natural longer processing framework for scientific, biomedical, and clinical name entity recognition tasks. There are different portrayed models based on the data trade on and the entities they can recognize. The sample text is a published case report about hypoglycemia. And you can read more about it here. First, we install scispaCy in the necessary portrayed models. Then we import the necessary modules as shown here. Next, we save our sample data into a variable called case report. Since we will be experimenting with up to four pre-train models, we'll write the Python function that takes a model name, document that string in color options as a dictionary that returns the detected entities and labels as to pose and the visualization of the same. The visualization requires that we set the color options for the entities. So for the first display we set the color to yellow. Note that this is flexible, it can be any color. Now, we go ahead to call the display entities function with the English core scibert model.
>
> **[1:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=95)** This is a general model that can detect up to 785,000 scientific entities. Looking at the outputs, you see that the entities in the sample text that may be of clinical significance such as hypoglycemia, diabetes mellitus, differential diagnosis, normal plasma glucose levels, have been highlighted in yellow color and also returned as an entity label top player. For the second model, we assign the color options based on the documented entities it is portrayed to detect. Then we call the display entities function, on the English ner_jnlpba model, which is portrayed to find entities such as DNA, cell type, and protein. This returns no highlighted entities. This means there are no related entities in a sample text. The user warning also confirms this by saying, "no entities to visualize found." We repeat the color option specification for the next model, which is, English ner_bc5cdr model, portraying to recognize entities that are related to disease or chemical. The outputs display entities related
>
> **[3:11](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=191)** to disease such as diabetes mellitus, Raynaud's phenomenon, and chemical, like glucose. Now, we define color options and display entities for the English ner_bionlp13cg model. This model is portrayed to detect up to patient entities, like anatomical system, organism, organism substance, simple chemical. When we explore the outputs, we can see the detection of people as organism, capillary as tissue, plasma glucose as organism substance, which are all fitting for the context. To assess only the entities and labels without the visualization, which tweak the original display entities function and name it entities and label extractor. Next, we call the entity and label extractor function on an ner model and save the outs outputs into a variable called bionlp_ner. And find out the variable type is set when checked. Then we save the entities, labels and models into a [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) data frame. Finally, we may go ahead to save the data frame as a CSV, maybe for future use.
>
> **[4:47](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-scispacy?u=76281980&t=287)** Working with different name detection models and exploring the range of available entities should have improved your intuition on replicating similar task on your clinical datasets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=0)** - [Instructor] Clinical entity resolution is one of the useful technique to derive insight from detected and recognized clinical entities. It includes activities such as abbreviation detection, since abbreviation are common in clinical narratives. And linking clinical entities to existing knowledge bases. It can also be referred to as clinical record matching, clinical fuzzy matching, and clinical record linkage. Clinical knowledge bases are curated [Databases](../../Skills/Software%20Development/Databases.md) for clinical and biomedical data. These entities and concepts covered in a clinical knowledge base can usually be inferred from their names. For example, UMLS, Unified Medical Language System. It captures about 3 million concepts at different levels. [Mesh](../../Skills/Software%20Development/Mesh.md), medical subject heading which contains about 30,000 entities and useful for indexing. RxNorm based on 100,000 concepts related to clinical drugs and pharmacy concepts. Then Go, gene ontology that contains about six to 7,000 concepts about genes and its function. And the HPO, human phenotype ontology, containing approximately 16,000 concepts
>
> **[1:36](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=96)** about phenotypic abnormalities encountered in human diseases. When you think of clinical entity resolution, think of it as a pipeline from entity recognition and extraction as a pre-task, the availability of established clinical and biomedical knowledge bases and the ability to derive further insight by entity matching and linkage without unique identifiers. To implement clinical entity resolution, there are existing and useful libraries in framework such as scispaCy, a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library for scientific, biomedical and clinical data. It is useful for resolving abbreviation and has an easy to use programming interface to clinical knowledge bases, and Spark NLP for healthcare. There are many uses of clinical entity resolution and one of the goals of a class like this is for you to customize the skills gained for your unique use cases. You can apply clinical entity resolution to ensure only unique candidates are processed, to derive deeper insight from clinical entities, to combine information about a clinical entity from different databases and to make information
>
> **[3:09](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-entity-resolution?u=76281980&t=189)** about clinical entities clearer. And sometimes, clinical named entity resolution is only a pre processing task in your research or production pipeline. We examined what clinical entity resolution is, what knowledge bases are, and their importance in making meaning of clinical named entities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Databases](../../Skills/Software%20Development/Databases.md) (2), [Mesh](../../Skills/Software%20Development/Mesh.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** such as (2), for example (1), think of it as (1)
> **Env Vars:** umls (1), hpo (1), nlp (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** scispacy (1)
> **Speakers:** - [instructor] (1)

#### [Medical abbreviation resolution with scispaCy](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=0)** - We will explore how to detect and resolve abbreviations in clinical narratives using scispaCy. The sample text are case reports and they can be found here. First, we install scispaCy in two [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) models. Then we input necessary models like the abbreviation detector from scispaCy dot abbreviation. Next, we save the sample data snippets into variables called case report one and case reports two. Now we write the simple Python function named show medical abbreviation that takes a scispaCy model and text documents and returns a list of unique abbreviations and their resolution. Each line of coding, the function is clear on what it does. Now we go ahead to call the show medical abbreviation with the BIONLPDCG model and case report one. The code output is an empty list. This means no abbreviations were detected and resolved in case report one with this model. To see if the empty output is due to the model used, we repeat the above code with the different NER model called BC5CDR. This run also returns an empty list.
>
> **[1:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/medical-abbreviation-resolution-with-scispacy?u=76281980&t=95)** Now we are confident that no abbreviations were detected or resolved. Next, we call the show medical abbreviation function on case reports two with BIONLPDCG. Voila! This time we have a list of about 11 outputs showing their abbreviation detected and their resolution. Some of them are T2DM for type-2 diabetes, CVD for cardiovascular disease, NCD for noncommunicative disease. If we repeat the code, but with another NER model, the output is the same. We work together to detect and resolve abbreviations in our sample text. This is an incredibly useful technique in your work pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** bionlpdcg (2), ner (2), bc5cdr (1), t2dm (1), cvd (1)
> **Code Identifiers:** scispacy (4)
> **CLI Commands:** python (2)
> **Definitions:** is an  (2)
> **Prerequisites:** install (1)
> **Speakers:** - we (1)

#### [Entity linkage and resolution with a biomedical knowledge base](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=0)** - [Instructor] In this exercise, we will work together to resolve clinical entities by linking them to established knowledge bases. We will be leveraging scispaCy linking submodel to connect to the [Mesh](../../Skills/Software%20Development/Mesh.md), HPO, RxNorm, GO, and UMLS biomedical knowledge bases. First, we install scispaCy in the necessary pre-trained models. Then we import the necessary models as shown here. Next, we save our sample data into a variable called entities_dataframe. On inspection, the dataframe shows three columns of Entity, Label, and the named-entity recognition model they were extracted with. In this example, the BioNLP13CG model was used. For ease of comparison, entity resolution tasks will be applied to the entities column. To link with the MeSH knowledge base, first, we specify a general pipeline named mesh_nlp and then specify other parameters, such as resolve_abbreviations. Now that we have a linker object for the MeSH knowledge base, this is then fed into a function called mesh_entity_linker. Now, we apply the mesh_entity_linker
>
> **[1:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=98)** to the Entity column in the entities_dataframe. The output is saved into a new column in the entities_dataframe called mesh_output. Let's see the entities_dataframe. On inspection, we see a new column, with entities resolved and their confidence score. Some of the rows return None, which means those entities are not available in the MeSH knowledge base. We can expand our view by selecting the first entity resolution output. In this case, we have patients with the exact match of "patients" and the confidence score of 0.999, CUI identifier, and the definition as "Individuals participating in the health care system "for the purpose of receiving therapeutic, diagnostic, "and preventive procedures". Then, Mentally Ill Persons with a score of 0.826 and Inpatients with a score of 0.74. These also have the CUId and definitions. We repeat the above step for the HPO knowledge base. If you observe the dataframe, you will notice that only entities that may be related to human phenotypes, such as lymphocytes and electrolytes, add an output with score returned.
>
> **[3:13](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/entity-linkage-and-resolution-with-a-biomedical-knowledge-base?u=76281980&t=193)** As part of the exploration, you can view the view resolution for lymphocytes. Now, let's explore our code with the RxNorm Database. The RxNorm is designed to resolve medication-related entities. We can go ahead and connect to the Gene Ontology knowledge base. This was able to resolve genetic-related entities and even chemicals, such as glutathione. As the final knowledge base, we will connect to the UMLS nodes. This is a large database and may take a while to loading into your workspace. In fact, because I am using the free tier with limited RAM support, I loaded these as a new connection. We have explored different types of biomedical knowledge bases, and we saw in [Real-Time](../../Skills/Database%20Management/Real-Time.md) how they work to resolve clinical entities they were designed to work with. This will guide your decision on the most appropriate knowledge base for your specific use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (4), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=0)** - Clinical text down structured data such as: words, sentences and paragraphs from clinical narratives. And these narratives include patient case notes, family history, and laboratory reports. Depending on the type and capacity of the health system the data can be electronic from electronic health records or handwritten. Now that we've established what clinical text means, what is different about it and why should we pay attention? The most important reason is domain nuances and contextual [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) use, such as the heavy use of notations and abbreviations that would typically not be in normal text. And they are influential in making sense of clinical data. And this is important in designing pipeline in how data pre-processing is done. For example, in normal English task, many times single letters are dropped as part of pre-processing, but I typically will not do that with clinical data because the single letter may be in notation from electrolytes. Think K for potassium. The central principle for text representation including clinical text, is that machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) cannot directly process text documents, so, they expect numerical feature vectors with fixed size rather than the raw text documents with variable length.
>
> **[1:36](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-is-clinical-text-representation?u=76281980&t=96)** And transforming text is usually performed by building language models. These models typically assign probabilities, frequencies or numbers to words, sentences or documents. There are different techniques for text representation and the decision on which to apply, is dependent on practicality, team experience, availability and cost of compute. There is the one-hot encoding, which is based on binary vectors, where presence of docking is represented as one, in all others as zeros. Counts vectors, which is based on watch docking counts and frequency. The most popular hot, the Back of Word and Temp Frequency - Inverse Document Frequency. Then embeddings which encodes context for words, sub words or sentences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - clinical (1)

#### [Clinical text representation using fastText](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=0)** - [Instructor] This notebook is an awesome practice to represent entering custom fast text models on clinical data. The sample data is from this STI treatment guideline. First, we download the sample data into our workspace using the wget command. Then we install fast text and Tika using Peep. Tika is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library to extract text from pdf. Now we go ahead to input the necessary models and sub models. To prepare the sample text data, we firstly downloaded a STI guideline and saving to a variable code raw_text. We then inspect the data type after passing. In this case it's a Python dictionary. We pre process the data further by lowering the case and strip punctuations and then convert it back to string from the list format and strip the punctuations and then convert it back to string from the list format, saved into a variable called STI string. You can view the output of STI string by using pre print and then we write the text into a text file. Since this will be used to train our fast text models. Now we will go ahead to train three unsupervised fast text models
>
> **[1:33](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=93)** at 10, 20 and 50 epochs. The dimension for the three is 300 and we can explore the difference in the performance of this fast text models. The 10 epochs model is saved as STI model 10. Both has a variable and has a bin file. The training time took about two minutes. The 20 epochs is saved as STI model 20, but has a variable and a bin file. The training took about three minutes. The 50 epochs model is saved as STI model 50, but has a variable and a bin file. The training took about seven minutes. The bin files of the three models were then loaded into variables named fast text trained model 10, 20 and 50 respectively. Now we will go ahead to use our model to find the top five most similar words in confidence score to the clinical text supplied. For chlamydia, there was no significant difference in the prediction of the models. All three were able to predict gonorrhea, trachomatis as similar words. For doxycycline, all three models predicted tetracycline and this makes sense because they belong to the same class of antibiotics and can be substituted in practice. Epochs 10 and 20
>
> **[3:08](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=188)** captured context such as milligram and orally. This indicates the dosage strength and the routes of administration. Epochs 20 and 50 captured hundred which is a common presentation of doxycycline. This shows how decisions are made in practice. To decide that an optimal training epoch you try and figure out what works well in your context. Here I intentionally misspelled doxycycline as doxycline. All three models were able to predict doxycycline and tetracycline as similar words. We'll also apply the train fast text models to decide on the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) that does not match in a series. Here we have paracetamol, headache, diarrhea, and dizziness. The three models predicted paracetamol as the odd one out, which is true. It is a medication while the others words as symptoms. For hydrochlorothiazide, doxycycline, tetracycline and azithromycin, the three models predicted hydrochlorothiazide as a mismatch. This is also true as it is a diuretic and other medications in the series are antibiotics. In the doxycycline, tetracycline and azithromycin series,
>
> **[4:43](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-fasttext?u=76281980&t=283)** the models predicted azithromycin as the old one out. This is also true, even though the three medications are antibiotics azithromycin belongs to different subclass. First text models can also be used to compare what similarities with confidence cause. Headache and drowsiness are common symptoms and when compared have very similarity scores with the 10 epochs model score of 0.51. When pain and headache were compared, the 10 epoch model assigned a high similarity score, which I agree with as there is no headache without pain. Of course there can be pain without headache. When discharge and itching were compared, there was similarity detected. While the spellings are dissimilar, the contextual similarity exist. If you think of STIs, they may cause itching and discharge. When discharge and bleeding were compared there was similarity detected. Generally, the 10 epoch model did a good job with the similarity scoring and the performance of the 20 and 50 epoch command, there was overfeeding in their training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=0)** - We will demonstrate how to use the Universal Sentence Encoder for vector representation of clinical text. First, we install [spaCy](../../Skills/Software%20Development/spaCy.md) Universal Sentence Encoder using pip. Our choice of using the spaCy implementation is because of ease of comparing vector similarities. Then, we input spacy_universal_sentence_encoder. Next, we load the portrayed large USC model into variable code model. Now, we go ahead to load our sample clinical text into variables code case_report1 and case_report2. To generate the fixed lens vector representation for the sample text, we paste the raw text into an insta shaded model for both samples and set the outputs into variables called case_report1_vector and case_report2_vector. We can verify the vector lens by assessing their shape using case_report1_vector.vector_shape and case_report2_vector.vector_shape. To compare the contextual similarity between the two documents we do case_report1_vector.similarity(case_report2_vector). This gives an output of 0.228, which is of low similarity score between the two sample case reports. We can play around by comparing parts of the two documents.
>
> **[1:38](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-text-representation-using-universal-sentence-encoder-use?u=76281980&t=98)** Let's compare the first hundred sub vectors which results in the higher score of 0.474. The comparison of the first 200 sub vector has a similarity score of 0.575. The last hundred sub vectors with a score of 0.176. In the last 250 sub vectors with a negative score of -0.002. This gives a picture of our semantic similarity of two documents are calculated with the final score being in aggregation of all the sub parts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [spaCy](../../Skills/Software%20Development/spaCy.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=0)** - [Instructor] Transformers are a type of neural network architecture that are suitable for sequence to sequence or encoder-decoded model task. And one of the concepts that make them stand out from other models is the attention mechanism. Attention mechanism replaces recurrence by focusing on the most important part of sequences. Before transformers, there were different models to solve sequence tasks. This include [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) embedding, such as Word2vec, recurring [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), and context-based embedding, such as ELMo. There are three main types of transformers. Autoregressive, also called decoder, such as GPT, XLNet. Autoencoding, also known as encoding, such as BERT and RoBERTa. And the sequence-to-sequence, such as BART and Pegasus. The central principle of our transformers' warp for data, including clinical texts, is that they are pretrained, learning can be transferred to smaller task, they can be fine tuned to specific task, and they have longer memory compared to recurrent models. There are some [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) specifically trained on clinical empowerment medical related texts, Bio_ClinicalBERT, Clinical-Longformer,
>
> **[1:36](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/what-are-transformers?u=76281980&t=96)** CORe clinical diagnosis prediction, Clinic-dialog-sum-T5, BioBERT, PubMedBERT, Clinical-BigBird, BERT-ClinicalQA, roberta-base-biomedical-clinical. Some libraries and frameworks for working with transformers are Transformers by [Hugging Face](../../Glossary/Service/Hugging%20Face.md), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) Hub, [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md)-Transformers, and project specific repositories on platforms like [GitHub](../../Skills/Software%20Development/GitHub.md). As with other data types, transformers are used in the clinical context for tasks such as treatment outcome prediction, translation of clinical notes to other languages, summarization of clinical narratives, and detection of clinical entities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1)
> **Analogies:** such as (6)
> **Env Vars:** bert (2), gpt (1), bart (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Clinical diagnosis prediction using transformers](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=0)** - [Instructor] The data snippets used there are from the clinical practice in cases in emergency medicine, in the [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) from the organ face [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) library. First we install transformers. Then we input the necessary modules such as auto organizer, auto model for sequence classification, from transformers and touch. Next, we load pretrained tokenizer and classification models for core clinical diagnosis prediction and save them into variables called tokenizer and model. Now we save a sample data into a variable code input. We tokenize the inputs by passing into tokenizer. Then we get the predicted labels by mapping the predicted logic using the ID to label configuration. Running predictions alone shows number, but if we run to predicted labels, it shows what the model thinks the clinical diagnosis is based on the history in the input. For example, this 58 year old male presents to the emergency department with headache and numbness, and from here is suspected to be hemorrhaging or have (indistinct) of hypertension. If we repeat them both for input two, which is a case of a 19 year old female presenting
>
> **[1:37](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-diagnosis-prediction-using-transformers?u=76281980&t=97)** with intermittent chest pain, palpitations, and weakness for two months, who had previously been evaluated at the emergency department one week earlier. The clinical diagnosis prediction model predicts anemia, congestive heart disorder, and maybe a condition related to the artery. For the third input is 60 year old female presented with sudden onset visual disturbance in her right eye. The predictions are related to cerebral disorder, or some type of infection. And finally input four of a 33 year old previously healthy male who presented to the the emergency department for evaluation of transient right-sided facial droop with visual changes. His symptoms began 12 days after falling off a scooter. Imaging revealed an extracranial internal CAD. The transformer model was also able to predict cerebral related diagnosis. By now, you should have a better intuition of how transformers can support clinical diagnosis decisions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** python (1)
> **Env Vars:** cad (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Clinical named entity recognition using transformers](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=0)** - Return [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) can also be used for clinical name data recognition. The sample text is about hypoglycemia. The first step is to install transformers, then input the necessary modules, searches, pipeline, [pandas](../../Skills/Software%20Development/Pandas%20(Software).md), and pretty prints. We then go ahead to share the pipeline with the BES based on case clinical NER model and saving to a variable code NER pipe. This model is portrayed to recognize entities such as; problem, treatment, and test. Now we've passed the sample text into the NER pipe and save the output into a variable code entities list. For a better view we make the entities list into a pandas data frame, and view the first 50 rows. From the output, hypoglycemia takes the first five rows, and was labeled as a problem, which is true. The breaking [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) as seen here typically happens when a pre-trained models do not have the exact representation of a word at training time. Another transformer model, which can detect up to one hundred and seven English power medical entities such as; this is disorder, diagnostic procedure, qualitative concepts, therapeutic procedure, science symptom, biological structure
>
> **[1:35](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-named-entity-recognition-using-transformers?u=76281980&t=95)** and clinical event, is the biomedical N.E.R.O. We can implement that by running this code on our sample data and see the output. The model predicted hypoglycemia as this is disorder, 46 year old as age, gastrectomy as therapeutic procedure. These predictions are right and you can see further details such as the confidence score, token stats for each word group identified.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (3), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1)
> **Env Vars:** ner (3), bes (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - return (1)

#### [Clinical word prediction using transformers](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=0)** - [Instructor] We're going to make clinical [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) prediction with Transformers. A use case for this can be an implementing text prediction in electronic health record systems. First, we install Transformers and import pipeline from Transformers. We then install share the pipeline with a few mask pask and specify the portrayed model of choice. This time, biomed NLP, Pubmedbert and save into a variable code a unmasker. Now we apply their masker to the first sentence. A 58 year old male presents to the emergency department with headache, hand numbness and mask. The predictions for mask in descendants cause are dizziness, vomiting, weakness, and nausea. This predicted entities are all possible in real clinical setting. Now let's try it on. We'll present the case of a 19 year old female presenting with intermittent chest pain, palpitations and weakness present for mask. The patient at previously been evaluated at a emergency department one week earlier. Yes. Evaluation months, fever weeks were all predicted as possible Values for MASK and I agree with the model. For the third imputes, the model predicted high
>
> **[1:37](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/clinical-word-prediction-using-transformers?u=76281980&t=97)** and heres which align with the original sentence. Finally, when the model was applied to, we report the case of a tense three year old previously elder male who presented to the mask department for evaluation of transient right sided facial drip with visual changes. His symptoms began 12 days after falling off a scooter. Imaging reviewed an extracranial internal C A D emergency neurology, ophthalmology, neurosurgery and radiology were predicted as possible values for the mask objects and any of the listed that could have been fueled in and be correct. One of the limitations of this particular model is an ability to take on multiple mask value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-ai-nlp-techniques-for-clinical-datasets/next-steps?u=76281980&t=0)** - [Wuraola] It's been a pleasure working through a range of applications of [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) on clinical data. The next steps is to implement those new skills in your work from research to production pipelines. I'm looking forward to your building and sharing. You can connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) and feel free to ask your questions in the community question and answer section. Cheers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [wuraola] (1)


## Instructor

- [Wuraola Oyewusi](../../Instructors/Data%20Science/Wuraola%20Oyewusi.md)

## Path Context

### In [AI for Healthcare- Essentials for Technical Roles](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/AI%20for%20Healthcare-%20Essentials%20for%20Technical%20Roles.md)
← [Hands-on Data Science and AI for Healthcare](../Data%20Science/Hands-on%20Data%20Science%20and%20AI%20for%20Healthcare.md) | **5 of 6** | [Deep Learning Fundamentals for Healthcare](Deep%20Learning%20Fundamentals%20for%20Healthcare.md) →

## Appears In

- [AI for Healthcare- Essentials for Technical Roles](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/AI%20for%20Healthcare-%20Essentials%20for%20Technical%20Roles.md)

---

[↑ Back to top](#)