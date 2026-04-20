---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: rag-for-cybersecurity-use-cases-and-implementation
url: "https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation"
duration_minutes: 70
duration: 1h 10m
level: Advanced
updated: 4/7/2025
learners: 32492
skills:
  - Cyber Threat Intelligence (CTI)
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Governance, Risk Management, and Compliance (GRC)
exercise_files: true
github: "https://github.com/LinkedInLearning/rag-for-cybersecurity-use-cases-and-implementation-4292591/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE11amsuV0i8w/learning-public-crop_675_1200/B4EZXYZ2LIGgAY-/0/1743092409901?e=2147483647&amp;v=beta&amp;t=FkPyTXmH20AleuXGeZnNeYfloYHyPMUKNWug92hnOaw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Leverage AI as a Cybersecurity Analyst
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/security
  - skill/cyber-threat-intelligence-cti
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/governance-risk-management-and-compliance-grc
status: not-started
created: 2026-04-19
---

![RAG for Cybersecurity: Use Cases and Implementation](https://media.licdn.com/dms/image/v2/D4E0DAQE11amsuV0i8w/learning-public-crop_675_1200/B4EZXYZ2LIGgAY-/0/1743092409901?e=2147483647&amp;v=beta&amp;t=FkPyTXmH20AleuXGeZnNeYfloYHyPMUKNWug92hnOaw)

# RAG for Cybersecurity: Use Cases and Implementation

> This course provides an in-depth exploration of how retrieval-augmented generation (RAG) technology enhances cybersecurity. Gain a thorough understanding of RAG’s core components, including how it integrates with large language models to enhance data retrieval and analysis. The course focuses on practical use cases such as mapping cyber security logs and alerts to MITRE ATT&CK techniques, performi

> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation) | 1h 10m | Advanced | 32K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Brennan Lodge]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/rag-for-cybersecurity-use-cases-and-implementation-4292591/codespaces)

## Skills Covered

- Cyber Threat Intelligence (CTI)
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Governance, Risk Management, and Compliance (GRC)

## Table of Contents

### Introduction

#### Welcome to RAG for Cyber Security
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=0)** - Cybersecurity threats evolve fast, but are your security tools keeping up?
>
> **[0:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=6)** Traditional detection methods, compliance audits and security assessments are often reactive, time consuming and incomplete.
>
> **[0:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=15)** What if AI could change that?
>
> **[0:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=17)** Retrieval augmented generation, or RAG, is one of the most powerful AI tools in cybersecurity today, delivering real-time, explainable and compliant security insights.
>
> **[0:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=30)** I'm Brennan Lodge, founder and CEO of BLogic, NYU professor and award-winning AI researcher.
>
> **[0:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=37)** In this course, I'll show you how to build a RAG system to enhance security workflows, mapping threats, streamlining audits and closing regulatory gaps faster than ever.
>
> **[0:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=50)** Ready to transform your security strategy?
>
> **[0:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/welcome-to-rag-for-cyber-security?u=76281980&t=54)** Let's dive in.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2), ceo (1), nyu (1)
> **Code Keywords:** let (1)
> **Speakers:** - cybersecurity (1)

#### What to know before getting started
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-to-know-before-getting-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-to-know-before-getting-started?u=76281980&t=0)** - Here's what to know before getting started.
>
> **[0:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-to-know-before-getting-started?u=76281980&t=3)** This course is designed for cybersecurity professionals, AI practitioners, and compliance experts looking to harness the power of retrieval-augmented generation for security and governance.
>
> **[0:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-to-know-before-getting-started?u=76281980&t=16)** To get the most out of this course, you should have a foundational understanding of AI models and their applications; an interest in exploring how RAG enhances cybersecurity, audits, and compliance workflows; and finally, a basic proficiency in Python and Jupyter Notebooks for hands-on exercises.
>
> **[0:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-to-know-before-getting-started?u=76281980&t=37)** By the end of this course, you'll be able to build and integrate RAG systems, automate security assessments, streamline audits, and apply AI to real-world cybersecurity challenges.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2)
> **CLI Commands:** python (1)
> **Code Keywords:** finally, (1)
> **Tools:** jupyter (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - here (1)


### 1. Understanding RAG

#### What is Retrieval-Augmented Generation?
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=0)** - [Instructor] Imagine a world where artificial intelligence not only understands your question, but also retrieves the most relevant, up-to-date information to give you a precise and factually grounded answer.
>
> **[0:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=13)** This is the essence of retrieval-augmented generation, or RAG, an exciting new paradigm in artificial intelligence.
>
> **[0:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=22)** RAG represents a fusion of two powerful components in AI, the generative capabilities of large language models and the retrieval power of external knowledge sources.
>
> **[0:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=35)** Together, they address a critical challenge in AI, trying to ensure outputs are not only coherent, but also grounded in reality.
>
> **[0:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=46)** Here's how retrieval-augmented generation works.
>
> **[0:49](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=49)** At its core, we have three key components which can be understood using the analogy of a library.
>
> **[0:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=57)** First, the sentence embedding model acts like a Dewey Decimal System.
>
> **[1:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=62)** Remember that?
>
> **[1:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=63)** Translating the user's query into a unique numerical representation.
>
> **[1:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=69)** Much like how that Dewey Decimal System helps us locate a specific book by author and title, this model helps us identify the most relevant pieces of information based on the user's query's meaning.
>
> **[1:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=82)** Next, we have the vector database.
>
> **[1:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=85)** This functions like the library's organized stack of books that are sorted by genres, authors, and topics.
>
> **[1:33](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=93)** This is where all the information resides.
>
> **[1:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=96)** It's stored as dense vectors that enable quick and accurate retrieval based on that user's query.
>
> **[1:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=104)** Finally, there's the large language model, which acts as the librarian.
>
> **[1:49](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=109)** Just as you can ask a librarian a question and receive a detailed human response, based on their knowledge and the resources at their disposal, the large language model processes the retrieved information to generate a coherent, insightful answer for the user.
>
> **[2:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=128)** In a true sense, now that we understand the three components when a question or query is posed by the user, the system doesn't solely rely on what's pre-programmed in its parameters.
>
> **[2:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=139)** Instead, it actively retrieves relevant information from external sources, such as those vector databases, or live data repositories.
>
> **[2:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=150)** This retrieved content combined with the language model's generative power, ensures the output is rich, relevant, and precise.
>
> **[2:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=163)** So why is this important?
>
> **[2:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=165)** Traditional language models have limitations.
>
> **[2:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=168)** They store knowledge in the parameters, which means they struggle with rapidly changing information, real-time information, and context-specific queries, or providing evidence for their outputs.
>
> **[3:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=181)** RAG is here to solve that by integrating real-time retrieval, which overcomes these hurdles.
>
> **[3:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=189)** Now onto cybersecurity.
>
> **[3:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=192)** So for instance, in compliance, RAG systems are used to align organizational policies with evolving regulations.
>
> **[3:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=201)** Imagine a compliance officer querying the system about GDPR updates.
>
> **[3:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=207)** A RAG comes in and retrieves the latest regulatory text, analyzes it and generates a report highlighting gaps in the organization's policies.
>
> **[3:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=218)** This transforms complex tasks into actionable insight.
>
> **[3:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=224)** Retrieval-augmented generation is more than just a framework.
>
> **[3:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=228)** It's a leap towards intelligent, explainable AI.
>
> **[3:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=232)** As we explore this course, you'll see how RAG not only improves accuracy and relevance, but also redefines what AI can achieve across industries, especially here in cybersecurity.
>
> **[4:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/what-is-retrieval-augmented-generation?u=76281980&t=244)** So let's dive in and uncover the core components and real-time data retrieval of RAG.

> [!info]- Semantic Content
>
> **Env Vars:** rag (7), gdpr (1)
> **Analogies:** imagine (2), such as (1), for instance (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [instructor] (1)

#### Core components of RAG systems
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=0)** - [Instructor] Welcome.
>
> **[0:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=1)** In this session, we'll cover the three essential parts of a retrieval augmented generation system.
>
> **[0:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=9)** We'll cover the sentence embedding model, which turns text into vectors, the vector database, which stores vectors for quick lookups, and the large language model used to retrieve data plus its training to generate answers.
>
> **[0:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=26)** Think of these three as the pipeline for embedding, transforming text, the database fetches and matches, and the LLM, which produces human-like responses.
>
> **[0:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=40)** Let's start with a sentence embedding model or the Dewey Decimal System of RAG.
>
> **[0:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=46)** The sentence embedding model converts queries or documents into dense vectors.
>
> **[0:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=51)** Each vector captures semantic meaning, not just keywords.
>
> **[0:55](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=55)** So for example, what's the weather today, and how's the weather right now, produces very similar vectors.
>
> **[1:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=62)** This lets the system recognize questions with the same intent, even if they're worded differently.
>
> **[1:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=69)** So in this section, we're going to illustrate how vector-based organizations is like the modern Dewey Decimal System approach.
>
> **[1:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=77)** And vectors grouped together, so the system can find relevant passages by meaning and not just words.
>
> **[1:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=86)** So when you ask that question, the embedding model transforms it into a vector that highlights the key concepts like weather, time, and conditions, making semantic retrieval possible.
>
> **[1:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=100)** The system quickly matches your query vector to the most similar vectors in the database.
>
> **[1:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=106)** Even if you have millions of documents like we do in cybersecurity with policies and regulations and logs, this process still remains fast.
>
> **[1:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=117)** Here we see how models like a sentence transformer, or BERT, encode text.
>
> **[2:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=123)** They assign numerical values to words or sentences, creating what we call dense vectors.
>
> **[2:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=129)** Similar meanings end up close to each other in the high-dimensional space.
>
> **[2:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=134)** So the system can easily spot related content, even if wording is different.
>
> **[2:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=139)** This is crucial for accurately linking user questions to best possible answers.
>
> **[2:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=146)** So let's talk about how we turn text into something a machine can understand.
>
> **[2:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=150)** When we ask a question like, what's the weather today, in the input sentence, we don't just look at keywords, we look at the meaning.
>
> **[2:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=159)** These models take a sentence and convert it into a dense vector, a list of numbers that capture its meaning.
>
> **[2:47](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=167)** Think of it like creating a unique fingerprint for every sentence.
>
> **[2:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=171)** Now, instead of searching for words, we place these vectors in high-dimensional space.
>
> **[2:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=176)** Imagine a giant 3D map with way more dimensions.
>
> **[3:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=181)** Sentences that mean the same thing end up close together.
>
> **[3:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=186)** So how's the weather right now will be right next to what's the weather today, even though the wording is a bit different.
>
> **[3:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=193)** This is the foundation of how AI understands language at a deeper level.
>
> **[3:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=198)** It's not about matching words, but recognizing meaning, sentiment even.
>
> **[3:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=203)** And that's what makes AI powered search and retrieval so powerful, especially in cybersecurity, where we need to connect the dots in similar areas across logs, policies, and threat reports.
>
> **[3:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=215)** Imagine you're looking at a huge three dimensional map of cybersecurity terms that you see here.
>
> **[3:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=220)** Each sphere on this map represents a vector, a numerical representation of a word or a concept like we see malware in the top left or ransomware in the center, or encryption.
>
> **[3:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=234)** The closer these spheres appear, the more closely related those concepts are in meaning.
>
> **[4:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=240)** So like ransomware are clustered near malware and intrusion detection, because they often appear together in discussions about threat prevention.
>
> **[4:10](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=250)** Meanwhile, terms like encryption and keys grouped together in a different area, reflecting their focus on secure communications, each of these clusters you can think of like a neighborhood of mini concepts.
>
> **[4:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=264)** And when you query one term, the system looks at its vector and easily finds nearby similar terms.
>
> **[4:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=271)** This organization, powered by embeddings and vector storage, can help cybersecurity teams quickly spot related threats and solutions without sifting through countless pages of data or terabytes of logs.
>
> **[4:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=285)** Vector databases.
>
> **[4:47](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=287)** Once those vectors are created, they need a specialized place to live, storage, a database.
>
> **[4:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=294)** Think of it like a digital library that stores meaning based representations rather than simple text.
>
> **[5:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=301)** You can consider it your library stacks of knowledge.
>
> **[5:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=304)** Now, we'll explain vector databases with four big components, efficient storage, which converts sentences or documents into numerical vectors, fast retrieval, which compares vectors at lightning speed, and semantic organization, that's grouping data by meaning and not just keywords.
>
> **[5:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=323)** Lastly, we've got keyword-free matching, finding relevant info even without exact phrases.
>
> **[5:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=330)** This setup and the components of a vector database are huge for cybersecurity, and staying on top of evolving compliance documents.
>
> **[5:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=340)** And examples of vector database out there include Chroma and Pinecone.
>
> **[5:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=346)** Moving on to the last and final piece, the LLM, the knowledgeable librarian.
>
> **[5:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=352)** Once the system retrieves key documents, the LLM merges that info with its own training to provide a clear, coherent response.
>
> **[6:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=361)** Now we'll explain the LLM of turning data into insights.
>
> **[6:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=366)** We want to combine retrieval with understanding to leverage that stored knowledge plus the real time data that is being fed into the vector database.
>
> **[6:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=377)** The LLM takes that retrieved info and integrates it with its pre-trained knowledge for a deeper and contextual response.
>
> **[6:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=385)** That response is hopefully human-like with its output, providing that natural conversational answer, creates coherent context aware answers that feel conversational and are relevant to the user's query.
>
> **[6:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=400)** It's got to be adapting to those complex queries that a human is feeding into the system, and it handles layered questions in compliance, threat detection, or policy analysis.
>
> **[6:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=414)** So let's put all the pieces together and talk about the three, harmoniously, in a process and retrieval workflow.
>
> **[7:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=423)** Now, we'll look at all the components of RAG, how it fits together.
>
> **[7:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=428)** You've got a user prompt or query, which integrates with the sentence embedding model to convert that query into a vector.
>
> **[7:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=437)** Next, the system uses the vector to search that vector database for matching, relevant information.
>
> **[7:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=444)** Once that relevant document is found, they're passed along to the LLM, which blends it with its own learned knowledge to create a coherent, context aware, human-like response.
>
> **[7:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=457)** We've seen this RAG workflow quite a bit, and I want to break it apart and recap some of the components that are in between the big three of the sentence embedding model, the vector database, and the LLM.
>
> **[7:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=471)** And in this end-to-end loop query, we're ensuring you get an accurate and up-to-date insight.
>
> **[7:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=478)** This diagram shows a pipeline in a circular flow.
>
> **[8:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=482)** The user query is encoded by the embedding model, turning it into a numerical vector.
>
> **[8:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=488)** The vector is then sent to the database to find the top matching documents.
>
> **[8:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=492)** Then those documents or data segments return to the LLM.
>
> **[8:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=496)** The LLM synthesize everything into a natural sounding response.
>
> **[8:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=501)** And in practical terms, this means you can ask a nuanced question, like how to comply with a cybersecurity policy, and instantly get targeted, relevant information with a reference back to maybe that policy in your inventory.
>
> **[8:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=516)** Let's take a look at this in action.
>
> **[8:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=519)** In this example, someone's asking, what's CCPA?
>
> **[8:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=523)** The system embeds that question.
>
> **[8:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=525)** It looks for the most relevant pieces of data related to the California Consumer Privacy Act.
>
> **[8:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=530)** The vector database locates documents that mention consumer privacy and California specific policies.
>
> **[8:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=538)** And the LLM then weaves that material into a concise and accurate explanation.
>
> **[9:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=543)** You don't have to dig through dozens of legal documents.
>
> **[9:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=546)** The RAG system quickly surfaces key details like CCPA requirements for data handling or user rights, and presents them in plain language.
>
> **[9:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/core-components-of-rag-systems?u=76281980&t=557)** This is the power of combining semantic search via vectors with generative capabilities of an LLM, making complex compliance inquiries far more efficient to handle.

> [!info]- Semantic Content
>
> **Env Vars:** llm (11), rag (4), ccpa (2), bert (1)
> **Analogies:** think of it like (2), imagine (2), for example (1)
> **Code Keywords:** let (4)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 2. RAG in action

#### Introduce RAGs capabilities for risk and cyber security
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=0)** - [Narrator] In the ever-evolving battlefield of cybersecurity, the threats we face grow more complex every day.
>
> **[0:07](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=7)** Cybersecurity analysts are inundated with massive data sets from live threat intel to compliance requirements, making it harder to separate meaningful insights from the noise.
>
> **[0:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=18)** This is where RAG becomes a game changer.
>
> **[0:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=21)** It bridges the gap between overwhelming information and actionable insights.
>
> **[0:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=26)** Let's take a look at Rag in Action. Welcome to Chapter Two.
>
> **[0:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=30)** You can think of RAG as the next wave of AI, giving us more precise intelligence from those vast data pools.
>
> **[0:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=38)** You'll see how RAG can shift cybersecurity from reactive to proactive.
>
> **[0:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=43)** First off, why should we use RAG instead of standalone LLMs?
>
> **[0:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=48)** Let's recap why LLMs are created, for a second.
>
> **[0:53](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=53)** LLMs are pretty good at everything, but perfect at nothing, and it's because they've scanned the internet to create a model to just reduce average error in its response.
>
> **[1:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=64)** And that's how the model's output is evaluated, on average error.
>
> **[1:11](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=71)** And if we scale models to perform at this accuracy of average error, this means you're not actually perfect, and even your own specific facts.
>
> **[1:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=82)** RAG gets us closer to our perfect, and keeps us grounded with precise retrieval from our own data in the vector database.
>
> **[1:32](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=92)** In our responses, we may want the RAG to get our birthday correct or know our IP address range from our own network.
>
> **[1:41](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=101)** And with this, we ensure we get relevant, custom, and real-time insights without drifting into just the averages.
>
> **[1:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=111)** The agenda for this section is we'll start on a positive note: The good news of AI.
>
> **[1:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=117)** We'll touch on what RAG has to offer, and finish up with the solution, of RAG being a guide and not a full on guard.
>
> **[2:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=128)** So, the good.
>
> **[2:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=129)** In the current state of AI, there's the good, the bad, and the ugly as to how it can integrate and help cybersecurity.
>
> **[2:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=139)** And as an industry that's always saying the sky is falling, or we're definitely going to be hacked, can we just be optimistic here for a minute?
>
> **[2:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=150)** So what can we do with AI?
>
> **[2:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=151)** We've got an information overload.
>
> **[2:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=154)** Cybersecurity professionals face a deluge of threat data.
>
> **[2:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=158)** AI can help us filter out the noise and prioritize to a manageable level.
>
> **[2:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=164)** It can empower analysts, speed up threat response, reduce manual workloads at much more.
>
> **[2:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=170)** And with the 24-by-7 defense need, or follow-the-sun operations, for much of the security operation centers, AI can operate continuously, supporting the human, and can go beyond the regular work hours.
>
> **[3:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=188)** We've also got a talent gap, and with that, some burnout as analysts are overwhelmed overburdened.
>
> **[3:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=196)** So, AI can help mitigate that industry talent shortage and reduce professional burnout by automating some of those routine tasks.
>
> **[3:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=206)** We've got a rising need for experts to combat this rising attack volume.
>
> **[3:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=211)** And I'm going to caveat here that it can't replace the experts, but it can help.
>
> **[3:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=217)** So I propose AI as a guide, not a full-on guard.
>
> **[3:42](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=222)** So full stop. What are the goals?
>
> **[3:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=225)** We need to empower our analysts with the best tools and perform at the highest integrity.
>
> **[3:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=231)** But with those tools, we don't have unlimited resources, and we need to address privacy and operational concerns within our infrastructure.
>
> **[4:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=242)** Where does RAG come into play and what does it have to offer?
>
> **[4:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=246)** Let's look under the hood and explain RAG's offerings.
>
> **[4:11](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=251)** So why RAG? And why RAG versus standalone LLMs?
>
> **[4:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=256)** Well, we've got hallucinations, and they can be authoritative, but entirely fabricated with the responses.
>
> **[4:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=267)** Come up with citations that don't exist.
>
> **[4:32](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=272)** Similarly, with regulations that are fake or facts that are ungrounded.
>
> **[4:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=279)** And with RAG, we've got verifiable sources, and we use that source material to ensure answers are fact-based and verifiable.
>
> **[4:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=288)** With standalone LLMs, we've also got stale data.
>
> **[4:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=292)** It has the lack of ability to reflect recent events, policy updates, emerging threats, new vulnerabilities, and we need to stay on top of that.
>
> **[5:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=303)** We also need to keep our data private.
>
> **[5:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=306)** Security is paramount.
>
> **[5:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=309)** RAG can be configured so that your proprietary data stays behind your own firewall or within a private cloud.
>
> **[5:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=315)** It can be deployed on-prem, air-gapped, in a container and under tight security controls, and with standalone LLMs or an inference model where you're sending data over to another party, that can cause some unease, especially in cybersecurity realms.
>
> **[5:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=335)** So, we propose AI is a guide, not a guard.
>
> **[5:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=339)** RAG is there to inform and advise, not autonomously lock down your systems.
>
> **[5:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=346)** And when implemented correctly, it may be checking your perimeter 24-7, noticing things a single human might miss, but it should always check back in with the human for that final approval.
>
> **[5:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=359)** The ally.
>
> **[6:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=360)** When done right, AI becomes your ally, an extension of your security team that monitors vast amounts of data.
>
> **[6:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=369)** Imagine having an analyst in the Governance, Risk, and Compliance that can recall obscure regulations at a moment's notice.
>
> **[6:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=378)** RAG does this, and it does it without the coffee jitters or post-lunch grogginess.
>
> **[6:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=385)** When deploying, be purpose-driven.
>
> **[6:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=388)** And this means focusing on real-world needs.
>
> **[6:32](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=392)** Start small, and you need to build with a clear goal in mind.
>
> **[6:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=398)** We need to democratize our tools, and even small organizations can use this.
>
> **[6:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=405)** This levels the playing field against a hacker too.
>
> **[6:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=408)** I mean, red teams are using AI, so why not fight fire with fire and integrate into your blue teams?
>
> **[6:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=417)** RAG taps into multiple authoritative sources, pulling in high-quality verified data like moderate attack, NIST, your policies, and even more.
>
> **[7:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=429)** When RAG's integrated into platforms, they can even be chat-oriented.
>
> **[7:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=437)** So leveraging a chat platform like Slack where you can get real time threat alerts, compliance insights, and collaborate with peers about anything.
>
> **[7:29](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=449)** In this upcoming code session we'll show how these pieces fit together.
>
> **[7:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=454)** We'll build and integrate the embedding model.
>
> **[7:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=457)** We'll convert data into vectors.
>
> **[7:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/introduce-rags-capabilities-for-risk-and-cyber-security?u=76281980&t=460)** We'll use a vector database to store and retrieve, and use the LLM to add the intelligence on top of it.

> [!info]- Semantic Content
>
> **Env Vars:** rag (18), nist (1), llm (1)
> **Code Keywords:** let (3), this, (2), private (2), this. (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** caveat (1)
> **Speakers:** - [narrator] (1)

#### Uploading  MITRE ATT&CK techniques to a vector database
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=0)** - [Instructor] Hello.
>
> **[0:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=2)** In this coding session, we're walking through the process of uploading MITRE ATT&CK, Sigma detections and CISA advisory data into Chroma Database, a high performance vector database.
>
> **[0:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=13)** By the end of this session, you'll know how to set up a vector database environment, process data and query it efficiently.
>
> **[0:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=21)** You can follow along with the GitHub repo at 02_02 branch and the markdown file, UseCase1.md in the Chapters 2 folder.
>
> **[0:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=31)** Let's get started.
>
> **[0:33](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=33)** Before we start with the coding, we've got to ensure we've got our packages installed.
>
> **[0:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=38)** We've got to install Chroma DB, pandas and transformers.
>
> **[0:42](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=42)** To do so, call pip and run that install.
>
> **[0:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=46)** Additionally, we want download the data files.
>
> **[0:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=50)** You can do so by going back to the GitHub repo, downloading the mitreembed_master_Chroma CSV and the CISA_combo_features_new CSV and ensure they are loaded in your route directory like so.
>
> **[1:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=68)** We're going to run that with pandas and take a look at the contents to ensure that data was uploaded.
>
> **[1:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=77)** Next up we have our sentence embedding model or the SentenceTransformer.
>
> **[1:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=85)** That is all-MiniLM-L12-v2.
>
> **[1:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=91)** We are setting up our embeddings that we can then upload to Chroma.
>
> **[1:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=98)** Going to run that.
>
> **[1:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=100)** And you may get a pink warning, but it is just a warning.
>
> **[1:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=106)** After our embeddings are ready, we've got our embedding model set up.
>
> **[1:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=111)** We can start with Chroma.
>
> **[1:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=117)** We print out the version of Chroma, 0.5.7, and we assemble the documents, in this case mitre_data with the body column.
>
> **[2:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=133)** We want to persist our vector database to ensure that we can upload more data and append to the vector database.
>
> **[2:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=146)** And to ensure we've got data in Chroma, we do a count and we've got that number of rows of data in the vector database.
>
> **[2:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=156)** Cool, all set up and loaded.
>
> **[2:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=159)** Let's now query Chroma DB for something MITRE-related.
>
> **[2:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=165)** Possibly right here, a remote desktop attack.
>
> **[2:49](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=169)** Ran pretty fast and we got a good response.
>
> **[2:55](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=175)** And the response we get the row that closest-ly aligns to a remote desktop attack.
>
> **[3:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=182)** The metadata of that row and the file path, which includes the technique, and in this case, the technique is remote desktop services, so pretty well aligned.
>
> **[3:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=197)** There are going to be some other bros in the vector database that it calls that are closely related to remote desktop attack and you can go through and check as to what those are.
>
> **[3:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=211)** But ran a pretty good query, got pretty good results.
>
> **[3:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=214)** And if we wanted to examine that vectordb record further, we can take a peek at a random collection.
>
> **[3:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=225)** And this is what it looks like.
>
> **[3:47](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=227)** So the embeddings we see here, those numbers along with a random row, and in this case, a Sigma detection for that random selection.
>
> **[3:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=239)** That's it for uploading, inspecting, and checking Chroma DB and running a query.
>
> **[4:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/uploading-mitre-att-ck-techniques-to-a-vectordatabase?u=76281980&t=246)** Next up, we'll integrate the LLM.

> [!info]- Semantic Content
>
> **Env Vars:** mitre (2), csv (2), att (1), cisa (1), l12 (1)
> **Prerequisites:** set up (3), install (2), before we start (1)
> **Code Keywords:** let (2), case, (2)
> **Exercise Files:** github repo (2), download the (1)
> **Tools:** github (2)
> **Warnings:** warning (2)
> **File Paths:** usecase1.md (1)
> **CLI Commands:** pip (1)

#### Adding the LLM
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=0)** - [Instructor] Welcome to our next coding session on integrating an LLM with Chroma DB and a sentence embedding model.
>
> **[0:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=8)** We'll explore how to build this full pipeline of RAG using the LLM off the shelf, in this case an open source model called WizardLM 13B.
>
> **[0:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=19)** That is from Hugging Face, or if you prefer an API version through OpenAI, we've got you set up and at the end of the session you'll know how to configure and query your cybersecurity data locally and also learn about the option to tap in to OpenAI for additional capabilities.
>
> **[0:41](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=41)** You can download the Wizard LLM model from the link specified within the GitHub repo.
>
> **[0:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=46)** Let's get started.
>
> **[0:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=48)** Let's make sure our environment is set up correctly.
>
> **[0:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=51)** You'll need Python installed along with the following libraries mentioned here.
>
> **[0:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=56)** We'll also download that LLM locally, put it in the root directory, and we've got the other option for OpenAI to hit as API and we'll do that later in this session.
>
> **[1:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=68)** All right, let's load those core libraries.
>
> **[1:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=72)** These will allow us to interface with Chroma DB, create embeddings and utilize our LLM.
>
> **[1:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=78)** We want to do some configurations with the LLM and run that local inference.
>
> **[1:26](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=86)** If you're running on GPUs, you can optimize by allocating the GPU layers, in this case 35.
>
> **[1:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=94)** This will take some time to load, but by saying the context size and the memory optimizations, we can ensure efficient and accurate responses.
>
> **[1:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=103)** Remember, we've got an alternative of OpenAI to swap in instead of this local LLM CPP configuration, and we'll do that in just a bit.
>
> **[1:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=116)** Now that this says loaded, we can move on to integrating LangChain with our LLM and Chroma DB.
>
> **[2:05](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=125)** LangChain is a good middleware.
>
> **[2:07](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=127)** You can consider it to do orchestration for your LLM and you can call the retrieval QA function, which is a RAG function.
>
> **[2:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=140)** This means we can quickly search for the relevant documents that feed context into our LLM.
>
> **[2:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=148)** We're also setting up a template here.
>
> **[2:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=151)** This is just a plain vanilla template for prompting.
>
> **[2:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=154)** We'll get into prompting a little bit later, and we're setting up our retrieval QA function here, calling in the local LLM and getting it ready to launch.
>
> **[2:49](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=169)** Now that we've got QA chain set up, let's prompt it.
>
> **[2:55](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=175)** We're going to ask which MITRE technique aligns to this signature.
>
> **[3:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=180)** A signature, you know, that looks like a security detection.
>
> **[3:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=184)** In this case, we're getting the response pretty quick and it's mapping to FTP, so a good match here on the security detection and a good response.
>
> **[3:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=199)** Here's the metadata on the RAG response.
>
> **[3:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=202)** So we got the LLM response and we can reference a MITRE attack technique and it does a pretty good job of mapping the question with a relevant answer.
>
> **[3:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=217)** So now that we've seen a real world use case, we mapped an alert to a MITRE technique, we correlated that threat intelligence and we improved potential response times for investigations where the host a model locally or rely on OpenAI, you'll see big gains in efficiency all while leveraging a user-friendly QA interface, in this case through a Jupyter Notebook.
>
> **[4:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=243)** Next up, we'll do the alternative integration here of OpenAI LLM with an API key where teams would prefer to manage this option.
>
> **[4:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=254)** We've got GPT models, which offer a cutting edge performance with a API key that you'll have to configure yourself, you know, set up an account and grab that API key unique and add it in where it says key here.
>
> **[4:29](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=269)** Once you've got it set up, your queries work just like they do with the local LLM and except of the heavy lifting done on-prem or in this VPC with the GPUs, it's on OpenAI service.
>
> **[4:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=284)** So it's a great option if you don't have enough local GPU power.
>
> **[4:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=288)** Just prefer a managed solution.
>
> **[4:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=291)** So in this case, we, you know, similarly call in the RAG with a retrieval QAA function and query, you know, what is the MITRE attack technique for remote desktop attacks.
>
> **[5:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=303)** We print out the response and the response is pretty good.
>
> **[5:07](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=307)** The response is the MITRE attack technique for remote desktop attack T1076.
>
> **[5:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=314)** We'll get the similar data and a pretty good response.
>
> **[5:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=321)** So congratulations, you successfully integrated an LLM with Chroma DB and the sentence embedding model to create a RAG pipeline.
>
> **[5:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=331)** We've also showed how to swap in OpenAI for an API query, and letting you pick the the best fit for your organization, whether that's a local deployment for maximum control or a cloud-based API for convenience.
>
> **[5:47](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=347)** By combining the vector storage retrieval chains and a powerful LLM, you're setting the stage for rapid context rich cybersecurity response and context.
>
> **[5:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=359)** Stay tuned for further optimizations and advanced configurations that can make your threat detection response capabilities even more robust.
>
> **[6:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=368)** That concludes our demo on integrating LLMs with Chroma DB and since it's embedding model, I hope this session helped you build your own flexible high performance RAG.
>
> **[6:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=379)** Thanks for joining.
>
> **[6:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/adding-the-llm?u=76281980&t=380)** Look forward to seeing what you can do next.

> [!info]- Semantic Content
>
> **Env Vars:** llm (16), api (7), rag (6), mitre (5), gpu (2)
> **Code Keywords:** let (4), function (4), case, (3), interface (2)
> **Prerequisites:** set up (5), configure (2), you'll need (1)
> **Exercise Files:** template (2), download the (1), github repo (1)
> **CLI Commands:** make (2), python (1)
> **Tools:** github (1), jupyter (1)
> **Definitions:** is a  (2)
> **Cross-References:** later in (1)

#### Case Study: MITRE ATT&CK and RAG in action
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=0)** - [Instructor] Now let's debrief from that coding session.
>
> **[0:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=4)** Further using RAG for mapping MITRE ATT&CK techniques.
>
> **[0:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=9)** This framework outlines adversary tactics and techniques.
>
> **[0:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=14)** And by weaving RAG into it, we can get a massive knowledge base into a speedy ally for threat hunters.
>
> **[0:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=24)** And also context and understanding.
>
> **[0:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=27)** And upskilling for your analyst.
>
> **[0:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=30)** So enter MITRE ATT&CK.
>
> **[0:32](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=32)** A globally accessible knowledge base describing how adversaries operate.
>
> **[0:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=37)** Moving from left to right, at the bottom of the the map here we've got everything from recon all the way to impact.
>
> **[0:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=43)** And a variety of techniques that give context of a particular alert, a security detection, and an understanding for your analyst on what is happening on your network.
>
> **[0:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=59)** And because of this, I created an open source project.
>
> **[1:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=64)** Called MITREembed.
>
> **[1:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=66)** It's an open source project on GitHub.
>
> **[1:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=68)** Available and public, the website there.
>
> **[1:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=73)** And it's a project that bridges that gap between raw data from anomaly detection tools that don't really provide the context or insights that an analyst needs to further investigate.
>
> **[1:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=88)** And that's the essence here.
>
> **[1:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=90)** Turning raw detection signals into defense tactics from MITRE.
>
> **[1:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=97)** So the challenges in threat detection.
>
> **[1:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=100)** High volumes of data, lack of visibility across your tools, and confusion on alerts are common roadblocks for analysts doing their detections.
>
> **[1:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=111)** RAG can help by filtering that signal.
>
> **[1:55](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=115)** And be that noise-canceling headphone.
>
> **[1:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=119)** That you can hear the important announcements.
>
> **[2:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=122)** When you need it.
>
> **[2:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=124)** So the role of RAG here combines that LLM with the vector database of MITRE data.
>
> **[2:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=132)** That you've uploaded for retrieval.
>
> **[2:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=135)** And evidence-based insights.
>
> **[2:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=138)** They can do it here at scale.
>
> **[2:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=140)** So taking a look at the project flow.
>
> **[2:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=143)** We've got data collection.
>
> **[2:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=145)** And you can mix and match the data that you want to UPSERT.
>
> **[2:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=151)** A lot of detections come in YAML or JSON format.
>
> **[2:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=155)** We're going to parse them.
>
> **[2:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=157)** And create a schema that aligns the unstructured data into a structure.
>
> **[2:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=166)** So that it can get results and a better understanding to your LLM from that vector database.
>
> **[2:53](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=173)** The ETL process of extracting, transforming, and loading that data, or the data being the embeddings into the vector database, is what we're talking about here.
>
> **[3:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=182)** And for vector storage, obviously we're leveraging the power of the vector database for.
>
> **[3:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=188)** Retrieval.
>
> **[3:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=189)** The LLM is going to be the last piece that's going to provide that insight.
>
> **[3:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=194)** This is the project flow.
>
> **[3:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=197)** Starting from left to right, we got our data collection.
>
> **[3:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=200)** We can use data like sigma detections, some raw splunk logs, advisories, and MITRE.
>
> **[3:29](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=209)** Do that ETL.
>
> **[3:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=211)** Upload the schema-cleaned data into the vector database.
>
> **[3:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=216)** Integrate your LLM.
>
> **[3:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=218)** And then use it either locally or in the cloud for referencing and getting MITRE techniques mapped to.
>
> **[3:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=228)** Alerts, detections, or logs.
>
> **[3:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=231)** So more on the collection sources, here's some examples.
>
> **[3:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=234)** And in the GitHub repo you can see this in the CSVs.
>
> **[3:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=239)** We have sigma, some logs, snort IDS rules, and some other detection tools of data in the mix.
>
> **[4:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=248)** Here's some of those examples.
>
> **[4:11](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=251)** Sigma, snort, and splunk.
>
> **[4:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=254)** And in this example, and the actual project workflow.
>
> **[4:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=260)** And pipeline, we've got a raw detection.
>
> **[4:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=264)** A splunk rule, if you will, going through the three components.
>
> **[4:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=271)** The sentence-embedding model, the vector database, and the LLM.
>
> **[4:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=274)** And out the end we get a mapping to a MITRE technique.
>
> **[4:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=279)** So why does this matter?
>
> **[4:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=280)** Ultimately, RAG matters because it streamlines threat intel, adapts to different data sources, new feeds that you can integrate.
>
> **[4:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=292)** And ultimately you want to empower your analyst to make faster decision making.
>
> **[4:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=297)** That is smart. With context.
>
> **[5:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=300)** And an understanding.
>
> **[5:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=302)** Further enhancements could include, you know, broader anomaly detection models, or realtime optimization for quicker responses and realtime feeds.
>
> **[5:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=312)** And ultimately we're empowering.
>
> **[5:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=314)** And upleveling our analysts.
>
> **[5:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=318)** And this is how we keep pace with cyber threats.
>
> **[5:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=321)** That never seem to rest.
>
> **[5:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/case-study-mitre-att-ck-and-rag-in-action?u=76281980&t=323)** So, let's move forward and see how we can implement some more concepts of cybersecurity and RAG into your environment.

> [!info]- Semantic Content
>
> **Env Vars:** mitre (7), rag (6), llm (5), att (2), etl (2)
> **Code Keywords:** let (2), this, (1), public (1), for. (1), include, (1)
> **Tools:** github (2)
> **CLI Commands:** make (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


### 3. RAG for GRC

#### Using RAG for GRC automation
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=0)** - [Instructor] Introducing RAG for GRC or governance, risk, and compliance.
>
> **[0:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=6)** Data privacy laws are constantly evolving.
>
> **[0:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=8)** Compliance teams are drowning in regs and each with its own nuances and requirements and always ever changing.
>
> **[0:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=16)** But what if we could use AI to bridge the gap between these complex rules and regulations and practical business decisions?
>
> **[0:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=25)** That's where RAG comes in.
>
> **[0:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=28)** GRC is the backbone of regulatory oversight, whether it's financial institutions ensuring they meet AML rules or anti-money laundering, healthcare aligning to HIPAA or multinational companies navigating GDPR, staying compliant is massive challenge.
>
> **[0:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=48)** Traditionally, compliance teams spend hours manually analyzing regs, laws, acts, and trying to interpret these policies, which then are mapped to internal controls.
>
> **[1:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=60)** This process is very labor intensive, time consuming, and error prone.
>
> **[1:07](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=67)** So now that we know the the challenge, regulations, you're going to differ and even with a single framework, there's ambiguity with frequent updates.
>
> **[1:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=80)** For example, a company operating in both the EU and US might reconcile GDPR, but also have to reconcile CCPA and other sector specific laws to ensure that their own internal policies align.
>
> **[1:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=98)** So without automation, it's impossible to scale.
>
> **[1:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=103)** So with RAG, we can transform GRC.
>
> **[1:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=106)** Unlike traditional AI models that generate responses purely from trained data, RAG is going to retrieve relevant regulatory text, case law or organizational policies before generating an answer.
>
> **[2:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=120)** This means we can get compliance teams to get context aware, level up their knowledge game with evidence backed insights, reducing the risk of misinterpretation.
>
> **[2:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=133)** So in this chapter, we're going to learn how RAG can automate some of these GRC processes, reduce the manual effort, improve accuracy.
>
> **[2:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=142)** We'll talk through a real world use case, leveraging data from the UN to illustrate how RAG enables gap analysis, we'll take a deep dive into enhancing compliance with RAG and do a hands-on breakdown.
>
> **[2:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=158)** So further gap analysis, demonstrating how RAG can compare existing policies internally to external regulations and highlight some gaps.
>
> **[2:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=170)** By the end of this chapter, you'll see how RAG just isn't a tool, it's a game changer for regulatory compliance worldwide.
>
> **[2:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/using-rag-for-grc-automation?u=76281980&t=178)** So let's dive in and explore how RAG can bridge that gap for regulations and turn that gap into reality.

> [!info]- Semantic Content
>
> **Env Vars:** rag (10), grc (4), gdpr (2), aml (1), hipaa (1)
> **Code Keywords:** case, (1), let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Enhancing regulatory compliance with RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=0)** - [Instructor] Welcome over to chapter three, GRC.
>
> **[0:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=4)** In this chapter, we'll talk about the compliance challenge, trying to overcome that with RAG, and overcoming more regulations with less time.
>
> **[0:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=15)** We'll talk about how to RAG with GRC and monitoring that gap analysis for rich insight and taking action and hopefully avoiding fines.
>
> **[0:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=25)** Lastly, we'll talk a variety of use cases, everything from privacy, international law, data protection, and how you can use RAG to help with those use cases.
>
> **[0:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=40)** Let's get into it, the compliance challenge.
>
> **[0:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=43)** We're all aware of this problem and the real headache and all the different laws that are in scope to try and assess, and try and abide by.
>
> **[0:55](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=55)** It's a manual effort, time consuming and inconsistent.
>
> **[1:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=60)** Heavy, heavy resources of manual effort involved.
>
> **[1:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=63)** So let's take a look at a typical SOC 2 timeline.
>
> **[1:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=68)** One of the biggest challenges is time.
>
> **[1:10](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=70)** A SOC 2 audit can take away anywhere from six months to over a year, mainly because how long it takes to do this manual effort of collecting evidence and having the auditors review everything.
>
> **[1:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=82)** But what if we could speed that up with RAG?
>
> **[1:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=84)** You'll see that in this timeline of the little robot as the RAG solution, taking possibly a three- to 12-month evaluation period and doing it in one.
>
> **[1:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=95)** And let's take a step back and understand how the traditional process works.
>
> **[1:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=100)** First, companies spend one to three months just preparing, writing policies, training employees, configuring our security controls, add to stating to that evidence of, we've got these controls in place.
>
> **[1:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=112)** Then they choose to do a SOC 2 audit to prove their controls exist.
>
> **[1:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=116)** But the real challenge in this audit is providing that evidence collection, documenting every process, security control, and a compliance measure.
>
> **[2:05](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=125)** This is where the delay happens, and audits get very expensive.
>
> **[2:10](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=130)** Where RAG can come in and help change the game is instead of waiting months to manually gather and verify that evidence, we can continually pool that evidence, compliance data, mapping it to SOC 2 controls, and generating a self-audit report, red-teaming your audit team, if you will.
>
> **[2:29](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=149)** This means organizations can proactively find and fix gaps in their audits.
>
> **[2:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=155)** What normally takes three to 12 months, with RAG, we cut it down to one.
>
> **[2:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=159)** So what's the result?
>
> **[2:41](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=161)** Faster audits, fewer surprises, and stronger security posture.
>
> **[2:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=166)** Instead of scrambling for compliance once the year, companies stay audit ready year-round.
>
> **[2:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=171)** This is how we can make compliance easier and security better.
>
> **[2:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=176)** A quick use case, and it's a real world use case that I've helped out with, so imagine a gaming company needs to compare two state laws, New Jersey and Connecticut regulations.
>
> **[3:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=188)** Each state has distinct sections on data handling, licensing, and operational security.
>
> **[3:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=195)** By feeding both sets of laws into a RAG system, you can understand, map the policies to the regulations.
>
> **[3:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=204)** So an example like acceptable use of IT infrastructure resource policy, how does that stack up against the state mandates of either Connecticut or New Jersey?
>
> **[3:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=214)** You can get a bullet point summary of where these policies may diverge and generate an automated to-do list for bridging those compliance gaps, even before the regulators come knocking.
>
> **[3:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=226)** Here's an example of the output from a RAG system.
>
> **[3:49](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=229)** Pretty thorough, that to-do list is helpful, and we've got references at the bottom there of both the New Jersey law and the Connecticut law.
>
> **[3:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=238)** So let's continue automating this gap analysis.
>
> **[4:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=242)** In this gaming use case, the company did it, they analyzed 83 policies against six regulatory frameworks, so some more states added into the mix, and they cut their compliance review by 98%.
>
> **[4:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=254)** That's a lot of time, and avoided a potential fine for delayed compliance, another big win.
>
> **[4:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=260)** Another use case here on a global perspective, the UNCTAD dataset, a big one that encompasses a global perspective on privacy cybersecurity law.
>
> **[4:32](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=272)** It tracks data protection laws across 137-plus countries.
>
> **[4:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=277)** And this applies if your business operates in multiple regions or countries, and you can't simply adopt a one size fit all policy.
>
> **[4:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=285)** Some countries require mandatory data localization, and others require just a breach notification within 72 hours.
>
> **[4:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=294)** How do you manage it all?
>
> **[4:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=296)** How do you handle all of those different variety of policies from all those countries that you're operating in?
>
> **[5:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=303)** You're going to overlook some of those local nuances, which can unfortunately result in legal exposure or reputational damage.
>
> **[5:11](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=311)** So how can RAG help?
>
> **[5:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=312)** It can retrieve that exact text for each country's requirement, and instead of rummaging through those legal docs or hiring expensive lawyers, your compliance officer can get a direct highlight reel of those relevant clauses, saving countless hours, and ensuring no corner use case is overlooked.
>
> **[5:31](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=331)** Here's an example of some of that data from the data protection and privacy laws worldwide.
>
> **[5:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=337)** You can see that there's a lot there and a lot to know, especially if you're operating on the world stage with your business.
>
> **[5:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=345)** Moving on to an important topic when it comes to RAG, and a bit advanced but necessary, is prompting.
>
> **[5:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=354)** How do we get powerful results?
>
> **[5:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=356)** Well, it comes from prompting and customizing.
>
> **[5:59](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=359)** We'll see an example of a good prompt, but it's use case by use case.
>
> **[6:05](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=365)** And in this case of GRC, you may want to create a prompt for a particular regulation like HIPAA or one for GDPR or another for a cybersecurity law, NYCRR 500.
>
> **[6:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=379)** The outcome of doing these custom prompts is you get more accurate, domain-specific interpretations and reduce the risk of your non-compliance and essentially getting bad output from the LLM response.
>
> **[6:33](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=393)** So instead of the generic answer, you can get context-relevant suggestions, often with citations directly from that legislation, law, or your internal policy.
>
> **[6:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=406)** Here's an example of prompt engineering for GRC, and we start with prompting it as a governance risk and compliance agent with an objective to always prioritize governance, risk, and compliance, accuracy, and thoroughness, and to be specific.
>
> **[7:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=423)** This prompt ensures that we're going to remain anchored in best practices for GRC, relevant laws that we state, and our own internal policies that we call out in the prompt, like specific policies that may include disc encryption or vulnerability management.
>
> **[7:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=443)** So this is going to act as a special advisor, knowing your internal policies that are upserted into the vector database and be able to provide closer, evidence-backed compliance recommendations.
>
> **[7:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=456)** The future of RAG in GRC, finally, let's look ahead.
>
> **[7:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=460)** We can expand these use cases, be automated, and work with use cases like fraud detection and risk assessment, and continually assess with compliance monitoring.
>
> **[7:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=472)** We also want to integrate with our infrastructure and be able to be flexible and scale and also be secure with potential air-gapped environments for data sovereignty and security with our RAG platforms.
>
> **[8:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=486)** So we got to be ready for tomorrow's changes, too.
>
> **[8:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=489)** Now it's time to roll up our sleeves.
>
> **[8:10](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=490)** We'll walk through a coding session to demonstrate how RAG can perform privacy analysis.
>
> **[8:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=496)** We'll check out laws like GDPR and New Jersey identity theft protection, and you'll see how straightforward it is to ingest these laws into a vector store, craft a good prompt, and generate a thorough gap report that identifies exactly which internal procedures that may need updates or gaps that we need to close.
>
> **[8:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/enhancing-regulatory-compliance-with-rag?u=76281980&t=519)** So let's jump into the details and see RAG in action.

> [!info]- Semantic Content
>
> **Env Vars:** rag (15), grc (6), soc (4), gdpr (2), unctad (1)
> **Code Keywords:** let (6), case, (2), require (2), self (1), continue (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Gap analysis using RAG: A deep dive
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=0)** - [Instructor] Hello everyone, in this coding session, we're going to walk through a GRC Data Protection Country Policy Retrieval System.
>
> **[0:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=9)** A mouthful I know, but this system allows us to efficiently query global data protection laws and retrieve relevant legal frameworks from a lot of countries.
>
> **[0:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=20)** By the end of the session, you'll understand how regulatory compliance can be streamlined using RAG.
>
> **[0:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=25)** So let's get started.
>
> **[0:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=28)** We're going to load the data set containing country-specific data protection laws.
>
> **[0:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=34)** And this data set contains various policies.
>
> **[0:39](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=39)** So let's take a look with this value counts function to understand how the subjects or the countries have the data privacy laws and the rows of those laws per country.
>
> **[0:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=54)** So in this case, Trinidad and Tobago had a pretty lengthy data protection law of 115 rows.
>
> **[1:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=63)** So we can understand and centralize this compliance knowledge all in that vector database.
>
> **[1:10](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=70)** Just with the vector database alone and observing this data, we can help businesses compare regulations across multiple jurisdictions and ensure those organizations stay compliant.
>
> **[1:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=84)** So back to the code, we are going to load our embedding model using the same embedding model we've been using in the last coding sessions.
>
> **[1:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=94)** We're going to process and understand this data and prioritize building the data by loading it into Chroma in that data protection CSV file.
>
> **[1:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=108)** Continue to have a persistent Chroma database in case we want to upload some more data.
>
> **[1:56](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=116)** Check out the count of those stored embeddings in the vector database.
>
> **[2:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=122)** And then let's start querying.
>
> **[2:05](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=125)** So this case, let's take a look at Iceland and their data privacy law, we get a good response.
>
> **[2:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=133)** The first one being Iceland and a row explaining Iceland's data privacy law, a variety of different other parts of the law that come back from the vector database that you can see here.
>
> **[2:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=150)** Now let's integrate the LLM to make the full RAG pipeline and system.
>
> **[2:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=158)** We're going to use that local LLM, the Wizard LM 13 billion tokens, configure our GPU.
>
> **[2:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=166)** And now with this setup, we can ask it questions.
>
> **[2:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=171)** You'll notice here we've got this same vanilla type or prompt, feel free to update that with some of the prompt engineering skills that we talked about earlier in the chapter.
>
> **[3:03](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=183)** Let's set up the LLM, integrate it, and we're good to go with asking example queries.
>
> **[3:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=189)** So let's stay with Iceland and that country, and ask about what is Iceland's data privacy policy.
>
> **[3:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=198)** We're going to get an output here, hopefully explaining the policy and the legal framework for processing personal data.
>
> **[3:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=208)** It'll take some time to load and we get an output protecting individual's privacy rights, and we can take a look at that law from the reference after we get an explanation from the LLM.
>
> **[3:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=224)** That full reference is there and it's good to go.
>
> **[3:48](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=228)** Feel free to try some of these questions out on your own, with these questions ranging from asking about NIST, GDPR, and some subjective questions at the bottom here.
>
> **[4:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=241)** Like which country has the toughest data protection law?
>
> **[4:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=244)** Once you've asked that, assess how well it's doing, maybe go back and try some different prompts and you can ask about different countries.
>
> **[4:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=257)** And let's try loading another country and data set into the mix.
>
> **[4:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=264)** Modify your query to ensure that you've got specific references to data protection laws, and ensuring that you're going to get that direct citation about each country's legislation.
>
> **[4:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=277)** The challenge here of comparing those regulations, you know, maybe two different countries, say Iceland to the US.
>
> **[4:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=284)** In this query, maybe, "Hey, compare Iceland and the US data protection policies."
>
> **[4:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=290)** See what type of result you get.
>
> **[4:53](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=293)** By implementing this RAG for compliance, we can streamline some of those audits, ensure compliance is with the evolving laws, and reduce a lot of that manual research time that goes into the day-to-day of a governance risk and compliance officer.
>
> **[5:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=312)** Hopefully, this system can be expanded with more regulations, some more real-time legal updates of a real-time feed, and possibly adding in dashboards for visualization and tracking gaps.
>
> **[5:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/gap-analysis-using-rag-a-deep-dive?u=76281980&t=327)** Congratulations, you've built a RAG system for governance risk and compliance.

> [!info]- Semantic Content
>
> **Env Vars:** rag (4), llm (4), grc (1), csv (1), gpu (1)
> **Code Keywords:** let (8), case, (2), function (1), continue (1)
> **Cross-References:** in the last (1), we talked about (1), earlier in (1)
> **Prerequisites:** configure (1), setup (1), set up (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced RAG Application

#### Maintaining and scaling RAG systems
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=0)** - [Instructor] Congrats on making it this far.
>
> **[0:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=2)** Now let's go from RAG beginner to RAG novice.
>
> **[0:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=6)** I'll walk you through some of the advanced concepts.
>
> **[0:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=9)** We'll share some lessons learned from real world deployments and explain why these practices truly matter when your goal is to defend an organization's network and data.
>
> **[0:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=20)** I'm coming at this from my experience as a data scientist working in cybersecurity, where the demands of incident response, compliance, stakeholder buy-in meet the reality of building and maintaining AI driven solutions in production.
>
> **[0:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=36)** In my deployment, I've seen a huge difference between basic RAG setups where you dump some data into a vector store and do minimal prompt engineering to advance approaches, the lists you see now that fully consider aspects like system development lifecycle, MLOps, scaling, and focusing on a single domain.
>
> **[0:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=58)** You need to continuously ingest new data, refresh your index, and maintain high performance even as the dataset balloons with fresh intelligence.
>
> **[1:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=68)** On top of that, you're accountable for the system's security posture.
>
> **[1:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=72)** Nobody wants to leak sensitive data or open the door for a prompt injection attack.
>
> **[1:18](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=78)** So incorporate and maintain a secure architecture.
>
> **[1:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=81)** When integrating with large language models, that's a matter of doing it in a secure way.
>
> **[1:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=87)** A lot of us jump to using these big models hosted externally, which may be okay if you anonymize certain fields or tokenize sensitive IP addresses, but if you handle data that absolutely cannot leave your environment, think highly confidential threat intelligence or proprietary code or personal financial data, then an on-prem solution is a much safer approach.
>
> **[1:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=112)** Either way, the primary goal is to make sure that you don't send sensitive raw data off to third party, and your regulators forbid that, and you shouldn't do it, on top of that.
>
> **[2:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=122)** You can also add the prompt template layer that ensures your queries reference the right domain context, such as act as a vulnerability analyst or access relevant CSA advisories, summarize findings for CVE 2024, et cetera.
>
> **[2:20](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=140)** This is a straightforward measure, but trust me, it dramatically cuts down on relevant or incomplete answers.
>
> **[2:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=148)** We've got to maintain and scale this system, so let's talk about the day-to-day maintenance and scaling.
>
> **[2:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=155)** In any real world environment, you need to handle new advisories or logs or vulnerability data and policies, sometimes daily or on the hour, and a robust RAG pipeline is going to need to involve a lot of this.
>
> **[2:51](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=171)** So with data onboarding, you're going to regularly pull in new data, set up that pipeline so you can refresh and renew.
>
> **[2:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=178)** On the embedding front and updates, convert that data into fresh embedding so they're retrievable on performance.
>
> **[3:05](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=185)** If queries get slow or the model starts giving partial or inaccurate answers, investigate quickly.
>
> **[3:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=192)** MLOps, and we'll get into that in a second, and scaling.
>
> **[3:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=195)** Have a strategy.
>
> **[3:16](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=196)** If your data volumes are growing, you might replicate or charge your vector database across multiple nodes, but the biggest challenge here is ensuring everything remains secure and consistent.
>
> **[3:29](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=209)** You don't want half your cluster with old embeddings while the other half is updated.
>
> **[3:33](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=213)** That mismatch can cause some odd and inconsistent answers.
>
> **[3:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=218)** So a big question that comes up regularly, even now, fine-tune, do you do it?
>
> **[3:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=224)** Let me share a practical perspective.
>
> **[3:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=226)** If you have a truly specialized domain, say frequently mentioning Mitre attack IDs, like T1210 or T1078, or you have laws like NYCRR 500 and you're in New York with unique text, fine-tuning can help.
>
> **[4:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=244)** You'll see fewer hallucinations because the model is intimately trained on your domain.
>
> **[4:11](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=251)** However, fine-tuning can be expensive and time consuming.
>
> **[4:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=255)** If your LLM is already decent as a generalist with language tasks, you might get some mileage out of strong prompt engineering.
>
> **[4:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=264)** Plus, having a good RAG pipeline and keeping the domain simple onto one topic can help.
>
> **[4:33](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=273)** But if you want absolute domain fluency, especially for compliance or technical threat intelligence, fine-tuning can push you actually higher by quite a bit.
>
> **[4:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=284)** Switching gears here onto MLOps.
>
> **[4:47](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=287)** This is your DevOps for ML or machine learning, now AI.
>
> **[4:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=292)** This will ensure your stable deployment of your RAG applications, and it extends the concept to manage data pipelines, model updates, version control, and embeddings.
>
> **[5:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=304)** So these are the things that you're going to have to track.
>
> **[5:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=306)** Things like which documents you ingested and when, which model version you used for those embeddings.
>
> **[5:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=312)** How were queries performing?
>
> **[5:15](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=315)** Did they yield good latency?
>
> **[5:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=317)** Did they yield good results?
>
> **[5:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=319)** Do you have a feedback loop, a thumbs up, thumbs down?
>
> **[5:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=322)** Are you testing and validating these scripts?
>
> **[5:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=325)** Automating these tasks with the CI/CD pipeline can help your team detect these issues early, especially when you're moving to a new model version or a new feature in your RAG application.
>
> **[5:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=337)** One real world scenario is, let's say your organization drastically changes its data retention policy.
>
> **[5:42](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=342)** You want to update your RAG pipeline to remove or archive certain data and do it automatically, so you reined the updated documents and then confirm that the queries are no longer returning references to that data, or actually purged.
>
> **[5:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=357)** This is where MLOps or data ops can save time and ensure your compliance, so continually logging, which provides that transparency on what's going on in the backend.
>
> **[6:09](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=369)** Then that can help with your audit and traceability and tracking of certain users' queries, which could potentially throw off your output.
>
> **[6:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=379)** Here's an example of some transparency or logging that you can provide right to the the end user when a query responds back.
>
> **[6:28](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=388)** Some performance, query response time, how many tokens were used, and cost.
>
> **[6:34](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=394)** This is really good practice for end customers or clients or users that are embracing and using the RAG.
>
> **[6:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=403)** So some best practices.
>
> **[6:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=404)** Let's just keep it simple.
>
> **[6:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=406)** For my own lessons of deploying to production, the best way to start, let's focus on one domain or use case.
>
> **[6:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=412)** For instance, if you're a financial institution, maybe you tackle GRC and you target a set of regulations that are coming up or you're being audited on, it's tempting to then switch over domains and use the same RAG architecture and infrastructure and lump in threat intelligence with policy documents and vulnerability scanning, but that can create a massive knowledge base that's hard to maintain.
>
> **[7:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=441)** We've got to simplify.
>
> **[7:22](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=442)** Then scale, also keep the architecture minimal.
>
> **[7:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=447)** Something like a local embedding store with Chroma and some basic prompt engineering is fine for your MVP or your proof of concept.
>
> **[7:37](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=457)** You can always add extra layers like load balancing or advanced caching or more GPUs.
>
> **[7:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=463)** Once you confirm that your use case works, then you can move on.
>
> **[7:49](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=469)** Some additional prompt writing is keep it short, keep it structured, and understand the use case and build on that.
>
> **[7:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=478)** Direct the model to act as a certain expert, a GRC executive that is leveRAGing certain policies that are inserted into the vector database.
>
> **[8:12](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=492)** This structured approach ensures your RAG pipelines retrieve relevant chunks of text from your domain documents, and it's going to be more accurate.
>
> **[8:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=503)** On the security side, this is obviously paramount to consider.
>
> **[8:27](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=507)** You're going to store some embeddings in that vector database, and similarly, how you would defend a database is how you defend a vector database, encryption at rest, in transit, or any specialized module that your vendor is going to use with the vector database.
>
> **[8:46](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=526)** On the transit of your data TLS, you can also add some RBAC, so that's role-based access control, and separate your vector collections by classification levels.
>
> **[8:58](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=538)** Let's say you have public, internal, restricted, or classified.
>
> **[9:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=541)** Each user or service account can then only query certain embeddings and classifications of that data, and you can tag this, these documents with those classifications.
>
> **[9:14](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=554)** This ensures that, for instance, a marketing team user can't stumble onto some cybersecurity data that only the security team or a compliance officer should see.
>
> **[9:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=565)** So putting it all together, if you've got some key themes here, and when you deploy advanced RAG in a cybersecurity context, it's the synergy of engineering, data science, ops, DevOps, MLOps, and just some fundamental InfoSec practices.
>
> **[9:43](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=583)** You want continuous data ingestion, like hooking into your daily threat feed or scanning results.
>
> **[9:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=590)** You also want a robust model that is updated and the embeddings stay current.
>
> **[9:55](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=595)** You want encryption, you want RBAC, you want some guardrails, potentially some user feedback and feedback loops to safeguard your system from the ground up.
>
> **[10:06](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=606)** You're going to want well-tuned prompts, or if necessary, do some fine-tuning to ensure your results are crisp and aligned with the actual words used in the data.
>
> **[10:17](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/maintaining-and-scaling-rag-systems?u=76281980&t=617)** That's going to provide good results for your use cases.

> [!info]- Semantic Content
>
> **Env Vars:** rag (12), grc (2), rbac (2), csa (1), cve (1)
> **Code Keywords:** let (7), yield (2), this. (1), extends (1), throw (1)
> **Analogies:** for instance (2), such as (1)
> **CLI Commands:** make (1), cd (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** leveraging (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** open the (1)

#### Course summary
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=0)** - [Instructor] Wow. We've covered a lot.
>
> **[0:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=2)** From the fundamentals of retrieval augmented generation to its real world applications in cybersecurity and compliance.
>
> **[0:10](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=10)** Let's take a moment to recap what you've learned and more importantly, how you can continue building your skills in ai, data science and cybersecurity.
>
> **[0:19](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=19)** Here are some of the key takeaways.
>
> **[0:21](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=21)** In chapter one, for core components of RAG, you learned how sentence embedding models, vector databases, and large language models work together to power rag systems, making AI retrieval more accurate and context aware.
>
> **[0:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=36)** And RAG in action for cybersecurity, we explored how RAG enhances cybersecurity workflows.
>
> **[0:42](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=42)** From threat detection to compliance automation, while emphasizing that AI is a guide, not a replacement for human analysts.
>
> **[0:50](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=50)** In chapter three, RAG for governance, risk, and compliance, you saw how RAG helps navigate complex regulatory landscapes, automating policy analysis and compliance gap assessments for frameworks like GDPR, NYCRR 500, and more.
>
> **[1:08](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=68)** Lastly, in Advanced RAG and scaling for cybersecurity, we discussed fine tuning MLOps and security best practices to scale RAG systems while maintaining data privacy, role-based access control, and regulatory alignment.
>
> **[1:24](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=84)** So what's next?
>
> **[1:25](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=85)** We keep building our skills, and in this course, it's just the beginning.
>
> **[1:30](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=90)** Now it's time to apply what you've learned and continue honing your expertise in AI and cybersecurity.
>
> **[1:35](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=95)** Here's how you can continue your learning journey.
>
> **[1:38](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=98)** Practice, practice, practice.
>
> **[1:40](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=100)** Try implementing a small scale RAG pipeline, using Python and Jupyter Notebook.
>
> **[1:45](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=105)** Deepen your knowledge and explore LLMs, vector search and MLOps to scale your models.
>
> **[1:52](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=112)** We need to stay updated, in this ever evolving cybersecurity landscape, especially in AI.
>
> **[1:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=117)** So we have to follow the AI security trends, regulatory updates, and advancements in secure RAG architectures.
>
> **[2:05](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-summary?u=76281980&t=125)** Last but not least, connect with the experts, join LinkedIn communities, attend security conferences and data science conferences, and collaborate with professionals in AI security and compliance.

> [!info]- Semantic Content
>
> **Env Vars:** rag (9), gdpr (1), nycrr (1)
> **Code Keywords:** continue (3), let (1)
> **CLI Commands:** python (1)
> **Cross-References:** we discussed (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Course conclusion
> [LinkedIn Learning](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=1)** - Congratulations on completing this course.
>
> **[0:04](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=4)** You've made a great choice in learning how to build your own AI system in this crowded AI vendor space for cybersecurity services.
>
> **[0:13](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=13)** You now have the power to manage your own destiny with your data and how you use AI for cybersecurity defense and compliance.
>
> **[0:23](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=23)** I've shown you how the RAG approach works by combining the strengths of traditional large language models with the ability to dynamically incorporate your own data with cybersecurity AI use cases.
>
> **[0:36](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=36)** Like any cutting edge technology, RAG and AI are evolving rapidly in a very competitive landscape.
>
> **[0:44](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=44)** So stay ahead of the curve by understanding how these technologies work and leveraging AI innovations to strengthen cybersecurity.
>
> **[0:54](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=54)** Connect with me on LinkedIn to keep the conversation going.
>
> **[0:57](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=57)** Let's share insights, challenges, and breakthroughs together.
>
> **[1:02](https://www.linkedin.com/learning/rag-for-cybersecurity-use-cases-and-implementation/course-conclusion?u=76281980&t=62)** Thanks for joining me.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2)
> **Code Keywords:** let (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Leverage AI as a Cybersecurity Analyst]]
← [[Fine-Tuning LLMs for Cybersecurity- Mistral, Llama, AutoTrain, AutoGen, and LLM Agents]] | **7 of 7**

## Appears In

- [[Leverage AI as a Cybersecurity Analyst]]

## Related Courses

_Courses sharing skills:_

- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[AI in Action- Global Case Studies from Public Institutions]] — Artificial Intelligence (AI), Governance,  Risk Management
- [[Responsible AI- Global Risks, Governance, and Human Oversight]] — Artificial Intelligence (AI), Governance,  Risk Management
- [[GraphRAG Essential Training]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)

---

[↑ Back to top](#)