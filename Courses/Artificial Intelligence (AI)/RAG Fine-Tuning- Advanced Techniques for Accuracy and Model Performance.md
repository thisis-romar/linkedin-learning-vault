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
  - '[[Building Generative AI Skills for Developers]]'
prev_courses:
  - '[[Advanced RAG Applications with Vector Databases]]'
next_courses:
  - '[[GenAIOps Foundations]]'
path_nav: '[{"path":"Building Generative AI Skills for Developers","position":6,"total":7,"prev":"Advanced RAG Applications with Vector Databases","next":"GenAIOps Foundations"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/vector-databases
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-21
---

![RAG Fine-Tuning: Advanced Techniques for Accuracy and Model Performance](https://media.licdn.com/dms/image/v2/D4E0DAQHWChs2YOX_7w/learning-public-crop_675_1200/B4EZUAdM1dGgAc-/0/1739469410037?e=2147483647&amp;v=beta&amp;t=9DendI5y4TqLIKYtyEG9GDtObmYzPltUYENNRtVO_vY)

# RAG Fine-Tuning: Advanced Techniques for Accuracy and Model Performance

> Unlock the power of retrieval-augmented generation (RAG) with this hands-on course on RAFT (retrieval-augmented fine-tuning). Learn to integrate fine-tuning with RAG to create domain-specific models that deliver accurate, contextually relevant responses. From understanding core concepts to implementing advanced techniques like RAFT and using tools like Azure AI Studio, this course equips you with 

> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance) | 54m | Advanced | 13K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Harshit Tyagi]]

## Resources

- Exercise files available

## Skills Covered

- Vector Databases
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)

## Table of Contents

### Introduction

#### Welcome to RAG and fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=0)** - [Harshit] If you've ever wondered how to make large language models more accurate and reliable for specific domains, you're in the right place.
>
> **[0:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=9)** In this course, we'll dive into powerful combinations of retrieval augmented generation and model fine-tuning.
>
> **[0:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=17)** You'll learn how to enhance AI models by grounding them in your own data while maintaining their broad capabilities.
>
> **[0:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=26)** We'll start with the fundamentals of RAG and fine-tuning.
>
> **[0:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=30)** Then explore RAFT, a technique that brings these approaches together.
>
> **[0:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=36)** You'll get hands-on experience preparing datasets, implementing the RAFT technique, and using Hugging Face to fine-tune these models.
>
> **[0:46](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=46)** Ready to level up your AI skills?
>
> **[0:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/welcome-to-rag-and-finetuning?u=76281980&t=49)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** raft (2), rag (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [harshit] (1)


### 1. Introduction to RAG

#### Understanding RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=0)** - [Instructor] Welcome to our lesson on retrieval-augmented generation or RAG.
>
> **[0:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=6)** Now at its core, RAG is an architectural approach that makes AI models smarter by giving them access to external information while they generate responses.
>
> **[0:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=18)** Think of it as giving your AI model a research assistant that can look up facts before answering questions.
>
> **[0:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=25)** Let's explore why RAG has become such a game changer in AI applications.
>
> **[0:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=31)** First of all, RAG adds specific knowledge to your models capabilities, so it ensures your AI stays up-to-date with the latest information.
>
> **[0:43](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=43)** It significantly reduces false information by grounding responses in actual data.
>
> **[0:50](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=50)** Then it enables personalized answers based on your specific content and finally, all of this combines to create a much better customer experience.
>
> **[1:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=62)** Now, let's break down how RAG actually works.
>
> **[1:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=67)** It starts with a user asking a question and this query goes to the retriever, which acts like a smart search engine.
>
> **[1:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=76)** The retrieval searches through your data source to find relevant information and both the original query and the retrieved knowledge are then sent to the language model and finally, the model generates a response based on both its training and the retrieved information.
>
> **[1:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=96)** Of course, like any technology, RAG has its challenges.
>
> **[1:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=101)** First, sometimes there is a mismatch, how questions are asked and how information is stored in documents, so complex reasoning task can be difficult to handle through pure retrieval.
>
> **[1:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=116)** Domain-specific language can be challenging for the retrieval to understand properly and finally, retrieval speed can also become an issue, especially with large document collections.
>
> **[2:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understanding-rag?u=76281980&t=130)** Understanding these fundamentals of RAG, what it is, why we use it and how it works and its challenges, sets the foundation for learning how to implement it and in the upcoming lesson, we'll understand how to alleviate all of these challenges with RAG.

> [!info]- Semantic Content
>
> **Env Vars:** rag (8)
> **Code Keywords:** finally, (3), let (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### What is fine-tuning?
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=0)** - [Instructor] In this video, we are going to talk about fine-tuning.
>
> **[0:03](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=3)** Fine-tuning is when we take an AI model that already understands language really well, like a straight A student, and give it extra training in a specific area to make it even better at particular tasks.
>
> **[0:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=18)** So fine-tuning customizes pre-trained language models for specific tasks through additional training.
>
> **[0:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=27)** Let's break down the main benefits of fine-tuning in simple terms.
>
> **[0:32](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=32)** Just like a doctor who specializes in heart surgery, fine-tune models become experts in specific areas.
>
> **[0:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=40)** Imagine training someone to always write emails in your company's style.
>
> **[0:46](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=46)** That's what fine-tuning does for AI responses.
>
> **[0:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=49)** Because the model is specifically trained for certain tasks, it can respond more quickly, like an experienced chef who knows exactly where all the ingredients are.
>
> **[1:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=62)** You get more reliable and predictable responses like having a trusted employee who always follows your guidelines perfectly.
>
> **[1:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=70)** So how fine-tuning works?
>
> **[1:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=73)** Let's go through how this actually happens.
>
> **[1:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=76)** It's like a three step learning journey.
>
> **[1:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=79)** First, we start with a model that has already learned from a huge amount of general information, like someone who has read thousands of books on various topics.
>
> **[1:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=90)** Then we take a specific documents from our field of interest, maybe medical textbooks if we are creating a healthcare AI model.
>
> **[1:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=102)** Finally, we carefully train the model on the specialized information, helping it become an expert in that particular domain.
>
> **[1:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=112)** Of course, fine-tuning isn't without its challenges.
>
> **[1:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=116)** Here are a few that we have to keep in mind.
>
> **[2:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=120)** Just like medical textbooks need regular updates.
>
> **[2:04](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=124)** Fine-tuned models need to stay current with new information in their field.
>
> **[2:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=130)** There's only so much specialized information we can add, like trying to stuff too many books into a backpack.
>
> **[2:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=139)** Fine-tuning requires powerful computers and can be expensive.
>
> **[2:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=144)** Similar to how specialized training programs need dedicated resources.
>
> **[2:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=150)** These models need regular checkups and updates to make sure they're still performing at their best.
>
> **[2:38](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=158)** So after going through the challenges and limitations of both RAG systems and fine-tuning, researchers wanted to find a way to get the best of both worlds, and that is where they introduced RAFT, Retrieval Augmented Fine-Tuning.
>
> **[2:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/what-is-finetuning?u=76281980&t=176)** Let's understand that in our next lesson.

> [!info]- Semantic Content
>
> **Analogies:** just like (2), imagine (1), it's like (1), similar to (1)
> **Code Keywords:** let (3), finally, (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** rag (1), raft (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Combining RAG and fine-tuning: RAFT
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=0)** - [Instructor] Researchers have overcome the limitation of both RAG and Fine-Tuning with this new method called RAFT, RAFT or Retrieval Augmented Fine Tuning, combines the best aspects of RAG, and fine tuning into a single powerful approach.
>
> **[0:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=19)** It's like teaching an AI to both access a library, and become an expert in using it.
>
> **[0:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=26)** So RAFT is a hybrid superhero that combines the strengths of both RAG and fine-tuning while overcoming their individual weaknesses.
>
> **[0:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=35)** Let's break down how these three approaches compare.
>
> **[0:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=39)** First, let's talk about accuracy and responses.
>
> **[0:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=44)** RAG has high potential accuracy since it can access and retrieve relevant information directly from source documents.
>
> **[0:53](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=53)** Fine-tuning on the other hand, has variable accuracy that can be inconsistent.
>
> **[0:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=59)** While it can be good for specific domains it was trained on, it may struggle with new information or variations not seen during training.
>
> **[1:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=70)** RAFT maintains high and consistent accuracy by combining the benefits of both approaches.
>
> **[1:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=77)** It can effectively use retrieved information like RAG while maintaining the specialized knowledge from fine-tuning.
>
> **[1:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=86)** Next, let's look at adaptability.
>
> **[1:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=89)** RAG shines here with great adaptability, you can easily update its knowledge base.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=95)** Fine-tuning struggles with adaptability because you need to retrain the entire model to add new information.
>
> **[1:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=102)** RAFT successfully preserves.
>
> **[1:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=105)** RAG adaptability, letting you update information without a complete retrain.
>
> **[1:51](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=111)** And finally, let's examine specialization.
>
> **[1:54](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=114)** So RAG tends to be generic, often giving broad general purpose responses.
>
> **[2:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=121)** Fine-tuning on the other hand, excels at specialization, providing focused domain-specific answers, which it was trained on.
>
> **[2:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=131)** RAFT maintains this specialization advantage, keeping the expert level knowledge while staying flexible.
>
> **[2:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=141)** Let's see how RAFT works.
>
> **[2:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=144)** So RAFT works in three main stages.
>
> **[2:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=147)** First, we prepare specialized training data that includes both relevant and irrelevant documents.
>
> **[2:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=156)** Then we fine tune the model to learn from this data.
>
> **[2:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=161)** And finally, during use, the model applies its learned expertise to new questions.
>
> **[2:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/combining-rag-and-finetuning-raft?u=76281980&t=169)** In the next chapter, we'll dive deeper into each of these three stages to deeply understand how a RAFT system works to overcome the limitations of both RAG and fine-tuning.

> [!info]- Semantic Content
>
> **Env Vars:** rag (9), raft (9)
> **Code Keywords:** let (5), finally, (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)


### 2. RAFT technique

#### Understand RAFT
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=0)** - [Instructor] It's time to understand how retrieval-augmented fine-tuning works to overcome the limitations of RAG and fine-tuning.
>
> **[0:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=7)** Let's break down RAFT simple terms.
>
> **[0:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=10)** Imagine you are teaching a student not just to memorize facts, but to effectively use their textbook during an open book exam.
>
> **[0:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=18)** RAFT is exactly that.
>
> **[0:20](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=20)** It is a training technique that teaches language models how to work specifically in open-book scenarios, handle specialized domain knowledge effectively, and use reference documents intelligently while answering questions.
>
> **[0:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=39)** Now let's look at how RAFT actually works.
>
> **[0:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=42)** So this process is quite interesting.
>
> **[0:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=45)** We start with questions from our specialized domain.
>
> **[0:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=49)** We gather two types of documents, domain-specific documents that contain the actual answers, also called oracle documents, and then we have distractor documents that might be related, but do not have the answers to those questions.
>
> **[1:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=67)** Then we have a retrieval that helps in managing these documents.
>
> **[1:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=73)** The LLM then processes all of this information.
>
> **[1:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=77)** The training process teaches the model to identify and utilize the relevant information for generating chain-of-thought answers, incorporating step-by-step reasoning and citations from the source documents.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=95)** Now the output here is not just an answer, but includes a chain-of-thought explanation showing how it reached that conclusion.
>
> **[1:47](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=107)** So here's where RAFT gets really clever in its training approach, the training dataset composition.
>
> **[1:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=116)** For some questions, let's say P percent of them, we give the model both the correct documents, which we call oracle documents, and some distractor documents.
>
> **[2:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=127)** This teaches the model how to find the right information among the noise.
>
> **[2:14](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=134)** For the remaining questions, which is one minus P percent, we only provide distractor documents.
>
> **[2:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=141)** This is more like traditional fine-tuning.
>
> **[2:23](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=143)** It teaches the model to be honest when it cannot find the answer in the documents.
>
> **[2:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/understand-raft?u=76281980&t=150)** So now that we have understood how to prepare the training dataset, the next step is to understand how the fine-tuning and inference happens in a RAFT fine-tuned model.

> [!info]- Semantic Content
>
> **Env Vars:** raft (5), rag (1), llm (1)
> **Code Keywords:** let (3)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Fine-tuning and inference
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=0)** - [Instructor] Now, let's explore the fine-tuning process.
>
> **[0:04](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=4)** We start with our carefully prepared training data, including questions and document sets, which are structured into clear reasoning steps.
>
> **[0:14](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=14)** Next, we use supervised learning to train the model.
>
> **[0:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=18)** During training, the model learns to identify and prioritize relevant information from Oracle documents while ignoring the distractor documents, and it's trained to generate chain-of-thought style answers, learning to reason step by step, and cite relevant source documents.
>
> **[0:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=40)** The model gradually adapts to understand domain-specific patterns.
>
> **[0:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=45)** So throughout the process, the model learns to generate detailed and step-by-step answers.
>
> **[0:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=52)** RAFT has four crucial training objectives.
>
> **[0:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=56)** Like a skilled researcher, the model learns to spot the exact information needed to answer the question.
>
> **[1:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=65)** This is crucial.
>
> **[1:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=66)** The model learns not to be misled by any sort of irrelevant information, and by learning from distractor documents, it manages to hone that particular skill, so just like a good student learns to focus on what matters and ignores what does not.
>
> **[1:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=88)** Beyond just answering, the model learns to explain its thinking as well, so it provides clear, logical chain of thought in its responses.
>
> **[1:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=99)** Lastly, the model learns to give reliable, consistent answers so it stays true to the information in the documents without making things up.
>
> **[1:51](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=111)** Let's look at how it all comes together at the inference stage.
>
> **[1:57](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=117)** It starts with a question.
>
> **[1:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=119)** A user asks something within the specialized domain.
>
> **[2:04](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=124)** Then we have the system that automatically retrieves a relevant document, so it pulls the top-K most relevant documents.
>
> **[2:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=133)** The fine-tuned model reviews all of the retrieved documents.
>
> **[2:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=138)** It applies what it learned during the training to find the use of the right information, and finally, it produces a well-reasoned accurate response.
>
> **[2:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=151)** So the answer includes both the conclusion and the thinking process.
>
> **[2:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=156)** The streamlined process combines the speed of fine-tuning with accuracy of retrieval-based approaches.
>
> **[2:46](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-and-inference?u=76281980&t=166)** So in the next lesson, we are going to look at how RAFT results looked like when it was trained on different types of datasets.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** raft (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Results of RAFT
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=0)** - [Instructor] Let's look at how RAFT performed over different types of data sets.
>
> **[0:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=6)** To showcase RAFT's efficacy, the researchers conducted experiments using a diverse set of data sets representing different domains.
>
> **[0:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=13)** The first one was from general knowledge.
>
> **[0:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=16)** They used natural questions, TriviaQA, and HotPotQA, all based on Wikipedia and covering general knowledge topics.
>
> **[0:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=24)** Then we had software documentation.
>
> **[0:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=27)** To test RAFT's performance in a specialized domain.
>
> **[0:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=31)** The researchers chose Hugging Face, Torch Hub, and TensorFlow Hub datasets from the API bench.
>
> **[0:38](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=38)** Biomedical use cases, the PubMedQA dataset focusing on the biomedical research question and answering allowed the evaluation of RAFT in answering medical and biological questions using given documents.
>
> **[0:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=55)** The team used several strong baselines to ensure a fair comparison.
>
> **[1:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=60)** The RAFT model's performance was compared against several baseline models and fine-tuning techniques to demonstrate its superiority.
>
> **[1:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=69)** Llama2-7B-chat with 0-shot prompting, so this instruction fine-tuned model commonly used for question and answering tasks they relied solely on pre-trained knowledge and instructions without any access to reference documents.
>
> **[1:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=88)** Then they also had Llama2-7B-chat with RAG capabilities, domain-specific fine-tuning with 0-shot prompting, so this baseline used the standard supervised fine-tuning approach without providing any documents in context.
>
> **[1:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=104)** Then we have domain-specific fine-tuning with RAG capabilities, so the combined DSF with RAG approach, allowing the model to refer to external documents for knowledge it might not have acquired during fine-tuning.
>
> **[1:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=119)** And lastly, they had GPT-3.5, which is a large model, along with RAG.
>
> **[2:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=126)** So as a reference point, the researchers also compared RAFT against GPT-3.5, which is a large model equipped with RAG.
>
> **[2:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=138)** Now, the table from the research paper on RAFT summarizes the result of the experiment.
>
> **[2:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=145)** Across all the data sets, RAFT consistently outperformed the baseline models.
>
> **[2:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=151)** This demonstrates RAFT's effectiveness in extracting and utilizing relevant information from domain-specific documents, while mitigating the negative influence of irrelevant, distractor documents.
>
> **[2:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=165)** Note that RAFT showed significant improvements, particularly on the HotPotQA dataset, showcasing its effectiveness in multi-hop reasoning.
>
> **[2:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=176)** Then RAFT achieved the most substantial gains on the Torch Hub dataset, demonstrating its ability to effectively process and understand technical documentation.
>
> **[3:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=187)** On biomedical dataset, while the gains were less pronounced on the PubMedQA dataset, RAFT still demonstrated superior performance.
>
> **[3:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=197)** The research also included ablation studies to understand the impact of key components of RAFT.
>
> **[3:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=204)** The use of distractor documents during training proved crucial for the model's robustness, enhancing its ability to discern irrelevant information and maintain consistent performance, despite variations in the number of documents presented at test time.
>
> **[3:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/results-of-raft?u=76281980&t=225)** Now, in the next chapter, we'll start implementing all these different phases that we have learned in this chapter.

> [!info]- Semantic Content
>
> **Env Vars:** raft (13), rag (5), gpt (2), api (1), dsf (1)
> **Versions:** 3.5 (2)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Dataset Preparation for RAFT

#### Preparing the data for RAFT
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=0)** - [Instructor] Let's put our understanding of RAFT into practice.
>
> **[0:04](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=4)** In this chapter, we'll focus on the initial setup of RAFT, which is preparing the training dataset.
>
> **[0:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=10)** Whether you are working with medical documents, legal takes, or technical documentation, this process will help you create better domain aware AI models.
>
> **[0:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=19)** We will be fine tuning the model to become an expert in the finance domain where we have chosen a PDF document containing details on the Indian financial system.
>
> **[0:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=29)** The document contains 259 pages and in order to prepare the training data, we need to first break this big file into smaller document chunks and that is what we learn in this lesson.
>
> **[0:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=44)** Let's start by installing all the required packages over here.
>
> **[0:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=49)** We are going to be using langchain, which is our main framework for working with LLMs.
>
> **[0:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=55)** We are installing langchain community for some community contributed components, langchain OpenAI to integrate OpenAI models and then pyPDF to handle PDF documents.
>
> **[1:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=68)** Let's hit run and you will have this cell running.
>
> **[1:14](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=74)** All the requirements are already satisfied.
>
> **[1:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=76)** I have already installed all of these packages.
>
> **[1:20](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=80)** Now, the next step over here is to import all the required packages.
>
> **[1:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=86)** So I've imported random package.
>
> **[1:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=89)** I've imported document from langchain.schema by PDF loader from langchain community.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=95)** So this will help us in handling PDF documents, loading all of them and then further splitting them using recursive character text splitter from the text splitter module of langchain.
>
> **[1:47](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=107)** Then we have chat OpenAI to use OpenAI's large language models.
>
> **[1:51](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=111)** And finally, from Google Colab, we are importing user data.
>
> **[1:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=115)** This is how we will be storing our secret.
>
> **[1:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=119)** That means OpenAI's API keys securely within the Colab interface itself.
>
> **[2:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=126)** In order to securely save your OpenAI API key, you have Colab secrets.
>
> **[2:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=131)** So you just have to click on this key icon from the left pane and here you can click on add new secret.
>
> **[2:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=139)** You can provide the name, here, I provided OpenAI API key for example, and then your OpenAI API key is going to be added in the value field.
>
> **[2:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=150)** You have to toggle this button to make it accessible within your code in the Colab notebook.
>
> **[2:38](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=158)** So I'll hit run here to import all the required libraries.
>
> **[2:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=162)** And to securely access your OpenAI API key from Google Colab Secrets, you would use the user data module, userdata.get, and then the name of your key, which is OpenAI API Key, hit run.
>
> **[3:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=181)** You can either hit run by clicking on this play button or you can hit shift plus enter on your keyboard.
>
> **[3:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=189)** So here I'm just showcasing the OpenAI API key.
>
> **[3:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=193)** This will be revoked, so do not try to copy this.
>
> **[3:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=196)** Moving on to setting up the large language model.
>
> **[3:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=199)** Here I have Chat OpenAI class from langchain and we are using GPT-4.0 mini as our model and OpenAI API key, as you can see, is already loaded within this variable from Google Colab Secrets.
>
> **[3:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=215)** So we have initialized our OpenAI chat model.
>
> **[3:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=219)** This is the next step.
>
> **[3:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=221)** This is the main functionality here, loading and chunking documents.
>
> **[3:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=225)** So we have written a Python function here, which we'll process our code document that takes in the path of the PDF file.
>
> **[3:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=235)** Now this file is currently not present within our Colab environment.
>
> **[4:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=240)** So click on the files icon from the left pane and click on upload.
>
> **[4:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=246)** From this upload you can select the document, Indian financial system.
>
> **[4:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=251)** So I have uploaded the document here within the Colab environment to make it accessible in our code.
>
> **[4:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=259)** Now how this function works, let's look at that.
>
> **[4:22](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=262)** Load a PDF file and chunk it semantically using langchain.
>
> **[4:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=266)** So this function is going to take the PDF file and it takes it through the pyPDF loader from langchain.
>
> **[4:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=275)** So this handles the PDF loading. Then we have loader.load.
>
> **[4:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=280)** This is going to further put our document into the RAM for processing.
>
> **[4:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=285)** The recursive character takes splitter.
>
> **[4:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=288)** This creates document chunks with chunk size of thousand that is each chunk is 3000 characters.
>
> **[4:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=296)** Chunk overlap, 500 character overlap between chunks.
>
> **[5:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=300)** This overlap prevents breaking up related information.
>
> **[5:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=305)** The length function is the python's LEN function, and there is no separator required.
>
> **[5:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=310)** So is_separator_regx is set to false. That's it.
>
> **[5:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=315)** And then finally we'll use the split documents method and provide all the pages that we have loaded using the loaded.load method.
>
> **[5:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=325)** Run this and you will have all the chunks created.
>
> **[5:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=328)** So we have defined this function.
>
> **[5:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=330)** After the definition, we will invoke it.
>
> **[5:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=334)** Now to invoke that function, we have provided the path, Indian_financial_system.pdf, run this.
>
> **[5:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=341)** So all of your chunks are going to be created using that function.
>
> **[5:46](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=346)** The next step here, once all of the chunks are generated, we'll explore what each of those chunks actually contain.
>
> **[5:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=355)** So here I printing total number of chunks that I created from that 259 pages document.
>
> **[6:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=362)** Then we have print information about each chunk.
>
> **[6:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=365)** So chunk number, chunk length, the metadata, which is present within each chunk.
>
> **[6:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=371)** And there are some separators that I've added.
>
> **[6:14](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=374)** So I have limited the output just to explore the chunks to just six.
>
> **[6:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=381)** So let's run this and here you go.
>
> **[6:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=384)** We have chunk number, the content length, metadata that it contains.
>
> **[6:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=388)** So chunk 1, 2, 3, 4, 5, 6, and we have like seven chunks that we are showcasing.
>
> **[6:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=394)** The metadata contains source, page.
>
> **[6:37](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=397)** And in order to look at what each chunk actually looks like, here's the code for that.
>
> **[6:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=402)** We have picked up some random index to showcase some random chunk here.
>
> **[6:50](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=410)** So this is what a chunk actually looks like.
>
> **[6:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=412)** So it's a document chunk, as you can see a document object.
>
> **[6:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=416)** The metadata contains source page number, and then all of the content within that chunk.
>
> **[7:03](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=423)** So we have successfully processed and created chunks of all the 259 pages within our PDF file on the Indian financial system.
>
> **[7:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=435)** We have, if you see, 258 chunks created out of that document, the next step will be to process and generate question and answer pairs from all of these chunks.
>
> **[7:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/preparing-the-data-for-raft?u=76281980&t=451)** So let's head over to the next lesson to learn how to do that.

> [!info]- Semantic Content
>
> **Env Vars:** pdf (9), api (8), raft (2), gpt (1), ram (1)
> **Code Keywords:** function (8), let (6), module (2), this. (2), finally, (1)
> **Tools:** colab (8)
> **UI Navigation:** click on (4), toggle (1), select the (1)
> **CLI Commands:** make (2), python (2)
> **Code Identifiers:** pypdf (2), is_separator_regx (1)
> **Versions:** 4.0 (1)
> **Analogies:** for example (1)

#### Q&A pair generation
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=0)** - The next step in the training data preparation process is to generate questions for each document.
>
> **[0:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=6)** Here, we'll focus on two main tasks.
>
> **[0:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=9)** First, generating relevant questions from each document chunk.
>
> **[0:14](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=14)** And second, creating document question pairs along with distractor documents.
>
> **[0:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=21)** Let's break down our first function, which is generate questions for chunk.
>
> **[0:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=27)** Here, we declare our function that takes three inputs.
>
> **[0:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=31)** Chunk, which is our text from the chunk, model GPT-4o mini.
>
> **[0:37](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=37)** Number of questions, that is how many questions we want.
>
> **[0:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=40)** So by default this is set to three.
>
> **[0:43](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=43)** We create a prompt template using chat prompt template from LangChain.
>
> **[0:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=48)** The prompt here says generate number of questions, that is three, that can be answered based on the following text and here we insert the text from the chunk.
>
> **[0:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=59)** Questions should be separated by semicolon character so that we can process and extract individual questions.
>
> **[1:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=65)** We format our prompt with the number of questions and chunk, send it to our model to get the response and we clean up the response and return all of our questions.
>
> **[1:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=79)** So the output is basically a clean list of questions like what are the key components of the banking system?
>
> **[1:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=88)** How do regulatory requirements affect banks?
>
> **[1:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=91)** So all the domain specific questions.
>
> **[1:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=94)** The next function that we have is generate questions for document.
>
> **[1:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=100)** Now this is going to process all the document chunks that we have.
>
> **[1:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=105)** The function takes all our document chunks and generates questions for each one.
>
> **[1:51](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=111)** Breaking this down, we first of all, set up our OpenAI large language model, GPT-4o mini.
>
> **[1:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=119)** We have defined all questions list.
>
> **[2:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=121)** So this is an empty list where we'll keep adding all the questions.
>
> **[2:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=125)** We are looping through each chunk to extract the text, generate questions, store them in our list and return all the questions grouped by chunks.
>
> **[2:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=138)** When you run this, it will take some time to process all the 258 chunks.
>
> **[2:22](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=142)** So that's why I have run all of this already.
>
> **[2:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=146)** So you can see it is currently running and it'll keep on printing the number of chunk that it is generating questions for.
>
> **[2:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=156)** Once the process is finished, we get a nested list where each inner list contains questions for one document chunk.
>
> **[2:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=168)** So here you'll have to wait for some time to get all the 258 chunks processed.
>
> **[2:57](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=177)** Alright, great.
>
> **[2:58](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=178)** So you can see the output here.
>
> **[3:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=180)** Questions for chunk one, we have three questions, then for chunk two, chunk three, chunk four, five, six.
>
> **[3:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=187)** So I have limited the output here to just seven chunks and this is how all the chunks have been structured in the output of the function.
>
> **[3:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=198)** The next task that we have is to create pairs by adding distractor documents in the chunk pairs itself.
>
> **[3:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=208)** So here in our pairing function, it matches the questions with their correct documents and adds some incorrect ones for training.
>
> **[3:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=219)** So looking at the create document question pairs function here we are looping through each chunk and its questions.
>
> **[3:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=229)** And for each question we store the correct document.
>
> **[3:53](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=233)** We find random other documents as distractors, and we create a dictionary with all the pieces, add each pair to our final list.
>
> **[4:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=245)** And the output is basically a dictionary containing a question, the correct document, and several distractor documents.
>
> **[4:14](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=254)** So when we run this and we get the output in this format, the question with the generated question, the golden document, the correct document chunk that answers the question and distractor documents, which is wrong document chunk that do not answer the question.
>
> **[4:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=275)** When we invoke this function, we have the document question pairs created and in order to display some of the examples of these document question pairs has what the output looks like.
>
> **[4:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=289)** So document question pair three.
>
> **[4:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=292)** This is the question.
>
> **[4:53](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=293)** Then we have the golden document text here along with some distractor documents like this.
>
> **[5:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=301)** And with this, we have accomplished the two tasks that we had for this lesson.
>
> **[5:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=307)** We have generated document question pairs along with distractor documents.
>
> **[5:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/q-a-pair-generation?u=76281980&t=313)** The next step is to add answers to these questions and that's what we'll learn in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), this, (2), let (1), for. (1), this. (1)
> **Env Vars:** gpt (2)
> **Exercise Files:** template (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### Adding answers to document-question pairs
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=0)** - [Instructor] Now that we have our documents shown and questions generated, we'll complete our training data by adding answers to it.
>
> **[0:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=8)** We'll use GPT-4o mini to generate high-quality answers and use parallel processing to speed things up.
>
> **[0:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=15)** Let's look at how we generate answers for each question-document pair.
>
> **[0:20](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=20)** And our main function here is the generate_answer function.
>
> **[0:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=25)** This function takes a document-question pair and returns a complete triplet with an answer based on the document content.
>
> **[0:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=35)** So, to break it down, we have imported ThreadPoolExecutor for parallel processing.
>
> **[0:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=42)** We use SystemMessage and HumanMessage from LangChain for structured outputs.
>
> **[0:47](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=47)** The function carefully extracts context and questions from our pairs.
>
> **[0:54](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=54)** We format a detailed prompt that guides the model to give structured answers.
>
> **[1:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=60)** So the magic happens in our prompt structure.
>
> **[1:03](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=63)** We ask for step-by-step reasoning, context-based evidence, and a clearly tagged final answer.
>
> **[1:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=73)** Our prompt is carefully designed to get consistent, high-quality answers.
>
> **[1:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=78)** We include both question and context.
>
> **[1:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=81)** We ask for step-by-step reasoning.
>
> **[1:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=84)** We request evidence from the context using double hashtag markers.
>
> **[1:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=90)** We require a final answer with an answer tag.
>
> **[1:33](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=93)** And then we include instructions to only use provided context.
>
> **[1:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=99)** This structure helps us get well-reasoned, evidence-based answers that are perfect for training.
>
> **[1:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=108)** To handle large datasets efficiently, we use parallel processing.
>
> **[1:53](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=113)** So we have this function defined.
>
> **[1:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=116)** This is going to return a dictionary containing original question, golden document, distractor document, and then the generated answer as well added to the triplet itself.
>
> **[2:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=127)** But this task is huge, and that's why we are going to leverage parallel processing.
>
> **[2:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=133)** The next function is generate_triplets_in_parallel.
>
> **[2:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=137)** The function processes multiple question-document pairs simultaneously, making our pipeline much faster.
>
> **[2:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=145)** Here, the key components are ThreadPoolExecutor, that manages multiple threads.
>
> **[2:32](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=152)** We process answers concurrently.
>
> **[2:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=155)** We track progress with a counter.
>
> **[2:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=159)** And finally, collect results as they complete.
>
> **[2:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=164)** This parallel approach can be five to 10 times faster than processing one at a time.
>
> **[2:51](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=171)** Now, when you run this for all the 774 pairs that we had generated earlier, all of those are going to get processed.
>
> **[3:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=182)** All of these will get a high-level, correct answer from our financial document.
>
> **[3:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=189)** And to look at each of these triplets and explore the output format, we have this for loop, where we are printing the triplet, the question, the answer, golden document, as well as the distractor document.
>
> **[3:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=204)** When you run this, I have run this already for you.
>
> **[3:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=207)** So you see the triplet 1, along with the question at the top.
>
> **[3:32](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=212)** Then we have the answer from our large language model.
>
> **[3:37](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=217)** The golden document that it referred to.
>
> **[3:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=220)** And finally, the distractor documents as well.
>
> **[3:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=225)** So, our system handles several important cases, questions that cannot be answered from context, API rate limiting, failed requests with automatic retry, and progress tracking for long runs.
>
> **[4:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=241)** With this, we have finished off all the main phases of training dataset generation process.
>
> **[4:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/adding-answers-to-document-question-pairs?u=76281980&t=248)** In the next lesson, we'll see how to explore this dataset and export it so that it can further be added to our fine-tuning jobs.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), finally, (2), this, (2), let (1), require (1)
> **Code Identifiers:** generate_answer (1), generate_triplets_in_parallel (1)
> **Env Vars:** gpt (1), api (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Generate and save dataset
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=0)** - [Instructor] Our data is ready, but we need to change its format so we can use it for training our model.
>
> **[0:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=6)** We'll transform our data containing question, answer, golden documents and distracted documents into a format that is ready for model training.
>
> **[0:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=16)** We'll create both a CSV format for easy analysis and a JSON Lines format, which is required for fine tuning the model.
>
> **[0:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=25)** Let's first look at creating a structured data frame format.
>
> **[0:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=29)** Here we are converting our triplets data.
>
> **[0:32](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=32)** Triplets basically means we have question, answer, and documents.
>
> **[0:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=36)** Documents then further contain golden documents and distractor documents.
>
> **[0:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=42)** So we are converting it into a pandas data frame by first creating an empty list called data.
>
> **[0:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=49)** For each triplet, we structure it into a dictionary with question string, answer string, golden document string, and lastly, concatenated distractor document string.
>
> **[1:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=62)** We converted into a pandas data frame, and if you want to see the first five records in this data frame, you can use the dot head method.
>
> **[1:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=73)** Here we have the first five records with four columns defined in our code above.
>
> **[1:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=79)** If you want to further save this file, you can use the .21 CSV method, provide the name, and you'll have the file saved within your CoLab environment.
>
> **[1:30](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=90)** If you want to look at the information present in the data frame, get all the meta information about the structure of the data, number of records, columns, non-null values, data types, so you can use the.info method.
>
> **[1:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=105)** So this makes it easy to analyze the data present in our data frame.
>
> **[1:51](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=111)** Now for the most important part, we need to create the JSON Lines format, which is required for fine tuning our model.
>
> **[1:59](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=119)** The JSON Lines is a specific format where each line is a valid JSON object.
>
> **[2:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=125)** Which is perfect for large data sets and streaming.
>
> **[2:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=129)** The key components of a JSON Lines structure that one has to keep in mind is the system message, which is defining the model's role, the user message, which contains question and documents, assistant message with the answer, and each conversation as a complete JSON object.
>
> **[2:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=151)** So let's see how we get all of these components right.
>
> **[2:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=155)** First, we define our system message.
>
> **[2:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=159)** The content is answer the question given by the user on the basis of only relevant content from the context documents provided.
>
> **[2:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=168)** For each row in our data frame, we ID over it to get user content so we format user content with markdown.
>
> **[2:58](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=178)** Then we structure the assistant response, we create complete conversation object, and finally we write everything line by line to a JSON Lines file.
>
> **[3:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=193)** So when we run the cell, we have our JSON Lines file in this format, saved in our CoLab environment, output.jsonl.
>
> **[3:23](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=203)** Now this formatting is crucial.
>
> **[3:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=205)** Questions are clearly marked with question, documents are properly separated, conversations maintain a clear structure.
>
> **[3:33](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=213)** And that's it. Congratulations.
>
> **[3:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=215)** You have your training data in both CSV and JSON Lines format.
>
> **[3:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=221)** It's time for us to start fine tuning our model.
>
> **[3:46](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/generate-and-save-dataset?u=76281980&t=226)** We'll be using Hugging Face and we'll learn all about that in our next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** json (9), csv (3)
> **Definitions:** is a  (2), basically means (1)
> **Code Keywords:** let (2)
> **Tools:** colab (2)
> **Cross-References:** next chapter (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 4. Fine-Tune the Model in Hugging Face

#### Intro to Hugging Face
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=0)** - [Instructor] Now that we have our dataset ready, it's time to fine-tune our model.
>
> **[0:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=5)** And to do that, we are going to be using Hugging Face.
>
> **[0:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=9)** You can use other cloud service provider that offer fine-tuning capabilities like AWS or Azure.
>
> **[0:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=15)** But for our use case, we'll be using Hugging Face.
>
> **[0:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=19)** And before we get down to fine-tuning the model, let's first understand what Hugging Face is all about and what all you can achieve using this platform.
>
> **[0:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=28)** So think of Hugging Face as the GitHub for AI, where AI developers share, discover, and collaborate on machine learning models and datasets.
>
> **[0:38](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=38)** So just like how software developers use GitHub to share code, AI researchers and developers use Hugging Face to share their AI models and datasets.
>
> **[0:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=48)** The most important feature that they have is this model hub.
>
> **[0:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=52)** You can find models for specific tasks like text generation, translation, image recognition, image segmentation, image classification, question answering, feature extraction, text to audio.
>
> **[1:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=67)** So you can use popular models like Bard, GPT, and LLaMa.
>
> **[1:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=71)** You can download them, you can fine-tune the existing models as per your use cases.
>
> **[1:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=77)** Then they have datasets.
>
> **[1:19](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=79)** You have access to curated datasets for training.
>
> **[1:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=84)** You can find domain-specific data collection, you can use standardized data loading tools that they offer, and you can share and version your datasets as well.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=95)** Further, in order to showcase your applications and demos, they have Spaces.
>
> **[1:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=100)** So Hugging Face Spaces is basically a platform, a space where you can create interactive AI demos.
>
> **[1:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=108)** So you can share working applications, you can test models in real-time, collaborate with others on projects, and deploy your models along with simple UI.
>
> **[2:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=120)** They also have a learning section.
>
> **[2:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=122)** So if you go onto their learning page, there are NLP course, deep learning course, audio course, ML for games course.
>
> **[2:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=131)** So you can learn a lot of different types of machine learning techniques on this platform.
>
> **[2:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=138)** They also offer a bunch of development tools.
>
> **[2:22](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=142)** So in the Documentation section, you'll find the most common tools that they have to offer.
>
> **[2:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=149)** For example, Transformers Library.
>
> **[2:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=151)** For easy model use, datasets library for data handling, accelerate library for distributed training, so on and so forth.
>
> **[2:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=160)** Further, they have cloud integration with AWS Azure.
>
> **[2:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=164)** So depending upon which cloud service provider you want to use, where you have your infrastructure already.
>
> **[2:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=172)** So you have the ability to customize your solution as per your requirements.
>
> **[3:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=180)** So this is the platform that we will be using to fine-tune our model.
>
> **[3:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=185)** We'll be working with Llama 3.2-3B model.
>
> **[3:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=188)** Make sure that you are signed in, you have a Hugging Face account and you already are logged in.
>
> **[3:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/intro-to-hugging-face?u=76281980&t=197)** In the next lesson, we'll learn how to fine-tune Llama-3.2-3B model using our generated dataset.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), aws (2), make (1)
> **Env Vars:** aws (2), gpt (1), nlp (1)
> **Code Keywords:** case, (1), let (1)
> **Versions:** 3.2 (2)
> **Tools:** github (2)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)

#### Fine-tuning the Llama 3.2 model on Hugging Face
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=0)** - [Instructor] It's time to fine-tune our large language model using our prepared data set.
>
> **[0:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=5)** We'll be fine-tuning Llama 3.2 3 billion model.
>
> **[0:09](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=9)** So let's quickly search for that model on Hugging Face.
>
> **[0:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=13)** And the third one that you see, Llama 3.2 3 billion Instruct, this is the model that we will be fine-tuning.
>
> **[0:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=21)** Clicking on it opens up the model card where you'll find all the information about this model.
>
> **[0:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=27)** Important thing is that you will not be able to use this model unless you have requested access to use that means to download or to fine-tune this model.
>
> **[0:38](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=38)** So when you'll open this page up for the first time, it'll ask you to first of all log in or sign up.
>
> **[0:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=45)** Once you log in, you'll have to request access to this model.
>
> **[0:50](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=50)** It takes around 10 minutes to get your request approved by the Meta team.
>
> **[0:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=55)** And once that is done, you'll be able to fine-tune the model or use the model.
>
> **[1:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=61)** On the top right, you have the train button.
>
> **[1:04](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=64)** So clicking on this train dropdown, it gives you three options to fine-tune your model: Amazon SageMaker, NVIDIA Cloud, or AutoTrain.
>
> **[1:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=75)** In our example, we'll be using AutoTrain to fine-tune this model without writing any code.
>
> **[1:22](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=82)** So click on AutoTrain.
>
> **[1:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=84)** It'll ask you to create a new project.
>
> **[1:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=87)** So create a new AutoTrain project.
>
> **[1:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=89)** This will open up a new window for you.
>
> **[1:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=91)** You can specify the space name.
>
> **[1:34](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=94)** So you can call it, for example, test raft llama 3.2 or whatever, or you can leave it as it is.
>
> **[1:42](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=102)** And then a short description, let's say, testing raft on llama 3.2.
>
> **[1:50](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=110)** That's the description. Then select the space SDK will set it to Docker and choose a Docker template.
>
> **[1:58](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=118)** Here we have AutoTrain, so nothing to change here.
>
> **[2:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=121)** Space hardware.
>
> **[2:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=122)** Now, space hardware is going to be very important.
>
> **[2:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=125)** 3 billion model is small, but still it needs a couple of GBs of RAM.
>
> **[2:10](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=130)** So we'll need a decent GPU.
>
> **[2:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=133)** So the one that works best for our use case is NVIDIA A10G small, which costs $1 per hour.
>
> **[2:23](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=143)** So in order to pay for this, you'll have to first make sure that a payment method is added to your Hugging Face account.
>
> **[2:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=151)** Go to your profile. From your profile, click on settings.
>
> **[2:37](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=157)** Within the settings you have billing section.
>
> **[2:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=159)** Here in the billing section, you have overview payment information pro subscription.
>
> **[2:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=164)** In the payment information, you should have your card added here.
>
> **[2:48](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=168)** So you have to add your payment method in order to fine-tune your model or to select a paid hardware.
>
> **[2:57](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=177)** So we'll use NVIDIA A10G small here.
>
> **[3:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=181)** Pause on failure, this parameter needs to be set to zero because that will provide detailed logs to us in case our fine-tuning job fails for some reason.
>
> **[3:13](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=193)** We'll set the visibility of this space to private.
>
> **[3:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=196)** That means we want to keep it private and not set to public visibility.
>
> **[3:23](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=203)** License, we do not need to attach any licenses.
>
> **[3:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=207)** This project is private.
>
> **[3:29](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=209)** Create the space. That's it, I already have this.
>
> **[3:33](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=213)** So let's head over to the space.
>
> **[3:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=215)** It'll set up the container for us.
>
> **[3:39](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=219)** And that's it. Here, you'll have to specify the project name first.
>
> **[3:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=224)** So you can specify the name of your model.
>
> **[3:47](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=227)** So whatever it is, let's say test raft llama.
>
> **[3:54](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=234)** You can select the base model.
>
> **[3:55](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=235)** The base model in our case is Llama 3.2 3 billion Instruct.
>
> **[4:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=240)** You have to upload your training file.
>
> **[4:02](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=242)** That is your output.json lines format.
>
> **[4:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=248)** Number of epochs should be set to one.
>
> **[4:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=251)** All the other fine-tuning parameters that you see here need not be changed.
>
> **[4:16](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=256)** Just keep them as it is.
>
> **[4:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=258)** You do not need to change any of these.
>
> **[4:21](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=261)** And that's it. You simply need to click on start training.
>
> **[4:26](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=266)** I already have a job running here.
>
> **[4:28](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=268)** You'll see the start training button.
>
> **[4:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=271)** Once you click on that, you'll have all your logs running in this particular logs monitoring section.
>
> **[4:40](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=280)** So you can see the model that I am fine-tuning is currently at 27%.
>
> **[4:46](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=286)** So you'll see all of these logs in this model right here.
>
> **[4:52](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=292)** Once your model is fine-tuned, you will see it listed within your profile itself.
>
> **[5:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=300)** So for example, I have all of these different spaces and different models here.
>
> **[5:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/finetuning-llama3-2-model-on-huggingface?u=76281980&t=307)** Now, the next step would be to learn how to use these models and that's what we are going to learn in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), private (3), this, (1), public (1), this. (1)
> **Env Vars:** nvidia (3), a10g (2), sdk (1), ram (1), gpu (1)
> **UI Navigation:** click on (4), select the (2), dropdown (1), go to (1)
> **Versions:** 3.2 (5)
> **CLI Commands:** docker (2), find (1), make (1)
> **Analogies:** for example (2)
> **File Paths:** output.json (1)
> **Cross-References:** in the next (1)

#### Using the fine-tuned model
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=0)** - [Instructor] Congratulations, you have your model fine-tuned.
>
> **[0:04](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=4)** We have raft-llama-3B, this is the model that I have fine-tuned, this is the path to the fine-tuned model, and this page contains all the details.
>
> **[0:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=15)** After the fine-tuning job is completed, the model is going to show up within your profile under the models section.
>
> **[0:23](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=23)** So I have raft-llama-3B here.
>
> **[0:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=27)** And in order to use this, we'll use Hugging Face's powerful tools, and we'll learn how to generate responses using this code that they have provided.
>
> **[0:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=41)** Now, before we start learning how to use this model, we'll have to make sure that we authenticate ourselves within the CoLab environment.
>
> **[0:53](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=53)** In order to authenticate yourself, since this is a private model repository, you'll need to create an access token.
>
> **[1:01](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=61)** In order to generate that access token, you'll have to go to settings within your profile, go to access tokens, and here you'll create new token using this button on the top right.
>
> **[1:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=75)** Once you have created a new token, copy that token and pass it on to Hugging Face hub login functionality.
>
> **[1:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=84)** Once the login process is completed, that's where the main working horses from the transformers library are going to be imported and used.
>
> **[1:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=95)** So here, once the authentication is done, we import the necessary tools, we load the fine-tuned models.
>
> **[1:43](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=103)** So here I have set the model path, which is dswh/raft-llama-3B.
>
> **[1:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=109)** Then we are using the tokenizer to load the model as well as the tokenizer.
>
> **[1:57](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=117)** So with the auto tokenizer, we are loading the tokens from pre-trained model path from the fine-tuned model.
>
> **[2:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=125)** I've passed the model path here.
>
> **[2:07](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=127)** And then we are loading the model using auto model for casual LM from pre-trained passing on the model path.
>
> **[2:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=135)** Device map auto sets it to automatic handling of GPU or CPU placement.
>
> **[2:24](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=144)** Torch dtype auto means that the model optimizes memory usage.
>
> **[2:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=151)** We have invoked this method in the evaluation mode.
>
> **[2:36](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=156)** So the model is set in the evaluation mode currently.
>
> **[2:41](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=161)** Once you run this, you'll have the model downloaded.
>
> **[2:45](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=165)** It'll take a couple of minutes to get the process done.
>
> **[2:49](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=169)** Once the model is loaded, now, this is where the exciting part is, generating the response.
>
> **[2:56](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=176)** So first, we have formatted the message, the input.
>
> **[3:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=180)** This is where you are going to set the question that you're going to ask.
>
> **[3:05](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=185)** Here I've set a specific question, which is, what is rural financial system?
>
> **[3:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=191)** And then we tokenize our input IDs, we generate the response using model.generate method, we pass on the input IDs to CUDA engine.
>
> **[3:22](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=202)** The max number of new tokens is set to 500.
>
> **[3:25](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=205)** You can tweak this number as per your requirements.
>
> **[3:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=207)** And finally, we decode the tokens generated by the model, and we print the response.
>
> **[3:35](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=215)** Once the response is printed, you can validate the output quality against any large language model.
>
> **[3:44](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=224)** And this fine-tuned model will always give you better answers which are grounded within your document.
>
> **[3:54](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=234)** So here I've just asked what is rural financial system, and we have a dedicated section on rural financial system within the PDF document that we created our dataset from.
>
> **[4:08](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/using-fine-tuned-model?u=76281980&t=248)** And that basically puts a nail in the coffin that we have the raft retrieval augmented fine tuning technique working for us, which gives us up to date correct answers which are grounded in the details of our documents.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), pass (2), private (1), finally, (1), from. (1)
> **Env Vars:** gpu (1), cpu (1), cuda (1), pdf (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** before we start (1), you'll need (1)
> **CLI Commands:** make (1)
> **Tools:** colab (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps with RAG and fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=0)** - [Instructor] Congratulations, you have completed the course on retrieval-augmented fine-tuning.
>
> **[0:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=6)** In this course, you have gone from understanding basic rack to implementing a complete RAFT system, learning how to combine the best of retrieval and fine-tuning approaches.
>
> **[0:18](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=18)** We built a practical pipeline that processes documents, generates smart question-answer pairs, and creates high-quality training data using tools like LangChain and Hugging Face.
>
> **[0:31](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=31)** Finally, we fine-tuned a Llama 3 model on our custom data set and deployed it for real-world use case, giving you the skills to create domain-specific AI solutions that are both accurate and reliable.
>
> **[0:47](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=47)** Now, to continue your journey with fine-tuning, I recommend that you first of all, share your completion certification with your network on LinkedIn, read the paper on retrieval-augmented fine-tuning, experiment with your own use cases and projects.
>
> **[1:06](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=66)** I would love to hear about your progress and answer questions that you might have.
>
> **[1:11](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=71)** Connect with me on LinkedIn.
>
> **[1:12](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=72)** I've attached my profile link.
>
> **[1:15](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=75)** Subscribe to my YouTube channel.
>
> **[1:17](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=77)** I post videos on how to build with AI.
>
> **[1:20](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=80)** And for more updates from the world of AI, check out my newsletter, which is called High Signal AI.
>
> **[1:27](https://www.linkedin.com/learning/rag-fine-tuning-advanced-techniques-for-accuracy-and-model-performance/next-steps-with-rag-and-finetuning?u=76281980&t=87)** I'll see you in another course.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), case, (1), continue (1)
> **Env Vars:** raft (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Building Generative AI Skills for Developers]]
← [[Advanced RAG Applications with Vector Databases]] | **6 of 7** | [[GenAIOps Foundations]] →

## Appears In

- [[Building Generative AI Skills for Developers]]

## Related Courses

_Courses sharing skills:_

- [[Advanced RAG Applications with Vector Databases]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG), Vector Databases
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[GraphRAG Essential Training]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Vector Databases in Practice- Deep Dive]] — Artificial Intelligence (AI), Vector Databases

---

[↑ Back to top](#)