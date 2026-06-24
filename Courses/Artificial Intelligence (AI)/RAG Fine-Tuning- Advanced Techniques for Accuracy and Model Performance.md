---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance
url: "https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance"
duration_minutes: 54
duration: 54m
level: Advanced
updated: 2/28/2025
learners: 12803
skills:
  - Vector Databases
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHWChs2YOX_7w/learning-public-crop_675_1200/B4EZUAdM1dGgAc-/0/1739469410037?e=2147483647&amp;v=beta&amp;t=9DendI5y4TqLIKYtyEG9GDtObmYzPltUYENNRtVO_vY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)'
prev_courses:
  - '[Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md)'
next_courses:
  - '[GenAIOps Foundations](GenAIOps%20Foundations.md)'
path_nav: '[{"path":"Building Generative AI Skills for Developers","position":6,"total":7,"prev":"Advanced RAG Applications with Vector Databases","next":"GenAIOps Foundations"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/vector-databases
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/RAG%20Fine-Tuning-%20Advanced%20Techniques%20for%20Accuracy%20and%20Model%20Performance.md)

![RAG Fine-Tuning: Advanced Techniques for Accuracy and Model Performance](https://media.licdn.com/dms/image/v2/D4E0DAQHWChs2YOX_7w/learning-public-crop_675_1200/B4EZUAdM1dGgAc-/0/1739469410037?e=2147483647&amp;v=beta&amp;t=9DendI5y4TqLIKYtyEG9GDtObmYzPltUYENNRtVO_vY)

# RAG Fine-Tuning: Advanced Techniques for Accuracy and Model Performance

> Unlock the power of retrieval-augmented generation (RAG) with this hands-on course on RAFT (retrieval-augmented fine-tuning). Learn to integrate fine-tuning with RAG to create domain-specific models that deliver accurate, contextually relevant responses. From understanding core concepts to implementing advanced techniques like RAFT and using tools like Azure AI Studio, this course equips you with 

> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance) | 54m | Advanced | 13K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome to RAG and fine-tuning](#welcome-to-rag-and-fine-tuning)
- [**1. Introduction to RAG**](#1-introduction-to-rag) (3 videos)
  - [Understanding RAG](#understanding-rag)
  - [What is fine-tuning?](#what-is-fine-tuning)
  - [Combining RAG and fine-tuning: RAFT](#combining-rag-and-fine-tuning-raft)
- [**2. RAFT technique**](#2-raft-technique) (3 videos)
  - [Understand RAFT](#understand-raft)
  - [Fine-tuning and inference](#fine-tuning-and-inference)
  - [Results of RAFT](#results-of-raft)
- [**3. Dataset Preparation for RAFT**](#3-dataset-preparation-for-raft) (4 videos)
  - [Preparing the data for RAFT](#preparing-the-data-for-raft)
  - [Q&A pair generation](#qa-pair-generation)
  - [Adding answers to document-question pairs](#adding-answers-to-document-question-pairs)
  - [Generate and save dataset](#generate-and-save-dataset)
- [**4. Fine-Tune the Model in Hugging Face**](#4-fine-tune-the-model-in-hugging-face) (3 videos)
  - [Intro to Hugging Face](#intro-to-hugging-face)
  - [Fine-tuning the Llama 3.2 model on Hugging Face](#fine-tuning-the-llama-32-model-on-hugging-face)
  - [Using the fine-tuned model](#using-the-fine-tuned-model)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with RAG and fine-tuning](#next-steps-with-rag-and-fine-tuning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome to RAG and fine-tuning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=0)** - [Harshit] If you've ever wondered how to make [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) more accurate and reliable for specific domains, you're in the right place. In this course, we'll dive into powerful combinations of retrieval augmented generation and model fine-tuning. You'll learn how to enhance AI models by grounding them in your own data while maintaining their broad capabilities. We'll start with the fundamentals of RAG and fine-tuning. Then explore RAFT, a technique that brings these approaches together. You'll get hands-on experience preparing datasets, implementing the RAFT technique, and using [Hugging Face](../../Glossary/Service/Hugging%20Face.md) to fine-tune these models. Ready to level up your AI skills? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1)
> **Env Vars:** raft (2), rag (1)
> **CLI Commands:** make (1)
> **Speakers:** - [harshit] (1)


### 1. Introduction to RAG

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding RAG](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=0)** - [Instructor] Welcome to our lesson on [retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) or RAG. Now at its core, RAG is an architectural approach that makes AI models smarter by giving them access to external information while they generate responses. Think of it as giving your AI model a research assistant that can look up facts before answering questions. Let's explore why RAG has become such a game changer in AI applications. First of all, RAG adds specific knowledge to your models capabilities, so it ensures your AI stays up-to-date with the latest information. It significantly reduces false information by grounding responses in actual data. Then it enables personalized answers based on your specific content and finally, all of this combines to create a much better customer experience. Now, let's break down how RAG actually works. It starts with a user asking a question and this query goes to the retriever, which acts like a smart search engine. The retrieval searches through your data source to find relevant information and both the original query and the retrieved knowledge are then sent to the language model and finally, the model generates a response based on both its training and the retrieved information.
>
> **[1:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=96)** Of course, like any technology, RAG has its challenges. First, sometimes there is a mismatch, how questions are asked and how information is stored in documents, so complex reasoning task can be difficult to handle through pure retrieval. Domain-specific language can be challenging for the retrieval to understand properly and finally, retrieval speed can also become an issue, especially with large document collections. Understanding these fundamentals of RAG, what it is, why we use it and how it works and its challenges, sets the foundation for learning how to implement it and in the upcoming lesson, we'll understand how to alleviate all of these challenges with RAG.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Retrieval-augmented generation](../../Skills/Artificial%20Intelligence%20(AI)/Retrieval-Augmented%20Generation%20(RAG).md) (1)
> **Env Vars:** rag (8)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### [What is fine-tuning?](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=0)** - [Instructor] In this video, we are going to talk about fine-tuning. Fine-tuning is when we take an AI model that already understands language really well, like a straight A student, and give it extra training in a specific area to make it even better at particular tasks. So fine-tuning customizes pre-trained language models for specific tasks through additional training. Let's break down the main benefits of fine-tuning in simple terms. Just like a doctor who specializes in heart surgery, fine-tune models become experts in specific areas. Imagine training someone to always write emails in your company's style. That's what fine-tuning does for AI responses. Because the model is specifically trained for certain tasks, it can respond more quickly, like an experienced chef who knows exactly where all the ingredients are. You get more reliable and predictable responses like having a trusted employee who always follows your guidelines perfectly. So how fine-tuning works? Let's go through how this actually happens. It's like a three step learning journey. First, we start with a model that has already learned from a huge amount of general information, like someone who has read thousands of books on various topics. Then we take a specific documents
>
> **[1:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=94)** from our field of interest, maybe medical textbooks if we are creating a healthcare AI model. Finally, we carefully train the model on the specialized information, helping it become an expert in that particular domain. Of course, fine-tuning isn't without its challenges. Here are a few that we have to keep in mind. Just like medical textbooks need regular updates. Fine-tuned models need to stay current with new information in their field. There's only so much specialized information we can add, like trying to stuff too many books into a backpack. Fine-tuning requires powerful computers and can be expensive. Similar to how specialized training programs need dedicated resources. These models need regular checkups and updates to make sure they're still performing at their best. So after going through the challenges and limitations of both RAG systems and fine-tuning, researchers wanted to find a way to get the best of both worlds, and that is where they introduced RAFT, Retrieval Augmented Fine-Tuning. Let's understand that in our next lesson.

> [!info]- Semantic Content
>
> **Analogies:** just like (2), imagine (1), it's like (1), similar to (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** rag (1), raft (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Combining RAG and fine-tuning: RAFT](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=0)** - [Instructor] Researchers have overcome the limitation of both RAG and Fine-Tuning with this new method called RAFT, RAFT or Retrieval Augmented [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md), combines the best aspects of RAG, and fine tuning into a single powerful approach. It's like teaching an AI to both access a library, and become an expert in using it. So RAFT is a hybrid superhero that combines the strengths of both RAG and fine-tuning while overcoming their individual weaknesses. Let's break down how these three approaches compare. First, let's talk about accuracy and responses. RAG has high potential accuracy since it can access and retrieve relevant information directly from source documents. Fine-tuning on the other hand, has variable accuracy that can be inconsistent. While it can be good for specific domains it was trained on, it may struggle with new information or variations not seen during training. RAFT maintains high and consistent accuracy by combining the benefits of both approaches. It can effectively use retrieved information like RAG while maintaining the specialized knowledge from fine-tuning. Next, let's look at adaptability. RAG shines here with great adaptability, you can easily update its knowledge base.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=95)** Fine-tuning struggles with adaptability because you need to retrain the entire model to add new information. RAFT successfully preserves. RAG adaptability, letting you update information without a complete retrain. And finally, let's examine specialization. So RAG tends to be generic, often giving broad general purpose responses. Fine-tuning on the other hand, excels at specialization, providing focused domain-specific answers, which it was trained on. RAFT maintains this specialization advantage, keeping the expert level knowledge while staying flexible. Let's see how RAFT works. So RAFT works in three main stages. First, we prepare specialized training data that includes both relevant and irrelevant documents. Then we fine tune the model to learn from this data. And finally, during use, the model applies its learned expertise to new questions. In the next chapter, we'll dive deeper into each of these three stages to deeply understand how a RAFT system works to overcome the limitations of both RAG and fine-tuning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (2)
> **Env Vars:** rag (9), raft (9)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### 2. RAFT technique

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand RAFT](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=0)** - [Instructor] It's time to understand how retrieval-augmented fine-tuning works to overcome the limitations of RAG and fine-tuning. Let's break down RAFT simple terms. Imagine you are teaching a student not just to memorize facts, but to effectively use their textbook during an open book exam. RAFT is exactly that. It is a training technique that teaches language models how to work specifically in open-book scenarios, handle specialized domain knowledge effectively, and use reference documents intelligently while answering questions. Now let's look at how RAFT actually works. So this process is quite interesting. We start with questions from our specialized domain. We gather two types of documents, domain-specific documents that contain the actual answers, also called oracle documents, and then we have distractor documents that might be related, but do not have the answers to those questions. Then we have a retrieval that helps in managing these documents. The LLM then processes all of this information. The training process teaches the model to identify and utilize the relevant information for generating chain-of-thought answers, incorporating step-by-step reasoning and citations from the source documents.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=95)** Now the output here is not just an answer, but includes a chain-of-thought explanation showing how it reached that conclusion. So here's where RAFT gets really clever in its training approach, the training dataset composition. For some questions, let's say P percent of them, we give the model both the correct documents, which we call oracle documents, and some distractor documents. This teaches the model how to find the right information among the noise. For the remaining questions, which is one minus P percent, we only provide distractor documents. This is more like traditional fine-tuning. It teaches the model to be honest when it cannot find the answer in the documents. So now that we have understood how to prepare the training dataset, the next step is to understand how the fine-tuning and inference happens in a RAFT fine-tuned model.

> [!info]- Semantic Content
>
> **Env Vars:** raft (5), rag (1), llm (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Fine-tuning and inference](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=0)** - [Instructor] Now, let's explore the fine-tuning process. We start with our carefully prepared training data, including questions and document sets, which are structured into clear reasoning steps. Next, we use [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) to train the model. During training, the model learns to identify and prioritize relevant information from Oracle documents while ignoring the distractor documents, and it's trained to generate chain-of-thought style answers, learning to reason step by step, and cite relevant source documents. The model gradually adapts to understand domain-specific patterns. So throughout the process, the model learns to generate detailed and step-by-step answers. RAFT has four crucial training objectives. Like a skilled researcher, the model learns to spot the exact information needed to answer the question. This is crucial. The model learns not to be misled by any sort of irrelevant information, and by learning from distractor documents, it manages to hone that particular skill, so just like a good student learns to focus on what matters and ignores what does not. Beyond just answering, the model learns to explain its thinking as well,
>
> **[1:33](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=93)** so it provides clear, logical chain of thought in its responses. Lastly, the model learns to give reliable, consistent answers so it stays true to the information in the documents without making things up. Let's look at how it all comes together at the inference stage. It starts with a question. A user asks something within the specialized domain. Then we have the system that automatically retrieves a relevant document, so it pulls the top-K most relevant documents. The fine-tuned model reviews all of the retrieved documents. It applies what it learned during the training to find the use of the right information, and finally, it produces a well-reasoned accurate response. So the answer includes both the conclusion and the thinking process. The streamlined process combines the speed of fine-tuning with accuracy of retrieval-based approaches. So in the next lesson, we are going to look at how RAFT results looked like when it was trained on different types of datasets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1)
> **Env Vars:** raft (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Results of RAFT](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=0)** - [Instructor] Let's look at how RAFT performed over different types of data sets. To showcase RAFT's efficacy, the researchers conducted experiments using a diverse set of data sets representing different domains. The first one was from general knowledge. They used natural questions, TriviaQA, and HotPotQA, all based on Wikipedia and covering general knowledge topics. Then we had software documentation. To test RAFT's performance in a specialized domain. The researchers chose [Hugging Face](../../Glossary/Service/Hugging%20Face.md), Torch Hub, and [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) Hub datasets from the API bench. Biomedical use cases, the PubMedQA dataset focusing on the biomedical research question and answering allowed the evaluation of RAFT in answering medical and biological questions using given documents. The team used several strong baselines to ensure a fair comparison. The RAFT model's performance was compared against several baseline models and fine-tuning techniques to demonstrate its superiority. Llama2-7B-chat with 0-shot prompting, so this instruction fine-tuned model commonly used for question and answering tasks they relied solely on pre-trained knowledge and instructions without any access to reference documents. Then they also had Llama2-7B-chat with RAG capabilities, domain-specific fine-tuning with 0-shot prompting,
>
> **[1:37](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=97)** so this baseline used the standard supervised fine-tuning approach without providing any documents in context. Then we have domain-specific fine-tuning with RAG capabilities, so the combined DSF with RAG approach, allowing the model to refer to external documents for knowledge it might not have acquired during fine-tuning. And lastly, they had GPT-3.5, which is a large model, along with RAG. So as a reference point, the researchers also compared RAFT against GPT-3.5, which is a large model equipped with RAG. Now, the table from the research paper on RAFT summarizes the result of the experiment. Across all the data sets, RAFT consistently outperformed the baseline models. This demonstrates RAFT's effectiveness in extracting and utilizing relevant information from domain-specific documents, while mitigating the negative influence of irrelevant, distractor documents. Note that RAFT showed significant improvements, particularly on the HotPotQA dataset, showcasing its effectiveness in multi-hop reasoning. Then RAFT achieved the most substantial gains on the Torch Hub dataset, demonstrating its ability to effectively process and understand [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md). On biomedical dataset,
>
> **[3:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=189)** while the gains were less pronounced on the PubMedQA dataset, RAFT still demonstrated superior performance. The research also included ablation studies to understand the impact of key components of RAFT. The use of distractor documents during training proved crucial for the model's robustness, enhancing its ability to discern irrelevant information and maintain consistent performance, despite variations in the number of documents presented at test time. Now, in the next chapter, we'll start implementing all these different phases that we have learned in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1), [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md) (1)
> **Env Vars:** raft (13), rag (5), gpt (2), api (1), dsf (1)
> **Versions:** 3.5 (2)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Dataset Preparation for RAFT

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing the data for RAFT](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=0)** - [Instructor] Let's put our understanding of RAFT into practice. In this chapter, we'll focus on the initial setup of RAFT, which is preparing the training dataset. Whether you are working with medical documents, legal takes, or [Technical Documentation](../../Skills/Software%20Development/Technical%20Documentation.md), this process will help you create better domain aware AI models. We will be [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) the model to become an expert in the finance domain where we have chosen a PDF document containing details on the Indian financial system. The document contains 259 pages and in order to prepare the training data, we need to first break this big file into smaller document chunks and that is what we learn in this lesson. Let's start by installing all the required packages over here. We are going to be using [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md), which is our main framework for working with LLMs. We are installing langchain community for some community contributed components, langchain OpenAI to integrate OpenAI models and then pyPDF to handle PDF documents. Let's hit run and you will have this cell running. All the requirements are already satisfied. I have already installed all of these packages. Now, the next step over here is to import all the required packages. So I've imported random package. I've imported document from langchain.schema by PDF loader from langchain community.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=95)** So this will help us in handling PDF documents, loading all of them and then further splitting them using recursive character text splitter from the text splitter module of langchain. Then we have chat OpenAI to use OpenAI's [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). And finally, from [Google](../../Glossary/Service/Google.md) Colab, we are importing user data. This is how we will be storing our secret. That means OpenAI's API keys securely within the Colab interface itself. In order to securely save your [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) key, you have Colab secrets. So you just have to click on this key icon from the left pane and here you can click on add new secret. You can provide the name, here, I provided OpenAI API key for example, and then your OpenAI API key is going to be added in the value field. You have to toggle this button to make it accessible within your code in the Colab notebook. So I'll hit run here to import all the required libraries. And to securely access your OpenAI API key from Google Colab Secrets, you would use the user data module, userdata.get, and then the name of your key, which is OpenAI API Key, hit run. You can either hit run by clicking on this play button or you can hit shift plus enter on your keyboard.
>
> **[3:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=189)** So here I'm just showcasing the OpenAI API key. This will be revoked, so do not try to copy this. Moving on to setting up the large language model. Here I have Chat OpenAI class from langchain and we are using [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md).0 mini as our model and OpenAI API key, as you can see, is already loaded within this variable from Google Colab Secrets. So we have initialized our OpenAI chat model. This is the next step. This is the main functionality here, loading and chunking documents. So we have written a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) function here, which we'll process our code document that takes in the path of the PDF file. Now this file is currently not present within our Colab environment. So click on the files icon from the left pane and click on upload. From this upload you can select the document, Indian financial system. So I have uploaded the document here within the Colab environment to make it accessible in our code. Now how this function works, let's look at that. Load a PDF file and chunk it semantically using langchain. So this function is going to take the PDF file and it takes it through the pyPDF loader from langchain. So this handles the PDF loading. Then we have loader.load. This is going to further put our document
>
> **[4:43](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=283)** into the RAM for processing. The recursive character takes splitter. This creates document chunks with chunk size of thousand that is each chunk is 3000 characters. Chunk overlap, 500 character overlap between chunks. This overlap prevents breaking up related information. The length function is the python's LEN function, and there is no separator required. So is_separator_regx is set to false. That's it. And then finally we'll use the split documents method and provide all the pages that we have loaded using the loaded.load method. Run this and you will have all the chunks created. So we have defined this function. After the definition, we will invoke it. Now to invoke that function, we have provided the path, Indian_financial_system.pdf, run this. So all of your chunks are going to be created using that function. The next step here, once all of the chunks are generated, we'll explore what each of those chunks actually contain. So here I printing total number of chunks that I created from that 259 pages document. Then we have print information about each chunk. So chunk number, chunk length, the [Metadata](../../Skills/Web%20Development/Metadata.md), which is present within each chunk. And there are some separators that I've added. So I have limited the output just
>
> **[6:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=377)** to explore the chunks to just six. So let's run this and here you go. We have chunk number, the content length, metadata that it contains. So chunk 1, 2, 3, 4, 5, 6, and we have like seven chunks that we are showcasing. The metadata contains source, page. And in order to look at what each chunk actually looks like, here's the code for that. We have picked up some random index to showcase some random chunk here. So this is what a chunk actually looks like. So it's a document chunk, as you can see a document object. The metadata contains source page number, and then all of the content within that chunk. So we have successfully processed and created chunks of all the 259 pages within our PDF file on the Indian financial system. We have, if you see, 258 chunks created out of that document, the next step will be to process and generate question and answer pairs from all of these chunks. So let's head over to the next lesson to learn how to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (9), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (7), [Metadata](../../Skills/Web%20Development/Metadata.md) (4), [Google](../../Glossary/Service/Google.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **Env Vars:** pdf (9), api (8), raft (2), gpt (1), ram (1)
> **Tools:** colab (8)
> **UI Navigation:** click on (4), toggle (1), select the (1)
> **CLI Commands:** make (2), python (2)
> **Code Identifiers:** pypdf (2), is_separator_regx (1)
> **Versions:** 4.0 (1)
> **Analogies:** for example (1)

#### [Q&A pair generation](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=0)** - The next step in the training [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) process is to generate questions for each document. Here, we'll focus on two main tasks. First, generating relevant questions from each document chunk. And second, creating document question pairs along with distractor documents. Let's break down our first function, which is generate questions for chunk. Here, we declare our function that takes three inputs. Chunk, which is our text from the chunk, model [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) mini. Number of questions, that is how many questions we want. So by default this is set to three. We create a prompt template using chat prompt template from [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md). The prompt here says generate number of questions, that is three, that can be answered based on the following text and here we insert the text from the chunk. Questions should be separated by semicolon character so that we can process and extract individual questions. We format our prompt with the number of questions and chunk, send it to our model to get the response and we clean up the response and return all of our questions. So the output is basically a clean list of questions like what are the key components of the [Banking](../../Skills/Software%20Development/Banking.md) system? How do regulatory requirements affect banks? So all the domain specific questions.
>
> **[1:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=94)** The next function that we have is generate questions for document. Now this is going to process all the document chunks that we have. The function takes all our document chunks and generates questions for each one. Breaking this down, we first of all, set up our OpenAI large language model, GPT-4o mini. We have defined all questions list. So this is an empty list where we'll keep adding all the questions. We are looping through each chunk to extract the text, generate questions, store them in our list and return all the questions grouped by chunks. When you run this, it will take some time to process all the 258 chunks. So that's why I have run all of this already. So you can see it is currently running and it'll keep on printing the number of chunk that it is generating questions for. Once the process is finished, we get a nested list where each inner list contains questions for one document chunk. So here you'll have to wait for some time to get all the 258 chunks processed. Alright, great. So you can see the output here. Questions for chunk one, we have three questions, then for chunk two, chunk three, chunk four, five, six.
>
> **[3:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=187)** So I have limited the output here to just seven chunks and this is how all the chunks have been structured in the output of the function. The next task that we have is to create pairs by adding distractor documents in the chunk pairs itself. So here in our pairing function, it matches the questions with their correct documents and adds some incorrect ones for training. So looking at the create document question pairs function here we are looping through each chunk and its questions. And for each question we store the correct document. We find random other documents as distractors, and we create a dictionary with all the pieces, add each pair to our final list. And the output is basically a dictionary containing a question, the correct document, and several distractor documents. So when we run this and we get the output in this format, the question with the generated question, the golden document, the correct document chunk that answers the question and distractor documents, which is wrong document chunk that do not answer the question. When we invoke this function, we have the document question pairs created
>
> **[4:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=281)** and in order to display some of the examples of these document question pairs has what the output looks like. So document question pair three. This is the question. Then we have the golden document text here along with some distractor documents like this. And with this, we have accomplished the two tasks that we had for this lesson. We have generated document question pairs along with distractor documents. The next step is to add answers to these questions and that's what we'll learn in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (2), [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) (1), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1), [Banking](../../Skills/Software%20Development/Banking.md) (1)
> **Env Vars:** gpt (2)
> **Exercise Files:** template (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### [Adding answers to document-question pairs](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=0)** - [Instructor] Now that we have our documents shown and questions generated, we'll complete our training data by adding answers to it. We'll use [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) mini to generate high-quality answers and use parallel processing to speed things up. Let's look at how we generate answers for each question-document pair. And our main function here is the generate_answer function. This function takes a document-question pair and returns a complete triplet with an answer based on the document content. So, to break it down, we have imported ThreadPoolExecutor for parallel processing. We use SystemMessage and HumanMessage from [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) for structured outputs. The function carefully extracts context and questions from our pairs. We format a detailed prompt that guides the model to give structured answers. So the magic happens in our prompt structure. We ask for step-by-step reasoning, context-based evidence, and a clearly tagged final answer. Our prompt is carefully designed to get consistent, high-quality answers. We include both question and context. We ask for step-by-step reasoning. We request evidence from the context using double hashtag markers. We require a final answer with an answer tag. And then we include instructions
>
> **[1:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=96)** to only use provided context. This structure helps us get well-reasoned, evidence-based answers that are perfect for training. To handle large datasets efficiently, we use parallel processing. So we have this function defined. This is going to return a dictionary containing original question, golden document, distractor document, and then the generated answer as well added to the triplet itself. But this task is huge, and that's why we are going to leverage parallel processing. The next function is generate_triplets_in_parallel. The function processes multiple question-document pairs simultaneously, making our pipeline much faster. Here, the key components are ThreadPoolExecutor, that manages multiple threads. We process answers concurrently. We track progress with a counter. And finally, collect results as they complete. This parallel approach can be five to 10 times faster than processing one at a time. Now, when you run this for all the 774 pairs that we had generated earlier, all of those are going to get processed. All of these will get a high-level, correct answer from our financial document.
>
> **[3:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=189)** And to look at each of these triplets and explore the output format, we have this for loop, where we are printing the triplet, the question, the answer, golden document, as well as the distractor document. When you run this, I have run this already for you. So you see the triplet 1, along with the question at the top. Then we have the answer from our large language model. The golden document that it referred to. And finally, the distractor documents as well. So, our system handles several important cases, questions that cannot be answered from context, API rate limiting, failed requests with automatic retry, and progress tracking for long runs. With this, we have finished off all the main phases of training dataset generation process. In the next lesson, we'll see how to explore this dataset and export it so that it can further be added to our fine-tuning jobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1)
> **Code Identifiers:** generate_answer (1), generate_triplets_in_parallel (1)
> **Env Vars:** gpt (1), api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Generate and save dataset](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=0)** - [Instructor] Our data is ready, but we need to change its format so we can use it for training our model. We'll transform our data containing question, answer, golden documents and distracted documents into a format that is ready for model training. We'll create both a CSV format for easy analysis and a [JSON](../../Skills/Web%20Development/JSON.md) Lines format, which is required for [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) the model. Let's first look at creating a structured data frame format. Here we are converting our triplets data. Triplets basically means we have question, answer, and documents. Documents then further contain golden documents and distractor documents. So we are converting it into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) data frame by first creating an empty list called data. For each triplet, we structure it into a dictionary with question string, answer string, golden document string, and lastly, concatenated distractor document string. We converted into a pandas data frame, and if you want to see the first five records in this data frame, you can use the dot head method. Here we have the first five records with four columns defined in our code above. If you want to further save this file, you can use the .21 CSV method, provide the name, and you'll have the file saved within your CoLab environment. If you want to look at the information present in the data frame, get all the meta information
>
> **[1:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=96)** about the structure of the data, number of records, columns, non-null values, data types, so you can use the.info method. So this makes it easy to analyze the data present in our data frame. Now for the most important part, we need to create the JSON Lines format, which is required for fine tuning our model. The JSON Lines is a specific format where each line is a valid JSON object. Which is perfect for large data sets and streaming. The key components of a JSON Lines structure that one has to keep in mind is the system message, which is defining the model's role, the user message, which contains question and documents, assistant message with the answer, and each conversation as a complete JSON object. So let's see how we get all of these components right. First, we define our system message. The content is answer the question given by the user on the basis of only relevant content from the context documents provided. For each row in our data frame, we ID over it to get user content so we format user content with markdown. Then we structure the assistant response, we create complete conversation object, and finally we write everything line by line
>
> **[3:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=190)** to a JSON Lines file. So when we run the cell, we have our JSON Lines file in this format, saved in our CoLab environment, output.jsonl. Now this formatting is crucial. Questions are clearly marked with question, documents are properly separated, conversations maintain a clear structure. And that's it. Congratulations. You have your training data in both CSV and JSON Lines format. It's time for us to start fine tuning our model. We'll be using [Hugging Face](../../Glossary/Service/Hugging%20Face.md) and we'll learn all about that in our next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (9), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (3), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1)
> **Env Vars:** json (9), csv (3)
> **Definitions:** is a  (2), basically means (1)
> **Tools:** colab (2)
> **Cross-References:** next chapter (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Fine-Tune the Model in Hugging Face

[↑ Back to Table of Contents](#table-of-contents)

#### [Intro to Hugging Face](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=0)** - [Instructor] Now that we have our dataset ready, it's time to fine-tune our model. And to do that, we are going to be using [Hugging Face](../../Glossary/Service/Hugging%20Face.md). You can use other cloud service provider that offer fine-tuning capabilities like AWS or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). But for our use case, we'll be using Hugging Face. And before we get down to fine-tuning the model, let's first understand what Hugging Face is all about and what all you can achieve using this platform. So think of Hugging Face as the [GitHub](../../Skills/Software%20Development/GitHub.md) for AI, where AI developers share, discover, and collaborate on machine learning models and datasets. So just like how software developers use GitHub to share code, AI researchers and developers use Hugging Face to share their AI models and datasets. The most important feature that they have is this model hub. You can find models for specific tasks like text generation, translation, image recognition, image segmentation, image classification, question answering, feature extraction, text to audio. So you can use popular models like Bard, GPT, and [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md). You can download them, you can fine-tune the existing models as per your use cases. Then they have datasets. You have access to curated datasets for training. You can find domain-specific [Data Collection](../../Skills/Data%20Science/Data%20Collection.md), you can use standardized data loading tools that they offer, and you can share and version your datasets as well.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=95)** Further, in order to showcase your applications and demos, they have Spaces. So Hugging Face Spaces is basically a platform, a space where you can create interactive AI demos. So you can share working applications, you can test models in [Real-Time](../../Skills/Database%20Management/Real-Time.md), collaborate with others on projects, and deploy your models along with simple UI. They also have a learning section. So if you go onto their learning page, there are NLP course, [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) course, audio course, ML for games course. So you can learn a lot of different types of machine learning techniques on this platform. They also offer a bunch of development tools. So in the Documentation section, you'll find the most common tools that they have to offer. For example, Transformers Library. For easy model use, datasets library for data handling, accelerate library for distributed training, so on and so forth. Further, they have cloud integration with AWS Azure. So depending upon which cloud service provider you want to use, where you have your infrastructure already. So you have the ability to customize your solution as per your requirements. So this is the platform that we will be using to fine-tune our model. We'll be working with Llama 3.2-3B model. Make sure that you are signed in,
>
> **[3:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=191)** you have a Hugging Face account and you already are logged in. In the next lesson, we'll learn how to fine-tune Llama-3.2-3B model using our generated dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (7), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **CLI Commands:** find (3), aws (2), make (1)
> **Env Vars:** aws (2), gpt (1), nlp (1)
> **Versions:** 3.2 (2)
> **Tools:** github (2)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)

#### [Fine-tuning the Llama 3.2 model on Hugging Face](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=0)** - [Instructor] It's time to fine-tune our large language model using our prepared data set. We'll be fine-tuning [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) 3.2 3 billion model. So let's quickly search for that model on [Hugging Face](../../Glossary/Service/Hugging%20Face.md). And the third one that you see, Llama 3.2 3 billion Instruct, this is the model that we will be fine-tuning. Clicking on it opens up the model card where you'll find all the information about this model. Important thing is that you will not be able to use this model unless you have requested access to use that means to download or to fine-tune this model. So when you'll open this page up for the first time, it'll ask you to first of all log in or sign up. Once you log in, you'll have to request access to this model. It takes around 10 minutes to get your request approved by the Meta team. And once that is done, you'll be able to fine-tune the model or use the model. On the top right, you have the train button. So clicking on this train dropdown, it gives you three options to fine-tune your model: Amazon SageMaker, NVIDIA Cloud, or AutoTrain. In our example, we'll be using AutoTrain to fine-tune this model without writing any code. So click on AutoTrain. It'll ask you to create a new project. So create a new AutoTrain project. This will open up a new window for you. You can specify the space name.
>
> **[1:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=94)** So you can call it, for example, test raft llama 3.2 or whatever, or you can leave it as it is. And then a short description, let's say, testing raft on llama 3.2. That's the description. Then select the space SDK will set it to Docker and choose a Docker template. Here we have AutoTrain, so nothing to change here. Space [Hardware](../../Topics/Hardware.md). Now, space hardware is going to be very important. 3 billion model is small, but still it needs a couple of GBs of RAM. So we'll need a decent GPU. So the one that works best for our use case is NVIDIA A10G small, which costs $1 per hour. So in order to pay for this, you'll have to first make sure that a payment method is added to your Hugging Face account. Go to your profile. From your profile, click on settings. Within the settings you have billing section. Here in the billing section, you have overview payment information pro subscription. In the payment information, you should have your card added here. So you have to add your payment method in order to fine-tune your model or to select a paid hardware. So we'll use NVIDIA A10G small here. Pause on failure, this parameter needs to be set to zero because that will provide detailed logs to us
>
> **[3:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=188)** in case our fine-tuning job fails for some reason. We'll set the visibility of this space to private. That means we want to keep it private and not set to public visibility. License, we do not need to attach any licenses. This project is private. Create the space. That's it, I already have this. So let's head over to the space. It'll set up the container for us. And that's it. Here, you'll have to specify the project name first. So you can specify the name of your model. So whatever it is, let's say test raft llama. You can select the base model. The base model in our case is Llama 3.2 3 billion Instruct. You have to upload your training file. That is your output.[JSON](../../Skills/Web%20Development/JSON.md) lines format. Number of epochs should be set to one. All the other fine-tuning parameters that you see here need not be changed. Just keep them as it is. You do not need to change any of these. And that's it. You simply need to click on start training. I already have a job running here. You'll see the start training button. Once you click on that, you'll have all your logs running in this particular logs monitoring section. So you can see the model
>
> **[4:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=282)** that I am fine-tuning is currently at 27%. So you'll see all of these logs in this model right here. Once your model is fine-tuned, you will see it listed within your profile itself. So for example, I have all of these different spaces and different models here. Now, the next step would be to learn how to use these models and that's what we are going to learn in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (6), [Hardware](../../Topics/Hardware.md) (3), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** nvidia (3), a10g (2), sdk (1), ram (1), gpu (1)
> **UI Navigation:** click on (4), select the (2), dropdown (1), go to (1)
> **Versions:** 3.2 (5)
> **CLI Commands:** docker (2), find (1), make (1)
> **Analogies:** for example (2)
> **File Paths:** output.json (1)
> **Cross-References:** in the next (1)

#### [Using the fine-tuned model](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=0)** - [Instructor] Congratulations, you have your model fine-tuned. We have raft-[LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md)-3B, this is the model that I have fine-tuned, this is the path to the fine-tuned model, and this page contains all the details. After the fine-tuning job is completed, the model is going to show up within your profile under the models section. So I have raft-llama-3B here. And in order to use this, we'll use [Hugging Face](../../Glossary/Service/Hugging%20Face.md)'s powerful tools, and we'll learn how to generate responses using this code that they have provided. Now, before we start learning how to use this model, we'll have to make sure that we authenticate ourselves within the CoLab environment. In order to authenticate yourself, since this is a private model repository, you'll need to create an access token. In order to generate that access token, you'll have to go to settings within your profile, go to access [Tokens](../../Skills/Web%20Development/Tokens.md), and here you'll create new token using this button on the top right. Once you have created a new token, copy that token and pass it on to Hugging Face hub login functionality. Once the login process is completed, that's where the main working horses from the transformers library
>
> **[1:32](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=92)** are going to be imported and used. So here, once the authentication is done, we import the necessary tools, we load the fine-tuned models. So here I have set the model path, which is dswh/raft-llama-3B. Then we are using the tokenizer to load the model as well as the tokenizer. So with the auto tokenizer, we are loading the tokens from pre-trained model path from the fine-tuned model. I've passed the model path here. And then we are loading the model using auto model for casual LM from pre-trained passing on the model path. Device map auto sets it to automatic handling of GPU or CPU placement. Torch dtype auto means that the model optimizes memory usage. We have invoked this method in the evaluation mode. So the model is set in the evaluation mode currently. Once you run this, you'll have the model downloaded. It'll take a couple of minutes to get the process done. Once the model is loaded, now, this is where the exciting part is, generating the response. So first, we have formatted the message, the input. This is where you are going to set the question that you're going to ask. Here I've set a specific question,
>
> **[3:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=187)** which is, what is rural financial system? And then we tokenize our input IDs, we generate the response using model.generate method, we pass on the input IDs to CUDA engine. The max number of new tokens is set to 500. You can tweak this number as per your requirements. And finally, we decode the tokens generated by the model, and we print the response. Once the response is printed, you can validate the output quality against any large language model. And this fine-tuned model will always give you better answers which are grounded within your document. So here I've just asked what is rural financial system, and we have a dedicated section on rural financial system within the PDF document that we created our dataset from. And that basically puts a nail in the coffin that we have the raft retrieval augmented [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) technique working for us, which gives us up to date correct answers which are grounded in the details of our documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (3), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (2), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1)
> **Env Vars:** gpu (1), cpu (1), cuda (1), pdf (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** before we start (1), you'll need (1)
> **CLI Commands:** make (1)
> **Tools:** colab (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with RAG and fine-tuning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=0)** - [Instructor] Congratulations, you have completed the course on retrieval-augmented fine-tuning. In this course, you have gone from understanding basic rack to implementing a complete RAFT system, learning how to combine the best of retrieval and fine-tuning approaches. We built a practical pipeline that processes documents, generates smart question-answer pairs, and creates high-quality training data using tools like [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) and [Hugging Face](../../Glossary/Service/Hugging%20Face.md). Finally, we fine-tuned a [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) 3 model on our custom data set and deployed it for real-world use case, giving you the skills to create domain-specific [AI Solutions](../../Skills/Software%20Development/AI%20Solutions.md) that are both accurate and reliable. Now, to continue your journey with fine-tuning, I recommend that you first of all, share your completion certification with your network on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), read the paper on retrieval-augmented fine-tuning, experiment with your own use cases and projects. I would love to hear about your progress and answer questions that you might have. Connect with me on LinkedIn. I've attached my profile link. Subscribe to my YouTube channel. I post videos on how to build with AI. And for more updates from the world of AI, check out my newsletter, which is called High Signal AI. I'll see you in another course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1), [LLaMA](../../Skills/Artificial%20Intelligence%20(AI)/LLaMA.md) (1), [AI Solutions](../../Skills/Software%20Development/AI%20Solutions.md) (1)
> **Env Vars:** raft (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Harshit Tyagi](../../Instructors/Artificial%20Intelligence%20(AI)/Harshit%20Tyagi.md)

## Resources

- Exercise files available

## Skills Covered

- Vector Databases
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)

## Path Context

### In [Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)
← [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) | **6 of 7** | [GenAIOps Foundations](GenAIOps%20Foundations.md) →

## Appears In

- [Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)

## Related Courses

_Courses sharing skills:_

- [Advanced RAG Applications with Vector Databases](Advanced%20RAG%20Applications%20with%20Vector%20Databases.md) — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG), Vector Databases
- [Hands-On AI- RAG using LlamaIndex](Hands-On%20AI-%20RAG%20using%20LlamaIndex.md) — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)](Building%20RAG%20Solutions%20with%20Azure%20AI%20Foundry%20(Formerly%20Azure%20AI%20Studio).md) — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [GraphRAG Essential Training](GraphRAG%20Essential%20Training.md) — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [Vector Databases in Practice- Deep Dive](Vector%20Databases%20in%20Practice-%20Deep%20Dive.md) — Artificial Intelligence (AI), Vector Databases

---

[↑ Back to top](#)